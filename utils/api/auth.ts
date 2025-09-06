// API authentication utilities
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../supabase';

export interface AuthenticatedUser {
  id: string;
  email: string;
  role?: string;
  talentSlug?: string;
}

export interface AuthResult {
  user: AuthenticatedUser | null;
  error?: string;
  statusCode?: number;
}

export async function authenticateRequest(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<AuthResult> {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return {
        user: null,
        error: 'Missing or invalid authorization header',
        statusCode: 401
      };
    }

    const token = authHeader.substring(7);
    
    // For demo purposes, we'll use a simple token validation
    // In production, you would validate the JWT token here
    if (token === 'demo-token') {
      return {
        user: {
          id: 'demo-user-123',
          email: 'demo@example.com',
          role: 'admin',
          talentSlug: 'demo-talent'
        }
      };
    }

    // Try to validate with Supabase if available
    try {
      const supabase = getServerSupabase();
      const { data: { user }, error } = await supabase.auth.getUser(token);
      
      if (error || !user) {
        return {
          user: null,
          error: 'Invalid token',
          statusCode: 401
        };
      }

      return {
        user: {
          id: user.id,
          email: user.email || '',
          role: user.user_metadata?.role || 'user',
          talentSlug: user.user_metadata?.talentSlug
        }
      };
    } catch (supabaseError) {
      // If Supabase is not available, fall back to demo mode
      if (token === 'demo-token') {
        return {
          user: {
            id: 'demo-user-123',
            email: 'demo@example.com',
            role: 'admin',
            talentSlug: 'demo-talent'
          }
        };
      }

      return {
        user: null,
        error: 'Authentication failed',
        statusCode: 401
      };
    }
  } catch (error) {
    return {
      user: null,
      error: 'Authentication error',
      statusCode: 500
    };
  }
}

export function requireAuth(handler: (req: NextApiRequest, res: NextApiResponse, user: AuthenticatedUser) => Promise<void>) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { user, error, statusCode } = await authenticateRequest(req, res);
    
    if (!user) {
      return res.status(statusCode || 401).json({ error: error || 'Unauthorized' });
    }

    return handler(req, res, user);
  };
}

export function requireRole(role: string) {
  return (handler: (req: NextApiRequest, res: NextApiResponse, user: AuthenticatedUser) => Promise<void>) => {
    return requireAuth(async (req, res, user) => {
      if (user.role !== role) {
        return res.status(403).json({ error: 'Insufficient permissions' });
      }
      
      return handler(req, res, user);
    });
  };
}

export function requireAdmin(handler: (req: NextApiRequest, res: NextApiResponse, user: AuthenticatedUser) => Promise<void>) {
  return requireRole('admin')(handler);
}

export function requireTalent(handler: (req: NextApiRequest, res: NextApiResponse, user: AuthenticatedUser) => Promise<void>) {
  return requireAuth(async (req, res, user) => {
    if (!user.talentSlug) {
      return res.status(403).json({ error: 'Talent profile required' });
    }
    
    return handler(req, res, user);
  });
}

export function getUserId(req: NextApiRequest): string | null {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  
  const token = authHeader.substring(7);
  if (token === 'demo-token') {
    return 'demo-user-123';
  }
  
  return null;
}

export function getTalentSlug(req: NextApiRequest): string | null {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  
  const token = authHeader.substring(7);
  if (token === 'demo-token') {
    return 'demo-talent';
  }
  
  return null;
}

export function isAuthenticated(req: NextApiRequest): boolean {
  const authHeader = req.headers.authorization;
  return !!(authHeader && authHeader.startsWith('Bearer '));
}

export function getAuthHeaders(req: NextApiRequest): Record<string, string> {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return {};
  }
  
  return {
    'Authorization': authHeader
  };
}

export function createAuthResponse(user: AuthenticatedUser, token?: string) {
  return {
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
      talentSlug: user.talentSlug
    },
    token: token || 'demo-token',
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
  };
}

export function validateApiKey(apiKey: string): boolean {
  // In production, validate against your API key store
  const validKeys = ['demo-api-key', 'test-key-123'];
  return validKeys.includes(apiKey);
}

export function requireApiKey(handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const apiKey = req.headers['x-api-key'] as string;
    
    if (!apiKey || !validateApiKey(apiKey)) {
      return res.status(401).json({ error: 'Invalid API key' });
    }
    
    return handler(req, res);
  };
}

export function getRateLimitKey(req: NextApiRequest): string {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
  const userAgent = req.headers['user-agent'] || 'unknown';
  return `${ip}-${userAgent}`;
}

export function createRateLimitResponse(limit: number, remaining: number, resetTime: number) {
  return {
    'X-RateLimit-Limit': limit.toString(),
    'X-RateLimit-Remaining': remaining.toString(),
    'X-RateLimit-Reset': resetTime.toString()
  };
}

export function sanitizeUser(user: AuthenticatedUser): Partial<AuthenticatedUser> {
  return {
    id: user.id,
    email: user.email,
    role: user.role,
    talentSlug: user.talentSlug
  };
}

export function createAuthError(message: string, statusCode: number = 401) {
  return {
    error: message,
    statusCode,
    timestamp: new Date().toISOString()
  };
}

export function logAuthEvent(event: string, userId: string, details?: Record<string, any>) {
  console.log(`[AUTH] ${event}`, {
    userId,
    timestamp: new Date().toISOString(),
    details
  });
}

export function createSessionToken(user: AuthenticatedUser): string {
  // In production, create a proper JWT token
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
    talentSlug: user.talentSlug,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
  };
  
  // For demo purposes, return a simple token
  return Buffer.from(JSON.stringify(payload)).toString('base64');
}

export function verifySessionToken(token: string): AuthenticatedUser | null {
  try {
    const payload = JSON.parse(Buffer.from(token, 'base64').toString());
    
    // Check if token is expired
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    
    return {
      id: payload.id,
      email: payload.email,
      role: payload.role,
      talentSlug: payload.talentSlug
    };
  } catch (error) {
    return null;
  }
}