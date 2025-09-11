import React from 'react';
import { SEO } from '../../components/SEO';

const AISalesCopilot: React.FC = () => {
  return (
    <>
      <SEO 
        title="AI Sales Copilot - Zion Tech Group"
        description="AI-powered sales assistant that helps your team close more deals. Intelligent lead scoring, automated follow-ups, and personalized customer interactions."
        keywords="AI sales copilot, sales automation, lead scoring, customer engagement, sales AI, intelligent sales assistant"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Sales Copilot
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Boost your sales performance with our intelligent AI-powered sales assistant
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Lead Scoring */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Intelligent Lead Scoring</h3>
              <p className="text-gray-300 mb-4">
                AI-powered lead scoring to identify the most promising prospects and prioritize your efforts.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Behavioral analysis</li>
                <li>• Predictive scoring</li>
                <li>• Lead qualification</li>
                <li>• Conversion probability</li>
              </ul>
            </div>

            {/* Automated Follow-ups */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📧</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Automated Follow-ups</h3>
              <p className="text-gray-300 mb-4">
                Never miss an opportunity with intelligent automated follow-up sequences and reminders.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Smart scheduling</li>
                <li>• Personalized messages</li>
                <li>• Multi-channel outreach</li>
                <li>• Response tracking</li>
              </ul>
            </div>

            {/* Customer Insights */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Customer Insights</h3>
              <p className="text-gray-300 mb-4">
                Deep insights into customer behavior, preferences, and buying patterns.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Behavior analysis</li>
                <li>• Preference tracking</li>
                <li>• Buying patterns</li>
                <li>• Engagement metrics</li>
              </ul>
            </div>

            {/* Sales Coaching */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Sales Coaching</h3>
              <p className="text-gray-300 mb-4">
                AI-powered coaching recommendations to improve sales performance and techniques.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Performance analysis</li>
                <li>• Improvement suggestions</li>
                <li>• Best practices</li>
                <li>• Training recommendations</li>
              </ul>
            </div>

            {/* Conversation Intelligence */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">💬</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Conversation Intelligence</h3>
              <p className="text-gray-300 mb-4">
                Analyze sales conversations to identify successful patterns and improvement opportunities.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Call analysis</li>
                <li>• Sentiment tracking</li>
                <li>• Keyword detection</li>
                <li>• Success patterns</li>
              </ul>
            </div>

            {/* Pipeline Management */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📈</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Pipeline Management</h3>
              <p className="text-gray-300 mb-4">
                Intelligent pipeline management with forecasting and optimization recommendations.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Pipeline forecasting</li>
                <li>• Bottleneck identification</li>
                <li>• Optimization suggestions</li>
                <li>• Revenue predictions</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Transform Your Sales Process
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Increase your sales efficiency and close more deals with our AI-powered sales copilot. Let artificial intelligence work alongside your team to achieve better results.
            </p>
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Start Your AI Sales Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AISalesCopilot;