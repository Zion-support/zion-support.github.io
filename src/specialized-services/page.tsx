import React from 'react';
import { ArrowLeft, Brain, Cpu, Lock, Globe, BarChart, Settings, Building, BarChart3, Briefcase, Calculator, CheckCircle, TrendingUp, Atom, Zap, Shield, MessageSquare, Eye, CreditCard, Smartphone, Mail, Calendar, Phone, Mail as MailIcon, MapPin as Location } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const SpecializedServicesPage: React.FC = () => {
  const specializedServices = [
    {
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum algorithms and quantum security implementations',
      icon: Atom,
      price: 'Custom Pricing',
      features: ['Quantum Algorithm Development', 'Quantum Security', 'Optimization Problems', 'Research & Development', 'Quantum Machine Learning', 'Cryptography'],
      color: 'text-yellow-400',
      benefits: ['Exponential speedup', 'Unbreakable security', 'Future-proof technology', 'Competitive advantage'],
      category: 'Quantum'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing and self-optimizing systems for enterprise operations',
      icon: Cpu,
      price: 'Custom Pricing',
      features: ['Self-Healing Systems', 'Predictive Maintenance', 'Resource Optimization', 'Performance Monitoring', 'Adaptive Learning', 'Intelligent Automation'],
      color: 'text-green-400',
      benefits: ['Zero-downtime operations', 'Predictive maintenance', 'Cost optimization', 'Scalable intelligence'],
      category: 'Autonomous'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions, smart contracts, and Web3 applications',
      icon: Lock,
      price: '$2,999/month',
      features: ['Smart Contract Development', 'DApp Creation', 'Token Economics', 'DeFi Solutions', 'NFT Platforms', 'DAO Implementation'],
      color: 'text-purple-400',
      benefits: ['Decentralized security', 'Transparent operations', 'Tokenization', 'Community governance'],
      category: 'Blockchain'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Connected devices and edge computing solutions',
      icon: Globe,
      price: '$1,999/month',
      features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Security Implementation', 'Data Collection', 'Remote Monitoring'],
      color: 'text-cyan-400',
      benefits: ['Real-time insights', 'Reduced latency', 'Cost efficiency', 'Scalable connectivity'],
      category: 'IoT'
    },
    {
      title: 'Business Intelligence',
      description: 'Data-driven insights and predictive analytics for decision-making',
      icon: BarChart,
      price: '$2,299/month',
      features: ['Data Warehousing', 'ETL Processes', 'Advanced Analytics', 'Executive Dashboards', 'Predictive Modeling', 'Real-time Reporting'],
      color: 'text-blue-400',
      benefits: ['Data-driven decisions', 'Predictive insights', 'Real-time analytics', 'Competitive intelligence'],
      category: 'Analytics'
    },
    {
      title: 'Robotics Solutions',
      description: 'Intelligent robotic solutions for manufacturing and service industries',
      icon: Settings,
      price: 'Custom Pricing',
      features: ['Robotic Process Automation', 'Computer Vision Integration', 'Human-Robot Collaboration', 'Maintenance Systems', 'Quality Control', 'Assembly Automation'],
      color: 'text-orange-400',
      benefits: ['Increased productivity', 'Consistent quality', '24/7 operation', 'Cost reduction'],
      category: 'Robotics'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive enterprise-grade solutions for large organizations',
      icon: Building,
      price: 'Custom Pricing',
      features: ['Enterprise Architecture', 'Legacy Modernization', 'Digital Transformation', 'Change Management', 'Training & Support', 'ROI Optimization'],
      color: 'text-indigo-400',
      benefits: ['Scalable solutions', 'Future-proof architecture', 'Digital transformation', 'Competitive advantage'],
      category: 'Enterprise'
    },
    {
      title: 'Analytics Tools',
      description: 'Advanced analytics and business intelligence tools for data-driven decisions',
      icon: BarChart3,
      price: '$1,800/month',
      features: ['Advanced Analytics', 'Predictive Modeling', 'Data Visualization', 'Real-time Dashboards', 'Custom Reports', 'API Integration'],
      color: 'text-emerald-400',
      benefits: ['Better insights', 'Faster decisions', 'Data-driven culture', 'Competitive intelligence'],
      category: 'Analytics'
    },
    {
      title: 'Business Apps',
      description: 'Custom business applications tailored to specific industry needs',
      icon: Briefcase,
      price: '$2,500/month',
      features: ['Custom Development', 'Industry Solutions', 'Integration APIs', 'Mobile Apps', 'Web Applications', 'Maintenance & Support'],
      color: 'text-violet-400',
      benefits: ['Tailored solutions', 'Industry expertise', 'Seamless integration', 'Ongoing support'],
      category: 'Applications'
    },
    {
      title: 'Expense Tracker Pro',
      description: 'AI-powered expense management and financial tracking for businesses',
      icon: Calculator,
      price: '$299/month',
      features: ['Expense Tracking', 'Receipt OCR', 'Budget Management', 'Approval Workflows', 'Reporting & Analytics', 'Integration APIs'],
      color: 'text-rose-400',
      benefits: ['Automated tracking', 'Cost control', 'Compliance', 'Financial insights'],
      category: 'Finance'
    },
    {
      title: 'Task Manager Pro',
      description: 'Advanced project and task management with AI-powered optimization',
      icon: CheckCircle,
      price: '$199/month',
      features: ['Task Management', 'Project Planning', 'Team Collaboration', 'Time Tracking', 'Resource Allocation', 'Progress Analytics'],
      color: 'text-lime-400',
      benefits: ['Better organization', 'Team efficiency', 'Project success', 'Resource optimization'],
      category: 'Productivity'
    },
    {
      title: 'Smart Analytics',
      description: 'Intelligent analytics platform with AI-powered insights and recommendations',
      icon: TrendingUp,
      price: '$1,600/month',
      features: ['AI Insights', 'Predictive Analytics', 'Anomaly Detection', 'Custom Dashboards', 'Real-time Alerts', 'Data Integration'],
      color: 'text-amber-400',
      benefits: ['Intelligent insights', 'Proactive alerts', 'Better decisions', 'Competitive advantage'],
      category: 'Analytics'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Specialized Solutions - Zion Tech Group"
        description="Cutting-edge specialized solutions including quantum computing, autonomous systems, blockchain, IoT, and enterprise-grade applications."
        keywords={['specialized solutions', 'quantum computing', 'autonomous systems', 'blockchain', 'IoT', 'enterprise solutions', 'business intelligence']}
        canonicalUrl="https://ziontechgroup.com/specialized-services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <a href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </a>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              Specialized Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Cutting-edge technologies for next-generation business solutions. 
              From quantum computing to autonomous systems, we deliver the future today.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {specializedServices.map((service, index) => (
              <div key={index} className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                  <a 
                    href="/contact" 
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="text-center bg-slate-800/50 rounded-2xl p-8 border border-cyan-400/20">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our specialized solutions are designed to give you a competitive edge. 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Contact Us Today
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SpecializedServicesPage;