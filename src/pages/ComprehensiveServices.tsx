import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Database, 
  Cloud, 
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  Target,
  Globe,
  Rocket,
  Building,
  Star,
  TrendingUp,
  Lock,
  Network,
  Smartphone,
  Server,
  Code
} from 'lucide-react';

export default function ComprehensiveServices() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      services: [
        { name: "AI Autonomous Systems", path: "/services/ai-autonomous-systems", description: "Self-operating AI systems for business automation" },
        { name: "AI Business Intelligence", path: "/ai-business-intelligence", description: "Data-driven insights and analytics" },
        { name: "AI Research Assistant", path: "/ai-autonomous-research-assistant", description: "Automated research and analysis" },
        { name: "AI Marketing Automation", path: "/services/ai-marketing", description: "Intelligent marketing optimization" },
        { name: "AI HR & Recruitment", path: "/services/ai-hr", description: "Smart talent management" },
        { name: "AI Legal Tech", path: "/services/ai-legal", description: "Automated legal processes" }
      ]
    },
    {
      title: "Quantum Technology",
      icon: Zap,
      color: "from-cyan-500 to-blue-600",
      services: [
        { name: "Quantum Neural Networks", path: "/quantum-neural-network-platform", description: "Next-generation quantum computing" },
        { name: "Quantum Computing", path: "/services/quantum-technology", description: "Quantum computing platforms" },
        { name: "Quantum-Safe Security", path: "/services/quantum-security", description: "Future-proof quantum security" }
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      icon: Shield,
      color: "from-red-500 to-orange-600",
      services: [
        { name: "Cybersecurity Services", path: "/services/cybersecurity", description: "Complete security solutions" },
        { name: "SOC2 Compliance Automation", path: "/soc2-compliance-automation", description: "Automated compliance management" },
        { name: "Security Assessment", path: "/services/security-assessment", description: "Security audit and testing" },
        { name: "Threat Detection", path: "/services/threat-detection", description: "Real-time security monitoring" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "from-green-500 to-teal-600",
      services: [
        { name: "Cloud DevOps", path: "/cloud-devops", description: "Cloud development and operations" },
        { name: "IT Infrastructure", path: "/services/it-infrastructure", description: "Complete IT infrastructure solutions" },
        { name: "5G Enterprise Solutions", path: "/5g-enterprise-solutions", description: "High-speed 5G connectivity" },
        { name: "Network Infrastructure", path: "/services/network-infrastructure", description: "Robust network solutions" },
        { name: "Managed IT Services", path: "/services/managed-it-services", description: "24/7 IT support" }
      ]
    },
    {
      title: "Business Operations",
      icon: Building,
      color: "from-yellow-500 to-orange-600",
      services: [
        { name: "Autonomous Business Platform", path: "/autonomous-business-operations-platform", description: "Self-operating business systems" },
        { name: "AI Asset Management", path: "/ai-powered-it-asset-management", description: "Intelligent IT asset management" },
        { name: "Digital Transformation", path: "/digital-transformation", description: "Complete business modernization" },
        { name: "Process Automation", path: "/services/process-automation", description: "Streamlined business processes" }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: Rocket,
      color: "from-indigo-500 to-purple-600",
      services: [
        { name: "Blockchain Solutions", path: "/services/blockchain-solutions", description: "Decentralized applications" },
        { name: "IoT Platforms", path: "/services/iot-platforms", description: "Connected device management" },
        { name: "AR/VR Solutions", path: "/services/ar-vr-solutions", description: "Immersive experiences" },
        { name: "Edge Computing", path: "/services/edge-computing", description: "Distributed computing solutions" }
      ]
    }
  ];

  const industrySolutions = [
    {
      title: "Healthcare",
      icon: "🏥",
      description: "Medical technology and patient care optimization",
      path: "/solutions/healthcare"
    },
    {
      title: "Financial Services",
      icon: "💰",
      description: "Fintech solutions and financial automation",
      path: "/solutions/financial"
    },
    {
      title: "Manufacturing",
      icon: "🏭",
      description: "Smart manufacturing and Industry 4.0",
      path: "/solutions/manufacturing"
    },
    {
      title: "Retail",
      icon: "🛍️",
      description: "Digital retail transformation",
      path: "/solutions/retail"
    },
    {
      title: "Government",
      icon: "🏛️",
      description: "Public sector digitalization",
      path: "/solutions/government"
    },
    {
      title: "Education",
      icon: "🎓",
      description: "Educational technology and learning platforms",
      path: "/solutions/education"
    }
  ];

  const benefits = [
    "Reduce operational costs by 30-50%",
    "Improve efficiency and productivity",
    "Enhance security and compliance",
    "Accelerate digital transformation",
    "Enable data-driven decision making",
    "Scale operations seamlessly"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full">
              <Star className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our complete range of cutting-edge technology services designed to 
            transform your business and drive innovation across all industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive range of technology services
            </p>
          </div>
          
          <div className="space-y-12">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg mr-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      to={service.path}
                      className="block p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all duration-200 border border-gray-600 hover:border-cyan-500"
                    >
                      <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                      <p className="text-gray-300 text-sm">{service.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored technology solutions for your specific industry needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <Link
                key={index}
                to={solution.path}
                className="block bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:bg-gray-800"
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300">{solution.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the benefits of working with Zion Tech Group
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our comprehensive services can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}