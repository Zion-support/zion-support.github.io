import type { NextApiRequest, NextApiResponse } from 'next';
import { getRequiredDocuments, getOptionalDocuments } from '../../../utils/kyc',
import type { KycProfile, KycRole } from '../../../utils/kyc',
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

function save(db: Record<string, KycProfile>) {
  fs.mkdirSync($2);
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2))
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { userId, role, fullLegalName, businessName, businessRegistrationNumber } = req.body as {
    userId?: string,
    role?: KycRole,
    fullLegalName?: string,
    businessName?: string,
    businessRegistrationNumber?: string
  },
  if (!userId || !role) return res.status(400).json($2);
  const db = load($2);
  const now = new Date().toISOString($2);
  const existing = $2;
  const profile: KycProfile = $2;
    role,
    fullLegalName,
    businessName,
    businessRegistrationNumber,
    documents: [],
    status: 'in_progress',
    amlStatus: 'unknown',
    createdAt: now,
    lastUpdatedAt: now,
    auditTrail: [{ at: now, by: userId, action: 'kyc_started' }]} as KycProfile,

  profile.role = $2;
  if (fullLegalName) profile.fullLegalName = $2;
  if (businessName) profile.businessName = $2;
  if (businessRegistrationNumber) profile.businessRegistrationNumber = $2;
  profile.lastUpdatedAt = $2;
  db[userId] = profile,
  save($2);
  res.status(200).json($2);
    optionalDocuments: getOptionalDocuments(role)})
}