import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Atom, 
  Space, 
  Shield, 
  Heart, 
  Leaf, 
  Lock, 
  Globe, 
  Rocket, 
  Zap,
  ArrowRight,
  CheckCircle,
  Users,
  Building,
  TrendingUp,
  Target,
  Lightbulb,
  Sparkles,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  BarChart3,
  Cpu,
  Database,
  Network,
  Code,
  Server,
  Chip
} from 'lucide-react';
import { REVOLUTIONARY_SERVICES_2025 } from '../data/revolutionaryServices2025';
import { SEO } from '../components/SEO';

const Solutions: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState('ai-automation');

  const solutions = [
    {
      id: 'ai-automation',
      title: 'AI & Automation Solutions',
      description: 'Transform your business with intelligent automation powered by cutting-edge AI technology.',
      icon: Brain,
      color: 'from-purple-500 to-cyan-500',
      category: 'AI & Automation',
      services: REVOLUTIONARY_SERVICES_2025.filter(s => s.category === 'AI & Automation'),
      features: [
        'Fully autonomous business operations',
        'AI-powered decision making',
        'Predictive analytics and insights',
        'Intelligent workflow orchestration',
        'Continuous learning and optimization',
        'Real-time business intelligence'
      ],
      benefits: [
        '100% autonomous operations',
        '80% reduction in manual tasks',
        'Real-time optimization',
        'Predictive problem prevention',
        'Scalable AI infrastructure'
      ],
      useCases: [
        'Business process automation',
        'Customer service automation',
        'Supply chain optimization',
        'Financial management',
        'Marketing automation',
        'HR process automation'
      ],
      industries: ['Manufacturing', 'Healthcare', 'Finance', 'Retail', 'Logistics', 'Technology']
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Solutions',
      description: 'Harness the power of quantum computing to solve complex problems that are impossible for classical computers.',
      icon: Quantum,
      color: 'from-purple-500 to-pink-500',
      category: 'Quantum Computing',
      services: REVOLUTIONARY_SERVICES_2025.filter(s => s.category === 'Quantum Computing'),
      features: [
        'Quantum-powered algorithms',
        'Exponential speed improvement',
        'Quantum machine learning',
        'Quantum optimization',
        'Quantum cryptography',
        'Quantum simulation'
      ],
      benefits: [
        'Exponential performance gains',
        'Solving impossible problems',
        'Future-proof technology',
        'Quantum advantage',
        'Unprecedented accuracy'
      ],
      useCases: [
        'Drug discovery and development',
        'Financial modeling and trading',
        'Climate prediction and modeling',
        'Material science research',
        'Logistics optimization',
        'Cryptography and security'
      ],
      industries: ['Pharmaceuticals', 'Finance', 'Research', 'Government', 'Technology', 'Energy']
    },
    {
      id: 'space-technology',
      title: 'Space Technology Solutions',
      description: 'Revolutionary space exploration and satellite technology for the next generation of space operations.',
      icon: Space,
      color: 'from-blue-500 to-indigo-500',
      category: 'Space Technology',
      services: REVOLUTIONARY_SERVICES_2025.filter(s => s.category === 'Space Technology'),
      features: [
        'Satellite constellation management',
        'Space debris tracking',
        'Orbital optimization',
        'Space weather prediction',
        'Quantum space communication',
        'Autonomous space operations'
      ],
      benefits: [
        '100% satellite uptime',
        'Optimal orbital efficiency',
        'Space debris avoidance',
        'Enhanced communication reliability',
        'Cost-effective space operations'
      ],
      useCases: [
        'Satellite operations',
        'Space exploration',
        'Communication networks',
        'Earth observation',
        'Space research',
        'Interplanetary missions'
      ],
      industries: ['Space Agencies', 'Telecommunications', 'Research', 'Government', 'Defense', 'Aerospace']
    },
    {
      id: 'cybersecurity',
      title: 'AI-Powered Cybersecurity Solutions',
      description: 'Next-generation cybersecurity that uses AI to predict, prevent, and respond to threats with unprecedented accuracy.',
      icon: Shield,
      color: 'from-green-500 to-blue-500',
      category: 'Cybersecurity',
      services: REVOLUTIONARY_SERVICES_2025.filter(s => s.category === 'Cybersecurity'),
      features: [
        'AI-powered threat detection',
        'Predictive security analytics',
        'Automated incident response',
        'Zero-day vulnerability prediction',
        'Quantum encryption',
        'Behavioral analysis'
      ],
      benefits: [
        '99.99% threat detection rate',
        'Zero false positives',
        'Automated incident response',
        'Predictive threat prevention',
        '24/7 security monitoring'
      ],
      useCases: [
        'Enterprise security',
        'Government security',
        'Financial security',
        'Healthcare security',
        'Critical infrastructure',
        'Cloud security'
      ],
      industries: ['Finance', 'Healthcare', 'Government', 'Technology', 'Manufacturing', 'Energy']
    },
    {
      id: 'healthcare-ai',
      title: 'AI Healthcare Revolution',
      description: 'Transform healthcare with AI-powered diagnosis, treatment, and patient care solutions.',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      category: 'AI & Healthcare',
      services: REVOLUTIONARY_SERVICES_2025.filter(s => s.category === 'AI & Healthcare'),
      features: [
        'AI-powered disease diagnosis',
        'Predictive health analytics',
        'Personalized treatment plans',
        'Real-time patient monitoring',
        'Drug discovery acceleration',
        'Medical image analysis'
      ],
      benefits: [
        '99.9% diagnosis accuracy',
        '50% faster treatment planning',
        'Predictive health prevention',
        'Personalized medicine',
        'Reduced healthcare costs'
      ],
      useCases: [
        'Hospital management',
        'Clinical decision support',
        'Patient monitoring',
        'Drug development',
        'Preventive healthcare',
        'Medical research'
      ],
      industries: ['Healthcare', 'Pharmaceuticals', 'Research', 'Insurance', 'Medical Devices', 'Telemedicine']
    },
    {
      id: 'sustainable-tech',
      title: 'Sustainable Technology Solutions',
      description: 'Implement sustainable technology solutions that reduce environmental impact while improving business efficiency.',
      icon: Leaf,
      color: 'from-green-500 to-emerald-500',
      category: 'Green Technology',
      services: REVOLUTIONARY_SERVICES_2025.filter(s => s.category === 'Green Technology'),
      features: [
        'Carbon footprint tracking',
        'Energy optimization',
        'Sustainable supply chain management',
        'Green building automation',
        'Waste reduction analytics',
        'Renewable energy integration'
      ],
      benefits: [
        '50% reduction in carbon footprint',
        '30% energy cost savings',
        'Improved sustainability ratings',
        'Regulatory compliance',
        'Enhanced brand reputation'
      ],
      useCases: [
        'Corporate sustainability',
        'Green building management',
        'Supply chain optimization',
        'Environmental compliance',
        'ESG reporting',
        'Renewable energy'
      ],
      industries: ['Manufacturing', 'Real Estate', 'Energy', 'Transportation', 'Retail', 'Technology']
    },
    {
      id: 'edge-computing',
      title: 'IoT & Edge Computing Solutions',
      description: 'Next-generation IoT platform that processes data at the edge using AI for real-time decision making.',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      category: 'Edge Computing',
      services: REVOLUTIONARY_SERVICES_2025.filter(s => s.category === 'Edge Computing'),
      features: [
        'Edge AI processing',
        'Real-time data analytics',
        'Device management',
        'Predictive maintenance',
        'Energy optimization',
        'Security monitoring'
      ],
      benefits: [
        '99% latency reduction',
        'Real-time decision making',
        'Predictive maintenance',
        'Energy cost savings',
        'Scalable IoT deployment'
      ],
      useCases: [
        'Smart cities',
        'Industrial IoT',
        'Smart homes',
        'Connected vehicles',
        'Healthcare monitoring',
        'Manufacturing automation'
      ],
      industries: ['Manufacturing', 'Smart Cities', 'Healthcare', 'Automotive', 'Energy', 'Retail']
    },
    {
      id: 'blockchain-ai',
      title: 'Blockchain AI Integration',
      description: 'Revolutionary platform that combines blockchain technology with AI for secure, transparent, and intelligent applications.',
      icon: Lock,
      color: 'from-green-500 to-emerald-500',
      category: 'Blockchain',
      services: REVOLUTIONARY_SERVICES_2025.filter(s => s.category === 'Blockchain'),
      features: [
        'AI-powered smart contracts',
        'Decentralized AI training',
        'Blockchain analytics',
        'DeFi optimization',
        'NFT intelligence',
        'Cross-chain interoperability'
      ],
      benefits: [
        '100% transparent operations',
        'AI-enhanced security',
        'Automated governance',
        'Cross-chain compatibility',
        'Future-proof technology'
      ],
      useCases: [
        'DeFi platforms',
        'NFT marketplaces',
        'Supply chain tracking',
        'Voting systems',
        'Identity management',
        'Decentralized applications'
      ],
      industries: ['Finance', 'Gaming', 'Art', 'Supply Chain', 'Government', 'Technology']
    }
  ];

  const activeSolutionData = solutions.find(s => s.id === activeSolution) || solutions[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Solutions - Zion Tech Group"
        description="Discover our comprehensive solutions across AI, Quantum Computing, Space Technology, Cybersecurity, Healthcare, and more. Transform your business with cutting-edge technology."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              From AI automation to quantum computing, space technology to sustainable solutions. 
              We provide end-to-end technology solutions that transform businesses and industries.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Solutions Navigation */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {solutions.map((solution) => (
            <button
              key={solution.id}
              onClick={() => setActiveSolution(solution.id)}
              className={`group px-6 py-3 rounded-xl transition-all duration-300 ${
                activeSolution === solution.id
                  ? 'bg-gradient-to-r ' + solution.color + ' text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/20'
              }`}
            >
              <div className="flex items-center space-x-2">
                <solution.icon className="w-5 h-5" />
                <span className="font-medium">{solution.title.split(' ')[0]}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Solution Details */}
        <motion.div
          key={activeSolution}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-md rounded-2xl p-8 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Solution Overview */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${activeSolutionData.color}`}>
                  <activeSolutionData.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{activeSolutionData.title}</h2>
                  <p className="text-gray-400">{activeSolutionData.category}</p>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {activeSolutionData.description}
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-cyan-400" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {activeSolutionData.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                  Key Benefits
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {activeSolutionData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Use Cases and Industries */}
            <div>
              {/* Use Cases */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-purple-400" />
                  Use Cases
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {activeSolutionData.useCases.map((useCase, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Building className="w-5 h-5 mr-2 text-blue-400" />
                  Target Industries
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {activeSolutionData.industries.map((industry, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Services */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                  Related Services
                </h3>
                <div className="space-y-3">
                  {activeSolutionData.services.slice(0, 3).map((service) => (
                    <div key={service.id} className="bg-white/5 rounded-lg p-3">
                      <h4 className="text-white font-medium mb-1">{service.title}</h4>
                      <p className="text-gray-400 text-sm mb-2">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 font-bold">${service.price.toLocaleString()}/month</span>
                        <Link
                          to={`/services/${service.id}`}
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  ))}
                  {activeSolutionData.services.length > 3 && (
                    <div className="text-center">
                      <Link
                        to="/revolutionary-services"
                        className="text-cyan-400 hover:text-cyan-300 font-medium"
                      >
                        View All {activeSolutionData.services.length} Services →
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive solutions can help you achieve 
              unprecedented success in your industry.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-white">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-white">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-white">Middletown, DE 19709</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Lightbulb className="w-5 h-5 mr-2" />
                Request Custom Solution
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Solutions;