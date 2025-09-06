import type { NextApiRequest, NextApiResponse } from "next",;
import { getConfig } from "../../../../utils/token/service",;
import { tokenStore } from "../../../../utils/token/storage",;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  if (req.method === "GET") {;
    return res.status(200).json(getConfig());
  }
  if (req.method === "POST") {;
    const body = req.body || {},;
    const current = tokenStore.getConfig(),;
    const updated = { ...current, ...body },;
    tokenStore.setConfig(updated),;
    return res.status(200).json(updated),;
  }
  return res.status(405).json({ error:"Method not allowed" }),;import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ config: {} });
}