import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { motion } from 'framer-motion';
import { Rocket, Brain, Cpu, Cloud, Shield, Users, Target, Globe, Award, Zap, Database, Building } from 'lucide-react';

const DigitalTransformation = () => {
  const transformationAreas = [
    {
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation and workflow optimization.',
      features: [
        'RPA (Robotic Process Automation)',
        'Workflow automation',
        'Business process optimization',
        'Intelligent document processing'
      ],
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Data & Analytics',
      description: 'Transform data into actionable insights for better decision-making.',
      features: [
        'Data governance and quality',
        'Advanced analytics and BI',
        'Real-time data processing',
        'Predictive analytics'
      ],
      icon: Database,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Cloud Migration',
      description: 'Modernize infrastructure with strategic cloud adoption and optimization.',
      features: [
        'Cloud strategy and planning',
        'Multi-cloud architecture',
        'Legacy system migration',
        'Performance optimization'
      ],
      icon: Cloud,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Customer Experience',
      description: 'Enhance customer engagement with digital-first experiences.',
      features: [
        'Omnichannel integration',
        'Personalization engines',
        'Customer journey mapping',
        'Digital touchpoint optimization'
      ],
      icon: Users,
      color: 'from-yellow-500 to-orange-500'
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Rocket, 
  Target, 
  Users, 
  BarChart3, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Brain,
  Award,
  Shield,
  Cpu,
  Network,
  Code,
  Settings,
  TrendingUp,
  Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalTransformation = () => {
  const services = [
    {
      icon: Rocket,
      title: "Digital Strategy & Roadmap Development",
      description: "Comprehensive digital transformation strategy with detailed roadmap and implementation planning.",
      features: ["Digital assessment", "Strategy development", "Roadmap creation", "Change management"],
      price: "From $150,000",
      maturity: "Enterprise",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Customer Experience (CX) Transformation",
      description: "End-to-end customer experience transformation with journey mapping and digital touchpoints.",
      features: ["Customer journey mapping", "Touchpoint optimization", "Digital experience design", "Analytics integration"],
      price: "From $95,000",
      maturity: "Advanced",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Process Digitalization & Automation",
      description: "Comprehensive process digitalization with intelligent automation and workflow optimization.",
      features: ["Process analysis", "Digital workflow design", "Automation implementation", "Performance monitoring"],
      price: "From $75,000",
      maturity: "Mid-Size",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decision Making Platform",
      description: "Comprehensive data analytics platform for informed decision making and business intelligence.",
      features: ["Data integration", "Advanced analytics", "Real-time dashboards", "Predictive modeling"],
      price: "From $110,000",
      maturity: "Advanced",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Lab & Digital Hub",
      description: "Dedicated innovation lab for digital experimentation, prototyping, and innovation management.",
      features: ["Innovation lab setup", "Prototyping facilities", "Innovation management", "Collaboration tools"],
      price: "From $180,000",
      maturity: "Enterprise",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Change Management & Training",
      description: "Comprehensive change management programs with employee training and adoption strategies.",
      features: ["Change strategy", "Training programs", "Communication plans", "Adoption metrics"],
      price: "From $60,000",
      maturity: "Mid-Size",
      color: "from-yellow-500 to-orange-500"
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
=======
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Zap, 
  Shield, 
  Users, 
  Cpu, 
  Cloud,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Target,
  Brain,
  Globe,
  Database,
  Network,
  Lock,
  BarChart3
} from 'lucide-react';

const DigitalTransformation = () => {
  const transformationServices = [
    {
      icon: Rocket,
      title: 'Strategy & Planning',
      description: 'Comprehensive digital transformation strategy development and roadmap planning.',
      features: ['Current State Assessment', 'Future State Vision', 'Implementation Roadmap', 'Change Management'],
      link: '/digital-strategy'
    },
    {
      icon: Brain,
      title: 'AI & Automation',
      description: 'Intelligent automation solutions that streamline operations and enhance decision-making.',
      features: ['Process Automation', 'AI Integration', 'Machine Learning', 'Predictive Analytics'],
      link: '/ai-automation'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud infrastructure for improved scalability and efficiency.',
      features: ['Migration Planning', 'Infrastructure Design', 'Data Migration', 'Performance Optimization'],
      link: '/cloud-migration'
    },
    {
      icon: Database,
      title: 'Data Modernization',
      description: 'Transform your data infrastructure for better insights and decision-making.',
      features: ['Data Strategy', 'Modernization Planning', 'Integration Solutions', 'Analytics Platform'],
      link: '/data-modernization'
    },
    {
      icon: Users,
      title: 'Customer Experience',
      description: 'Enhance customer engagement through digital channels and personalized experiences.',
      features: ['Digital Channels', 'Personalization', 'Customer Analytics', 'Omnichannel Strategy'],
      link: '/customer-experience'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Ensure digital security and maintain regulatory compliance throughout transformation.',
      features: ['Security Assessment', 'Compliance Framework', 'Risk Management', 'Security Monitoring'],
      link: '/security-compliance'
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
    }
  ];

  const benefits = [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, Zap, Building, Users, ArrowRight, CheckCircle, Star, Globe, Lock, Brain, Cpu, Database } from 'lucide-react';
import { SEO } from '@/components/SEO';

const transformationServices = [
  {
    title: "Process Automation",
    description: "Streamline business operations with intelligent automation and workflow optimization.",
    icon: Zap,
    features: ["Workflow Automation", "RPA Implementation", "Process Mapping", "Efficiency Metrics"],
    price: "From $8,500/month",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Legacy System Modernization",
    description: "Transform outdated systems into modern, scalable, and efficient platforms.",
    icon: Building,
    features: ["System Assessment", "Migration Planning", "Modern Architecture", "Data Migration"],
    price: "From $15,000/month",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Change Management",
    description: "Guide your organization through digital transformation with proven change management strategies.",
    icon: Users,
    features: ["Stakeholder Engagement", "Training Programs", "Communication Strategy", "Success Metrics"],
    price: "From $6,500/month",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Technology Strategy",
    description: "Develop comprehensive technology roadmaps aligned with business objectives.",
    icon: Brain,
    features: ["Technology Assessment", "Roadmap Development", "Vendor Selection", "Implementation Planning"],
    price: "From $12,000/month",
    color: "from-orange-500 to-red-500"
  }
];

const benefits = [
  {
    title: "Increased Efficiency",
    description: "Automate repetitive tasks and optimize workflows for maximum productivity",
    icon: Zap,
    color: "text-zion-cyan"
  },
  {
    title: "Cost Reduction",
    description: "Reduce operational costs through digital optimization and automation",
    icon: Building,
    color: "text-zion-purple"
  },
  {
    title: "Improved Customer Experience",
    description: "Enhance customer interactions with modern digital touchpoints",
    icon: Users,
    color: "text-green-400"
  },
  {
    title: "Competitive Advantage",
    description: "Stay ahead of the competition with cutting-edge digital capabilities",
    icon: Rocket,
    color: "text-blue-400"
  }
];

const testimonials = [
  {
    content: "Zion Tech Group's digital transformation program modernized our entire operation, resulting in 45% cost savings and 60% improvement in customer satisfaction.",
    name: "David Thompson",
    role: "CEO, Manufacturing Solutions Inc",
    rating: 5
  },
  {
    content: "Their process automation implementation eliminated manual errors and reduced processing time from days to hours.",
    name: "Lisa Chen",
    role: "COO, Financial Services Corp",
    rating: 5
  },
  {
    content: "The change management program they delivered ensured smooth adoption across all departments with minimal disruption.",
    name: "Robert Martinez",
    role: "VP of Operations, Retail Chain",
    rating: 5
  }
];
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0

export default function DigitalTransformation() {
  return (
<<<<<<< HEAD
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
=======
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline operations for better productivity.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through automation and process optimization.',
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Better Customer Experience',
      description: 'Deliver seamless, personalized experiences across all touchpoints.',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead with cutting-edge technology and innovative solutions.',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const industries = [
    {
      name: 'Manufacturing',
      focus: ['Industry 4.0', 'Smart factories', 'Supply chain optimization'],
      icon: Building
    },
    {
      name: 'Healthcare',
      focus: ['Telemedicine', 'Electronic health records', 'Patient engagement'],
      icon: Shield
    },
    {
      name: 'Financial Services',
      focus: ['Digital banking', 'Fintech integration', 'Risk management'],
      icon: Target
    },
    {
      name: 'Retail',
      focus: ['E-commerce', 'Omnichannel retail', 'Customer analytics'],
      icon: Users
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Evaluate current digital maturity and identify transformation opportunities.',
      icon: Target
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop comprehensive digital transformation roadmap aligned with business goals.',
      icon: Globe
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute transformation with proven methodologies and change management.',
      icon: Rocket
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously improve and optimize digital capabilities.',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue-light/20"></div>
=======
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Streamline operations and automate processes to improve productivity and reduce costs.'
    },
    {
      icon: Target,
      title: 'Better Customer Experience',
      description: 'Deliver personalized, seamless experiences across all digital touchpoints.'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Implement modern security measures to protect your business and customer data.'
    },
    {
      icon: Users,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge digital capabilities.'
    }
  ];

  const industries = [
    'Financial Services',
    'Healthcare',
    'Manufacturing',
    'Retail',
    'Technology',
    'Government',
    'Education',
    'Energy'
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 via-zion-purple/10 to-zion-blue-light/10"></div>
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
<<<<<<< HEAD
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
=======
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
              Digital{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Transformation
              </span>
            </h1>
<<<<<<< HEAD
            <p className="text-xl md:text-2xl text-zion-slate-light leading-relaxed mb-8">
              Transform your business for the digital age with comprehensive technology 
              solutions and strategic guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Start Your Journey
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Get a Free Assessment
              </button>
=======
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Transform your business for the digital age with comprehensive solutions that drive innovation, 
              efficiency, and competitive advantage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Request Quote
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
=======
      {/* Transformation Services Grid */}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
<<<<<<< HEAD
              Why{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Digital Transformation
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Unlock the full potential of your business with strategic digital transformation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
    {
      icon: Target,
      title: "Increased Efficiency",
      description: "Streamline operations and automate processes for maximum productivity and cost savings."
    },
    {
      icon: Award,
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with cutting-edge digital capabilities and innovation."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Expand your business reach with digital platforms and online presence."
    },
    {
      icon: Shield,
      title: "Future-Proof Business",
      description: "Build a resilient business model that adapts to changing market conditions."
    }
  ];

  const stats = [
    { label: "Digital Transformations", value: "80+", icon: Rocket },
    { label: "Processes Automated", value: "500+", icon: Code },
    { label: "Efficiency Gain", value: "45%", icon: TrendingUp },
    { label: "Client ROI", value: "3.2x", icon: Star }
  ];

  const methodologies = [
    { name: "Design Thinking", icon: "🧠", description: "Human-centered approach to problem solving and innovation" },
    { name: "Agile Methodology", icon: "🔄", description: "Iterative development with rapid feedback and adaptation" },
    { name: "Lean Six Sigma", icon: "⚡", description: "Process improvement and waste elimination strategies" },
    { name: "Change Management", icon: "📈", description: "Structured approach to organizational change and adoption" },
    { name: "Digital Maturity Assessment", icon: "📊", description: "Comprehensive evaluation of current digital capabilities" },
    { name: "Innovation Management", icon: "💡", description: "Systematic approach to fostering and managing innovation" }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Digital Transformation Services - Zion Tech Group"
        description="End-to-end business modernization through strategic digital transformation, process optimization, and innovation management."
        keywords="digital transformation, business modernization, process optimization, innovation management, Zion Tech Group"
        canonical="https://ziontechgroup.com/digital-transformation"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-95" />
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-purple opacity-60 blur-sm"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-3/4 right-1/4 w-6 h-6 rounded-full bg-zion-cyan opacity-40 blur-sm"
            animate={{ y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                Digital
              </span>
              <br />
              <span className="text-white">Transformation</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              End-to-end business modernization through strategic digital transformation, 
              process optimization, and innovation management.
=======
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Digital Transformation Services - Zion Tech Group" 
        description="Transform your business with comprehensive digital transformation services including process automation, legacy modernization, and change management."
        keywords="digital transformation, process automation, legacy modernization, change management, technology strategy"
        canonical="https://ziontechgroup.com/digital-transformation"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Digital
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Transformation
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Transform your business operations with comprehensive digital transformation services. 
              From process automation to legacy modernization, we guide your journey to digital excellence.
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Request Quote
=======
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Request Quote
                <CheckCircle className="w-5 h-5" />
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Stats Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Digital Transformation Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive services designed to modernize your business and drive innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      service.maturity === 'Enterprise' ? 'bg-red-500/20 text-red-400' :
                      service.maturity === 'Advanced' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {service.maturity}
                    </span>
                  </div>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
=======
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Transformation Services
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              End-to-end digital transformation solutions that modernize your business operations and drive growth.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformationServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 hover:bg-zion-blue-light/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-zion-slate-light flex items-center">
                          <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
<<<<<<< HEAD
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-cyan mb-4">{service.price}</div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
=======
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors duration-300 group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
              );
            })}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      {/* Transformation Areas */}
=======
      {/* Benefits Section */}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
<<<<<<< HEAD
              Areas of{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Transformation
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive digital transformation across all aspects of your business.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformationAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{area.title}</h3>
                  <p className="text-zion-slate-light mb-6">{area.description}</p>
                  <ul className="space-y-3">
                    {area.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
      {/* Methodologies Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Methodologies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Proven frameworks and approaches for successful digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodologies.map((methodology, index) => (
              <motion.div
                key={methodology.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{methodology.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{methodology.name}</h3>
                <p className="text-zion-slate-light">{methodology.description}</p>
              </motion.div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
=======
              Why Choose{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Digital Transformation?
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Discover the transformative benefits that digital transformation can bring to your business.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl hover:bg-zion-blue-light/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </motion.div>
              );
            })}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      {/* Industries */}
=======
      {/* Industries Section */}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
<<<<<<< HEAD
              Industry{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Focus
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Specialized digital transformation solutions for various industries.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-zion-cyan">{industry.name}</h3>
                  <ul className="space-y-2">
                    {industry.focus.map((focus, focusIndex) => (
                      <li key={focusIndex} className="flex items-center gap-2 text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        {focus}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
              Industries We{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Transform
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Our digital transformation solutions are tailored to meet the unique challenges and opportunities across diverse industries.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
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
=======
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="p-4 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 hover:bg-zion-blue-light/10 transition-all duration-300 text-center"
              >
                <span className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  {industry}
                </span>
              </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* Process Section */}
=======
      {/* Transformation Process */}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
<<<<<<< HEAD
                Process
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              A proven methodology for successful digital transformation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-zion-slate-light">{step.description}</p>
                </motion.div>
              );
            })}
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Digital Transformation Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the benefits of strategic digital transformation and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-zion-slate-light">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
=======
                Transformation
              </span>
              {' '}Process
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              A proven methodology for successfully implementing digital transformation initiatives that drive business value.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment & Strategy',
                description: 'Evaluate current state and develop comprehensive transformation strategy.'
              },
              {
                step: '02',
                title: 'Planning & Design',
                description: 'Create detailed implementation plan and design future state architecture.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Execute transformation initiatives with careful attention to change management.'
              },
              {
                step: '04',
                title: 'Optimization & Growth',
                description: 'Continuously optimize and scale digital capabilities for sustained growth.'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-zion-slate-light">{phase.description}</p>
              </motion.div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
=======
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            className="text-center max-w-4xl mx-auto"
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
<<<<<<< HEAD
            <p className="text-lg text-zion-slate-light mb-8">
              Let us help you navigate the digital transformation journey and 
              unlock new opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Start Transformation
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
                Schedule Consultation
              </button>
            </div>
          </motion.div>
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Let's discuss how our digital transformation services can modernize your operations and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue-dark font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-zion-blue-dark transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
=======
            <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our digital transformation solutions can modernize your operations, 
              improve efficiency, and create lasting competitive advantages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Start Your Transformation
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Get a Custom Quote
              </Link>
            </div>
          </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
        </div>
=======
      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Our Digital Transformation Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Comprehensive digital transformation solutions designed to modernize your business operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transformationServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 flex items-center justify-center text-white`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-zion-cyan font-semibold">{service.price}</span>
                  <Link
                    to="/contact"
                    className="px-6 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Why Choose Our Digital Transformation Services?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We combine proven methodologies with cutting-edge technology to deliver transformation that drives real business value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-zion-purple/20 rounded-lg ${benefit.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            What Our Clients Say
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders have to say about our digital transformation services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-zion-cyan fill-current" />
                ))}
              </div>
              <p className="text-zion-slate-light mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-zion-cyan text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have already revolutionized their operations with our digital transformation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Start Your Transformation
                <Rocket className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <CheckCircle className="w-5 h-5" />
                Get Free Consultation
              </Link>
            </div>
          </div>
        </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
      </section>
    </div>
  );
}