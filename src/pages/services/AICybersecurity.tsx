import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  Lock, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Award, 
  Clock, 
  DollarSign,
  Database,
  BarChart3,
  Zap,
  Globe,
  Eye,
  Activity,
  TrendingUp,
  AlertTriangle,
  FileText,
  Network,
  Server,
  Smartphone,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function AICybersecurity() {
  const features = [
    { icon: Brain, title: 'AI Threat Detection', description: 'Advanced machine learning algorithms for real-time threat detection and analysis' },
    { icon: Shield, title: 'Zero Trust Architecture', description: 'Implement comprehensive zero trust security framework across your organization' },
    { icon: Network, title: 'Network Security', description: 'AI-powered network monitoring and intrusion detection systems' },
    { icon: Server, title: 'Endpoint Protection', description: 'Intelligent endpoint security with behavioral analysis and threat prevention' },
    { icon: Database, title: 'Data Protection', description: 'Advanced data encryption and access control with AI monitoring' },
    { icon: AlertTriangle, title: 'Incident Response', description: 'Automated incident response and threat hunting capabilities' }
  ];

  const benefits = [
    { icon: CheckCircle, title: '99.9% Threat Detection', description: 'Advanced AI algorithms detect 99.9% of known and unknown threats' },
    { icon: Clock, title: 'Real-time Response', description: 'Respond to security threats in milliseconds, not minutes' },
    { icon: DollarSign, title: 'Cost Reduction', description: 'Reduce security incident costs by 70-90%' },
    { icon: Users, title: 'Reduced False Positives', description: 'AI reduces false positive alerts by 80-95%' },
    { icon: Shield, title: 'Compliance Ready', description: 'Meet SOC 2, ISO 27001, and other security standards' },
    { icon: Zap, title: 'Scalable Protection', description: 'Security that scales with your business growth' }
  ];

  const securityServices = [
    { title: 'Threat Intelligence', description: 'Real-time threat intelligence and analysis', icon: Eye },
    { title: 'Vulnerability Assessment', description: 'Automated vulnerability scanning and assessment', icon: Search },
    { title: 'Security Monitoring', description: '24/7 security monitoring and alerting', icon: Activity },
    { title: 'Incident Response', description: 'Rapid incident response and recovery', icon: AlertTriangle },
    { title: 'Security Training', description: 'AI-powered security awareness training', icon: Users },
    { title: 'Compliance Management', description: 'Automated compliance monitoring and reporting', icon: FileText }
  ];

  const pricing = [
    {
      plan: 'Essential',
      price: '$1,500',
      period: 'monthly',
      description: 'Perfect for small businesses and startups',
      features: ['Basic threat detection', 'Network monitoring', 'Email security', 'Standard support', 'Monthly reports'],
      cta: 'Get Started',
      popular: false
    },
    {
      plan: 'Professional',
      price: '$3,500',
      period: 'monthly',
      description: 'Ideal for growing businesses and enterprises',
      features: ['Advanced AI threat detection', 'Zero trust architecture', 'Priority support', 'Real-time monitoring', 'Compliance reporting', 'Custom integrations'],
      cta: 'Get Started',
      popular: true
    },
    {
      plan: 'Enterprise',
      price: 'Custom',
      period: 'monthly',
      description: 'For large organizations with complex security needs',
      features: ['Full AI security suite', 'Custom AI models', '24/7 dedicated support', 'White-label options', 'API access', 'Custom development'],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI Cybersecurity
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent mb-6">
              AI Cybersecurity
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Protect your organization with next-generation AI-powered cybersecurity solutions. 
              Detect, prevent, and respond to threats in real-time with machine learning intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Get Your Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-8 py-4 border border-green-400/50 text-green-400 hover:bg-green-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced AI Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI cybersecurity platform combines cutting-edge machine learning with security expertise 
              to deliver comprehensive protection against evolving threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-green-400/30 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 mb-4 inline-block">
                  <feature.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Cybersecurity?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver measurable improvements in security posture, threat detection, and incident response 
              through our proven AI technology and security expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 mb-4 inline-block">
                  <benefit.icon className="w-12 h-12 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI cybersecurity platform provides end-to-end security solutions to protect 
              your organization from all types of threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-green-400/30 transition-all duration-300 text-center"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 mb-4 inline-block">
                  <service.icon className="w-12 h-12 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that best fits your organization's needs and scale as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border p-8 ${
                  plan.popular 
                    ? 'border-green-400/50 ring-2 ring-green-400/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold rounded-full">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-green-400 mb-1">{plan.price}</div>
                  <div className="text-gray-400">{plan.period}</div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.plan === 'Enterprise' ? '/contact' : '/request-quote'}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white transform hover:scale-105 shadow-lg hover:shadow-green-500/25'
                      : 'border border-green-400/50 text-green-400 hover:bg-green-400/10'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-3xl p-12 border border-green-400/20"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI cybersecurity platform can protect your business, 
              reduce security risks, and ensure compliance with industry standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-green-400/50 text-green-400 hover:bg-green-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}