#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// console.log('Verifying fixes in App.tsx...\n');

try {
//   const appTsxPath = path.join(__dirname, 'App.tsx');
  const content = fs.readFileSync(appTsxPath, 'utf8');
  
  // Check for duplicate class definitions
  const classMatches = content.match(/class ErrorBoundary/g);
  const interfaceStateMatches = content.match(/interface ErrorBoundaryState/g);
  const interfacePropsMatches = content.match(/interface ErrorBoundaryProps/g);
  
//   console.log('✓ Class ErrorBoundary definitions found:', classMatches ? classMatches.length : 0);
//   console.log('✓ Interface ErrorBoundaryState definitions found:', interfaceStateMatches ? interfaceStateMatches.length : 0);
//   console.log('✓ Interface ErrorBoundaryProps definitions found:', interfacePropsMatches ? interfacePropsMatches.length : 0);
  
  // Check for syntax issues
  const hasDoubleClosing = content.includes('}, []);\n  }, []);');
//   console.log('✓ Double closing brace issue:', hasDoubleClosing ? 'FOUND (ERROR)' : 'NOT FOUND (GOOD)');
  
  if (classMatches && classMatches.length === 1 && 
      interfaceStateMatches && interfaceStateMatches.length === 1 &&
      interfacePropsMatches && interfacePropsMatches.length === 1 &&
      !hasDoubleClosing) {
//     console.log('\n✅ All fixes verified successfully!');
    process.exit(0);
  } else {
//     console.log('\n⚠️  Some issues may still exist');
    process.exit(1);
  }
} catch (error) {
//   console.error('Error reading App.tsx:', error.message);
  process.exit(1);
}