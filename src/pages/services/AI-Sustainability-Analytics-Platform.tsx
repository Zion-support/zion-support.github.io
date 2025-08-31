import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Brain, 
  BarChart3, 
  TrendingUp, 
  CheckCircle, 
  Zap, 
  Globe, 
  Cpu,
  Database,
  Network,
  Cloud,
  Code,
  Server,
  Shield,
  Target,
  Rocket,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Tree,
  Recycle,
  Sun,
  Wind,
  Droplets,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Bicycle,
  Motorcycle,
  Truck,
  Building2,
  Warehouse,
  Store,
  Bank,
  Hospital,
  School,
  University,
  Library,
  Museum,
  Theater,
  Stadium,
  Park,
  Beach,
  Mountain,
  Forest,
  Desert,
  Island,
  Ocean,
  River,
  Lake,
  Stream,
  Waterfall,
  Volcano,
  Cave,
  Canyon,
  Valley,
  Hill,
  Cliff,
  Rock,
  Sand,
  Soil,
  Grass,
  Flower,
  Bush,
  Vine,
  Moss,
  Algae,
  Coral,
  Shell,
  Fish,
  Bird,
  Mammal,
  Reptile,
  Amphibian,
  Insect,
  Arachnid,
  Crustacean,
  Mollusk,
  Worm,
  Bacteria,
  Virus,
  Fungus,
  Protozoa,
  DollarSign,
  Clock,
  Users,
  Award,
  BookOpen,
  FileText,
  Video,
  GraduationCap,
  Handshake,
  MessageCircle,
  HelpCircle,
  Search,
  Settings,
  PieChart,
  LineChart,
  Activity,
  Thermometer,
  Gauge,
  Lightbulb,
  Wrench,
  Tool,
  Palette,
  Camera,
  Music,
  Gamepad2,
  Car as CarIcon,
  Plane as PlaneIcon,
  Ship as ShipIcon,
  Train as TrainIcon,
  Bus as BusIcon,
  Bicycle as BicycleIcon,
  Motorcycle as MotorcycleIcon,
  Truck as TruckIcon,
  Building2 as Building2Icon,
  Factory as FactoryIcon,
  Warehouse as WarehouseIcon,
  Store as StoreIcon,
  Bank as BankIcon,
  Hospital as HospitalIcon,
  School as SchoolIcon,
  University as UniversityIcon,
  Library as LibraryIcon,
  Museum as MuseumIcon,
  Theater as TheaterIcon,
  Stadium as StadiumIcon,
  Park as ParkIcon,
  Beach as BeachIcon,
  Mountain as MountainIcon,
  Forest as ForestIcon,
  Desert as DesertIcon,
  Island as IslandIcon,
  Ocean as OceanIcon,
  River as RiverIcon,
  Lake as LakeIcon,
  Stream as StreamIcon,
  Waterfall as WaterfallIcon,
  Volcano as VolcanoIcon,
  Cave as CaveIcon,
  Canyon as CanyonIcon,
  Valley as ValleyIcon,
  Hill as HillIcon,
  Cliff as CliffIcon,
  Rock as RockIcon,
  Sand as SandIcon,
  Soil as SoilIcon,
  Grass as GrassIcon,
  Tree as TreeIcon,
  Flower as FlowerIcon,
  Bush as BushIcon,
  Vine as VineIcon,
  Moss as MossIcon,
  Algae as AlgaeIcon,
  Coral as CoralIcon,
  Shell as ShellIcon,
  Fish as FishIcon,
  Bird as BirdIcon,
  Mammal as MammalIcon,
  Reptile as ReptileIcon,
  Amphibian as AmphibianIcon,
  Insect as InsectIcon,
  Arachnid as ArachnidIcon,
  Crustacean as CrustaceanIcon,
  Mollusk as MolluskIcon,
  Worm as WormIcon,
  Bacteria as BacteriaIcon,
  Virus as VirusIcon,
  Fungus as FungusIcon,
  Protozoa as ProtozoaIcon
} from 'lucide-react';

