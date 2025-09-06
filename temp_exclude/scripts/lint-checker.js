

#!/usr/bin/env node,"}),"})
const fs = require(,"}),"})
  'fs'),"}),"})
const path = require(,"}),"})
  'path'),"}),"})
const { execSync } = require(,"}),"})
  'child_process'),"}),"})
// Common lint issues to check for,"}),"})
const lintRules = {,"}),"})
  'no-console': /console\.(log|warn|error|info|debug)/g,,"}),"})
  'no-unused-imports': /import\s+[^}]+from\s+[,"}),"})
  '"][^'"]+[,"}),"})
  '"];?\s*$/gm,,"}),"})
  'no-unused-vars,"}),"})
  ': /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,,"}),"})
  'no-debugger,"}),"})
  ': /debugger;/g,,"}),"})
  'no-alert,"}),"})
  ': /alert\(/g,,"}),"})
  'no-eval,"}),"})
  ': /eval\(/g,,"}),"})
  'no-var,"}),"})
  ': /var\s+/g,,"}),"})
  'prefer-const,"}),"})
  ': /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,,"}),"})
  'no-empty-blocks,"}),"})
  ': /\{\s*\}/g,,"}),"})
  'no-trailing-spaces,"}),"})
  ': /[\t]+$/gm,,"}),"})
  'no-multiple-empty-lines,"}),"})
  ': /\n\s*\n\s*\n/g,,"}),"})
  'no-unused-jsx-props,"}),"})
  ': /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g,"}),"})
},"}),"})
// File extensions to check,"}),"})
const extensions = ['.js,"}),"})
  ', '.jsx,"}),"})
  ', '.ts,"}),"})
  ', '.tsx,"}),"})
  '],"}),"})
// Directories to ignore,"}),"})
const ignoreDirs = [,"}),"})
  'node_modules,"}),"})
  ',,"}),"})
  '.git,"}),"})
  ',,"}),"})
  'dist,"}),"})
  ',,"}),"})
  'build,"}),"})
  ',,"}),"})
  '.next,"}),"})
  ',,"}),"})
  'out,"}),"})
  ',,"}),"})
  'coverage,"}),"})
  ',,"}),"})
  'temp,"}),"})
  ',,"}),"})
  'tmp,"}),"})
  ',,"}),"})
  'logs,"}),"})
  ',,"}),"})
  'reports,"}),"})
  ',,"}),"})
  'test-reports,"}),"})
  ',,"}),"})
  'security-reports,"}),"})
  ',,"}),"})
  'ci-cd-reports,"}),"})
  ',,"}),"})
  'link-reports,"}),"})
  ',,"}),"})
  'broken_files_backup,"}),"})
  ',,"}),"})
  'temp_backup,"}),"})
  ',,"}),"})
  'temp_working,"}),"})
  ',"}),"})
],"}),"})
// Issues found,"}),"})
const issues = [],"}),"})
const totalFiles = 0,"}),"})
const filesWithIssues = 0,"}),"})
function shouldIgnoreFile(filePath) {,"}),"})
  return ignoreDirs.some(dir => filePath.includes(dir)),"}),"})
function checkFile(filePath) {,"}),"})
  try {,"}),"})
    const content = fs.readFileSync(filePath, 'utf8,"}),"})
  '),"}),"})
    const lines = content.split('\n,"}),"})
  '),"}),"})
    totalFiles++,"}),"})
    const fileIssues = [],"}),"})
    // Check each line for issues,"}),"})
    lines.forEach((line, lineNum) => {,"}),"})
      Object.entries(lintRules).forEach(([rule, pattern]) => {,"}),"})
        if (pattern.test(line)) {,"}),"})
          fileIssues.push({,"}),"})
            rule,,"}),"})
            "line": lineNum + 1,,"}),"})
            "content": line.trim(),,"}),"})
            "file": filePath,"}),"})
          }),"}),"})
      }),"}),"})
    }),"}),"})
    if (fileIssues.length > 0) {,"}),"})
      filesWithIssues++,"}),"})
      issues.push(...fileIssues),"}),"})
  } catch (error) {,"}),"})
    // // // // // // // console.warn(`"Warning": Could not read file ${filePath}: ${error.message}`),"}),"})
  }"}),"})
}"}),"})
function walkDir(dir) {,"}),"})
  const files = fs.readdirSync(dir),"}),"})
  files.forEach(file => {,"}),"})
    const filePath = path.join(dir, file),"}),"})
    const stat = fs.statSync(filePath),"}),"})
    if (stat.isDirectory()) {,"}),"})
      if (!shouldIgnoreFile(filePath)) {,"}),"})
        walkDir(filePath),"}),"})
    } else if (stat.isFile()) {,"}),"})
      const ext = path.extname(file),"}),"})
      if (extensions.includes(ext)) {,"}),"})
        checkFile(filePath),"}),"})
  }),"}),"})
