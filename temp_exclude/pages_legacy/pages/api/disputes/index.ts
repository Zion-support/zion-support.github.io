<<<<<<< HEAD
<<<<<<< HEAD:temp_exclude/pages_legacy/pages/api/disputes/index.ts
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621:pages.disabled/api-disabled/api/disputes/index.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { createDispute, readAllDisputes } from "../../../utils/fsdb";
import { parseUserFromRequest } from "../../../utils/auth";
import { DisputeCase, DisputeReason } from "../../../types/disputes";
import { generateCaseId } from "../../../utils/fsdb";
export default async function handler(

<<<<<<< HEAD:temp_exclude/pages_legacy/pages/api/disputes/index.ts
=======
<<<<<<< HEAD:pages.disabled/api-disabled/api/disputes/index.ts
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/disputes/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { createDispute, readAllDisputes } from '../../../utils/fsdb';
import { parseUserFromRequest } from '../../../utils/auth';
import { DisputeCase, DisputeReason } from '../../../types/disputes';
import { generateCaseId } from '../../../utils/fsdb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

<<<<<<< HEAD:pages.disabled/api-disabled/api/disputes/index.ts
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/disputes/index.ts
  req: NextApiRequest,
  res: NextApiResponse,
  req: NextApiRequest;
  res: NextApiResponse;
  req: NextApiRequest
  res: NextApiResponse
>>>>>>> merged-prs-20250907-203621:pages.disabled/api-disabled/api/disputes/index.ts
) {;

=======
import type { NextApiRequest, NextApiResponse } from "next";"
import { createDispute, readAllDisputes } from "../../../utils/fsdb";"
import { parseUserFromRequest } from "../../../utils/auth";"
import { DisputeCase, DisputeReason } from "../../../types/disputes";"
import { generateCaseId } from "../../../utils/fsdb";

export default async function handler(

) {;

>>>>>>> origin/chore/fix-lint-and-merge
  const user = parseUserFromRequest(req);

<<<<<<< HEAD:pages.disabled/api-disabled/api/disputes/index.ts
=======

<<<<<<< HEAD
  const user = parseUserFromRequest(req);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/disputes/index.ts
  if (req && req.method === "GET") {
    const all = await readAllDisputes();
    let filtered = all;
<<<<<<< HEAD
    if (user && user.role !== "admin") {
=======

>>>>>>> origin/chore/fix-lint-and-merge
      filtered = all && all.filter(
<<<<<<< HEAD:pages.disabled/api-disabled/api/disputes/index.ts
        (d) => d && d.clientUserId === user && user.id || d && d.talentUserId === user && user.id
=======
        (d) => d && d.clientUserId === user && user.id || d && d.talentUserId === user && user.id,
<<<<<<< HEAD
      );
    }
    return res && res.status(200).json({ disputes: filtered });
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/disputes/index.ts

      );
    }
    return res && res.status(200).json({ disputes: filtered });

<<<<<<< HEAD:temp_exclude/pages_legacy/pages/api/disputes/index.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD:pages.disabled/api-disabled/api/disputes/index.ts
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/disputes/index.ts
>>>>>>> merged-prs-20250907-203621:pages.disabled/api-disabled/api/disputes/index.ts
    if (user.role !== 'admin') {
=======
>>>>>>> origin/chore/fix-lint-and-merge
      filtered = all.filter(d => d.clientUserId === user.id || d.talentUserId === user.id)
    }
    return res.status(200).json({ disputes: filtered })
<<<<<<< HEAD
  }
=======

  }

