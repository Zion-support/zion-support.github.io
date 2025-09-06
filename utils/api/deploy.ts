export interface DeployConfig {
  instanceName: string;
  governanceMode: string;
  tokenActivation: boolean;
  modules: {
    token: boolean;
    [key: string]: boolean;
  };
}

export interface DeployResult {
  success: boolean;
  instanceId: string;
  configPath: string;
  message?: string;
}

export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function deployInstance(config: DeployConfig): Promise<DeployResult> {
  try {
    const instanceSlug = toSlug(config.instanceName);
    const instanceId = `${instanceSlug}-${Date.now()}`;
    
    // Mock deployment logic
    const result: DeployResult = {
      success: true,
      instanceId,
      configPath: `/configs/${instanceId}.json`,
      message: 'Instance deployed successfully'
    };
    
    return result;
  } catch (error) {
    return {
      success: false,
      instanceId: '',
      configPath: '',
      message: error instanceof Error ? error.message : 'Deployment failed'
    };
  }
}