#!/usr/bin/env node;
const fs = require('fs')
    return match.replace(/,\s*$/, '')
  content = content.replace(/\{\s*,/g, '{'})
  content = content.replace(/>\s*,\s*$/gm, '>')
  content = content.replace(/>\s*,\s*</g, '><')
  content = content.replace(/\)\s*\{\s*,/g, ') {'}
  content = content.replace(/>\s*,\s*$/gm, '>')
    return match.replace(/\}\);/g, '}\n      });'
    return match.replace(/\}\);/g, '}\n      });'
    const content = fs.readFileSync(filePath, 'utf8')
      fs.writeFileSync(filePath, fixedContent, 'utf8')
      fs.writeFileSync(filePath, fixedContent, 'utf8')
console.log(' Starting ultimate syntax error fixing...')
const filesToFix = ['components/ContactForm.tsx']
  'components/ErrorBoundary.tsx'
  'components/PerformanceMonitor.tsx'
  'pages/cybersecurity.tsx'
  'pages/docs.tsx'
  console.log('\n All syntax errors have been fixed!')
  console.log('\n All syntax errors have been fixed!')
  console.log('\n No syntax errors found!')