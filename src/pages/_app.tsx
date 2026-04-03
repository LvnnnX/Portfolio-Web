import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.css';
import { initTheme } from '../lib/theme-manager';

export default function MyApp({ Component, pageProps }: AppProps) {
  // Initialize global theming on client after hydration
  useEffect(() => {
    initTheme();
  }, []);

  return <Component {...pageProps} />;
}
