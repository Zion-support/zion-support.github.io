import React from 'react';

export default function NewAIUseCases2025(): JSX.Element {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-4">NEW • 2025</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">AI Use Cases 2025</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Practical, high-ROI AI applications across sales, marketing, operations, and support.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="text-4xl mb-4">🧭</div>
          <h3 className="text-xl font-semibold mb-2">AI Sales Copilot</h3>
          <p className="text-gray-600 mb-4">Automate prospecting, personalize outreach, and accelerate pipeline with conversational AI.</p>
          <a href="/pages/InnovativeServicesShowcase2025" className="text-blue-600 hover:text-blue-700 font-semibold">Learn more →</a>
        </div>
        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="text-4xl mb-4">📣</div>
          <h3 className="text-xl font-semibold mb-2">Marketing Content Studio</h3>
          <p className="text-gray-600 mb-4">Generate on-brand copy, images, and video in minutes with guardrails.</p>
          <a href="/pages/AIContentCreation" className="text-blue-600 hover:text-blue-700 font-semibold">See studio →</a>
        </div>
        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="text-4xl mb-4">🛠️</div>
          <h3 className="text-xl font-semibold mb-2">Ops Automation</h3>
          <p className="text-gray-600 mb-4">Self-healing workflows that reduce manual tickets and cycle time.</p>
          <a href="/pages/AIWorkflowAutomation" className="text-blue-600 hover:text-blue-700 font-semibold">Automate ops →</a>
        </div>
        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="text-4xl mb-4">🛡️</div>
          <h3 className="text-xl font-semibold mb-2">Threat Intelligence</h3>
          <p className="text-gray-600 mb-4">Fuse signals with AI to cut false positives and response time.</p>
          <a href="/pages/AICybersecurity" className="text-blue-600 hover:text-blue-700 font-semibold">Strengthen security →</a>
        </div>
        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-semibold mb-2">Forecasting & Planning</h3>
          <p className="text-gray-600 mb-4">Demand forecasting, pricing optimization, and inventory planning.</p>
          <a href="/pages/TechnologyInsights2025" className="text-blue-600 hover:text-blue-700 font-semibold">Explore insights →</a>
        </div>
        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="text-4xl mb-4">💬</div>
          <h3 className="text-xl font-semibold mb-2">Customer Support Copilot</h3>
          <p className="text-gray-600 mb-4">Resolve issues faster with AI that understands context and policies.</p>
          <a href="/pages/ComprehensiveServices2025" className="text-blue-600 hover:text-blue-700 font-semibold">All services →</a>
        </div>
      </div>

      <div className="text-center mt-10">
        <a href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all font-semibold">Talk to an expert</a>
      </div>
    </main>
  );
}

