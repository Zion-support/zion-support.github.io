import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Users, 
  BarChart3, 
  Rocket, 
  Code,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
  Cpu,
  Database,
  Lock,
  Heart
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const microSaasServices = [
  {
    id: 'ai-business-intelligence',
    name: 'AI Business Intelligence',
    description: 'Transform your data into actionable insights with AI-powered analytics and reporting.',
    icon: Brain,
    features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
    price: 'From $299/month',
    href: '/micro-saas/ai-business-intelligence'
  },
  {
    id: 'customer-experience',
    name: 'Customer Experience Platform',
    description: 'Deliver exceptional customer experiences with intelligent automation and personalization.',
    icon: Users,
    features: ['Customer Journey Mapping', 'Personalization Engine', 'Feedback Analytics', 'Automated Support'],
    price: 'From $199/month',
    href: '/micro-saas/customer-experience'
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing Solutions',
    description: 'Leverage quantum computing for complex problem-solving and optimization.',
    icon: Rocket,
    features: ['Quantum Algorithms', 'Optimization Tools', 'Simulation Platform', 'API Integration'],
    price: 'From $599/month',
    href: '/micro-saas/quantum-computing'
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain Intelligence',
    description: 'Optimize your supply chain with AI-driven insights and predictive analytics.',
    icon: BarChart3,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Risk Assessment', 'Performance Analytics'],
    price: 'From $399/month',
    href: '/micro-saas/supply-chain'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity Suite',
    description: 'Protect your business with advanced threat detection and security automation.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance Monitoring'],
    price: 'From $249/month',
    href: '/micro-saas/cybersecurity'
  },
  {
    id: 'iot-edge',
    name: 'IoT Edge Computing',
    description: 'Deploy intelligent IoT solutions with edge computing capabilities.',
    icon: Cpu,
    features: ['Edge Analytics', 'Device Management', 'Real-time Processing', 'Cloud Integration'],
    price: 'From $349/month',
    href: '/micro-saas/iot-edge'
  },
  {
    id: 'content-creation',
    name: 'AI Content Creation',
    description: 'Generate high-quality content with AI-powered writing and design tools.',
    icon: Code,
    features: ['Content Generation', 'Design Automation', 'Brand Consistency', 'Performance Analytics'],
    price: 'From $179/month',
    href: '/micro-saas/content-creation'
  },
  {
    id: 'hr-platform',
    name: 'HR Management Platform',
    description: 'Streamline HR operations with intelligent automation and analytics.',
    icon: Heart,
    features: ['Recruitment Automation', 'Performance Management', 'Employee Analytics', 'Compliance Tools'],
    price: 'From $229/month',
    href: '/micro-saas/hr-platform'
  }
];

const benefits = [
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Get up and running in days, not months with our pre-built solutions.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Growth',
    description: 'Start small and scale as your business grows with flexible pricing.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security and compliance built into every solution.'
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: '24/7 support and maintenance from our expert team worldwide.'
  }
];

export default function MicroSaasIndex() {
  return (
    <>
      <SEO 
        title="Micro SaaS Solutions | Zion Tech Group"
        description="Transform your business with our innovative micro SaaS solutions. AI-powered tools for business intelligence, cybersecurity, IoT, and more."
        canonical="https://ziontechgroup.com/micro-saas"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">SaaS</span> Solutions
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Powerful, focused software solutions that solve specific business problems. 
                Deploy in days, scale as you grow, and transform your operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="btn-neon px-8 py-3 text-lg"
                >
                  Get Started
                </Link>
                  <Link 
                    to="/contact" 
                    className="btn-outline px-8 py-3 text-lg"
                  >
                    Schedule Demo
                  </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Micro SaaS?
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Focused solutions that deliver immediate value without the complexity of enterprise software.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-zion-slate-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SaaS Solutions
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Choose from our portfolio of specialized solutions designed for modern businesses.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-zion-cyan mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-zion-cyan font-semibold">{service.price}</span>
                    <Link
                      to={service.href}
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our micro SaaS solutions to accelerate growth and innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="btn-white px-8 py-3 text-lg font-semibold"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/contact" 
                  className="btn-outline-white px-8 py-3 text-lg font-semibold"
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}