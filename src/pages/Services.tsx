<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Product engineering and AI-first consulting to deliver measurable
            outcomes for your business.
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
=======
import { CheckCircle, Brain, Shield, Cloud, Code, Database, Smartphone, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Brain className="h-12 w-12 text-blue-600" />,
      title: "AI & Machine Learning",
      description: "Transform your business with cutting-edge AI solutions including natural language processing, computer vision, and predictive analytics.",
      features: ["Custom AI Models", "Data Analytics", "Process Automation", "Intelligent Chatbots"]
    },
    {
      icon: <Shield className="h-12 w-12 text-green-600" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security solutions including threat detection, vulnerability assessments, and compliance management.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"]
    },
    {
      icon: <Cloud className="h-12 w-12 text-purple-600" />,
      title: "Cloud Infrastructure",
      description: "Scale your operations with robust cloud solutions including migration, optimization, and multi-cloud management.",
      features: ["Cloud Migration", "Infrastructure as Code", "Cost Optimization", "Disaster Recovery"]
    },
    {
      icon: <Code className="h-12 w-12 text-orange-600" />,
      title: "Software Development",
      description: "Build modern, scalable applications using the latest technologies and best practices for web, mobile, and desktop platforms.",
      features: ["Web Applications", "Mobile Apps", "API Development", "Legacy Modernization"]
    },
    {
      icon: <Database className="h-12 w-12 text-red-600" />,
      title: "Data Solutions",
      description: "Unlock the power of your data with comprehensive data engineering, analytics, and business intelligence solutions.",
      features: ["Data Warehousing", "ETL Pipelines", "Business Intelligence", "Real-time Analytics"]
    },
    {
      icon: <Globe className="h-12 w-12 text-indigo-600" />,
      title: "Digital Transformation",
      description: "Modernize your business processes and technology stack to stay competitive in the digital age.",
      features: ["Process Automation", "Workflow Optimization", "Technology Consulting", "Change Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="flex items-center mb-6">
                {service.icon}
                <h3 className="text-2xl font-bold text-gray-900 ml-4">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your business goals.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-2xl">
            Get Started Today
          </button>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      </div>
    </div>
  );
<<<<<<< HEAD
};
<<<<<<< HEAD

function ServiceCard({
  href,
  title,
  description,
  bullets,
  icon,
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
      <div className="mt-4 text-sm text-gray-500">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}

=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default Services;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
