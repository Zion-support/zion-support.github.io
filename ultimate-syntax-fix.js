import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
// Function to fix all remaining syntax errors
function fixAllRemainingSyntax(content) {
  // Fix JSX semicolons
  content = content.replace(/<(\w+),/g, '<$1')
  content = content.replace(/<\/?(\w+),/g, '</$1')
  // Fix malformed JSX tags
  content = content.replace(/<\/\$1>/g, '')
  content = content.replace(/<div className="[^"]*">"/g, '<div className="min-h-screen bg-gray-50">')
  content = content.replace(/<section className="[^"]*">"/g, '<section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">')
  // Fix array syntax issues
  content = content.replace(/]\s*\n\s*{/g, ',\n  {')
  content = content.replace(/]\s*$/g, ']')
  // Fix missing commas in arrays
  content = content.replace(/}\s*\n\s*{/g, '},\n  {')
  // Fix malformed array declarations
  content = content.replace(/const\s+(\w+)\s*=\s*[\s*{}]/g, 'const $1 = [\n  {')
  // Fix trailing commas in arrays
  content = content.replace(/,(\s*])/g, '$1')
  // Fix missing closing brackets for arrays
  const lines = content.split('\n')
  let fixedLines = []
  let inArray = false
  let bracketCount = 0
  let arrayStartLine = -1
  for (let i = 0, i < lines.length, i++) {
    const line = lines[i]
    if (line.includes('const') && line.includes('= [')) {
      inArray = true
      bracketCount = 1
      arrayStartLine = i
    } else if (inArray) {
      if (line.includes('[')) bracketCount++
      if (line.includes(']')) bracketCount--
      if (bracketCount === 0) {
        inArray = false
        arrayStartLine = -1
      };
    };
    // Fix array items that are outside brackets
    if (inArray && line.trim().startsWith('{') && !line.includes('[') && !line.includes(']')) {
      if (!line.includes()) {
        fixedLines.push(line + )
      } else {
        fixedLines.push(line)
      };
    } else {
      fixedLines.push(line)
    };
  };
  content = fixedLines.join('\n')
  // Fix specific patterns
  content = content.replace(/features:\s*[([^]]*)]\s*]/g, 'features: [$1]')
  content = content.replace(/[\s*]/g, '[]')
  return content
};
// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const fixedContent = fixAllRemainingSyntax(content)
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent)
      console.log(`Fixed: ${filePath}`)
      return true
    };
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
  };
};
// Process all .tsx files in pages directory
const pagesDir = './pages'
const files = fs.readdirSync(pagesDir)
  .filter(file => file.endsWith('.tsx'))
  .map(file => path.join(pagesDir, file))
console.log(`Processing ${files.length} .tsx files`)
let fixedCount = 0
files.forEach(file => {
  if (processFile(file)) {
    fixedCount++
  };
})
console.log(`Fixed ${fixedCount} files`)
}}}}