import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Zap, Target, Users, Globe, Shield, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Brain, 
  Users, 
  BarChart3, 
  Shield, 
  Zap, 
  Cloud, 
  Database,
  ArrowRight,
  CheckCircle,
  Play,
  Target,
  TrendingUp,
  Globe,
  Cpu
} from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7

export default function DigitalTransformation() {
  const transformationAreas = [
    {
<<<<<<< HEAD
      icon: Users,
      title: "Customer Experience",
      description: "Transform customer interactions with AI-powered personalization and omnichannel engagement."
    },
    {
      icon: Target,
      title: "Business Processes",
      description: "Automate and optimize core business processes for maximum efficiency and accuracy."
    },
    {
      icon: Globe,
      title: "Digital Infrastructure",
      description: "Modernize your technology stack with cloud-native solutions and scalable architecture."
    },
    {
      icon: Shield,
      title: "Data & Analytics",
      description: "Harness the power of data with advanced analytics and AI-driven insights."
    },
    {
      icon: TrendingUp,
      title: "Innovation Culture",
      description: "Foster a culture of continuous innovation and digital-first thinking."
    },
    {
      icon: Zap,
      title: "Agile Operations",
      description: "Implement agile methodologies for faster delivery and better responsiveness."
=======
      title: "Business Process Automation",
      description: "Streamline operations with intelligent automation solutions",
      features: [
        "Workflow automation and optimization",
        "Document processing and management",
        "Customer service automation",
        "Supply chain optimization"
      ],
      icon: Zap,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Analytics & Intelligence",
      description: "Transform data into actionable business insights",
      features: [
        "Real-time data analytics",
        "Predictive modeling and forecasting",
        "Business intelligence dashboards",
        "Data visualization and reporting"
      ],
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cloud Migration & Infrastructure",
      description: "Modernize your IT infrastructure for scalability and efficiency",
      features: [
        "Legacy system modernization",
        "Cloud-native application development",
        "Microservices architecture",
        "Container orchestration"
      ],
      icon: Cloud,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Customer Experience Enhancement",
      description: "Create seamless, personalized customer journeys",
      features: [
        "Omnichannel customer engagement",
        "Personalization and recommendation engines",
        "Customer journey mapping",
        "Feedback and sentiment analysis"
      ],
      icon: Users,
      color: "from-orange-500 to-red-500"
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
    }
  ];

  const benefits = [
<<<<<<< HEAD
    "Increased operational efficiency by 40-60%",
    "Enhanced customer satisfaction and retention",
    "Reduced operational costs through automation",
    "Faster time-to-market for new products",
    "Improved decision-making with data insights",
    "Competitive advantage in digital markets"
  ];

  const phases = [
    {
      phase: "01",
      title: "Assessment & Strategy",
      description: "Evaluate current state and develop comprehensive transformation roadmap"
    },
    {
      phase: "02",
      title: "Foundation & Infrastructure",
      description: "Build modern digital infrastructure and core capabilities"
    },
    {
      phase: "03",
      title: "Process Transformation",
      description: "Redesign and automate key business processes"
    },
    {
      phase: "04",
      title: "Optimization & Scale",
      description: "Continuously improve and scale successful initiatives"
    }
=======
    {
      metric: "40-60%",
      description: "Cost reduction through process optimization",
      icon: TrendingUp
    },
    {
      metric: "3-5x",
      description: "Faster time to market for new products",
      icon: Rocket
    },
    {
      metric: "80%",
      description: "Improvement in operational efficiency",
      icon: Zap
    },
    {
      metric: "99.9%",
      description: "System uptime and reliability",
      icon: Shield
    }
  ];

  const industries = [
    "Healthcare", "Financial Services", "Manufacturing", "Retail", 
    "Education", "Government", "Transportation", "Energy"
  ];

  const technologies = [
    "AI & Machine Learning", "Cloud Computing", "IoT", "Blockchain",
    "Big Data Analytics", "Robotic Process Automation", "Edge Computing"
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
import { Link } from 'react-router-dom';
import { Brain, Zap, Users, Target, Shield, Cpu, Globe, Rocket, Star, ArrowRight, CheckCircle, Play, BookOpen, Code, Database, Cloud, Lock, BarChart3, Settings, Monitor, Building } from 'lucide-react';

export default function DigitalTransformation() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Transformation',
      description: 'Leverage artificial intelligence to automate processes and gain competitive advantages'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless transition to cloud infrastructure for scalability and cost optimization'
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Comprehensive support for organizational change and digital adoption'
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Data-driven digital strategy aligned with business objectives'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with built-in compliance monitoring'
    },
    {
      icon: Cpu,
      title: 'Legacy Modernization',
      description: 'Transform outdated systems into modern, efficient digital solutions'
    }
  ];

  const transformationAreas = [
    {
      title: 'Process Automation',
      description: 'Streamline workflows and eliminate manual processes with intelligent automation',
      icon: Settings
    },
    {
      title: 'Data & Analytics',
      description: 'Transform data into actionable insights for better decision-making',
      icon: BarChart3
    },
    {
      title: 'Customer Experience',
      description: 'Create seamless, personalized customer journeys across all touchpoints',
      icon: Users
    },
    {
      title: 'Employee Productivity',
      description: 'Empower employees with digital tools and collaborative platforms',
      icon: Rocket
    }
  ];

  const benefits = [
    'Increase operational efficiency by 40-60%',
    'Reduce operational costs by 30-50%',
    'Improve customer satisfaction by 35%',
    'Accelerate time to market by 50%',
    'Enable data-driven decision making',
    'Create competitive advantages in digital markets'
>>>>>>> origin/cursor/website-audit-and-enhancement-77ac
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full">
                <Zap className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Digital Transformation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business for the digital age with comprehensive modernization strategies and cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Transformation
              </button>
              <button className="px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
                Get Assessment
=======
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Rocket className="w-8 h-8 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Digital Transformation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Transform Your Business
              <br />
              <span className="text-white">for the Digital Age</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Navigate the digital revolution with our comprehensive transformation services. 
              From strategy to implementation, we help you thrive in the digital economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                <Play className="w-5 h-5 inline mr-2" />
                Watch Transformation Story
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">
                <BookOpen className="w-5 h-5 inline mr-2" />
                Transformation Guide
>>>>>>> origin/cursor/website-audit-and-enhancement-77ac
              </button>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Transformation Areas Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Transformation Areas</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital transformation covering all aspects of your business operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformationAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg w-fit mb-4">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-gray-300">{area.description}</p>
              </motion.div>
=======
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <Rocket className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Digital Transformation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Accelerate your business evolution with cutting-edge digital technologies, 
            intelligent automation, and data-driven insights that drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Start Transformation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our digital transformation solutions deliver quantifiable results 
              that directly impact your bottom line.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">{benefit.metric}</div>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
            ))}
