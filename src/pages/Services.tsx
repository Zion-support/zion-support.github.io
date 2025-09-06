import React from 'react';









import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const ServiceCard = ({ title, description, icon, gradient, index }) => (
  <motion.div 
    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
  >
    <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
      <div className="text-2xl">{icon}</div>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);


import { 
  Brain, 
  Shield, 
  Cloud, 
  Smartphone, 
  Database, 
  Lock, 
  Server, 
  Code,
  Zap,
  BarChart3,
  Globe,
  Cpu
} from 'lucide-react';

const Services = () => {

  const services = [
    {

      name: 'AI Services',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Strategy Consulting',
        'Custom AI Solutions'
      ],
      price: '$5,000 - $50,000',
      href: '/services/ai'
    },
    {
      name: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions.',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      features: [
        'Security Audits',
        'Threat Detection',
        'Compliance Management',
        'Penetration Testing',
        'Security Training',
        'Incident Response'
      ],
      price: '$3,000 - $30,000',
      href: '/services/cybersecurity'
    },
    {
      name: 'Cloud Migration',
      description: 'Seamlessly migrate to the cloud with our expert guidance.',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'AWS Migration',
        'Azure Migration',
        'GCP Migration',
        'Hybrid Cloud Solutions',
        'Cost Optimization',
        'Security Implementation'
      ],
      price: '$10,000 - $100,000',
      href: '/services/cloud-migration'
    },
    {
      name: 'DevOps & SRE',
      description: 'Streamline your development and operations with modern DevOps practices.',
      icon: Server,
      color: 'from-green-500 to-teal-500',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Monitoring & Alerting',
        'Container Orchestration',
        'Site Reliability Engineering',
        'Performance Optimization'
      ],
      price: '$8,000 - $80,000',
      href: '/services/devops'
    },
    {
      name: 'Mobile Development',
      description: 'Create powerful mobile applications for iOS and Android platforms.',
      icon: Smartphone,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Native iOS Apps',
        'Native Android Apps',
        'Cross-Platform Solutions',
        'UI/UX Design',
        'App Store Optimization',
        'Maintenance & Support'
      ],
      price: '$15,000 - $150,000',
      href: '/services/mobile-development'
    },
    {
      name: 'Data Analytics',
      description: 'Unlock insights from your data with advanced analytics solutions.',
      icon: BarChart3,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Business Intelligence',
        'Data Warehousing',
        'Real-time Analytics',
        'Machine Learning Models',
        'Data Visualization',
        'Predictive Modeling'
      ],
      price: '$7,000 - $70,000',
      href: '/services/data-analytics'
    },
    {
      name: 'Blockchain',
      description: 'Leverage blockchain technology for secure and transparent solutions.',
      icon: Lock,
      color: 'from-gray-600 to-gray-800',
      features: [
        'Smart Contracts',
        'DeFi Applications',
        'NFT Platforms',
        'Supply Chain Solutions',
        'Digital Identity',
        'Tokenization'
      ],
      price: '$20,000 - $200,000',
      href: '/services/blockchain'
    },
    {
      name: 'IT Support',
      description: 'Comprehensive IT support and maintenance services.',
      icon: Cpu,
      color: 'from-emerald-500 to-green-500',
      features: [
        '24/7 Technical Support',
        'System Maintenance',
        'Network Management',
        'Hardware Support',
        'Software Updates',
        'Troubleshooting'
      ],
      price: '$2,000 - $20,000',
      href: '/services/it-support'
    }
  ];


  return (

    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-600 mb-4">
              Custom websites and web applications built with modern technologies.
            </p>
            <ul className="text-sm text-gray-500">
              <li>• React & Next.js</li>
              <li>• Node.js & Express</li>
              <li>• Database Design</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Mobile Development</h3>
            <p className="text-gray-600 mb-4">
              Native and cross-platform mobile applications for iOS and Android.
            </p>
            <ul className="text-sm text-gray-500">
              <li>• React Native</li>
              <li>• Flutter</li>
              <li>• Native iOS/Android</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Cloud Solutions</h3>
            <p className="text-gray-600 mb-4">
              Scalable cloud infrastructure and deployment solutions.
            </p>
            <ul className="text-sm text-gray-500">
              <li>• AWS & Azure</li>
              <li>• Docker & Kubernetes</li>
              <li>• CI/CD Pipelines</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );

};


function ServiceCard({
  href,
  title,
  description,
  bullets,
  icon,
}: {
  href: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
}) {
  return (
    <Link
      to={href}
      className="group border border-gray-200 rounded-xl p-8 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {bullet}
          </li>
        ))}
      </ul>
    </Link>
  );
}

export default ServicesPage;


