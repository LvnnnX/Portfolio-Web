import React from 'react';

/**
 * GlassModal
 * Lightweight glassy modal overlay that respects design tokens via CSS variables.
 */
export default function GlassModal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div data-testid="glass-modal" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0,0,0,0.35)',
      zIndex: 1000
    }}>
      <div data-testid="glass-modal-panel" style={{
        background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--glass-radius)',
        padding: '16px',
        minWidth: '320px',
        backdropFilter: 'blur(var(--glass-blur))',
        WebkitBackdropFilter: 'blur(var(--glass-blur))',
        opacity: 'var(--glass-opacity)'
      }}>
        <button onClick={onClose} aria-label="Close" style={{ float: 'right' }}>Close</button>
        {title ? <h3 style={{ marginTop: 0 }}>{title}</h3> : null}
        {children}
      </div>
    </div>
  );
}
