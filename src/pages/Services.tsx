import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Micro SaaS Solutions</h3>
            <p className="text-gray-600 mb-4">Complete micro SaaS development from concept to scale with proven revenue models</p>
            <ul className="text-gray-600 space-y-2">
              <li>• AI-powered tools</li>
              <li>• Billing & subscriptions</li>
              <li>• Growth analytics</li>
              <li>• Market validation</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">AI & Machine Learning</h3>
            <p className="text-gray-600 mb-4">Cutting-edge AI solutions including LLMs, computer vision, and automation</p>
            <ul className="text-gray-600 space-y-2">
              <li>• LLM applications</li>
              <li>• Computer vision</li>
              <li>• RAG systems</li>
              <li>• MLOps pipelines</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">IT Infrastructure</h3>
            <p className="text-gray-600 mb-4">Cloud migration, DevOps, cybersecurity, and managed IT services</p>
            <ul className="text-gray-600 space-y-2">
              <li>• Cloud migration</li>
              <li>• DevOps & SRE</li>
              <li>• Cybersecurity</li>
              <li>• 24/7 support</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Talk to our experts about your project. We'll help you choose the right service and create a custom solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Email Us
=======
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/pricing"
              className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.name}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <div className="text-lg font-bold text-blue-400 mb-1">{service.price}</div>
                  <div className="text-xs text-gray-400">Starting Price</div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <Zap className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-sm text-gray-400">
                      +{service.features.length - 3} more features
                    </li>
                  )}
                </ul>

                <Link
                  to={service.href}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-200 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                >
                  Learn More
                </Link>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Expertise</h3>
              <p className="text-gray-300">Serving clients worldwide with cutting-edge technology solutions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
              <p className="text-gray-300">Tailored solutions designed specifically for your business needs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-300">Rapid development and deployment with agile methodologies.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free consultation and discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Get Started Today
            </Link>
            <a
              href="tel:+13024640950"
              className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Call: +1 302 464 0950
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}