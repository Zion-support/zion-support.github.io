import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Users, 
  MessageCircle, 
  FileText, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Cpu, 
  Rocket, 
  Heart,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function Sitemap() {
  const mainPages = [
    { name: 'Home', href: '/', icon: Home, description: 'Main landing page' },
    { name: 'About Us', href: '/about', icon: Users, description: 'Company information and team' },
    { name: 'Contact', href: '/contact', icon: MessageCircle, description: 'Get in touch with us' },
    { name: 'Blog', href: '/blog', icon: FileText, description: 'Latest insights and news' },
    { name: 'Careers', href: '/careers', icon: Users, description: 'Job opportunities' },
    { name: 'Partners', href: '/partners', icon: Users, description: 'Partnership opportunities' },
    { name: 'FAQ', href: '/faq', icon: FileText, description: 'Frequently asked questions' },
    { name: 'Privacy Policy', href: '/privacy', icon: Shield, description: 'Privacy and data protection' },
    { name: 'Terms of Service', href: '/terms', icon: FileText, description: 'Terms and conditions' },
    { name: 'Green IT', href: '/green-it', icon: Heart, description: 'Sustainable technology solutions' }
  ];

  const serviceCategories = [
    {
      name: 'AI & Analytics',
      href: '/services/ai-analytics',
      icon: Brain,
      services: [
        { name: 'AI Business Intelligence', href: '/pages/AIBusinessIntelligence' },
        { name: 'AI Content Generation', href: '/pages/AIContentGenerator' },
        { name: 'AI Research Assistant', href: '/pages/AIResearchAssistant' },
        { name: 'AI Autonomous Systems', href: '/pages/AIAutonomousSystemsPlatform' },
        { name: 'Data Analytics', href: '/pages/services/DataAnalytics' },
        { name: 'Predictive Analytics', href: '/pages/AIAutonomousPrediction' },
        { name: 'Customer Analytics', href: '/pages/AIAutonomousCustomerService' }
      ]
    },
    {
      name: 'Cybersecurity',
      href: '/services/cybersecurity',
      icon: Shield,
      services: [
        { name: 'Threat Detection & Response', href: '/pages/services/IncidentResponsePlatform' },
        { name: 'Vulnerability Assessment', href: '/pages/AIAutonomousVulnerabilityAssessment' },
        { name: 'Penetration Testing', href: '/pages/AIAutonomousPenetrationTesting' },
        { name: 'Security Compliance', href: '/pages/soc2-compliance-automation' },
        { name: 'API Security', href: '/pages/AIAutonomousAPISecurity' },
        { name: 'Container Security', href: '/pages/AIAutonomousContainerSecurity' },
        { name: 'Mobile Security', href: '/pages/AIAutonomousMobileSecurity' },
        { name: 'Network Security', href: '/pages/AIAutonomousNetworkSecurity' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      href: '/services/cloud-devops',
      icon: Cloud,
      services: [
        { name: 'Cloud Infrastructure', href: '/pages/services/CloudDevOps' },
        { name: 'DevOps Automation', href: '/pages/services/DevOpsCloud' },
        { name: 'Container Orchestration', href: '/pages/services/CloudDevOps' },
        { name: 'Infrastructure as Code', href: '/pages/services/ITInfrastructure' }
      ]
    },
    {
      name: 'IoT & Edge Computing',
      href: '/services/iot-edge',
      icon: Cpu,
      services: [
        { name: 'IoT Solutions', href: '/pages/services/IoTEdgeComputing' },
        { name: 'Edge Computing Platform', href: '/pages/services/IoTEdgeComputing' },
        { name: 'Device Management', href: '/pages/services/IoTServices' },
        { name: 'Real-time Processing', href: '/pages/services/IoTEdgeComputing' }
      ]
    },
    {
      name: 'Quantum Computing',
      href: '/services/quantum-computing',
      icon: Rocket,
      services: [
        { name: 'Quantum Technology', href: '/pages/services/QuantumTechnology' },
        { name: 'Quantum Neural Networks', href: '/pages/services/QuantumNeuralNetworkPlatform' },
        { name: 'Quantum Financial Trading', href: '/pages/services/QuantumFinancialTrading' },
        { name: 'Quantum Edge Computing', href: '/pages/services/QuantumEdgeComputingPlatform' }
      ]
    },
    {
      name: 'Blockchain & Web3',
      href: '/services/blockchain',
      icon: Shield,
      services: [
        { name: 'Blockchain Services', href: '/pages/services/BlockchainServices' },
        { name: 'Web3 Solutions', href: '/pages/services/BlockchainWeb3' },
        { name: 'Smart Contracts', href: '/pages/services/BlockchainServices' },
        { name: 'DeFi Platforms', href: '/pages/services/BlockchainWeb3' }
      ]
    }
  ];

  const microSAASCategories = [
    {
      name: 'AI Business Intelligence',
      href: '/micro-saas/ai-business-intelligence',
      icon: Brain,
      description: 'AI-powered business intelligence platform'
    },
    {
      name: 'Customer Experience',
      href: '/micro-saas/customer-experience',
      icon: Users,
      description: 'Customer experience management platform'
    },
    {
      name: 'Quantum Computing',
      href: '/micro-saas/quantum-computing',
      icon: Rocket,
      description: 'Enterprise quantum computing solutions'
    },
    {
      name: 'Supply Chain',
      href: '/micro-saas/supply-chain',
      icon: Cloud,
      description: 'AI-powered supply chain optimization'
    },
    {
      name: 'Cybersecurity',
      href: '/micro-saas/cybersecurity',
      icon: Shield,
      description: 'Comprehensive cybersecurity platform'
    },
    {
      name: 'IoT Edge Computing',
      href: '/micro-saas/iot-edge',
      icon: Cpu,
      description: 'IoT and edge computing platform'
    },
    {
      name: 'Content Creation',
      href: '/micro-saas/content-creation',
      icon: FileText,
      description: 'AI-powered content creation suite'
    },
    {
      name: 'HR Platform',
      href: '/micro-saas/hr-platform',
      icon: Users,
      description: 'Modern HR management platform'
    }
  ];

  const itServices = [
    {
      name: 'Infrastructure Services',
      href: '/it-services/infrastructure',
      icon: Cloud,
      description: 'IT infrastructure management and optimization'
    },
    {
      name: 'Digital Transformation',
      href: '/it-services/digital-transformation',
      icon: Zap,
      description: 'End-to-end digital transformation consulting'
    },
    {
      name: 'IT Consulting',
      href: '/it-services/consulting',
      icon: Users,
      description: 'Strategic IT consulting services'
    },
    {
      name: 'Support & Maintenance',
      href: '/it-services/support',
      icon: Shield,
      description: 'Ongoing IT support and maintenance'
    }
  ];

  return (
    <>
      <SEO 
        title="Sitemap - Complete Site Navigation | Zion Tech Group" 
        description="Complete sitemap of Zion Tech Group website. Find all pages, services, and solutions organized by category for easy navigation."
        canonical="/sitemap"
        url="https://ziontechgroup.com/sitemap"
      />

      <main className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Site Map
            </h1>
            <p className="text-xl text-zion-cyan mb-4">
              Complete navigation guide for Zion Tech Group
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Explore our comprehensive range of services, solutions, and resources. This sitemap provides easy access to all pages and helps you find exactly what you're looking for.
            </p>
          </div>

          {/* Main Pages */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Home className="w-8 h-8 text-zion-cyan" />
              Main Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.href}
                  className="group bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/10 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <page.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors duration-200">
                      {page.name}
                    </h3>
                  </div>
                  <p className="text-white/70 text-sm">{page.description}</p>
                  <div className="mt-3 flex items-center text-zion-cyan text-sm font-medium">
                    <span>Visit Page</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Service Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Zap className="w-8 h-8 text-zion-cyan" />
              Service Categories
            </h2>
            <div className="space-y-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                    <Link
                      to={category.href}
                      className="ml-auto text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200 text-sm font-medium"
                    >
                      View All
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {category.services.map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        to={service.href}
                        className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm p-2 rounded hover:bg-zion-cyan/10"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Micro SAAS Solutions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Brain className="w-8 h-8 text-zion-cyan" />
              Micro SAAS Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {microSAASCategories.map((solution, index) => (
                <Link
                  key={index}
                  to={solution.href}
                  className="group bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/10 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    <solution.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white text-center mb-2 group-hover:text-zion-cyan transition-colors duration-200">
                    {solution.name}
                  </h3>
                  <p className="text-white/70 text-sm text-center">{solution.description}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* IT Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Cloud className="w-8 h-8 text-zion-cyan" />
              IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {itServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="group bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/10 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white text-center mb-2 group-hover:text-zion-cyan transition-colors duration-200">
                    {service.name}
                  </h3>
                  <p className="text-white/70 text-sm text-center">{service.description}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Quick Links */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 border border-zion-cyan/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Need Help Finding Something?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our team is here to help you navigate our services and find the perfect solution for your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-200"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-zion-cyan border border-zion-cyan py-3 px-8 rounded-lg hover:bg-zion-cyan hover:text-zion-slate transition-all duration-200"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
