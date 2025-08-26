import React from 'react';

const AIAutonomousSecurity: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Autonomous Security
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Protect your digital assets with AI-powered autonomous security systems 
            that detect, prevent, and respond to threats in real-time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Threat Detection</h3>
            <p className="text-gray-300">
              Advanced AI algorithms that identify sophisticated cyber threats, 
              malware, and suspicious activities before they can cause damage.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Automated Response</h3>
            <p className="text-gray-300">
              Instant threat neutralization with automated incident response that 
              isolates threats and implements protective measures autonomously.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Behavioral Analysis</h3>
            <p className="text-gray-300">
              Continuous monitoring of user and system behavior to detect anomalies 
              and potential security breaches in real-time.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-slate-600 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Secure Your Systems
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAutonomousSecurity;