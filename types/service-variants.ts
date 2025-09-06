export type ServiceVariant = 
  | 'default'
  | 'holographic'
  | 'quantum'
  | 'cyberpunk'
  | 'neural'
  | 'quantum-holographic'
  | 'quantum-advanced'
  | 'quantum-cyberpunk'
  | 'neural-holographic'
  | 'cyberpunk-neural'
  | 'advanced'
  | 'premium'
  | 'enterprise'
  | 'custom';

export interface ServiceVariantConfig {
  name: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
  };
  popular?: boolean;
  recommended?: boolean;
}