<<<<<<< HEAD
// Mock file system database utility
export function readJson<T>(filePath: string, defaultValue: T): T {
  try {
<<<<<<< HEAD
    const fs = require('fs')
    if (fs.existsSync(filePath)) {
=======
    const fs = require('fs'),
    if (fs.existsSync(filePath)) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('Error reading file:', error);
=======

  await writeAllDisputes(all);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  }
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
export function writeJson<T>(filePath: string, data: T): void {
  try {;
    const fs = require('fs');
    const path = require('path');
    const dir = path.dirname(filePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
export async function ensureDisputeUploadDir(caseId: string): Promise<string> {;
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
<<<<<<< HEAD
export async function createDispute(dispute: DisputeCase): Promise<void> {
=======

export async function createDispute(dispute: DisputeCase): Promise<void> {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const all = await readAllDisputes();
  all.push(dispute);
  await writeAllDisputes(all);
}
<<<<<<< HEAD
export function getDisputeUploadDir(caseId: string): string {
  return path.join(UPLOADS_ROOT, caseId);
}
export async function ensureDisputeUploadDir(caseId: string): Promise<string> {
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======

export function getDisputeUploadDir(caseId: string): string {;
  return path.join(UPLOADS_ROOT, caseId);
}

export async function ensureDisputeUploadDir(caseId: string): Promise<string> {;
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
