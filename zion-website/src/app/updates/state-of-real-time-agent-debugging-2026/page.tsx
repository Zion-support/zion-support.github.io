import React from 'react';

const page: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 lg:px-8">
        <div className="mb-8">
          <div className="text-xs text-blue-300">Research • 2025-09-15</div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            State of Real-Time Agent Debugging (2026)
          </h1>
          <p className="mt-4 text-gray-300">
            Comprehensive analysis of debugging tools and techniques for autonomous agents in production.
          </p>
        </div>
        <div className="prose prose-invert prose-headings:text-white prose-a:text-blue-300">
          <h2>Overview</h2>
          <p>
            This research report examines the current state of debugging tools and techniques
            for autonomous agents operating in production environments.
          </p>
          <h2>Key findings</h2>
          <ul>
            <li>Real-time trace visualization is critical for agent debugging</li>
            <li>Policy violation detection needs improvement</li>
            <li>Cost attribution and performance monitoring gaps exist</li>
            <li>Integration with existing observability tools is essential</li>
          </ul>
          <p>
            <a href="/contact">Contact us for the full report →</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;