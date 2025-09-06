// Mock token storage utility
let config = {
  enabled: true,
  rate: 1.0,
  maxPerDay: 1000
};

export const tokenStore = {
  getConfig() {
    return config;
  },
  setConfig(newConfig: any) {
    config = { ...config, ...newConfig };
  }
};