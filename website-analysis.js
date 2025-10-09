import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes defined in App.tsx
const definedRoutes = [
  '/', '/about', '/contact', '/services', '/blog', '/case-studies',
  '/ai-analytics-dashboard', '/ai-chatbot-builder', '/ai-content-generation', '/ai-crm', 
  '/ai-customer-support', '/ai-cybersecurity', '/ai-data-analytics', '/ai-data-visualization',
  '/ai-document-processing', '/ai-ecommerce-solutions', '/ai-email-assistant', '/ai-fintech',
  '/ai-healthcare', '/ai-lead-generation', '/ai-marketing', '/ai-mobile-app-development',
  '/ai-sales-automation', '/ai-scheduler', '/ai-services', '/ai-workflow-automation',
  '/ai-writing-assistant', '/ai-project-manager', '/ai-social-media-manager', '/ai-email-marketing',
  '/ai-customer-support-bot', '/ai-seo-optimizer', '/ai-financial-analyzer', '/ai-video-generation',
  '/ai-voice-cloning', '/ai-music-composition', '/ai-fashion-design', '/ai-fitness-coach',
  '/ai-3d-generation', '/machine-learning', '/nlp', '/computer-vision', '/ai-automation',
  '/quantum-ai', '/database-services', '/network-infrastructure', '/it-support',
  '/analytics-tools', '/api-docs', '/api', '/autonomous-systems', '/blockchain',
  '/blockchain-web3', '/business-apps', '/business-intelligence', '/careers',
  '/cloud-services', '/compliance', '/consultation', '/cookies', '/cybersecurity',
  '/database', '/demo', '/developer-tools', '/devops', '/docs', '/enterprise',
  '/expense-tracker', '/gdpr', '/iot-edge-computing', '/iot-edge', '/it-infrastructure',
  '/it-services', '/marketing-tools', '/micro-saas', '/networking', '/news',
  '/offline', '/pricing', '/privacy', '/productivity', '/quantum-computing',
  '/robotics', '/security', '/services-advertising', '/sitemap', '/smart-analytics',
  '/status', '/support', '/system-status', '/task-manager-pro', '/team', '/terms'
];

// Get existing page files
function getExistingPages() {
  const pages = [];
  const srcDir = path.join(__dirname, 'src');
  
  function scanDirectory(dir, basePath = '') {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath, path.join(basePath, item));
      } else if (item === 'page.tsx') {
        const route = basePath ? `/${basePath}` : '/';
        pages.push(route);
      }
    }
  }
  
  scanDirectory(srcDir);
  return pages;
}

const existingPages = getExistingPages();
const missingPages = definedRoutes.filter(route => !existingPages.includes(route));

console.log('=== WEBSITE ANALYSIS ===');
console.log(`Total defined routes: ${definedRoutes.length}`);
console.log(`Existing pages: ${existingPages.length}`);
console.log(`Missing pages: ${missingPages.length}`);

if (missingPages.length > 0) {
  console.log('\n=== MISSING PAGES ===');
  missingPages.forEach(page => console.log(`- ${page}`));
}

// Check for broken internal links
const internalLinks = [
  '/about', '/contact', '/services', '/blog', '/case-studies', '/pricing',
  '/ai-services', '/it-services', '/specialized-services', '/team', '/careers',
  '/demo', '/docs', '/support', '/privacy', '/terms', '/cookies', '/gdpr',
  '/compliance', '/security', '/status', '/system-status', '/sitemap',
  '/news', '/offline', '/api', '/api-docs'
];

const brokenLinks = internalLinks.filter(link => !existingPages.includes(link));

console.log('\n=== POTENTIALLY BROKEN INTERNAL LINKS ===');
if (brokenLinks.length > 0) {
  brokenLinks.forEach(link => console.log(`- ${link}`));
} else {
  console.log('No broken internal links found!');
}

// Check for missing specialized services page
const specializedServicesRoutes = [
  '/quantum-computing', '/autonomous-systems', '/blockchain', '/blockchain-web3',
  '/iot-edge', '/business-intelligence', '/robotics', '/enterprise',
  '/analytics-tools', '/business-apps', '/expense-tracker', '/task-manager-pro',
  '/smart-analytics'
];

const missingSpecialized = specializedServicesRoutes.filter(route => !existingPages.includes(route));

console.log('\n=== MISSING SPECIALIZED SERVICES PAGES ===');
if (missingSpecialized.length > 0) {
  missingSpecialized.forEach(page => console.log(`- ${page}`));
} else {
  console.log('All specialized services pages exist!');
}

console.log('\n=== ANALYSIS COMPLETE ===');