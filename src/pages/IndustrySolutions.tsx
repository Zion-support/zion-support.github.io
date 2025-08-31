import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  BarChart3, 
  Zap, 
  Globe, 
  Lock,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Cpu,
  Server,
  Smartphone,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Factory,
  Car,
  Plane,
  Ship,
  Truck,
  Train,
  Bus,
  Bike,
  Rocket
} from 'lucide-react';

const IndustrySolutions = () => {
  const industries = [
    {
      icon: <Factory className="w-12 h-12" />,
      title: "Manufacturing",
      description: "Industry 4.0 solutions with IoT, predictive maintenance, and smart factory capabilities.",
      solutions: ["Smart Manufacturing", "Predictive Maintenance", "Quality Control", "Supply Chain Optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Financial Services",
      description: "Secure, compliant solutions for banking, insurance, and fintech companies.",
      solutions: ["Digital Banking", "Risk Management", "Compliance Automation", "AI Trading"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      title: "Healthcare",
      description: "HIPAA-compliant solutions with AI-powered diagnostics and patient care systems.",
      solutions: ["Telemedicine", "AI Diagnostics", "Patient Management", "Medical IoT"],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Retail & E-commerce",
      description: "Omnichannel solutions with AI-powered personalization and inventory management.",
      solutions: ["Omnichannel Commerce", "AI Personalization", "Inventory Management", "Customer Analytics"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Government",
      description: "Secure, scalable solutions meeting strict government compliance requirements.",
      solutions: ["Digital Government", "Cybersecurity", "Data Analytics", "Citizen Services"],
      color: "from-gray-500 to-slate-500"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Education",
      description: "Digital learning platforms with AI tutoring and adaptive learning systems.",
      solutions: ["E-Learning Platforms", "AI Tutoring", "Student Analytics", "Virtual Classrooms"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: "Automotive",
      description: "Connected vehicle solutions and autonomous driving technology.",
      solutions: ["Connected Vehicles", "Autonomous Driving", "Fleet Management", "Predictive Maintenance"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Plane className="w-12 h-12" />,
      title: "Aerospace",
      description: "Advanced aerospace technology and satellite communication solutions.",
      solutions: ["Satellite Systems", "Aircraft Maintenance", "Navigation Systems", "Communication Networks"],
      color: "from-sky-500 to-blue-500"
    },
    {
      icon: <Ship className="w-12 h-12" />,
      title: "Maritime",
      description: "Maritime technology solutions for shipping and port operations.",
      solutions: ["Port Automation", "Vessel Tracking", "Cargo Management", "Maritime Security"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Logistics",
      description: "Supply chain optimization and logistics automation solutions.",
      solutions: ["Route Optimization", "Warehouse Automation", "Real-time Tracking", "Demand Forecasting"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Wifi className="w-12 h-12" />,
      title: "Telecommunications",
      description: "5G networks, IoT connectivity, and communication infrastructure.",
      solutions: ["5G Networks", "IoT Connectivity", "Network Security", "Cloud Communications"],
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Energy",
      description: "Smart grid solutions and renewable energy technology.",
      solutions: ["Smart Grid", "Renewable Energy", "Energy Storage", "Grid Security"],
      color: "from-yellow-500 to-green-500"
    }
  ];

  const technologies = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Artificial Intelligence",
      description: "Machine learning, deep learning, and AI-powered automation"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Computing",
      description: "Scalable cloud infrastructure and platform services"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Big Data Analytics",
      description: "Data processing, analytics, and business intelligence"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "IoT & Edge Computing",
      description: "Connected devices and edge processing capabilities"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Advanced security and threat protection solutions"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Robotic Process Automation",
      description: "Automated workflows and process optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Industry-Specific
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Tailored technology solutions designed for your industry's unique challenges, 
              compliance requirements, and growth objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                Get Industry Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced technologies that power industry-specific solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-cyan-400 mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your industry's specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`text-transparent bg-clip-text bg-gradient-to-r ${industry.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.title}</h3>
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Industry Transformation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our industry-specific solutions can address your unique challenges 
              and drive innovation in your sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                Schedule Industry Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/enterprise"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Enterprise Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndustrySolutions;