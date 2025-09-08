import React from 'react';
import { motion   } from 'framer-motion';
import { Link   } from 'react-router-dom';
import { Brain, 
  Server, 
  Zap, 
  Shield, 
  Users, 
  Truck, 
  Workflow, 
  MessageSquare, 
  BarChart3, 
  Cloud, 
  Database, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Target,
  Cpu,
  Lock,
  Monitor,
  Activity,
  Mail,
  Phone,
  ExternalLink
  } from 'lucide-react';
import { SEO   } from '../components/SEO';

export default function ServicesOverview(...args: any[]): any {
  const serviceCategories = [
    {
      name: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions that transform business operations',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          title: 'AI Workflow Automation',
          description: 'Intelligent process automation with AI-powered optimization',
          price: 'From $3,500',
          features: ['Process mapping', 'AI implementation', 'Ongoing optimization'],
          link: '/services/ai-workflow-automation',
          popular: true
        },
        {
          title: 'AI Customer Experience Platform',
          description: 'AI-powered personalization and customer journey optimization',
          price: 'From $4,500',
          features: ['CX assessment', 'Platform implementation', 'Performance optimization'],
          link: '/services/ai-customer-experience-platform',
          popular: false
        },
        {
          title: 'AI Supply Chain Optimization',
          description: 'Intelligent supply chain management and logistics optimization',
          price: 'From $5,500',
          features: ['Supply chain assessment', 'AI platform implementation', 'Continuous optimization'],
          link: '/services/ai-supply-chain-optimization',
          popular: false
        },
        {
          title: 'AI Cybersecurity Suite',
          description: 'Advanced AI-powered threat detection and security automation',
          price: 'From $2,500/month',
          features: ['Threat intelligence', 'SOC services', 'Compliance monitoring'],
          link: '/services/ai-cybersecurity-suite',
          popular: true
        },
        {
          title: 'AI Business Intelligence',
          description: 'Next-generation BI with AI-powered insights and analytics',
          price: 'From $2,999/month',
          features: ['AI data analysis', 'Predictive analytics', 'Custom dashboards'],
          link: '/services/ai-business-intelligence',
          popular: false
        },
        {
          title: 'AI Sales Copilot',
          description: 'AI-powered sales automation and lead optimization',
          price: 'From $1,999/month',
          features: ['Lead scoring', 'Sales automation', 'Performance analytics'],
          link: '/services/ai-sales-copilot',
          popular: false
        }
      ]
    },
    {
      name: 'IT Services',
      description: 'Comprehensive IT infrastructure and digital transformation solutions',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          title: 'Cloud DevOps',
          description: 'Cloud migration and DevOps transformation services',
          price: 'From $5,000',
          features: ['Cloud migration', 'DevOps implementation', '24/7 managed services'],
          link: '/services/cloud-devops',
          popular: true
        },
        {
          title: 'IT Infrastructure',
          description: 'Modern infrastructure design and implementation',
          price: 'From $8,000',
          features: ['Infrastructure design', 'Implementation', 'Ongoing support'],
          link: '/services/it-infrastructure',
          popular: false
        },
        {
          title: 'Digital Transformation',
          description: 'End-to-end digital transformation consulting and implementation',
          price: 'From $15,000',
          features: ['Strategy development', 'Technology selection', 'Change management'],
          link: '/services/digital-transformation',
          popular: false
        },
        {
          title: 'IT Consulting',
          description: 'Strategic IT consulting and technology advisory services',
          price: 'From $3,500',
          features: ['Technology assessment', 'Strategic planning', 'Vendor selection'],
          link: '/services/it-consulting',
          popular: false
        },
        {
          title: 'Zero Trust Network Architecture',
          description: 'Advanced security architecture implementation',
          price: 'From $12,000',
          features: ['Security assessment', 'Architecture design', 'Implementation'],
          link: '/services/zero-trust-network-architecture',
          popular: false
        },
        {
          title: 'Green IT Solutions',
          description: 'Sustainable technology solutions and energy optimization',
          price: 'From $6,000',
          features: ['Energy audit', 'Green technology', 'Sustainability reporting'],
          link: '/services/green-it',
          popular: false
        }
      ]
    },
    {
      name: 'Micro SaaS Solutions',
      description: 'Specialized software-as-a-service solutions for specific business needs',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          title: 'Cloud FinOps Optimizer',
          description: 'Cloud cost optimization and financial operations management',
          price: 'From $1,999/month',
          features: ['Cost analysis', 'Optimization', 'Financial reporting'],
          link: '/services/cloud-finops-optimizer',
          popular: true
        },
        {
          title: 'AI Compliance Assistant',
          description: 'Automated compliance monitoring and reporting',
          price: 'From $1,500/month',
          features: ['Compliance monitoring', 'Automated reporting', 'Risk assessment'],
          link: '/services/ai-compliance-assistant',
          popular: false
        },
        {
          title: 'LLM Content Studio',
          description: 'AI-powered content creation and management platform',
          price: 'From $999/month',
          features: ['Content generation', 'AI editing', 'Multi-platform publishing'],
          link: '/services/llm-content-studio',
          popular: false
        },
        {
          title: 'Customer Feedback Surveys',
          description: 'Intelligent customer feedback collection and analysis',
          price: 'From $799/month',
          features: ['Survey creation', 'AI analysis', 'Insight generation'],
          link: '/services/mobile-feedback-surveys',
          popular: false
        },
        {
          title: 'FinOps Advisor',
          description: 'Financial operations optimization and cost management',
          price: 'From $2,500/month',
          features: ['Cost optimization', 'Financial planning', 'Performance analytics'],
          link: '/services/finops-advisor',
          popular: false
        }
      ]
    }
  ];

