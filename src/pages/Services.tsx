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
import SEOHead from '../components/SEOHead';

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
=======
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Smartphone, 
  Shield, 
  Cloud, 
  Globe,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';

const ServiceCard = ({ title, description, icon, href, features, price, popular = false }) => (
  <motion.div 
    className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 border ${
      popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-gray-700/50'
    }`}
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    {popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </span>
      </div>
    )}
    
    <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    
    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
      {title}
    </h3>
    
    <p className="text-gray-300 mb-6 leading-relaxed">
      {description}
    </p>

    {features && (
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    )}

    {price && (
      <div className="text-3xl font-bold text-white mb-6">
        {price}
      </div>
    )}

    <Link
      to={href}
      className="inline-flex items-center w-full justify-center bg-gradient-to-r from-cyan-400 to-blue-500 text-black py-3 px-6 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 group"
    >
      Learn More
      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  </motion.div>
);

const Services = () => {
  const mainServices = [
    {
      title: "AI & Machine Learning",
      description: "Transform your business with cutting-edge AI solutions including machine learning, natural language processing, and computer vision.",
      icon: <Code className="w-8 h-8" />,
      href: "/services/ai-services",
      features: [
        "Custom AI model development",
        "Natural language processing",
        "Computer vision solutions",
        "Predictive analytics",
        "AI strategy consulting"
      ],
      price: "From $5,000"
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with advanced security solutions, threat detection, and compliance management.",
      icon: <Shield className="w-8 h-8" />,
      href: "/services/cybersecurity",
      features: [
        "Security assessment & audit",
        "Penetration testing",
        "Compliance management",
        "24/7 monitoring",
        "Incident response"
      ],
      price: "From $3,000"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scale your operations with robust cloud solutions, migration services, and infrastructure optimization.",
      icon: <Cloud className="w-8 h-8" />,
      href: "/services/cloud-solutions",
      features: [
        "Cloud migration",
        "Infrastructure optimization",
        "DevOps implementation",
        "Cost optimization",
        "24/7 support"
      ],
      price: "From $2,500"
    },
    {
      title: "Micro SaaS Development",
      description: "Build scalable software-as-a-service solutions that grow with your business and generate recurring revenue.",
      icon: <Smartphone className="w-8 h-8" />,
      href: "/services/micro-saas",
      features: [
        "Custom SaaS development",
        "Multi-tenant architecture",
        "Payment integration",
        "User management",
        "Analytics dashboard"
      ],
      price: "From $10,000"
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics, reporting, and business intelligence.",
      icon: <Database className="w-8 h-8" />,
      href: "/services/data-analytics",
      features: [
        "Data visualization",
        "Business intelligence",
        "Predictive modeling",
        "Real-time dashboards",
        "Data warehousing"
      ],
      price: "From $4,000"
    },
    {
      title: "IT Services",
      description: "Comprehensive IT support, infrastructure management, and digital transformation solutions.",
      icon: <Globe className="w-8 h-8" />,
      href: "/services/it-services",
      features: [
        "IT infrastructure setup",
        "Network management",
        "Software development",
        "Technical support",
        "System maintenance"
      ],
      price: "From $1,500"
    }
  ];

  const additionalServices = [
    {
      title: "Blockchain Solutions",
      description: "Secure, transparent, and decentralized solutions for modern businesses.",
      href: "/services/blockchain"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      href: "/services/mobile-development"
    },
    {
      title: "DevOps & Automation",
      description: "Streamline your development and deployment processes with automation.",
      href: "/services/devops"
    },
    {
      title: "Data Science",
      description: "Advanced data science solutions for complex business problems.",
      href: "/services/data-science"
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
=======
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project plan."
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Our team builds your solution using cutting-edge technologies."
    },
    {
      step: "03",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your solution meets the highest standards."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "We deploy your solution and provide ongoing maintenance and support."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Our Services - AI, Cybersecurity & Cloud Solutions | Zion Tech Group"
        description="Comprehensive technology services including AI & Machine Learning, Cybersecurity, Cloud Infrastructure, Software Development, Data Solutions, and Mobile Development."
        keywords="AI services, cybersecurity, cloud infrastructure, software development, data solutions, mobile development, technology consulting"
      />
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
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business 
              and drive innovation across all sectors.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="group border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                View Pricing
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Services */}
      <div className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our flagship services that have helped hundreds of businesses achieve their digital transformation goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} popular={index === 1} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Additional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized solutions for specific business needs and emerging technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50 hover:border-cyan-400/50 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-black font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project requirements and create a custom solution that fits your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="group border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                View Pricing Plans
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
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
    </>
  );
};

export default Services;