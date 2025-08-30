import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Activity, 
  Heart, 
  Brain, 
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

export default function AIHealthcareAnalyticsPlatform() {
  const features = [
    {
      title: "Predictive Diagnostics",
      description: "AI-powered early detection and diagnosis of diseases with high accuracy",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Patient Outcome Prediction",
      description: "Predict patient outcomes and treatment effectiveness using machine learning",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous patient monitoring with AI-driven alert systems",
      icon: Activity,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Treatment Optimization",
      description: "AI recommendations for personalized treatment plans and medication dosing",
      icon: Target,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Population Health Analytics",
      description: "Large-scale health data analysis for public health insights",
      icon: Users,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Clinical Decision Support",
      description: "AI-powered clinical decision support for healthcare providers",
      icon: Shield,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const useCases = [
    {
      specialty: "Cardiology",
      description: "Predictive analytics for heart disease risk assessment and early intervention",
      icon: Heart,
      applications: ["ECG Analysis", "Risk Prediction", "Treatment Planning"]
    },
    {
      specialty: "Oncology",
      description: "AI-powered cancer detection, staging, and treatment response prediction",
      icon: Activity,
      applications: ["Early Detection", "Staging", "Response Monitoring"]
    },
    {
      specialty: "Neurology",
      description: "Brain imaging analysis and neurological disorder prediction",
      icon: Brain,
      applications: ["MRI Analysis", "Disease Progression", "Treatment Efficacy"]
    },
    {
      specialty: "Emergency Medicine",
      description: "Real-time triage and critical care decision support",
      icon: AlertCircle,
      applications: ["Triage", "Critical Care", "Resource Allocation"]
    }
  ];

  const pricing = [
    {
      name: "Clinical",
      price: "$2,999",
      period: "/month",
      description: "Perfect for small clinics and practices",
      features: [
        "Up to 1,000 patients",
        "Basic predictive analytics",
        "Standard reporting",
        "Email support",
        "Basic clinical decision support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Hospital",
      price: "$8,999",
      period: "/month",
      description: "Ideal for medium-sized hospitals",
      features: [
        "Up to 10,000 patients",
        "Advanced AI analytics",
        "Custom reporting",
        "Priority support",
        "Multi-specialty support",
        "API integration"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Health System",
      price: "$24,999",
      period: "/month",
      description: "For large healthcare systems",
      features: [
        "Unlimited patients",
        "Custom AI model training",
        "Enterprise integrations",
        "24/7 dedicated support",
        "Custom workflows",
        "SLA guarantees",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    "Improve diagnostic accuracy by up to 30%",
    "Reduce readmission rates by 25%",
    "Optimize treatment plans for better outcomes",
    "Real-time patient monitoring and alerts",
    "Seamless integration with EHR systems",
    "Compliance with healthcare regulations"
  ];

  const technologies = [
    "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "DICOM", "HL7 FHIR",
    "AWS HealthLake", "Azure Health Bot", "Google Cloud Healthcare API",
    "NVIDIA Clara", "Intel OpenVINO", "IBM Watson Health"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      <SEO 
        title="AI Healthcare Analytics Platform - Zion Tech Group"
        description="Transform healthcare with our AI-powered analytics platform. Predictive diagnostics, patient outcome prediction, and clinical decision support."
        keywords="AI healthcare, predictive diagnostics, patient analytics, clinical decision support, healthcare AI, medical analytics"
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
              <Activity className="w-4 h-4 mr-2" />
              AI Healthcare Analytics Platform
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI-Powered
              <span className="block text-zion-cyan">Healthcare Analytics</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform healthcare delivery with AI-driven predictive diagnostics, 
              patient outcome prediction, and clinical decision support. Improve 
              patient care while reducing costs and enhancing outcomes.
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
              Healthcare AI Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with healthcare expertise to 
              deliver unprecedented insights and capabilities.
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

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Medical Specialties
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Discover how AI analytics is transforming healthcare across different 
              medical specialties and disciplines.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/80 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.specialty}</h3>
                    <p className="text-zion-slate-light mb-4">{useCase.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-zion-cyan">Applications:</h4>
                      <ul className="space-y-1">
                        {useCase.applications.map((application, appIndex) => (
                          <li key={appIndex} className="text-sm text-zion-slate-light flex items-center">
                            <CheckCircle className="w-3 h-3 text-zion-cyan mr-2" />
                            {application}
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
              Healthcare Benefits
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Transform your healthcare organization with measurable improvements 
              in patient care and operational efficiency.
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
              Choose the perfect plan for your healthcare organization. 
              All plans include our core AI healthcare analytics capabilities.
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

      {/* Technologies Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supported Technologies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Built on industry-standard healthcare and AI technologies for 
              maximum compatibility and reliability.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-purple/20 rounded-lg p-4 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >
                <span className="text-zion-slate-light text-sm font-medium">{tech}</span>
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
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join leading healthcare organizations that trust our AI-powered 
              analytics platform to improve patient care and outcomes.
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