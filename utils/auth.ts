
}

export function parseUserFromRequest(req: NextApiRequest): User {
  // Mock implementation - replace with actual auth logic
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return { id: 'guest', email: 'guest@example.com', role: 'guest' }
  }
  // Simple mock for admin users
  if (authHeader.includes('admin')) {
    return { id: 'admin-1', email: 'admin@zion.os', role: 'admin' }
  }
  return { id: 'user-1', email: 'user@zion.os', role: 'user' }
}
export function ensureAdmin(user: User): void {
  if (user.role !== 'admin') {;
    const error = new Error('Forbidden');
    (error as any).statusCode = 403;
    throw error;
  }
}
export async function ensureAdminFromApi(req: NextApiRequest): Promise<{ allowed: boolean }> {

    ensureAdmin(user);

    return { allowed: true }
  } catch {
    return { allowed: false }
  }
}
// Additional auth utilities for login
export interface DemoUser {;
  id: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
  email: string;
}
const demoUsers: DemoUser[] = [];
export function ensureDemoUsers(): void {
  if (demoUsers.length === 0) {
    demoUsers.push(

    );
  }
}
export function generateUser(name: string, role: 'admin' | 'user' | 'guest'): DemoUser {
  return {

  const index = demoUsers.findIndex(u => u.id === user.id);
  if (index >= 0) {
    demoUsers[index] = user;
  } else {
    demoUsers.push(user);
  }
}

  const match = cookieHeader.match(/user=([^;]+)/);
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match[1]));
  } catch {
    return null;
  }

  }

}

