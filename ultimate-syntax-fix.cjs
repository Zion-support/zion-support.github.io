#!/usr/bin/env node

const fs = require('fs');

// Function to completely fix corrupted text
function fixCorruptedText(content) {
  // Fix spaces in variable names and keywords
  content = content.replace(/(\w)\s+(\w)/g, (match, p1, p2) => {
    // Only fix if it's clearly corrupted (letters separated by spaces)
    if (p1.match(/[a-zA-Z]/) && p2.match(/[a-zA-Z]/) && match.length <= 10) {
      return p1 + p2;
    }
    return match;
  });
  
  // Fix specific corrupted patterns
  content = content.replace(/teamMemb\s+e\s+r\s+s/g, 'teamMembers');
  content = content.replace(/handleInputCha\s+n\s+g\s+e/g, 'handleInputChange');
  content = content.replace(/React\.ChangeEv\s+e\s+n\s+t/g, 'React.ChangeEvent');
  content = content.replace(/HTMLInputElem\s+e\s+n\s+t/g, 'HTMLInputElement');
  content = content.replace(/HTMLTextAreaElem\s+e\s+n\s+t/g, 'HTMLTextAreaElement');
  content = content.replace(/n\s+a\s+m\s+e/g, 'name');
  content = content.replace(/va\s+l\s+u\s+e/g, 'value');
  content = content.replace(/tar\s+g\s+e\s+t/g, 'target');
  content = content.replace(/p\s+r\s+e\s+v/g, 'prev');
  content = content.replace(/r\s+o\s+l\s+e/g, 'role');
  content = content.replace(/expert\s+i\s+s\s+e/g, 'expertise');
  content = content.replace(/readT\s+i\s+m\s+e/g, 'readTime');
  content = content.replace(/descri\s+pti\s+o\s+n/g, 'description');
  
  // Fix object property syntax
  content = content.replace(/name:\s*'([^']*)'\s*(\w+):/g, 'name: \'$1\',\n\t\t$2:');
  content = content.replace(/role:\s*'([^']*)'\s*(\w+):/g, 'role: \'$1\',\n\t\t$2:');
  content = content.replace(/expertise:\s*'([^']*)'\s*(\w+):/g, 'expertise: \'$1\',\n\t\t$2:');
  content = content.replace(/image:\s*'([^']*)'\s*(\w+):/g, 'image: \'$1\',\n\t\t$2:');
  content = content.replace(/description:\s*'([^']*)'/g, 'description: \'$1\'');
  
  // Fix array syntax
  content = content.replace(/id:\s*(\d+),\s*title:/g, 'id: $1,\n\t\t\ttitle:');
  content = content.replace(/title:\s*'([^']*)'\s*excerpt:/g, 'title: \'$1\',\n\t\t\texcerpt:');
  content = content.replace(/excerpt:\s*'([^']*)',\s*author:/g, 'excerpt: \'$1\',\n\t\t\tauthor:');
  content = content.replace(/author:\s*'([^']*)'\s*date:/g, 'author: \$1\',\n\t\t\tdate:');
  content = content.replace(/date:\s*'([^']*)'\s*readTime:/g, 'date: \'$1\',\n\t\t\treadTime:');
  content = content.replace(/readTime:\s*'([^']*)'\s*category:/g, 'readTime: \'$1\',\n\t\t\tcategory:');
  content = content.replace(/category:\s*'([^']*)'\s*image:/g, 'category: \'$1\',\n\t\t\timage:');
  content = content.replace(/image:\s*'([^']*)'\s*slug:/g, 'image: \'$1\',\n\t\t\tslug:');
  content = content.replace(/slug:\s*'([^']*)'(\s*})/g, 'slug: \'$1\'$2');
  
  // Fix JSX syntax
  content = content.replace(/<EnhancedSEOtitle=/g, '<EnhancedSEO\n\t\ttitle=');
  content = content.replace(/title="([^"]*)"\s*description=/g, 'title="$1"\n\t\tdescription=');
  content = content.replace(/description="([^"]*)"\s*keywords=/g, 'description="$1"\n\t\tkeywords=');
  
  // Fix function call syntax
  content = content.replace(/setFormData\(\s*p\s+r\s+e\s+v\s*=>\s*\(\{/g, 'setFormData(prev => ({\n\t\t...prev,');
  content = content.replace(/\.\.\.p\s+r\s+e\s+v\s*\[n\s+a\s+m\s+e\]:\s*va\s+l\s+u\s+e\s*\}\)/g, '\t\t[name]: value\n\t})');
  
  // Fix return statement indentation
  content = content.replace(/return \(\s*<div className="p-8">/g, 'return (\n\t\t<div className="p-8">');
  
  return content;
}

// Function to fix specific files
function fixSpecificFiles() {
  const files = [
    'pages/about.tsx',
    'pages/analytics.tsx', 
    'pages/blog.tsx',
    'pages/contact.tsx',
    'pages/dashboard.tsx'
  ];
  
  files.forEach(filePath => {
    try {
      if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return;
      }
      
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      content = fixCorruptedText(content);
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed corrupted text in: ${filePath}`);
      }
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
    }
  });
}

// Run the fixes
console.log('Starting ultimate syntax fixes...');
fixSpecificFiles();
console.log('Ultimate syntax fixes completed!');