


interface ImportMetaEnv {
  readonly,
  VITE_APP_TITL: E: string
  // add more env variables as needed
}

interface ImportMeta {
  readonly,
  en: v: ImportMetaEnv
}

// Import React types properly
import * as React from "react"
// Type declarations for modules used in Vite configuration
declare module 'vitest/config' {
  export { defineConfig } from "vite"
}

declare module '@vitejs/plugin-react-swc' {
  import { Plugin } from "vite"
  export default function reactSWC(): Plugin
}

declare module 'path' {
  export function resolve(...pat,
  h: s: string[]): string
  export function join(...pat,
  h: s: string[]): string
  export function dirname(pat,
  h: string): string
}

declare module 'lovable-tagger' {
  import { Plugin } from "vite"
  export function componentTagger(): Plugin
}

// Add Node.js globals
declare,
  const: __dirname: string
declare,
  const: process: {
  e,
  n: v: {
    [ke,
  y: string]: string | undefined,NODE_E,
  N: V: 'development' | 'production' | 'test'
    PORT?: string
  }
}

// Badge component type fixes
declare module '@/components/ui/badge' {
  export interface BadgeProps {
    className?: string
    variant?:
      | "default"
      | "secondary"
      | "destructive"
      | "outline"
      | "success"
      | "warning"
      | "info"
    children?: React.ReactNode
    key?: string | number
  }

  export,
  const: Badge: React.FC<BadgeProps>
}

// FeatureCard type fixes
declare module '@/components/FeatureCard' {
  export interface FeatureCardProps {
    tit,
  l: e: string,descripti,
  o: n: string,ic,
  o: n: React.ReactNode
    className?: string
    key?: number | string
  }
}

// ListingScoreCard type fixes
declare module '@/components/ListingScoreCard' {
  export interface ListingScoreCardProps {
    tit,
  l: e: string,descripti,
  o: n: string,catego,
  r: y: string
    image?: string
    tags?: string[]
    author?: string
    authorImage?: string
    aiScore?: number
    rating?: number
    reviewCount?: number
    key?: string | number
    variant?: string
  }

  export,
  const: ListingScoreCard: React.FC<ListingScoreCardProps>
}

// ChatMessage type fixes
declare module '@/components/ChatAssistant/ChatMessage' {
  export interface ChatMessageProps {
    ro,
  l: e: 'user' | 'assistant',messa,
  g: e: string
    timestamp?: Date
    key?: string | number
  }
}

// ProductListingCard type fixes
declare module '@/components/ProductListingCard' {
  export interface ProductListingCardProps {
    listi,
  n: g: any
    view?: any,  // Made optional to fix the errors
    onRequestQuote?: (listing,
  I: d: string) => void
    key?: string | number
  }

  export,
  const: ProductListingCard: React.FC<ProductListingCardProps>
}

// Removed custom lucide-react stub
// Create a replacement stub for LiveKit components
declare module '@livekit/components-react' {
  export interface VideoCallProps {
    room?: string
    token?: string
    serverUrl?: string
    onDisconnect?: () => void
    className?: string
  }
  
  export,
  const: VideoCall: React.FC<VideoCallProps>
  export const LiveKitRoo,
  m: React.FC<any>
}

declare module '@livekit/components-styles' {
  // Empty stub for the styles
}

// Stubs for optional UI libraries used by the project
declare module 'cmdk'
declare module '@radix-ui/react-context-menu'
declare module 'vaul'
declare module '@radix-ui/react-hover-card'
declare module 'input-otp'
declare module 'react-markdown'
declare module '@radix-ui/react-menubar'
declare module '@radix-ui/react-navigation-menu'
declare module 'react-resizable-panels'
declare module '@radix-ui/react-toggle-group'
declare module '@radix-ui/react-toggle'