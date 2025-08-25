import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Shield, 
  Cloud, 
  Network, 
  Database, 
  Users, 
  Target,
  Zap,
  Globe,
  Lock,
  BarChart3,
  Rocket,
  Code,
  Eye,
  Heart,
  Building,
  DollarSign,
  ShoppingCart,
  Factory
} from 'lucide-react';

const InnovativeServicesOverview = () => {
  const serviceCategories = [
    {
      title: "AI & Autonomous Systems",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      description: "Cutting-edge artificial intelligence solutions that operate autonomously",
      services: [
        { name: "AI Autonomous Systems", path: "/services/ai-autonomous-systems", description: "Self-operating AI systems for business automation" },
        { name: "AI Workflow Automation", path: "/services/ai-workflow-automation", description: "Intelligent process automation and optimization" },
        { name: "AI Customer Intelligence", path: "/services/ai-customer-intelligence", description: "Customer behavior analysis and insights" },
        { name: "AI Predictive Analytics", path: "/services/ai-predictive-analytics", description: "Future-focused business analytics" },
        { name: "AI Research Assistant", path: "/ai-autonomous-research-assistant", description: "AI-powered research automation" },
        { name: "AI Business Intelligence", path: "/services/ai-business-intelligence", description: "Advanced analytics and business insights" }
      ]
    },
    {
      title: "Quantum Technology",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      description: "Next-generation quantum computing and quantum-secure solutions",
      services: [
        { name: "Quantum Neural Networks", path: "/quantum-neural-network-platform", description: "Quantum-powered neural network platform" },
        { name: "Quantum Technology", path: "/services/quantum-technology", description: "Quantum computing solutions and platforms" },
        { name: "Quantum-Secure Cloud", path: "/services/quantum-secure-cloud", description: "Future-proof cloud security infrastructure" }
      ]
    },
    {
      title: "Business Operations",
      icon: Building,
      color: "from-green-500 to-emerald-500",
      description: "Streamlined business process automation and management",
      services: [
        { name: "Autonomous Business Platform", path: "/autonomous-business-operations-platform", description: "Self-operating business systems" },
        { name: "AI Asset Management", path: "/ai-powered-it-asset-management", description: "Intelligent IT asset management" },
        { name: "Business Intelligence", path: "/services/ai-business-intelligence", description: "Advanced business analytics" }
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      description: "Comprehensive security and regulatory compliance solutions",
      services: [
        { name: "Cybersecurity Services", path: "/services/cybersecurity", description: "Complete security solutions" },
        { name: "SOC2 Compliance Automation", path: "/soc2-compliance-automation", description: "Automated compliance management" },
        { name: "Security Assessment", path: "/services/security-assessment", description: "Security audit and testing" },
        { name: "Compliance & Audit", path: "/services/compliance-audit", description: "Regulatory compliance support" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "from-blue-500 to-indigo-500",
      description: "Scalable cloud solutions and infrastructure management",
      services: [
        { name: "Cloud DevOps", path: "/cloud-devops", description: "Cloud development and operations" },
        { name: "IT Infrastructure", path: "/services/it-infrastructure", description: "Complete IT infrastructure solutions" },
        { name: "5G Enterprise Solutions", path: "/5g-enterprise-solutions", description: "High-speed 5G connectivity" },
        { name: "Cloud Migration", path: "/services/cloud-migration", description: "Seamless cloud transition" },
        { name: "Network Infrastructure", path: "/services/network-infrastructure", description: "Robust network solutions" }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: Rocket,
      color: "from-purple-500 to-violet-500",
      description: "Cutting-edge solutions for tomorrow's challenges",
      services: [
        { name: "Blockchain Solutions", path: "/services/blockchain-solutions", description: "Decentralized applications and DeFi" },
        { name: "IoT Platforms", path: "/services/iot-platforms", description: "Connected device management" },
        { name: "AR/VR Solutions", path: "/services/ar-vr-solutions", description: "Immersive experiences and training" },
        { name: "Digital Twins", path: "/services/digital-twins", description: "Virtual replicas for simulation" }
      ]
    },
    {
      title: "Industry Solutions",
      icon: Target,
      color: "from-orange-500 to-yellow-500",
      description: "Tailored solutions for specific industries",
      services: [
        { name: "Healthcare Technology", path: "/solutions/healthcare", description: "Medical innovation and patient care" },
        { name: "Financial Services", path: "/services/financial-services", description: "Fintech and banking solutions" },
        { name: "Manufacturing Intelligence", path: "/services/manufacturing-intelligence", description: "Smart manufacturing and Industry 4.0" },
        { name: "Retail Technology", path: "/services/retail-technology", description: "Digital retail transformation" },
        { name: "Government Solutions", path: "/services/government-solutions", description: "Public sector digital services" }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      icon: Code,
      color: "from-indigo-500 to-purple-500",
      description: "Custom software solutions for growing businesses",
      services: [
        { name: "Micro SAAS Solutions", path: "/services/micro-saas-solutions", description: "Custom software development" },
        { name: "AI Workflow Automation", path: "/services/ai-workflow-automation", description: "Process automation for SMBs" },
        { name: "Cloud Migration", path: "/cloud-devops", description: "Affordable cloud solutions" },
        { name: "IT Support", path: "/services/it-support", description: "Managed IT services" }
      ]
    }
  ];

  const featuredServices = [
    {
      name: "AI Autonomous Systems",
      path: "/services/ai-autonomous-systems",
      description: "Self-operating AI systems that revolutionize business operations",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Quantum Neural Networks",
      path: "/quantum-neural-network-platform",
      description: "Quantum-powered neural networks for breakthrough AI capabilities",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "5G Enterprise Solutions",
      path: "/5g-enterprise-solutions",
      description: "Ultra-fast connectivity and IoT support for modern enterprises",
      icon: Network,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "SOC2 Compliance Automation",
      path: "/soc2-compliance-automation",
      description: "Automated compliance management for enterprise security",
      icon: Shield,
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Innovative Services Overview - Zion Tech Group"
        description="Comprehensive overview of our cutting-edge AI, quantum technology, cybersecurity, and digital transformation services. Transform your business with innovative solutions."
        keywords="AI services, quantum technology, cybersecurity, cloud solutions, digital transformation, enterprise technology, innovative services"
        type="website"
        url="https://ziontechgroup.com/services/innovative-overview"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Innovative Services Overview
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our comprehensive portfolio of cutting-edge technology services. 
                From AI and quantum computing to cybersecurity and digital transformation, 
                we provide the solutions your business needs to thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  to="/demo"
                  className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and impactful solutions that are transforming 
                businesses across industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={index}
                    to={service.path}
                    className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {service.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 bg-gray-800/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of services organized by category. 
                Find the perfect solution for your business needs.
              </p>
            </div>

            <div className="space-y-8">
              {serviceCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-6`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                        <p className="text-gray-300">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.services.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          to={service.path}
                          className="group p-4 bg-gray-700/30 rounded-lg border border-gray-600 hover:border-purple-500 transition-all duration-300 hover:bg-gray-700/50"
                        >
                          <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                            {service.name}
                          </h4>
                          <p className="text-gray-300 text-sm">
                            {service.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver 
                solutions that drive real business value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
                <p className="text-gray-300">
                  We stay ahead of technology trends to provide cutting-edge solutions 
                  that give your business a competitive advantage.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
                <p className="text-gray-300">
                  Our team of experienced professionals brings deep expertise in AI, 
                  quantum computing, cybersecurity, and digital transformation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Results Driven</h3>
                <p className="text-gray-300">
                  We focus on delivering measurable business outcomes and ROI, 
                  ensuring your investment translates to real value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-800/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative services can help you achieve your 
              business goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
              </Link>
              <Link
                to="/demo"
                className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InnovativeServicesOverview;