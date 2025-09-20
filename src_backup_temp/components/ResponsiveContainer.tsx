import React from 'react',
interface ResponsiveContainerProps {,
  "children": React.ReactNode,
  className?: string,
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full',
  padding?: 'none' | 'sm' | 'md' | 'lg'
}
export function ResponsiveContainer({,
  children,
  className = ",
  maxWidth = 'xl',
  padding = 'md'
}: ResponsiveContainerProps) {,
  const maxWidthClasses = {,
    "sm": 'max-w-sm',
    "md": 'max-w-md',
    "lg": 'max-w-lg',
    "xl": 'max-w-7xl2xl': 'max-w-8xl',
    "full": 'max-w-full'
  },
  const paddingClasses = {,
    "none": ",
    "sm": 'px-2 sm: px-4',
    "md": 'px-4 sm:px-6 lg:px-8',
    "lg": 'px-6 sm: px-8 lg:px-12'},
  const containerClasses = ['mx-auto',
    maxWidthClasses[maxWidth],
    paddingClasses[padding],
    className
  ].join(' '),
  return (,
    <div className={containerClasses}>,
      {children}
    </div>,
  ),
}
import React from 'react', interface ResponsiveContainerProps { children: React.ReactNode, className?: string, maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full', padding?: 'none' | 'sm' | 'md' | 'lg'} export function ResponsiveContainer({ children,className = ",maxWidth = 'xl',padding = 'md' }: ResponsiveContainerProps) { const maxWidthClasses = { sm: 'max-w-sm',md: 'max-w-md',lg: 'max-w-lg',xl: 'max-w-7xl2xl': 'max-w-8xl',full: 'max-w-full' }, const paddingClasses = { none: ",sm: 'px-2 sm:px-4',md: 'px-4 sm:px-6 lg:px-8',lg: 'px-6 sm:px-8 lg:px-12' }, const containerClasses = [ 'mx-auto',maxWidthClasses[maxWidth],paddingClasses[padding],className ].join(' '), return ( <div className={containerClasses}> {children} </div> )}
,