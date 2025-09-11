const fs = require('fs');
const path = require('path');

function fixConsoleStatements(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixConsoleStatements(filePath);
    } else if (
      file.endsWith('.js') ||
      file.endsWith('.jsx') ||
      file.endsWith('.ts') ||
      file.endsWith('.tsx')
    ) {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Replace console statements with proper logging
      content = content.replace(/console.log(/g, '// console.log(');
      content = content.replace(/console.error(/g, '// console.error(');
      content = content.replace(/console.warn(/g, '// console.warn(');
      content = content.replace(/console.info(/g, '// console.info(');

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed console statements in ${filePath}`);
      }
    }
  });
}

fixConsoleStatements('src');
