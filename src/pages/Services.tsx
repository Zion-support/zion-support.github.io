import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: "Micro SaaS Development",
      description: "End-to-end product development with billing, auth, and analytics",
      features: ["Foundational architecture", "Billing + subscriptions", "Growth analytics", "Multi-tenant systems", "API development"],
      icon: "🚀",
      color: "from-blue-500 to-purple-600",
      href: "/services/micro-saas",
      price: "Starting at $5,000/month"
    },
    {
      title: "AI Services",
      description: "LLM applications, RAG systems, and MLOps pipelines",
      features: ["RAG and agents", "Evals + guardrails", "MLOps pipelines", "Computer vision", "NLP solutions"],
      icon: "🤖",
      color: "from-green-500 to-blue-600",
      href: "/services/ai-services",
      price: "Starting at $3,500/month"
    },
    {
      title: "IT Services",
      description: "Cloud migration, DevOps, and security solutions",
      features: ["Cloud migration", "DevOps + SRE", "Security", "Infrastructure as Code", "Monitoring & Alerting"],
      icon: "⚙️",
      color: "from-purple-500 to-pink-600",
      href: "/services/it-services",
      price: "Starting at $2,500/month"
    },
    {
      title: "Blockchain",
      description: "Smart contracts, DeFi protocols, and Web3 applications",
      features: ["Smart contracts", "DeFi protocols", "NFT platforms", "Tokenization", "Web3 integration"],
      icon: "⛓️",
      color: "from-orange-500 to-red-600",
      href: "/services/blockchain",
      price: "Starting at $4,000/month"
    },
    {
      title: "Data Analytics",
      description: "Business intelligence, predictive modeling, and real-time analytics",
      features: ["BI dashboards", "Predictive analytics", "Real-time insights", "Data warehousing", "Machine learning"],
      icon: "📊",
      color: "from-indigo-500 to-purple-600",
      href: "/services/data-analytics",
      price: "Starting at $2,000/month"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      features: ["Security audits", "Penetration testing", "Compliance management", "Threat monitoring", "Incident response"],
      icon: "🔒",
      color: "from-red-500 to-orange-600",
      href: "/services/cybersecurity",
      price: "Starting at $3,000/month"
    },
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with zero downtime",
      features: ["AWS/GCP/Azure migration", "Data migration", "Application modernization", "Cost optimization", "Performance tuning"],
      icon: "☁️",
      color: "from-cyan-500 to-blue-600",
      href: "/services/cloud-migration",
      price: "Starting at $4,500/month"
    },
    {
      title: "DevOps & SRE",
      description: "Automated deployment, monitoring, and reliability engineering",
      features: ["CI/CD pipelines", "Infrastructure automation", "Monitoring & alerting", "Disaster recovery", "Performance optimization"],
      icon: "🔧",
      color: "from-teal-500 to-green-600",
      href: "/services/devops",
      price: "Starting at $3,500/month"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      features: ["iOS & Android apps", "React Native", "Flutter", "App store optimization", "Push notifications"],
      icon: "📱",
      color: "from-pink-500 to-purple-600",
      href: "/services/mobile-development",
      price: "Starting at $3,000/month"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
          </p>
        </div>
        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="AI & Machine Learning"
            description="Transform your business with cutting-edge AI solutions including machine learning, natural language processing, and computer vision."
            icon="🤖"
          />
          <ServiceCard
            title="Cybersecurity"
            description="Protect your digital assets with advanced security solutions, threat detection, and compliance management."
            icon="🔒"
          />
          <ServiceCard
            title="Cloud Infrastructure"
            description="Scale your operations with robust cloud solutions, migration services, and infrastructure optimization."
            icon="☁️"
          />
          <ServiceCard
            title="Digital Transformation"
            description="Modernize your business processes with comprehensive digital transformation strategies and implementation."
            icon="🚀"
          />
          <ServiceCard
            title="Data Analytics"
            description="Unlock insights from your data with advanced analytics, business intelligence, and reporting solutions."
            icon="📊"
          />
          <ServiceCard
            title="IoT Solutions"
            description="Connect and manage your devices with Internet of Things solutions for smart operations and monitoring."
            icon="🌐"
          />
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="Consulting Services"
              description="Strategic technology consulting to help you make informed decisions about your digital future."
            />
            <Card
              title="Implementation"
              description="End-to-end implementation of technology solutions tailored to your specific business needs."
            />
            <Card
              title="Support & Maintenance"
              description="Ongoing support and maintenance to ensure your systems run smoothly and efficiently."
            />
            <Card
              title="Training & Education"
              description="Comprehensive training programs to help your team master new technologies and processes."
            />
            <Card
              title="Custom Development"
              description="Bespoke software development solutions designed specifically for your unique requirements."
            />
            <Card
              title="Integration Services"
              description="Seamless integration of new technologies with your existing systems and workflows."
            />
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">Industry Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">We analyze your business needs and challenges to understand your goals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">We develop a comprehensive strategy tailored to your specific requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">Our expert team builds and implements your solution with precision.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">We provide ongoing support and optimization to ensure your success.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold">Government</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;