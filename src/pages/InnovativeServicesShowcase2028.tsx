import { Link } from 'react - router - dom';
import React, { useState } from 'react';
import { SEO } from '@/components / SEO';
export default React.memo (function InnovativeServicesShowcase2028 () {

import {

import { motion } from 'framer - motion';

  Brain,
  Shield,
  Cloud,
  Cpu,
  Rocket,
  Lock,
  Globe,
  Heart,
  Code,
  Users,
  BarChart3,
  MessageCircle,
  Zap,
  CheckCircle,
  ArrowRight,
  Atom,
  Satellite,
  Leaf,
  Gamepad2,
  Coins,
  Truck,
  Building,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  Clock,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Star,
  Target,
  TrendingUp,
  Award,
  Lightbulb,
  Workflow,
  Bot,
  Sparkles,
  Palette,
  FileText,
  Video,
  TestTube,
  GraduationCap,
  ShoppingCart,
  HelpCircle,
  Activity,
  Link as LinkIcon,
  Layers,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Atom as AtomIcon,
  Rocket as RocketIcon,
  Leaf as LeafIcon} from 'lucide - react';

  const [activeCategory, setActiveCategory] = useState ('all') ;
  const [searchQuery, setSearchQuery] = useState ('') ;

  // Enhanced service categories with real market prices and features
  const serviceCategories = [
    {

      id: 'ai - services',
      name: 'AI & Machine Learning Services',
      icon: Brain,
      color: 'from - blue - 600 to - cyan - 600',
      description:
        'Cutting - edge artificial intelligence solutions for business transformation',
      services: [
        {

          name: 'AI - Powered Business Intelligence Platform',
          description:
            'Advanced analytics with machine learning insights and predictive modeling',
          price: '$2,500 / month',
          marketPrice: '$3,000 - 5,000 / month',
          features: [
            'Real - time Data Processing',
            'Predictive Analytics',
            'Custom Dashboards',
            'API Integration',
            'Multi - source Data Connectors',
          ],
          benefits: [
            '40% faster decision making',
            '25% cost reduction',
            'Real - time insights',
            'Scalable architecture',
          ],
          icon: BarChart3,
          category: 'ai - services',
          badge: 'Popular'},
        {

          name: 'AI Customer Experience Platform',
          description:
            'Intelligent customer engagement with personalized recommendations and sentiment analysis',
          price: '$1,800 / month',
          marketPrice: '$2,200 - 4,000 / month',
          features: [
            'Customer Journey Mapping',
            'Sentiment Analysis',
            'Omnichannel Support',
            'Personalization Engine',
            'A / B Testing',
          ],
          benefits: [
            '35% increase in customer satisfaction',
            '28% higher conversion rates',
            '24 / 7 customer support',
            'Reduced support costs',
          ],
          icon: Users,
          category: 'ai - services',
          badge: 'New'},
        {

          name: 'AI Cybersecurity Threat Detection',
          description:
            'Advanced threat detection using machine learning and behavioral analysis',
          price: '$3,200 / month',
          marketPrice: '$4,000 - 7,000 / month',
          features: [
            'Real - time Threat Detection',
            'Behavioral Analysis',
            'Automated Response',
            'Compliance Reporting',
            '24 / 7 Monitoring',
          ],
          benefits: [
            '99.9% threat detection rate',
            '60% faster incident response',
            'Reduced false positives',
            'Compliance automation',
          ],
          icon: Shield,
          category: 'ai - services',
          badge: 'Featured'},
      ]},
    {

      id: 'micro - saas',
      name: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'from - purple - 600 to - pink - 600',
      description:
        'Scalable software - as - a-service solutions for specific business needs',
      services: [
        {

          name: 'AI - Powered Project Management Suite',
          description:
            'Intelligent project planning, resource allocation, and progress tracking',
          price: '$150 / month',
          marketPrice: '$200 - 400 / month',
          features: [
            'AI Resource Optimization',
            'Risk Prediction',
            'Automated Scheduling',
            'Team Collaboration',
            'Progress Analytics',
          ],
          benefits: [
            '30% faster project completion',
            '20% resource optimization',
            'Improved team productivity',
            'Real - time insights',
          ],
          icon: Workflow,
          category: 'micro - saas',
          badge: 'Best Value'},
        {

          name: 'Smart Inventory Management System',
          description:
            'AI - driven inventory optimization with demand forecasting and automated reordering',
          price: '$200 / month',
          marketPrice: '$250 - 500 / month',
          features: [
            'Demand Forecasting',
            'Automated Reordering',
            'Multi - location Support',
            'Supplier Management',
            'Cost Analytics',
          ],
          benefits: [
            '25% inventory cost reduction',
            '99% stock availability',
            'Automated procurement',
            'Real - time tracking',
          ],
          icon: Truck,
          category: 'micro - saas',
          badge: 'Popular'},
        {

          name: 'AI Content Creation Platform',
          description:
            'Automated content generation with SEO optimization and brand consistency',
          price: '$120 / month',
          marketPrice: '$150 - 300 / month',
          features: [
            'Multi - format Content',
            'SEO Optimization',
            'Brand Consistency',
            'Plagiarism Detection',
            'Performance Analytics',
          ],
          benefits: [
            '10x faster content creation',
            'Improved SEO rankings',
            'Consistent brand voice',
            'Cost - effective marketing',
          ],
          icon: Brain, // Changed from PenTool to Brain for consistency with AI services
          category: 'micro - saas',
          badge: 'New'},
      ]},
    {

      id: 'it - services',
      name: 'IT Infrastructure & Services',
      icon: Server,
      color: 'from - green - 600 to - emerald - 600',
      description:
        'Comprehensive IT solutions for modern business infrastructure',
      services: [
        {

          name: 'Cloud Migration & Optimization',
          description:
            'Seamless cloud migration with cost optimization and performance tuning',
          price: '$5,000 / project',
          marketPrice: '$8,000 - 15,000 / project',
          features: [
            'Multi - cloud Strategy',
            'Cost Optimization',
            'Performance Tuning',
            'Security Implementation',
            '24 / 7 Support',
          ],
          benefits: [
            '40% cost reduction',
            '99.9% uptime',
            'Scalable infrastructure',
            'Enhanced security',
          ],
          icon: Cloud,
          category: 'it - services',
          badge: 'Featured'},
        {

          name: 'DevOps Automation Platform',
          description:
            'End - to - end DevOps automation with CI / CD pipelines and infrastructure as code',
          price: '$2,800 / month',
          marketPrice: '$3,500 - 6,000 / month',
          features: [
            'CI / CD Pipelines',
            'Infrastructure as Code',
            'Automated Testing',
            'Monitoring & Alerting',
            'Security Scanning',
          ],
          benefits: [
            '80% faster deployments',
            'Reduced human errors',
            'Improved code quality',
            'Faster time to market',
          ],
          icon: Code,
          category: 'it - services',
          badge: 'Popular'},
        {

          name: 'Cybersecurity Compliance Suite',
          description:
            'Comprehensive security compliance for GDPR, HIPAA, SOC2, and industry standards',
          price: '$4,500 / month',
          marketPrice: '$6,000 - 12,000 / month',
          features: [
            'Compliance Automation',
            'Risk Assessment',
            'Audit Preparation',
            'Security Training',
            'Incident Response',
          ],
          benefits: [
            '100% compliance assurance',
            'Reduced audit time',
            'Risk mitigation',
            'Legal protection',
          ],
          icon: Lock,
          category: 'it - services',
          badge: 'Essential'},
      ]},
    {

      id: 'quantum - tech',
      name: 'Quantum & Emerging Technologies',
      icon: Atom,
      color: 'from - indigo - 600 to - purple - 600',
      description: 'Next - generation technologies for future - ready businesses',
      services: [
        {

          name: 'Quantum Computing Solutions',
          description:
            'Quantum algorithms for optimization, cryptography, and complex problem solving',
          price: '$15,000 / month',
          marketPrice: '$20,000 - 50,000 / month',
          features: [
            'Quantum Algorithms',
            'Optimization Problems',
            'Cryptography',
            'Simulation',
            'Research Support',
          ],
          benefits: [
            'Exponential speed improvements',
            'Unbreakable encryption',
            'Complex problem solving',
            'Competitive advantage',
          ],
          icon: Atom,
          category: 'quantum - tech',
          badge: 'Future Tech'},
        {

          name: 'Blockchain Enterprise Platform',
          description:
            'Secure blockchain solutions for supply chain, finance, and digital identity',
          price: '$3,500 / month',
          marketPrice: '$5,000 - 15,000 / month',
          features: [
            'Smart Contracts',
            'Supply Chain Tracking',
            'Digital Identity',
            'Tokenization',
            'Interoperability',
          ],
          benefits: [
            'Enhanced transparency',
            'Reduced fraud',
            'Automated processes',
            'Cost savings',
          ],
          icon: LinkIcon,
          category: 'quantum - tech',
          badge: 'Innovative'},
        {

          name: 'IoT Edge Computing Platform',
          description:
            'Real - time data processing at the edge for industrial IoT applications',
          price: '$2,200 / month',
          marketPrice: '$3,000 - 8,000 / month',
          features: [
            'Edge Analytics',
            'Real - time Processing',
            'Device Management',
            'Data Streaming',
            'Security',
          ],
          benefits: [
            'Ultra - low latency',
            'Reduced bandwidth costs',
            'Real - time insights',
            'Offline operation',
          ],
          icon: Cpu,
          category: 'quantum - tech',
          badge: 'Industrial'},
      ]},
    {

      id: 'green - tech',
      name: 'Green Technology Solutions',
      icon: Leaf,
      color: 'from - green - 500 to - teal - 600',
      description:
        'Sustainable technology solutions for environmental responsibility',
      services: [
        {

          name: 'Carbon Footprint Analytics Platform',
          description:
            'AI - powered carbon tracking and sustainability reporting for businesses',
          price: '$800 / month',
          marketPrice: '$1,000 - 2,500 / month',
          features: [
            'Carbon Tracking',
            'Sustainability Reporting',
            'Goal Setting',
            'Benchmarking',
            'Compliance',
          ],
          benefits: [
            'Reduced carbon footprint',
            'Cost savings',
            'Regulatory compliance',
            'Brand enhancement',
          ],
          icon: Leaf,
          category: 'green - tech',
          badge: 'Eco - Friendly'},
        {

          name: 'Smart Energy Management System',
          description:
            'Intelligent energy optimization using IoT sensors and AI analytics',
          price: '$1,500 / month',
          marketPrice: '$2,000 - 4,000 / month',
          features: [
            'Energy Monitoring',
            'AI Optimization',
            'Predictive Maintenance',
            'Cost Analysis',
            'Integration',
          ],
          benefits: [
            '30% energy cost reduction',
            'Predictive maintenance',
            'Real - time monitoring',
            'ROI optimization',
          ],
          icon: Zap,
          category: 'green - tech',
          badge: 'Cost - Effective'},
      ]},
    {

      id: 'space - tech',
      name: 'Space Technology Solutions',
      icon: Satellite,
      color: 'from - blue - 500 to - indigo - 600',
      description:
        'Satellite and space - based technology for global connectivity and insights',
      services: [
        {

          name: 'Satellite Data Analytics Platform',
          description:
            'Earth observation data analysis for agriculture, climate, and urban planning',
          price: '$2,800 / month',
          marketPrice: '$4,000 - 10,000 / month',
          features: [
            'Satellite Imagery',
            'AI Analysis',
            'Real - time Monitoring',
            'Custom Algorithms',
            'API Access',
          ],
          benefits: [
            'Global coverage',
            'Real - time insights',
            'Cost - effective monitoring',
            'Scalable solutions',
          ],
          icon: Satellite,
          category: 'space - tech',
          badge: 'Global'},
      ]},
  ];

  const contactInfo = {

    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'};

  const filteredServices = serviceCategories.flatMap (category =>
    category.services.filter (service => (activeCategory === 'all' || service.category === activeCategory) && (searchQuery === '' ||
          service.name.toLowerCase () .includes (searchQuery.toLowerCase () ) ||
          service.description.toLowerCase () .includes (searchQuery.toLowerCase () ) ) ) ) ;

  const containerVariants = {

    hidden: { opacity: 0 },
    visible: {

      opacity: 1,
      transition: {

        staggerChildren: 0.1}}};

  const itemVariants = {

    hidden: { opacity: 0, y: 20 },
    visible: {

      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }}};

  return (<div role="button" className="min - h-screen bg - gradient - to - br from - slate - 900 via - slate - 800 to - slate - 900 text - white">
      <SEO
        title="2028 Innovative Services Showcase - Zion Tech Group"
        description="Explore our cutting - edge AI services, micro SAAS solutions, IT infrastructure, and emerging technologies. Real market prices and proven ROI."
        keywords="AI services, micro SAAS, IT services, quantum computing, blockchain, IoT, green technology, space technology, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com / innovative - services - showcase - 2028"
      />

      {/* Hero Section */}
      <section className="relative pt - 28 pb - 16 overflow - hidden">
        <div role="button" className="absolute inset - 0 bg - gradient - to - br from - blue - 900 / 20 to - purple - 900 / 20"></div>
        <div role="button" className="container mx - auto px - 4 relative z - 10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text - center max - w-4xl mx - auto"
          >
            <h1 className="text - 5xl md:text - 6xl font - bold text - white mb - 6">
              2028 Innovative Services < span className="bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent">
                {' '}
                Showcase
              </span>
            </h1>
            <p className="text - xl md:text - 2xl text - slate - 300 mb - 8 leading - relaxed">
              Discover our comprehensive portfolio of AI services, micro SAAS
              solutions, IT infrastructure, and cutting - edge technologies. Real
              market prices, proven ROI, and expert implementation.
            </p>
            <div role="button" className="flex flex - col sm:flex - row gap - 4 justify - center">
              <Link
                to="/contact"
                className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white rounded - xl font - semibold text - lg hover:scale - 105 transition - all duration - 300 shadow - 2xl hover:shadow - cyan - 500 / 25"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/case - studies"
                className="px - 8 py - 4 border border - cyan - 500 text - cyan - 400 rounded - xl font - semibold text - lg hover:bg - cyan - 500 hover:text - white transition - all duration - 300"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py - 8 bg - slate - 800 / 30">
        <div role="button" className="container mx - auto px - 4">
          <div role="button" className="flex flex - col lg:flex - row gap - 6 items - center justify - between">
            {/* Search */}
            <div role="button" className="relative flex - 1 max - w-md">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={e => setSearchQuery (e.target.value) }
                className="w - full px - 4 py - 3 bg - slate - 700 border border - slate - 600 rounded - lg text - white placeholder - slate - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500"
              />
              <Search className="absolute right - 3 top - 1/2 transform - translate - y-1 / 2 text - slate - 400 w - 5 h - 5" />
            </div>

            {/* Category Filter */}
            <div role="button" className="flex flex - wrap gap - 2">
              <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" onClick={ () => setActiveCategory ('all') }
                className={`px - 4 py - 2 rounded - lg font - medium transition - all duration - 300 ${

                  activeCategory === 'all'
                    ? 'bg - cyan - 500 text - white shadow - lg shadow - cyan - 500 / 25'
                    : 'bg - slate - 700 text - slate - 300 hover:bg - slate - 600'
                }`}
              >
                All Services
              </button>
              {serviceCategories.map (category => (<button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" key={category.id}
                  onClick={ () => setActiveCategory (category.id) }
                  className={`px - 4 py - 2 rounded - lg font - medium transition - all duration - 300 ${

                    activeCategory === category.id
                      ? 'bg - cyan - 500 text - white shadow - lg shadow - cyan - 500 / 25'
                      : 'bg - slate - 700 text - slate - 300 hover:bg - slate - 600'
                  }`}
                >
                  {category.name}
                </button>) ) }
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py - 20">
        <div role="button" className="container mx - auto px - 4">
          <motion.div
            className="grid grid - cols - 1 lg:grid - cols - 2 xl:grid - cols - 3 gap - 8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredServices.map ( (service, index) => (<motion.div key={index} variants={itemVariants} className="group">
                <div role="button" className="bg - slate - 800 / 50 backdrop - blur - sm border border - slate - 700 rounded - xl p - 8 h - full hover:border - cyan - 500 / 50 transition - all duration - 300 hover:scale - 105">
                  {/* Header */}
                  <div role="button" className="flex items - start justify - between mb - 6">
                    <div role="button" className={`w - 16 h - 16 bg - gradient - to - br ${serviceCategories.find (cat => cat.id === service.category) ?.color} rounded - 2xl flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300`}
                    >
                      <service.icon className="w - 8 h - 8 text - white" />
                    </div>
                    {service.badge && (<span
                        className={`px - 3 py - 1 text - xs font - semibold rounded - full ${

                          service.badge === 'Popular'
                            ? 'bg - blue - 500 / 20 text - blue - 400 border border - blue - 500 / 30'
                            : service.badge === 'New'
                              ? 'bg - green - 500 / 20 text - green - 400 border border - green - 500 / 30'
                              : service.badge === 'Featured'
                                ? 'bg - purple - 500 / 20 text - purple - 400 border border - purple - 500 / 30'
                                : service.badge === 'Best Value'
                                  ? 'bg - yellow - 500 / 20 text - yellow - 400 border border - yellow - 500 / 30'
                                  : 'bg - cyan - 500 / 20 text - cyan - 400 border border - cyan - 500 / 30'
                        }`}
                      >
                        {service.badge}
                      </span>) }
                  </div>

                  {/* Content */}
                  <h3 className="text - 2xl font - bold text - white mb - 4 group - hover:text - cyan - 400 transition - colors duration - 300">
                    {service.name}
                  </h3>

                  <p className="text - slate - 300 mb - 6 leading - relaxed">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div role="button" className="mb - 6 p - 4 bg - slate - 700 / 50 rounded - lg">
                    <div role="button" className="flex items - center justify - between mb - 2">
                      <span className="text - slate - 400 text - sm">Our Price:</span>
                      <span className="text - 2xl font - bold text - cyan - 400">
                        {service.price}
                      </span>
                    </div>
                    <div role="button" className="flex items - center justify - between">
                      <span className="text - slate - 400 text - sm">
                        Market Price:
                      </span>
                      <span className="text - slate - 300 text - sm line - through">
                        {service.marketPrice}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div role="button" className="space - y-2 mb - 6">
                    <h4 className="font - semibold text - cyan - 400 mb - 3">
                      Key Features:
                    </h4>
                    {service.features.map ( (feature, idx) => (<div role="button" key={idx}
                        className="flex items - center text - sm text - slate - 400"
                      >
                        <CheckCircle className="w - 4 h - 4 text - cyan - 400 mr - 3 flex - shrink - 0" />
                        {feature}
                      </div>) ) }
                  </div>

                  {/* Benefits */}
                  <div role="button" className="space - y-2 mb - 6">
                    <h4 className="font - semibold text - green - 400 mb - 3">
                      Business Benefits:
                    </h4>
                    {service.benefits.map ( (benefit, idx) => (<div role="button" key={idx}
                        className="flex items - center text - sm text - slate - 400"
                      >
                        <TrendingUp className="w - 4 h - 4 text - green - 400 mr - 3 flex - shrink - 0" />
                        {benefit}
                      </div>) ) }
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="inline - flex items - center justify - center w - full px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white rounded - lg font - semibold hover:scale - 105 transition - all duration - 300 group - hover:shadow - lg group - hover:shadow - cyan - 500 / 25"
                  >
                    Get Started < ArrowRight className="w - 4 h - 4 ml - 2 group - hover:translate - x-1 transition - transform duration - 300" />
                  </Link>
                </div>
              </motion.div>) ) }
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py - 20 bg - gradient - to - r from - slate - 800 to - blue - 900">
        <div role="button" className="container mx - auto px - 4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text - center mb - 16"
          >
            <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">
              Ready to Transform Your Business?
            </h2>
            <p className="text - xl text - slate - 300 max - w-3xl mx - auto">
              Get expert consultation, custom pricing, and implementation
              support. Our team is ready to help you choose the right solutions
              for your business needs.
            </p>
          </motion.div>

          <div role="button" className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 max - w-6xl mx - auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg - slate - 800 / 50 backdrop - blur - sm border border - slate - 700 rounded - xl p - 8"
            >
              <div role="button" className="w - 16 h - 16 bg - gradient - to - r from - cyan - 500 to - blue - 600 rounded - 2xl flex items - center justify - center mx - auto mb - 6">
                <Phone className="w - 8 h - 8 text - white" />
              </div>
              <h3 className="text - 2xl font - bold text - white mb - 4 text - center">
                Call Us
              </h3>
              <p className="text - slate - 300 text - center mb - 4">
                Speak with our experts directly
              </p>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text - 2xl font - bold text - cyan - 400 text - center block hover:text - cyan - 300 transition - colors duration - 300"
              >
                {contactInfo.phone}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg - slate - 800 / 50 backdrop - blur - sm border border - slate - 700 rounded - xl p - 8"
            >
              <div role="button" className="w - 16 h - 16 bg - gradient - to - r from - purple - 500 to - pink - 600 rounded - 2xl flex items - center justify - center mx - auto mb - 6">
                <Mail className="w - 8 h - 8 text - white" />
              </div>
              <h3 className="text - 2xl font - bold text - white mb - 4 text - center">
                Email Us
              </h3>
              <p className="text - slate - 300 text - center mb - 4">
                Send us your requirements
              </p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text - lg font - semibold text - cyan - 400 text - center block hover:text - cyan - 300 transition - colors duration - 300 break - all"
              >
                {contactInfo.email}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg - slate - 800 / 50 backdrop - blur - sm border border - slate - 700 rounded - xl p - 8"
            >
              <div role="button" className="w - 16 h - 16 bg - gradient - to - r from - green - 500 to - emerald - 600 rounded - 2xl flex items - center justify - center mx - auto mb - 6">
                <MapPin className="w - 8 h - 8 text - white" />
              </div>
              <h3 className="text - 2xl font - bold text - white mb - 4 text - center">
                Visit Us
              </h3>
              <p className="text - slate - 300 text - center mb - 4">
                Our headquarters location
              </p>
              <p className="text - slate - 300 text - center text - sm leading - relaxed">
                {contactInfo.address}
              </p>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text - center mt - 12"
          >
            <div role="button" className="flex flex - col sm:flex - row gap - 4 justify - center">
              <Link
                to="/contact"
                className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - xl font - semibold text - lg hover:scale - 105 transition - all duration - 300 shadow - 2xl hover:shadow - cyan - 500 / 25"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/pricing"
                className="px - 8 py - 4 border border - cyan - 500 text - cyan - 400 rounded - xl font - semibold text - lg hover:bg - cyan - 500 hover:text - white transition - all duration - 300"
              >
                View Full Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py - 20">
        <div role="button" className="container mx - auto px - 4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text - center mb - 16"
          >
            <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text - xl text - slate - 300 max - w-3xl mx - auto">
              We deliver innovative solutions with proven ROI, expert support,
              and competitive pricing.
            </p>
          </motion.div>

          <motion.div
            className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {

                icon: Award,
                title: 'Proven Expertise',
                description:
                  '500 + successful projects across industries with measurable results'},
              {

                icon: Zap,
                title: 'Innovation First',
                description:
                  'Cutting - edge technologies and methodologies for competitive advantage'},
              {

                icon: Shield,
                title: 'Enterprise Security',
                description:
                  'Bank - level security and compliance for enterprise - grade solutions'},
              {

                icon: Heart,
                title: '24 / 7 Support',
                description:
                  'Round - the - clock technical support and maintenance services'},
            ].map ( (item, index) => (<motion.div
                key={index}
                variants={itemVariants}
                className="text - center"
              >
                <div role="button" className="w - 20 h - 20 bg - gradient - to - r from - cyan - 500 to - blue - 600 rounded - 2xl flex items - center justify - center mx - auto mb - 6">
                  <item.icon className="w - 10 h - 10 text - white" />
                </div>
                <h3 className="text - xl font - bold text - white mb - 3">
                  {item.title}
                </h3>
                <p className="text - slate - 300">{item.description}</p>
              </motion.div>) ) }
          </motion.div>
        </div>
      </section>
    </div>) ;
}
