import React from 'react';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Lock,
  Zap,
  BarChart3,
  Users,
  Settings
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Machine Learning',
      description: 'Transform your business with cutting-edge AI solutions',
      features: [
        'Custom AI model development',
        'Natural Language Processing',
        'Computer Vision solutions',
        'Predictive Analytics',
        'Chatbot development',
        'AI strategy consulting'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with advanced security solutions',
      features: [
        'Security audits & assessments',
        'Threat detection & response',
        'Compliance management',
        'Penetration testing',
        'Security training',
        'Incident response planning'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Infrastructure',
      description: 'Scale your operations with robust cloud solutions',
      features: [
        'Cloud migration services',
        'Infrastructure setup & management',
        'Cost optimization',
        'Disaster recovery',
        'Multi-cloud strategies',
        'Cloud security implementation'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your needs',
      features: [
        'Web application development',
        'Mobile app development',
        'API development & integration',
        'Legacy system modernization',
        'Quality assurance & testing',
        'DevOps implementation'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Solutions',
      description: 'Unlock insights from your data with advanced analytics',
      features: [
        'Data warehousing',
        'Business intelligence',
        'Data visualization',
        'ETL/ELT processes',
        'Data governance',
        'Real-time analytics'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Solutions',
      description: 'Engage your customers with powerful mobile experiences',
      features: [
        'Native iOS & Android apps',
        'Cross-platform development',
        'Mobile app optimization',
        'Push notification systems',
        'Mobile security',
        'App store optimization'
      ],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business requirements and current systems to understand your needs.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'We develop a comprehensive strategy and detailed project plan tailored to your goals.'
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'Our expert team builds and implements the solution using industry best practices.'
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Thorough testing ensures your solution is reliable, secure, and performs optimally.'
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'We handle the deployment process and ensure a smooth launch of your solution.'
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to keep your solution running smoothly.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span>Expert Team</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Settings className="w-5 h-5 text-green-400" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From AI and cybersecurity to cloud infrastructure and custom development, we provide end-to-end technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and maximum value for your investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;