import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Map, 
  Globe, 
  Zap, 
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  BarChart3, 
  Activity, 
  Users, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle, 
  AlertCircle, 
  ExternalLink, 
  Building, 
  Target, 
  Heart, 
  Atom, 
  Cloud, 
  Lock, 
  Eye, 
  Network, 
  Server, 
  Database, 
  Code, 
  GraduationCap, 
  HelpCircle, 
  ShoppingCart, 
  TrendingUp, 
  DollarSign, 
  Star, 
  Award, 
  TestTube, 
  Briefcase, 
  Newspaper, 
  Calendar, 
  Search, 
  Settings, 
  User, 
  Key, 
  ShieldCheck, 
  Globe2, 
  Smartphone, 
  Monitor, 
  Laptop, 
  Tablet, 
  Watch, 
  Camera, 
  Headphones, 
  Speaker, 
  Printer, 
  Scanner, 
  Router, 
  Switch, 
  Hub, 
  Bridge, 
  Gateway, 
  Firewall, 
  LoadBalancer, 
  Cache, 
  CDN, 
  Backup, 
  Archive, 
  Sync, 
  Update, 
  Upgrade, 
  Migrate, 
  Deploy, 
  Test, 
  Debug, 
  Monitor, 
  Log, 
  Alert, 
  Report, 
  Analytics, 
  Dashboard, 
  Chart, 
  Graph, 
  Table, 
  Form, 
  Input, 
  Button, 
  Link as LinkIcon, 
  Image, 
  Video, 
  Audio, 
  Document, 
  Folder, 
  File, 
  Archive as ArchiveIcon 
} from 'lucide-react';

