import React from 'react';
import { Link } from 'react-router-dom';
import {

  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Brain,
  Clock,
  DollarSign,
  ArrowRight,
  Lock,
  Eye,
  Activity,
  Stethoscope,
  Truck,
  Route,
  Calculator,
  PieChart,
  Network,
  Bug
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const InnovativeAIServicesShowcase2025 = () => {

  const services = [
    {

      id: 'ai-project-management-assistant',
      title: 'AI Project Management Assistant',
      description: 'Revolutionize project delivery with AI-powered task prioritization, risk management, team collaboration, and real-time analytics.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      benefits: ['45% reduction in project delays', '30% increase in team efficiency', '60% risk prevention'],
      price: 'From $299/month',
      category: 'Project Management',
      href: '/services/ai-project-management-assistant'
    },
    {

      id: 'ai-financial-planning-assistant',
      title: 'AI Financial Planning Assistant',
      description: 'Transform financial planning with AI-powered investment analysis, budget optimization, risk management, and predictive modeling.',
      icon: Calculator,
      color: 'from-green-500 to-emerald-500',
      benefits: ['25% increase in portfolio returns', '20% expense savings', 'Proactive risk management'],
      price: 'From $149/month',
      category: 'Financial Services',
      href: '/services/ai-financial-planning-assistant'
    },
    {

      id: 'ai-healthcare-analytics-platform',
      title: 'AI Healthcare Analytics Platform',
      description: 'Revolutionize healthcare delivery with AI-powered patient risk assessment, real-time monitoring, and predictive diagnosis.',
      icon: Stethoscope,
      color: 'from-blue-500 to-cyan-500',
      benefits: ['30% reduction in readmissions', '40% diagnostic accuracy improvement', '24/7 patient monitoring'],
      price: 'From $899/month',
      category: 'Healthcare',
      href: '/services/ai-healthcare-analytics-platform'
    },
    {

      id: 'ai-supply-chain-optimization-platform',
      title: 'AI Supply Chain Optimization Platform',
      description: 'Transform supply chain operations with AI-powered demand forecasting, route optimization, and global visibility.',
      icon: Truck,
      color: 'from-orange-500 to-red-500',
      benefits: ['25% cost reduction', '50% forecast accuracy improvement', '30% inventory reduction'],
      price: 'From $499/month',
      category: 'Supply Chain',
      href: '/services/ai-supply-chain-optimization-platform'
    },
    {

      id: 'ai-cybersecurity-threat-intelligence-platform',
      title: 'AI Cybersecurity Threat Intelligence Platform',
      description: 'Revolutionize cybersecurity with AI-powered threat detection, real-time intelligence, and automated response.',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      benefits: ['90% faster threat detection', '75% reduction in false positives', '24/7 automated monitoring'],
      price: 'From $799/month',
      category: 'Cybersecurity',
      href: '/services/ai-cybersecurity-threat-intelligence-platform'
    },
    {

      id: 'ai-sales-copilot',
      title: 'AI Sales Copilot Pro',
      description: 'Transform your sales process with AI-powered lead scoring, automated follow-ups, call analysis, and predictive analytics.',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      benefits: ['35% increase in conversions', '80% faster follow-ups', 'Predictive sales analytics'],
      price: 'From $199/month',
      category: 'Sales & Marketing',
      href: '/services/ai-sales-copilot'
    }
  ];

  const categories = [
    'All Services',
    'Project Management',
    'Financial Services',
    'Healthcare',
    'Supply Chain',
    'Cybersecurity',
    'Sales & Marketing'
  ];

  const testimonials = [
    {

      name: "Sarah Johnson",
      role: "CTO",
      company: "InnovateTech Solutions",
      content: "Zion Tech Group's AI services have transformed our operations. We've seen dramatic improvements in efficiency and cost savings across all departments.",
      rating: 5
    },
    {

      name: "Michael Chen",
      role: "Operations Director",
      company: "Global Dynamics Corp",
      content: "The AI-powered solutions have given us a competitive edge. Our customers notice the improved service quality and faster response times.",
      rating: 5
    },
    {

      name: "Emily Rodriguez",
      role: "VP of Technology",
      company: "Future Forward Inc",
      content: "Working with Zion Tech Group has been exceptional. Their AI services are cutting-edge and their support team is incredibly responsive.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Innovative AI Services Showcase 2025 — Zion Tech Group | Cutting-Edge AI Solutions"
        description="Discover our comprehensive suite of innovative AI services including project management, financial planning, healthcare analytics, supply chain optimization, and cybersecurity. Transform your business with intelligent automation."
        keywords="AI services, artificial intelligence, project management, financial planning, healthcare analytics, supply chain optimization, cybersecurity, Zion Tech Group"
        canonical="https://ziontechgroup.com/innovative-ai-services-showcase-2025"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2"/>
              Innovative AI Services 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative AI Services
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Showcase 2025</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our comprehensive suite of cutting-edge AI services designed to transform your business operations, 
              enhance productivity, and drive innovation across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              >
                📞 Call +1 (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                ✉️ Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our AI Service Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-slate-500 transition-all hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white"/>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-slate-700 text-blue-400 text-sm rounded-full mb-3">
                    {service.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0"/>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mb-6">
                  <p className="text-2xl font-bold text-white">{service.price}</p>
                </div>
                <div className="flex gap-3">
                  <Link 
                    to={service.href}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-3 px-6 rounded-lg font-semibold transition-all hover:scale-105"
                  >
                    Learn More
                  </Link>
                  <a 
                    href="/request-quote" 
                    className="flex-1 bg-transparent border-2 border-white text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cutting-Edge AI</h3>
              <p className="text-gray-300">Latest machine learning and AI technologies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300">SOC 2 compliant with enterprise-grade security</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>
              <p className="text-gray-300">24/7 dedicated technical support</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Rapid Deployment</h3>
              <p className="text-gray-300">Quick implementation and onboarding</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current"/>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                  <p className="text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of organizations already using our AI services to gain competitive advantages and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
            >
              📞 Call +1 (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-400 mb-4"/>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-white">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-4"/>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-400 mb-4"/>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300 text-center">
                364 E Main St STE 1008<br/>
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeAIServicesShowcase2025;