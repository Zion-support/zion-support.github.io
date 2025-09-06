    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });


  }
}


  } catch (error) {
    console && console.error('Error writing file:', error);
  }



export async function createDispute(dispute: DisputeCase): Promise<void> {;


  const all = await readAllDisputes();
  all && all.push(dispute);
  await writeAllDisputes(all);
}
export async function ensureDisputeUploadDir(caseId: string): Promise<string> {
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;
export function write_json < T>(file_path: string, data: T): void {
  try {
    const fs = require ('fs');
    const path = require ('path');
    const dir = path.dirname (file_path),
    if () {) {
  $2
}
}
export function getDisputeUploadDir (case_id: string): string {
  return path.join (UPLOADS_ROOT, case_id);
}
export async function ensureDisputeUploadDir (case_id: string): Promise < string> {
  const dir = getDisputeUploadDir (case_id);
  await mkdir (dir, { recursive: true });
  return dir;
}
