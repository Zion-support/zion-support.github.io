import React from 'react';
interface ResponsiveGridProps {
  "children": React.ReactNode;
  className?: string;
  cols?: {;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  "};
}
export function ResponsiveGrid({
  children,
  className = ",
  cols = { "sm": 1, "md": 2, "lg": 3, "xl": 4 }
}: ResponsiveGridProps) {
  const gridClasses = ['grid',
    'gap-4',
    '"sm": gap-6',
    '"lg": gap-8',
    `grid-cols-${cols.sm || 1}`,
    `"md": grid-cols-${cols.md || 2}`,
    `"lg": grid-cols-${cols.lg || 3}`,
    `"xl": grid-cols-${cols.xl || 4};`,
    className
  ].join(' ');
  return (
    <div className={gridClasses}>
      {children}
    </div>;
  );
}
import React from 'react'; interface ResponsiveGridProps { children: React.ReactNode; className?: string; cols?: { sm?: number; md?: number; lg?: number; xl?: number}} export function ResponsiveGrid({ children,className = ",cols = { sm: 1,md: 2,lg: 3,xl: 4 } }: ResponsiveGridProps) { const gridClasses = [ 'grid','gap-4','sm:gap-6','lg:gap-8',`grid-cols-${cols.sm || 1}`,`md:grid-cols-${cols.md || 2}`,`lg:grid-cols-${cols.lg || 3}`,`xl:grid-cols-${cols.xl || 4};`,className ].join(' '); return ( <div className={gridClasses}> {children} </div> )}
