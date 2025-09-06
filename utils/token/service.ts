export interface TokenConfig {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: number;
  maxSupply?: number;
  description: string;
  imageUrl?: string;
  website?: string;
  whitepaper?: string;
  socials?: {
    twitter?: string;
    discord?: string;
    telegram?: string;
  };
  features: string[];
  useCases: string[];
  distribution: {
    public: number;
    team: number;
    advisors: number;
    treasury: number;
    partnerships: number;
  };
  vesting: {
    team: number; // months
    advisors: number; // months
  };
  status: 'draft' | 'active' | 'paused' | 'completed';
  createdAt: string;
  updatedAt: string;
}

export interface TokenMetrics {
  price: number;
  marketCap: number;
  volume24h: number;
  holders: number;
  transactions24h: number;
  liquidity: number;
  staking: {
    totalStaked: number;
    apy: number;
    validators: number;
  };
}

export class TokenService {
  private configs: TokenConfig[] = [];
  private metrics: Map<string, TokenMetrics> = new Map();

  async createConfig(config: Omit<TokenConfig, 'id' | 'createdAt' | 'updatedAt'>): Promise<TokenConfig> {
    const newConfig: TokenConfig = {
      ...config,
      id: `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    this.configs.push(newConfig);
    return newConfig;
  }

  async getConfig(id: string): Promise<TokenConfig | null> {
    return this.configs.find(config => config.id === id) || null;
  }

  async getAllConfigs(): Promise<TokenConfig[]> {
    return [...this.configs];
  }

  async updateConfig(id: string, updates: Partial<TokenConfig>): Promise<TokenConfig | null> {
    const configIndex = this.configs.findIndex(config => config.id === id);
    if (configIndex === -1) return null;
    
    this.configs[configIndex] = { 
      ...this.configs[configIndex], 
      ...updates, 
      updatedAt: new Date().toISOString() 
    };
    
    return this.configs[configIndex];
  }

  async deleteConfig(id: string): Promise<boolean> {
    const configIndex = this.configs.findIndex(config => config.id === id);
    if (configIndex === -1) return false;
    
    this.configs.splice(configIndex, 1);
    this.metrics.delete(id);
    return true;
  }

  async updateMetrics(id: string, metrics: TokenMetrics): Promise<void> {
    this.metrics.set(id, metrics);
  }

  async getMetrics(id: string): Promise<TokenMetrics | null> {
    return this.metrics.get(id) || null;
  }

  async getAllMetrics(): Promise<Map<string, TokenMetrics>> {
    return new Map(this.metrics);
  }
}

export const tokenService = new TokenService();