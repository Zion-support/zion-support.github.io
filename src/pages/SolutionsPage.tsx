import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Heart, 
  TrendingUp, 
  Shield, 
  Factory, 
  ShoppingCart,
  Brain,
  Cloud,
  Zap,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  MessageSquare
} from 'lucide-react';

export default function SolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const industrySolutions = [
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'Transform healthcare delivery with AI-powered diagnostics, patient management, and compliance solutions.',
      color: 'from-red-500 to-pink-500',
      features: [
        'AI-Powered Diagnostics',
        'Patient Data Management',
        'HIPAA Compliance',
        'Telemedicine Platforms',
        'Predictive Analytics',
        'Clinical Decision Support'
      ],
      benefits: [
        'Improved patient outcomes',
        'Reduced administrative burden',
        'Enhanced compliance',
        'Cost optimization'
      ],
      href: '/solutions/healthcare'
    },
    {
      name: 'Financial Services',
      icon: TrendingUp,
      description: 'Secure, scalable financial technology solutions for banking, insurance, and fintech companies.',
      color: 'from-green-500 to-emerald-500',
      features: [
        'Fraud Detection & Prevention',
        'Risk Management',
        'Regulatory Compliance',
        'Digital Banking',
        'Blockchain Integration',
        'AI Trading Systems'
      ],
      benefits: [
        'Enhanced security',
        'Regulatory compliance',
        'Operational efficiency',
        'Customer experience'
      ],
      href: '/solutions/financial'
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Smart manufacturing solutions with IoT, AI, and automation for Industry 4.0 transformation.',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'IoT Integration',
        'Predictive Maintenance',
        'Quality Control',
        'Supply Chain Optimization',
        'Energy Management',
        'Digital Twins'
      ],
      benefits: [
        'Increased productivity',
        'Reduced downtime',
        'Quality improvement',
        'Cost reduction'
      ],
      href: '/solutions/manufacturing'
    },
    {
      name: 'Government',
      icon: Shield,
      description: 'Secure, compliant government technology solutions with advanced cybersecurity and citizen services.',
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Cybersecurity & Compliance',
        'Digital Citizen Services',
        'Data Analytics',
        'Cloud Migration',
        'Legacy System Modernization',
        'Emergency Response Systems'
      ],
      benefits: [
        'Enhanced security',
        'Improved citizen services',
        'Operational efficiency',
        'Cost savings'
      ],
      href: '/solutions/government'
    },
    {
      name: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'Omnichannel retail solutions with AI-powered personalization and seamless customer experiences.',
      color: 'from-orange-500 to-red-500',
      features: [
        'AI Personalization',
        'Inventory Management',
        'Customer Analytics',
        'Multi-channel Integration',
        'Payment Security',
        'Supply Chain Optimization'
      ],
      benefits: [
        'Increased sales',
        'Customer satisfaction',
        'Operational efficiency',
        'Competitive advantage'
      ],
      href: '/solutions/retail'
    },
    {
      name: 'Education',
      icon: Users,
      description: 'Digital learning platforms and educational technology solutions for modern learning environments.',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Learning Management Systems',
        'Virtual Classrooms',
        'Student Analytics',
        'Content Management',
        'Assessment Tools',
        'Collaboration Platforms'
      ],
      benefits: [
        'Improved learning outcomes',
        'Accessibility',
        'Cost efficiency',
        'Scalability'
      ],
      href: '/solutions/education'
    }
  ];

  const technologySolutions = [
    {
      name: 'Digital Transformation',
      icon: Zap,
      description: 'End-to-end digital transformation services to modernize your business operations and technology stack.',
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Strategy Development',
        'Process Optimization',
        'Technology Assessment',
        'Change Management',
        'Training & Support',
        'ROI Measurement'
      ]
    },
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      description: 'Cutting-edge AI solutions to automate processes, gain insights, and create competitive advantages.',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Machine Learning Models',
        'AI Strategy Consulting',
        'Custom AI Development'
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Scalable cloud infrastructure and modern DevOps practices for rapid, reliable software delivery.',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'CI/CD Pipelines',
        'Performance Optimization',
        'Cost Optimization',
        'Monitoring & Logging'
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      color: 'from-red-500 to-orange-500',
      features: [
        'Zero-Trust Architecture',
        'Threat Detection',
        'Incident Response',
        'Compliance Management',
        'Security Training',
        'Vulnerability Assessment'
      ]
    }
  ];

  const successMetrics = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '50+', label: 'Enterprise Clients', icon: Building2 },
    { number: '99.9%', label: 'Client Satisfaction', icon: Star },
    { number: '15+', label: 'Years Experience', icon: Award }
  ];

  const filteredSolutions = selectedCategory === 'all' 
    ? industrySolutions 
    : industrySolutions.filter(solution => solution.name.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Industry Solutions
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
            Tailored technology solutions designed for your industry's unique challenges and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{metric.number}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions designed for the unique challenges and opportunities in your industry.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Industries
            </button>
            {industrySolutions.map((solution) => (
              <button
                key={solution.name}
                onClick={() => setSelectedCategory(solution.name)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === solution.name
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {solution.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className={`h-2 bg-gradient-to-r ${solution.color}`}></div>
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{solution.name}</h3>
                  <p className="text-gray-600 mb-6 text-center">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm">
                          <Star className="w-4 h-4 text-blue-500" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={solution.href}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Core technology solutions that power our industry-specific offerings and drive business transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologySolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{solution.name}</h3>
                <p className="text-gray-600 mb-6 text-center">{solution.description}</p>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 hover:scale-105"
                >
                  Explore Services
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep industry expertise with cutting-edge technology to deliver solutions that drive real business results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Expertise</h3>
              <p className="text-gray-600">Deep understanding of your industry's challenges, regulations, and opportunities.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation Focus</h3>
              <p className="text-gray-600">Cutting-edge technology solutions that give you a competitive advantage.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Delivery</h3>
              <p className="text-gray-600">Worldwide delivery capabilities with local support and understanding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry-specific solutions can address your unique challenges and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/case-studies"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}