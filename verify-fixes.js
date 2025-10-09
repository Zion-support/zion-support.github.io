#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// try {
  //   const appTsxPath = path.join(__dirname, 'App.tsx');
  const _content = fs.readFileSync(appTsxPath, 'utf8');

  // Check for duplicate class definitions
  const _classMatches = content.match(/class ErrorBoundary/g);
  const _interfaceStateMatches = content.match(/interface ErrorBoundaryState/g);
  const _interfacePropsMatches = content.match(/interface ErrorBoundaryProps/g);

  //   //   //   // Check for syntax issues
  const _hasDoubleClosing = content.includes('}, []);\n  }, []);');
  //   ' : 'NOT FOUND (GOOD)');

  if (
    classMatches &&
    classMatches.length === 1 &&
    interfaceStateMatches &&
    interfaceStateMatches.length === 1 &&
    interfacePropsMatches &&
    interfacePropsMatches.length === 1 &&
    !hasDoubleClosing
  ) {
    //     process.exit(0);
  } else {
    //     process.exit(1);
  }
} catch (error) {
  //   process.exit(1);
}
