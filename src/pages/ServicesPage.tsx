import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Cloud, 
  Network, 
  Code, 
  Users, 
  Target,
  BarChart3,
  Lock,
  Database,
  Globe,
  Rocket,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Award,
  TrendingUp,
  Heart,
  Building,
  ShoppingCart,
  DollarSign,
  Factory,
  Car,
  Plane,
  Ship,
  HardDrive,
  Sparkles,
  Link2,
  Wifi
} from 'lucide-react';

// Enhanced service listings with real pricing and descriptions
const serviceCategories = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: Shield,
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 'cloud',
    name: 'Cloud Services',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'data',
    name: 'Data & Analytics',
    icon: Database,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'development',
    name: 'Development',
    icon: Code,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'consulting',
    name: 'Consulting',
    icon: Users,
    color: 'from-yellow-500 to-orange-500'
  }
];

const featuredServices = [
  {
    id: 1,
    name: "AI-Powered Business Intelligence",
    description: "Transform your data into actionable insights with our advanced AI analytics platform.",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    popular: true,
    path: "/ai-business-intelligence",
    features: [
      "Real-time data processing",
      "Predictive analytics",
      "Custom dashboards",
      "API integration"
    ],
    price: "$2,500/month"
  },
  {
    id: 2,
    name: "Zero Trust Security Architecture",
    description: "Implement comprehensive security with our zero-trust framework and monitoring.",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    popular: true,
    path: "/zero-trust-security",
    features: [
      "Identity verification",
      "Continuous monitoring",
      "Threat detection",
      "Compliance reporting"
    ],
    price: "$3,200/month"
  },
  {
    id: 3,
    name: "Cloud Migration & Optimization",
    description: "Seamlessly migrate to the cloud and optimize your infrastructure for peak performance.",
    icon: Cloud,
    color: "from-blue-500 to-cyan-500",
    popular: true,
    path: "/cloud-migration",
    features: [
      "Migration planning",
      "Performance optimization",
      "Cost management",
      "24/7 support"
    ],
    price: "$4,500/month"
  },
  {
    id: 4,
    name: "Data Pipeline Engineering",
    description: "Build robust, scalable data pipelines for real-time analytics and reporting.",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    path: "/data-pipeline-engineering",
    features: [
      "ETL/ELT processes",
      "Real-time streaming",
      "Data quality checks",
      "Monitoring & alerting"
    ],
    price: "$3,800/month"
  },
  {
    id: 5,
    name: "Full-Stack Development",
    description: "Custom web applications built with modern technologies and best practices.",
    icon: Code,
    color: "from-indigo-500 to-purple-500",
    path: "/full-stack-development",
    features: [
      "React/Node.js stack",
      "Responsive design",
      "API development",
      "Testing & deployment"
    ],
    price: "$5,500/month"
  },
  {
    id: 6,
    name: "IT Strategy Consulting",
    description: "Strategic guidance to align technology with your business objectives.",
    icon: Users,
    color: "from-yellow-500 to-orange-500",
    path: "/it-strategy-consulting",
    features: [
      "Technology assessment",
      "Roadmap planning",
      "Vendor selection",
      "Implementation support"
    ],
    price: "$2,800/month"
  }
];

const allServices = [
  ...featuredServices,
  {
    id: 7,
    name: "Quantum Computing Solutions",
    description: "Explore the future of computing with our quantum-ready applications and algorithms.",
    icon: Zap,
    color: "from-cyan-500 to-blue-500",
    path: "/quantum-computing",
    features: [
      "Quantum algorithms",
      "Hybrid computing",
      "Performance optimization",
      "Research collaboration"
    ],
    price: "$8,500/month"
  },
  {
    id: 8,
    name: "Blockchain Development",
    description: "Secure, transparent solutions using cutting-edge blockchain technology.",
    icon: Lock,
    color: "from-emerald-500 to-teal-500",
    path: "/blockchain-development",
    features: [
      "Smart contracts",
      "DApp development",
      "DeFi solutions",
      "Security auditing"
    ],
    price: "$4,200/month"
  },
  {
    id: 9,
    name: "IoT Platform Development",
    description: "Connect and manage your devices with our comprehensive IoT platform.",
    icon: Network,
    color: "from-violet-500 to-purple-500",
    path: "/iot-platform",
    features: [
      "Device management",
      "Data collection",
      "Real-time monitoring",
      "Analytics dashboard"
    ],
    price: "$3,600/month"
  },
  {
    id: 10,
    name: "DevOps Automation",
    description: "Streamline your development and deployment processes with automation.",
    icon: Rocket,
    color: "from-orange-500 to-red-500",
    path: "/devops-automation",
    features: [
      "CI/CD pipelines",
      "Infrastructure as code",
      "Monitoring & alerting",
      "Performance optimization"
    ],
    price: "$3,400/month"
  }
];

