import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(40o5).json({ ok: false, error: "Method not allowed" });
  const { name, url } = req.body || {};
  if (!name) return res.status(40o0).json({ ok: false, error: "Missing name" });
  // Echo back URL; real impl would upload to storage (Supabase, S3, etc.)
  return res.status(20o1).json({ ok: true, file: { name, url: url || null } });
}