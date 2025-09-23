export type ServiceVariant = {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  category?: string;
  tags?: string[];
};

export type ServiceCategory = {
  id: string;
  name: string;
  description: string;
  services: ServiceVariant[];
};

export type PricingTier = {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  cta?: string;
};