=======
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Transformation Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              End-to-end digital transformation solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transformation Areas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Transformation Areas
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Focus on the areas that matter most for your digital success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformationAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                      <p className="text-gray-400">{area.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
>>>>>>> origin/cursor/website-audit-and-enhancement-77ac
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Transformation Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience measurable improvements across all aspects of your business operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-gray-700/50 rounded-lg p-4 hover:bg-gray-600/50 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-200">{benefit}</span>
              </motion.div>
=======
      {/* Transformation Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Transformation Areas
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We cover every aspect of digital transformation to ensure 
              complete business modernization and competitive advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformationAreas.map((area, idx) => (
              <div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${area.color} flex items-center justify-center`}>
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{area.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{area.description}</p>
                <ul className="space-y-3">
                  {area.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Transformation Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful digital transformation with measurable results.
=======
      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We have deep experience across multiple industries, understanding 
              unique challenges and regulatory requirements.
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <div key={idx} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-purple-500/50 transition-all duration-300">
                <div className="text-purple-400 font-semibold">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  {phase.phase}
                </div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </motion.div>
=======
      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We leverage the latest technologies to create innovative solutions 
              that drive digital transformation success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, idx) => (
              <div key={idx} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-purple-500/50 transition-all duration-300">
                <div className="text-purple-400 font-semibold">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Transformation Process
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures successful digital transformation 
              with minimal disruption to your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Evaluate current state and identify transformation opportunities" },
              { step: "02", title: "Strategy", description: "Develop comprehensive digital transformation roadmap" },
              { step: "03", title: "Implementation", description: "Execute transformation with agile methodology" },
              { step: "04", title: "Optimization", description: "Continuous improvement and performance monitoring" }
            ].map((process, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
            ))}
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See real results from your digital transformation journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-77ac
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the digital revolution and future-proof your business with Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Journey
              </button>
              <button className="px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
=======
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-77ac
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
<<<<<<< HEAD
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our digital transformation solutions can accelerate 
            your business growth and competitive advantage.
=======
          <p className="text-xl text-gray-400 mb-8">
            Join leading organizations that have successfully navigated digital transformation
>>>>>>> origin/cursor/website-audit-and-enhancement-77ac
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 inline-flex items-center"
            >
              Start Your Transformation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              View Transformation Stories
            </Link>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-77ac
        </div>
      </section>
    </div>
  );
}