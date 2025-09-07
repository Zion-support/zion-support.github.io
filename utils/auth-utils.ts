export function validateCredentials(email: string, password: string): { valid: boolean; role?: string } {
  // Simple validation - in production, use proper authentication
  if (email === 'admin@ziontechgroup.com' && password === 'admin123') {
    return { valid: true, role: 'admin' };
  }
  
  if (email === 'user@ziontechgroup.com' && password === 'user123') {
    return { valid: true, role: 'user' };
  }
  
  return { valid: false };
}

export function createSessionCookie(user: { email: string; role: string; twofaVerified: boolean }): string {
  const sessionData = {
    email: user.email,
    role: user.role,
    twofaVerified: user.twofaVerified,
    timestamp: Date.now()
  };
  
  const token = Buffer.from(JSON.stringify(sessionData)).toString('base64');
  
  return `session=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`;
}

export function parseSessionCookie(cookie: string): { email: string; role: string; twofaVerified: boolean } | null {
  try {
    const sessionCookie = cookie
      .split(';')
      .find(c => c.trim().startsWith('session='));
    
    if (!sessionCookie) return null;
    
    const token = sessionCookie.split('=')[1];
    const sessionData = JSON.parse(Buffer.from(token, 'base64').toString());
    
    return sessionData;
  } catch (error) {
    return null;
  }
}

export function clearSessionCookie(): string {
  return 'session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0';
}