// Enhanced service features display
const ServiceCard = ({ service, viewMode }: { service: unknown; viewMode: 'grid' | 'list' }) => {
  const [expanded, setExpanded] = useState(false);
  
  const getCategoryIcon = (category: string) => {
    const cat = serviceCategories.find(c => c.id === category);
    return cat ? cat.icon : Grid;
  };

  const getCategoryColor = (category: string) => {
    const cat = serviceCategories.find(c => c.id === category);
    return cat ? cat.color : 'from-gray-600 to-gray-700';
  };

  if (viewMode === 'grid') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
      >
        {/* Service Header */}
        <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-6 text-white`}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              {React.createElement(getCategoryIcon(service.category), { className: 'w-6 h-6' })}
            </div>
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
              {service.category}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
        </div>

        {/* Service Content */}
        <div className="p-6">
          {/* Pricing */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl font-bold text-gray-900">{service.price}</div>
            <span className="text-sm text-gray-500 capitalize">per {service.billing}</span>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Key Features
            </h4>
            <div className="space-y-2">
              {service.features.slice(0, 3).map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                {category.name}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {category.description}
              </p>
            </motion.div>

            <div className="grid md: anygrid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex)   => (
                <motion.div
                  key={serviceIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                  className={`bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border ${
                    service.popular ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-slate-600'
                  } relative`}
                >
                  {expanded ? 'Show less' : `+${service.features.length - 3} more features`}
                  {expanded ? <ChevronDown className="w-4 h-4 ml-1" /> : <ChevronRight className="w-4 h-4 ml-1" />}
                </button>
              )}
              {expanded && service.features.slice(3).map((feature: string, idx: number) => (
                <div key={idx + 3} className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={service.href}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-center block hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg flex items-center justify-center"
          >
            {service.ctaLabel}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    );
  }

          <div className="grid md: anygrid-cols-2 lg:grid-cols-4 gap-8">
            {emergingTechnologies.map((tech, index)   => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-600 text-center hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <div className="text-2xl font-bold text-green-400 mb-4">{tech.price}</div>
                <Link 
                  to={tech.link}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 text-sm"
                >
                  Explore
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing and CTA */}
        <div className="lg:text-right">
          <div className="mb-4">
            <div className="text-3xl font-bold text-gray-900">{service.price}</div>
            <span className="text-sm text-gray-500 capitalize">per {service.billing}</span>
          </div>
          <a
            href={service.href}
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            {service.ctaLabel}
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Sidebar component for better navigation
const ServicesSidebar = ({ 
  selectedCategory, 
  onCategoryChange, 
  categoriesWithCounts 
}: { 
  selectedCategory: string; 
  onCategoryChange: (category: string) => void; 
  categoriesWithCounts: unknown[];
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Filter className="w-5 h-5 mr-2 text-blue-600" />
        Service Categories
      </h3>
      <div className="space-y-2">
        {categoriesWithCounts.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
              selectedCategory === category.id
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                {React.createElement(category.icon, { className: 'w-4 h-4 text-white' })}
              </div>
              <span className="font-medium">{category.name}</span>
            </div>
            <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {category.count}
            </span>
          </button>
        ))}
      </div>
      
      {/* Quick Stats */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Quick Stats</h4>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center justify-between">
            <span>Total Services</span>
            <span className="font-semibold text-gray-900">
              {categoriesWithCounts.reduce((sum, cat) => sum + cat.count, 0)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>Categories</span>
            <span className="font-semibold text-gray-900">{categoriesWithCounts.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ServicesOverview() {
    const serviceCategories = [
        {
            name: "AI & Machine Learning",
            description: "Cutting-edge artificial intelligence solutions for business transformation",
            icon: Brain,
            color: "from-purple-600 to-blue-600",
            services: [
                {
                    name: "AI Strategy & Consulting",
                    description: "Strategic guidance on implementing AI solutions",
                    price: "From $2,500",
                    href: "/services/ai"
                },
                {
                    name: "Machine Learning Development",
                    description: "Custom ML models and algorithms",
                    price: "From $5,000",
                    href: "/services/ai"
                },
                {
                    name: "AI-Powered Applications",
                    description: "Intelligent automation and insights",
                    price: "From $8,500",
                    href: "/services/ai"
                }
            ]
        },
        {
            name: "Data Analytics & BI",
            description: "Transform raw data into actionable business intelligence",
            icon: Database,
            color: "from-blue-600 to-indigo-600",
            services: [
                {
                    name: "Business Intelligence & Reporting",
                    description: "Interactive dashboards and automated reporting",
                    price: "From $3,500/month",
                    href: "/services/data-analytics"
                },
                {
                    name: "Predictive Analytics & Forecasting",
                    description: "Machine learning for future insights",
                    price: "From $5,000/month",
                    href: "/services/data-analytics"
                },
                {
                    name: "Data Engineering & ETL",
                    description: "Robust data pipelines and warehouses",
                    price: "From $4,500/month",
                    href: "/services/data-analytics"
                }
            ]
        },
        {
            name: "IoT & Edge Computing",
            description: "Connected ecosystems and real-time edge processing",
            icon: Wifi,
            color: "from-green-600 to-emerald-600",
            services: [
                {
                    name: "IoT Device Management Platform",
                    description: "Comprehensive IoT device management",
                    price: "From $4,200/month",
                    href: "/services/iot-edge-computing"
                },
                {
                    name: "Edge Computing Infrastructure",
                    description: "Real-time data processing at the edge",
                    price: "From $5,500/month",
                    href: "/services/iot-edge-computing"
                },
                {
                    name: "Smart City & Industrial IoT",
                    description: "IoT solutions for smart cities and manufacturing",
                    price: "From $6,500/month",
                    href: "/services/iot-edge-computing"
                }
            ]
        },
        {
            name: "Blockchain & Web3",
            description: "Decentralized applications and blockchain solutions",
            icon: LinkIcon,
            color: "from-purple-600 to-indigo-600",
            services: [
                {
                    name: "Smart Contract Development",
                    description: "Secure, audited smart contracts",
                    price: "From $8,500/project",
                    href: "/services/blockchain-web3"
                },
                {
                    name: "DeFi Platform Development",
                    description: "Complete DeFi platforms and protocols",
                    price: "From $25,000/project",
                    href: "/services/blockchain-web3"
                },
                {
                    name: "NFT Marketplace & Collections",
                    description: "Custom NFT platforms and generative art",
                    price: "From $12,000/project",
                    href: "/services/blockchain-web3"
                }
            ]
        },
        {
            name: "DevOps & Cloud",
            description: "Modern software delivery and cloud infrastructure",
            icon: Cloud,
            color: "from-orange-600 to-red-600",
            services: [
                {
                    name: "Cloud Migration & Strategy",
                    description: "Multi-cloud strategy and migration",
                    price: "From $8,500/project",
                    href: "/services/devops-cloud"
                },
                {
                    name: "CI/CD Pipeline Development",
                    description: "Automated software delivery pipelines",
                    price: "From $6,500/project",
                    href: "/services/devops-cloud"
                },
                {
                    name: "Container Orchestration & Kubernetes",
                    description: "Enterprise-grade container management",
                    price: "From $7,500/project",
                    href: "/services/devops-cloud"
                }
            ]
        },
        {
            name: "Cybersecurity",
            description: "Advanced security solutions and threat protection",
            icon: Shield,
            color: "from-red-600 to-pink-600",
            services: [
                {
                    name: "Security Assessment & Auditing",
                    description: "Comprehensive security evaluations",
                    price: "From $5,000",
                    href: "/services/cybersecurity"
                },
                {
                    name: "Threat Detection & Response",
                    description: "Real-time security monitoring",
                    price: "From $4,500/month",
                    href: "/services/cybersecurity"
                },
                {
                    name: "Compliance & Governance",
                    description: "Regulatory compliance and security frameworks",
                    price: "From $6,000/month",
                    href: "/services/cybersecurity"
                }
            ]
        }
    ];
    const stats = [
        { label: "Services Offered", value: "50+", icon: Target },
        { label: "Industries Served", value: "15+", icon: Users },
        { label: "Technologies", value: "100+", icon: Server },
        { label: "Client Satisfaction", value: "98%", icon: Check }
    ];
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
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };
    return (<div className="min-h-screen bg-background">
      <SEO title="All Services - Zion Tech Group Comprehensive Technology Solutions" description="Explore our complete range of technology services including AI, data analytics, IoT, blockchain, DevOps, and cybersecurity solutions." keywords="technology services, AI services, data analytics, IoT solutions, blockchain development, DevOps consulting, cybersecurity services" canonical="https://ziontechgroup.com/services"/>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Our Complete Service Portfolio
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover our comprehensive range of AI-powered solutions, IT services, and innovative micro SaaS applications. 
            Find the perfect service to transform your business.
          </p>
        </motion.div>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {stats.map((stat, index) => (<motion.div key={stat.label} variants={itemVariants} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white"/>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions organized by category
            </p>
          </motion.div>

          <div className="grid md: anygrid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: 'Expert Team',
                description: 'Certified professionals with years of industry experience'
              },
              {
                icon: Target,
                title: 'Proven Results',
                description: 'Track record of successful implementations and measurable ROI'
              },
              {
                icon: TrendingUp,
                title: 'Innovation Focus',
                description: 'Cutting-edge solutions that keep you ahead of the competition'
              },
              {
                icon: Shield,
                title: 'Quality Assurance',
                description: 'Rigorous testing and quality control for reliable solutions'
              }
            ].map((feature, index)   => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-600 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </motion.div>))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep technical expertise with business acumen to deliver solutions that drive real value
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600"/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Certified professionals with deep expertise across multiple technology domains
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600"/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Track record of successful implementations and measurable business outcomes
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600"/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation Focus</h3>
              <p className="text-gray-600">
                Stay ahead with cutting-edge technologies and emerging industry trends
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 className="text-4xl font-bold mb-6" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p className="text-xl mb-8 max-w-3xl mx-auto" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Let our technology experts help you choose the right solutions and implement them successfully
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>);
}
