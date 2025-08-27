import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Code,
  Database,
  Network,
  Smartphone,
  Globe,
  Zap,
  Cpu,
  Lock,
  BarChart3,
  Rocket,
  Users,
  MessageCircle,
  FileText,
  Heart,
  Settings,
  HelpCircle,
  BookOpen,
  Briefcase,
  Target,
  Lightbulb,
  ShieldCheck,
  Server,
  Monitor,
  Wifi,
  Bluetooth,
  Satellite,
  Atom,
  Dna,
  Microscope,
  Flask,
  TestTube,
  Syringe,
  Stethoscope,
  HeartPulse,
  BrainCircuit,
  Eye,
  Ear,
  Hand,
  Foot,
  Bone,
  Tooth,
  Pill,
  Bandage,
  Thermometer,
  Scale,
  Calculator,
  ChartBar,
  PieChart,
  LineChart,
  Activity,
  TrendingUp,
  Minus,
  Plus,
  Equal,
  Divide,
  Percent,
  DollarSign,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  Ethereum,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  Safe,
  Vault,
  LockKeyhole,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Scan,
  Camera,
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  ChevronRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  MapPin,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced artificial intelligence solutions for business automation and intelligence",
      category: "AI Services",
      price: "$2,999/month",
      features: [
        "Predictive Analytics",
        "Natural Language Processing", 
        "Computer Vision",
        "Machine Learning Models",
        "AI-Powered Automation",
        "Intelligent Decision Support"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and infrastructure",
      category: "Security",
      price: "$499/month",
      features: [
        "Threat Detection & Response",
        "Vulnerability Assessment",
        "Security Auditing",
        "Incident Response",
        "Penetration Testing",
        "Security Training"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses",
      category: "Infrastructure",
      price: "$1,299/month",
      features: [
        "Cloud Migration",
        "Infrastructure as Code",
        "DevOps Automation",
        "Multi-cloud Strategy",
        "Cost Optimization",
        "Performance Monitoring"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions designed to meet your specific business needs",
      category: "Development",
      price: "$150/hour",
      features: [
        "Web Applications",
        "Mobile Apps",
        "API Development",
        "Database Design",
        "System Integration",
        "Maintenance & Support"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics",
      category: "Analytics",
      price: "$899/month",
      features: [
        "Data Visualization",
        "Business Intelligence",
        "Predictive Modeling",
        "Data Warehousing",
        "ETL Processes",
        "Real-time Analytics"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Robust network solutions for seamless connectivity and communication",
      category: "Infrastructure",
      price: "$799/month",
      features: [
        "Network Design",
        "Security Implementation",
        "Performance Optimization",
        "Monitoring & Alerting",
        "Disaster Recovery",
        "24/7 Support"
      ],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const additionalServices = [
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications",
      price: "$2,500+"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive web applications",
      price: "$3,000+"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "End-to-end business transformation consulting",
      price: "$5,000+"
    },
    {
      icon: Cpu,
      title: "IoT Solutions",
      description: "Internet of Things implementation and management",
      price: "$1,500+"
    }
  ];

  return (
    <>
      <SEO 
        title="Our Services - Zion Tech Group"
        description="Comprehensive technology services including AI, cybersecurity, cloud solutions, and custom development. Transform your business with our expertise."
        keywords="AI services, cybersecurity, cloud solutions, custom development, data analytics, network infrastructure"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                Comprehensive Technology Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Zion Tech Group delivers cutting-edge technology solutions designed to drive innovation, 
                enhance security, and accelerate your digital transformation journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 h-full">
                    <div className={`bg-gradient-to-r ${service.color} p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full mb-3">
                        {service.category}
                      </span>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <div className="text-2xl font-bold text-blue-400 mb-4">
                        {service.price}
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:text-blue-300"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Additional Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized services tailored to your specific industry and business requirements
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 text-center hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                  <div className="text-lg font-bold text-blue-400">{service.price}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our technology solutions can transform your business 
                and drive sustainable growth in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
                >
                  Contact Us Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-200"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
