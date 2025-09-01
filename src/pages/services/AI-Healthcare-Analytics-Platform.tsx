import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Heart, 
  Shield, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Clock,
  Users,
  MessageSquare,
  FileText,
  Globe,
  Rocket,
  Cpu,
  Database,
  Cloud,
  Lock,
  Play,
  Activity,
  Target,
  AlertTriangle,
  LineChart,
  Stethoscope,
  Pill,
  Microscope,
  UserCheck,
  Calendar,
  TrendingUp,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  Hospital,
  Ambulance,
  User,
  Clipboard
} from 'lucide-react';

const AIHealthcareAnalyticsPlatform: React.FC = () => {
  const features = [
    {
      title: 'Predictive Patient Analytics',
      description: 'AI-powered patient outcome prediction and risk assessment for proactive care',
      icon: UserCheck,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Clinical Decision Support',
      description: 'Intelligent clinical recommendations based on patient data and medical literature',
      icon: Stethoscope,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Population Health Management',
      description: 'Comprehensive population health analytics and intervention strategies',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Drug Interaction Analysis',
      description: 'AI-powered drug interaction detection and medication safety monitoring',
      icon: Pill,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Medical Image Analysis',
      description: 'Advanced AI for radiology, pathology, and medical imaging diagnostics',
      icon: Microscope,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Healthcare Fraud Detection',
      description: 'Intelligent fraud detection and billing accuracy verification',
      icon: Shield,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Clinic',
      price: '$299',
      period: '/month',
      description: 'Perfect for small clinics and medical practices',
      features: [
        'Up to 10 healthcare providers',
        'Basic patient analytics',
        'Standard reporting',
        'Email support',
        '25GB data storage',
        'Basic risk assessment'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Hospital',
      price: '$899',
      period: '/month',
      description: 'Ideal for hospitals and medical centers',
      features: [
        'Up to 100 healthcare providers',
        'Advanced AI analytics',
        'Real-time patient monitoring',
        'Custom dashboards',
        'Priority support',
        '100GB data storage',
        'API access',
        'Advanced risk modeling',
        'Clinical decision support'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'For large healthcare systems and networks',
      features: [
        'Unlimited healthcare providers',
        'Full AI suite',
        'Custom model training',
        'White-label solution',
        'Dedicated support',
        'Unlimited storage',
        'Advanced security',
        'Custom integrations',
        'On-premise deployment',
        'HIPAA compliance guarantees'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const benefits = [
    {
      title: '30% Better Patient Outcomes',
      description: 'AI-driven insights improve treatment effectiveness',
      icon: Heart,
      metric: '30%'
    },
    {
      title: '40% Faster Diagnosis',
      description: 'AI accelerates diagnostic processes and accuracy',
      icon: Clock,
      metric: '40%'
    },
    {
      title: '25% Cost Reduction',
      description: 'Optimized care pathways reduce healthcare costs',
      icon: TrendingUp,
      metric: '25%'
    },
    {
      title: '99.9% HIPAA Compliance',
      description: 'Enterprise-grade security and compliance',
      icon: Shield,
      metric: '99.9%'
    }
  ];

  const useCases = [
    {
      title: 'Hospitals',
      description: 'Patient monitoring, clinical decision support, and resource optimization',
      icon: Hospital,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Clinics',
      description: 'Patient analytics, risk assessment, and preventive care',
      icon: Stethoscope,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Research Institutions',
      description: 'Clinical trials, drug discovery, and medical research',
      icon: Microscope,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Insurance Companies',
      description: 'Claims analysis, fraud detection, and risk assessment',
      icon: Shield,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const complianceFeatures = [
    {
      title: 'HIPAA Compliance',
      description: 'Full HIPAA compliance with encryption and access controls',
      icon: Shield
    },
    {
      title: 'SOC 2 Type II',
      description: 'SOC 2 Type II certified for enterprise security',
      icon: Lock
    },
    {
      title: 'GDPR Ready',
      description: 'GDPR compliance for international healthcare organizations',
      icon: Globe
    },
    {
      title: 'FDA Guidelines',
      description: 'Compliance with FDA guidelines for medical software',
      icon: Clipboard
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Healthcare Analytics
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Healthcare Analytics
              <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Powered by AI
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform healthcare delivery with AI-driven insights, predictive analytics, and intelligent clinical decision support. 
              Improve patient outcomes while reducing costs and enhancing operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Revolutionary AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of healthcare analytics with cutting-edge AI capabilities designed for medical professionals.
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
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
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
              Our AI platform is designed to serve diverse healthcare sectors with specialized solutions.
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
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Enterprise-Grade Compliance
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with healthcare compliance in mind, ensuring your data and operations meet the highest standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join hundreds of healthcare institutions who have transformed their operations with our AI platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{benefit.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your healthcare institution size and needs. All plans include a 14-day free trial.
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
                className={`relative bg-white/5 backdrop-blur-lg border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-blue-500 bg-blue-500/10' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-1">
                    {plan.price}
                    <span className="text-lg text-gray-400 font-normal">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-green-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare Delivery?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the AI revolution and experience unprecedented improvements in patient care and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                <MessageSquare className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcareAnalyticsPlatform;