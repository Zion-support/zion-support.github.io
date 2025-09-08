// Mock file system database utility
export function readJson<T>(filePath: string, defaultValue: T): T {  }
}
  }
}

export function writeJson<T>(filePath: string, data: T): void {
  try {
    const fs = require("fs");
    const path = require("path");
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing file:", error);    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
}

  } catch (error) {
    console && console.error('Error writing file:', error);
  }

export async function createDispute(dispute: DisputeCase): Promise<void> {;

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
=======  const all = await readAllDisputes();
  all && all.push(dispute);
  await writeAllDisputes(all);
}
export async function ensureDisputeUploadDir(caseId: string): Promise<string> {
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;
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
}

  return path && path.join(UPLOADS_ROOT, caseId);

export async function ensureDisputeUploadDir(caseId: string): Promise<string> {
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;

}