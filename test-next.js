<<<<<<< HEAD
const { execSync } = require('child_process');
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
const { execSync } = require('child_process');
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
console.log('Testing Next.js installation...');
try {// Check if Next.js is installed;
  const nextVersion = execSync('npx next --version', { encoding: 'utf8' });
  console.log('Next.js version:', nextVersion.trim());
  // Try to run a simple build;
  console.log('Testing build...');
  execSync('npx next build', { stdio: 'inherit' });
  console.log('Build successful!');
} catch (error) {console.error('Error:', error.message);
const { execSync } = require('child_process'),;
const { execSync } = require('child_process');



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
}