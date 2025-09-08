import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { saveFeedbackFallback, FeedbackRecord } from "../../utils/feedback/store";
function ok(res: NextApiResponse, data: any) { return res.status(200).json({ ok: true, ...data }) }
function bad(res: NextApiResponse, msg: string, code = 400) { return res.status(code).json({ ok: false, error: msg}) }

async function tryWriteToFirestore(doc: FeedbackRecord) {
  const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } = process.env as Record<string, string | undefined>,
  if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) return false,
  try {
    const admin = require($2);
    if (admin.apps.length = $2;
          clientEmail: FIREBASE_CLIENT_EMAIL,
          privateKey: (FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n")})})
    }
    const db = admin.firestore($2);
    await db.collection("interaction_feedback").doc(doc.id).set($2);
    return true
  } catch (e) {
    return false
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return bad($2);
  const { rating, comment, kind, context } = req.body || {},
  const r = Number($2);
  if (!r || r < 1 || r > 5) return bad($2);
  const k: FeedbackRecord["kind"] = kind = $2;
  const user = $2;
    role: (req.headers["x-demo-user-role"] as string) || undefined,
    talentSlug: (req.headers["x-demo-talent-slug"] as string) || undefined},

  const doc: FeedbackRecord = {
    id: uuidv4($2);
    createdAtIso: new Date().toISOString($2);
    user,
    rating: r,
    comment: comment || undefined,
    kind: k,
    context: context || undefined},

  const wrote = await tryWriteToFirestore($2);
  if (!wrote) saveFeedbackFallback($2);
  return ok(res, { id: doc.id })
}