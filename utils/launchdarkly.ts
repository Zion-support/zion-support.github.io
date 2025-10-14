import * as LDClient from 'launchdarkly-js-client-sdk';

// LaunchDarkly configuration
const LAUNCHDARKLY_CLIENT_ID = process.env.VITE_LAUNCHDARKLY_CLIENT_ID || 'your-client-id-here';

// User context for LaunchDarkly
const createUserContext = () => {
  return {
    key: 'anonymous-user',
    anonymous: true,
    custom: {
      environment: process.env.NODE_ENV || 'development',
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server',
      timestamp: Date.now()
    }
  };
};

// Initialize LaunchDarkly client
let ldClient: LDClient.LDClient | null = null;

export const initializeLaunchDarkly = async (): Promise<LDClient.LDClient> => {
  if (ldClient) {
    return ldClient;
  }

  try {
    const user = createUserContext();
    
    ldClient = LDClient.initialize(LAUNCHDARKLY_CLIENT_ID, user, {
      bootstrap: 'localStorage',
      streaming: true,
      sendEvents: true,
      offline: false,
      debug: process.env.NODE_ENV === 'development'
    });

    // Wait for client to be ready
    await new Promise<void>((resolve, reject) => {
      if (!ldClient) {
        reject(new Error('Failed to initialize LaunchDarkly client'));
        return;
      }

      ldClient.on('ready', () => {
        console.warn('[LaunchDarkly] LaunchDarkly client initialized');
        resolve();
      });

      ldClient.on('failed', (error) => {
        console.error('[LaunchDarkly] LaunchDarkly client failed to initialize:', error);
        reject(error);
      });

      // Timeout after 5 seconds
      setTimeout(() => {
        if (ldClient && !ldClient.initialized) {
          console.warn('[LaunchDarkly] LaunchDarkly client initialization timeout');
          resolve(); // Resolve anyway to not block the app
        }
      }, 5000);
    });

    return ldClient;
  } catch (error) {
    console.error('[LaunchDarkly] Failed to initialize LaunchDarkly:', error);
    // Return a mock client for development
    return createMockClient();
  }
};

// Get a feature flag value
export const getFeatureFlag = async (flagKey: string, defaultValue: boolean = false): Promise<boolean> => {
  try {
    const client = await initializeLaunchDarkly();
    return client.variation(flagKey, defaultValue);
  } catch (error) {
    console.error(`[LaunchDarkly] Failed to get feature flag ${flagKey}:`, error);
    return defaultValue;
  }
};

// Get a feature flag value with string variation
export const getFeatureFlagString = async (flagKey: string, defaultValue: string = ''): Promise<string> => {
  try {
    const client = await initializeLaunchDarkly();
    return client.variation(flagKey, defaultValue);
  } catch (error) {
    console.error(`[LaunchDarkly] Failed to get feature flag ${flagKey}:`, error);
    return defaultValue;
  }
};

// Get a feature flag value with number variation
export const getFeatureFlagNumber = async (flagKey: string, defaultValue: number = 0): Promise<number> => {
  try {
    const client = await initializeLaunchDarkly();
    return client.variation(flagKey, defaultValue);
  } catch (error) {
    console.error(`[LaunchDarkly] Failed to get feature flag ${flagKey}:`, error);
    return defaultValue;
  }
};

// Track an event
export const trackEvent = async (eventName: string, data?: Record<string, unknown>): Promise<void> => {
  try {
    const client = await initializeLaunchDarkly();
    client.track(eventName, data);
  } catch (error) {
    console.error(`[LaunchDarkly] Failed to track event ${eventName}:`, error);
  }
};

// Identify a user
export const identifyUser = async (userKey: string, userAttributes?: Record<string, unknown>): Promise<void> => {
  try {
    const client = await initializeLaunchDarkly();
    const user = {
      key: userKey,
      ...userAttributes
    };
    client.identify(user);
  } catch (error) {
    console.error(`[LaunchDarkly] Failed to identify user:`, error);
  }
};

// Close the client
export const closeLaunchDarkly = (): void => {
  if (ldClient) {
    ldClient.close();
    ldClient = null;
  }
};

// Mock client for development/fallback
const createMockClient = (): LDClient.LDClient => {
  return {
    variation: (flagKey: string, defaultValue: unknown) => defaultValue,
    variationDetail: (flagKey: string, defaultValue: unknown) => ({
      value: defaultValue,
      variationIndex: null,
      reason: { kind: 'OFF' }
    }),
    allFlags: () => ({}),
    track: (eventName: string, data?: Record<string, unknown>) => {
      console.warn(`[LaunchDarkly Mock] Tracked event: ${eventName}`, data);
    },
    identify: (user: Record<string, unknown>) => {
      console.warn(`[LaunchDarkly Mock] Identified user:`, user);
    },
    alias: (user: Record<string, unknown>, previousUser: Record<string, unknown>) => {
      console.warn(`[LaunchDarkly Mock] Aliased user:`, user, previousUser);
    },
    flush: () => Promise.resolve(),
    close: () => {
      console.warn('[LaunchDarkly Mock] Client closed');
    },
    on: (event: string, callback: (...args: unknown[]) => void) => {
      // Mock event handling
      if (event === 'ready') {
        setTimeout(() => callback(), 100);
      }
    },
    initialized: true,
    waitUntilReady: () => Promise.resolve(),
    waitForInitialization: () => Promise.resolve()
  } as LDClient.LDClient;
};

// Export the client instance
export const getLaunchDarklyClient = (): LDClient.LDClient | null => ldClient;