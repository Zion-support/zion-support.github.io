import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Users, 
  Zap, 
  TrendingUp, 
  Shield, 
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
<<<<<<< HEAD
  Zap,
  Cpu,
  Lock,
  BarChart3,
  Users,
  Rocket,
  Target,
  Award,
  Microchip,
  CircuitBoard,
  Satellite,
  Atom,
  Link,
  Eye,
  Gauge,
  Layers,
  Server,
  Database as DatabaseIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Cpu as CpuIcon,
  ArrowRight
=======
  Code,
  Lock
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'ai',
      title: "AI Solutions",
      description: "Transform your business with cutting-edge artificial intelligence and machine learning solutions",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
<<<<<<< HEAD
        "AI Chatbots & Virtual Assistants",
        "Autonomous Systems",
        "AI Research & Development"
      ],
      link: "/ai-services"
    },
    {
      title: "Cybersecurity",
      description: "Advanced security and compliance solutions",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      services: [
        "Zero Trust Architecture",
        "Threat Detection & Response",
        "Penetration Testing",
        "Security Audits & Compliance",
        "Incident Response",
        "Vulnerability Assessment",
        "SOC 2 Compliance",
        "Security Training & Awareness"
      ],
      link: "/cybersecurity"
    },
    {
      title: "Cloud & Infrastructure",
      description: "Scalable cloud solutions and DevOps",
      icon: Cloud,
=======
        "AI-Powered Automation",
        "Data Science Consulting"
      ],
      benefits: [
        "Increase operational efficiency by up to 300%",
        "Reduce costs through intelligent automation",
        "Gain competitive advantage with AI insights",
        "Scale operations without proportional cost increase"
      ],
      link: "/services/ai"
    },
    {
      id: 'talent',
      title: "Tech Talent",
      description: "Access world-class developers, engineers, and IT professionals for your projects",
      icon: Users,
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239
      color: "from-blue-500 to-cyan-500",
      features: [
        "Full-Stack Developers",
        "DevOps Engineers",
        "Data Scientists",
        "UI/UX Designers",
        "Project Managers",
        "QA Engineers"
      ],
      benefits: [
        "Reduce hiring time by 70%",
        "Access global talent pool",
        "Flexible engagement models",
        "Proven track record of success"
      ],
      link: "/talent"
    },
    {
      id: 'equipment',
      title: "Equipment & Infrastructure",
      description: "High-performance technology infrastructure and hardware solutions for modern businesses",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Cloud Infrastructure",
        "High-Performance Computing",
        "Network Solutions",
        "Security Hardware",
        "Data Center Equipment",
        "IoT Devices"
      ],
      benefits: [
        "Optimize performance and reliability",
        "Reduce infrastructure costs",
        "Scale with business growth",
        "Enhanced security and compliance"
      ],
      link: "/equipment"
    },
    {
      id: 'consulting',
      title: "Technology Consulting",
      description: "Strategic guidance for digital transformation and technology optimization",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      features: [
        "Digital Strategy",
        "Technology Roadmap",
        "Process Optimization",
        "Change Management",
        "Risk Assessment",
        "Performance Audits"
      ],
      benefits: [
        "Align technology with business goals",
        "Reduce technology risks",
        "Optimize IT investments",
        "Accelerate digital transformation"
      ],
      link: "/consulting"
    },
    {
      id: 'cybersecurity',
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      features: [
        "Security Audits",
        "Penetration Testing",
        "SOC2 Compliance",
        "Incident Response",
        "Security Training",
        "Threat Intelligence"
      ],
      benefits: [
        "Protect against cyber threats",
        "Achieve compliance standards",
        "Reduce security risks",
        "Build customer trust"
      ],
      link: "/services/cybersecurity"
    },
    {
      id: 'cloud',
      title: "Cloud Services",
      description: "Scalable cloud solutions and DevOps services for modern application development",
      icon: Cloud,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Cloud Migration",
        "DevOps Automation",
        "Container Orchestration",
        "Serverless Architecture",
<<<<<<< HEAD
        "Multi-Cloud Management",
        "Cloud Security",
        "Performance Optimization"
      ],
      link: "/cloud-devops"
    },
    {
      title: "Software Development",
      description: "Custom software and application development",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      services: [
        "Web Application Development",
        "Mobile App Development",
        "API Development",
        "Microservices Architecture",
        "Legacy System Modernization",
        "Quality Assurance & Testing",
        "DevOps Implementation",
        "Code Review & Optimization"
      ],
      link: "/services"
    },
    {
      title: "Data & Analytics",
      description: "Data-driven insights and business intelligence",
      icon: Database,
      color: "from-indigo-500 to-purple-500",
      services: [
        "Data Engineering",
        "Business Intelligence",
        "Data Warehousing",
        "Real-time Analytics",
        "Data Visualization",
        "Big Data Processing",
        "Data Governance",
        "Predictive Modeling"
      ],
      link: "/services"
    },
    {
      title: "IoT & Edge Computing",
      description: "Connected devices and edge solutions",
      icon: Network,
      color: "from-teal-500 to-green-500",
      services: [
        "IoT Platform Development",
        "Edge Computing Solutions",
        "Sensor Integration",
        "Device Management",
        "Real-time Monitoring",
        "Smart City Solutions",
        "Industrial IoT",
        "IoT Security"
      ],
      link: "/iot-services"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum solutions",
      icon: Atom,
      color: "from-violet-500 to-purple-500",
      services: [
        "Quantum Algorithms",
        "Optimization Problems",
        "Cryptography",
        "Research & Development",
        "Quantum Machine Learning",
        "Quantum Simulation",
        "Quantum Networking",
        "Quantum Security"
      ],
      link: "/quantum-computing"
    },
    {
      title: "Blockchain & Web3",
      description: "Decentralized technology solutions",
      icon: Link,
      color: "from-yellow-500 to-orange-500",
      services: [
        "Smart Contract Development",
        "DeFi Solutions",
        "NFT Platforms",
        "Blockchain Infrastructure",
        "Web3 Applications",
        "Cryptocurrency Solutions",
        "Supply Chain Tracking",
        "Identity Management"
      ],
      link: "/blockchain-services"
    }
  ];

  const featuredServices = [
    {
      title: "AI Autonomous Business Platform",
      description: "Complete AI-powered business automation platform that revolutionizes how organizations operate",
      icon: Rocket,
      features: ["Process Automation", "Decision Intelligence", "Predictive Analytics", "24/7 Operations", "Scalable Architecture"],
      link: "/services/ai-autonomous-business",
      price: "Starting at $2,999/month",
      category: "AI Solutions"
    },
    {
      title: "Quantum Edge Computing Platform",
      description: "Next-generation quantum computing services with edge computing capabilities",
      icon: Cpu,
      features: ["Quantum Algorithms", "Edge Processing", "Real-time Optimization", "Hybrid Computing", "Advanced Research"],
      link: "/services/quantum-computing",
      price: "Starting at $5,999/month",
      category: "Quantum Computing"
    },
    {
      title: "Advanced Cybersecurity Suite",
      description: "Comprehensive security and compliance platform with AI-powered threat detection",
      icon: Lock,
      features: ["Threat Intelligence", "Automated Response", "Compliance Management", "Security Training", "24/7 Monitoring"],
      link: "/services/cybersecurity",
      price: "Starting at $3,999/month",
      category: "Cybersecurity"
    },
    {
      title: "Cloud-Native DevOps Platform",
      description: "Enterprise-grade DevOps automation with cloud-native architecture",
      icon: Server,
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Multi-Cloud Support", "Security Integration", "Performance Monitoring"],
      link: "/services/cloud-devops",
      price: "Starting at $1,999/month",
      category: "Cloud & DevOps"
=======
        "Monitoring & Logging",
        "Cost Optimization"
      ],
      benefits: [
        "Reduce infrastructure costs",
        "Improve scalability and reliability",
        "Accelerate development cycles",
        "Enhanced disaster recovery"
      ],
      link: "/services/cloud"
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239
    }
  ];

  const stats = [
    {
      icon: Globe,
      value: "500+",
      label: "Projects Delivered",
      description: "Across 25+ countries"
    },
    {
      icon: Code,
      value: "50+",
      label: "Technologies",
      description: "Modern tech stack"
    },
    {
      icon: Star,
      value: "99.9%",
      label: "Client Satisfaction",
      description: "Proven track record"
    },
    {
      icon: Lock,
      value: "100%",
      label: "Security",
      description: "Zero breaches"
    }
  ];

