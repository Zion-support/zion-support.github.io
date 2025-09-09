import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Play,
  BarChart3,
  Cpu,
  Eye,
  MessageSquare,
  Database,
  Network,
  Rocket,
  Target,
  Award,
  Clock,
  Star,
  Code,
  Settings,
  Cloud,
  Lock,
  RefreshCw,
  Brain,
  Server,
  FileText,
  Smartphone,
  Monitor,
  HardDrive,
  Globe2,
  ShieldCheck,
  Zap2,
  Database2,
  Network2,
  Server2,
  Smartphone2,
  Code2,
  Settings2,
  Cloud2,
  Lock2,
  RefreshCw2,
  TrendingUp2,
  Users2,
  Package2,
  BarChart32,
  Target2,
  Rocket2,
  Award2,
  Clock2,
  Star2,
  Eye2,
  MessageSquare2,
  Cpu2,
  Network3,
  Server3,
  Database3,
  Cloud3,
  Shield3,
  Zap3,
  Globe3,
  Code3,
  Monitor3,
  Smartphone3,
  Settings3,
  Users3,
  BarChart33,
  MessageSquare3,
  FileText3,
  CheckCircle3,
  Search3,
  HardDrive3
} from 'lucide-react';

const MicroSAASServicesPage: React.FC = () => {
  const microSAASServices = [
    {
      id: 1,
      title: 'Customer Relationship Management',
      description: 'Streamlined CRM solution for small to medium businesses',
      icon: Users,
      features: ['Contact Management', 'Sales Pipeline', 'Email Integration', 'Reporting Dashboard'],
      useCases: ['Sales Teams', 'Marketing Agencies', 'Consulting Firms', 'Real Estate'],
      pricing: 'Starting at $29/month',
      deployment: '2-3 days',
      marketSize: '$45.5B',
      growthRate: '12.5% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=crm'
    },
    {
      id: 2,
      title: 'Project Management Suite',
      description: 'Complete project tracking and team collaboration platform',
      icon: Target,
      features: ['Task Management', 'Team Collaboration', 'Time Tracking', 'Resource Planning'],
      useCases: ['Development Teams', 'Creative Agencies', 'Construction Firms', 'Event Planning'],
      pricing: 'Starting at $39/month',
      deployment: '1-2 days',
      marketSize: '$6.6B',
      growthRate: '10.8% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=project-management'
    },
    {
      id: 3,
      title: 'Inventory Management System',
      description: 'Smart inventory tracking and order management',
      icon: Package,
      features: ['Stock Tracking', 'Order Management', 'Supplier Management', 'Analytics'],
      useCases: ['Retail Stores', 'Manufacturing', 'E-commerce', 'Warehouses'],
      pricing: 'Starting at $49/month',
      deployment: '3-5 days',
      marketSize: '$2.8B',
      growthRate: '8.9% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=inventory-management'
    },
    {
      id: 4,
      title: 'Financial Management Platform',
      description: 'Comprehensive financial tracking and reporting',
      icon: BarChart3,
      features: ['Expense Tracking', 'Invoice Management', 'Budget Planning', 'Financial Reports'],
      useCases: ['Small Businesses', 'Freelancers', 'Consultants', 'Startups'],
      pricing: 'Starting at $35/month',
      deployment: '2-4 days',
      marketSize: '$3.2B',
      growthRate: '11.2% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=financial-management'
    },
    // New innovative services
    {
      id: 5,
      title: 'AI-Powered Content Creation Suite',
      description: 'Automated content generation and optimization platform',
      icon: Brain,
      features: ['AI Writing Assistant', 'SEO Optimization', 'Content Calendar', 'Performance Analytics'],
      useCases: ['Marketing Teams', 'Content Creators', 'Agencies', 'E-commerce'],
      pricing: 'Starting at $79/month',
      deployment: '1-2 days',
      marketSize: '$21.3B',
      growthRate: '280% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=ai-content-creation'
    },
    {
      id: 6,
      title: 'Quantum-Enhanced Data Analytics',
      description: 'Next-generation analytics with quantum computing capabilities',
      icon: Cpu,
      features: ['Quantum Processing', 'Real-time Analytics', 'Predictive Modeling', 'Data Visualization'],
      useCases: ['Financial Services', 'Healthcare', 'Manufacturing', 'Research Institutions'],
      pricing: 'Starting at $299/month',
      deployment: '5-7 days',
      marketSize: '$23.1B',
      growthRate: '320% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=quantum-analytics'
    },
    {
      id: 7,
      title: 'Autonomous Supply Chain Platform',
      description: 'AI-driven supply chain optimization and management',
      icon: Network,
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Management'],
      useCases: ['Manufacturing', 'Retail', 'Logistics', 'Distribution'],
      pricing: 'Starting at $199/month',
      deployment: '7-10 days',
      marketSize: '$25.8B',
      growthRate: '300% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=autonomous-supply-chain'
    },
    {
      id: 8,
      title: 'Edge Computing Management Suite',
      description: 'Distributed computing infrastructure management platform',
      icon: Server,
      features: ['Edge Node Management', 'Load Balancing', 'Security Monitoring', 'Performance Analytics'],
      useCases: ['IoT Networks', 'Smart Cities', 'Manufacturing', 'Healthcare'],
      pricing: 'Starting at $149/month',
      deployment: '3-5 days',
      marketSize: '$19.8B',
      growthRate: '300% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=edge-computing'
    },
    {
      id: 9,
      title: 'Blockchain Business Solutions',
      description: 'Enterprise blockchain implementation and management',
      icon: Shield,
      features: ['Smart Contracts', 'Digital Identity', 'Supply Chain Tracking', 'Token Management'],
      useCases: ['Financial Services', 'Healthcare', 'Real Estate', 'Government'],
      pricing: 'Starting at $399/month',
      deployment: '10-15 days',
      marketSize: '$67.4B',
      growthRate: '87.7% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=blockchain-solutions'
    },
    {
      id: 10,
      title: 'Autonomous Customer Success Platform',
      description: 'AI-driven customer engagement and retention system',
      icon: Users2,
      features: ['Churn Prediction', 'Automated Engagement', 'Success Metrics', 'Personalization'],
      useCases: ['SaaS Companies', 'E-commerce', 'Subscription Services', 'B2B Companies'],
      pricing: 'Starting at $89/month',
      deployment: '2-3 days',
      marketSize: '$17.8B',
      growthRate: '280% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=customer-success'
    },
    {
      id: 11,
      title: 'Quantum Cybersecurity Operations',
      description: 'Next-generation security with quantum-resistant encryption',
      icon: ShieldCheck,
      features: ['Quantum Encryption', 'Threat Detection', 'Incident Response', 'Compliance'],
      useCases: ['Financial Institutions', 'Healthcare', 'Government', 'Critical Infrastructure'],
      pricing: 'Starting at $599/month',
      deployment: '7-10 days',
      marketSize: '$31.2B',
      growthRate: '280% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=quantum-cybersecurity'
    },
    {
      id: 12,
      title: 'Autonomous DevOps Platform',
      description: 'Self-healing development and deployment infrastructure',
      icon: Zap2,
      features: ['Auto-scaling', 'Self-healing Systems', 'Performance Optimization', 'Security Automation'],
      useCases: ['Development Teams', 'DevOps Engineers', 'System Administrators', 'Cloud Architects'],
      pricing: 'Starting at $179/month',
      deployment: '5-7 days',
      marketSize: '$18.7B',
      growthRate: '250% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=autonomous-devops'
    }
  ];

const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w - 5 h - 5"      />, count: MICRO_SAAS_SERVICES.length },
    { id: 'AI Services', name: 'AI Services', icon: <Zap className="w - 5 h - 5"      />, count: getMicroSaasServicesByCategory ('AI Services') .length },
    { id: 'IT Services', name: 'IT Services', icon: <Code className="w - 5 h - 5"      />, count: getMicroSaasServicesByCategory ('IT Services') .length },
    { id: 'Business Solutions', name: 'Business Solutions', icon: <TrendingUp className="w - 5 h - 5"      />, count: getMicroSaasServicesByCategory ('Business Solutions') .length }
];
const pricingModels = [
    { id: 'all', name: 'All Pricing' },
    { id: 'monthly', name: 'Monthly' },
    { id: 'yearly', name: 'Yearly' },
    { id: 'one - time', name: 'One - time' },
    { id: 'usage - based', name: 'Usage - based' }
];
    const [selectedCategory, setSelectedCategory] = useState ('all') ;
    const [selectedPricing, setSelectedPricing] = useState ('all') ;
    const [searchQuery, setSearchQuery] = useState ('') ;
    const [filteredServices, setFilteredServices] = useState (MICRO_SAAS_SERVICES) ;
    const [sortBy, setSortBy] = useState ('rating') ;
    useEffect ( () => {
        let filtered = MICRO_SAAS_SERVICES;
        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter (service => service.category === selectedCategory) ;
        }
        // Filter by pricing model
        if (selectedPricing !== 'all') {
            filtered = filtered.filter (service => service.pricingModel === selectedPricing) ;
        }
        // Filter by search query
        if (searchQuery.trim () ) {
            const query = searchQuery.toLowerCase () ;
            filtered = filtered.filter (service => service.title.toLowerCase () .includes (query) ||
                service.description.toLowerCase () .includes (query) ||
                service.tags.some (tag => tag.toLowerCase () .includes (query) ) ||
                service.subcategory.toLowerCase () .includes (query) ) ;
        }
        // Sort services
        filtered.sort ( (a, b) => {
            switch (sortBy) {
                case 'rating':
                    return (b.rating || 0) - (a.rating || 0) ;
                case 'price':
                    return a.price - b.price;
                case 'aiScore':
                    return b.aiScore - a.aiScore;
                case 'newest':
                    return new Date (b.createdAt) .getTime () - new Date (a.createdAt) .getTime () ;
                default:
                    return 0;
            }
        }) ;
        setFilteredServices (filtered) ;
    }, [selectedCategory, selectedPricing, searchQuery, sortBy]) ;
    const ServiceCard = ({ service }) => (<div className="group relative bg - gradient - to - br from - zion - blue - dark / 50 to - zion - slate - dark / 50 border border - zion - blue - light / 20 rounded - 2xl p - 6 hover:border - zion - purple / 50 transition - all duration - 500 hover:scale-[1.02] hover:shadow - 2xl hover:shadow - zion - purple / 20">
      {/* Featured Badge */}
      {service.featured && (<div className="absolute - top - 3 -right - 3 bg - gradient - to - r from - zion - purple to - zion - cyan text - white text - xs font - bold px - 3 py - 1 rounded - full">
          Featured
        </div>) }

      {/* Service Image */}
      <div className="relative mb - 6 overflow - hidden rounded - xl">
        <img src={service.images[0]} alt={service.title} className="w - full h - 48 object - cover group - hover:scale - 110 transition - transform duration - 500"      />
        <div className="absolute inset - 0 bg - gradient - to - t from - black / 60 to - transparent"      />
        <div className="absolute bottom - 3 left - 3 right - 3">
          <div className="flex items - center justify - between">
            <Badge variant="secondary" className="bg - zion - purple / 80 text - white">
              {service.category}
            </Badge>
            <div className="flex items - center space - x-1 text - white">
              <Star className="w - 4 h - 4 fill - yellow - 400 text - yellow - 400"      />
              <span className="text - sm font - medium">{service.rating}</span>
              <span className="text - xs text - zion - slate - light"> ({service.reviewCount}) </span>
            </div>
          </div>
        </div>
      </div > import React, {useState} from 'react';
            SERVICE_CATEGORIES,

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const ServiceCard = ({service}: {service}: MicroSaasService }) => (<Card className="group relative overflow - hidden border - 0 bg - gradient - to - br from - zion - blue - dark / 50 to - zion - slate / 50 backdrop - blur - sm hover:from - zion - blue - dark / 70 hover:to - zion - slate / 70 transition - all duration - 500 hover:scale - 105 hover:shadow - 2xl hover:shadow - zion - purple / 20">
      <div className="absolute inset - 0 bg - gradient - to - r from - zion - purple / 5 to - zion - cyan / 5 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 500"></div>

      <CardHeader className="relative z - 10">
        <div className="flex items - start justify - between mb - 4">
          <div className="flex - 1">
            <CardTitle className="text - xl font - bold text - white mb - 2 group - hover:text - zion - cyan transition - colors">
              {service.title}
            </CardTitle>
            <CardDescription className="text - zion - slate - light text - sm leading - relaxed">
              {service.description}
            </CardDescription>
          </div>
        </div>

        <div className="flex items - center gap - 2 mb - 3">
          <Badge variant="secondary" className="bg - zion - purple / 20 text - zion - cyan border - zion - purple / 30">
            {service.category}
          </Badge>
          <Badge variant="outline" className="border - zion - cyan / 30 text - zion - cyan">
            {service.subcategory}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="relative z - 10 space - y-4">
        {/* Pricing */}
        <div className="flex items - center justify - between p - 3 bg - zion - blue / 20 rounded - lg border border - zion - blue - light / 20">
          <div>
            <div className="text - 2xl font - bold text - white">
              {formatPrice (service.zionPrice, service.currency, service.pricingModel) }
            </div>
            <div className="text - sm text - zion - slate - light">
              Market: {service.currency}{service.averageMarketPrice}
            </div>
          </div>
          <div className="text - right">
            <Badge className="bg - green - 600 text - white">
              Save {service.savings}%
            </Badge>
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="text - sm font - semibold text - zion - cyan mb - 2">Key Features</h4>
          <div className="grid grid - cols - 2 gap - 1">
            {service.features.slice (0, 4) .map ( (feature, index) => (<div key={index} className="flex items - center gap - 2 text - xs text - zion - slate - light">
                <CheckCircle className="w - 3 h - 3 text - zion - cyan"      />
                <span className="truncate">{feature}</span>
              </div>) ) }
      {/* Service Info */}
      <div className="space - y-4">
        <div>
          <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - zion - cyan transition - colors">
            {service.title}
          </h3>
          <p className="text - zion - slate - light text - sm leading - relaxed">
            {service.description}
          </p>
        </div>

        {/* AI Score */}
        <div className="flex items - center justify - between">
          <div className="flex items - center space - x-2">
            <Zap className="w - 4 h - 4 text - zion - cyan"      />
            <span className="text - sm text - zion - slate - light">AI Score:</span>
            <span className="text - zion - cyan font - bold">{service.aiScore}%</span>
          </div>
          <Badge variant="outline" className="border - zion - purple / 30 text - zion - purple">
            {service.subcategory}
          </Badge>
        </div>

        {/* Pricing */}
        <div className="flex items - center justify - between">
          <div>
            <span className="text - 2xl font - bold text - white">{service.currency}{service.price}</span>
            <span className="text - zion - slate - light text - sm ml - 1">/{service.pricingModel === 'monthly' ? 'mo' : service.pricingModel === 'yearly' ? 'year' : 'incident'}</span>
          </div>
          <div className="text - right">
            <p className="text - xs text - zion - slate - light">Market Price:</p>
            <p className="text - sm text - zion - cyan font - medium">{service.marketPrice}</p>
          </div>
        </div>

        {/* Features Preview */}
        <div className="space - y-2">
          <p className="text - sm font - medium text - white">Key Features:</p>
          <div className="flex flex - wrap gap - 2">
            {service.features.slice (0, 3) .map ( (feature, index) => (<Badge key={index} variant="outline" className="text - xs border - zion - blue - light / 30 text - zion - slate - light">
                {feature}
              </Badge>) ) }
            {service.features.length > 3 && (<Badge variant="outline" className="text - xs border - zion - purple / 30 text - zion - purple">
                +{service.features.length - 3} more
              </Badge>) }
          </div>
        </div>

        {/* Benefits */}
        <div className="space - y-2">
          <p className="text - sm font - medium text - white">Benefits:</p>
          <div className="space - y-1">
            {service.benefits.slice (0, 2) .map ( (benefit, index) => (<div key={index} className="flex items - start space - x-2">
                <CheckCircle className="w - 4 h - 4 text - zion - cyan mt - 0.5 flex - shrink - 0"      />
                <span className="text - xs text - zion - slate - light">{benefit}</span>
              </div>) ) }
          </div>
        </div>

        {/* Target Audience */}
        <div>
          <p className="text - sm font - medium text - white mb - 2">Perfect for:</p>
          <div className="flex flex - wrap gap - 2">
            {service.targetAudience.slice (0, 3) .map ( (audience, index) => (<Badge key={index} variant="outline" className="text - xs border - zion - cyan / 30 text - zion - cyan">
                {audience}
              </Badge>) ) }
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space - x-3 pt - 4">
          <Button asChild className="flex - 1 bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white">
            <Link to={service.website} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w - 4 h - 4 mr - 2"      />
              Learn More
            </Link>
          </Button>
          <Button asChild variant="outline" className="border - zion - cyan text - zion - cyan hover:bg - zion - cyan hover:text - white">
            <a href={`mailto:${service.contactEmail}?subject = Inquiry about ${service.title}`}>
              <Mail className="w - 4 h - 4 mr - 2"      />
              Contact
            </a>
          </Button>
        </div>
      </div>
    </div>) ;

  return (<div className="min - h-screen bg - gradient - to - br from - zion - slate - dark via - zion - blue - dark to - zion - slate - dark">
      <SEO title="Micro SAAS Services - Zion Tech Group" description="Discover innovative micro SAAS services and solutions in AI, IT, and business automation. Transform your business with cutting - edge technology." keywords="micro SAAS, AI services, IT solutions, business automation, Zion Tech Group" canonical="https://ziontechgroup.com / micro - saas - services"      />

      {/* Hero Section */}
      <div className="relative overflow - hidden bg - gradient - to - r from - zion - blue - dark via - zion - purple - dark to - zion - slate - dark py - 20">
        <div className="absolute inset - 0 bg-[url ('data:image / svg + xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI + PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c + PC9zdmc+') ] opacity - 20"      />
        <div className="container mx - auto px - 4 relative z - 10">
          <div className="text - center max - w-4xl mx - auto">
            <h1 className="text - 5xl md:text - 6xl font - bold bg - gradient - to - r from - zion - cyan via - zion - purple - light to - zion - purple bg - clip - text text - transparent mb - 6">
              Micro SAAS Services
            </h1>
            <p className="text - xl text - zion - slate - light mb - 8 leading - relaxed">

              Transform your business with our innovative micro SAAS solutions. From AI - powered automation to enterprise IT services,

              we provide cutting - edge technology that drives growth and efficiency.
            </p>
            <div className="flex flex - wrap justify - center gap - 4">
              <Button size="lg" className="bg - gradient - to - r from - zion - purple to - zion - cyan text - white hover:from - zion - purple - light hover:to - zion - cyan - light">
                <Phone className="w - 5 h - 5 mr - 2"      />
                +1 302 464 0950
              </Button>
              <Button size="lg" variant="outline" className="border - zion - cyan text - zion - cyan hover:bg - zion - cyan hover:text - white">
                <Mail className="w - 5 h - 5 mr - 2"      />
                kleber@ziontechgroup.com
              </Button>
            </div>

          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg - zion - blue - dark / 50 border - b border - zion - blue - light / 20 py - 4">
        <div className="container mx - auto px - 4">
          <div className="flex flex - wrap items - center justify - center gap - 6 text - sm text - zion - slate - light">
            <div className="flex items - center space - x-2">
              <MapPin className="w - 4 h - 4 text - zion - cyan"      />
              <span > 364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="flex items - center space - x-2">
              <Phone className="w - 4 h - 4 text - zion - cyan"      />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items - center space - x-2">
              <Mail className="w - 4 h - 4 text - zion - cyan"      />
              <span > kleber@ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="sticky top - 16 z - 40 bg - zion - slate - dark / 80 backdrop - blur - md border - b border - zion - blue - light / 20 py - 4">
        <div className="container mx - auto px - 4">
          <div className="flex flex - col lg:flex - row gap - 4 items - center">
            {/* Search */}
            <div className="flex - 1 max - w-md">
              <div className="relative">
                <Search className="absolute left - 3 top - 1/2 transform - translate - y-1 / 2 text - zion - slate - light w - 4 h - 4"      />
                <Input placeholder="Search services..." value={searchQuery} onChange={ (e) => setSearchQuery (e.target.value) } className="pl - 10 bg - zion - blue - dark / 50 border - zion - blue - light / 30 text - white placeholder:text - zion - slate - light focus:border - zion - purple"/>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Micro SAAS</span>?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Focused solutions that deliver immediate value without the complexity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Micro SAAS</span> Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Innovative, focused solutions that transform your business operations
            </p>
          </motion.div>

            <div className="grid grid - cols - 1 lg:grid - cols - 2 xl:grid - cols - 3 gap - 8">
              {filteredServices.map ( (service) => (<ServiceCard key={service.id} service={service}      />) ) }
            </div>
          </>) }

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Use Cases</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, idx) => (
                      <span key={idx} className="px-3 py-1 bg-zion-slate-dark/50 text-zion-slate-light text-sm rounded-full border border-zion-cyan/20">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

      {/* CTA Section */}
      <div className="bg - gradient - to - r from - zion - blue - dark via - zion - purple - dark to - zion - slate - dark py - 20">
        <div className="container mx - auto px - 4 text - center">
          <h2 className="text - 4xl font - bold text - white mb - 6">
            Ready to Transform Your Business?
          </h2>
          <p className="text - xl text - zion - slate - light mb - 8 max - w-2xl mx - auto">
            Our team of experts is ready to help you implement the perfect solution for your business needs.
            Get in touch today for a personalized consultation.
          </p>
          <div className="flex flex - wrap justify - center gap - 4">
            <Button size="lg" className="bg - gradient - to - r from - zion - purple to - zion - cyan text - white hover:from - zion - purple - light hover:to - zion - cyan - light">
              <Phone className="w - 5 h - 5 mr - 2"      />
              Call Now: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border - zion - cyan text - zion - cyan hover:bg - zion - cyan hover:text - white">
              <Mail className="w - 5 h - 5 mr - 2"      />
              Email Us
            </Button>
          </div>
        </div>
      </div>

      {/* SAAS Solutions Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">SAAS</span> Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive platforms and tools to enhance your micro SAAS offerings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {saasSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-4">{solution.description}</p>
                <div className="space-y-2">
                  {solution.benefits.map((benefit, idx) => (
                    <div key={idx} className="text-sm text-zion-cyan">{benefit}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Get in touch with our team to discuss your specific needs and discover how our micro SAAS solutions can drive your business forward.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-zion-cyan hover:text-zion-blue transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href={`tel:${contactInfo.mobile}`} className="text-zion-cyan hover:text-zion-blue transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-blue transition-colors">
                  {contactInfo.website}
                </a>
              </div>
            </div>

            <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-white mb-3">Address</h3>
              <p className="text-zion-slate-light">{contactInfo.address}</p>
            </div>

            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 inline-block"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5 inline" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASServicesPage;
