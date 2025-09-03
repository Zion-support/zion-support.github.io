import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Brain,
  Shield,
  Cloud,
  Network,
  BarChart3,
  Code,
  Zap,
  Target,
  Users,
  CheckCircle
} from 'lucide-react';

export default function Services() {
  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const featuredCategories = [
    {
      id: 'ai',
      title: 'AI & Machine Learning',
      description: 'Transform your business with cutting-edge AI solutions and intelligent automation.',
      icon: Brain,
      features: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Robotic Process Automation',
        'Machine Learning Models',
        'AI Strategy Consulting'
      ],
      href: '/services/ai'
    },
    {
      id: 'cloud',
      title: 'Cloud Solutions',
      description: 'Scalable, secure, and cost-effective cloud infrastructure tailored to your needs.',
      icon: Cloud,
      features: [
        'Cloud Migration',
        'Multi-Cloud Strategy',
        'DevOps & CI/CD',
        'Cloud Security',
        'Serverless Architecture',
        'Cloud Cost Optimization'
      ],
      href: '/services/cloud'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions and monitoring.',
      icon: Shield,
      features: [
        'Security Audits',
        'Threat Detection',
        'Compliance Management',
        'Incident Response',
        'Penetration Testing',
        'Security Training'
      ],
      href: '/services/cybersecurity'
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure',
      description: 'Robust and scalable infrastructure solutions for modern business needs.',
      icon: Network,
      features: [
        'Network Design',
        'Server Management',
        'Data Center Solutions',
        'Disaster Recovery',
        'Performance Monitoring',
        'Infrastructure Automation'
      ],
      href: '/services/infrastructure'
    },
    {
      id: 'transformation',
      title: 'Digital Transformation',
      description: 'Comprehensive digital transformation strategies to modernize your business.',
      icon: Zap,
      features: [
        'Process Automation',
        'Legacy System Modernization',
        'Digital Strategy',
        'Change Management',
        'Technology Roadmapping',
        'Innovation Consulting'
      ],
      href: '/services/transformation'
    },
    {
      id: 'consulting',
      title: 'Technology Consulting',
      description: 'Expert guidance to help you make informed technology decisions.',
      icon: Target,
      features: [
        'Technology Assessment',
        'Architecture Design',
        'Vendor Selection',
        'Project Management',
        'Risk Analysis',
        'Best Practices'
      ],
      href: '/services/consulting'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '50+', label: 'Expert Consultants', icon: Users },
    { number: '25+', label: 'Countries Served', icon: MapPin },
    { number: '99%', label: 'Client Satisfaction', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technology Services That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {" "}Drive Results
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation 
              and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href={`tel:${contact.mobile}`}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <category.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {category.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={category.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Contact us today to discuss your technology needs and discover how we can help your business grow.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center">
              <Phone className="h-6 w-6 mr-3" />
              <a href={`tel:${contact.mobile}`} className="hover:text-blue-300">
                {contact.mobile}
              </a>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-6 w-6 mr-3" />
              <a href={`mailto:${contact.email}`} className="hover:text-blue-300">
                {contact.email}
              </a>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-6 w-6 mr-3" />
              <span>{contact.address}</span>
            </div>
          </div>
          
          <Link
            to="/contact"
            className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}