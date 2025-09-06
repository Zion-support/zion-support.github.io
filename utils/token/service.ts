export interface TokenConfig {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: number;
  maxSupply?: number;
  description: string;
  iconUrl?: string;
  website?: string;
  whitepaper?: string;
  socials?: {
    twitter?: string;
    discord?: string;
    telegram?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface TokenIssue {
  id: string;
  tokenId: string;
  recipient: string;
  amount: number;
  reason: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  createdAt: string;
  processedAt?: string;
  adminNotes?: string;
}

// In-memory storage for development
const tokenConfigs: TokenConfig[] = [];
const tokenIssues: TokenIssue[] = [];

export async function createTokenConfig(config: Omit<TokenConfig, 'id' | 'createdAt' | 'updatedAt'>): Promise<TokenConfig> {
  const tokenConfig: TokenConfig = {
    ...config,
    id: `token-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  tokenConfigs.push(tokenConfig);
  return tokenConfig;
}

export async function getTokenConfigs(): Promise<TokenConfig[]> {
  return [...tokenConfigs];
}

export async function getTokenConfigById(id: string): Promise<TokenConfig | null> {
  return tokenConfigs.find(config => config.id === id) || null;
}

export async function updateTokenConfig(id: string, updates: Partial<TokenConfig>): Promise<TokenConfig | null> {
  const configIndex = tokenConfigs.findIndex(config => config.id === id);
  if (configIndex === -1) return null;
  
  tokenConfigs[configIndex] = {
    ...tokenConfigs[configIndex],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  return tokenConfigs[configIndex];
}

export async function deleteTokenConfig(id: string): Promise<boolean> {
  const configIndex = tokenConfigs.findIndex(config => config.id === id);
  if (configIndex === -1) return false;
  
  tokenConfigs.splice(configIndex, 1);
  return true;
}

export async function createTokenIssue(issue: Omit<TokenIssue, 'id' | 'createdAt'>): Promise<TokenIssue> {
  const tokenIssue: TokenIssue = {
    ...issue,
    id: `issue-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString()
  };
  
  tokenIssues.push(tokenIssue);
  return tokenIssue;
}

export async function getTokenIssues(): Promise<TokenIssue[]> {
  return [...tokenIssues];
}

export async function getTokenIssueById(id: string): Promise<TokenIssue | null> {
  return tokenIssues.find(issue => issue.id === id) || null;
}

export async function updateTokenIssue(id: string, updates: Partial<TokenIssue>): Promise<TokenIssue | null> {
  const issueIndex = tokenIssues.findIndex(issue => issue.id === id);
  if (issueIndex === -1) return null;
  
  tokenIssues[issueIndex] = {
    ...tokenIssues[issueIndex],
    ...updates,
    processedAt: updates.status === 'completed' ? new Date().toISOString() : tokenIssues[issueIndex].processedAt
  };
  
  return tokenIssues[issueIndex];
}