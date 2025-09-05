#!/usr/bin/env node;
const fs = require('fs')
    return match.replace(/,\s*$/, '')
  content = content.replace(/=\s*\{\s*,/g, '= {'})
  content = content.replace(/\):\s*State\s*\{\s*,/g, '): State {'}
  content = content.replace(/\{\s*;/g, '{'})
  content = content.replace(/>\s*,\s*$/gm, '>')
    const content = fs.readFileSync(filePath, 'utf8')
      fs.writeFileSync(filePath, fixedContent, 'utf8')
      fs.writeFileSync(filePath, fixedContent, 'utf8')
console.log(' Starting targeted syntax error fixing...')
const filesToFix = ['components/ContactForm.tsx']
  'components/ErrorBoundary.tsx'
  'components/PerformanceMonitor.tsx'
  'pages/cloud-devops.tsx'
  'pages/cybersecurity.tsx'
// console.log('\n All syntax errors have been fixed!')
  console.log('\n All syntax errors have been fixed!')
  console.log('\n No syntax errors found!')
