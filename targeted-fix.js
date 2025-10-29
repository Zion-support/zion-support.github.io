const fs = require('fs');
const path = require('path');

function fixTargetedIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix metadata object syntax issues
    // Pattern: export const metadata: Metadata = {, -> export const metadata: Metadata = {
    content = content.replace(/export const metadata: Metadata = \{,/g, 'export const metadata: Metadata = {');
    
    // Fix missing commas in object properties
    // Pattern: property: "value" property: "value" -> property: "value", property: "value"
    content = content.replace(/(\w+:\s*"[^"]+")\s*\n\s*(\w+:\s*"[^"]+")/g, '$1,\n    $2');
    
    // Fix missing commas in features arrays
    // Pattern: } { -> }, {
    content = content.replace(/\}\s*\{/g, '},\n    {');
    
    // Fix missing commas in benefits arrays
    content = content.replace(/benefits:\s*\[\s*'([^']+)'\s*'([^']+)'\s*'([^']+)'\s*'([^']+)'\s*\]/g, 
      `benefits: [
      "$1",
      "$2",
      "$3",
      "$4"
    ]`);
    
    // Fix missing commas in features arrays
    content = content.replace(/features:\s*\[\s*'([^']+)'\s*'([^']+)'\s*'([^']+)'\s*'([^']+)'\s*\]/g, 
      `features: [
      "$1",
      "$2",
      "$3",
      "$4"
    ]`);
    
    // Fix specific patterns in features arrays
    content = content.replace(/\{\s*icon:\s*(\w+),\s*title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*benefits:\s*\[\s*'([^']+)'\s*'([^']+)'\s*'([^']+)'\s*'([^']+)'\s*\]\s*\}\s*\{\s*icon:\s*(\w+),\s*title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*benefits:\s*\[\s*'([^']+)'\s*'([^']+)'\s*'([^']+)'\s*'([^']+)'\s*\]\s*\}\s*\{\s*icon:\s*(\w+),\s*title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*benefits:\s*\[\s*'([^']+)'\s*'([^']+)'\s*'([^']+)'\s*'([^']+)'\s*\]\s*\}\s*\{\s*icon:\s*(\w+),\s*title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*benefits:\s*\[\s*'([^']+)'\s*'([^']+)'\s*'([^']+)'\s*'([^']+)'\s*\]\s*\}/g, 
      `{
    icon: $1,
    title: "$2",
    description: "$3",
    benefits: [
      "$4",
      "$5",
      "$6",
      "$7"
    ]
  },
  {
    icon: $8,
    title: "$9",
    description: "$10",
    benefits: [
      "$11",
      "$12",
      "$13",
      "$14"
    ]
  },
  {
    icon: $15,
    title: "$16",
    description: "$17",
    benefits: [
      "$18",
      "$19",
      "$20",
      "$21"
    ]
  },
  {
    icon: $22,
    title: "$23",
    description: "$24",
    benefits: [
      "$25",
      "$26",
      "$27",
      "$28"
    ]
  }`);
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixTargetedIssues(filePath);
    }
  }
}

// Start fixing from the app directory
walkDirectory('./app');
console.log('Targeted fixing completed!');