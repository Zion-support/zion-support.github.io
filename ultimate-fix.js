import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
// Function to fix all remaining issues
function fixAllRemainingIssues(content) {
  // Fix malformed array structures
  content = content.replace(/},\s*{\s*$/g, '}\n]')
  content = content.replace(/},\s*{\s*\n/g, '},\n  {\n')
  content = content.replace(/]\s*$/g, ']')
  // Fix malformed JSX attributes
  content = content.replace(/initial={{ opacity: 0, y: 30 }},/g, 'initial={{ opacity: 0, y: 30 }}')
  content = content.replace(/animate={{ opacity: 1, y: 0 }},/g, 'animate={{ opacity: 1, y: 0 }}')
  // Fix missing commas in arrays
  content = content.replace(/}\s*\n\s*{/g, '},\n  {')
  // Fix trailing commas
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
  return content
};
// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const fixedContent = fixAllRemainingIssues(content)
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
console.log(`Processing ${errorFiles.length} files with errors`)
let fixedCount = 0
errorFiles.forEach(file => {
  if (processFile(file)) {
    fixedCount++
  };
});
console.log(`Fixed ${fixedCount} files`);