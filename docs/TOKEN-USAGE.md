Glassy Tokens — usage guide

- Token definitions (core)
  - --glass-bg: translucent background for glass surfaces
  - --glass-border: border color for glass surfaces
  - --glass-text: text color on glass surfaces
  - --glass-subtext: secondary text color
  - --glass-accent: accent color used for emphasis
  - --glass-shadow: elevation shadow value
  - --radius-glass: corner radius for glass surfaces
  - --glass-blur: backdrop blur amount (px)

- Theming
  - Light theme tokens should achieve a bright but translucent surface (e.g., --glass-bg: rgba(255,255,255,.12))
  - Dark theme tokens should preserve readability (e.g., --glass-text: #e8e8e8; --glass-border: rgba(255,255,255,.25))
  - Theme switch should toggle a root data-theme attribute or class and swap token values accordingly

- Usage patterns
  - Card surfaces
    - background: var(--glass-bg)
    - border: 1px solid var(--glass-border)
    - color: var(--glass-text)
    - backdrop-filter: blur(var(--glass-blur))
  - Buttons
    - background uses translucent gradient, plus backdrop-filter for depth
    - border: var(--glass-border)

- Migration notes
  - Introduce tokens in root: --glass-bg, --glass-border, etc.
  - Replace solid background surfaces with glass variants where appropriate
  - Add blur and verify across browsers; ensure accessibility
  - Create light/dark theme variants and swap via root theme class

- Accessibility considerations
  - Ensure sufficient contrast for text on glass surfaces
  - Prefer prefers-contrast and provide a non-blurred fallback if user requests reduced motion or contrast adjustments
