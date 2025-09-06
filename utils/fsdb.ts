// Mock file system database utility
export function readJson<T>(filePath: string, defaultValue: T): T {
  try {
    }
  } catch (error) {
    console && console.error('Error reading file:', error);
=======
// Mock file system database utility;
export function read_json < T>(file_path: string, default_value: T): T {
  try {
    const fs = require ('fs'),
    if () {) {
  $2
}
      const content = fs.readFileSync (file_path, 'utf8');
      return JSON.parse (content);
    }
  } catch (error) {
    console.error ('Error reading file:', error);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
  return default_value;
}
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
export async function ensureDisputeUploadDir(caseId: string): Promise<string> {
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;
=======
export function write_json < T>(file_path: string, data: T): void {
  try {
    const fs = require ('fs');
    const path = require ('path');
    const dir = path.dirname (file_path),
    if () {) {
  $2
}
      fs.mkdir_sync (dir, { recursive: true });
    }
    fs.writeFileSync (file_path, JSON.stringify (data, null, 2));
  } catch (error) {
    console.error ('Error writing file:', error);
  }
}
export async function create_dispute (dispute: DisputeCase): Promise < void> {
  const all = await readAllDisputes ();
  all.push (dispute);
  await writeAllDisputes (all);
}
export function getDisputeUploadDir (case_id: string): string {
  return path.join (UPLOADS_ROOT, case_id);
}
export async function ensureDisputeUploadDir (case_id: string): Promise < string> {
  const dir = getDisputeUploadDir (case_id);
  await mkdir (dir, { recursive: true });
  return dir;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
