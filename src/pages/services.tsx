import React from 'react';
import { SEO } from '../components/SEO';

const Services: React.FC = () => {
  return (
    <>
      <SEO title="Services - Zion Tech Group" />
      <div className="min-h-screen bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Services</h1>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            End-to-end technology, AI, and micro SaaS solutions to accelerate growth,
            reduce costs, and improve operational efficiency. Explore our core offerings below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Services */}
            <div className="border rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">AI Services</h2>
              <p className="text-gray-600 mb-4">Strategy, implementation, and MLOps for real business impact.</p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
                <li>Custom LLM apps, RAG systems, agents</li>
                <li>Computer vision and NLP pipelines</li>
                <li>MLOps, observability, model governance</li>
              </ul>
              <div className="text-sm text-gray-700 mb-3">Typical projects: $15k - $150k</div>
              <a href="/services/ai-workflow-automation" className="inline-block text-blue-600 hover:text-blue-700">Explore AI services →</a>
            </div>

            {/* Cloud & DevOps */}
            <div className="border rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Cloud & DevOps</h2>
              <p className="text-gray-600 mb-4">Reliable, scalable, cost-optimized infrastructure.</p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
                <li>Cloud migration and modernization</li>
                <li>Kubernetes, IaC, CI/CD, platform engineering</li>
                <li>FinOps and SRE</li>
              </ul>
              <div className="text-sm text-gray-700 mb-3">Monthly retainers: $5k - $25k</div>
              <a href="/services/cloud-devops" className="inline-block text-blue-600 hover:text-blue-700">Explore Cloud & DevOps →</a>
            </div>

            {/* Cybersecurity */}
            <div className="border rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Cybersecurity</h2>
              <p className="text-gray-600 mb-4">Proactive security with continuous monitoring and response.</p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
                <li>Threat modeling, SOC augmentation</li>
                <li>Zero trust, identity, data protection</li>
                <li>Compliance: SOC2, ISO 27001, HIPAA</li>
              </ul>
              <div className="text-sm text-gray-700 mb-3">Assessments: $3k - $20k</div>
              <a href="/services/cybersecurity" className="inline-block text-blue-600 hover:text-blue-700">Explore Cybersecurity →</a>
            </div>

            {/* Micro SaaS */}
            <div className="border rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Micro SaaS</h2>
              <p className="text-gray-600 mb-4">Niche products that solve focused problems quickly.</p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
                <li>AI Interview Scoring & Talent Matching</li>
                <li>Micro CRM and Automated Follow-ups</li>
                <li>Podcast Transcription & Insights</li>
              </ul>
              <div className="text-sm text-gray-700 mb-3">Subscriptions: $49 - $499/mo</div>
              <a href="/services/micro-saas" className="inline-block text-blue-600 hover:text-blue-700">Explore Micro SaaS →</a>
            </div>

            {/* Data & Analytics */}
            <div className="border rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Data & Analytics</h2>
              <p className="text-gray-600 mb-4">Modern data stack, dashboards, forecasting.</p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
                <li>Warehouse/Lakehouse, ELT, dbt</li>
                <li>Self-serve BI and decision support</li>
                <li>Demand forecasting, churn prediction</li>
              </ul>
              <div className="text-sm text-gray-700 mb-3">Engagements: $10k - $120k</div>
              <a href="/services/data-analytics" className="inline-block text-blue-600 hover:text-blue-700">Explore Data & Analytics →</a>
            </div>

            {/* IT Services */}
            <div className="border rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">IT Services</h2>
              <p className="text-gray-600 mb-4">Full-stack engineering, integrations, and support.</p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
                <li>Web/mobile apps, APIs, integrations</li>
                <li>QA automation and performance</li>
                <li>Managed support and training</li>
              </ul>
              <div className="text-sm text-gray-700 mb-3">Hourly: $60 - $180/hr</div>
              <a href="/it-services/it-services" className="inline-block text-blue-600 hover:text-blue-700">Explore IT Services →</a>
            </div>
          </div>

          <div className="mt-12">
            <a href="/contact" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              Get a custom proposal
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
