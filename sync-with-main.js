#!/usr/bin/env node;
import { execSync } from 'child_process';

try {
  // Check current status;
  const status = execSync('git status --porcelain', { encoding: 'utf8' });
  if (status.trim()) {

    execSync('git stash', { stdio: 'inherit' });
  }

  // Fetch latest changes;

  execSync('git fetch origin', { stdio: 'inherit' });

  // Check what we're merging;

  const diff = execSync('git diff HEAD origin/main --name-only', { encoding: 'utf8' });


  // Try to merge with origin/main;

  try {,
    execSync('git merge origin/main --no-ff -m "feat: Sync with latest main branch changes"', { stdio: 'inherit' });

  } catch (mergeError) {

    // Check for conflicts;
    const conflictFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
    if (conflictFiles.trim()) {

      // Try to resolve conflicts automatically;
      try {
        execSync('git add .', { stdio: 'inherit' });
        execSync('git commit -m "feat: Resolve merge conflicts with main branch"', { stdio: 'inherit' });

      } catch (resolveError) {


        throw resolveError;
      }
    }
  }

  // Push changes;

  execSync('git push origin main', { stdio: 'inherit' });

} catch (error) {

  process.exit(1);
}