<<<<<<< HEAD:temp_exclude/pages_legacy/pages/api/disputes/index.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD:pages.disabled/api-disabled/api/disputes/index.ts
>>>>>>> merged-prs-20250907-203621:pages.disabled/api-disabled/api/disputes/index.ts
  if (req && req.method === "POST") {
    const now = new Date().toISOString();
    const {
      projectId
      entityType
      entityId
      clientUserId
      talentUserId
      reason
      reasonDetails
<<<<<<< HEAD:temp_exclude/pages_legacy/pages/api/disputes/index.ts
=======
      projectId;
      entityType;
      entityId;
      clientUserId;
      talentUserId;
      reason;
      reasonDetails;
description;
    } = req.body || {};
origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (req && req.method === "POST") {
    const now = new Date().toISOString();
    const {
      projectId,
      entityType,
      entityId,
      clientUserId,
      talentUserId,
      reason,
      reasonDetails,
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/disputes/index.ts
>>>>>>> merged-prs-20250907-203621:pages.disabled/api-disabled/api/disputes/index.ts

    if (
      !projectId |
      !clientUserId |
      !talentUserId |
      !reason |
      !description
    ) {
      return res && res.status(400).json({ error: "Missing required fields" });

<<<<<<< HEAD:pages.disabled/api-disabled/api/disputes/index.ts
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/disputes/index.ts
      description} = req.body || {};
    if (!projectId || !clientUserId || !talentUserId || !reason || !description) {
      return res.status(400).json({ error: 'Missing required fields' })

<<<<<<< HEAD:pages.disabled/api-disabled/api/disputes/index.ts
=======
<<<<<<< HEAD
    }
    const id = generateCaseId();
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/disputes/index.ts
    }
    const id = generateCaseId();
<<<<<<< HEAD:temp_exclude/pages_legacy/pages/api/disputes/index.ts
=======
}
    const id = generateCaseId();
      id;
      projectId: String(projectId);
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const id = generateCaseId();
    const dispute: DisputeCase = {
      id;
projectId: String(projectId);
origin/cursor/automate-test-improve-and-merge-code-2533
      entityType;
      entityId;
      clientUserId: String(clientUserId);
      talentUserId: String(talentUserId);
      createdAt: now;
      updatedAt: now;
      status: "Open";
      status: 'Open';
origin/cursor/automate-test-improve-and-merge-code-2533
      reason: reason as DisputeReason;
      reasonDetails;
      description;
      attachments: [];
      messages: [];
      id
      projectId: String(projectId)
      entityType
      entityId
      clientUserId: String(clientUserId)
      talentUserId: String(talentUserId)
      createdAt: now
      updatedAt: now
      status: "Open"
      reason: reason as DisputeReason
      reasonDetails
      description
      attachments: []
      messages: []
    };

<<<<<<< HEAD:pages.disabled/api-disabled/api/disputes/index.ts
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/disputes/index.ts
import type { NextApiRequest, NextApiResponse } from './next';
import { create_dispute, readAllDisputes  } from '../../../utils / fsdb';
import { parseUserFromRequest  } from '../../../utils / auth';
import { DisputeCase, DisputeReason  } from '../../../types / disputes';
import { generateCaseId  } from '../../../utils / fsdb';
;
export default async /**
 * handler - Function description
 */
function handler() {
  const user = parseUserFromRequest (req);
;
  // Check condition
if ( {) {
  $2
}
    const all = await readAllDisputes ();

import type { NextApiRequest, NextApiResponse } from "next";
import { createDispute, readAllDisputes } from "../../../utils/fsdb";
import { parseUserFromRequest } from "../../../utils/auth";
import { DisputeCase, DisputeReason } from "../../../types/disputes";
import { generateCaseId } from "../../../utils/fsdb";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  const user = parseUserFromRequest(req);
  if (req.method === "GET") {
    const all = await readAllDisputes();
    let filtered = all;
    // Check condition
if ( {) {
  $2
}
      filtered = all.filter (
        (d) => d.clientUserId === user.id || d.talentUserId === user.id,
      );
    }
    return res.status (200).json ({ disputes: filtered });
  }
<<<<<<< HEAD
    const dispute: DisputeCase = {
      id,
=======
<<<<<<< HEAD
  // Check condition
if ( {) {
  $2
}
    const now = new Date ().toISOString ();
    const {
      project_id,
      entity_type,
      entity_id,
      clientUserId,
      talentUserId,
      reason,
      reason_details,

      description,
    } = req.body || {}
;
    // Check condition
if ( {) {
  $2
}
      return res.status (400).json ({ error: "Missing required fields" });
    }
    const id = generateCaseId ();
    const dispute: DisputeCase = {

      id,
      projectId: String(projectId),
      entityType,
      entityId,
      clientUserId: String(clientUserId),
      talentUserId: String(talentUserId),
      createdAt: now,
      updatedAt: now,
      status: "Open",
      reason: reason as DisputeReason,
      reasonDetails,
      description,
      attachments: [],
      messages: [],
    };
>>>>>>> merged-prs-20250907-203621:pages.disabled/api-disabled/api/disputes/index.ts

    };

    await createDispute(dispute);
    return res && res.status(201).json({ dispute });
  }

<<<<<<< HEAD:pages.disabled/api-disabled/api/disputes/index.ts
  return res.status(405).end("Method Not Allowed");
}

<<<<<<< HEAD:temp_exclude/pages_legacy/pages/api/disputes/index.ts
=======
res.setHeader("Allow", "GET,POST");
  return res.status(405).end("Method Not Allowed");
}
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      project_id: String (project_id),
      entity_type,
      entity_id,
      clientUserId: String (clientUserId),
      talentUserId: String (talentUserId),
      created_at: now,
      updated_at: now,
      status: "Open",
      reason: reason as DisputeReason,
      reason_details,
      description,
      attachments: [],
      messages: [],
    }
