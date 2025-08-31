import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Truck, 
  Building2, 
  Stethoscope,
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  TrendingUp,
  Target,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  ArrowRight,
  Leaf,
  Rocket,
  Globe,
  Award,
  Gauge,
  Activity,
  Smartphone,
  Camera,
  Microscope,
  Pill,
  UserCheck,
  FileText,
  AlertTriangle,
  Car,
  Wifi,
  TrafficCone,
  Heart,
  Eye as EyeIcon
} from 'lucide-react';

export default function RevolutionaryAIServicesShowcase2025() {
  const revolutionaryServices = [
    {
      id: 1,
      name: "AI Autonomous Logistics Platform",
      description: "Revolutionary AI-powered logistics platform with autonomous vehicles, predictive analytics, and real-time optimization.",
      icon: Truck,
      color: "from-blue-500 to-cyan-500",
      href: "/services/ai-autonomous-logistics-platform",
      features: [
        "AI-powered route optimization with real-time traffic analysis",
        "Autonomous vehicle fleet management and coordination",
        "Predictive demand forecasting and inventory optimization",
        "Real-time shipment tracking with blockchain verification",
        "Smart warehouse automation and robotic picking systems"
      ],
      benefits: [
        "Reduce logistics costs by 30-45%",
        "Improve delivery accuracy to 99.8%",
        "Cut carbon emissions by 25-40%",
        "Increase warehouse efficiency by 50-70%"
      ],
      pricing: {
        starter: "$2,999/month",
        professional: "$7,999/month",
        enterprise: "Custom"
      },
      marketPrice: "$5,000 - $15,000/month",
      competitors: ["Flexport", "Convoy", "KeepTruckin", "Project44"],
      roi: "300-500% within 18 months"
    },
    {
      id: 2,
      name: "AI Smart City Platform",
      description: "Transform urban infrastructure with AI-powered smart city solutions for traffic, energy, safety, and sustainability.",
      icon: Building2,
      color: "from-green-500 to-emerald-500",
      href: "/services/ai-smart-city-platform",
      features: [
        "AI-powered traffic management with real-time optimization",
        "Smart energy grid management and demand forecasting",
        "Intelligent waste management and recycling optimization",
        "Public safety monitoring with predictive crime prevention",
        "Environmental monitoring and air quality management"
      ],
      benefits: [
        "Reduce traffic congestion by 35-50%",
        "Lower energy consumption by 25-40%",
        "Improve public safety response times by 60-80%",
        "Cut operational costs by 30-45%"
      ],
      pricing: {
        starter: "$25,000/month",
        professional: "$75,000/month",
        enterprise: "Custom"
      },
      marketPrice: "$50,000 - $200,000/month",
      competitors: ["Siemens", "IBM", "Cisco", "Schneider Electric"],
      roi: "250-400% within 24 months"
    },
    {
      id: 3,
      name: "AI Healthcare Diagnostics Platform",
      description: "Revolutionary AI-powered healthcare diagnostics platform for medical imaging, disease detection, and treatment planning.",
      icon: Stethoscope,
      color: "from-purple-500 to-pink-500",
      href: "/services/ai-healthcare-diagnostics-platform",
      features: [
        "AI-powered medical image analysis (X-ray, MRI, CT, ultrasound)",
        "Predictive disease risk assessment and early detection",
        "Natural language processing for medical report generation",
        "Real-time patient monitoring and vital sign analysis",
        "Drug interaction checking and medication optimization"
      ],
      benefits: [
        "Improve diagnostic accuracy by 25-40%",
        "Reduce diagnostic time by 60-80%",
        "Lower healthcare costs by 20-35%",
        "Reduce medical errors by 45-65%"
      ],
      pricing: {
        starter: "$15,000/month",
        professional: "$45,000/month",
        enterprise: "Custom"
      },
      marketPrice: "$30,000 - $100,000/month",
      competitors: ["Butterfly Network", "Zebra Medical", "Aidoc", "Enlitic"],
      roi: "400-600% within 12 months"
    }
  ];

  const technologyStack = [
    "Machine Learning & Deep Neural Networks",
    "Computer Vision & Image Recognition",
    "Natural Language Processing",
    "IoT Sensors & Edge Computing",
    "Blockchain for Data Security",
    "5G Networks for Real-time Communication",
    "Cloud-native Architecture (AWS/Azure/GCP)",
    "Predictive Analytics & Time Series Forecasting",
    "Real-time Data Processing & Analytics",
    "Mobile Applications & APIs"
  ];

  const industryApplications = [
    "Logistics & Supply Chain Management",
    "Urban Infrastructure & Smart Cities",
    "Healthcare & Medical Diagnostics",
    "Manufacturing & Industrial Automation",
    "Financial Services & Risk Management",
    "Energy & Utilities Management",
    "Transportation & Mobility",
    "Environmental Monitoring & Sustainability",
    "Public Safety & Security",
    "Education & Research"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Revolutionary AI Services Showcase 2025 - Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's revolutionary AI services: AI Autonomous Logistics Platform, AI Smart City Platform, and AI Healthcare Diagnostics Platform. Transform your business with cutting-edge AI solutions." />
        <meta name="keywords" content="AI services, autonomous logistics, smart city, healthcare diagnostics, machine learning, artificial intelligence, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-ai-services-showcase-2025" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                <Rocket className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionary AI Services Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover Zion Tech Group's cutting-edge AI solutions that are transforming 
              industries and revolutionizing business operations worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Get Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ArrowRight className="h-5 w-5" />
                Explore Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary AI Services Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our flagship AI services combine cutting-edge technology with industry expertise 
              to deliver unprecedented value and transformation.
            </p>
          </motion.div>

          <div className="space-y-12">
            {revolutionaryServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-3xl border border-slate-600/30 overflow-hidden"
              >
                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Service Info */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 bg-gradient-to-r ${service.color} rounded-2xl`}>
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">
                          {service.name}
                        </h3>
                      </div>
                      
                      <p className="text-xl text-gray-300 mb-8">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {service.features.slice(0, 3).map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-2 text-gray-300">
                                <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                          <ul className="space-y-2">
                            {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start gap-2 text-gray-300">
                                <Star className="h-4 w-4 text-yellow-400 mt-1 flex-shrink-0" />
                                <span className="text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          to={service.href}
                          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-center"
                        >
                          Learn More
                        </Link>
                        <button className="px-6 py-3 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                          Get Demo
                        </button>
                      </div>
                    </div>

                    {/* Right Column - Pricing & Market Info */}
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-2xl p-6 border border-slate-500/30">
                        <h4 className="text-xl font-bold text-white mb-4">Pricing Plans</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Starter:</span>
                            <span className="text-green-400 font-semibold">{service.pricing.starter}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Professional:</span>
                            <span className="text-blue-400 font-semibold">{service.pricing.professional}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Enterprise:</span>
                            <span className="text-purple-400 font-semibold">{service.pricing.enterprise}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-2xl p-6 border border-slate-500/30">
                        <h4 className="text-xl font-bold text-white mb-4">Market Information</h4>
                        <div className="space-y-3">
                          <div>
                            <span className="text-gray-300 text-sm">Market Price Range:</span>
                            <p className="text-green-400 font-semibold">{service.marketPrice}</p>
                          </div>
                          <div>
                            <span className="text-gray-300 text-sm">Expected ROI:</span>
                            <p className="text-blue-400 font-semibold">{service.roi}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-2xl p-6 border border-slate-500/30">
                        <h4 className="text-xl font-bold text-white mb-4">Competitors</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.competitors.map((competitor, compIndex) => (
                            <span key={compIndex} className="px-3 py-1 bg-slate-600 rounded-full text-xs text-gray-300">
                              {competitor}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with the latest AI, machine learning, and cloud technologies 
              for maximum performance, scalability, and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-xl border border-slate-500/30"
              >
                <Cpu className="h-8 w-8 text-purple-400 mb-4" />
                <p className="text-gray-200 text-lg">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications & Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI services serve diverse industries with specialized solutions 
              for every business challenge and opportunity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryApplications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <Globe className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">{application}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with deep industry expertise 
              to deliver transformative solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6"
            >
              <div className="p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl mb-6 inline-block">
                <Award className="h-12 w-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Proven Expertise</h3>
              <p className="text-gray-300">
                Over 15 years of experience in AI, machine learning, and enterprise solutions 
                with successful implementations across Fortune 500 companies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl mb-6 inline-block">
                <Zap className="h-12 w-12 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation Leadership</h3>
              <p className="text-gray-300">
                Pioneering the latest AI technologies and methodologies to stay ahead 
                of industry trends and deliver cutting-edge solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl mb-6 inline-block">
                <Users className="h-12 w-12 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Dedicated Support</h3>
              <p className="text-gray-300">
                24/7 technical support, dedicated account managers, and comprehensive 
                training to ensure your success with our AI platforms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our AI experts for a personalized consultation 
              and demo of our revolutionary AI platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Phone</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Address</h3>
                  <p className="text-gray-300">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-500 rounded-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Business Hours</h3>
                  <p className="text-gray-300">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl border border-slate-500/30"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Get Free Consultation</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                />
                <select className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:outline-none">
                  <option value="">Select Service of Interest</option>
                  <option value="logistics">AI Autonomous Logistics Platform</option>
                  <option value="smart-city">AI Smart City Platform</option>
                  <option value="healthcare">AI Healthcare Diagnostics Platform</option>
                  <option value="multiple">Multiple Services</option>
                </select>
                <textarea
                  placeholder="Tell us about your AI needs and goals"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  Request Free Consultation
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}