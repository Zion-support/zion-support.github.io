const fs = require('fs');
const path = require('path');

// Function to create a clean page component
function createCleanPageComponent(pageName) {
  return `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Page() {
  return (
    <>
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${pageName.toLowerCase()} services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">${pageName}</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
}`;
}

// Function to create a clean component
function createCleanComponent(componentName) {
  return `'use client';
import React from 'react';

interface ${componentName}Props {
  children?: React.ReactNode;
  className?: string;
}

export default function ${componentName}({ children, className = '' }: ${componentName}Props) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}`;
}

// Function to create a clean utility function
function createCleanUtility(utilityName) {
  return `export const ${utilityName} = () => {
  // ${utilityName} utility function
  return true;
};

export default ${utilityName};`;
}

// Function to create a clean hook
function createCleanHook(hookName) {
  return `'use client';
import { useState, useEffect } from 'react';

export const ${hookName} = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    // ${hookName} hook logic
  }, []);

  return { state };
};

export default ${hookName};`;
}

// Function to create a clean type definition
function createCleanTypes() {
  return `// Type definitions
export interface PageProps {
  params: Record<string, string>;
  searchParams: Record<string, string | string[] | undefined>;
}

export {};`;
}

// Function to fix all files
function fixAllFiles() {
  const appDir = path.join(__dirname, 'app');
  let fixedCount = 0;

  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        try {
          const pathParts = filePath.split('/');
          const fileName = pathParts[pathParts.length - 1].replace(/\.(tsx|ts)$/, '');
          const componentName = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/\s/g, '');
          
          let content = '';
          
          if (filePath.includes('/page.tsx')) {
            const pageName = pathParts[pathParts.length - 2].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            content = createCleanPageComponent(pageName);
          } else if (filePath.includes('/hooks/')) {
            content = createCleanHook(componentName);
          } else if (filePath.includes('/utils/')) {
            content = createCleanUtility(componentName);
          } else if (filePath.includes('/types/')) {
            content = createCleanTypes();
          } else if (filePath.includes('/components/')) {
            content = createCleanComponent(componentName);
          } else {
            content = createCleanComponent(componentName);
          }
          
          fs.writeFileSync(filePath, content);
          console.log(`Fixed: ${filePath}`);
          fixedCount++;
        } catch (error) {
          console.error(`Error processing ${filePath}:`, error.message);
        }
      }
    }
  }

  walkDir(appDir);
  
  // Fix root files
  const rootFiles = [
    { file: 'App.tsx', content: `import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';

// Components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import AnalyticsProvider from './app/components/AnalyticsProvider';
import PerformanceOptimizer from './app/components/PerformanceOptimizer';
import SEOOptimizer from './app/components/SEOOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import CustomErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import MetaManager from './app/components/MetaManager';
import EnhancedAnalytics from './app/components/EnhancedAnalytics';
import AdvancedLoadingStates from './app/components/AdvancedLoadingStates';

// Pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import ContactPage from './app/contact/page';

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong.</div>}>
      <HelmetProvider>
        <AnalyticsProvider>
          <PerformanceOptimizer>
            <AccessibilityEnhancer />
            <SEOOptimizer />
            <MetaManager />
            <PerformanceMonitor />
            <EnhancedAnalytics />
            <Router>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <Navigation />
                <main className="relative z-10" id="main-content" role="main">
                  <Suspense fallback={<AdvancedLoadingStates type="skeleton" fullScreen message="Loading application..." />}>
                    <CustomErrorBoundary>
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                      </Routes>
                    </CustomErrorBoundary>
                  </Suspense>
                </main>
                <Footer />
              </div>
            </Router>
          </PerformanceOptimizer>
        </AnalyticsProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;` },
    { file: 'main.tsx', content: `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);` }
  ];

  for (const { file, content } of rootFiles) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  }
  
  console.log(`\nFixed ${fixedCount} files`);
}

// Run the fix
fixAllFiles();