const AISustainabilityAnalyticsPlatform: React.FC = () => {
  const features = [
    {
      title: 'Real-time Environmental Monitoring',
      description: 'Continuous monitoring of air quality, water quality, energy consumption, and waste generation across all facilities.',
      icon: Activity,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'AI-Powered Carbon Footprint Analysis',
      description: 'Advanced algorithms to calculate and track carbon emissions from all business operations and supply chains.',
      icon: Brain,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Predictive Sustainability Insights',
      description: 'Machine learning models to predict environmental impact and recommend optimization strategies.',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'ESG Compliance Monitoring',
      description: 'Automated tracking of Environmental, Social, and Governance metrics for regulatory compliance.',
      icon: Shield,
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Supply Chain Sustainability',
      description: 'End-to-end visibility into supplier sustainability practices and environmental impact.',
      icon: Network,
      color: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Circular Economy Analytics',
      description: 'Track resource efficiency, waste reduction, and circular economy initiatives across operations.',
      icon: Recycle,
      color: 'from-teal-500 to-green-600'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses starting their sustainability journey',
      features: [
        'Up to 5 facilities',
        'Basic environmental metrics',
        'Carbon footprint tracking',
        'Email support',
        'Standard reporting'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for growing companies with multiple locations',
      features: [
        'Up to 25 facilities',
        'Advanced AI analytics',
        'ESG compliance tracking',
        'Priority support',
        'Custom dashboards',
        'API access',
        'Supply chain monitoring'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex sustainability needs',
      features: [
        'Unlimited facilities',
        'Custom AI models',
        'Dedicated support',
        'On-premise deployment',
        'Advanced analytics',
        'White-label options',
        'Custom integrations'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Manufacturing',
      description: 'Monitor energy efficiency, waste reduction, and carbon emissions across production facilities',
      icon: Factory,
      benefits: ['Energy optimization', 'Waste reduction', 'Carbon tracking', 'Compliance monitoring']
    },
    {
      title: 'Retail & Logistics',
      description: 'Track sustainability across store networks and supply chain operations',
      icon: Store,
      benefits: ['Store efficiency', 'Supply chain visibility', 'Transportation optimization', 'Waste management']
    },
    {
      title: 'Healthcare',
      description: 'Ensure sustainable practices in healthcare facilities and medical supply chains',
      icon: Hospital,
      benefits: ['Medical waste tracking', 'Energy efficiency', 'Supply chain sustainability', 'Regulatory compliance']
    },
    {
      title: 'Financial Services',
      description: 'Monitor ESG metrics and sustainable investment portfolios',
      icon: Bank,
      benefits: ['ESG reporting', 'Investment analysis', 'Risk assessment', 'Regulatory compliance']
    }
  ];

  const metrics = [
    {
      title: 'Carbon Emissions',
      value: '2.3M',
      unit: 'tons CO2e',
      change: '-15%',
      trend: 'down',
      icon: Thermometer
    },
    {
      title: 'Energy Efficiency',
      value: '87%',
      unit: '',
      change: '+8%',
      trend: 'up',
      icon: Lightbulb
    },
    {
      title: 'Waste Reduction',
      value: '34%',
      unit: '',
      change: '+12%',
      trend: 'up',
      icon: Recycle
    },
    {
      title: 'Water Conservation',
      value: '1.2M',
      unit: 'gallons',
      change: '+22%',
      trend: 'up',
      icon: Droplets
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              AI-Powered Sustainability
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Sustainability Analytics Platform
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your organization's environmental impact with AI-powered sustainability analytics. 
              Monitor, analyze, and optimize your carbon footprint, energy efficiency, and ESG compliance in real-time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-Time Sustainability Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Track your environmental impact with live data and AI-powered insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{metric.title}</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">
                  {metric.value}{metric.unit}
                </div>
                <div className={`text-sm font-medium ${
                  metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {metric.change} from last year
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform provides comprehensive sustainability analytics and monitoring capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
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
              Our platform serves diverse industries with specialized sustainability needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-400 mb-4">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sustainable Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that best fits your organization's sustainability goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-green-500/20 to-blue-500/20 border-green-500/50 scale-105'
                    : 'bg-white/5 border-white/10 hover:border-white/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build a Sustainable Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations that trust our AI-powered sustainability platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-400">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Placeholder components
const Play = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default AISustainabilityAnalyticsPlatform;