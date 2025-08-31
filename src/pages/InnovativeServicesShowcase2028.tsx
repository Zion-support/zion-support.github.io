import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain, Cloud, Shield, Zap, Users, Rocket, TrendingUp, CheckCircle,
  ArrowRight, Star, Award, Globe, Database, Lock, Cpu, Network,
  Smartphone, BarChart3, Code, Server, Chip, Wifi, ShieldCheck,
  Bot, GitFork, Eye, Sparkles, Phone, Mail, MapPin, MessageSquare,
  FileText, Search, Clock, DollarSign, Target, Lightbulb, Atom,
  Satellite, Leaf, Gamepad2, Coins, Activity, Palette, Settings,
  Workflow, Layers, BarChart, PieChart, LineChart, AreaChart,
  Calendar, Clock3, Timer, Stopwatch, Watch, Monitor, Smartphone2,
  Tablet, Laptop, Desktop, Server2, Database2, HardDrive, Cloud2,
  Wifi2, Bluetooth, Radio, Satellite2, Antenna, Router, Switch,
  Hub, Bridge, Gateway, Firewall, Key, Lock2, Unlock, Eye2,
  EyeOff, Shield2, UserCheck, UserX, Users2, UserPlus, UserMinus,
  Building, Factory, Warehouse, Store, Office, Home, Car, Truck,
  Plane, Ship, Train, Bus, Bike, Motorcycle, Scooter, Skateboard,
  RollerSkate, Snowboard, Surfboard, Tent, Camping, Hiking, Climbing,
  Swimming, Running, Walking, Cycling, Yoga, Meditation, Fitness,
  Heart, Brain2, Eye3, Ear, Nose, Mouth, Hand, Foot, Arm, Leg,
  Head, Neck, Shoulder, Chest, Stomach, Back, Hip, Knee, Ankle,
  Wrist, Elbow, Finger, Toe, Hair, Beard, Mustache, Glasses,
  Hat, Shirt, Pants, Dress, Skirt, Shoes, Boots, Sandals, Socks,
  Underwear, Bra, Panties, Swimsuit, Towel, Blanket, Pillow, Bed,
  Chair, Table, Desk, Shelf, Cabinet, Drawer, Box, Bag, Wallet,
  Purse, Backpack, Suitcase, Briefcase, Folder, File, Document,
  Paper, Pen, Pencil, Marker, Highlighter, Eraser, Ruler, Compass,
  Calculator, Phone2, Camera, Video, Microphone, Speaker, Headphones,
  Keyboard, Mouse, Gamepad, Controller, Remote, Battery, Plug,
  Socket, Switch2, Button, Knob, Dial, Slider, Toggle, Checkbox,
  Radio2, Select, Input, Textarea, Form, Submit, Reset, Save,
  Load, Import, Export, Upload, Download, Share, Link2, Copy,
  Cut, Paste, Delete, Edit, Create, Add, Remove, Hide, Show,
  Expand, Collapse, Minimize, Maximize, Close, Open, Start, Stop,
  Pause, Play, Forward, Rewind, Skip, Previous, Next, First, Last,
  Top, Bottom, Left, Right, Up, Down, In, Out, On, Off, Yes, No,
  True, False, Null, Undefined, Error, Warning, Info, Success,
  Question, Help, Support, Contact, About, Home2, Settings2,
  Profile, Account, Login, Logout, Register, Signup, Signin,
  Password, Username, Email, Phone3, Address, Location, Map,
  Navigation, Route, Direction, Distance, Time, Date, Calendar2,
  Schedule, Appointment, Meeting, Event, Conference, Workshop,
  Seminar, Training, Course, Lesson, Class, School, University,
  College, Institute, Academy, Center, Foundation, Organization,
  Company, Corporation, Business, Enterprise, Startup, Venture,
  Project, Initiative, Campaign, Program, Service, Product, Solution,
  Platform, System, Application, Software, Hardware, Firmware,
  Network2, Internet, Web, Online, Digital, Virtual, Remote,
  Cloud3, AI2, ML, Data, Analytics, Intelligence, Smart, Automated,
  Autonomous, Intelligent, Advanced, Modern, Innovative, Creative,
  Unique, Special, Premium, Professional, Expert, Specialist,
  Consultant, Advisor, Coach, Mentor, Trainer, Teacher, Instructor,
  Guide, Leader, Manager, Director, Executive, Officer, President,
  CEO, CFO, CTO, COO, VP, Manager, Supervisor, Coordinator,
  Assistant, Intern, Student, Learner, Researcher, Scientist,
  Engineer, Developer, Designer, Architect, Analyst, Planner,
  Strategist, Consultant, Advisor, Counselor, Therapist, Doctor,
  Nurse, Physician, Surgeon, Dentist, Optometrist, Psychologist,
  Psychiatrist, Therapist, Counselor, Social Worker, Lawyer,
  Attorney, Judge, Prosecutor, Defender, Police, Officer, Firefighter,
  Paramedic, EMT, Ambulance, Hospital, Clinic, Office2, Store2,
  Restaurant, Cafe, Bar, Hotel, Motel, Resort, Spa, Gym, Pool,
  Park, Garden, Forest, Mountain, Beach, Ocean, Lake, River,
  Stream, Creek, Pond, Swamp, Desert, Jungle, Savannah, Tundra,
  Arctic, Antarctic, Space, Planet, Star, Sun, Moon, Earth,
  Mars, Venus, Jupiter, Saturn, Uranus, Neptune, Mercury, Pluto,
  Galaxy, Universe, Cosmos, Solar System, Milky Way, Andromeda,
  Nebula, Black Hole, Wormhole, Time Travel, Teleportation,
  Invisibility, Superpowers, Magic, Fantasy, Science Fiction,
  Horror, Thriller, Mystery, Romance, Comedy, Drama, Action,
  Adventure, Western, War, Historical, Documentary, News, Sports,
  Music, Art, Literature, Poetry, Philosophy, Religion, Politics,
  Economics, Sociology, Psychology, Anthropology, Archaeology,
  History, Geography, Geology, Biology, Chemistry, Physics,
  Mathematics, Statistics, Computer Science, Information Technology,
  Engineering, Medicine, Law, Business, Economics, Finance, Marketing,
  Sales, Human Resources, Operations, Supply Chain, Logistics,
  Manufacturing, Construction, Agriculture, Mining, Energy, Utilities,
  Transportation, Communication, Media, Entertainment, Education,
  Healthcare, Government, Military, Police, Fire, Emergency, Security,
  Insurance, Banking, Investment, Real Estate, Tourism, Hospitality,
  Retail, Wholesale, Import, Export, Trade, Commerce, Industry,
  Service2, Manufacturing2, Construction2, Agriculture2, Mining2,
  Energy2, Utilities2, Transportation2, Communication2, Media2,
  Entertainment2, Education2, Healthcare2, Government2, Military2,
  Police2, Fire2, Emergency2, Security2, Insurance2, Banking2,
  Investment2, RealEstate2, Tourism2, Hospitality2, Retail2,
  Wholesale2, Import2, Export2, Trade2, Commerce2, Industry2
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  priceRange: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  technologies: string[];
  icon: React.ComponentType<any>;
  color: string;
  href: string;
  isPopular?: boolean;
  isNew?: boolean;
}

