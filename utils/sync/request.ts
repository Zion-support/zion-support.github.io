// Sync request utilities
export const createSyncRequest = (data: any): any => {
  return {
    data,
    timestamp: Date.now(),
    type: 'sync'
  };
};

export const processSyncRequest = (request: any): any => {
  return request.data;
};