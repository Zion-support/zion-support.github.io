import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Rocket, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  BarChart3, 
  Code, 
  Server, 
  Smartphone, 
  Atom, 
  Star, 
  Target, 
  TrendingUp, 
  Award, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  Workflow, 
  Leaf, 
  Truck, 
  Building, 
  PenTool, 
  Eye, 
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Heart,
  Satellite,
  Wifi,
  Bot,
  Layers,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Atom as AtomIcon,
  Rocket as RocketIcon,
  Leaf as LeafIcon,
  Globe2,
  Handshake,
  FileText,
  Video,
  GraduationCap,
  Palette,
  Camera,
  Music,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Bicycle,
  Motorcycle,
  Truck as TruckIcon,
  Building2,
  Factory,
  Warehouse,
  Store,
  Bank,
  Hospital,
  School,
  University,
  Library,
  Museum,
  Theater,
  Stadium,
  Park,
  Beach,
  Mountain,
  Forest,
  Desert,
  Island,
  Ocean,
  River,
  Lake,
  Stream,
  Waterfall,
  Volcano,
  Cave,
  Canyon,
  Valley,
  Hill,
  Cliff,
  Rock,
  Sand,
  Soil,
  Grass,
  Tree,
  Flower,
  Bush,
  Vine,
  Moss,
  Algae,
  Coral,
  Shell,
  Fish,
  Bird,
  Mammal,
  Reptile,
  Amphibian,
  Insect,
  Arachnid,
  Crustacean,
  Mollusk,
  Worm,
  Bacteria,
  Virus,
  Fungus,
  Protozoa,
  Algae as AlgaeIcon,
  Coral as CoralIcon,
  Shell as ShellIcon,
  Fish as FishIcon,
  Bird as BirdIcon,
  Mammal as MammalIcon,
  Reptile as ReptileIcon,
  Amphibian as AmphibianIcon,
  Insect as InsectIcon,
  Arachnid as ArachnidIcon,
  Crustacean as CrustaceanIcon,
  Mollusk as MolluskIcon,
  Worm as WormIcon,
  Bacteria as BacteriaIcon,
  Virus as VirusIcon,
  Fungus as FungusIcon,
  Protozoa as ProtozoaIcon
} from 'lucide-react';

