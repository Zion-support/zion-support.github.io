import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Network, 
  TrendingUp, 
  Code, 
  Shield, 
  Globe,
  Zap,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Rocket,
  Lightbulb,
  Cpu,
  Database,
  Cloud,
  Lock,
  BarChart3,
  DollarSign,
  Package,
  Truck,
  Warehouse,
  ChartBar,
  PieChart,
  LineChart,
  Route,
  Analytics,
  GitBranch,
  AlertTriangle
} from 'lucide-react';

const ComprehensiveServicesShowcase2029: React.FC = () => {
  const featuredServices = [
    {
      id: 'ai-autonomous-code-reviewer',
      title: 'AI Autonomous Code Reviewer',
      description: 'Revolutionize your code review process with AI-powered autonomous analysis. Detect security vulnerabilities, optimize performance, and maintain code quality across your entire development team.',
      icon: <Code className="w-8 h-8 text-blue-600" />,
      category: 'AI Development',
      price: '$299 - $1,299/month',
      features: [
        'AI-powered code analysis',
        'Security vulnerability detection',
        'Performance optimization',
        'Multi-language support',
        'Git integration',
        'Real-time quality metrics'
      ],
      benefits: [
        'Reduce code review time by 70%',
        'Catch 95% of security vulnerabilities',
        'Improve code quality consistency',
        'Automated compliance checking'
      ],
      href: '/services/AIAutonomousCodeReviewer'
    },
    {
      id: 'ai-supply-chain-optimization',
      title: 'AI Supply Chain Optimization',
      description: 'Transform your supply chain with AI-powered optimization. Reduce costs, improve efficiency, and gain real-time visibility across your entire supply network with predictive analytics.',
      icon: <Network className="w-8 h-8 text-green-600" />,
      category: 'AI Business Solutions',
      price: '$499 - $2,999/month',
      features: [
        'AI-powered demand forecasting',
        'Intelligent route optimization',
        'Real-time analytics dashboard',
        'Risk management & compliance',
        'Inventory optimization',
        'Global supply chain integration'
      ],
      benefits: [
        'Reduce supply chain costs by 20-35%',
        'Improve delivery performance by 40%',
        'Reduce inventory costs by 25%',
        'Minimize disruptions by 60%'
      ],
      href: '/services/AISupplyChainOptimization'
    },
    {
      id: 'ai-financial-analytics',
      title: 'AI Financial Analytics Platform',
      description: 'Revolutionize your financial decision-making with AI-powered analytics. Get real-time insights, predictive forecasting, and intelligent risk management for superior investment performance.',
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      category: 'AI Financial Solutions',
      price: '$799 - $4,999/month',
      features: [
        'AI-powered financial forecasting',
        'Real-time financial dashboards',
        'Risk assessment & management',
        'Portfolio optimization',
        'Automated financial reporting',
        'Multi-market analysis'
      ],
      benefits: [
        'Increase investment returns by 15-25%',
        'Reduce financial risk by 40%',
        'Automate 80% of analysis tasks',
        'Achieve 95% forecast accuracy'
      ],
      href: '/services/AIFinancialAnalytics'
    }
  ];

  const allServices = [
    {
      category: 'AI-Powered Development',
      services: [
        {
          title: 'AI Autonomous Code Reviewer',
          description: 'AI-powered code analysis and security scanning',
          price: '$299/month',
          href: '/services/AIAutonomousCodeReviewer'
        },
        {
          title: 'AI Project Management',
          description: 'Intelligent project planning and resource optimization',
          price: '$199/month',
          href: '/services/AIProjectManagement'
        },
        {
          title: 'AI Workflow Orchestrator',
          description: 'Automated business process optimization',
          price: '$399/month',
          href: '/services/AIWorkflowOrchestrator'
        }
      ]
    },
    {
      category: 'AI Business Intelligence',
      services: [
        {
          title: 'AI Supply Chain Optimization',
          description: 'Intelligent supply chain management and optimization',
          price: '$499/month',
          href: '/services/AISupplyChainOptimization'
        },
        {
          title: 'AI Business Intelligence',
          description: 'Advanced analytics and decision support',
          price: '$599/month',
          href: '/services/AIBusinessIntelligence'
        },
        {
          title: 'AI Customer Experience Analytics',
          description: 'Customer behavior analysis and optimization',
          price: '$349/month',
          href: '/services/AICustomerExperienceAnalytics'
        }
      ]
    },
    {
      category: 'AI Financial Solutions',
      services: [
        {
          title: 'AI Financial Analytics Platform',
          description: 'Comprehensive financial intelligence and forecasting',
          price: '$799/month',
          href: '/services/AIFinancialAnalytics'
        },
        {
          title: 'AI Financial Risk Management',
          description: 'Advanced risk assessment and mitigation',
          price: '$899/month',
          href: '/services/AIFinancialRiskManagement'
        },
        {
          title: 'AI Trading Platform',
          description: 'Intelligent trading strategies and optimization',
          price: '$1,299/month',
          href: '/services/AIFinancialTrading'
        }
      ]
    },
    {
      category: 'AI Cybersecurity',
      services: [
        {
          title: 'AI Cybersecurity Platform',
          description: 'Advanced threat detection and response',
          price: '$699/month',
          href: '/services/AICybersecurityPlatform'
        },
        {
          title: 'Zero Trust Network Access',
          description: 'Secure network access and authentication',
          price: '$399/month',
          href: '/services/ZeroTrustNetworkAccess'
        },
        {
          title: 'AI Threat Intelligence',
          description: 'Predictive threat analysis and prevention',
          price: '$599/month',
          href: '/services/AIAutonomousThreatIntelligence'
        }
      ]
    },
    {
      category: 'AI Healthcare & Life Sciences',
      services: [
        {
          title: 'AI Healthcare Platform',
          description: 'Intelligent healthcare analytics and diagnostics',
          price: '$899/month',
          href: '/services/AIHealthcarePlatform'
        },
        {
          title: 'AI Healthcare Analytics',
          description: 'Advanced medical data analysis',
          price: '$699/month',
          href: '/services/AIHealthcareAnalytics'
        },
        {
          title: 'AI Drug Discovery',
          description: 'Accelerated pharmaceutical research',
          price: '$1,999/month',
          href: '/services/AIDrugDiscovery'
        }
      ]
    },
    {
      category: 'AI Content & Marketing',
      services: [
        {
          title: 'AI Content Creation Suite',
          description: 'Automated content generation and optimization',
          price: '$299/month',
          href: '/services/AIContentCreationSuite'
        },
        {
          title: 'AI Marketing Automation',
          description: 'Intelligent marketing campaign management',
          price: '$399/month',
          href: '/services/AIMarketingAutomation'
        },
        {
          title: 'AI SEO Optimization',
          description: 'Advanced search engine optimization',
          price: '$199/month',
          href: '/services/AIPoweredSEO'
        }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-100 rounded-full">
                <Rocket className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              2029 Comprehensive Services Showcase
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Discover Zion Tech Group's cutting-edge AI-powered solutions, innovative micro SAAS services, 
              and comprehensive IT services designed to transform your business and drive digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured AI-Powered Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our most innovative and impactful solutions that are transforming industries worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">{service.icon}</div>
                  <div>
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={service.href}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of AI-powered solutions across all major industries and use cases.
            </p>
          </motion.div>

          <div className="space-y-12">
            {allServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Lightbulb className="w-6 h-6 text-blue-600 mr-3" />
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-blue-600">
                          {service.price}
                        </span>
                        <a
                          href={service.href}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          Learn More →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge AI technology with deep industry expertise to deliver 
              transformative solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-First Approach</h3>
              <p className="text-gray-600">
                Built from the ground up with artificial intelligence at the core
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Track record of delivering measurable ROI and business transformation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Deep expertise in AI, machine learning, and industry-specific solutions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Deployment</h3>
              <p className="text-gray-600">
                Quick implementation and time-to-value for all our solutions
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our AI-powered solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call {contactInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-400">
                Empowering the future through innovative technology solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">{contactInfo.phone}</p>
              <p className="text-gray-400">{contactInfo.email}</p>
              <p className="text-gray-400">{contactInfo.address}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AI Solutions</li>
                <li>IT Services</li>
                <li>Micro SaaS</li>
                <li>Cybersecurity</li>
                <li>Financial Analytics</li>
                <li>Supply Chain</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href={contactInfo.website} className="text-gray-400 hover:text-white">
                  Website
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComprehensiveServicesShowcase2029;