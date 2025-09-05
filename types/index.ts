<<<<<<< HEAD
<<<<<<< HEAD
// Type definitions index;
;
export interface ContactInfo {;
  phone:string,;
  email:string,;
  address:string,;
  site:string;
}
;
export interface AnimationState {;
  isLoaded:boolean,;
  hasError:boolean,;
export interface ContactInfo {;
  phone:string,;
  email:string,;
  address:string,;
  site:string;
},;
export interface Service {;
  title:string,;
  description:string,;
  features:string[],;
  href:string,;
  icon:string,;
  color:string;
},;
export interface ServiceCategory {;
  title:string,;
  description:string,;
  count:number,;
  features:string[],;
  href:string,;
  color:string;
},;
export interface SEOProps {;
  title:string,;
  description:string,;
  keywords?:string,;
  canonical?:string,;
  ogImage?:string,;
  noindex?:boolean;
},;
export interface LoadingState {;
  isLoading:boolean,;
  error?:string;
},;
export interface AnimationState {;
  isLoaded:boolean,;
  hasError:boolean;
},;
export interface Service {;
  title:string,;
  description:string,;
  icon:React.ComponentType<{ className?:string }>,;
  color:string,;
  href?:string;
}
;
export interface Feature {;
  icon:React.ComponentType<{ className?:string }>,;
  title:string,;
  description:string,;
  color:string;
}
;
export interface Stat {;
  number:string,;
  label:string,;
  icon:React.ComponentType<{ className?:string }>,;
}
;
export interface FormData {;
  name:string,;
  email:string,;
  company:string,;
  service:string,;
  message:string;
}
;
export interface FormErrors {;
  [key:string]:string;
}
;
export interface NavigationItem {;
  name:string,;
  href:string,;
  icon:React.ComponentType<{ className?:string }>,;
  description:string;
}
;
export interface UpdateItem {;
  title:string,;
  href:string,;
  description:string,;
  date:string;
}
;
export interface SEOProps {;
  title:string,;
  description:string,;
  keywords?:string,;
  image?:string,;
  url?:string,;
  type?:string;
}
=======
export interface ContactInfo {
export interface ContactInfo {;  phone: string;
=======
export interface ContactInfo {;
  phone: string;
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
  email: string;
  address: string;
  site: string;
;
;
export interface Service {;
  title: string;
  description: string;
  features: string[];
  href: string;
  icon: string;
  color: string;
;
;
export interface ServiceCategory {;
  title: string;
  description: string;
  count: number;
  features: string[];
  href: string;
  color: string;
;
;
export interface SEOProps {;
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
<<<<<<< HEAD
  noindex?: boolean;}

export interface LoadingState {_isLoading: boolean;
  error?: string;}

export interface AnimationState {
  isLoaded: boolean;
  hasError: boolean;}
export interface AnimationState {_isLoaded: boolean;
  hasError: boolean;}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
  noindex?: boolean;
;
;
export interface LoadingState {;
  isLoading: boolean;
  error?: string;
;
;
export interface AnimationState {;
  isLoaded: boolean;
  hasError: boolean;
;
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
