// Simple test to check if the build process works;
const { execSync } = require('child_process');
'
console.log('Testing build process...');

try {}
  // Test TypeScript compilation'
  console.log('1. Testing TypeScript compilation...');'
  execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'inherit' });'
  console.log('✅ TypeScript compilation successful');

  // Test ESLint'
  console.log('2. Testing ESLint...');'
  execSync('npx eslint pages/index.tsx --max-warnings 0', { stdio: 'inherit' });'
  console.log('✅ ESLint check successful');

  // Test Next.js build'
  console.log('3. Testing Next.js build...');'
  execSync('npm run build', { stdio: 'inherit' });'
  console.log('✅ Next.js build successful');
'
  console.log('🎉 All tests passed!');
} catch (error) {'
  console.error('❌ Build test failed:', error.message);
process.exit(1);
}'
