import { useCallback  } from "react";
import React, { useState } from "react"
import { motion   } from "framer-motion";
import { SEO   } from "../components/SEO";
import {
  Leaf;
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
  ChevronUp;
  Lightbulb;
  Cpu;
  HardDrive;
  Network;
  Smartphone as Mobile;
  Laptop;
  Tablet;
  Printer;
  Router;
  Camera;
  Speaker;
  Headphones;
  Keyboard;
  Mouse;
  ExternalHardDrive;
  Usb;
  Wifi;
  Bluetooth;
  Battery;
  Power;
  Save;
  Eco;
  Plant;
  Mountain;
  Ocean;
  Forest;
  MountainSnow;
  Thermometer;
  Gauge;
  Activity;
  LineChart;
  PieChart;
  Calculator;
  FileText;
  Calendar;
  Clock;
  Star;
  Heart;
  Eye;
  Search;
  Filter;
  ArrowRight;
  Mail;
  Phone;
  MapPin;
  Clock as Time;
  DollarSign;
  Percent;
  Plus;
  Minus;
  X;
  Check;
  AlertTriangle;
  Info;
  HelpCircle;
  ExternalLink;
  Download;
  BookOpen;
  Video;
  Play;
  Pause;
  SkipBack;
  SkipForward;
  Volume2;
  VolumeX;
  Maximize2;
  Minimize2;
  RotateCcw;
  RefreshCw;
  PowerOff;
  PowerOn;
  BatteryCharging;
  BatteryFull;
  BatteryLow;
  BatteryMedium;
  BatteryEmpty;
  WifiOff;
  WifiLow;
  WifiMedium;
  WifiHigh;
  Signal;
  SignalLow;
  SignalMedium;
  SignalHigh;
  SignalOff;
  WifiHigh as WifiStrong;
  WifiMedium as WifiMedium2;
  WifiLow as WifiWeak;
  WifiOff as WifiNone;
  SignalHigh as SignalStrong;
  SignalMedium as SignalMedium2;
  SignalLow as SignalWeak;
  SignalOff as SignalNone;
  SignalHigh as SignalFull;
  SignalMedium as SignalHalf;
  SignalLow as SignalQuarter;
  SignalOff as SignalEmpty;
  WifiHigh as WifiFull;
  WifiMedium as WifiHalf;
  WifiLow as WifiQuarter;
  WifiOff as WifiEmpty;
  BatteryCharging as BatteryCharging2;
  BatteryFull as BatteryFull2;
  BatteryLow as BatteryLow2;
  BatteryMedium as BatteryMedium2;
  BatteryEmpty as BatteryEmpty2;
  BatteryCharging as BatteryCharging3;
  BatteryFull as BatteryFull3;
  BatteryLow as BatteryLow3;
  BatteryMedium as BatteryMedium3;
  BatteryEmpty as BatteryEmpty3;
  BatteryCharging as BatteryCharging4;
  BatteryFull as BatteryFull4;
  BatteryLow as BatteryLow4;
  BatteryMedium as BatteryMedium4;
  BatteryEmpty as BatteryEmpty4;
  BatteryCharging as BatteryCharging5;
  BatteryFull as BatteryFull5;
  BatteryLow as BatteryLow5;
  BatteryMedium as BatteryMedium5;
  BatteryEmpty as BatteryEmpty5;
  BatteryCharging as BatteryCharging6;
  BatteryFull as BatteryFull6;
  BatteryLow as BatteryLow6;
  BatteryMedium as BatteryMedium6;
  BatteryEmpty as BatteryEmpty6;
  BatteryCharging as BatteryCharging7;
  BatteryFull as BatteryFull7;
  BatteryLow as BatteryLow7;
  BatteryMedium as BatteryMedium7;
  BatteryEmpty as BatteryEmpty7;
  BatteryCharging as BatteryCharging8;
  BatteryFull as BatteryFull8;
  BatteryLow as BatteryLow8;
  BatteryMedium as BatteryMedium8;
  BatteryEmpty as BatteryEmpty8;
  BatteryCharging as BatteryCharging9;
  BatteryFull as BatteryFull9;
  BatteryLow as BatteryLow9;
  BatteryMedium as BatteryMedium9;
  BatteryEmpty as BatteryEmpty9;
  BatteryCharging as BatteryCharging10;
  BatteryFull as BatteryFull10;
  BatteryLow as BatteryLow10;
  BatteryMedium as BatteryMedium10;
  BatteryEmpty as BatteryEmpty10;
}
}
 } from "lucide-react";
