import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { 
  Building2, 
  Heart, 
  TrendingUp, 
  Scale, 
  Eye, 
  Leaf, 
  Rocket, 
  Shield, 
  Users, 
  Factory,
  ShoppingCart,
  City,
  Zap,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Enterprise Solutions',
      description: 'Large-scale business transformations and digital modernization',
      icon: Building2,
      href: '/solutions/enterprise',
      features: ['Digital Transformation', 'AI Integration', 'Process Automation', 'Scalable Architecture'],
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Healthcare Solutions',
      description: 'Digital health transformation and medical AI diagnostics',
      icon: Heart,
      href: '/solutions/healthcare',
      features: ['AI Diagnostics', 'Patient Management', 'Telemedicine', 'Health Analytics'],
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Financial Solutions',
      description: 'Fintech innovation and compliance automation',
      icon: TrendingUp,
      href: '/solutions/financial',
      features: ['AI Trading', 'Risk Management', 'Compliance Automation', 'Financial Analytics'],
      featured: true,
      color: 'from-emerald-500 to-green-500'
    },
    {
      title: 'Legal Services',
      description: 'AI-powered legal research and document automation',
      icon: Scale,
      href: '/solutions/legal',
      features: ['Document Analysis', 'Legal Research', 'Compliance Management', 'Contract Automation'],
      featured: false,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Research & Academia',
      description: 'Scientific research and discovery platforms',
      icon: Eye,
      href: '/solutions/research',
      features: ['Data Analysis', 'Research Automation', 'Collaboration Tools', 'Publication Management'],
      featured: false,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Manufacturing',
      description: 'Smart manufacturing and Industry 4.0 solutions',
      icon: Factory,
      href: '/solutions/manufacturing',
      features: ['IoT Integration', 'Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization'],
      featured: false,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Retail & E-commerce',
      description: 'Digital commerce and customer experience optimization',
      icon: ShoppingCart,
      href: '/solutions/retail',
      features: ['Customer Analytics', 'Inventory Management', 'Personalization', 'Omnichannel Integration'],
      featured: false,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Government & Public Sector',
      description: 'Public sector innovation and digital services',
      icon: Shield,
      href: '/solutions/government',
      features: ['Digital Services', 'Data Security', 'Process Automation', 'Citizen Engagement'],
      featured: false,
      color: 'from-slate-500 to-gray-500'
    },
    {
      title: 'Energy & Sustainability',
      description: 'Green technology and sustainable energy solutions',
      icon: Leaf,
      href: '/solutions/energy',
      features: ['Renewable Energy', 'Carbon Tracking', 'Smart Grid', 'Environmental Monitoring'],
      featured: false,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Space & Aerospace',
      description: 'Space technology and satellite operations',
      icon: Rocket,
      href: '/solutions/space',
      features: ['Satellite Operations', 'Mission Planning', 'Data Processing', 'Ground Systems'],
      featured: false,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Education & Training',
      description: 'Digital learning and skill development platforms',
      icon: Users,
      href: '/solutions/education',
      features: ['Learning Management', 'Skill Assessment', 'Virtual Classrooms', 'Content Creation'],
      featured: false,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const benefits = [
    'AI-Powered Automation',
    'Scalable Architecture',
    'Industry-Specific Expertise',
    '24/7 Support',
    'Compliance Ready',
    'Future-Proof Solutions'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Industry Solutions - Zion Tech Group"
        description="Transform your industry with our cutting-edge AI solutions. From healthcare to finance, manufacturing to space tech, we deliver innovative solutions that drive growth and efficiency."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industry Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with AI-powered solutions designed specifically for your industry. 
              We combine deep domain expertise with cutting-edge technology to deliver results that matter.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Your Solution
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From startups to enterprises, we deliver tailored solutions that address your unique challenges 
              and drive measurable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 transform hover:scale-105 ${
                  solution.featured
                    ? 'border-cyan-400/50 bg-gradient-to-br from-slate-800/50 to-slate-700/50 ring-2 ring-cyan-400/20'
                    : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50'
                }`}
              >
                {solution.featured && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {solution.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={solution.href}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver more than just technology – we deliver transformation that drives real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit} className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our industry-specific solutions can drive innovation, 
              efficiency, and growth for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Talk to Our Experts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;