import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Shield, 
  FileText, 
  BarChart3, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Building2, 
  Rocket, 
  Target, 
  Lightbulb, 
  Sparkles, 
  Atom, 
  Leaf, 
  Gamepad2, 
  Coins, 
  Satellite, 
  Activity, 
  MessageCircle, 
  BarChart, 
  Users2, 
  Settings, 
  Palette, 
  Eye, 
  Bot, 
  Workflow, 
  Code, 
  HelpCircle, 
  HardDrive, 
  ChevronRight, 
  ChevronLeft, 
  Play, 
  Pause, 
  Square, 
  RotateCcw, 
  Power, 
  PowerOff, 
  RefreshCw, 
  Download, 
  Upload, 
  Copy, 
  Link, 
  ExternalLink, 
  Info, 
  AlertCircle, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Plus, 
  Minus, 
  Search, 
  Filter, 
  SortAsc, 
  SortDesc, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Video, 
  Camera, 
  Mic, 
  Headphones, 
  Printer, 
  Scanner, 
  Fax, 
  Projector, 
  Keyboard, 
  Mouse, 
  Gamepad, 
  Controller, 
  Joystick, 
  Remote, 
  Battery, 
  BatteryCharging, 
  BatteryFull, 
  BatteryMedium, 
  BatteryLow, 
  BatteryEmpty, 
  Signal, 
  SignalHigh, 
  SignalMedium, 
  SignalLow, 
  SignalZero, 
  WifiOff, 
  Bluetooth, 
  BluetoothOff, 
  Radio, 
  RadioOff, 
  Tv, 
  TvOff, 
  MonitorOff, 
  SmartphoneOff, 
  Tablet, 
  TabletOff, 
  Laptop, 
  LaptopOff, 
  Desktop, 
  DesktopOff, 
  ServerOff, 
  DatabaseOff, 
  NetworkOff, 
  GlobeOff, 
  LockOff, 
  Unlock, 
  Key, 
  KeyOff, 
  Fingerprint, 
  UserCheck, 
  UserX, 
  UsersOff, 
  UserOff, 
  UserPlus, 
  UserMinus, 
  UserEdit, 
  UserCog, 
  Cog, 
  Settings2, 
  Tool, 
  Wrench, 
  Hammer, 
  Screwdriver, 
  Saw, 
  Drill, 
  Screw, 
  Nut, 
  Bolt, 
  Washer, 
  Rivet, 
  Nail, 
  Pin, 
  Paperclip, 
  Stapler, 
  Tape, 
  Glue, 
  Paintbrush, 
  Palette2, 
  Canvas, 
  Easel, 
  Brush, 
  Spray, 
  Roller, 
  Bucket, 
  Sponge, 
  Towel, 
  Rag, 
  Broom, 
  Mop, 
  Vacuum, 
  Trash, 
  Trash2, 
  Recycle, 
  RecycleOff, 
  LeafOff, 
  Tree, 
  TreeOff, 
  Flower, 
  FlowerOff, 
  Seed, 
  SeedOff, 
  Sprout, 
  SproutOff, 
  Plant, 
  PlantOff, 
  Garden, 
  GardenOff, 
  Farm, 
  FarmOff, 
  Tractor, 
  TractorOff, 
  Combine, 
  CombineOff, 
  Harvester, 
  HarvesterOff, 
  Plow, 
  PlowOff, 
  Cultivator, 
  CultivatorOff, 
  Seeder, 
  SeederOff, 
  Spreader, 
  SpreaderOff, 
  Sprayer, 
  SprayerOff, 
  Irrigator, 
  IrrigatorOff, 
  Fertilizer, 
  FertilizerOff, 
  Pesticide, 
  PesticideOff, 
  Herbicide, 
  HerbicideOff, 
  Fungicide, 
  FungicideOff, 
  Insecticide, 
  InsecticideOff, 
  Rodenticide, 
  RodenticideOff, 
  Molluscicide, 
  MolluscicideOff, 
  Acaricide, 
  AcaricideOff, 
  Nematicide, 
  NematicideOff, 
  Bactericide, 
  BactericideOff, 
  Virucide, 
  VirucideOff, 
  Algicide, 
  AlgicideOff, 
  HerbicideOff, 
  FungicideOff, 
  InsecticideOff, 
  RodenticideOff, 
  MolluscicideOff, 
  AcaricideOff, 
  NematicideOff, 
  BactericideOff, 
  VirucideOff, 
  AlgicideOff
} from 'lucide-react';

