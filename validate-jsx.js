#!/usr/bin/env node

import fs from &apos;fs&apos;;

const filePath = &apos;/workspace/app/page.tsx&apos;;
const content = fs.readFileSync(filePath, &apos;utf8&apos;);

// Find JSX opening and closing tags
const jsxOpenTags = content.match(/<[^/][^>]*>/g) || [];
const jsxCloseTags = content.match(/<\/[^>]*>/g) || [];

// Check for specific issues
const lines = content.split(&apos;\n&apos;);
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes(&apos;<>&apos;) || line.includes(&apos;</>&apos;)) {
    }`);
  }
}

// Check for unclosed divs
let divCount = 0;
let sectionCount = 0;
let fragmentCount = 0;

for (const tag of jsxOpenTags) {if (tag.includes(&apos;<div&apos;)) divCount++;
  if (tag.includes(&apos;<section&apos;)) sectionCount++;
  if (tag.includes(&apos;<>&apos;)) fragmentCount++}

let closeDivCount = 0;
let closeSectionCount = 0;
let closeFragmentCount = 0;

for (const tag of jsxCloseTags) {if (tag.includes(&apos;</div&apos;)) closeDivCount++;
  if (tag.includes(&apos;</section&apos;)) closeSectionCount++;
  if (tag.includes(&apos;</>&apos;)) closeFragmentCount++}

console.log(&apos;Div tags - Open:&apos;, divCount, &apos;Close: &apos;, closeDivCount);
console.log(&apos;Section tags - Open:&apos;, sectionCount, &apos;Close: &apos;, closeSectionCount);
console.log(&apos;Fragment tags - Open:&apos;, fragmentCount, &apos;Close: &apos;, closeFragmentCount);
