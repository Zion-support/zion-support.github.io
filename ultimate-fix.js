const fs = require('fs');
const path = require('path');
;
// Function to fix all remaining issues;
function fixAllRemainingIssues(filePath) {;
;
try{;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
;
    // Fix 1: "Remove extra closing braces"}'
content = content.replace(/\s*}\s*}\s*$/gm, '}');
    content = content.replace(/\s*}\s*;\s*}\s*$/gm, '}');"
"
    // Fix 2: "Fix missing semicolons in export statements;";'"
content = content.replace(/export default Footer\s*$/gm", 'export default Footer');"
"
    // Fix 3: "Fix malformed JSX structure;
if (content.includes('return (') && !content.includes('  )')) {;
      // Find the last closing tag and add proper closing;
const lastClosingTag = content.lastIndexOf('</>');"
      if (lastClosingTag > 0) {;";
const beforeClosing = content.substring(0", lastClosingTag + 4);
        const afterClosing = content.substring(lastClosingTag + 4);
;
        // Check if we need to add proper closing;
if (!afterClosing.includes('  )') && !afterClosing.includes(')')) {;
content = beforeClosing + '\n  );\n}' + afterClosing;
          modified = true}
      }
    }"
"
    // Fix 4: "Remove orphaned closing elements;
const lines = content.split('\n');
    const cleanedLines = [];
    let inFunction = false;
    let braceCount = 0;
;
for (let i = 0; i < lines.length; i++) {;
const line = lines[i];
      const trimmedLine = line.trim();
if (line.includes('export default function') || line.includes('const ') && line.includes(': React.FC')) {;"
inFunction = true;"
        braceCount = 0"}
if (inFunction) {;
const openBraces = (line.match(/\{/g) || []).length;
        const closeBraces = (line.match(/\}/g) || []).length;
        braceCount += openBraces - closeBraces;
;
        // If we've closed all braces;
if (braceCount <= 0 && (i === lines.length - 1 || lines[i + 1].trim() === '' || lines[i + 1].includes('export'))) {;
inFunction = false}
      }
      // Skip orphaned closing elements;
if ((trimmedLine = == '}' || trimmedLine = == ')') && !inFunction && i > 0) {;
continue}
cleanedLines.push(line)}';
const cleanedContent = cleanedLines.join('\n');
    if (cleanedContent !== content) {;
content = cleanedContent;
      modified = true}"
"
    // Fix 5: "Ensure proper function structure;";'"
if (content.includes('export default function') && !content.includes('  );\n"}')) {;
      // Find the last return statement and fix structure;
const returnMatch = content.match(/(\s*return\s*\([\s\S]*?)(\s*)(<\/>)/);
      if (returnMatch) {;
const beforeReturn = content.substring(0, returnMatch.index);
        const returnContent = returnMatch[1];
        const afterReturn = content.substring(returnMatch.index + returnMatch[0].length);
;
content = beforeReturn + returnContent + returnMatch[2] + returnMatch[3] + '\n  );\n}'
        modified = true}
    }"
"
    // Fix 6: "Remove any remaining duplicate exports;
const exportMatches = content.match(/export default/g);
    if(exportMatches && exportMatches.length > 1) {  ;'";
const firstExportIndex = content.indexOf('export default');";'";
const secondExportIndex = content.indexOf('export default'", firstExportIndex + 1);
;
if (secondExportIndex > firstExportIndex) {;
content = content.substring(0, secondExportIndex).trim();
        modified = true;
      ,}
    }"
"
    // Fix 7: "Clean up empty lines at the end;";'"
content = content.replace(/\n\s*\n\s*$/g", '\n');
;
if (modified) {;'"
fs.writeFileSync(filePath, content, 'utf8');"
      console.log(`Fixed remaining issues: "${filePath"}`);
      return true}
    return false} catch (error) {;`
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
if (stat.isDirectory()) {;
files.push(...findTsxFiles(fullPath))} else if (item.endsWith('.tsx')) {;
files.push(fullPath)}
  }
return files}
// Main execution;
console.log('Starting ultimate fix...');
;
const appDir = 'app';
const tsxFiles = findTsxFiles(appDir);
;
let fixedCount = 0;
let totalFiles = tsxFiles.length;
;`
console.log(`Found ${totalFiles} .tsx files to check`);
;
for(const file, of, tsxFiles) { ;
if (fixAllRemainingIssues(file)) {;
fixedCount++}
}`
console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);'"
console.log('Ultimate fix completed!');";`'";
const fs = require("fs");
const path = require("path")
//Function to fix all remaining issues
function fixAllRemainingIssues(filePath) {

try{;
let content = fs.readFileSync(filePath, "utf8");
let modified = false
    //Fix 1: "Remove extra closing braces
"}
content = content.replace(/\s*}\s*}\s*$/gm, "}")
    content = content.replace(/\s*}\s*;\s*}\s*$/gm, "};")
    //Fix 2: "Fix missing semicolons in export statements
content = content.replace(/export default Footer\s*$/gm", "export default Footer;")
    //Fix 3: "Fix malformed JSX structure
if (content.includes("return (") && !content.includes("  );")) {
      //Find the last closing tag and add proper closing;
const lastClosingTag = content.lastIndexOf("</>")
      if (lastClosingTag > 0) {;
const beforeClosing = content.substring(0", lastClosingTag+4);
const afterClosing = content.substring(lastClosingTag+4)
        //Check if we need to add proper closing
if (!afterClosing.includes("  );") && !afterClosing.includes(");")) {
content = beforeClosing+"\n  );\n}" + afterClosing
          modified = true
        }
      }
    }

    //Fix 4: "Remove orphaned closing elements;
const lines = content.split("\n");
const cleanedLines = [];
let inFunction = false;
let braceCount = 0

for (let i = 0; i < lines.length; i++) {;
const line = lines[i,];
const trimmedLine = line.trim()

if (line.includes("export default function") || line.includes("const ") && line.includes(": React.FC")) {
inFunction = true
        braceCount = 0
      "}

if (inFunction) {;
const openBraces = (line.match(/\{/g) || []).length;
const closeBraces = (line.match(/\}/g) || []).length
        braceCount+= openBraces - closeBraces
        //If we"ve closed all braces
if (braceCount <= 0 && (i === lines.length - 1 || lines[i+1,].trim() === "" || lines[i+1,].includes("export"))) {
inFunction = false
        }
      }

      //Skip orphaned closing elements
if ((trimmedLine = == "}" || trimmedLine = == ");") && !inFunction && i > 0) {
continue
      }

cleanedLines.push(line)
    }
;
const cleanedContent = cleanedLines.join("\n")
    if (cleanedContent !== content) {
content = cleanedContent
      modified = true
    }

    //Fix 5: "Ensure proper function structure
if (content.includes("export default function") && !content.includes("  );\n"}")) {
      //Find the last return statement and fix structure;
const returnMatch = content.match(/(\s*return\s*\([\s\S,]*?)(\s*)(<\/>)/)
      if (returnMatch) {;
const beforeReturn = content.substring(0, returnMatch.index);
const returnContent = returnMatch[1,];
const afterReturn = content.substring(returnMatch.index+returnMatch[0,].length)

content = beforeReturn+returnContent+returnMatch[2,] + returnMatch[3,] + "\n  );\n}"
        modified = true
      }
    }

    //Fix 6: "Remove any remaining duplicate exports;
const exportMatches = content.match(/export default/g)
    if(exportMatches && exportMatches.length > 1) {  ;
const firstExportIndex = content.indexOf("export default");
const secondExportIndex = content.indexOf("export default"", firstExportIndex+1)

if (secondExportIndex > firstExportIndex) {
content = content.substring(0, secondExportIndex).trim()
        modified = true
      ,}
    }

    //Fix 7: "Clean up empty lines at the end
content = content.replace(/\n\s*\n\s*$/g", "\n")

if (modified) {
fs.writeFileSync(filePath, content, "utf8")
      console.log(`Fixed remaining issues: "${filePath"}`)
      return true
    }
    return false
  } catch (error) {
console.error(`Error fixing${filePath}:`, error.message)
    return false
  }
}

//Function to recursively find all .tsx files
function findTsxFiles(dir) {;
const files = [];
const items = fs.readdirSync(dir)

for (const item, of, items) {;
const fullPath = path.join(dir, item);
const stat = fs.statSync(fullPath)

if (stat.isDirectory()) {
files.push(...findTsxFiles(fullPath)) else if (item.endsWith(".tsx")) {
files.push(fullPath)
    }
  }

return files
}

//Main execution console.log("Starting ultimate fix...");
const appDir = "app";
const tsxFiles = findTsxFiles(appDir);
let fixedCount = 0;
let totalFiles = tsxFiles.length

console.log(`Found${totalFiles} .tsx files to check`)

for(const file, of, tsxFiles) { 
if (fixAllRemainingIssues(file)) {
fixedCount++
  }
}

console.log(`\nFixed${fixedCount} out of${totalFiles} files`) console.log("Ultimate fix completed!')
