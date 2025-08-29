import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Users, Zap, Globe, Award, BarChart3, Shield, Eye, Clock, TrendingUp, CheckCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ITConsulting() {
  const features = [
    {
      icon: Brain,
      title: "Strategic IT Planning",
      description: "Comprehensive technology roadmaps aligned with business objectives and growth plans"
    },
    {
      icon: Target,
      title: "Technology Assessment",
      description: "In-depth analysis of current IT infrastructure and recommendations for improvement"
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Expert guidance on organizational change and technology adoption strategies"
    },
    {
      icon: Zap,
      title: "Process Optimization",
      description: "Streamline IT operations and workflows for maximum efficiency and productivity"
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "End-to-end guidance on modernizing your technology stack and business processes"
    },
    {
      icon: Award,
      title: "Best Practices",
      description: "Implementation of industry-leading IT frameworks and methodologies"
    }
  ];

  const benefits = [
    "Reduce IT costs by 25-40%",
    "Improve system reliability by 60%",
    "Accelerate project delivery by 50%",
    "Enhance security posture by 80%",
    "Increase team productivity by 35%",
    "Future-proof your technology investments"
  ];

  const consultingAreas = [
    {
      title: "IT Strategy & Architecture",
      description: "Develop comprehensive technology strategies and architectural roadmaps for business growth"
    },
    {
      title: "Infrastructure Optimization",
      description: "Modernize and optimize your IT infrastructure for performance, security, and scalability"
    },
    {
      title: "Security & Compliance",
      description: "Strengthen your security posture and ensure regulatory compliance across all systems"
    },
    {
      title: "Cloud Migration",
      description: "Expert guidance on cloud adoption, migration strategies, and hybrid cloud solutions"
    }
  ];

  const capabilities = [
    "Technology strategy and roadmap development",
    "IT infrastructure assessment and optimization",
    "Security and compliance consulting",
    "Cloud migration and transformation",
    "Digital transformation guidance",
    "Process improvement and automation",
    "Vendor selection and management",
    "Project management and implementation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="IT Consulting - Zion Tech Group"
        description="Expert IT consulting services to optimize your technology infrastructure, improve security, and drive digital transformation."
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 text-white text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Expert Technology Guidance
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT Consulting
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your technology landscape with expert IT consulting services. Our 
              experienced consultants help you optimize infrastructure, improve security, 
              and implement strategic technology solutions that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Get Consultation
              </button>
              <button className="px-8 py-4 border border-sky-400 text-sky-400 font-semibold rounded-lg hover:bg-sky-400 hover:text-slate-900 transition-all duration-300">
                Free Assessment
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
              Comprehensive Consulting Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our IT consulting services cover all aspects of technology strategy, 
              infrastructure optimization, and digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-sky-400 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-sky-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
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
              Proven Business Impact
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our consulting services deliver measurable results that directly impact 
              your business performance and technology ROI.
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
                <CheckCircle className="w-6 h-6 text-sky-400 flex-shrink-0" />
                <span className="text-slate-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Areas Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Core Consulting Areas
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Specialized expertise across key areas of IT consulting and technology strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultingAreas.map((area, index) => (
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
              Advanced Consulting Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Built with industry expertise and proven methodologies for successful outcomes.
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
                <div className="w-2 h-2 bg-sky-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT?
            </h2>
            <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations already achieving breakthrough results with expert IT consulting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-sky-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105">
                Start Free Assessment
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-sky-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}