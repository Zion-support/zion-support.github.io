import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Shield, 
  Brain, 
  AlertTriangle, 
  Eye, 
  Zap, 
  BarChart3, 
  Users, 
  Lock, 
  Globe, 
  Clock, 
  TrendingUp, 
  CheckCircle,
  MessageSquare,
  FileText,
  GitBranch,
  Lightbulb,
  Rocket,
  Star,
  DollarSign,
  Target,
  Cpu,
  Network,
  Database,
  Server
} from 'lucide-react';

export default function AICybersecurityThreatIntelligence() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms detect zero-day threats and sophisticated attacks in real-time',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Eye,
      title: '24/7 Threat Monitoring',
      description: 'Continuous monitoring of global threat landscape with automated incident response',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Predictive Threat Intelligence',
      description: 'AI models predict emerging threats before they become active, enabling proactive defense',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: BarChart3,
      title: 'Real-time Risk Assessment',
      description: 'Dynamic risk scoring and threat correlation across your entire infrastructure',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Network,
      title: 'Global Threat Intelligence Network',
      description: 'Collaborative threat sharing with global security community and real-time updates',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Automated Incident Response',
      description: 'AI-driven response automation with customizable playbooks and escalation rules',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 100 endpoints',
        'Basic threat detection',
        'Email alerts',
        'Standard support',
        '10GB log storage',
        'Mobile app access',
        'Basic reporting',
        'Threat intelligence feeds'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and security teams',
      features: [
        'Up to 1000 endpoints',
        'Advanced AI detection',
        'Real-time monitoring',
        'Priority support',
        '100GB log storage',
        'API access',
        'Advanced analytics',
        'Custom threat feeds',
        'Incident response automation',
        'Threat hunting tools'
      ],
      popular: true,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with complex security needs',
      features: [
        'Unlimited endpoints',
        'Full AI threat intelligence',
        'Custom integrations',
        'Dedicated support',
        'Unlimited storage',
        'Advanced security features',
        'White-label options',
        'Custom training',
        'On-premise deployment',
        'Compliance reporting'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '99.9% Threat Detection Rate',
      description: 'AI-powered detection identifies threats that traditional security tools miss'
    },
    {
      icon: Clock,
      title: '90% Faster Incident Response',
      description: 'Automated response reduces mean time to resolution from hours to minutes'
    },
    {
      icon: Shield,
      title: 'Proactive Threat Prevention',
      description: 'Predictive intelligence stops attacks before they can cause damage'
    },
    {
      icon: Users,
      title: 'Reduced Security Team Workload',
      description: 'AI automation handles routine tasks, allowing teams to focus on strategic security'
    }
  ];

  const useCases = [
    {
      title: 'Financial Services',
      description: 'Protect against sophisticated financial fraud and cyber attacks with real-time threat intelligence',
      icon: DollarSign
    },
    {
      title: 'Healthcare',
      description: 'Secure patient data and medical systems against healthcare-specific cyber threats',
      icon: Users
    },
    {
      title: 'Manufacturing',
      description: 'Protect industrial control systems and operational technology from cyber threats',
      icon: Cpu
    },
    {
      title: 'Government',
      description: 'Defend critical infrastructure and government systems against nation-state attacks',
      icon: Globe
    }
  ];

  const threatTypes = [
    {
      name: 'Ransomware',
      description: 'AI detects ransomware behavior patterns and blocks encryption attempts',
      icon: Lock
    },
    {
      name: 'Phishing',
      description: 'Advanced email analysis identifies sophisticated phishing campaigns',
      icon: MessageSquare
    },
    {
      name: 'DDoS Attacks',
      description: 'Real-time traffic analysis and automated mitigation of DDoS attacks',
      icon: Network
    },
    {
      name: 'Insider Threats',
      description: 'Behavioral analysis detects anomalous user activity and potential insider threats',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Cybersecurity Threat Intelligence Platform - Zion Tech Group"
        description="Advanced AI-powered cybersecurity threat intelligence platform that detects, predicts, and responds to cyber threats in real-time. Protect your organization with cutting-edge security AI."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 text-red-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Cybersecurity
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                AI Cybersecurity
              </span>
              <br />
              <span className="text-white">Threat Intelligence</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Stay ahead of cyber threats with AI that detects, predicts, and responds to attacks 
              in real-time, protecting your organization 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold text-lg hover:from-red-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
              >
                <Shield className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-red-500/30 text-red-300 font-semibold text-lg hover:bg-red-500/10 transition-all duration-300"
              >
                <Eye className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform leverages cutting-edge artificial intelligence to revolutionize how you 
              detect, analyze, and respond to cyber threats.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Types Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/30 to-slate-700/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Threat Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform protects against all types of cyber threats, from common attacks 
              to sophisticated nation-state campaigns.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {threatTypes.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <threat.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{threat.name}</h3>
                <p className="text-gray-300 leading-relaxed">{threat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise-Grade Security at Scale
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that fits your organization's size and threat landscape. 
              All plans include our core AI threat intelligence features.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'transform scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-600 text-white text-sm font-semibold">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-2 ${
                  plan.popular ? 'border-red-500/50' : 'border-slate-600/30'
                } hover:border-red-500/50 transition-all duration-300`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/request-quote"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700'
                        : 'border border-red-500/30 text-red-300 hover:bg-red-500/10'
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

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Security Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Organizations using our AI Cybersecurity Threat Intelligence Platform see measurable 
              improvements in threat detection and response times.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-6"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/30 to-slate-700/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform protects organizations across all industries, from healthcare to finance, 
              manufacturing to government.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations already protected by AI-powered cybersecurity 
              threat intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold text-lg hover:from-red-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
              >
                <Shield className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-red-500/30 text-red-300 font-semibold text-lg hover:bg-red-500/10 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}