#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Ultimate conflict resolver starting...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove all merge conflict markers and keep the main branch version (after =======)
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [a-f0-9]+/g, '$1');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)(?=\n|$)/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up multiple newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Cleaned ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles() {
  try {
    const statusOutput = execSync('git status --porcelain', { encoding: 'utf8' });
    const conflictedFiles = statusOutput
      .split('\n')
      .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
      .map(line => line.split(' ').pop())
      .filter(file => file && !file.includes('temp_conflicts/'));
    
    return conflictedFiles;
  } catch (error) {
    console.error('Error finding conflicted files:', error.message);
    return [];
  }
}

// Main execution
async function main() {
  try {
    console.log('🔍 Finding and resolving merge conflicts...');
    
    // List of known conflicted files
    const knownConflictedFiles = [
      'quick-conflict-resolver.cjs',
      'pages/white-papers.tsx.disabled',
      'resolve-all-conflicts-final.cjs',
      'resolve-all-merge-conflicts.cjs',
      'resolve-conflicts.cjs',
      'tsconfig.tsbuildinfo',
      'temp_exclude/scripts/comprehensive-link-checker.js',
      'temp_exclude/scripts/performance-optimizer.js',
      'resolve-merge-conflicts-final.cjs',
      'resolve-merge-conflicts.cjs'
    ];
    
    let cleanedCount = 0;
    
    // Clean known conflicted files
    for (const file of knownConflictedFiles) {
      if (fs.existsSync(file)) {
        if (resolveMergeConflicts(file)) {
          cleanedCount++;
        }
      }
    }
    
    // Find additional conflicted files
    const additionalConflictedFiles = findConflictedFiles();
    console.log(`Found ${additionalConflictedFiles.length} additional conflicted files`);
    
    for (const file of additionalConflictedFiles) {
      if (fs.existsSync(file)) {
        if (resolveMergeConflicts(file)) {
          cleanedCount++;
        }
      }
    }
    
    console.log(`\n✅ Cleaned ${cleanedCount} files`);
    
    // Try to add files to git
    try {
      execSync('git add .', { stdio: 'pipe' });
      console.log('✅ Added files to git');
    } catch (error) {
      console.log('⚠️ Could not add files to git:', error.message);
    }
    
    // Try to commit
    try {
      execSync('git commit -m "Resolve merge conflicts: clean up all conflict markers"', { stdio: 'pipe' });
      console.log('✅ Committed changes');
    } catch (error) {
      console.log('⚠️ Could not commit:', error.message);
    }
    
    // Check for remaining conflicts
    const remainingConflicts = execSync('git status --porcelain', { encoding: 'utf8' })
      .split('\n')
      .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'));
    
    if (remainingConflicts.length === 0) {
      console.log('\n🎉 All conflicts resolved! Ready to merge.');
    } else {
      console.log(`\n⚠️ ${remainingConflicts.length} conflicts still remain:`);
      remainingConflicts.forEach(conflict => console.log(`  - ${conflict}`));
    }
    
  } catch (error) {
    console.error('Error during conflict resolution:', error.message);
  }
}

main();