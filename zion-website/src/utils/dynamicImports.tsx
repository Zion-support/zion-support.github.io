import React from 'react'
import { ComponentType } from 'react'
// Dynamic import wrapper for performance optimization: export const dynamicImport = <T extends ComponentType<any>>(
  importFunction: () => Promise<{ default: T }>) => {return React.lazy(() => importFunction())}
// Usage example: 
// const HeavyComponent = dynamicImport(() => import('./HeavyComponent'))