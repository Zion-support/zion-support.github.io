import React from "react"
import Head from "next/head"
import Link from "next/link"
import { 
  Brain, Zap, Target, Users, Shield, BarChart3, Cloud, Lock, 
  TrendingUp, Code, Database, Network, Smartphone, MessageSquare, 
  FileText, ShoppingCart, Headphones, Search, Clock, Camera, 
  CreditCard, Globe2, Monitor, Server, BarChart, PieChart, 
  LineChart, Activity, Building2, Home, Car, GraduationCap, 
  Heart, ShoppingBag, Briefcase, Palette, Music, Video, 
  BookOpen, Calendar, Bell, Eye, Download, Upload, Share2, 
  QrCode, Tablet, Laptop, Desktop, Watch, Speaker, Microphone, 
  Image, File, Folder, Archive, Edit, Plus, Check, AlertCircle, 
  Info, HelpCircle, ExternalLink, ArrowUpRight, ArrowDownRight, 
  ChevronRight, ChevronLeft, ChevronUp, ChevronDown, Menu, 
  Grid, List, Filter, SortAsc, SortDesc, RefreshCw, RotateCcw, 
  ZoomIn, ZoomOut, Maximize, Minimize, Fullscreen, FullscreenExit, 
  Volume, Volume2, VolumeX, Mute, Unmute, Play, Pause, Stop, 
  SkipBack, SkipForward, Rewind, FastForward, Shuffle, Repeat, 
  Repeat1, Workflow, Building, Mail, Settings, Cpu, Lightbulb, 
  Rocket, Star, CheckCircle, Store, Globe, ArrowRight, Phone
} from "lucide-react"

