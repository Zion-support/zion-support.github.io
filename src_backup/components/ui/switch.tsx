import React, { useState } from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  SERVICE_CATEGORIES,
  ALL_SERVICES,
  AI_SERVICES,
  IT_SERVICES,
  MICRO_SAAS_SERVICES,
  CYBERSECURITY_SERVICES,
  DATA_ANALYTICS_SERVICES,
<<<<<<< HEAD
  CLOUD_SOLUTIONS,;} from '@/data/servicesData';
=======
  CLOUD_SOLUTIONS,;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { 
  SERVICE_CATEGORIES;
  ALL_SERVICES, 
  AI_SERVICES, 
  IT_SERVICES, 
  MICRO_SAAS_SERVICES;
  CYBERSECURITY_SERVICES;
  DATA_ANALYTICS_SERVICES;
  CLOUD_SOLUTIONS
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
} from '@/data/servicesData';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { ServiceCategory, ServiceSolution } from '@/types/services';

export function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = ALL_SERVICES.filter(service => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
<<<<<<< HEAD
    return matchesCategory && matchesSearch;  });

  const getServicesByCategory = (categoryId: string) => {
    switch (categoryId) {
=======
    return matchesCategory && matchesSearch;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  });

  const getServicesByCategory = (categoryId: string) => {
    switch (categoryId) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      case 'ai-services':
        return AI_SERVICES;
      case 'it-services':
        return IT_SERVICES;
      case 'micro-saas':
        return MICRO_SAAS_SERVICES;
      case 'cybersecurity':
        return CYBERSECURITY_SERVICES;
      case 'data-analytics':
        return DATA_ANALYTICS_SERVICES;
      case 'cloud-solutions':
        return CLOUD_SOLUTIONS;
      default:
        return ALL_SERVICES;
<<<<<<< HEAD
=======
=======
      case 'ai-services': return AI_SERVICES;
      case 'it-services': return IT_SERVICES;
      case 'micro-saas': return MICRO_SAAS_SERVICES;
      case 'cybersecurity': return CYBERSECURITY_SERVICES;
      case 'data-analytics': return DATA_ANALYTICS_SERVICES;
      case 'cloud-solutions': return CLOUD_SOLUTIONS;
      default: return ALL_SERVICES
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    }
  };

  const selectedServices =
    selectedCategory === 'all'
      ? filteredServices
      : getServicesByCategory(selectedCategory);

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white'>
        <div className='container mx-auto px-4 py-20'>
          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-5xl font-bold mb-6'>
              Zion Tech Group Services
            </h1>
            <p className='text-xl mb-8 text-blue-100'>
              Comprehensive IT, AI, and Micro SAAS solutions to transform your
              business. From cutting-edge artificial intelligence to robust
              infrastructure support.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <a
                href='tel:+13024640950'
                className='bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors'
              >
                📞 Call Now: +1 302 464 0950
              </a>
<<<<<<< HEAD
              <a
                href='mailto:kleber@ziontechgroup.com'
                className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors'              >
=======
<<<<<<< HEAD
              <a
                href='mailto:kleber@ziontechgroup.com'
                className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors'
