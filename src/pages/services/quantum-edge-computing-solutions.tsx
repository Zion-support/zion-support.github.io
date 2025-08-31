import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Cpu, 
  Zap, 
  Shield, 
  Globe, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  MapPin,
  Users,
  Database,
  Network,
  Smartphone,
  Lock,
  Eye,
  Sparkles,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Award,
  Rocket,
  Target,
  Lightbulb,
  Code,
  Server,
  Wifi,
  Activity,
  FileText,
  MessageCircle,
  Settings,
  Palette,
  Scale,
  Gauge,
  PenTool,
  Brain,
  Cloud,
  ShieldCheck,
  Bot,
  Workflow,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Video,
  GraduationCap,
  Handshake,
  ShoppingCart,
  Heart,
  Home,
  Target2,
  Monitor,
  Smartphone as Mobile,
  Globe2,
  Link,
  Hash,
  Tag,
  MousePointer,
  Calendar,
  PieChart,
  LineChart,
  BarChart,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  HelpCircle,
  Atom,
  Chip,
  CircuitBoard,
  HardDrive,
  Memory,
  Gauge as Speedometer,
  Layers,
  Grid3X3,
  Network2,
  WifiOff,
  Signal,
  Radio,
  Bluetooth,
  Satellite2,
  Antenna,
  Router,
  Switch,
  Hub,
  Gateway,
  Firewall,
  LockKeyhole,
  Fingerprint,
  EyeOff,
  ShieldX,
  AlertOctagon,
  Zap as Lightning,
  Battery,
  Power,
  SolarPanel,
  Wind,
  Droplets,
  Flame,
  Snowflake,
  Thermometer,
  Gauge as Pressure,
  Scale as Balance,
  Timer,
  Stopwatch,
  Hourglass,
  CalendarDays,
  Clock3,
  TimerReset,
  TimerOff,
  TimerPause,
  TimerPlay,
  TimerSkipBack,
  TimerSkipForward,
  TimerRecord,
  TimerStop,
  TimerStart,
  TimerEnd,
  TimerPause2,
  TimerPlay2,
  TimerSkipBack2,
  TimerSkipForward2,
  TimerRecord2,
  TimerStop2,
  TimerStart2,
  TimerEnd2,
  Car,
  Building2,
  Factory
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuantumEdgeComputingSolutions() {
  const features = [
    {
      title: "Quantum-Classical Hybrid Processing",
      description: "Seamlessly integrate quantum computing power with classical edge processing for unprecedented computational capabilities",
      icon: Atom,
      benefits: ["Quantum advantage acceleration", "Hybrid algorithm optimization", "Real-time quantum processing", "Classical fallback systems"]
    },
    {
      title: "Distributed Edge Intelligence",
      description: "AI-powered edge nodes that process data locally while maintaining global intelligence through quantum-enhanced networks",
      icon: Brain,
      benefits: ["Local AI processing", "Global intelligence sharing", "Reduced latency", "Enhanced privacy"]
    },
    {
      title: "Quantum-Secured Edge Networks",
      description: "Unbreakable quantum encryption for edge devices and networks, ensuring maximum security for IoT and edge computing",
      icon: Shield,
      benefits: ["Quantum key distribution", "Post-quantum cryptography", "Secure edge communication", "Future-proof security"]
    },
    {
      title: "Adaptive Edge Computing",
      description: "Self-optimizing edge infrastructure that automatically adjusts resources based on quantum-enhanced predictive analytics",
      icon: Settings,
      benefits: ["Dynamic resource allocation", "Predictive scaling", "Energy optimization", "Performance tuning"]
    }
  ];

  const pricingTiers = [
    {
      name: "Edge Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small edge computing deployments",
      features: [
        "Up to 10 edge nodes",
        "Basic quantum processing",
        "Standard security",
        "Email support",
        "Basic monitoring",
        "Cloud dashboard"
      ],
      popular: false
    },
    {
      name: "Edge Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing edge computing operations",
      features: [
        "Up to 100 edge nodes",
        "Advanced quantum processing",
        "Enhanced security",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "API access"
      ],
      popular: true
    },
    {
      name: "Edge Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large-scale edge computing deployments",
      features: [
        "Unlimited edge nodes",
        "Full quantum advantage",
        "Military-grade security",
        "24/7 dedicated support",
        "Custom quantum algorithms",
        "On-premise deployment",
        "White-label solutions"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Processing Speed",
      value: "1000x",
      description: "Faster processing compared to traditional edge computing"
    },
    {
      title: "Energy Efficiency",
      value: "75%",
      description: "Reduction in energy consumption through quantum optimization"
    },
    {
      title: "Security Level",
      value: "99.99%",
      description: "Unbreakable security through quantum encryption"
    },
    {
      title: "Cost Reduction",
      value: "60%",
      description: "Lower operational costs through quantum efficiency"
    }
  ];

  const useCases = [
    {
      title: "Autonomous Vehicles",
      description: "Real-time quantum processing for autonomous decision-making and navigation",
      icon: Car,
      benefits: ["Instant decision making", "Enhanced safety", "Traffic optimization", "Predictive maintenance"]
    },
    {
      title: "Smart Cities",
      description: "Quantum-enhanced edge computing for intelligent city infrastructure management",
      icon: Building2,
      benefits: ["Traffic management", "Energy optimization", "Public safety", "Environmental monitoring"]
    },
    {
      title: "Healthcare IoT",
      description: "Quantum-secured edge computing for medical device networks and patient monitoring",
      icon: Heart,
      benefits: ["Real-time monitoring", "Secure data transmission", "Predictive diagnostics", "Emergency response"]
    },
    {
      title: "Industrial IoT",
      description: "Quantum-powered edge computing for manufacturing automation and predictive maintenance",
      icon: Factory,
      benefits: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Energy management"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Quantum Edge Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionize edge computing with quantum technology. Achieve 1000x faster processing, 75% energy reduction, and 99.99% security with our quantum-edge hybrid solutions." />
        <meta name="keywords" content="quantum edge computing, quantum computing, edge computing, IoT, quantum security, distributed computing" />
        <link rel="canonical" href="https://ziontechgroup.com/services/quantum-edge-computing-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 border border-zion-cyan/30 text-zion-cyan text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Quantum Edge Computing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Quantum Edge
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Computing Solutions</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform edge computing with quantum technology that delivers 1000x faster processing, 
              75% energy reduction, and unbreakable security. The future of distributed computing is here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-zion-purple/30 text-zion-purple font-semibold rounded-lg hover:bg-zion-purple/10 transition-all duration-300"
              >
                <Video className="mr-2 w-5 h-5" />
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Advantage in Edge Computing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our quantum-edge hybrid solutions deliver unprecedented performance improvements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-zion-slate-dark/50 rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-zion-cyan mb-2">{benefit.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Quantum-Edge Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Leverage cutting-edge quantum technology to revolutionize edge computing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-8 bg-zion-slate-dark/50 rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-zion-cyan/20 rounded-lg">
                    <feature.icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-zion-slate-light mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Discover how quantum edge computing transforms various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-8 bg-zion-slate-dark/50 rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-zion-purple/20 rounded-lg">
                    <useCase.icon className="w-6 h-6 text-zion-purple" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                    <p className="text-zion-slate-light mb-4">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that fits your edge computing needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative p-8 rounded-xl border transition-all duration-300 ${
                  tier.popular
                    ? 'bg-zion-slate-dark border-zion-cyan/40 scale-105'
                    : 'bg-zion-slate-dark/50 border-zion-purple/20 hover:border-zion-cyan/40'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-zion-slate-dark px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">
                    {tier.price}
                    <span className="text-lg text-zion-slate-light">{tier.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{tier.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:from-zion-cyan/90 hover:to-zion-blue/90'
                      : 'bg-zion-purple/20 text-zion-purple border border-zion-purple/30 hover:bg-zion-purple/30'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Quantum Edge Computing?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join the quantum revolution and transform your edge computing infrastructure 
              with unprecedented speed, security, and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-zion-purple/30 text-zion-purple font-semibold rounded-lg hover:bg-zion-purple/10 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +1 (302) 464-0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}