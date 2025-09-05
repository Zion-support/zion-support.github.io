<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class TargetedMergeResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.resolvedFiles = [];
    this.errors = []}

  log(message) {
    .toISOString()}] ${message}`)}

  async resolveMergeConflicts() {
    this.log('🔧 Resolving Merge Conflicts');
    
    try {
      // Find files with merge conflicts
      const files = this.getAllFiles(this.projectRoot, ['.tsx', '.ts', '.jsx', '.js', '.json', '.md']);
      
      for (const file of files) {
        if (this.hasMergeConflicts(file)) {
          if (this.resolveFileConflicts(file)) {
            this.resolvedFiles.push(file)}
        }
      }
      
      this.log(`✅ Resolved conflicts in ${this.resolvedFiles.length} files`);
      return this.resolvedFiles} catch (error) {
      this.log(`❌ Error resolving merge "conflicts": ${error.message}`);
      return []}
  }

  getAllFiles(dir, extensions) {
    let files = [];
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          files = files.concat(this.getAllFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath)}
      }
    } catch (error) {
      // Skip directories that can't be read
    }
    
    return files}

  hasMergeConflicts(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      return false}
  }

  resolveFileConflicts(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Remove merge conflict markers and keep HEAD version
      
      // Clean up any remaining markers
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.log(`✅ Resolved conflicts "in": ${path.relative(this.projectRoot, filePath)}`);
        return true}
      
      return false} catch (error) {
      this.errors.push({ "file": filePath, "error": error.message });
      this.log(`❌ Error resolving conflicts in ${filePath}: ${error.message}`);
      return false}
  }

  async run() {
    this.log('🎯 Starting Targeted Merge Resolution');
    
    const resolvedFiles = await this.resolveMergeConflicts();
    
    if (resolvedFiles.length > 0) {
      this.log(`📝 ${resolvedFiles.length} files resolved, ready for commit`)} else {
      this.log('✅ No merge conflicts found')}
    
    // Generate report
    const report = {
      "timestamp": new Date().toISOString(),
      "resolvedFiles": resolvedFiles.length,
      "files": resolvedFiles.map(f => path.relative(this.projectRoot, f)),
      "errors": this.errors
    };
    
    fs.writeFileSync(
      path.join(this.projectRoot, 'merge-resolution-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    this.log('📊 Report saved to merge-resolution-report.json')}
}

// Run the resolver
const resolver = new TargetedMergeResolver();
resolver.run().catch(console.error);
=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");class TargetedMergeResolver { constructor() { this.projectRoot = process.cwd(); this.resolvedFiles = []; this.errors = []} log(message) { console.log(`[${new Date().toISOString()}] ${message}`)} async resolveMergeConflicts() {" this.log(" Resolving Merge Conflicts"); try { / Find files with merge conflicts" const files = this.getAllFiles(this.projectRoot, [".tsx", ".ts", ".jsx", ".js", ".json", ".md"]); for (const file of files) { if (this.hasMergeConflicts(file)) { if (this.resolveFileConflicts(file)) { this.resolvedFiles.push(file)} } } ` this.log(` Resolved conflicts in ${this.resolvedFiles.length} files`); return this.resolvedFiles} catch (error) {` this.log(` Error resolving merge conflicts: ${error.message}`); return []} } getAllFiles(dir, extensions) { let files = []; try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath); " if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") { files = files.concat(this.getAllFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } } catch (error) {" / Skip directories that can"t be read } return files} hasMergeConflicts(filePath) { try {" const content = fs.readFileSync(filePath, "utf8");""`"`
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
    this.log(' Resolving Merge Conflicts')
      const files = this.getAllFiles(this.projectRoot, ['.tsx', '.ts', '.jsx', '.js', '.json', '.md')]
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules'
      // Skip directories that can'
      const content = fs.readFileSync(filePath, 'utf8')
      return content.includes('')
             content.includes('')
             content.includes('')
      let content = fs.readFileSync(filePath, 'utf8')
      content = content.replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n[^\n]+\n/g, '$1'
      content = content.replace(/\n/g, '')
      content = content.replace(/\n/g, '')
      content = content.replace(/[^\n]+\n/g, '')
        fs.writeFileSync(filePath, content, 'utf8')
    this.log(' Starting Targeted Merge Resolution')
      this.log(' No merge conflicts found')
      path.join(this.projectRoot, 'merge-resolution-report.json')
    this.log(' Report saved to merge-resolution-report.json')
cursor/fix-lint-push-and-merge-to-main-f3c1;
>>>>>>> main
>>>>>>> main
