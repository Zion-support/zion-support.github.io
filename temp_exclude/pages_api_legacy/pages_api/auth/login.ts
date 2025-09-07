
import { ensureDemoUsers, generateUser, setUserCookie, upsertUser } from '../../../utils/auth',;
import { UserRole } from '../../../utils/messaging/types',;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { name, role } = req.body as { name: string, role: UserRole},
  if (!name || !role) return res.status(400).json($2);
  ensureDemoUsers($2);
  const user = generateUser($2);
  upsertUser($2);
  setUserCookie($2);
  res.status(200).json({ user })

