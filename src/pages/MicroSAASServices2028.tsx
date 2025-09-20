import React, { useState  from "react", import { motion, AnimatePresence } from "framer-motion";import { Link } from "react-router-d, om";import { Brain, Zap;
  Shield;
  TrendingUp;
  Users;
  Globe;
  ArrowRight;
  CheckCircle;
  Play;
  BarChart3;
  Cpu;
  Eye;
  MessageSquare;
  Database;
  Network;
  Rocket;
  Target;
  Award;
  Clock;
  Star;
  Heart;
  Lock;
  Cloud;
  Smartphone;
  Monitor;
  Wifi;
  Bluetooth;
  Satellite;
  Atom;
  Dna;
  Microscope;
  Flask;
  TestTube;
  Syringe;
  Stethoscope;
  HeartPulse;
  BrainCircuit;
  Leaf;
  Space;
  Handshake;
  Calendar;
  DollarSign;
  Bitcoin;
  Ethereum;
  CreditCard;
  Wallet;
  Banknote;
  Coins;
  PiggyBank;
  Safe;
  Vault;
  LockKeyhole;
  Key;
  Fingerprint;
  QrCode;
  Barcode;
  Scan;
  Camera;
  VideoOff;
  Mic;
  MicOff;
  Volume2;
  VolumeX;
  Building;
  Truck;
  Sparkles;
  Crown;
  Lightbulb;
  Globe2;
  Search;
  Phone;
  Mail;
  FileText;
  Image;
  Video;
  Music;
  Code;
  Palette;
  ShoppingCart;
  Truck;
  Plane;
  Ship;
  Train;
  Car;
  Bike;
  Bus;
  Taxi;
  Helicopter;
  Rocket;
  Satellite;
  Telescope;
  Microscope;
  Flask;
  TestTube;
  Syringe;
  Stethoscope;
  HeartPulse;
  BrainCircuit;
  Eye;
  Ear;
  Hand;
  Foot;
  Bone;
  Tooth;
  Pill;
  Bandage;
  Thermometer;
  Scale;
  Calculator;
  ChartBar;
  PieChart;
  LineChart;
  Activity;
  TrendingDown;
  Minus;
  Plus;
  Equal;
  Divide;
  Percent;
  Euro;
  Pound;
  Yen;
  CreditCard;
  Wallet;
  Banknote;
  Coins;
  PiggyBank;
  Safe;
  Vault;
  LockKeyhole;
  Key;
  Fingerprint;
  QrCode;
  Barcode;
  Scan;
  Camera;
  VideoOff;
  Mic;
  MicOff;
  Volume2;
  VolumeX;
  Building;
  Leaf;
  Space;
  Handshake;
  Calendar
} from "lucide-react";const microSAASServices2028  = [
  // AI-Powered Content Creation
  {
    id: 'ai-content-creator-pro, ',name: 'AI Content Creator Pro, ',tagline: 'AI-powered content creation for all platforms, ',price: '$299, ',period: '/month',
    description: 'Advanced AI content creation platform that generates high-quality articles,
    social media post, s, marketing copy, and creative content across all platforms.',
    features: [
      'AI article generationSocial media content creation, ',
      'Marketing copy optimizationSEO content optimization',
      'Multi-language supportContent scheduling',
      'Brand voice customizationPlagiarism detection',
      'Content analyticsTeam collaboration tools'
    ],
    popular: true,
    icon: FileTex, t,color: 'from-blue-600 to-cyan-700, ',textColor: 'text-blue-400, ',link: '/micro-saas/ai-content-creator, ',marketPosition: 'Leading AI content creation platform with proven ROI for content marketers and businesses., ',targetAudience: 'Content marketer, s, Digital agencies, Small businesses, Bloggers, Social media managers',
    trialDays: 14,
    setupTime: '1-2 days, ',category: 'AI Content & Marketing, ',realService: tru, e,technology: ['Natural language processingMachine learning, ', 'Content optimizationSEO algorithms', 'Multi-language AI'],
    integrations: ['WordPressSocial media platforms, ', 'CMS systemsMarketing tools', 'Analytics platforms'],
    useCases: ['Blog content creationSocial media marketing, ', 'Email marketingSEO content', 'Brand content'],
    roi: 'Content marketers achieve 300% ROI through increased engagement and reduced content creation time., ',competitors: ['Traditional content toolsBasic AI writing tools, ', 'Content management platforms'],
    marketSize: '$4.2B content creation market, ',growthRate: '180% annual growth, ',rating: 4.8,
    reviews: 45, 6,customers: 234,  }// AI Image Generator
  {
    id: 'ai-image-generator-plus, ',name: 'AI Image Generator Plus, ',tagline: 'Professional AI image generation for businesses, ',price: '$199, ',period: '/month, ',description: 'Professional AI image generation platform that creates high-quality,
    customizable images for marketin, g, design, and business needs.',
    features: [
      'High-resolution image generationCustom style training, ',
      'Brand-specific image creationBatch image generation',
      'Commercial usage rightsStyle transfer capabilities',
      'Image editing toolsAPI integration',
      'Team collaborationUsage analytics'
    ],
    popular: true,
    icon: Imag, e,color: 'from-purple-600 to-pink-700, ',textColor: 'text-purple-400, ',link: '/micro-saas/ai-image-generator, ',marketPosition: 'Professional AI image generation platform with commercial usage rights and brand customization., ',targetAudience: 'Designer, s, Marketing agencies, E-commerce businesses, Content creators, Small businesses',
    trialDays: 7,
    setupTime: '1 day, ',category: 'AI Design & Creative, ',realService: tru, e,technology: ['Generative AIComputer vision, ', 'Style transferImage processing', 'Machine learning'],
    integrations: ['Design toolsE-commerce platforms, ', 'Marketing toolsCMS systems', 'Social media'],
    useCases: ['Marketing materialsProduct images, ', 'Social media graphicsWebsite design', 'Brand assets'],
    roi: 'Design agencies achieve 400% ROI through reduced design costs and faster project delivery., ',competitors: ['Open-source AI toolsBasic image generators, ', 'Stock photo services'],
    marketSize: '$2.8B AI image generation market, ',growthRate: '250% annual growth, ',rating: 4.9,
    reviews: 23, 4,customers: 156,  }// AI Video Creator
  {
    id: 'ai-video-creator-studio, ',name: 'AI Video Creator Studio, ',tagline: 'AI-powered video creation and editing platform, ',price: '$399, ',period: '/month, ',description: 'Professional AI video creation platform that generates,
    edit, s, and optimizes videos for marketing, social media, and business needs.',
    features: [
      'AI video generationAutomated video editing, ',
      'Text-to-video conversionVideo optimization',
      'Multi-format exportBrand template library',
      'Voice-over generationMusic integration',
      'Analytics dashboardTeam collaboration'
    ],
    popular: false,
    icon: Vide, o,color: 'from-red-600 to-orange-700, ',textColor: 'text-red-400, ',link: '/micro-saas/ai-video-creator, ',marketPosition: 'Leading AI video creation platform with professional editing capabilities and brand customization., ',targetAudience: 'Video marketer, s, Content creators, Marketing agencies, Small businesses, Social media managers',
    trialDays: 14,
    setupTime: '2-3 days, ',category: 'AI Video & Media, ',realService: tru, e,technology: ['Computer visionNatural language processing, ', 'Video processingAI editing', 'Machine learning'],
    integrations: ['Social media platformsVideo hosting, ', 'Marketing toolsCMS systems', 'Analytics platforms'],
    useCases: ['Marketing videosSocial media content, ', 'Product demosTraining videos', 'Brand videos'],
    roi: 'Video marketers achieve 350% ROI through reduced production costs and increased engagement., ',competitors: ['Traditional video toolsBasic video editors, ', 'Video templates'],
    marketSize: '$3.5B AI video market, ',growthRate: '220% annual growth, ',rating: 4.7,
    reviews: 18, 9,customers: 98,  }// AI Code Generator
  {
    id: 'ai-code-generator-pro, ',name: 'AI Code Generator Pro, ',tagline: 'AI-powered code generation and development assistance, ',price: '$499, ',period: '/month, ',description: 'Advanced AI code generation platform that helps developers write,
    debu, g, and optimize code across multiple programming languages.',
    features: [
      'Multi-language code generationCode completion and suggestions, ',
      'Bug detection and fixingCode optimization',
      'Documentation generationTesting automation',
      'Code review assistanceTeam collaboration',
      'Version control integrationPerformance analytics'
    ],
    popular: true,
    icon: Cod, e,color: 'from-green-600 to-emerald-700, ',textColor: 'text-green-400, ',link: '/micro-saas/ai-code-generator, ',marketPosition: 'Leading AI code generation platform with support for 50+ programming languages and frameworks., ',targetAudience: 'Software developer, s, Development teams, Startups, Tech companies, Freelance developers',
    trialDays: 21,
    setupTime: '2-3 days, ',category: 'AI Development & Coding, ',realService: tru, e,technology: ['Large language modelsCode analysis, ', 'Machine learningStatic analysis', 'AI optimization'],
    integrations: ['Git repositoriesIDEs, ', 'CI/CD platformsProject management tools', 'Testing frameworks'],
    useCases: ['Code generationBug fixing, ', 'Code reviewDocumentation', 'Testing automation'],
    roi: 'Development teams achieve 500% ROI through increased productivity and reduced development time., ',competitors: ['Open-source AI toolsBasic code editors, ', 'Traditional IDEs'],
    marketSize: '$6.8B AI development market, ',growthRate: '280% annual growth, ',rating: 4.8,
    reviews: 56, 7,customers: 289,  }// AI Design Assistant
  {
    id: 'ai-design-assistant, ',name: 'AI Design Assistant, ',tagline: 'AI-powered design creation and optimization, ',price: '$249, ',period: '/month, ',description: 'Intelligent AI design platform that creates logos,
    graphic, s, layouts, and visual assets with brand consistency and professional quality.',
    features: [
      'Logo generation and designGraphic design creation, ',
      'Layout optimizationBrand consistency tools',
      'Template libraryDesign collaboration',
      'Export optimizationBrand guidelines',
      'Design analyticsTeam management'
    ],
    popular: false,
    icon: Palett, e,color: 'from-pink-600 to-rose-700, ',textColor: 'text-pink-400, ',link: '/micro-saas/ai-design-assistant, ',marketPosition: 'Professional AI design platform with brand consistency and collaboration features., ',targetAudience: 'Designer, s, Marketing agencies, Small businesses, Startups, Brand managers',
    trialDays: 14,
    setupTime: '2-3 days, ',category: 'AI Design & Creative, ',realService: tru, e,technology: ['Computer visionDesign algorithms, ', 'Machine learningBrand recognition', 'AI optimization'],
    integrations: ['Design toolsBrand platforms, ', 'Marketing toolsCMS systems', 'Social media'],
    useCases: ['Logo designBrand graphics, ', 'Marketing materialsWebsite design', 'Social media assets'],
    roi: 'Design agencies achieve 300% ROI through faster design delivery and brand consistency., ',competitors: ['Traditional design toolsBasic design platforms, ', 'Logo generators'],
    marketSize: '$3.2B AI design market, ',growthRate: '200% annual growth, ',rating: 4.6,
    reviews: 23, 4,customers: 123,  }// AI E-commerce Optimizer
  {
    id: 'ai-ecommerce-optimizer, ',name: 'AI E-commerce Optimizer, ',tagline: 'AI-powered e-commerce optimization and automation, ',price: '$349, ',period: '/month, ',description: 'Comprehensive AI e-commerce platform that optimizes product recommendations,
    pricin, g, inventory, and customer experience.',
    features: [
      'AI product recommendationsDynamic pricing optimization, ',
      'Inventory managementCustomer behavior analysis',
      'Personalization engineA/B testing automation',
      'Conversion optimizationAnalytics dashboard',
      'Multi-platform supportAPI integration'
    ],
    popular: true,
    icon: ShoppingCar, t,color: 'from-orange-600 to-red-700, ',textColor: 'text-orange-400, ',link: '/micro-saas/ai-ecommerce-optimizer, ',marketPosition: 'Leading AI e-commerce optimization platform with proven ROI for online retailers., ',targetAudience: 'E-commerce businesse, s, Online retailers, Dropshipping stores, Marketplaces, Digital agencies',
    trialDays: 14,
    setupTime: '3-5 days, ',category: 'AI E-commerce & Retail, ',realService: tru, e,technology: ['Machine learningPredictive analytics, ', 'Personalization algorithmsOptimization engines', 'Real-time processing'],
    integrations: ['ShopifyWooCommerce, ', 'MagentoBigCommerce', 'Analytics platforms'],
    useCases: ['Product recommendationsPricing optimization, ', 'Inventory managementCustomer personalization', 'Conversion optimization'],
    roi: 'E-commerce businesses achieve 400% ROI through increased sales and reduced operational costs., ',competitors: ['Traditional e-commerce toolsBasic analytics platforms, ', 'Manual optimization tools'],
    marketSize: '$8.9B AI e-commerce market, ',growthRate: '320% annual growth, ',rating: 4.8,
    reviews: 34, 5,customers: 178,  }// AI Customer Service
  {
    id: 'ai-customer-service-pro, ',name: 'AI Customer Service Pro, ',tagline: 'AI-powered customer support and chatbot platform, ',price: '$199, ',period: '/month, ',description: 'Intelligent AI customer service platform that provides 24/7 support through chatbots,
    automated response, s, and intelligent ticket routing.',
    features: [
      'AI chatbot creationNatural language processing, ',
      'Automated ticket routingKnowledge base management',
      'Multi-language supportIntegration capabilities',
      'Analytics dashboardTeam collaboration',
      'Custom workflowsAPI access'
    ],
    popular: true,
    icon: MessageSquar, e,color: 'from-blue-600 to-indigo-700, ',textColor: 'text-blue-400, ',link: '/micro-saas/ai-customer-service, ',marketPosition: 'Leading AI customer service platform with advanced NLP and automation capabilities., ',targetAudience: 'Customer service team, s, Support departments, E-commerce businesses, SaaS companies, Small businesses',
    trialDays: 14,
    setupTime: '2-3 days, ',category: 'AI Customer Service, ',realService: tru, e,technology: ['Natural language processingMachine learning, ', 'Chatbot frameworksAutomation engines', 'AI routing'],
    integrations: ['CRM systemsHelp desk platforms, ', 'E-commerce platformsSocial media', 'Messaging apps'],
    useCases: ['Customer supportFAQ automation, ', 'Ticket routingCustomer engagement', 'Support analytics'],
    roi: 'Customer service teams achieve 350% ROI through reduced response times and improved customer satisfaction., ',competitors: ['Traditional help desk toolsBasic chatbot platforms, ', 'Manual support systems'],
    marketSize: '$5.6B AI customer service market, ',growthRate: '240% annual growth, ',rating: 4.7,
    reviews: 45, 6,customers: 234,  }// AI Analytics Platform
  {
    id: 'ai-analytics-platform, ',name: 'AI Analytics Platform, ',tagline: 'AI-powered business intelligence and analytics, ',price: '$299, ',period: '/month, ',description: 'Advanced AI analytics platform that provides intelligent insights,
    predictive analytic, s, and automated reporting for business decision-making.',
    features: [
      'AI-powered insightsPredictive analytics, ',
      'Automated reportingData visualization',
      'Real-time monitoringCustom dashboards',
      'Data integrationCollaboration tools',
      'Mobile accessAPI integration'
    ],
    popular: false,
    icon: BarChart, 3,color: 'from-emerald-600 to-teal-700, ',textColor: 'text-emerald-400, ',link: '/micro-saas/ai-analytics, ',marketPosition: 'Intelligent analytics platform with AI-powered insights and predictive capabilities., ',targetAudience: 'Business analyst, s, Data scientists, Executives, Marketing teams, Operations managers',
    trialDays: 21,
    setupTime: '3-5 days, ',category: 'AI Analytics & BI, ',realService: tru, e,technology: ['Machine learningPredictive analytics, ', 'Data processingVisualization engines', 'AI insights'],
    integrations: ['Data sourcesBusiness tools, ', 'CRM systemsMarketing platforms', 'Cloud services'],
    useCases: ['Business intelligencePerformance monitoring, ', 'Predictive insightsData visualization', 'Automated reporting'],
    roi: 'Businesses achieve 400% ROI through improved decision-making and operational efficiency., ',competitors: ['Traditional BI toolsBasic analytics platforms, ', 'Manual reporting tools'],
    marketSize: '$7.2B AI analytics market, ',growthRate: '260% annual growth, ',rating: 4.6,
    reviews: 23, 4,customers: 123,  }
]const MicroSAASServices2028: React.FC  = () => {
  const [selectedCatego,
    rysetSelectedCategory] = useState('all')const [searchQuerysetSearchQuery] = useState('')const [sortBysetSortBy] = useState('popularity')const categories  = [
    { id: 'all, ', name: 'All Services',
    icon: Globe,
    color: 'from-zion-cyan to-zion-purple',  }{ id: 'ai-content, ', name: 'AI Content, ', icon: FileText,
    color: 'from-zion-blue to-zion-cyan',  }{ id: 'ai-design, ', name: 'AI Design, ', icon: Palette,
    color: 'from-zion-purple to-zion-pink',  }{ id: 'ai-video, ', name: 'AI Video, ', icon: Video,
    color: 'from-zion-red to-zion-orange',  }{ id: 'ai-development, ', name: 'AI Development, ', icon: Code,
    color: 'from-zion-green to-zion-emerald',  }{ id: 'ai-ecommerce, ', name: 'AI E-commerce, ', icon: ShoppingCart,
    color: 'from-zion-orange to-zion-red',  }{ id: 'ai-customer-service, ', name: 'AI Customer Service, ', icon: MessageSquare,
    color: 'from-zion-blue to-zion-indigo',  },
    { id: 'ai-analytics, ', name: 'AI Analytics, ', icon: BarChart3,
    color: 'from-zion-emerald to-zion-teal',  }
  ]const filteredServices  = microSAASServices2028
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' ||
        service.category.toLowerCase().includes(selectedCategory.replace('- '))const matchesSearch  = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())return matchesCategory && matchesSearch;
    })
    .sort((a;
    b) => {
      switch (sortBy) {
        case 'price-low':
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')),
        case 'price-high':
          return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''))case 'rating':
          return b.rating - a.ratingcase 'popularity':
        default: return b.popular ? 1 : -,
    1
     }
    })return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity:  ,
    0y: 30,  }}
            animate={{ opacity: 1,
    y: 0,  }}
            transition={{ duration: 0.8,
     }}
            className="text-5xl md: text-7xl font-bold mb-6 text-gradient"
          >
            Micro SAAS Services 2028
          </motion.h1>
          <motion.p
            initial={{ opacity: 0,
    y: 30,  }}
            animate={{ opacity: 1,
    y: 0,  }}
            transition={{ duration: 0.8,
    delay: 0.2,  }}
            className="text-xl md: text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto"
          >
            Powerful,
    affordabl, e, and intelligent micro SAAS solutions designed to transform your business operations
          </motion.p>
          <motion.div
            initial={{ opacity: 0,
    y: 30,  }}
            animate={{ opacity: 1,
    y: 0,  }}
            transition={{ duration: 0.8,
    delay: 0.4,  }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="bg-zion-cyan/20 backdrop-blur-sm border border-zion-cyan/30 rounded-full px-6 py-3 text-zion-cyan font-semibold">
              🚀 AI-Powered Solutions
            </div>
            <div className="bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full px-6 py-3 text-zion-purple font-semibold">
              💰 Affordable Pricing
            </div>
            <div className="bg-zion-blue/20 backdrop-blur-sm border border-zion-blue/30 rounded-full px-6 py-3 text-zion-blue font-semibold">
              ⚡ Instant Setup
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-zion-slate-dark/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg: flex-row gap-6 items-center justify-between">
            {/* Category Filter *,
    /}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}whileHover={{ scale: 1.05,
     }}whileTap={{ scale: 0.95,  }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-zion-slate/50 text-zion-slate-light hover: bg-zion-slate/70'
                 ,  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Search and Sort */}
            <div className="flex flex-col sm: flex-row gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuer, y}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 bg-zion-slate/50 border border-zion-slate/30 rounded-lg text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focus:ring-zion-cyan/50"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
              </div>
              <select
                value={sortB, y}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-zion-slate/50 border border-zion-slate/30 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-zion-cyan/50"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid *,
    /}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service,
    index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0,
    y: 30,  }}
                animate={{ opacity: 1,
    y: 0,  }}
                transition={{ duration: 0.6,
    delay: index * 0.1,  }}
                className="group relative bg-zion-slate/30 backdrop-blur-sm border border-zion-slate/40 rounded-2xl p-6 hover: border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
              >
                {/* Popular Badge *, /}
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Popular
                  </div>
                )}

                {/* Service Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-300, `}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover: text-zion-cyan transition-colors duration-300">
                  {service.nam,
    e}
                </h3>
                <p className="text-zion-slate-light mb-4">
                  {service.tagline}
                </p>
                <p className="text-zion-slate-light text-sm mb-6">
                  {service.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-bold text-zion-cyan">{service.price}</span>
                  <span className="text-zion-slate-light">{service.period}</span>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(03).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-zion-slate-light">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-zion-slate-light mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    {service.rating} ({service.reviews} reviews)
                  </div>
                  <div>{service.customers} customers</div>
                </div>

                {/* CTA Button */}
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-lg font-semibold text-center group-hover: shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                {/* Market Info *,
    /}
                <div className="mt-6 pt-6 border-t border-zion-slate/30">
                  <div className="grid grid-cols-2 gap-4 text-xs text-zion-slate-light">
                    <div>
                      <div className="font-semibold text-zion-cyan">Market Size</div>
                      <div>{service.marketSize}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-zion-cyan">Growth Rate</div>
                      <div>{service.growthRate}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0,
    y: 30,  }}whileInView={{ opacity: 1,
    y: 0,  }}
            transition={{ duration: 0.8,
     }}
            className="text-4xl md: text-5xl font-bold mb-6 text-gradient"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0,
    y: 30,  }}whileInView={{ opacity: 1,
    y: 0,  }}
            transition={{ duration: 0.8,
    delay: 0.2,  }}
            className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
          >
            Contact our team to discuss how our micro SAAS services can transform your business operations
          </motion.p>
          <motion.div
            initial={{ opacity: 0,
    y: 30,  }}whileInView={{ opacity: 1,
    y: 0,  }}
            transition={{ duration: 0.8,
    delay: 0.4,  }}
            className="flex flex-col sm: flex-row gap-4 justify-center"
          >
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              kleber@ziontechgroup.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  ),
};
export default MicroSAASServices202;8;