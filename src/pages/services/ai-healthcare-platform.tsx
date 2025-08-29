import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Activity, 
  Users, 
<<<<<<< HEAD
  Target, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Award, 
  Lightbulb, 
  BarChart3, 
  Smartphone, 
  Monitor, 
  AlertTriangle, 
  FileText
=======
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Stethoscope,
  Microscope,
  Activity,
  Database,
  Lock,
  Globe,
  Smartphone,
  Monitor,
  BarChart3,
  FileText,
  MessageCircle,
  Clock,
  Building,
  Flask
>>>>>>> origin/main
} from 'lucide-react';

const AIHealthcarePlatform: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
      icon: Heart,
      title: 'AI-Powered Diagnostics',
      description: 'Advanced machine learning algorithms for accurate disease detection and diagnosis'
    },
    {
      icon: Shield,
      title: 'Patient Monitoring',
      description: 'Real-time health monitoring with predictive analytics and early warning systems'
    },
    {
      icon: Activity,
      title: 'HIPAA Compliant',
      description: 'Enterprise-grade security with full HIPAA compliance and data protection'
    },
    {
      icon: Zap,
      title: 'Real-time Analytics',
      description: 'Instant insights and actionable intelligence for healthcare providers'
    },
    {
      icon: Users,
      title: 'Multi-user Access',
      description: 'Role-based access control for doctors, nurses, and administrators'
    }
  ];

  const solutions = [
    {
      icon: Lightbulb,
      title: 'Clinical Decision Support',
      description: 'AI-powered recommendations for treatment plans and medication management'
    },
    {
      icon: Target,
      title: 'Medical Imaging Analysis',
      description: 'Computer vision for X-rays, MRIs, and CT scans with 99.9% accuracy'
    },
    {
      icon: Award,
      title: 'Drug Interaction Checker',
      description: 'Real-time medication interaction analysis and dosage optimization'
    },
    {
      icon: Activity,
      title: 'Vital Signs Monitoring',
      description: 'Continuous monitoring of heart rate, blood pressure, and oxygen levels'
=======
      icon: Brain,
      title: "AI-Powered Diagnostics",
      description: "Advanced machine learning algorithms for accurate disease detection and diagnosis",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Patient Monitoring",
      description: "Real-time health monitoring with predictive analytics and early warning systems",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "HIPAA-compliant security with end-to-end encryption and privacy protection",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamlined healthcare processes with intelligent automation and optimization",
      color: "from-purple-500 to-indigo-500"
>>>>>>> origin/main
    }
  ];

  const benefits = [
    "Improved diagnostic accuracy by up to 95%",
    "Reduced patient wait times by 60%",
    "Enhanced patient outcomes and satisfaction",
    "Cost savings of 30-40% on healthcare operations",
    "Real-time monitoring and early intervention",
    "Compliance with healthcare regulations"
  ];

  const useCases = [
    {
      title: "Hospital Management",
      description: "Comprehensive hospital information systems with AI-powered insights",
      icon: Building
    },
    {
      title: "Telemedicine",
      description: "Virtual healthcare delivery with AI-assisted consultations",
      icon: Monitor
    },
    {
      title: "Medical Imaging",
      description: "AI-enhanced radiology and diagnostic imaging analysis",
      icon: Microscope
    },
    {
      title: "Drug Discovery",
      description: "Accelerated pharmaceutical research and development",
      icon: Flask
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Healthcare Platform - Zion Tech Group"
        description="Revolutionary AI-powered healthcare solutions for modern medical facilities. Advanced diagnostics, patient monitoring, and automated workflows."
        keywords="AI healthcare, medical AI, healthcare platform, medical diagnostics, patient monitoring, healthcare automation"
        ogType="website"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Healthcare Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionizing healthcare delivery with cutting-edge artificial intelligence. 
              From advanced diagnostics to automated patient care, we're building the future of medicine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600">
                <Stethoscope className="h-5 w-5 mr-2" />
                Schedule Demo
              </button>
              <button className="btn-futuristic-outline">
                <FileText className="h-5 w-5 mr-2" />
                Download Brochure
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Healthcare Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge technology with medical expertise 
              to deliver unprecedented healthcare capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-opacity-20 hover:bg-opacity-20 transition-all duration-300 h-full`}>
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Transform Your Healthcare Delivery
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the future of healthcare with our AI-powered platform that delivers 
                measurable improvements in patient care and operational efficiency.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="p-8 bg-slate-800/50 border border-cyan-400/20 rounded-xl">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Performance Metrics</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                      <div className="text-gray-400">Accuracy Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">85%</div>
                      <div className="text-gray-400">Error Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">60%</div>
                      <div className="text-gray-400">Outcome Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">30%</div>
                      <div className="text-gray-400">Cost Reduction</div>
                    </div>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Healthcare Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience measurable improvements in efficiency, accuracy, and patient outcomes 
              with our AI-powered healthcare platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Healthcare Solutions for Every Need
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From small clinics to large hospital networks, our platform scales 
              to meet your healthcare delivery requirements.
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
                className="group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 hover:border-slate-500 transition-all duration-300 h-full">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
                    <useCase.icon className="h-6 w-6 text-white" />
>>>>>>> origin/main
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Join the healthcare revolution with AI-powered solutions that improve 
              patient care and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-white text-red-600 hover:bg-gray-100">
                <MessageCircle className="h-5 w-5 mr-2" />
                Contact Sales
              </button>
              <button className="btn-futuristic-outline border-white text-white hover:bg-white hover:text-red-600">
                <Clock className="h-5 w-5 mr-2" />
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcarePlatform;