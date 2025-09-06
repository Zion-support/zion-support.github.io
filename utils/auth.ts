import type { NextApiRequest, NextApiResponse } from 'next';
;
export interface User {
  id: string;
  email: string;
  role: string;
  isAdmin: boolean;
}
    return { allowed: true }
  } catch {
    return { allowed: false }
  }
}
export interface DemoUser {
  id: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
  email: string;
}
  try {
    return JSON.parse (decodeURIComponent (match[1]));
  } catch {
    return null;
  }
  }

  }

export function isAdmin(session: AuthSession | null): boolean {
  return hasRole(session, 'admin');
}

export function isModerator(session: AuthSession | null): boolean {
  return hasRole(session, 'moderator') || isAdmin(session);
}
