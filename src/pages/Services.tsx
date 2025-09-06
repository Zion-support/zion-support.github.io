import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Card from '../components/Card';

const Services: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Comprehensive technology solutions designed to transform your business
            and drive innovation across all sectors.
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            href="/services/micro-saas"
            title="Micro SaaS"
            description="End-to-end product development with billing, auth, and analytics"
            bullets={[
              "Foundational architecture",
              "Billing + subscriptions",
              "Growth analytics"
            ]}
            icon="🚀"
          />
          <ServiceCard
            href="/services/ai-services"
            title="AI Services"
            description="LLM applications, RAG systems, and MLOps pipelines"
            bullets={["RAG and agents", "Evals + guardrails", "MLOps pipelines"]}
            icon="🤖"
          />
          <ServiceCard
            href="/services/it-services"
            title="IT Services"
            description="Cloud migration, DevOps, and security solutions"
            bullets={["Cloud migration", "DevOps + SRE", "Security"]}
            icon="⚙️"
          />
          <ServiceCard
            href="/services/blockchain"
            title="Blockchain"
            description="Smart contracts, DeFi protocols, and Web3 applications"
            bullets={["Smart contracts", "DeFi protocols", "NFT platforms"]}
            icon="⛓️"
          />
          <ServiceCard
            href="/services/data-analytics"
            title="Data Analytics"
            description="Business intelligence, predictive modeling, and real-time analytics"
            bullets={["BI dashboards", "Predictive analytics", "Real-time insights"]}
            icon="📊"
          />
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Talk to our experts about your project. We'll help you choose the right
            service and create a custom solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({
  href,
  title,
  description,
  bullets,
  icon
}: {
  href: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
}) {
  return (
    <Link
      to={href}
      className="group border border-gray-200 rounded-xl p-8 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {bullet}
          </li>
        ))}
      </ul>
    </Link>
  );
}
