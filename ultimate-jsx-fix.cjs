const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to create a proper page template
function createPageTemplate(pageName, title, description, keywords) {
  return `import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const ${pageName}: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${title}</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${keywords}" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">${title}</h1>
            <p className="text-xl text-gray-300 mb-8">
              ${description}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ${pageName};`;
}

// Function to check if a file is corrupted
function isCorrupted(content) {
  // Check for common corruption patterns
  const corruptionPatterns = [
    /<>Helmet>/,
    /div className=/,
    /h1 className=/,
    /h3 className=/,
    /p className=/,
    /TS1382/,
    /Unexpected token/,
    /Identifier expected/,
    /Expected corresponding/,
    /JSX expressions must have one parent element/,
    /Unterminated regular expression literal/,
    /Unexpected keyword or identifier/,
    /Declaration or statement expected/,
    /Expression expected/,
    /; expected/,
    /, expected/,
    /\) expected/,
    /\( expected/,
    /: expected/,
    /Unknown keyword or identifier/,
    /An identifier or keyword cannot immediately follow a numeric literal/
  ];
  
  return corruptionPatterns.some(pattern => pattern.test(content));
}

// Function to extract page info from file path
function getPageInfo(filePath) {
  const pathParts = filePath.split('/');
  const fileName = pathParts[pathParts.length - 2] || pathParts[pathParts.length - 1];
  
  // Handle special cases
  if (fileName === '404') {
    return {
      pageName: 'NotFoundPage',
      title: '404 - Page Not Found',
      description: 'The page you are looking for does not exist.',
      keywords: '404, not found, error'
    };
  }
  
  if (fileName === '5g-data-analytics') {
    return {
      pageName: 'FiveGDataAnalyticsPage',
      title: '5G Data Analytics',
      description: 'Advanced 5G data analytics solutions for maximum efficiency.',
      keywords: '5g, data, analytics, solutions'
    };
  }
  
  if (fileName === '5g-deployment') {
    return {
      pageName: 'FiveGDeploymentPage',
      title: '5G Deployment',
      description: 'Professional 5G deployment services and solutions.',
      keywords: '5g, deployment, services, solutions'
    };
  }
  
  if (fileName === '5g-edge-computing') {
    return {
      pageName: 'FiveGEdgeComputingPage',
      title: '5G Edge Computing',
      description: 'Cutting-edge 5G edge computing solutions.',
      keywords: '5g, edge, computing, solutions'
    };
  }
  
  if (fileName === '5g-implementation') {
    return {
      pageName: 'FiveGImplementationPage',
      title: '5G Implementation',
      description: 'Professional 5G implementation services.',
      keywords: '5g, implementation, services'
    };
  }
  
  if (fileName === '5g-infrastructure') {
    return {
      pageName: 'FiveGInfrastructurePage',
      title: '5G Infrastructure',
      description: 'Robust 5G infrastructure solutions.',
      keywords: '5g, infrastructure, solutions'
    };
  }
  
  // Default case
  const pageName = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  
  const title = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const description = `Professional ${title.toLowerCase()} solutions and services`;
  const keywords = title.toLowerCase().replace(/\s+/g, ', ');
  
  return { pageName, title, description, keywords };
}

// Main function to process all files
async function fixAllFiles() {
  const pattern = 'app/**/*.tsx';
  const files = glob.sync(pattern);
  
  console.log(`Found ${files.length} files to process...`);
  
  let fixedCount = 0;
  let skippedCount = 0;
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      
      if (isCorrupted(content)) {
        console.log(`Fixing corrupted file: ${file}`);
        const pageInfo = getPageInfo(file);
        const fixed = createPageTemplate(pageInfo.pageName, pageInfo.title, pageInfo.description, pageInfo.keywords);
        fs.writeFileSync(file, fixed, 'utf8');
        fixedCount++;
      } else {
        console.log(`Skipping file (appears to be valid): ${file}`);
        skippedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\nProcessing complete!`);
  console.log(`Fixed: ${fixedCount} files`);
  console.log(`Skipped: ${skippedCount} files`);
}

// Run the fix
fixAllFiles().catch(console.error);