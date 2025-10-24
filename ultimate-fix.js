<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix all extra quotes at end of lines
    const newContent = content.replace(/"\s*$/gm, '');
    
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }

    // Fix missing closing quotes in className
    content = content.replace(/className="([^"]*)\s*$/gm, 'className="$1"');
    
    // Fix missing closing quotes in href
    content = content.replace(/href="([^"]*)\s*$/gm, 'href="$1"');
    
    // Fix missing closing quotes in src
    content = content.replace(/src="([^"]*)\s*$/gm, 'src="$1"');
    
    // Fix missing closing quotes in alt
    content = content.replace(/alt="([^"]*)\s*$/gm, 'alt="$1"');
    
    // Fix missing closing quotes in title
    content = content.replace(/title="([^"]*)\s*$/gm, 'title="$1"');
    
    // Fix extra quotes in text content
    content = content.replace(/>\s*([^<]*)"\s*</gm, '>$1<');
    
    // Fix missing closing quotes in JSX attributes
    content = content.replace(/(\w+)="([^"]*)\s*$/gm, '$1="$2"');
    
    // Fix missing semicolons after imports
    content = content.replace(/import\s+[^;]*;\s*$/gm, (match) => {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    });
    
    // Fix missing closing parentheses
    content = content.replace(/\)\s*\)\s*}\s*$/gm, ')\n  )\n}');
    
    // Fix malformed JSX closing tags
    content = content.replace(/<(\w+)([^>]*)>\s*([^<]*)\s*<\/>\s*\)/g, '<$1$2>$3</$1>\n  )');
    
    // Fix missing return statements
    content = content.replace(/const\s+(\w+):\s*React\.FC<[^>]+>\s*=\s*\(\{[^}]*\}\)\s*=>\s*\{([^}]*)\}/g, 
      (match, name, body) => {
        if (!body.includes('return')) {
          return match.replace(/\{([^}]*)\}/, '{\n  return (\n    $1\n  )\n}');
        }
        return match;
      }
    );

    // Fix unterminated string literals
    content = content.replace(/"([^"]*)\s*$/gm, '"$1"');
    
    // Fix missing closing parentheses in JSX
    content = content.replace(/<(\w+)([^>]*)>\s*([^<]*)\s*<\/>\s*\)/g, '<$1$2>$3</$1>\n  )');
    
    // Fix malformed JSX expressions
    content = content.replace(/return\s*\(\s*<(\w+)>([^<]*)<\/\1>\s*<(\w+)>([^<]*)<\/\3>\s*\)/g, 
      'return (\n    <>\n      <$1>$2</$1>\n      <$3>$4</$3>\n    </>\n  )');

    // Additional cleanup
    // Remove duplicate semicolons
    content = content.replace(/;;+/g, ';');
    
    // Fix common JSX issues
    content = content.replace(/<(\w+)\s+className\s*=\s*\{([^}]+)\}\s*>/g, '<$1 className={$2}>');
    
    // Fix missing closing tags
    content = content.replace(/<(\w+)([^>]*)>\s*([^<]*)\s*<\/>\s*\)/g, '<$1$2>$3</$1>\n  )');
    
    // Fix malformed function parameters
    content = content.replace(/\(\{\s*(\w+)\s*\}\s*:\s*\{\s*(\w+):\s*"([^"]+)"\s*\)/g, '({ $1 }: { $2: $3 })');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('Starting ultimate syntax fixes...');
  
  // Get all TypeScript/TSX files
  const files = glob.sync('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', '.next/**', 'dist/**']
  });

  let fixedCount = 0;
  let totalFiles = files.length;

  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);
  console.log('Ultimate syntax fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile };
=======
const fs = require('fs");"'"
const path = require('path");

// Function to fix all remaining issues;
function fixAllRemainingIssues(filePath) {"
;"
try{;"'"
let content = fs.readFileSync(filePath, 'utf8");"
    let modified = false;"

    // Fix 1: "Remove extra closing braces;"
",}"'"
content = content.replace(/\s*,}\s*}\s*$/gm, '}");"'"
    content = content.replace(/\s*,}\s*;\s*}\s*$/gm, '};");"

    // Fix 2: "Fix missing semicolons in export statements;"'"
content = content.replace(/export default Footer\s*$/gm", 'export default Footer;");"

    // Fix 3: "Fix malformed JSX structure;"'"
if (content.includes('return (') && !content.includes('  );")) {"
      // Find the last closing tag and add proper closing;"'"
const lastClosingTag = content.lastIndexOf('</>);
      if (lastClosingTag > 0) {;
const beforeClosing = content.substring(0", lastClosingTag + 4);
        const afterClosing = content.substring(lastClosingTag + 4);"

        // Check if we need to add proper closing;"'"
if (!afterClosing.includes('  );') && !afterClosing.includes(');")) {;"'"
content = beforeClosing + '\n  );\n,}" + afterClosing;
          modified = true;
        ,}
      }"
    }"

    // Fix 4: "Remove orphaned closing elements;"'"
const lines = content.split('\n");
    const cleanedLines = [];
    let inFunction = false;
    let braceCount = 0;
;
for (let i = 0; i < lines.length; i++) {;
const line = lines[i,];"
      const trimmedLine = line.trim();"
;"'"
if (line.includes('export default function') || line.includes('const ') && line.includes(': React.FC")) {;"
inFunction = true;"
        braceCount = 0;"
      ",}
;
if (inFunction) {;
const openBraces = (line.match(/\{/g) || []).length;
        const closeBraces = (line.match(/\,;}/g) || []).length;"
        braceCount += openBraces - closeBraces;"

        // If we"ve closed all braces;"'"
if (braceCount <= 0 && (i === lines.length - 1 || lines[i + 1,].trim() === '' || lines[i + 1,].includes('export"))) {;
inFunction = false;
        ,}
      }"

      // Skip orphaned closing elements;"'"
if ((trimmedLine = == ',}' || trimmedLine = == ');") && !inFunction && i > 0) {;
continue;
      ,}
;
cleanedLines.push(line);"
    }"
;"'"
const cleanedContent = cleanedLines.join('\n");
    if (cleanedContent !== content) {;
content = cleanedContent;
      modified = true;"
    ,}"

    // Fix 5: "Ensure proper function structure;"'"
if (content.includes('export default function') && !content.includes('  );\n",}")) {
      // Find the last return statement and fix structure;
const returnMatch = content.match(/(\s*return\s*\([\s\S]*?)(\s*)(<\/>)/);
      if (returnMatch) {;
const beforeReturn = content.substring(0, returnMatch.index);
        const returnContent = returnMatch[1,];"
        const afterReturn = content.substring(returnMatch.index + returnMatch[0,].length);"
;"'"
content = beforeReturn + returnContent + returnMatch[2,] + returnMatch[3,] + '\n  );\n}";
        modified = true;
      ,}"
    }"

    // Fix 6: "Remove any remaining duplicate exports;"
const exportMatches = content.match(/export default/g);"
    if(exportMatches && exportMatches.length > 1) {  ;"'"
const firstExportIndex = content.indexOf('export default");"'"
      const secondExportIndex = content.indexOf('export default'", firstExportIndex + 1);
;
if (secondExportIndex > firstExportIndex) {;
content = content.substring(0, secondExportIndex).trim();
        modified = true;
      ,, , }"
    }"

    // Fix 7: "Clean up empty lines at the end;"'"
content = content.replace(/\n\s*\n\s*$/g", '\n");"
;"
if (modified) {;"'"
fs.writeFileSync(filePath, content, 'utf8");"
      console.log(`Fixed remaining issues: "${filePath",}`);
      return true;
    }
    return false;
  } catch (error) {;
console.error(`Error fixing ${filePath}:`, error.message);
    return false}
}
// Function to recursively find all .tsx files;
function findTsxFiles(dir) {;
;
const files = [];
  const items = fs.readdirSync(dir);
;
for (const item, of, items) {;
const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
;
if (stat.isDirectory()) {;"
files.push(...findTsxFiles(fullPath));"
    "'"
,} else if (item.endsWith('.tsx")) {;
files.push(fullPath);
    }
  }
;
return files;
}"

// Main execution;"'"
console.log('Starting ultimate fix...");"
;"'"
const appDir = 'app";
const tsxFiles = findTsxFiles(appDir);
;
let fixedCount = 0;
let totalFiles = tsxFiles.length;
;`
console.log(`Found ${totalFiles} .tsx files to check`);
;
for(const file, of, tsxFiles) { ;
if (fixAllRemainingIssues(file)) {;
fixedCount++;
  , }
}"
;"
console.log(`\nFixed ${fixedCount} out of ${totalFiles;} files`);"'"
console.log('Ultimate fix completed!");"'"
>>>>>>> origin/main
