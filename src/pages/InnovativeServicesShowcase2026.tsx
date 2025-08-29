import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Server,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Scale,
  Home,
  Truck,
  Leaf,
  Palette,
  MessageSquare,
  Car,
  Eye,
  Beaker,
  Coins,
  Building,
  GraduationCap,
  Gavel,
  Target,
  BarChart3,
  Search,
  Calculator,
  ChartBar,
  Shield as ShieldIcon,
  Clock,
  AlertTriangle,
  FileText,
  Globe as GlobeIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function InnovativeServicesShowcase2026() {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const innovativeServices = [
    {
      id: 'ai-legal-compliance-automation',
      title: 'AI Legal Compliance Automation',
      description: 'Intelligent legal compliance platform that automates regulatory monitoring, document analysis, and compliance reporting across multiple jurisdictions.',
      category: 'Legal Tech',
      icon: Scale,
      price: '$799',
      billing: '/month',
      features: [
        'Multi-jurisdiction compliance monitoring',
        'AI-powered document analysis',
        'Automated compliance reporting',
        'Regulatory change alerts',
        'Risk assessment scoring',
        'Audit trail management'
      ],
      benefits: [
        'Reduce compliance costs by 60%',
        'Improve accuracy by 95%',
        'Save 40+ hours per month',
        'Minimize regulatory risks'
      ],
      marketSize: '$12.8B (Legal Tech)',
      targetAudience: 'Law firms, Corporate legal departments, Compliance officers, Regulatory consultants',
      href: '/services/ai-legal-compliance-automation',
      color: 'from-blue-600 to-purple-600'
    },
    {
      id: 'ai-real-estate-analytics-platform',
      title: 'AI Real Estate Analytics Platform',
      description: 'Advanced real estate analytics platform using AI to predict market trends, property valuations, and investment opportunities with unprecedented accuracy.',
      category: 'Real Estate Tech',
      icon: Home,
      price: '$599',
      billing: '/month',
      features: [
        'AI-powered market predictions',
        'Property valuation algorithms',
        'Investment opportunity scoring',
        'Market trend analysis',
        'Comparative market analysis',
        'Risk assessment tools'
      ],
      benefits: [
        'Increase investment returns by 25%',
        'Reduce market research time by 70%',
        'Improve decision accuracy by 40%',
        'Identify opportunities faster'
      ],
      marketSize: '$8.9B (Real Estate Tech)',
      targetAudience: 'Real estate investors, Property managers, Real estate agents, Investment firms',
      href: '/services/ai-real-estate-analytics-platform',
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 'ai-logistics-optimization-suite',
      title: 'AI Logistics Optimization Suite',
      description: 'Intelligent logistics platform that optimizes supply chain operations, route planning, and inventory management using advanced AI algorithms.',
      category: 'Supply Chain',
      icon: Truck,
      price: '$1,299',
      billing: '/month',
      features: [
        'AI-powered route optimization',
        'Demand forecasting',
        'Inventory optimization',
        'Warehouse automation',
        'Real-time tracking',
        'Cost optimization'
      ],
      benefits: [
        'Reduce logistics costs by 30%',
        'Improve delivery times by 25%',
        'Optimize inventory by 40%',
        'Enhance customer satisfaction'
      ],
      marketSize: '$23.4B (Logistics Tech)',
      targetAudience: 'E-commerce companies, Logistics providers, Manufacturing firms, Retail chains',
      href: '/services/ai-logistics-optimization-suite',
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 'ai-energy-management-platform',
      title: 'AI Energy Management Platform',
      description: 'Smart energy management platform that optimizes energy consumption, predicts demand, and enables sustainable energy solutions for commercial buildings.',
      category: 'Green Tech',
      icon: Leaf,
      price: '$899',
      billing: '/month',
      features: [
        'Energy consumption optimization',
        'Demand prediction algorithms',
        'Renewable energy integration',
        'Carbon footprint tracking',
        'Cost optimization',
        'Real-time monitoring'
      ],
      benefits: [
        'Reduce energy costs by 35%',
        'Lower carbon emissions by 40%',
        'Improve efficiency by 30%',
        'Achieve sustainability goals'
      ],
      marketSize: '$18.7B (Energy Management)',
      targetAudience: 'Commercial buildings, Manufacturing facilities, Data centers, Property managers',
      href: '/services/ai-energy-management-platform',
      color: 'from-green-600 to-teal-600'
    },
    {
      id: 'ai-creative-content-studio',
      title: 'AI Creative Content Studio',
      description: 'Revolutionary AI-powered creative platform that generates, edits, and optimizes visual content, videos, and multimedia assets for marketing campaigns.',
      category: 'Digital Marketing',
      icon: Palette,
      price: '$399',
      billing: '/month',
      features: [
        'AI-generated visual content',
        'Video editing automation',
        'Brand consistency tools',
        'Multi-format optimization',
        'Performance analytics',
        'Collaboration features'
      ],
      benefits: [
        'Reduce content creation time by 80%',
        'Increase engagement by 45%',
        'Lower production costs by 60%',
        'Maintain brand consistency'
      ],
      marketSize: '$31.2B (Creative Software)',
      targetAudience: 'Marketing agencies, Content creators, E-commerce businesses, Social media managers',
      href: '/services/ai-creative-content-studio',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'ai-customer-feedback-intelligence',
      title: 'AI Customer Feedback Intelligence',
      description: 'Intelligent feedback analysis platform that uses AI to extract insights from customer feedback, reviews, and social media to drive product improvements.',
      category: 'Business Intelligence',
      icon: MessageSquare,
      price: '$299',
      billing: '/month',
      features: [
        'AI-powered sentiment analysis',
        'Feedback categorization',
        'Trend identification',
        'Actionable insights',
        'Integration with CRM',
        'Real-time monitoring'
      ],
      benefits: [
        'Improve customer satisfaction by 35%',
        'Reduce response time by 50%',
        'Identify product issues faster',
        'Drive product innovation'
      ],
      marketSize: '$11.6B (Customer Experience)',
      targetAudience: 'Product managers, Customer success teams, E-commerce businesses, Service providers',
      href: '/services/ai-customer-feedback-intelligence',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'ai-autonomous-vehicle-platform',
      title: 'AI Autonomous Vehicle Platform',
      description: 'Advanced autonomous vehicle technology platform for fleet management, safety monitoring, and intelligent transportation systems.',
      category: 'Autonomous Systems',
      icon: Car,
      price: '$25,000',
      billing: '/project',
      features: [
        'Autonomous navigation systems',
        'Safety monitoring',
        'Fleet management',
        'Route optimization',
        'Predictive maintenance',
        'Real-time tracking'
      ],
      benefits: [
        'Reduce accidents by 90%',
        'Lower operational costs by 40%',
        'Improve efficiency by 35%',
        'Enable 24/7 operations'
      ],
      marketSize: '$54.2B (Autonomous Vehicles)',
      targetAudience: 'Transportation companies, Logistics providers, Fleet operators, Government agencies',
      href: '/services/ai-autonomous-vehicle-platform',
      color: 'from-gray-600 to-slate-600'
    },
    {
      id: 'ai-metaverse-development-suite',
      title: 'AI Metaverse Development Suite',
      description: 'Comprehensive metaverse development platform for creating immersive virtual experiences, digital twins, and interactive 3D environments.',
      category: 'Metaverse & AR/VR',
      icon: Eye,
      price: '$15,000',
      billing: '/project',
      features: [
        '3D environment creation',
        'Virtual reality integration',
        'AI-powered interactions',
        'Multi-platform support',
        'User analytics',
        'Content management'
      ],
      benefits: [
        'Create immersive experiences',
        'Reduce development time by 50%',
        'Increase user engagement by 60%',
        'Enable new revenue streams'
      ],
      marketSize: '$74.8B (Metaverse)',
      targetAudience: 'Gaming companies, Real estate firms, Educational institutions, Entertainment companies',
      href: '/services/ai-metaverse-development-suite',
      color: 'from-indigo-600 to-purple-600'
    },
    {
      id: 'ai-biotech-research-platform',
      title: 'AI Biotech Research Platform',
      description: 'Advanced biotechnology research platform using AI for drug discovery, genetic analysis, and medical research automation.',
      category: 'BioTech & Health',
      icon: Flask,
      price: '$35,000',
      billing: '/project',
      features: [
        'AI-powered drug discovery',
        'Genetic sequence analysis',
        'Clinical trial optimization',
        'Data visualization',
        'Research collaboration tools',
        'Compliance management'
      ],
      benefits: [
        'Accelerate research by 3x',
        'Reduce costs by 40%',
        'Improve accuracy by 50%',
        'Enable breakthrough discoveries'
      ],
      marketSize: '$67.3B (Biotech AI)',
      targetAudience: 'Pharmaceutical companies, Research institutions, Biotech startups, Healthcare providers',
      href: '/services/ai-biotech-research-platform',
      color: 'from-red-600 to-pink-600'
    },
    {
      id: 'ai-web3-defi-platform',
      title: 'AI Web3 DeFi Platform',
      description: 'Intelligent decentralized finance platform that combines AI with blockchain technology for automated trading, risk management, and yield optimization.',
      category: 'Blockchain & Web3',
      icon: Coins,
      price: '$899',
      billing: '/month',
      features: [
        'AI-powered trading algorithms',
        'Risk management systems',
        'Yield optimization',
        'Portfolio management',
        'DeFi protocol integration',
        'Security features'
      ],
      benefits: [
        'Increase trading returns by 30%',
        'Reduce risks by 50%',
        'Automate complex strategies',
        'Access global markets'
      ],
      marketSize: '$89.2B (DeFi)',
      targetAudience: 'Crypto traders, Investment firms, DeFi protocols, Financial institutions',
      href: '/services/ai-web3-defi-platform',
      color: 'from-yellow-600 to-orange-600'
    }
  ];

  const categories = [
    { name: 'Legal Tech', count: 1, icon: Scale, color: 'from-blue-600 to-purple-600' },
    { name: 'Real Estate Tech', count: 1, icon: Home, color: 'from-green-600 to-emerald-600' },
    { name: 'Supply Chain', count: 1, icon: Truck, color: 'from-orange-600 to-red-600' },
    { name: 'Green Tech', count: 1, icon: Leaf, color: 'from-green-600 to-teal-600' },
    { name: 'Digital Marketing', count: 1, icon: Palette, color: 'from-purple-600 to-pink-600' },
    { name: 'Business Intelligence', count: 1, icon: MessageSquare, color: 'from-blue-600 to-cyan-600' },
    { name: 'Autonomous Systems', count: 1, icon: Car, color: 'from-gray-600 to-slate-600' },
    { name: 'Metaverse & AR/VR', count: 1, icon: Eye, color: 'from-indigo-600 to-purple-600' },
    { name: 'BioTech & Health', count: 1, icon: Flask, color: 'from-red-600 to-pink-600' },
    { name: 'Blockchain & Web3', count: 1, icon: Coins, color: 'from-yellow-600 to-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO 
        title="Innovative Services Showcase 2026 | Zion Tech Group"
        description="Discover our comprehensive portfolio of AI-powered micro SAAS services, IT solutions, and innovative technology services designed for the future."
        keywords="AI services, micro SAAS, IT solutions, technology services, innovation, digital transformation"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <Rocket className="h-8 w-8 text-blue-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Innovative Services Showcase 2026
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of AI-powered micro SAAS services, IT solutions, and innovative technology services designed for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}?subject=Innovative Services Showcase 2026 Consultation`}
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of innovative services across multiple technology domains and industries.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-200"
              >
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg w-fit mx-auto mb-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <div className="text-2xl font-bold text-blue-600">{category.count}</div>
                <div className="text-sm text-gray-600">Services</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Innovative Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each service is designed to solve real business challenges using cutting-edge AI and technology solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovativeServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="h-8 w-8" />
                    <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-bold text-gray-900">{service.price}</div>
                    <div className="text-gray-500">{service.billing}</div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <TrendingUp className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4 text-sm">
                    <div className="text-gray-600 mb-1">
                      <span className="font-semibold">Market Size:</span> {service.marketSize}
                    </div>
                    <div className="text-gray-600">
                      <span className="font-semibold">Target:</span> {service.targetAudience.split(', ').slice(0, 2).join(', ')}...
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <a
                      href={service.href}
                      className="flex-1 inline-flex justify-center items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
                    >
                      Learn More
                    </a>
                    <a
                      href={`mailto:${contactInfo.email}?subject=${service.title} Inquiry`}
                      className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-lg transition-colors duration-200"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="p-3 bg-blue-100 rounded-lg w-fit mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Expertise</h3>
              <p className="text-gray-600">15+ years of technology innovation and successful project delivery across industries.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="p-3 bg-green-100 rounded-lg w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified professionals with deep industry knowledge and cutting-edge technical skills.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="p-3 bg-purple-100 rounded-lg w-fit mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation First</h3>
              <p className="text-gray-600">Cutting-edge solutions that keep you ahead of the competition and future-ready.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="p-3 bg-red-100 rounded-lg w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security and compliance standards for all our solutions and services.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover how our innovative services can drive growth, efficiency, and competitive advantage for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}?subject=Innovative Services Showcase 2026 Consultation`}
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to explore our innovative services? Contact our team to learn more about how we can help transform your business.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center p-6 bg-blue-50 rounded-xl"
            >
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:text-blue-700">
                {contactInfo.phone}
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-6 bg-purple-50 rounded-xl"
            >
              <Mail className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-purple-600 hover:text-purple-700">
                {contactInfo.email}
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center p-6 bg-green-50 rounded-xl"
            >
              <MapPin className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-green-600">{contactInfo.address}</p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href={contactInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              Visit Our Website
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
