import React from 'react';

const SEOSplitTesting: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">SEO Split Testing Platform</h1>
        <p className="mt-3 text-gray-600">
          Run statistically valid SEO A/B tests on titles, meta descriptions, and on-page modules. Target specific URL cohorts and measure
          CTR, impressions, and conversions using Search Console and analytics integrations.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Features</h2>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
            <li>Cohort selection: blog, product, and docs collections</li>
            <li>Automated test orchestration and rollback</li>
            <li>Bayesian and frequentist significance calculators</li>
            <li>Real-time performance monitoring</li>
            <li>Integration with Google Search Console</li>
            <li>Custom analytics tracking</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">Benefits</h2>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
            <li>Increase organic traffic by up to 40%</li>
            <li>Improve click-through rates</li>
            <li>Data-driven SEO decisions</li>
            <li>Reduced testing time</li>
            <li>Automated reporting</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
        <ul className="space-y-2">
          <li>
            <a href="https://developers.google.com/search/blog/2016/08/improving-search-with-rankbrain" target="_blank" rel="noreferrer" className="hover:underline">
              Google's RankBrain Algorithm - Search Console Blog
            </a>
          </li>
          <li>
            <a href="https://support.google.com/webmasters/answer/7519425" target="_blank" rel="noreferrer" className="hover:underline">
              Google Search Console Help - A/B Testing Guidelines
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-8 text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Start Testing
        </button>
      </div>
    </section>
  );
};

export default SEOSplitTesting;