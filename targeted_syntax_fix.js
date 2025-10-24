const fs = require('fs');
const path = require('path');

// Function to fix specific syntax patterns
function fixTargetedSyntax(content) {
  // Fix malformed function declarations
  content = content.replace(/const\s*(\w+)\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{const\s*(\w+)\s*=\s*\[\s*/, 'const Page: React.FC = () => {\n  const $2 = [\n    ');
  
  // Fix malformed array declarations
  content = content.replace(/const\s*(\w+)\s*=\s*\[\s*([^\]]*)\s*\]/g, (match, varName, arrayContent) => {
    if (arrayContent.trim() === '') {
      return `const ${varName} = []`;
    }
    
    // Split by lines and fix each item
    const lines = arrayContent.split('\n').map(line => line.trim()).filter(line => line);
    const fixedLines = lines.map(line => {
      if (line && !line.startsWith("'") && !line.startsWith('"') && !line.startsWith('{') && !line.startsWith('[')) {
        return `'${line}'`;
      }
      return line;
    });
    
    return `const ${varName} = [\n    ${fixedLines.join(',\n    ')}\n  ]`;
  });
  
  // Fix malformed JSX return statements
  content = content.replace(/return\s*\(\s*\)\s*{/g, 'return (');
  content = content.replace(/return\s*\(\s*\)\s*<[^>]*>/g, 'return (');
  
  // Fix malformed JSX elements
  content = content.replace(/<(\w+)\s*([^>]*)\s*>\s*<\/\1>/g, '<$1 $2></$1>');
  
  // Fix missing semicolons in imports
  content = content.replace(/import\s+([^;]+)\s*$/gm, 'import $1;');
  
  // Fix malformed object properties
  content = content.replace(/(\w+)\s*:\s*([^,}]+)\s*(\w+)\s*:/g, '$1: $2,\n      $3:');
  content = content.replace(/(\w+)\s*:\s*([^,}]+)\s*(\w+)\s*=\s*\[/g, '$1: $2,\n      $3 = [');
  
  // Fix array syntax in objects
  content = content.replace(/\[\s*'([^']+)'\s*\]/g, '[\n        \'$1\'\n      ]');
  
  // Fix malformed JSX comments
  content = content.replace(/{\/\*\s*([^*]+)\s*\*\/}\s*;\s*return\s*\(/g, '{\n    /* $1 */\n    return (');
  
  // Fix missing closing tags
  content = content.replace(/<(\w+)\s*([^>]*)\s*>\s*([^<]+)\s*<\/\1>/g, '<$1 $2>$3</$1>');
  
  // Fix malformed string literals
  content = content.replace(/(\w+)\s*=\s*\[\s*'([^']+)'\s*\]/g, '$1 = [\n    \'$2\'\n  ]');
  
  // Fix export statements
  content = content.replace(/export\s+default\s+\w+;?\s*$/, 'export default Page;');
  
  // Fix missing closing brackets
  const openBrackets = (content.match(/\{/g) || []).length;
  const closeBrackets = (content.match(/\}/g) || []).length;
  if (openBrackets > closeBrackets) {
    content += '\n' + '}'.repeat(openBrackets - closeBrackets);
  }
  
  // Fix specific patterns for 404 page
  content = content.replace(/return\s*\(\s*Page Not Found<\/h1>/g, 'return (\n    <h1 className="text-4xl font-bold text-white mb-6">Page Not Found</h1>');
  
  // Fix malformed JSX elements
  content = content.replace(/<(\w+)\s*([^>]*)\s*>\s*<\/\1>/g, '<$1 $2></$1>');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixTargetedSyntax(content);
    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const appDir = path.join(__dirname, 'app');

console.log('Starting targeted syntax fix...');

// Process src directory
if (fs.existsSync(srcDir)) {
  const srcFiles = findFiles(srcDir);
  console.log(`Found ${srcFiles.length} files in src directory`);
  
  let fixedCount = 0;
  for (const file of srcFiles) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  console.log(`Fixed ${fixedCount} files in src directory`);
}

// Process app directory
if (fs.existsSync(appDir)) {
  const appFiles = findFiles(appDir);
  console.log(`Found ${appFiles.length} files in app directory`);
  
  let fixedCount = 0;
  for (const file of appFiles) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  console.log(`Fixed ${fixedCount} files in app directory`);
}

console.log('Targeted syntax fix completed!');