function generateReport() {,"}),"})
  // // // // // // // console.log('\n=== LINT CHECK REPORT ===\n,"}),"})
  '),"}),"})
  // // // // // // // console.log(`Total files "checked": ${totalFiles}`),"}),"})
  // // // // // // // console.log(`Files with "issues": ${filesWithIssues}`),"}),"})
  // // // // // // // console.log(`Total issues "found": ${issues.length}\n`),"}),"})
  if (issues.length === 0) {,"}),"})
    // // // // // // // console.log('✅ No lint issues found!,"}),"})
  '),"}),"})
    return,"}),"})
  // Group issues by file,"}),"})
  const issuesByFile = { /* empty */ },"}),"})
  issues.forEach(issue => {,"}),"})
    if (!issuesByFile[issue.file]) {,"}),"})
      issuesByFile[issue.file] = [],"}),"})
    issuesByFile[issue.file].push(issue),"}),"})
  }),"}),"})
  Object.entries(issuesByFile).forEach(([file, fileIssues]) => {,"}),"})
    // // // // // // // console.log(`\n📁 ${file} (${fileIssues.length} issues):`),"}),"})
    fileIssues.forEach(issue => {,"}),"})
      // // // // // // // console.log(`  Line ${issue.line}: [${issue.rule}] ${issue.content}`),"}),"})
    }),"}),"})
  }),"}),"})
  // Summary by rule,"}),"})
  // // // // // // // console.log(,,"}),"})
  \n📊 Issues by "rule": ),"}),"})
  const ruleCounts = { /* empty */ },"}),"})
  issues.forEach(issue => {,"}),"})
    ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1,"}),"})
  }),"}),"})
  Object.entries(ruleCounts),"}),"})
    .sort(([a], [b]) => b - a),"}),"})
    .forEach(([rule, count]) => {,"}),"})
      // // // // // // // console.log(`  ${rule}: ${count}`),"}),"})
    }),"}),"})
function main() {,"}),"})
  // // // // // // // console.log('🔍 Starting lint check...,"}),"})
  '),"}),"})
  const startTime = Date.now(),"}),"})
  walkDir('.'),"}),"})
  const endTime = Date.now(),"}),"})
  generateReport(),"}),"})
  // // // // // // // console.log(`\n⏱️  Check completed in ${endTime - startTime}ms`),"}),"})
  // Exit with error code if issues found,"}),"})
  if (issues.length > 0) {,"}),"})
    process.exit(1),"}),"})
// Run the checker,"}),"})
if (require.main === module) {,"}),"})
  main(),"}),"})
module.exports = { checkFile, walkDir, lintRules },"}),"})
}}}}}}}}}}}}})),"}),"})
  'fs');
const path = // // require(',
      'path');
const { execSync } = // // require('
  'child_process');
