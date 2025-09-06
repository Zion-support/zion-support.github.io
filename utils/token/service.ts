export interface TokenConfig {
  enabled: boolean;
  maxTokens: number;
  resetInterval: number;
  costPerToken: number;
}

export function getConfig(): TokenConfig {
  return {
    enabled: true,
    maxTokens: 1000,
    resetInterval: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    costPerToken: 0.01
  };
}

export function validateConfig(config: Partial<TokenConfig>): boolean {
  if (config.maxTokens !== undefined && config.maxTokens < 0) return false;
  if (config.resetInterval !== undefined && config.resetInterval < 0) return false;
  if (config.costPerToken !== undefined && config.costPerToken < 0) return false;
  return true;
}