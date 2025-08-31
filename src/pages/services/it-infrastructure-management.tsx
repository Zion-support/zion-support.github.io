import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Shield, 
  Network, 
  Cloud, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Cpu,
  Database,
  Globe,
  Target,
  Award,
  Star,
  Phone,
  Mail,
  MapPin,
  Zap,
  Eye,
  Activity,
  FileText,
  Download,
  Share2,
  Lock,
  Wifi,
  HardDrive,
  Monitor,
  Smartphone,
  Router,
  Firewall,
  Recovery,
  LoadBalancer,
  Virtualization,
  Containerization,
  Microservices,
  Monitoring,
  Alerting,
  Logging,
  Security,
  Compliance,
  Performance,
  Scalability,
  Reliability,
  Uptime,
  SLA
} from 'lucide-react';

export default function ITInfrastructureManagement() {
  const features = [
    {
      icon: Server,
      title: "Server Management",
      description: "Comprehensive server administration, monitoring, and optimization"
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Design, implement, and maintain robust network architectures"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Multi-cloud management and hybrid cloud solutions"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with SOC 2, ISO 27001 compliance"
    },
    {
      icon: Activity,
      title: "24/7 Monitoring",
      description: "Real-time infrastructure monitoring with proactive alerting"
    },
    {
      icon: HardDrive,
      title: "Disaster Recovery",
      description: "Comprehensive backup and business continuity solutions"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$3,500",
      period: "/month",
      description: "Perfect for small businesses with basic infrastructure needs",
      features: [
        "Up to 10 servers",
        "Basic network monitoring",
        "Standard security",
        "8/5 support",
        "Monthly reports",
        "Basic backup solution"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$8,500",
      period: "/month",
      description: "Ideal for growing businesses with complex infrastructure",
      features: [
        "Up to 50 servers",
        "Advanced monitoring",
        "Enhanced security",
        "24/7 support",
        "Weekly reports",
        "Advanced backup & DR",
        "Performance optimization"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$18,500",
      period: "/month",
      description: "For large organizations requiring enterprise-grade infrastructure",
      features: [
        "Unlimited servers",
        "Full infrastructure management",
        "Enterprise security",
        "24/7 dedicated support",
        "Daily reports",
        "Comprehensive DR solution",
        "Custom solutions"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Reduce Downtime by 99.9%",
      description: "Proactive monitoring and maintenance prevent costly outages"
    },
    {
      icon: Clock,
      title: "Save 40+ Hours Per Week",
      description: "Automate routine tasks and focus on strategic initiatives"
    },
    {
      icon: Users,
      title: "Improve Team Productivity",
      description: "Reliable infrastructure enables teams to work efficiently"
    },
    {
      icon: Target,
      title: "Cut Infrastructure Costs",
      description: "Optimize resources and reduce operational expenses by 30%"
    }
  ];

  const services = [
    {
      icon: Server,
      title: "Server Administration",
      description: "Windows, Linux, and Unix server management"
    },
    {
      icon: Network,
      title: "Network Design & Implementation",
      description: "LAN, WAN, and wireless network solutions"
    },
    {
      icon: Cloud,
      title: "Cloud Migration & Management",
      description: "AWS, Azure, and Google Cloud expertise"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Firewall, VPN, and security monitoring"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "SQL, NoSQL, and data warehouse solutions"
    },
    {
      icon: Cpu,
      title: "Virtualization",
      description: "VMware, Hyper-V, and container solutions"
    },
    {
      icon: HardDrive,
      title: "Backup & Recovery",
      description: "Automated backup and disaster recovery"
    },
    {
      icon: Activity,
      title: "Infrastructure Monitoring",
      description: "Real-time performance and availability monitoring"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Server className="w-4 h-4 mr-2" />
              IT Infrastructure Management
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}IT Infrastructure
              </span>
              <br />Management Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert IT infrastructure management to keep your business running smoothly. 
              From server administration to cloud migration, we handle it all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Free Assessment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Our Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Infrastructure Management
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to maintain a robust and reliable IT infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Infrastructure Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From basic maintenance to complex cloud migrations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Professional IT Management?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your IT infrastructure with expert management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your infrastructure needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Optimize Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that trust us with their IT infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Free Assessment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}