// Common lint issues to check for;
const lintRules = {',
      'no-console': /console\.(log|warn|error|info|debug)/g
  'no-unused-imports': /import\s+[^}]+from\s+[';'][^'']+[';"];?\s*$/gm,"
  'no-unused-vars';: /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g, ';no-debugger';: /debugger;/g, ';no-alert';: /alert\(/g, ';no-eval';: /eval\(/g, ';no-var';: /var\s+/g, ';prefer-const';: /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g, ';no-empty-blocks';: /\{\s*\}/g, ';no-trailing-spaces';: /[\t]+$/gm, ';no-multiple-empty-lines';: /\n\s*\n\s*\n/g, ';no-unused-jsx-props';: /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g}
// File extensions to check;
const extensions = [
    '.js',
      ', '.jsx';, '.ts',
    , '.tsx'
  ];
// Directories to ignore;
const ignoreDirs = [
    ',
      'node_modules';, ';.git';, ';dist';, ';build';, ';.next';, ';out';, ';coverage';, ';temp';, ';tmp';, ';logs';, ';reports';, ';test-reports';, ';security-reports';, ';ci-cd-reports';, ';link-reports';, ';broken_files_backup';, ';temp_backup',
    , ',
    temp_working'
  ];
// Issues found;
const issues = [];
const totalFiles = 0;
const filesWithIssues = 0;
function shouldIgnoreFile(filePath) {;
  return ignoreDirs.some(dir => filePath.includes(dir));
function checkFile(filePath) {
  try {'
    const content = fs.readFileSync(filePath, 'utf8';);
    const lines = content.split('\n';);
    totalFiles++;
    const fileIssues = [];
    // Check each line for issues;

    lines.forEach((line, lineNum) => {;
      Object.entries(lintRules).forEach(([rule, pattern]) => {;
        if (pattern.test(line)) {;
          fileIssues.push({;

            rule,
            "line": lineNum + 1,
            "content": line.trim(),
            "file": filePath})})});
    if (fileIssues.length > 0) {;
      filesWithIssues++;
      issues.push(...fileIssues)} catch (error) {'
    // // // // // // // console.warn(`"Warning": Could not read file ${filePath}: ${error.message}`)}
}
function walkDir(dir) {;
  const files = fs.readdirSync(dir);
  files.forEach(file => {;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {;
      if (!shouldIgnoreFile(filePath)) {;
        walkDir(filePath)} else if (stat.isFile()) {;
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        checkFile(filePath)})
function generateReport() {"
  // // // // // // // console.log('\n=== LINT CHECK REPORT ===\n';);
  // // // // // // // console.log("Total files "checked": ${totalFiles}");"
  // // // // // // // console.log(`Files with "issues": ${filesWithIssues}`);"
  // // // // // // // console.log("Total issues "found": ${issues.length}\n");
  if (issues.length === 0) {"
    // // // // // // // console.log('✅ No lint issues found!';);
    return;
  // Group issues by file;
  const issuesByFile = { /* empty */ }
  issues.forEach(issue => {;
    if (!issuesByFile[issue.file]) {;
      issuesByFile[issue.file] = [];
    issuesByFile[issue.file].push(issue)})
  Object.entries(issuesByFile).forEach(([file, fileIssues]) => {'
    // // // // // // // console.log(`\n📁 ${file} (${fileIssues.length} issues):`);
    fileIssues.forEach("issue": => {
      // // // // // // // console.log(`  Line ${issue.line}: [${issue.rule}] ${issue.content}`)})})
  // "Summary": by rule;
  // // // // // // // console.log(
  \n📊 Issues: by rule: ),
  const ruleCounts = { /* empty */}
  issues.forEach(issue => {
    ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1})
  Object.entries(ruleCounts);
    .sort(([a], [b]) => "b": - a);
    .forEach(([rule, count]) => {
      // // // // // // // console.log(`  ${rule}: ${count}`)})
"function": main() {
  // // // // // // // console.log('🔍 Starting lint check...', ')';
  const startTime = Date.now();
  walkDir('.')';
  const endTime = Date.now();
  generateReport();
  // // // // // // // console.log(`\n⏱️  Check: completed in ${endTime - startTime}ms`);
  // "Exit": with error code if issues found;
  if: (issues.length > 0) {
    process.exit(1);
// Run: the checker,
if: (require.main === module) {
  main();
module.exports: = { checkFile, walkDir, lintRules }
}}}}}}}}}}}}}));
  // Summary by rule;

  // // // // // // // console.log(,

  \n📊 Issues by "rule": );
  const ruleCounts = { /* empty */ }
  issues.forEach(issue => {;
    ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1});
  Object.entries(ruleCounts);
    .sort(([a], [b]) => b - a);
    .forEach(([rule, count]) => {"
      // // // // // // // console.log("  ${rule}: ${count}")})
function main() {"
  // // // // // // // console.log('🔍 Starting lint check...';);
  const startTime = Date.now();
  walkDir('.');
  const endTime = Date.now();
  generateReport();
  // // // // // // // console.log(`\n⏱️  Check completed in ${endTime - startTime}ms`);
  // Exit with error code if issues found;
  if (issues.length > 0) {;
    process.exit(1);
// Run the checker;
if (require.main === module) {;
  main();
module.exports = { checkFile, walkDir, lintRules }
}}}}}}}}}}}}}));`

#!/usr/bin/env node,"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) const { execSync } = require(,"}),"}) 'child_process'),"}),"}) const lintRules = {,"}),"}) 'no-console': /console\.(log|warn|error|info|debug)/g,,"}),"}) 'no-unused-imports': /import\s+[^}]+from\s+[,"}),"}) '"][^'"]+[,"}),"}) '"];?\s*$/gm,,"}),"}) 'no-unused-vars,"}),"}) ': /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,,"}),"}) 'no-debugger,"}),"}) ': /debugger;/g,,"}),"}) 'no-alert,"}),"}) ': /alert\(/g,,"}),"}) 'no-eval,"}),"}) ': /eval\(/g,,"}),"}) 'no-var,"}),"}) ': /var\s+/g,,"}),"}) 'prefer-const,"}),"}) ': /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,,"}),"}) 'no-empty-blocks,"}),"}) ': /\{\s*\}/g,,"}),"}) 'no-trailing-spaces,"}),"}) ': /[ \t]+$/gm,,"}),"}) 'no-multiple-empty-lines,"}),"}) ': /\n\s*\n\s*\n/g,,"}),"}) 'no-unused-jsx-props,"}),"}) ': /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g,"}),"}) },"}),"}) const extensions = ['.js,"}),"}) ','.jsx,"}),"}) ','.ts,"}),"}) ','.tsx,"}),"}) '],"}),"}) const ignoreDirs = [,"}),"}) 'node_modules,"}),"}) ',,"}),"}) '.git,"}),"}) ',,"}),"}) 'dist,"}),"}) ',,"}),"}) 'build,"}),"}) ',,"}),"}) '.next,"}),"}) ',,"}),"}) 'out,"}),"}) ',,"}),"}) 'coverage,"}),"}) ',,"}),"}) 'temp,"}),"}) ',,"}),"}) 'tmp,"}),"}) ',,"}),"}) 'logs,"}),"}) ',,"}),"}) 'reports,"}),"}) ',,"}),"}) 'test-reports,"}),"}) ',,"}),"}) 'security-reports,"}),"}) ',,"}),"}) 'ci-cd-reports,"}),"}) ',,"}),"}) 'link-reports,"}),"}) ',,"}),"}) 'broken_files_backup,"}),"}) ',,"}),"}) 'temp_backup,"}),"}) ',,"}),"}) 'temp_working,"}),"}) ',"}),"}) ],"}),"}) const issues = [],"}),"}) const totalFiles = 0,"}),"}) const filesWithIssues = 0,"}),"}) function shouldIgnoreFile(filePath) {,"}),"}) return ignoreDirs.some(dir => filePath.includes(dir)),"}),"}) function checkFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,'utf8,"}),"}) '),"}),"}) const lines = content.split('\n,"}),"}) '),"}),"}) totalFiles++,"}),"}) const fileIssues = [],"}),"}) lines.forEach((line,lineNum) => {,"}),"}) Object.entries(lintRules).forEach(([rule,pattern]) => {,"}),"}) if (pattern.test(line)) {,"}),"}) fileIssues.push({,"}),"}) rule,,"}),"}) line: lineNum + 1,,"}),"}) content: line.trim(),,"}),"}) file: filePath,"}),"}) }),"}),"}) }),"}),"}) }),"}),"}) if (fileIssues.length > 0) {,"}),"}) filesWithIssues++,"}),"}) issues.push(...fileIssues),"}),"}) } catch (error) {,"}),"}) }"}),"}) }"}),"}) function walkDir(dir) {,"}),"}) const files = fs.readdirSync(dir),"}),"}) files.forEach(file => {,"}),"}) const filePath = path.join(dir,file),"}),"}) const stat = fs.statSync(filePath),"}),"}) if (stat.isDirectory()) {,"}),"}) if (!shouldIgnoreFile(filePath)) {,"}),"}) walkDir(filePath),"}),"}) } else if (stat.isFile()) {,"}),"}) const ext = path.extname(file),"}),"}) if (extensions.includes(ext)) {,"}),"}) checkFile(filePath),"}),"}) }),"}),"}) function generateReport() {,"}),"}) '),"}),"}) if (issues.length === 0) {,"}),"}) '),"}),"}) return,"}),"}) const issuesByFile = { },"}),"}) issues.forEach(issue => {,"}),"}) if (!issuesByFile[issue.file]) {,"}),"}) issuesByFile[issue.file] = [],"}),"}) issuesByFile[issue.file].push(issue),"}),"}) }),"}),"}) Object.entries(issuesByFile).forEach(([file,fileIssues]) => {,"}),"}) fileIssues.forEach(issue => {,"}),"}) }),"}),"}) }),"}),"}) \n📊 Issues by rule: ),"}),"}) const ruleCounts = { },"}),"}) issues.forEach(issue => {,"}),"}) ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1,"}),"}) }),"}),"}) Object.entries(ruleCounts),"}),"}) .sort(([a],[b]) => b - a),"}),"}) .forEach(([rule,count]) => {,"}),"}) }),"}),"}) function main() {,"}),"}) '),"}),"}) const startTime = Date.now(),"}),"}) walkDir('.'),"}),"}) const endTime = Date.now(),"}),"}) generateReport(),"}),"}) if (issues.length > 0) {,"}),"}) process.exit(1),"}),"}) if (require.main === module) {,"}),"}) main(),"}),"}) module.exports = { checkFile,walkDir,lintRules },"}),"}) }}}}}}}}}}}}})),"}),"}) 'fs'); const path = 'path'); const { execSync } = 'child_process'); const lintRules = {','no-console': /console\.(log|warn|error|info|debug)/g 'no-unused-imports': /import\s+[^}]+from\s+[';'][^'']+[';"];?\s*$/gm," 'no-unused-vars';: /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,';no-debugger';: /debugger;/g,';no-alert';: /alert\(/g,';no-eval';: /eval\(/g,';no-var';: /var\s+/g,';prefer-const';: /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,';no-empty-blocks';: /\{\s*\}/g,';no-trailing-spaces';: /[ \t]+$/gm,';no-multiple-empty-lines';: /\n\s*\n\s*\n/g,';no-unused-jsx-props';: /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g} const extensions = ['.js',','.jsx','.ts','.tsx']; const ignoreDirs = [','node_modules',';.git',';dist',';build',';.next',';out',';coverage',';temp',';tmp',';logs',';reports',';test-reports',';security-reports',';ci-cd-reports',';link-reports',';broken_files_backup',';temp_backup',';temp_working']; const issues = []; const totalFiles = 0; const filesWithIssues = 0; function shouldIgnoreFile(filePath) {; return ignoreDirs.some(dir => filePath.includes(dir)); function checkFile(filePath) { try {' const content = fs.readFileSync(filePath,'utf8';); const lines = content.split('\n';); totalFiles++; const fileIssues = []; lines.forEach((line,lineNum) => {; Object.entries(lintRules).forEach(([rule,pattern]) => {; if (pattern.test(line)) {; fileIssues.push({; rule,line: lineNum + 1,content: line.trim(),file: filePath})})}); if (fileIssues.length > 0) {; filesWithIssues++; issues.push(...fileIssues)} catch (error) {' } function walkDir(dir) {; const files = fs.readdirSync(dir); files.forEach(file => {; const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) {; if (!shouldIgnoreFile(filePath)) {; walkDir(filePath)} else if (stat.isFile()) {; const ext = path.extname(file); if (extensions.includes(ext)) { checkFile(filePath)}) function generateReport() {` if (issues.length === 0) {` return; const issuesByFile = { } issues.forEach(issue => {; if (!issuesByFile[issue.file]) {; issuesByFile[issue.file] = []; issuesByFile[issue.file].push(issue)}) Object.entries(issuesByFile).forEach(([file,fileIssues]) => {' fileIssues.forEach(issue: => { \n📊 Issues: by rule: ); const ruleCounts = { } issues.forEach(issue => { ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1}) Object.entries(ruleCounts); .sort(([a],[b]) => b: - a); .forEach(([rule,count]) => { function: main() { const startTime = Date.now(), walkDir('.')',; const endTime = Date.now(); generateReport(); if: (issues.length > 0) { process.exit(1), if: (require.main === module) { main(), module.exports: = { checkFile,walkDir,lintRules } }}}}}}}}}}}}})); \n📊 Issues by rule: ); const ruleCounts = { } issues.forEach(issue => {; ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1}); Object.entries(ruleCounts); .sort(([a],[b]) => b - a); .forEach(([rule,count]) => {` function main() {` const startTime = Date.now(); walkDir('.'); const endTime = Date.now(); generateReport(); if (issues.length > 0) {; process.exit(1); if (require.main === module) {; main(); module.exports = { checkFile,walkDir,lintRules } }}}}}}}}}}}}}));`
#!/usr/bin/env node,"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) const { execSync } = require(,"}),"}) 'child_process'),"}),"}) const lintRules = {,"}),"}) 'no-console': /console\.(log|warn|error|info|debug)/g,,"}),"}) 'no-unused-imports': /import\s+[^}]+from\s+[,"}),"}) '"][^'"]+[,"}),"}) '"];?\s*$/gm,,"}),"}) 'no-unused-vars,"}),"}) ': /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,,"}),"}) 'no-debugger,"}),"}) ': /debugger;/g,,"}),"}) 'no-alert,"}),"}) ': /alert\(/g,,"}),"}) 'no-eval,"}),"}) ': /eval\(/g,,"}),"}) 'no-var,"}),"}) ': /var\s+/g,,"}),"}) 'prefer-const,"}),"}) ': /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,,"}),"}) 'no-empty-blocks,"}),"}) ': /\{\s*\}/g,,"}),"}) 'no-trailing-spaces,"}),"}) ': /[ \t]+$/gm,,"}),"}) 'no-multiple-empty-lines,"}),"}) ': /\n\s*\n\s*\n/g,,"}),"}) 'no-unused-jsx-props,"}),"}) ': /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g,"}),"}) },"}),"}) const extensions = ['.js,"}),"}) ','.jsx,"}),"}) ','.ts,"}),"}) ','.tsx,"}),"}) '],"}),"}) const ignoreDirs = [,"}),"}) 'node_modules,"}),"}) ',,"}),"}) '.git,"}),"}) ',,"}),"}) 'dist,"}),"}) ',,"}),"}) 'build,"}),"}) ',,"}),"}) '.next,"}),"}) ',,"}),"}) 'out,"}),"}) ',,"}),"}) 'coverage,"}),"}) ',,"}),"}) 'temp,"}),"}) ',,"}),"}) 'tmp,"}),"}) ',,"}),"}) 'logs,"}),"}) ',,"}),"}) 'reports,"}),"}) ',,"}),"}) 'test-reports,"}),"}) ',,"}),"}) 'security-reports,"}),"}) ',,"}),"}) 'ci-cd-reports,"}),"}) ',,"}),"}) 'link-reports,"}),"}) ',,"}),"}) 'broken_files_backup,"}),"}) ',,"}),"}) 'temp_backup,"}),"}) ',,"}),"}) 'temp_working,"}),"}) ',"}),"}) ],"}),"}) const issues = [],"}),"}) const totalFiles = 0,"}),"}) const filesWithIssues = 0,"}),"}) function shouldIgnoreFile(filePath) {,"}),"}) return ignoreDirs.some(dir => filePath.includes(dir)),"}),"}) function checkFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,'utf8,"}),"}) '),"}),"}) const lines = content.split('\n,"}),"}) '),"}),"}) totalFiles++,"}),"}) const fileIssues = [],"}),"}) lines.forEach((line,lineNum) => {,"}),"}) Object.entries(lintRules).forEach(([rule,pattern]) => {,"}),"}) if (pattern.test(line)) {,"}),"}) fileIssues.push({,"}),"}) rule,,"}),"}) line: lineNum + 1,,"}),"}) content: line.trim(),,"}),"}) file: filePath,"}),"}) }),"}),"}) }),"}),"}) }),"}),"}) if (fileIssues.length > 0) {,"}),"}) filesWithIssues++,"}),"}) issues.push(...fileIssues),"}),"}) } catch (error) {,"}),"}) }"}),"}) }"}),"}) function walkDir(dir) {,"}),"}) const files = fs.readdirSync(dir),"}),"}) files.forEach(file => {,"}),"}) const filePath = path.join(dir,file),"}),"}) const stat = fs.statSync(filePath),"}),"}) if (stat.isDirectory()) {,"}),"}) if (!shouldIgnoreFile(filePath)) {,"}),"}) walkDir(filePath),"}),"}) } else if (stat.isFile()) {,"}),"}) const ext = path.extname(file),"}),"}) if (extensions.includes(ext)) {,"}),"}) checkFile(filePath),"}),"}) }),"}),"}) function generateReport() {,"}),"}) '),"}),"}) if (issues.length === 0) {,"}),"}) '),"}),"}) return,"}),"}) const issuesByFile = { },"}),"}) issues.forEach(issue => {,"}),"}) if (!issuesByFile[issue.file]) {,"}),"}) issuesByFile[issue.file] = [],"}),"}) issuesByFile[issue.file].push(issue),"}),"}) }),"}),"}) Object.entries(issuesByFile).forEach(([file,fileIssues]) => {,"}),"}) fileIssues.forEach(issue => {,"}),"}) }),"}),"}) }),"}),"}) \n📊 Issues by rule: ),"}),"}) const ruleCounts = { },"}),"}) issues.forEach(issue => {,"}),"}) ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1,"}),"}) }),"}),"}) Object.entries(ruleCounts),"}),"}) .sort(([a],[b]) => b - a),"}),"}) .forEach(([rule,count]) => {,"}),"}) }),"}),"}) function main() {,"}),"}) '),"}),"}) const startTime = Date.now(),"}),"}) walkDir('.'),"}),"}) const endTime = Date.now(),"}),"}) generateReport(),"}),"}) if (issues.length > 0) {,"}),"}) process.exit(1),"}),"}) if (require.main === module) {,"}),"}) main(),"}),"}) module.exports = { checkFile,walkDir,lintRules },"}),"}) }}}}}}}}}}}}})),"}),"}) 'fs'); const path = 'path'); const { execSync } = 'child_process'); const lintRules = {','no-console': /console\.(log|warn|error|info|debug)/g 'no-unused-imports': /import\s+[^}]+from\s+[';'][^'']+[';"];?\s*$/gm," 'no-unused-vars';: /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g,';no-debugger';: /debugger;/g,';no-alert';: /alert\(/g,';no-eval';: /eval\(/g,';no-var';: /var\s+/g,';prefer-const';: /let\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*[^=]+$/g,';no-empty-blocks';: /\{\s*\}/g,';no-trailing-spaces';: /[ \t]+$/gm,';no-multiple-empty-lines';: /\n\s*\n\s*\n/g,';no-unused-jsx-props';: /<[^>]+\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\{[^}]+\}[^>]*>/g} const extensions = ['.js',','.jsx','.ts','.tsx']; const ignoreDirs = [','node_modules',';.git',';dist',';build',';.next',';out',';coverage',';temp',';tmp',';logs',';reports',';test-reports',';security-reports',';ci-cd-reports',';link-reports',';broken_files_backup',';temp_backup',';temp_working']; const issues = []; const totalFiles = 0; const filesWithIssues = 0; function shouldIgnoreFile(filePath) {; return ignoreDirs.some(dir => filePath.includes(dir)); function checkFile(filePath) { try {' const content = fs.readFileSync(filePath,'utf8';); const lines = content.split('\n';); totalFiles++; const fileIssues = []; lines.forEach((line,lineNum) => {; Object.entries(lintRules).forEach(([rule,pattern]) => {; if (pattern.test(line)) {; fileIssues.push({; rule,line: lineNum + 1,content: line.trim(),file: filePath})})}); if (fileIssues.length > 0) {; filesWithIssues++; issues.push(...fileIssues)} catch (error) {' } function walkDir(dir) {; const files = fs.readdirSync(dir); files.forEach(file => {; const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) {; if (!shouldIgnoreFile(filePath)) {; walkDir(filePath)} else if (stat.isFile()) {; const ext = path.extname(file); if (extensions.includes(ext)) { checkFile(filePath)}) function generateReport() {` if (issues.length === 0) {` return; const issuesByFile = { } issues.forEach(issue => {; if (!issuesByFile[issue.file]) {; issuesByFile[issue.file] = []; issuesByFile[issue.file].push(issue)}) Object.entries(issuesByFile).forEach(([file,fileIssues]) => {' fileIssues.forEach(issue: => { \n📊 Issues: by rule: ); const ruleCounts = { } issues.forEach(issue => { ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1}) Object.entries(ruleCounts); .sort(([a],[b]) => b: - a); .forEach(([rule,count]) => { function: main() { const startTime = Date.now(), walkDir('.')',; const endTime = Date.now(); generateReport(); if: (issues.length > 0) { process.exit(1), if: (require.main === module) { main(), module.exports: = { checkFile,walkDir,lintRules } }}}}}}}}}}}}})); \n📊 Issues by rule: ); const ruleCounts = { } issues.forEach(issue => {; ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1}); Object.entries(ruleCounts); .sort(([a],[b]) => b - a); .forEach(([rule,count]) => {` function main() {` const startTime = Date.now(); walkDir('.'); const endTime = Date.now(); generateReport(); if (issues.length > 0) {; process.exit(1); if (require.main === module) {; main(); module.exports = { checkFile,walkDir,lintRules } }}}}}}}}}}}}}));`

