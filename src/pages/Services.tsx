import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Zap, 
  Bot, 
  BarChart3, 
  Shield, 
  Cloud,
  Wifi,
  Coins,
  Cpu,
  Rocket,
  Brain,
  Monitor,
  Network,
  ArrowRight,
  Phone,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services: React.FC = () => {
  const aiServices = [
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation',
      description: 'Transform your business processes with intelligent automation that reduces costs by 75% and increases efficiency by 10x.',
      icon: Zap,
      link: '/services/ai-workflow-automation',
      color: 'from-blue-600 to-purple-600',
      price: 'From $2,500/month',
      features: ['Process Discovery', 'Smart Automation Rules', 'Real-time Analytics', '24/7 Operations']
    },
    {
      id: 'ai-virtual-assistant',
      title: 'AI Virtual Assistant',
      description: 'Deploy AI-powered virtual assistants that handle customer inquiries 24/7 with 95% accuracy and 120+ language support.',
      icon: Bot,
      link: '/services/ai-virtual-assistant',
      color: 'from-purple-600 to-pink-600',
      price: 'From $1,500/month',
      features: ['Natural Language Processing', 'Multi-Channel Support', '24/7 Availability', 'Human Handoff']
    },
    {
      id: 'ai-data-analytics',
      title: 'AI Data Analytics',
      description: 'Turn raw data into actionable insights with advanced machine learning and predictive analytics.',
      icon: BarChart3,
      link: '/services/ai-data-analytics',
      color: 'from-green-600 to-teal-600',
      price: 'From $3,500/month',
      features: ['Predictive Analytics', 'Real-time Insights', 'Data Visualization', 'Automated Reporting']
    },
    {
      id: 'ai-mlops',
      title: 'AI/ML Operations',
      description: 'End-to-end MLOps platform for deploying, monitoring, and scaling machine learning models in production.',
      icon: Cpu,
      link: '/services/ai-mlops-automation',
      color: 'from-orange-600 to-red-600',
      price: 'From $5,000/month',
      features: ['Model Deployment', 'Automated Training', 'Performance Monitoring', 'A/B Testing']
    }
  ];

  const itServices = [
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Expert cloud infrastructure and DevOps services that deliver 99.99% uptime, 90% faster deployments, and 40% cost reduction.',
      icon: Cloud,
      link: '/services/cloud-devops',
      color: 'from-green-600 to-blue-600',
      price: 'From $3,500/month',
      features: ['Multi-Cloud Strategy', 'CI/CD Automation', 'Infrastructure as Code', 'Auto-Scaling']
    },
    {
      id: 'iot-edge-computing',
      title: 'IoT & Edge Computing',
      description: 'Advanced IoT and edge computing solutions with real-time AI processing, 5G integration, and global connectivity.',
      icon: Wifi,
      link: '/services/iot-edge-computing',
      color: 'from-orange-600 to-red-600',
      price: 'From $5,000/month',
      features: ['Edge AI Processing', '5G Integration', 'Real-time Analytics', 'Global Connectivity']
    },
    {
      id: 'blockchain-web3',
      title: 'Blockchain & Web3',
      description: 'Expert blockchain and Web3 services including DeFi protocols, NFT marketplaces, DAO governance, and smart contract development.',
      icon: Coins,
      link: '/services/blockchain-web3',
      color: 'from-indigo-600 to-purple-600',
      price: 'From $8,500/month',
      features: ['Smart Contract Development', 'DeFi Protocols', 'NFT Marketplaces', 'DAO Governance']
    },
    {
      id: 'cybersecurity',
      title: 'Advanced Cybersecurity AI',
      description: 'AI-powered security solutions that detect and prevent threats in real-time with 99.9% accuracy and zero false positives.',
      icon: Shield,
      link: '/services/advanced-cybersecurity-ai',
      color: 'from-red-600 to-orange-600',
      price: 'From $4,500/month',
      features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Compliance Monitoring']
    }
  ];

  const emergingTechServices = [
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Cutting-edge quantum computing solutions for optimization, cryptography, and complex problem-solving.',
      icon: Brain,
      link: '/quantum-computing',
      color: 'from-purple-600 to-indigo-600',
      price: 'From $15,000/month',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Research & Development']
    },
    {
      id: 'space-technology',
      title: 'Space Technology',
      description: 'Satellite systems, space data analytics, and space-based IoT solutions for global connectivity and monitoring.',
      icon: Rocket,
      link: '/space-tech',
      color: 'from-blue-600 to-indigo-600',
      price: 'From $25,000/month',
      features: ['Satellite Systems', 'Space Data Analytics', 'Global Connectivity', 'Earth Observation']
    },
    {
      id: 'digital-twin',
      title: 'Digital Twin Solutions',
      description: 'Create digital replicas of physical assets for real-time monitoring, simulation, and predictive maintenance.',
      icon: Monitor,
      link: '/digital-twin',
      color: 'from-teal-600 to-green-600',
      price: 'From $7,500/month',
      features: ['Real-time Monitoring', 'Predictive Maintenance', 'Simulation', 'Performance Optimization']
    },
    {
      id: 'autonomous-systems',
      title: 'Autonomous Systems',
      description: 'AI-powered autonomous systems for vehicles, drones, and robotics with advanced decision-making capabilities.',
      icon: Network,
      link: '/services/ai-autonomous-operations',
      color: 'from-gray-600 to-blue-600',
      price: 'From $12,000/month',
      features: ['Autonomous Vehicles', 'Drone Systems', 'Robotics', 'Decision Making']
    }
  ];

  const stats = [
    { number: "500+", label: "Successful Projects", icon: CheckCircle },
    { number: "99.9%", label: "Client Satisfaction", icon: Star },
    { number: "$2B+", label: "Cost Savings Delivered", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Monitor }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | Comprehensive AI & IT Solutions</title>
        <meta
          name="description"
          content="Explore our comprehensive AI and IT services including workflow automation, virtual assistants, cloud DevOps, IoT, blockchain, and emerging technologies."
        />
        <meta name="keywords" content="AI services, IT solutions, cloud computing, DevOps, IoT, blockchain, Web3, cybersecurity, quantum computing, space technology" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Comprehensive AI and IT solutions designed to transform your business operations and drive measurable results across all industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Started Today
                </a>
                <a
                  href="#ai-services"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold rounded-lg transition-colors"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section id="ai-services" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                AI & Machine Learning Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence and machine learning solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.id}
                    to={service.link}
                    className="group block"
                  >
                    <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl h-full`}>
                      <Icon className="w-12 h-12 mb-6 text-white/90" />
                      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                      <p className="text-white/90 mb-4 text-sm">
                        {service.description}
                      </p>
                      <div className="text-white/80 text-sm font-semibold mb-4">{service.price}</div>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 mr-2 text-white/80" />
                            <span className="text-white/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="inline-flex items-center text-white font-semibold">
                        Learn More
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                IT Infrastructure & Technology Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive IT solutions for modern enterprises with enterprise-grade reliability and security.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.id}
                    to={service.link}
                    className="group block"
                  >
                    <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl h-full`}>
                      <Icon className="w-12 h-12 mb-6 text-white/90" />
                      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                      <p className="text-white/90 mb-4 text-sm">
                        {service.description}
                      </p>
                      <div className="text-white/80 text-sm font-semibold mb-4">{service.price}</div>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 mr-2 text-white/80" />
                            <span className="text-white/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="inline-flex items-center text-white font-semibold">
                        Learn More
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Emerging Technologies Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Emerging Technologies & Future Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay ahead of the curve with cutting-edge technologies that will define the future of business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {emergingTechServices.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.id}
                    to={service.link}
                    className="group block"
                  >
                    <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl h-full`}>
                      <Icon className="w-12 h-12 mb-6 text-white/90" />
                      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                      <p className="text-white/90 mb-4 text-sm">
                        {service.description}
                      </p>
                      <div className="text-white/80 text-sm font-semibold mb-4">{service.price}</div>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 mr-2 text-white/80" />
                            <span className="text-white/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="inline-flex items-center text-white font-semibold">
                        Learn More
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join hundreds of companies already using our comprehensive AI and IT solutions to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold rounded-lg transition-colors"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Services;
