import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix specific JSX errors
function fixTargetedJsxErrors(content) {
  let fixed = content;
  
  // Fix duplicate closing tags like </a> </a>
  fixed = fixed.replace(/<\/a>\s*<\/a>/g, '</a>');
  
  // Fix missing opening section tag before CTA
  fixed = fixed.replace(/(\s*)(<h2[^>]*>Ready to Get Started\?<\/h2>)/g, '$1        <section className="py-20 px-4 sm:px-6 lg:px-8">\n          <div className="max-w-7xl mx-auto text-center">\n$2');
  
  // Fix missing opening div tag before CTA
  fixed = fixed.replace(/(<h2[^>]*>Ready to Get Started\?<\/h2>)/g, '            $1');
  
  // Fix missing opening div tag before CTA paragraph
  fixed = fixed.replace(/(<p[^>]*>Let us help you implement this solution for your business\.<\/p>)/g, '            $1');
  
  // Fix missing opening div tag before CTA buttons
  fixed = fixed.replace(/(<div[^>]*flex[^>]*>\s*<a[^>]*>Start Your Project<\/a>)/g, '            $1');
  
  // Fix missing closing tags for CTA section
  fixed = fixed.replace(/(<a[^>]*>Learn More<\/a>\s*<\/div>\s*)(?!<\/section>)/g, '$1          </div>\n        </section>');
  
  // Fix missing closing tags for main container
  fixed = fixed.replace(/(<div[^>]*min-h-screen[^>]*>.*?)(?!<\/div>)(?=\s*<\/React\.Fragment>)/g, '$1      </div>');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixTargetedJsxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  const appDir = path.join(__dirname, 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  console.log('Starting targeted JSX error fixes...');
  
  const files = await glob(pattern);
  let fixedCount = 0;
  
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
}

main();