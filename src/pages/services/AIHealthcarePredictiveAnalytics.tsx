import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Activity, 
  Shield, 
  Clock, 
  Zap, 
  Search, 
  Eye,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Users,
  BarChart3,
  Lock,
  Heart,
  Brain,
  Microscope,
  TrendingUp
} from 'lucide-react';

export default function AIHealthcarePredictiveAnalytics() {
  const features = [
    {
      icon: Activity,
      title: "Predictive Diagnostics",
      description: "AI-powered early detection and prediction of diseases with high accuracy rates"
    },
    {
      icon: Shield,
      title: "Patient Monitoring",
      description: "Real-time patient monitoring with predictive alerts for critical health events"
    },
    {
      icon: Clock,
      title: "Population Health Analytics",
      description: "Comprehensive analysis of population health trends and risk factors"
    },
    {
      icon: Zap,
      title: "Treatment Optimization",
      description: "AI-driven treatment recommendations based on patient data and outcomes"
    },
    {
      icon: Search,
      title: "Risk Stratification",
      description: "Advanced risk assessment and patient stratification for personalized care"
    },
    {
      icon: Eye,
      title: "Data Integration",
      description: "Seamless integration with existing healthcare systems and data sources"
    }
  ];

  const servicePackages = [
    {
      name: "Predictive Diagnostics Platform",
      price: "From $2,999/month",
      features: [
        "AI disease prediction models",
        "Early detection algorithms",
        "Risk assessment tools",
        "Clinical decision support",
        "Real-time monitoring",
        "24/7 technical support"
      ]
    },
    {
      name: "Patient Monitoring Suite",
      price: "From $1,999/month",
      features: [
        "Continuous patient monitoring",
        "Predictive alert system",
        "Vital signs tracking",
        "Remote patient management",
        "Mobile app access",
        "Integration with EHR systems"
      ]
    },
    {
      name: "Population Health Analytics",
      price: "From $3,999/month",
      features: [
        "Population health insights",
        "Trend analysis and forecasting",
        "Risk factor identification",
        "Public health reporting",
        "Custom dashboards",
        "Data visualization tools"
      ]
    },
    {
      name: "Treatment Optimization Engine",
      price: "From $4,999/month",
      features: [
        "AI treatment recommendations",
        "Outcome prediction models",
        "Personalized care plans",
        "Clinical trial matching",
        "Drug interaction analysis",
        "Treatment effectiveness tracking"
      ]
    }
  ];

  const supportedDataTypes = [
    "Electronic Health Records (EHR)",
    "Medical Imaging (X-rays, MRIs, CT scans)",
    "Laboratory Results",
    "Vital Signs",
    "Genomic Data",
    "Wearable Device Data",
    "Patient Surveys",
    "Claims Data"
  ];

  const benefits = [
    "Improve diagnostic accuracy by 40%",
    "Reduce hospital readmissions by 30%",
    "Enable early disease detection",
    "Optimize treatment outcomes",
    "Reduce healthcare costs",
    "Enhance patient engagement"
  ];

  const technologies = [
    "Machine Learning Algorithms",
    "Deep Neural Networks",
    "Natural Language Processing",
    "Computer Vision",
    "Predictive Modeling",
    "Real-time Analytics"
  ];

  return (
    <>
      <SEO 
        title="AI Healthcare Predictive Analytics - Zion Tech Group"
        description="Transform healthcare delivery with AI-powered predictive analytics, early disease detection, and personalized treatment optimization. Improve patient outcomes and reduce costs."
        canonical="/services/ai-healthcare-predictive-analytics"
        url="https://ziontechgroup.com/services/ai-healthcare-predictive-analytics"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI Healthcare Predictive Analytics
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize healthcare delivery with AI-powered predictive analytics, 
                early disease detection, and personalized treatment optimization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Get Started Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  View Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Advanced Healthcare AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform provides comprehensive healthcare analytics with 
                predictive capabilities for improved patient outcomes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-20 px-6 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Comprehensive Healthcare Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect AI healthcare solution for your organization 
                with scalable pricing and advanced features
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicePackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">{pkg.name}</h3>
                  <div className="text-3xl font-bold mb-6 text-cyan-400">{pkg.price}</div>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Data Types */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Comprehensive Data Integration
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform integrates with all major healthcare data sources 
                for comprehensive predictive analytics
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportedDataTypes.map((dataType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center"
                >
                  <BarChart3 className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <p className="text-white font-medium">{dataType}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Transform Healthcare Delivery
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience significant improvements in patient outcomes, 
                operational efficiency, and cost-effectiveness
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white text-lg font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Cutting-Edge AI Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with the latest AI and machine learning technologies for 
                maximum accuracy and reliability in healthcare
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center"
                >
                  <Zap className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <p className="text-white font-medium">{tech}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Ready to Transform Healthcare?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-cyan-100 mb-8"
            >
              Join leading healthcare organizations that have already 
              revolutionized patient care with AI predictive analytics
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to discuss how AI Healthcare Predictive Analytics can transform 
                your healthcare delivery? Contact our experts today.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Website</h3>
                <p className="text-gray-300">https://ziontechgroup.com</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-12"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">Address</h3>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}