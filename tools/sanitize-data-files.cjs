#!/usr/bin/env node
/*
  Sanitize obviously corrupted TS/JSON-like data files under src/data.
  - Collapses doubled quotes (\"\" -> \")
  - Removes accidental trailing quote tokens after commas ( ,"" -> , )
  - Fixes common artifacts like {"} -> { }, ["] -> [ ]
  - Removes stray closing quotes before line terminators (e.g., %"" -> %")
  - Keeps changes conservative to avoid structural damage
*/

const fs = require('fs');
const path = require('path');

const root = process.cwd();
const dataDir = path.join(root, 'src', 'data');

function listTsFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.ts'))
    .map((f) => path.join(dir, f));
}

function sanitizeContent(original) {
  let updated = original;

  // Collapse triple or more quotes first (e.g., \""" -> \")
  updated = updated.replace(/"{3,}/g, '"');

  // Collapse doubled quotes that appear widely (\"\" -> \")
  updated = updated.replace(/""/g, '"');

  // Remove quote tokens that trail immediately after comma ( ," -> , )
  updated = updated.replace(/,\s*"\s*(?=[\]\}\),]|\n)/g, ', ');

  // Replace {"} with {} and ["] with [] when they appear as empty containers
  updated = updated.replace(/\{\s*"\s*\}/g, '{}');
  updated = updated.replace(/\[\s*"\s*\]/g, '[]');

  // Fix trailing quote before semicolon/bracket/brace line ends
  updated = updated.replace(/"\s*([\];}\)])\s*;/g, '"$1;');
  updated = updated.replace(/"\s*([\];}\)])/g, '"$1');

  // Remove accidental quotes after numeric literals like 123," -> 123,
  updated = updated.replace(/(\b\d+(?:\.\d+)?)\s*,\s*"\s*(?=[\n\]\}])/g, '$1, ');

  // Clean artifacts like ];" -> ];
  updated = updated.replace(/];\s*"/g, '];');

  // Clean artifacts like };" -> };
  updated = updated.replace(/};\s*"/g, '};');

  // Ensure there is a newline at EOF
  if (!updated.endsWith('\n')) updated += '\n';

  return updated;
}

function processFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8');
  const sanitized = sanitizeContent(original);
  if (sanitized !== original) {
    fs.writeFileSync(filePath, sanitized, 'utf8');
    console.log(`Sanitized: ${path.relative(root, filePath)}`);
    return true;
  }
  return false;
}

function main() {
  const files = listTsFiles(dataDir);
  if (files.length === 0) {
    console.log('No data files found to sanitize.');
    return;
  }
  let changed = 0;
  for (const file of files) {
    try {
      if (processFile(file)) changed += 1;
    } catch (err) {
      console.warn(`Skip (error): ${file} -> ${err.message}`);
    }
  }
  console.log(`Sanitization complete. Files changed: ${changed}/${files.length}`);
}

main();

