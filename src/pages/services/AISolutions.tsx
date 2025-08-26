import React from 'react';
<<<<<<< HEAD
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Brain, Cpu, Database, Shield, Zap, TrendingUp, Users, Globe } from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/website-audit-and-enhancement-98df

const AISolutions: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
      icon: Brain,
      title: "Machine Learning Models",
      description: "Custom ML models tailored to your business needs and data"
    },
    {
      icon: Cpu,
      title: "AI Infrastructure",
      description: "Scalable AI infrastructure and deployment solutions"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Advanced analytics and insights powered by AI"
    },
    {
      icon: Shield,
      title: "AI Security",
      description: "Robust security measures for AI systems"
    }
  ];

  const benefits = [
    "Increased operational efficiency by 40%",
    "Reduced costs through automation",
    "Improved decision-making with data insights",
    "Enhanced customer experience",
    "Competitive advantage in the market"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="AI Solutions - Zion Tech Group"
        description="Transform your business with cutting-edge AI solutions. Machine learning, automation, and intelligent systems."
        keywords="AI solutions, machine learning, artificial intelligence, automation, data analytics"
        canonical="https://ziontechgroup.com/services/ai"
      />
=======
      title: "Machine Learning Solutions",
      description: "Custom ML models and algorithms tailored to your business needs",
      features: ["Predictive Analytics", "Pattern Recognition", "Automated Decision Making", "Real-time Learning"],
      icon: "🧠"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced text and speech processing capabilities",
      features: ["Chatbot Development", "Sentiment Analysis", "Document Processing", "Language Translation"],
      icon: "💬"
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis for automation and insights",
      features: ["Object Detection", "Facial Recognition", "Quality Control", "Process Automation"],
      icon: "👁️"
    },
    {
      title: "AI Consulting",
      description: "Strategic guidance for AI implementation and adoption",
      features: ["AI Strategy", "Use Case Identification", "Implementation Roadmap", "ROI Analysis"],
      icon: "🎯"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions — Zion Tech Group | Machine Learning & AI Services</title>
        <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge AI solutions. Machine learning, NLP, computer vision, and AI consulting services." />
        <meta property="og:title" content="AI Solutions — Zion Tech Group" />
        <meta property="og:description" content="Leading AI solutions including machine learning, NLP, computer vision, and strategic consulting." />
        <meta property="og:url" content="https://ziontechgroup.com/services/ai" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai" />
      </Helmet>
>>>>>>> origin/cursor/website-audit-and-enhancement-98df

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI Solutions for the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Future
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Leverage the power of artificial intelligence to transform your business operations, 
            enhance customer experiences, and drive innovation across all departments.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
              Get Started with AI
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to meet your business challenges and drive growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our AI Solutions?</h2>
              <p className="text-xl text-gray-600">
                Experience the transformative power of AI with our proven approach
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how AI can revolutionize your operations and create new opportunities for growth.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
=======
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven expertise and cutting-edge technology to drive your AI transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
                <p className="text-gray-300">Optimized algorithms and infrastructure for real-time performance</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Accurate Results</h3>
                <p className="text-gray-300">High-precision models trained on quality data for reliable outcomes</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security and compliance for your sensitive data</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI solutions can drive innovation and growth for your organization
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Start Your AI Journey
            </Link>
          </div>
        </section>
      </div>
    </>
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
  );
};

export default AISolutions;