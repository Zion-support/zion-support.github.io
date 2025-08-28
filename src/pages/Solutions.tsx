import React from 'react';
import { SEO } from '../components/SEO';
import { Building2, Building, Rocket, Shield, Heart, TrendingUp, ArrowRight, CheckCircle, Star, Users, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Solutions() {
  const solutions = [
    {
      name: 'Enterprise Solutions',
      icon: Building2,
      description: 'Large-scale business transformations and digital modernization',
      features: [
        'AI-Powered Process Automation',
        'Enterprise Data Analytics',
        'Cloud Migration & Optimization',
        'Digital Twin Implementation',
        'Cybersecurity & Compliance',
        'Legacy System Modernization'
      ],
      benefits: [
        '50% reduction in operational costs',
        '3x faster decision making',
        '99.9% system uptime',
        'Enhanced security posture'
      ],
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      name: 'SMB Solutions',
      icon: Building,
      description: 'Small to medium business growth and efficiency solutions',
      features: [
        'AI-Powered Marketing Automation',
        'Customer Relationship Management',
        'Business Intelligence Dashboards',
        'Process Optimization',
        'Cloud Infrastructure Setup',
        'Cybersecurity Protection'
      ],
      benefits: [
        '40% increase in productivity',
        'Improved customer retention',
        'Reduced IT overhead',
        'Scalable growth foundation'
      ],
      color: 'from-green-500 to-emerald-500',
      featured: true
    },
    {
      name: 'Startup Solutions',
      icon: Rocket,
      description: 'Accelerate your startup growth with cutting-edge technology',
      features: [
        'MVP Development & Testing',
        'AI-Powered User Analytics',
        'Scalable Cloud Architecture',
        'Automated Marketing Tools',
        'Customer Support Automation',
        'Growth Hacking Tools'
      ],
      benefits: [
        '10x faster market validation',
        'Reduced development costs',
        'Improved user engagement',
        'Faster funding rounds'
      ],
      color: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      name: 'Government Solutions',
      icon: Shield,
      description: 'Public sector innovation and digital transformation',
      features: [
        'Secure Cloud Infrastructure',
        'AI-Powered Analytics',
        'Digital Service Platforms',
        'Cybersecurity & Compliance',
        'Process Automation',
        'Data Governance'
      ],
      benefits: [
        'Enhanced citizen services',
        'Improved operational efficiency',
        'Better resource allocation',
        'Enhanced security compliance'
      ],
      color: 'from-indigo-500 to-purple-500',
      featured: false
    },
    {
      name: 'Healthcare Solutions',
      icon: Heart,
      description: 'Digital health transformation and patient care optimization',
      features: [
        'AI-Powered Diagnostics',
        'Patient Data Analytics',
        'Telemedicine Platforms',
        'Healthcare Process Automation',
        'Compliance Management',
        'Predictive Healthcare'
      ],
      benefits: [
        'Improved patient outcomes',
        'Reduced healthcare costs',
        'Enhanced diagnostic accuracy',
        'Better resource utilization'
      ],
      color: 'from-red-500 to-pink-500',
      featured: true
    },
    {
      name: 'Financial Solutions',
      icon: TrendingUp,
      description: 'Fintech innovation and regulatory compliance solutions',
      features: [
        'AI-Powered Risk Assessment',
        'Fraud Detection Systems',
        'Regulatory Compliance',
        'Process Automation',
        'Data Analytics',
        'Blockchain Integration'
      ],
      benefits: [
        'Reduced fraud losses',
        'Improved compliance',
        'Enhanced customer experience',
        'Operational efficiency gains'
      ],
      color: 'from-emerald-500 to-green-500',
      featured: true
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp Inc.',
      company: 'Enterprise Client',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The AI-powered automation alone saved us $2M annually.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Founder, StartupXYZ',
      company: 'Startup Client',
      content: 'Their startup solutions helped us validate our product 10x faster and secure our Series A funding.',
      rating: 5
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Medical Director, HealthPlus',
      company: 'Healthcare Client',
      content: 'The AI diagnostic tools have improved our accuracy by 30% and reduced patient wait times significantly.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Solutions - Zion Tech Group"
        description="Discover comprehensive technology solutions for enterprises, SMBs, startups, government, healthcare, and financial institutions. Transform your business with AI-powered innovation."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Solutions for Every
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Business</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From startups to enterprises, we deliver cutting-edge technology solutions that drive growth, 
              efficiency, and innovation across all industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Custom Solution
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Explore Services
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
              Tailored Solutions for Your Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We understand that every business is unique. Our solutions are customized to meet your specific 
              challenges and drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={solution.name}
                className={`group relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  solution.featured 
                    ? 'bg-gradient-to-br from-slate-800 to-slate-700 ring-2 ring-cyan-400/50' 
                    : 'bg-slate-800/50 hover:bg-slate-800'
                }`}
              >
                {solution.featured && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Featured
                    </div>
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{solution.name}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-cyan-400">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-green-400">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <Zap className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/request-quote"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our solutions have transformed businesses across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t border-slate-700/50 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-sm text-cyan-400">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our solutions can address your specific challenges and drive measurable results.
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
                className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}