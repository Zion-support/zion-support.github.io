export const moderationDb = {
  getFlag: (id: string) => ({ id, status: 'pending' }),
  updateFlag: (id: string, data: any) => ({ id, ...data }),
  deleteFlag: (id: string) => ({ deleted: true }),
};