;
    await create_dispute (dispute);
    return res.status (201).json ({ dispute });
  }
  res.set_header ("Allow", "GET, POST");
  return res.status (405).end ("Method Not Allowed");
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
res.setHeader("Allow", "GET,POST");
  return res.status(405).end("Method Not Allowed");
}

<<<<<<< HEAD
  if (req.method === "POST") {
    const now = new Date().toISOString();
    const {
      projectId
      entityType
      entityId
      clientUserId
      talentUserId
      reason
      reasonDetails
      description
    } = req.body |{}
    if (
      !projectId |
      !clientUserId |
      !talentUserId |
      !reason |
      !description
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const id = generateCaseId();
    const dispute: DisputeCase = {
      id
      projectId: String(projectId)
      entityType
      entityId
      clientUserId: String(clientUserId)
      talentUserId: String(talentUserId)
      createdAt: now
      updatedAt: now
      status: "Open"
      reason: reason as DisputeReason
      reasonDetails
      description
      attachments: []
      messages: []
    }
      id,
      projectId: String(projectId),
      entityType,
      entityId,
      clientUserId: String(clientUserId),
      talentUserId: String(talentUserId),
      createdAt: now,
      updatedAt: now,
      status: "Open",
      reason: reason as DisputeReason,
      reasonDetails,
      description,
      attachments: [],
      messages: [],
    };

    await createDispute(dispute);
    return res.status(201).json({ dispute });
  }

  res.setHeader("Allow", "GET,POST");
  return res.status(405).end("Method Not Allowed");
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/disputes/index.ts
>>>>>>> merged-prs-20250907-203621:pages.disabled/api-disabled/api/disputes/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Allow', ['GET', 'POST']);
import type { NextApiRequest, NextApiResponse } from 'next';
import { createDispute, readAllDisputes } from '../../../utils/fsdb';
import { parseUserFromRequest } from '../../../utils/auth';
import { DisputeCase, DisputeReason } from '../../../types/disputes';
import { generateCaseId } from '../../../utils/fsdb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req);

  if (req.method === 'GET') {
    const all = await readAllDisputes();
    let filtered = all;
    if (user.role !== 'admin') {
      filtered = all.filter(d => d.clientUserId === user.id || d.talentUserId === user.id)
    }
    return res.status(200).json({ disputes: filtered })
  }

  if (req.method === 'POST') {
    const now = new Date().toISOString();
    const {
=======
>>>>>>> origin/chore/fix-lint-and-merge
      projectId,
      entityType,
      entityId,
      clientUserId,
      talentUserId,
      reason,
      reasonDetails,
description,
    } = req.body || {};

<<<<<<< HEAD
    if (!projectId || !clientUserId || !talentUserId || !reason || !description) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const id = generateCaseId();
    const dispute: DisputeCase = {
      id,
      projectId: String(projectId),
=======
    if (
      !projectId |
      !clientUserId |
      !talentUserId |
      !reason |

      description} = req.body || {};

    if (!projectId || !clientUserId || !talentUserId || !reason || !description) {'
      return res.status(400).json({ error: 'Missing required fields' })

      id,
      projectId: String(projectId),

>>>>>>> origin/chore/fix-lint-and-merge
      entityType,
      entityId,
      clientUserId: String(clientUserId),
      talentUserId: String(talentUserId),
      createdAt: now,
<<<<<<< HEAD
      updatedAt: now,
      status: 'Open',
=======

      status: "Open",

>>>>>>> origin/chore/fix-lint-and-merge
      reason: reason as DisputeReason,
      reasonDetails,
      description,
      attachments: [],
<<<<<<< HEAD
      messages: []};
=======
      messages: [],

    };

    };
