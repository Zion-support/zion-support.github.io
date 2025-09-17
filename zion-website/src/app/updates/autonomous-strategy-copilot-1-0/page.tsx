import React from 'react';

const page: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 lg:px-8">
        <div className="mb-8">
          <div className="text-xs text-blue-300">Launch • 2025-09-15</div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Autonomous Strategy Copilot v1.0
          </h1>
          <p className="mt-4 text-gray-300">
            AI-powered strategic planning and decision support with real-time market analysis.
          </p>
        </div>
        <div className="prose prose-invert prose-headings:text-white prose-a:text-blue-300">
          <h2>Overview</h2>
          <p>
            The Autonomous Strategy Copilot provides intelligent strategic planning capabilities,
            analyzing market trends, competitive landscapes, and internal metrics to support
            data-driven decision making.
          </p>
          <h2>Key capabilities</h2>
          <ul>
            <li>Market trend analysis and forecasting</li>
            <li>Competitive intelligence gathering</li>
            <li>Strategic option evaluation</li>
            <li>Risk assessment and mitigation</li>
          </ul>
          <p>
            Ready to try it in your environment? <a href="/contact">Contact us →</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;