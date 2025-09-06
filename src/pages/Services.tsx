import React from 'react';
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;