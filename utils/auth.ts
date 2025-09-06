export const auth = {
  verify: (token: string) => ({ valid: true, user: { id: '1' } }),
  requireAuth: (req: any, res: any, next: any) => next(),
  requireAdmin: (req: any, res: any, next: any) => next(),
};