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
  Cpu,
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

export function SolutionsPage() {
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
        'Improved customer experience',
        'Regulatory compliance',
        'Operational efficiency'
      ],
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: Building,
      description: 'Smart manufacturing solutions for Industry 4.0 and operational excellence',
      color: 'from-blue-500 to-cyan-500',
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
        'Sustainability gains'
      ],
    },
    {
      id: 'retail',
      name: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'Digital retail solutions for enhanced customer experience and sales growth',
      color: 'from-purple-500 to-pink-500',
      solutions: [
        'E-commerce platforms',
        'Customer analytics',
        'Inventory management',
        'Omnichannel solutions',
        'Personalization engines',
        'Supply chain optimization'
      ],
      benefits: [
        'Increased sales',
        'Better customer retention',
        'Operational efficiency',
        'Data-driven insights'
      ],
    },
    {
      id: 'education',
      name: 'Education',
      icon: GraduationCap,
      description: 'Technology solutions for modern education and learning management',
      color: 'from-orange-500 to-red-500',
      solutions: [
        'Learning management systems',
        'Virtual classrooms',
        'Student analytics',
        'Content management',
        'Assessment tools',
        'Collaboration platforms'
      ],
      benefits: [
        'Improved learning outcomes',
        'Accessibility',
        'Cost efficiency',
        'Scalability'
      ],
    },
    {
      id: 'government',
      name: 'Government',
      icon: Shield,
      description: 'Secure government technology solutions for public service excellence',
      color: 'from-indigo-500 to-purple-500',
      solutions: [
        'Digital service platforms',
        'Data security systems',
        'Process automation',
        'Citizen engagement',
        'Compliance management',
        'Analytics dashboards'
      ],
      benefits: [
        'Improved service delivery',
        'Enhanced security',
        'Cost savings',
        'Transparency'
      ],
    },
  ];

  const technologySolutions = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: Brain,
      description: 'Intelligent solutions that learn and adapt to your business needs',
      color: 'from-purple-500 to-pink-500',
      useCases: [
        'Predictive analytics',
        'Natural language processing',
        'Computer vision',
        'Recommendation systems',
        'Process automation',
        'Fraud detection'
      ],
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security solutions to protect your digital assets',
      color: 'from-red-500 to-orange-500',
      useCases: [
        'Threat detection',
        'Access control',
        'Data encryption',
        'Incident response',
        'Compliance management',
        'Security training'
      ],
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      icon: Cloud,
      description: 'Scalable cloud solutions for growing businesses',
      color: 'from-blue-500 to-cyan-500',
      useCases: [
        'Cloud migration',
        'Microservices architecture',
        'DevOps automation',
        'Scalable databases',
        'Load balancing',
        'Disaster recovery'
      ],
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      icon: BarChart3,
      description: 'Transform raw data into actionable business intelligence',
      color: 'from-green-500 to-emerald-500',
      useCases: [
        'Business intelligence',
        'Data visualization',
        'Predictive modeling',
        'Real-time analytics',
        'Data governance',
        'Performance monitoring'
      ],
    },
    {
      id: 'iot-edge',
      name: 'IoT & Edge Computing',
      icon: Cpu,
      description: 'Connected devices and edge processing solutions',
      color: 'from-indigo-500 to-purple-500',
      useCases: [
        'Smart sensors',
        'Edge analytics',
        'Device management',
        'Real-time monitoring',
        'Predictive maintenance',
        'Energy optimization'
      ],
    },
    {
      id: 'blockchain',
      name: 'Blockchain & DLT',
      icon: Lock,
      description: 'Decentralized solutions for trust and transparency',
      color: 'from-yellow-500 to-orange-500',
      useCases: [
        'Smart contracts',
        'Supply chain tracking',
        'Digital identity',
        'Asset tokenization',
        'Cross-border payments',
        'Voting systems'
      ],
    },
  ];

  const successStories = [
    {
      company: 'HealthTech Solutions',
      industry: 'Healthcare',
      challenge: 'Needed to improve patient diagnosis accuracy and reduce wait times',
      solution: 'AI-powered diagnostic platform with real-time analytics',
      results: [
        '30% improvement in diagnosis accuracy',
        '50% reduction in patient wait times',
        '25% cost savings in diagnostic procedures'
      ],
      icon: Heart,
      color: 'from-red-500 to-pink-500',
    },
    {
      company: 'FinSecure Bank',
      industry: 'Financial Services',
      challenge: 'Required enhanced fraud detection and compliance management',
      solution: 'Advanced cybersecurity platform with AI-powered threat detection',
      results: [
        '90% reduction in fraud incidents',
        '100% regulatory compliance',
        '40% improvement in security response time'
      ],
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
    },
    {
      company: 'SmartManufacturing Inc.',
      industry: 'Manufacturing',
      challenge: 'Sought to optimize production processes and reduce downtime',
      solution: 'IoT-based predictive maintenance and analytics platform',
      results: [
        '60% reduction in unplanned downtime',
        '35% improvement in production efficiency',
        '20% reduction in maintenance costs'
      ],
      icon: Building,
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Target className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Industry
            </span>
            <br />
            Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Tailored technology solutions designed to address the unique challenges 
            and opportunities in your industry. From healthcare to finance, we deliver 
            results that drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 hover:text-white hover:border-cyan-500 font-semibold rounded-lg transition-all duration-200"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored technology solutions for your industry's unique challenges and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industrySolutions.map((industry) => (
              <div
                key={industry.id}
                className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mb-6`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{industry.name}</h3>
                <p className="text-gray-300 mb-6">{industry.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-cyan-400 mb-3">Key Solutions:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {industry.solutions.map((solution, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-cyan-400 mb-3">Benefits:</h4>
                  <div className="space-y-2">
                    {industry.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
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
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge technologies that power our innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologySolutions.map((tech) => (
              <div
                key={tech.id}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mb-4`}>
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{tech.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-cyan-400 text-sm mb-2">Use Cases:</h4>
                  {tech.useCases.slice(0, 3).map((useCase, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300 text-xs">{useCase}</span>
                    </div>
                  ))}
                  {tech.useCases.length > 3 && (
                    <div className="text-cyan-400 text-xs font-medium">
                      +{tech.useCases.length - 3} more use cases
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real results from real clients across different industries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div
                key={story.company}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${story.color} rounded-lg flex items-center justify-center mb-4`}>
                  <story.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{story.company}</h3>
                <p className="text-cyan-400 text-sm mb-3">{story.industry}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-white text-sm mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm">{story.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-white text-sm mb-2">Solution:</h4>
                  <p className="text-gray-300 text-sm">{story.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white text-sm mb-2">Results:</h4>
                  <div className="space-y-1">
                    {story.results.map((result, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-xs">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry-specific solutions can address your unique 
            challenges and drive unprecedented growth and success.
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
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold rounded-lg transition-all duration-200"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
