import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Shield, 
  Brain, 
  Eye, 
  AlertTriangle, 
  Lock, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Database,
  Network,
  Workflow,
  Bot,
  Globe,
  TrendingUp,
  DollarSign,
  Clock,
  Star,
  Award,
  Target,
  Lightbulb,
  Code,
  Server,
  Cloud,
  Smartphone,
  Monitor,
  ShieldCheck,
  Activity,
  MessageCircle,
  FileText,
  Settings,
  Palette,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Building2,
  Handshake,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  Calendar,
  CreditCard,
  Phone,
  Mail,
  MapPin,
  Users,
  BarChart3,
  Rocket,
  Target,
  Heart,
  Lock,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud
} from 'lucide-react';

export default function AICybersecurityThreatIntelligence() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState('professional');

  const features = [
    {
      category: 'Threat Detection',
      items: [
        'Real-time threat monitoring',
        'Behavioral analysis',
        'Anomaly detection',
        'Zero-day threat identification',
        'Advanced persistent threat (APT) detection'
      ]
    },
    {
      category: 'AI Intelligence',
      items: [
        'Machine learning threat models',
        'Predictive threat analytics',
        'Automated threat correlation',
        'Intelligent false positive reduction',
        'Contextual threat assessment'
      ]
    },
    {
      category: 'Response & Mitigation',
      items: [
        'Automated incident response',
        'Threat containment protocols',
        'Real-time remediation',
        'Forensic analysis tools',
        'Recovery automation'
      ]
    },
    {
      category: 'Compliance & Reporting',
      items: [
        'SOC 2 Type II compliance',
        'GDPR & CCPA support',
        'Automated compliance reporting',
        'Audit trail management',
        'Regulatory dashboard'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$499',
      period: '/month',
      description: 'Basic threat intelligence for small organizations',
      features: [
        'Up to 100 endpoints',
        'Basic threat detection',
        'Email alerts',
        'Standard reporting',
        '8/5 support'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Advanced threat intelligence for growing businesses',
      features: [
        'Up to 1,000 endpoints',
        'Advanced AI detection',
        'Real-time alerts',
        'Advanced analytics',
        'Custom dashboards',
        'API access',
        '24/7 support'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$3,999',
      period: '/month',
      description: 'Comprehensive threat intelligence for large enterprises',
      features: [
        'Unlimited endpoints',
        'Custom AI models',
        'Dedicated threat analysts',
        'Custom integrations',
        'White-label solution',
        'On-premise deployment',
        'Custom SLA',
        'Dedicated support team'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: '99.9% Threat Detection',
      description: 'Advanced AI algorithms detect threats with unprecedented accuracy'
    },
    {
      icon: Zap,
      title: 'Real-time Response',
      description: 'Automated threat response in milliseconds, not minutes'
    },
    {
      icon: Brain,
      title: 'Predictive Intelligence',
      description: 'Anticipate threats before they become attacks'
    },
    {
      icon: Lock,
      title: 'Zero False Positives',
      description: 'AI-powered analysis eliminates unnecessary alerts'
    }
  ];

  const threatTypes = [
    {
      category: 'Malware & Ransomware',
      examples: [
        'Advanced persistent threats',
        'Fileless malware detection',
        'Ransomware prevention',
        'Polymorphic virus detection'
      ]
    },
    {
      category: 'Network Attacks',
      examples: [
        'DDoS protection',
        'Man-in-the-middle attacks',
        'SQL injection prevention',
        'Cross-site scripting detection'
      ]
    },
    {
      category: 'Social Engineering',
      examples: [
        'Phishing detection',
        'Credential harvesting',
        'Business email compromise',
        'Social media threats'
      ]
    },
    {
      category: 'Insider Threats',
      examples: [
        'User behavior analytics',
        'Data exfiltration detection',
        'Privilege abuse monitoring',
        'Anomalous access patterns'
      ]
    }
  ];

  const industries = [
    {
      name: 'Financial Services',
      threats: ['Banking trojans', 'Payment fraud', 'Regulatory compliance', 'Insider trading']
    },
    {
      name: 'Healthcare',
      threats: ['Patient data breaches', 'Medical device attacks', 'HIPAA compliance', 'Ransomware']
    },
    {
      name: 'Manufacturing',
      threats: ['Industrial espionage', 'Supply chain attacks', 'IoT vulnerabilities', 'Intellectual property theft']
    },
    {
      name: 'Retail',
      threats: ['Payment card breaches', 'E-commerce fraud', 'Customer data theft', 'Point-of-sale attacks']
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="AI Cybersecurity Threat Intelligence | Zion Tech Group"
        description="Advanced AI-powered cybersecurity threat intelligence platform. Detect, analyze, and respond to threats in real-time with machine learning precision."
        keywords="AI cybersecurity, threat intelligence, threat detection, cybersecurity platform, AI security, threat response"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-zion-blue to-orange-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                AI-Powered Threat Intelligence
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Cybersecurity
                <span className="block text-red-400">Threat Intelligence</span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Stay ahead of cyber threats with our AI-powered threat intelligence platform. 
                Detect, analyze, and respond to security threats in real-time with machine learning precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-red-400 text-red-400 font-semibold rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Threat Intelligence Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive cybersecurity capabilities powered by artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-xl p-6 hover:border-red-400/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-red-400 mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Threat Intelligence?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Transform your cybersecurity posture with intelligent automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Types Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Threat Coverage
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Protect against all types of cyber threats with AI-powered detection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {threatTypes.map((threat, index) => (
              <motion.div
                key={threat.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-red-400 mb-4">{threat.category}</h3>
                <ul className="space-y-2">
                  {threat.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-zion-slate-light text-sm flex items-center">
                      <ArrowRight className="w-3 h-3 text-red-400 mr-2 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Security Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Tailored cybersecurity for your industry's unique threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-red-400 mb-4">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.threats.map((threat, threatIndex) => (
                    <li key={threatIndex} className="text-zion-slate-light text-sm flex items-center">
                      <Shield className="w-3 h-3 text-red-400 mr-2 flex-shrink-0" />
                      {threat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Security Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the security level that matches your organization's needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zion-blue border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-red-400 shadow-lg shadow-red-400/20' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-red-400">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600'
                    : 'bg-zion-blue border border-red-400 text-red-400 hover:bg-red-400 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of organizations that trust our AI-powered threat intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Need Security Expertise?</h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Our cybersecurity experts are here to help protect your organization
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}