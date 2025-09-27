const fs = require('fs');
const path = require('path');

// Function to fix specific syntax errors
function fixTargetedSyntaxErrors(content) {
  // Fix import statements with spaces
  content = content.replace(/import\s+(\w+)\s+from\s+'([^']+)'/g, "import $1 from '$2'");
  content = content.replace(/import\s+\{([^}]+)\}\s+from\s+'([^']+)'/g, "import {$1} from '$2'");
  
  // Fix dynamic imports
  content = content.replace(/dynami, c\(/g, 'dynamic(');
  content = content.replace(/impor, t\(/g, 'import(');
  content = content.replace(/ss, r:\s+fals, e/g, 'ssr: false');
  content = content.replace(/ss, r:\s+tru, e/g, 'ssr: true');
  
  // Fix function declarations
  content = content.replace(/function, (\w+)/g, 'function $1');
  content = content.replace(/export default function, (\w+)/g, 'export default function $1');
  content = content.replace(/React\.mem\.o\(/g, 'React.memo(');
  content = content.replace(/functio, n, (\w+)/g, 'function $1');
  
  // Fix variable declarations
  content = content.replace(/cons, t\[/g, 'const [');
  content = content.replace(/cons, t\{/g, 'const {');
  content = content.replace(/cons, t\s+(\w+)/g, 'const $1');
  content = content.replace(/let, (\w+)/g, 'let $1');
  content = content.replace(/var, (\w+)/g, 'var $1');
  
  // Fix hooks
  content = content.replace(/useStat, e\(/g, 'useState(');
  content = content.replace(/useEffec, t\(/g, 'useEffect(');
  content = content.replace(/useCallback, \(/g, 'useCallback(');
  content = content.replace(/useMemo, \(/g, 'useMemo(');
  content = content.replace(/useRef, \(/g, 'useRef(');
  
  // Fix JSX elements
  content = content.replace(/<Htmllan g=/g, '<Html lang=');
  content = content.replace(/<Hea d>/g, '<Head>');
  content = content.replace(/<Mai n>/g, '<Main>');
  content = content.replace(/<NextScrip, t>/g, '<NextScript>');
  content = content.replace(/<Htmllan g>/g, '<Html>');
  
  // Fix return statements
  content = content.replace(/retur, n\(/g, 'return (');
  content = content.replace(/retur, n\s+/g, 'return ');
  
  // Fix object destructuring
  content = content.replace(/\{(\w+), (\w+)\}/g, '{$1, $2}');
  content = content.replace(/\{(\w+), (\w+), (\w+)\}/g, '{$1, $2, $3}');
  
  // Fix array destructuring
  content = content.replace(/\[(\w+), (\w+)\]/g, '[$1, $2]');
  content = content.replace(/\[(\w+), (\w+), (\w+)\]/g, '[$1, $2, $3]');
  
  // Fix function parameters
  content = content.replace(/\(\s*(\w+), (\w+)\s*\)/g, '($1, $2)');
  content = content.replace(/\(\s*(\w+), (\w+), (\w+)\s*\)/g, '($1, $2, $3)');
  
  // Fix method calls
  content = content.replace(/\.(\w+), (\w+)\(/g, '.$1.$2(');
  content = content.replace(/\.(\w+), (\w+), (\w+)\(/g, '.$1.$2.$3(');
  
  // Fix string literals
  content = content.replace(/'([^']*), ([^']*)'/g, "'$1$2'");
  content = content.replace(/"([^"]*), ([^"]*)"/g, '"$1$2"');
  
  // Fix template literals
  content = content.replace(/`([^`]*), ([^`]*)`/g, '`$1$2`');
  
  // Fix className attributes
  content = content.replace(/className="([^"]*), ([^"]*)"/g, 'className="$1$2"');
  
  // Fix JSX props
  content = content.replace(/(\w+), (\w+)=/g, '$1.$2=');
  content = content.replace(/(\w+), (\w+), (\w+)=/g, '$1.$2.$3=');
  
  // Fix TypeScript types
  content = content.replace(/JSX\.Elemen\.t/g, 'JSX.Element');
  content = content.replace(/AppProp, s/g, 'AppProps');
  content = content.replace(/pageProp, s/g, 'pageProps');
  
  // Fix operators
  content = content.replace(/typeo, f/g, 'typeof');
  content = content.replace(/!==/g, '!==');
  content = content.replace(/===/g, '===');
  content = content.replace(/&&/g, '&&');
  content = content.replace(/\|\|/g, '||');
  
  // Fix method calls with dots
  content = content.replace(/addEventListene\.r\(/g, 'addEventListener(');
  content = content.replace(/navigato\.r/g, 'navigator');
  
  // Fix CSS imports
  content = content.replace(/\.cs\.s'/g, ".css'");
  content = content.replace(/\.cs\.s"/g, '.css"');
  
  // Fix path separators
  content = content.replace(/\/\s+/g, '/');
  content = content.replace(/\s+\//g, '/');
  
  // Fix missing spaces in operators
  content = content.replace(/=(\w+)/g, '= $1');
  content = content.replace(/(\w+)=/g, '$1 =');
  content = content.replace(/\+(\w+)/g, '+ $1');
  content = content.replace(/(\w+)\+/g, '$1 +');
  content = content.replace(/-(\w+)/g, '- $1');
  content = content.replace(/(\w+)-/g, '$1 -');
  content = content.replace(/\*(\w+)/g, '* $1');
  content = content.replace(/(\w+)\*/g, '$1 *');
  content = content.replace(/\/(\w+)/g, '/ $1');
  content = content.replace(/(\w+)\//g, '$1 /');
  
  // Fix comparison operators
  content = content.replace(/==(\w+)/g, '== $1');
  content = content.replace(/(\w+)==/g, '$1 ==');
  content = content.replace(/!=(\w+)/g, '!= $1');
  content = content.replace(/(\w+)!=/g, '$1 !=');
  content = content.replace(/<=(\w+)/g, '<= $1');
  content = content.replace(/(\w+)<=/g, '$1 <=');
  content = content.replace(/>=(\w+)/g, '>= $1');
  content = content.replace(/(\w+)>=/g, '$1 >=');
  
  // Fix logical operators
  content = content.replace(/&&(\w+)/g, '&& $1');
  content = content.replace(/(\w+)&&/g, '$1 &&');
  content = content.replace(/\|\|(\w+)/g, '|| $1');
  content = content.replace(/(\w+)\|\|/g, '$1 ||');
  
  // Fix ternary operators
  content = content.replace(/\?(\w+)/g, '? $1');
  content = content.replace(/(\w+)\?/g, '$1 ?');
  content = content.replace(/:(\w+)/g, ': $1');
  
  // Fix function parameters
  content = content.replace(/\((\w+), (\w+)/g, '($1, $2');
  
  // Fix object literals
  content = content.replace(/\{(\w+), (\w+)/g, '{$1: $2');
  
  // Fix array literals
  content = content.replace(/\[(\w+), (\w+)/g, '[$1, $2');
  
  // Fix comments
  content = content.replace(/\/\/(\w+)/g, '// $1');
  content = content.replace(/\/\*(\w+)/g, '/* $1');
  
  // Fix import statements
  content = content.replace(/import\s+(\w+)\s+from/g, 'import $1 from');
  content = content.replace(/import\s+\{([^}]+)\}\s+from/g, (match, imports) => {
    const cleanImports = imports.replace(/\s+/g, ' ').trim();
    return `import { ${cleanImports} } from`;
  });
  
  // Fix export statements
  content = content.replace(/export\s+(\w+)/g, 'export $1');
  content = content.replace(/export\s+default\s+(\w+)/g, 'export default $1');
  
  // Fix JSX attributes
  content = content.replace(/(\w+), (\w+)=/g, '$1.$2=');
  content = content.replace(/=(\w+)/g, '= $1');
  content = content.replace(/(\w+)=/g, '$1 =');
  
  // Fix missing semicolons
  content = content.replace(/(\w+)\s*$/gm, '$1;');
  
  // Fix missing commas in objects
  content = content.replace(/(\w+):\s*'([^']+)'\s*(\w+):/g, '$1: \'$2\',\n    $3:');
  content = content.replace(/(\w+):\s*"([^"]+)"\s*(\w+):/g, '$1: "$2",\n    $3:');
  
  // Fix missing commas in arrays
  content = content.replace(/(\w+)\s*(\w+)\s*\[/g, '$1, $2[');
  
  // Fix missing commas in function parameters
  content = content.replace(/(\w+)\s*(\w+)\s*\)/g, '$1, $2)');
  
  // Fix missing commas in destructuring
  content = content.replace(/(\w+)\s*(\w+)\s*\}/g, '$1, $2}');
  content = content.replace(/(\w+)\s*(\w+)\s*\]/g, '$1, $2]');
  
  // Fix missing commas in JSX props
  content = content.replace(/(\w+)=\s*"([^"]+)"\s*(\w+)=/g, '$1="$2",\n    $3=');
  content = content.replace(/(\w+)=\s*'([^']+)'\s*(\w+)=/g, "$1='$2',\n    $3=");
  
  // Fix missing commas in function calls
  content = content.replace(/(\w+)\s*(\w+)\s*\)/g, '$1, $2)');
  
  // Fix missing commas in object methods
  content = content.replace(/(\w+)\s*(\w+)\s*\(/g, '$1, $2(');
  
  // Fix missing commas in array methods
  content = content.replace(/(\w+)\s*(\w+)\s*\[/g, '$1, $2[');
  
  // Fix missing commas in object properties
  content = content.replace(/(\w+)\s*(\w+)\s*:/g, '$1, $2:');
  
  // Fix missing commas in array elements
  content = content.replace(/(\w+)\s*(\w+)\s*\]/g, '$1, $2]');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixTargetedSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting targeted syntax error fixes...');
const fixedCount = processDirectory('./pages');
console.log(`Fixed ${fixedCount} files in pages directory`);

const srcFixedCount = processDirectory('./src');
console.log(`Fixed ${srcFixedCount} files in src directory`);

console.log('Targeted syntax error fixes completed!');