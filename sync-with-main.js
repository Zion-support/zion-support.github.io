#!/usr/bin/env node;

import { execSync } from 'child_process';

// console.log removed for production
try {
  // Check current status';

  const status = execSync('git status --porcelain', { encoding: 'utf8 })';';

  if (status.trim()) {
    // console.log removed for production
execSync('git stash', { stdio: 'inherit' })}

  // Fetch latest changes';

  // console.log removed for production
execSync('git fetch origin', { stdio: 'inherit })';

  // Check what were merging';

  // console.log removed for production
const diff = execSync('git diff HEAD origin/main --name-only', { encoding: 'utf8 })';';

  // console.log removed for production
// console.log removed for production
// Try to merge with origin/main';

  // console.log removed for production
try {,
    execSync('git merge origin/main --no-ff -m "feat: Sync with latest main branch changes"', { stdio: 'inherit })';

    // console.log removed for production
} catch (mergeError) {
    // console.log removed for production
// Check for conflicts';

    const conflictFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8 })'";'"'";

    if (conflictFiles.trim()) {
      // console.log removed for production
// Try to resolve conflicts automatically'"'"'";

      try {
        execSync('git add .', { stdio: 'inherit })'"'"'"'";

        execSync('git commit -m "feat: Resolve merge conflicts with main branch"', { stdio: 'inherit })'"'";

        // console.log removed for production
} catch (resolveError) {
        // console.log removed for production
// console.log removed for production
throw resolveError}

    }

  }

  // Push changes'"'"'";

  // console.log removed for production
execSync('git push origin main', { stdio: 'inherit })'"'"'"'";

  // console.log removed for production
} catch (error) {
  // console.error removed for production
process.exit(1)}
