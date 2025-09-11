import React from 'react';
import { SEO } from '../../components/SEO';

const IoTEdge: React.FC = () => {
  return (
    <>
      <SEO 
        title="IoT Edge Computing - Zion Tech Group"
        description="Advanced IoT edge computing solutions for real-time data processing and intelligent device management."
        keywords="IoT edge computing, edge AI, real-time processing, smart devices, industrial IoT"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              IoT Edge Computing Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bring computing power closer to your data sources with our advanced IoT edge computing solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Edge AI Processing */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">AI</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Edge AI Processing</h3>
              <p className="text-gray-300 mb-4">
                Deploy AI models directly on edge devices for real-time decision making and reduced latency.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Real-time inference</li>
                <li>• Model optimization</li>
                <li>• Edge training capabilities</li>
                <li>• Autonomous decision making</li>
              </ul>
            </div>

            {/* Data Processing */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Real-time Data Processing</h3>
              <p className="text-gray-300 mb-4">
                Process and analyze data at the edge before sending to the cloud for maximum efficiency.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Stream processing</li>
                <li>• Data filtering</li>
                <li>• Local analytics</li>
                <li>• Bandwidth optimization</li>
              </ul>
            </div>

            {/* Device Management */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🔧</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Device Management</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive management of edge devices with remote monitoring and updates.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Remote device control</li>
                <li>• Firmware updates</li>
                <li>• Health monitoring</li>
                <li>• Configuration management</li>
              </ul>
            </div>

            {/* Security */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🔒</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Edge Security</h3>
              <p className="text-gray-300 mb-4">
                Secure your edge infrastructure with advanced security measures and threat detection.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• End-to-end encryption</li>
                <li>• Threat detection</li>
                <li>• Access control</li>
                <li>• Secure communication</li>
              </ul>
            </div>

            {/* Connectivity */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📡</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Edge Connectivity</h3>
              <p className="text-gray-300 mb-4">
                Reliable connectivity solutions for edge devices with multiple communication protocols.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• 5G/LTE connectivity</li>
                <li>• LoRaWAN support</li>
                <li>• WiFi mesh networks</li>
                <li>• Satellite communication</li>
              </ul>
            </div>

            {/* Analytics */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">📈</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Edge Analytics</h3>
              <p className="text-gray-300 mb-4">
                Advanced analytics capabilities at the edge for immediate insights and actions.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Predictive maintenance</li>
                <li>• Anomaly detection</li>
                <li>• Performance optimization</li>
                <li>• Custom dashboards</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Ready to Deploy Edge Computing?
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Transform your IoT infrastructure with our cutting-edge edge computing solutions. Reduce latency, improve performance, and enable real-time decision making.
            </p>
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Start Your Edge Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IoTEdge;