const ComprehensiveSitemap = () => {
  const mainPages = [
    { name: 'Home', path: '/', icon: Home, description: 'Main landing page' },
    { name: 'About', path: '/about', icon: Users, description: 'Company information and team' },
    { name: 'Services', path: '/services', icon: Briefcase, description: 'Our service offerings' },
    { name: 'Solutions', path: '/solutions', icon: Target, description: 'Industry solutions' },
    { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch with us' },
    { name: 'Blog', path: '/blog', icon: Newspaper, description: 'Latest insights and news' },
    { name: 'Support', path: '/support', icon: HelpCircle, description: 'Technical support and help' },
    { name: 'Pricing', path: '/pricing', icon: DollarSign, description: 'Service pricing and plans' }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      services: [
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence' },
        { name: 'Machine Learning Solutions', path: '/services/machine-learning' },
        { name: 'Natural Language Processing', path: '/services/nlp' },
        { name: 'Computer Vision', path: '/services/computer-vision' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      services: [
        { name: 'Threat Detection', path: '/services/threat-detection' },
        { name: 'Zero Trust Security', path: '/services/zero-trust' },
        { name: 'Compliance Management', path: '/services/compliance' },
        { name: 'Incident Response', path: '/services/incident-response' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      services: [
        { name: 'Cloud Migration', path: '/services/cloud-migration' },
        { name: 'DevOps Automation', path: '/services/devops' },
        { name: 'Container Orchestration', path: '/services/containers' },
        { name: 'Infrastructure as Code', path: '/services/iac' }
      ]
    },
    {
      name: 'Quantum Computing',
      icon: Atom,
      services: [
        { name: 'Quantum Algorithms', path: '/services/quantum-algorithms' },
        { name: 'Quantum AI Platform', path: '/services/quantum-ai' },
        { name: 'Quantum Security', path: '/services/quantum-security' },
        { name: 'Hybrid Computing', path: '/services/hybrid-computing' }
      ]
    },
    {
      name: 'IoT & Edge Computing',
      icon: Cpu,
      services: [
        { name: 'IoT Platform', path: '/services/iot-platform' },
        { name: 'Edge Computing', path: '/services/edge-computing' },
        { name: 'Device Management', path: '/services/device-management' },
        { name: 'Data Analytics', path: '/services/iot-analytics' }
      ]
    },
    {
      name: 'Digital Transformation',
      icon: Rocket,
      services: [
        { name: 'Business Process Automation', path: '/services/automation' },
        { name: 'Legacy System Modernization', path: '/services/modernization' },
        { name: 'Digital Strategy Consulting', path: '/services/strategy' },
        { name: 'Change Management', path: '/services/change-management' }
      ]
    }
  ];

  const industrySolutions = [
    {
      name: 'Healthcare',
      icon: Heart,
      solutions: [
        { name: 'AI Diagnostics', path: '/solutions/healthcare/ai-diagnostics' },
        { name: 'Patient Care Management', path: '/solutions/healthcare/patient-care' },
        { name: 'Medical Imaging', path: '/solutions/healthcare/medical-imaging' },
        { name: 'Drug Discovery', path: '/solutions/healthcare/drug-discovery' }
      ]
    },
    {
      name: 'Finance',
      icon: DollarSign,
      solutions: [
        { name: 'Risk Management', path: '/solutions/finance/risk-management' },
        { name: 'Fraud Detection', path: '/solutions/finance/fraud-detection' },
        { name: 'Algorithmic Trading', path: '/solutions/finance/algorithmic-trading' },
        { name: 'Regulatory Compliance', path: '/solutions/finance/compliance' }
      ]
    },
    {
      name: 'Manufacturing',
      icon: Building,
      solutions: [
        { name: 'Smart Factory', path: '/solutions/manufacturing/smart-factory' },
        { name: 'Predictive Maintenance', path: '/solutions/manufacturing/predictive-maintenance' },
        { name: 'Quality Control', path: '/solutions/manufacturing/quality-control' },
        { name: 'Supply Chain Optimization', path: '/solutions/manufacturing/supply-chain' }
      ]
    },
    {
      name: 'Retail',
      icon: ShoppingCart,
      solutions: [
        { name: 'Customer Analytics', path: '/solutions/retail/customer-analytics' },
        { name: 'Inventory Management', path: '/solutions/retail/inventory-management' },
        { name: 'Personalization Engine', path: '/solutions/retail/personalization' },
        { name: 'E-commerce Platform', path: '/solutions/retail/ecommerce' }
      ]
    }
  ];

  const resources = [
    {
      name: 'Documentation',
      icon: FileText,
      items: [
        { name: 'API Reference', path: '/docs/api' },
        { name: 'User Guides', path: '/docs/guides' },
        { name: 'Developer Resources', path: '/docs/developer' },
        { name: 'Best Practices', path: '/docs/best-practices' }
      ]
    },
    {
      name: 'Training',
      icon: GraduationCap,
      items: [
        { name: 'Online Courses', path: '/training/courses' },
        { name: 'Certification Programs', path: '/training/certification' },
        { name: 'Workshops', path: '/training/workshops' },
        { name: 'Webinars', path: '/training/webinars' }
      ]
    },
    {
      name: 'Support',
      icon: HelpCircle,
      items: [
        { name: 'Help Desk', path: '/support/helpdesk' },
        { name: 'Knowledge Base', path: '/support/knowledge-base' },
        { name: 'Community Forum', path: '/support/community' },
        { name: 'Contact Support', path: '/support/contact' }
      ]
    }
  ];

  const Home = () => <span>🏠</span>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Map className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Sitemap
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Navigate through all our services, solutions, and resources with our comprehensive sitemap.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Main Pages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential pages for navigating our website and learning about our company.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainPages.map((page) => {
              const Icon = page.icon;
              return (
                <Link
                  key={page.name}
                  to={page.path}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {page.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{page.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of technology services and solutions.
            </p>
          </div>
          <div className="space-y-8">
            {serviceCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.name} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900 mb-1 group-hover:text-blue-600">
                          {service.name}
                        </h4>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored solutions designed for specific industry challenges and requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industrySolutions.map((industry) => {
              const Icon = industry.icon;
              return (
                <div key={industry.name} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{industry.name}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {industry.solutions.map((solution) => (
                      <Link
                        key={solution.name}
                        to={solution.path}
                        className="block p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900 mb-1 group-hover:text-green-600">
                          {solution.name}
                        </h4>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resources & Support
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access documentation, training materials, and support resources to maximize your success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <div key={resource.name} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{resource.name}</h3>
                  <div className="space-y-3">
                    {resource.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block p-3 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900 group-hover:text-orange-600">
                          {item.name}
                        </h4>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-400 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help Finding Something?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help you navigate
            our services and find the right solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/support"
              className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveSitemap;