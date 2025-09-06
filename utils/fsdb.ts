

    }
  } catch (error) {
    console.error('Error reading file:', error);

<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  } catch (error) {

=======
  await writeAllDisputes(all);
  } catch (error) {

    const dir = path && path.dirname(filePath),
    if (!fs && fs.existsSync(dir)) {
      fs && fs.mkdirSync(dir, { recursive: true });

    }
    fs && fs.writeFileSync(filePath, JSON && JSON.stringify(data, null, 2));
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });


  }
}
<<<<<<< HEAD

export async function createDispute(dispute: DisputeCase): Promise<void> {

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  } catch (error) {
    console && console.error('Error writing file:', error);
  }



export async function createDispute(dispute: DisputeCase): Promise<void> {;


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  const all = await readAllDisputes();
  all.push(dispute);
  await writeAllDisputes(all);
}

<<<<<<< HEAD
=======
  return path && path.join(UPLOADS_ROOT, caseId);


export async function ensureDisputeUploadDir(caseId: string): Promise<string> {
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;

=======



}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
