import React from "react";

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">AI Services</h3>
            <p className="text-gray-600">
              Cutting-edge AI solutions for your business.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">IT Services</h3>
            <p className="text-gray-600">
              Comprehensive IT solutions and support.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Cloud Solutions</h3>
            <p className="text-gray-600">
              Scalable cloud infrastructure and services.
            </p>
          </div>
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
            href="/services/ai-powered-crm"
            title="AI-Powered CRM"
            description="Revolutionary CRM with AI automation, predictive analytics, and 300% sales boost"
            bullets={["Intelligent lead scoring", "Smart sales automation", "Advanced analytics", "AI customer service"]}
            icon="🎯"
          />
          <ServiceCard
            href="/services/ai-content-optimizer"
            title="AI Content Optimizer"
            description="AI-powered content creation and optimization that increases engagement by 400%"
            bullets={["AI content generation", "SEO optimization", "Performance analytics", "Multi-language support"]}
            icon="✍️"
          />
          <ServiceCard
            href="/services/ai-finance-analyzer"
            title="AI Finance Analyzer"
            description="Advanced financial analysis with real-time insights and automated investment recommendations"
            bullets={["Market analysis", "Portfolio optimization", "Financial planning", "Risk assessment"]}
            icon="💰"
          />
          <ServiceCard
            href="/services/ai-healthcare-assistant"
            title="AI Healthcare Assistant"
            description="Revolutionary healthcare AI for diagnosis support, patient monitoring, and treatment optimization"
            bullets={["Diagnosis support", "Patient monitoring", "Clinical decisions", "Healthcare analytics"]}
            icon="🏥"
          />
          <ServiceCard
            href="/services/cybersecurity-suite"
            title="Cybersecurity Suite"
            description="Comprehensive security solutions with threat detection, monitoring, and 24/7 protection"
            bullets={["Threat detection", "Vulnerability management", "Network security", "SOC services"]}
            icon="🔒"
          />
          <ServiceCard
            href="/services/cloud-optimization"
            title="Cloud Optimization"
            description="AI-powered cloud optimization that reduces costs by 40% and improves performance by 60%"
            bullets={["Cost optimization", "Performance tuning", "Security hardening", "Migration services"]}
            icon="☁️"
          />
        </div>
        <CTA />
      </div>
    </div>
  );
};

export default Services;
