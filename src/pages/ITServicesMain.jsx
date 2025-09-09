import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Cloud, 
  Shield, 
  Cpu, 
  Network, 
  Server, 
  Code, 
  Users,
  Zap,
  TrendingUp,
  Globe,
  Lock,
  BarChart3,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react';

export default function ITServicesMain() {
  const itServices = [
    {
      name: 'Infrastructure Services',
      description: 'Comprehensive IT infrastructure solutions including cloud migration, server management, and network optimization',
      href: '/it-services/infrastructure',
      icon: Server,
      features: ['Cloud migration', 'Server management', 'Network optimization', '24/7 monitoring'],
      price: 'Custom pricing',
      category: 'Infrastructure'
    },
    {
      name: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation services',
      href: '/it-services/digital-transformation',
      icon: TrendingUp,
      features: ['Strategy development', 'Process optimization', 'Technology implementation', 'Change management'],
      price: 'Project-based',
      category: 'Consulting'
    },
    {
      name: 'IT Consulting',
      description: 'Strategic IT consulting to align technology with business objectives',
      href: '/it-services/consulting',
      icon: Users,
      features: ['Technology assessment', 'Strategic planning', 'Vendor selection', 'ROI optimization'],
      price: '$200/hour',
      category: 'Consulting'
    },
    {
      name: 'Support & Maintenance',
      description: 'Ongoing IT support and maintenance services for business continuity',
      href: '/it-services/support',
      icon: Clock,
      features: ['24/7 helpdesk', 'Proactive monitoring', 'Regular maintenance', 'Emergency response'],
      price: '$150/hour',
      category: 'Support'
    }
  ];

  const serviceCategories = [
    {
      name: 'Cloud & DevOps',
      description: 'Cloud infrastructure, DevOps automation, and container orchestration',
      href: '/services/cloud-devops',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Cybersecurity',
      description: 'Comprehensive security solutions including threat detection and compliance',
      href: '/services/cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Data Analytics',
      description: 'Big data analytics, business intelligence, and data visualization',
      href: '/services/data-analytics',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'IoT & Edge Computing',
      description: 'Internet of Things solutions and edge computing infrastructure',
      href: '/services/iot-edge',
      icon: Cpu,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Expert Team',
      description: 'Certified professionals with years of industry experience',
      icon: Users
    },
    {
      title: 'Proven Track Record',
      description: 'Successfully delivered 500+ projects across various industries',
      icon: CheckCircle
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring services',
      icon: Clock
    },
    {
      title: 'Innovation Focus',
      description: 'Always at the forefront of emerging technologies',
      icon: Star
    }
  ];

  return (
    <>
      <SEO 
        title="IT Services - Infrastructure, Consulting & Digital Transformation | Zion Tech Group" 
        description="Comprehensive IT services including infrastructure management, digital transformation consulting, cybersecurity, cloud solutions, and ongoing support. Transform your business with our expert IT services."
        canonical="/it-services"
        url="https://ziontechgroup.com/it-services"
      />

      <main className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl text-zion-cyan mb-8">
              Comprehensive IT services to drive your business transformation
            </p>
            <p className="text-lg text-white/80 mb-8">
              From infrastructure management to digital transformation consulting, our IT services are designed to help businesses of all sizes leverage technology for growth, efficiency, and competitive advantage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-zion-cyan border border-zion-cyan py-3 px-6 rounded-lg hover:bg-zion-cyan hover:text-zion-slate transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Core IT Service Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => (
              <Link
                key={index}
                to={category.href}
                className="group bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/10 transition-all duration-200"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">{category.name}</h3>
                <p className="text-white/70 text-sm text-center">{category.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Main IT Services */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our IT Service Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/10 transition-all duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-white/80 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">{service.price}</div>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-white/70 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-200">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-white/70 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 border border-zion-cyan/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Let our expert team help you build a robust, scalable, and secure IT foundation that drives business growth and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-200"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-zion-cyan border border-zion-cyan py-3 px-8 rounded-lg hover:bg-zion-cyan hover:text-zion-slate transition-all duration-200"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}