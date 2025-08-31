import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Brain, 
  Atom, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Zap, 
  Globe, 
  Lock,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Smartphone,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  RefreshCw,
  Target,
  Lightbulb,
  BarChart,
  Layers,
  GitBranch,
  Monitor,
  Settings,
  Key,
  Users,
  Building2,
  Satellite,
  Microscope,
  Dna,
  Leaf,
  Gamepad2,
  Coins,
  Activity,
  FileText,
  MessageCircle,
  Search,
  Palette,
  Zap as ZapIcon
} from 'lucide-react';

const EmergingTech = () => {
  const technologies = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Artificial Intelligence",
      description: "Advanced AI solutions including machine learning, deep learning, and neural networks.",
      applications: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Autonomous Systems"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Atom className="w-12 h-12" />,
      title: "Quantum Computing",
      description: "Next-generation computing power for complex problem-solving and cryptography.",
      applications: ["Cryptography", "Optimization", "Simulation", "Machine Learning"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Satellite className="w-12 h-12" />,
      title: "Edge Computing",
      description: "Distributed computing architecture for real-time data processing.",
      applications: ["IoT Devices", "Real-time Analytics", "Autonomous Vehicles", "Smart Cities"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Dna className="w-12 h-12" />,
      title: "Biotechnology",
      description: "Innovative solutions combining technology with biological systems.",
      applications: ["Healthcare", "Agriculture", "Environmental Monitoring", "Drug Discovery"],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Green Technology",
      description: "Sustainable technology solutions for environmental challenges.",
      applications: ["Renewable Energy", "Carbon Capture", "Smart Grids", "Sustainable Materials"],
      color: "from-yellow-500 to-green-500"
    },
    {
      icon: <Gamepad2 className="w-12 h-12" />,
      title: "Extended Reality",
      description: "Immersive technologies including VR, AR, and mixed reality.",
      applications: ["Training & Education", "Entertainment", "Healthcare", "Industrial Design"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const innovations = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation Lab",
      description: "Research and development facility for cutting-edge technologies"
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "R&D Partnerships",
      description: "Collaborations with universities and research institutions"
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Innovation Funding",
      description: "Investment in emerging technology startups and projects"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Patent Portfolio",
      description: "Intellectual property protection for innovative solutions"
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
      description: "AI-powered diagnostics, personalized medicine, and telemedicine solutions.",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      industry: "Manufacturing",
      description: "Smart factories, predictive maintenance, and autonomous robotics.",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      industry: "Finance",
      description: "Blockchain solutions, AI trading, and cybersecurity innovations.",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      industry: "Transportation",
      description: "Autonomous vehicles, smart traffic systems, and mobility solutions.",
      icon: <Car className="w-8 h-8" />
    },
    {
      industry: "Energy",
      description: "Smart grids, renewable energy optimization, and energy storage.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      industry: "Education",
      description: "Virtual learning environments, AI tutors, and adaptive learning.",
      icon: <Globe className="w-8 h-8" />
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
              Emerging
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Technologies
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore the cutting edge of technology with our innovative solutions in AI, 
              quantum computing, biotechnology, and more. Shape the future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                Explore Innovations
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/research-development"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Research & Development
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emerging Technologies */}
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
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Revolutionary technologies that are transforming industries and creating new possibilities
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
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`text-transparent bg-clip-text bg-gradient-to-r ${tech.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.applications.map((app, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Initiatives */}
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
              Innovation Initiatives
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our commitment to advancing technology through research, partnerships, and investment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">{innovation.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{innovation.title}</h3>
                <p className="text-gray-300 text-sm">{innovation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
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
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              How emerging technologies are transforming various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's explore how emerging technologies can transform your business 
              and create new opportunities for innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                Schedule Innovation Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/industry-solutions"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Industry Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EmergingTech;