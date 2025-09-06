<<<<<<< HEAD

=======

=======
<<<<<<< HEAD
const { execSync } = require('child_process');
<<<<<<< HEAD
console.log('Testing Next.js installation...');
try {// Check if Next.js is installed;
  const nextVersion = execSync('npx next --version', { encoding: 'utf8' });
  console.log('Next.js version:', nextVersion.trim());
  // Try to run a simple build;
  console.log('Testing build...');
  execSync('npx next build', { stdio: 'inherit' });
  console.log('Build successful!');
} catch (error) {console.error('Error:', error.message);
=======
=======
<<<<<<< HEAD
const { execSync } = require('child_process'),;
=======
const { execSync } = require('child_process');
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}