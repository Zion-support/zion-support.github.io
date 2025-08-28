import React from 'react';
import { SEO } from '../components/SEO';
import { 
  Building2, 
  Building, 
  Rocket, 
  Shield, 
  Heart, 
  TrendingUp,
  Users,
  Globe,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Solutions() {
  const solutions = [
    {
      category: 'Enterprise Solutions',
      icon: Building2,
      description: 'Large-scale business transformations and digital modernization',
      features: [
        'Enterprise AI Strategy & Implementation',
        'Digital Transformation Roadmaps',
        'Legacy System Modernization',
        'Scalable Cloud Infrastructure',
        'Enterprise Security & Compliance',
        'Data Governance & Analytics'
      ],
      benefits: [
        'Reduce operational costs by 30-40%',
        'Improve efficiency by 50%+',
        'Enhanced security and compliance',
        'Scalable growth infrastructure'
      ],
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      category: 'SMB Solutions',
      icon: Building,
      description: 'Small to medium business growth and optimization',
      features: [
        'Business Process Automation',
        'Cloud Migration & Management',
        'AI-Powered Marketing Tools',
        'Customer Relationship Management',
        'Financial Operations Optimization',
        'Cybersecurity Protection'
      ],
      benefits: [
        'Affordable technology solutions',
        'Quick implementation (2-4 weeks)',
        'ROI within 3-6 months',
        'Dedicated support team'
      ],
      color: 'from-green-500 to-emerald-500',
      featured: false
    },
    {
      category: 'Startup Solutions',
      icon: Rocket,
      description: 'Accelerate your startup growth with cutting-edge technology',
      features: [
        'MVP Development & Launch',
        'AI-Powered Growth Tools',
        'Scalable Tech Stack',
        'Investor-Ready Analytics',
        'Customer Acquisition Automation',
        'Product-Market Fit Analysis'
      ],
      benefits: [
        'Faster time to market',
        'Reduced development costs',
        'Data-driven decision making',
        'Scalable foundation'
      ],
      color: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      category: 'Government Solutions',
      icon: Shield,
      description: 'Public sector innovation and digital transformation',
      features: [
        'Digital Government Platforms',
        'Citizen Service Automation',
        'Data Security & Privacy',
        'Compliance & Regulatory Tools',
        'Infrastructure Modernization',
        'Emergency Response Systems'
      ],
      benefits: [
        'Improved citizen services',
        'Enhanced security & compliance',
        'Cost-effective operations',
        'Modern digital infrastructure'
      ],
      color: 'from-indigo-500 to-purple-500',
      featured: false
    },
    {
      category: 'Healthcare Solutions',
      icon: Heart,
      description: 'Digital health transformation and patient care optimization',
      features: [
        'AI-Powered Diagnostics',
        'Patient Management Systems',
        'Telemedicine Platforms',
        'Medical Data Analytics',
        'Compliance & HIPAA Tools',
        'Healthcare IoT Solutions'
      ],
      benefits: [
        'Improved patient outcomes',
        'Reduced administrative burden',
        'Enhanced diagnostic accuracy',
        'Better resource utilization'
      ],
      color: 'from-red-500 to-pink-500',
      featured: true
    },
    {
      category: 'Financial Solutions',
      icon: TrendingUp,
      description: 'Fintech innovation and financial operations optimization',
      features: [
        'AI-Powered Risk Management',
        'Automated Trading Systems',
        'Fraud Detection & Prevention',
        'Regulatory Compliance Tools',
        'Financial Analytics & Reporting',
        'Blockchain Integration'
      ],
      benefits: [
        'Reduced risk exposure',
        'Improved compliance',
        'Enhanced operational efficiency',
        'Better decision making'
      ],
      color: 'from-emerald-500 to-green-500',
      featured: true
    }
  ];

  const successMetrics = [
    { metric: '500+', label: 'Projects Delivered' },
    { metric: '98%', label: 'Client Satisfaction' },
    { metric: '40%', label: 'Average Cost Reduction' },
    { metric: '60%', label: 'Efficiency Improvement' }
  ];

  const industries = [
    'Healthcare & Life Sciences',
    'Financial Services',
    'Manufacturing & Logistics',
    'Retail & E-commerce',
    'Education & Training',
    'Energy & Utilities',
    'Real Estate',
    'Media & Entertainment'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Solutions - Zion Tech Group"
        description="Discover tailored technology solutions for enterprises, SMBs, startups, government, healthcare, and financial institutions. Transform your business with AI-powered innovation."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Solutions That
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Transform</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Tailored technology solutions designed for your business size, industry, and growth stage. 
              From startups to enterprises, we deliver measurable results that drive success.
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
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300"
              >
                Talk to Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-slate-800/50">
        <div className="container-responsive">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{item.metric}</div>
                <div className="text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Solutions for Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're a startup looking to scale or an enterprise seeking transformation, 
              we have the expertise and solutions to meet your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  solution.featured 
                    ? 'bg-gradient-to-br from-slate-800 to-slate-700 ring-2 ring-cyan-400/50' 
                    : 'bg-slate-800/50 hover:bg-slate-800/70'
                }`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${solution.color}`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.category}</h3>
                    <p className="text-gray-300">{solution.description}</p>
                    {solution.featured && (
                      <span className="inline-flex items-center gap-1 mt-2 text-sm text-cyan-400">
                        <Star className="w-4 h-4" />
                        Featured Solution
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-cyan-400" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-cyan-400" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/request-quote"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group-hover:gap-3"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions are designed to address the unique challenges and opportunities 
              across diverse industry verticals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-6 bg-slate-700/50 rounded-xl text-center hover:bg-slate-700/70 transition-colors group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine deep industry expertise with cutting-edge technology to deliver 
              solutions that drive real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">
                Seasoned professionals with deep expertise in AI, cloud computing, 
                cybersecurity, and industry-specific solutions.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Innovation First</h3>
              <p className="text-gray-300">
                We stay ahead of technology trends to deliver cutting-edge solutions 
                that give you a competitive advantage.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300">
                Track record of delivering measurable business outcomes and ROI 
                across diverse industries and business sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="container-responsive text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our solutions can address your specific challenges 
            and drive measurable business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/request-quote"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Your Custom Solution
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}