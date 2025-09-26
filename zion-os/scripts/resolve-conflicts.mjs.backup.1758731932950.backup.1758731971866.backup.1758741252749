import { promises as fs } from 'fs';
import path from 'path';

const ROOT = path.resolve(process.cwd(), 'src');

async function listFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return listFiles(fullPath);
    return fullPath;
  }));
  return files.flat();
}

function hasMarkers(content) {
  return content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>');
}

function resolveContent(content) {
  // Prefer the content after the last ======= up to >>>>>>> for each conflict block
  const lines = content.split('\n');
  const out = [];
  let i = 0;
  while (i < lines.length) {
    if (lines[i].startsWith('<<<<<<<')) {
      // skip until separator
      let j = i + 1;
      while (j < lines.length && !lines[j].startsWith('=======')) j++;
      if (j >= lines.length) break;
      // now collect until end marker
      let k = j + 1;
      const keep = [];
      while (k < lines.length && !lines[k].startsWith('>>>>>>>')) {
        keep.push(lines[k]);
        k++;
      }
      out.push(...keep);
      // advance past end marker
      i = k + 1;
      continue;
    }
    // normal line
    out.push(lines[i]);
    i++;
  }
  return out.join('\n');
}

async function main() {
  const files = (await listFiles(ROOT)).filter((f) => /\.(tsx?|jsx?)$/.test(f));
  let changed = 0;
  for (const file of files) {
    const content = await fs.readFile(file, 'utf8');
    if (!hasMarkers(content)) continue;
    const resolved = resolveContent(content);
    if (resolved !== content) {
      await fs.writeFile(file, resolved, 'utf8');
      changed++;
    }
  }
  console.log(`Resolved conflicts in ${changed} files.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

