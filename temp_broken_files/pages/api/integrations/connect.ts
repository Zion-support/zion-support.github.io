 const connection: ProviderConnection = {
  providerId: providerId as any, status: 'connected', accessToken: 'mock access token', refreshToken: 'mock refresh token', expiresAt: now + 1000 * 60 * 60, connectedAt: now, syncRules: syncRules || {
  
};
lastSyncAt: undefined;
}