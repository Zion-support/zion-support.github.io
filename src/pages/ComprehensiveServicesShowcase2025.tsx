import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Bot,
  Workflow,
  BarChart3,
  Cpu,
  Database,
  Network,
  Globe,
  Target,
  Rocket,
  Lightbulb,
  Settings,
  Activity,
  Eye,
  Lock,
  Server,
  Cloud,
  Smartphone,
  Monitor,
  Code,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  Play,
  Award,
  Building2,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  BookOpen,
  Video,
  GraduationCap,
  PenTool,
  Handshake,
  ShoppingCart,
  Heart,
  BarChart,
  PieChart,
  LineChart,
  Megaphone,
  Calendar,
  FileText,
  Mail,
  MessageSquare,
  Phone,
  Filter,
  Search,
  AlertTriangle,
  Download,
  Share2,
  MapPin
} from 'lucide-react';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const featuredServices = [
    {
      title: "AI Autonomous Business Operations Platform",
      description: "Transform your business operations with AI that autonomously manages, optimizes, and scales your entire business ecosystem in real-time.",
      icon: Brain,
      category: "AI & Automation",
      pricing: "From $2,999/month",
      features: ["AI-Powered Decision Making", "Automated Process Orchestration", "Predictive Analytics", "Intelligent Risk Management"],
      link: "/services/ai-autonomous-business-operations-platform",
      color: "from-zion-purple to-zion-purple-dark"
    },
    {
      title: "AI Customer Experience Analytics Platform",
      description: "Transform customer relationships with AI-powered analytics that understand, predict, and optimize every customer interaction across all touchpoints.",
      icon: Heart,
      category: "Customer Experience",
      pricing: "From $1,999/month",
      features: ["AI-Powered Sentiment Analysis", "Real-Time Customer Journey Mapping", "Predictive Customer Behavior", "Omnichannel Experience Monitoring"],
      link: "/services/ai-customer-experience-analytics-platform",
      color: "from-zion-cyan to-zion-purple"
    },
    {
      title: "Quantum Edge Computing Solutions",
      description: "Revolutionize your infrastructure with the world's first quantum-enhanced edge computing platform for unprecedented performance.",
      icon: Atom,
      category: "Infrastructure",
      pricing: "From $3,999/month",
      features: ["Quantum Computing Integration", "Edge AI Processing", "5G/6G Network Optimization", "Quantum-Secure Edge"],
      link: "/services/quantum-edge-computing-solutions",
      color: "from-zion-cyan to-zion-purple"
    },
    {
      title: "AI Project Management Platform",
      description: "Transform your project management with AI-powered insights, automated workflows, and intelligent resource allocation.",
      icon: Workflow,
      category: "Project Management",
      pricing: "From $99/month",
      features: ["AI-Powered Task Prioritization", "Smart Workflow Automation", "Predictive Project Analytics", "Intelligent Team Management"],
      link: "/services/ai-project-management-platform",
      color: "from-zion-purple to-zion-cyan"
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      icon: Brain,
      services: [
        "AI Autonomous Business Operations",
        "AI Customer Experience Analytics",
        "AI Project Management Platform",
        "AI Content Creation Studio",
        "AI Business Intelligence Dashboard",
        "AI Marketing Automation Platform"
      ],
      color: "from-zion-purple to-zion-purple-dark"
    },
    {
      name: "Quantum & Edge Computing",
      icon: Atom,
      services: [
        "Quantum Edge Computing Solutions",
        "Quantum Computing as a Service",
        "Edge AI Processing Platform",
        "5G/6G Network Optimization",
        "IoT Edge Computing Solutions"
      ],
      color: "from-zion-cyan to-zion-purple"
    },
    {
      name: "IT Infrastructure",
      icon: Server,
      services: [
        "Cloud & DevOps Solutions",
        "Cybersecurity Suite",
        "Blockchain Enterprise Solutions",
        "Digital Transformation Services",
        "IT Consulting & Strategy"
      ],
      color: "from-zion-cyan to-zion-purple-dark"
    },
    {
      name: "Micro SaaS Solutions",
      icon: Zap,
      services: [
        "Customer Feedback Surveys",
        "Employee Scheduling SaaS",
        "Affiliate Marketing Tracker",
        "Returns Management Platform",
        "Vendor Risk Management"
      ],
      color: "from-zion-purple to-zion-cyan"
    }
  ];

  const keyBenefits = [
    {
      title: "Cutting-Edge Innovation",
      description: "Access to the latest AI, quantum computing, and edge computing technologies that give you a competitive advantage.",
      icon: Rocket,
      color: "from-zion-purple to-zion-cyan"
    },
    {
      title: "Scalable Solutions",
      description: "From startup-friendly micro SaaS to enterprise-grade platforms, our solutions grow with your business needs.",
      icon: TrendingUp,
      color: "from-zion-cyan to-zion-purple"
    },
    {
      title: "Expert Support",
      description: "24/7 technical support and dedicated account management to ensure your success with our solutions.",
      icon: Users,
      color: "from-zion-purple to-zion-purple-dark"
    },
    {
      title: "ROI Focused",
      description: "Proven track record of delivering measurable business value and rapid return on investment for our clients.",
      icon: DollarSign,
      color: "from-zion-cyan to-zion-purple-dark"
    }
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate-darker">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {" "}2025 Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-8 leading-relaxed">
              Discover our comprehensive suite of innovative AI, IT, and micro SaaS solutions designed to transform your business operations and drive exponential growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Featured
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {" "}Innovative Services
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Our flagship solutions that are revolutionizing industries and driving digital transformation across the globe.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-slate-light/20 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm font-medium rounded-full mb-3">
                      {service.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-zinc-400 mb-4 leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-zion-cyan font-semibold text-lg mb-3">{service.pricing}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-zinc-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={service.link}
                    className="inline-flex items-center text-zion-cyan hover:text-white font-semibold transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Complete
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {" "}Service Portfolio
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Explore our comprehensive range of services across AI, quantum computing, IT infrastructure, and micro SaaS solutions.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-slate-light/20 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">{category.name}</h3>
                <ul className="space-y-3">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-zinc-300">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Choose
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {" "}Zion Tech Group?
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-purple/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {" "}Your Business?
              </span>
            </h2>
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
              Join hundreds of companies already leveraging our innovative solutions to gain competitive advantages and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
                <Calendar className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Get in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {" "}Touch
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Ready to discuss how our innovative solutions can transform your business? Contact us today.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Phone</h3>
              <p className="text-zinc-400">+1 302 464 0950</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-2xl mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Email</h3>
              <p className="text-zinc-400">kleber@ziontechgroup.com</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple-dark rounded-2xl mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Address</h3>
              <p className="text-zinc-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
