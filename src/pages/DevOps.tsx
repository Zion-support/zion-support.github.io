import React from 'react';
import { Shield, Cloud, Settings, Brain, Heart, Building2 } from 'lucide-react';

const DevOps: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
            DevOps & SRE Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-slide-up">
            Accelerate your development lifecycle with our comprehensive DevOps solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Settings className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">CI/CD Pipeline</h3>
            <p className="text-gray-300">
              Automated build, test, and deployment pipelines for faster, more reliable releases.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Cloud className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Infrastructure as Code</h3>
            <p className="text-gray-300">
              Manage and provision infrastructure through code for consistency and scalability.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Shield className="w-12 h-12 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Security Integration</h3>
            <p className="text-gray-300">
              Built-in security practices throughout your development and deployment process.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Brain className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Monitoring & Observability</h3>
            <p className="text-gray-300">
              Comprehensive monitoring, logging, and alerting for optimal system performance.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Heart className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Site Reliability Engineering</h3>
            <p className="text-gray-300">
              Proactive approach to system reliability and performance optimization.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Building2 className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Cloud Migration</h3>
            <p className="text-gray-300">
              Seamless migration to cloud platforms with minimal downtime and maximum efficiency.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your DevOps?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Let our experts help you build a robust, scalable, and efficient development pipeline.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default DevOps;