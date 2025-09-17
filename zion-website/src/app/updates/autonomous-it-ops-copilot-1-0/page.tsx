import React from 'react';

export default function AutonomousItOpsCopilotPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-4xl px-6 pt-24">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">
            Autonomous IT Ops Copilot v1.0
          </h1>
          
          <div className="text-lg text-gray-300 mb-8">
            AI-powered IT operations automation with intelligent incident response and proactive monitoring.
          </div>

          <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              The Autonomous IT Ops Copilot v1.0 revolutionizes IT operations with AI-driven automation, 
              intelligent incident response, and proactive monitoring capabilities. This comprehensive 
              solution reduces manual overhead while improving system reliability and performance.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Intelligent incident detection and classification</li>
              <li>• Automated root cause analysis and remediation</li>
              <li>• Proactive monitoring and alerting</li>
              <li>• Self-healing infrastructure capabilities</li>
              <li>• Integration with existing IT tools and workflows</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-white mb-4">Implementation</h2>
            <p className="text-gray-300 leading-relaxed">
              Deploy the Autonomous IT Ops Copilot in your environment with our step-by-step implementation guide. 
              Includes configuration templates, integration examples, and best practices for production deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}