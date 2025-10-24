const fs = require('fs');
const path = require('path');

// Function to fix all remaining syntax issues
function fixAllRemainingIssues(content) {
  // Fix malformed className attributes with double quotes
  content = content.replace(/className=\"\"([^"]*?)\"\"/g, 'className="$1"');
  content = content.replace(/className=\"\"([^"]*?)\"\"/g, 'className="$1"');
  
  // Fix malformed meta attributes
  content = content.replace(/content=\"([^"]*?)\" \/>\"/g, 'content="$1" />');
  content = content.replace(/content=\"([^"]*?)\" \/>\"/g, 'content="$1" />');
  
  // Fix any remaining double quotes in attributes
  content = content.replace(/=\"\"([^"]*?)\"\"/g, '="$1"');
  content = content.replace(/=\"\"([^"]*?)\"\"/g, '="$1"');
  
  // Fix broken closing tags
  content = content.replace(/<div className=\"([^"]*?)\"\">/g, '<div className="$1">');
  content = content.replace(/<h1 className=\"([^"]*?)\"\">/g, '<h1 className="$1">');
  content = content.replace(/<section className=\"([^"]*?)\"\">/g, '<section className="$1">');
  
  // Fix any remaining broken attributes
  content = content.replace(/content=\s*([^"]*?)\s*\/>/g, 'content="$1" />');
  content = content.replace(/name=\s*([^"]*?)\s*\/>/g, 'name="$1" />');
  content = content.replace(/property=\s*([^"]*?)\s*\/>/g, 'property="$1" />');
  
  // Fix any remaining semicolons in JSX attributes
  content = content.replace(/className="([^"]*?);\s*([^"]*?)"/g, 'className="$1 $2"');
  content = content.replace(/content="([^"]*?);\s*([^"]*?)"/g, 'content="$1 $2"');
  content = content.replace(/name="([^"]*?);\s*([^"]*?)"/g, 'name="$1 $2"');
  
  // Fix any remaining broken closing tags
  content = content.replace(/<div([^>]*?)\s*>/g, '<div$1>');
  content = content.replace(/<h1([^>]*?)\s*>/g, '<h1$1>');
  content = content.replace(/<section([^>]*?)\s*>/g, '<section$1>');
  
  // Fix any remaining broken className patterns
  content = content.replace(/className="\s*([^"]*?)\s*"\s*([a-z][^"]*?)"/g, 'className="$1 $2"');
  
  // Fix any remaining broken attributes
  content = content.replace(/content=\s*([^"]*?)\s*\/>/g, 'content="$1" />');
  content = content.replace(/name=\s*([^"]*?)\s*\/>/g, 'name="$1" />');
  content = content.replace(/property=\s*([^"]*?)\s*\/>/g, 'property="$1" />');
  
  return content;
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        content = fixAllRemainingIssues(content);
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  });
}

// Start fixing from the app directory
console.log('Starting ultimate fixes...');
fixFilesInDirectory('./app');
fixFilesInDirectory('./components');
fixFilesInDirectory('./src');
console.log('Ultimate fixes completed!');