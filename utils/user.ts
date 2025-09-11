export interface User {
  id: string;
  email: string;
  role: string;
}

export function ensureDemoUsers() {
  // Mock implementation
  return true;
}

export function generateUser(email: string, role: string): User {
  return {
    id: Date.now().toString(),
    email,
    role,
  };
}

export function setUserCookie(res: any, user: User) {
  // Mock implementation
  res.setHeader('Set-Cookie', `user=${JSON.stringify(user)}`);
}

export function upsertUser(user: User) {
  // Mock implementation
  return user;
}
