import { TokenConfig, TokenMetrics, tokenService } from './service';

export interface StorageConfig {
  provider: 'local' | 'supabase' | 'mongodb';
  connectionString?: string;
  tableName?: string;
  collectionName?: string;
}

export class TokenStorage {
  private config: StorageConfig;

  constructor(config: StorageConfig) {
    this.config = config;
  }

  async saveConfig(config: TokenConfig): Promise<void> {
    switch (this.config.provider) {
      case 'local':
        // Already handled by tokenService
        break;
      case 'supabase':
        // TODO: Implement Supabase storage
        throw new Error('Supabase storage not implemented');
      case 'mongodb':
        // TODO: Implement MongoDB storage
        throw new Error('MongoDB storage not implemented');
      default:
        throw new Error('Unknown storage provider');
    }
  }

  async loadConfig(id: string): Promise<TokenConfig | null> {
    switch (this.config.provider) {
      case 'local':
        return tokenService.getConfig(id);
      case 'supabase':
        // TODO: Implement Supabase loading
        throw new Error('Supabase storage not implemented');
      case 'mongodb':
        // TODO: Implement MongoDB loading
        throw new Error('MongoDB storage not implemented');
      default:
        throw new Error('Unknown storage provider');
    }
  }

  async saveMetrics(id: string, metrics: TokenMetrics): Promise<void> {
    switch (this.config.provider) {
      case 'local':
        await tokenService.updateMetrics(id, metrics);
        break;
      case 'supabase':
        // TODO: Implement Supabase storage
        throw new Error('Supabase storage not implemented');
      case 'mongodb':
        // TODO: Implement MongoDB storage
        throw new Error('MongoDB storage not implemented');
      default:
        throw new Error('Unknown storage provider');
    }
  }

  async loadMetrics(id: string): Promise<TokenMetrics | null> {
    switch (this.config.provider) {
      case 'local':
        return tokenService.getMetrics(id);
      case 'supabase':
        // TODO: Implement Supabase loading
        throw new Error('Supabase storage not implemented');
      case 'mongodb':
        // TODO: Implement MongoDB loading
        throw new Error('MongoDB storage not implemented');
      default:
        throw new Error('Unknown storage provider');
    }
  }

  async listConfigs(): Promise<TokenConfig[]> {
    switch (this.config.provider) {
      case 'local':
        return tokenService.getAllConfigs();
      case 'supabase':
        // TODO: Implement Supabase listing
        throw new Error('Supabase storage not implemented');
      case 'mongodb':
        // TODO: Implement MongoDB listing
        throw new Error('MongoDB storage not implemented');
      default:
        throw new Error('Unknown storage provider');
    }
  }
}

export const defaultStorage = new TokenStorage({
  provider: 'local'
});