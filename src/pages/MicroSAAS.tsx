import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Cpu, 
  Rocket, 
  Lock, 
  Globe, 
  Heart,
  Zap,
  Code,
  Users,
  BarChart3,
  MessageCircle,
  FileText,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';

const microSaasServices = [
  {
    id: 'ai-business-intelligence',
    name: 'AI Business Intelligence',
    description: 'Transform your business data into actionable insights with AI-powered analytics and reporting.',
    icon: Brain,
    features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
    pricing: 'Starting at $299/month',
    href: '/micro-saas/ai-business-intelligence'
  },
  {
    id: 'customer-experience',
    name: 'Customer Experience',
    description: 'Enhance customer satisfaction with intelligent automation and personalized interactions.',
    icon: Users,
    features: ['Chatbot Integration', 'Customer Journey Mapping', 'Feedback Analytics', 'Personalization Engine'],
    pricing: 'Starting at $199/month',
    href: '/micro-saas/customer-experience'
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    description: 'Leverage quantum algorithms for complex problem-solving and optimization.',
    icon: Rocket,
    features: ['Quantum Algorithms', 'Optimization Tools', 'Simulation Platform', 'API Access'],
    pricing: 'Starting at $499/month',
    href: '/micro-saas/quantum-computing'
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain',
    description: 'Optimize your supply chain with AI-driven forecasting and inventory management.',
    icon: Globe,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Assessment'],
    pricing: 'Starting at $249/month',
    href: '/micro-saas/supply-chain'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Protect your digital assets with advanced threat detection and security automation.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance Monitoring'],
    pricing: 'Starting at $399/month',
    href: '/micro-saas/cybersecurity'
  },
  {
    id: 'iot-edge',
    name: 'IoT Edge Computing',
    description: 'Process data at the edge for real-time insights and reduced latency.',
    icon: Cpu,
    features: ['Edge Analytics', 'Device Management', 'Real-time Processing', 'Cloud Integration'],
    pricing: 'Starting at $179/month',
    href: '/micro-saas/iot-edge'
  },
  {
    id: 'content-creation',
    name: 'Content Creation',
    description: 'Generate high-quality content with AI-powered writing and design tools.',
    icon: FileText,
    features: ['AI Writing Assistant', 'Content Templates', 'SEO Optimization', 'Multi-format Export'],
    pricing: 'Starting at $99/month',
    href: '/micro-saas/content-creation'
  },
  {
    id: 'hr-platform',
    name: 'HR Platform',
    description: 'Streamline HR processes with intelligent automation and analytics.',
    icon: Users,
    features: ['Recruitment AI', 'Performance Analytics', 'Employee Engagement', 'Compliance Tracking'],
    pricing: 'Starting at $149/month',
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
    icon: Target,
    title: 'Scalable Solutions',
    description: 'Grow with confidence knowing our platforms scale with your business needs.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with SOC 2 compliance and regular security audits.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance services.'
  }
];

export default function MicroSAAS() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your business with our cutting-edge Micro SAAS platforms. 
              Built for innovation, designed for growth, powered by AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="btn-neon px-8 py-4 text-lg"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Micro SAAS Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose from our comprehensive suite of specialized SAAS solutions designed to address 
              specific business challenges and drive innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-zion-cyan font-semibold">{service.pricing}</span>
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                
                <Link
                  to={service.href}
                  className="inline-flex items-center space-x-2 text-zion-cyan hover:text-white transition-colors duration-300 group-hover:translate-x-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Micro SAAS?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business practices to deliver 
              solutions that drive real results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our Micro SAAS solutions 
              to drive growth and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="btn-neon px-8 py-4 text-lg"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}