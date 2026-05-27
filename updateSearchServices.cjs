const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'out', 'service-index.json');
const outPath = path.join(__dirname, 'app', 'data', 'searchServices.ts');

const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
const services = index.services.map(s => ({
  id: s.id,
  title: s.title,
  description: s.description,
  category: s.category,
  popular: s.popular,
  href: `/services/${s.id}`
}));

let output = '// Auto-generated from service-index.json (build time)\n\n';
output += 'export interface SearchService {\n';
output += '  id:          string;\n';
output += '  title:       string;\n';
output += '  description: string;\n';
output += '  category:    string;\n';
output += '  popular:     boolean;\n';
output += '  href:        string;\n';
output += '}\n\n';
output += 'export const searchServices: SearchService[] = [\n';
output += services.map(s => {
  // Escape quotes in title and description
  const title = s.title.replace(/"/g, '\\\\"').replace(/\n/g, '\\n');
  const desc = s.description.replace(/"/g, '\\\\"').replace(/\n/g, '\\n');
  return `  {\n    "id": "${s.id}",\n    "title": "${title}",\n    "description": "${desc}",\n    "category": "${s.category}",\n    "popular": ${s.popular},\n    "href": "${s.href}"\n  }`;
}).join(',\n');
output += '\n];\n';

fs.writeFileSync(outPath, output);
console.log(`Updated searchServices.ts with ${services.length} services`);
