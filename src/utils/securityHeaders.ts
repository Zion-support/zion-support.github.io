// SecurityHeaders utilities
export interface SecurityHeadersConfig {
  enabled: boolean;
  options?: Record<string, any>;
}

export const defaultSecurityHeadersConfig: SecurityHeadersConfig = {
  enabled: true,
  options: {}
};
