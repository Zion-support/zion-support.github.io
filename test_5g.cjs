// Test file to check 5g-solutions structure
const fs = require('fs');
const content = fs.readFileSync('/workspace/app/5g-solutions/page.tsx', 'utf8');

// Count opening and closing braces
let openBraces = 0;
let closeBraces = 0;

for (let i = 0; i < content.length; i++) {
  if (content[i] === '{') openBraces++;
  if (content[i] === '}') closeBraces++;
}

console.log('Open braces:', openBraces);
console.log('Close braces:', closeBraces);
console.log('Difference:', openBraces - closeBraces);

// Check for common issues
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('{') && !line.includes('}')) {
    console.log(`Line ${i + 1}: ${line.trim()}`);
  }
}