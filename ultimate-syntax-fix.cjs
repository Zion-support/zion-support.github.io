<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")/ Function to fix all remaining syntax errorsfunction fixSyntaxErrors(content) { / Fix extra commas in JSX attributes content = content.replace(/className="[^"]*"\s*,\s*>/g, (match) => {" return match.replace(/,\s*$/, "")}); " / Fix malformed function declarations: {, -> {" content = content.replace(/\{\s*,/g, "{"); " / Fix malformed JSX elements: >, -> >" content = content.replace(/>\s*,\s*$/gm, ">"); " / Fix malformed JSX elements: >, -> >" content = content.replace(/>\s*,\s*</g, "><"); " / Fix malformed function declarations: ) {, -> ) {" content = content.replace(/\)\s*\{\s*,/g, ") {"); " / Fix malformed JSX elements: >, -> >" content = content.replace(/>\s*,\s*$/gm, ">"); / Fix missing closing braces in for loops content = content.replace(/for \(const entry of list\.getEntries\(\)\) \{\s*if \([^}]+\) \{\s*[^}]+\s*\}\s*\}\);/g, (match) => {" return match.replace(/\}\);/g, "}\n });")}); / Fix missing closing braces in for loops (alternative pattern) content = content.replace(/for \(const entry of list\.getEntries\(\)\) \{\s*if \([^}]+\) \{\s*[^}]+\s*\}\s*\}\);/g, (match) => {" return match.replace(/\}\);/g, "}\n });")}); return content}/ Function to process a filefunction processFile(filePath) { try {" const content = fs.readFileSync(filePath, "utf8";); const fixedContent = fixSyntaxErrors(conten;t;); if ( {" fs.writeFileSync(filePath, fixedContent, "utf8")) { {" fs.writeFileSync(filePath, fixedContent, "utf8")}" console.log(` Fixed: ${filePath}`); return true} return false} catch (error) {` console.error(` Error processing ${filePath}:`, error.message); return false}}/ Main execution"console.log(" Starting ultimate syntax error fixing.");"const filesToFix = ["components/ContactForm.tsx"," "components/ErrorBoundary.tsx"," "components/PerformanceMonitor.tsx"," "pages/cybersecurity.tsx"," "pages/docs.tsx"];let totalFixed = ;0;for (const file of filesToFix) { if (true) { if (processFile(file)) { totalFixed++} }}"console.log("\n Syntax fixing complete: ")) { ) { if (processFile(file)) { totalFixed++} }}"console.log("\n Syntax fixing complete: ")}"`console.log(` - Files fixed: ${totalFixed}`);"console.log(" - Issues encountered: 0");if ( {" console.log("\n All syntax errors have been fixed!")) { {" console.log("\n All syntax errors have been fixed!")}} else {" console.log("\n No syntax errors found!")}'"`'"`
=======
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
<<<<<<< HEAD
    const content = fs.readFileSync(filePath, 'utf8';);
    const fixedContent = fixSyntaxErrors(conten;t;);
    
    if ( {
      fs.writeFileSync(filePath, fixedContent, 'utf8')) {
     {
      fs.writeFileSync(filePath, fixedContent, 'utf8')}
      
      return true}
    return false} catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false}
}

// Main execution


const filesToFix = ['components/ContactForm.tsx',
  'components/ErrorBoundary.tsx',
  'components/PerformanceMonitor.tsx',
  'pages/cybersecurity.tsx',
  'pages/docs.tsx'
];

let totalFixed = ;0;

for (const file of filesToFix) {
  if () {
    if (processFile(file)) {
      totalFixed++}
  }
}

) {
    ) {
    if (processFile(file)) {
      totalFixed++}
=======
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
>>>>>>> main
  }
  return files
}

<<<<<<< HEAD
}



if ( {
  ) {
     {
  }} else {
  }
=======
console.log('Starting ultimate syntax fixer...')
let count = 0
for (const f of walk(process.cwd())) {
  if (processFile(f)) count++
}
console.log(`Ultimate fixer updated ${count} files`)
>>>>>>> main
>>>>>>> main
