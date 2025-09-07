export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({

    ok: true
    message:;
      "OAuth mock callback successful. Use /api / integrations / connect to finalize connection."
  });
}

      "OAuth mock callback successful. Use /api/integrations/connect to finalize connection.",;
  });
}
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
<<<<<<< HEAD:temp_exclude/pages_api_legacy/pages_api/integrations/oauth/[provider]/callback.ts
=======
import { PROVIDERS } from '../../../lib/integrations/registry';
>>>>>>> merged-prs-20250907-203621:pages_backup_conflict_1757239547/api/integrations/providers.ts
export default function handler(req, res) {
  try {
  res.status(200).json({ ok: true, message: 'OAuth mock callback successful. Use /api/integrations/connect to finalize connection.' });
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

