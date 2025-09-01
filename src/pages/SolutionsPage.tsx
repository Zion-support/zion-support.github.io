import React from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Shield,
  Cloud,
  Workflow,
  Briefcase,
  Package,
  Target,
  Heart,
  DollarSign,
  Building,
  ShoppingCart,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Lock,
  Database,
  Network,
  Smartphone,
  Code,
  Server,
  Cpu,
  Wifi,
  Bot,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  BarChart3,
  Users2,
  Settings,
  Palette,
  Rocket,
  Award,
  TrendingUp,
  GraduationCap,
  MessageCircle,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
} from 'lucide-react';

export default function SolutionsPage() {
  const industrySolutions = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: Heart,
      description: 'AI-powered healthcare solutions for improved patient care and operational efficiency',
      color: 'from-red-500 to-pink-500',
      solutions: [
        'AI-powered diagnostic tools',
        'Patient data management systems',
        'Telemedicine platforms',
        'Healthcare analytics',
        'Compliance management',
        'Supply chain optimization'
      ],
      benefits: [
        'Improved patient outcomes',
        'Reduced operational costs',
        'Enhanced data security',
        'Streamlined workflows'
      ],
    },
    {
      id: 'finance',
      name: 'Financial Services',
      icon: DollarSign,
      description: 'Secure financial technology solutions for modern banking and fintech',
      color: 'from-green-500 to-emerald-500',
      solutions: [
        'Digital banking platforms',
        'Fraud detection systems',
        'Risk management tools',
        'Payment processing',
        'Regulatory compliance',
        'Investment analytics'
      ],
      benefits: [
        'Enhanced security',
        'Improved compliance',
        'Better customer experience',
        'Operational efficiency'
      ],
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: Workflow,
      description: 'Smart manufacturing solutions for Industry 4.0 and digital transformation',
      color: 'from-blue-500 to-indigo-500',
      solutions: [
        'IoT sensor networks',
        'Predictive maintenance',
        'Quality control systems',
        'Supply chain optimization',
        'Energy management',
        'Production analytics'
      ],
      benefits: [
        'Reduced downtime',
        'Improved quality',
        'Cost optimization',
        'Real-time monitoring'
      ],
    },
    {
      id: 'retail',
      name: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'Digital retail solutions for omnichannel customer experiences',
      color: 'from-purple-500 to-pink-500',
      solutions: [
        'E-commerce platforms',
        'Customer analytics',
        'Inventory management',
        'Payment systems',
        'Marketing automation',
        'Customer support'
      ],
      benefits: [
        'Increased sales',
        'Better customer engagement',
        'Operational efficiency',
        'Data-driven insights'
      ],
    },
    {
      id: 'government',
      name: 'Government',
      icon: Building,
      description: 'Secure government technology solutions for public sector modernization',
      color: 'from-gray-500 to-slate-500',
      solutions: [
        'Digital citizen services',
        'Cybersecurity systems',
        'Data management',
        'Process automation',
        'Compliance tools',
        'Analytics platforms'
      ],
      benefits: [
        'Improved citizen services',
        'Enhanced security',
        'Cost reduction',
        'Better transparency'
      ],
    }
  ];

  const technologySolutions = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: Brain,
      description: 'Advanced artificial intelligence and machine learning solutions',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Predictive analytics',
        'Natural language processing',
        'Computer vision',
        'Recommendation engines',
        'Automated decision making',
        'Pattern recognition'
      ]
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security solutions for modern threats',
      color: 'from-red-500 to-orange-500',
      features: [
        'Threat detection',
        'Identity management',
        'Data encryption',
        'Security monitoring',
        'Incident response',
        'Compliance management'
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud Solutions',
      icon: Cloud,
      description: 'Scalable cloud infrastructure and services',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Cloud migration',
        'Infrastructure as Code',
        'Container orchestration',
        'Serverless computing',
        'Multi-cloud management',
        'Cost optimization'
      ]
    },
    {
      id: 'data',
      name: 'Data & Analytics',
      icon: BarChart3,
      description: 'Data-driven insights and business intelligence',
      color: 'from-green-500 to-teal-500',
      features: [
        'Data warehousing',
        'Business intelligence',
        'Real-time analytics',
        'Data visualization',
        'Predictive modeling',
        'Data governance'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Industry
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Tailored technology solutions designed for your industry's unique challenges. 
              From healthcare to finance, we deliver innovative solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 hover:text-white hover:border-cyan-500 font-semibold rounded-lg transition-all duration-200"
              >
                <Package className="w-5 h-5 mr-2" />
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We understand the unique challenges of your industry and deliver tailored solutions 
              that address your specific needs and compliance requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industrySolutions.map((industry) => (
              <div
                key={industry.id}
                className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mb-6`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{industry.name}</h3>
                <p className="text-gray-300 mb-6">{industry.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-300 mb-3">Key Solutions:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {industry.solutions.map((solution, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-300 mb-3">Benefits:</h4>
                  <div className="space-y-2">
                    {industry.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                        <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link
                  to={`/contact?industry=${industry.id}`}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Solutions */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge technology solutions that power modern businesses and drive innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologySolutions.map((tech) => (
              <div
                key={tech.id}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mb-4`}>
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{tech.description}</p>
                
                <div className="space-y-2">
                  {tech.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-xs text-gray-400">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to={`/contact?technology=${tech.id}`}
                  className="inline-flex items-center w-full justify-center mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                >
                  Get Started
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry-specific solutions can help you overcome challenges 
            and achieve your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold rounded-lg transition-all duration-200"
            >
              <Users className="w-5 h-5 mr-2" />
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
