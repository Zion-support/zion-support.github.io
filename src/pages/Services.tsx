import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from "@/components/SEO";
import { UltimateServicesShowcase } from "@/components/UltimateServicesShowcase";
import { 
  Brain, 
  Cloud, 
  Code, 
  Shield, 
  Globe, 
  Zap, 
  Star, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Users,
  Target,
  Award
} from 'lucide-react';

// Import the new services
import { ultimateInnovativeServices2025 } from '../../data/2025-ultimate-innovative-services-expansion';
import { enterpriseITInfrastructureServices2025 } from '../../data/2025-enterprise-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../../data/2025-innovative-micro-saas-solutions';

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    id: 'ai-autonomous',
    name: 'AI & Autonomous Systems',
    description: 'Revolutionary AI solutions that transform business operations',
    icon: <Brain className="w-12 h-12" />,
    color: 'from-purple-600 to-pink-700',
    services: ultimateInnovativeServices2025.filter(s => s.category.includes('AI')),
    benefits: [
      'Increase efficiency by 300-1000%',
      'Reduce operational costs by 60-80%',
      '24/7 autonomous operation',
      'Predictive analytics and insights',
      'Zero human intervention required'
    ]
  },
  {
    id: 'it-infrastructure',
    name: 'IT Infrastructure & Enterprise',
    description: 'Cutting-edge infrastructure solutions for modern businesses',
    icon: <Cloud className="w-12 h-12" />,
    color: 'from-blue-600 to-cyan-700',
    services: enterpriseITInfrastructureServices2025,
    benefits: [
      '99.99% uptime guarantee',
      'Scalable cloud solutions',
      'Advanced security protocols',
      'Cost optimization',
      'Future-ready technology'
    ]
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS Solutions',
    description: 'Innovative software solutions for small businesses',
    icon: <Code className="w-12 h-12" />,
    color: 'from-green-600 to-emerald-700',
    services: innovativeMicroSaasSolutions2025,
    benefits: [
      'Affordable pricing starting at $199/month',
      'Quick setup in 1-3 days',
      'AI-powered automation',
      'Proven ROI improvements',
      '24/7 support and optimization'
    ]
  }
];

const stats = [
  { label: 'Total Services', value: '30+', icon: <Zap className="w-6 h-6" /> },
  { label: 'Active Customers', value: '500+', icon: <Users className="w-6 h-6" /> },
  { label: 'Success Rate', value: '99.5%', icon: <Target className="w-6 h-6" /> },
  { label: 'Innovation Awards', value: '15+', icon: <Award className="w-6 h-6" /> }
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allServices = [
    ...ultimateInnovativeServices2025,
    ...enterpriseITInfrastructureServices2025,
    ...innovativeMicroSaasSolutions2025
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Innovative Services - Zion Tech Group"
        description="Discover our revolutionary AI, IT infrastructure, and micro SAAS solutions. Transform your business with cutting-edge technology and proven results."
        canonical="/services"
        url="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Services & Solutions</span>
            </h1>
            <p className="text-xl text-zion-gray-light max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your business with our cutting-edge AI, IT infrastructure, and micro SAAS solutions. 
              Each service is designed to deliver breakthrough results and competitive advantages.
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-6 text-zion-gray-light mb-8">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-zion-cyan" />
                <span>{contact.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-zion-cyan" />
                <span>{contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-zion-cyan" />
                <span>{contact.address}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-zion-slate-light rounded-xl p-4 border border-zion-slate"
                >
                  <div className="flex items-center justify-center mb-2 text-zion-cyan">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-zion-gray-light">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-20 bg-zion-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Service Categories
            </h2>
            <p className="text-xl text-zion-gray-light max-w-3xl mx-auto">
              Our services span three major categories, each designed to address specific business needs 
              and deliver measurable results.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="bg-zion-slate-light rounded-2xl p-8 border border-zion-slate hover:border-zion-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-6`}>
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                <p className="text-zion-gray-light mb-6 leading-relaxed">{category.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {category.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-zion-gray-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <span className="text-zion-cyan font-semibold text-lg">
                    {category.services.length} Services Available
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-gray-light max-w-3xl mx-auto">
              We're not just another technology company. We're your innovation partner, 
              committed to delivering breakthrough solutions that transform your business.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Proven Results",
                description: "Our services deliver measurable ROI with documented success stories across industries."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Enterprise Security",
                description: "Bank-level security with compliance certifications and 24/7 threat monitoring."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Support",
                description: "24/7 support team available worldwide with multilingual capabilities."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Innovation Leader",
                description: "First-to-market solutions with patents and trade secrets protecting your advantage."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-zion-cyan to-zion-blue flex items-center justify-center text-white mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-gray-light leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Showcase */}
      <UltimateServicesShowcase />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-zion-slate to-zion-slate-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-gray-light mb-8 leading-relaxed">
              Join hundreds of companies already using our innovative solutions to gain competitive advantages 
              and achieve breakthrough results. Let's discuss how we can help you succeed.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-4 rounded-lg font-semibold hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 flex items-center gap-2 text-lg"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${contact.mobile}`
                  .replace(/\s/g, '')
                  .replace(/[^\d+]/g, '')}
                className="bg-zion-slate-light border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            <div className="mt-8 p-6 bg-zion-slate rounded-xl border border-zion-cyan">
              <h3 className="text-xl font-bold text-white mb-3">Special Offer for New Customers</h3>
              <p className="text-zion-gray-light mb-4">
                Get 30 days free trial on any service + 50% off your first 3 months. 
                Limited time offer - contact us today!
              </p>
              <div className="flex items-center justify-center gap-2 text-zion-cyan font-semibold">
                <Mail className="w-5 h-5" />
                <span>{contact.email}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
