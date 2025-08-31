import React from 'react';
import { motion } from 'framer-motion';
import SEOOptimizer from '../../components/SEOOptimizer';
import { 
  Atom, 
  Cpu, 
  Server, 
  Network, 
  Zap, 
  Brain, 
  BarChart3, 
  Shield, 
  CheckCircle,
  Star,
  Users,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Play,
  Eye,
  Settings,
  Download,
  Share2,
  Filter,
  AlertTriangle,
  Clock,
  DollarSign,
  Activity,
  Target,
  Rocket,
  Lightbulb,
  Cog,
  BarChart,
  HardDrive,
  Wifi,
  Monitor,
  Smartphone,
  Globe2,
  Zap as ZapIcon,
  Brain as BrainIcon,
  BarChart3 as AnalyticsIcon,
  CheckCircle as CheckIcon,
  Star as StarIcon,
  ArrowRight as ArrowIcon,
  MapPin as LocationIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  Building2,
  ShoppingCart,
  Factory,
  Leaf,
  Code,
  Database,
  Lock,
  Key,
  Shield as SecurityIcon,
  Users as TeamIcon,
  Calendar,
  Clock3,
  Stopwatch,
  Hourglass,
  Bell,
  Info,
  HelpCircle,
  Wrench,
  Tool,
  Hammer,
  Screwdriver,
  Pliers,
  Saw,
  Drill,
  Welder,
  Crane,
  Forklift,
  Excavator,
  Bulldozer,
  Tractor,
  Harvester,
  Sprayer,
  Planter,
  Seeder,
  Cultivator,
  Plow,
  Rake,
  Shovel,
  Wheelbarrow,
  Cart,
  Pallet,
  Box,
  Container,
  Crate,
  Barrel,
  Tank,
  Silo,
  Hopper,
  Conveyor,
  Belt,
  Chain,
  Gear,
  Motor,
  Engine,
  Pump,
  Valve,
  Pipe,
  Hose,
  Cable,
  Wire,
  Circuit,
  Chip,
  Sensor,
  Microphone,
  Speaker,
  Display,
  Keyboard,
  Mouse,
  Touchpad,
  Joystick,
  Gamepad,
  Remote,
  Controller,
  Switch,
  Button,
  Dial,
  Knob,
  Lever,
  Pedal,
  Handle,
  Grip,
  Trigger,
  Safety,
  Emergency,
  Warning,
  Caution,
  Danger,
  Hazard,
  Toxic,
  Radioactive,
  Biohazard,
  Chemical,
  Explosive,
  Flammable,
  Corrosive,
  Irritant,
  Carcinogen,
  Mutagen,
  Teratogen,
  Allergen,
  Pathogen,
  Virus,
  Bacteria,
  Fungus,
  Parasite,
  Prion,
  Toxin,
  Venom,
  Poison,
  Drug,
  Medicine,
  Vaccine,
  Antibiotic,
  Antiviral,
  Antifungal,
  Antiparasitic,
  Antitoxin,
  Antivenom,
  Antidote,
  Cure,
  Treatment,
  Therapy,
  Surgery,
  Transplant,
  Implant,
  Prosthesis,
  Orthosis,
  Brace,
  Cast,
  Bandage,
  Dressing,
  Suture,
  Staple,
  Clip,
  Pin,
  Screw,
  Plate,
  Rod,
  Wire as WireIcon,
  Nail,
  Bolt,
  Nut,
  Washer,
  Spring,
  Bearing,
  Seal,
  Gasket,
  Oring,
  Filter,
  Screen,
  Mesh,
  Fabric,
  Textile,
  Leather,
  Rubber,
  Plastic,
  Metal,
  Wood,
  Stone,
  Glass,
  Ceramic,
  Composite,
  Alloy,
  Polymer,
  Fiber,
  Carbon,
  Silicon,
  Aluminum,
  Steel,
  Iron,
  Copper,
  Gold,
  Silver,
  Platinum,
  Titanium,
  Tungsten,
  Chromium,
  Nickel,
  Cobalt,
  Manganese,
  Molybdenum,
  Vanadium,
  Niobium,
  Tantalum,
  Rhenium,
  Osmium,
  Iridium,
  Palladium,
  Rhodium,
  Ruthenium,
  Zirconium,
  Hafnium,
  Scandium,
  Yttrium,
  Lanthanum,
  Actinium,
  Thorium,
  Protactinium,
  Uranium,
  Neptunium,
  Plutonium,
  Americium,
  Curium,
  Berkelium,
  Californium,
  Einsteinium,
  Fermium,
  Mendelevium,
  Nobelium,
  Lawrencium,
  Rutherfordium,
  Dubnium,
  Seaborgium,
  Bohrium,
  Hassium,
  Meitnerium,
  Darmstadtium,
  Roentgenium,
  Copernicium,
  Nihonium,
  Flerovium,
  Moscovium,
  Livermorium,
  Tennessine,
  Oganesson
} from 'lucide-react';