const innovativeServices: Service[] = [
  // AI-Powered Micro SAAS Solutions
  {
    id: 'ai-autonomous-business-manager',
    title: 'AI Autonomous Business Manager',
    description: 'Fully autonomous business operations platform that manages your entire business ecosystem with minimal human intervention.',
    category: 'AI & Automation',
    priceRange: '$2,999 - $9,999/month',
    features: [
      'Autonomous decision-making engine',
      'Real-time business intelligence',
      'Predictive analytics & forecasting',
      'Automated resource allocation',
      'Intelligent workflow optimization',
      'Multi-channel communication management',
      'Advanced risk assessment',
      'Compliance monitoring & reporting'
    ],
    benefits: [
      'Reduce operational costs by 40-60%',
      'Increase efficiency by 300%',
      '24/7 autonomous operation',
      'Real-time insights & alerts',
      'Scalable business growth',
      'Minimal human oversight required'
    ],
    useCases: [
      'Small to medium businesses',
      'E-commerce operations',
      'Service-based companies',
      'Startups & scale-ups',
      'Multi-location businesses'
    ],
    technologies: ['GPT-4, Claude, Gemini', 'Machine Learning', 'RPA', 'API Integration', 'Cloud Computing'],
    icon: Brain,
    color: 'from-blue-500 to-purple-600',
    href: '/services/ai-autonomous-business-manager',
    isPopular: true,
    isNew: true
  },
  {
    id: 'ai-quantum-hybrid-platform',
    title: 'AI-Quantum Hybrid Computing Platform',
    description: 'Revolutionary platform combining classical AI with quantum computing for unprecedented computational power and problem-solving capabilities.',
    category: 'Quantum Computing',
    priceRange: '$15,000 - $50,000/month',
    features: [
      'Quantum-classical hybrid algorithms',
      'Real-time quantum simulation',
      'Advanced cryptography solutions',
      'Optimization problem solving',
      'Machine learning acceleration',
      'Financial modeling & risk analysis',
      'Drug discovery & molecular modeling',
      'Climate change prediction models'
    ],
    benefits: [
      '1000x faster computation for complex problems',
      'Unbreakable quantum encryption',
      'Revolutionary optimization capabilities',
      'Future-proof technology investment',
      'Competitive advantage in research',
      'Breakthrough scientific discoveries'
    ],
    useCases: [
      'Research institutions',
      'Financial services',
      'Pharmaceutical companies',
      'Government agencies',
      'Technology companies',
      'Academic institutions'
    ],
    technologies: ['IBM Qiskit', 'Google Cirq', 'Microsoft Q#', 'Quantum Algorithms', 'Hybrid ML'],
    icon: Atom,
    color: 'from-purple-500 to-pink-600',
    href: '/services/quantum-ai-hybrid-platform',
    isPopular: true,
    isNew: true
  },
  {
    id: 'ai-smart-city-infrastructure',
    title: 'AI Smart City Infrastructure Management',
    description: 'Comprehensive platform for managing and optimizing smart city infrastructure using AI, IoT, and real-time data analytics.',
    category: 'Smart Cities & IoT',
    priceRange: '$25,000 - $100,000/month',
    features: [
      'Real-time traffic optimization',
      'Smart energy grid management',
      'Environmental monitoring',
      'Public safety & security',
      'Waste management optimization',
      'Water resource management',
      'Public transportation optimization',
      'Emergency response coordination'
    ],
    benefits: [
      'Reduce energy consumption by 30%',
      'Improve traffic flow by 40%',
      'Enhance public safety',
      'Optimize resource allocation',
      'Improve citizen quality of life',
      'Sustainable city development'
    ],
    useCases: [
      'Municipal governments',
      'City planners',
      'Utility companies',
      'Transportation authorities',
      'Emergency services',
      'Urban developers'
    ],
    technologies: ['IoT Sensors', '5G Networks', 'Edge Computing', 'Machine Learning', 'Big Data Analytics'],
    icon: Building,
    color: 'from-green-500 to-teal-600',
    href: '/services/ai-smart-city-infrastructure-management',
    isPopular: true
  },
  {
    id: 'ai-autonomous-vehicle-platform',
    title: 'AI Autonomous Vehicle Management Platform',
    description: 'End-to-end platform for managing autonomous vehicle fleets, including safety, routing, maintenance, and passenger experience.',
    category: 'Autonomous Vehicles',
    priceRange: '$10,000 - $35,000/month',
    features: [
      'Fleet management & optimization',
      'Real-time safety monitoring',
      'Predictive maintenance',
      'Route optimization',
      'Passenger experience management',
      'Regulatory compliance',
      'Insurance & risk management',
      'Performance analytics'
    ],
    benefits: [
      'Reduce operational costs by 50%',
      'Improve safety by 90%',
      'Optimize fleet utilization',
      'Enhance passenger experience',
      'Ensure regulatory compliance',
      'Real-time monitoring & control'
    ],
    useCases: [
      'Ride-sharing companies',
      'Public transportation',
      'Logistics & delivery',
      'Corporate fleets',
      'Municipal services',
      'Tourism & hospitality'
    ],
    technologies: ['Computer Vision', 'LIDAR', 'GPS', '5G', 'Edge AI', 'Blockchain'],
    icon: Car,
    color: 'from-orange-500 to-red-600',
    href: '/services/ai-autonomous-vehicle-management-platform',
    isPopular: true
  },
  {
    id: 'ai-quantum-financial-trading',
    title: 'AI-Quantum Financial Trading Platform',
    description: 'Advanced financial trading platform combining AI algorithms with quantum computing for superior market analysis and trading strategies.',
    category: 'Financial Technology',
    priceRange: '$20,000 - $75,000/month',
    features: [
      'Quantum-enhanced market analysis',
      'AI-powered trading strategies',
      'Real-time risk assessment',
      'Portfolio optimization',
      'Market prediction models',
      'Compliance monitoring',
      'Multi-asset trading',
      'Performance analytics'
    ],
    benefits: [
      'Increase trading accuracy by 40%',
      'Reduce risk exposure',
      'Faster market analysis',
      'Superior portfolio returns',
      'Real-time decision making',
      'Regulatory compliance'
    ],
    useCases: [
      'Investment banks',
      'Hedge funds',
      'Asset management firms',
      'Trading companies',
      'Financial institutions',
      'Individual investors'
    ],
    technologies: ['Quantum Computing', 'Machine Learning', 'Blockchain', 'High-Frequency Trading', 'Risk Analytics'],
    icon: TrendingUp,
    color: 'from-yellow-500 to-orange-600',
    href: '/services/ai-quantum-financial-trading-platform',
    isPopular: true
  },
  // IT Infrastructure & Cloud Services
  {
    id: 'cloud-finops-optimizer',
    title: 'Cloud FinOps Optimization Platform',
    description: 'Intelligent cloud cost optimization platform that automatically manages and optimizes your cloud spending across multiple providers.',
    category: 'Cloud & FinOps',
    priceRange: '$1,500 - $5,000/month',
    features: [
      'Multi-cloud cost optimization',
      'Automated resource scaling',
      'Cost allocation & tracking',
      'Budget management & alerts',
      'Performance optimization',
      'Reserved instance management',
      'Spot instance optimization',
      'Cost forecasting & planning'
    ],
    benefits: [
      'Reduce cloud costs by 30-50%',
      'Improve resource utilization',
      'Automated cost optimization',
      'Real-time cost monitoring',
      'Predictable budgeting',
      'Multi-cloud management'
    ],
    useCases: [
      'Enterprise companies',
      'Startups & scale-ups',
      'E-commerce businesses',
      'SaaS companies',
      'Digital agencies',
      'Technology companies'
    ],
    technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'CloudWatch'],
    icon: Cloud,
    color: 'from-cyan-500 to-blue-600',
    href: '/services/cloud-finops-optimizer'
  },
  {
    id: 'zero-trust-network-access',
    title: 'Zero Trust Network Access Platform',
    description: 'Modern security architecture that provides secure access to applications and resources without traditional VPN limitations.',
    category: 'Cybersecurity',
    priceRange: '$2,000 - $8,000/month',
    features: [
      'Identity-based access control',
      'Continuous authentication',
      'Micro-segmentation',
      'Threat detection & response',
      'Compliance reporting',
      'Multi-factor authentication',
      'Single sign-on (SSO)',
      'Access analytics & monitoring'
    ],
    benefits: [
      'Eliminate VPN vulnerabilities',
      'Improve security posture',
      'Simplify access management',
      'Compliance with regulations',
      'Better user experience',
      'Reduced attack surface'
    ],
    useCases: [
      'Remote workforces',
      'Healthcare organizations',
      'Financial institutions',
      'Government agencies',
      'Educational institutions',
      'Enterprise companies'
    ],
    technologies: ['OAuth 2.0', 'SAML', 'JWT', 'Zero Trust Architecture', 'Identity Providers'],
    icon: Shield,
    color: 'from-red-500 to-pink-600',
    href: '/services/zero-trust-network-access'
  },
  // Micro SAAS Solutions
  {
    id: 'ai-content-marketing-suite',
    title: 'AI Content Marketing Suite',
    description: 'Comprehensive content creation and marketing platform powered by AI for generating high-quality, engaging content at scale.',
    category: 'Content Marketing',
    priceRange: '$299 - $1,999/month',
    features: [
      'AI-powered content generation',
      'SEO optimization tools',
      'Content calendar management',
      'Social media automation',
      'Performance analytics',
      'A/B testing platform',
      'Content distribution',
      'Brand voice consistency'
    ],
    benefits: [
      '10x faster content creation',
      'Improve SEO rankings',
      'Increase engagement rates',
      'Consistent brand messaging',
      'Data-driven content strategy',
      'Automated distribution'
    ],
    useCases: [
      'Marketing agencies',
      'E-commerce businesses',
      'SaaS companies',
      'Content creators',
      'Small businesses',
      'Enterprise marketing teams'
    ],
    technologies: ['GPT-4', 'Claude', 'Natural Language Processing', 'SEO Tools', 'Analytics'],
    icon: FileText,
    color: 'from-indigo-500 to-purple-600',
    href: '/services/ai-content-marketing-suite'
  },
  {
    id: 'ai-customer-support-automation',
    title: 'AI Customer Support Automation',
    description: 'Intelligent customer support platform that automates responses, routes inquiries, and provides 24/7 customer assistance.',
    category: 'Customer Support',
    priceRange: '$199 - $1,499/month',
    features: [
      'AI-powered chatbots',
      'Natural language processing',
      'Ticket routing & escalation',
      'Knowledge base management',
      'Multi-channel support',
      'Sentiment analysis',
      'Performance analytics',
      'Integration capabilities'
    ],
    benefits: [
      '24/7 customer support',
      'Reduce response time by 80%',
      'Lower support costs',
      'Improve customer satisfaction',
      'Scalable support operations',
      'Data-driven insights'
    ],
    useCases: [
      'E-commerce businesses',
      'SaaS companies',
      'Service providers',
      'Retail businesses',
      'Healthcare organizations',
      'Financial institutions'
    ],
    technologies: ['NLP', 'Machine Learning', 'Chatbot Platforms', 'CRM Integration', 'Analytics'],
    icon: MessageSquare,
    color: 'from-green-500 to-emerald-600',
    href: '/services/ai-customer-support-automation'
  },
  {
    id: 'ai-project-management',
    title: 'AI Project Management Platform',
    description: 'Intelligent project management solution that uses AI to optimize workflows, predict risks, and improve team productivity.',
    category: 'Project Management',
    priceRange: '$399 - $2,499/month',
    features: [
      'AI-powered task prioritization',
      'Risk prediction & mitigation',
      'Resource optimization',
      'Progress tracking & reporting',
      'Team collaboration tools',
      'Time tracking & analytics',
      'Integration capabilities',
      'Mobile applications'
    ],
    benefits: [
      'Improve project success rates',
      'Reduce project delays',
      'Optimize resource allocation',
      'Better team collaboration',
      'Data-driven decision making',
      'Automated reporting'
    ],
    useCases: [
      'Project managers',
      'Development teams',
      'Marketing agencies',
      'Construction companies',
      'Consulting firms',
      'Enterprise organizations'
    ],
    technologies: ['Machine Learning', 'Predictive Analytics', 'Collaboration Tools', 'Mobile Apps', 'APIs'],
    icon: Workflow,
    color: 'from-blue-500 to-indigo-600',
    href: '/services/ai-project-management'
  },
  // Emerging Technology Solutions
  {
    id: 'digital-twin-platform',
    title: 'Digital Twin Platform',
    description: 'Advanced digital twin technology for creating virtual replicas of physical assets, processes, and systems for optimization and simulation.',
    category: 'Digital Twins',
    priceRange: '$5,000 - $25,000/month',
    features: [
      '3D modeling & visualization',
      'Real-time data integration',
      'Predictive maintenance',
      'Simulation & testing',
      'Performance monitoring',
      'Asset lifecycle management',
      'IoT sensor integration',
      'Analytics & reporting'
    ],
    benefits: [
      'Reduce maintenance costs by 40%',
      'Improve operational efficiency',
      'Predict equipment failures',
      'Optimize asset performance',
      'Reduce downtime',
      'Better decision making'
    ],
    useCases: [
      'Manufacturing companies',
      'Energy utilities',
      'Healthcare facilities',
      'Smart buildings',
      'Transportation systems',
      'Infrastructure projects'
    ],
    technologies: ['IoT', '3D Modeling', 'Real-time Analytics', 'Machine Learning', 'Cloud Computing'],
    icon: Eye,
    color: 'from-purple-500 to-indigo-600',
    href: '/services/digital-twin'
  },
  {
    id: 'ai-iot-edge-computing',
    title: 'AI IoT Edge Computing Platform',
    description: 'Intelligent edge computing platform that brings AI capabilities to IoT devices for real-time processing and decision making.',
    category: 'IoT & Edge Computing',
    priceRange: '$3,000 - $15,000/month',
    features: [
      'Edge AI processing',
      'Real-time data analytics',
      'Device management',
      'Security & encryption',
      'Scalable architecture',
      'Cloud integration',
      'Performance monitoring',
      'Automated updates'
    ],
    benefits: [
      'Reduce latency by 90%',
      'Lower bandwidth costs',
      'Improve privacy & security',
      'Real-time decision making',
      'Scalable IoT deployments',
      'Offline operation capability'
    ],
    useCases: [
      'Smart cities',
      'Industrial IoT',
      'Healthcare monitoring',
      'Autonomous vehicles',
      'Smart homes',
      'Retail analytics'
    ],
    technologies: ['Edge Computing', 'Machine Learning', 'IoT Protocols', '5G Networks', 'Security'],
    icon: Wifi,
    color: 'from-teal-500 to-cyan-600',
    href: '/services/ai-iot-edge-computing'
  }
];

