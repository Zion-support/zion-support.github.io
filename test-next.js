const { execSync } = require('child_process');

console.log('Testing Next.js installation...'),;
try {;
  // Check if Next.js is installed;'
  const nextVersion = execSync('npx next --version', { encoding: 'utf8' }),;'
  console.log('Next.js version:', nextVersion.trim()),;

  console.error('Error:', error.message);

}