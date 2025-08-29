import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Users, Zap, Globe, Award, BarChart3, Brain, Eye, Clock, TrendingUp, CheckCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function DigitalTransformation() {
  const features = [
    {
      icon: Rocket,
      title: "Strategic Planning",
      description: "Comprehensive digital transformation roadmap aligned with business objectives"
    },
    {
      icon: Target,
      title: "Process Optimization",
      description: "AI-powered workflow automation and business process reengineering"
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Employee training and organizational change strategies for successful adoption"
    },
    {
      icon: Zap,
      title: "Technology Integration",
      description: "Seamless integration of new technologies with existing systems"
    },
    {
      icon: Globe,
      title: "Digital Culture",
      description: "Building a digital-first mindset across the organization"
    },
    {
      icon: Award,
      title: "Performance Metrics",
      description: "KPIs and analytics to measure transformation success and ROI"
    }
  ];

  const benefits = [
    "Increase operational efficiency by 50%",
    "Reduce operational costs by 30%",
    "Improve customer satisfaction by 40%",
    "Accelerate time-to-market by 60%",
    "Enable data-driven decision making",
    "Create competitive advantages"
  ];

  const transformationAreas = [
    {
      title: "Business Process Automation",
      description: "Streamline operations with intelligent automation and workflow optimization"
    },
    {
      title: "Customer Experience",
      description: "Digital-first customer journeys with omnichannel engagement strategies"
    },
    {
      title: "Data & Analytics",
      description: "Transform data into actionable insights for strategic decision making"
    },
    {
      title: "Cloud Migration",
      description: "Modernize infrastructure with scalable cloud solutions and DevOps practices"
    }
  ];

  const capabilities = [
    "Digital maturity assessment and gap analysis",
    "Strategic roadmap development and execution",
    "Change management and organizational transformation",
    "Technology architecture and integration",
    "Process automation and optimization",
    "Data strategy and analytics implementation",
    "Cloud migration and modernization",
    "Digital culture and skills development"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Digital Transformation - Zion Tech Group"
        description="Transform your business with comprehensive digital transformation strategies, process optimization, and technology integration."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Business Transformation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital Transformation
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your business for the digital age with comprehensive strategies, 
              process optimization, and technology integration that drive growth and 
              competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Transformation
              </button>
              <button className="px-8 py-4 border border-violet-400 text-violet-400 font-semibold rounded-lg hover:bg-violet-400 hover:text-slate-900 transition-all duration-300">
                Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Transformation Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our digital transformation approach covers all aspects of business 
              modernization with proven methodologies and expert guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-violet-400 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our digital transformation initiatives deliver quantifiable results that 
              directly impact your bottom line and competitive position.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-violet-400 flex-shrink-0" />
                <span className="text-slate-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Areas Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Key Transformation Areas
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive coverage across all critical areas of digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformationAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                <p className="text-slate-300">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Transformation Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Built with enterprise-grade methodologies and proven transformation frameworks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-violet-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations already achieving breakthrough results with digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-violet-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105">
                Start Free Assessment
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-violet-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
