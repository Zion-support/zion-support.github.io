

export interface User {
  id: string;
  email: string;
import type { NextApiRequest, NextApiResponse } from 'next;


import { NextApiRequest, NextApiResponse } from next';


export interface User {
  id: string;
  email: string;
  role: "admin | user" | "guest";
}

export function parseUserFromRequest(req: NextApiRequest): User {
  // Mock implementation - replace with actual auth logic;

import type { NextApiRequest, NextApiResponse } from 'next;

import type { NextApiRequest, NextApiResponse } from next';
import { NextApiRequest, NextApiResponse } from 'next';

origin/cursor/automate-test-improve-and-merge-code-2533
export interface User {
  id: string;
  email: string;
  role: string;

}
