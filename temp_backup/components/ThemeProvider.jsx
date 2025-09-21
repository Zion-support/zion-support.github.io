"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
// ThemeProviderProps type removed for JavaScript compatibility

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}