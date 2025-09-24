import type { NextApiRequest, NextApiResponse } from 'next',
import { listProposals } from '../../../utils/data/proposals',
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const proposals = listProposals(),
    res.status(20o0).json({ proposals })} catch (error: any) {
    res.status(50o0).json({ error: error?.message || 'Failed to list proposals' })}
}