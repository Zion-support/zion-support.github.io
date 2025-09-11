import React from 'react';
import { SEO } from '../../components/SEO';

const ITConsulting: React.FC = () => {
  return (
    <>
      <SEO 
        title="IT Consulting Services - Zion Tech Group"
        description="Expert IT consulting services to help your business leverage technology for growth. Strategic planning, technology assessment, and digital transformation consulting."
        keywords="IT consulting, technology consulting, digital transformation, IT strategy, technology assessment, business technology consulting"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              IT Consulting Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert technology consulting to help your business leverage IT for growth and efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Strategic Planning */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📋</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Strategic Planning</h3>
              <p className="text-gray-300 mb-4">
                Develop comprehensive IT strategies aligned with your business goals and objectives.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Technology roadmaps</li>
                <li>• Digital transformation planning</li>
                <li>• IT governance frameworks</li>
                <li>• Risk assessment</li>
              </ul>
            </div>

            {/* Technology Assessment */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🔍</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Technology Assessment</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive evaluation of your current technology infrastructure and capabilities.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Infrastructure audit</li>
                <li>• Security assessment</li>
                <li>• Performance analysis</li>
                <li>• Gap identification</li>
              </ul>
            </div>

            {/* Digital Transformation */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-300 mb-4">
                Guide your organization through digital transformation initiatives and modernization.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Process digitization</li>
                <li>• Legacy modernization</li>
                <li>• Cloud migration</li>
                <li>• Change management</li>
              </ul>
            </div>

            {/* Cloud Strategy */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">☁️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Strategy</h3>
              <p className="text-gray-300 mb-4">
                Develop and implement cloud strategies to optimize costs and improve scalability.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Cloud architecture design</li>
                <li>• Migration planning</li>
                <li>• Cost optimization</li>
                <li>• Security implementation</li>
              </ul>
            </div>

            {/* Cybersecurity Consulting */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🔒</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity Consulting</h3>
              <p className="text-gray-300 mb-4">
                Strengthen your security posture with expert cybersecurity consulting and implementation.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Security assessments</li>
                <li>• Policy development</li>
                <li>• Incident response planning</li>
                <li>• Compliance guidance</li>
              </ul>
            </div>

            {/* Project Management */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Project Management</h3>
              <p className="text-gray-300 mb-4">
                Expert project management for IT initiatives to ensure successful delivery.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Project planning</li>
                <li>• Resource allocation</li>
                <li>• Risk management</li>
                <li>• Quality assurance</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Transform Your Business with Technology
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Leverage our expertise to make informed technology decisions, optimize your IT infrastructure, and drive business growth through strategic technology implementation.
            </p>
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Get Expert Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITConsulting;