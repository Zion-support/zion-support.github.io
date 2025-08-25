import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scale, 
  FileText, 
  Search, 
  Shield, 
  Zap, 
  Brain, 
  Users, 
  BarChart3,
  Globe,
  Rocket,
  Star,
  Clock,
  Target,
  CheckCircle,
  TrendingUp,
  Building,
  DollarSign,
  Heart,
  Home
} from 'lucide-react';

export default function AILegalTech() {
  const services = [
    {
      title: 'AI-Powered Contract Analysis',
      description: 'Intelligent contract review and analysis using natural language processing and machine learning algorithms.',
      icon: FileText,
      features: [
        'Automated contract review',
        'Risk identification and assessment',
        'Clause analysis and comparison',
        'Compliance checking',
        'Contract summarization',
        'Version control and tracking'
      ],
      price: 'Starting at $4,999/month'
    },
    {
      title: 'Legal Research Automation',
      description: 'AI-driven legal research platform that accelerates case law analysis and precedent discovery.',
      icon: Search,
      features: [
        'Case law research automation',
        'Precedent identification',
        'Legal document search',
        'Citation analysis',
        'Research summarization',
        'Multi-jurisdiction support'
      ],
      price: 'Starting at $3,499/month'
    },
    {
      title: 'Compliance & Risk Management',
      description: 'Automated compliance monitoring and risk assessment for regulatory requirements across industries.',
      icon: Shield,
      features: [
        'Regulatory compliance monitoring',
        'Risk assessment automation',
        'Policy management',
        'Audit trail generation',
        'Compliance reporting',
        'Real-time alerts'
      ],
      price: 'Starting at $2,999/month'
    },
    {
      title: 'Document Generation & Management',
      description: 'Intelligent legal document creation and management with automated templates and workflows.',
      icon: Zap,
      features: [
        'Automated document generation',
        'Template management',
        'Workflow automation',
        'Document collaboration',
        'Version control',
        'Electronic signatures'
      ],
      price: 'Starting at $2,499/month'
    }
  ];

  const legalTechFeatures = [
    {
      title: 'Contract Intelligence',
      description: 'AI-powered contract analysis and risk assessment',
      icon: FileText,
      benefits: ['Risk identification', 'Compliance checking', 'Clause analysis', 'Automated review']
    },
    {
      title: 'Legal Research AI',
      description: 'Intelligent legal research and precedent discovery',
      icon: Search,
      benefits: ['Case law analysis', 'Precedent identification', 'Research automation', 'Citation tracking']
    },
    {
      title: 'Compliance Automation',
      description: 'Automated regulatory compliance and risk management',
      icon: Shield,
      benefits: ['Regulatory monitoring', 'Risk assessment', 'Policy management', 'Audit trails']
    },
    {
      title: 'Document Automation',
      description: 'Intelligent document generation and management',
      icon: Zap,
      benefits: ['Template automation', 'Workflow management', 'Collaboration tools', 'Version control']
    }
  ];

  const benefits = [
    {
      title: 'Time Savings',
      description: 'Reduce legal research and document review time by up to 80%',
      icon: Clock
    },
    {
      title: 'Cost Reduction',
      description: 'Lower legal costs through automation and efficiency gains',
      icon: TrendingUp
    },
    {
      title: 'Risk Mitigation',
      description: 'Identify and mitigate legal risks with AI-powered analysis',
      icon: Shield
    },
    {
      title: 'Improved Accuracy',
      description: 'Enhance accuracy and consistency in legal work',
      icon: CheckCircle
    }
  ];

  const industries = [
    {
      title: 'Corporate Law',
      description: 'Contract management, compliance, and corporate governance',
      icon: Building
    },
    {
      title: 'Financial Services',
      description: 'Regulatory compliance, risk management, and contract analysis',
      icon: DollarSign
    },
    {
      title: 'Healthcare',
      description: 'HIPAA compliance, medical contracts, and regulatory adherence',
      icon: Heart
    },
    {
      title: 'Real Estate',
      description: 'Property contracts, lease agreements, and compliance',
      icon: Home
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI Legal Tech Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your legal practice with AI-powered contract analysis, legal research automation, 
              and intelligent compliance management. Work smarter, not harder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Schedule a Demo
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI Legal Tech Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions that transform legal practice through intelligent automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <p className="text-gray-400">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Legal Tech Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Legal Tech Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI capabilities that streamline legal operations and enhance productivity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {legalTechFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI legal tech solutions are designed for various industries and practice areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{industry.title}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose AI Legal Tech?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of legal practice with intelligent automation and AI-powered insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Legal Practice?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of legal professionals who have revolutionized their practice with AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}