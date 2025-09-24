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

function hasConflictMarkers(content) {
  return content.includes('<<<<<<<') && content.includes('=======') && content.includes('>>>>>>>');
}

function resolveConflicts(content) {
  // Keep right side: the text between ======= and >>>>>>>
  let output = content;
  const conflictRegex = /<<<<<<<[\s\S]*?=======[\s\S]*?>>>>>>>[^\n]*\n?/g;
  output = output.replace(conflictRegex, (match) => {
    const parts = match.split('=======');
    if (parts.length < 2) return '';
    const rightAndTail = parts[1];
    const rightSide = rightAndTail.replace(/>>>>>>>[^\n]*\n?/, '');
    return rightSide;
  });
  return output;
}

const allFiles = listFilesRecursively(SRC).filter((p) => /\.(tsx?|jsx|css|json)$/.test(p));
let changed = 0;

for (const file of allFiles) {
  const original = fs.readFileSync(file, 'utf8');
  if (!hasConflictMarkers(original)) continue;
  const resolved = resolveConflicts(original);
  if (resolved !== original) {
    fs.writeFileSync(file, resolved, 'utf8');
    changed += 1;
    console.log(`Resolved conflicts in: ${path.relative(ROOT, file)}`);
  }
}

console.log(`Done. Files updated: ${changed}`);
