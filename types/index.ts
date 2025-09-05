// Type definitions index

export interface ContactInfo {
  phone: string,
  email: string,
  address: string,
  site: string
}

export interface AnimationState {
  isLoaded: boolean,
  hasError: boolean,
export interface ContactInfo {
  phone: string,
  email: string,
  address: string,
  site: string
},
export interface Service {
  title: string,
  description: string,
  features: string[],
  href: string,
  icon: string,
  color: string
},
export interface ServiceCategory {
  title: string,
  description: string,
  count: number,
  features: string[],
  href: string,
  color: string
},
export interface SEOProps {
  title: string,
  description: string,
  keywords?: string,
  canonical?: string,
  ogImage?: string,
  noindex?: boolean
},
export interface LoadingState {
  isLoading: boolean,
  error?: string
},
export interface AnimationState {
  isLoaded: boolean,
  hasError: boolean
},
export interface Service {
  title: string,
  description: string,
  icon: React.ComponentType<{ className?: string }>,
  color: string,
  href?: string
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>,
  title: string,
  description: string,
  color: string
}

export interface Stat {
  number: string,
  label: string,
  icon: React.ComponentType<{ className?: string }>,
}

export interface FormData {
  name: string,
  email: string,
  company: string,
  service: string,
  message: string
}

export interface FormErrors {
  [key: string]: string
}

export interface NavigationItem {
  name: string,
  href: string,
  icon: React.ComponentType<{ className?: string }>,
  description: string
}

export interface UpdateItem {
  title: string,
  href: string,
  description: string,
  date: string
}

export interface SEOProps {
  title: string,
  description: string,
  keywords?: string,
  image?: string,
  url?: string,
  type?: string
}
