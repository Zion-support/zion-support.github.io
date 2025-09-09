import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Rocket, 
  Lock, 
  Globe, 
  Heart,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  BarChart3,
  Cpu,
  Database,
  Network,
  Code,
  Target,
  Award
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Index() {};
  return null;
}
},;
    {};
},;
    {};
}
  ];

  ];
  return (;
    <div className="min-h-screen bg-white">;
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">;
        <div className="max-w-5xl mx-auto px-6">;
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">;
            <Brain className="w-4 h-4 mr-2"  />;
            Revolutionary AI Solutions;
          </div>;
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI-Powered Micro SAAS Solutions</h1>;
          <p className="text-indigo-100 text-xl">;
            Transform your business with our comprehensive suite of 20+ cutting-edge AI micro SAAS services. ;
            From customer analytics to quantum computing, we provide real solutions with proven ROI.;
          </p>;
        </div>;
      </section>;

const itServices = [
  {
    id: 'infrastructure',
    name: 'IT Infrastructure',
    description: 'Modernize your IT infrastructure with scalable and secure solutions.',
    icon: Network,
    href: '/it-services/infrastructure'
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    description: 'Transform your business processes with digital technologies.',
    icon: TrendingUp,
    href: '/it-services/digital-transformation'
  },
  {
    id: 'consulting',
    name: 'IT Consulting',
    description: 'Expert guidance for your technology strategy and implementation.',
    icon: Users,
    href: '/it-services/consulting'
  },
  {
    id: 'onsite-support',
    name: 'Onsite Support',
    description: 'Professional IT support and maintenance services.',
    icon: Target,
    href: '/it-services/onsite-support'
  },
  {
    id: 'green-it',
    name: 'Green IT',
    description: 'Environmentally conscious IT solutions and practices.',
    icon: Heart,
    href: '/it-services/green-it'
  },
  {
    id: '5g-solutions',
    name: '5G Solutions',
    description: 'Leverage 5G technology for enhanced connectivity and performance.',
    icon: Zap,
    href: '/it-services/5g-solutions'
  }
];

const benefits = [
  {
    icon: Zap,
    title: 'Rapid Implementation',
    description: 'Get up and running quickly with our proven methodologies and pre-built solutions.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security and compliance built into every solution.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Growth',
    description: 'Solutions that grow with your business, from startup to enterprise.'
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: '24/7 support and maintenance from our expert team worldwide.'
  }
];

export default function ServicesIndex() {
  return (
    <>
      <SEO 
        title="Our Services | Zion Tech Group"
        description="Comprehensive technology solutions including AI, cybersecurity, cloud, IoT, quantum computing, and more. Transform your business with our expert services."
        canonical="https://ziontechgroup.com/services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Comprehensive technology solutions designed to transform your business 
                and drive sustainable growth in the digital age.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="btn-neon px-8 py-3 text-lg"
                >
                  Get Started
                </Link>
                <Link 
                  to="/contact" 
                  className="btn-outline px-8 py-3 text-lg"
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver results that matter.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-zion-slate-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </motion.div>
              ))}

            </ul>;
            <div className="mt-6 text-sm text-gray-600">;
              Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime SLA.;
            </div>;
            <div className="mt-6">;
              <Link ;
                href="/services/comprehensive-micro-saas-showcase" ;
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">;
                View All 15+ AI Services <ArrowRight className="w-4 h-4 ml-2" />;
              </Link>;
            </div>;
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">;
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>;
            <div className="grid md:grid-cols-3 gap-4">;
              {pricing.map((tier, index) => (;
                <div key={index} className="rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors">;
                  <div className="text-lg font-semibold mb-1">{tier.name}</div>;
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{tier.price}</div>;
                  <ul className="text-sm text-gray-600 space-y-1">;
                    {tier.details.map((detail, detailIndex) => (;
                      <li key={detailIndex}>{detail}</li>;
                    ))}

                  </ul>;
                </div>;
              ))}

            </div>;
            <div className="mt-6 flex flex-wrap gap-3">;
              <Link href="/pricing" className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center">;
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2"  />;
              </Link>;
              <Link href="/contact" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center">;
                Contact Sales <Phone className="w-4 h-4 ml-2"  />;
              </Link>;
              <a href="tel:+13024640950" className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors inline-flex items-center">;
                Call Now <Phone className="w-4 h-4 ml-2"  />;
              </a>;
            </div>;
      </section>;
      <section className="py-16 bg-gray-50">;
        <div className="max-w-6xl mx-auto px-6">;
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>;
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">;
                <div className="flex items-center mb-3">;
                  <Zap className="w-6 h-6 text-indigo-600 mr-3"  />;
                  <h3 className="text-lg font-semibold text-gray-900">Performance</h3>;
                </div>;
                <p className="text-gray-600">{benefit}</p>;
              </div>;
            ))}

          </div>;
      </section>;
      <section className="py-16">;
        <div className="max-w-6xl mx-auto px-6">;
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>;
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {};
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">;
                <div className="flex items-center mb-3">;
                  <Target className="w-5 h-5 text-indigo-600 mr-3"  />;
                  <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>;
                </div>;
                <p className="text-gray-600">Comprehensive index solutions tailored for {industry.toLowerCase()}.</p>;
              </div>;
            ))}

          </div>;
      </section>;
      <section className="py-16 bg-indigo-600">;
        <div className="max-w-4xl mx-auto px-6 text-center">;
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Index?</h2>;
          <p className="text-indigo-100 text-xl mb-8">;
            Get started with our AI-powered index platform today.;
          </p>;
          <div className="flex flex-col sm: flex-row gap-4 justify-center">;
            <Link href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">;
              Get Started <ArrowRight className="w-4 h-4 ml-2"  />;
            </Link>;
            <Link href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">;
              Schedule Demo <Mail className="w-4 h-4 ml-2"  />;
            </Link>;
          </div>;
      </section>;
    </div>;
  )}