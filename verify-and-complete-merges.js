#!/usr/bin/env node
import { execSync } from 'child_process';

function run(command) {
  return execSync(command, { cwd: '/workspace', encoding: 'utf8', stdio: 'pipe' }).trim();
}

function getStatus() {
  try {
    return run('git status --porcelain');
  } catch {
    return '';
  }
}

function hasConflicts(status) {
  return status.includes('UU') || status.includes('AA') || status.includes('DD');
}

function resolveConflictsSimple() {
  try {
    const files = run('git diff --name-only --diff-filter=U')
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);
    for (const f of files) {
      if (f.includes('package.json') || f.includes('lock')) {
        run(`git checkout --theirs "${f}"`);
      } else {
        run(`git checkout --ours "${f}"`);
      }
      run(`git add "${f}"`);
    }
    run('git commit -m "Resolve merge conflicts automatically"');
    return true;
  } catch {
    return false;
  }
}

function ensureMainMerged(currentBranch) {
  try {
    run('git fetch origin');
    if (currentBranch !== 'main') {
      run('git checkout main');
    }
    run('git pull origin main');
    if (currentBranch && currentBranch !== 'main') {
      try {
        run(`git merge --no-ff ${currentBranch} -m "Merge ${currentBranch} into main"`);
      } catch {
        const status = getStatus();
        if (hasConflicts(status)) {
          if (!resolveConflictsSimple()) {
            throw new Error('Could not auto-resolve conflicts');
          }
        } else {
          throw new Error('Merge failed');
        }
      }
    }
    run('git push origin main');
    return true;
  } catch (e) {
    console.error(e.message);
    return false;
  }
}

function main() {
  try {
    const branch = run('git branch --show-current');
    const status = getStatus();
    if (status) {
      run('git add .');
      try { run('git commit -m "Automated fixes"'); } catch { /* no-op */ }
    }
    ensureMainMerged(branch);
  } catch (e) {
    console.error('verify-and-complete-merges failed:', e.message);
    process.exit(1);
  }
}

main();