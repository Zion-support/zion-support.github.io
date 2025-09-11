import React from 'react';
:src/pages/Solutions.tsx
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Heart, 
  DollarSign, 
  Target,
  ArrowRight,
  CheckCircle,
  Users,
  Shield,
  TrendingUp,
  Zap,
  Brain,
  Cloud
} from 'lucide-react';
export function Solutions() {
  const solutions = [
    {
      id: 'enterprise',
      title: 'Enterprise Solutions',
      description: 'Comprehensive technology solutions designed for large organizations and complex business requirements.',
      icon: Building2,
      color: 'from-blue-600 to-purple-600',
      features: [
        'Scalable Architecture',
        'Enterprise Security',
        'Integration Services',
        '24/7 Support',
        'Compliance Management',
        'Custom Development'
      ],
      href: '/solutions/enterprise'
    },
    {
      id: 'healthcare',
      title: 'Healthcare Solutions',
      description: 'Specialized technology solutions for healthcare organizations, ensuring compliance and patient data security.',
      icon: Heart,
      color: 'from-red-600 to-pink-600',
      features: [
        'HIPAA Compliance',
        'Patient Data Management',
        'Telemedicine Platforms',
        'AI Diagnostics',
        'Electronic Health Records',
        'Secure Communication'
      ],
      href: '/solutions/healthcare'
    },
    {
      id: 'finance',
      title: 'Financial Solutions',
      description: 'Advanced fintech solutions for banks, financial institutions, and fintech companies.',
      icon: DollarSign,
      color: 'from-green-600 to-blue-600',
      features: [
        'Payment Processing',
        'Risk Management',
        'Fraud Detection',
        'Regulatory Compliance',
        'Blockchain Integration',
        'Real-time Analytics'
      ],
      href: '/solutions/finance'
    },
    {
      id: 'retail',
      title: 'Retail Solutions',
      description: 'E-commerce and retail technology solutions to enhance customer experience and operational efficiency.',
      icon: Target,
      color: 'from-orange-600 to-red-600',
      features: [
        'E-commerce Platforms',
        'Inventory Management',
        'Customer Analytics',
        'Omnichannel Solutions',
        'AI Recommendations',
        'Supply Chain Optimization'
      ],
      href: '/solutions/retail'
    }
  ];
  const technologies = [
    {
      name: 'Artificial Intelligence',
      description: 'Machine learning, deep learning, and AI-powered automation',
      icon: Brain,
      color: 'from-blue-600 to-purple-600'
    },
    {
      name: 'Quantum Computing',
      description: 'Next-generation computing power for complex problem solving',
      icon: Zap,
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Cloud Computing',
      description: 'Scalable, secure, and cost-effective cloud infrastructure',
      icon: Cloud,
      color: 'from-green-600 to-blue-600'
    },
    {
      name: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets',
      icon: Shield,
      color: 'from-red-600 to-orange-600'
    }
  ];
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Industry Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored technology solutions designed to address the unique challenges 
              and opportunities in your industry.
            </p>
          </div>
        </div>
      </section>
      {/* Industry Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We understand that each industry has unique requirements and challenges
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div key={solution.id} className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6 text-lg">{solution.description}</p>
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={solution.href}
                  className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Technology Stack */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge technologies powering our solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-r ${tech.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solution Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology for delivering successful solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <p className="text-gray-300">
                We analyze your business requirements, challenges, and goals to understand your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Design</h3>
              <p className="text-gray-300">
                We create a comprehensive solution architecture tailored to your specific requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Development</h3>
              <p className="text-gray-300">
                Our expert team builds and implements the solution using agile methodologies.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Deployment</h3>
              <p className="text-gray-300">
                We deploy the solution and provide ongoing support and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Case Studies Preview */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how we've helped businesses transform with our solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Healthcare Provider</h3>
              <p className="text-gray-300 text-sm mb-4">
                Reduced patient data processing time by 75% with our AI-powered healthcare solution.
              </p>
              <Link to="/case-studies" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                Read Case Study →
              </Link>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Financial Institution</h3>
              <p className="text-gray-300 text-sm mb-4">
                Improved fraud detection accuracy by 90% using our advanced AI algorithms.
              </p>
              <Link to="/case-studies" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                Read Case Study →
              </Link>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Retail Chain</h3>
              <p className="text-gray-300 text-sm mb-4">
                Increased online sales by 150% with our comprehensive e-commerce platform.
              </p>
              <Link to="/case-studies" className="text-purple-400 hover:text-purple-300 text-sm font-semibold">
                Read Case Study →
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry-specific solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get Custom Solution
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
;
const "Solutions": "React.FC = () => {;
  return (;
    <div className="min-h-screen bg-gray-50">;
      <div className="container mx-auto px-4 py-20">;
        <h1 className="text-4xl "md":text-6xl font-bold text-gray-900 mb-6 text-center">;
          Solutions;
        </h1>;
        <p className="text-xl text-gray-600 text-center">Coming soon...</p>;
      </div>;
    </div>;
  );
"};
;
export default Solutions;