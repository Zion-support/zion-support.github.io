import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Building, 
  ShoppingCart,
  Star,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock,
  TrendingUp,
  Award,
  Globe,
  Heart,
  FileText,
  GraduationCap,
  Home,
  Truck,
  Settings,
  Target,
  BarChart3,
  Cpu,
  Lock,
  MessageCircle,
  BookOpen,
  TrendingUp as TrendingUpIcon,
  Phone,
  Mail
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export default function ServicesOverview() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const serviceCategories = [
    {
      id: 'all',
      name: 'All Services',
      icon: Star,
      color: 'from-blue-600 to-purple-600',
      count: 45
    },
    {
      id: 'ai-analytics',
      name: 'AI & Analytics',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      count: 12
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-green-600 to-emerald-600',
      count: 8
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-indigo-600 to-purple-600',
      count: 6
    },
    {
      id: 'digital-solutions',
      name: 'Digital Solutions',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      count: 7
    },
    {
      id: 'industry-solutions',
      name: 'Industry Solutions',
      icon: Building,
      color: 'from-pink-600 to-rose-600',
      count: 8
    },
    {
      id: 'business-solutions',
      name: 'Business Solutions',
      icon: ShoppingCart,
      color: 'from-teal-600 to-cyan-600',
      count: 6
    }
  ];

  const allServices = [
    // AI & Analytics Services
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      category: 'ai-analytics',
      description: 'Advanced machine learning algorithms for business insights and predictive analytics.',
      price: '$299',
      billing: 'month',
      features: ['Predictive modeling', 'Real-time dashboards', 'Automated reporting', 'Data security'],
      benefits: ['25-40% cost reduction', 'Improved decision making', 'Automated insights'],
      icon: Brain,
      href: '/services/ai-business-intelligence',
      marketPrice: '$200-800/mo',
      competitors: ['Tableau', 'Power BI', 'Looker'],
      roi: '200% within 6 months'
    },
    {
      id: 'ai-customer-success-predictor',
      name: 'AI Customer Success Predictor',
      category: 'ai-analytics',
      description: 'Predict customer churn and identify upsell opportunities using advanced ML algorithms.',
      price: '$399',
      billing: 'month',
      features: ['Churn prediction', 'Upsell identification', 'Customer health scoring', 'CRM integration'],
      benefits: ['30-50% churn reduction', '25% increase in CLV', 'Automated workflows'],
      icon: Users,
      href: '/services/ai-customer-success-predictor',
      marketPrice: '$300-800/mo',
      competitors: ['HubSpot', 'Salesforce', 'Zendesk'],
      roi: '200% within 6 months'
    },
    {
      id: 'ai-customer-intelligence-platform',
      name: 'AI Customer Intelligence Platform',
      category: 'ai-analytics',
      description: 'Advanced customer behavior analysis and predictive analytics platform.',
      price: '$599',
      billing: 'month',
      features: ['Behavior analysis', 'Predictive analytics', 'Sentiment analysis', 'Personalization'],
      benefits: ['35% increase in CLV', '25% retention improvement', 'Optimized campaigns'],
      icon: TrendingUpIcon,
      href: '/services/ai-customer-intelligence-platform',
      marketPrice: '$500-1200/mo',
      competitors: ['Segment', 'Mixpanel', 'Amplitude'],
      roi: '250% within 6 months'
    },
    {
      id: 'ai-financial-risk-analytics',
      name: 'AI Financial Risk Analytics',
      category: 'ai-analytics',
      description: 'Intelligent financial risk assessment and fraud detection platform.',
      price: '$1299',
      billing: 'month',
      features: ['Credit risk assessment', 'Fraud detection', 'Portfolio optimization', 'Compliance'],
      benefits: ['30% credit loss reduction', '90% fraud detection improvement', 'Portfolio optimization'],
      icon: DollarSign,
      href: '/services/ai-financial-risk-analytics',
      marketPrice: '$1000-2500/mo',
      competitors: ['FICO', 'Experian', 'TransUnion'],
      roi: '300% within 6 months'
    },
    // Cloud & DevOps Services
    {
      id: 'ai-cloud-migration-platform',
      name: 'AI Cloud Migration Platform',
      category: 'cloud-devops',
      description: 'Intelligent cloud migration platform with automated planning and execution.',
      price: '$599',
      billing: 'month',
      features: ['Automated migration', 'Dependency analysis', 'Risk assessment', 'Performance monitoring'],
      benefits: ['50% migration time reduction', '80% downtime reduction', 'Risk mitigation'],
      icon: Cloud,
      href: '/services/ai-cloud-migration-platform',
      marketPrice: '$500-1200/mo',
      competitors: ['AWS Migration Hub', 'Azure Migrate', 'Google Cloud Migrate'],
      roi: '200% within 4 months'
    },
    {
      id: 'ai-devops-automation-suite',
      name: 'AI DevOps Automation Suite',
      category: 'cloud-devops',
      description: 'Comprehensive DevOps automation with AI-powered optimization.',
      price: '$449',
      billing: 'month',
      features: ['CI/CD automation', 'Code quality analysis', 'Automated testing', 'Deployment'],
      benefits: ['60% deployment time reduction', '40% code quality improvement', 'Error reduction'],
      icon: Settings,
      href: '/services/ai-devops-automation-suite',
      marketPrice: '$400-900/mo',
      competitors: ['Jenkins', 'GitLab', 'GitHub Actions'],
      roi: '200% within 6 months'
    },
    // Industry Solutions
    {
      id: 'ai-healthcare-diagnostics',
      name: 'AI Healthcare Diagnostics',
      category: 'industry-solutions',
      description: 'Advanced healthcare diagnostics platform with medical image analysis.',
      price: '$999',
      billing: 'month',
      features: ['Medical image analysis', 'Diagnostic assistance', 'Outcome prediction', 'EMR integration'],
      benefits: ['25% diagnostic accuracy improvement', '40% diagnosis time reduction', 'Better outcomes'],
      icon: Heart,
      href: '/services/ai-healthcare-diagnostics',
      marketPrice: '$800-2000/mo',
      competitors: ['IBM Watson Health', 'Google Health', 'Microsoft Healthcare'],
      roi: '250% within 12 months'
    },
    {
      id: 'ai-manufacturing-optimization',
      name: 'AI Manufacturing Optimization',
      category: 'industry-solutions',
      description: 'Intelligent manufacturing optimization with production efficiency improvements.',
      price: '$799',
      billing: 'month',
      features: ['Production optimization', 'Quality control', 'Predictive maintenance', 'Energy monitoring'],
      benefits: ['25% efficiency increase', '30% waste reduction', 'Quality improvement'],
      icon: Settings,
      href: '/services/ai-manufacturing-optimization',
      marketPrice: '$700-1500/mo',
      competitors: ['Siemens', 'GE Digital', 'Rockwell Automation'],
      roi: '250% within 8 months'
    },
    {
      id: 'ai-legal-document-analyzer',
      name: 'AI Legal Document Analyzer',
      category: 'industry-solutions',
      description: 'Advanced legal document analysis with risk assessment and compliance checking.',
      price: '$599',
      billing: 'month',
      features: ['Contract analysis', 'Risk assessment', 'Compliance checking', 'Legal research'],
      benefits: ['70% review time reduction', 'Automated risk identification', 'Compliance assurance'],
      icon: FileText,
      href: '/services/ai-legal-document-analyzer',
      marketPrice: '$500-1200/mo',
      competitors: ['DocuSign', 'ContractPodAi', 'Evisort'],
      roi: '250% within 4 months'
    },
    {
      id: 'ai-education-platform',
      name: 'AI Education Platform',
      category: 'industry-solutions',
      description: 'Personalized learning platform with adaptive content delivery.',
      price: '$199',
      billing: 'month',
      features: ['Personalized learning', 'Adaptive content', 'Progress tracking', 'Assessment tools'],
      benefits: ['40% learning outcome improvement', '25% time reduction', 'Personalized experience'],
      icon: GraduationCap,
      href: '/services/ai-education-platform',
      marketPrice: '$150-400/mo',
      competitors: ['Coursera', 'Udemy', 'Duolingo'],
      roi: '200% within 6 months'
    },
    // Business Solutions
    {
      id: 'ai-hr-recruitment-platform',
      name: 'AI HR Recruitment Platform',
      category: 'business-solutions',
      description: 'Intelligent recruitment platform with candidate matching and automation.',
      price: '$299',
      billing: 'month',
      features: ['AI candidate matching', 'Resume screening', 'Skill assessment', 'Interview scheduling'],
      benefits: ['40% time-to-hire reduction', '35% candidate quality improvement', 'Cost reduction'],
      icon: Users,
      href: '/services/ai-hr-recruitment-platform',
      marketPrice: '$250-600/mo',
      competitors: ['LinkedIn', 'Greenhouse', 'Workable'],
      roi: '200% within 6 months'
    },
    {
      id: 'ai-supply-chain-optimizer',
      name: 'AI Supply Chain Optimizer',
      category: 'business-solutions',
      description: 'Intelligent supply chain optimization with demand forecasting and inventory management.',
      price: '$799',
      billing: 'month',
      features: ['Demand forecasting', 'Inventory optimization', 'Supplier analytics', 'Risk assessment'],
      benefits: ['20-30% cost reduction', '25% forecast accuracy improvement', 'Stockout reduction'],
      icon: Truck,
      href: '/services/ai-supply-chain-optimizer',
      marketPrice: '$600-1500/mo',
      competitors: ['SAP', 'Oracle', 'Manhattan Associates'],
      roi: '250% within 6 months'
    }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = serviceCategories.find(cat => cat.id === categoryId);
    return category ? category.icon : Star;
  };

  const getCategoryColor = (categoryId: string) => {
    const category = serviceCategories.find(cat => cat.id === categoryId);
    return category ? category.color : 'from-gray-600 to-gray-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="Comprehensive Services Overview - Zion Tech Group"
        description="Explore our complete portfolio of AI-powered technology solutions, micro SaaS services, and innovative IT infrastructure. Transform your business with cutting-edge technology."
        keywords="AI services, IT solutions, micro SaaS, cloud computing, cybersecurity, digital transformation, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Comprehensive Services Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8">
              Transform your business with our cutting-edge AI-powered technology solutions, 
              micro SaaS services, and innovative IT infrastructure
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                Explore Services
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                Get Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Service Categories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Browse our comprehensive range of services organized by category to find the perfect solution for your business needs
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Service Header */}
                <div className={`p-6 bg-gradient-to-br ${getCategoryColor(service.category)} text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="w-8 h-8" />
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {service.billing}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-white/90 text-sm">{service.description}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  {/* Pricing */}
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-slate-900">{service.price}</span>
                    <span className="text-slate-500 ml-2">/{service.billing}</span>
                  </div>

                  {/* Market Price */}
                  <div className="mb-4">
                    <p className="text-sm text-slate-600 mb-1">Market Price Range:</p>
                    <p className="text-sm font-medium text-slate-800">{service.marketPrice}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-slate-600">
                          <TrendingUp className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ROI */}
                  <div className="mb-6 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800 font-medium">
                      <Award className="w-4 h-4 inline mr-2" />
                      ROI: {service.roi}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex space-x-3">
                    <Button asChild className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Link to={service.href}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      <DollarSign className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-slate-600">No services found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your specific needs and discover how our AI-powered solutions 
              can drive innovation and growth in your organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                <Mail className="w-5 h-5 mr-2" />
                Email kleber@ziontechgroup.com
              </Button>
            </div>
            <div className="mt-8 text-slate-300">
              <p>364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="mt-2">Visit us at <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 underline">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Search icon component
const Search = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);