import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  TrendingUp, 
  Users, 
  Zap, 
  Globe, 
  Smartphone, 
  Database,
  BarChart3,
  MessageSquare,
  Calendar,
  Target,
  Settings,
  Monitor,
  Cpu,
  Network,
  Lock,
  Cloud,
  Smartphone as Mobile,
  Leaf,
  Home,
  Building2,
  Car,
  Factory,
  ShoppingCart,
  CreditCard,
  FileText,
  Heart,
  Lightbulb,
  Rocket
} from 'lucide-react';

const InnovativeServicesShowcase2025: React.FC = () => {
  const services = [
    {
      id: "ai-legal-document-automation",
      title: "AI Legal Document Automation Platform",
      description: "Advanced AI-powered platform that automates legal document creation, review, and analysis with 99.9% accuracy and compliance monitoring.",
      category: "Legal Technology",
      price: "$299/month",
      marketPrice: "$299 - $1,200/month",
      roi: "400-600%",
      icon: FileText,
      features: [
        "AI document generation",
        "Legal compliance checking",
        "Contract analysis",
        "Risk assessment",
        "Template library",
        "Version control",
        "Electronic signatures",
        "Audit trails"
      ],
      benefits: [
        "Reduce legal costs by 70%",
        "Accelerate document processing by 10x",
        "Ensure compliance accuracy",
        "Minimize legal risks"
      ],
      competitors: ["DocuSign", "ContractPodAi", "Evisort", "Kira Systems"],
      marketSize: "$2.8 billion by 2025"
    },
    {
      id: "ai-healthcare-diagnostics",
      title: "AI Healthcare Diagnostics Platform",
      description: "Revolutionary AI platform that provides accurate medical diagnostics, symptom analysis, and health monitoring with FDA compliance and HIPAA security.",
      category: "Healthcare Technology",
      price: "$599/month",
      marketPrice: "$599 - $2,500/month",
      roi: "500-800%",
      icon: Heart,
      features: [
        "AI symptom analysis",
        "Medical image recognition",
        "Health monitoring",
        "Predictive analytics",
        "Patient management",
        "Telemedicine integration",
        "Electronic health records",
        "Drug interaction checking"
      ],
      benefits: [
        "Improve diagnostic accuracy by 40%",
        "Reduce healthcare costs by 30%",
        "Enable early disease detection",
        "Enhance patient outcomes"
      ],
      competitors: ["Butterfly Network", "Zebra Medical", "Aidoc", "Enlitic"],
      marketSize: "$45.2 billion by 2025"
    },
    {
      id: "ai-financial-trading",
      title: "AI Financial Trading Platform",
      description: "Advanced AI-powered trading platform that provides real-time market analysis, automated trading strategies, and risk management for institutional and retail investors.",
      category: "Financial Technology",
      price: "$799/month",
      marketPrice: "$799 - $3,000/month",
      roi: "600-900%",
      icon: TrendingUp,
      features: [
        "AI market analysis",
        "Automated trading",
        "Risk management",
        "Portfolio optimization",
        "Real-time data feeds",
        "Backtesting engine",
        "Performance analytics",
        "Compliance monitoring"
      ],
      benefits: [
        "Increase trading returns by 25%",
        "Reduce trading risks by 40%",
        "24/7 market monitoring",
        "Automated execution"
      ],
      competitors: ["Alpaca", "QuantConnect", "Zerodha", "Robinhood"],
      marketSize: "$28.5 billion by 2025"
    },
    {
      id: "ai-supply-chain-optimization",
      title: "AI Supply Chain Optimization Platform",
      description: "Intelligent supply chain platform that uses AI to optimize inventory, predict demand, reduce costs, and improve efficiency across the entire supply chain network.",
      category: "Supply Chain Technology",
      price: "$449/month",
      marketPrice: "$449 - $1,800/month",
      roi: "350-500%",
      icon: Network,
      features: [
        "Demand forecasting",
        "Inventory optimization",
        "Route optimization",
        "Supplier management",
        "Real-time tracking",
        "Cost analysis",
        "Risk assessment",
        "Sustainability metrics"
      ],
      benefits: [
        "Reduce inventory costs by 30%",
        "Improve delivery times by 25%",
        "Increase supply chain visibility",
        "Optimize resource allocation"
      ],
      competitors: ["Llamasoft", "Elementum", "E2open", "Kinaxis"],
      marketSize: "$18.7 billion by 2025"
    },
    {
      id: "ai-customer-experience-analytics",
      title: "AI Customer Experience Analytics Platform",
      description: "Comprehensive customer experience analytics platform that uses AI to analyze customer behavior, predict churn, and optimize customer journeys across all touchpoints.",
      category: "Customer Analytics",
      price: "$349/month",
      marketPrice: "$349 - $1,400/month",
      roi: "400-600%",
      icon: Users,
      features: [
        "Customer journey mapping",
        "Behavioral analytics",
        "Churn prediction",
        "Sentiment analysis",
        "Personalization engine",
        "A/B testing",
        "Real-time insights",
        "Predictive modeling"
      ],
      benefits: [
        "Increase customer retention by 35%",
        "Improve customer satisfaction by 40%",
        "Reduce churn by 25%",
        "Optimize customer journeys"
      ],
      competitors: ["Mixpanel", "Amplitude", "Hotjar", "FullStory"],
      marketSize: "$12.3 billion by 2025"
    },
    {
      id: "ai-content-marketing-studio",
      title: "AI Content Marketing Studio",
      description: "Intelligent content creation and marketing platform that generates high-quality content, optimizes campaigns, and automates marketing workflows with AI-powered insights.",
      category: "Marketing Technology",
      price: "$199/month",
      marketPrice: "$199 - $800/month",
      roi: "300-500%",
      icon: Target,
      features: [
        "AI content generation",
        "SEO optimization",
        "Social media automation",
        "Email marketing",
        "Campaign management",
        "Performance analytics",
        "A/B testing",
        "Content calendar"
      ],
      benefits: [
        "Increase content production by 10x",
        "Improve SEO rankings by 50%",
        "Reduce marketing costs by 40%",
        "Automate repetitive tasks"
      ],
      competitors: ["Jasper", "Copy.ai", "Writesonic", "ContentBot"],
      marketSize: "$8.9 billion by 2025"
    },
    {
      id: "ai-devops-automation",
      title: "AI DevOps Automation Platform",
      description: "Intelligent DevOps platform that automates deployment, monitoring, and infrastructure management using AI to predict issues and optimize performance.",
      category: "DevOps & Infrastructure",
      price: "$399/month",
      marketPrice: "$399 - $1,600/month",
      roi: "400-700%",
      icon: Settings,
      features: [
        "Automated deployment",
        "Infrastructure monitoring",
        "Performance optimization",
        "Security scanning",
        "Incident response",
        "Resource scaling",
        "Cost optimization",
        "Compliance monitoring"
      ],
      benefits: [
        "Reduce deployment time by 80%",
        "Improve system reliability by 60%",
        "Reduce infrastructure costs by 30%",
        "Automate security compliance"
      ],
      competitors: ["GitLab", "Jenkins", "CircleCI", "GitHub Actions"],
      marketSize: "$14.2 billion by 2025"
    },
    {
      id: "ai-ecommerce-optimization",
      title: "AI E-commerce Optimization Platform",
      description: "Intelligent e-commerce platform that optimizes product recommendations, pricing, inventory, and customer experience using AI to maximize sales and profitability.",
      category: "E-commerce Technology",
      price: "$299/month",
      marketPrice: "$299 - $1,200/month",
      roi: "350-600%",
      icon: ShoppingCart,
      features: [
        "Product recommendations",
        "Dynamic pricing",
        "Inventory optimization",
        "Customer segmentation",
        "Conversion optimization",
        "A/B testing",
        "Performance analytics",
        "Mobile optimization"
      ],
      benefits: [
        "Increase conversion rates by 45%",
        "Improve average order value by 30%",
        "Reduce cart abandonment by 25%",
        "Optimize inventory levels"
      ],
      competitors: ["Klevu", "Algolia", "Elasticsearch", "SearchSpring"],
      marketSize: "$22.1 billion by 2025"
    },
    {
      id: "ai-mental-health-support",
      title: "AI Mental Health Support Platform",
      description: "Compassionate AI-powered mental health platform that provides 24/7 support, mood tracking, and personalized wellness recommendations with clinical oversight.",
      category: "Healthcare Technology",
      price: "$149/month",
      marketPrice: "$149 - $600/month",
      roi: "400-700%",
      icon: Heart,
      features: [
        "24/7 AI support",
        "Mood tracking",
        "Wellness recommendations",
        "Crisis intervention",
        "Progress monitoring",
        "Therapist integration",
        "Community support",
        "Privacy controls"
      ],
      benefits: [
        "Provide immediate support",
        "Track mental health progress",
        "Reduce stigma barriers",
        "Improve access to care"
      ],
      competitors: ["Woebot", "Ginger", "Talkspace", "BetterHelp"],
      marketSize: "$6.8 billion by 2025"
    },
    {
      id: "ai-carbon-footprint-management",
      title: "AI Carbon Footprint Management Platform",
      description: "Intelligent sustainability platform that tracks, analyzes, and optimizes carbon footprints for businesses and individuals, providing actionable insights for environmental impact reduction.",
      category: "Sustainability Technology",
      price: "$249/month",
      marketPrice: "$249 - $1,000/month",
      roi: "300-500%",
      icon: Leaf,
      features: [
        "Carbon footprint tracking",
        "Sustainability analytics",
        "Reduction recommendations",
        "Goal setting",
        "Progress monitoring",
        "Reporting tools",
        "Carbon offset options",
        "Supply chain analysis"
      ],
      benefits: [
        "Reduce carbon footprint by 40%",
        "Improve sustainability metrics",
        "Meet compliance requirements",
        "Enhance brand reputation"
      ],
      competitors: ["Watershed", "Normative", "Carbon Trust", "South Pole"],
      marketSize: "$9.2 billion by 2025"
    },
    {
      id: "ai-smart-home-energy",
      title: "AI Smart Home Energy Management Platform",
      description: "Intelligent home energy management system that optimizes energy consumption, integrates renewable sources, and provides real-time insights for cost savings and sustainability.",
      category: "Smart Home Technology",
      price: "$99/month",
      marketPrice: "$99 - $400/month",
      roi: "250-400%",
      icon: Home,
      features: [
        "Energy consumption monitoring",
        "Smart device integration",
        "Renewable energy optimization",
        "Cost analysis",
        "Automated controls",
        "Mobile app",
        "Real-time alerts",
        "Historical data"
      ],
      benefits: [
        "Reduce energy costs by 25%",
        "Optimize renewable energy use",
        "Improve home efficiency",
        "Reduce carbon footprint"
      ],
      competitors: ["Nest", "Ecobee", "Sense", "Wiser Energy"],
      marketSize: "$5.6 billion by 2025"
    }
  ];

  const categories = [
    { name: "Legal Technology", icon: FileText, color: "bg-blue-500" },
    { name: "Healthcare Technology", icon: Heart, color: "bg-red-500" },
    { name: "Financial Technology", icon: TrendingUp, color: "bg-green-500" },
    { name: "Supply Chain Technology", icon: Network, color: "bg-purple-500" },
    { name: "Customer Analytics", icon: Users, color: "bg-indigo-500" },
    { name: "Marketing Technology", icon: Target, color: "bg-pink-500" },
    { name: "DevOps & Infrastructure", icon: Settings, color: "bg-gray-500" },
    { name: "E-commerce Technology", icon: ShoppingCart, color: "bg-orange-500" },
    { name: "Sustainability Technology", icon: Leaf, color: "bg-emerald-500" },
    { name: "Smart Home Technology", icon: Home, color: "bg-cyan-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Innovative AI Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge micro SAAS solutions that are revolutionizing industries 
              with AI-powered intelligence, automation, and optimization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${category.color} text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xs font-medium text-blue-300 uppercase tracking-wide">
                    {service.category}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Starting Price:</span>
                  <span className="text-2xl font-bold text-green-400">{service.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Market Price:</span>
                  <span className="text-sm text-gray-300">{service.marketPrice}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">ROI:</span>
                  <span className="text-sm text-yellow-400 font-medium">{service.roi}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Market Size:</span>
                  <span className="text-sm text-blue-300">{service.marketSize}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.slice(0, 6).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2 text-sm">Key Benefits:</h4>
                <div className="space-y-1">
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2 text-sm">Competitors:</h4>
                <div className="flex flex-wrap gap-1">
                  {service.competitors.slice(0, 3).map((competitor, idx) => (
                    <span key={idx} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                      {competitor}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                  Learn More
                </button>
                <button className="px-4 py-2 border border-white/30 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300">
                  Demo
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch with our team to discuss how our AI-powered solutions can drive 
            innovation and growth for your organization.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-blue-300">+1 302 464 0950</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-purple-300">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Website</h3>
              <p className="text-green-300">ziontechgroup.com</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-white font-semibold mb-4">Address</h3>
            <p className="text-gray-300">
              364 E Main St STE 1008<br />
              Middletown DE 19709
            </p>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start Your AI Transformation Today
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Join hundreds of businesses already leveraging our AI-powered solutions 
              to drive innovation, efficiency, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                Schedule a Demo
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white/10 transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase2025;