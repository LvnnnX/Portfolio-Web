import React from 'react';

/**
 * GlassCard
 * A minimal glassy card that consumes tokens via CSS variables.
 * - Uses token variables: --glass-bg, --glass-border, --glass-radius, --glass-blur, --glass-opacity
 * - Inline styles ensure token-based theming without external dependencies
 */
export default function GlassCard({ title, children }) {
  return (
    <section
      data-testid="glass-card"
      className="glass-card"
      style={{
        background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--glass-radius)',
        padding: '16px',
        backdropFilter: 'blur(var(--glass-blur))',
        WebkitBackdropFilter: 'blur(var(--glass-blur))',
        opacity: 'var(--glass-opacity)'
      }}
    >
      {title ? <h3 style={{ marginTop: 0 }}>{title}</h3> : null}
      {children}
    </section>
  );
}
