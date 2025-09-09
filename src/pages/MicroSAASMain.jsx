import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Users, 
  Rocket, 
  Shield, 
  Cpu, 
  FileText, 
  Heart,
  Zap,
  TrendingUp,
  Globe,
  Lock,
  Database,
  Cloud,
  BarChart3,
  MessageCircle,
  Code,
  Target,
  ArrowRight
} from 'lucide-react';

export default function MicroSAASMain() {
  const microSAASProducts = [
    {
      name: 'AI Business Intelligence',
      description: 'Advanced AI-powered business intelligence platform with real-time analytics and predictive insights',
      href: '/micro-saas/ai-business-intelligence',
      icon: Brain,
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'AI-powered recommendations'],
      price: '$299/month',
      category: 'AI & Analytics'
    },
    {
      name: 'Customer Experience Platform',
      description: 'Comprehensive customer experience management with AI-driven personalization',
      href: '/micro-saas/customer-experience',
      icon: Users,
      features: ['Customer journey mapping', 'AI personalization', 'Feedback analytics', 'Omnichannel support'],
      price: '$199/month',
      category: 'Customer Experience'
    },
    {
      name: 'Quantum Computing Solutions',
      description: 'Enterprise quantum computing platform for complex problem solving',
      href: '/micro-saas/quantum-computing',
      icon: Rocket,
      features: ['Quantum algorithms', 'Optimization tools', 'Simulation capabilities', 'API access'],
      price: '$499/month',
      category: 'Quantum Computing'
    },
    {
      name: 'Supply Chain Optimization',
      description: 'AI-powered supply chain management with predictive analytics',
      href: '/micro-saas/supply-chain',
      icon: Globe,
      features: ['Demand forecasting', 'Inventory optimization', 'Route optimization', 'Risk assessment'],
      price: '$399/month',
      category: 'Supply Chain'
    },
    {
      name: 'Cybersecurity Platform',
      description: 'Comprehensive cybersecurity solution with threat detection and response',
      href: '/micro-saas/cybersecurity',
      icon: Shield,
      features: ['Threat detection', 'Incident response', 'Vulnerability assessment', 'Compliance monitoring'],
      price: '$349/month',
      category: 'Cybersecurity'
    },
    {
      name: 'IoT Edge Computing',
      description: 'Edge computing platform for IoT device management and data processing',
      href: '/micro-saas/iot-edge',
      icon: Cpu,
      features: ['Device management', 'Edge analytics', 'Real-time processing', 'Scalable infrastructure'],
      price: '$249/month',
      category: 'IoT & Edge'
    },
    {
      name: 'Content Creation Suite',
      description: 'AI-powered content creation and management platform',
      href: '/micro-saas/content-creation',
      icon: FileText,
      features: ['AI content generation', 'Multi-format support', 'Collaboration tools', 'Performance analytics'],
      price: '$179/month',
      category: 'Content Creation'
    },
    {
      name: 'HR Platform',
      description: 'Modern HR management platform with AI-driven insights',
      href: '/micro-saas/hr-platform',
      icon: Heart,
      features: ['Employee management', 'Performance tracking', 'AI insights', 'Compliance tools'],
      price: '$159/month',
      category: 'HR Management'
    }
  ];

  const benefits = [
    {
      title: 'Scalable Solutions',
      description: 'Start small and scale as your business grows',
      icon: TrendingUp
    },
    {
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI technology',
      icon: Brain
    },
    {
      title: 'Enterprise Ready',
      description: 'Built for enterprise-grade reliability and security',
      icon: Shield
    },
    {
      title: 'Easy Integration',
      description: 'Seamlessly integrate with existing systems',
      icon: Code
    }
  ];

  return (
    <>
      <SEO 
        title="Micro SAAS Solutions - AI, Quantum, IoT & More | Zion Tech Group" 
        description="Discover our comprehensive micro SAAS solutions including AI business intelligence, quantum computing, cybersecurity, IoT edge computing, and more. Enterprise-ready platforms for modern businesses."
        canonical="/micro-saas"
        url="https://ziontechgroup.com/micro-saas"
      />

      <main className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-zion-cyan mb-8">
              Enterprise-grade micro SAAS platforms powered by AI, quantum computing, and cutting-edge technology
            </p>
            <p className="text-lg text-white/80 mb-8">
              Transform your business with our suite of specialized micro SAAS solutions. Each platform is designed to solve specific business challenges while maintaining the flexibility and scalability of modern cloud architecture.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-zion-cyan border border-zion-cyan py-3 px-6 rounded-lg hover:bg-zion-cyan hover:text-zion-slate transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-200">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/70 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Micro SAAS Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASProducts.map((product, index) => (
              <div key={index} className="bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/10 transition-all duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                    <product.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                    <span className="text-zion-cyan text-sm font-medium">{product.category}</span>
                  </div>
                </div>
                
                <p className="text-white/80 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">{product.price}</div>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-white/70 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={product.href}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 border border-zion-cyan/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Our micro SAAS solutions are designed to give you the competitive edge you need in today's digital landscape. Start your transformation journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-200"
              >
                Schedule a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-zion-cyan border border-zion-cyan py-3 px-8 rounded-lg hover:bg-zion-cyan hover:text-zion-slate transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}