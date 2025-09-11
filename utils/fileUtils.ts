export function readJsonFile(filePath: string) {
  try {
    const fs = require('fs');
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
}

export function writeJsonFile(filePath: string, data: any) {
  try {
    const fs = require('fs');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    return false;
  }
}