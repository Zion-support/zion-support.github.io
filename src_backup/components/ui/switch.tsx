import React, { useState } from 'react';


  SERVICE_CATEGORIES;
  ALL_SERVICES
  AI_SERVICES
  IT_SERVICES
  MICRO_SAAS_SERVICES;
  CYBERSECURITY_SERVICES;
  DATA_ANALYTICS_SERVICES;
  CLOUD_SOLUTIONS

} from '@/data/servicesData';
import { ServiceCategory, ServiceSolution } from '@/types/services';


export function ServicesPage() {
=======

import { ServiceCategory, ServiceSolution } from '@/types/services';
export function ServicesPage() {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const filteredServices = ALL_SERVICES.filter(service => {


=======
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
    }
  }
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
              <a
                href='mailto:kleber@ziontechgroup.com'
                className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors'              >    }
  }
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
              >

=======
import React, { useState } from 'react',;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import {;
  SERVICE_CATEGORIES,;
  ALL_SERVICES,;
  AI_SERVICES,;
  IT_SERVICES,;
  MICRO_SAAS_SERVICES,;
  CYBERSECURITY_SERVICES,;
  DATA_ANALYTICS_SERVICES,;
  CLOUD_SOLUTIONS,;} from '@/data/servicesData';import { ;
  SERVICE_CATEGORIES;
  ALL_SERVICES, ;
  AI_SERVICES, ;
  IT_SERVICES, ;
  MICRO_SAAS_SERVICES;
  CYBERSECURITY_SERVICES;
  DATA_ANALYTICS_SERVICES;
  CLOUD_SOLUTIONS;
import { ServiceCategory, ServiceSolution } from '@/types/services';
export function ServicesPage() {;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const filteredServices = ALL_SERVICES && ALL_SERVICES.filter(service => {;
    const matchesCategory =;
      selectedCategory === 'all' || service && service.category === selectedCategory;
    const matchesSearch =;
      service && service.title.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.tags.some(tag =>;
        tag && tag.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
      );
    return matchesCategory && matchesSearch;  });
  const getServicesByCategory = (categoryId: string) => {;
    switch (categoryId) {    const matchesCategory = selectedCategory === 'all' || service && service.category === selectedCategory;
    const matchesSearch = service && service.title.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         service && service.tags.some(tag => tag && tag.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  const getServicesByCategory = (categoryId: string) => {;
    switch (categoryId) {;
      case 'ai-services':;
        return AI_SERVICES;
      case 'it-services':;
        return IT_SERVICES;
      case 'micro-saas':;
        return MICRO_SAAS_SERVICES;
      case 'cybersecurity':;
        return CYBERSECURITY_SERVICES;
      case 'data-analytics':;
        return DATA_ANALYTICS_SERVICES;
      case 'cloud-solutions':;
        return CLOUD_SOLUTIONS;
      default:;
        return ALL_SERVICES;
    }

=======
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch
  });
  const getServicesByCategory = (categoryId: string) => {
    switch (categoryId) {
      case 'ai-services': return AI_SERVICES;
      case 'it-services': return IT_SERVICES;
      case 'micro-saas': return MICRO_SAAS_SERVICES;
      case 'cybersecurity': return CYBERSECURITY_SERVICES;
      case 'data-analytics': return DATA_ANALYTICS_SERVICES;
      case 'cloud-solutions': return CLOUD_SOLUTIONS;
      default: return ALL_SERVICES
    }

  };
  const selectedServices =;
    selectedCategory === 'all';
      ? filteredServices;
      : getServicesByCategory(selectedCategory);
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
              </Link>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">;
        <div className="container mx-auto px-4 py-20">;
          <div className="text-center max-w-4xl mx-auto">;
            <h1 className="text-5xl font-bold mb-6">;
              Zion Tech Group Services;
            </h1>;
            <p className="text-xl mb-8 text-blue-100">;
              Comprehensive IT, AI, and Micro SAAS solutions to transform your business. ;
              From cutting-edge artificial intelligence to robust infrastructure support.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">;
                📞 Call Now: +1 302 464 0950;
              </a>;
              <a
                href="mailto:kleber@ziontechgroup && ziontechgroup.com"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">;
  SERVICE_CATEGORIES,
  ALL_SERVICES,
  AI_SERVICES,
  IT_SERVICES,
  MICRO_SAAS_SERVICES,
  CYBERSECURITY_SERVICES,
  DATA_ANALYTICS_SERVICES,
  CLOUD_SOLUTIONS,} from '@/data / services_data';import {
  SERVICE_CATEGORIES;
  ALL_SERVICES,
  AI_SERVICES,
  IT_SERVICES,
  MICRO_SAAS_SERVICES;
  CYBERSECURITY_SERVICES;
  DATA_ANALYTICS_SERVICES;
  CLOUD_SOLUTIONS;
import { ServiceCategory, ServiceSolution } from '@/types / services';
export /**
 * ServicesPage - Function description
 */
function ServicesPage() {
  const [selected_category, setSelectedCategory] = useState < string>('all');
  const [search_term, setSearchTerm] = useState ('');
;
  const filtered_services = ALL_SERVICES.filter (service => {
    const matches_category =;
      selected_category === 'all' || service.category === selected_category;
    const matches_search =;
      service.title.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.tags.some (tag =>;
        tag.toLowerCase ().includes (search_term.toLowerCase ()));
    return matches_category && matches_search;  });
;
  const getServicesByCategory = (category_id: string) =>: any {
    switch (category_id) {    const matches_category = selected_category === 'all' || service.category === selected_category;
    const matches_search = service.title.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                        service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                        service.tags.some (tag => tag.toLowerCase ().includes (search_term.toLowerCase ()));
    return matches_category && matches_search;
  const getServicesByCategory = (category_id: string) =>: any {
    switch (category_id) {
      case 'ai - services':;
        return AI_SERVICES;
      case 'it - services':;
        return IT_SERVICES;
      case 'micro - saas':;
        return MICRO_SAAS_SERVICES;
      case 'cybersecurity':;
        return CYBERSECURITY_SERVICES;
      case 'data - analytics':;
        return DATA_ANALYTICS_SERVICES;
      case 'cloud - solutions':;
        return CLOUD_SOLUTIONS;
      default:;
        return ALL_SERVICES;
    }
  }
;
  const selected_services =;
    selected_category === 'all';
      ? filtered_services;
      : getServicesByCategory (selected_category);
;
  return (
    <div className='min - h-screen bg - gradient - to - br from - gray - 50 to - gray - 100'>;
      {/* Hero Section */}
      <div className='bg - gradient - to - r from - blue - 600 via - purple - 600 to - indigo - 600 text - white'>;
        <div className='container mx - auto px - 4 py - 20'>;
          <div className='text - center max - w-4xl mx - auto'>;
            <h1 className='text - 5xl font - bold mb - 6'>;
              Zion Tech Group Services;
            </h1>;
            <p className='text - xl mb - 8 text - blue - 100'>;
              Comprehensive IT, AI, and Micro SAAS solutions to transform your;
              business. From cutting - edge artificial intelligence to robust;
              infrastructure support.;
            </p>;
            <div className='flex flex - wrap justify - center gap - 4'>;
              <a;
                href='tel:+13024640950';
                className='bg - white text - blue - 600 px - 6 py - 3 rounded - lg font - semibold hover:bg - blue - 50 transition - colors';
              >;
                📞 Call Now: +1 302 464 0950;
              </a>;
              <a;
                href='mailto:kleber@ziontechgroup.com';
                className='bg - blue - 500 text - white px - 6 py - 3 rounded - lg font - semibold hover:bg - blue - 600 transition - colors'              >    }
  }
  const selectedServices = selectedCategory === 'all' ? filteredServices : getServicesByCategory(selectedCategory);

  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray - 100">;
      {/* Hero Section */}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <div className="flex items-center gap-2">
              <span className="text-blue-600">🌐</span>
              <a href="https://ziontechgroup.com" className="text-blue-600 hover:underline">
                ziontechgroup.com
              </a>
              </Link>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            </div>
          </div>
        </div>
      </div>
=======


      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              {SERVICE_CATEGORIES.map((category) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                <button
                  key={category && category.id}
                  onClick={() => setSelectedCategory(category && category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${;
                    selectedCategory === category && category.id;
                      ? 'bg-blue-600 text-white';
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200';
                  }`}
                >;
                  {category && category.icon} {category && category.name}
                </button>;
              ))}

            </div>;
          </div>;
        </div>;


        {/* Services Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
          {selectedServices.map(service => (            <ServiceCard key={service.id} service={service} />        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">


          {selectedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          ))}


        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {selectedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />

          ))}
        </div>

        {selectedServices.length === 0 && (
          <div className='text-center py-12'>
            <h3 className='text-xl text-gray-600 mb-4'>No services found</h3>
            <p className='text-gray-500'>
              Try adjusting your search or filter criteria
            </p>          </div>          <div className="text-center py-12">
          <div className="text-center py-12">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======

          <div className="text-center py-12">

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
      {/* Why Choose Zion Tech Group */}
      <div className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              Why Choose Zion Tech Group?
            </h2>
=======
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver innovative, reliable, and cost-effective solutions that drive real business results
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🚀</span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>
            </div>
            <div className='text-center'>
              <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🛡️</span>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-600">SOC 2, HIPAA, GDPR compliant solutions</p>
            </div>
            <div className='text-center'>
              <div className='bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>⚡</span>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Deployment</h3>
              <p className="text-gray-600">Quick setup and implementation</p>
            </div>
            <div className='text-center'>
              <div className='bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🎯</span>
              </div>
              <h3 className='text-xl font-semibold mb-2'>Proven Results</h3>
              <p className='text-gray-600'>Trusted by businesses nationwide</p>            </div>              Why Choose Zion Tech Group?
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
            
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Trusted by businesses nationwide</p>
            </div>
          </div>
        </div>
      </div>

        </div>;
        {selectedServices && selectedServices.length === 0 && (;
          <div className='text-center py-12'>;
            <h3 className='text-xl text-gray-600 mb-4'>No services found</h3>;
            <p className='text-gray-500'>;
              Try adjusting your search or filter criteria;
            </p>          </div>          <div className="text-center py-12">;
            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>;
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>;
          </div>;
        )}
      </div>;
      {/* Why Choose Zion Tech Group */}
      <div className='bg-white py-16'>;
        <div className='container mx-auto px-4'>;
          <div className='text-center mb-12'>;
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>;
=======
      {/* CTA Section */}
      <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold mb-6'>
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
            </Link>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
            >
              ✉️ Get Free Consultation
            </a>
            <a
              href='https://ziontechgroup.com'
              className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors'            >            Ready to Transform Your Business?
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
            </Link>
            </Link>
            <a 
              href="https://ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              🌐 Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
interface ServiceCardProps {
  service: ServiceSolution;  )
}
interface ServiceCardProps {
  service: ServiceSolution
}
function ServiceCard({ service }: ServiceCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const getPopularPlan = () => {
    if (service.pricing.professional.popular)
      return service.pricing.professional;
    if (service.pricing.basic.popular) return service.pricing.basic;
    if (service.pricing.enterprise.popular) return service.pricing.enterprise;
    return service.pricing.professional;  };    if (service.pricing.professional.popular) return service.pricing.professional;
    if (service.pricing.basic.popular) return service.pricing.basic;
    if (service.pricing.enterprise.popular) return service.pricing.enterprise;
    return service.pricing.professional
  const popularPlan = getPopularPlan();

  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
  )
      <div className="bg-white py-16">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h2 className="text-4xl font-bold text-gray-900 mb-4">;
              Why Choose Zion Tech Group?;
            </h2>;
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>;
              We deliver innovative, reliable, and cost-effective solutions that;
              drive real business results;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>;
            <div className='text-center'>;
              <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>;
                <span className='text-2xl'>🚀</span>;
              </div>;
              <h3 className='text-xl font-semibold mb-2'>Innovation First</h3>;
              <p className='text-gray-600'>;
                Cutting-edge AI and technology solutions;
              </p>;
            </div>;
            <div className='text-center'>;
              <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>;
                <span className='text-2xl'>🛡️</span>;
              </div>;
              <h3 className='text-xl font-semibold mb-2'>;
                Enterprise Security;
              </h3>;
              <p className='text-gray-600'>;
                SOC 2, HIPAA, GDPR compliant solutions;
              </p>;
            </div>;
            <div className='text-center'>;
              <div className='bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>;
                <span className='text-2xl'>⚡</span>;
              </div>;
              <h3 className='text-xl font-semibold mb-2'>Fast Deployment</h3>;
              <p className='text-gray-600'>Quick setup and implementation</p>;
            </div>;
            <div className='text-center'>;
              <div className='bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>;
                <span className='text-2xl'>🎯</span>;
              </div>;
              <h3 className='text-xl font-semibold mb-2'>Proven Results</h3>;
              <p className='text-gray-600'>Trusted by businesses nationwide</p>            </div>              Why Choose Zion Tech Group?;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              We deliver innovative, reliable, and cost-effective solutions that drive real business results;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            <div className="text-center">;
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl">🚀</span>;
              </div>;
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>;
              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>;
            </div>;
            <div className="text-center">;
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl">🛡️</span>;
              </div>;
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>;
              <p className="text-gray-600">SOC 2, HIPAA, GDPR compliant solutions</p>;
            </div>;
            <div className="text-center">;
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl">⚡</span>;
              </div>;
              <h3 className="text-xl font-semibold mb-2">Fast Deployment</h3>;
              <p className="text-gray-600">Quick setup and implementation</p>;
            </div>;
            <div className="text-center">;
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl">🎯</span>;
              </div>;
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>;
              <p className="text-gray-600">Trusted by businesses nationwide</p>;
      {/* Search and Filter Section */}
      <div className='container mx - auto px - 4 py - 8'>;
        <div className='bg - white rounded - xl shadow - lg p - 6 mb - 8'>;
          <div className='flex flex - col md:flex - row gap - 4'>;
            <div className='flex - 1'>;
              <input;
                type='text';
                placeholder='Search services...';
                value={search_term}
                on_change={e => setSearchTerm (e.target.value)}
                className='w - full px - 4 py - 3 border border - gray - 300 rounded - lg focus:ring - 2 focus:ring - blue - 500 focus:border - transparent';
              />;
            </div>;
            <div className='flex gap - 2'>;
              {SERVICE_CATEGORIES.map (category => (                <button              <input;
                type="text";
                placeholder="Search services...";
                value={search_term}
                on_change={(e) => setSearchTerm (e.target.value)}
                className="w - full px - 4 py - 3 border border - gray - 300 rounded - lg focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
              />;
            </div>;
            <div className="flex gap - 2">;
              {SERVICE_CATEGORIES.map ((category) => (
                <button;
                  key={category.id}
                  on_click={() => setSelectedCategory (category.id)}
                  className={`px - 4 py - 2 rounded - lg font - medium transition - colors ${
                    selected_category === category.id;
                      ? 'bg - blue - 600 text - white';
                      : 'bg - gray - 100 text - gray - 700 hover:bg - gray - 200';
                  }`}
                >;
                  {category.icon} {category.name}
                </button>))}
            </div>;
          </div>;
        </div>;
        {/* Services Grid */}
        <div className='grid grid - cols - 1 lg:grid - cols - 2 xl:grid - cols - 3 gap - 8'>;
          {selected_services.map (service => (            <ServiceCard key={service.id} service={service} />        <div className="grid grid - cols - 1 lg:grid - cols - 2 xl:grid - cols - 3 gap - 8">;
          {selected_services.map ((service) => (
            <ServiceCard key={service.id} service={service} />))}
        </div>;
        {selected_services.length === 0 && (
          <div className='text - center py - 12'>;
            <h3 className='text - xl text - gray - 600 mb - 4'>No services found</h3>;
            <p className='text - gray - 500'>;
              Try adjusting your search or filter criteria;
            </p>          </div>          <div className="text - center py - 12">;
            <h3 className="text - xl text - gray - 600 mb - 4">No services found</h3>;
            <p className="text - gray - 500">Try adjusting your search or filter criteria</p>;
          </div>)}
      </div>;
      {/* Why Choose Zion Tech Group */}
      <div className='bg - white py - 16'>;
        <div className='container mx - auto px - 4'>;
          <div className='text - center mb - 12'>;
            <h2 className='text - 4xl font - bold text - gray - 900 mb - 4'>;
              Why Choose Zion Tech Group?;
            </h2>;
            <p className='text - xl text - gray - 600 max - w-3xl mx - auto'>;
              We deliver innovative, reliable, and cost - effective solutions that;
              drive real business results;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8'>;
            <div className='text - center'>;
              <div className='bg - blue - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                <span className='text - 2xl'>🚀</span>;
              </div>;
              <h3 className='text - xl font - semibold mb - 2'>Innovation First</h3>;
              <p className='text - gray - 600'>;
                Cutting - edge AI and technology solutions;
              </p>;
            </div>;
            <div className='text - center'>;
              <div className='bg - green - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                <span className='text - 2xl'>🛡️</span>;
              </div>;
              <h3 className='text - xl font - semibold mb - 2'>;
                Enterprise Security;
              </h3>;
              <p className='text - gray - 600'>;
                SOC 2, HIPAA, GDPR compliant solutions;
              </p>;
            </div>;
            <div className='text - center'>;
              <div className='bg - purple - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                <span className='text - 2xl'>⚡</span>;
              </div>;
              <h3 className='text - xl font - semibold mb - 2'>Fast Deployment</h3>;
              <p className='text - gray - 600'>Quick setup and implementation</p>;
            </div>;
            <div className='text - center'>;
              <div className='bg - orange - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                <span className='text - 2xl'>🎯</span>;
              </div>;
              <h3 className='text - xl font - semibold mb - 2'>Proven Results</h3>;
              <p className='text - gray - 600'>Trusted by businesses nationwide</p>            </div>              Why Choose Zion Tech Group?;
            </h2>;
            <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
              We deliver innovative, reliable, and cost - effective solutions that drive real business results;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;
            <div className="text - center">;
              <div className="bg - blue - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;
                <span className="text - 2xl">🚀</span>;
              </div>;
              <h3 className="text - xl font - semibold mb - 2">Innovation First</h3>;
              <p className="text - gray - 600">Cutting - edge AI and technology solutions</p>;
            </div>;
            <div className="text - center">;
              <div className="bg - green - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;
                <span className="text - 2xl">🛡️</span>;
              </div>;
              <h3 className="text - xl font - semibold mb - 2">Enterprise Security</h3>;
              <p className="text - gray - 600">SOC 2, HIPAA, GDPR compliant solutions</p>;
            </div>;
            <div className="text - center">;
              <div className="bg - purple - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;
                <span className="text - 2xl">⚡</span>;
              </div>;
              <h3 className="text - xl font - semibold mb - 2">Fast Deployment</h3>;
              <p className="text - gray - 600">Quick setup and implementation</p>;
            </div>;
            <div className="text - center">;
              <div className="bg - orange - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;
                <span className="text - 2xl">🎯</span>;
              </div>;
              <h3 className="text - xl font - semibold mb - 2">Proven Results</h3>;
              <p className="text - gray - 600">Trusted by businesses nationwide</p>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-4xl font-bold mb-6">;
            Ready to Transform Your Business?;
          </h2>;
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">;
            Get started with Zion Tech Group today and discover how our innovative solutions can drive growth, efficiency, and success for your organization.;
          </p>;

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?

          </h2>
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
            </Link>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
            >
              ✉️ Get Free Consultation
            </Link>
=======
=======
            </Link>
            <a 
=======
            <a
              href="https://ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              🌐 Visit Website
            </Link>
          </div>
        </div>
      </div>
    </div>

  )

}
interface ServiceCardProps {
  service: ServiceSolution
=======
=======
  )
      <div className="bg-white py-16">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h2 className="text-4xl font-bold text-gray-900 mb-4">;
              Why Choose Zion Tech Group?;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              We deliver innovative, reliable, and cost-effective solutions that drive real business results;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            <div className="text-center">;
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl">🚀</span>;
              </div>;
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>;
              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>;
            </div>;
            <div className="text-center">;
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl">🛡️</span>;
              </div>;
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>;
              <p className="text-gray-600">SOC 2, HIPAA, GDPR compliant solutions</p>;
            </div>;
            <div className="text-center">;
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl">⚡</span>;
              </div>;
              <h3 className="text-xl font-semibold mb-2">Fast Deployment</h3>;
              <p className="text-gray-600">Quick setup and implementation</p>;
            </div>;
            <div className="text-center">;
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl">🎯</span>;
              </div>;
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>;
              <p className="text-gray-600">Trusted by businesses nationwide</p>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-4xl font-bold mb-6">;
            Ready to Transform Your Business?;
          </h2>;
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">;
            Get started with Zion Tech Group today and discover how our innovative solutions can drive growth, efficiency, and success for your organization.;
          </p>;
          <div className="flex flex-wrap justify-center gap-4">;
            <a;
              href="tel: +13024640950";
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors";
            >;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
              📞 Call +1 302 464 0950;
            </a>;
            <a
              href="mailto:kleber@ziontechgroup && ziontechgroup.com"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors">;
              ✉️ Get Free Consultation;
            </a>;
            <a
              href="https://ziontechgroup && ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">;
              🌐 Visit Website;
            </a>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
interface ServiceCardProps {;
  service: ServiceSolution;  );
}
interface ServiceCardProps {;
  service: ServiceSolution;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
function ServiceCard(): any ({ service }: ServiceCardProps) {;
  const [showDetails, setShowDetails] = useState(false);

=======

  const getPopularPlan = () => {
    if (service.pricing.professional.popular) return service.pricing.professional;
    if (service.pricing.basic.popular) return service.pricing.basic;
    if (service.pricing.enterprise.popular) return service.pricing.enterprise;
    return service.pricing.professional
  };


  const getPopularPlan = () => {;
    if (service && service.pricing.professional && professional.popular);
      return service && service.pricing.professional;
    if (service && service.pricing.basic && basic.popular) return service && service.pricing.basic;
    if (service && service.pricing.enterprise && enterprise.popular) return service && service.pricing.enterprise;
    return service && service.pricing.professional;  };    if (service && service.pricing.professional && professional.popular) return service && service.pricing.professional;
    if (service && service.pricing.basic && basic.popular) return service && service.pricing.basic;
    if (service && service.pricing.enterprise && enterprise.popular) return service && service.pricing.enterprise;
    return service && service.pricing.professional;
  const popularPlan = getPopularPlan();
  return (


            </span>;
          </div>;
          <div>          </div>;
        </div>;


        {/* Provider Info */}
        <div className="flex items-center gap-3 mb-4">;
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">;
            <span className="text-blue-600 font-semibold text-sm">;
              {service && service.provider.name && name.charAt(0)}
            </span>;
          </div>;
          <div>;
            <p className='font-medium text-gray-900'>{service && service.provider.name}</p>;
            <p className='text-sm text-gray-500'>{service && service.provider.location}</p>;
          </div>;
          {service && service.provider.verified && (;
            <span className='text-blue-600 text-sm'>✓ Verified</span>          )}

    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
      {/* Service Image */}
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <img 
          src={service.images[0]} 
          alt={service.title}
          className="w-full h-full object-cover"
        />
=======
        <div className="absolute top-4 right-4">
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            {service.category}
          </span>
        </div>
        {service.aiScore && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              AI Score: {service.aiScore}
            </span>;
          </div>;
        )}
      </div>
      {/* Service Content */}
=======


      {/* Service Image */}
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <img 
          src={service.images[0]} 
          alt={service.title}
          className="w-full h-full object-cover"
        />



        <div className="absolute top-4 right-4">
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            {service.category}
          </span>
        </div>
        {service.aiScore && (

          <div className="absolute bottom-4 left-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              AI Score: {service.aiScore}
            </span>;
          </div>;

        )}
      </div>
      {/* Service Content */}
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
          </div>
        </div>
        <p className='text-gray-600 mb-4 line-clamp-3'>{service.description}</p>
        {/* Provider Info */}
        <div className='flex items-center gap-3 mb-4'>
          <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
            <span className='text-blue-600 font-semibold text-sm'>              {service.provider.name.charAt(0)}
            </span>
          </div>
          <div>          </div>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
        {/* Provider Info */}
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-sm">
              {service.provider.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className='font-medium text-gray-900'>{service.provider.name}</p>
            <p className='text-sm text-gray-500'>{service.provider.location}</p>
          </div>
          {service.provider.verified && (
            <span className='text-blue-600 text-sm'>✓ Verified</span>          )}
        </div>
        {/* Pricing */}            <p className="font-medium text-gray-900">{service.provider.name}</p>
            <p className="text-sm text-gray-500">{service.provider.location}</p>
          </div>
          {service.provider.verified && (
            <span className="text-blue-600 text-sm">✓ Verified</span>
        </div>
        {/* Pricing */}
        <div className='bg-gray-50 rounded-lg p-4 mb-4'>
          <div className='text-center'>
            <div className='text-2xl font-bold text-gray-900'>
              {popularPlan.currency}
              {popularPlan.price}
              <span className='text-sm font-normal text-gray-500'>                /{popularPlan.period}
              </span>
            </div>
            {popularPlan.popular && (
              <span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>                Most Popular        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {popularPlan.currency}{popularPlan.price}
              <span className="text-sm font-normal text-gray-500">
              </span>
            </div>
            {popularPlan.popular && (
              <span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            <p className="font-medium text-gray-900">{service.provider.name}</p>
=======
              <span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
=======
            <p className="font-medium text-gray-900">{service.provider.name}</p>
            <p className="text-sm text-gray-500">{service.provider.location}</p>
          </div>
          {service.provider.verified && (
            <span className="text-blue-600 text-sm">✓ Verified</span>
          )}
        </div>;
        {/* Pricing */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {popularPlan.currency}{popularPlan.price}
              <span className="text-sm font-normal text-gray-500">
                /{popularPlan.period}
              </span>
            </div>
            {popularPlan.popular && (
              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">

                Most Popular
              </span>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            )}

          </div>;
        </div>;


        {/* Features Preview */}


              </span>;
            </div>;
            {popular_plan.popular && (
              <span className='bg - blue - 600 text - white px - 2 py - 1 rounded - full text - xs font - medium'>                Most Popular        <div className="bg - gray - 50 rounded - lg p - 4 mb - 4">;
          <div className="text - center">;
            <div className="text - 2xl font - bold text - gray - 900">;
              {popular_plan.currency}{popular_plan.price}
              <span className="text - sm font - normal text - gray - 500">;
              </span>;
            </div>;
            {popular_plan.popular && (
              <span className='bg - blue - 600 text - white px - 2 py - 1 rounded - full text - xs font - medium'>              <span className="bg - blue - 600 text - white px - 2 py - 1 rounded - full text - xs font - medium">;
                Most Popular;
              </span>)}
          </div>;
        </div>;
        {/* Features Preview */}
        <div className='mb - 4'>;
          <h4 className='font - semibold text - gray - 900 mb - 2'>Key Features:</h4>;
          <div className='flex flex - wrap gap - 2'>;
            {service.features.slice (0, 3).map ((feature, index) => (
              <span;
                key={index}
                className='bg - blue - 100 text - blue - 800 px - 2 py - 1 rounded text - xs'              >            {service.features.slice (0, 3).map ((feature, index) => (
              <span;
                key={index}
                className="bg - blue - 100 text - blue - 800 px - 2 py - 1 rounded text - xs";
              >;
                {feature}
              </span>))}
            {service.features.length > 3 && (



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            )}

          </div>;
        </div>;


        {/* Action Buttons */}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>;
          <a
            href={`tel:+13024640950`}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          >
            Call Now
          </Link>
        </div>


            className='bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors'>            className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors";
              <span className='text - gray - 500 text - xs'>                +{service.features.length - 3} more              <span className="text - gray - 500 text - xs">;
                +{service.features.length - 3} more;
              </span>)}
          </div>;
        </div>;
        {/* Action Buttons */}
        <div className='flex gap - 2'>;
          <button;
            on_click={() => setShowDetails (!show_details)}
            className='flex - 1 bg - blue - 600 text - white py - 2 px - 4 rounded - lg font - medium hover:bg - blue - 700 transition - colors'          >        <div className="flex gap - 2">;
          <button;
            on_click={() => setShowDetails (!show_details)}
            className="flex - 1 bg - blue - 600 text - white py - 2 px - 4 rounded - lg font - medium hover:bg - blue - 700 transition - colors";
            {show_details ? 'Hide Details' : 'View Details'}
          </button>;
          <a;
            href={`tel:+13024640950`}
            className='bg - green - 600 text - white py - 2 px - 4 rounded - lg font - medium hover:bg - green - 700 transition - colors'          >            className="bg - green - 600 text - white py - 2 px - 4 rounded - lg font - medium hover:bg - green - 700 transition - colors";
          >;
            Call Now;
          </a>;
        </div>;

=======

        {/* Detailed Information */}
        {showDetails && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="space-y-4">
              {/* Benefits */}
              <div>

                    <li key={index}>{benefit}</li>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                  ))}

                </ul>;
              </div>;


              {/* Use Cases */}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                    >
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                      {useCase}
                    </span>;
                  ))}

                </div>;
              </div>;


              {/* Technologies */}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
                    >
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                      {tech}
                    </span>;
                  ))}
                </div>
              </div>
              {/* Deployment & Support */}
              <div className='grid grid-cols-2 gap-4 text-sm'>
              <div className="grid grid-cols-2 gap-4 text-sm">


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                <div>
                  <span className='font-medium text-gray-900'>Deployment:</span>
                  <p className='text-gray-600'>{service.deploymentTime}</p>
                </div>
                <div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>

                  <span className="font-medium text-gray-900">Deployment:</span>
                  <p className="text-gray-600">{service.deploymentTime}</p>
                </div>
                <div>
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  <span className="font-medium text-gray-900">Support:</span>
                  <p className="text-gray-600">{service.support.slice(0, 2).join(', ')}</p>
                </div>
              </div>
                </div>;
              </div>;
              {/* Deployment & Support */}
              <div className='grid grid-cols-2 gap-4 text-sm'>;
                <div>;
                  <span className='font-medium text-gray-900'>Deployment:</span>;
                  <p className='text-gray-600'>{service && service.deploymentTime}</p>;
                </div>;
                <div>;
                  <span className='font-medium text-gray-900'>Support:</span>;
                  <p className='text-gray-600'>;
                    {service && service.support.slice(0, 2).join(', ')}
                  </p>                </div>                <div>;
                  <span className="font-medium text-gray-900">Deployment:</span>;
                  <p className="text-gray-600">{service && service.deploymentTime}</p>;
                </div>;
                <div>;
                  <span className="font-medium text-gray-900">Support:</span>;
                  <p className="text-gray-600">{service && service.support.slice(0, 2).join(', ')}</p>;
                </div>;
              </div>;
              {/* All Pricing Plans */}

=======
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Pricing Plans:</h4>
                <div className="space-y-2">
                  {Object.entries(service.pricing).map(([plan, details]) => (

                  ))}

                </div>;
              </div>;


              {/* Contact CTA */}


                  Ready to get started with {service.title}?
                </p>
                <div className="flex gap-2 justify-center">
                  <a
                    href={`tel:+13024640950`}




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    📞 Call +1 302 464 0950
                  </Link>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                    className='bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors'                  >                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"
                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  >
                    ✉️ Email Inquiry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}



}
}
}
}
}
}
}
}
}
}


=======
      </div>;
    </div>;
  );  );
}

  )
}

=======
        {/* Detailed Information */}
        {show_details && (
          <div className='mt - 6 pt - 6 border - t border - gray - 200'>;
            <div className='space - y-4'>;
              {/* Benefits */}
              <div>;
                <h4 className='font - semibold text - gray - 900 mb - 2'>Benefits:</h4>;
                <ul className='list - disc list - inside text - sm text - gray - 600 space - y-1'>                  {service.benefits.slice (0, 3).map ((benefit, index) => (          <div className="mt - 6 pt - 6 border - t border - gray - 200">;
            <div className="space - y-4">;
              {/* Benefits */}
              <div>;
                <h4 className="font - semibold text - gray - 900 mb - 2">Benefits:</h4>;
                <ul className="list - disc list - inside text - sm text - gray - 600 space - y-1">;
                    <li key={index}>{benefit}</li>))}
                </ul>;
              </div>;
              {/* Use Cases */}
              <div>;
                <h4 className='font - semibold text - gray - 900 mb - 2'>Use Cases:</h4>;
                <div className='flex flex - wrap gap - 2'>;
                  {service.use_cases.slice (0, 3).map ((use_case, index) => (
                    <span;
                      key={index}
                      className='bg - green - 100 text - green - 800 px - 2 py - 1 rounded text - xs'                    >                  {service.use_cases.slice (0, 3).map ((use_case, index) => (
                    <span;
                      key={index}
                      className="bg - green - 100 text - green - 800 px - 2 py - 1 rounded text - xs";
                    >;
                      {use_case}
                    </span>))}
                </div>;
              </div>;
              {/* Technologies */}
              <div>;
                <h4 className='font - semibold text - gray - 900 mb - 2'>;
                  Technologies:;
                </h4>;
                <div className='flex flex - wrap gap - 2'>;
                  {service.technologies.slice (0, 4).map ((tech, index) => (
                    <span;
                      key={index}
                      className='bg - purple - 100 text - purple - 800 px - 2 py - 1 rounded text - xs'                    >                  {service.technologies.slice (0, 4).map ((tech, index) => (
                    <span;
                      key={index}
                      className="bg - purple - 100 text - purple - 800 px - 2 py - 1 rounded text - xs";
                    >;
                      {tech}
                    </span>))}
                </div>;
              </div>;
              {/* Deployment & Support */}
              <div className='grid grid - cols - 2 gap - 4 text - sm'>;
                <div>;
                  <span className='font - medium text - gray - 900'>Deployment:</span>;
                  <p className='text - gray - 600'>{service.deployment_time}</p>;
                </div>;
                <div>;
                  <span className='font - medium text - gray - 900'>Support:</span>;
                  <p className='text - gray - 600'>;
                    {service.support.slice (0, 2).join (', ')}
                  </p>                </div>                <div>;
                  <span className="font - medium text - gray - 900">Deployment:</span>;
                  <p className="text - gray - 600">{service.deployment_time}</p>;
                </div>;
                <div>;
                  <span className="font - medium text - gray - 900">Support:</span>;
                  <p className="text - gray - 600">{service.support.slice (0, 2).join (', ')}</p>;
                </div>;
              </div>;
              {/* All Pricing Plans */}
              <div>;
                <h4 className='font - semibold text - gray - 900 mb - 2'>;
                  Pricing Plans:;
                </h4>;
                <div className='space - y-2'>;
                  {Object.entries (service.pricing).map (([plan, details]) => (
                    <div;
                      key={plan}
                      className='flex justify - between items - center text - sm';
                    >;
                      <span className='capitalize font - medium'>{plan}</span>;
                      <span className='text - gray - 600'>;
                        {details.currency}
                        {details.price}/{details.period}                      </span>                    <div key={plan} className="flex justify - between items - center text - sm">;
                      <span className="capitalize font - medium">{plan}</span>;
                      <span className="text - gray - 600">;
                        {details.currency}{details.price}/{details.period}
                    </div>))}
                </div>;
              </div>;
              {/* Contact CTA */}
              <div className='bg - blue - 50 rounded - lg p - 4 text - center'>;
                <p className='text - sm text - blue - 800 mb - 2'>;
                  Ready to get started with {service.title}?;
                </p>;
                <div className='flex gap - 2 justify - center'>;
                  <a;
                    href={`tel:+13024640950`}
                    className='bg - blue - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - blue - 700 transition - colors'                  >                  Ready to get started with {service.title}?;
                </p>;
                <div className="flex gap - 2 justify - center">;
                  <a;
                    href={`tel:+13024640950`}
                    className="bg - blue - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - blue - 700 transition - colors";
                  >;
                    📞 Call +1 302 464 0950;
                  </a>;
                  <a;
                    href={`mailto:kleber@ziontechgroup.com?subject = Inquiry about ${service.title}`}
                    className='bg - green - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - green - 700 transition - colors'                  >                    className="bg - green - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - green - 700 transition - colors";
                  >;
                    ✉️ Email Inquiry;
                  </a>;
                </div>;
              </div>;
            </div>;
          </div>)}
      </div>;
    </div>));
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
