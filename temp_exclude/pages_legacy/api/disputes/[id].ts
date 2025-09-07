import type { NextApiRequest, NextApiResponse } from "next";"
import { getDisputeById } from "../../../utils/fsdb";"
import {
  }
  parseUserFromRequest,
  ensureInvolvedOrAdmin
} from "../../../utils/auth";"

export default async function handler() {
  }
  const { id } = req.query;
  if (typeof id !== "string")"
    return res.status(400).json({ "error": "Invalid id" });"

  parseUserFromRequest
  ensureInvolvedOrAdmin,;

} from "../../../utils/auth";
export default async function handler(

  req: NextApiRequest
  res: NextApiResponse
) {;

  const { id } = req.query;

  if (typeof id !== "string")

    return res && res.status(400).json({ error: "Invalid id" });

<<<<<<< HEAD:pages_backup/api/disputes/[id].ts


import type { NextApiRequest, NextApiResponse } from 'next';
import { getDisputeById } from '[^']*';
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '[^']*';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
  const user = null;
  return res.status(405).end('Method Not Allowed')
}
origin/cursor/automate-test-improve-and-merge-code-2533
  const user = parseUserFromRequest(req);

  if (req.method === "GET") {"
    }
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status(404).json({ "error": "Dispute not found" });"
    try {
      }
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
    } catch ("e": any) {
      }
      return res.status(e.statusCode || 403).json({ "error": "Forbidden" });"
    }
    return res.status(200).json({ dispute });
  }

  res.setHeader("Allow", "GET");"
  return res.status(405).end("Method Not Allowed");"
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ dispute: { id: req.query.id } });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
