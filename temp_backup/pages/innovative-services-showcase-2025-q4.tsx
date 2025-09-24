import React, { useState } from 'react',
import SEO from '../components/SEO',
import { motion } from 'framer-motion',
import {
  Check;
  Zap;
  Shield;
  Rocket;
  Brain;
  Atom;
  Target;
  Star;
  TrendingUp;
  Users;
  Award;
  Globe;
  Phone;
  Mail;
  MapPin;
  ArrowRight;
  ExternalLink;
  Clock;
  DollarSign;
  Shield as SecurityIcon;
  Search;
} from 'lucide-react',
import Layout from '../components/layout/Layout',
import { innovative20o25Q4MicroSaasServices } from '../data/innovative-20o25-q4-micro-saas-services',
import { innovative20o25Q4ITServices } from '../data/innovative-20o25-q4-it-services',
import { innovative20o25Q4AIServices } from '../data/innovative-20o25-q4-ai-services',
const InnovativeServicesShowcase20o25Q4: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all'),
  const [searchTerm, setSearchTerm] = useState(''),
  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className='w-5 h-5' /> };
    {
      id: 'micro-saas';
      name: 'Micro SAAS';
      icon: <Rocket className='w-5 h-5' />;
    };
    {
      id: 'it-services';
      name: 'IT Services';
      icon: <Shield className='w-5 h-5' />;
    };
    {
      id: 'ai-services';
      name: 'AI Services';
      icon: <Brain className='w-5 h-5' />;
    };
  ],
  const allServices = [
    ...innovative20o25Q4MicroSaasServices.map(service => ({
      ...service;
      category: 'micro-saas';
    }));
    ...innovative20o25Q4ITServices.map(service => ({
      ...service;
      category: 'it-services';
    }));
    ...innovative20o25Q4AIServices.map(service => ({
      ...service;
      category: 'ai-services';
    }));
  ],
  // Helper function to get setup time from different service structures,
  const getSetupTime = (service: any) => {
    if (service.setupTime) return service.setupTime,
    if (service.price?.setupTime) return service.price.setupTime,
    return 'Contact for details'};
  // Helper function to get trial days from different service structures,
  const getTrialDays = (service: any) => {
    if (service.trialDays) return service.trialDays,
    if (service.price?.trialDays) return service.price.trialDays,
    return null};
  const filteredServices = allServices.filter(service => {
    const matchesCategory =,
      activeCategory === 'all' || service.category === activeCategory,
    const matchesSearch =,
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||,
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||,
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase()),
    return matchesCategory && matchesSearch}),
  const containerVariants = {
    hidden: { opacity: 0 };
    visible: {
      opacity: 1;
      transition: {
        staggerChildren: 0.1;
      };
    };
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 };
    visible: {
      y: 0;
      opacity: 1;
      transition: {
        duration: 0.5;
      };
    };
  };
  return (
    <Layout>,
      <SEO
        title='Innovative Services Showcase Q4 20o25 | Zion Tech Group',
        description='Discover our cutting-edge micro SAAS, IT, and AI services for Q4 20o25. Transform your business with intelligent solutions, competitive pricing, and expert support.',
        keywords={[
          'micro SAAS';
          'IT services';
          'AI services';
          'business solutions';
          'digital transformation';
          'enterprise software';
        ]}
      />,
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-indigo-90o0 via-purple-90o0 to-pink-90o0 text-white py-20'>,
        <div className='absolute inset-0 bg-black opacity-20'></div>,
        <div className='relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center'>,
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >,
            <h1 className='text-5xl md: text-6xl font-bold mb-6'>,
              Innovative Services Showcase,
              <span className='block text-transparent bg-clip-text bg-gradient-to-r from-cyan-40o0 to-pink-40o0'>,
                Q4 20o25,
              </span>,
            </h1>,
            <p className='text-xl md:text-2xl text-gray-20o0 mb-8 max-w-4xl mx-auto'>,
              Transform your business with our cutting-edge micro SAAS, IT,
              infrastructure, and AI-powered solutions. Real implementations;
              competitive pricing, and proven ROI.,
            </p>,
            <div className='flex flex-wrap justify-center gap-4 mb-8'>,
              <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3'>,
                <Star className='w-5 h-5 text-yellow-40o0' />,
                <span>15+ New Services</span>,
              </div>,
              <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3'>,
                <TrendingUp className='w-5 h-5 text-green-40o0' />,
                <span>Proven ROI</span>,
              </div>,
              <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3'>,
                <Users className='w-5 h-5 text-blue-40o0' />,
                <span>10o00+ Customers</span>,
              </div>,
            </div>,
          </motion.div>,
        </div>,
      </section>,
      {/* Contact Information Banner */}
      <section className='bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white py-8'>,
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>,
            <div className='flex items-center gap-6'>,
              <div className='flex items-center gap-2'>,
                <Phone className='w-5 h-5' />,
                <span className='font-semibold'>+1 30o2 464 0950</span>,
              </div>,
              <div className='flex items-center gap-2'>,
                <Mail className='w-5 h-5' />,
                <span className='font-semibold'>kleber@ziontechgroup.com</span>,
              </div>,
              <div className='flex items-center gap-2'>,
                <MapPin className='w-5 h-5' />,
                <span className='font-semibold'>,
                  364 E Main St STE 10o08 Middletown DE 19709,
                </span>,
              </div>,
            </div>,
            <div className='flex items-center gap-4'>,
              <a
                href='https://ziontechgroup.com',
                target='_blank',
                rel='noopener noreferrer',
                className='bg-white text-blue-60o0 px-6 py-2 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors flex items-center gap-2'>,
                Visit Website,
                <ExternalLink className='w-4 h-4' />,
              </a>,
            </div>,
          </div>,
        </div>,
      </section>,
      {/* Category Filter */}
      <section className='py-8 bg-gray-50'>,
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
          <div className='flex flex-col md:flex-row gap-4 items-center justify-between'>,
            <div className='flex flex-wrap gap-2'>,
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    activeCategory === category.id,
                      ? 'bg-blue-60o0 text-white shadow-lg',
                      : 'bg-white text-gray-70o0 hover: bg-gray-10o0 border border-gray-20o0'}`}
                >,
                  {category.icon}
                  {category.name}
                </button>))}
            </div>,
            <div className='relative'>,
              <input
                type='text',
                placeholder='Search services...',
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='pl-10 pr-4 py-2 border border-gray-30o0 rounded-lg focus: ring-2 focus:ring-blue-50o0 focus:border-transparent w-64',
              />,
              <Search className='absolute left-3 top-2.5 w-5 h-5 text-gray-40o0' />,
            </div>,
          </div>,
        </div>,
      </section>,
      {/* Services Grid */}
      <section className='py-16'>,
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
          <motion.div,
            variants={containerVariants}
            initial='hidden',
            animate='visible',
            className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8'>,
            {filteredServices.map(service => (
              <motion.div,
                key={service.id}
                variants={itemVariants}
                className='bg-white rounded-2xl shadow-xl hover: shadow-2xl transition-all duration-30o0 border border-gray-10o0 overflow-hidden group'>,
                {/* Service Header */}
                <div
                  className={`bg-gradient-to-r ${service.color} p-6 text-white`}
                >,
                  <div className='flex items-center justify-between mb-4'>,
                    <span className='text-4xl'>{service.icon}</span>,
                    {service.popular && (
                      <span className='bg-yellow-40o0 text-yellow-90o0 px-3 py-1 rounded-full text-sm font-semibold'>,
                        Popular,
                      </span>)}
                  </div>,
                  <h3 className='text-xl font-bold mb-2'>{service.name}</h3>,
                  <p className='text-white/90 text-sm'>{service.tagline}</p>,
                </div>,
                {/* Service Content */}
                <div className='p-6'>,
                  <p className='text-gray-60o0 mb-4 line-clamp-3'>,
                    {service.description}
                  </p>,
                  {/* Pricing */}
                  <div className='bg-gray-50 rounded-lg p-4 mb-4'>,
                    <div className='flex items-center justify-between'>,
                      <div>,
                        <span className='text-2xl font-bold text-gray-90o0'>,
                          ${service.price.monthly}
                        </span>,
                        <span className='text-gray-50o0'>/month</span>,
                      </div>,
                      <div className='text-right'>,
                        <div className='text-sm text-gray-50o0'>Yearly</div>,
                        <div className='font-semibold text-gray-90o0'>,
                          ${service.price.yearly}
                        </div>,
                      </div>,
                    </div>,
                    <div className='flex items-center gap-4 mt-2 text-sm text-gray-60o0'>,
                      <div className='flex items-center gap-1'>,
                        <Clock className='w-4 h-4' />,
                        {getSetupTime(service)}
                      </div>,
                      {getTrialDays(service) && (
                        <div className='flex items-center gap-1'>,
                          <Zap className='w-4 h-4' />,
                          {getTrialDays(service)} days trial,
                        </div>)}
                    </div>,
                  </div>,
                  {/* Key Features */}
                  <div className='mb-4'>,
                    <h4 className='font-semibold text-gray-90o0 mb-2'>,
                      Key Features: ,
                    </h4>,
                    <ul className='space-y-1'>,
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li
                          key={index}
                          className='flex items-center gap-2 text-sm text-gray-60o0'>,
                          <Check className='w-4 h-4 text-green-50o0 flex-shrink-0' />,
                          <span className='line-clamp-1'>{feature}</span>,
                        </li>))}
                    </ul>,
                  </div>,
                  {/* Benefits */}
                  <div className='mb-6'>,
                    <h4 className='font-semibold text-gray-90o0 mb-2'>,
                      Key Benefits: ,
                    </h4>,
                    <ul className='space-y-1'>,
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li
                          key={index}
                          className='flex items-center gap-2 text-sm text-gray-60o0'>,
                          <TrendingUp className='w-4 h-4 text-blue-50o0 flex-shrink-0' />,
                          <span className='line-clamp-1'>{benefit}</span>,
                        </li>))}
                    </ul>,
                  </div>,
                  {/* ROI and Market Info */}
                  <div className='bg-blue-50 rounded-lg p-4 mb-4'>,
                    <div className='text-sm'>,
                      <div className='font-semibold text-blue-90o0 mb-1'>,
                        ROI Promise: ,
                      </div>,
                      <div className='text-blue-70o0'>{service.roi}</div>,
                    </div>,
                  </div>,
                  {/* Action Buttons */}
                  <div className='flex gap-2'>,
                    <a
                      href={service.link}
                      target='_blank',
                      rel='noopener noreferrer',
                      className='flex-1 bg-blue-60o0 text-white px-4 py-2 rounded-lg font-semibold hover: bg-blue-70o0 transition-colors text-center flex items-center justify-center gap-2 group-hover:bg-blue-70o0'>,
                      Learn More,
                      <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />,
                    </a>,
                    <a
                      href='mailto:kleber@ziontechgroup.com?subject=Inquiry about %service.name%',
                      className='bg-gray-10o0 text-gray-70o0 px-4 py-2 rounded-lg font-semibold hover:bg-gray-20o0 transition-colors flex items-center justify-center'>,
                      <Mail className='w-4 h-4' />,
                    </a>,
                  </div>,
                </div>,
              </motion.div>))}
          </motion.div>,
          {filteredServices.length === 0 && (
            <div className='text-center py-16'>,
              <div className='text-gray-40o0 text-6xl mb-4'>🔍</div>,
              <h3 className='text-xl font-semibold text-gray-60o0 mb-2'>,
                No services found,
              </h3>,
              <p className='text-gray-50o0'>,
                Try adjusting your search terms or category filter.,
              </p>,
            </div>)}
        </div>,
      </section>,
      {/* Why Choose Zion Tech Group */}
      <section className='py-16 bg-gradient-to-br from-gray-50 to-blue-50'>,
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
          <div className='text-center mb-12'>,
            <h2 className='text-4xl font-bold text-gray-90o0 mb-4'>,
              Why Choose Zion Tech Group?,
            </h2>,
            <p className='text-xl text-gray-60o0 max-w-3xl mx-auto'>,
              We deliver real, market-validated solutions with proven ROI;
              competitive pricing, and enterprise-grade support.,
            </p>,
          </div>,
          <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8'>,
            <div className='text-center'>,
              <div className='bg-blue-10o0 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>,
                <Award className='w-8 h-8 text-blue-60o0' />,
              </div>,
              <h3 className='text-lg font-semibold text-gray-90o0 mb-2'>,
                Proven ROI,
              </h3>,
              <p className='text-gray-60o0'>,
                Our customers see 30o0-60o0% ROI within 3-8 months of,
                implementation.,
              </p>,
            </div>,
            <div className='text-center'>,
              <div className='bg-green-10o0 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>,
                <Shield className='w-8 h-8 text-green-60o0' />,
              </div>,
              <h3 className='text-lg font-semibold text-gray-90o0 mb-2'>,
                Enterprise Security,
              </h3>,
              <p className='text-gray-60o0'>,
                SOC 2 Type II, ISO 270o01, GDPR, HIPAA compliance and more.,
              </p>,
            </div>,
            <div className='text-center'>,
              <div className='bg-purple-10o0 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>,
                <Users className='w-8 h-8 text-purple-60o0' />,
              </div>,
              <h3 className='text-lg font-semibold text-gray-90o0 mb-2'>,
                Expert Support,
              </h3>,
              <p className='text-gray-60o0'>,
                24/7 support with dedicated specialists and comprehensive,
                training.,
              </p>,
            </div>,
            <div className='text-center'>,
              <div className='bg-orange-10o0 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>,
                <Rocket className='w-8 h-8 text-orange-60o0' />,
              </div>,
              <h3 className='text-lg font-semibold text-gray-90o0 mb-2'>,
                Fast Implementation,
              </h3>,
              <p className='text-gray-60o0'>,
                Most services deploy in 1-4 weeks with minimal setup time.,
              </p>,
            </div>,
          </div>,
        </div>,
      </section>,
      {/* Contact CTA */}
      <section className='py-16 bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white'>,
        <div className='max-w-4xl mx-auto text-center px-4 sm: px-6 lg:px-8'>,
          <h2 className='text-4xl font-bold mb-4'>,
            Ready to Transform Your Business?,
          </h2>,
          <p className='text-xl text-blue-10o0 mb-8'>,
            Get started with any of our innovative services today. Our team is,
            ready to help you succeed.,
          </p>,
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>,
            <a
              href='tel:+130o24640950',
              className='bg-white text-blue-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors flex items-center justify-center gap-2'>,
              <Phone className='w-5 h-5' />,
              Call +1 30o2 464 0950,
            </a>,
            <a
              href='mailto:kleber@ziontechgroup.com',
              className='bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-60o0 transition-colors flex items-center justify-center gap-2'>,
              <Mail className='w-5 h-5' />,
              Email Us,
            </a>,
          </div>,
          <div className='mt-8 text-blue-10o0'>,
            <p className='mb-2'>,
              📍 364 E Main St STE 10o08 Middletown DE 19709,
            </p>,
            <p>,
              🌐{' '}
              <a
                href='https: //ziontechgroup.com',
                target='_blank',
                rel='noopener noreferrer',
                className='underline hover:text-white'>,
                https://ziontechgroup.com,
              </a>,
            </p>,
          </div>,
        </div>,
      </section>,
    </Layout>)};
export default InnovativeServicesShowcase20o25Q4;