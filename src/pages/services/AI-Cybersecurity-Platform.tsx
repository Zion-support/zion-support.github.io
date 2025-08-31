import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Shield, 
  Brain, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Zap, 
  Users, 
  BarChart3,
  ArrowRight,
  Globe,
  Server,
  Network,
  Database,
  Cloud,
  Smartphone,
  Laptop,
  ShieldCheck,
  Activity,
  TrendingUp,
  Target,
  Clock,
  DollarSign
} from 'lucide-react';

export default function AICybersecurityPlatform() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms that identify and respond to threats in real-time with 99.9% accuracy.'
    },
    {
      icon: Eye,
      title: 'Behavioral Analytics',
      description: 'Continuous monitoring of user and system behavior to detect anomalies and potential security breaches.'
    },
    {
      icon: Shield,
      title: 'Zero-Trust Architecture',
      description: 'Implement comprehensive zero-trust security model with continuous verification and least-privilege access.'
    },
    {
      icon: Zap,
      title: 'Automated Response',
      description: 'Instant automated threat response and containment to minimize damage and recovery time.'
    }
  ];

  const capabilities = [
    {
      category: 'Threat Intelligence',
      items: [
        'Real-time threat feeds integration',
        'AI-powered threat correlation',
        'Predictive threat modeling',
        'Global threat landscape analysis'
      ]
    },
    {
      category: 'Endpoint Protection',
      items: [
        'Advanced malware detection',
        'Behavioral analysis',
        'Ransomware protection',
        'Device control and monitoring'
      ]
    },
    {
      category: 'Network Security',
      items: [
        'Intrusion detection and prevention',
        'Traffic analysis and filtering',
        'VPN and secure connectivity',
        'Network segmentation'
      ]
    },
    {
      category: 'Cloud Security',
      items: [
        'Multi-cloud security management',
        'Cloud access security broker',
        'Container security',
        'API security monitoring'
      ]
    }
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Enhanced Security Posture',
      description: 'Reduce security incidents by 95% with proactive threat detection and prevention.'
    },
    {
      icon: Clock,
      title: '24/7 Protection',
      description: 'Continuous monitoring and automated response ensure your systems are always protected.'
    },
    {
      icon: TrendingUp,
      title: 'Reduced Response Time',
      description: 'Cut incident response time from hours to minutes with AI-powered automation.'
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'Lower security operational costs while improving protection through intelligent automation.'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic AI threat detection',
        'Endpoint protection (up to 100 devices)',
        '24/7 monitoring',
        'Basic reporting',
        'Email support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$5,000',
      period: '/month',
      description: 'Ideal for growing organizations',
      features: [
        'Advanced AI threat detection',
        'Endpoint protection (up to 500 devices)',
        'Network security monitoring',
        'Advanced analytics and reporting',
        'Priority support',
        'Custom integrations'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$12,000',
      period: '/month',
      description: 'For large enterprises',
      features: [
        'Full AI cybersecurity suite',
        'Unlimited device protection',
        'Multi-cloud security',
        'Custom AI model training',
        'Dedicated security team',
        'Compliance reporting',
        '24/7 phone support'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Cybersecurity Platform - Zion Tech Group"
        description="Advanced AI-powered cybersecurity platform with real-time threat detection, behavioral analytics, and automated response. Protect your business with cutting-edge security technology."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-red-400 via-orange-500 to-red-600 bg-clip-text text-transparent">Cybersecurity</span> Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Protect your business with next-generation AI-powered cybersecurity that detects, 
              analyzes, and responds to threats in real-time with unmatched accuracy and speed.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#demo"
                className="bg-transparent border-2 border-red-500 text-red-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                Request Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Advanced AI Security Features</h2>
            <p className="text-xl text-gray-300">Cutting-edge technology that keeps your business safe</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/30 hover:border-red-500/50 transition-all duration-300 text-center"
              >
                <feature.icon className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Security Capabilities</h2>
            <p className="text-xl text-gray-300">End-to-end protection across all your digital assets</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/30"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{capability.category}</h3>
                <ul className="space-y-3">
                  {capability.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Cybersecurity?</h2>
            <p className="text-xl text-gray-300">Proven results and measurable business impact</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/30 hover:border-red-500/50 transition-all duration-300 text-center"
              >
                <benefit.icon className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
            <p className="text-xl text-gray-300">Flexible plans designed to fit your security needs</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-red-500/50 bg-gradient-to-br from-red-500/10 to-orange-500/10' 
                    : 'border-slate-600/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={plan.cta === 'Contact Sales' ? '/contact' : '/contact'}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                      : 'bg-transparent border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait for a security breach. Implement AI-powered cybersecurity today 
              and protect your business with the most advanced security technology available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-red-500 text-red-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}