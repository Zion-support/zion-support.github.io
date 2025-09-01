import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Zap, 
  Brain, 
  Network, 
  Server, 
  Database, 
  Globe, 
  Rocket, 
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  TrendingUp,
  Users,
  Target,
  Lightbulb,
  Code,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Sparkles,
  Activity,
  BarChart3,
  FileText,
  Key,
  Fingerprint,
  Scan,
  QrCode,
  CreditCard,
  Wallet,
  PiggyBank,
  TrendingDown,
  BarChart,
  PieChart,
  LineChart,
  ScatterChart,
  AreaChart,
  CandlestickChart,
  GanttChart,
  Kanban,
  Calendar,
  Timer,
  Stopwatch
} from 'lucide-react';
;
const AICybersecurityPlatform: React.FC = props {
  const [activeTab, setActiveTab] = useState<typeof 'overview'>('overview');
  const [isVisible, setIsVisible] = useState<typeof false>(false);

  useEffect(: unknown {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms that detect and respond to threats in real-time'
    },
    {
      icon: Shield,
      title: 'Zero-Day Protection',
      description: 'Protection against unknown threats using behavioral analysis and AI prediction'
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Comprehensive network monitoring and intrusion prevention systems'
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for data at rest and in transit'
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 security monitoring with instant alerting and response'
    },
    {
      icon: Zap,
      title: 'Automated Response',
      description: 'AI-powered automated threat response and incident management'
    }
  ];

  const securityModules = [
    {
      name: 'Threat Intelligence',
      features: ['Real-time threat feeds', 'Global threat database', 'Custom threat hunting', 'Vulnerability assessment']
    },
    {
      name: 'Endpoint Protection',
      features: ['Advanced antivirus', 'Behavioral analysis', 'Device control', 'Data loss prevention']
    },
    {
      name: 'Network Security',
      features: ['Firewall management', 'Intrusion detection', 'Traffic analysis', 'VPN services']
    },
    {
      name: 'Cloud Security',
      features: ['Cloud access security', 'API protection', 'Container security', 'Multi-cloud support']
    },
    {
      name: 'Identity Management',
      features: ['Multi-factor authentication', 'Single sign-on', 'Privileged access', 'Identity governance']
    },
    {
      name: 'Compliance & Audit',
      features: ['SOC 2 compliance', 'GDPR compliance', 'HIPAA compliance', 'Audit reporting']
    }
  ];

  const pricingTiers = [
    {
      name: 'Essential',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'AI Threat Detection',
        'Basic Network Security',
        'Endpoint Protection (up to 100 devices)',
        'Email Security',
        'Basic Compliance Reporting',
        'Email Support',
        'Security Dashboard'
      ],
      marketPrice: '$3,200',
      savings: '22%',
      popular: false
    },
    {
      name: 'Professional',
      price: '$5,500',
      period: '/month',
      description: 'Ideal for growing businesses and mid-size companies',
      features: [
        'Advanced AI Threat Detection',
        'Comprehensive Network Security',
        'Endpoint Protection (up to 500 devices)',
        'Cloud Security',
        'Identity Management',
        'Advanced Compliance',
        'Priority Support',
        'Custom Security Policies',
        'Security Analytics'
      ],
      marketPrice: '$7,000',
      savings: '21%',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$12,000',
      period: '/month',
      description: 'For large enterprises requiring maximum security',
      features: [
        'Enterprise AI Security',
        'Unlimited Device Protection',
        'Advanced Threat Hunting',
        'Custom Security Solutions',
        '24/7 Dedicated Support',
        'White-label Solutions',
        'Custom Integration',
        'Security Training',
        'Incident Response Team',
        'Compliance Consulting'
      ],
      marketPrice: '$15,500',
      savings: '23%',
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Proactive Protection',
      description: 'AI-powered threat detection prevents attacks before they happen, reducing risk by 95%',
      icon: Shield
    },
        {
      title: 'Cost Efficiency',
      description: 'Reduce security costs by 40% while improving protection through automation',
      icon: TrendingUp
    },
    {
      title: 'Compliance Ready',
      description: 'Built-in compliance frameworks ensure you meet industry standards automatically',
      icon: CheckCircle
    },
    {
      title: '24/7 Security',
      description: 'Continuous monitoring and automated response ensure your business is always protected',
      icon: Activity
    }
  ];

  const threatStats = [
    { metric: 'Threats Blocked', value: '99.9%', description: 'Success rate in blocking cyber threats' },
    { metric: 'Response Time', value: '< 1 second', description: 'Average time to detect and respond' },
    { metric: 'False Positives', value: '< 0.1%', description: 'Minimal false alarm rate' },
    { metric: 'Uptime', value: '99.99%', description: 'Platform availability and reliability' }
  ];

  return 
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 text-red-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Enterprise-Grade Security
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI-Powered Cybersecurity Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Next-generation cybersecurity powered by artificial intelligence, providing proactive threat detection, 
              automated response, and comprehensive protection for your digital assets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
            >
              <Shield className="w-5 h-5 mr-2" />
              Secure Your Business
            </Link>
            <Link
              to="#demo"
              className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-red-500 text-red-300 font-semibold text-lg hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              <Eye className="w-5 h-5 mr-2" />
              Security Demo
            </Link>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-orange-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Threat Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {threatStats.map((stat, index (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="text-center bg-gradient-to-br from-red-900/50 to-orange-900/50 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20"
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-red-300 mb-2">{stat.metric}</div>
                <div className="text-sm text-gray-300">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity protection powered by cutting-edge AI technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(feature: unknown, index: unknown (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-gradient-to-br from-red-900/50 to-orange-900/50 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Modules Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-orange-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Security Modules
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modular security solutions that adapt to your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityModules.map(module: unknown, index: unknown 
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-gradient-to-br from-slate-800/80 to-red-800/80 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-red-400" />
                  {module.name}
                </h3>
                <div className="space-y-3">
                  {module.features.map((feature, featureIndex (
                    <div key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Competitive Security Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade security at accessible prices with significant market savings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map(tier: unknown, index: unknown (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className={`relative bg-gradient-to-br from-slate-800/80 to-red-800/80 backdrop-blur-sm rounded-2xl p-8 border-2 ${
                  tier.popular 
                    ? 'border-red-500 scale-105' 
                    : 'border-red-500/20'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{tier.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-400 line-through mr-2">{tier.marketPrice}</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      Save {tier.savings}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map(feature: unknown, featureIndex: unknown (
                    <li key={featureIndex} className="flex items-start text-gray-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700'
                      : 'border-2 border-red-500 text-red-300 hover:bg-red-500 hover:text-white'
                  }`}
                >
                  Get Protected
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-900/30 to-red-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Security Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive protection that adapts to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map(benefit: unknown, index: unknown (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="bg-gradient-to-br from-slate-800/80 to-orange-800/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Protect your digital assets with AI-powered cybersecurity that never sleeps
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-2 text-red-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-2 text-red-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2 text-red-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                <Shield className="w-5 h-5 mr-2" />
                Get Security Assessment
              </Link>
              <Link
                to="https://ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-red-500 text-red-300 font-semibold text-lg hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <Globe className="w-5 h-5 mr-2" />
                Visit Our Website
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
;
export { AICybersecurityPlatform };
export default AICybersecurityPlatform;