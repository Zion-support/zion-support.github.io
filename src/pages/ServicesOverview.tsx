import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Cpu, 
  Lock, 
  Heart, 
  Globe, 
  ShoppingCart, 
  MessageCircle, 
  Users, 
  BookOpen, 
  DollarSign,
  Rocket,
  Zap,
  Atom,
  Satellite,
  Leaf,
  BarChart3,
  Settings,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  Code,
  Palette,
  Target,
  TrendingUp,
  Lightbulb,
  Star
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function ServicesOverview() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      description: "Cutting-edge artificial intelligence solutions for business transformation",
      services: [
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence", description: "Advanced analytics and insights" },
        { name: "AI Sales Copilot", href: "/services/ai-sales-copilot", description: "Intelligent sales automation" },
        { name: "AI Compliance Assistant", href: "/services/ai-compliance-assistant", description: "Automated compliance management" },
        { name: "AI Auto Email Responder", href: "/services/ai-auto-email-responder", description: "Smart email automation" },
        { name: "LLM Content Studio", href: "/services/llm-content-studio", description: "AI-powered content creation" },
        { name: "AI Cybersecurity Suite", href: "/services/ai-cybersecurity-suite", description: "AI-powered security platform" },
        { name: "Quantum AI Platform", href: "/services/quantum-ai-platform", description: "Next-generation quantum computing" },
        { name: "AI Healthcare Analytics", href: "/services/ai-healthcare-analytics", description: "Healthcare AI solutions" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      description: "Scalable cloud infrastructure and automated development operations",
      services: [
        { name: "Cloud DevOps", href: "/services/cloud-devops", description: "End-to-end cloud solutions" },
        { name: "Cloud FinOps Optimizer", href: "/services/cloud-finops-optimizer", description: "Cost optimization strategies" },
        { name: "FinOps Advisor", href: "/services/finops-advisor", description: "Financial operations consulting" }
      ]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      description: "Advanced security solutions for modern digital threats",
      services: [
        { name: "AI Compliance Copilot", href: "/services/ai-compliance-copilot", description: "AI-powered security compliance" },
        { name: "Zero Trust Architecture", href: "/services/zero-trust", description: "Modern security framework" },
        { name: "Incident Response Platform", href: "/services/incident-response", description: "Rapid threat response" }
      ]
    },
    {
      title: "IT Infrastructure",
      icon: Server,
      description: "Robust IT foundations and enterprise solutions",
      services: [
        { name: "IT Infrastructure", href: "/services/it-infrastructure", description: "Enterprise infrastructure management" },
        { name: "Digital Twin", href: "/services/digital-twin", description: "Virtual infrastructure modeling" },
        { name: "IT Consulting", href: "/services/it-consulting", description: "Strategic IT guidance" },
        { name: "Onsite Support", href: "/services/onsite-support", description: "Local technical assistance" }
      ]
    },
    {
      title: "Data & Analytics",
      icon: BarChart3,
      description: "Business intelligence and data-driven insights",
      services: [
        { name: "Data Analytics", href: "/services/data-analytics", description: "Advanced data processing" },
        { name: "Business Intelligence", href: "/services/business-intelligence", description: "Strategic insights" },
        { name: "Predictive Analytics", href: "/services/predictive-analytics", description: "Future trend forecasting" }
      ]
    },
    {
      title: "IoT & Edge Computing",
      icon: Cpu,
      description: "Connected ecosystems and edge processing solutions",
      services: [
        { name: "IoT Edge Computing", href: "/services/iot-edge", description: "Edge processing platforms" },
        { name: "Mobile Services", href: "/services/mobile-services", description: "Mobile-first solutions" },
        { name: "Customer Feedback Surveys", href: "/services/mobile-feedback-surveys", description: "AI-powered feedback collection" }
      ]
    },
    {
      title: "Blockchain & Web3",
      icon: Lock,
      description: "Decentralized solutions and blockchain technology",
      services: [
        { name: "Blockchain Enterprise Solutions", href: "/services/blockchain-enterprise-solutions", description: "Enterprise blockchain platform" },
        { name: "Smart Contract Development", href: "/services/blockchain-enterprise-solutions", description: "Custom smart contracts" },
        { name: "DeFi Solutions", href: "/services/blockchain-enterprise-solutions", description: "Decentralized finance" }
      ]
    },
    {
      title: "Healthcare Technology",
      icon: Heart,
      description: "AI-powered healthcare solutions and medical technology",
      services: [
        { name: "Healthcare Tech", href: "/services/healthcare-tech", description: "Medical technology solutions" },
        { name: "AI Healthcare Analytics", href: "/services/ai-healthcare-analytics", description: "Healthcare AI platform" },
        { name: "Medical Imaging AI", href: "/services/ai-healthcare-analytics", description: "AI-powered diagnostics" }
      ]
    },
    {
      title: "Sustainability & Green Tech",
      icon: Globe,
      description: "Environmental technology and sustainable solutions",
      services: [
        { name: "Sustainability", href: "/services/sustainability", description: "Green technology solutions" },
        { name: "Green IT", href: "/services/green-it", description: "Sustainable IT practices" },
        { name: "Carbon Footprint Tracking", href: "/services/green-it", description: "Environmental monitoring" }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: Rocket,
      description: "Cutting-edge technology solutions for the future",
      services: [
        { name: "Quantum Computing", href: "/services/quantum-computing", description: "Quantum technology solutions" },
        { name: "Space Technology", href: "/services/space-tech", description: "Space tech platform" },
        { name: "Digital Twin", href: "/services/digital-twin", description: "Virtual modeling solutions" }
      ]
    },
    {
      title: "Micro SaaS Solutions",
      icon: ShoppingCart,
      description: "Productized software solutions for specific business needs",
      services: [
        { name: "Micro SaaS Solutions", href: "/services/micro-saas-solutions", description: "Scalable software products" },
        { name: "AI Sales Automation", href: "/services/ai-sales-copilot", description: "Sales process automation" },
        { name: "Customer Feedback Platform", href: "/services/mobile-feedback-surveys", description: "Feedback collection system" }
      ]
    },
    {
      title: "Financial Technology",
      icon: DollarSign,
      description: "AI-powered financial solutions and optimization",
      services: [
        { name: "FinOps Advisor", href: "/services/finops-advisor", description: "Financial operations optimization" },
        { name: "Cloud Cost Optimization", href: "/services/cloud-finops-optimizer", description: "Cloud spending optimization" },
        { name: "AI Compliance Assistant", href: "/services/ai-compliance-assistant", description: "Regulatory compliance" }
      ]
    }
  ];

  const quickActions = [
    { name: "Request Quote", href: "/request-quote", icon: MessageCircle, description: "Get a custom quote" },
    { name: "Schedule Demo", href: "/contact", icon: Monitor, description: "See solutions in action" },
    { name: "View Pricing", href: "/pricing", icon: DollarSign, description: "Transparent pricing guide" },
    { name: "Contact Sales", href: "/contact", icon: Users, description: "Talk to our experts" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services Overview - Zion Tech Group"
        description="Comprehensive overview of all AI, cloud, cybersecurity, and emerging technology services offered by Zion Tech Group."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6">
              <BarChart3 className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Services Overview
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge technology services designed to transform your business 
              and drive innovation across all industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.href}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 hover:scale-105"
                >
                  <action.icon className="w-5 h-5 mr-2" />
                  {action.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Service Portfolio</h2>
            <p className="text-xl text-slate-300">Explore our comprehensive range of technology solutions</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-slate-400 mt-2">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      to={service.href}
                      className="block p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all duration-200 border border-transparent hover:border-cyan-500/30 group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                            {service.name}
                          </h4>
                          <p className="text-slate-400 text-sm mt-1">{service.description}</p>
                        </div>
                        <div className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let our team of experts help you choose the right services and implement solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);