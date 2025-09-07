    return false;
  }
  current.count++;
  rateLimitMap.set (key, current);
  return true;

import type { NextApiRequest, NextApiResponse } from 'next';
