import React from 'react';
import { SEO } from '../../components/SEO';

const HealthcareTech: React.FC = () => {
  return (
    <>
      <SEO 
        title="Healthcare Technology Solutions - Zion Tech Group"
        description="Advanced healthcare technology solutions including telemedicine, electronic health records, AI diagnostics, and patient management systems."
        keywords="healthcare technology, telemedicine, EHR, AI diagnostics, patient management, medical software, healthcare IT"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Healthcare Technology Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform healthcare delivery with cutting-edge technology solutions designed for modern medical practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Electronic Health Records */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📋</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Electronic Health Records</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive EHR systems for efficient patient data management and care coordination.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Patient data management</li>
                <li>• Care coordination</li>
                <li>• Clinical decision support</li>
                <li>• Interoperability standards</li>
              </ul>
            </div>

            {/* Telemedicine Platform */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📹</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Telemedicine Platform</h3>
              <p className="text-gray-300 mb-4">
                Secure video consultation platform for remote patient care and monitoring.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Video consultations</li>
                <li>• Remote monitoring</li>
                <li>• Appointment scheduling</li>
                <li>• HIPAA compliance</li>
              </ul>
            </div>

            {/* AI Diagnostics */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Diagnostics</h3>
              <p className="text-gray-300 mb-4">
                AI-powered diagnostic tools for faster and more accurate medical assessments.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Medical image analysis</li>
                <li>• Symptom assessment</li>
                <li>• Risk prediction</li>
                <li>• Treatment recommendations</li>
              </ul>
            </div>

            {/* Patient Management */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">👥</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Patient Management</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive patient management system for streamlined healthcare operations.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Patient registration</li>
                <li>• Appointment management</li>
                <li>• Billing integration</li>
                <li>• Communication tools</li>
              </ul>
            </div>

            {/* Medical Imaging */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🩻</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Medical Imaging</h3>
              <p className="text-gray-300 mb-4">
                Advanced medical imaging solutions with AI-powered analysis and storage.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• DICOM support</li>
                <li>• Cloud storage</li>
                <li>• AI analysis</li>
                <li>• 3D visualization</li>
              </ul>
            </div>

            {/* Health Analytics */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Health Analytics</h3>
              <p className="text-gray-300 mb-4">
                Data analytics platform for population health management and insights.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Population health insights</li>
                <li>• Predictive analytics</li>
                <li>• Quality metrics</li>
                <li>• Reporting dashboards</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Ready to Modernize Healthcare?
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Improve patient care, streamline operations, and enhance outcomes with our comprehensive healthcare technology solutions.
            </p>
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Transform Your Healthcare Practice
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthcareTech;