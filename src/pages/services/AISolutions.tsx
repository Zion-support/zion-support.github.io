import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Brain, Cpu, Database, Shield, Zap, TrendingUp, Users, Globe } from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
=======
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a

const AISolutions: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
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
=======
import { Link } from 'react-router-dom';
import { Brain, Zap, Target, TrendingUp, Shield, Users, Globe, Cpu, FileText } from 'lucide-react';

const AISolutions: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: "AI Autonomous Business",
      description: "Transform your business operations with AI-powered autonomous systems that work 24/7 to optimize processes, reduce costs, and increase efficiency.",
      features: ["Process Automation", "Decision Intelligence", "Predictive Analytics", "Cost Optimization"],
      path: "/solutions/ai-autonomous-business"
    },
    {
      icon: Cpu,
      title: "AI Autonomous Research",
      description: "Accelerate research and development with AI systems that can analyze vast datasets, identify patterns, and generate insights autonomously.",
      features: ["Data Analysis", "Pattern Recognition", "Insight Generation", "Research Automation"],
      path: "/solutions/ai-autonomous-research"
    },
    {
      icon: Globe,
      title: "AI Autonomous Ecosystem",
      description: "Build interconnected AI systems that work together to create a comprehensive digital ecosystem for your organization.",
      features: ["System Integration", "Cross-platform Communication", "Unified Intelligence", "Scalable Architecture"],
      path: "/solutions/ai-autonomous-ecosystem"
    },
    {
      icon: Shield,
      title: "AI-Powered Security",
      description: "Protect your digital assets with advanced AI security systems that detect and respond to threats in real-time.",
      features: ["Threat Detection", "Real-time Response", "Behavioral Analysis", "Predictive Security"],
      path: "/solutions/ai-powered-security"
    },
    {
      icon: FileText,
      title: "AI Content Generation",
      description: "Create high-quality, engaging content at scale with AI systems that understand your brand voice and audience.",
      features: ["Content Creation", "Brand Voice Consistency", "SEO Optimization", "Multi-format Output"],
      path: "/solutions/ai-content-generation"
    },
    {
      icon: TrendingUp,
      title: "AI Business Intelligence",
      description: "Transform raw data into actionable insights with AI-powered business intelligence that helps you make better decisions.",
      features: ["Data Visualization", "Predictive Analytics", "Real-time Reporting", "Strategic Insights"],
      path: "/solutions/ai-business-intelligence"
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
    }
  ];

  const benefits = [
<<<<<<< HEAD
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
=======
      title: "Machine Learning",
      description: "Custom ML models and algorithms for your business needs",
      features: ["Predictive Analytics", "Pattern Recognition", "Data Modeling", "Model Training"],
      icon: "🤖"
    },
    {
      title: "Natural Language Processing",
      description: "AI-powered text and language understanding solutions",
      features: ["Text Analysis", "Sentiment Analysis", "Language Translation", "Chatbots"],
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
      icon: "💬"
    },
    {
      title: "Computer Vision",
<<<<<<< HEAD
      description: "Image and video analysis for automation and insights",
      features: ["Object Detection", "Facial Recognition", "Quality Control", "Process Automation"],
=======
      description: "Advanced image and video analysis capabilities",
      features: ["Object Detection", "Image Recognition", "Video Analytics", "Facial Recognition"],
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
      icon: "👁️"
    },
    {
      title: "AI Consulting",
      description: "Strategic guidance for AI implementation and adoption",
      features: ["AI Strategy", "Use Case Analysis", "Technology Selection", "Implementation Planning"],
      icon: "🎯"
    }
<<<<<<< HEAD
=======
  ];

  const aiTechnologies = [
    { name: "TensorFlow", icon: "🧠", description: "Open-source ML framework" },
    { name: "PyTorch", icon: "🔥", description: "Deep learning platform" },
    { name: "OpenAI", icon: "🌟", description: "Advanced language models" },
    { name: "Computer Vision", icon: "📷", description: "Image recognition APIs" }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions — Zion Tech Group | Machine Learning & AI Services</title>
        <meta name="description" content="Transform your business with Zion Tech Group's AI solutions. Machine learning, natural language processing, computer vision, and AI consulting services." />
        <meta property="og:title" content="AI Solutions — Zion Tech Group" />
        <meta property="og:description" content="Leading AI solutions including machine learning, natural language processing, computer vision, and AI consulting." />
        <meta property="og:url" content="https://ziontechgroup.com/services/ai-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-solutions" />
      </Helmet>
>>>>>>> origin/cursor/website-audit-and-enhancement-98df

<<<<<<< HEAD
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
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business. 
              Our cutting-edge AI solutions drive innovation and competitive advantage.
=======
    {
      icon: Zap,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and optimize workflows to boost productivity by up to 300%"
    },
    {
      icon: Target,
      title: "Better Decision Making",
      description: "Leverage AI insights to make data-driven decisions that improve business outcomes"
    },
    {
      icon: TrendingUp,
      title: "Cost Reduction",
      description: "Reduce operational costs through intelligent automation and process optimization"
    },
    {
      icon: Users,
      title: "Enhanced Customer Experience",
      description: "Provide personalized, intelligent interactions that improve customer satisfaction and loyalty"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> AI Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Leverage the power of artificial intelligence to automate operations, enhance decision-making, 
              and create intelligent systems that work for you 24/7.
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Explore AI Solutions
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
          </div>

<<<<<<< HEAD
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
=======
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From autonomous business systems to intelligent research assistants, we provide end-to-end AI solutions 
              that drive innovation and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our AI Solutions?</h2>
              <p className="text-xl text-gray-600">
                Experience the transformative power of AI with our proven approach
=======
        {/* AI Technologies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Technologies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge tools and frameworks for powerful AI solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiTechnologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-300">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive AI solutions to meet your business challenges
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
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
<<<<<<< HEAD
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="w-4 h-4 text-green-600" />
=======
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
                  </div>
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
<<<<<<< HEAD
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the transformative power of AI with solutions designed for the modern enterprise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
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

        {/* Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits of AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your business with intelligent automation and insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Increased Efficiency</h3>
                <p className="text-gray-300">Automate repetitive tasks and optimize processes</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Data-Driven Insights</h3>
                <p className="text-gray-300">Unlock valuable insights from your data</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Competitive Advantage</h3>
                <p className="text-gray-300">Stay ahead with innovative AI capabilities</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Embrace AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how AI can transform your business operations
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
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI solutions can help you achieve your business goals and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
  );
};

export default AISolutions;