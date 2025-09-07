<<<<<<< HEAD:pages/api/auth/nonce.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // TODO: Implement nonce logic
    res.status(200).json({ message: 'nonce endpoint' });
  } catch (error) {
    console.error('Error in nonce:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
=======
let res = '';
  const cryptoObj = require('crypto');
  const bytes: Buffer = cryptoObj.randomBytes(length);
  for (let i = 0; i < length; i++) res += charset[bytes[i] % charset.length];
  return res
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const nonce = randomString(16);
  res.setHeader('Set-Cookie', `siwe-nonce=${nonce}, HttpOnly, Path=/, SameSite=Lax`);
  res.status(200).json({ nonce })
};
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages-disabled/api/auth/nonce.ts