=======
      case 'ai-services': return AI_SERVICES;
      case 'it-services': return IT_SERVICES;
      case 'micro-saas': return MICRO_SAAS_SERVICES;
      case 'cybersecurity': return CYBERSECURITY_SERVICES;
      case 'data-analytics': return DATA_ANALYTICS_SERVICES;
      case 'cloud-solutions': return CLOUD_SOLUTIONS;
      default: return ALL_SERVICES
    }
  };

  const selectedServices = selectedCategory === 'all' ? filteredServices : getServicesByCategory(selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Zion Tech Group Services
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Comprehensive IT, AI, and Micro SAAS solutions to transform your business. 
              From cutting-edge artificial intelligence to robust infrastructure support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                📞 Call Now: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div className='bg-white border-b'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex flex-wrap justify-center items-center gap-8 text-gray-600'>
            <div className='flex items-center gap-2'>
              <span className='text-blue-600'>📍</span>
<<<<<<< HEAD
=======
=======
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-blue-600">📍</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-blue-600'>📱</span>
              <span>+1 302 464 0950</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-blue-600'>✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <div className='flex items-center gap-2'>
              <span className='text-blue-600'>🌐</span>
              <a
                href='https://ziontechgroup.com'
                className='text-blue-600 hover:underline'
<<<<<<< HEAD
              >                ziontechgroup.com
=======
              >
=======
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-blue-600">📍</span>
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">📱</span>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">🌐</span>
              <a href="https://ziontechgroup.com" className="text-blue-600 hover:underline">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="flex items-center gap-2">
              <span className="text-blue-600">🌐</span>
              <a href="https://ziontechgroup.com" className="text-blue-600 hover:underline">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                ziontechgroup.com
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div className='container mx-auto px-4 py-8'>
        <div className='bg-white rounded-xl shadow-lg p-6 mb-8'>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex-1'>
<<<<<<< HEAD
=======
=======
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <input
                type='text'
                placeholder='Search services...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            </div>
<<<<<<< HEAD
            <div className='flex gap-2'>
              {SERVICE_CATEGORIES.map(category => (                <button
=======
<<<<<<< HEAD
            <div className='flex gap-2'>
              {SERVICE_CATEGORIES.map(category => (
=======
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              {SERVICE_CATEGORIES.map((category) => (
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="flex gap-2">
              {SERVICE_CATEGORIES.map((category) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <button
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
<<<<<<< HEAD
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
          {selectedServices.map(service => (            <ServiceCard key={service.id} service={service} />
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
          {selectedServices.map(service => (
=======
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {selectedServices.map((service) => (
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {selectedServices.map((service) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <ServiceCard key={service.id} service={service} />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          ))}
        </div>

        {selectedServices.length === 0 && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <div className='text-center py-12'>
            <h3 className='text-xl text-gray-600 mb-4'>No services found</h3>
            <p className='text-gray-500'>
              Try adjusting your search or filter criteria
<<<<<<< HEAD
            </p>          </div>
=======
            </p>
=======
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        )}
      </div>

      {/* Why Choose Zion Tech Group */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
<<<<<<< HEAD
=======
=======
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              Why Choose Zion Tech Group?
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              We deliver innovative, reliable, and cost-effective solutions that
              drive real business results
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🚀</span>
              </div>
              <h3 className='text-xl font-semibold mb-2'>Innovation First</h3>
              <p className='text-gray-600'>
                Cutting-edge AI and technology solutions
              </p>
            </div>

            <div className='text-center'>
              <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🛡️</span>
              </div>
              <h3 className='text-xl font-semibold mb-2'>
                Enterprise Security
              </h3>
              <p className='text-gray-600'>
                SOC 2, HIPAA, GDPR compliant solutions
              </p>
            </div>

            <div className='text-center'>
              <div className='bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>⚡</span>
              </div>
              <h3 className='text-xl font-semibold mb-2'>Fast Deployment</h3>
              <p className='text-gray-600'>Quick setup and implementation</p>
            </div>

            <div className='text-center'>
              <div className='bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🎯</span>
              </div>
<<<<<<< HEAD
              <h3 className='text-xl font-semibold mb-2'>Proven Results</h3>
              <p className='text-gray-600'>Trusted by businesses nationwide</p>            </div>
=======
<<<<<<< HEAD
              <h3 className='text-xl font-semibold mb-2'>Proven Results</h3>
              <p className='text-gray-600'>Trusted by businesses nationwide</p>
=======
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver innovative, reliable, and cost-effective solutions that drive real business results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-600">SOC 2, HIPAA, GDPR compliant solutions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Deployment</h3>
              <p className="text-gray-600">Quick setup and implementation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Trusted by businesses nationwide</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Trusted by businesses nationwide</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </div>
        </div>
      </div>

      {/* CTA Section */}
<<<<<<< HEAD
      <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold mb-6'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold mb-6'>
=======
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            Ready to Transform Your Business?
          </h2>
          <p className='text-xl mb-8 text-blue-100 max-w-2xl mx-auto'>
            Get started with Zion Tech Group today and discover how our
            innovative solutions can drive growth, efficiency, and success for
            your organization.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <a
              href='tel:+13024640950'
              className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors'
            >
              📞 Call +1 302 464 0950
            </a>
            <a
              href='mailto:kleber@ziontechgroup.com'
              className='bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors'
            >
              ✉️ Get Free Consultation
            </a>
<<<<<<< HEAD
            <a
              href='https://ziontechgroup.com'
              className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors'            >
=======
<<<<<<< HEAD
            <a
              href='https://ziontechgroup.com'
              className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors'
=======
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get started with Zion Tech Group today and discover how our innovative solutions can drive growth, efficiency, and success for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel: +13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              📞 Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
            >
              ✉️ Get Free Consultation
            </a>
            <a 
              href="https://ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <a 
              href="https://ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              🌐 Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  );

interface ServiceCardProps {
  service: ServiceSolution;
<<<<<<< HEAD
=======
=======
  )
}

interface ServiceCardProps {
  service: ServiceSolution
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}

interface ServiceCardProps {
  service: ServiceSolution
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
function ServiceCard({ service }: ServiceCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  const getPopularPlan = () => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    if (service.pricing.professional.popular)
      return service.pricing.professional;
    if (service.pricing.basic.popular) return service.pricing.basic;
    if (service.pricing.enterprise.popular) return service.pricing.enterprise;
<<<<<<< HEAD
    return service.pricing.professional;  };
=======
    return service.pricing.professional;
=======
    if (service.pricing.professional.popular) return service.pricing.professional;
    if (service.pricing.basic.popular) return service.pricing.basic;
    if (service.pricing.enterprise.popular) return service.pricing.enterprise;
    return service.pricing.professional
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    if (service.pricing.professional.popular) return service.pricing.professional;
    if (service.pricing.basic.popular) return service.pricing.basic;
    if (service.pricing.enterprise.popular) return service.pricing.enterprise;
    return service.pricing.professional
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const popularPlan = getPopularPlan();

  return (
<<<<<<< HEAD
    <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
=======
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      {/* Service Image */}
      <div className='h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden'>
        <img
          src={service.images[0]}
          alt={service.title}
          className='w-full h-full object-cover'
        />
<<<<<<< HEAD
        <div className='absolute top-4 right-4'>
          <span className='bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold'>            {service.category}
          </span>
        </div>
        {service.aiScore && (
          <div className='absolute bottom-4 left-4'>
            <span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>              AI Score: {service.aiScore}
=======
<<<<<<< HEAD
        <div className='absolute top-4 right-4'>
          <span className='bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold'>
=======
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Service Image */}
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <img 
          src={service.images[0]} 
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="absolute top-4 right-4">
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            {service.category}
          </span>
        </div>
        {service.aiScore && (
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='absolute bottom-4 left-4'>
            <span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>
=======
          <div className="absolute bottom-4 left-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="absolute bottom-4 left-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              AI Score: {service.aiScore}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </span>
          </div>
        )}
      </div>

      {/* Service Content */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div className='p-6'>
        <div className='flex items-start justify-between mb-3'>
          <h3 className='text-xl font-bold text-gray-900 mb-2'>
            {service.title}
          </h3>
          <div className='flex items-center gap-1'>
            <span className='text-yellow-500'>⭐</span>
            <span className='text-sm font-medium'>
              {service.provider.rating}
            </span>
            <span className='text-gray-500 text-sm'>
              ({service.provider.reviewCount})
            </span>
<<<<<<< HEAD
=======
=======
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span className="text-sm font-medium">{service.provider.rating}</span>
            <span className="text-gray-500 text-sm">({service.provider.reviewCount})</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </div>
        </div>

        <p className='text-gray-600 mb-4 line-clamp-3'>{service.description}</p>

        {/* Provider Info */}
<<<<<<< HEAD
        <div className='flex items-center gap-3 mb-4'>
          <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
            <span className='text-blue-600 font-semibold text-sm'>              {service.provider.name.charAt(0)}
            </span>
          </div>
          <div>
=======
<<<<<<< HEAD
        <div className='flex items-center gap-3 mb-4'>
          <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
            <span className='text-blue-600 font-semibold text-sm'>
=======
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span className="text-sm font-medium">{service.provider.rating}</span>
            <span className="text-gray-500 text-sm">({service.provider.reviewCount})</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>

        {/* Provider Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-sm">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-sm">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {service.provider.name.charAt(0)}
            </span>
          </div>
          <div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <p className='font-medium text-gray-900'>{service.provider.name}</p>
            <p className='text-sm text-gray-500'>{service.provider.location}</p>
          </div>
          {service.provider.verified && (
<<<<<<< HEAD
            <span className='text-blue-600 text-sm'>✓ Verified</span>          )}
        </div>

        {/* Pricing */}
=======
            <span className='text-blue-600 text-sm'>✓ Verified</span>
=======
            <p className="font-medium text-gray-900">{service.provider.name}</p>
            <p className="text-sm text-gray-500">{service.provider.location}</p>
          </div>
          {service.provider.verified && (
            <span className="text-blue-600 text-sm">✓ Verified</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <p className="font-medium text-gray-900">{service.provider.name}</p>
            <p className="text-sm text-gray-500">{service.provider.location}</p>
          </div>
          {service.provider.verified && (
            <span className="text-blue-600 text-sm">✓ Verified</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          )}
        </div>

        {/* Pricing */}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <div className='bg-gray-50 rounded-lg p-4 mb-4'>
          <div className='text-center'>
            <div className='text-2xl font-bold text-gray-900'>
              {popularPlan.currency}
              {popularPlan.price}
<<<<<<< HEAD
              <span className='text-sm font-normal text-gray-500'>                /{popularPlan.period}
              </span>
            </div>
            {popularPlan.popular && (
              <span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>                Most Popular
=======
              <span className='text-sm font-normal text-gray-500'>
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {popularPlan.currency}{popularPlan.price}
              <span className="text-sm font-normal text-gray-500">
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                /{popularPlan.period}
              </span>
            </div>
            {popularPlan.popular && (
<<<<<<< HEAD
<<<<<<< HEAD
              <span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>
=======
              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                Most Popular
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </span>
            )}
          </div>
        </div>

        {/* Features Preview */}
<<<<<<< HEAD
        <div className='mb-4'>
          <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>
          <div className='flex flex-wrap gap-2'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='mb-4'>
          <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>
          <div className='flex flex-wrap gap-2'>
=======
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            {service.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
<<<<<<< HEAD
                className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs'              >
=======
<<<<<<< HEAD
                className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs'
=======
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                {feature}
              </span>
            ))}
            {service.features.length > 3 && (
<<<<<<< HEAD
              <span className='text-gray-500 text-xs'>                +{service.features.length - 3} more
=======
<<<<<<< HEAD
<<<<<<< HEAD
              <span className='text-gray-500 text-xs'>
=======
              <span className="text-gray-500 text-xs">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <span className="text-gray-500 text-xs">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                +{service.features.length - 3} more
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
<<<<<<< HEAD
        <div className='flex gap-2'>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'          >
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='flex gap-2'>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'
=======
        <div className="flex gap-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="flex gap-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
          <a
            href={`tel:+13024640950`}
<<<<<<< HEAD
            className='bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors'          >
=======
<<<<<<< HEAD
<<<<<<< HEAD
            className='bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors'
=======
            className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            Call Now
          </a>
        </div>

        {/* Detailed Information */}
        {showDetails && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <div className='mt-6 pt-6 border-t border-gray-200'>
            <div className='space-y-4'>
              {/* Benefits */}
              <div>
                <h4 className='font-semibold text-gray-900 mb-2'>Benefits:</h4>
<<<<<<< HEAD
                <ul className='list-disc list-inside text-sm text-gray-600 space-y-1'>                  {service.benefits.slice(0, 3).map((benefit, index) => (
=======
                <ul className='list-disc list-inside text-sm text-gray-600 space-y-1'>
=======
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="space-y-4">
              {/* Benefits */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="space-y-4">
              {/* Benefits */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  {service.benefits.slice(0, 3).map((benefit, index) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div>
<<<<<<< HEAD
                <h4 className='font-semibold text-gray-900 mb-2'>Use Cases:</h4>
                <div className='flex flex-wrap gap-2'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                <h4 className='font-semibold text-gray-900 mb-2'>Use Cases:</h4>
                <div className='flex flex-wrap gap-2'>
=======
                <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  {service.useCases.slice(0, 3).map((useCase, index) => (
                    <span
                      key={index}
<<<<<<< HEAD
                      className='bg-green-100 text-green-800 px-2 py-1 rounded text-xs'                    >
=======
<<<<<<< HEAD
                      className='bg-green-100 text-green-800 px-2 py-1 rounded text-xs'
=======
                <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.slice(0, 3).map((useCase, index) => (
                    <span 
                      key={index}
                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <h4 className='font-semibold text-gray-900 mb-2'>
                  Technologies:
                </h4>
                <div className='flex flex-wrap gap-2'>
<<<<<<< HEAD
=======
=======
                <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  {service.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
<<<<<<< HEAD
                      className='bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs'                    >
=======
<<<<<<< HEAD
                      className='bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs'
=======
                <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 4).map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deployment & Support */}
<<<<<<< HEAD
              <div className='grid grid-cols-2 gap-4 text-sm'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='grid grid-cols-2 gap-4 text-sm'>
=======
              <div className="grid grid-cols-2 gap-4 text-sm">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <div>
                  <span className='font-medium text-gray-900'>Deployment:</span>
                  <p className='text-gray-600'>{service.deploymentTime}</p>
                </div>
                <div>
<<<<<<< HEAD
                  <span className='font-medium text-gray-900'>Support:</span>
                  <p className='text-gray-600'>
                    {service.support.slice(0, 2).join(', ')}
                  </p>                </div>
=======
<<<<<<< HEAD
                  <span className='font-medium text-gray-900'>Support:</span>
                  <p className='text-gray-600'>
                    {service.support.slice(0, 2).join(', ')}
                  </p>
=======
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Deployment:</span>
                  <p className="text-gray-600">{service.deploymentTime}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Support:</span>
                  <p className="text-gray-600">{service.support.slice(0, 2).join(', ')}</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <span className="font-medium text-gray-900">Support:</span>
                  <p className="text-gray-600">{service.support.slice(0, 2).join(', ')}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </div>

              {/* All Pricing Plans */}
              <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <h4 className='font-semibold text-gray-900 mb-2'>
                  Pricing Plans:
                </h4>
                <div className='space-y-2'>
                  {Object.entries(service.pricing).map(([plan, details]) => (
                    <div
                      key={plan}
                      className='flex justify-between items-center text-sm'
                    >
                      <span className='capitalize font-medium'>{plan}</span>
                      <span className='text-gray-600'>
                        {details.currency}
<<<<<<< HEAD
                        {details.price}/{details.period}                      </span>
=======
                        {details.price}/{details.period}
=======
                <h4 className="font-semibold text-gray-900 mb-2">Pricing Plans:</h4>
                <div className="space-y-2">
                  {Object.entries(service.pricing).map(([plan, details]) => (
=======
                <h4 className="font-semibold text-gray-900 mb-2">Pricing Plans:</h4>
                <div className="space-y-2">
                  {Object.entries(service.pricing).map(([plan, details]) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    <div key={plan} className="flex justify-between items-center text-sm">
                      <span className="capitalize font-medium">{plan}</span>
                      <span className="text-gray-600">
                        {details.currency}{details.price}/{details.period}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      </span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
<<<<<<< HEAD
              <div className='bg-blue-50 rounded-lg p-4 text-center'>
                <p className='text-sm text-blue-800 mb-2'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='bg-blue-50 rounded-lg p-4 text-center'>
                <p className='text-sm text-blue-800 mb-2'>
=======
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-sm text-blue-800 mb-2">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  Ready to get started with {service.title}?
                </p>
                <div className='flex gap-2 justify-center'>
                  <a
                    href={`tel:+13024640950`}
<<<<<<< HEAD
                    className='bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors'                  >
=======
<<<<<<< HEAD
                    className='bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors'
=======
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-sm text-blue-800 mb-2">
                  Ready to get started with {service.title}?
                </p>
                <div className="flex gap-2 justify-center">
                  <a
                    href={`tel:+13024640950`}
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    📞 Call +1 302 464 0950
                  </a>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
<<<<<<< HEAD
                    className='bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors'                  >
=======
<<<<<<< HEAD
<<<<<<< HEAD
                    className='bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors'
=======
                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    ✉️ Email Inquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
<<<<<<< HEAD
  );
=======
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
