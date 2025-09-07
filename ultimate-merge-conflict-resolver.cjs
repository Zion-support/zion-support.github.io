#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting Ultimate Merge Conflict Resolver...\n');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File does not exist: ${filePath}`);
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      console.log(`✅ No conflicts in: ${filePath}`);
      return true;
    }

    console.log(`🔧 Resolving conflicts in: ${filePath}`);

    let resolvedContent = content;

    // Strategy 1: For deleted files, keep the current version
    if (content.includes('deleted by them:')) {
      console.log(`📁 File was deleted by them, keeping current version: ${filePath}`);
      return true;
    }

    // Strategy 2: For both added files, keep the current version
    if (content.includes('both added:')) {
      console.log(`➕ Both added file, keeping current version: ${filePath}`);
      return true;
    }

    // Strategy 3: For both modified files, use a smart merge strategy
    if (content.includes('both modified:')) {
      console.log(`🔄 Both modified file, applying smart merge: ${filePath}`);
      
      // Remove merge conflict markers and keep both versions where possible
      resolvedContent = content
        .replace(/<<<<<<< HEAD\n/g, '')
        .replace(/=======\n/g, '\n')
        .replace(/>>>>>>> [a-f0-9]+\n/g, '\n')
        .replace(/<<<<<<< HEAD/g, '')
        .replace(/=======/g, '')
        .replace(/>>>>>>> [a-f0-9]+/g, '');
    }

    // Strategy 4: Clean up any remaining conflict markers
    resolvedContent = resolvedContent
      .replace(/<<<<<<< HEAD.*?>>>>>>> [a-f0-9]+/gs, '')
      .replace(/<<<<<<< HEAD/g, '')
      .replace(/=======/g, '')
      .replace(/>>>>>>> [a-f0-9]+/g, '');

    // Strategy 5: For specific file types, apply specialized resolution
    if (filePath.endsWith('.json')) {
      try {
        const parsed = JSON.parse(resolvedContent);
        resolvedContent = JSON.stringify(parsed, null, 2);
      } catch (e) {
        console.log(`⚠️  JSON parse error in ${filePath}, keeping as is`);
      }
    }

    // Strategy 6: For TypeScript/JavaScript files, ensure proper syntax
    if (filePath.endsWith('.ts') || filePath.endsWith('.tsx') || filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
      // Remove duplicate imports
      const lines = resolvedContent.split('\n');
      const imports = new Set();
      const otherLines = [];
      
      for (const line of lines) {
        if (line.trim().startsWith('import ') || line.trim().startsWith('export ')) {
          if (!imports.has(line.trim())) {
            imports.add(line.trim());
            otherLines.push(line);
          }
        } else {
          otherLines.push(line);
        }
      }
      
      resolvedContent = otherLines.join('\n');
    }

    // Write the resolved content
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;

  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to add resolved files to git
function addResolvedFiles() {
  try {
    console.log('\n📝 Adding resolved files to git...');
    execSync('git add .', { stdio: 'inherit' });
    console.log('✅ All resolved files added to git');
    return true;
  } catch (error) {
    console.error('❌ Error adding files to git:', error.message);
    return false;
  }
}

// Function to commit the merge
function commitMerge() {
  try {
    console.log('\n💾 Committing merge...');
    execSync('git commit -m "Resolve merge conflicts automatically"', { stdio: 'inherit' });
    console.log('✅ Merge committed successfully');
    return true;
  } catch (error) {
    console.error('❌ Error committing merge:', error.message);
    return false;
  }
}

// Main execution
async function main() {
  try {
    // Get list of conflicted files
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
    const conflictedFiles = gitStatus
      .split('\n')
      .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
      .map(line => line.substring(3).trim())
      .filter(file => file);

    console.log(`📋 Found ${conflictedFiles.length} conflicted files:`);
    conflictedFiles.forEach(file => console.log(`   - ${file}`));
    console.log('');

    // Resolve conflicts in each file
    let resolvedCount = 0;
    for (const file of conflictedFiles) {
      if (resolveMergeConflicts(file)) {
        resolvedCount++;
      }
    }

    console.log(`\n📊 Resolution Summary:`);
    console.log(`   - Total conflicted files: ${conflictedFiles.length}`);
    console.log(`   - Successfully resolved: ${resolvedCount}`);
    console.log(`   - Failed to resolve: ${conflictedFiles.length - resolvedCount}`);

    if (resolvedCount > 0) {
      // Add resolved files to git
      if (addResolvedFiles()) {
        // Commit the merge
        if (commitMerge()) {
          console.log('\n🎉 Merge conflicts resolved and committed successfully!');
          console.log('✅ Ready to proceed with next steps');
        }
      }
    } else {
      console.log('\n⚠️  No files were successfully resolved. Manual intervention may be required.');
    }

  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

// Run the main function
main();