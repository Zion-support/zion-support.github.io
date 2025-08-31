import React from 'react';
import { motion } from 'framer-motion';
import SEOOptimizer from '../../components/SEOOptimizer';
import { 
  Truck, 
  Route, 
  Package, 
  Globe, 
  Zap, 
  Brain, 
  BarChart3, 
  Shield, 
  Clock, 
  DollarSign,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Route as RouteIcon,
  Warehouse,
  DeliveryTruck,
  Smartphone,
  Cloud,
  Database,
  Lock,
  Activity,
  Target,
  Rocket,
  Lightbulb,
  Cog,
  BarChart,
  Network,
  Server,
  Cpu,
  HardDrive,
  Wifi,
  Monitor,
  Smartphone as Mobile,
  Globe2,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Shield as ShieldIcon,
  BarChart3 as AnalyticsIcon,
  Route as RouteIcon2,
  Package as PackageIcon,
  Truck as TruckIcon,
  Clock as ClockIcon,
  DollarSign as PriceIcon,
  Users as UsersIcon,
  TrendingUp as GrowthIcon,
  CheckCircle as CheckIcon,
  Star as StarIcon,
  ArrowRight as ArrowIcon,
  MapPin as LocationIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  Building2,
  Car,
  Plane,
  Ship,
  Train,
  Bike,
  Motorcycle,
  Bus,
  Helicopter,
  Drone,
  Satellite,
  Radar,
  Compass,
  Navigation,
  Traffic,
  Speed,
  Fuel,
  Battery,
  Solar,
  Wind,
  Water,
  Fire,
  Snow,
  Rain,
  Sun,
  Moon,
  Cloud as WeatherIcon,
  Thermometer,
  Gauge,
  Timer,
  Calendar,
  Clock3,
  Stopwatch,
  Hourglass,
  Bell,
  AlertTriangle,
  Info,
  HelpCircle,
  Settings,
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
  Camera,
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
  Oganesson,
  ShoppingCart,
  Factory,
  Leaf,
  Play
} from 'lucide-react';

const seoData = {
  title: "AI Autonomous Logistics Platform | Zion Tech Group",
  description: "Revolutionary AI-powered logistics platform that autonomously manages supply chains, route optimization, and delivery operations with real-time intelligence.",
  keywords: "AI logistics, autonomous supply chain, route optimization, delivery automation, logistics AI platform",
  ogImage: "/images/services/ai-autonomous-logistics-platform.jpg",
  canonicalUrl: "https://ziontechgroup.com/services/ai-autonomous-logistics-platform"
};

export default function AIAutonomousLogisticsPlatform() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Route Optimization",
      description: "Advanced algorithms that continuously learn and optimize delivery routes in real-time, reducing fuel costs and delivery times by up to 35%."
    },
    {
      icon: <Route className="w-6 h-6" />,
      title: "Autonomous Fleet Management",
      description: "Intelligent fleet coordination with predictive maintenance, real-time tracking, and automated dispatching for maximum efficiency."
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Smart Inventory Management",
      description: "AI-driven demand forecasting and inventory optimization that reduces stockouts by 60% and excess inventory by 40%."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Supply Chain Visibility",
      description: "End-to-end visibility across your entire supply chain with real-time monitoring and predictive analytics."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Management & Compliance",
      description: "Automated risk assessment, compliance monitoring, and contingency planning for supply chain resilience."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Machine learning models that predict demand patterns, optimize pricing, and identify cost-saving opportunities."
    }
  ];

  const benefits = [
    "Reduce logistics costs by 25-40%",
    "Improve delivery accuracy by 95%",
    "Cut carbon emissions by 30%",
    "Increase fleet utilization by 45%",
    "Reduce delivery time by 35%",
    "Improve customer satisfaction by 60%"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small logistics operations",
      features: [
        "Up to 50 vehicles",
        "Basic route optimization",
        "Real-time tracking",
        "Email support",
        "Standard analytics"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$5,000",
      period: "/month",
      description: "Ideal for growing logistics companies",
      features: [
        "Up to 200 vehicles",
        "Advanced AI optimization",
        "Predictive analytics",
        "Priority support",
        "Custom integrations",
        "Advanced reporting"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$12,000",
      period: "/month",
      description: "For large-scale logistics operations",
      features: [
        "Unlimited vehicles",
        "Custom AI models",
        "White-label solution",
        "24/7 dedicated support",
        "API access",
        "Custom development",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "E-commerce Logistics",
      description: "Optimize last-mile delivery for online retailers with AI-powered route planning and real-time customer updates.",
      icon: <ShoppingCart className="w-8 h-8" />
    },
    {
      title: "Manufacturing Supply Chain",
      description: "Streamline raw material procurement and finished goods distribution with predictive demand forecasting.",
      icon: <Factory className="w-8 h-8" />
    },
    {
      title: "Healthcare Logistics",
      description: "Ensure timely delivery of medical supplies and pharmaceuticals with temperature monitoring and compliance tracking.",
      icon: <Activity className="w-8 h-8" />
    },
    {
      title: "Food & Beverage",
      description: "Maintain cold chain integrity and optimize fresh food delivery with real-time temperature and humidity monitoring.",
      icon: <Leaf className="w-8 h-8" />
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
              <Truck className="w-4 h-4 mr-2" />
              AI-Powered Logistics
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI Autonomous
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Logistics Platform</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Revolutionize your supply chain with our cutting-edge AI platform that autonomously manages logistics operations, 
              optimizes routes in real-time, and delivers unprecedented efficiency gains.
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
              Powered by Advanced AI Technology
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our platform combines machine learning, computer vision, and predictive analytics to create the most intelligent logistics solution available.
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
              Transform Your Logistics Operations
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Experience unprecedented efficiency gains and cost savings with our AI-powered platform.
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
              Choose the plan that fits your logistics needs. All plans include our core AI features and 24/7 support.
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
              Our AI logistics platform is designed to serve diverse industries with specialized solutions.
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
              Ready to Revolutionize Your Logistics?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already using our AI platform to transform their supply chain operations.
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