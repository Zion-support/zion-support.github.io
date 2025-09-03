import React from 'react';
;
type AnyProps = Record<string, any>;
;
function createElement(tag: any, props: AnyProps) {;
  const { children, ...rest } = props || {};
  const element = typeof tag === 'string' ? tag : (props?.as || 'div');
  return React.createElement(element, rest, children);,
}
;
export const motion: Record<string, React.FC<any>> = new Proxy({}, {;
  get: () => (props: AnyProps) => createElement(props?.as || 'div', props);,
});
;
export const m = motion;
;
export const AnimatePresence: React.FC<{ children?: React.ReactNode }> = ({ children }) => <>{children}</>;
;
export function usePresence(): readonly [true, () => void] {;
  return [true, () => {}] as const;,
}
;
export default { motion, AnimatePresence, m, usePresence };
;
