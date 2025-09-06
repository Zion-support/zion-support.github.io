import React from "react";

// ServiceCard component
const ServiceCard = ({ 
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
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2 mb-4">
      {bullets.map((bullet, index) => (
        <li key={index} className="flex items-center text-sm text-gray-600">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
          {bullet}
        </li>
      ))}
    </ul>
    <a 
      href={href}
      className="text-blue-600 hover:text-blue-800 font-medium"
    >
      Learn More →
    </a>
  </div>
);

// CTA component
const CTA = () => (
  <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
    <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
    <p className="text-xl mb-6">Let's discuss how our AI-powered solutions can drive your success.</p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="/contact"
        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        Get Started
      </a>
      <a 
        href="/contact"
        className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
      >
        Schedule Consultation
      </a>
    </div>
  </div>
);

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
    )}
    
    <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    
    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
      {title}
    </h3>
    
    <p className="text-gray-300 mb-6 leading-relaxed">
      {description}
    </p>

export default Services;
