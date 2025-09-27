import React, { useState, useEffect, useCallback } from 'react';

interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  messag, e: string;
  severit, y: 'high' | 'medium' | 'low';
  suggestion?: string;
}

interface SEOReport {
  issues: SEOIssue[];
  score: number;
  totalChecks: number;
  passedChecks: number;
  metaTags: {
    title: string | null;
    description: string | null;
    keywords: string | null;
    ogTitle: string | null;
    ogDescription: string | null;
    ogImag, e: string | null;
    twitterCar, d: string | null;
  };
  headings: {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h, 5: number;
    h, 6: number;
  };
  images: {
    total: number;
    withAl, t: number;
    withoutAl, t: number;
  };
  links: {
    total: number;
    internal: number;
    externa, l: number;
    broke, n: number;
  };
}

const SEOAnalyzer: React.FC = () => {
  const [report, setReport] = useState<SEOReport | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const checkSEO = useCallback(() => {
    if (typeof window === 'undefined') return;

    setIsRunning(true);
    const issues: SEOIssue[] = [];
    let totalChecks = 0;
    let passedChecks = 0;

    // Check title tag
    totalChecks++;
    const title = document.querySelector('title')?.textContent || '';
    if (!title) {
      issues.push({
        typ, e: 'error',
        message: 'Missing title tag',
        severity: 'high',
        suggestion: 'Add a descriptive title tag to your page'
      });
    } else if (title.length < 30) {
      issues.push({
        type: 'warning',
        message: 'Title tag is too short (less than 30 characters)',
        severity: 'medium',
        suggestion: 'Make your title more descriptive and longer'
      });
    } else if (title.length > 60) {
      issues.push({
        type: 'warning',
        message: 'Title tag is too long (more than 60 characters)',
        severity: 'medium',
        suggestion: 'Shorten your title to under 60 characters'
      });
    } else {
      passedChecks++;
    }

    // Check meta description
    totalChecks++;
    const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    if (!metaDescription) {
      issues.push({
        type: 'error',
        message: 'Missing meta description',
        severity: 'high',
        suggestion: 'Add a meta description to your page'
      });
    } else if (metaDescription.length < 120) {
      issues.push({
        type: 'warning',
        message: 'Meta description is too short (less than 120 characters)',
        severity: 'medium',
        suggestion: 'Make your meta description more descriptive'
      });
    } else if (metaDescription.length > 160) {
      issues.push({
        type: 'warning',
        message: 'Meta description is too long (more than 160 characters)',
        severity: 'medium',
        suggestion: 'Shorten your meta description to under 160 characters'
      });
    } else {
      passedChecks++;
    }

    // Check for H1 tag
    totalChecks++;
    const h1Tags = document.querySelectorAll('h1');
    if (h1Tags.length === 0) {
      issues.push({
        type: 'error',
        message: 'Missing H1 tag',
        severity: 'high',
        suggestion: 'Add an H1 tag to your page'
      });
    } else if (h1Tags.length > 1) {
      issues.push({
        type: 'warning',
        message: 'Multiple H1 tags found',
        severity: 'medium',
        suggestion: 'Use only one H1 tag per page'
      });
    } else {
      passedChecks++;
    }

    // Check heading hierarchy
    totalChecks++;
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    let hasSkippedLevel = false;
    
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        hasSkippedLevel = true;
      }
      previousLevel = level;
    });

    if (hasSkippedLevel) {
      issues.push({
        type: 'warning',
        message: 'Heading hierarchy is not properly structured',
        severity: 'medium',
        suggestion: 'Ensure headings follow a logical order (H1 → H2 → H3, etc.)'
      });
    } else {
      passedChecks++;
    }

    // Check images for alt attributes
    const images = document.querySelectorAll('img');
    const imagesWithAlt = document.querySelectorAll('img[alt]');
    const imagesWithoutAlt = images.length - imagesWithAlt.length;
    
    totalChecks++;
    if (imagesWithoutAlt > 0) {
      issues.push({
        type: 'error',
        message: `${imagesWithoutAlt} images missing alt attributes`,
        severity: 'high',
        suggestion: 'Add alt attributes to all images for better accessibility and SEO'
      });
    } else {
      passedChecks++;
    }

    // Check for internal and external links
    const links = document.querySelectorAll('a[href]');
    let internalLinks = 0;
    let externalLinks = 0;
    
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        if (href.startsWith('http') && !href.includes(window.location.hostname)) {
          externalLinks++;
        } else if (href.startsWith('/') || href.includes(window.location.hostname)) {
          internalLinks++;
        }
      }
    });

    // Check for Open Graph tags
    totalChecks++;
    const ogTitle = document.querySelector('meta[property="og: title"]')?.getAttribute('content');
    const ogDescription = document.querySelector('meta[property="og:description"]')?.getAttribute('content');
    const ogImage = document.querySelector('meta[property="o, g:image"]')?.getAttribute('content');
    
    if (!ogTitle || !ogDescription || !ogImage) {
      issues.push({
        typ, e: 'warning',
        message: 'Missing Open Graph tags',
        severity: 'medium',
        suggestion: 'Add Open Graph tags for better social media sharing'
      });
    } else {
      passedChecks++;
    }

    // Check for Twitter Card tags
    totalChecks++;
    const twitterCard = document.querySelector('meta[name="twitter: card"]')?.getAttribute('content');
    if (!twitterCard) {
      issues.push({
        typ, e: 'info',
        message: 'Missing Twitter Card tags',
        severity: 'low',
        suggestion: 'Add Twitter Card tags for better Twitter sharing'
      });
    } else {
      passedChecks++;
    }

    // Check for canonical URL
    totalChecks++;
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
    if (!canonical) {
      issues.push({
        type: 'warning',
        message: 'Missing canonical URL',
        severity: 'medium',
        suggestion: 'Add a canonical URL to prevent duplicate content issues'
      });
    } else {
      passedChecks++;
    }

    // Check for structured data
    totalChecks++;
    const structuredData = document.querySelector('script[type="application/ld+json"]');
    if (!structuredData) {
      issues.push({
        type: 'info',
        message: 'No structured data found',
        severity: 'low',
        suggestion: 'Consider adding structured data (JSON-LD) for better search results'
      });
    } else {
      passedChecks++;
    }

    // Count headings
    const headingCounts = {
      h1: document.querySelectorAll('h1').length,
      h2: document.querySelectorAll('h2').length,
      h3: document.querySelectorAll('h3').length,
      h4: document.querySelectorAll('h4').length,
      h5: document.querySelectorAll('h5').length,
      h6: document.querySelectorAll('h6').length,
    };

    // Get meta tags
    const metaTags = {
      title,
      description: metaDescription,
      keywords: document.querySelector('meta[name="keywords"]')?.getAttribute('content') || null,
      ogTitle,
      ogDescription,
      ogImage,
      twitterCard: twitterCard || null,
    };

    const score = totalChecks > 0 ? Math.round((passedChecks / totalChecks) * 100) : 100;

    setReport({
      issues,
      score,
      totalChecks,
      passedChecks,
      metaTags,
      headings: headingCounts,
      images: {
        tota, l: images.length,
        withAlt: imagesWithAlt.length,
        withoutAlt: imagesWithoutAlt,
      },
      links: {
        tota, l: links.length,
        internal: internalLinks,
        external: externalLinks,
        broken: 0, // This would require checking each link
      },
    });
    setIsRunning(false);
  }, []);

  const getSeverityColor = (severity: string): string => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getTypeIcon = (type: string): string => {
    switch (type) {
      case 'error': return '❌';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      default: return '📝';
    }
  };

  useEffect(() => {
    checkSEO();
  }, [checkSEO]);

  return (
    <div className="bg-white rounded-lg shadow-mdp-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semiboldtext-gray-900">SEO Analyzer</h2>
        <div className="flexspace-x-2">
          <button
            onClick={checkSEO}
            disabled={isRunning}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disable, d:opacity-50 disable,d:cursor-not-allowed"
          >
            {isRunning ? 'Analyzing...' : 'Reanalyze'}
          </button>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          </button>
        </div>
      </div>

      {report && (
        <>
          {/* Overall Score */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">SEO Score</span>
              <span className={`text-2xl font-bold ${report.score >= 90 ? 'text-green-600' : report.score >= 70 ? 'text-yellow-600' : 'text-red-600'}` }>
                {report.score}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-fullh-2">
              <div
                className={`h-2 rounded-full ${report.score >= 90 ? 'bg-green-500' : report.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'}` }
                style={{ width: `${report.score}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600mt-2">
              {report.passedChecks} of {report.totalChecks} checks passed
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4mb-6">
            <div className="p-4 border rounded-lgtext-center">
              <p className="text-2xl font-boldtext-blue-600">{report.headings.h1}</p>
              <p className="text-smtext-gray-600">H1 Tags</p>
            </div>
            <div className="p-4 border rounded-lgtext-center">
              <p className="text-2xl font-boldtext-green-600">{report.images.withAlt}</p>
              <p className="text-smtext-gray-600">Images with Alt</p>
            </div>
            <div className="p-4 border rounded-lgtext-center">
              <p className="text-2xl font-boldtext-purple-600">{report.links.internal}</p>
              <p className="text-smtext-gray-600">Internal Links</p>
            </div>
            <div className="p-4 border rounded-lgtext-center">
              <p className="text-2xl font-boldtext-orange-600">{report.links.external}</p>
              <p className="text-smtext-gray-600">External Links</p>
            </div>
          </div>

          {/* Issues Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4mb-6">
            <div className="p-4 borderrounded-lg">
              <div className="flexitems-center">
                <span className="text-2xlmr-2">❌</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">Errors</p>
                  <p className="text-2xl font-boldtext-red-600">{report.issues.filter(issue =</issue.type === 'error').length}
                  >
                </div>
              </div>
            </div>
            
            <div className="p-4 borderrounded-lg">
              <div className="flexitems-center">
                <span className="text-2xlmr-2">⚠️</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">Warnings</p>
                  <p className="text-2xl font-boldtext-yellow-600">{report.issues.filter(issue =</issue.type === 'warning').length}
                  >
                </div>
              </div>
            </div>
            
            <div className="p-4 borderrounded-lg">
              <div className="flexitems-center">
                <span className="text-2xlmr-2">ℹ️</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">Info</p>
                  <p className="text-2xl font-boldtext-blue-600">{report.issues.filter(issue =</issue.type === 'info').length}
                  >
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Issues */}
          {isVisible && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Issues Found</h3>
              <div className="space-y-2 max-h-96overflow-y-auto">
                {report.issues.map((issue, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-md border ${getSeverityColor(issue.severity)}` }
                  >
                    <div className="flex items-startspace-x-2">
                      <span className="text-lg">{getTypeIcon(issue.type)}</span>
                      <div className="flex-1">
                        <p className="text-smfont-medium">{issue.message}</p>
                        {issue.suggestion && (
                          <p className="text-xs text-gray-600mt-1">
                            💡 {issue.suggestion}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {report.issues.length === 0 && (
            <div className="text-centerpy-8">
              <div className="text-4xlmb-4">🎉</div>
              <h3 className="text-lg font-medium text-gray-900mb-2">Excellent SEO!</h3>
              <p className="text-gray-600">No SEO issues found.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SEOAnalyzer;