import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Shield, 
  Eye, 
  AlertTriangle, 
  Zap, 
  Lock, 
  Activity, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Target,
  BarChart3,
  Globe,
  Server,
  Network,
  Smartphone,
  Cloud,
  Database,
  Cpu,
  Brain,
  Users
} from 'lucide-react';

export default function AICybersecurityThreatDetection() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms detect and analyze threats in real-time with 99.9% accuracy'
    },
    {
      icon: Eye,
      title: '24/7 Network Monitoring',
      description: 'Continuous surveillance of your entire network infrastructure with instant alert systems'
    },
    {
      icon: Shield,
      title: 'Zero-Day Attack Prevention',
      description: 'Predictive AI models identify and block unknown threats before they can cause damage'
    },
    {
      icon: Activity,
      title: 'Behavioral Analysis',
      description: 'AI learns normal user patterns and flags suspicious activities automatically'
    },
    {
      icon: Lock,
      title: 'Automated Response',
      description: 'Instant threat containment and remediation without human intervention'
    },
    {
      icon: Zap,
      title: 'Real-Time Intelligence',;
      description: 'Live threat intelligence feeds and global attack pattern recognition';
    };
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 100 endpoints',
        'Basic AI threat detection',
        '24/7 monitoring',
        'Email alerts',
        'Basic reporting',
        'Phone support',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for growing organizations',
      features: [
        'Up to 500 endpoints',
        'Advanced AI algorithms',
        'Behavioral analysis',
        'Automated response',
        'Custom dashboards',
        'Priority support',
        'Advanced integrations',
        'Compliance reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'For large enterprises',
      features: [
        'Unlimited endpoints',
        'Full AI suite',
        'Custom AI models',
        'Dedicated security team',
        'Advanced compliance',
        'On-premise options',
        'SLA guarantees',
        'Custom integrations'
      ],;
      popular: false;
    };
  ];

  const benefits = [
    {
      icon: Shield,
      title: '99.9% Threat Detection Rate',
      description: 'AI algorithms catch threats that traditional security tools miss'
    },
    {
      icon: Clock,
      title: 'Real-Time Response',
      description: 'Threats are neutralized within seconds, not hours or days'
    },
    {
      icon: Target,
      title: 'Zero False Positives',
      description: 'Advanced AI reduces alert fatigue with intelligent filtering'
    },
    {
      icon: BarChart3,
      title: '60% Cost Reduction',;
      description: 'Automated security reduces manual intervention and operational costs';
    };
  ];

  const threatTypes = [
    {
      title: 'Ransomware Attacks',
      description: 'AI detects encryption patterns and blocks ransomware before it can encrypt files',
      icon: Lock
    },
    {
      title: 'Phishing Attempts',
      description: 'Machine learning identifies suspicious emails and URLs in real-time',
      icon: Eye
    },
    {
      title: 'DDoS Attacks',
      description: 'Predictive AI blocks distributed attacks before they impact services',
      icon: Network
    },
    {
      title: 'Insider Threats',
      description: 'Behavioral analysis detects unusual user activities and data access patterns',;
      icon: Users;
    };
  ];

  const complianceFrameworks = [
    'SOC 2 Type II',
    'ISO 27001',
    'GDPR',
    'HIPAA',;
    'PCI DSS',;
    'NIST Cybersecurity Framework';
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Cybersecurity Threat Detection - Zion Tech Group"
        description="Advanced AI-powered cybersecurity platform with 99.9% threat detection rate. Real-time monitoring, automated response, and zero-day attack prevention. Start from $499/month."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            animate = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Cybersecurity
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Stop Threats Before They
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"> Stop You</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our AI-powered cybersecurity platform provides 99.9% threat detection with real-time monitoring, 
              automated response, and zero-day attack prevention. Protect your business with the future of cybersecurity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Security Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            whileInView = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform leverages cutting-edge artificial intelligence to provide unmatched cybersecurity protection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 


}}
                whileInView = {
  { opacity: 1,
  y: 0 


}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 


}}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            whileInView = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of organizations already protected by our AI-powered cybersecurity platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 


}}
                whileInView = {
  { opacity: 1,
  y: 0 


}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 


}}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            whileInView = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Threat Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform protects against all types of cyber threats, from common attacks to sophisticated zero-day exploits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {threatTypes.map((threat, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  x: index % 2 === 0 ? -20 : 20 


}}
                whileInView = {
  { opacity: 1,
  x: 0 


}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 


}}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                  <threat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{threat.title}</h3>
                <p className="text-gray-300 text-lg">{threat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            whileInView = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet industry standards and regulatory requirements with our certified security platform
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 


}}
                whileInView = {
  { opacity: 1,
  y: 0 


}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 


}}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 text-center hover:border-red-500 transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <p className="text-white font-medium text-sm">{framework}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            whileInView = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Security Level
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to protect organizations of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 


}}
                whileInView = {
  { opacity: 1,
  y: 0 


}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 


}}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-red-500 ring-2 ring-red-500/20' 
                    : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  Get Protected
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            whileInView = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations already protected by our AI-powered cybersecurity platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Contact Security Team
              </button>
            </div>
            
            <p className="text-gray-400 mt-6">
              No credit card required • 30-day free trial • 24/7 security monitoring
            </p>
          </motion.div>
        </div>;
      </section>;
    </div>;
  );
}