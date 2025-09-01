import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Leaf, 
  Zap, 
  Sun, 
  Wind, 
  Droplets, 
  Recycle, 
  TreePine, 
  Globe, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  Award, 
  Users, 
  Building2, 
  Server, 
  Monitor, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield, 
  BarChart3, 
  Settings, 
  ChevronDown, 
  ChevronUp,
  Lightbulb,
  Cpu,
  HardDrive,
  Network,
  Smartphone as Mobile,
  Laptop,
  Tablet,
  Printer,
  Router,
  Camera,
  Speaker,
  Headphones,
  Keyboard,
  Mouse,
  ExternalHardDrive,
  Usb,
  Wifi,
  Bluetooth,
  Battery,
  Power,
  Save,
  Eco,
  Plant,
  Mountain,
  Ocean,
  Forest,
  MountainSnow,
  Thermometer,
  Gauge,
  Activity,
  LineChart,
  PieChart,
  Calculator,
  FileText,
  Calendar,
  Clock,
  Star,
  Heart,
  Eye,
  Search,
  Filter,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock as Time,
  DollarSign,
  Percent,
  Plus,
  Minus,
  X,
  Check,
  AlertTriangle,
  Info,
  HelpCircle,
  ExternalLink,
  Download,
  BookOpen,
  Video,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  RefreshCw,
  PowerOff,
  PowerOn,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  BatteryEmpty,
  WifiOff,
  WifiLow,
  WifiMedium,
  WifiHigh,
  Signal,
  SignalLow,
  SignalMedium,
  SignalHigh,
  SignalOff,
  WifiHigh as WifiStrong,
  WifiMedium as WifiMedium2,
  WifiLow as WifiWeak,
  WifiOff as WifiNone,
  SignalHigh as SignalStrong,
  SignalMedium as SignalMedium2,
  SignalLow as SignalWeak,
  SignalOff as SignalNone,
  SignalHigh as SignalFull,
  SignalMedium as SignalHalf,
  SignalLow as SignalQuarter,
  SignalOff as SignalEmpty,
  WifiHigh as WifiFull,
  WifiMedium as WifiHalf,
  WifiLow as WifiQuarter,
  WifiOff as WifiEmpty,
  BatteryCharging as BatteryCharging2,
  BatteryFull as BatteryFull2,
  BatteryLow as BatteryLow2,
  BatteryMedium as BatteryMedium2,
  BatteryEmpty as BatteryEmpty2,
  BatteryCharging as BatteryCharging3,
  BatteryFull as BatteryFull3,
  BatteryLow as BatteryLow3,
  BatteryMedium as BatteryMedium3,
  BatteryEmpty as BatteryEmpty3,
  BatteryCharging as BatteryCharging4,
  BatteryFull as BatteryFull4,
  BatteryLow as BatteryLow4,
  BatteryMedium as BatteryMedium4,
  BatteryEmpty as BatteryEmpty4,
  BatteryCharging as BatteryCharging5,
  BatteryFull as BatteryFull5,
  BatteryLow as BatteryLow5,
  BatteryMedium as BatteryMedium5,
  BatteryEmpty as BatteryEmpty5,
  BatteryCharging as BatteryCharging6,
  BatteryFull as BatteryFull6,
  BatteryLow as BatteryLow6,
  BatteryMedium as BatteryMedium6,
  BatteryEmpty as BatteryEmpty6,
  BatteryCharging as BatteryCharging7,
  BatteryFull as BatteryFull7,
  BatteryLow as BatteryLow7,
  BatteryMedium as BatteryMedium7,
  BatteryEmpty as BatteryEmpty7,
  BatteryCharging as BatteryCharging8,
  BatteryFull as BatteryFull8,
  BatteryLow as BatteryLow8,
  BatteryMedium as BatteryMedium8,
  BatteryEmpty as BatteryEmpty8,
  BatteryCharging as BatteryCharging9,
  BatteryFull as BatteryFull9,
  BatteryLow as BatteryLow9,
  BatteryMedium as BatteryMedium9,
  BatteryEmpty as BatteryEmpty9,
  BatteryCharging as BatteryCharging10,
  BatteryFull as BatteryFull10,
  BatteryLow as BatteryLow10,
  BatteryMedium as BatteryMedium10,
  BatteryEmpty as BatteryEmpty10
} from 'lucide-react';

