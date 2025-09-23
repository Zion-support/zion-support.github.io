export type PricingTier = {
  id: string;
  name: string;
  priceLabel: string;
  features: string[];
};

export const PRICING_TIERS: PricingTier[] = [
  { id: 'basic', name: 'Basic', priceLabel: '$', features: ['Email support', 'Standard SLA'] },
  { id: 'pro', name: 'Pro', priceLabel: '$$', features: ['Priority support', 'Enhanced SLA'] },
  { id: 'enterprise', name: 'Enterprise', priceLabel: '$$$', features: ['Dedicated manager', 'Custom SLA'] },
];

export type AdvancedService = {
  id: string;
  title: string;
  category: string;
  pricingTier: PricingTier['id'];
  description: string;
  link?: string;
};

export const ADVANCED_SERVICES: AdvancedService[] = [
  {
    id: 'ai-business-intelligence',
    title: 'AI Business Intelligence',
    category: 'AI Services',
    pricingTier: 'pro',
    description: 'On-brand AI content and analytics to empower decision-making.',
    link: '/services/ai-business-intelligence',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    category: 'IT Services',
    pricingTier: 'enterprise',
    description: 'Infrastructure automation and cloud strategy for scale and reliability.',
    link: '/services/cloud-devops',
  },
  {
    id: 'ai-compliance-copilot',
    title: 'AI Compliance Copilot',
    category: 'Security',
    pricingTier: 'enterprise',
    description: 'SOC2/ISO evidence automation and compliance workflows.',
    link: '/services/ai-compliance-copilot',
  },
];

export const SERVICE_CATEGORIES = ['AI Services', 'IT Services', 'Security'];

