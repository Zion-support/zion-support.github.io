// Sync response utilities
export const createSyncResponse = (data: any): any => {
  return {
    data,
    timestamp: Date.now(),
    status: 'success'
  };
};

export const processSyncResponse = (response: any): any => {
  return response.data;
};