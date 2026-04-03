import React from 'react';

type GlassProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  // Optional content label for accessibility
  ariaLabel?: string;
};

/**
 * Glass surface primitive
 * - Uses existing global glass styling for consistent look
 * - Accepts arbitrary HTML div attributes
 * - Accessible region with optional aria-label
 */
export const Glass: React.FC<GlassProps> = ({ children, className = '', ariaLabel, ...rest }) => {
  // If an ariaLabel is provided, set it as aria-label for accessibility
  const ariaProps = ariaLabel ? { 'aria-label': ariaLabel } : {};
  return React.createElement(
    'div',
    Object.assign({ className: `glass ${className}`.trim() }, ariaProps, rest),
    children
  );
};

export default Glass;
