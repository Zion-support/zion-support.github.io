import fs from 'fs';

// Read the services data file
const filePath = '/workspace/app/data/servicesData.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Replace all contactInfo objects to include address
const contactInfoRegex = /contactInfo:\s*{\s*phone:\s*'\+1 302 464 0950',\s*email:\s*'kleber@ziontechgroup\.com',\s*website:\s*'([^']+)'\s*}/g;

content = content.replace(contactInfoRegex, (match, website) => {
  return `contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709',
        website: '${website}'
      }`;
});

// Write the updated content back
fs.writeFileSync(filePath, content);

console.log('Contact information updated successfully!');