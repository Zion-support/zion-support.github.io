import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Rocket, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  BarChart3, 
  Code, 
  Server, 
  Smartphone, 
  Atom, 
  Star, 
  Target, 
  TrendingUp, 
  Award, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  Workflow, 
  Leaf, 
  Truck, 
  Building, 
  PenTool, 
  Eye, 
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Heart,
  Satellite,
  Wifi,
  Bot,
  Layers,
  Calendar,
  Clock,
  CheckSquare,
  FileText,
  PieChart,
  TrendingDown,
  AlertTriangle,
  UserCheck,
  Team,
  Activity,
  HeartPulse,
  Stethoscope,
  Pill,
  Syringe,
  Microscope,
  TestTube,
  Thermometer,
  Bandage,
  Ambulance,
  Hospital,
  User,
  Users2,
  UserPlus,
  UserMinus,
  UserX,
  UserCheck2,
  UserClock,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserX2,
  UserCheck3,
  UserClock2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2,
  UserX3,
  UserCheck4,
  UserClock3,
  UserCog3,
  UserEdit3,
  UserSearch3,
  UserVoice3,
  UserX4,
  UserCheck5,
  UserClock4,
  UserCog4,
  UserEdit4,
  UserSearch4,
  UserVoice4,
  UserX5,
  UserCheck6,
  UserClock5,
  UserCog5,
  UserEdit5,
  UserSearch5,
  UserVoice5,
  UserX6,
  UserCheck7,
  UserClock6,
  UserCog6,
  UserEdit6,
  UserSearch6,
  UserVoice6,
  UserX7,
  UserCheck8,
  UserClock7,
  UserCog7,
  UserEdit7,
  UserSearch7,
  UserVoice7,
  UserX8,
  UserCheck9,
  UserClock8,
  UserCog8,
  UserEdit8,
  UserSearch8,
  UserVoice8,
  UserX9,
  UserCheck10,
  UserClock9,
  UserCog9,
  UserEdit9,
  UserSearch9,
  UserVoice9,
  UserX10,
  Play
} from 'lucide-react';

const AIHealthcareAnalyticsPlatform: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Patient Risk Assessment',
      description: 'Predict patient health risks with 94% accuracy using advanced machine learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Real-time Health Monitoring',
      description: 'Continuous patient monitoring with AI-driven early warning systems',
      icon: Activity,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Predictive Analytics for Treatment',
      description: 'AI-recommended treatment plans based on patient history and outcomes',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Population Health Management',
      description: 'Comprehensive analytics for managing community health outcomes',
      icon: Users,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Clinical Decision Support',
      description: 'AI-powered clinical insights and evidence-based recommendations',
      icon: Stethoscope,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Healthcare Quality Metrics',
      description: 'Automated quality reporting and performance analytics',
      icon: BarChart3,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Clinic',
      price: '$99',
      period: '/month',
      description: 'Perfect for small clinics and medical practices',
      features: [
        'Up to 100 patients',
        'Basic AI risk assessment',
        'Patient monitoring',
        'Standard reports',
        'Email support',
        'Mobile app access',
        'Basic analytics'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Hospital',
      price: '$299',
      period: '/month',
      description: 'Ideal for hospitals and larger medical facilities',
      features: [
        'Up to 1,000 patients',
        'Advanced AI analytics',
        'Real-time monitoring',
        'Custom dashboards',
        'Priority support',
        'API access',
        'Population health tools',
        'Clinical decision support',
        'Quality metrics'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Health System',
      price: '$799',
      period: '/month',
      description: 'For large health systems and networks',
      features: [
        'Unlimited patients',
        'Full AI capabilities',
        'Multi-facility support',
        'Custom integrations',
        'Dedicated support',
        'Advanced security',
        'Multi-tenant support',
        'Custom reporting',
        'Regulatory compliance'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const benefits = [
    {
      title: '35% Reduction in Readmissions',
      description: 'AI-powered risk assessment prevents complications',
      icon: TrendingDown,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: '50% Faster Diagnosis',
      description: 'AI clinical support speeds up diagnostic processes',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: '90% Patient Satisfaction',
      description: 'Improved care quality and outcomes',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: '24/7 Patient Monitoring',
      description: 'Continuous AI monitoring with instant alerts',
      icon: Eye,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const useCases = [
    {
      title: 'Primary Care',
      description: 'Preventive care and chronic disease management',
      icon: Stethoscope,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Emergency Medicine',
      description: 'Rapid triage and critical care support',
      icon: Ambulance,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Specialty Care',
      description: 'Specialized treatment optimization',
      icon: Microscope,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Population Health',
      description: 'Community health management and prevention',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Healthcare Analytics
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transform Healthcare with{' '}
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                AI Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize patient care with AI-powered analytics, predictive insights, and intelligent clinical decision support for better health outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Advanced Healthcare Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to deliver better patient care with AI-powered insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Healthcare Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From primary care to specialized medicine, our platform adapts to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Healthcare-Focused Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your healthcare facility size and needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-red-500/50 bg-red-500/10' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Measurable Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See the real results of AI-powered healthcare analytics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-12 border border-red-500/30"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading healthcare providers using AI-powered analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcareAnalyticsPlatform;