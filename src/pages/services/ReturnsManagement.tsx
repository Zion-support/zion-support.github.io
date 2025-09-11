import React from 'react';
import { SEO } from '../../components/SEO';

const ReturnsManagement: React.FC = () => {
  return (
    <>
      <SEO 
        title="Returns Management System - Zion Tech Group"
        description="Streamline your returns process with our comprehensive returns management solution. Automated processing, tracking, and customer communication for efficient returns handling."
        keywords="returns management, return processing, reverse logistics, customer returns, return tracking, returns automation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Returns Management System
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Streamline your returns process with our comprehensive management solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Automated Processing */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🔄</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Automated Processing</h3>
              <p className="text-gray-300 mb-4">
                Automate return requests, approvals, and processing to reduce manual work and improve efficiency.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Return request automation</li>
                <li>• Approval workflows</li>
                <li>• Processing automation</li>
                <li>• Status updates</li>
              </ul>
            </div>

            {/* Return Tracking */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📦</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Return Tracking</h3>
              <p className="text-gray-300 mb-4">
                Real-time tracking of return shipments and status updates for customers and staff.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Real-time tracking</li>
                <li>• Status notifications</li>
                <li>• Delivery confirmation</li>
                <li>• Exception handling</li>
              </ul>
            </div>

            {/* Customer Portal */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">👤</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Customer Portal</h3>
              <p className="text-gray-300 mb-4">
                Self-service portal for customers to initiate returns, track status, and manage their return history.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Self-service returns</li>
                <li>• Return history</li>
                <li>• Status tracking</li>
                <li>• Communication tools</li>
              </ul>
            </div>

            {/* Inventory Management */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📋</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Inventory Management</h3>
              <p className="text-gray-300 mb-4">
                Seamless integration with inventory systems to handle returned items and restocking.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Return item processing</li>
                <li>• Restocking automation</li>
                <li>• Quality assessment</li>
                <li>• Disposal management</li>
              </ul>
            </div>

            {/* Analytics & Reporting */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Analytics & Reporting</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive analytics and reporting to understand return patterns and optimize processes.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Return analytics</li>
                <li>• Performance metrics</li>
                <li>• Trend analysis</li>
                <li>• Custom reports</li>
              </ul>
            </div>

            {/* Integration & APIs */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🔗</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Integration & APIs</h3>
              <p className="text-gray-300 mb-4">
                Easy integration with existing systems through APIs and pre-built connectors.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• RESTful APIs</li>
                <li>• System integration</li>
                <li>• Data synchronization</li>
                <li>• Third-party connectors</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Optimize Your Returns Process
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Improve customer satisfaction and operational efficiency with our comprehensive returns management solution. Streamline processes, reduce costs, and enhance the customer experience.
            </p>
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Streamline Returns Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReturnsManagement;