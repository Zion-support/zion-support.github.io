// Mock file system database utility
export function readJson<T>(filePath: string, defaultValue: T): T {
  try {
    const fs = require("fs");
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf8");
      return JSON.parse(content);
    }
  } catch (error) {
    console.error("Error reading file:", error);
  }
  return defaultValue;
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
    console.error("Error writing file:", error);
  }
}