const categories = [
  'All Services',
  'AI & Automation',
  'Quantum Computing',
  'Smart Cities & IoT',
  'Autonomous Vehicles',
  'Financial Technology',
  'Cloud & FinOps',
  'Cybersecurity',
  'Content Marketing',
  'Customer Support',
  'Project Management',
  'Digital Twins',
  'IoT & Edge Computing'
];

export default function InnovativeServicesShowcase2028() {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredServices, setFilteredServices] = useState(innovativeServices);

  useEffect(() => {
    let filtered = innovativeServices;
    
    if (selectedCategory !== 'All Services') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredServices(filtered);
  }, [selectedCategory, searchQuery]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Innovative Services 2028
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the future of technology with our cutting-edge AI services, quantum computing solutions, 
              and innovative micro SAAS platforms designed to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services-pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-80">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-slate-800 text-white">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Popular/New Badges */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {service.isNew && (
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                      NEW
                    </span>
                  )}
                  {service.isPopular && (
                    <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                      POPULAR
                    </span>
                  )}
                </div>

                {/* Service Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-400">{service.priceRange}</span>
                  <span className="text-gray-400 text-sm ml-2">/month</span>
                </div>

                {/* Category */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-white/10 text-blue-300 text-sm rounded-full">
                    {service.category}
                  </span>
                </div>

                {/* Features Preview */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  to={service.href}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-12 border border-blue-500/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already leveraging our innovative services to stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us: +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
