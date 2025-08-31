import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Atom,
  Cpu,
  PenTool,
  Zap,
  Shield,
  Users,
  Database,
  Cloud,
  Lock,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Workflow,
  Target,
  Rocket,
  Award,
  Clock,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  BarChart3,
  Network,
  Server,
  Code,
  Eye,
  Search,
  Settings,
  Smartphone,
  Monitor,
  Palette,
  Video,
  Music,
  Image,
  FileText,
  MessageCircle,
  Handshake,
  Building2,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText as FileTextIcon,
  HelpCircle,
  BookOpen,
  Video as VideoIcon,
  GraduationCap,
  Lightbulb
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  const aiServices = [
    {
      icon: Brain,
      title: "AI Enterprise Intelligence Platform",
      description: "Transform your business with AI-powered intelligence. Get real-time insights, predictive analytics, and automated decision-making capabilities.",
      features: ["Advanced AI Analytics", "Business Intelligence Dashboard", "Predictive Analytics", "Enterprise Security"],
      pricing: "From $2,999/month",
      href: "/services/ai-enterprise-intelligence-platform",
      color: "from-cyan-400 to-blue-600"
    },
    {
      icon: Atom,
      title: "AI Quantum Computing Solutions",
      description: "Unlock the future of computing with AI-powered quantum solutions. Experience exponential speedup and solve previously impossible problems.",
      features: ["Quantum AI Processing", "Hybrid AI-Quantum Algorithms", "Quantum Speedup", "Quantum-Safe Security"],
      pricing: "From $4,999/month",
      href: "/services/ai-quantum-computing-solutions",
      color: "from-purple-400 to-cyan-600"
    },
    {
      icon: Brain,
      title: "AI Enterprise Automation Platform",
      description: "Streamline operations with intelligent automation. Reduce costs, improve efficiency, and scale your business operations.",
      features: ["Process Automation", "Intelligent Workflows", "AI Decision Making", "Scalable Architecture"],
      pricing: "From $3,999/month",
      href: "/services/ai-enterprise-automation-platform",
      color: "from-green-400 to-blue-600"
    },
    {
      icon: BarChart3,
      title: "AI Data Analytics Platform",
      description: "Turn data into actionable insights with advanced AI analytics. Make data-driven decisions faster than ever before.",
      features: ["Real-time Analytics", "Predictive Modeling", "Data Visualization", "AI Insights"],
      pricing: "From $2,499/month",
      href: "/services/ai-data-analytics-platform",
      color: "from-orange-400 to-red-600"
    }
  ];

  const itServices = [
    {
      icon: Cpu,
      title: "Edge Computing Solutions",
      description: "Bring computing power closer to your data sources with cutting-edge edge computing solutions. Experience ultra-low latency and real-time processing.",
      features: ["Edge Processing", "5G Network Integration", "Edge Security", "Global Edge Network"],
      pricing: "From $1,999/month",
      href: "/services/edge-computing-solutions",
      color: "from-blue-400 to-cyan-600"
    },
    {
      icon: Server,
      title: "IT Infrastructure Management",
      description: "Optimize your IT infrastructure with intelligent management solutions. Reduce costs and improve performance across your technology stack.",
      features: ["Infrastructure Monitoring", "Performance Optimization", "Cost Management", "Security Enhancement"],
      pricing: "From $2,999/month",
      href: "/services/it-infrastructure-management",
      color: "from-indigo-400 to-purple-600"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description: "Accelerate your development and deployment with modern cloud and DevOps practices. Build, deploy, and scale faster.",
      features: ["Cloud Migration", "DevOps Automation", "Container Orchestration", "CI/CD Pipelines"],
      pricing: "From $1,999/month",
      href: "/services/cloud-devops",
      color: "from-sky-400 to-blue-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with enterprise-grade cybersecurity solutions. Stay ahead of evolving threats with AI-powered security.",
      features: ["Threat Detection", "Incident Response", "Security Monitoring", "Compliance Management"],
      pricing: "From $2,499/month",
      href: "/services/cybersecurity",
      color: "from-red-400 to-pink-600"
    }
  ];

  const microSaaSServices = [
    {
      icon: PenTool,
      title: "AI Content Creation Studio",
      description: "Transform your content creation with AI-powered tools. Generate high-quality text, images, videos, and designs in minutes, not hours.",
      features: ["AI Writing", "Image Generation", "Video Creation", "Design Tools"],
      pricing: "From $99/month",
      href: "/services/ai-content-creation-studio",
      color: "from-green-400 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "AI Sales Copilot",
      description: "Boost your sales performance with AI-powered insights and automation. Close more deals and grow your revenue faster.",
      features: ["Lead Scoring", "Sales Analytics", "Automated Follow-ups", "Performance Insights"],
      pricing: "From $199/month",
      href: "/services/ai-sales-copilot",
      color: "from-emerald-400 to-teal-600"
    },
    {
      icon: Shield,
      title: "AI Compliance Assistant",
      description: "Simplify compliance management with AI-powered tools. Stay compliant with regulations and reduce compliance costs.",
      features: ["Regulation Tracking", "Compliance Monitoring", "Risk Assessment", "Audit Support"],
      pricing: "From $299/month",
      href: "/services/ai-compliance-assistant",
      color: "from-amber-400 to-orange-600"
    },
    {
      icon: DollarSign,
      title: "Cloud FinOps Optimizer",
      description: "Optimize your cloud spending with intelligent FinOps solutions. Reduce costs and improve cloud efficiency.",
      features: ["Cost Optimization", "Resource Management", "Budget Planning", "Performance Monitoring"],
      pricing: "From $399/month",
      href: "/services/cloud-finops-optimizer",
      color: "from-lime-400 to-green-600"
    }
  ];

  const industrySolutions = [
    {
      icon: Building2,
      title: "Healthcare Solutions",
      description: "Transform healthcare delivery with AI-powered solutions. Improve patient outcomes and operational efficiency.",
      features: ["Patient Analytics", "Diagnostic Support", "Operational Optimization", "Compliance Management"],
      href: "/solutions/healthcare"
    },
    {
      icon: Coins,
      title: "Financial Solutions",
      description: "Revolutionize financial services with cutting-edge technology. Enhance security, efficiency, and customer experience.",
      features: ["Risk Management", "Fraud Detection", "Customer Analytics", "Regulatory Compliance"],
      href: "/solutions/financial"
    },
    {
      icon: Factory,
      title: "Manufacturing Solutions",
      description: "Optimize manufacturing processes with Industry 4.0 solutions. Increase productivity and reduce costs.",
      features: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization", "Performance Analytics"],
      href: "/solutions/manufacturing"
    },
    {
      icon: Globe,
      title: "Government Solutions",
      description: "Modernize government services with innovative technology solutions. Improve citizen experience and operational efficiency.",
      features: ["Digital Services", "Data Analytics", "Security Enhancement", "Process Automation"],
      href: "/solutions/government"
    }
  ];

  const benefits = [
    {
      title: "Innovation Leadership",
      description: "Stay ahead of the competition with cutting-edge technology solutions",
      metric: "First-mover",
      icon: Rocket
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs and improve efficiency across your organization",
      metric: "20-60%",
      icon: DollarSign
    },
    {
      title: "Performance Improvement",
      description: "Enhance performance and productivity with AI-powered solutions",
      metric: "3-5x",
      icon: TrendingUp
    },
    {
      title: "Scalability",
      description: "Scale your operations seamlessly as your business grows",
      metric: "Unlimited",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl mb-6 shadow-2xl shadow-cyan-400/25">
              <Rocket className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Services Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge AI, IT, and Micro SaaS solutions 
              designed to transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI & Automation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions that drive innovation and efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-cyan-400 font-semibold">{service.pricing}</div>
                  <Link
                    to={service.href}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-16 px-4 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IT & Infrastructure Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build a robust, scalable, and secure technology foundation for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-blue-400 font-semibold">{service.pricing}</div>
                  <Link
                    to={service.href}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized software solutions designed to solve specific business challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {microSaaSServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-green-400 font-semibold">{service.pricing}</div>
                  <Link
                    to={service.href}
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-16 px-4 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored solutions designed for your industry's unique challenges and requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={solution.href}
                  className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium flex items-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of working with a technology leader
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations already using our innovative solutions 
              to drive growth, efficiency, and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 bg-zinc-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-cyan-400 mb-4" />
              <p className="text-white font-semibold">Phone</p>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-cyan-400 mb-4" />
              <p className="text-white font-semibold">Email</p>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
              <p className="text-white font-semibold">Address</p>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Missing icon components
const Factory = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);