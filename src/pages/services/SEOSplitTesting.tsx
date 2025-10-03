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
            <li>GSC and GA4 connectors with weekly lift reports</li>
            <li>Programmatic metadata previews for SERPs</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Benefits</h2>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
            <li>Lift organic CTR by 5–25% on tested cohorts</li>
            <li>Lower the risk of global changes with controlled rollouts</li>
            <li>Evidence-based SEO workflow for content teams</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="rounded-lg border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900">Starter</h3>
          <p className="mt-2 text-gray-600">$199–$499/month</p>
          <p className="mt-2 text-sm text-gray-500">Up to 3 concurrent tests</p>
        </div>
        <div className="rounded-lg border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900">Growth</h3>
          <p className="mt-2 text-gray-600">$499–$1,500/month</p>
          <p className="mt-2 text-sm text-gray-500">Automation and GA4 export</p>
        </div>
        <div className="rounded-lg border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900">Enterprise</h3>
          <p className="mt-2 text-gray-600">$1,500+/month</p>
          <p className="mt-2 text-sm text-gray-500">Custom connectors and SSO</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900">Learn More</h2>
        <ul className="mt-3 space-y-2 text-blue-700">
          <li>
            <a href="https://developers.google.com/search/blog/2016/08/improving-search-with-rankbrain" target="_blank" rel="noreferrer" className="hover:underline">
              Google Search & experimentation (background)
            </a>
          </li>
          <li>
            <a href="https://support.google.com/webmasters/answer/7519425" target="_blank" rel="noreferrer" className="hover:underline">
              Google: Search Console Performance report
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-10">
        <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Start a test</a>
        <p className="mt-4 text-sm text-gray-600">
          Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008, Middletown DE 19709
        </p>
      </div>
    </section>
  );
};

export default SEOSplitTesting;

;