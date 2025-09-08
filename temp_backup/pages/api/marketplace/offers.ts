import type { NextApiRequest, NextApiResponse } from 'next';

function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({
    ok: false,
    error: message
  });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { action } = req.body || {};
    
    if (req.method === 'POST') {
      const offer = {
        id: Date.now().toString(),
        createdAtIso: new Date().toISOString(),
        status: 'PENDING'
      };
      
      return res.status(201).json({
        ok: true,
        offer
      });
    }
    
    if (req.method === 'PATCH') {
      const existing = {
        id: Date.now().toString(),
        status: 'ACTIVE'
      };
      
      if (action === 'accept') {
        existing.status = 'ACTIVE';
        return res.json({
          ok: true,
          offer: existing
        });
      }
      
      if (action === 'decline') {
        existing.status = 'DECLINED';
        return res.json({
          ok: true,
          offer: existing
        });
      }
      
      return bad(res, 'Unknown action');
    }
    
    return bad(res, 'Method not allowed', 405);
  } catch (error) {
    return bad(res, 'Internal server error', 500);
  }
}