<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
const { execSync } = require('child_process');
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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