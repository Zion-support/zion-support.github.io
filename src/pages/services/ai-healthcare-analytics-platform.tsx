import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Heart, 
  Brain, 
  Shield, 
  Activity, 
  Camera, 
  Cpu, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Users, 
  Globe, 
  Lock, 
  TrendingUp,
  BarChart3,
  Settings,
  Database,
  Network,
  Smartphone,
  Cloud,
  Leaf,
  Target,
  Award,
  Clock,
  DollarSign,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Stethoscope,
  Pill,
  Microscope,
  FileText,
  AlertTriangle,
  UserCheck,
  Calendar,
  Gauge
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIHealthcareAnalyticsPlatform() {
  const features = [
    'Predictive Disease Risk Assessment',
    'Real-time Patient Monitoring & Alerts',
    'Medical Image Analysis & Diagnosis',
    'Drug Interaction & Safety Analysis',
    'Population Health Analytics & Trends',
    'Clinical Decision Support Systems',
    'Healthcare Fraud Detection & Prevention',
    'Patient Outcome Prediction Models',
    'Resource Optimization & Planning',
    'Compliance & Regulatory Reporting'
  ];

  const benefits = [
    'Improve diagnostic accuracy by 30-40%',
    'Reduce medical errors by 50-60%',
    'Lower healthcare costs by 25-35%',
    'Enhance patient outcomes and satisfaction',
    'Optimize resource allocation and staffing',
    'Enable proactive and preventive care',
    'Streamline administrative processes',
    'Ensure regulatory compliance and security'
  ];

  const pricingPlans = [
    {
      name: 'Healthcare Starter',
      price: 3999,
      period: 'month',
      description: 'For small clinics (10-50 providers)',
      features: [
        'Basic patient analytics dashboard',
        'Disease risk assessment models',
        'Medical image analysis (up to 1000/month)',
        'Basic reporting and insights',
        'Email support',
        'HIPAA compliance',
        'Up to 10,000 patient records'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Healthcare Professional',
      price: 9999,
      period: 'month',
      description: 'For medium hospitals (50-200 providers)',
      features: [
        'Advanced predictive analytics',
        'Real-time patient monitoring',
        'Comprehensive medical image analysis',
        'Clinical decision support',
        'Priority support',
        'Custom integrations',
        'Up to 100,000 patient records',
        'Training & onboarding',
        'Advanced reporting'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Healthcare Enterprise',
      price: 29999,
      period: 'month',
      description: 'For large health systems (200+ providers)',
      features: [
        'Full AI healthcare ecosystem',
        'Custom model development',
        'Advanced predictive analytics',
        'Dedicated support team',
        'Custom development',
        'Unlimited patient records',
        'On-site training',
        'SLA guarantees',
        '24/7 monitoring'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Diagnostic Imaging',
      description: 'AI-powered analysis of X-rays, MRIs, and CT scans',
      icon: Microscope,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Patient Monitoring',
      description: 'Real-time health monitoring and early warning systems',
      icon: Activity,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Drug Safety',
      description: 'Medication interaction analysis and safety monitoring',
      icon: Pill,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Population Health',
      description: 'Community health trends and outbreak prediction',
      icon: Users,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const technologies = [
    {
      name: 'Machine Learning',
      description: 'Advanced AI algorithms for medical pattern recognition',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Computer Vision',
      description: 'Deep learning for medical image analysis',
      icon: Eye,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Natural Language Processing',
      description: 'AI-powered medical text analysis and extraction',
      icon: FileText,
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Predictive Analytics',
      description: 'Statistical models for health outcome prediction',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const complianceFeatures = [
    'HIPAA Compliance & Data Security',
    'SOC 2 Type II Certification',
    'GDPR Compliance for International Use',
    'End-to-End Encryption',
    'Regular Security Audits',
    'Compliance Reporting Tools',
    'Data Retention Policies',
    'Access Control & Authentication'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Healthcare Analytics Platform - Zion Tech Group"
        description="Revolutionary AI-powered healthcare analytics platform for predictive diagnostics, patient monitoring, and clinical decision support. Transform healthcare delivery with cutting-edge technology."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Healthcare AI Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Healthcare Analytics
              <span className="block bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform healthcare delivery with our revolutionary AI-powered analytics platform. 
              Enable predictive diagnostics, real-time monitoring, and clinical decision support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105"
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Request Quote
              </Link>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Healthcare AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI, machine learning, and medical expertise 
              to deliver the most advanced healthcare analytics solution in the market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-pink-500 transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-pink-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Healthcare Delivery
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience unprecedented accuracy, efficiency, and patient outcomes 
              with our comprehensive healthcare AI platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg text-gray-200">{benefit}</p>
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform addresses the most critical healthcare challenges 
              with intelligent, data-driven solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${useCase.color} mb-4`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built on the latest AI and machine learning technologies to ensure accuracy, 
              reliability, and performance in healthcare applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${tech.color} mb-4`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Compliance & Security
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with healthcare-grade security and compliance to protect patient data 
              and meet regulatory requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-pink-500 transition-all duration-300"
              >
                <Shield className="w-8 h-8 text-pink-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan for your healthcare organization. All plans include 
              our core AI healthcare capabilities and compliance features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border-2 ${
                  plan.popular ? 'border-pink-500' : 'border-slate-600'
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-300">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.cta === 'Contact Sales' ? '/contact' : '/request-quote'}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
               Join the AI healthcare revolution. Contact us today to learn how our platform 
               can improve patient outcomes and transform your healthcare delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-200"
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Get Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-pink-400 mb-4" />
              <p className="text-white font-semibold">Phone</p>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-pink-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-pink-400 mb-4" />
              <p className="text-white font-semibold">Email</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-pink-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPinIcon className="w-8 h-8 text-pink-400 mb-4" />
              <p className="text-white font-semibold">Address</p>
              <p className="text-gray-300 text-center">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}