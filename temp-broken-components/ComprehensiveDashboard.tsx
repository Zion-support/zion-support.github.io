import React, { useState } from 'react';
// import PerformanceDashboard from './PerformanceDashboard';
// import AccessibilityChecker from './AccessibilityChecker';
// import SEOAnalyzer from './SEOAnalyzer';
import { useWebVitals } from '../hooks/useWebVitals';

const ComprehensiveDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'performance' | 'accessibility' | 'seo'>('performance');
  const { vitals } = useWebVitals();

  const tabs = [
    { id: 'performance', label: 'Performance', icon: '⚡' },
    { id: 'accessibility', label: 'Accessibility', icon: '♿' },
    { id: 'seo', label: 'SEO', icon: '🔍' },
  ] as const;

  const getOverallScore = (): number => {
    // This would be calculated based on all metrics
    // For now, we'll use a simple calculation
    const performanceScore = vitals.LCP && vitals.FID && vitals.CLS ? 
      Math.round((100 - (vitals.LCP / 40) - (vitals.FID / 3) - (vitals.CLS * 100)) / 3) : 85;
    return Math.max(0, Math.min(100, performanceScore));
  };

  const overallScore = getOverallScore();

  return (

    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Website Analytics Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Comprehensive monitoring and analysis of your website&apos;s performance, accessibility, and SEO.
          </p>
        </div>

        {/* Overall Score Card */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-mdp-6">
            <div className="flex items-center justify-between mb-4">
              <h2className="text-xl font-semiboldtext-gray-900">Overall Health Score</h2>
              <div className="flex items-center space-x-2">
                <span className={`text-3xl font-bold ${
                  overallScore >= 90 ? 'text-green-600' : 
                  overallScore >= 70 ? 'text-yellow-600' : 'text-red-600'
                }`}

                  {overallScore}
                </span>
                <span className="text-gray-500">/ 100</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-fullh-3">
              <div
                className={`h-3rounded-full ${
                  overallScore >= 90 ? 'bg-green-500' : 
                  overallScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${overallScore}%` }}</p></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">{overallScore >= 90 ? 'Excellent! Your website is performing very well.' :
               overallScore <= 70 ? 'Good! There are some areas for improvement.' :
               'Needs attention. Consider addressing the issues below.'}</p></div>

        </div>

        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="border-bborder-gray-200">
            <nav className="-mb-px flexspace-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2px-1border-b-2font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500text-blue-600'
                      : 'border-transparent text-gray-500hover:text-gray-700hover:border-gray-300'
                  }`}

                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lgshadow-md">
        {activeTab === 'performance' && <div>Performance Dashboard (temporarily disabled)</div>}
        {activeTab === 'accessibility' && <div>Accessibility Checker (temporarily disabled)</div>}
        {activeTab === 'seo' && <div>SEO Analyzer (temporarily disabled)</div>}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3gap-6">
          <div className="bg-white rounded-lg shadow-mdp-6">
            <div className="flexitems-center">
              <div className="flex-shrink-0">

                <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                  <span className="text-blue-600 text-lg">📊</span>
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
                </div>
              </div>
              <div className="ml-4">
                <h3className="text-lg font-mediumtext-gray-900">Performance Report</h3>
                <p className="text-sm text-gray-600">Generate detailed performance analysis</p>

              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-mdp-6">
            <div className="flexitems-center">
              <div className="flex-shrink-0">

                <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center">
                  <span className="text-green-600 text-lg">♿</span>
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
                </div>
              </div>
              <div className="ml-4">
                <h3className="text-lg font-mediumtext-gray-900">Accessibility Audit</h3>
                <p className="text-sm text-gray-600">Check for accessibility compliance</p>

              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-mdp-6">
            <div className="flexitems-center">
              <div className="flex-shrink-0">

                <div className="w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center">
                  <span className="text-purple-600 text-lg">🔍</span>
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
                </div>
              </div>
              <div className="ml-4">
                <h3className="text-lg font-mediumtext-gray-900">SEO Analysis</h3>
                <p className="text-sm text-gray-600">Optimize for search engines</p>

              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-smtext-gray-500">
          <p>Last updated: {new Date().toLocaleString()}</p>
          <p className="mt-1">
            This dashboard provides real-time analysis of your website&apos;s health metrics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveDashboard;