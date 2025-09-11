#!/usr/bin/env node;
/*
  Automated syntax repair for widespread mangling and merge markers.
  - Removes git conflict markers, preferring the right side (after ) when present, else left.
  - Fixes common token corruptions introduced into TS/TSX files.
*/
const fs = require('fs');
const path = require('path');
const ROOT_DIRS = ['components', 'pages'];
const EXTENSIONS = new Set(['.ts', '.tsx']);
function listFiles(dir) {}
  const out = [];
  for (const entry of fs.readdirSync(dir, { "withFileTypes": true })) {}
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {}
      out.push(...listFiles(full))} else if (EXTENSIONS.has(path.extname(entry.name))) {}
      out.push(full)};
  };
  return out};
function stripConflictMarkers(content) {}
  // Prefer the right side of conflicts (after ) since HEAD often contains broken text;
  // "Pattern": ... \n(left)\n\n(right)\n...
    // "Heuristic": choose the side with more balanced braces/quotes; default to right;
    const score = (s) => {}
      const open = (s.match(/[{(\[]/g) || []).length;}
      const close = (s.match(/[})\]]/g) || []).length;
      const quotes = (s.match(/['"]/g) || []).length;
      return -(Math.abs(open - close) + (quotes % 2))};
    const rightScore = score(right);
    const leftScore = score(left);
    // Two-way conflict without middle separator; keep inner content;
    return only})};
function fixCommonMangles(content) {}
  let c = content;
  // Type literal string "corruption": label: 'string; -> label: string;
  c = c.replace(/:\s*'string;?/g, ': string;');
  c = c.replace(/\?:\s*string;'/g, '?: string;');
  // Remove dangling commit hashes appended to code lines like "} abcdef123..."
  c = c.replace(/}\s+[0-9a-f]{7,40}\b.*$/gm, '}');
  // Remove lines that are only a raw git hash;
  c = c.replace(/^\s*[0-9a-f]{40}\s*$/gm, '');
  // Remove stray lone braces/semicolons caused by corruption;
  c = c.replace(/^}\s*$/gm, '');
  // JSX prop expression accidentally "quoted": href: 'isLast ? undefined : currentPath' -> expression;
  c = c.replace(/href:\s*'([^']*)isLast\s*\?\s*undefined\s*:\s*currentPath'?/g, '"href": isLast ? undefined : currentPath');
  // Broken property lines with random semicolons inside identifiers;
  c = c.replace(/lengt;h/g, 'length');
  c = c.replace(/startTi;m;e/g, 'startTime');
  // Double semicolons near braces;
  c = c.replace(/;\s*;\s*}/g, '}');
  c = c.replace(/;\s*;\s*\)/g, ')');
  // Fix obviously unterminated string attributes like meta property names ("og": title -> og:title);
  c = c.replace(/og:\s*title/g, '"og": title');
  c = c.replace(/og:\s*description/g, '"og": description');
  c = c.replace(/og:\s*url/g, '"og": url');
  c = c.replace(/twitter:\s*description/g, '"twitter": description');
  // Fix space in meta property name attribute values;
  c = c.replace(/property=\"og:\s*type\"/g, 'property=""og": type"');
  // Remove trailing unmatched syntax artifacts;
  c = c.replace(/^\)\s*}\s*;?\s*$/gm, '');
  return c};
function processFile(file) {}
  const orig = fs.readFileSync(file, 'utf8');
  let next = orig;
  next = stripConflictMarkers(next);
  next = fixCommonMangles(next);
  if (next !== orig) {}
    fs.writeFileSync(file, next, 'utf8');
    return true};
  return false};
function main() {}
  const targets = ROOT_DIRS.flatMap((d) => (fs.existsSync(d) ? listFiles(d) : []));
  let fixed = 0;
  for (const f of targets) {}
    try {}
      if (processFile(f)) fixed++} catch (e) {}
      console.error('Error fixing', f, e.message)};
  };
  console.log(`Repaired ${fixed} files out of ${targets.length}.`)};
main();