>>>>>>> origin/chore/fix-lint-and-merge

    await createDispute(dispute);
    return res && res.status(201).json({ dispute });
  }

<<<<<<< HEAD
  res.setHeader('AllowGET,POST');
  return res.status(405).end('Method Not Allowed')
}
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler() { return null; }
import type { NextApiRequest, NextApiResponse } from 'next';'
import { createDispute, readAllDisputes } from '../../../utils/fsdb';'
import { parseUserFromRequest } from '../../../utils/auth';'
import { DisputeCase, DisputeReason } from '../../../types/disputes';'
import { generateCaseId } from '../../../utils/fsdb';
export default async function handler(req, res) {}
  try {};
  const user = parseUserFromRequest(req);'
  if (req.method === 'GET') {}
    const all = await readAllDisputes();
    let filtered = all;'
    if (user.role !== 'admin') {;
      filtered = all.filter(d => d.clientUserId === user.id || d.talentUserId === user.id);
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return res.status(200).json({ disputes: filtered });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;'
  if (req.method === 'GET') {}
    const now = new Date().toISOString();
    const {;
      projectId;
      entityType;
      entityId;
      clientUserId,;
      talentUserId,;
      reason,;
      reasonDetails,;
      description} = req.body || {};
    if (!projectId || !clientUserId || !talentUserId || !reason || !description) {;'
      return res.status(400).json({ error: 'Missing required fields' });
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    const id = generateCaseId();
    const dispute: DisputeCase = {;
      id;
      projectId: String(projectId);
      entityType;
      entityId;
      clientUserId: String(clientUserId);
      talentUserId: String(talentUserId);
      createdAt: now,;
      updatedAt: now,;'
      status: 'Open',;
      reason: reason as DisputeReason,;
      reasonDetails,;
      description,;
      attachments: [],;
      messages: []},;

    await createDispute(dispute);
    return res.status(201).json({ dispute });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
  res.setHeader("Allow", "GET,POST");
  return res.status(405).end("Method Not Allowed");
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;'
  res.setHeader('AllowGET,POST');'
  return res.status(405).end('Method Not Allowed');
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:temp_exclude/pages_legacy/pages/api/disputes/index.ts
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages.disabled/api-disabled/api/disputes/index.ts
  res.setHeader('Allow', 'GET,POST');
  return res.status(405).end('Method Not Allowed');

}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/disputes/index.ts
>>>>>>> merged-prs-20250907-203621:pages.disabled/api-disabled/api/disputes/index.ts
