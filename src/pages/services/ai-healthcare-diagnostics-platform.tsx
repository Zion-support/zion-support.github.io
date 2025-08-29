import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  Activity, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Target,
  Zap,
  Eye,
  Stethoscope,
  Microscope,
  Pill,
  Syringe
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIHealthcareDiagnosticsPlatform() {
  const features = [
    {
      title: "AI-Powered Diagnosis",
      description: "Advanced machine learning algorithms for accurate medical diagnosis",
      icon: Brain,
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Medical Image Analysis",
      description: "Deep learning for X-rays, MRIs, CT scans, and pathology images",
      icon: Eye,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Predictive Analytics",
      description: "Early disease detection and risk assessment using patient data",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Clinical Decision Support",
      description: "AI-assisted treatment recommendations and care planning",
      icon: Stethoscope,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Patient Monitoring",
      description: "Real-time health monitoring and alert systems",
      icon: Activity,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Drug Discovery Support",
      description: "AI-powered pharmaceutical research and development",
      icon: Pill,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const benefits = [
    "Improved diagnostic accuracy and early detection",
    "Reduced healthcare costs and resource utilization",
    "Enhanced patient outcomes and survival rates",
    "Streamlined clinical workflows and efficiency",
    "Personalized medicine and treatment plans",
    "24/7 diagnostic support and monitoring"
  ];

  const useCases = [
    {
      title: "Radiology",
      description: "AI-powered image analysis for X-rays, MRIs, and CT scans",
      icon: Eye
    },
    {
      title: "Pathology",
      description: "Digital pathology and tissue analysis",
      icon: Microscope
    },
    {
      title: "Cardiology",
      description: "Heart disease detection and monitoring",
      icon: Heart
    },
    {
      title: "Oncology",
      description: "Cancer detection and treatment planning",
      icon: Target
    }
  ];

  const technologies = [
    "Deep Learning & Neural Networks",
    "Computer Vision & Image Processing",
    "Natural Language Processing",
    "Predictive Analytics & ML",
    "Cloud Computing & Security",
    "IoT & Wearable Integration"
  ];

  return (
    <>
      <SEO 
        title="AI Healthcare Diagnostics Platform | Zion Tech Group"
        description="Revolutionary AI-powered medical diagnostics platform for accurate disease detection, medical image analysis, and clinical decision support."
        keywords="ai healthcare, medical diagnostics, medical ai, disease detection, medical imaging, clinical decision support, zion tech group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-400 to-red-500 text-white text-sm font-medium mb-6">
                <Heart className="w-4 h-4 mr-2" />
                AI Healthcare Diagnostics
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Revolutionize
                <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent"> Healthcare</span>
                with AI
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform medical diagnostics with our AI-powered platform. From image analysis to predictive analytics, 
                deliver accurate, timely, and personalized healthcare solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-400 to-red-500 text-white font-semibold rounded-lg hover:from-pink-500 hover:to-red-600 transition-all duration-200 transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-lg hover:bg-pink-400 hover:text-white transition-all duration-200"
                >
                  Schedule Demo
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
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Healthcare AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge capabilities designed for modern medical diagnostics
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-pink-400 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
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
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI Healthcare Diagnostics?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover the advantages of intelligent medical technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(3).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
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
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Healthcare Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Versatile AI solutions for diverse medical specialties
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 text-center hover:border-pink-400 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cutting-Edge Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Built with the latest AI and healthcare innovations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl border border-slate-500 text-center hover:border-pink-400 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{tech}</h3>
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
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's create AI-powered diagnostic solutions that save lives
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-400 to-red-500 text-white font-semibold rounded-lg hover:from-pink-500 hover:to-red-600 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-lg hover:bg-pink-400 hover:text-white transition-all duration-200"
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}