const aiservices = () => {
  const aiServiceCategories = [
    {
      name: "AI-Powered Business Intelligence",
      description: "Advanced analytics and business intelligence solutions powered by artificial intelligence",
      icon: Brain,
      count: 18,
      color: "from-purple-400 to-pink-500",
      solutions: ["Predictive Analytics", "Data Visualization", "Business Intelligence", "Machine Learning Models", "Real-time Analytics", "Custom Dashboards"]
    },
    {
      name: "AI Automation & Workflow",
      description: "Intelligent automation solutions that streamline business processes and workflows",
      icon: Workflow,
      count: 22,
      color: "from-blue-400 to-cyan-500",
      solutions: ["Process Automation", "Workflow Optimization", "RPA Solutions", "Intelligent Automation", "Business Process Management", "Task Automation"]
    },
    {
      name: "AI-Powered Customer Experience",
      description: "AI-driven solutions that enhance customer interactions and improve satisfaction",
      icon: Users,
      count: 15,
      color: "from-green-400 to-emerald-500",
      solutions: ["Chatbots", "Customer Support", "Personalization", "Sentiment Analysis", "Customer Analytics", "Voice Assistants"]
    },
    {
      name: "AI Security & Compliance",
      description: "Intelligent security solutions that protect data and ensure regulatory compliance",
      icon: Shield,
      count: 12,
      color: "from-red-400 to-orange-500",
      solutions: ["Threat Detection", "Fraud Prevention", "Compliance Monitoring", "Security Analytics", "Risk Assessment", "Privacy Protection"]
    }
  ]

  const featuredAIServices = [
    {
      title: "AI-Powered Business Intelligence Platform",
      description: "Advanced analytics platform that uses machine learning to provide actionable business insights and predictive analytics with 99.9% accuracy.",
      price: "From $2,999/month",
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom ML Models", "Data Visualization", "Automated Reporting", "API Integration"],
      href: "/services/ai-business-intelligence",
      color: "from-purple-400 to-pink-500",
      popular: true,
      benefits: ["Increase decision-making speed by 60%", "Improve forecast accuracy by 45%", "Reduce manual reporting by 80%", "Enhance data-driven insights"]
    },
    {
      title: "Intelligent Document Processing Suite",
      description: "AI-powered document processing platform that automatically extracts, categorizes, and analyzes information from various document types with 98% accuracy.",
      price: "From $1,499/month",
      features: ["OCR Technology", "Natural Language Processing", "Automated Classification", "Data Extraction", "Compliance Monitoring", "Integration APIs"],
      href: "/services/ai-document-processing",
      color: "from-blue-400 to-cyan-500",
      benefits: ["Reduce document processing time by 90%", "Eliminate manual data entry errors", "Process 10,000+ documents daily", "Ensure compliance automation"]
    },
    {
      title: "AI-Powered Marketing Automation",
      description: "Intelligent marketing automation that personalizes campaigns, optimizes customer journeys, and maximizes ROI through AI-driven insights.",
      price: "From $2,499/month",
      features: ["Personalization Engine", "Predictive Customer Scoring", "A/B Testing Automation", "Multi-channel Campaigns", "ROI Analytics", "CRM Integration"],
      href: "/services/ai-marketing-automation",
      color: "from-green-400 to-emerald-500",
      benefits: ["Increase conversion rates by 35%", "Reduce marketing costs by 40%", "Improve customer engagement by 50%", "Automate campaign optimization"]
    },
    {
      title: "AI Cybersecurity Threat Detection",
      description: "Advanced AI-powered cybersecurity platform that detects, prevents, and responds to threats in real-time with machine learning algorithms.",
      price: "From $3,999/month",
      features: ["Real-time Threat Detection", "Behavioral Analysis", "Automated Response", "Risk Assessment", "Compliance Monitoring", "24/7 Monitoring"],
      href: "/services/ai-cybersecurity",
      color: "from-red-400 to-orange-500",
      benefits: ["Reduce security incidents by 85%", "Detect threats 10x faster", "Automate incident response", "Ensure regulatory compliance"]
    },
    {
      title: "AI-Powered Supply Chain Optimization",
      description: "Intelligent supply chain management platform that optimizes logistics, predicts demand, and reduces costs through AI analytics.",
      price: "From $2,799/month",
      features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Risk Management", "Cost Analysis", "Real-time Tracking"],
      href: "/services/ai-supply-chain",
      color: "from-indigo-400 to-purple-500",
      benefits: ["Reduce inventory costs by 25%", "Improve delivery times by 30%", "Optimize supply chain efficiency", "Predict and prevent disruptions"]
    },
    {
      title: "AI Healthcare Diagnostics Platform",
      description: "Advanced AI-powered healthcare platform that assists in medical diagnosis, treatment planning, and patient monitoring with 95% accuracy.",
      price: "From $4,999/month",
      features: ["Medical Image Analysis", "Diagnostic Assistance", "Treatment Recommendations", "Patient Monitoring", "Drug Interaction Analysis", "Compliance Tracking"],
      href: "/services/ai-healthcare-diagnostics",
      color: "from-emerald-400 to-teal-500",
      benefits: ["Improve diagnostic accuracy by 40%", "Reduce diagnosis time by 60%", "Enhance patient outcomes", "Ensure medical compliance"]
    }
  ]

  const pricingTiers = [
    {
      name: "AI Starter",
      price: "$499/month",
      description: "Perfect for small businesses starting with AI",
      features: [
        "Basic AI models",
        "Up to 10 users",
        "Email support",
        "Standard integrations",
        "10GB data processing",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "AI Professional",
      price: "$1,999/month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced AI models",
        "Up to 50 users",
        "Priority support",
        "Custom integrations",
        "100GB data processing",
        "Advanced analytics",
        "API access",
        "Custom training"
      ],
      popular: true
    },
    {
      name: "AI Enterprise",
      price: "$4,999/month",
      description: "For large organizations",
      features: [
        "Custom AI models",
        "Unlimited users",
        "24/7 dedicated support",
        "White-label options",
        "Unlimited data processing",
        "Custom analytics",
        "Full API access",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false
    }
  ]

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our advanced AI services. From machine learning to automation, we provide cutting-edge artificial intelligence solutions for modern enterprises." />
        <meta name="keywords" content="ai services, artificial intelligence, machine learning, automation, business intelligence, ai consulting, ai development" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Artificial Intelligence
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business. 
                Our AI services deliver intelligent automation, predictive analytics, and cutting-edge solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center font-semibold">
                  Get Started <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link href="/pricing" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">
                  View Pricing <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                AI Service Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive range of AI services designed to address specific business challenges
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServiceCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{category.count} solutions</span>
                    <Link href={category.href} className="text-purple-600 hover:text-purple-700 font-medium">
                      Explore <ArrowRight className="w-4 h-4 inline ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Solutions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured AI Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our most advanced AI solutions that are transforming businesses across industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredAIServices.map((service, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 ${service.popular ? 'border-purple-500' : 'border-gray-200'}`}>
                  {service.popular && (
                    <div className="bg-purple-500 text-white text-center py-1 text-sm font-medium rounded-t-xl">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                            <TrendingUp className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href={service.href} className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center justify-center">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                AI Services Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect AI services plan for your business needs. All plans include our core AI capabilities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg ${tier.popular ? 'ring-2 ring-purple-500 relative' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className={`w-full py-3 px-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center ${
                      tier.popular 
                        ? 'bg-purple-600 text-white hover:bg-purple-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}>
                      Get Started <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Harness AI Power?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get started with our AI services today and transform your business with artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center font-semibold">
                Contact Us <Mail className="w-4 h-4 ml-2" />
              </Link>
              <a href="tel:+13024640950" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">
                Call +1 302 464 0950 <Phone className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div className="mt-8 text-purple-100">
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:underline">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default aiservices
