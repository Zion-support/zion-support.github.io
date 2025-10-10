const fs = require('fs');

// Read the Footer.tsx file
const content = fs.readFileSync('app/components/Footer.tsx', 'utf8');

// Check for any unusual characters around line 117
const lines = content.split('\n');
console.log('Line 115:', JSON.stringify(lines[114]));
console.log('Line 116:', JSON.stringify(lines[115]));
console.log('Line 117:', JSON.stringify(lines[116]));
console.log('Line 118:', JSON.stringify(lines[117]));
console.log('Line 119:', JSON.stringify(lines[118]));

// Check for any non-printable characters
const line117 = lines[116];
for (let i = 0; i < line117.length; i++) {
  const char = line117[i];
  const code = char.charCodeAt(0);
  if (code < 32 || code > 126) {
    console.log(`Non-printable character at position ${i}: ${code}`);
  }
}