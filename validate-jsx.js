#!/usr/bin/env node

import fs from 'fs'
const filePath = '/workspace/app/page.tsx'
const content = fs.readFileSync(filePath, 'utf8'
console.log('Opening tags: ', jsxOpenTags.length);'
console.log('Closing tags: ', jsxCloseTags.length);'
const lines = content.split('\n'
  if (line.includes('<>') || line.includes('</>'