export default function AIFinancialComplianceAssistant() {
  const features = [
    {
      title: "Real-time Compliance Monitoring",
      description: "24/7 monitoring of financial transactions and regulatory requirements",
      icon: Eye,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI-Powered Risk Assessment",
      description: "Advanced machine learning algorithms for identifying compliance risks",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Automated Reporting",
      description: "Generate regulatory reports automatically with AI-driven insights",
      icon: FileText,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Regulatory Updates",
      description: "Stay current with real-time regulatory changes and requirements",
      icon: RefreshCw,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Audit Trail",
      description: "Comprehensive audit trails for all compliance activities and decisions",
      icon: BarChart3,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Multi-Jurisdiction Support",
      description: "Support for global regulatory frameworks and compliance requirements",
      icon: Globe,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const complianceAreas = [
    {
      area: "Anti-Money Laundering (AML)",
      description: "Detect and prevent money laundering activities with AI-powered transaction monitoring",
      icon: Shield,
      regulations: ["Bank Secrecy Act", "USA PATRIOT Act", "FATF Guidelines"]
    },
    {
      area: "Know Your Customer (KYC)",
      description: "Automated customer verification and due diligence processes",
      icon: Users,
      regulations: ["Customer Due Diligence", "Enhanced Due Diligence", "PEP Screening"]
    },
    {
      area: "General Data Protection (GDPR)",
      description: "Ensure compliance with data protection and privacy regulations",
      icon: Lock,
      regulations: ["Data Processing", "Consent Management", "Right to be Forgotten"]
    },
    {
      area: "Sarbanes-Oxley (SOX)",
      description: "Financial reporting compliance and internal control monitoring",
      icon: FileText,
      regulations: ["Internal Controls", "Financial Reporting", "Audit Requirements"]
    }
  ];

  const pricing = [
    {
      name: "Basic",
      price: "$1,499",
      period: "/month",
      description: "Perfect for small financial institutions",
      features: [
        "Up to 10,000 transactions/month",
        "Basic compliance monitoring",
        "Standard reporting templates",
        "Email support",
        "Basic risk assessment"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$3,999",
      period: "/month",
      description: "Ideal for medium-sized financial organizations",
      features: [
        "Up to 100,000 transactions/month",
        "Advanced AI risk assessment",
        "Custom reporting",
        "Priority support",
        "Multi-jurisdiction support",
        "API integration"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "For large financial institutions",
      features: [
        "Unlimited transactions",
        "Custom AI model training",
        "Enterprise integrations",
        "24/7 dedicated support",
        "Custom compliance workflows",
        "SLA guarantees",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    "Reduce compliance costs by up to 60%",
    "Improve compliance accuracy by 95%",
    "Automate 80% of manual compliance tasks",
    "Real-time risk detection and alerts",
    "Seamless integration with existing systems",
    "Scalable solution for growing organizations"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      <SEO 
        title="AI Financial Compliance Assistant - Zion Tech Group"
        description="Transform your financial compliance with our AI-powered assistant. Real-time monitoring, automated reporting, and comprehensive risk assessment."
        keywords="AI financial compliance, regulatory compliance, AML, KYC, GDPR, SOX, financial risk assessment, compliance automation"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI Financial Compliance Assistant
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI-Powered
              <span className="block text-zion-cyan">Financial Compliance</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your financial compliance operations with AI-driven automation, 
              real-time monitoring, and comprehensive risk assessment. Stay compliant 
              while reducing costs and improving efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan-dark transition-colors flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/20 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-zion-purple/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI-powered platform provides comprehensive compliance solutions 
              for financial institutions of all sizes.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/80 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Areas Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance Areas
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive coverage of major financial compliance requirements 
              and regulatory frameworks.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/80 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{area.area}</h3>
                    <p className="text-zion-slate-light mb-4">{area.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-zion-cyan">Key Regulations:</h4>
                      <ul className="space-y-1">
                        {area.regulations.map((regulation, regIndex) => (
                          <li key={regIndex} className="text-sm text-zion-slate-light flex items-center">
                            <CheckCircle className="w-3 h-3 text-zion-cyan mr-2" />
                            {regulation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Transform your compliance operations with measurable benefits and 
              proven results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-purple/20 rounded-lg p-4 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <span className="text-zion-slate-light text-sm">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the perfect plan for your compliance needs. 
              All plans include our core AI compliance capabilities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zion-blue-dark/80 backdrop-blur-sm border rounded-xl p-6 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-zion-cyan text-white hover:bg-zion-cyan-dark'
                    : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/20'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Compliance?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join leading financial institutions that trust our AI-powered 
              compliance platform to protect their business and customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:bg-zion-slate-light transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/20 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}