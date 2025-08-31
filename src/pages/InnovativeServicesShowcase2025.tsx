import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Cpu, 
  BarChart3, 
  MessageCircle, 
  GitBranch, 
  Atom, 
  Shield, 
  Cloud, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Star,
  Users,
  Globe,
  TrendingUp,
  Lightbulb,
  Target,
  Activity,
  Code,
  Database,
  Network,
  Smartphone,
  Server,
  Clock,
  DollarSign,
  Building2,
  Factory,
  Heart,
  ShoppingCart,
  Truck,
  Rocket,
  Leaf,
  Satellite,
  Link as LinkIcon
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  const featuredServices = [
    {
      id: 'ai-edge-computing-platform',
      name: 'AI Edge Computing Platform',
      icon: Cpu,
      category: 'AI & Edge Computing',
      description: 'Revolutionary edge AI platform for real-time processing and distributed intelligence.',
      features: [
        'Real-time AI processing with sub-10ms response times',
        'Edge AI model optimization and compression',
        'Distributed edge intelligence across multiple nodes',
        'Edge-cloud hybrid processing capabilities'
      ],
      benefits: [
        'Reduced latency and improved user experience',
        'Lower bandwidth costs and data privacy',
        'Scalable architecture for IoT deployments',
        'Real-time decision making at the edge'
      ],
      pricing: {
        starter: '$2,500/month',
        professional: '$8,000/month',
        enterprise: '$25,000/month'
      },
      useCases: ['Manufacturing', 'Healthcare', 'Transportation', 'Retail'],
      link: '/services/ai-edge-computing-platform'
    },
    {
      id: 'ai-business-intelligence-platform',
      name: 'AI Business Intelligence Platform',
      icon: BarChart3,
      category: 'AI & Business Intelligence',
      description: 'AI-powered BI platform with predictive analytics and natural language queries.',
      features: [
        'Predictive analytics and forecasting',
        'Natural language query processing',
        'Real-time dashboards and monitoring',
        'Automated insights and pattern discovery'
      ],
      benefits: [
        'Faster decision making with AI insights',
        'Democratized data access for all users',
        'Predictive capabilities for strategic planning',
        'Automated anomaly detection and alerts'
      ],
      pricing: {
        starter: '$3,500/month',
        professional: '$12,000/month',
        enterprise: '$35,000/month'
      },
      useCases: ['Financial Services', 'Healthcare', 'Manufacturing', 'Retail'],
      link: '/services/ai-business-intelligence-platform'
    },
    {
      id: 'ai-customer-experience-platform',
      name: 'AI Customer Experience Platform',
      icon: MessageCircle,
      category: 'AI & Customer Experience',
      description: 'Intelligent customer experience platform with AI chatbots and sentiment analysis.',
      features: [
        'AI-powered chatbots with natural language processing',
        'Real-time sentiment analysis and emotion detection',
        'Personalized product recommendations',
        'Omnichannel customer support integration'
      ],
      benefits: [
        '24/7 customer support availability',
        'Improved customer satisfaction and loyalty',
        'Increased conversion rates through personalization',
        'Reduced support costs and faster resolution'
      ],
      pricing: {
        starter: '$1,500/month',
        professional: '$5,000/month',
        enterprise: '$15,000/month'
      },
      useCases: ['E-commerce', 'Healthcare', 'Financial Services', 'Travel & Hospitality'],
      link: '/services/ai-customer-experience-platform'
    },
    {
      id: 'ai-devops-automation-platform',
      name: 'AI DevOps Automation Platform',
      icon: GitBranch,
      category: 'AI & DevOps',
      description: 'AI-powered DevOps platform with intelligent CI/CD and predictive infrastructure.',
      features: [
        'Intelligent CI/CD pipelines with automated testing',
        'Predictive infrastructure management and scaling',
        'Automated security scanning and compliance',
        'Smart monitoring with predictive alerts'
      ],
      benefits: [
        'Faster deployment cycles and reduced errors',
        'Optimized resource usage and cost reduction',
        'Enhanced security and compliance automation',
        'Proactive issue detection and resolution'
      ],
      pricing: {
        starter: '$4,000/month',
        professional: '$15,000/month',
        enterprise: '$45,000/month'
      },
      useCases: ['Technology', 'Financial Services', 'Healthcare', 'E-commerce'],
      link: '/services/ai-devops-automation-platform'
    }
  ];

  const industrySolutions = [
    {
      industry: 'Healthcare',
      icon: Heart,
      description: 'AI-powered solutions for patient care, diagnostics, and healthcare operations.',
      services: [
        'AI Healthcare Platform',
        'AI Customer Experience Platform',
        'AI Business Intelligence Platform',
        'AI Edge Computing Platform'
      ],
      benefits: [
        'Improved patient outcomes and safety',
        'Reduced healthcare costs and inefficiencies',
        'Enhanced diagnostic accuracy and speed',
        'Better resource allocation and planning'
      ]
    },
    {
      industry: 'Financial Services',
      icon: DollarSign,
      description: 'Intelligent solutions for banking, insurance, and financial operations.',
      services: [
        'AI Business Intelligence Platform',
        'AI DevOps Automation Platform',
        'AI Cybersecurity Platform',
        'AI Customer Experience Platform'
      ],
      benefits: [
        'Enhanced risk management and compliance',
        'Improved fraud detection and prevention',
        'Better customer service and engagement',
        'Optimized operational efficiency'
      ]
    },
    {
      industry: 'Manufacturing',
      icon: Factory,
      description: 'Smart manufacturing solutions for Industry 4.0 transformation.',
      services: [
        'AI Edge Computing Platform',
        'AI Supply Chain Optimization',
        'AI Business Intelligence Platform',
        'AI DevOps Automation Platform'
      ],
      benefits: [
        'Predictive maintenance and reduced downtime',
        'Quality control and defect detection',
        'Supply chain optimization and efficiency',
        'Real-time monitoring and analytics'
      ]
    },
    {
      industry: 'E-commerce',
      icon: ShoppingCart,
      description: 'Digital commerce solutions for enhanced customer experience and operations.',
      services: [
        'AI Customer Experience Platform',
        'AI Business Intelligence Platform',
        'AI Edge Computing Platform',
        'AI DevOps Automation Platform'
      ],
      benefits: [
        'Personalized shopping experiences',
        'Improved conversion rates and sales',
        'Enhanced customer support and satisfaction',
        'Optimized inventory and supply chain'
      ]
    }
  ];

  const pricingComparison = [
    {
      service: 'AI Edge Computing Platform',
      starter: '$2,500/month',
      professional: '$8,000/month',
      enterprise: '$25,000/month',
      bestFor: 'IoT and real-time applications'
    },
    {
      service: 'AI Business Intelligence Platform',
      starter: '$3,500/month',
      professional: '$12,000/month',
      enterprise: '$35,000/month',
      bestFor: 'Data-driven decision making'
    },
    {
      service: 'AI Customer Experience Platform',
      starter: '$1,500/month',
      professional: '$5,000/month',
      enterprise: '$15,000/month',
      bestFor: 'Customer engagement and support'
    },
    {
      service: 'AI DevOps Automation Platform',
      starter: '$4,000/month',
      professional: '$15,000/month',
      enterprise: '$45,000/month',
      bestFor: 'Development and operations teams'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2025 | Zion Tech Group"
        description="Discover our revolutionary AI-powered services including Edge Computing, Business Intelligence, Customer Experience, and DevOps Automation platforms. Transform your business with cutting-edge technology."
        keywords="AI services, edge computing, business intelligence, customer experience, DevOps automation, innovative technology, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4 mr-2" />
            Innovative Services Showcase 2025
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Revolutionary
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              AI-Powered Services
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Experience the future of technology with our cutting-edge AI-powered services. 
            From edge computing to customer experience, we're revolutionizing how businesses operate and grow.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
            >
              Start Your Transformation
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Featured AI-Powered Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our revolutionary services that combine artificial intelligence with cutting-edge technology
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Service Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="inline-flex items-center px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full mb-2">
                          {service.category}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 text-lg">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm text-gray-300">
                              • {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Star className="w-5 h-5 text-cyan-400 mr-2" />
                          Key Benefits
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="text-sm text-gray-300">
                              • {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pricing & CTA */}
                  <div className="lg:col-span-1">
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                      <h4 className="text-lg font-semibold text-white mb-4">Pricing Plans</h4>
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Starter:</span>
                          <span className="text-white font-semibold">{service.pricing.starter}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Professional:</span>
                          <span className="text-white font-semibold">{service.pricing.professional}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Enterprise:</span>
                          <span className="text-white font-semibold">{service.pricing.enterprise}</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h5 className="text-sm font-medium text-cyan-400 mb-2">Best For:</h5>
                        <p className="text-sm text-gray-300">{service.useCases.join(', ')}</p>
                      </div>
                      
                      <a
                        href={service.link}
                        className="w-full block text-center py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold mb-3"
                      >
                        Learn More
                      </a>
                      <a
                        href="/contact"
                        className="w-full block text-center py-3 px-6 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI solutions designed for your industry's unique challenges and opportunities
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">
                  {solution.industry}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm">
                  {solution.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-cyan-400 mb-2">Available Services:</h4>
                  <ul className="space-y-1">
                    {solution.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="text-xs text-gray-300">
                        • {service}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-cyan-400 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-gray-300">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Service Pricing Comparison
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the service that best fits your business needs and budget
            </p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-6 text-white font-semibold">Service</th>
                  <th className="text-center p-6 text-white font-semibold">Starter</th>
                  <th className="text-center p-6 text-white font-semibold">Professional</th>
                  <th className="text-center p-6 text-white font-semibold">Enterprise</th>
                  <th className="text-left p-6 text-white font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {pricingComparison.map((service, index) => (
                  <tr key={service.service} className={`border-b border-white/10 ${index % 2 === 0 ? 'bg-white/5' : ''}`}>
                    <td className="p-6 text-white font-medium">{service.service}</td>
                    <td className="p-6 text-center text-cyan-400 font-semibold">{service.starter}</td>
                    <td className="p-6 text-center text-cyan-400 font-semibold">{service.professional}</td>
                    <td className="p-6 text-center text-cyan-400 font-semibold">{service.enterprise}</td>
                    <td className="p-6 text-gray-300 text-sm">{service.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-500/20 to-blue-600/20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join the future of technology with our revolutionary AI-powered services. 
              Experience unprecedented efficiency, intelligence, and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
              >
                Start Your Free Trial
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}