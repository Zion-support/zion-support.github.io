import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Stethoscope, 
  Brain, 
  Heart, 
  Eye, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  TrendingUp,
  Target,
  Cpu,
  Database,
  Network,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  ArrowRight,
  Leaf,
  Activity,
  Smartphone,
  Camera,
  Microscope,
  Pill,
  UserCheck,
  FileText,
  AlertTriangle,
  Award
} from 'lucide-react';

export default function AIHealthcareDiagnosticsPlatform() {
  const features = [
    "AI-powered medical image analysis (X-ray, MRI, CT, ultrasound)",
    "Predictive disease risk assessment and early detection",
    "Natural language processing for medical report generation",
    "Real-time patient monitoring and vital sign analysis",
    "Drug interaction checking and medication optimization",
    "Telemedicine integration with AI diagnostic support",
    "Medical record analysis and pattern recognition",
    "Clinical decision support and treatment recommendations",
    "Population health analytics and disease outbreak prediction",
    "HIPAA-compliant secure data handling and privacy protection"
  ];

  const benefits = [
    "Improve diagnostic accuracy by 25-40% with AI assistance",
    "Reduce diagnostic time by 60-80% for faster treatment",
    "Lower healthcare costs by 20-35% through early detection",
    "Enhance patient outcomes with personalized treatment plans",
    "Reduce medical errors by 45-65% with AI validation",
    "Increase radiologist productivity by 50-70%",
    "Enable 24/7 diagnostic support and monitoring",
    "Improve rural healthcare access through telemedicine",
    "Reduce unnecessary tests and procedures by 30-45%",
    "Provide evidence-based treatment recommendations"
  ];

  const useCases = [
    "Radiology and medical imaging analysis",
    "Cardiology and heart disease detection",
    "Oncology and cancer screening",
    "Neurology and brain disorder diagnosis",
    "Pathology and laboratory testing",
    "Emergency medicine and triage",
    "Primary care and preventive medicine",
    "Pediatrics and child health",
    "Geriatrics and elderly care",
    "Mental health and psychiatric assessment"
  ];

  const technologies = [
    "Deep Learning & Convolutional Neural Networks",
    "Computer Vision for Medical Imaging",
    "Natural Language Processing for Medical Text",
    "Predictive Analytics & Machine Learning",
    "IoT Medical Devices & Wearables",
    "Cloud-native Healthcare Architecture",
    "Blockchain for Medical Data Security",
    "Real-time Data Processing & Analytics",
    "Mobile Health Applications & APIs",
    "HIPAA & GDPR Compliance Systems"
  ];

  const diagnosticModules = [
    {
      name: "Radiology AI",
      description: "AI-powered analysis of X-rays, MRIs, CT scans, and ultrasounds with 99.2% accuracy",
      price: "$8,500/month",
      features: ["Chest X-ray analysis", "Brain MRI interpretation", "Lung CT screening", "Breast ultrasound"]
    },
    {
      name: "Cardiology AI",
      description: "Advanced heart disease detection and cardiovascular risk assessment",
      price: "$6,500/month",
      features: ["ECG analysis", "Echocardiogram interpretation", "Risk prediction", "Treatment guidance"]
    },
    {
      name: "Pathology AI",
      description: "Digital pathology and laboratory test result analysis",
      price: "$5,500/month",
      features: ["Blood test analysis", "Tissue sample analysis", "Cancer detection", "Report generation"]
    },
    {
      name: "Clinical Decision Support",
      description: "AI-powered treatment recommendations and clinical guidelines",
      price: "$4,500/month",
      features: ["Treatment protocols", "Drug interactions", "Clinical guidelines", "Risk assessment"]
    }
  ];

  const complianceFeatures = [
    "HIPAA-compliant data encryption and security",
    "SOC 2 Type II certification for data protection",
    "GDPR compliance for international healthcare",
    "FDA regulatory compliance for medical devices",
    "End-to-end data privacy and audit trails",
    "Secure cloud infrastructure with encryption",
    "Regular security audits and penetration testing",
    "Compliance monitoring and reporting tools"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>AI Healthcare Diagnostics Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered healthcare diagnostics platform. Improve diagnostic accuracy by 25-40%, reduce diagnostic time by 60-80%, and enhance patient outcomes with personalized treatment plans." />
        <meta name="keywords" content="AI healthcare, medical diagnostics, medical imaging, radiology AI, cardiology AI, pathology AI, clinical decision support, telemedicine" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-healthcare-diagnostics-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Healthcare Diagnostics Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform healthcare delivery with AI-powered diagnostic solutions. 
              Improve accuracy by 25-40%, reduce diagnostic time by 60-80%, and 
              enhance patient outcomes with personalized treatment plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Get Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ArrowRight className="h-5 w-5" />
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30"
            >
              <Target className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">25-40%</div>
              <div className="text-gray-300">Accuracy Improvement</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30"
            >
              <Zap className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">60-80%</div>
              <div className="text-gray-300">Time Reduction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30"
            >
              <DollarSign className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">20-35%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl border border-red-500/30"
            >
              <Shield className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">45-65%</div>
              <div className="text-gray-300">Error Reduction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Healthcare AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge medical technology with 
              artificial intelligence to deliver unprecedented diagnostic capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300"
              >
                <CheckCircle className="h-8 w-8 text-blue-400 mb-4" />
                <p className="text-white text-lg">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Healthcare Delivery
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented diagnostic accuracy, efficiency, and 
              patient care with our AI-powered healthcare platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-xl border border-slate-500/30"
              >
                <Star className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                <p className="text-gray-200 text-lg">{benefit}</p>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Medical Applications & Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform serves diverse medical specialties with specialized 
              AI solutions for every diagnostic challenge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <Brain className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">{useCase}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Medical AI Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with the latest AI, medical imaging, and healthcare 
              technologies for maximum accuracy and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-xl border border-slate-500/30"
              >
                <Cpu className="h-8 w-8 text-blue-400 mb-4" />
                <p className="text-gray-200 text-lg">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic Modules Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Specialized Diagnostic AI Modules
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the diagnostic modules you need with flexible pricing and 
              seamless integration capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diagnosticModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border border-slate-600 hover:border-blue-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{module.name}</h3>
                <p className="text-gray-300 mb-6">{module.description}</p>
                <div className="text-3xl font-bold text-blue-400 mb-6">{module.price}</div>
                <ul className="space-y-3 mb-8">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Compliance & Security
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with enterprise-grade security and compliance to meet 
              the highest healthcare industry standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-xl border border-slate-500/30"
              >
                <Shield className="h-8 w-8 text-green-400 mb-4" />
                <p className="text-gray-200 text-lg">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Healthcare AI Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your healthcare facility's needs with 
              flexible pricing and comprehensive support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border border-slate-600 hover:border-blue-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Basic Healthcare</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">
                $15,000<span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                  Up to 3 diagnostic modules
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                  Basic AI diagnostics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                  Standard analytics dashboard
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                  Email support
                </li>
              </ul>
              <button className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                Get Started
              </button>
            </motion.div>

            {/* Professional Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl border-2 border-blue-400 transform scale-105"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional Healthcare</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $45,000<span className="text-lg text-blue-100">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-blue-300 mr-3" />
                  Up to 8 diagnostic modules
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-blue-300 mr-3" />
                  Advanced AI diagnostics
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-blue-300 mr-3" />
                  Predictive analytics
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-blue-300 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-blue-300 mr-3" />
                  Custom integrations
                </li>
              </ul>
              <button className="w-full py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border border-slate-600 hover:border-purple-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Healthcare</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">
                Custom<span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                  All diagnostic modules
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                  Full AI autonomy
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                  Custom AI models
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                  White-label solution
                </li>
              </ul>
              <button className="w-full py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors">
                Contact Sales
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our healthcare AI experts for a personalized 
              consultation and demo of our diagnostic platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Phone</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Address</h3>
                  <p className="text-gray-300">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-500 rounded-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Business Hours</h3>
                  <p className="text-gray-300">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl border border-slate-500/30"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Get Free Consultation</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Healthcare Facility Name"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                />
                <textarea
                  placeholder="Tell us about your healthcare AI needs"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                >
                  Request Free Consultation
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}