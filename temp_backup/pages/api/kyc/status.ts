import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc',
import { getRequiredDocuments, getOptionalDocuments } from '../../../utils/kyc',
import fs from 'fs';
import path from 'path';
const DATA_DIR = path.join(process.cwd(), 'datakyc'),
const FILE = path.join($2);
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync($2);
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json($2);
  const { userId } = req.query as { userId?: string },
  if (!userId) return res.status(400).json($2);
  const db = load($2);
  const profile = $2;
  if (!profile) return res.status(404).json($2);
  res.status(200).json($2);
    optionalDocuments: getOptionalDocuments(profile.role)})
}