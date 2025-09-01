import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Target, 
  Brain, 
  Atom, 
  Eye, 
  Shield, 
  Rocket, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Heart, 
  Briefcase, 
  ShoppingCart, 
  Cpu, 
  Database, 
  Network, 
  Cloud, 
  Zap, 
  TrendingUp, 
  BarChart3, 
  Lock, 
  Globe, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';

const SolutionsPage = () => {
  const solutions = [
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive technology solutions for large enterprises',
      icon: Building,
      color: 'from-blue-500 to-indigo-600',
      features: [
        'Scalable Infrastructure',
        'Enterprise Security',
        'Compliance Management',
        '24/7 Support',
        'Custom Development',
        'Integration Services'
      ],
      industries: ['Finance', 'Healthcare', 'Manufacturing', 'Retail', 'Technology']
    },
    {
      title: 'AI Business Intelligence',
      description: 'Transform data into actionable insights with AI-powered analytics',
      icon: Brain,
      color: `from-purple-500 to-pink-600`,
      features: [
        'Predictive Analytics',
        'Real-time Dashboards',
        'Machine Learning Models',
        'Data Visualization',
        'Automated Reporting',
        'Natural Language Querying'
      ],
      industries: ['Finance', 'Healthcare', 'E-commerce', 'Marketing', 'Operations']
    },
    {
      title: 'Quantum AI Platform',
      description: 'Revolutionary computing power combining quantum and AI technologies',
      icon: Atom,
      color: 'from-cyan-500 to-blue-600',
      features: [
        'Quantum Algorithms',
        'AI Optimization',
        'Hybrid Computing',
        'Quantum Security',
        'Performance Analytics',
        'Scalable Architecture'
      ],
      industries: ['Research', 'Finance', 'Pharmaceuticals', 'Logistics', 'Energy']
    },
    {
      title: 'Digital Twin Solutions',
      description: 'Create virtual replicas of physical systems for optimization',
      icon: Eye,
      color: 'from-green-500 to-teal-600',
      features: [
        'Real-time Monitoring',
        'Predictive Maintenance',
        'Simulation & Testing',
        'Performance Optimization',
        'Remote Management',
        'Data Integration'
      ],
      industries: ['Manufacturing', 'Healthcare', 'Smart Cities', 'Transportation', 'Energy']
    },
    {
      title: 'Zero Trust Security',
      description: 'Advanced security framework for modern digital environments',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      features: [
        'Identity Verification',
        'Continuous Monitoring',
        'Threat Detection',
        'Access Control',
        'Compliance Tools',
        'Incident Response'
      ],
      industries: ['Finance', 'Healthcare', 'Government', 'Technology', 'Education']
    },
    {
      title: 'Cloud Transformation',
      description: 'Modernize your infrastructure with cloud-native solutions',
      icon: Cloud,
      color: 'from-indigo-500 to-purple-600',
      features: [
        'Cloud Migration',
        'DevOps Automation',
        'Microservices',
        'Container Orchestration',
        'Cost Optimization',
        'Security & Compliance'
      ],
      industries: ['Technology', 'Finance', 'Healthcare', 'Retail', 'Manufacturing']
    }
  ];

  const industries = [
    { name: 'Finance', icon: DollarSign, description: 'Banking, insurance, and financial services solutions' },
    { name: 'Healthcare', icon: Heart, description: 'Digital health and medical technology innovations' },
    { name: 'Manufacturing', icon: Building, description: 'Smart manufacturing and Industry 4.0 solutions' },
    { name: 'Retail', icon: ShoppingCart, description: 'E-commerce and retail technology platforms' },
    { name: 'Technology', icon: Cpu, description: 'Software development and IT infrastructure services' },
    { name: 'Education', icon: GraduationCap, description: 'EdTech and learning management solutions' }
  ];

  const DollarSign = () => <span>$</span>;
  const GraduationCap = () => <span>🎓</span>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <Rocket className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Innovative Solutions for Every Industry
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive portfolio of cutting-edge solutions designed to transform
            businesses across all industries. From AI-powered analytics to quantum computing,
            we deliver the technology you need to stay ahead of the competition.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.title}
                className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group"
              >
                {/* Solution Header */}
                <div className={`bg-gradient-to-r ${solution.color} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="inline-block px-3 py-1 bg-gray-800/50 text-white text-xs font-semibold rounded-full">
                        {solution.industries.length} Industries
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{solution.description}</p>
                </div>

                {/* Solution Content */}
                <div className="p-6">
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {solution.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {solution.features.length > 4 && (
                        <div className="text-sm text-cyan-400">
                          +{solution.features.length - 4} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Industries */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Industries Served</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.industries.slice(0, 3).map((industry, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                        >
                          {industry}
                        </span>
                      ))}
                      {solution.industries.length > 3 && (
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                          +{solution.industries.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    to={`/solutions/${solution.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-3 rounded-lg text-sm font-semibold text-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25 inline-flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industries Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our solutions are designed to meet the unique challenges and requirements
              of various industries, from finance to healthcare to manufacturing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.name}
                  className="bg-gray-800 rounded-xl border border-gray-700 p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{industry.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{industry.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can help you achieve your
              business goals and stay ahead of the competition.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="border border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;