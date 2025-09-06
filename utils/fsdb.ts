
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('Error reading file:', error);
=======

}
;
export async function ensureDisputeUploadDir(caseId: string): Promise<string> {;
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;

  } catch (error) {
=======
    console.error('Error reading file:', error);

  await writeAllDisputes(all);
  } catch (error) {
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });


  }
=======
}
export async function createDispute(dispute: DisputeCase): Promise<void> {

export async function createDispute(dispute: DisputeCase): Promise<void> {;
  } catch (error) {
    console && console.error('Error writing file:', error);
  }



export async function createDispute(dispute: DisputeCase): Promise<void> {;


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const all = await readAllDisputes();
  all.push(dispute);
  await writeAllDisputes(all);
}


}
<<<<<<< HEAD
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
