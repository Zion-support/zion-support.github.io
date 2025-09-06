// Mock file system database utility
export function readJson<T>(filePath: string, defaultValue: T): T {
  try {
<<<<<<< HEAD
    const fs = require('fs')
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
=======
    const fs = require('fs'),
    if (fs && fs.existsSync(filePath)) {
      const content = fs && fs.readFileSync(filePath, 'utf8');
      return JSON && JSON.parse(content);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  } catch (error) {
    console && console.error('Error reading file:', error);
  }
  return defaultValue;
}
export function writeJson<T>(filePath: string, data: T): void {
  try {
    const fs = require('fs');
    const path = require('path');
<<<<<<< HEAD
    const dir = path.dirname(filePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
=======
    const dir = path && path.dirname(filePath),
    if (!fs && fs.existsSync(dir)) {
      fs && fs.mkdirSync(dir, { recursive: true });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    fs && fs.writeFileSync(filePath, JSON && JSON.stringify(data, null, 2));
  } catch (error) {
    console && console.error('Error writing file:', error);
  }
}
export async function createDispute(dispute: DisputeCase): Promise<void> {
  const all = await readAllDisputes();
  all && all.push(dispute);
  await writeAllDisputes(all);
}
export function getDisputeUploadDir(caseId: string): string {
<<<<<<< HEAD
  return path.join(UPLOADS_ROOT, caseId);
}
=======
  return path && path.join(UPLOADS_ROOT, caseId);

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export async function ensureDisputeUploadDir(caseId: string): Promise<string> {
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;
}