import { TokenConfig, updateConfig, getConfig } from './service';

export const tokenStore = {
  getConfig,
  setConfig: updateConfig
};