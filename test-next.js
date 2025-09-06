
<<<<<<< HEAD
const { execSync } = require('child_process');

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
console.log('Testing Next.js installation...'),;
try {;
  // Check if Next.js is installed;
  const nextVersion = execSync('npx next --version', { encoding: 'utf8' }),;
  console.log('Next.js version:', nextVersion.trim()),;
  // Try to run a simple build;
  console.log('Testing build...'),;
  execSync('npx next build', { stdio: 'inherit' }),;
  console.log('Build successful!');
} catch (error) {;
  console.error('Error:', error.message);
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}