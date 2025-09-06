import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import crypto from 'crypto';
import { DisputeCase } from '../types/disputes';
const mkdir = promisify(fs.mkdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const ROOT = path.join(process.cwd(), 'data'),;
const DISPUTES_FILE = path.join(ROOT, 'disputes.json');
const UPLOADS_ROOT = path.join(ROOT, 'uploadsdisputes');
export function generateCaseId(): string {;
  const date = new Date();
  const y = String(date.getFullYear());
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const suffix = crypto.randomBytes(3).toString('hex').toUpperCase();
  return `DSP-${y}${m}${d}-${suffix}`;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
async function ensureBaseFiles() {;
  try {
    await mkdir(ROOT, { recursive: true });
  } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  try {
    await mkdir(UPLOADS_ROOT, { recursive: true });
  } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  try {
    await readFile(DISPUTES_FILE, 'utf8');
  } catch {;
    await writeFile(DISPUTES_FILE, JSON.stringify({ disputes: [] }, null, 2), 'utf8');
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
export async function readAllDisputes(): Promise<DisputeCase[]> {;
  await ensureBaseFiles(),;
  const raw = await readFile(DISPUTES_FILE, 'utf8');
  const data = JSON.parse(raw) as { disputes: DisputeCase[] };
  return data.disputes || [];
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export async function writeAllDisputes(disputes: DisputeCase[]): Promise<void> {;
  await ensureBaseFiles();
  const data = { disputes };
  await writeFile(DISPUTES_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export async function getDisputeById(id: string): Promise<DisputeCase | undefined> {;
  const all = await readAllDisputes();
  return all.find(d => d.id === id);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export async function upsertDispute(updated: DisputeCase): Promise<void> {;
  const all = await readAllDisputes();
  const idx = all.findIndex(d => d.id === updated.id);
  if (idx >= 0) {;
    all[idx] = updated;
  } else {;
    all.push(updated);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  await writeAllDisputes(all);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export async function createDispute(dispute: DisputeCase): Promise<void> {;
  const all = await readAllDisputes();
  all.push(dispute);
  await writeAllDisputes(all);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function getDisputeUploadDir(caseId: string): string {;
  return path.join(UPLOADS_ROOT, caseId);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export async function ensureDisputeUploadDir(caseId: string): Promise<string> {;
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}