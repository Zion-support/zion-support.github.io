const fs = require('fs');
const services = JSON.parse(fs.readFileSync('app/data/servicesData.json', 'utf8'));
let ts = '// Auto-generated services data\n';
services.forEach(s => {
  const varName = s.id.replace(/-/g, '_');
  ts += 'export const ' + varName + ' = ' + JSON.stringify(s, null, 2) + ';\n\n';
});
ts += 'export const allServices = ' + JSON.stringify(services, null, 2) + ';\n';
fs.writeFileSync('app/data/servicesData.ts', ts);
console.log('Updated servicesData.ts with', services.length, 'services');
