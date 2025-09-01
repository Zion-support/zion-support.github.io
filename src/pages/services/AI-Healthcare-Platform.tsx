import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Heart,
  Stethoscope,
  Brain,
  Zap,
  Shield,
  BarChart3,
  Cpu,
  Database,
  Network,
  Lock,
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
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Activity,
  FileText,
  Pill,
  Syringe,
  HeartPulse,
  Thermometer,
  Droplet,
  EyeOff,
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
  Stopwatch,
  Microscope,
  Flask,
  TestTube,
  Beaker,
} from 'lucide-react';
;
const AIHealthcarePlatform: React.FC = props {
  const [activeTab, setActiveTab] = useState<typeof 'overview'>('overview');
  const [isVisible, setIsVisible] = useState<typeof false>(false);

  useEffect(: unknown {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Diagnostic Assistant',
      description:
        'Advanced AI algorithms for accurate disease diagnosis and treatment recommendations',
    },
    {
      icon: Heart,
      title: 'Predictive Healthcare',
      description:
        'Predict patient outcomes and identify health risks before they become critical',
    },
    {
      icon: Stethoscope,
      title: 'Virtual Health Monitoring',
      description:
        'Real-time health monitoring with AI-powered insights and alerts',
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant Security',
      description:
        'Enterprise-grade security ensuring patient data privacy and compliance',
    },
    {
      icon: BarChart3,
      title: 'Healthcare Analytics',
      description:
        'Comprehensive analytics for population health and treatment effectiveness',
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description:
        'Streamlined healthcare processes with intelligent automation',
    },
  ];

  const healthcareModules = [
    {
      name: 'Clinical Decision Support',
      features: [
        'Evidence-based recommendations',
        'Drug interaction checking',
        'Treatment protocols',
        'Clinical guidelines',
      ],
    },
    {
      name: 'Medical Imaging AI',
      features: [
        'Radiology analysis',
        'Pathology detection',
        'Image enhancement',
        'Automated reporting',
      ],
    },
    {
      name: 'Patient Management',
      features: [
        'Electronic health records',
        'Appointment scheduling',
        'Patient portals',
        'Care coordination',
      ],
    },
    {
      name: 'Telemedicine Platform',
      features: [
        'Video consultations',
        'Remote monitoring',
        'Secure messaging',
        'Mobile apps',
      ],
    },
    {
      name: 'Population Health',
      features: [
        'Disease surveillance',
        'Risk stratification',
        'Preventive care',
        'Health trends',
      ],
    },
    {
      name: 'Research & Analytics',
      features: [
        'Clinical trials',
        'Data mining',
        'Outcome analysis',
        'Research insights',
      ],
    },
  ];

  const pricingTiers = [
    {
      name: 'Clinic',
      price: '$3,500',
      period: '/month',
      description: 'Perfect for small clinics and medical practices',
      features: [
        'AI Diagnostic Support (up to 100 patients/month)',
        'Basic Patient Management',
        'Telemedicine Platform',
        'HIPAA Compliance',
        'Email Support',
        'Standard Analytics',
        'Mobile App Access',
      ],
      marketPrice: '$4,500',
      savings: '22%',
      popular: false,
    },
    {
      name: 'Hospital',
      price: '$8,500',
      period: '/month',
      description: 'Ideal for hospitals and larger healthcare facilities',
      features: [
        'Advanced AI Diagnostics',
        'Comprehensive Patient Management',
        'Medical Imaging AI',
        'Population Health Analytics',
        'Clinical Decision Support',
        'Priority Support',
        'Custom Integration',
        'Advanced Security',
        'Training & Certification',
      ],
      marketPrice: '$11,000',
      savings: '23%',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$18,000',
      period: '/month',
      description: 'For large healthcare systems and research institutions',
      features: [
        'Enterprise AI Platform',
        'Unlimited Patient Capacity',
        'Custom AI Models',
        'Advanced Analytics',
        'Research Tools',
        '24/7 Dedicated Support',
        'White-label Solutions',
        'Custom Development',
        'Compliance Consulting',
        'Staff Training',
      ],
      marketPrice: '$24,000',
      savings: '25%',
      popular: false,
    },
  ];

  const benefits = [
    {
      title: 'Improved Patient Outcomes',
      description:
        'AI-powered diagnostics improve accuracy by 30% and reduce diagnostic errors by 50%',
      icon: Heart,
    },
    {
      title: 'Cost Reduction',
      description:
        'Reduce healthcare costs by 25% through automation and predictive care',
      icon: TrendingUp,
    },
    {
      title: 'Enhanced Efficiency',
      description:
        'Streamline workflows and reduce administrative burden by 40%',
      icon: Zap,
    },
    {
      title: 'Better Care Coordination',
      description: 'Seamless integration across departments and care teams',
      icon: Users,
    },
  ];

  const healthcareStats = [
    {
      metric: 'Diagnostic Accuracy',
      value: '95%',
      description: 'AI-powered diagnostic accuracy rate',
    },
    {
      metric: 'Response Time',
      value: '< 2 minutes',
      description: 'Average time for AI diagnosis',
    },
    {
      metric: 'Cost Savings',
      value: '25%',
      description: 'Average reduction in healthcare costs',
    },
    {
      metric: 'Patient Satisfaction',
      value: '94%',
      description: 'Patient satisfaction with AI-enhanced care',
    },
  ];

  const useCases = [
    {
      industry: 'Primary Care',
      applications: [
        'Preventive Care',
        'Chronic Disease Management',
        'Screening Programs',
        'Health Education',
      ],
    },
    {
      industry: 'Specialty Medicine',
      applications: ['Oncology', 'Cardiology', 'Neurology', 'Radiology'],
    },
    {
      industry: 'Emergency Care',
      applications: [
        'Triage',
        'Critical Care',
        'Trauma Assessment',
        'Emergency Response',
      ],
    },
    {
      industry: 'Research & Development',
      applications: [
        'Clinical Trials',
        'Drug Discovery',
        'Medical Research',
        'Population Studies',
      ],
    },
  ];

  return 
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Healthcare Innovation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI-Powered Healthcare Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Revolutionary healthcare technology that combines artificial
              intelligence with medical expertise to deliver superior patient
              care, accurate diagnostics, and improved health outcomes.
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
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Heart className="w-5 h-5 mr-2" />
              Transform Healthcare
            </Link>
            <Link
              to="#demo"
              className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-green-500 text-green-300 font-semibold text-lg hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <Eye className="w-5 h-5 mr-2" />
              Watch Demo
            </Link>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Healthcare Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthcareStats.map((stat, index (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="text-center bg-gradient-to-br from-green-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20"
              >
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-green-300 mb-2">
                  {stat.metric}
                </div>
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
              Advanced Healthcare Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive healthcare solutions powered by cutting-edge AI
              technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(feature: unknown, index: unknown (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-gradient-to-br from-green-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Modules Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Healthcare Modules
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modular healthcare solutions that adapt to your specific medical
              needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareModules.map(module: unknown, index: unknown 
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-gradient-to-br from-slate-800/80 to-green-800/80 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-green-400" />
                  {module.name}
                </h3>
                <div className="space-y-3">
                  {module.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-gray-300"
                    >
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

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Healthcare Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform healthcare delivery across all medical specialties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map(useCase: unknown, index: unknown 
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  x: isVisible ? 0 : index % 2 === 0 ? -20 : 20,
                }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="bg-gradient-to-br from-slate-800/80 to-green-800/80 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-green-400" />
                  {useCase.industry}
                </h3>
                <div className="space-y-3">
                  {useCase.applications.map((app, appIndex) => (
                    <div
                      key={appIndex}
                      className="flex items-center text-gray-300"
                    >
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                      {app}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-green-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Healthcare Platform Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access advanced healthcare AI technology at competitive prices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map(tier: unknown, index: unknown (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className={`relative bg-gradient-to-br from-slate-800/80 to-green-800/80 backdrop-blur-sm rounded-2xl p-8 border-2 ${
                  tier.popular
                    ? 'border-green-500 scale-105'
                    : 'border-green-500/20'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {tier.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      {tier.price}
                    </span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{tier.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-400 line-through mr-2">
                      {tier.marketPrice}
                    </span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      Save {tier.savings}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-gray-300"
                    >
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                      : 'border-2 border-green-500 text-green-300 hover:bg-green-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Healthcare Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform patient care with AI-powered healthcare technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map(benefit: unknown, index: unknown (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  x: isVisible ? 0 : index % 2 === 0 ? -20 : 20,
                }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="bg-gradient-to-br from-slate-800/80 to-blue-800/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the healthcare revolution with AI-powered medical technology
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-2 text-green-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-2 text-green-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2 text-green-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Heart className="w-5 h-5 mr-2" />
                Schedule Healthcare Demo
              </Link>
              <Link
                to="https://ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-green-500 text-green-300 font-semibold text-lg hover:bg-green-500 hover:text-white transition-all duration-300"
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

export default AIHealthcarePlatform;
