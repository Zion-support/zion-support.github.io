import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
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
  Cloud,
  Coins,
  Activity,
  BarChart,
  Target,
  Handshake,
  Eye,
  Workflow,
  Bot,
  HardDrive,
  Building2,
  HelpCircle,
  Users2,
  Settings as SettingsIcon,
  Palette,
  Timer,
  AlertTriangle,
  RefreshCw,
  PieChart,
  LineChart,
  CandlestickChart,
  Wallet,
  CreditCard,
  PiggyBank,
  TrendingDown,
  Percent,
  Calculator,
  Clock,
  Calendar,
  Mail,
  Phone,
  MessageSquare,
  Stethoscope,
  Pill,
  Microscope,
  Dna,
  TestTube,
  Syringe,
  Thermometer,
  Pulse,
  Bed,
  Ambulance,
  Hospital,
  UserCheck,
  FileSearch,
  Clipboard,
  AlertCircle,
  CheckSquare,
  XCircle,
  Info,
  Plus,
  Minus,
  Divide,
  Equal
} from 'lucide-react';

export default function AIHealthcarePredictiveAnalyticsPlatform() {
  const features = [
    {
      title: 'Predictive Diagnostics',
      description: 'AI-powered early disease detection and risk assessment',
      icon: Brain,
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Patient Risk Scoring',
      description: 'Comprehensive risk assessment for proactive care',
      icon: Shield,
      color: 'from-red-600 to-orange-600'
    },
    {
      title: 'Treatment Optimization',
      description: 'Personalized treatment plans based on AI analysis',
      icon: Stethoscope,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Population Health Analytics',
      description: 'Community health insights and trend analysis',
      icon: Users,
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Real-time Monitoring',
      description: 'Continuous patient monitoring and alert systems',
      icon: Activity,
      color: 'from-indigo-600 to-purple-600'
    },
    {
      title: 'Clinical Decision Support',
      description: 'AI-powered clinical recommendations and guidelines',
      icon: Clipboard,
      color: 'from-teal-600 to-blue-600'
    }
  ];

  const useCases = [
    {
      title: 'Chronic Disease Management',
      description: 'Predict and prevent complications in diabetes, heart disease, and more',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Early Cancer Detection',
      description: 'AI-powered screening and risk assessment',
      icon: Microscope,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Mental Health Analytics',
      description: 'Predictive models for mental health conditions',
      icon: Brain,
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Emergency Triage',
      description: 'AI-powered patient prioritization and routing',
      icon: Ambulance,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Healthcare Basic',
      price: 399,
      period: '/month',
      description: 'Perfect for small clinics and practices',
      features: [
        'Basic predictive analytics',
        'Up to 1,000 patient records',
        'Standard risk assessment',
        'Email support',
        'Basic reporting',
        '5 AI models'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Healthcare Professional',
      price: 999,
      period: '/month',
      description: 'Ideal for medium-sized healthcare organizations',
      features: [
        'Advanced predictive models',
        'Up to 10,000 patient records',
        'Comprehensive risk scoring',
        'Priority support',
        'Advanced analytics',
        'Unlimited AI models',
        'Custom integrations',
        'API access'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Healthcare Enterprise',
      price: 2999,
      period: '/month',
      description: 'For large hospital systems and networks',
      features: [
        'Custom AI models',
        'Unlimited patient records',
        'Enterprise risk management',
        'Dedicated support manager',
        'White-label solutions',
        'Custom integrations',
        'SLA guarantees',
        'On-premise deployment'
      ],
      popular: false,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const benefits = [
    {
      title: 'Early Detection',
      description: 'Identify health risks before they become critical',
      icon: Eye,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cost Reduction',
      description: 'Prevent expensive emergency treatments',
      icon: TrendingDown,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Better Outcomes',
      description: 'Improve patient health and satisfaction',
      icon: CheckCircle,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Efficient Care',
      description: 'Optimize resource allocation and workflows',
      icon: Workflow,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const performanceMetrics = [
    {
      metric: 'Early Detection Rate',
      value: '87.3%',
      change: '+12.5%',
      trend: 'up',
      description: 'Diseases caught early'
    },
    {
      metric: 'Cost Savings',
      value: '$2.4M',
      change: '+18.7%',
      trend: 'up',
      description: 'Annual healthcare savings'
    },
    {
      metric: 'Patient Outcomes',
      value: '94.2%',
      change: '+8.9%',
      trend: 'up',
      description: 'Improved health outcomes'
    },
    {
      metric: 'Risk Prediction',
      value: '91.8%',
      change: '+15.3%',
      trend: 'up',
      description: 'Accuracy of risk assessment'
    }
  ];

  const complianceFeatures = [
    {
      title: 'HIPAA Compliance',
      description: 'Full HIPAA compliance with end-to-end encryption',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'SOC 2 Type II',
      description: 'SOC 2 Type II certified for security and privacy',
      icon: CheckSquare,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'GDPR Ready',
      description: 'GDPR compliance for European healthcare providers',
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'FDA Guidelines',
      description: 'Compliant with FDA guidelines for medical software',
      icon: Building2,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      <SEO 
        title="AI Healthcare Predictive Analytics Platform | Zion Tech Group"
        description="Transform healthcare with AI-powered predictive analytics. Early disease detection, risk assessment, and personalized treatment optimization."
        keywords="AI healthcare, predictive analytics, disease detection, risk assessment, treatment optimization, healthcare AI"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Healthcare Predictive Analytics Platform
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Revolutionize healthcare delivery with AI-powered predictive analytics. 
              Detect diseases early, optimize treatments, and improve patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue/30 backdrop-blur-sm rounded-xl p-6 border border-zion-purple/30 text-center"
              >
                <h3 className="text-sm font-medium text-zion-slate-light mb-2">{metric.metric}</h3>
                <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                <div className={`text-sm font-medium ${
                  metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {metric.change}
                </div>
                <p className="text-xs text-zion-slate-light mt-2">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Healthcare Analytics
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with healthcare expertise to deliver 
              unprecedented insights and predictive capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue/30 backdrop-blur-sm rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how AI predictive analytics is transforming healthcare delivery 
              across various specialties and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue/30 backdrop-blur-sm rounded-xl p-8 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center mb-6`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-zion-slate-light text-lg">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Compliance & Security
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our platform meets the highest standards of healthcare compliance and security 
              to protect patient data and ensure regulatory adherence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the perfect plan for your healthcare organization. All plans include 
              our core AI features and compliance certifications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zion-blue/30 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-zion-cyan/50 ring-2 ring-zion-cyan/20' 
                    : 'border-zion-purple/30'
                } hover:border-zion-cyan/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-zion-slate-light ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg'
                      : 'bg-zion-blue/50 text-zion-cyan border border-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Healthcare Analytics?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the transformative benefits of AI-powered predictive analytics in healthcare.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of healthcare providers already using AI analytics to improve patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}