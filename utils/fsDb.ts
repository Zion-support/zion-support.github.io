import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
export function readJson<T>(filePath: string, defaultValue: T): T {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  try {
    const fullPath = path.join(DATA_DIR, filePath);
    const data = fs.readFileSync(fullPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return defaultValue;
  }
}

export function writeJson<T>(filePath: string, data: T): void {
  try {
    const fullPath = path.join(DATA_DIR, filePath);
    const dir = path.dirname(fullPath);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing JSON file:", error);
  }
}

export async function readJsonAsync<T>(
  filePath: string,
  defaultValue: T,
): Promise<T> {
  try {
    const fullPath = path.join(DATA_DIR, filePath);
    const data = await fs.readFile(fullPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return defaultValue;
  }
}

export async function writeJsonAsync<T>(
  filePath: string,
  data: T,
): Promise<void> {
  try {
    const fullPath = path.join(DATA_DIR, filePath);
    const dir = path.dirname(fullPath);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(fullPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing JSON file:", error);
  }
}
