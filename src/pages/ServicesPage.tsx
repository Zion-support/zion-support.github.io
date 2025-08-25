import React, { useState } from 'react';
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
  Ship
} from 'lucide-react';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    {
      id: 'all',
      name: 'All Services',
      icon: Star,
      color: 'from-purple-500 to-pink-500'
    },
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
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'quantum',
      name: 'Quantum Technology',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'cloud',
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'emerging',
      name: 'Emerging Tech',
      icon: Rocket,
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 'industry',
      name: 'Industry Solutions',
      icon: Building,
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const allServices = [
    // AI & Machine Learning
    {
      id: 'ai-autonomous-systems',
      name: 'AI Autonomous Systems',
      category: 'ai-ml',
      description: 'Advanced autonomous AI systems that operate independently and make intelligent decisions.',
      icon: Brain,
      features: ['Self-learning algorithms', 'Autonomous decision making', 'Continuous optimization', 'Scalable architecture'],
      path: '/services/ai-autonomous-systems',
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      category: 'ai-ml',
      description: 'Transform your data into actionable insights with AI-powered analytics.',
      icon: BarChart3,
      features: ['Predictive analytics', 'Real-time dashboards', 'Data visualization', 'Business insights'],
      path: '/services/ai-business-intelligence',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      category: 'ai-ml',
      description: 'Automate complex business processes with intelligent workflow systems.',
      icon: Zap,
      features: ['Process automation', 'Intelligent routing', 'Performance monitoring', 'Error handling'],
      path: '/services/ai-workflow-automation',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ai-customer-intelligence',
      name: 'AI Customer Intelligence',
      category: 'ai-ml',
      description: 'Understand your customers better with AI-powered insights and analytics.',
      icon: Users,
      features: ['Customer segmentation', 'Behavior analysis', 'Predictive modeling', 'Personalization'],
      path: '/services/ai-customer-intelligence',
      color: 'from-purple-500 to-pink-500'
    },

    // Cybersecurity
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Services',
      category: 'cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
      icon: Shield,
      features: ['Threat detection', 'Vulnerability assessment', 'Incident response', 'Security training'],
      path: '/services/cybersecurity',
      color: 'from-red-500 to-pink-500',
      popular: true
    },
    {
      id: 'soc2-compliance',
      name: 'SOC2 Compliance Automation',
      category: 'cybersecurity',
      description: 'Automate your SOC2 compliance process and maintain security standards.',
      icon: Lock,
      features: ['Automated audits', 'Compliance monitoring', 'Risk assessment', 'Documentation'],
      path: '/soc2-compliance-automation',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 'security-assessment',
      name: 'Security Assessment',
      category: 'cybersecurity',
      description: 'Comprehensive security audits and penetration testing services.',
      icon: Shield,
      features: ['Penetration testing', 'Vulnerability scanning', 'Security audits', 'Risk analysis'],
      path: '/services/security-assessment',
      color: 'from-red-500 to-pink-500'
    },

    // Quantum Technology
    {
      id: 'quantum-technology',
      name: 'Quantum Technology',
      category: 'quantum',
      description: 'Next-generation quantum computing solutions for complex problem solving.',
      icon: Cpu,
      features: ['Quantum algorithms', 'Quantum-safe security', 'Quantum simulation', 'Research support'],
      path: '/services/quantum-technology',
      color: 'from-blue-500 to-cyan-500',
      popular: true
    },
    {
      id: 'quantum-neural-networks',
      name: 'Quantum Neural Networks',
      category: 'quantum',
      description: 'Revolutionary quantum-powered neural network platforms.',
      icon: Brain,
      features: ['Quantum processing', 'Neural optimization', 'Advanced algorithms', 'Scalable architecture'],
      path: '/quantum-neural-network-platform',
      color: 'from-purple-500 to-pink-500'
    },

    // Cloud & Infrastructure
    {
      id: 'cloud-devops',
      name: 'Cloud DevOps',
      category: 'cloud',
      description: 'Streamlined cloud development and operations for modern applications.',
      icon: Cloud,
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring & logging', 'Auto-scaling'],
      path: '/cloud-devops',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure',
      category: 'cloud',
      description: 'Complete IT infrastructure solutions for enterprise environments.',
      icon: Network,
      features: ['Network design', 'Server management', 'Storage solutions', 'Backup & recovery'],
      path: '/services/it-infrastructure',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: '5g-enterprise',
      name: '5G Enterprise Solutions',
      category: 'cloud',
      description: 'High-speed 5G connectivity solutions for enterprise applications.',
      icon: Network,
      features: ['5G network design', 'Enterprise integration', 'Performance optimization', 'Security'],
      path: '/5g-enterprise-solutions',
      color: 'from-blue-500 to-cyan-500'
    },

    // Emerging Technologies
    {
      id: 'blockchain',
      name: 'Blockchain Solutions',
      category: 'emerging',
      description: 'Decentralized applications and blockchain infrastructure development.',
      icon: Code,
      features: ['Smart contracts', 'DApp development', 'Blockchain consulting', 'Integration services'],
      path: '/services/blockchain-solutions',
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 'iot-platforms',
      name: 'IoT Platforms',
      category: 'emerging',
      description: 'Connected device management and IoT platform development.',
      icon: Network,
      features: ['Device management', 'Data collection', 'Analytics dashboard', 'Security protocols'],
      path: '/services/iot-platforms',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ar-vr',
      name: 'AR/VR Solutions',
      category: 'emerging',
      description: 'Immersive experiences and augmented reality applications.',
      icon: Globe,
      features: ['3D modeling', 'Interactive experiences', 'Platform development', 'Content creation'],
      path: '/services/ar-vr-solutions',
      color: 'from-purple-500 to-pink-500'
    },

    // Industry Solutions
    {
      id: 'healthcare',
      name: 'Healthcare Technology',
      category: 'industry',
      description: 'AI-powered healthcare solutions for patient care optimization.',
      icon: Heart,
      features: ['Patient management', 'Medical analytics', 'AI diagnostics', 'Compliance'],
      path: '/solutions/healthcare',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'financial',
      name: 'Financial Services',
      category: 'industry',
      description: 'Fintech solutions for modern financial institutions.',
      icon: DollarSign,
      features: ['Risk management', 'Fraud detection', 'Compliance automation', 'Analytics'],
      path: '/services/financial-services',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing Intelligence',
      category: 'industry',
      description: 'Smart manufacturing solutions with AI and IoT integration.',
      icon: Factory,
      features: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Automation'],
      path: '/services/manufacturing-intelligence',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 'retail',
      name: 'Retail Technology',
      category: 'industry',
      description: 'Digital retail transformation and customer experience solutions.',
      icon: ShoppingCart,
      features: ['E-commerce platforms', 'Customer analytics', 'Inventory management', 'Personalization'],
      path: '/services/retail-technology',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive AI, cybersecurity, and technology solutions designed to transform 
            your business and drive innovation across all industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Get Started
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
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
            {filteredServices.map((service) => (
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
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver 
              exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Proven Expertise</h3>
              <p className="text-gray-400">Decades of experience in AI, cybersecurity, and emerging technologies.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">24/7 Support</h3>
              <p className="text-gray-400">Round-the-clock support and monitoring for your critical systems.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Innovation First</h3>
              <p className="text-gray-400">Always at the forefront of emerging technologies and AI advancements.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Enterprise Security</h3>
              <p className="text-gray-400">Bank-level security and compliance for your most sensitive data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how our services can help you achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}