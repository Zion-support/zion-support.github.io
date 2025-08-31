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
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Palette,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Target2,
  Building2,
  Handshake,
  FileText,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Atom,
  Satellite,
  Wifi as WifiIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Globe as GlobeIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Server as ServerIcon,
  Cloud as CloudIcon,
  Lock as LockIcon,
  BarChart as BarChartIcon,
  Workflow as WorkflowIcon,
  Target as TargetIcon,
  Rocket as RocketIcon,
  Lightbulb as LightbulbIcon,
  Code as CodeIcon,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Activity as ActivityIcon,
  Eye as EyeIcon,
  Settings as SettingsIcon
} from 'lucide-react';

export default function QuantumEdgeComputingSolutions() {
  const features = [
    {
      icon: Atom,
      title: "Quantum Computing Integration",
      description: "Seamlessly integrate quantum computing capabilities with edge devices for unprecedented processing power and speed."
    },
    {
      icon: Cpu,
      title: "Edge AI Processing",
      description: "Advanced AI algorithms running directly on edge devices for real-time decision making without cloud dependency."
    },
    {
      icon: Network,
      title: "5G/6G Network Optimization",
      description: "Optimize network performance and reduce latency through intelligent edge computing and quantum-enhanced routing."
    },
    {
      icon: Shield,
      title: "Quantum-Secure Edge",
      description: "Implement quantum-resistant cryptography and advanced security protocols at the edge for maximum protection."
    },
    {
      icon: Globe,
      title: "Global Edge Network",
      description: "Distributed edge computing infrastructure spanning multiple continents for optimal performance and redundancy."
    },
    {
      icon: Zap,
      title: "Real-Time Quantum Analytics",
      description: "Process massive datasets in real-time using quantum algorithms at the edge for instant insights and actions."
    }
  ];

  const benefits = [
    "Reduce latency by 80-90% through edge processing",
    "Increase processing speed by 1000x with quantum integration",
    "Lower bandwidth costs by 60-80%",
    "Improve security with quantum-resistant encryption",
    "Enable real-time AI decision making",
    "Scale infinitely with distributed edge architecture"
  ];

  const pricingPlans = [
    {
      name: "Edge Starter",
      price: "$3,999",
      period: "/month",
      description: "Perfect for small businesses starting their edge computing journey",
      features: [
        "Basic edge computing setup",
        "Quantum-ready infrastructure",
        "Up to 5 edge nodes",
        "Standard security protocols",
        "Email support",
        "Basic monitoring"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Edge Professional",
      price: "$9,999",
      period: "/month",
      description: "Ideal for growing businesses with complex edge computing needs",
      features: [
        "Advanced edge AI processing",
        "Quantum computing integration",
        "Up to 25 edge nodes",
        "Advanced security features",
        "Priority support",
        "Real-time monitoring",
        "Custom edge applications",
        "5G/6G optimization"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Edge Enterprise",
      price: "$24,999",
      period: "/month",
      description: "For large enterprises requiring comprehensive edge solutions",
      features: [
        "Full quantum edge computing",
        "Unlimited edge nodes",
        "Custom quantum algorithms",
        "Dedicated support team",
        "White-label solutions",
        "Advanced security features",
        "Global edge network",
        "Custom development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Autonomous Vehicles",
      description: "Real-time decision making, sensor fusion, and route optimization at the edge",
      roi: "95% faster response time"
    },
    {
      industry: "Smart Cities",
      description: "Traffic management, energy optimization, and public safety monitoring",
      roi: "70% efficiency improvement"
    },
    {
      industry: "Healthcare IoT",
      description: "Patient monitoring, medical device management, and emergency response",
      roi: "85% faster diagnosis"
    },
    {
      industry: "Industrial IoT",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      roi: "60% cost reduction"
    }
  ];

  const technicalSpecs = [
    {
      category: "Quantum Processing",
      specs: ["Qubit integration", "Quantum error correction", "Quantum-classical hybrid", "Quantum memory"],
      icon: Atom
    },
    {
      category: "Edge Computing",
      specs: ["Distributed processing", "Real-time analytics", "Low-latency networks", "Edge AI models"],
      icon: Cpu
    },
    {
      category: "Network Security",
      specs: ["Quantum-resistant crypto", "Zero-trust architecture", "Threat detection", "Secure protocols"],
      icon: Shield
    },
    {
      category: "Performance",
      specs: ["Sub-millisecond latency", "99.999% uptime", "Global distribution", "Auto-scaling"],
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-purple/20 border border-zion-purple/30 text-zion-purple text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Next-Generation Edge Computing
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum Edge Computing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {" "}Solutions
              </span>
            </h1>
            
            <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your infrastructure with the world's first quantum-enhanced edge computing platform that combines 
              quantum processing power with distributed edge intelligence for unprecedented performance and capabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white font-semibold rounded-lg hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-zion-purple/25"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Edge Computing Capabilities
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge quantum computing with distributed edge intelligence to deliver unprecedented performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-zion-purple/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Technical Specifications
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Cutting-edge technology specifications that set new industry standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4">
                    <spec.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{spec.category}</h3>
                </div>
                <ul className="space-y-2">
                  {spec.specs.map((specItem, specIndex) => (
                    <li key={specIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span className="text-zinc-300">{specItem}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Infrastructure
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Experience unprecedented performance and capabilities with quantum-enhanced edge computing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Our Platform?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                  <span className="text-zinc-300">World's first quantum-edge hybrid platform</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                  <span className="text-zinc-300">99.999% uptime guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                  <span className="text-zinc-cyan">Quantum-resistant security protocols</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                  <span className="text-zinc-300">24/7 quantum monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                  <span className="text-zinc-300">Custom quantum algorithm development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Choose the plan that best fits your edge computing needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zinc-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-purple shadow-lg shadow-zion-purple/25' 
                    : 'border-zinc-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zinc-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zinc-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.cta === "Contact Sales" ? "/contact" : "/signup"}
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple'
                      : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our platform delivers measurable results across diverse industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 text-center hover:border-zion-purple/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-zinc-300 mb-4">{useCase.description}</p>
                <div className="inline-flex items-center px-3 py-1 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full">
                  <span className="text-zion-cyan text-sm font-medium">{useCase.roi}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Infrastructure?
            </h2>
            <p className="text-xl text-zinc-300 mb-8">
              Join the future of computing with our quantum-enhanced edge platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white font-semibold rounded-lg hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-zion-purple/25"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-zinc-300">
                  <Phone className="w-5 h-5 text-zion-cyan" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-zinc-300">
                  <Mail className="w-5 h-5 text-zion-cyan" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-zinc-300">
                  <MapPin className="w-5 h-5 text-zion-cyan" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Learn More</h3>
              <div className="space-y-3">
                <Link to="/services" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  View All Services →
                </Link>
                <Link to="/case-studies" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  Case Studies →
                </Link>
                <Link to="/blog" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  Latest Insights →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}