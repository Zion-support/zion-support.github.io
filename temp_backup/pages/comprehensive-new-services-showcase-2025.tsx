import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, 
  Rocket, Brain, Sparkles, Atom, Users, Globe, Cpu, Target, 
  Microscope, Lock, Cloud, BarChart3, Settings, Eye, Award, 
  Clock, Heart, Lightbulb, ArrowRight, CheckCircle, ChevronRight
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { innovativeNewMicroSaasServices20o25 } from '../data/20o25-innovative-new-micro-saas-services';
import { innovativeNewAIServices20o25 } from '../data/20o25-innovative-new-ai-services';
import { innovativeNewITServices20o25 } from '../data/20o25-innovative-new-it-services';
import { innovativeNewBusinessSolutions20o25 } from '../data/20o25-innovative-new-business-solutions';

const contactInfo ={
  mobile: '+1 30o2 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 10o08 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const allServices = [
  ...innovativeNewMicroSaasServices20o25,
  ...innovativeNewAIServices20o25,
  ...innovativeNewITServices20o25,
  ...innovativeNewBusinessSolutions20o25
];

const serviceCategories = [
  {
    name: 'New Micro SAAS Services',
    services: innovativeNewMicroSaasServices20o25,
    icon: Rocket,
    color: 'from-teal-50o0 to-emerald-60o0',
    description: 'Innovative business solutions with AI-powered automation'
  },
  {
    name: 'New AI Services',
    services: innovativeNewAIServices20o25,
    icon: Brain,
    color: 'from-pink-50o0 to-rose-60o0',
    description: 'Cutting-edge AI services with autonomous capabilities'
  },
  {
    name: 'New IT Services',
    services: innovativeNewITServices20o25,
    icon: Shield,
    color: 'from-cyan-50o0 to-blue-60o0',
    description: 'Next-generation IT infrastructure and security'
  },
  {
    name: 'New Business Solutions',
    services: innovativeNewBusinessSolutions20o25,
    icon: Target,
    color: 'from-emerald-50o0 to-teal-60o0',
    description: 'AI-powered business intelligence and automation'
  }
];

