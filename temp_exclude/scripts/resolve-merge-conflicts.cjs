<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD:scripts/resolve-merge-conflicts.cjs
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")"const { execSync } = require("child_process");"console.log(" Merge Conflict Resolver");"console.log("=====");/ Function to resolve merge conflicts in a filefunction resolveMergeConflicts(filePath) { if (true) { return false) { ) { return false}} console.log(` Resolving conflicts in ${filePath}.`); try {" let content = fs.readFileSync(filePath, "utf8";); let modified = fal;s;e; / Remove conflict markers and keep the newer version (incoming changes)"`"`
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  if () {
    return false) {
    ) {
    return false}}
console.log('🔧 Starting merge conflict resolution...');
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting merge conflict resolution...');

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-ba45:temp_exclude/scripts/resolve-merge-conflicts.cjs
// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
<<<<<<< HEAD:scripts/resolve-merge-conflicts.cjs
    // Remove conflict markers and keep the newer version (incoming changes)
    // Check if file has merge conflicts
    if (!content.includes('') && !content.includes('') && !content.includes('>>>>>>>')) {
      return false;
    }
    console.log(`📝 Resolving conflicts in: ${filePath}`);
=======
    
    // Check if file has merge conflicts
<<<<<<< HEAD
=======
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false;
    }
    
    console.log(`📝 Resolving conflicts in: ${filePath}`);
    
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-ba45:temp_exclude/scripts/resolve-merge-conflicts.cjs
    // Split by merge conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = '';
<<<<<<< HEAD:scripts/resolve-merge-conflicts.cjs
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes('')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      }
      if (line.includes('')) {
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
        conflictType = 'incoming';
        continue;
      }
=======
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      }
      
      if (line.includes('=======')) {
    >>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
        conflictType = 'incoming',
    continue
  }
      
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-ba45:temp_exclude/scripts/resolve-merge-conflicts.cjs
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        conflictType = '';
        continue;
      }
      if (!inConflict) {
        resolvedLines.push(line);
      } else if (conflictType === 'head') {
        // Keep HEAD version (first part)
        resolvedLines.push(line);
      }
      // Skip incoming version (second part)
    }
    // Write resolved content
    fs.writeFileSync(filePath, resolvedLines.join('\n'));
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}
// Function to find all files with merge conflicts
function findConflictedFiles(dir) {
  const conflictedFiles = [];
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
<<<<<<< HEAD
=======
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
            conflictedFiles.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  scanDirectory(dir);
  return conflictedFiles;
}
// Main execution
try {
  const conflictedFiles = findConflictedFiles('.');
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!'),
    process.exit(0)
  }
<<<<<<< HEAD:scripts/resolve-merge-conflicts.cjs
  console.log(`🔍 Found ${conflictedFiles.length} files with merge conflicts:`);
=======
  
  console.log(`🔍 Found ${conflictedFiles.length} files with merge conflicts: `),
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-ba45:temp_exclude/scripts/resolve-merge-conflicts.cjs
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
  let resolvedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }
  console.log(`\n🎉 Successfully resolved conflicts in ${resolvedCount}/${conflictedFiles.length} files`);
  // Try to build after resolving conflicts
  console.log('\n🔨 Testing build after conflict resolution...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build successful after conflict resolution!');
  } catch (error) {
    console.log('⚠️  Build still has issues, but conflicts are resolved');
  }
} catch (error) {
  console.error('❌ Error during merge conflict resolution:', error.message);
  process.exit(1);
<<<<<<< HEAD
}
<<<<<<< HEAD:scripts/resolve-merge-conflicts.cjs
=======
}
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-ba45:temp_exclude/scripts/resolve-merge-conflicts.cjs
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
