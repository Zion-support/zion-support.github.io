=======
import type { NextApiRequest, NextApiResponse } from 'next';
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }

export function hasRole(session: AuthSession | null, role: string): boolean {
    if (!session || !isAuthenticated(session)) return false;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }

export function isAdmin(session: AuthSession | null): boolean {
  return hasRole(session, 'admin');
}

export function isModerator(session: AuthSession | null): boolean {
  return hasRole(session, 'moderator') || isAdmin(session);
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
