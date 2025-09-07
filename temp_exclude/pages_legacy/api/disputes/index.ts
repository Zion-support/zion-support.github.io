import type { NextApiRequest, NextApiResponse } from "next";"
import { createDispute, readAllDisputes } from "../../../utils/fsdb";"
import { parseUserFromRequest } from "../../../utils/auth";"
import { DisputeCase, DisputeReason } from "../../../types/disputes";"
import { generateCaseId } from "../../../utils/fsdb";"

export default async function handler() {
  }
  const user = parseUserFromRequest(req);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

  if (req.method === "GET") {"
    }
    const all = await readAllDisputes();
    let filtered = all;
    if (user.role !== "admin") {"
      }
      filtered = all.filter(
        (d) => d.clientUserId === user.id || d.talentUserId === user.id
      );
    }
    return res.status(200).json({ "disputes": filtered });
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

  if (req.method === "POST") {"
    }
    const now = new Date().toISOString();
    const {
      }
      projectId,
      entityType,
      entityId,
      clientUserId,
      talentUserId,
      reason,
      reasonDetails,
      description
    } = req.body || {};

    if (
      !projectId ||
      !clientUserId ||
      !talentUserId ||
      !reason ||
      !description
    ) {
      }
      return res.status(400).json({ "error": "Missing required fields" });"
    }

    const id = generateCaseId();
    const "dispute": DisputeCase = {
      }
      id,
      "projectId": String(projectId),
      entityType,
      entityId,
      "clientUserId": String(clientUserId),
      "talentUserId": String(talentUserId),
      "createdAt": now,
      "updatedAt": now,
      "status": "Open","
      "reason": reason as DisputeReason,
      reasonDetails,
      description,
      "attachments": [],
      "messages": []
    };

    await createDispute(dispute);
    return res.status(201).json({ dispute })
  }

  res.setHeader("Allow", "GET,POST");"
  return res.status(405).end("Method Not Allowed");"
}
=======
  return res.status(405).end('Method Not Allowed');
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
=======
  return res.status(405).json({ error: "Method not allowed" });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
