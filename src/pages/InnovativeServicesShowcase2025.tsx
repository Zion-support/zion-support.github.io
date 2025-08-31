import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Rocket,
  Target,
  Lightbulb,
  Atom,
  Lock,
  BarChart3,
  Code,
  Server,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  TrendingUp,
  Scale,
  Gauge,
  BookOpen,
  Heart,
  Home,
  Car,
  Building,
  GraduationCap,
  Scale3,
  Leaf,
  Globe2,
  Truck,
  Search,
  Zap,
  Rocket,
  Brain,
  Shield,
  Cloud,
  Database,
  Network,
  Cpu,
  Wifi,
  Lock,
  BarChart3,
  Code,
  Server,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Star,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  Lightbulb,
  Atom,
  TrendingUp,
  Scale,
  Gauge
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  const innovativeServices = [
    {
      id: "ai-legal-document-automation-platform",
      title: "AI Legal Document Automation Platform",
      description: "Intelligent legal document generation, review, and automation platform with AI-powered contract analysis and compliance checking.",
      category: "Legal Technology",
      price: "$450/month",
      features: [
        "AI-powered contract analysis",
        "Automated document generation",
        "Legal compliance checking",
        "Contract risk assessment",
        "Template library management"
      ],
      benefits: [
        "Reduce legal document creation time by 80%",
        "Minimize legal risks and compliance issues",
        "Lower legal costs by 60%",
        "Improve contract accuracy and consistency"
      ],
      icon: Scale3,
      color: "from-blue-500 to-indigo-600",
      marketPrice: "$450 - $1,200/month",
      roi: "400-600%",
      competitors: ["DocuSign", "ContractPodAi", "Evisort", "Ironclad"],
      marketSize: "$8.2 billion by 2025"
    },
    {
      id: "ai-healthcare-analytics-platform",
      title: "AI Healthcare Analytics Platform",
      description: "Advanced healthcare analytics platform using AI to predict patient outcomes, optimize treatment plans, and improve healthcare delivery.",
      category: "Healthcare Technology",
      price: "$650/month",
      features: [
        "Predictive patient analytics",
        "Treatment optimization algorithms",
        "Population health insights",
        "Clinical decision support",
        "Healthcare cost optimization"
      ],
      benefits: [
        "Improve patient outcomes by 40%",
        "Reduce healthcare costs by 25%",
        "Enhance clinical decision-making",
        "Optimize resource allocation"
      ],
      icon: Heart,
      color: "from-red-500 to-pink-600",
      marketPrice: "$650 - $2,000/month",
      roi: "300-500%",
      competitors: ["IBM Watson Health", "Cerner", "Epic", "Allscripts"],
      marketSize: "$67.8 billion by 2025"
    },
    {
      id: "ai-financial-risk-management-platform",
      title: "AI Financial Risk Management Platform",
      description: "Intelligent financial risk assessment and management platform using AI to predict market risks, credit defaults, and investment opportunities.",
      category: "Financial Technology",
      price: "$550/month",
      features: [
        "AI-powered risk assessment",
        "Market volatility prediction",
        "Credit default prediction",
        "Portfolio optimization",
        "Real-time risk monitoring"
      ],
      benefits: [
        "Reduce financial losses by 35%",
        "Improve investment returns by 20%",
        "Enhance regulatory compliance",
        "Optimize capital allocation"
      ],
      icon: Coins,
      color: "from-yellow-500 to-orange-600",
      marketPrice: "$550 - $1,500/month",
      roi: "350-550%",
      competitors: ["Bloomberg", "Thomson Reuters", "FactSet", "S&P Global"],
      marketSize: "$12.4 billion by 2025"
    },
    {
      id: "ai-supply-chain-optimization-platform",
      title: "AI Supply Chain Optimization Platform",
      description: "Intelligent supply chain optimization platform using AI to predict demand, optimize inventory, and streamline logistics operations.",
      category: "Supply Chain",
      price: "$480/month",
      features: [
        "AI demand forecasting",
        "Inventory optimization",
        "Route optimization",
        "Supplier risk assessment",
        "Real-time tracking"
      ],
      benefits: [
        "Reduce inventory costs by 30%",
        "Improve delivery times by 25%",
        "Optimize supplier relationships",
        "Enhance sustainability"
      ],
      icon: Truck,
      color: "from-green-500 to-emerald-600",
      marketPrice: "$480 - $1,200/month",
      roi: "300-450%",
      competitors: ["SAP", "Oracle", "Manhattan Associates", "JDA Software"],
      marketSize: "$18.7 billion by 2025"
    },
    {
      id: "ai-carbon-footprint-management-platform",
      title: "AI Carbon Footprint Management Platform",
      description: "Intelligent carbon footprint tracking and management platform using AI to help businesses reduce emissions and achieve sustainability goals.",
      category: "Sustainability",
      price: "$320/month",
      features: [
        "AI-powered emission tracking",
        "Carbon footprint calculation",
        "Sustainability reporting",
        "Goal setting and tracking",
        "Carbon offset recommendations"
      ],
      benefits: [
        "Reduce carbon emissions by 25%",
        "Achieve sustainability certifications",
        "Improve brand reputation",
        "Comply with regulations"
      ],
      icon: Leaf,
      color: "from-emerald-500 to-green-600",
      marketPrice: "$320 - $800/month",
      roi: "250-400%",
      competitors: ["Watershed", "Normative", "Carbon Trust", "South Pole"],
      marketSize: "$2.8 billion by 2025"
    },
    {
      id: "ai-mental-health-support-platform",
      title: "AI Mental Health Support Platform",
      description: "Intelligent mental health support platform using AI to provide personalized therapy, mood tracking, and crisis intervention support.",
      category: "Healthcare Technology",
      price: "$280/month",
      features: [
        "AI-powered mood tracking",
        "Personalized therapy recommendations",
        "Crisis intervention support",
        "Progress monitoring",
        "Integration with healthcare providers"
      ],
      benefits: [
        "Improve mental health outcomes by 45%",
        "Provide 24/7 support availability",
        "Reduce healthcare costs",
        "Enhance early intervention"
      ],
      icon: Heart,
      color: "from-purple-500 to-pink-600",
      marketPrice: "$280 - $600/month",
      roi: "300-500%",
      competitors: ["BetterHelp", "Talkspace", "Woebot", "Ginger"],
      marketSize: "$4.2 billion by 2025"
    },
    {
      id: "ai-smart-home-energy-management-platform",
      title: "AI Smart Home Energy Management Platform",
      description: "Intelligent smart home energy management platform using AI to optimize energy usage, reduce costs, and improve sustainability.",
      category: "Smart Home",
      price: "$180/month",
      features: [
        "AI energy optimization",
        "Smart device integration",
        "Real-time monitoring",
        "Predictive analytics",
        "Automated energy management"
      ],
      benefits: [
        "Reduce energy costs by 30%",
        "Improve home efficiency",
        "Enhance comfort and convenience",
        "Increase property value"
      ],
      icon: Home,
      color: "from-blue-500 to-cyan-600",
      marketPrice: "$180 - $400/month",
      roi: "250-400%",
      competitors: ["Nest", "Ecobee", "Honeywell", "Samsung SmartThings"],
      marketSize: "$3.5 billion by 2025"
    },
    {
      id: "ai-autonomous-legal-research-platform",
      title: "AI Autonomous Legal Research Platform",
      description: "Intelligent legal research platform using AI to autonomously analyze case law, statutes, and legal precedents for comprehensive legal insights.",
      category: "Legal Technology",
      price: "$380/month",
      features: [
        "AI-powered case law analysis",
        "Statute interpretation",
        "Legal precedent research",
        "Citation analysis",
        "Legal document comparison"
      ],
      benefits: [
        "Reduce research time by 70%",
        "Improve case preparation quality",
        "Enhance legal argument strength",
        "Stay updated with latest precedents"
      ],
      icon: BookOpen,
      color: "from-indigo-500 to-purple-600",
      marketPrice: "$380 - $900/month",
      roi: "350-500%",
      competitors: ["Westlaw", "LexisNexis", "Bloomberg Law", "Fastcase"],
      marketSize: "$6.8 billion by 2025"
    },
    {
      id: "ai-educational-content-creation-platform",
      title: "AI Educational Content Creation Platform",
      description: "Intelligent educational content creation platform using AI to generate personalized learning materials, assessments, and interactive content.",
      category: "Education Technology",
      price: "$250/month",
      features: [
        "AI content generation",
        "Personalized learning paths",
        "Interactive assessments",
        "Multimedia content creation",
        "Curriculum optimization"
      ],
      benefits: [
        "Reduce content creation time by 60%",
        "Improve learning outcomes by 35%",
        "Personalize learning experiences",
        "Enhance student engagement"
      ],
      icon: GraduationCap,
      color: "from-green-500 to-teal-600",
      marketPrice: "$250 - $600/month",
      roi: "300-450%",
      competitors: ["Coursera", "Udemy", "Khan Academy", "Duolingo"],
      marketSize: "$5.4 billion by 2025"
    },
    {
      id: "ai-real-estate-investment-analytics-platform",
      title: "AI Real Estate Investment Analytics Platform",
      description: "Intelligent real estate investment analytics platform using AI to analyze market trends, property values, and investment opportunities.",
      category: "Real Estate Technology",
      price: "$420/month",
      features: [
        "AI market analysis",
        "Property valuation models",
        "Investment opportunity scoring",
        "Market trend prediction",
        "Risk assessment"
      ],
      benefits: [
        "Improve investment returns by 25%",
        "Reduce investment risks",
        "Optimize portfolio performance",
        "Enhance market insights"
      ],
      icon: Building,
      color: "from-orange-500 to-red-600",
      marketPrice: "$420 - $1,000/month",
      roi: "300-500%",
      competitors: ["Zillow", "Redfin", "CoStar", "Real Capital Analytics"],
      marketSize: "$4.8 billion by 2025"
    },
    {
      id: "ai-autonomous-logistics-platform",
      title: "AI Autonomous Logistics Platform",
      description: "Intelligent autonomous logistics platform using AI to optimize delivery routes, manage fleets, and automate logistics operations.",
      category: "Logistics",
      price: "$580/month",
      features: [
        "AI route optimization",
        "Autonomous fleet management",
        "Real-time tracking",
        "Predictive maintenance",
        "Demand forecasting"
      ],
      benefits: [
        "Reduce delivery costs by 35%",
        "Improve delivery times by 30%",
        "Optimize fleet utilization",
        "Enhance customer satisfaction"
      ],
      icon: Truck,
      color: "from-blue-500 to-indigo-600",
      marketPrice: "$580 - $1,500/month",
      roi: "350-550%",
      competitors: ["Flexport", "Convoy", "Uber Freight", "C.H. Robinson"],
      marketSize: "$7.2 billion by 2025"
    },
    {
      id: "ai-powered-seo",
      title: "AI-Powered SEO Platform",
      description: "Intelligent SEO platform using AI to optimize content, analyze competitors, and improve search engine rankings with automated insights.",
      category: "Digital Marketing",
      price: "$320/month",
      features: [
        "AI content optimization",
        "Competitor analysis",
        "Keyword research",
        "Ranking tracking",
        "Technical SEO audit"
      ],
      benefits: [
        "Improve search rankings by 40%",
        "Increase organic traffic by 60%",
        "Reduce SEO workload by 50%",
        "Enhance content performance"
      ],
      icon: Search,
      color: "from-purple-500 to-pink-600",
      marketPrice: "$320 - $800/month",
      roi: "300-500%",
      competitors: ["SEMrush", "Ahrefs", "Moz", "Ubersuggest"],
      marketSize: "$15.8 billion by 2025"
    },
    {
      id: "quantum-edge-computing-solutions",
      title: "Quantum Edge Computing Solutions",
      description: "Revolutionary quantum edge computing solutions combining quantum computing with edge computing for ultra-fast, secure, and intelligent processing.",
      category: "Quantum Computing",
      price: "$1,200/month",
      features: [
        "Quantum processing units",
        "Edge computing infrastructure",
        "Real-time quantum algorithms",
        "Secure quantum communication",
        "Hybrid quantum-classical processing"
      ],
      benefits: [
        "Process data 1000x faster",
        "Reduce latency by 90%",
        "Enhance security with quantum encryption",
        "Enable real-time AI processing"
      ],
      icon: Atom,
      color: "from-purple-500 to-indigo-600",
      marketPrice: "$1,200 - $5,000/month",
      roi: "500-800%",
      competitors: ["IBM Quantum", "Google Quantum", "Microsoft Quantum", "D-Wave"],
      marketSize: "$2.1 billion by 2025"
    },
    {
      id: "ai-space-technology-platform",
      title: "AI Space Technology Platform",
      description: "Intelligent space technology platform using AI to analyze satellite data, optimize space operations, and enable autonomous space missions.",
      category: "Space Technology",
      price: "$850/month",
      features: [
        "AI satellite data analysis",
        "Space mission optimization",
        "Autonomous navigation",
        "Space debris tracking",
        "Satellite constellation management"
      ],
      benefits: [
        "Improve space mission success by 40%",
        "Reduce operational costs by 30%",
        "Enhance satellite performance",
        "Optimize space resource utilization"
      ],
      icon: Satellite,
      color: "from-gray-500 to-blue-600",
      marketPrice: "$850 - $2,500/month",
      roi: "400-700%",
      competitors: ["Maxar", "Planet Labs", "SpaceX", "Blue Origin"],
      marketSize: "$1.8 billion by 2025"
    }
  ];

  const contactInfo = {
    mobile: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Helmet>
        <title>Innovative Micro SAAS Services Showcase 2025 | Zion Tech Group</title>
        <meta name="description" content="Discover our cutting-edge innovative micro SAAS services for 2025. AI-powered solutions across legal, healthcare, finance, supply chain, and more. Transform your business with intelligent automation." />
        <meta name="keywords" content="innovative micro SAAS services, AI services, legal technology, healthcare analytics, financial risk management, supply chain optimization, sustainability, mental health, smart home, quantum computing, space technology" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2025" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Micro SAAS Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Showcase 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Discover cutting-edge AI-powered micro SAAS solutions that transform industries and drive business growth. 
              From legal automation to quantum computing, we're redefining what's possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#services"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Ready to Transform Your Business?</h3>
              <p className="text-green-100">Get in touch with our experts today</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {contactInfo.mobile}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our innovative services combine cutting-edge AI, quantum computing, and advanced technologies 
              to deliver unprecedented value and competitive advantages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovativeServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <service.icon className="w-16 h-16 text-white" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">Innovative</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-600 font-medium">ROI: {service.roi}</span>
                      <span className="text-gray-500">Market Size: {service.marketSize}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <TrendingUp className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span>Competitors: {service.competitors.slice(0, 2).join(", ")}</span>
                    </div>
                    <a
                      href={`/services/${service.id}`}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're not just another technology company. We're your strategic partner in digital transformation, 
              delivering innovative solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Rocket,
                title: "Innovation First",
                description: "Cutting-edge AI, quantum computing, and emerging technologies that keep you ahead of the competition."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security, compliance certifications, and robust data protection for your peace of mind."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Seasoned professionals with deep expertise in AI, cloud computing, and digital transformation."
              },
              {
                icon: Target,
                title: "Proven Results",
                description: "Track record of delivering measurable ROI and transforming businesses across industries."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-blue-100">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how our innovative micro SAAS services can transform your business. 
              Our experts are ready to help you choose the right solutions and get you up and running quickly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-1">{contactInfo.mobile}</p>
                    <p className="text-sm text-gray-500">Available 24/7 for urgent inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-1">{contactInfo.email}</p>
                    <p className="text-sm text-gray-500">We'll respond within 2 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
                    <p className="text-gray-600 mb-1">{contactInfo.address}</p>
                    <p className="text-sm text-gray-500">Schedule an in-person meeting</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Start Consultation</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Free initial consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Custom solution design</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Implementation roadmap</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Ongoing support & optimization</span>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Schedule Free Consultation
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="w-full border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Send Detailed Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Business Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses already leveraging our innovative micro SAAS services 
              to gain competitive advantages and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center gap-2 text-lg"
              >
                <Phone className="w-6 h-6" />
                Start Your Transformation
              </a>
              <a
                href={contactInfo.website}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center gap-2 text-lg"
              >
                <Globe className="w-6 h-6" />
                Visit Our Website
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}