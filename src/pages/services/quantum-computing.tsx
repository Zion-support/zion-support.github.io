import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Brain, 
  Zap, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Database,
  Network,
  Server,
  Smartphone,
  Monitor,
  BarChart3,
  MessageCircle,
  Clock,
  Target,
  Sparkles,
  FileText,
  Globe,
  Lock,
  Shield,
  Calculator,
  Microscope,
  Flask,
  Rocket,
  Code,
  BookOpen
} from 'lucide-react';

const QuantumComputing: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum Processing",
      description: "Harness the power of quantum mechanics for unprecedented computational speed",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "Quantum AI",
      description: "Quantum machine learning algorithms that outperform classical AI systems",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Quantum Optimization",
      description: "Solve complex optimization problems in seconds instead of years",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Lock,
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms",
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "Exponential speedup for complex computational problems",
    "Revolutionary breakthroughs in drug discovery and materials science",
    "Unbreakable quantum encryption for ultimate security",
    "Quantum machine learning with superior pattern recognition",
    "Optimization solutions for logistics, finance, and manufacturing",
    "Future-proof technology investment for competitive advantage"
  ];

  const applications = [
    {
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research with quantum molecular modeling",
      icon: Flask,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Financial Modeling",
      description: "Advanced risk assessment and portfolio optimization using quantum algorithms",
      icon: Calculator,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Logistics Optimization",
      description: "Solve complex routing and supply chain problems with quantum computing",
      icon: Network,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Climate Modeling",
      description: "Advanced climate prediction and environmental impact analysis",
      icon: Globe,
      color: "from-orange-500 to-red-500"
    }
  ];

  const quantumServices = [
    {
      title: "Quantum Consulting",
      description: "Strategic guidance on quantum computing adoption and implementation",
      icon: Users
    },
    {
      title: "Algorithm Development",
      description: "Custom quantum algorithms for specific business problems and use cases",
      icon: Code
    },
    {
      title: "Quantum Software",
      description: "Quantum programming and software development for quantum computers",
      icon: Cpu
    },
    {
      title: "Quantum Education",
      description: "Training programs and workshops for quantum computing literacy",
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Quantum Computing - Zion Tech Group"
        description="Revolutionary quantum computing solutions for the future. Quantum AI, optimization, cryptography, and consulting services for enterprises."
        keywords="quantum computing, quantum AI, quantum optimization, quantum cryptography, Zion Tech Group"
        ogType="website"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                <Atom className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Quantum Computing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of computing with quantum technology. From AI and optimization 
              to cryptography and drug discovery, unlock unprecedented computational power.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                <Rocket className="h-5 w-5 mr-2" />
                Quantum Assessment
              </button>
              <button className="btn-futuristic-outline">
                <FileText className="h-5 w-5 mr-2" />
                Download Quantum Guide
              </button>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum computing platform leverages the principles of quantum mechanics 
              to solve problems that are impossible for classical computers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-opacity-20 hover:bg-opacity-20 transition-all duration-300 h-full`}>
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quantum computing is transforming industries by solving previously 
              intractable problems with unprecedented speed and accuracy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={application.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 hover:border-slate-500 transition-all duration-300 h-full">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${application.color} mb-4`}>
                    <application.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {application.title}
                  </h3>
                  <p className="text-gray-300">
                    {application.description}
                  </p>
                </div>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the competition with quantum computing technology that 
              provides exponential advantages over classical computing methods.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From strategic consulting to custom algorithm development, we provide 
              comprehensive quantum computing solutions for enterprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-600 border border-slate-500 hover:border-slate-400 transition-all duration-300 h-full">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for the Quantum Future?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join the quantum revolution and gain a competitive advantage with 
              next-generation computing technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-white text-purple-600 hover:bg-gray-100">
                <MessageCircle className="h-5 w-5 mr-2" />
                Quantum Consultation
              </button>
              <button className="btn-futuristic-outline border-white text-white hover:bg-white hover:text-purple-600">
                <Clock className="h-5 w-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputing;