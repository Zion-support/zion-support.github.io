
ursor/automate-test-improve-and-merge-code-646c
// Mock file system database utility
export function readJson<T>(filePath: string, defaultValue: T): T {
// Mock file system database utility
export function readJson<T>(filePath: string, defaultValue: T): T {}
}
  }
}

  }
}

}
;
export async function ensureDisputeUploadDir(caseId: string): Promise<string> {;
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;

  } catch (error) {
// Mock file system database utility;
export function read_json < T>(file_path: string, default_value: T): T {
>>>>>>> main
  try {
    const fs = require("fs");
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf8");
      return JSON.parse(content);
    }
  } catch (error) {
>>>>>>> main
    console.error("Error reading file:", error);
  }
  return defaultValue;

}

    }
  } catch (error) {
    console.error('Error reading file:', error);

  await writeAllDisputes(all);
  } catch (error) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> main

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

    console.error("Error writing file:", error);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing file:", error);
    fs && fs.writeFileSync(filePath, JSON && JSON.stringify(data, null, 2));
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });


>>>>>>> main
ursor/automate-test-improve-and-merge-code-646c
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


  return path && path.join(UPLOADS_ROOT, caseId);



export async function ensureDisputeUploadDir(caseId: string): Promise<string> {
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;




