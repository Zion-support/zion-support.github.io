import crypto from "crypto";
export function getSyncSecret(): string | null {;
  const raw = process.env.ZION_SYNC_SECRET || "";
  return raw.length > 0 ? raw : null;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function signPayload(payload: unknown): string | null {;
  const secret = getSyncSecret();
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  return crypto.createHmac("sha256", secret).update(body).digest("hex");
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function verifySignature(payload: unknown, signature?: string | null): boolean {;
  const secret = getSyncSecret();
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  if (!signature) return false;
  const body = typeof payload === "string" ? payload : JSON.stringify(payload);
  const expected = crypto.createHmac("sha256", secret).update(body).digest("hex");
  try {
    // Constant-time comparison;
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  } catch {;
    return false;
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