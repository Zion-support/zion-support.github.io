import React from 'react';
import { SEO } from '../../components/SEO';

const CustomerFeedbackSurveys: React.FC = () => {
  return (
    <>
      <SEO 
        title="Customer Feedback Surveys - Zion Tech Group"
        description="Comprehensive customer feedback survey platform. Create, deploy, and analyze surveys to understand customer satisfaction and improve your business."
        keywords="customer feedback surveys, satisfaction surveys, feedback collection, customer insights, survey platform, customer experience"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Customer Feedback Surveys
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understand your customers better with our comprehensive feedback survey platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Survey Creation */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">✏️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Survey Creation</h3>
              <p className="text-gray-300 mb-4">
                Create professional surveys with our intuitive builder and pre-built templates.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Intuitive survey builder</li>
                <li>• Pre-built templates</li>
                <li>• Custom question types</li>
                <li>• Brand customization</li>
              </ul>
            </div>

            {/* Multi-channel Distribution */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📢</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Multi-channel Distribution</h3>
              <p className="text-gray-300 mb-4">
                Distribute surveys through email, SMS, social media, and web channels.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Email campaigns</li>
                <li>• SMS surveys</li>
                <li>• Social media integration</li>
                <li>• Website embedding</li>
              </ul>
            </div>

            {/* Real-time Analytics */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Real-time Analytics</h3>
              <p className="text-gray-300 mb-4">
                Get instant insights with real-time analytics and interactive dashboards.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Live response tracking</li>
                <li>• Interactive dashboards</li>
                <li>• Data visualization</li>
                <li>• Custom reports</li>
              </ul>
            </div>

            {/* Customer Segmentation */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">👥</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Customer Segmentation</h3>
              <p className="text-gray-300 mb-4">
                Target specific customer segments with personalized surveys and messaging.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Customer segmentation</li>
                <li>• Personalized surveys</li>
                <li>• Targeted messaging</li>
                <li>• Behavioral analysis</li>
              </ul>
            </div>

            {/* Response Management */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">💬</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Response Management</h3>
              <p className="text-gray-300 mb-4">
                Manage and respond to customer feedback with automated workflows and notifications.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Automated workflows</li>
                <li>• Response notifications</li>
                <li>• Follow-up management</li>
                <li>• Escalation rules</li>
              </ul>
            </div>

            {/* Integration & APIs */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🔗</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Integration & APIs</h3>
              <p className="text-gray-300 mb-4">
                Integrate with your existing systems and tools for seamless data flow.
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
              Improve Customer Satisfaction
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Collect valuable customer feedback to understand their needs, improve your products and services, and build stronger customer relationships.
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

export default CustomerFeedbackSurveys;