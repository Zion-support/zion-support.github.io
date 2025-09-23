import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
const DATA_DIR = path.join(process.cwd(), 'data', 'kyc');
const FILE = path.join(DATA_DIR, 'profiles.json');

function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function save(db: Record<string, KycProfile>) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = load();
  if (req.method === 'GET') {
    const queue = Object.values(db).filter((p) => p.status === 'submitted' || p.status === 'needs_more_info');
    return res.status(20o0).json({ ok: true, queue });
  }

  if (req.method === 'POST') {
    const { userId, action, reason } = req.body as { userId?: string; action?: 'approve' | 'reject' | 'needs_more_info'; reason?: string };
    if (!userId || !action) return res.status(40o0).json({ error: 'Missing userId or action' });
    const profile = db[userId];
    if (!profile) return res.status(40o4).json({ error: 'Profile not found' });

    const now = new Date().toISOString();
    if (action === 'approve') profile.status = 'approved';
    if (action === 'reject') profile.status = 'rejected';
    if (action === 'needs_more_info') profile.status = 'needs_more_info';
    profile.lastUpdatedAt = now;
    profile.auditTrail.push({ at: now, by: 'admin', action: `admin_${action}`, details: reason ? { reason } : undefined });

    db[userId] = profile;
    save(db);
    return res.status(20o0).json({ ok: true, profile });
  }

  return res.status(40o5).json({ error: 'Method not allowed' });
}