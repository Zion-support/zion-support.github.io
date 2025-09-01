import React from 'react';
import { motion } from 'framer-motion';
import {

  Atom, 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  Rocket,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageSquare,
  BarChart,
  Users2,
  Settings,
  Palette,
  Target,
  TrendingUp,
  Calendar,
  Clock,
  FileText,
  Microscope,
  Cpu as QuantumCpu,
  Database as QuantumDB,
  Network as QuantumNetwork,
  Shield as QuantumShield,
  Zap as QuantumZap,
  Brain as QuantumBrain
} from 'lucide-react';

export default function AIQuantumHybridPlatform() {

  const features = [
    {

      icon: <Atom className="w-6 h-6" />,
      title: "Quantum Computing Integration",
      description: "Seamless integration with quantum processors for exponential computational power."
    },
    {

      icon: <Brain className="w-6 h-6" />,
      title: "Hybrid AI Algorithms",
      description: "AI algorithms optimized for both classical and quantum computing environments."
    },
    {

      icon: <Zap className="w-6 h-6" />,
      title: "Quantum Machine Learning",
      description: "Advanced ML models leveraging quantum computing for superior performance."
    },
    {

      icon: <Shield className="w-6 h-6" />,
      title: "Quantum-Safe Security",
      description: "Post-quantum cryptography and quantum-resistant security protocols."
    },
    {

      icon: <Users className="w-6 h-6" />,
      title: "Scalable Architecture",
      description: "Flexible platform that scales from research to enterprise production."
    },
    {

      icon: <BarChart className="w-6 h-6" />,
      title: "Quantum Analytics",
      description: "Real-time analytics and insights from quantum computing operations."
    }
  ];

  const benefits = [
    "Exponential computational speedup",
    "Superior optimization capabilities",
    "Enhanced machine learning performance",
    "Future-proof quantum security",
    "Competitive advantage in research",
    "Scalable quantum solutions"
  ];

  const quantumSolutions = [
    {

      solution: "Quantum Optimization",
      description: "Solve complex optimization problems with quantum algorithms"
    },
    {

      solution: "Quantum Machine Learning",
      description: "Train ML models using quantum computing principles"
    },
    {

      solution: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution"
    },
    {

      solution: "Quantum Simulation",
      description: "Simulate quantum systems for scientific research"
    },
    {

      solution: "Quantum Finance",
      description: "Advanced financial modeling and risk assessment"
    },
    {

      solution: "Quantum Chemistry",
      description: "Molecular modeling and drug discovery acceleration"
    }
  ];

  const useCases = [
    {

      industry: "Financial Services",
      description: "Portfolio optimization, risk assessment, and algorithmic trading"
    },
    {

      industry: "Pharmaceutical",
      description: "Drug discovery, molecular modeling, and protein folding"
    },
    {

      industry: "Logistics & Supply Chain",
      description: "Route optimization, inventory management, and scheduling"
    },
    {

      industry: "Cybersecurity",
      description: "Quantum-safe encryption and threat detection"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-zion-purple/20 text-zion-cyan px-4 py-2 rounded-full mb-6">
              <Atom className="w-5 h-5" />
              <span className="text-sm font-medium">AI + Quantum Computing</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Quantum Hybrid Platform
            </h1>
            
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Unlock the future of computing with our revolutionary AI-Quantum hybrid platform, 
              combining artificial intelligence with quantum computing for unprecedented performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule Demo
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Hybrid Technology
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our AI-Quantum hybrid platform represents the cutting edge of computational technology, 
              offering capabilities that were previously impossible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Quantum Solutions
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our platform offers comprehensive quantum computing solutions designed for 
              the most challenging computational problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quantumSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  {index === 0 && <Target className="w-8 h-8 text-white" />}
                  {index === 1 && <QuantumBrain className="w-8 h-8 text-white" />}
                  {index === 2 && <QuantumShield className="w-8 h-8 text-white" />}
                  {index === 3 && <Microscope className="w-8 h-8 text-white" />}
                  {index === 4 && <Coins className="w-8 h-8 text-white" />}
                  {index === 5 && <Pill className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{solution.solution}</h3>
                <p className="text-zion-slate-light text-sm text-center">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Quantum Hybrid Platform?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Experience the future of computing with our revolutionary hybrid platform that 
              combines the best of AI and quantum computing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-zion-slate-light">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Industry Use Cases</h3>
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg p-4">
                    <h4 className="font-semibold text-zion-cyan mb-2">{useCase.industry}</h4>
                    <p className="text-zion-slate-light text-sm">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the Future of Computing?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Join pioneering organizations who have already embraced the AI-Quantum revolution 
              and are achieving unprecedented computational capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}