const serviceSolutions = [
  {
    title: "Cybersecurity Solutions",
    description: "Comprehensive security services to protect your digital assets",
    services: [
      { name: "Zero Trust Network Architecture", href: "/zero-trust-network-architecture" },
      { name: "Threat Intelligence Platform", href: "/threat-intelligence-platform" },
      { name: "Compliance Automation", href: "/compliance-automation" },
      { name: "SOC2 Compliance Automation", href: "/soc2-compliance-automation" },
      { name: "Vulnerability Assessment & Penetration Testing", href: "/vulnerability-assessment-penetration-testing" }
    ]
  },
  {
    title: "Industry Solutions",
    description: "Specialized solutions for your industry",
    services: [
      { name: "Healthcare AI Solutions", href: "/healthcare-ai-solutions" },
      { name: "Financial Technology Solutions", href: "/financial-solutions" },
      { name: "Manufacturing AI Solutions", href: "/manufacturing-ai-solutions" },
      { name: "Retail Technology Solutions", href: "/retail-technology-solutions" },
      { name: "Energy & Utilities Solutions", href: "/energy-utilities-solutions" }
    ]
  },
  {
    title: "Quantum Edge Computing Platform",
    description: "Next-generation computing at the edge",
    services: [
      { name: "Edge AI Processing", href: "/edge-ai-processing" },
      { name: "Quantum Edge Nodes", href: "/quantum-edge-nodes" },
      { name: "Distributed Computing", href: "/distributed-computing" }
    ]
  },
  {
    title: "AI Autonomous Legal Research Assistant",
    description: "Revolutionary AI-powered legal research",
    services: [
      { name: "Case Law Analysis", href: "/case-law-analysis" },
      { name: "Legal Document Review", href: "/legal-document-review" },
      { name: "Regulatory Compliance", href: "/regulatory-compliance" }
    ]
  },
  {
    title: "Zero Trust Network Architecture",
    description: "Advanced network security framework",
    services: [
      { name: "Identity Management", href: "/identity-management" },
      { name: "Access Control", href: "/access-control" },
      { name: "Network Segmentation", href: "/network-segmentation" }
    ]
  }
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => 
        serviceCategories.find(cat => cat.id === activeCategory)?.name.toLowerCase().includes(service.name.toLowerCase())
      );

  const searchFilteredServices = searchTerm 
    ? filteredServices.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredServices;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Cutting-edge technology solutions designed to transform your business and drive innovation
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/request-quote" 
              className="btn-primary text-lg px-8 py-4"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              <Globe className="w-5 h-5" />
              <span>All Services</span>
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchFilteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  {service.popular && (
                    <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                  {service.name}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-zion-cyan">{service.price}</span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  to={service.path}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group-hover:text-cyan-300"
                >
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-400">Certified professionals with years of experience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-400">Cutting-edge solutions using latest technologies</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-400">Round-the-clock technical support and monitoring</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Results Driven</h3>
              <p className="text-gray-400">Focused on delivering measurable business outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Comprehensive Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our specialized service categories designed to address your specific business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceSolutions.map((solution, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-400 mb-6">{solution.description}</p>
                <div className="space-y-3">
                  {solution.services.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      to={service.href}
                      className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-blue to-zion-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss how our services can help you achieve your goals and stay ahead of the competition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="btn-primary text-lg px-8 py-4"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="btn-secondary text-lg px-8 py-4"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Search icon component
function Search(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}
