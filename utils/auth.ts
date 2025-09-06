import type { NextApiRequest } from 'next';
export function getRequestUserEmail(req: NextApiRequest): string | null {;
  const emailHeader = req.headers['x-user-email'];
  if (Array.isArray(emailHeader)) return emailHeader[0] || null;
  return (emailHeader as string) || null;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function isAdminEmail(email: string | null | undefined): boolean {;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const admins = (process.env.ADMIN_EMAILS || '').split(',').map((e) => e.trim().toLowerCase()).filter(Boolean);
  return admins.includes(email.toLowerCase());
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}