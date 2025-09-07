export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export interface DeployConfig {
  instanceName: string;
  governanceMode: string;
  tokenActivation: boolean;
  modules: {
    token: boolean;
  };
}

export function generateDeployConfig(input: DeployConfig) {
  const instanceSlug = toSlug(input.instanceName);
  
  return {
    instanceSlug,
    treasury: `${instanceSlug}-treasury`,
    governanceMode: input.governanceMode,
    quorum: 0.6,
    votingPeriodDays: 7,
    constitutionDoc: '/constitution',
    createdAt: new Date().toISOString(),
    token: {
      symbol: 'ZION$',
      decimals: 18,
      enabled: input.tokenActivation,
      stakingEnabled: input.modules.token,
      escrowEnabled: true,
      createdAt: new Date().toISOString()
    },
    roadmap: '# Public Roadmap\n\n- Q1: Launch core modules\n- Q2: DAO consolidation\n- Q3: Nation builder\n',
    summitEvent: {
      name: `${input.instanceName} Summit`,
      route: '/summit',
      scheduledAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    },
    pagesActivation: {
      activate: [
        '/about',
        '/manifesto',
        '/constitution',
        '/partners',
        '/academy',
        '/marketplace',
        '/dao',
        '/nation'
      ]
    }
  };
}