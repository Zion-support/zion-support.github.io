import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
// Function to fix structural issues
function fixStructuralIssues(content) {
  // Fix malformed function declarations
  content = content.replace(/export default function (\w+)()\s*{\s*return\s*(\s*<div>Content<\/div>\s*),\s*}\s*return\s*(/g
    'export default function $1() {\n  return (')
  // Fix duplicate return statements
  content = content.replace(/return\s*(\s*<div>Content<\/div>\s*),\s*}\s*return\s*(/g, 'return (')
  // Fix malformed JSX
  content = content.replace(/<motion\.div,/g, '<motion.div')
  content = content.replace(/<div,/g, '<div')
  content = content.replace(/<section,/g, '<section')
  // Fix array syntax issues
  content = content.replace(/]\s*$/g, ']')
  content = content.replace(/]\s*\n\s*{/g, ',\n  {')
  // Fix malformed map functions
  content = content.replace(/{([^}]+)\.map(([^)]+)) => {}/g, '{$1.map(($2) => (')
  content = content.replace(/{([^}]+)\.map(([^)]+)) => (/g, '{$1.map(($2) => (')
  // Fix missing closing parentheses
  content = content.replace(/)\s*}\s*$/g, '))}')
  // Fix malformed JSX attributes
  content = content.replace(/className="[^"]*">"/g, 'className="min-h-screen bg-gray-50">')
  content = content.replace(/<p className="[^"]*">"/g, '<p className="text-xl md: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">')
  // Fix missing closing tags
  content = content.replace(/<\/div>\s*)\s*}\s*$/g, '</div>\n  ),\n}')
  // Fix semicolons in JSX
  content = content.replace(/,\s*$/g, '')
  return content
};
// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const fixedContent = fixStructuralIssues(content)
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
// Process the specific files that have errors
const errorFiles = [
  'pages/about.tsxpages/accessibility.tsxpages/ai-services.tsxpages/api.tsxpages/blog.tsx'
]
console.log(`Processing ${errorFiles.length} files with structural issues`)
let fixedCount = 0
errorFiles.forEach(file => {
  if (processFile(file)) {
    fixedCount++
  };
});
console.log(`Fixed ${fixedCount} files`)));