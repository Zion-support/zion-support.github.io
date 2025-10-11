#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// Get all TypeScript files in the app directory
function getAllTsxFiles(dir) {
    const files = []
  const items = fs.readdirSync(dir)
  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath))
  } else if (item.endsWith('.tsx')) {
    files.push(fullPath)
  }
  }
  
  return files
}

function fixTsxFile(filePath) {
    try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    // Fix 1: Remove all </undefined>tags</undefined>
    if (content.includes('</undefined>')) {
      content = content.replace(/<\/undefined>/g, '')
      modified = true
  }

    // Fix 2: Fix malformed quotes in className
    if (content.includes('&quot;')) {
    content = content.replace(/&quot,/g, '"')
      modified = true
  }

    // Fix 3: Fix malformed JSX with missing opening tags
    const malformedJsxPattern = /<(\w+)([^>]*)\s*>\s*<\/\1>\s*([^<]+)/g,
    content = content.replace(malformedJsxPattern, (match, tagName, attributes, text) => {
      if (text.trim()) {
        modified = true
        return `<${tagName}${attributes}>${text}</${tagName}>`
      }
      return match
    })
    // Fix 4: Fix self-closing tags that should have content
    const selfClosingWithContentPattern = /<(\w+)([^>]*)\s*\/>\s*([^<]+)/g,
    content = content.replace(selfClosingWithContentPattern, (match, tagName, attributes, text) => {
      if (text.trim() && !text.includes('<')) {
        modified = true
        return `<${tagName}${attributes}>${text}</${tagName}>`
      }
      return match
    })
    // Fix 5: Fix malformed className attributes
    const malformedClassPattern = /className="([^"]*)"([^>]*)><\/undefined>/g,
    content = content.replace(malformedClassPattern, (match, className, rest) => {
      modified = true
      return `className="${className}"${rest}>`
    })
    // Fix 6: Fix malformed closing tags
    const malformedClosingPattern = /<\/undefined><\/undefined>/g,
    content = content.replace(malformedClosingPattern, '')
    if (content.includes('</undefined></undefined>')) {
    modified = true
  }

    // Fix 7: Fix malformed self-closing tags
    const malformedSelfClosingPattern = /\/><\/undefined>/g,
    content = content.replace(malformedSelfClosingPattern, '/>')
    if (content.includes('/></undefined>')) {
    modified = true
  }

    // Fix 8: Fix JSX elements with missing content between tags
    const emptyJsxPattern = /<(\w+)([^>]*)>\s*<\/\1>\s*([^<\n]+)/g,
    content = content.replace(emptyJsxPattern, (match, tagName, attributes, content) => {
      if (content.trim()) {
        modified = true
        return `<${tagName}${attributes}>${content}</${tagName}>`
      }
      return match
    })
    // Fix 9: Fix malformed return statements
    const malformedReturnPattern = /return\s*\(\s*<\/LoadingSpinner></g,$2 />
    content = content.replace(malformedReturnPattern, 'return (\n    <');$2 />
    if (content.includes('</LoadingSpinner></div><')) {$2 />
    modified = true
  }

    // Fix 10: Fix malformed conditional returns
    const malformedConditionalPattern = /return\s*<LoadingSpinner\s*></div>/g,
    content = content.replace(malformedConditionalPattern, 'return <LoadingSpinner />')</LoadingSpinner>if</LoadingSpinner> (content.includes('<LoadingSpinner >')) {
    </LoadingSpinner>modified</LoadingSpinner> = true
  }

    // Fix 11: Fix malformed JSX with incorrect closing tags
    const malformedJsxClosingPattern = /<(\w+)([^>]*)>\s*<\/\1>\s*<\/\1>/g,
    content = content.replace(malformedJsxClosingPattern, (match, tagName, attributes) => {
      modified = true
      return `<${tagName}${attributes}></${tagName}>`
    })
    // Fix 12: Fix malformed JSX with incorrect opening tags
    const malformedJsxOpeningPattern = /<(\w+)([^>]*)>\s*<\/\1>\s*<(\w+)([^>]*)>/g,
    content = content.replace(malformedJsxOpeningPattern, (match, tag1, attr1, tag2, attr2) => {
      modified = true
      return `<${tag1}${attr1}><${tag2}${attr2}>`
    })
    // Fix 13: Fix malformed JSX with incorrect nesting
    const malformedNestingPattern = /<(\w+)([^>]*)>\s*<\/\1>\s*<(\w+)([^>]*)>\s*([^<]+)\s*<\/\2>/g,
    content = content.replace(malformedNestingPattern, (match, tag1, attr1, tag2, attr2, text) => {
      modified = true
      return `<${tag1}${attr1}><${tag2}${attr2}>${text}</${tag2}></${tag1}>`
    })
    // Fix 14: Fix malformed JSX with incorrect closing tags
    const malformedClosingTagPattern = /<\/\w+><\/\w+>/g,
    content = content.replace(malformedClosingTagPattern, (match) => {
    const tags = match.match(/<\/\w+>/g)
      if (tags && tags.length > 1) {
        modified = true
        return tags[0]
  }
      return match
    })
    // Fix 15: Fix malformed JSX with incorrect opening tags
    const malformedOpeningTagPattern = /<(\w+)([^>]*)>\s*<\/\1>\s*<(\w+)([^>]*)>\s*([^<]+)\s*<\/\3>/g,
    content = content.replace(malformedOpeningTagPattern, (match, tag1, attr1, tag2, attr2, text) => {
      modified = true
      return `<${tag1}${attr1}><${tag2}${attr2}>${text}</${tag2}></${tag1}>`
    })
    // Fix 16: Fix malformed JSX with incorrect self-closing tags
    const malformedSelfClosingTagPattern = /<(\w+)([^>]*)>\s*<\/\1>\s*<(\w+)([^>]*)\s*\/>/g,
    content = content.replace(malformedSelfClosingTagPattern, (match, tag1, attr1, tag2, attr2) => {
      modified = true
      return `<${tag1}${attr1}><${tag2}${attr2} /></${tag1}>`
    })
    // Fix 17: Fix malformed JSX with incorrect nesting
    const malformedNestingPattern2 = /<(\w+)([^>]*)>\s*<\/\1>\s*<(\w+)([^>]*)>\s*([^<]+)\s*<\/\3>\s*<\/\1>/g,
    content = content.replace(malformedNestingPattern2, (match, tag1, attr1, tag2, attr2, text) => {
      modified = true
      return `<${tag1}${attr1}><${tag2}${attr2}>${text}</${tag2}></${tag1}>`
    })
    // Fix 18: Fix malformed JSX with incorrect closing tags
    const malformedClosingTagPattern2 = /<\/\w+><\/\w+><\/\w+>/g,
    content = content.replace(malformedClosingTagPattern2, (match) => {
    const tags = match.match(/<\/\w+>/g)
      if (tags && tags.length > 2) {
        modified = true
        return tags[0]
  }
      return match
    })
    // Fix 19: Fix malformed JSX with incorrect opening tags
    const malformedOpeningTagPattern2 = /<(\w+)([^>]*)>\s*<\/\1>\s*<(\w+)([^>]*)>\s*([^<]+)\s*<\/\3>\s*<\/\1>/g,
    content = content.replace(malformedOpeningTagPattern2, (match, tag1, attr1, tag2, attr2, text) => {
      modified = true
      return `<${tag1}${attr1}><${tag2}${attr2}>${text}</${tag2}></${tag1}>`
    })
    // Fix 20: Fix malformed JSX with incorrect self-closing tags
    const malformedSelfClosingTagPattern2 = /<(\w+)([^>]*)>\s*<\/\1>\s*<(\w+)([^>]*)\s*\/>\s*<\/\1>/g,
    content = content.replace(malformedSelfClosingTagPattern2, (match, tag1, attr1, tag2, attr2) => {
      modified = true
      return `<${tag1}${attr1}><${tag2}${attr2} /></${tag1}>`
    })
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Fixed: ${path.relative(__dirname, filePath)}`)
      return true
    }
    
    return false
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}

console.log('Starting ultimate TypeScript fixes...')
const appDir = path.join(__dirname, 'app')
const tsxFiles = getAllTsxFiles(appDir)
let fixedCount = 0
tsxFiles.forEach(filePath => {
    if (fixTsxFile(filePath)) {
    fixedCount++
  }
})
console.log(`Fixed ${fixedCount} files.`)