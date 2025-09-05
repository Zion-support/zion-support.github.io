export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  site: string;
}

export interface AnimationState {
  isLoaded: boolean;
  hasError: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  features: string[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  services: Service[];
}