// Cn utilities
export interface CnConfig {
  enabled: boolean;
  options?: Record<string, any>;
}

export const defaultCnConfig: CnConfig = {
  enabled: true,
  options: {}
};
