#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  fixFileContent(content, filePath) {
    let fixed = content;
    const originalContent = content;

    // Fix malformed imports with triple quotes
    fixed = fixed.replace(/import[^;]*''';/g, (match) => {
      return match.replace(/''';/g, ';');
    });

    // Fix React type annotations with spaces
    fixed = fixed.replace(/Reac t\./g, 'React.');
    fixed = fixed.replace(/Reac t\.FC/g, 'React.FC');

    // Fix malformed JSX closing tags
    fixed = fixed.replace(/<\/HTMLDivElement>/g, '');
    fixed = fixed.replace(/<\/HTMLParagraphElement>/g, '');
    fixed = fixed.replace(/<\/HTMLInputElement>/g, '');
    fixed = fixed.replace(/<\/h3>/g, '');

    // Fix unterminated string constants
    fixed = fixed.replace(/import[^;]*''';/g, (match) => {
      return match.replace(/''';/g, ';');
    });

    // Fix malformed function declarations
    fixed = fixed.replace(/export const (\w+):\s*Reac t\.FC<(\w+)>\s*=\s*\(\{/g, 'export const $1: React.FC<$2> = ({');

    // Fix malformed return statements
    fixed = fixed.replace(/return\s*\(\)\s*\/\*[^*]*\*\/\s*@media/g, 'return (\n    <>\n      <style jsx>{`\n        @media');

    // Fix malformed CSS in JSX
    fixed = fixed.replace(/@media\(prefers-reduced-motion:\s*reduc e\)/g, '@media (prefers-reduced-motion: reduce)');

    // Fix malformed object destructuring
    fixed = fixed.replace(/const\s*\(\{([^}]+)\}\s*:\s*any\)/g, 'const ({$1})');

    // Fix malformed array methods
    fixed = fixed.replace(/\.filter\(item\s*=>\s*item\s*!==\s*value\)\s*\[\.\.\.prev,\s*value\]/g, '.filter(item => item !== value) : [...prev, value]');

    // Fix malformed switch statements
    fixed = fixed.replace(/switch\s*\(\w+\)\s*\{case\s*'([^']+)':/g, 'switch (filterType) {\n            case \'$1\':');

    // Fix malformed function calls
    fixed = fixed.replace(/fetchSavedTalents\(\)\}/g, 'fetchSavedTalents();\n        }');

    // Fix malformed useEffect
    fixed = fixed.replace(/useEffect\(\(\)\s*=>\s*\{([^}]+)\},\s*\[user\]\);/g, 'useEffect(() => {\n            $1\n        }, [user]);');

    // Fix malformed try-catch blocks
    fixed = fixed.replace(/finally\s*\{setIsLoading\(false\)\}/g, 'finally {\n                setIsLoading(false);\n            }');

    // Fix malformed object properties
    fixed = fixed.replace(/name:\s*'',\s*''';/g, 'name: \'\',');
    fixed = fixed.replace(/email:\s*'',\s*''';/g, 'email: \'\',');

    // Fix malformed JSX attributes
    fixed = fixed.replace(/variant:\s*"destructive",\s*\}\)\}/g, 'variant: "destructive",\n                });');

    // Fix malformed function parameters
    fixed = fixed.replace(/const\s*handleChange\s*=\s*\(props:\s*any\)/g, 'const handleChange = (e)');

    // Fix malformed return statements in functions
    fixed = fixed.replace(/return\s*\(<div/g, 'return (\n        <div');

    // Fix malformed closing braces
    fixed = fixed.replace(/\}\s*\)\s*;/g, '}\n    );');

    // Fix malformed array destructuring
    fixed = fixed.replace(/const\s*\[([^,]+),\s*set([^]]+)\]\s*=\s*useState\(\[\]\);/g, 'const [$1, set$2] = useState([]);');

    // Fix malformed object destructuring in parameters
    fixed = fixed.replace(/const\s*handleSave\s*=\s*\(props\)/g, 'const handleSave = ()');

    // Fix malformed function calls with missing parameters
    fixed = fixed.replace(/handleRequestHire\s*=\s*\(talentId\)/g, 'handleRequestHire = (talentId)');

    // Fix malformed switch case statements
    fixed = fixed.replace(/case\s*'productTypes':\s*setSelectedProductTypes\(prev\s*=>\s*prev\.includes\(value\)\s*\?\s*prev\.filter\(item\s*=>\s*item\s*!==\s*value\)\s*:\s*\[\.\.\.prev,\s*value\]\);/g, 
      'case \'productTypes\':\n                setSelectedProductTypes(prev => \n                    prev.includes(value) \n                        ? prev.filter(item => item !== value) \n                        : [...prev, value]\n                );');

    // Fix malformed break statements
    fixed = fixed.replace(/break;\s*case\s*'locations':/g, 'break;\n            case \'locations\':');

    // Fix malformed default case
    fixed = fixed.replace(/default:\s*break;\s*\}\s*};/g, 'default:\n                break;\n        }\n    };');

    // Fix malformed JSX closing tags
    fixed = fixed.replace(/<\/div>\s*\)\s*;/g, '</div>\n    );');

    // Fix malformed function declarations
    fixed = fixed.replace(/export\s*default\s*function\s*(\w+)\(\)\s*\{\s*const\s*\[([^,]+),\s*set([^]]+)\]\s*=\s*useState\(\[\]\);/g, 
      'export default function $1() {\n    const [$2, set$3] = useState([]);');

    // Fix malformed useEffect dependencies
    fixed = fixed.replace(/useEffect\(\(\)\s*=>\s*\{([^}]+)\},\s*\[user\]\);/g, 'useEffect(() => {\n        $1\n    }, [user]);');

    // Fix malformed async functions
    fixed = fixed.replace(/const\s*fetchSavedTalents\s*=\s*async\s*\(\)\s*=>\s*\{/g, 'const fetchSavedTalents = async () => {\n        try {');

    // Fix malformed try-catch blocks
    fixed = fixed.replace(/try\s*\{([^}]+)\}\s*catch\s*\(error\)\s*\{([^}]+)\}\s*finally\s*\{([^}]+)\}/g, 
      'try {\n            $1\n        } catch (error) {\n            $2\n        } finally {\n            $3\n        }');

    // Fix malformed toast calls
    fixed = fixed.replace(/toast\(\{\s*title:\s*"([^"]+)",\s*description:\s*`([^`]+)`,\s*\}\)\}/g, 
      'toast({\n            title: "$1",\n            description: `$2`,\n        });');

    // Fix malformed JSX return statements
    fixed = fixed.replace(/return\s*\(\s*<div\s*className="min-h-screen/g, 'return (\n        <div className="min-h-screen');

    // Fix malformed closing div tags
    fixed = fixed.replace(/<\/div>\s*\)\s*;/g, '</div>\n    );');

    // Fix malformed function parameters
    fixed = fixed.replace(/const\s*handleSubmit\s*=\s*\(e\)\s*=>\s*\{\s*e\.preventDefault\(\);\s*\/\/\s*Handle\s*form\s*submission\s*\}\s*;/g, 
      'const handleSubmit = (e) => {\n        e.preventDefault();\n        // Handle form submission\n    };');

    // Fix malformed object destructuring
    fixed = fixed.replace(/const\s*handleChange\s*=\s*\(e\)\s*=>\s*\{\s*setFormData\(\{\s*\.\.\.formData,\s*\[e\.target\.name\]:\s*e\.target\.value\s*\}\)\s*\}\s*;/g, 
      'const handleChange = (e) => {\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    };');

    return fixed;
  }

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fixedContent = this.fixFileContent(content, filePath);
      
      if (content !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed: ${filePath}`);
        return true;
      }
      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  async findAndFixFiles() {
    this.log('🔍 Finding files with syntax errors...');
    
    const srcDir = path.join(this.projectRoot, 'src');
    const filesToFix = [];
    
    // Find all JS/JSX/TS/TSX files
    const findFiles = (dir) => {
      const items = fs.readdirSync(dir, { withFileTypes: true });
      for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
          findFiles(fullPath);
        } else if (item.isFile() && /\.(js|jsx|ts|tsx)$/.test(item.name)) {
          filesToFix.push(fullPath);
        }
      }
    };
    
    findFiles(srcDir);
    
    this.log(`📁 Found ${filesToFix.length} files to check`);
    
    // Fix each file
    for (const file of filesToFix) {
      await this.fixFile(file);
    }
    
    return filesToFix.length;
  }

  async run() {
    this.log('🚀 Starting Comprehensive Syntax Fixer');
    
    const totalFiles = await this.findAndFixFiles();
    
    const report = {
      timestamp: new Date().toISOString(),
      totalFiles,
      fixedFiles: this.fixedFiles.length,
      errors: this.errors.length,
      fixedFileList: this.fixedFiles,
      errorList: this.errors
    };
    
    fs.writeFileSync(
      path.join(this.projectRoot, 'comprehensive-syntax-fix-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    this.log(`🎉 Comprehensive Syntax Fix Complete!`);
    this.log(`📊 Fixed ${this.fixedFiles.length}/${totalFiles} files`);
    this.log(`❌ ${this.errors.length} errors encountered`);
  }
}

// Run the fixer
const fixer = new ComprehensiveSyntaxFixer();
fixer.run().catch(console.error);