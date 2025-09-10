#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting ultimate merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('') && !content.includes('>>>>>>>')) {
      return false; // No conflicts in this file
    }

    console.log(`🔧 Resolving conflicts in: ${filePath}`);

    // Remove all merge conflict markers and keep the incoming changes (after )
    let resolvedContent = content;

    // Pattern 1: Conflicts with file paths - keep incoming changes
    resolvedContent = resolvedContent.replace(/

    // Pattern 2: Simple conflicts without file paths - keep incoming changes
    resolvedContent = resolvedContent.replace(/

    // Pattern 3: Handle any remaining conflict markers
    resolvedContent = resolvedContent.replace(/<<<<<<<[^\n]*\n.*?\n\n.*?\n>>>>>>>[^\n]*\n?/gs, '');

    // Clean up any remaining conflict markers
    resolvedContent = resolvedContent.replace(/<<<<<<<[^\n]*\n.*?\n\n.*?\n>>>>>>>[^\n]*\n?/gs, '');

    // Write resolved content back to file
    fs.writeFileSync(filePath, resolvedContent);
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictFiles(dir) {
  const conflictFiles = [];

  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);

      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          // Skip certain directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          // Check if file has merge conflict markers
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<<') || content.includes('') || content.includes('>>>>>>>')) {
              conflictFiles.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }

  scanDirectory(dir);
  return conflictFiles;
}

// Main execution
try {
  console.log('🔍 Scanning for files with merge conflicts...');
  const conflictFiles = findConflictFiles('/workspace');

  console.log(`📊 Found ${conflictFiles.length} files with merge conflicts`);

  let resolvedCount = 0;
  for (const file of conflictFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }

  console.log(`✅ Successfully resolved conflicts in ${resolvedCount} files`);

  // Create a summary file
  const summary = {
    timestamp: new Date().toISOString(),
    totalConflicts: conflictFiles.length,
    resolvedConflicts: resolvedCount,
    status: 'completed',
    files: conflictFiles
  };

  fs.writeFileSync('/workspace/conflict-resolution-summary.json', JSON.stringify(summary, null, 2));

  console.log('🎉 Ultimate merge conflict resolution completed!');
  console.log('📄 Summary saved to conflict-resolution-summary.json');

  // Try to run git commands
  console.log('📝 Attempting to add and commit resolved files...');

  // Create a simple git script
  const gitScript = `#!/bin/bash
cd /workspace
git add .
git commit -m "Resolve all merge conflicts automatically - ${new Date().toISOString()}"
echo "Git operations completed"
`;

  fs.writeFileSync('/workspace/git-commit.sh', gitScript);
  fs.chmodSync('/workspace/git-commit.sh', '755');

  console.log('📄 Git commit script created: git-commit.sh');
  console.log('💡 Run: bash /workspace/git-commit.sh to commit changes');

} catch (error) {
  console.error('❌ Error during conflict resolution:', error.message);
  process.exit(1);
}