import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';

const AICyberThreatIntelligence: React.FC = () => {

  const features = [
    'AI-powered threat detection and analysis in real-time',
    'Advanced behavioral analytics for anomaly detection',
    'Machine learning-based threat hunting and investigation',
    'Automated threat intelligence gathering and correlation',
    'Predictive threat modeling and risk assessment',
    'Real-time security event correlation and alerting',
    'Integration with major SIEM and security tools',
    'Automated incident response and remediation',
    'Threat actor profiling and attribution analysis',
    'Continuous learning from global threat landscape'
  ];

  const benefits = [
    'Detect threats 10x faster than traditional security tools',
    'Reduce false positives by 60-80% through AI filtering',
    'Improve threat response time from hours to minutes',
    'Proactively identify emerging threats before they impact',
    'Reduce security operations costs by 30-50%'
  ];

  const pricing = [
    {

      plan: 'Professional',
      price: '$3,999',
      period: 'month',
      features: ['Up to 1,000 endpoints', 'Basic AI threat detection', 'Standard integrations', 'Email support', 'Basic reporting'],
      popular: false
    },
    {

      plan: 'Enterprise',
      price: '$9,999',
      period: 'month',
      features: ['Up to 10,000 endpoints', 'Advanced AI analytics', 'Full security tool integration', 'Priority support', 'Advanced analytics', 'Custom workflows'],
      popular: true
    },
    {

      plan: 'Global',
      price: '$24,999',
      period: 'month',
      features: ['Unlimited endpoints', 'Custom AI models', 'Multi-tenant deployment', 'Dedicated support', 'White-label solution', 'On-premise deployment'],
      popular: false
    }
  ];

  const threatTypes = [
    'Advanced Persistent Threats (APT)',
    'Ransomware & Malware',
    'Phishing & Social Engineering',
    'Insider Threats',
    'DDoS Attacks',
    'Zero-day Exploits',
    'Supply Chain Attacks',
    'Cloud Security Threats'
  ];

  const integrations = [
    'Splunk Enterprise Security',
    'IBM QRadar',
    'Microsoft Sentinel',
    'Palo Alto Networks',
    'CrowdStrike Falcon',
    'Carbon Black',
    'Rapid7 InsightIDR',
    'Exabeam'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-purple-100">
      <SEO 
        title="AI Cyber Threat Intelligence Platform | Zion Tech Group"
        description="Revolutionary AI-powered cyber threat intelligence platform that provides real-time threat detection, analysis, and automated response capabilities for enterprise security."
        keywords="AI cybersecurity, threat intelligence, threat detection, cybersecurity AI, security analytics, threat hunting"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-red-500/20 rounded-full">
                <Shield className="w-8 h-8 text-red-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-300 to-purple-300 bg-clip-text text-transparent">
              AI Cyber Threat Intelligence Platform
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-4xl mx-auto">
              Stay ahead of cyber threats with AI-powered intelligence, real-time detection, and automated response capabilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border-2 border-red-300 text-red-300 font-semibold rounded-lg hover:bg-red-300 hover:text-red-900 transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced AI-Powered Security Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with cybersecurity expertise to deliver unprecedented threat detection and response capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-50 to-purple-50 p-6 rounded-xl border border-red-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Types Section */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Threat Coverage
            </h2>
            <p className="text-xl text-gray-600">
              Detect and respond to all types of cyber threats with our advanced AI algorithms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {threatTypes.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <span className="text-lg font-semibold text-gray-900">{threat}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless Security Tool Integration
            </h2>
            <p className="text-xl text-gray-600">
              Integrate with your existing security infrastructure for enhanced protection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg border border-blue-100 text-center"
              >
                <div className="flex justify-center mb-4">
                  <Network className="w-8 h-8 text-blue-600" />
                </div>
                <span className="text-lg font-semibold text-gray-900">{integration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Your Security Operations
            </h2>
            <p className="text-xl text-gray-600">
              Experience measurable improvements in threat detection, response time, and security efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{benefit}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise Security Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Competitive pricing designed for organizations of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-xl border-2 ${

                  plan.popular ? 'border-red-500 scale-105' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.plan}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="https://ziontechgroup.com/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${

                      plan.popular
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Security Posture?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Join leading organizations that have already revolutionized their cybersecurity with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-red-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Contact Security Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AICyberThreatIntelligence;