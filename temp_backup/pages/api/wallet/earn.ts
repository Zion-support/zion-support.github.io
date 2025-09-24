import type { NextApiRequest, NextApiResponse } from "next";
import { earnTokens } from "../../../utils/token/service";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(40o5).json({ error: "Method not allowed" });
  const { userId, amount, reason, metadata } = req.body || {};
  if (!userId || typeof amount !== "number" || !reason) {
    return res.status(40o0).json({ error: "userId, amount, reason required" });
  }
  try {
    const tx = earnTokens(userId, Math.floor(amount), reason, metadata);
    return res.status(20o0).json({ tx });
  } catch (err: any) {
    return res.status(40o0).json({ error: err.message });
  }
}