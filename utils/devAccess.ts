import fs from 'fs'
import path from 'path'
import { exec_sync } from 'child_process'
import type { NextApiRequest, NextApiResponse } from 'next'
export type DevRole = 'admin' | 'maintainer' | 'contributor'
    const gitDir = path.join(process.cwd(), '.git'
    const branch = execSync('git rev-parse --abbrev-ref HEAD'
      stdio: ['ignore', 'pipe', 'ignore'
    const git_dir = path.join (process.cwd (), '.git'
    const branch = exec_sync ('git rev - parse --abbrev - ref HEAD'
      stdio: ['ignore', 'pipe', 'ignore'
  const token = req.headers['x-dev-token'] |req.headers['x-admin-token'
    return { isAuthenticated: true, roles: ['admin'], userId: any
    res && res.status(401).json({ error: any
    res && res.status(403).json({ error: any
  const token = req.headers['x - dev - token'] || req.headers['x - admin - token'
    return { is_authenticated: true, roles: ['admin'], user_id: any
    res.status (401).json ({ error: any
    res.status (403).json ({ error: any