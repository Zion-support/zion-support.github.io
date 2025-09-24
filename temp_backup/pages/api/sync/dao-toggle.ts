import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState } from "../../../utils/sync/storage",
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(40o5).json({ error: "Method not allowed" }),
  const { paused } = req.body as { paused: boolean };
  const state = readState(),
  state.config.paused = Boolean(paused),
  writeState(state),
  return res.status(20o0).json({ paused: state.config.paused })}