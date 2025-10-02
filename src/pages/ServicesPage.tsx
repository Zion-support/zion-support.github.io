import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <main className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="text-4xl mb-4">🧠</div>
              <h2 className="text-2xl font-bold mb-4">AI Services</h2>
              <p className="text-gray-600 mb-4">Automation, analytics, chatbots, and computer vision.</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Predictive analytics</li>
                <li>• RAG chatbots</li>
                <li>• Document processing (IDP)</li>
              </ul>
              <Link className="text-blue-600 hover:underline" to="/services/ai-services">Explore AI Services →</Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="text-4xl mb-4">🚀</div>
              <h2 className="text-2xl font-bold mb-4">Micro SaaS</h2>
              <p className="text-gray-600 mb-4">Targeted apps for specific workflows with subscriptions.</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Email deliverability optimizer</li>
                <li>• Sales playbook copilot</li>
                <li>• Edge AI inference</li>
              </ul>
              <Link className="text-blue-600 hover:underline" to="/services/micro-saas">Explore Micro SaaS →</Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="text-4xl mb-4">💻</div>
              <h2 className="text-2xl font-bold mb-4">IT Services</h2>
              <p className="text-gray-600 mb-4">Cloud, DevOps, security, and infrastructure.</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Cloud migration</li>
                <li>• DevOps & SRE</li>
                <li>• Zero trust security</li>
              </ul>
              <Link className="text-blue-600 hover:underline" to="/services/it-services">Explore IT Services →</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;