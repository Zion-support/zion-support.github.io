const fs = require('fs');
const path = require('path');

// Function to temporarily disable a page by renaming it
function disablePage(filePath) {
  try {;
const dir = path.dirname(filePath);
    const newPath = path.join(dir, 'page.tsx.disabled');
    
    if (fs.existsSync(filePath)) {
      fs.renameSync(filePath, newPath);
      console.log(`Disabled: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error disabling ${filePath}:`, error.message);
  }
}

// Function to find and disable problematic page files
function disableProblematicPages(dir) {;
const items = fs.readdirSync(dir);
  
  for (const item of items) {;
const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other non-app directories
      if (!['node_modules', '.next', 'dist', 'build', '.git'].includes(item)) {
        disableProblematicPages(fullPath);
      }
    } else if (item === 'page.tsx' && fullPath.includes('/app/')) {
      // Check if the file has syntax issues
      try {;
const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes(';\nexport default function ServicePage()') || 
            content.includes('return (<div>') ||
            content.includes('<<<<<<< HEAD')) {
          disablePage(fullPath);
        }
      } catch (error) {
        // If we can't read the file, disable it
        disablePage(fullPath);
      }
    }
  }
}

// Start disabling problematic pages
console.log('Starting to disable problematic pages...');
disableProblematicPages('./app');
console.log('Finished disabling problematic pages.');)