export default function GreenIT() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Solutions', count: 12 },
    { id: 'energy', name: 'Energy Efficiency', count: 4 },
    { id: 'hardware', name: 'Green Hardware', count: 3 },
    { id: 'software', name: 'Sustainable Software', count: 3 },
    { id: 'data', name: 'Data Centers', count: 2 }
  ];

  const greenSolutions = [
    {
      id: 'energy-monitoring',
      name: 'Smart Energy Monitoring',
      category: 'energy',
      icon: Activity,
      description: 'Real-time energy consumption tracking and optimization',
      features: [
        'Real-time energy consumption monitoring',
        'AI-powered optimization recommendations',
        'Automated power management',
        'Energy usage analytics and reporting',
        'Integration with smart building systems',
        'Mobile app for remote monitoring'
      ],
      benefits: [
        'Reduce energy costs by 15-25%',
        'Identify energy waste patterns',
        'Optimize equipment performance',
        'Meet sustainability goals',
        'Comply with energy regulations'
      ],
      savings: '15-25% energy reduction',
      implementation: '2-4 weeks',
      pricing: 'Starting from $5,000'
    },
    {
      id: 'virtualization',
      name: 'Server Virtualization',
      category: 'hardware',
      icon: Server,
      description: 'Consolidate physical servers to reduce power consumption',
      features: [
        'Server consolidation and virtualization',
        'Dynamic resource allocation',
        'Automated power management',
        'High availability and disaster recovery',
        'Performance monitoring and optimization',
        'Green computing best practices'
      ],
      benefits: [
        'Reduce server power consumption by 60-80%',
        'Lower cooling requirements',
        'Decrease hardware maintenance costs',
        'Improve resource utilization',
        'Reduce carbon footprint'
      ],
      savings: '60-80% power reduction',
      implementation: '4-8 weeks',
      pricing: 'Starting from $15,000'
    },
    {
      id: 'cloud-optimization',
      name: 'Cloud Infrastructure Optimization',
      category: 'software',
      icon: Cloud,
      description: 'Optimize cloud resources for maximum efficiency',
      features: [
        'Cloud resource optimization',
        'Auto-scaling and load balancing',
        'Cost optimization algorithms',
        'Green cloud provider selection',
        'Carbon footprint tracking',
        'Sustainable cloud practices'
      ],
      benefits: [
        'Reduce cloud costs by 20-40%',
        'Lower carbon emissions',
        'Improve application performance',
        'Better resource utilization',
        'Scalable and flexible infrastructure'
      ],
      savings: '20-40% cost reduction',
      implementation: '3-6 weeks',
      pricing: 'Starting from $8,000'
    },
    {
      id: 'data-center-efficiency',
      name: 'Data Center Efficiency',
      category: 'data',
      icon: Database,
      description: 'Optimize data center operations for sustainability',
      features: [
        'Cooling system optimization',
        'Power distribution efficiency',
        'Heat recovery systems',
        'Renewable energy integration',
        'Energy-efficient equipment',
        'Environmental monitoring'
      ],
      benefits: [
        'Reduce data center energy by 30-50%',
        'Lower operational costs',
        'Improve equipment lifespan',
        'Meet sustainability certifications',
        'Reduce carbon footprint'
      ],
      savings: '30-50% energy reduction',
      implementation: '8-16 weeks',
      pricing: 'Starting from $25,000'
    },
    {
      id: 'smart-lighting',
      name: 'Smart Lighting Systems',
      category: 'energy',
      icon: Lightbulb,
      description: 'Intelligent lighting control for energy savings',
      features: [
        'Motion-sensing controls',
        'Daylight harvesting',
        'Scheduling and automation',
        'Energy usage analytics',
        'Mobile app control',
        'Integration with building systems'
      ],
      benefits: [
        'Reduce lighting energy by 40-60%',
        'Improve occupant comfort',
        'Extend bulb lifespan',
        'Reduce maintenance costs',
        'Smart building integration'
      ],
      savings: '40-60% energy reduction',
      implementation: '2-3 weeks',
      pricing: 'Starting from $3,000'
    },
    {
      id: 'green-software',
      name: 'Sustainable Software Development',
      category: 'software',
      icon: Code,
      description: 'Eco-friendly software development practices',
      features: [
        'Energy-efficient algorithms',
        'Code optimization techniques',
        'Green coding standards',
        'Performance monitoring',
        'Resource usage optimization',
        'Sustainable development practices'
      ],
      benefits: [
        'Reduce software energy consumption',
        'Improve application performance',
        'Lower operational costs',
        'Better user experience',
        'Environmental responsibility'
      ],
      savings: '20-35% energy reduction',
      implementation: 'Ongoing',
      pricing: 'Starting from $10,000'
    },
    {
      id: 'renewable-energy',
      name: 'Renewable Energy Integration',
      category: 'energy',
      icon: Sun,
      description: 'Integrate solar, wind, and other renewable sources',
      features: [
        'Solar panel installation',
        'Wind turbine integration',
        'Energy storage systems',
        'Grid connection management',
        'Energy production monitoring',
        'Maintenance and optimization'
      ],
      benefits: [
        'Generate clean, renewable energy',
        'Reduce electricity costs',
        'Lower carbon footprint',
        'Energy independence',
        'Government incentives and tax credits'
      ],
      savings: '40-80% energy costs',
      implementation: '12-24 weeks',
      pricing: 'Starting from $50,000'
    },
    {
      id: 'green-hardware',
      name: 'Energy-Efficient Hardware',
      category: 'hardware',
      icon: Cpu,
      description: 'Select and deploy energy-efficient computing equipment',
      features: [
        'Energy Star certified equipment',
        'Low-power processors',
        'Efficient cooling systems',
        'Power management features',
        'Energy monitoring capabilities',
        'Sustainable disposal programs'
      ],
      benefits: [
        'Reduce hardware energy consumption',
        'Lower operational costs',
        'Extend equipment lifespan',
        'Meet environmental standards',
        'Improve corporate sustainability'
      ],
      savings: '25-40% power reduction',
      implementation: '1-2 weeks',
      pricing: 'Starting from $2,000'
    },
    {
      id: 'waste-reduction',
      name: 'Electronic Waste Reduction',
      category: 'hardware',
      icon: Recycle,
      description: 'Comprehensive e-waste management and recycling',
      features: [
        'E-waste assessment and audit',
        'Secure data destruction',
        'Equipment refurbishment',
        'Recycling partnerships',
        'Donation programs',
        'Sustainability reporting'
      ],
      benefits: [
        'Reduce environmental impact',
        'Comply with regulations',
        'Improve corporate image',
        'Potential tax benefits',
        'Support circular economy'
      ],
      savings: 'Varies by program',
      implementation: '2-4 weeks',
      pricing: 'Starting from $1,000'
    },
    {
      id: 'carbon-tracking',
      name: 'Carbon Footprint Tracking',
      category: 'software',
      icon: BarChart3,
      description: 'Monitor and reduce carbon emissions',
      features: [
        'Carbon emission calculation',
        'Real-time monitoring',
        'Reduction tracking',
        'Sustainability reporting',
        'Goal setting and tracking',
        'Stakeholder communication'
      ],
      benefits: [
        'Track environmental impact',
        'Set and achieve sustainability goals',
        'Improve corporate reporting',
        'Meet compliance requirements',
        'Enhance brand reputation'
      ],
      savings: 'Measurable impact',
      implementation: '4-6 weeks',
      pricing: 'Starting from $6,000'
    },
    {
      id: 'green-networking',
      name: 'Energy-Efficient Networking',
      category: 'data',
      icon: Network,
      description: 'Optimize network infrastructure for energy efficiency',
      features: [
        'Network equipment optimization',
        'Traffic management',
        'Power over Ethernet',
        'Energy-efficient protocols',
        'Network monitoring',
        'Performance optimization'
      ],
      benefits: [
        'Reduce network energy consumption',
        'Improve network performance',
        'Lower operational costs',
        'Better reliability',
        'Environmental responsibility'
      ],
      savings: '20-35% energy reduction',
      implementation: '3-5 weeks',
      pricing: 'Starting from $12,000'
    },
    {
      id: 'sustainability-reporting',
      name: 'Sustainability Reporting Platform',
      category: 'software',
      icon: FileText,
      description: 'Comprehensive sustainability reporting and analytics',
      features: [
        'Environmental data collection',
        'Sustainability metrics tracking',
        'Automated reporting',
        'Stakeholder dashboards',
        'Compliance monitoring',
        'Goal tracking and alerts'
      ],
      benefits: [
        'Streamline sustainability reporting',
        'Improve data accuracy',
        'Meet compliance requirements',
        'Enhance stakeholder communication',
        'Track progress toward goals'
      ],
      savings: 'Time and resource savings',
      implementation: '6-8 weeks',
      pricing: 'Starting from $8,000'
    }
  ];

  const environmentalImpact = [
    {
      icon: TreePine,
      metric: '2,500+',
      label: 'Trees Planted',
      description: 'Equivalent carbon offset through our green initiatives'
    },
    {
      icon: Zap,
      metric: '45%',
      label: 'Energy Reduction',
      description: 'Average energy savings for our clients'
    },
    {
      icon: Recycle,
      metric: '15,000+',
      label: 'Devices Recycled',
      description: 'Electronic waste diverted from landfills'
    },
    {
      icon: Globe,
      metric: '2,800',
      label: 'Tons CO2 Saved',
      description: 'Carbon emissions reduced through our solutions'
    }
  ];

  const certifications = [
    {
      name: 'ISO 14001',
      description: 'Environmental Management Systems',
      icon: Award,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Energy Star',
      description: 'Energy Efficiency Certification',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'LEED',
      description: 'Leadership in Energy and Environmental Design',
      icon: Leaf,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Green Seal',
      description: 'Environmental Standard Certification',
      icon: CheckCircle,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const caseStudies = [
    {
      title: 'Fortune 500 Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'High energy costs and carbon footprint from outdated IT infrastructure',
      solution: 'Implemented server virtualization, cloud optimization, and smart energy monitoring',
      results: [
        'Reduced energy consumption by 65%',
        'Lowered IT costs by $2.3M annually',
        'Achieved carbon neutrality goals 2 years early',
        'Improved system performance by 40%'
      ],
      savings: '$2.3M annually',
      timeline: '6 months'
    },
    {
      title: 'Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Inefficient data centers consuming excessive energy',
      solution: 'Data center consolidation, renewable energy integration, and cooling optimization',
      results: [
        'Reduced energy consumption by 55%',
        'Lowered operational costs by $1.8M annually',
        'Improved system reliability by 99.9%',
        'Enhanced patient data security'
      ],
      savings: '$1.8M annually',
      timeline: '8 months'
    },
    {
      title: 'Educational Institution',
      industry: 'Education',
      challenge: 'High electricity bills from inefficient campus technology',
      solution: 'Smart lighting systems, energy monitoring, and green hardware deployment',
      results: [
        'Reduced energy consumption by 45%',
        'Lowered utility costs by $850K annually',
        'Improved learning environment',
        'Enhanced sustainability curriculum'
      ],
      savings: '$850K annually',
      timeline: '4 months'
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const filteredSolutions = selectedCategory === 'all' 
    ? greenSolutions 
    : greenSolutions.filter(solution => solution.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Green IT Solutions - Zion Tech Group"
        description="Transform your technology infrastructure with our sustainable Green IT solutions. Reduce energy consumption, lower costs, and minimize environmental impact."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl mb-6">
              <Leaf className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Green IT</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your technology infrastructure with sustainable solutions that reduce 
              energy consumption, lower costs, and minimize environmental impact.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                Get Green IT Assessment
              </button>
              <button className="px-8 py-3 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-200">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Environmental Impact</h2>
            <p className="text-xl text-gray-300">
              Real results from implementing sustainable technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {environmentalImpact.map((impact, index) => (
              <motion.div
                key={impact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl mb-6">
                  <impact.icon className="w-10 h-10 text-green-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{impact.metric}</div>
                <div className="text-lg font-semibold text-green-400 mb-2">{impact.label}</div>
                <p className="text-gray-300 text-sm">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Green IT Solutions */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Green IT Solutions</h2>
            <p className="text-xl text-gray-300">
              Comprehensive sustainable technology solutions for your organization
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        solution.category === 'energy' ? 'bg-green-500/20 text-green-400' :
                        solution.category === 'hardware' ? 'bg-blue-500/20 text-blue-400' :
                        solution.category === 'software' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {categories.find(c => c.id === solution.category)?.name}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">
                        <solution.icon className="w-6 h-6 text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-200">
                        {solution.name}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <div className="text-gray-400">Savings</div>
                        <div className="text-green-400 font-medium">{solution.savings}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Timeline</div>
                        <div className="text-blue-400 font-medium">{solution.implementation}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Starting from</div>
                        <div className="text-purple-400 font-medium">{solution.pricing}</div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => toggleSection(solution.id)}
                      className="w-full px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                    >
                      {expandedSection === solution.id ? 'Show Less' : 'Learn More'}
                    </button>
                    
                    {expandedSection === solution.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-slate-600/50"
                      >
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {solution.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                                <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                          <ul className="space-y-1">
                            {solution.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                                <Star className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Certifications</h2>
            <p className="text-xl text-gray-300">
              Recognized for our commitment to environmental sustainability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${cert.color} rounded-2xl mb-6`}>
                  <cert.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-300 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-gray-300">
              Real results from organizations implementing our Green IT solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-200">
                    {study.title}
                  </h3>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">Annual Savings</div>
                      <div className="text-green-400 font-medium">{study.savings}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Implementation</div>
                      <div className="text-blue-400 font-medium">{study.timeline}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Go Green?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your sustainability journey today. Our Green IT experts will assess your 
              current infrastructure and provide a customized plan to reduce costs and environmental impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                Schedule Green IT Assessment
              </button>
              <a
                href="mailto:greenit@ziontechgroup.com"
                className="px-8 py-3 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-200"
              >
                Contact Green IT Team
              </a>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                Get a free sustainability assessment and customized Green IT roadmap
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