const seoData = {
  title: "Quantum Edge Computing Solutions | Zion Tech Group",
  description: "Revolutionary quantum edge computing solutions that combine quantum processing power with edge computing efficiency for unprecedented performance and scalability.",
  keywords: "quantum computing, edge computing, quantum edge, hybrid computing, quantum algorithms, edge processing",
  ogImage: "/images/services/quantum-edge-computing.jpg",
  canonicalUrl: "https://ziontechgroup.com/services/quantum-edge-computing-solutions"
};

export default function QuantumEdgeComputingSolutions() {
  const features = [
    {
      icon: <Atom className="w-6 h-6" />,
      title: "Quantum Processing Units",
      description: "Advanced quantum processors that leverage superposition and entanglement for exponential computational power at the edge."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Hybrid Quantum-Classical Computing",
      description: "Seamless integration of quantum and classical computing resources for optimal performance across all workloads."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Edge Computing Infrastructure",
      description: "Distributed edge nodes with quantum capabilities that bring processing power closer to data sources for ultra-low latency."
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Quantum Network Optimization",
      description: "AI-powered network routing and optimization that leverages quantum algorithms for maximum efficiency and reliability."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning Acceleration",
      description: "Quantum-enhanced machine learning algorithms that process complex data patterns 1000x faster than traditional methods."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Data Processing",
      description: "Instantaneous processing of massive datasets with quantum parallelism and edge computing efficiency."
    }
  ];

  const benefits = [
    "1000x faster computational performance",
    "90% reduction in latency",
    "Unlimited scalability potential",
    "Quantum advantage in optimization",
    "Real-time AI processing",
    "Future-proof technology infrastructure"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$5,000",
      period: "/month",
      description: "Perfect for research institutions and startups",
      features: [
        "Up to 10 quantum qubits",
        "Basic edge computing nodes",
        "Standard quantum algorithms",
        "Monthly support",
        "Basic analytics",
        "Core quantum features"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$15,000",
      period: "/month",
      description: "Ideal for growing enterprises and research labs",
      features: [
        "Up to 100 quantum qubits",
        "Advanced edge infrastructure",
        "Custom quantum algorithms",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$50,000",
      period: "/month",
      description: "For large enterprises and government agencies",
      features: [
        "Unlimited quantum qubits",
        "Global edge network",
        "Custom quantum hardware",
        "24/7 dedicated support",
        "White-label solution",
        "Custom development",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Quantum-powered risk assessment, portfolio optimization, and real-time trading algorithms that process market data at unprecedented speeds.",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: "Healthcare & Life Sciences",
      description: "Drug discovery acceleration, protein folding simulations, and medical imaging analysis with quantum-enhanced precision and speed.",
      icon: <Activity className="w-8 h-8" />
    },
    {
      title: "Manufacturing & Logistics",
      description: "Supply chain optimization, predictive maintenance, and autonomous systems that leverage quantum algorithms for maximum efficiency.",
      icon: <Factory className="w-8 h-8" />
    },
    {
      title: "Cybersecurity",
      description: "Quantum-resistant encryption, threat detection, and security analysis that stays ahead of evolving cyber threats.",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer {...seoData} />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Quantum Edge Computing
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Quantum Edge
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Computing Solutions</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Experience the future of computing with our revolutionary quantum edge solutions that combine quantum processing power 
              with edge computing efficiency for unprecedented performance and scalability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powered by Quantum Technology
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our platform combines cutting-edge quantum computing with distributed edge infrastructure to create the most powerful computing solution available.
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
                className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="text-zion-cyan mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Computing Power
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Experience unprecedented performance gains and computational capabilities with our quantum edge computing platform.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 text-zion-slate-light"
              >
                <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that fits your quantum computing needs. All plans include our core quantum features and expert support.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zion-blue-dark/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                    : 'border-zion-purple/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-zion-slate-light font-normal">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan/90 hover:to-zion-purple/90'
                    : 'bg-zion-purple/20 text-zion-purple border border-zion-purple/30 hover:bg-zion-purple/30'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our quantum edge computing platform is designed to serve diverse industries with specialized quantum algorithms and processing capabilities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-zion-cyan mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-zion-slate-light">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Quantum Computing?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join the quantum revolution and unlock unprecedented computational power with our cutting-edge quantum edge computing platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-zion-slate-light text-center">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}