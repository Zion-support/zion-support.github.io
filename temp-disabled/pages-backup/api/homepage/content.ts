<<<<<<< HEAD:pages/api/homepage/content.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
async function fetchFromGitHub(): Promise<any | null> {
  try {
    const pkg = null;
    return res.status(200).json(null)
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'Internal error' })

=======
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

async function fetchFromGitHub() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/Zion-Holdings/zion.app/contents/data/homepage.json",
    );
    if (!response.ok) return null;
    const data = await response.json();
    return JSON.parse(Buffer.from(data.content, "base64").toString());
  } catch {
    return null;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
>>>>>>> origin/main:temp-disabled/pages-backup/api/homepage/content.ts
  }
  try {
    const localPath = path.join(process.cwd(), "data", "homepage.json");
    if (fs.existsSync(localPath)) {
      const local = JSON.parse(fs.readFileSync(localPath, "utf-8"));
      return res.status(200).json(local);
    }
  } catch {
    // fall back to remote
  }

  const remote = await fetchFromGitHub();
  if (remote) return res.status(200).json(remote);
  return res.status(200).json(null);
}
