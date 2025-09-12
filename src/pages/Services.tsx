import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Rocket, 
  Shield, 
  Cloud, 
  Server, 
  Zap, 
  Leaf, 
  Smartphone, 
  DollarSign, 
  Building,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Globe,
  Lock,
  Database,
  Network,
  Code
} from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions that transform business operations',
      services: [
        'AI-Powered Business Intelligence',
        'Machine Learning Automation',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'AI Workflow Automation'
      ],
      path: '/ai-solutions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cpu,
      title: 'Quantum Technology',
      description: 'Next-generation quantum computing solutions for complex problem-solving',
      services: [
        'Quantum Neural Networks',
        'Quantum Cryptography',
        'Quantum Optimization',
        'Quantum Machine Learning',
        'Quantum-Safe Security',
        'Quantum Internet Protocols'
      ],
      path: '/quantum-technology',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Rocket,
      title: 'Space Technology',
      description: 'Innovative space tech solutions for terrestrial and extraterrestrial applications',
      services: [
        'Satellite Communication Systems',
        'Space Mining Platforms',
        'Autonomous Space Operations',
        'Space Data Analytics',
        'Zero-Gravity Computing',
        'Space Tourism Technology'
      ],
      path: '/space-tech',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions protecting your digital assets and infrastructure',
      services: [
        'Zero-Trust Architecture',
        'SOC2 Compliance Automation',
        'Threat Intelligence',
        'Penetration Testing',
        'Security Operations Center',
        'Incident Response'
      ],
      path: '/security',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and streamlined development operations',
      services: [
        'Multi-Cloud Management',
        'Container Orchestration',
        'Infrastructure as Code',
        'Continuous Integration/Deployment',
        'Cloud Security & Compliance',
        'Serverless Architecture'
      ],
      path: '/services/cloud',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Server,
      title: 'IT Infrastructure',
      description: 'Robust and scalable infrastructure solutions for modern businesses',
      services: [
        'Network Architecture',
        'Data Center Management',
        'Storage Solutions',
        'Disaster Recovery',
        'Performance Monitoring',
        'Capacity Planning'
      ],
      path: '/services/infrastructure',
      color: 'from-gray-500 to-slate-500'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services for business modernization',
      services: [
        'Process Automation',
        'Legacy System Modernization',
        'Digital Strategy Consulting',
        'Change Management',
        'Technology Roadmapping',
        'Digital Maturity Assessment'
      ],
      path: '/services/transformation',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Leaf,
      title: 'Green IT',
      description: 'Sustainable technology solutions for environmentally conscious businesses',
      services: [
        'Energy-Efficient Computing',
        'Carbon Footprint Reduction',
        'Sustainable Data Centers',
        'Green Software Development',
        'E-Waste Management',
        'Renewable Energy Integration'
      ],
      path: '/green-it',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Innovative mobile applications and cross-platform solutions',
      services: [
        'Native Mobile Apps',
        'Cross-Platform Development',
        'Mobile-First Design',
        'App Store Optimization',
        'Mobile Security',
        'Progressive Web Apps'
      ],
      path: '/mobile',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: DollarSign,
      title: 'Financial Technology',
      description: 'Advanced fintech solutions for modern financial services',
      services: [
        'Blockchain Solutions',
        'Digital Payment Systems',
        'Risk Management',
        'Regulatory Compliance',
        'Financial Analytics',
        'Cryptocurrency Integration'
      ],
      path: '/financial-solutions',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: Building,
      title: 'Micro SaaS Services',
      description: 'Specialized software-as-a-service solutions for niche markets',
      services: [
        'Custom SaaS Development',
        'API Integration Services',
        'Subscription Management',
        'Multi-Tenant Architecture',
        'SaaS Analytics',
        'White-Label Solutions'
      ],
      path: '/micro-saas-services',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '50+', label: 'Expert Team Members', icon: Users },
    { number: '25+', label: 'Countries Served', icon: Globe },
    { number: '99.9%', label: 'Client Satisfaction', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive technology solutions designed to transform your business and drive innovation across all industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/request-quote"
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Service Categories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50 hover:border-slate-600/50">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="space-y-2 mb-6">
                  {category.services.slice(0, 3).map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{service}</span>
                    </div>
                  ))}
                  {category.services.length > 3 && (
                    <div className="text-sm text-gray-400">
                      +{category.services.length - 3} more services
                    </div>
                  )}
                </div>
                
                <Link
                  to={category.path}
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional value through innovation, expertise, and unwavering commitment to your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
              <p className="text-gray-300">
                We stay ahead of technology trends, constantly exploring emerging technologies to provide cutting-edge solutions.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
              <p className="text-gray-300">
                Our team consists of industry experts with deep knowledge and years of experience in their respective fields.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quality Assurance</h3>
              <p className="text-gray-300">
                We maintain the highest standards of quality, ensuring every solution meets or exceeds your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our services can help you achieve your technology goals and drive business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start a Conversation
            </Link>
            <Link
              to="/request-quote"
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
