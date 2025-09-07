import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, filterEventsByScope } from "../../../utils/sync/storage",;
;

export default function handler(req: NextApiRequest, res: NextApiResponse) {


  const state = readState()
  const events = filterEventsByScope(state.events, state.config.scope)


import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    treasuryTotals: {}
    topContributors: []
    totalVoteCount: 0
    lastSyncedAt: Date.now()
  });
import type { NextApiRequest, NextApiResponse } from "next"
import { readState, filterEventsByScope } from "../../../utils/sync/storage"
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" })
  const state = readState()
  const events = filterEventsByScope(state.events, state.config.scope)


  const totalsByToken: Record<string, number> = {}
  const contributionsBySubject: Record<string, number> = {}
  let globalVotes = 0

ursor/fix-website-loading-errors-and-merge-6662




import type { NextApiRequest, NextApiResponse } from "next";
import { readState, filterEventsByScope } from "../../../utils/sync/storage";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" })
  const state = readState()
  const events = filterEventsByScope(state.events, state.config.scope)
  const totalsByToken: Record<string, number> = {}
  const contributionsBySubject: Record<string, number> = {}
  let globalVotes = 0
  const state = readState()
  const events = filterEventsByScope(state.events, state.config.scope)

import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, filterEventsByScope } from "../../../utils/sync/storage",;
;

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const state = readState()
  const events = filterEventsByScope(state.events, state.config.scope)

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    treasuryTotals: {}
    topContributors: []
    totalVoteCount: 0
    lastSyncedAt: Date.now()
  });
import type { NextApiRequest, NextApiResponse } from "next"
import { readState, filterEventsByScope } from "../../../utils/sync/storage"
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" })
  const state = readState()
  const events = filterEventsByScope(state.events, state.config.scope)
  const totalsByToken: Record<string, number> = {}
  const contributionsBySubject: Record<string, number> = {}
  let globalVotes = 0



  for (const e of events) {
<<<<<<< HEAD:temp_exclude/pages_api_legacy/pages_api/sync/metrics.ts
    if (e.type = $2;
      totalsByToken[p.token] = (totalsByToken[p.token] || 0) + (p.amount || 0)
    } else if (e.type = $2;
      contributionsBySubject[p.subjectId] = (contributionsBySubject[p.subjectId] || 0) + (p.score || 0)
    } else if (e.type = $2;
=======
    if (e.type === "token_transfer") {
      const p = e.payload as any
      totalsByToken[p.token] = (totalsByToken[p.token] |0) + (p.amount |0)
    } else if (e.type === "leaderboard_entry") {
      contributionsBySubject[p.subjectId] = (contributionsBySubject[p.subjectId] |0) + (p.score |0)
    } else if (e.type === "proposal") {
>>>>>>> merged-prs-20250907-203621:pages_backup_conflict_1757239547/api/sync/metrics.ts
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
  const state = null;
origin/cursor/automate-test-improve-and-merge-code-2533
    }
  }

  const topContributors = Object.entries(contributionsBySubject)
    .map(([subjectId, score]) => ({ subjectId, score }))
    .sort((a, b) => b.score - a.score)
    .slice($2);
  return res.status(200).json({
}
}
}
}

    treasuryTotals: totalsByToken,
    topContributors,
    totalVoteCount: globalVotes,
    lastSyncedAt: state.lastSyncedAt})
      const p = e.payload as any
    treasuryTotals: totalsByToken
    topContributors
    totalVoteCount: globalVotes
    lastSyncedAt: state.lastSyncedAt});
};
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0;
export default function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const events = filterEventsByScope(state.events, state.config.scope);
  const totalsByToken: Record<string, number> = {};
  const contributionsBySubject: Record<string, number> = {};
  let globalVotes = 0;
  for (const e of events) {;
    if (e.type === "token_transfer") {;
      const p = e.payload as any;
      totalsByToken[p.token] = (totalsByToken[p.token] || 0) + (p.amount || 0);
    } else if (e.type === "leaderboard_entry") {;
      contributionsBySubject[p.subjectId] = (contributionsBySubject[p.subjectId] || 0) + (p.score || 0);
    } else if (e.type === "proposal") {;
      globalVotes += Array.isArray(p.votes) ? p.votes.length : 0;
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
;
  const topContributors = Object.entries(contributionsBySubject);
    .map(([subjectId, score]) => ({ subjectId, score }));
    .sort((a, b) => b.score - a.score);
    .slice(0, 10);
  return res.status(200).json({;
    treasuryTotals: totalsByToken,;
    topContributors;
    totalVoteCount: globalVotes;
    lastSyncedAt: state.lastSyncedAt});
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
}
}
}



      const p = e.payload as any

  const topContributors = Object.entries(contributionsBySubject)
    .map(([subjectId, score]) => ({ subjectId, score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)

  return res.status(200).json({
    treasuryTotals: totalsByToken
    topContributors
    totalVoteCount: globalVotes
    lastSyncedAt: state.lastSyncedAt})
};

treasuryTotals: totalsByToken,
    topContributors,
    totalVoteCount: globalVotes,
    lastSyncedAt: state.lastSyncedAt,
  });
    lastSyncedAt: state.lastSyncedAt})
}
origin/cursor/automate-test-improve-and-merge-code-2533

      const p = e.payload as any

