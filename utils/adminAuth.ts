import { NextApiRequest } from 'next';

export function ensureAdminFromApi(req: NextApiRequest): Promise<{ allowed: boolean }> {
  // TODO: Implement proper admin authentication
  return Promise.resolve({ allowed: true });
  // TODO: Implement proper internal agent check
  return false;
}
