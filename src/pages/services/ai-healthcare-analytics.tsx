import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Activity, 
  TrendingUp, 
  Zap, 
  BarChart3, 
  Users, 
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Stethoscope,
  Filter,
  Clock,
  Award,
  Database
} from 'lucide-react';

export default function AIHealthcareAnalytics() {
  const features = [
    {
      icon: Brain,
      title: "Predictive Patient Analytics",
      description: "AI-powered algorithms that predict patient outcomes and identify at-risk individuals."
    },
    {
      icon: Activity,
      title: "Real-time Health Monitoring",
      description: "Continuous monitoring of patient vital signs with intelligent alerting systems."
    },
    {
      icon: TrendingUp,
      title: "Treatment Optimization",
      description: "Data-driven insights that optimize treatment plans and improve patient outcomes."
    },
    {
      icon: Zap,
      title: "Automated Diagnosis Support",
      description: "AI-assisted diagnostic tools that help healthcare providers make better decisions."
    },
    {
      icon: Shield,
      title: "Patient Data Security",
      description: "HIPAA-compliant data handling with advanced security and privacy protection."
    },
    {
      icon: BarChart3,
      title: "Population Health Analytics",
      description: "Comprehensive analysis of population health trends and disease patterns."
    }
  ];

  const benefits = [
    "Improve patient outcomes by 25-40% with predictive analytics",
    "Reduce hospital readmissions by 20-35%",
    "Cut healthcare costs by 15-30% through optimization",
    "Enhance diagnostic accuracy by 30-50%",
    "Streamline clinical workflows and reduce administrative burden",
    "Enable proactive and preventive healthcare approaches"
  ];

  const useCases = [
    {
      industry: "Hospitals",
      applications: ["Patient monitoring", "Readmission prevention", "Resource optimization", "Quality improvement"]
    },
    {
      industry: "Primary Care",
      applications: ["Preventive care", "Chronic disease management", "Risk assessment", "Patient engagement"]
    },
    {
      industry: "Specialty Clinics",
      applications: ["Treatment planning", "Outcome prediction", "Clinical research", "Patient stratification"]
    },
    {
      industry: "Health Systems",
      applications: ["Population health", "Epidemiology", "Resource allocation", "Performance metrics"]
    }
  ];

  const healthcareServices = [
    {
      name: "Clinical Analytics",
      icon: Stethoscope,
      description: "AI-powered clinical decision support and outcome prediction"
    },
    {
      name: "Population Health",
      icon: Users,
      description: "Comprehensive population health management and analytics"
    },
    {
      name: "Predictive Medicine",
      icon: Brain,
      description: "Advanced predictive models for disease prevention and early intervention"
    },
    {
      name: "Quality Metrics",
      icon: BarChart3,
      description: "Real-time quality monitoring and performance improvement"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-500/30 rounded-full px-4 py-2 mb-6">
              <Heart className="w-5 h-5 text-pink-400" />
              <span className="text-pink-400 text-sm font-medium">AI Healthcare Analytics</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Healthcare with
              <span className="block bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                AI-Powered Analytics
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize patient care with intelligent analytics that predict outcomes, 
              optimize treatments, and improve healthcare delivery across all settings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-500 hover:to-red-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-pink-500/30 text-pink-400 hover:bg-pink-500/10 font-semibold rounded-lg transition-all duration-300">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Healthcare Analytics Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our AI-powered healthcare platform combines cutting-edge technology with clinical expertise 
              to deliver exceptional patient outcomes and operational efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Healthcare Analytics Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Streamline your healthcare operations with intelligent analytics that handles 
              every aspect of modern healthcare delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthcareServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-pink-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Healthcare Improvements
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See real improvements in your healthcare delivery with AI-powered analytics 
              that continuously optimizes and improves patient outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Healthcare Settings</h3>
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4"
                >
                  <h4 className="text-lg font-semibold text-pink-400 mb-3">{useCase.industry}</h4>
                  <ul className="space-y-2">
                    {useCase.applications.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-center space-x-2 text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm">{app}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
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
            <p className="text-xl text-gray-400 mb-8">
              Join hundreds of healthcare organizations already using AI analytics to improve patient outcomes, 
              reduce costs, and enhance operational efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-500 hover:to-red-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-pink-500/30 text-pink-400 hover:bg-pink-500/10 font-semibold rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}