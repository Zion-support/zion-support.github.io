import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
<<<<<<< HEAD
  const microSAAS = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics. Starting at $299/month.',
      icon: '📊',
      href: '/services/ai-analytics-dashboard',
      category: 'Micro SAAS',
      price: '$299/month'
    },
    {
      title: 'Smart Document Processing',
      description: 'Automated document extraction and processing with 99.5% accuracy. Starting at $199/month.',
      icon: '📄',
      href: '/services/smart-document-processing',
      category: 'Micro SAAS',
      price: '$199/month'
    },
    {
      title: 'Customer Sentiment Analyzer',
      description: 'Real-time customer feedback analysis with actionable insights. Starting at $149/month.',
      icon: '😊',
      href: '/services/customer-sentiment-analyzer',
      category: 'Micro SAAS',
      price: '$149/month'
    },
    {
      title: 'Automated Lead Scoring',
      description: 'AI-driven lead qualification and scoring system. Starting at $249/month.',
      icon: '🎯',
      href: '/services/automated-lead-scoring',
      category: 'Micro SAAS',
      price: '$249/month'
    },
    {
      title: 'Inventory Optimization AI',
      description: 'Smart inventory management with demand forecasting. Starting at $399/month.',
      icon: '📦',
      href: '/services/inventory-optimization-ai',
      category: 'Micro SAAS',
      price: '$399/month'
    },
    {
      title: 'Social Media AI Manager',
      description: 'Automated social media posting and engagement optimization. Starting at $179/month.',
      icon: '📱',
      href: '/services/social-media-ai-manager',
      category: 'Micro SAAS',
      price: '$179/month'
    },
    {
      title: 'Email Marketing Automation',
      description: 'Intelligent email campaigns with personalization engine. Starting at $129/month.',
      icon: '✉️',
      href: '/services/email-marketing-automation',
      category: 'Micro SAAS',
      price: '$129/month'
    },
    {
      title: 'Website Performance Optimizer',
      description: 'Automated website speed and SEO optimization. Starting at $99/month.',
      icon: '⚡',
      href: '/services/website-performance-optimizer',
      category: 'Micro SAAS',
      price: '$99/month'
    }
  ];

  const itServices = [
=======
  const services = [
>>>>>>> cursor/fix-errors-and-merge-to-main-3cef
    {
      title: 'AI Autonomous Operations',
      description: 'Self-healing infrastructure and autonomous operations that reduce costs by 70% and achieve 99.9% uptime.',
      icon: '🤖',
      href: '/services/autonomous-operations',
      category: 'IT Services',
      price: 'Custom Pricing'
    },
    {
<<<<<<< HEAD
=======
      title: 'Quantum Computing Solutions',
      description: 'Revolutionary quantum computing that delivers 2000x processing speed improvements for complex calculations.',
      icon: '⚡',
      href: '/services/quantum-computing'
    },
    {
      title: 'Advanced Cybersecurity AI',
      description: 'Next-generation AI-powered cybersecurity solutions with 99.9% threat detection accuracy.',
      icon: '🛡️',
      href: '/services/cybersecurity'
    },
    {
      title: 'Enterprise AI Consulting',
      description: 'Strategic AI implementation guidance that transforms business operations and drives exponential growth.',
      icon: '🎯',
      href: '/services/consulting'
    },
    {
>>>>>>> cursor/fix-errors-and-merge-to-main-3cef
      title: 'Cloud Migration Services',
      description: 'Seamless cloud migration with zero downtime, ensuring business continuity and improved scalability.',
      icon: '☁️',
      href: '/services/cloud-migration',
      category: 'IT Services',
      price: 'From $5,000'
    },
    {
<<<<<<< HEAD
      title: 'DevOps Automation',
      description: 'Complete CI/CD pipeline setup with automated testing and deployment. Starting at $3,500.',
      icon: '🔄',
      href: '/services/devops-automation',
      category: 'IT Services',
      price: 'From $3,500'
    },
    {
      title: 'Database Optimization',
      description: 'Performance tuning and optimization for existing database systems. Starting at $2,500.',
      icon: '🗄️',
      href: '/services/database-optimization',
      category: 'IT Services',
      price: 'From $2,500'
    },
    {
      title: 'API Development & Integration',
      description: 'Custom API development and third-party integrations. Starting at $4,000.',
      icon: '🔌',
      href: '/services/api-development-integration',
      category: 'IT Services',
      price: 'From $4,000'
    },
    {
      title: 'IT Infrastructure Monitoring',
      description: '24/7 system monitoring with proactive issue resolution. Starting at $1,500/month.',
      icon: '📈',
      href: '/services/it-infrastructure-monitoring',
      category: 'IT Services',
      price: '$1,500/month'
    },
    {
      title: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions with disaster recovery planning. Starting at $2,000.',
      icon: '💾',
      href: '/services/backup-disaster-recovery',
      category: 'IT Services',
      price: 'From $2,000'
    },
    {
      title: 'Network Security Assessment',
      description: 'Comprehensive security audit and vulnerability assessment. Starting at $3,000.',
      icon: '🔒',
      href: '/services/network-security-assessment',
      category: 'IT Services',
      price: 'From $3,000'
    }
  ];

  const aiServices = [
    {
      title: 'Quantum Computing Solutions',
      description: 'Revolutionary quantum computing that delivers 2000x processing speed improvements for complex calculations.',
      icon: '⚡',
      href: '/services/quantum-computing',
      category: 'AI Services',
      price: 'Custom Pricing'
    },
    {
      title: 'Advanced Cybersecurity AI',
      description: 'Next-generation AI-powered cybersecurity solutions with 99.9% threat detection accuracy.',
      icon: '🛡️',
      href: '/services/cybersecurity',
      category: 'AI Services',
      price: 'From $8,000'
    },
    {
      title: 'Enterprise AI Consulting',
      description: 'Strategic AI implementation guidance that transforms business operations and drives exponential growth.',
      icon: '🎯',
      href: '/services/consulting',
      category: 'AI Services',
      price: 'From $10,000'
    },
    {
      title: 'Machine Learning Model Development',
      description: 'Custom ML models tailored to your specific business needs. Starting at $15,000.',
      icon: '🧠',
      href: '/services/machine-learning-models',
      category: 'AI Services',
      price: 'From $15,000'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding. Starting at $12,000.',
      icon: '🗣️',
      href: '/services/natural-language-processing',
      category: 'AI Services',
      price: 'From $12,000'
    },
    {
      title: 'Computer Vision Solutions',
      description: 'Image recognition and computer vision applications for various industries. Starting at $18,000.',
      icon: '👁️',
      href: '/services/computer-vision-solutions',
      category: 'AI Services',
      price: 'From $18,000'
    },
    {
      title: 'AI-Powered Chatbots',
      description: 'Intelligent conversational AI with natural language understanding. Starting at $5,000.',
      icon: '💬',
      href: '/services/ai-powered-chatbots',
      category: 'AI Services',
      price: 'From $5,000'
    },
    {
      title: 'Predictive Analytics Platform',
      description: 'Advanced predictive modeling for business forecasting and decision making. Starting at $20,000.',
      icon: '🔮',
      href: '/services/predictive-analytics-platform',
      category: 'AI Services',
      price: 'From $20,000'
    },
    {
      title: 'AI-Powered Automation',
      description: 'Intelligent process automation for repetitive tasks and workflows. Starting at $8,500.',
      icon: '⚙️',
      href: '/services/ai-powered-automation',
      category: 'AI Services',
      price: 'From $8,500'
    },
    {
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-3cef
      title: 'Digital Transformation',
      description: 'Complete digital transformation solutions that modernize operations and enhance customer experiences.',
      icon: '🔄',
      href: '/services/digital-transformation',
      category: 'AI Services',
      price: 'Custom Pricing'
    }
  ];
<<<<<<< HEAD

  const allServices = [...microSAAS, ...itServices, ...aiServices];
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-3cef

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Comprehensive Services
          </h1>
<<<<<<< HEAD
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Revolutionary AI, IT, and micro SAAS solutions designed to transform your business 
            and drive unprecedented growth and efficiency. All services are available at competitive market prices.
=======
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI and technology solutions designed to transform your business 
            and drive unprecedented growth and efficiency.
>>>>>>> cursor/fix-errors-and-merge-to-main-3cef
          </p>
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 border border-white/20 max-w-2xl mx-auto">
            <p className="text-white font-semibold">Contact Us: +1 302 464 0950 | kleber@ziontechgroup.com</p>
            <p className="text-gray-300 text-sm mt-1">364 E Main St STE 1008 Middletown DE 19709</p>
          </div>
        </div>

<<<<<<< HEAD
        {/* Micro SAAS Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Micro SAAS Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {microSAAS.map((service, index) => (
              <div key={index} className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">{service.description}</p>
                <div className="text-green-400 font-bold mb-4">{service.price}</div>
                <Link 
                  to={service.href}
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors text-sm"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* IT Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">IT Services & Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {itServices.map((service, index) => (
              <div key={index} className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">{service.description}</p>
                <div className="text-green-400 font-bold mb-4">{service.price}</div>
                <Link 
                  to={service.href}
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors text-sm"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* AI Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">AI Services & Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((service, index) => (
              <div key={index} className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">{service.description}</p>
                <div className="text-green-400 font-bold mb-4">{service.price}</div>
                <Link 
                  to={service.href}
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors text-sm"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
=======
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <Link 
                to={service.href}
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

>>>>>>> cursor/fix-errors-and-merge-to-main-3cef
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
<<<<<<< HEAD
              Let us help you implement cutting-edge AI and technology solutions. 
              All our services come with competitive pricing and exceptional support.
            </p>
            <div className="mb-6">
              <p className="text-white font-semibold text-lg">Get in Touch Today</p>
              <p className="text-blue-400 font-bold text-xl">+1 302 464 0950</p>
              <p className="text-purple-400 font-bold">kleber@ziontechgroup.com</p>
              <p className="text-gray-300">364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
=======
              Let us help you transform your business with our cutting-edge AI solutions. 
              Schedule a consultation to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
>>>>>>> cursor/fix-errors-and-merge-to-main-3cef
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Call Now
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Email Us
              </a>
              <a 
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  )
)
}
=======
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-3cef
=======
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6873

export default Services;