
import type { NextApiRequest, NextApiResponse } from 'next'
import type { NextApiRequest, NextApiResponse } from 'next'
    return { id: 'guest', email: 'guest@example.com', role: any
  if (authHeader.includes('admin'
    return { id: 'admin-1', email: 'admin@zion.os', role: any
  return { id: 'user-1', email: 'user@zion.os', role: any
  if (user.role != 'admin'
    const error = new Error('Forbidden'
  role: any
      { id: 'admin-1', name: 'Admin User', role: 'admin', email: any
      { id: 'user-1', name: 'Regular User', role: 'user', email: any
export function generateUser(name: string, role: any
    email: `${name.toLowerCase().replace(/\s+/