export default function GreenIT() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const categories = [
  { id: 'all', na,
  m: e: 'All Solutions', cou,
  n: t: 12 },
  },
  { id: 'energy', na,
  m: e: 'Energy Efficiency', cou,
  n: t: 4 },
  },
  { id: 'hardware', na,
  m: e: 'Green Hardware', cou,
  n: t: 3 },
  },
  { id: 'software', na,
  m: e: 'Sustainable Software', cou,
  n: t: 3 },
  },
  { id: 'data', na,
  m: e: 'Data Centers', cou,
  n: t: 2 },
  },
  ]
  const greenSolutions = [
  {
  id: 'energy-monitoring',na,
  m: e: 'Smart Energy Monitoring',catego,
  r: y: 'energy',ic,
  o: n: Activity,descripti,
  o: n: 'Real-time energy consumption tracking and optimization',featur,
  e: s: [
  'Real-time energy consumption monitoringAI-powered optimization recommendations'
        'Automated power managementEnergy usage analytics and reporting'
        'Integration with smart building systemsMobile app for remote monitoring'
]
      benefi,
  t: s: [
  'Reduce energy costs by 15-25%Identify energy waste patterns'
        'Optimize equipment performanceMeet sustainability goals'
        'Comply with energy regulations'
]
      saving,
  s: '15-25% energy reduction',implementati,
  o: n: '2-4 weeks',prici,
  n: g: 'Starting from $5,000'
},
  {
  id: 'virtualization',na,
  m: e: 'Server Virtualization',catego,
  r: y: 'hardware',ic,
  o: n: Server,descripti,
  o: n: 'Consolidate physical servers to reduce power consumption',featur,
  e: s: [
  'Server consolidation and virtualizationDynamic resource allocation'
        'Automated power managementHigh availability and disaster recovery'
        'Performance monitoring and optimizationGreen computing best practices'
]
      benefi,
  t: s: [
  'Reduce server power consumption by 60-80%Lower cooling requirements'
        'Decrease hardware maintenance costsImprove resource utilization'
        'Reduce carbon footprint'
]
      saving,
  s: '60-80% power reduction',implementati,
  o: n: '4-8 weeks',prici,
  n: g: 'Starting from $15,000'
},
  {
  id: 'cloud-optimization',na,
  m: e: 'Cloud Infrastructure Optimization',catego,
  r: y: 'software',ic,
  o: n: Cloud,descripti,
  o: n: 'Optimize cloud resources for maximum efficiency',featur,
  e: s: [
  'Cloud resource optimizationAuto-scaling and load balancing'
        'Cost optimization algorithmsGreen cloud provider selection'
        'Carbon footprint trackingSustainable cloud practices'
]
      benefi,
  t: s: [
  'Reduce cloud costs by 20-40%Lower carbon emissions'
        'Improve application performanceBetter resource utilization'
        'Scalable and flexible infrastructure'
]
      saving,
  s: '20-40% cost reduction',implementati,
  o: n: '3-6 weeks',prici,
  n: g: 'Starting from $8,000'
},
  {
  id: 'data-center-efficiency',na,
  m: e: 'Data Center Efficiency',catego,
  r: y: 'data',ic,
  o: n: Database,descripti,
  o: n: 'Optimize data center operations for sustainability',featur,
  e: s: [
  'Cooling system optimizationPower distribution efficiency'
        'Heat recovery systemsRenewable energy integration'
        'Energy-efficient equipmentEnvironmental monitoring'
]
      benefi,
  t: s: [
  'Reduce data center energy by 30-50%Lower operational costs'
        'Improve equipment lifespanMeet sustainability certifications'
        'Reduce carbon footprint'
]
      saving,
  s: '30-50% energy reduction',implementati,
  o: n: '8-16 weeks',prici,
  n: g: 'Starting from $25,000'
},
  {
  id: 'smart-lighting',na,
  m: e: 'Smart Lighting Systems',catego,
  r: y: 'energy',ic,
  o: n: Lightbulb,descripti,
  o: n: 'Intelligent lighting control for energy savings',featur,
  e: s: [
  'Motion-sensing controlsDaylight harvesting'
        'Scheduling and automationEnergy usage analytics'
        'Mobile app controlIntegration with building systems'
]
      benefi,
  t: s: [
  'Reduce lighting energy by 40-60%Improve occupant comfort'
        'Extend bulb lifespanReduce maintenance costs'
        'Smart building integration'
]
      saving,
  s: '40-60% energy reduction',implementati,
  o: n: '2-3 weeks',prici,
  n: g: 'Starting from $3,000'
},
  {
  id: 'green-software',na,
  m: e: 'Sustainable Software Development',catego,
  r: y: 'software',ic,
  o: n: Code,descripti,
  o: n: 'Eco-friendly software development practices',featur,
  e: s: [
  'Energy-efficient algorithmsCode optimization techniques'
        'Green coding standardsPerformance monitoring'
        'Resource usage optimizationSustainable development practices'
]
      benefi,
  t: s: [
  'Reduce software energy consumptionImprove application performance'
        'Lower operational costsBetter user experience'
        'Environmental responsibility'
]
      saving,
  s: '20-35% energy reduction',implementati,
  o: n: 'Ongoing',prici,
  n: g: 'Starting from $10,000'
},
  {
  id: 'renewable-energy',na,
  m: e: 'Renewable Energy Integration',catego,
  r: y: 'energy',ic,
  o: n: Sun,descripti,
  o: n: 'Integrate solar, wind, and other renewable sources'
      featur,
  e: s: [
  'Solar panel installationWind turbine integration'
        'Energy storage systemsGrid connection management'
        'Energy production monitoringMaintenance and optimization'
]
      benefit,
  s: [
  'Generate clean, renewable energyReduce electricity costs'
        'Lower carbon footprintEnergy independence'
        'Government incentives and tax credits'
]
      savin,
  g: s: '40-80% energy costs',implementati,
  o: n: '12-24 weeks',prici,
  n: g: 'Starting from $50,000'
},
  {
  id: 'green-hardware',na,
  m: e: 'Energy-Efficient Hardware',catego,
  r: y: 'hardware',ic,
  o: n: Cpu,descripti,
  o: n: 'Select and deploy energy-efficient computing equipment',featur,
  e: s: [
  'Energy Star certified equipmentLow-power processors'
        'Efficient cooling systemsPower management features'
        'Energy monitoring capabilitiesSustainable disposal programs'
]
      benefi,
  t: s: [
  'Reduce hardware energy consumptionLower operational costs'
        'Extend equipment lifespanMeet environmental standards'
        'Improve corporate sustainability'
]
      saving,
  s: '25-40% power reduction',implementati,
  o: n: '1-2 weeks',prici,
  n: g: 'Starting from $2,000'
},
  {
  id: 'waste-reduction',na,
  m: e: 'Electronic Waste Reduction',catego,
  r: y: 'hardware',ic,
  o: n: Recycle,descripti,
  o: n: 'Comprehensive e-waste management and recycling',featur,
  e: s: [
  'E-waste assessment and auditSecure data destruction'
        'Equipment refurbishmentRecycling partnerships'
        'Donation programsSustainability reporting'
]
      benefi,
  t: s: [
  'Reduce environmental impactComply with regulations'
        'Improve corporate imagePotential tax benefits'
        'Support circular economy'
]
      saving,
  s: 'Varies by program',implementati,
  o: n: '2-4 weeks',prici,
  n: g: 'Starting from $1,000'
},
  {
  id: 'carbon-tracking',na,
  m: e: 'Carbon Footprint Tracking',catego,
  r: y: 'software',ic,
  o: n: BarChart3,descripti,
  o: n: 'Monitor and reduce carbon emissions',featur,
  e: s: [
  'Carbon emission calculationReal-time monitoring'
        'Reduction trackingSustainability reporting'
        'Goal setting and trackingStakeholder communication'
]
      benefi,
  t: s: [
  'Track environmental impactSet and achieve sustainability goals'
        'Improve corporate reportingMeet compliance requirements'
        'Enhance brand reputation'
]
      saving,
  s: 'Measurable impact',implementati,
  o: n: '4-6 weeks',prici,
  n: g: 'Starting from $6,000'
},
  {
  id: 'green-networking',na,
  m: e: 'Energy-Efficient Networking',catego,
  r: y: 'data',ic,
  o: n: Network,descripti,
  o: n: 'Optimize network infrastructure for energy efficiency',featur,
  e: s: [
  'Network equipment optimizationTraffic management'
        'Power over EthernetEnergy-efficient protocols'
        'Network monitoringPerformance optimization'
]
      benefi,
  t: s: [
  'Reduce network energy consumptionImprove network performance'
        'Lower operational costsBetter reliability'
        'Environmental responsibility'
]
      saving,
  s: '20-35% energy reduction',implementati,
  o: n: '3-5 weeks',prici,
  n: g: 'Starting from $12,000'
},
  {
  id: 'sustainability-reporting',na,
  m: e: 'Sustainability Reporting Platform',catego,
  r: y: 'software',ic,
  o: n: FileText,descripti,
  o: n: 'Comprehensive sustainability reporting and analytics',featur,
  e: s: [
  'Environmental data collectionSustainability metrics tracking'
        'Automated reportingStakeholder dashboards'
        'Compliance monitoringGoal tracking and alerts'
]
      benefi,
  t: s: [
  'Streamline sustainability reportingImprove data accuracy'
        'Meet compliance requirementsEnhance stakeholder communication'
        'Track progress toward goals'
]
      saving,
  s: 'Time and resource savings',implementati,
  o: n: '6-8 weeks',prici,
  n: g: 'Starting from $8,000'
},
  ]

  const environmentalImpact = [
  {
  ic,
  o: n: TreePine,metr,
  i: c: '2,500+'
      lab,
  e: l: 'Trees Planted',descripti,
  o: n: 'Equivalent carbon offset through our green initiatives'
},
  {
  ic,
  o: n: Zap,metr,
  i: c: '45%',lab,
  e: l: 'Energy Reduction',descripti,
  o: n: 'Average energy savings for our clients'
},
  {
  ic,
  o: n: Recycle,metr,
  i: c: '15,000+'
      lab,
  e: l: 'Devices Recycled',descripti,
  o: n: 'Electronic waste diverted from landfills'
},
  {
  ic,
  o: n: Globe,metr,
  i: c: '2,800'
      lab,
  e: l: 'Tons CO2 Saved',descripti,
  o: n: 'Carbon emissions reduced through our solutions'
},
  ]
  const certifications = [
  {
  na,
  m: e: 'ISO 14001',descripti,
  o: n: 'Environmental Management Systems',ic,
  o: n: Award,col,
  o: r: 'from-green-500 to-emerald-500'
},
  {
  na,
  m: e: 'Energy Star',descripti,
  o: n: 'Energy Efficiency Certification',ic,
  o: n: Star,col,
  o: r: 'from-yellow-500 to-orange-500'
},
  {
  na,
  m: e: 'LEED',descripti,
  o: n: 'Leadership in Energy and Environmental Design',ic,
  o: n: Leaf,col,
  o: r: 'from-blue-500 to-cyan-500'
},
  {
  na,
  m: e: 'Green Seal',descripti,
  o: n: 'Environmental Standard Certification',ic,
  o: n: CheckCircle,col,
  o: r: 'from-purple-500 to-pink-500'
},
  ]
  const caseStudies = [
  {
  tit,
  l: e: 'Fortune 500 Manufacturing Company',indust,
  r: y: 'Manufacturing',challen,
  g: e: 'High energy costs and carbon footprint from outdated IT infrastructure',soluti,
  o: n: 'Implemented server virtualization, cloud optimization, and smart energy monitoring'
      resul,
  t: s: [
  'Reduced energy consumption by 65%Lowered IT costs by $2.3M annually'
        'Achieved carbon neutrality goals 2 years earlyImproved system performance by 40%'
]
      saving,
  s: '$2.3M annually',timeli,
  n: e: '6 months'
},
  {
  tit,
  l: e: 'Healthcare Network',indust,
  r: y: 'Healthcare',challen,
  g: e: 'Inefficient data centers consuming excessive energy',soluti,
  o: n: 'Data center consolidation, renewable energy integration, and cooling optimization'
      resul,
  t: s: [
  'Reduced energy consumption by 55%Lowered operational costs by $1.8M annually'
        'Improved system reliability by 99.9%Enhanced patient data security'
]
      saving,
  s: '$1.8M annually',timeli,
  n: e: '8 months'
},
  {
  tit,
  l: e: 'Educational Institution',indust,
  r: y: 'Education',challen,
  g: e: 'High electricity bills from inefficient campus technology',soluti,
  o: n: 'Smart lighting systems, energy monitoring, and green hardware deployment'
      resul,
  t: s: [
  'Reduced energy consumption by 45%Lowered utility costs by $850K annually'
        'Improved learning environmentEnhanced sustainability curriculum'
]
      saving,
  s: '$850K annually',timeli,
  n: e: '4 months'
},
  ]
  const toggleSection = (section,
  I: d: string) () => {
  setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }
  const filteredSolutions = selectedCategory === 'all' 
    ? greenSolutions;
    : greenSolutions.filter(solution => solution.category === selectedCategory)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO;
        title="Green IT Solutions - Zion Tech Group"
        description="Transform your technology infrastructure with our sustainable Green IT solutions. Reduce energy consumption, lower costs, and minimize environmental impact."
      />
      
      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center";"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl mb-6">
              <Leaf className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Green IT</span> Solutions;
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your technology infrastructure with sustainable solutions that reduce;
              energy consumption, lower costs, and minimize environmental impact.
            </p>
            <div className="mt-8 flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r:from-green-500,
  hove: r:to-blue-600 transition-all duration-200,
  hove: r:scale-105">
                Get Green IT Assessment;
              </button>
              <button className="px-8 py-3 border border-green-400 text-green-400 font-semibold rounded-lg,
  hove: r:bg-green-400 hove,
  r:text-white transition-all duration-200">
                View Case Studies;
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Environmental Impact */},
  }
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Environmental Impact</h2>
            <p className="text-xl text-gray-300">
              Real results from implementing sustainable technology solutions;
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {environmentalImpact.map((impact, index) => (
  <motion.div;
                key={impact.label},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 },
  }
                className="className="text-center";"
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

      {/* Green IT Solutions */},
  }
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Green IT Solutions</h2>
            <p className="text-xl text-gray-300">
              Comprehensive sustainable technology solutions for your organization;
            </p>
          </motion.div>

          {/* Category Filter */},
  }
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
  <button;
                key={category.id},
  }
                onClick={onClick={() => setSelectedCategory(category.id)},
  },
  }
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
  selectedCategory === category.id;
                    ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white'
                    : 'bg-slate-800/50 text-gray-300,
  hove: r:bg-slate-700/50'
}`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
  <motion.div;
                key={solution.id},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 },
  }
                className="className="group";"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50,
  hove: r: border-green-400/50 transition-all duration-300 hove,
  r:scale-105 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
  solution.category === 'energy' ? 'bg-green-500/20 text-green-400' :
                        solution.category === 'hardware' ? 'bg-blue-500/20 text-blue-400' :
                        solution.category === 'software' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-orange-500/20 text-orange-400'
}`}>
                        {categories.find(c => c.id === solution.category)?.name},
  }
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">
                        <solution.icon className="w-6 h-6 text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hov,
  e: r:text-green-400 transition-colors duration-200">
                        {solution.name},
  }
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {solution.description},
  }
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
                    
                    <button;
                      onClick={onClick={() => toggleSection(solution.id)},
  },
  }
                      className="className="w-full px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r: from-green-500,
  hove: r:to-blue-600 transition-all duration-200 hove,
  r:scale-105";"
                    >
                      {expandedSection === solution.id ? 'Show Less' : 'Learn More'},
  }
                    </button>
                    
                    {expandedSection === solution.id && (
  <motion.div;
                        initial={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                        animate={ opaci,
  t: y: 1, heig,
  h: t: 'auto' },
  }
                        exit={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                        transition={ durati,
  o: n: 0.3 },
  }
                        className="className="mt-4 pt-4 border-t border-slate-600/50";"
                      >
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Key,
  Feature: s:</h4>
                          <ul className="space-y-1">
                            {solution.features.map((feature, featureIndex) => (
  <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                                <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                {feature},
  }
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Benefi,
  t: s:</h4>
                          <ul className="space-y-1">
                            {solution.benefits.map((benefit, benefitIndex) => (
  <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                                <Star className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                                {benefit},
  }
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

      {/* Certifications */},
  }
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Certifications</h2>
            <p className="text-xl text-gray-300">
              Recognized for our commitment to environmental sustainability;
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
  <motion.div;
                key={cert.name},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 },
  }
                className="className="text-center";"
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

      {/* Case Studies */},
  }
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-gray-300">
              Real results from organizations implementing our Green IT solutions;
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  l: g:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
  <motion.div;
                key={study.title},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 },
  }
                className="className="group";"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50,
  hove: r: border-green-400/50 transition-all duration-300 hove,
  r:scale-105 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                      {study.industry},
  }
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hov,
  e: r:text-green-400 transition-colors duration-200">
                    {study.title},
  }
                  </h3>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Challen,
  g: e:</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Soluti,
  o: n:</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Resul,
  t: s:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
  <li key={resultIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {result},
  }
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

      {/* Call to Action */},
  }
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Go Green?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your sustainability journey today. Our Green IT experts will assess your;
              current infrastructure and provide a customized plan to reduce costs and environmental impact.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r:from-green-500,
  hove: r:to-blue-600 transition-all duration-200,
  hove: r:scale-105">
                Schedule Green IT Assessment;
              </button>
              <a;
                href="mail,
  t: o:greenit@ziontechgroup.com"
                className="className="px-8 py-3 border border-green-400 text-green-400 font-semibold rounded-lg,
  hove: r:bg-green-400 hove,
  r:text-white transition-all duration-200";"
              >
                Contact Green IT Team;
              </a>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                Get a free sustainability assessment and customized Green IT roadmap;
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
