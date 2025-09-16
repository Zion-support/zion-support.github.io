import React from "react";

const EdgeAIandIoT2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Edge AI and IoT 2025
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Intelligent edge computing and Internet of Things solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-teal-800/50 to-cyan-800/50 rounded-xl p-6 backdrop-blur-sm border border-teal-400/20">
            <h3 className="text-2xl font-bold mb-4 text-teal-300">Edge Computing</h3>
            <p className="text-gray-300 mb-4">
              Process data closer to the source for faster insights
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Real-time processing</li>
              <li>• Reduced latency</li>
              <li>• Bandwidth optimization</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-800/50 to-blue-800/50 rounded-xl p-6 backdrop-blur-sm border border-cyan-400/20">
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">IoT Solutions</h3>
            <p className="text-gray-300 mb-4">
              Connect and manage smart devices across your ecosystem
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Device management</li>
              <li>• Data collection</li>
              <li>• Remote monitoring</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-800/50 to-indigo-800/50 rounded-xl p-6 backdrop-blur-sm border border-blue-400/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Smart Analytics</h3>
            <p className="text-gray-300 mb-4">
              AI-powered insights from connected devices
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Predictive maintenance</li>
              <li>• Anomaly detection</li>
              <li>• Performance optimization</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Explore Edge AI
          </button>
        </div>
      </div>
    </div>
  );
};

export default EdgeAIandIoT2025;