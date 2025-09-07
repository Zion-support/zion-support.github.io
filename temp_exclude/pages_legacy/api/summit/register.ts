import type { NextApiRequest, NextApiResponse } from "next";"
import { supabase } from "../../../utils/supabase/client";"
export default async function handler() {
  }
  if (req.method !== "POST") {"
    }
    return res.status(405).json({ "error": "Method not allowed" });"
  }

  try {
    }
    const { name, email, role, country, source } = req.body || {};

    if (!name || !email || !role || !country) {
      }
      return res.status(400).json({ "error": "Missing required fields" });"
    }

const { data, error } = await supabase;
      .from("summit_registrations")"
      .insert([
        {
          }
          name,
          email,
          role,
          country,
          "source": source || "zion-global-2025","
          "created_at": new Date().toISOString()
        }
      ])
      .select("*")"
      .single();

    if (error) {
      }
      return res.status(500).json({ "error": error.message });
    }

    return res.status(200).json({ "ok": true, "registration": data });
  } catch ("e": any) {
    }
    return res.status(500).json({ "error": e?.message || "Unknown error" });"
  }
=======
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end("Method Not Allowed");
  }
  
  res.status(200).json({ message: "Endpoint working" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}