import { saveFeedbackFallback, FeedbackRecord } from "../../utils/feedback/store";
function ok(res: NextApiResponse, data: any) { return res.status(200).json({ ok: true, ...data }) }
function bad(res: NextApiResponse, msg: string, code;
  return ok(res, { id: doc.id })
}
origin/cursor/automate-test-improve-and-merge-code-2533
import {
  saveFeedbackFallback
  FeedbackRecord
} from "../../utils/feedback/store";

  saveFeedbackFallback
  FeedbackRecord
} from "../../utils/feedback/store";
function ok(res: NextApiResponse, data: any) {
  return res && res.status(200).json({ ok: true, ...data });
}
function bad(res: NextApiResponse, msg: string, code = 400) {
  return res && res.status(code).json({ ok: false, error: msg });
}
async function tryWriteToFirestore(doc: FeedbackRecord) {
  const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } =
    process.env as Record<string, string | undefined>;
  if (!FIREBASE_PROJECT_ID |!FIREBASE_CLIENT_EMAIL |!FIREBASE_PRIVATE_KEY)
    return false;
  try {
    const admin = require('firebase-admin');
origin/cursor/automate-test-improve-and-merge-code-2533

    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: FIREBASE_PROJECT_ID
          clientEmail: FIREBASE_CLIENT_EMAIL
          privateKey: (FIREBASE_PRIVATE_KEY |"").replace(/\\n/g, "\n")
        })
      });
    }
    const db = admin.firestore();
    await db.collection('interaction_feedback').doc(doc.id).set(doc);
origin/cursor/automate-test-improve-and-merge-code-2533

    const db = admin.firestore ();
    await db.collection ("interaction_feedback").doc (doc.id).set (doc);

    return true;
  } catch (e) {
    return false;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return bad(res, 'Method not allowed', 405);
  const { rating, comment, kind, context } = req.body || {};
origin/cursor/automate-test-improve-and-merge-code-2533
  const r = Number(rating);
  if (!r |r < 1 |r > 5) return bad(res, "rating must be 1-5");
  const k: FeedbackRecord["kind"] =
    kind === "bug" ? "bug" : kind === "feature" ? "feature" : "general";
  const user = {
    id: (req.headers['x-demo-user-id'] as string) || undefined,
    role: (req.headers['x-demo-user-role'] as string) || undefined,
    talentSlug: (req.headers['x-demo-talent-slug'] as string) || undefined,
  };

origin/cursor/automate-test-improve-and-merge-code-2533
  const doc: FeedbackRecord = {
    id: uuidv4()
    createdAtIso: new Date().toISOString()
    user
    rating: r
    comment: comment |undefined
    kind: k
    context: context |undefined
  }
  const wrote = await tryWriteToFirestore(doc);
  if (!wrote) saveFeedbackFallback(doc);
    const admin = require("firebase-admin")
    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: FIREBASE_PROJECT_ID
          clientEmail: FIREBASE_CLIENT_EMAIL
  return ok(res, { id: doc && doc.id });
}

<<<<<<< HEAD:temp_exclude/pages_api_legacy/pages_api/feedback.ts
import type { NextApiRequest, NextApiResponse } from 'next';
function ok(res: NextApiResponse, data: any) {
  return res.status(200).json({
    ok: true
    ...data
  });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
export default async /**
 * handler - Function description
 */
function handler() {
  if (return bad (res, "Method not allowed", 405)) {
  $2
}
  const { rating, comment, kind, context } = req.body || {}
  const r = Number (rating);
  if (return bad (res, "rating must be 1 - 5")) {
  $2
}

  }
;
  const wrote = await tryWriteToFirestore (doc);
  if (saveFeedbackFallback (doc)) {
  $2
}
  return ok (res, { id: doc.id });
}

