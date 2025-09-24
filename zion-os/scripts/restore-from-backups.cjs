#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');

function listFilesRecursively(startDir) {
  const results = [];
  const stack = [startDir];
  while (stack.length) {
    const dir = stack.pop();
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
      } else {
        results.push(fullPath);
      }
    }
  }
  return results;
}

function groupBackups(files) {
  const groups = new Map();
  for (const file of files) {
    const match = file.match(/^(.*)\.backup\.(\d+)$/);
    if (!match) continue;
    const base = match[1];
    const ts = Number(match[2]);
    const arr = groups.get(base) || [];
    arr.push({ file, ts });
    groups.set(base, arr);
  }
  return groups;
}

const all = listFilesRecursively(SRC);
const backups = all.filter((p) => p.includes('.backup.'));
const groups = groupBackups(backups);

let restored = 0;
for (const [base, entries] of groups.entries()) {
  // pick the latest by timestamp
  const latest = entries.sort((a, b) => b.ts - a.ts)[0];
  try {
    const content = fs.readFileSync(latest.file, 'utf8');
    fs.writeFileSync(base, content, 'utf8');
    restored += 1;
    console.log(`Restored ${path.relative(ROOT, base)} from ${path.relative(ROOT, latest.file)}`);
  } catch (e) {
    console.warn(`Failed to restore ${base}: ${e.message}`);
  }
}

console.log(`Restored ${restored} files from backups.`);
