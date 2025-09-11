import React from 'react';
import { SEO } from '../../components/SEO';

const MobileFeedbackSurveys: React.FC = () => {
  return (
    <>
      <SEO 
        title="Mobile Feedback Surveys - Zion Tech Group"
        description="Create and deploy mobile-optimized feedback surveys to gather customer insights. Real-time analytics, customizable surveys, and actionable insights for better decision making."
        keywords="mobile feedback surveys, customer feedback, survey platform, mobile surveys, feedback collection, customer insights"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Mobile Feedback Surveys
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Collect valuable customer feedback with our mobile-optimized survey platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Survey Builder */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📝</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Survey Builder</h3>
              <p className="text-gray-300 mb-4">
                Easy-to-use drag-and-drop survey builder with mobile-optimized templates and question types.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Drag-and-drop interface</li>
                <li>• Mobile-optimized templates</li>
                <li>• Multiple question types</li>
                <li>• Custom branding</li>
              </ul>
            </div>

            {/* Real-time Analytics */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Real-time Analytics</h3>
              <p className="text-gray-300 mb-4">
                Live analytics and insights as responses come in, with interactive dashboards and reports.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Live response tracking</li>
                <li>• Interactive dashboards</li>
                <li>• Data visualization</li>
                <li>• Export capabilities</li>
              </ul>
            </div>

            {/* Mobile Optimization */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Mobile Optimization</h3>
              <p className="text-gray-300 mb-4">
                Surveys designed specifically for mobile devices with responsive design and touch-friendly interfaces.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Responsive design</li>
                <li>• Touch-friendly interface</li>
                <li>• Offline capability</li>
                <li>• Fast loading</li>
              </ul>
            </div>

            {/* Multi-channel Distribution */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📢</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Multi-channel Distribution</h3>
              <p className="text-gray-300 mb-4">
                Distribute surveys through multiple channels including SMS, email, social media, and web.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• SMS surveys</li>
                <li>• Email campaigns</li>
                <li>• Social media integration</li>
                <li>• QR code generation</li>
              </ul>
            </div>

            {/* Advanced Targeting */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Targeting</h3>
              <p className="text-gray-300 mb-4">
                Target specific customer segments with personalized surveys and conditional logic.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Customer segmentation</li>
                <li>• Conditional logic</li>
                <li>• Personalized questions</li>
                <li>• Behavioral targeting</li>
              </ul>
            </div>

            {/* Integration & APIs */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🔗</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Integration & APIs</h3>
              <p className="text-gray-300 mb-4">
                Seamless integration with CRM systems, marketing platforms, and other business tools.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• CRM integration</li>
                <li>• Marketing automation</li>
                <li>• API access</li>
                <li>• Webhook support</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Gather Actionable Insights
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Understand your customers better with our mobile-optimized feedback survey platform. Collect insights, make data-driven decisions, and improve customer satisfaction.
            </p>
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Start Collecting Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFeedbackSurveys;