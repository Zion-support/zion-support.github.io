#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

function normalize(content) {
  let result = content
  // Remove commas between JSX tags
  result = result.replace(/>\s*,\s*</g, '><')
  // Remove stray commas after opening braces
  result = result.replace(/\{\s*,/g, '{')
  // Normalize ") {" to ") {"
  result = result.replace(/\)\s*\{\s*,/g, ') {')
  // Normalize "}
});" endings that were split
  result = result.replace(/\}\);/g, '}\n}
});')
  return result
}

function processFile(filePath) {
  try {
    const original = fs.readFileSync(filePath, 'utf8')
    const fixed = normalize(original)
    if (fixed !== original) {
      fs.writeFileSync(filePath, fixed, 'utf8')
      console.log(`Ultimate fixed: ${filePath}`)
      return true
    }
    return false
  } catch (e) {
    console.error(`Ultimate fixer error for ${filePath}: ${e.message}`)
    return false
  }
}

function walk(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    if (e.name.startsWith('.git')) continue
    const full = path.join(dir, e.name)
    if (e.isDirectory()) walk(full, files)
    else if (/\.(tsx|jsx|js|ts|cjs)$/.test(e.name)) files.push(full)
  }
  return files
}

console.log('Starting ultimate syntax fixer...')
let count = 0
for (const f of walk(process.cwd())) {
  if (processFile(f)) count++
}
console.log(`Ultimate fixer updated ${count} files`)