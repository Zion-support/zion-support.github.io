import React from 'react';
<<<<<<< HEAD
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
=======
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
  Settings,
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
<<<<<<< HEAD
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
        <span className="bg-cyan-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </span>
      </div>
    )}
    
    <div className="text-center mb-6">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-400/10 rounded-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-lg">{description}</p>
    </div>
    
    {features && (
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    )}
    
    {price && (
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-white mb-2">{price}</div>
        <div className="text-gray-400">per month</div>
      </div>
    )}
    
    <Link
      to={href}
      className="block w-full bg-cyan-400 text-gray-900 font-semibold py-3 px-6 rounded-lg text-center hover:bg-cyan-300 transition-colors duration-200"
    >
      Learn More
      <ArrowRight className="inline-block ml-2 w-4 h-4" />
    </Link>
  </motion.div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence',
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      href: '/services/ai-services',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Consulting'
      ],
      price: '$2,999'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your digital assets with advanced security solutions',
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      href: '/services/cybersecurity',
      features: [
        'Security Assessment',
        'Penetration Testing',
        'Incident Response',
        'Compliance Management',
        '24/7 Monitoring'
      ],
      price: '$1,999'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scale your operations with robust cloud solutions',
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      href: '/services/cloud-infrastructure',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Auto-scaling',
        'Disaster Recovery',
        'Cost Optimization'
      ],
      price: '$1,499',
      popular: true
    },
    {
      title: 'Blockchain Solutions',
      description: 'Leverage blockchain technology for secure transactions',
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      href: '/services/blockchain',
      features: [
        'Smart Contracts',
        'DeFi Applications',
        'NFT Marketplaces',
        'Token Development',
        'Blockchain Consulting'
      ],
      price: '$3,499'
    },
    {
      title: 'Mobile Development',
      description: 'Create powerful mobile applications for iOS and Android',
      icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
      href: '/services/mobile-development',
      features: [
        'Native iOS/Android Apps',
        'Cross-platform Solutions',
        'UI/UX Design',
        'App Store Optimization',
        'Maintenance & Support'
      ],
      price: '$2,499'
    },
    {
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights',
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      href: '/services/data-analytics',
      features: [
        'Data Visualization',
        'Business Intelligence',
        'Real-time Dashboards',
        'Data Warehousing',
        'Advanced Analytics'
      ],
      price: '$1,799'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan.'
    },
    {
      step: '02',
      title: 'Design & Development',
      description: 'Our team builds your solution using cutting-edge technologies.'
    },
    {
      step: '03',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your solution meets the highest standards.'
    },
    {
      step: '04',
      title: 'Deployment & Launch',
      description: 'We handle the deployment process and ensure a smooth launch.'
    },
    {
      step: '05',
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to keep your solution running smoothly.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help your business 
            thrive in the digital age. From AI and cybersecurity to cloud infrastructure 
            and blockchain, we've got you covered.
          </p>
        </motion.div>

=======
  Target,
  Rocket,
  Cpu,
  Network,
  Palette,
  Search,
  MessageSquare,
  TrendingUp,
  Lightbulb,
  Wrench,
  Headphones,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for your business needs.',
      icon: Brain,
      features: [
        'Machine Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Automated Decision Making',
      ],
      color: 'from-blue-500 to-purple-600',
      price: 'Starting at $299/month',
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from evolving threats.',
      icon: Shield,
      features: [
        'Threat Detection & Response',
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Incident Response',
        'Security Training',
      ],
      color: 'from-red-500 to-pink-600',
      price: 'Starting at $199/month',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      icon: Cloud,
      features: [
        'AWS/Azure/GCP Migration',
        'DevOps Implementation',
        'Containerization',
        'Auto-scaling Solutions',
        'Cloud Security',
        'Cost Optimization',
      ],
      color: 'from-orange-500 to-red-600',
      price: 'Starting at $399/month',
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT services and infrastructure management.',
      icon: Settings,
      features: [
        'System Administration',
        'Network Management',
        'Hardware Support',
        'Software Installation',
        'Backup & Recovery',
        '24/7 Monitoring',
      ],
      color: 'from-green-500 to-teal-600',
      price: 'Starting at $149/month',
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights.',
      icon: BarChart3,
      features: [
        'Data Visualization',
        'Business Intelligence',
        'Real-time Analytics',
        'Custom Dashboards',
        'Data Warehousing',
        'Predictive Modeling',
      ],
      color: 'from-purple-500 to-indigo-600',
      price: 'Starting at $249/month',
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications.',
      icon: Smartphone,
      features: [
        'iOS Development',
        'Android Development',
        'React Native',
        'Flutter Apps',
        'App Store Optimization',
        'Mobile UI/UX Design',
      ],
      color: 'from-pink-500 to-rose-500',
      price: 'Starting at $199/month',
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications and websites.',
      icon: Globe,
      features: [
        'React/Next.js Development',
        'Node.js Backend',
        'Database Design',
        'API Development',
        'Performance Optimization',
        'SEO Implementation',
      ],
      color: 'from-cyan-500 to-blue-600',
      price: 'Starting at $179/month',
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business.',
      icon: Rocket,
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Digital Strategy',
        'Change Management',
        'Technology Integration',
        'Staff Training',
      ],
      color: 'from-yellow-500 to-orange-600',
      price: 'Starting at $499/month',
    },
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Proven Expertise',
      description: 'Over 500+ successful projects delivered',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support',
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee on all services',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <SEOHead
        title="Our Services - Zion Tech Group"
        description="Comprehensive AI, cybersecurity, cloud, and IT services to transform your business. Expert solutions tailored to your needs."
        keywords="AI services, cybersecurity, cloud solutions, IT services, digital transformation, technology consulting"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive in the digital age.
            From AI and cybersecurity to cloud infrastructure and digital transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Process
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We follow a proven methodology to deliver exceptional results for every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-cyan-400/10 rounded-2xl p-6 mb-4">
                <div className="text-2xl font-bold text-cyan-400 mb-2">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {step.description}
                </p>
=======
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-4">
                <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
              </div>
            </motion.div>
          ))}
        </div>
<<<<<<< HEAD
=======

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Zion Tech?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional results and providing the best possible service to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and create a customized solution that meets your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Portfolio
            </button>
          </div>
        </motion.div>
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Services;
=======
export default Services;
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
