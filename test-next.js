const { execSync } = require($2);
console.log($2);
try {
  // Check if Next.js is installed
  const nextVersion = execSync($2);
  console.log('Next.js version:', nextVersion.trim()),
  
  // Try to run a simple build
  console.log($2);
  execSync($2);
  console.log('Build successful!')
  
} catch (error) {
  console.error('Error:', error.message)
}