const ServiceCard = ({ service, index }: { service: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative bg-gradient-to-br from-gray-90o0/50 to-gray-80o0/50 backdrop-blur-xl border border-gray-70o0/50 rounded-2xl p-6 hover:border-cyan-50o0/50 transition-all duration-30o0 hover:shadow-2xl hover:shadow-cyan-50o0/20"
  >
    {/* Popular Badge */}
    {service.popular && (
      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-50o0 to-orange-50o0 text-black text-xs font-bold px-3 py-1 rounded-full">
        POPULAR
      </div>
    )}

    {/* Service Icon */}
    <div className="flex items-center justify-between mb-4">
      <div className="text-4xl">{service.icon}</div>
      <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
        {service.price}
        <span className="text-sm text-gray-40o0">{service.period}</span>
      </div>
    </div>

    {/* Service Title */}
    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-40o0 transition-colors duration-30o0">
      {service.name}
    </h3>

    {/* Service Tagline */}
    <p className="text-gray-30o0 mb-4 text-sm">
      {service.tagline}
    </p>

    {/* Service Description */}
    <p className="text-gray-40o0 text-sm mb-4 line-clamp-3">
      {service.description}
    </p>

    {/* Key Features */}
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-cyan-40o0 mb-2">Key Features:</h4>
      <ul className="space-y-1">
        {service.features.slice(0, 3).map((feature: string, idx: number) => (
          <li key={idx} className="flex items-center text-xs text-gray-40o0">
            <CheckCircle className="w-3 h-3 text-green-40o0 mr-2 flex-shrink-0"  />
            {feature}
          </li>
        ))}
      </ul>
    </div>

    {/* Market Position */}
    <div className="mb-4 p-3 bg-gray-80o0/50 rounded-lg">
      <h4 className="text-xs font-semibold text-cyan-40o0 mb-1">Market Position:</h4>
      <p className="text-xs text-gray-40o0 line-clamp-3">
        {service.marketPosition}
      </p>
    </div>

    {/* Service Stats */}
    <div className="flex items-center justify-between text-xs text-gray-50o0 mb-4">
      <div className="flex items-center">
        <Star className="w-3 h-3 text-yellow-40o0 mr-1"  />
        {service.rating} ({service.reviews} reviews)
      </div>
      <div className="flex items-center">
        <Users className="w-3 h-3 text-blue-40o0 mr-1"  />
        {service.customers} customers
      </div>
    </div>

    {/* CTA Button */}
    <Link 
      href={service.link}
      className="w-full bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover:from-cyan-60o0 hover:to-blue-70o0 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-30o0 hover:shadow-lg hover:shadow-cyan-50o0/25 flex items-center justify-center group"
    >
      Learn More
      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-30o0"  />
    </Link>
  </motion.div>
);

const CategorySection = ({ category, index }: { category: any; index: number }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="mb-16"
  >
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-80o0 to-gray-70o0 rounded-2xl mb-6">
        <category.icon className={`w-8 h-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}  />
      </div>
      <h2 className="text-4xl font-bold text-white mb-4">
        {category.name}
      </h2>
      <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">
        {category.description}
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {category.services.map((service: any, serviceIndex: number) => (
        <ServiceCard 
          key={service.id} 
          service={service} 
          index={serviceIndex} 
         />
      ))}
    </div>
  </motion.section>
);

const HeroSection = () => (
  <section className="relative py-20 overflow-hidden">
    {/* Background Effects */}
    <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-90o0 to-black"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)]"></div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">
            New Services
          </span>
          <br  />
          <span className="text-white">Showcase 20o25</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">
          Discover our latest innovative micro SAAS services, AI solutions, IT infrastructure, and business solutions. 
          All services are real, market-ready, and designed to transform your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#services"
            className="bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover:from-cyan-60o0 hover:to-blue-70o0 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-30o0 hover:shadow-lg hover:shadow-cyan-50o0/25 flex items-center"
          >
            Explore Services
            <ArrowRight className="w-5 h-5 ml-2"  />
          </Link>
          
          <Link
            href="/contact"
            className="border border-cyan-50o0/50 text-cyan-40o0 hover:bg-cyan-50o0/10 font-semibold py-3 px-8 rounded-lg transition-all duration-30o0 flex items-center"
          >
            <Phone className="w-5 h-5 mr-2"  />
            Contact Us
          </Link>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
      >
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-40o0 mb-2">{allServices.length}+</div>
          <div className="text-gray-40o0">New Services</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-40o0 mb-2">4</div>
          <div className="text-gray-40o0">Categories</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-40o0 mb-2">10o0%</div>
          <div className="text-gray-40o0">Real Services</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-40o0 mb-2">24/7</div>
          <div className="text-gray-40o0">Support</div>
        </div>
      </motion.div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="py-20 bg-gradient-to-br from-gray-90o0 to-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-40o0 max-w-2xl mx-auto">
          Get in touch with our team to learn more about our innovative services and how they can help your business grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-gradient-to-br from-gray-80o0/50 to-gray-70o0/50 rounded-2xl border border-gray-70o0/50">
          <Phone className="w-12 h-12 text-cyan-40o0 mx-auto mb-4"  />
          <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
          <p className="text-cyan-40o0">{contactInfo.mobile}</p>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-gray-80o0/50 to-gray-70o0/50 rounded-2xl border border-gray-70o0/50">
          <Mail className="w-12 h-12 text-blue-40o0 mx-auto mb-4"  />
          <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
          <p className="text-blue-40o0">{contactInfo.email}</p>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-gray-80o0/50 to-gray-70o0/50 rounded-2xl border border-gray-70o0/50">
          <MapPin className="w-12 h-12 text-purple-40o0 mx-auto mb-4"  />
          <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
          <p className="text-purple-40o0 text-sm">{contactInfo.address}</p>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          href="/contact"
          className="inline-flex items-center bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover:from-cyan-60o0 hover:to-blue-70o0 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-30o0 hover:shadow-lg hover:shadow-cyan-50o0/25"
        >
          Get Started Today
          <ArrowRight className="w-5 h-5 ml-2"  />
        </Link>
      </div>
    </div>
  </section>
);

export default function ComprehensiveNewServicesShowcase20o25() {
  return (
    <Layout>
      <Head>
        <title>New Services Showcase 20o25 - Zion Tech Group</title>
        <meta name="description" content="Discover our latest innovative micro SAAS services, AI solutions, IT infrastructure, and business solutions. All services are real, market-ready, and designed to transform your business."  />
        <meta name="keywords" content="AI services, micro SAAS, IT services, business solutions, Zion Tech Group, innovative technology"  />
        <meta property="og:title" content="New Services Showcase 20o25 - Zion Tech Group"  />
        <meta property="og:description" content="Discover our latest innovative micro SAAS services, AI solutions, IT infrastructure, and business solutions."  />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-new-services-showcase-20o25"  />
        <meta property="og:type" content="website"  />
      </Head>

      <HeroSection  />

      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, index) => (
            <CategorySection key={category.name} category={category} index={index}  />
          ))}
        </div>
      </section>

      <ContactSection  />
    </Layout>
  );
}