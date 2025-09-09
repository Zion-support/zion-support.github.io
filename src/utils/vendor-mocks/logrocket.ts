type LogRocketInitOptions = Record<string, unknown>;

const LogRocket = {
  init: (_appId?: string, _options?: LogRocketInitOptions) => {
    return undefined;
  },
  identify: (_userId?: string, _userInfo?: Record<string, unknown>) => {
    return undefined;
  },
  track: (_eventName?: string, _properties?: Record<string, unknown>) => {
    return undefined;
  },
  getSessionURL: (callback?: (url: string) => void) => {
    if (typeof callback === 'function') callback('');
  },
} as const;

export default LogRocket;
