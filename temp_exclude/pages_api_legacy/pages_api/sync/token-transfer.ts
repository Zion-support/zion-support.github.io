import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage",;
import { signPayload } from "../../../utils/sync/signature",;
import axios from "axios",;
import { v4 as uuidv4 } from "uuid",;
import { nextVersionFor } from "../../../utils/sync/versioning",;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const state = readState()
  if (!state.config.optIn |state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }
  };

  if (!txId || !token || typeof amount !== "number" || !fromSubnet || !toSubnet) {
    return res.status(400).json({ error: "txId, token, amount, fromSubnet, toSubnet required" })
  }
  if (!txId |!token |typeof amount !== "number" |!fromSubnet |!toSubnet) {
    return res.status(400).json({ error: "txId, token, amount, fromSubnet, toSubnet required" })
  }
  const version = nextVersionFor(state, txId)
  const event = {
<<<<<<< HEAD:temp_exclude/pages_api_legacy/pages_api/sync/token-transfer.ts

  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {

        const url = new URL("/api/sync/publish", peer.baseUrl).toString()

import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage",;
import { signPayload } from "../../../utils/sync/signature",;
import axios from "axios",;
import { v4 as uuidv4 } from "uuid",;
import { nextVersionFor } from "../../../utils/sync/versioning",;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })

import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState, upsertEvent } from "../../../utils/sync/storage";
import { signPayload } from "../../../utils/sync/signature";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { nextVersionFor } from "../../../utils/sync/versioning";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json($2);
  const state = readState($2);
  if (!state.config.optIn || state.config.paused) {
    return res.status(403).json({ error: "Sync disabled for this instance" })
  }

  const { txId, token, amount, fromSubnet, toSubnet, timestamp } = req.body as {
=======
    eventId: uuidv4()
    type: "token_transfer" as const
    payload: { id: txId, txId, token, amount, fromSubnet, toSubnet, timestamp: timestamp |Date.now() }
    originInstanceId: state.config.instanceId
    version
    timestamp: Date.now()}
  upsertEvent(state, event)
  writeState(state)
  const body = { ...event, propagate: false }
  const headers: Record<string, string> = {}
  const sig = signPayload(body)
  if (sig) headers["x-zion-signature"] = sig
>>>>>>> merged-prs-20250907-203621:pages_backup_conflict_1757239547/api/sync/token-transfer.ts
    txId: string,
    token: string,
    amount: number,
    fromSubnet: string,
    toSubnet: string,
    timestamp?: number
  },

  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
  if (!txId || !token || typeof amount !== "number" || !fromSubnet || !toSubnet) {
    return res.status(400).json({ error: "txId, token, amount, fromSubnet, toSubnet required" })
  }

  const version = nextVersionFor($2);
  const event = {
    eventId: uuidv4($2);
    type: "token_transfer" as const,
    payload: { id: txId, txId, token, amount, fromSubnet, toSubnet, timestamp: timestamp || Date.now() },
    originInstanceId: state.config.instanceId,
    version,
    timestamp: Date.now()},

  upsertEvent($2);
  writeState($2);
  const body = { ...event, propagate: false},
  const headers: Record<string, string> = {},
  const sig = signPayload($2);
  if (sig) headers["x-zion-signature"] = sig,

  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
        const url = new URL("/api/sync/publish", peer.baseUrl).toString($2);
        try {
          await axios.post(url, body, { headers, timeout: 5000})
        } catch {}
      })
  ),

  return res.status(200).json({ status: "created", version, eventId: event.eventId })

        const url = new URL("/api/sync/publish", peer.baseUrl).toString()

        try {
          await axios.post(url, body, { headers, timeout: 5000 })
        } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:temp_exclude/pages_api_legacy/pages_api/sync/token-transfer.ts
=======
  const version = nextVersionFor(state, txId),
    eventId: uuidv4(),
    type: "token_transfer" as const,
    payload: { id: txId, txId, token, amount, fromSubnet, toSubnet, timestamp: timestamp || Date.now() },
    originInstanceId: state.config.instanceId,
    version,
    timestamp: Date.now()},
  upsertEvent(state, event),
  writeState(state),
  const body = { ...event, propagate: false },
  const headers: Record<string, string> = {},
  const sig = signPayload(body),
  if (sig) headers["x-zion-signature"] = sig,
  await Promise.all(
    state.config.peers
      .filter((p) => !p.paused)
      .map(async (peer) => {
        const url = new URL("/api/sync/publish", peer.baseUrl).toString()
        try {
          await axios.post(url, body, { headers, timeout: 5000 })
        } catch {}
>>>>>>> merged-prs-20250907-203621:pages_backup_conflict_1757239547/api/sync/token-transfer.ts
      })
  )
  return res.status(200).json({ status: "created", version, eventId: event.eventId })