<<<<<<< HEAD
  const technologies = [
    { name: "AI/ML", icon: Brain, color: "from-purple-500 to-pink-500" },
    { name: "Cloud", icon: Cloud, color: "from-blue-500 to-cyan-500" },
    { name: "Security", icon: Shield, color: "from-red-500 to-orange-500" },
    { name: "Quantum", icon: Atom, color: "from-violet-500 to-purple-500" },
    { name: "Blockchain", icon: Link, color: "from-yellow-500 to-orange-500" },
    { name: "IoT", icon: Network, color: "from-teal-500 to-green-500" },
    { name: "DevOps", icon: Server, color: "from-indigo-500 to-blue-500" },
    { name: "Data", icon: Database, color: "from-green-500 to-emerald-500" }
  ];
=======
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse-slow"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Hero Section */}
<<<<<<< HEAD
      <section className="pt-24 pb-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI and technology solutions to transform your business
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From artificial intelligence to quantum computing, cybersecurity to cloud infrastructure, 
              we provide cutting-edge solutions that drive innovation, efficiency, and growth.
            </p>
=======
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Our Services
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation
            </motion.p>
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Featured Services */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Featured Solutions
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our flagship services that deliver exceptional value and results
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Card content */}
                <div className="relative bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-slate-800/70 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-6">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-400">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-cyan-400 font-semibold text-lg">
                      {service.price}
                    </div>
                    <Link 
                      to={service.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold group-hover:translate-x-1 transform transition-transform duration-200"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-black/30 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive range of technology solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Background glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Card content */}
                <div className="relative bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-slate-800/70 backdrop-blur-sm">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {category.services.slice(0, 6).map((service, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        {service}
                      </li>
                    ))}
                    {category.services.length > 6 && (
                      <li className="text-sm text-cyan-400">
                        +{category.services.length - 6} more services
                      </li>
                    )}
                  </ul>
                  
                  <Link 
                    to={category.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold group-hover:translate-x-1 transform transition-transform duration-200"
                  >
                    Explore {category.title} →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies powering our innovative solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-cyan-500/25`}
                  whileHover={{ rotate: 5 }}
                >
                  <tech.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/30 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
=======
      {/* Stats Section */}
      <section className="py-16 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="text-center group"
              >
<<<<<<< HEAD
                <motion.div 
                  className="text-4xl md:text-6xl font-bold text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
=======
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-full group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <Link 
                    to={service.link}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                  >
                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">Business Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to={service.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  Learn More About {service.title}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Let's discuss how our AI and technology solutions can drive your success and accelerate your growth
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact"
                className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
              </Link>
              <Link 
                to="/about"
                className="group px-10 py-5 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
=======
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <span className="flex items-center justify-center">
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Request a Quote
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
