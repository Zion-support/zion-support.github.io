import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Server, 
  Zap, 
  Globe, 
  Code, 
  Database,
  Lock,
  Cpu,
  Network,
  Smartphone,
  Rocket,
  Atom,
  Users,
  Building
} from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      description: "Cutting-edge artificial intelligence and machine learning solutions",
      services: [
        { name: "AI Autonomous Systems", path: "/services/ai-autonomous-systems", description: "Self-learning AI systems for business automation" },
        { name: "Machine Learning Models", path: "/services/ai-ml", description: "Custom ML models for data analysis and prediction" },
        { name: "AI Business Intelligence", path: "/services/ai-business-intelligence", description: "AI-powered business analytics and insights" },
        { name: "AI Marketing Automation", path: "/services/ai-marketing-automation", description: "Intelligent marketing campaign optimization" }
      ]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      description: "Advanced security solutions to protect your digital assets",
      services: [
        { name: "AI Autonomous Security", path: "/services/ai-autonomous-security", description: "AI-driven threat detection and response" },
        { name: "Cloud Security", path: "/services/cloud-security", description: "Comprehensive cloud infrastructure protection" },
        { name: "Identity & Access Management", path: "/services/identity-security", description: "Secure user authentication and authorization" },
        { name: "Incident Response", path: "/services/incident-response", description: "24/7 security monitoring and rapid response" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      description: "Scalable cloud infrastructure and automated development operations",
      services: [
        { name: "Cloud Migration", path: "/services/cloud-migration", description: "Seamless transition to cloud platforms" },
        { name: "DevOps Automation", path: "/services/devops-automation", description: "Streamlined development and deployment" },
        { name: "Container Security", path: "/services/container-security", description: "Secure containerized application deployment" },
        { name: "API Security", path: "/services/api-security", description: "Protected API development and management" }
      ]
    },
    {
      title: "IT Infrastructure",
      icon: Server,
      description: "Robust and scalable technology infrastructure solutions",
      services: [
        { name: "Network Infrastructure", path: "/services/network-infrastructure", description: "High-performance network design and implementation" },
        { name: "Data Center Solutions", path: "/services/data-center", description: "Modern data center design and management" },
        { name: "Edge Computing", path: "/services/edge-computing", description: "Distributed computing for improved performance" },
        { name: "IoT Security", path: "/services/iot-security", description: "Secure Internet of Things implementation" }
      ]
    },
    {
      title: "Digital Transformation",
      icon: Zap,
      description: "Transform your business with cutting-edge digital solutions",
      services: [
        { name: "Business Process Automation", path: "/services/business-process-automation", description: "Streamline operations with intelligent automation" },
        { name: "Legacy System Modernization", path: "/services/legacy-modernization", description: "Upgrade outdated systems to modern platforms" },
        { name: "Digital Strategy Consulting", path: "/services/digital-strategy", description: "Strategic planning for digital transformation" },
        { name: "Change Management", path: "/services/change-management", description: "Guide your team through digital transformation" }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: Rocket,
      description: "Stay ahead with the latest technological innovations",
      services: [
        { name: "Quantum Technology", path: "/services/quantum-technology", description: "Next-generation quantum computing solutions" },
        { name: "Blockchain & Web3", path: "/services/blockchain", description: "Decentralized technology implementation" },
        { name: "Space Technology", path: "/services/space-technology", description: "Innovative space-based solutions" },
        { name: "Green IT", path: "/services/green-it", description: "Sustainable technology solutions" }
      ]
    }
  ];

  const featuredServices = [
    {
      name: "AI Autonomous Business Platform 2029",
      description: "Next-generation AI platform for autonomous business operations",
      path: "/services/ai-autonomous-business-platform-2029",
      icon: Brain,
      featured: true
    },
    {
      name: "Micro SAAS Solutions",
      description: "Scalable software-as-a-service solutions for growing businesses",
      path: "/services/micro-saas-solutions",
      icon: Code,
      featured: true
    },
    {
      name: "5G Enterprise Solutions",
      description: "High-speed connectivity solutions for enterprise environments",
      path: "/services/5g-enterprise-solutions",
      icon: Network,
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {" "}Services
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to transform your business. 
              From AI and cybersecurity to cloud infrastructure and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Get Started
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-slate-600 text-base font-medium rounded-lg text-slate-300 hover:text-white hover:border-slate-500 transition-all duration-200"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Featured Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <service.icon className="h-12 w-12 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white ml-4">
                  {service.name}
                </h3>
              </div>
              <p className="text-slate-300 mb-6">
                {service.description}
              </p>
              <Link
                to={service.path}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                Learn More
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Service Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Service Categories
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700/30"
            >
              <div className="flex items-center mb-6">
                <category.icon className="h-10 w-10 text-cyan-400" />
                <h3 className="text-2xl font-semibold text-white ml-4">
                  {category.title}
                </h3>
              </div>
              <p className="text-slate-300 mb-6">
                {category.description}
              </p>
              <div className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <Link
                    key={serviceIndex}
                    to={service.path}
                    className="block p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                          {service.name}
                        </h4>
                        <p className="text-slate-400 text-sm">
                          {service.description}
                        </p>
                      </div>
                      <svg className="h-5 w-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let our experts help you implement the right technology solutions 
            to drive growth and innovation in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center px-8 py-3 border border-slate-600 text-base font-medium rounded-lg text-slate-300 hover:text-white hover:border-slate-500 transition-all duration-200"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
