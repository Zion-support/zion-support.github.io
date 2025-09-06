import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            href="/services/micro-saas"
            title="Micro SaaS"
            description="End-to-end product development with billing, auth, and analytics"
            bullets={[
              "Foundational architecture",
              "Billing + subscriptions",
              "Growth analytics",
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
            href="/services/automation-tools"
            title="Business Automation"
            description="Intelligent automation tools that streamline operations and boost productivity"
            bullets={["Workflow orchestration", "RPA solutions", "AI-driven process optimization", "Custom automation development"]}
            icon="⚡"
          />
          <ServiceCard
            href="/services/ai-customer-insights"
            title="AI Customer Insights"
            description="Transform customer data into actionable insights with AI-powered analytics"
            bullets={["Predictive analytics", "Sentiment analysis", "Customer journey mapping", "Real-time dashboards"]}
            icon="🧠"
          />
          <ServiceCard
            href="/services/automated-workflow-builder"
            title="Workflow Automation"
            description="Build powerful business automation workflows without coding"
            bullets={["Visual workflow designer", "500+ integrations", "AI optimization", "Real-time monitoring"]}
            icon="⚡"
          />
          <ServiceCard
            href="/services/ai-document-processor"
            title="AI Document Processor"
            description="Intelligent document processing with OCR and data extraction"
            bullets={["Smart OCR engine", "AI data extraction", "Automated workflows", "99% accuracy"]}
            icon="📄"
          />
          <ServiceCard
            href="/services/cybersecurity-suite"
            title="Cybersecurity Suite"
            description="Comprehensive security solutions with threat detection and monitoring"
            bullets={["Threat detection", "Vulnerability assessment", "Compliance management", "24/7 SOC monitoring"]}
            icon="🛡️"
          />
          <ServiceCard
            href="/services/ai-chatbot-platform"
            title="AI Chatbot Platform"
            description="Build intelligent chatbots with natural language processing"
            bullets={["NLP capabilities", "Multi-channel deployment", "Machine learning", "Visual builder"]}
            icon="🤖"
          />
          <ServiceCard
            href="/services/ai-predictive-analytics"
            title="AI Predictive Analytics"
            description="Leverage machine learning for accurate forecasting and strategic decision-making"
            bullets={["Demand forecasting", "Risk modeling", "Resource optimization", "Market trend analysis"]}
            icon="📈"
          />
        </div>

        <CTA />
      </div>
    </div>
  );
}

interface ServiceCardProps {
  href: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
}

function ServiceCard({ href, title, description, bullets, icon }: ServiceCardProps) {
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

function CTA() {
  return (
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
  );
}