import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Shield, Brain, Cloud, Code, CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  pricing: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, pricing, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      
      <div className="border-t pt-4">
        <p className="text-lg font-semibold text-blue-600 mb-4">{pricing}</p>
        <Link
          to={link}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          Learn More <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced AI models for blogs, social media, and marketing materials.',
      features: [
        'Natural language processing',
        'Multi-language support',
        'SEO optimization',
        'Brand voice consistency',
        'Content scheduling'
      ],
      pricing: 'Starting at $99/month',
      link: '/services/ai-content-generation'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      title: 'AI Automation',
      description: 'Streamline business processes with intelligent automation solutions.',
      features: [
        'Workflow automation',
        'Data processing',
        'Email automation',
        'Task scheduling',
        'Integration APIs'
      ],
      pricing: 'Starting at $199/month',
      link: '/services/ai-automation'
    },
    {
      icon: <Code className="w-6 h-6 text-green-600" />,
      title: 'AI Code Assistant',
      description: 'AI-powered coding assistance for faster development and better code quality.',
      features: [
        'Code generation',
        'Bug detection',
        'Code review',
        'Documentation',
        'Testing assistance'
      ],
      pricing: 'Starting at $149/month',
      link: '/services/ai-code-assistant'
    }
  ];

  const microSaasServices = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: 'SaaS Development',
      description: 'Complete SaaS application development from concept to deployment.',
      features: [
        'Custom web applications',
        'User authentication',
        'Payment integration',
        'Analytics dashboard',
        'Mobile responsiveness'
      ],
      pricing: 'Starting at $5,000',
      link: '/services/saas-development'
    },
    {
      icon: <Cloud className="w-6 h-6 text-purple-600" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud infrastructure setup and management for your SaaS.',
      features: [
        'AWS/Azure/GCP setup',
        'Auto-scaling',
        'Load balancing',
        'Database management',
        'Security configuration'
      ],
      pricing: 'Starting at $299/month',
      link: '/services/cloud-infrastructure'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance solutions for your SaaS.',
      features: [
        'SSL certificates',
        'Data encryption',
        'GDPR compliance',
        'Security audits',
        'Penetration testing'
      ],
      pricing: 'Starting at $199/month',
      link: '/services/security-compliance'
    }
  ];

  const itServices = [
    {
      icon: <Cloud className="w-6 h-6 text-blue-600" />,
      title: 'Cloud Migration',
      description: 'Seamless migration of your infrastructure to the cloud.',
      features: [
        'Infrastructure assessment',
        'Migration planning',
        'Data transfer',
        'Performance optimization',
        'Ongoing support'
      ],
      pricing: 'Starting at $2,500',
      link: '/services/cloud-migration'
    },
    {
      icon: <Code className="w-6 h-6 text-purple-600" />,
      title: 'DevOps & SRE',
      description: 'DevOps implementation and Site Reliability Engineering services.',
      features: [
        'CI/CD pipeline setup',
        'Monitoring & alerting',
        'Infrastructure as code',
        'Performance optimization',
        'Incident response'
      ],
      pricing: 'Starting at $1,500/month',
      link: '/services/devops-sre'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: 'Cybersecurity',
      description: 'Comprehensive cybersecurity solutions to protect your business.',
      features: [
        'Security assessment',
        'Threat monitoring',
        'Incident response',
        'Security training',
        'Compliance audits'
      ],
      pricing: 'Starting at $999/month',
      link: '/services/cybersecurity'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Our Services
          </h1>
          <p className="text-xl sm:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
          </p>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to automate processes, enhance decision-making, and drive innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end SaaS development with modern technologies, scalable infrastructure, and growth optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Robust IT infrastructure, cloud solutions, and cybersecurity services to keep your business secure and efficient.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Contact us today to discuss your project requirements and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Call Us: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Email Us
            </a>
          </div>
          <p className="text-sm mt-8 opacity-80">
            364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD:src/pages/Services.tsx
};

export default Services;
=======
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/pages/Services.tsx
