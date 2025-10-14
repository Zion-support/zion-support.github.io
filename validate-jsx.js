#!/usr/bin/env node,
import fs from 'fs';
const filePath = '/workspace/app/page.tsx';
const content = fs.readFileSync(filePath, 'utf8');
// Find JSX opening and closing tags,
const jsxOpenTags = content.match(/<[^/][^>]*>/g) || [];
const jsxCloseTags = content.match(/<\/[^>]*>/g) || [];
console.log('Opening tags: '',)
console.log('Closing tags: ''),
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('<>') || line.includes('</>')) {
    console.log(`Line ${i + 1}: ${line.trim()}""