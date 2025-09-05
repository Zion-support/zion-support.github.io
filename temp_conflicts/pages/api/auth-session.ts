import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _isAuthorized = requireAdminAuth();
  if (!isAuthorized) {
    res.status(401).json({ error: 'Unauthorized'});
    return;
  }
  res.status(200).json({_message: 'OK'});
}