import React from 'react';
import { SEO } from '../../components/SEO';

const AffiliateTracking: React.FC = () => {
  return (
    <>
      <SEO 
        title="Affiliate Tracking System - Zion Tech Group"
        description="Comprehensive affiliate tracking and management solution. Track conversions, manage commissions, and optimize your affiliate marketing program with advanced analytics."
        keywords="affiliate tracking, affiliate management, conversion tracking, commission management, affiliate marketing, performance tracking"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Affiliate Tracking System
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Maximize your affiliate marketing ROI with our comprehensive tracking and management solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Conversion Tracking */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📈</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Conversion Tracking</h3>
              <p className="text-gray-300 mb-4">
                Accurate tracking of affiliate conversions across multiple channels and touchpoints.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Multi-channel tracking</li>
                <li>• Attribution modeling</li>
                <li>• Conversion optimization</li>
                <li>• Real-time reporting</li>
              </ul>
            </div>

            {/* Commission Management */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Commission Management</h3>
              <p className="text-gray-300 mb-4">
                Automated commission calculation, payment processing, and affiliate payouts.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Automated calculations</li>
                <li>• Payment processing</li>
                <li>• Tax management</li>
                <li>• Payout scheduling</li>
              </ul>
            </div>

            {/* Affiliate Dashboard */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Affiliate Dashboard</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive dashboard for affiliates to track performance, earnings, and manage their account.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Performance metrics</li>
                <li>• Earnings tracking</li>
                <li>• Link management</li>
                <li>• Marketing materials</li>
              </ul>
            </div>

            {/* Fraud Detection */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Fraud Detection</h3>
              <p className="text-gray-300 mb-4">
                Advanced fraud detection and prevention to protect your affiliate program from abuse.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Fraud prevention</li>
                <li>• Suspicious activity detection</li>
                <li>• Risk scoring</li>
                <li>• Automated blocking</li>
              </ul>
            </div>

            {/* Analytics & Reporting */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📋</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Analytics & Reporting</h3>
              <p className="text-gray-300 mb-4">
                Detailed analytics and reporting to optimize your affiliate marketing strategy.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Performance analytics</li>
                <li>• ROI analysis</li>
                <li>• Custom reports</li>
                <li>• Data visualization</li>
              </ul>
            </div>

            {/* Integration & APIs */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🔗</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Integration & APIs</h3>
              <p className="text-gray-300 mb-4">
                Seamless integration with existing systems and third-party platforms.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• API integration</li>
                <li>• E-commerce platforms</li>
                <li>• Payment systems</li>
                <li>• Marketing tools</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Scale Your Affiliate Program
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Grow your affiliate marketing program with our comprehensive tracking and management solution. Increase conversions, reduce fraud, and maximize your marketing ROI.
            </p>
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Start Tracking Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AffiliateTracking;