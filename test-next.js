const { execSync } = require('child_process');

console.log('Testing Next.js installation...');
<<<<<<< HEAD
=======

try {
  // Check if Next.js is installed
  const nextVersion = execSync('npx next --version', { encoding: 'utf8' });
  console.log('Next.js version:', nextVersion.trim());
  
  // Try to run a simple build
  console.log('Testing build...');
  execSync('npx next build', { stdio: 'inherit' });
  console.log('Build successful!');
} catch (error) {
  console.error('Error:', error.message);
}
const { execSync } = require($2);
console.log($2);
>>>>>>> merged-prs-20250907-203621
try {
  // Check if Next.js is installed
  const nextVersion = execSync('npx next --version', { encoding: 'utf8' });
  console.log('Next.js version:', nextVersion.trim());
} catch (error) {
<<<<<<< HEAD
  console.error('Error:', error.message);
}
=======
  console.error('Error:', error.message)
}
>>>>>>> merged-prs-20250907-203621
