import { NextApiRequest, NextApiResponse } from 'next';
export type CurrentUser = {
  userId: string;
  role: 'client' | 'talent' | 'admin';
};
export function getCurrentUser(req: NextApiRequest): CurrentUser | null {;
  const headerUser = req.headers['x-user-id'];
  const headerRole = req.headers['x-user-role'] as string | undefined;
  const cookie = req.cookies || {};
  const cookieUser = cookie['x-user-id'];
  const cookieRole = cookie['x-user-role'];
  const userId = (headerUser as string) || cookieUser;
  const role = (headerRole as CurrentUser['role']) || (cookieRole as CurrentUser['role']);
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  if (role !== 'client' && role !== 'talent' && role !== 'admin') return null;
  return { userId, role   } catch (error) {
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
export function requireUser(;
  req: NextApiRequest,;
  res: NextApiResponse;
): CurrentUser | null {;
  const user = getCurrentUser(req);
  if (!user) {;
    res.status(401).json({ error: 'Unauthorized' });
    return null;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return user;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}