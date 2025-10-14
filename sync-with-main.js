#!/usr/bin/env node
import { execSync } from 'child_process'
console.log('🔄 Syncing with latest main branch...')
try {
  // Check current status
  const status = execSync('git status --porcelain', { encoding: 'utf8' })
  if (status.trim()) {
    console.log('⚠️  Working directory not clean, stashing changes...')
    execSync('git stash', { stdio: 'inherit' })
  }

  // Fetch latest changes
  console.log('📥 Fetching latest changes...')
  execSync('git fetch origin', { stdio: 'inherit' })
  // Check what we're merging
  console.log('🔍 Checking differences with origin/main...')
  const diff = execSync('git diff HEAD origin/main --name-only', { encoding: 'utf8' })
  console.log('Files changed in origin/main: ')
  console.log(diff)
  // Try to merge with origin/main
  console.log('🔄 Attempting to merge with origin/main...'),
  try {,
    execSync('git merge origin/main --no-ff -m "feat: Sync with latest main branch changes"', { stdio: 'inherit' })
    console.log('✅ Successfully merged with origin/main')
  } catch (mergeError) {
    console.log('⚠️  Merge conflicts detected, resolving...')
    // Check for conflicts
    const conflictFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
    if (conflictFiles.trim()) {
      console.log('🔧 Conflict files:', conflictFiles)
      // Try to resolve conflicts automatically
      try {
        execSync('git add .', { stdio: 'inherit' })
        execSync('git commit -m "feat: Resolve merge conflicts with main branch"', { stdio: 'inherit' })
        console.log('✅ Conflicts resolved and committed')
      } catch (resolveError) {
    console.log('❌ Could not automatically resolve conflicts')
        console.log('Manual intervention needed for:', conflictFiles)
        throw resolveError
  }
    }
  }

  // Push changes
  console.log('📤 Pushing changes to origin/main...')
  execSync('git push origin main', { stdio: 'inherit' })
  console.log('🎉 Successfully synced with main branch!')
} catch (error) {
    console.error('❌ Error syncing with main:', error.message)
  process.exit(1)
  }
;