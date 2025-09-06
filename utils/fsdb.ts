<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('Error reading file:', error);

  await writeAllDisputes(all);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
}

}
;
export async function ensureDisputeUploadDir(caseId: string): Promise<string> {;
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;

  } catch (error) {
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
// Mock file system database utility
export function readJson<T>(filePath: string, defaultValue: T): T {
  try {
    const fs = require('fs')
    if (fs.existsSync(filePath)) {
    const fs = require('fs'),
    if (fs.existsSync(filePath)) {;
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  } catch (error) {
    console.error('Error reading file:', error);

  await writeAllDisputes(all);
  } catch (error) {
<<<<<<< HEAD

    const dir = path && path.dirname(filePath),
    if (!fs && fs.existsSync(dir)) {
      fs && fs.mkdirSync(dir, { recursive: true });

    }
    fs && fs.writeFileSync(filePath, JSON && JSON.stringify(data, null, 2));
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });


  }
<<<<<<< HEAD

=======
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  } catch (error) {
    console && console.error('Error writing file:', error);
  }



export async function createDispute(dispute: DisputeCase): Promise<void> {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }
}

export function writeJson<T>(filePath: string, data: T): void {
  try {;
    const fs = require('fs');
    const path = require('path');
    const dir = path.dirname(filePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

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
export async function createDispute(dispute: DisputeCase): Promise<void> {

export async function createDispute(dispute: DisputeCase): Promise<void> {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const all = await readAllDisputes();
  all.push(dispute);
  await writeAllDisputes(all);
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
}
=======
  return path && path.join(UPLOADS_ROOT, caseId);


=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function getDisputeUploadDir(caseId: string): string {
  return path.join(UPLOADS_ROOT, caseId);
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export async function ensureDisputeUploadDir(caseId: string): Promise<string> {
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;
<<<<<<< HEAD
<<<<<<< HEAD

=======



}
=======
// File system database utilities
import * as fs from 'fs';
import * as path from 'path';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

export function getDisputeUploadDir(caseId: string): string {;
  return path.join(UPLOADS_ROOT, caseId);
}

export async function ensureDisputeUploadDir(caseId: string): Promise<string> {;
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

}

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
