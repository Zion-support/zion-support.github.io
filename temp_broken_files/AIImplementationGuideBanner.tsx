import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AIImplementationGuideBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">📚 NEW GUIDE</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Complete AI Implementation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Guide 2025
            </span>
          </h2>
          
          {/* Subheading */}
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            Your step-by-step roadmap from AI assessment to full implementation. 
            Based on real-world success stories and proven methodologies.
          </p>
        </div>

        {/* Implementation Phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Phase 1 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold text-lg">1</span>
            </div>
            <h3 className="text-lg font-bold mb-3">Assessment & Planning</h3>
            <p className="text-sm opacity-80 mb-4">Evaluate current stateset objectivesand create strategic roadmap</p>
            <div className="text-xs opacity-60">Weeks 1-4</div>
          </div>

          {/* Phase 2 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold text-lg">2</span>
            </div>
            <h3 className="text-lg font-bold mb-3">Foundation Building</h3>
            <p className="text-sm opacity-80 mb-4">Setup infrastructuredevelop teamand establish data pipelines</p>
            <div className="text-xs opacity-60">Weeks 5-12</div>
          </div>

          {/* Phase 3 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold text-lg">3</span>
            </div>
            <h3 className="text-lg font-bold mb-3">Pilot Implementation</h3>
            <p className="text-sm opacity-80 mb-4">Build MVP solutionstest with real datand validate results</p>
            <div className="text-xs opacity-60">Weeks 13-20</div>
          </div>

          {/* Phase 4 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold text-lg">4</span>
            </div>
            <h3 className="text-lg font-bold mb-3">Scaling & Optimization</h3>
            <p className="text-sm opacity-80 mb-4">Deploy enterprise-wideoptimize performanceand drive innovation</p>
            <div className="text-xs opacity-60">Weeks 21-36</div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Strategic Planning</h3>
            <p className="text-sm opacity-80">
              Comprehensive assessment and roadmap creation tailored to your business needs and objectives.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Rapid Implementation</h3>
            <p className="text-sm opacity-80">
              Proven methodologies and best practices to accelerate your AI transformation journey.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Measurable Results</h3>
            <p className="text-sm opacity-80">
              Clear KPIs and success metrics to track progress and demonstrate ROI throughout the process.
            </p>
          </div>
        </div>

        {/* 'What', 's Included */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">'What', 's Included in the Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-4">📋 Assessment Tools</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>AI Readiness Assessment Framework</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Technology Stack Evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Data Quality Assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Skills Gap Analysis</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">🛠️ Implementation Resources</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Project Planning Templates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>ROI Calculation Models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Change Management Strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Best Practice Checklists</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a
              href="/blog/ai-transformation-2025-roadmap"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Download Complete Guide
            </a>
            <a
              href="/tools/ai-readiness-assessment"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Start Assessment Now
            </a>
          </div>
          
          {/* Additional Resources */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-80">
            <a href="/webinar" className="hover:opacity-100 transition-opacity">
              📺 Watch Implementation Webinar
            </a>
            <a href="/consultation" className="hover:opacity-100 transition-opacity">
              💬 Schedule Free Consultation
            </a>
            <a href="/case-studies" className="hover:opacity-100 transition-opacity">
              📊 View Success Stories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIImplementationGuideBanner;