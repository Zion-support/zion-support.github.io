import React from 'react';
import { SEO } from '../../components/SEO';

const AIComplianceCopilot: React.FC = () => {
  return (
    <>
      <SEO 
        title="AI Compliance Copilot - Zion Tech Group"
        description="AI-powered compliance assistant that helps your team stay compliant with regulations. Automated compliance monitoring, risk assessment, and regulatory guidance."
        keywords="AI compliance copilot, compliance assistant, regulatory compliance, compliance monitoring, risk assessment, compliance automation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Compliance Copilot
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay compliant with AI-powered assistance and automated compliance monitoring
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Regulatory Monitoring */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📋</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Regulatory Monitoring</h3>
              <p className="text-gray-300 mb-4">
                Continuous monitoring of regulatory changes and updates across multiple jurisdictions.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Real-time updates</li>
                <li>• Multi-jurisdiction tracking</li>
                <li>• Impact assessment</li>
                <li>• Change notifications</li>
              </ul>
            </div>

            {/* Risk Assessment */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">⚠️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Risk Assessment</h3>
              <p className="text-gray-300 mb-4">
                AI-powered risk assessment to identify potential compliance issues before they become problems.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Risk identification</li>
                <li>• Impact analysis</li>
                <li>• Mitigation strategies</li>
                <li>• Priority scoring</li>
              </ul>
            </div>

            {/* Compliance Automation */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Compliance Automation</h3>
              <p className="text-gray-300 mb-4">
                Automate compliance processes and reduce manual effort with intelligent workflows.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Automated workflows</li>
                <li>• Process optimization</li>
                <li>• Task scheduling</li>
                <li>• Approval routing</li>
              </ul>
            </div>

            {/* Document Management */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📄</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Document Management</h3>
              <p className="text-gray-300 mb-4">
                Intelligent document management for compliance records, policies, and procedures.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Document versioning</li>
                <li>• Automated categorization</li>
                <li>• Search and retrieval</li>
                <li>• Audit trails</li>
              </ul>
            </div>

            {/* Reporting & Analytics */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Reporting & Analytics</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive reporting and analytics to track compliance performance and trends.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Compliance dashboards</li>
                <li>• Trend analysis</li>
                <li>• Performance metrics</li>
                <li>• Custom reports</li>
              </ul>
            </div>

            {/* Training & Education */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Training & Education</h3>
              <p className="text-gray-300 mb-4">
                AI-powered training programs to keep your team updated on compliance requirements.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Personalized training</li>
                <li>• Knowledge assessments</li>
                <li>• Progress tracking</li>
                <li>• Certification management</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Simplify Compliance Management
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Stay compliant with ease using our AI-powered compliance copilot. Reduce manual work, minimize risks, and ensure your organization meets all regulatory requirements.
            </p>
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Start Your Compliance Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIComplianceCopilot;