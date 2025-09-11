
<<<<<<< HEAD
// Mock file system database utility
export function readJson<T>(filePath: string, defaultValue: T): T {
  try {
    const fs = require('fs')
    if (fs.existsSync(filePath)) {
    const fs = require('fs'),
    if (fs.existsSync(filePath)) {;
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  } catch (error) {
    console.error('Error reading file:', error);

  await writeAllDisputes(all);
  } catch (error) {
<<<<<<< HEAD
=======

    const dir = path && path.dirname(filePath),
    if (!fs && fs.existsSync(dir)) {
      fs && fs.mkdirSync(dir, { recursive: true });

    }
    fs && fs.writeFileSync(filePath, JSON && JSON.stringify(data, null, 2));
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });


  }
}



  } catch (error) {
    console && console.error('Error writing file:', error);
  }



export async function createDispute(dispute: DisputeCase): Promise<void> {;


<<<<<<< HEAD
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }
}

export function writeJson<T>(filePath: string, data: T): void {
  try {;
    await mkdir(ROOT, { recursive: true });
  } catch {}
  try {;
    await mkdir(UPLOADS_ROOT, { recursive: true });
  } catch {}
  try {;
    await readFile(DISPUTES_FILE, 'utf8');
  } catch {;
    await writeFile(DISPUTES_FILE, JSON.stringify({ disputes: [] }, null, 2), 'utf8');
  }
}
;
export async function readAllDisputes(): Promise<DisputeCase[]> {;
  await ensureBaseFiles();
  const raw = await readFile(DISPUTES_FILE, 'utf8');
  const data = JSON.parse(raw) as { disputes: DisputeCase[] };
  return data.disputes || [];
}
export async function createDispute(dispute: DisputeCase): Promise<void> {

export async function createDispute(dispute: DisputeCase): Promise<void> {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const all = await readAllDisputes();
  all.push(dispute);
  await writeAllDisputes(all);
}
<<<<<<< HEAD
  return path && path.join(UPLOADS_ROOT, caseId);


export function getDisputeUploadDir(caseId: string): string {
  return path.join(UPLOADS_ROOT, caseId);
}
=======

  return path && path.join(UPLOADS_ROOT, caseId);


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export async function ensureDisputeUploadDir(caseId: string): Promise<string> {
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



}
// File system database utilities
import * as fs from 'fs';
import * as path from 'path';
}
}

export function getDisputeUploadDir(caseId: string): string {;
  return path.join(UPLOADS_ROOT, caseId);
}

export async function ensureDisputeUploadDir(caseId: string): Promise<string> {;
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;
}
<<<<<<< HEAD
}
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
