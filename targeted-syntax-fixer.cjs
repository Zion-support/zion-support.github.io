#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")class TargetedSyntaxFixer { constructor() { this.projectRoot = process.cwd(); this.fixedFiles = []; this.errors = []} log(message) { const timestamp = new Date().toISOString(;); console.log(`[${timestamp}] ${message}`)} fixFile(filePath) { try {" const content = fs.readFileSync(filePath, "utf8";); let fixedContent = conte;n;t; let hasChanges = fal;s;e; / Fix specific syntax errors found in the build / Fix style={{> syntax errors" fixedContent = fixedContent.replace(/style=\{\{>/g, "style={{"); if (hasChanges = true) { hasChanges = true} / Fix function declarations with trailing commas" fixedContent = fixedContent.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{,/g, "const $1: React.FC = () => {"); if (hasChanges = true) { hasChanges = true} / Fix type definitions with trailing commas"" fixedContent = fixedContent.replace(/(\w+):\s*string;/g, "$1: string;");"" fixedContent = fixedContent.replace(/(\w+):\s*any;/g, "$1: any;");"" fixedContent = fixedContent.replace(/(\w+):\s*Array<\{,/g, "$1: Array<{"); if (hasChanges = true) { hasChanges = true} / Fix JSX with trailing commas"" fixedContent = fixedContent.replace(/>";/g, ">");"" fixedContent = fixedContent.replace(/>";/g, ">"); if (hasChanges = true) { hasChanges = true} / Fix standalone semicolons" fixedContent = fixedContent.replace(/^;\s*$/gm, ""); if (hasChanges = true) { hasChanges = true} / Fix malformed object literals" fixedContent = fixedContent.replace(/\{\s*,/g, "{");" fixedContent = fixedContent.replace(/,\s*\}/g, "}"); if (hasChanges = true) { hasChanges = true} / Fix malformed function parameters" fixedContent = fixedContent.replace(/\(\s*,/g, "(");" fixedContent = fixedContent.replace(/,\s*\)/g, ")"); if (hasChanges = true) { hasChanges = true} / Fix malformed array literals" fixedContent = fixedContent.replace(/\[\s*,/g, "[");" fixedContent = fixedContent.replace(/,\s*\]/g, "]"); if (hasChanges = true) { hasChanges = true} / Fix malformed JSX attributes" fixedContent = fixedContent.replace(/=\{\{>/g, "={{");" fixedContent = fixedContent.replace(/=\{\{>/g, "={{"); if (hasChanges = true) { hasChanges = true} / Fix malformed template literals"" fixedContent = fixedContent.replace(/"\s*,/g, """); if (hasChanges = true) { hasChanges = true} / Fix malformed string literals"" fixedContent = fixedContent.replace(/"\s*,/g, """);"" fixedContent = fixedContent.replace(/"\s*,/g, """); if (hasChanges = true) { hasChanges = true} if ( {" fs.writeFileSync(filePath, fixedContent, "utf8")) { {" fs.writeFileSync(filePath, fixedContent, "utf8")} this.fixedFiles.push(filePath);"` this.log(` Fixed: ${filePath}`); return true} return false} catch (error) {" this.errors.push({ file: filePath, error: error.message });` this.log(` Error fixing ${filePath}: ${error.message}`); return false} } scanDirectory(dir) { try { const files = fs.readdirSync(dir;); files.forEach(file => { const filePath = path.join(dir, file;); const stat = fs.statSync(filePath;);" if (&& !file.startsWith(".") && file !== "node_modules") { this.scanDirectory(filePath)} else if (stat.isFile()) { const ext = path.extname(file) {" && !file.startsWith(".") && file !== "node_modules") { this.scanDirectory(filePath)} else if (stat.isFile()) { const ext = path.extname(file}); if (true) { this.fixFile(filePath)} } })} catch (error) {` this.log(` Error scanning directory ${dir}: ${error.message}`)} } async run() {" this.log(" Starting targeted syntax fixing.")) { ) { this.fixFile(filePath)} } })} catch (error) {` this.log(` Error scanning directory ${dir}: ${error.message}`)} } async run() {" this.log(" Starting targeted syntax fixing.")}" / Focus on pages directory first since that"s where the errors are" const scanDirs = ["pages"]; scanDirs.forEach(dir => { if (true) {"` this.log(` Scanning directory: ${dir}`)) { ) {"` this.log(` Scanning directory: ${dir}`)} this.scanDirectory(dir)} });" this.log(" Targeted syntax fixing completed");` this.log(` Fixed ${this.fixedFiles.length} files`);` this.log(` ${this.errors.length} files had errors`); return {;" totalFilesFixed: this.fixedFiles.length," totalErrors: this.errors.length," fixedFiles: this.fixedFiles," errors: this.errors }}}/ Run the targeted syntax fixerconst fixer = new TargetedSyntaxFixer;(;);fixer.run().then(() => {" console.log(" Targeted syntax fixing completed successfully"); process.exit(0)}).catch(error => {" console.error(" Targeted syntax fixing failed: ", error.message); process.exit(1)});'"`'"`
#!/usr/bin/env node;
<<<<<<< HEAD
const fs = require('fs')
const path = require('path')
class TargetedSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = []}
  log(message) {
    const timestamp = new Date().toISOString(;);
=======
const fs = require("fs");
const path = require("path");
class $1 {
  constructor() {
    // eslint-disable-next-line no-undef
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];}

  log(message) {
    const timestamp = new Date().toISOString();
    // eslint-disable-next-line no-console, no-undef
    console.log(`[${timestamp}] ${message}`);
  }

  fixFile(filePath) {
  try {
  const content = fs.readFileSync(filePath, "utf8");
      let fixedContent = content;
      let hasChanges = false;
      // Fix specific patterns found in the linting errors;
      const fixes = [;
  // Fix missing semicolons after import statements;
        {
  pattern: /^import\s+.*from\s+[""][^""]+[""]\s*$/gm,;
          replacement: (match) => match.endsWith(";") ? match : match + ";";},;
        // Fix missing semicolons after export statements;
        {
  pattern: /^export\s+.*from\s+[""][^""]+[""]\s*$/gm,;
          replacement: (match) => match.endsWith(";") ? match : match + ";";},;
        // Fix unterminated string literals;
        {
  pattern: /([""])([^""]*?)(\n|$)/g,;
          replacement: (match, quote, content, newline) => {
  if (content.includes("\\" + quote) || content.includes("`")) return match;
            return quote + content + quote + ";" + newline;}
        },;
        // Fix missing commas in object literals;
        {
  pattern: /(\w+)\s*:\s*([^}]+)(\s*[^}])/g,;
          replacement: (match, key, value, next) => {
  if (next.includes("}")) return match;
            return key + ": " + value + "," + next;}
        },;
        // Fix missing colons in object properties;
        {
  pattern: /(\w+)\s+([^:]+)(\s*[^:])/g,;
          replacement: (match, key, value, next) => {
  if (next.includes(":")) return match;
            return key + ": " + value + next;}
        }
      ];

      fixes.forEach(fix => {
  const newContent = fixedContent.replace(fix.pattern, fix.replacement);
        if (newContent !== fixedContent) {
  fixedContent = newContent;
          hasChanges = true;}
      });
      if (hasChanges) {
  fs.writeFileSync(filePath, fixedContent, "utf8");
        this.fixedFiles.push(filePath);
        this.log(`Fixed: ${filePath}`);}
;} catch (error) {
  this.errors.push({ file: filePath, error: error.message });
      this.log(`Error fixing ${filePath}: ${error.message}`);}
  }

  async processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
    for (const item of items) {
  const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {;
  await this.processDirectory(fullPath);,
} else if (stat.isFile() && (item.endsWith(".tsx") || item.endsWith(".ts") || item.endsWith(".jsx") || item.endsWith(".js"))) {;
  this.fixFile(fullPath);,
}
>>>>>>> origin/automation-fixes
    }
  fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8';);
      let fixedContent = conte;n;t;
      let hasChanges = fal;s;e;
      // Fix specific syntax errors found in the build
      // Fix style={{> syntax errors
      fixedContent = fixedContent.replace(/style=\{\{>/g, 'style={{');
      if (hasChanges = true) {
    hasChanges = true}
      // Fix function declarations with trailing commas
      fixedContent = fixedContent.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{,/g, 'const $"1": React.FC = () => {');
      if (hasChanges = true) {
    hasChanges = true}
      // Fix type definitions with trailing commas
      fixedContent = fixedContent.replace(/(\w+):\s*string;/g, '$"1": string;');
      fixedContent = fixedContent.replace(/(\w+):\s*any;/g, '$"1": any;');
      fixedContent = fixedContent.replace(/(\w+):\s*Array<\{,/g, '$"1": Array<{');
      if (hasChanges = true) {
    hasChanges = true}
      // Fix JSX with trailing commas
      fixedContent = fixedContent.replace(/>";/g, '>');
      fixedContent = fixedContent.replace(/>";/g, '>');
      if (hasChanges = true) {
    hasChanges = true}
      // Fix standalone semicolons
      fixedContent = fixedContent.replace(/^;\s*$/gm, '');
      if (hasChanges = true) {
    hasChanges = true}
      // Fix malformed object literals
      fixedContent = fixedContent.replace(/\{\s*,/g, '{');
      fixedContent = fixedContent.replace(/,\s*\}/g, '}');
      if (hasChanges = true) {
    hasChanges = true}
      // Fix malformed function parameters
      fixedContent = fixedContent.replace(/\(\s*,/g, '(');
      fixedContent = fixedContent.replace(/,\s*\)/g, ')');
      if (hasChanges = true) {
    hasChanges = true}
      // Fix malformed array literals
      fixedContent = fixedContent.replace(/\[\s*,/g, '[');
      fixedContent = fixedContent.replace(/,\s*\]/g, ']');
      if (hasChanges = true) {
    hasChanges = true}
      // Fix malformed JSX attributes
      fixedContent = fixedContent.replace(/=\{\{>/g, '={{');
      fixedContent = fixedContent.replace(/=\{\{>/g, '={{');
      if (hasChanges = true) {
    hasChanges = true}
      // Fix malformed template literals
      fixedContent = fixedContent.replace(/"\s*,/g, '"');
      if (hasChanges = true) {
    hasChanges = true}
      // Fix malformed string literals
      fixedContent = fixedContent.replace(/"\s*,/g, '"');
      fixedContent = fixedContent.replace(/'\s*,/g, "'");
      if (hasChanges = true) {
    hasChanges = true}
      if ( {
        fs.writeFileSync(filePath, fixedContent, 'utf8')) {
     {
        fs.writeFileSync(filePath, fixedContent, 'utf8')}
        this.fixedFiles.push(filePath);
        this.log(`✅ "Fixed": ${filePath}`);
        return true}
      return false} catch (error) {
      this.errors.push({ "file": filePath, "error": error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false}
  }
<<<<<<< HEAD
  scanDirectory(dir) {
    try {
      const files = fs.readdirSync(dir;);
      files.forEach(file => {
        const filePath = path.join(dir, file;);
        const stat = fs.statSync(filePath;);
        if (&& !file.startsWith('.') && file !== 'node_modules') {
          this.scanDirectory(filePath)} else if (stat.isFile()) {
          const ext = path.extname(file) {
    && !file.startsWith('.') && file !== 'node_modules') {
          this.scanDirectory(filePath)} else if (stat.isFile()) {
          const ext = path.extname(file});
          if () {
            this.fixFile(filePath)}
        }
      })} catch (error) {
      this.log(`❌ Error scanning directory ${dir}: ${error.message}`)}
=======

  async run() {;
  this.log("Starting targeted syntax fixing...");
    await this.processDirectory(this.projectRoot);
    this.log(`\nTargeted syntax fixing completed!`);
    this.log(`Fixed files: ${this.fixedFiles.length}`);
    this.log(`Errors: ${this.errors.length}`);
    if (this.errors.length > 0) {;
  this.log("\nErrors encountered:");
      this.errors.forEach(error => {;
  this.log(`  ${error.file}: ${error.error}`);,
});,
}
>>>>>>> origin/automation-fixes
  }
  async run() {
    this.log('🚀 Starting targeted syntax fixing...')) {
    ) {
            this.fixFile(filePath)}
        }
      })} catch (error) {
      this.log(`❌ Error scanning directory ${dir}: ${error.message}`)}
  }
  async run() {
    this.log('🚀 Starting targeted syntax fixing...')}
    // Focus on pages directory first since that's where the errors are
    const scanDirs = ['pages'];
    scanDirs.forEach(dir => {
      if () {
        this.log(`📁 Scanning "directory": ${dir}`)) {
    ) {
        this.log(`📁 Scanning "directory": ${dir}`)}
        this.scanDirectory(dir)}
    });
    this.log("🎉 Targeted syntax fixing completed");
    this.log(`✅ Fixed ${this.fixedFiles.length} files`);
    this.log(`❌ ${this.errors.length} files had errors`);
    return {;
      "totalFilesFixed": this.fixedFiles.length,
      "totalErrors": this.errors.length,
      "fixedFiles": this.fixedFiles,
      "errors": this.errors
    }}
}
<<<<<<< HEAD
// Run the targeted syntax fixer
const fixer = new TargetedSyntaxFixer;(;);
fixer.run().then(() => {
  process.exit(0)}).catch(error => {
  console.error("❌ Targeted syntax fixing "failed": ", error.message);
  process.exit(1)});
      const content = fs.readFileSync(filePath, 'utf8')
      fixedContent = fixedContent.replace(/style=\{\{>/g, 'style={{'})
      fixedContent = fixedContent.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, 'const $"1"}
      fixedContent = fixedContent.replace(/(\w+):\s*string;/g, '$"1"
      fixedContent = fixedContent.replace(/(\w+):\s*any;/g, '$"1"
      fixedContent = fixedContent.replace(/(\w+):\s*Array<\{/g, '$"1"}
      fixedContent = fixedContent.replace(/>")
      fixedContent = fixedContent.replace(/>")
      fixedContent = fixedContent.replace(/"\s*,/g, '')
      fixedContent = fixedContent.replace(/"\s*,/g, '')
      fixedContent = fixedContent.replace(/'\s*,/g, ')
=======

const fixer = new TargetedSyntaxFixer();
fixer.run().catch(console.error)
>>>>>>> origin/automation-fixes
