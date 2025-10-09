'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Atom } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const SpecializedServicesPage: React.FC = () => {
  const specializedServices = [
    {
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum algorithms and quantum security implementations',
      icon: Atom,
      price: 'Custom Pricing',
      features: ['Quantum Algorithm Development', 'Quantum Security', 'Optimization Problems', 'Research & Development', 'Quantum Machine Learning', 'Cryptography'],
      benefits: ['Exponential speedup', 'Unbreakable security', 'Future-proof technology', 'Competitive advantage'],
      color: 'text-yellow-400',
      category: 'Quantum',
      marketPrice: '$50,000/month',
      savings: 'Contact for pricing',
      demoUrl: 'https://demo.ziontechgroup.com/quantum-computing',
      caseStudy: 'https://ziontechgroup.com/case-studies/quantum-optimization',
      supportEmail: 'quantum@ziontechgroup.com',
      technologies: ['Qiskit', 'Cirq', 'PennyLane', 'Q#', 'Quantum Annealing', 'IBM Quantum'],
      applications: ['Financial Modeling', 'Drug Discovery', 'Cryptography', 'Optimization', 'Machine Learning']
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing and self-optimizing systems for enterprise operations',
      icon: Cpu,
      price: 'Custom Pricing',
      features: ['Self-Healing Systems', 'Predictive Maintenance', 'Resource Optimization', 'Performance Monitoring', 'Adaptive Learning', 'Intelligent Automation'],
      benefits: ['Zero-downtime operations', 'Predictive maintenance', 'Cost optimization', 'Scalable intelligence'],
      color: 'text-green-400',
      category: 'Autonomous',
      marketPrice: '$30,000/month',
      savings: 'Contact for pricing',
      demoUrl: 'https://demo.ziontechgroup.com/autonomous-systems',
      caseStudy: 'https://ziontechgroup.com/case-studies/autonomous-manufacturing',
      supportEmail: 'autonomous@ziontechgroup.com',
      technologies: ['Machine Learning', 'IoT', 'Edge Computing', 'Reinforcement Learning', 'Digital Twins'],
      applications: ['Manufacturing', 'Supply Chain', 'Energy Management', 'Smart Cities', 'Transportation']
    },
    {
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions, smart contracts, and Web3 applications',
      icon: Lock,
      price: '$2,999/month',
      features: ['Smart Contract Development', 'DApp Creation', 'Token Economics', 'DeFi Solutions', 'NFT Platforms', 'DAO Implementation'],
      benefits: ['Decentralized security', 'Transparent operations', 'Tokenization', 'Community governance'],
      color: 'text-purple-400',
      category: 'Blockchain',
      marketPrice: '$5,000/month',
      savings: '$2,000/month',
      demoUrl: 'https://demo.ziontechgroup.com/blockchain',
      caseStudy: 'https://ziontechgroup.com/case-studies/blockchain-supply-chain',
      supportEmail: 'blockchain@ziontechgroup.com',
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'MetaMask', 'Truffle'],
      applications: ['Supply Chain', 'Finance', 'Gaming', 'Real Estate', 'Identity Management']
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Connected devices and edge computing solutions',
      icon: Globe,
      price: '$1,999/month',
      features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Security Implementation', 'Data Collection', 'Remote Monitoring'],
      benefits: ['Real-time insights', 'Reduced latency', 'Cost efficiency', 'Scalable connectivity'],
      color: 'text-cyan-400',
      category: 'IoT',
      marketPrice: '$3,500/month',
      savings: '$1,500/month',
      demoUrl: 'https://demo.ziontechgroup.com/iot-edge',
      caseStudy: 'https://ziontechgroup.com/case-studies/iot-smart-city',
      supportEmail: 'iot@ziontechgroup.com',
      technologies: ['MQTT', 'CoAP', 'LoRaWAN', '5G', 'Edge AI', 'Time Series DB'],
      applications: ['Smart Cities', 'Industrial IoT', 'Agriculture', 'Healthcare', 'Energy']
    },
    {
      title: 'Business Intelligence',
      description: 'Data-driven insights and predictive analytics for decision-making',
      icon: BarChart,
      price: '$2,299/month',
      features: ['Data Warehousing', 'ETL Processes', 'Advanced Analytics', 'Executive Dashboards', 'Predictive Modeling', 'Real-time Reporting'],
      benefits: ['Data-driven decisions', 'Predictive insights', 'Real-time analytics', 'Competitive intelligence'],
      color: 'text-blue-400',
      category: 'Analytics',
      marketPrice: '$4,000/month',
      savings: '$1,700/month',
      demoUrl: 'https://demo.ziontechgroup.com/business-intelligence',
      caseStudy: 'https://ziontechgroup.com/case-studies/bi-retail',
      supportEmail: 'bi@ziontechgroup.com',
      technologies: ['Power BI', 'Tableau', 'Looker', 'Apache Kafka', 'Apache Spark', 'Snowflake'],
      applications: ['Retail Analytics', 'Financial Reporting', 'Marketing Intelligence', 'Operations', 'Customer Insights']
    },
    {
      title: 'Robotics Solutions',
      description: 'Intelligent robotic solutions for manufacturing and service industries',
      icon: Settings,
      price: 'Custom Pricing',
      features: ['Robotic Process Automation', 'Computer Vision Integration', 'Human-Robot Collaboration', 'Maintenance Systems', 'Quality Control', 'Assembly Automation'],
      benefits: ['Increased productivity', 'Consistent quality', '24/7 operation', 'Cost reduction'],
      color: 'text-orange-400',
      category: 'Robotics',
      marketPrice: '$25,000/month',
      savings: 'Contact for pricing',
      demoUrl: 'https://demo.ziontechgroup.com/robotics',
      caseStudy: 'https://ziontechgroup.com/case-studies/robotics-manufacturing',
      supportEmail: 'robotics@ziontechgroup.com',
      technologies: ['ROS', 'OpenCV', 'TensorFlow', 'Gazebo', 'MoveIt', 'Industrial Robots'],
      applications: ['Manufacturing', 'Warehousing', 'Healthcare', 'Agriculture', 'Service Industry']
    },
    {
      title: 'Augmented Reality (AR) Solutions',
      description: 'Immersive AR experiences for training, visualization, and customer engagement',
      icon: Eye,
      price: '$3,500/month',
      features: ['AR App Development', '3D Visualization', 'Remote Assistance', 'Training Simulations', 'Product Visualization', 'Spatial Computing'],
      benefits: ['Enhanced user experience', 'Improved training', 'Remote collaboration', 'Cost-effective visualization'],
      color: 'text-pink-400',
      category: 'AR/VR',
      marketPrice: '$6,000/month',
      savings: '$2,500/month',
      demoUrl: 'https://demo.ziontechgroup.com/ar-solutions',
      caseStudy: 'https://ziontechgroup.com/case-studies/ar-manufacturing',
      supportEmail: 'ar@ziontechgroup.com',
      technologies: ['Unity', 'Unreal Engine', 'ARKit', 'ARCore', 'WebXR', 'OpenXR'],
      applications: ['Manufacturing', 'Healthcare', 'Education', 'Retail', 'Real Estate']
    },
    {
      title: 'Virtual Reality (VR) Solutions',
      description: 'Immersive VR experiences for training, entertainment, and virtual collaboration',
      icon: Video,
      price: '$4,000/month',
      features: ['VR App Development', 'Virtual Environments', 'Multi-user VR', 'Haptic Feedback', 'Motion Tracking', 'Virtual Meetings'],
      benefits: ['Immersive training', 'Remote collaboration', 'Cost-effective simulation', 'Enhanced engagement'],
      color: 'text-indigo-400',
      category: 'AR/VR',
      marketPrice: '$7,000/month',
      savings: '$3,000/month',
      demoUrl: 'https://demo.ziontechgroup.com/vr-solutions',
      caseStudy: 'https://ziontechgroup.com/case-studies/vr-training',
      supportEmail: 'vr@ziontechgroup.com',
      technologies: ['Unity', 'Unreal Engine', 'Oculus SDK', 'SteamVR', 'WebXR', 'OpenXR'],
      applications: ['Training', 'Entertainment', 'Healthcare', 'Architecture', 'Education']
    },
    {
      title: 'Digital Twin Solutions',
      description: 'Real-time digital replicas of physical systems for monitoring and optimization',
      icon: Database,
      price: '$2,800/month',
      features: ['Real-time Monitoring', 'Predictive Analytics', 'Simulation', 'Optimization', 'Maintenance Planning', 'Performance Analysis'],
      benefits: ['Predictive maintenance', 'Optimized operations', 'Reduced downtime', 'Cost savings'],
      color: 'text-teal-400',
      category: 'Digital Twin',
      marketPrice: '$4,500/month',
      savings: '$1,700/month',
      demoUrl: 'https://demo.ziontechgroup.com/digital-twin',
      caseStudy: 'https://ziontechgroup.com/case-studies/digital-twin-manufacturing',
      supportEmail: 'digitaltwin@ziontechgroup.com',
      technologies: ['IoT', 'Machine Learning', '3D Modeling', 'Real-time Analytics', 'Cloud Computing'],
      applications: ['Manufacturing', 'Smart Cities', 'Energy', 'Transportation', 'Healthcare']
    }
  ];

  const categories = [
    { name: 'All', count: specializedServices.length },
    { name: 'Quantum', count: specializedServices.filter(s => s.category === 'Quantum').length },
    { name: 'Autonomous', count: specializedServices.filter(s => s.category === 'Autonomous').length },
    { name: 'Blockchain', count: specializedServices.filter(s => s.category === 'Blockchain').length },
    { name: 'IoT', count: specializedServices.filter(s => s.category === 'IoT').length },
    { name: 'Analytics', count: specializedServices.filter(s => s.category === 'Analytics').length },
    { name: 'Robotics', count: specializedServices.filter(s => s.category === 'Robotics').length },
    { name: 'AR/VR', count: specializedServices.filter(s => s.category === 'AR/VR').length },
    { name: 'Digital Twin', count: specializedServices.filter(s => s.category === 'Digital Twin').length }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Cutting-Edge Technology',
      description: 'Access to the latest and most advanced technologies in the market'
    },
    {
      icon: Shield,
      title: 'Future-Proof Solutions',
      description: 'Solutions designed to evolve with your business and technology landscape'
    },
    {
      icon: Clock,
      title: 'Expert R&D Team',
      description: 'World-class researchers and engineers working on next-generation solutions'
    },
    {
      icon: Users,
      title: 'Custom Implementation',
      description: 'Tailored solutions designed specifically for your unique business requirements'
    }
  ];

  const caseStudies = [
    {
      title: 'Quantum Optimization Success',
      description: 'Implemented quantum algorithms for portfolio optimization, achieving 40% better returns.',
      company: 'Investment Firm',
      results: ['40% better returns', 'Quantum advantage', 'Risk reduction', 'Scalable solution'],
      link: '/case-studies/quantum-optimization'
    },
    {
      title: 'Autonomous Manufacturing',
      description: 'Deployed self-managing production lines, reducing downtime by 80% and increasing efficiency by 60%.',
      company: 'Manufacturing Giant',
      results: ['80% downtime reduction', '60% efficiency increase', 'Predictive maintenance', 'Cost savings'],
      link: '/case-studies/autonomous-manufacturing'
    },
    {
      title: 'Blockchain Supply Chain',
      description: 'Implemented blockchain for supply chain transparency, reducing fraud by 95% and improving traceability.',
      company: 'Global Retailer',
      results: ['95% fraud reduction', 'Complete traceability', 'Cost savings', 'Customer trust'],
      link: '/case-studies/blockchain-supply-chain'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Specialized Solutions - Zion Tech Group"
        description="Cutting-edge specialized solutions including quantum computing, autonomous systems, blockchain, IoT, and AR/VR. Transform your business with next-generation technologies."
        keywords={['quantum computing', 'autonomous systems', 'blockchain', 'IoT', 'AR VR', 'digital twin', 'specialized solutions']}
        canonicalUrl="https://ziontechgroup.com/specialized-services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Specialized Solutions">
              Specialized Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
              Next-Generation Technologies
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with cutting-edge specialized solutions. From quantum computing and autonomous systems 
              to blockchain and AR/VR, we deliver the technologies of tomorrow, today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Specialized Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">9+</div>
                <div className="text-sm text-gray-300">Specialized Categories</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$25,000+</div>
                <div className="text-sm text-gray-300">Monthly Savings</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
                <div className="text-sm text-gray-300">Custom Solutions</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-sm text-gray-300">R&D Support</div>
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="mb-16">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="cyber-card px-6 py-3 hover:scale-105 transition-all duration-300"
                >
                  <span className="text-white font-medium">{category.name}</span>
                  <span className="text-cyan-400 ml-2">({category.count})</span>
                </button>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializedServices.map((service, index) => (
                <article key={index} className="quantum-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className={`text-3xl font-bold neon-text ${service.color}`}>{service.price}</span>
                      {service.marketPrice !== 'Contact for pricing' && (
                        <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                      )}
                    </div>
                    <div className="text-sm text-green-400 font-semibold">
                      {service.savings}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Applications */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-pink-400 mb-3">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.applications.map((app, appIndex) => (
                        <span key={appIndex} className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-yellow-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <a 
                      href={service.link} 
                      className={`w-full px-4 py-3 text-center block transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900 rounded-lg`}
                    >
                      Learn More
                    </a>
                    <div className="grid grid-cols-2 gap-2">
                      <a 
                        href={service.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center px-3 py-2 text-sm text-cyan-400 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                      >
                        Demo
                      </a>
                      <a 
                        href={service.caseStudy}
                        className="text-center px-3 py-2 text-sm text-purple-400 border border-purple-400 rounded-lg hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                      >
                        Case Study
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Case Studies Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Innovation Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{study.description}</p>
                  <div className="mb-4">
                    <div className="text-sm text-cyan-400 font-semibold mb-2">Results:</div>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a 
                    href={study.link}
                    className="text-cyan-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    Read Full Case Study →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Our Specialized Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Lead with Innovation?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Get started with our specialized solutions today and become a technology leader in your industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SpecializedServicesPage;