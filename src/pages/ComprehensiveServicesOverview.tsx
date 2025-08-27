import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Cloud, Zap, Globe, Cpu, Database, Network, Lock, Code, 
  Rocket, Users, BarChart3, FileImage, TrendingUp, MessageCircle, Video, 
  FileText, Heart, PanelLeft, ShoppingCart, Settings, HelpCircle, BookOpen, 
  Briefcase, Award, Target, Lightbulb, ShieldCheck, Server, Smartphone, 
  Monitor, Wifi, Bluetooth, Satellite, Atom, Dna, Microscope, Flask, 
  TestTube, Syringe, Stethoscope, HeartPulse, BrainCircuit, Eye, Ear, 
  Hand, Foot, Bone, Tooth, Pill, Bandage, Thermometer, Scale, Calculator, 
  ChartBar, PieChart, LineChart, Activity, TrendingDown, Minus, Plus, 
  Equal, Divide, Percent, DollarSign, Euro, Pound, Yen, Bitcoin, Ethereum, 
  CreditCard, Wallet, Banknote, Coins, PiggyBank, Safe, Vault, LockKeyhole, 
  Key, Fingerprint, QrCode, Barcode, Scan, Camera, VideoOff, Mic, MicOff, 
  Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward
} from 'lucide-react';
const ComprehensiveServicesOverview = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning Services",
      description: "Cutting-edge artificial intelligence solutions for business transformation",
      icon: Brain,
      services: [
        { name: "AI Autonomous Business Manager", path: "/services/ai-autonomous-business-manager", description: "Intelligent business process automation", price: "$5,000/month" },
        { name: "AI Autonomous Research Assistant", path: "/services/ai-autonomous-research-assistant", description: "Advanced research and analysis automation", price: "$3,500/month" },
        { name: "AI-Powered IT Asset Management", path: "/services/ai-powered-it-asset-management", description: "Smart IT infrastructure management", price: "$2,800/month" },
        { name: "Autonomous Business Operations Platform", path: "/services/autonomous-business-operations-platform", description: "End-to-end business automation", price: "$8,500/month" }
      ]
    },
    {
      title: "Cybersecurity & Security Services",
      description: "Comprehensive security solutions for modern threats",
      icon: Shield,
      services: [
        { name: "Advanced Cybersecurity Suite", path: "/services/advanced-cybersecurity-suite", description: "Enterprise-grade security protection", price: "$12,000/month" },
        { name: "Zero Trust Network Architecture", path: "/services/zero-trust-network-architecture", description: "Modern security framework implementation", price: "$15,000/month" },
        { name: "Incident Response Platform", path: "/services/incident-response-platform", description: "24/7 threat monitoring and response", price: "$8,500/month" },
        { name: "SOC2 Compliance Automation", path: "/services/soc2-compliance-automation", description: "Automated compliance management", price: "$6,500/month" }
      ]
    },
    {
      title: "Cloud & DevOps Services",
      description: "Scalable cloud infrastructure and development operations",
      icon: Cloud,
      services: [
        { name: "Cloud DevOps Services", path: "/services/cloud-devops", description: "Full-stack cloud development", price: "$7,500/month" },
        { name: "Cloud Infrastructure", path: "/services/cloud", description: "Scalable cloud architecture", price: "$5,000/month" },
        { name: "DevOps Cloud Solutions", path: "/services/devops-cloud", description: "CI/CD pipeline optimization", price: "$6,000/month" },
        { name: "Infrastructure Services", path: "/services/infrastructure", description: "Enterprise infrastructure management", price: "$4,500/month" }
      ]
    },
    {
      title: "Quantum Computing Services",
      description: "Next-generation quantum technology solutions",
      icon: Atom,
      services: [
        { name: "Quantum Computing Platform", path: "/services/quantum-computing", description: "Quantum algorithm development", price: "$25,000/month" },
        { name: "Quantum Technology Solutions", path: "/services/quantum-technology", description: "Quantum system integration", price: "$18,000/month" },
        { name: "Quantum Neural Network Platform", path: "/services/quantum-neural-network-platform", description: "Quantum AI applications", price: "$22,000/month" },
        { name: "Quantum Cloud Infrastructure", path: "/services/quantum-cloud-infrastructure", description: "Quantum cloud services", price: "$20,000/month" }
      ]
    },
    {
      title: "IoT & Edge Computing",
      description: "Internet of Things and edge computing solutions",
      icon: Wifi,
      services: [
        { name: "IoT Edge Computing", path: "/services/iot-edge-computing", description: "Edge computing infrastructure", price: "$9,500/month" },
        { name: "IoT Services", path: "/services/iot-services", description: "IoT device management", price: "$4,500/month" },
        { name: "5G Enterprise Network", path: "/services/five-g-enterprise-network", description: "5G network optimization", price: "$12,000/month" },
        { name: "5G Private Network Solutions", path: "/services/five-g-private-network-solutions", description: "Private 5G networks", price: "$15,000/month" }
      ]
    },
    {
      title: "Blockchain & Web3 Services",
      description: "Decentralized technology and blockchain solutions",
      icon: Lock,
      services: [
        { name: "Blockchain Services", path: "/services/blockchain-services", description: "Blockchain development", price: "$8,500/month" },
        { name: "Blockchain Web3 Solutions", path: "/services/blockchain-web3", description: "Web3 application development", price: "$10,000/month" },
        { name: "Token Integrations", path: "/token-integrations", description: "Cryptocurrency integration", price: "$6,500/month" }
      ]
    },
    {
      title: "Data Analytics & Business Intelligence",
      description: "Advanced analytics and data-driven insights",
      icon: BarChart3,
      services: [
        { name: "Data Analytics Platform", path: "/services/data-analytics", description: "Big data analytics solutions", price: "$7,500/month" },
        { name: "Service Portfolio Dashboard", path: "/services/service-portfolio-dashboard", description: "Service performance analytics", price: "$4,500/month" },
        { name: "Service Recommendations", path: "/services/service-recommendations", description: "AI-powered service suggestions", price: "$3,500/month" }
      ]
    },
    {
      title: "Digital Transformation & Consulting",
      description: "Business transformation and strategic consulting",
      icon: TrendingUp,
      services: [
        { name: "Digital Transformation", path: "/services/digital-transformation", description: "Business digitalization", price: "$15,000/month" },
        { name: "Transformation Services", path: "/services/transformation-services", description: "Change management", price: "$12,000/month" },
        { name: "Consulting Services", path: "/services/consulting-services", description: "Strategic IT consulting", price: "$8,500/month" },
        { name: "Enterprise IT Solutions", path: "/services/enterprise-it", description: "Enterprise technology consulting", price: "$10,000/month" }
      ]
    },
    {
      title: "Industry-Specific Solutions",
      description: "Tailored solutions for specific industries",
      icon: Briefcase,
      services: [
        { name: "Manufacturing Solutions", path: "/services/manufacturing-solutions", description: "Industry 4.0 solutions", price: "$18,000/month" },
        { name: "Healthcare Solutions", path: "/solutions/healthcare-solutions", description: "Healthcare technology", price: "$20,000/month" },
        { name: "Financial Solutions", path: "/financial-solutions", description: "Fintech solutions", price: "$16,000/month" },
        { name: "Government Solutions", path: "/solutions/government-solutions", description: "Public sector technology", price: "$25,000/month" }
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Comprehensive
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"> Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Discover our complete portfolio of cutting-edge technology services designed to transform your business
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Pricing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black/20 backdrop-blur-md border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {category.description}
                </p>
                <div className="space-y-3">
                  {category.services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block p-3 bg-black/30 rounded-lg hover:bg-black/50 transition-all duration-300 border border-transparent hover:border-zion-cyan/30"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-white text-sm">{service.name}</h4>
                        <span className="text-zion-cyan text-xs font-medium bg-zion-cyan/10 px-2 py-1 rounded">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-zion-slate-light text-xs leading-relaxed">
                        {service.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let our experts help you choose the perfect combination of services to accelerate your digital transformation journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-zion-blue-dark px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-zion-blue-dark transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default ComprehensiveServicesOverview;