function bad(res: NextApiResponse, msg: string, code = 400) {
  return res.status(code).json({
    ok: false
    error: msg
  });
  } catch (error) {
=======
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return bad(res, 'Method not allowed', 405);
  const { rating, comment, kind, context } = req.body || {};
  if (!r || r < 1 || r > 5) return bad(res, 'rating must be 1-5');
  const k: FeedbackRecord['kind'] =
    kind === 'bug' ? 'bug' : kind === 'feature' ? 'feature' : 'general';

    id: (req.headers['x-demo-user-id'] as string) || undefined,
    role: (req.headers['x-demo-user-role'] as string) || undefined,
    talentSlug: (req.headers['x-demo-talent-slug'] as string) || undefined,
          privateKey: (FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n")})})
      } catch (error) {
>>>>>>> merged-prs-20250907-203621:pages_backup_conflict_1757239547/api/feedback.ts
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
export default async function handler(req, res) {
  try {
  const doc = {
    id: 'feedback-id'
    createdAtIso: new Date().toISOString()
    user: 'user'
    rating: 5
    comment: 'feedback comment'
    kind: 'general'
    context: 'api'
  };
  return ok(res, {
    id: doc.id
  });
import type { NextApiRequest, NextApiResponse } from "next"
import { v4 as uuidv4 } from "uuid"
import { saveFeedbackFallback, FeedbackRecord } from "../../utils/feedback/store"
function ok(res: NextApiResponse, data: any) { return res.status(200).json({ ok: true, ...data })   } catch (error) {
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
function bad(res: NextApiResponse, msg: string, code = 400) { return res.status(code).json({ ok: false, error: msg })   } catch (error) {
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
async function tryWriteToFirestore(req, res) {
  try {
  const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } = process.env as Record<string string | undefined>
  if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) return false
  try {

          privateKey: (FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n")})})
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: 'Internal server error'
    });
  }
}
    const db = admin.firestore()
    await db.collection("interaction_feedback").doc(doc.id).set(doc)
    return true
  } catch (e) {
    return false
    } catch (error) {
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
  } catch (error) {
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
export default async function handler(req, res) {
  try {
<<<<<<< HEAD:temp_exclude/pages_api_legacy/pages_api/feedback.ts
  if (req.method !== "POST") return bad(res, "Method not allowed", 405)
  const { rating, comment, kind, context } = req.body || {}
  const r = Number(rating)
  if (!r || r < 1 || r > 5) return bad(res, "rating must be 1-5")
  const k: FeedbackRecord["kind"] = kind === "bug" ? "bug" : kind === "feature" ? "feature" : "general"
  const user = {
    id: (req.headers["x-demo-user-id"] as string) || undefined
    role: (req.headers["x-demo-user-role"] as string) || undefined
    talentSlug: (req.headers["x-demo-talent-slug"] as string) || undefined}
  const doc: FeedbackRecord = {
    id: uuidv4()
    createdAtIso: new Date().toISOString()
    user
    rating: r
    comment: comment || undefined
    kind: k
    context: context || undefined}
  const wrote = await tryWriteToFirestore(doc)
  if (!wrote) saveFeedbackFallback(doc)
=======
  if (req.method !== "POST") return bad(res, "Method not allowed", 405),
  const { rating, comment, kind, context } = req.body || {},
  const r = Number(rating),
  if (!r || r < 1 || r > 5) return bad(res, "rating must be 1-5"),
  const k: FeedbackRecord["kind"] = kind === "bug" ? "bug" : kind === "feature" ? "feature" : "general",
    id: (req.headers["x-demo-user-id"] as string) || undefined,
    role: (req.headers["x-demo-user-role"] as string) || undefined,
    talentSlug: (req.headers["x-demo-talent-slug"] as string) || undefined},
    id: uuidv4(),
    createdAtIso: new Date().toISOString(),
    user,
    rating: r,
    comment: comment || undefined,
    kind: k,
    context: context || undefined},
  const wrote = await tryWriteToFirestore(doc),
  if (!wrote) saveFeedbackFallback(doc),
>>>>>>> merged-prs-20250907-203621:pages_backup_conflict_1757239547/api/feedback.ts
  return ok(res, { id: doc.id })
import { saveFeedbackFallback, FeedbackRecord } from "../../utils/feedback/store";

function ok(res: NextApiResponse, data: any) { return res.status(200).json({ ok: true, ...data }) }
function bad(res: NextApiResponse, msg: string, code = 400) { return res.status(code).json({ ok: false, error: msg }) }

async function tryWriteToFirestore(doc: FeedbackRecord) {
  const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } = process.env as Record<string, string | undefined>;
  if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) return false;
  try {
<<<<<<< HEAD:temp_exclude/pages_api_legacy/pages_api/feedback.ts
    const admin = require("firebase-admin");
    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: FIREBASE_PROJECT_ID,
          clientEmail: FIREBASE_CLIENT_EMAIL,
          privateKey: (FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n")
        })
      })
    }
    const db = admin.firestore();
=======
    if (admin.apps.length === 0) {;
      admin.initializeApp({;
        credential: admin.credential.cert({;
          projectId: FIREBASE_PROJECT_ID;
          clientEmail: FIREBASE_CLIENT_EMAIL;
          privateKey: (FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n")})});
      } catch (error) {
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
>>>>>>> merged-prs-20250907-203621:pages_backup_conflict_1757239547/api/feedback.ts
    await db.collection("interaction_feedback").doc(doc.id).set(doc);
    return true
  } catch (e) {
    return false
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return bad(res, "Method not allowed", 405);
  if (!r || r < 1 || r > 5) return bad(res, "rating must be 1-5");
  const k: FeedbackRecord["kind"] = kind === "bug" ? "bug" : kind === "feature" ? "feature" : "general";

  const user = {
    id: (req.headers["x-demo-user-id"] as string) || undefined,
    role: (req.headers["x-demo-user-role"] as string) || undefined,
    talentSlug: (req.headers["x-demo-talent-slug"] as string) || undefined
  };

    id: uuidv4(),
    createdAtIso: new Date().toISOString(),
    user,
    rating: r,
    comment: comment || undefined,
    kind: k,
    context: context || undefined
  };

  if (!wrote) saveFeedbackFallback(doc);
<<<<<<< HEAD:temp_exclude/pages_api_legacy/pages_api/feedback.ts
  return ok(res, { id: doc.id })
=======
  return ok(res, { id: doc.id });
  const k: FeedbackRecord["kind"] = kind === "bug" ? "bug" : kind === "feature" ? "feature" : "general";
  const user = {;
    id: (req.headers["x-demo-user-id"] as string) || undefined;
    role: (req.headers["x-demo-user-role"] as string) || undefined;
    talentSlug: (req.headers["x-demo-talent-slug"] as string) || undefined};
  const doc: FeedbackRecord = {;
    id: uuidv4();
    createdAtIso: new Date().toISOString();
    user;
    rating: r,;
    comment: comment || undefined,;
    kind: k,;
    context: context || undefined},;
  if (!wrote) saveFeedbackFallback(doc);
  return ok(res, { id: doc.id });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> merged-prs-20250907-203621:pages_backup_conflict_1757239547/api/feedback.ts
}
  return ok(res, { id: doc.id });

}}
origin/cursor/automate-test-improve-and-merge-code-2533
