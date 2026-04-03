import React, { useEffect, useState } from 'react';
import { getCurrentTheme, initTheme, toggleTheme } from '../lib/theme-manager';

// A small accessible toggle to switch between light and dark themes.
// It delegates theme state management to ThemeManager and persists via localStorage.
const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<string>("light");

  // Initialize theme on mount
  useEffect(() => {
    const current = getCurrentTheme();
    // Ensure root attribute tracks current theme
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.setAttribute('data-theme', current);
    }
    // Initialize ThemeManager (no params)
    initTheme();
    setTheme(current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggle = () => {
    // Let ThemeManager perform the toggle and then refresh local state
    toggleTheme();
    const updated = getCurrentTheme();
    setTheme(updated);
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.setAttribute('data-theme', updated);
    }
  };

  const ariaLabel = `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`;

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={handleToggle}
      title="Toggle color theme"
      style={{ margin: '0 8px' }}
    >
      {theme === 'dark' ? '🌙' : '☀️'} {theme.charAt(0).toUpperCase() + theme.slice(1)}
    </button>
  );
};

export default ThemeToggle;
