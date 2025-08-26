import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Zap, 
  Users, 
  Shield, 
  Cloud, 
  Brain, 
  Rocket, 
  Heart,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
  Cpu,
  Database,
  Lock,
  BarChart3,
  Target,
  Lightbulb
} from 'lucide-react';

const microSaasServices = [
  {
    icon: Brain,
    title: 'AI Business Intelligence',
    description: 'Intelligent analytics and reporting platform powered by machine learning.',
    features: ['Predictive analytics', 'Real-time dashboards', 'Custom reporting', 'AI insights'],
    price: 'From $99/month',
    category: 'AI & Analytics'
  },
  {
    icon: Users,
    title: 'Customer Experience Platform',
    description: 'Comprehensive customer engagement and satisfaction management system.',
    features: ['Customer feedback', 'Sentiment analysis', 'Journey mapping', 'Automation'],
    price: 'From $149/month',
    category: 'Customer Experience'
  },
  {
    icon: Rocket,
    title: 'Quantum Computing Solutions',
    description: 'Access to quantum computing power for complex problem solving.',
    features: ['Quantum algorithms', 'Cloud access', 'API integration', 'Expert support'],
    price: 'From $299/month',
    category: 'Quantum Computing'
  },
  {
    icon: Shield,
    title: 'Supply Chain Security',
    description: 'End-to-end supply chain visibility and security management.',
    features: ['Real-time tracking', 'Risk assessment', 'Compliance monitoring', 'Audit trails'],
    price: 'From $199/month',
    category: 'Supply Chain'
  },
  {
    icon: Lock,
    title: 'Cybersecurity Suite',
    description: 'Comprehensive security tools for small to medium businesses.',
    features: ['Threat detection', 'Vulnerability scanning', 'Security monitoring', 'Incident response'],
    price: 'From $179/month',
    category: 'Cybersecurity'
  },
  {
    icon: Cpu,
    title: 'IoT Edge Computing',
    description: 'Edge computing platform for IoT device management and data processing.',
    features: ['Device management', 'Data processing', 'Real-time analytics', 'Scalable infrastructure'],
    price: 'From $129/month',
    category: 'IoT & Edge'
  },
  {
    icon: Code,
    title: 'Content Creation Tools',
    description: 'AI-powered content generation and management platform.',
    features: ['AI writing', 'Content optimization', 'SEO tools', 'Analytics'],
    price: 'From $79/month',
    category: 'Content Creation'
  },
  {
    icon: BarChart3,
    title: 'HR Platform',
    description: 'Human resources management system with AI-powered insights.',
    features: ['Employee management', 'Performance tracking', 'Recruitment tools', 'Analytics'],
    price: 'From $89/month',
    category: 'HR Management'
  }
];

const benefits = [
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Get up and running in minutes, not months. Our micro SAAS solutions are designed for quick implementation.'
  },
  {
    icon: Cloud,
    title: 'Scalable Infrastructure',
    description: 'Start small and grow seamlessly. Our cloud-based solutions scale with your business needs.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security standards with SOC2 compliance and advanced threat protection.'
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Leverage artificial intelligence to gain deeper insights and automate complex processes.'
  }
];

const useCases = [
  {
    industry: 'Startups',
    title: 'Quick Market Entry',
    description: 'Launch your business with proven tools and get to market faster.',
    icon: Rocket,
    benefits: ['Reduced time to market', 'Lower upfront costs', 'Proven solutions', 'Scalable growth']
  },
  {
    industry: 'SMBs',
    title: 'Enterprise-Grade Tools',
    description: 'Access enterprise-level technology without enterprise-level complexity.',
    icon: Building,
    benefits: ['Professional features', 'Easy implementation', 'Cost-effective', 'Expert support']
  },
  {
    industry: 'Enterprises',
    title: 'Innovation Acceleration',
    description: 'Speed up innovation projects with ready-to-use micro SAAS solutions.',
    icon: TrendingUp,
    benefits: ['Faster innovation', 'Reduced risk', 'Flexible deployment', 'Integration ready']
  }
];

export default function MicroSAAS() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">
                Micro SAAS Solutions
              </h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Powerful, focused software solutions that deliver big results without big complexity. 
              Get enterprise-grade technology in bite-sized packages designed for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-futuristic px-8 py-3 text-lg"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="btn-neon px-8 py-3 text-lg"
              >
                View Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Micro SAAS?</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our micro SAAS approach combines the power of enterprise solutions with the simplicity 
              and affordability that growing businesses need.
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
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Micro SAAS Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our range of focused, powerful micro SAAS solutions designed to solve 
              specific business challenges with maximum efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microSaasServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-xs font-medium text-zion-cyan uppercase tracking-wide">
                      {service.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mt-1 mb-3">{service.title}</h3>
                    <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-3 text-zion-slate-light text-sm">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-zion-cyan">{service.price}</div>
                    <button className="btn-neon px-4 py-2 text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Perfect For Every Business</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Whether you're a startup looking to scale quickly or an enterprise seeking innovation, 
              our micro SAAS solutions adapt to your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-zion-slate-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-zion-cyan uppercase tracking-wide">{useCase.industry}</span>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                </div>
                
                <p className="text-zion-slate-light mb-6">{useCase.description}</p>
                
                <div className="space-y-3">
                  {useCase.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center space-x-3 text-zion-slate-light">
                      <Star className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Start with one solution or build a complete ecosystem. Our micro SAAS approach 
              gives you the flexibility to grow at your own pace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-futuristic px-8 py-3 text-lg"
              >
                Start Free Trial
              </a>
              <a
                href="/request-quote"
                className="btn-neon px-8 py-3 text-lg"
              >
                Get Custom Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Missing icon components
const Building = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);