export default function ZionCuttingEdgeServices2029() {
  const services = [
    // AI-Powered Micro SAAS Solutions
    {
      category: 'AI-Powered Micro SAAS',
      services: [
        {
          name: 'AI Content Creation Studio Pro',
          description: 'Advanced AI-powered content creation platform with multi-format support, SEO optimization, and brand voice consistency.',
          features: [
            'Multi-format content generation (blogs, social media, emails)',
            'SEO optimization and keyword research',
            'Brand voice training and consistency',
            'Plagiarism detection and originality scoring',
            'Content performance analytics',
            'Multi-language support (50+ languages)',
            'API integration for automation',
            'Team collaboration tools'
          ],
          pricing: {
            starter: '$29/month',
            professional: '$79/month',
            enterprise: '$199/month'
          },
          benefits: [
            '10x faster content creation',
            'Improved SEO rankings',
            'Consistent brand messaging',
            'Reduced content costs by 60%',
            '24/7 content generation capability'
          ],
          icon: PenTool,
          color: 'from-blue-500 to-cyan-500',
          link: '/services/ai-content-creation-studio-pro'
        },
        {
          name: 'AI Customer Experience Analytics Platform',
          description: 'Comprehensive customer experience analytics powered by AI, providing real-time insights and predictive analytics.',
          features: [
            'Real-time customer sentiment analysis',
            'Predictive customer behavior modeling',
            'Multi-channel experience tracking',
            'Automated customer journey mapping',
            'AI-powered recommendation engine',
            'Customer churn prediction',
            'Personalization engine',
            'Integration with major CRM platforms'
          ],
          pricing: {
            starter: '$49/month',
            professional: '$129/month',
            enterprise: '$299/month'
          },
          benefits: [
            '30% increase in customer satisfaction',
            '25% reduction in customer churn',
            'Personalized customer experiences',
            'Data-driven decision making',
            'Improved customer lifetime value'
          ],
          icon: Eye,
          color: 'from-purple-500 to-pink-500',
          link: '/services/ai-customer-experience-analytics'
        },
        {
          name: 'AI Financial Risk Management Suite',
          description: 'Advanced financial risk assessment and management platform using AI and machine learning algorithms.',
          features: [
            'Real-time risk monitoring and alerts',
            'AI-powered fraud detection',
            'Portfolio risk assessment',
            'Regulatory compliance monitoring',
            'Stress testing and scenario analysis',
            'Credit risk modeling',
            'Market risk analysis',
            'Automated reporting and compliance'
          ],
          pricing: {
            starter: '$99/month',
            professional: '$249/month',
            enterprise: '$599/month'
          },
          benefits: [
            '40% faster risk detection',
            'Reduced false positives by 60%',
            'Compliance automation',
            'Real-time risk monitoring',
            'Cost savings on manual processes'
          ],
          icon: Shield,
          color: 'from-green-500 to-emerald-500',
          link: '/services/ai-financial-risk-management'
        }
      ]
    },
    // Quantum Computing Solutions
    {
      category: 'Quantum Computing Solutions',
      services: [
        {
          name: 'Quantum AI Trading Platform',
          description: 'Next-generation trading platform leveraging quantum computing for ultra-fast market analysis and trading decisions.',
          features: [
            'Quantum-enhanced market prediction',
            'Real-time portfolio optimization',
            'Quantum risk assessment',
            'High-frequency trading algorithms',
            'Market sentiment analysis',
            'Portfolio rebalancing automation',
            'Risk management tools',
            'Multi-exchange integration'
          ],
          pricing: {
            starter: '$199/month',
            professional: '$499/month',
            enterprise: '$1299/month'
          },
          benefits: [
            '1000x faster market analysis',
            'Improved trading accuracy by 40%',
            'Real-time portfolio optimization',
            'Reduced trading risks',
            'Competitive advantage in markets'
          ],
          icon: Atom,
          color: 'from-orange-500 to-red-500',
          link: '/services/quantum-ai-trading-platform'
        },
        {
          name: 'Quantum Machine Learning Platform',
          description: 'Revolutionary machine learning platform that combines quantum computing with AI for unprecedented computational power.',
          features: [
            'Quantum neural networks',
            'Quantum-enhanced algorithms',
            'Hybrid classical-quantum computing',
            'Quantum data processing',
            'Advanced pattern recognition',
            'Quantum optimization algorithms',
            'Scalable quantum computing',
            'API for quantum applications'
          ],
          pricing: {
            starter: '$299/month',
            professional: '$799/month',
            enterprise: '$1999/month'
          },
          benefits: [
            'Exponential computational speedup',
            'Solving previously intractable problems',
            'Advanced AI capabilities',
            'Future-proof technology',
            'Competitive research advantage'
          ],
          icon: Brain,
          color: 'from-indigo-500 to-purple-500',
          link: '/services/quantum-machine-learning-platform'
        }
      ]
    },
    // Blockchain & Web3 Solutions
    {
      category: 'Blockchain & Web3 Solutions',
      services: [
        {
          name: 'Enterprise Blockchain Platform',
          description: 'Scalable enterprise blockchain solution for secure, transparent, and efficient business operations.',
          features: [
            'Permissioned blockchain networks',
            'Smart contract automation',
            'Supply chain transparency',
            'Digital identity management',
            'Tokenization services',
            'Cross-chain interoperability',
            'Regulatory compliance tools',
            'Enterprise-grade security'
          ],
          pricing: {
            starter: '$79/month',
            professional: '$199/month',
            enterprise: '$499/month'
          },
          benefits: [
            'Enhanced supply chain transparency',
            'Reduced operational costs by 30%',
            'Improved security and trust',
            'Automated compliance processes',
            'New business model opportunities'
          ],
          icon: LinkIcon,
          color: 'from-yellow-500 to-orange-500',
          link: '/services/enterprise-blockchain-platform'
        },
        {
          name: 'DeFi Analytics & Management Suite',
          description: 'Comprehensive DeFi analytics and portfolio management platform for institutional and retail investors.',
          features: [
            'Real-time DeFi protocol monitoring',
            'Yield farming optimization',
            'Portfolio tracking and analytics',
            'Risk assessment tools',
            'Automated trading strategies',
            'Multi-chain support',
            'Tax reporting and compliance',
            'Security monitoring and alerts'
          ],
          pricing: {
            starter: '$39/month',
            professional: '$99/month',
            enterprise: '$249/month'
          },
          benefits: [
            'Optimized DeFi yields',
            'Reduced investment risks',
            'Automated portfolio management',
            'Comprehensive DeFi insights',
            'Regulatory compliance support'
          ],
          icon: TrendingUp,
          color: 'from-green-500 to-blue-500',
          link: '/services/defi-analytics-management'
        }
      ]
    },
    // IoT & Edge Computing
    {
      category: 'IoT & Edge Computing',
      services: [
        {
          name: 'AI-Powered IoT Edge Computing Platform',
          description: 'Intelligent edge computing platform that brings AI processing closer to IoT devices for real-time decision making.',
          features: [
            'Edge AI processing and inference',
            'Real-time data analytics',
            'Predictive maintenance',
            'Device management and monitoring',
            'Security and privacy protection',
            'Scalable edge infrastructure',
            'Integration with cloud platforms',
            'Custom AI model deployment'
          ],
          pricing: {
            starter: '$59/month',
            professional: '$149/month',
            enterprise: '$399/month'
          },
          benefits: [
            'Reduced latency by 90%',
            'Lower bandwidth costs',
            'Real-time decision making',
            'Enhanced privacy and security',
            'Scalable IoT deployments'
          ],
          icon: Cpu,
          color: 'from-blue-500 to-indigo-500',
          link: '/services/ai-iot-edge-computing'
        },
        {
          name: 'Smart City IoT Management Platform',
          description: 'Comprehensive IoT platform for smart city infrastructure management and optimization.',
          features: [
            'Traffic flow optimization',
            'Energy consumption monitoring',
            'Waste management optimization',
            'Public safety monitoring',
            'Environmental monitoring',
            'Smart parking solutions',
            'Public transportation optimization',
            'Citizen engagement platform'
          ],
          pricing: {
            starter: '$199/month',
            professional: '$499/month',
            enterprise: '$1299/month'
          },
          benefits: [
            '20% reduction in energy costs',
            'Improved traffic flow by 30%',
            'Enhanced public safety',
            'Better resource utilization',
            'Improved citizen satisfaction'
          ],
          icon: Building,
          color: 'from-teal-500 to-green-500',
          link: '/services/smart-city-iot-platform'
        }
      ]
    },
    // Cybersecurity & Compliance
    {
      category: 'Cybersecurity & Compliance',
      services: [
        {
          name: 'AI-Powered Cybersecurity Suite',
          description: 'Advanced cybersecurity platform using AI and machine learning for threat detection and prevention.',
          features: [
            'AI-powered threat detection',
            'Behavioral analytics',
            'Automated incident response',
            'Zero-day threat protection',
            'Compliance monitoring',
            'Security assessment tools',
            'Threat intelligence feeds',
            '24/7 security monitoring'
          ],
          pricing: {
            starter: '$89/month',
            professional: '$229/month',
            enterprise: '$599/month'
          },
          benefits: [
            '99.9% threat detection accuracy',
            '60% faster incident response',
            'Reduced false positives',
            'Automated compliance reporting',
            '24/7 security protection'
          ],
          icon: Lock,
          color: 'from-red-500 to-pink-500',
          link: '/services/ai-cybersecurity-suite'
        },
        {
          name: 'ESG Compliance & Reporting Platform',
          description: 'Comprehensive ESG compliance and reporting platform for sustainable business practices.',
          features: [
            'ESG data collection and monitoring',
            'Sustainability reporting automation',
            'Compliance tracking and alerts',
            'Carbon footprint calculation',
            'Social impact measurement',
            'Governance monitoring',
            'Stakeholder engagement tools',
            'Regulatory compliance support'
          ],
          pricing: {
            starter: '$69/month',
            professional: '$179/month',
            enterprise: '$449/month'
          },
          benefits: [
            'Automated compliance reporting',
            'Improved ESG ratings',
            'Enhanced stakeholder trust',
            'Cost savings on manual processes',
            'Competitive advantage in sustainability'
          ],
          icon: Leaf,
          color: 'from-green-500 to-teal-500',
          link: '/services/esg-compliance-platform'
        }
      ]
    },
    // Healthcare & Life Sciences
    {
      category: 'Healthcare & Life Sciences',
      services: [
        {
          name: 'AI Healthcare Analytics Platform',
          description: 'Advanced healthcare analytics platform using AI for patient care optimization and medical research.',
          features: [
            'Patient outcome prediction',
            'Treatment optimization',
            'Medical image analysis',
            'Drug discovery support',
            'Clinical trial optimization',
            'Population health analytics',
            'Healthcare cost optimization',
            'Regulatory compliance support'
          ],
          pricing: {
            starter: '$149/month',
            professional: '$399/month',
            enterprise: '$999/month'
          },
          benefits: [
            'Improved patient outcomes by 25%',
            'Reduced healthcare costs by 20%',
            'Faster drug discovery',
            'Enhanced clinical decision making',
            'Better population health management'
          ],
          icon: Heart,
          color: 'from-pink-500 to-red-500',
          link: '/services/ai-healthcare-analytics'
        },
        {
          name: 'Digital Twin Healthcare Platform',
          description: 'Digital twin technology for personalized healthcare and medical device optimization.',
          features: [
            'Patient digital twin creation',
            'Treatment simulation and testing',
            'Medical device optimization',
            'Personalized medicine support',
            'Clinical trial simulation',
            'Healthcare facility optimization',
            'Predictive health monitoring',
            'Integration with medical devices'
          ],
          pricing: {
            starter: '$199/month',
            professional: '$549/month',
            enterprise: '$1399/month'
          },
          benefits: [
            'Personalized treatment plans',
            'Reduced medical errors',
            'Optimized healthcare delivery',
            'Improved patient outcomes',
            'Cost-effective healthcare solutions'
          ],
          icon: Eye,
          color: 'from-blue-500 to-purple-500',
          link: '/services/digital-twin-healthcare'
        }
      ]
    },
    // Space Technology & Aerospace
    {
      category: 'Space Technology & Aerospace',
      services: [
        {
          name: 'Satellite Data Analytics Platform',
          description: 'Advanced satellite data processing and analytics platform for Earth observation and space applications.',
          features: [
            'Real-time satellite data processing',
            'Earth observation analytics',
            'Climate change monitoring',
            'Agricultural monitoring',
            'Urban development tracking',
            'Disaster response support',
            'Environmental monitoring',
            'Space weather forecasting'
          ],
          pricing: {
            starter: '$299/month',
            professional: '$799/month',
            enterprise: '$1999/month'
          },
          benefits: [
            'Real-time Earth monitoring',
            'Improved disaster response',
            'Environmental protection insights',
            'Agricultural optimization',
            'Urban planning support'
          ],
          icon: Satellite,
          color: 'from-indigo-500 to-blue-500',
          link: '/services/satellite-data-analytics'
        },
        {
          name: 'Space Mission Planning & Optimization',
          description: 'AI-powered space mission planning and optimization platform for satellite operations and space exploration.',
          features: [
            'Mission trajectory optimization',
            'Satellite constellation design',
            'Resource allocation optimization',
            'Risk assessment and mitigation',
            'Mission cost optimization',
            'Launch window optimization',
            'Orbital debris management',
            'Space traffic coordination'
          ],
          pricing: {
            starter: '$399/month',
            professional: '$999/month',
            enterprise: '$2499/month'
          },
          benefits: [
            'Optimized mission success rates',
            'Reduced mission costs',
            'Enhanced space safety',
            'Efficient resource utilization',
            'Competitive space operations'
          ],
          icon: Rocket,
          color: 'from-purple-500 to-pink-500',
          link: '/services/space-mission-planning'
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
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8">
              2029 Cutting-Edge Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              Experience the future of technology with our revolutionary micro SAAS solutions, 
              AI-powered platforms, quantum computing innovations, and cutting-edge IT services 
              that transform businesses and drive exponential growth.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Visit our website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {services.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">{category.category}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Pricing Plans</h4>
                    <div className="space-y-2">
                      {Object.entries(service.pricing).map(([plan, price]) => (
                        <div key={plan} className="flex justify-between items-center text-sm">
                          <span className="text-gray-300 capitalize">{plan}</span>
                          <span className="text-blue-400 font-semibold">{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2 text-gray-300 text-sm">
                          <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center">
                    <a
                      href={service.link}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the future of technology with Zion Tech Group's cutting-edge solutions. 
            Our innovative services are designed to drive growth, efficiency, and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Get Started Today</span>
            </a>
            <a
              href="/services"
              className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
              <span>Explore All Services</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-zion-slate-dark border-t border-white/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Leading the future of technology with cutting-edge AI solutions, quantum computing, 
              and innovative micro SAAS services that transform businesses and drive exponential growth.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                Contact Us
              </a>
              <a href="/services" className="text-blue-400 hover:text-blue-300 transition-colors">
                Our Services
              </a>
              <a href="/about" className="text-blue-400 hover:text-blue-300 transition-colors">
                About Us
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Placeholder icon components
const LinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);