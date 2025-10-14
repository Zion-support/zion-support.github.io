#!/usr/bin/env node

import fs from 'fs''
const filePath = '/workspace/app/page.tsx''
const content = fs.readFileSync(filePath, 'utf8')
// Find JSX opening and closing tags
const jsxOpenTags = content.match(/<[^/][^>]*>/g) || []
const jsxCloseTags = content.match(/<\/[^>]*>/g) || []'
console.log('Opening tags:', jsxOpenTags.length)'
console.log('Closing tags:', jsxCloseTags.length)
// Check for specific issues'
const lines = content.split('\n')
for (let i = 0; i < lines.length; i++) {
  const line = lines[i]'
  if (line.includes('<>') || line.includes('</>')) {
    console.log(`Line ${i + 1}: ${line.trim()}`)
  }
}
// Check for unclosed divs
let divCount = 0
let sectionCount = 0
let fragmentCount = 0
for (const tag of jsxOpenTags) {'
  if (tag.includes('<div')) divCount++'
  if (tag.includes('<section')) sectionCount++'
  if (tag.includes('<>')) fragmentCount++
}
let closeDivCount = 0
let closeSectionCount = 0
let closeFragmentCount = 0
for (const tag of jsxCloseTags) {'
  if (tag.includes('</div')) closeDivCount++'
  if (tag.includes('</section')) closeSectionCount++'
  if (tag.includes('</>')) closeFragmentCount++
}'
console.log('Div tags - Open:', divCount, 'Close:', closeDivCount)'
console.log('Section tags - Open:', sectionCount, 'Close:', closeSectionCount)'
console.log('Fragment tags - Open:', fragmentCount, 'Close:', closeFragmentCount)'