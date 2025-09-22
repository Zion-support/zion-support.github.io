import React, { useState } from 'react',;

  SERVICE_CATEGORIES;
  ALL_SERVICES
  AI_SERVICES
  IT_SERVICES
import React, { useState } from 'react';

import { SERVICE_CATEGORIES;
  ALL_SERVICES;
  AI_SERVICES;
  IT_SERVICES;
origin/cursor/automate-test-improve-and-merge-code-2533
  MICRO_SAAS_SERVICES;
  CYBERSECURITY_SERVICES;
  DATA_ANALYTICS_SERVICES;
  CLOUD_SOLUTIONS;
} from '@/data/servicesData';'
import { ServiceCategory, ServiceSolution } from '@/types/services';

export function ServicesPage() {
const filteredServices = null;
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.tags.some(tag =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const getServicesByCategory = (categoryId: string) => {
    switch (categoryId) {
case 'ai-services':
origin/cursor/automate-test-improve-and-merge-code-2533
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
                className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors'
origin/cursor/automate-test-improve-and-merge-code-2533
              >

import React, { useState } from 'react',;

export function ServicesPage() {}
';
import { ServiceCategory, ServiceSolution } from '@/types/services';
export function ServicesPage() { return null; }
  const filteredServices = ALL_SERVICES.filter(service => {}
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}"
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">"
        <div className="container mx-auto px-4 py-20">"
          <div className="text-center max-w-4xl mx-auto">"
            <h1 className="text-5xl font-bold mb-6">
              Zion Tech Group Services;
            </h1>"
            <p className="text-xl mb-8 text-blue-100">
              Comprehensive IT, AI, and Micro SAAS solutions to transform your business. 
              From cutting-edge artificial intelligence to robust infrastructure support.
            </p>"
            <div className="flex flex-wrap justify-center gap-4">
              <a "
                href="tel:+13024640950""
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                📞 Call Now: +1 302 464 0950;
              </a>
              <a "
                href="mailto:kleber@ziontechgroup.com""
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >

'
import React, { useState } from 'react',;

import {;
  SERVICE_CATEGORIES,;
  ALL_SERVICES,;
  AI_SERVICES,;
  IT_SERVICES,;
  MICRO_SAAS_SERVICES,;
  CYBERSECURITY_SERVICES,;
DATA_ANALYTICS_SERVICES,;
  CLOUD_SOLUTIONS;
} from '@/data/servicesData',;
import { ServiceCategory, ServiceSolution } from '@/types/services',;
export function ServicesPage() {;
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),;
  const [searchTerm, setSearchTerm] = useState(''),;
  const filteredServices = ALL_SERVICES.filter(service => {;
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory,;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),;
    return matchesCategory && matchesSearch;
  }),;
  const getServicesByCategory = (categoryId: string) => {;
    switch (categoryId) {;
      case 'ai-services': return AI_SERVICES,;
      case 'it-services': return IT_SERVICES,;
      case 'micro-saas': return MICRO_SAAS_SERVICES,;
      case 'cybersecurity': return CYBERSECURITY_SERVICES,;
      case 'data-analytics': return DATA_ANALYTICS_SERVICES,;
      case 'cloud-solutions': return CLOUD_SOLUTIONS,;
      default: return ALL_SERVICES;
    }
  },
import { ServiceCategory, ServiceSolution } from '@/types/services';
  const filteredServices = ALL_SERVICES && ALL_SERVICES.filter(service => {;
    const matchesCategory =;'
      selectedCategory === 'all' || service && service.category === selectedCategory;
    const matchesSearch =;
      service && service.title.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.tags.some(tag =>;
        tag && tag.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
      );
    return matchesCategory && matchesSearch;  });
  const getServicesByCategory = (categoryId: string) => {;'
    switch (categoryId) {    const matchesCategory = selectedCategory === 'all' || service && service.category === selectedCategory;
    const matchesSearch = service && service.title.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         service && service.tags.some(tag => tag && tag.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
        return AI_SERVICES;'
      case 'it-services':;
        return IT_SERVICES;'
      case 'micro-saas':;
        return MICRO_SAAS_SERVICES;'
      case 'cybersecurity':;
        return CYBERSECURITY_SERVICES;'
      case 'data-analytics':;
        return DATA_ANALYTICS_SERVICES;'
      case 'cloud-solutions':;
        return CLOUD_SOLUTIONS;
      default:;
        return ALL_SERVICES;
    }

  const selectedServices = selectedCategory === 'all' ? filteredServices : getServicesByCategory(selectedCategory),

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>;
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

              </Link>
              <a 

                href="mailto:kleber@ziontechgroup.com"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
origin/cursor/expand-services-advertise-and-build-project-c28b

ursor/fix-website-loading-errors-and-merge-6662
                ✉️ Email Us
              </Link>

                ✉️ Email Us;
              </a>
            </div>
          </div>
        </div>
      </div>
  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray-100">;
      {/* Hero Section */}  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray-100">;
      {/* Hero Section */}

{/* Contact Info Banner */}
              Zion Tech Group Services;
            </h1>;
            <p className="text - xl mb - 8 text - blue-100">;
              Comprehensive IT, AI, and Micro SAAS solutions to transform your business.;
              From cutting - edge artificial intelligence to robust infrastructure support.;
            </p>;
            <div className="flex flex - wrap justify - center gap-4">;
              <a;
                href="tel:+13024640950";
                className="bg - white text - blue - 600 px - 6 py - 3 rounded - lg font - semibold hover:bg - blue - 50 transition-colors";
              >;
                📞 Call Now: +1 302 464 0950;
              </a>;
              <a;
href="mailto:kleber@ziontechgroup.com";
                className="bg - blue - 500 text - white px - 6 py - 3 rounded - lg font - semibold hover:bg - blue - 600 transition-colors";
              >;

                ✉️ Email Us;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;

      {/* Contact Info Banner */}
      {/* Contact Info Banner */}

      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-blue-600">📍</span>

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b


  return ("
    <div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray - 100">;
      {/* Hero Section */}

              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>"
            <div className="flex items-center gap-2">"
              <span className="text-blue-600">📱</span>
              <span>+1 302 464 0950</span>
            </div>"
            <div className="flex items-center gap-2">"
              <span className="text-blue-600">✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </div>

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

            <div className="flex items-center gap-2">
              <span className="text-blue-600">🌐</span>
              <a href="https://ziontechgroup.com" className="text-blue-600 hover:underline">
      {/* Contact Info Banner */}
<div className='bg-white border-b'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex flex-wrap justify-center items-center gap-8 text-gray-600'>
            <div className='flex items-center gap-2'>
              <span className='text-blue-600'>📍</span>
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
            <div className='flex items-center gap-2'>
              <span className='text-blue-600'>🌐</span>
              <a
                href='https://ziontechgroup.com'
                className='text-blue-600 hover:underline'
              >
origin/cursor/automate-test-improve-and-merge-code-2533
                ziontechgroup.com
              </Link>

              </Link>


"
            <div className="flex items-center gap-2">"
              <span className="text-blue-600">🌐</span>"
              <a href="https://ziontechgroup.com" className="text-blue-600 hover:underline">
                ziontechgroup.com;
            </div>
          </div>
        </div>
      </div>
                href='https://ziontechgroup && ziontechgroup.com'
                className='text-blue-600 hover:underline'>                ziontechgroup && ziontechgroup.com              <span>364 E Main St STE 1008, Middletown DE 19709</span>;
            </div>;
            <div className="flex items-center gap-2">;
              <span className="text-blue-600">📱</span>;
              <span>+1 302 464 0950</span>;
            </div>;
            <div className="flex items-center gap-2">;
              <span className="text-blue-600">✉️</span>;
              <span>kleber@ziontechgroup && ziontechgroup.com</span>;
            </div>;
            <div className="flex items-center gap-2">;
              <span className="text-blue-600">🌐</span>;
              <a href="https://ziontechgroup && ziontechgroup.com" className="text-blue-600 hover:underline">;
                ziontechgroup && ziontechgroup.com;
      {/* Contact Info Banner */}
      <div className='bg - white border - b'>;
        <div className='container mx - auto px - 4 py - 4'>;
          <div className='flex flex - wrap justify - center items - center gap - 8 text - gray - 600'>;
            <div className='flex items - center gap - 2'>;
              <span className='text - blue - 600'>📍</span>;
              <span > 364 E Main St STE 1008, Middletown DE 19709</span>;
            </div>;
            <div className='flex items - center gap - 2'>;
              <span className='text - blue - 600'>📱</span>;
              <span>+1 302 464 0950</span>;
            </div>;
            <div className='flex items - center gap - 2'>;
              <span className='text - blue - 600'>✉️</span>;
              <span > kleber@ziontechgroup.com</span>;
            </div>;
            <div className='flex items - center gap - 2'>;
              <span className='text - blue - 600'>🌐</span>;
              <a;
                href='https://ziontechgroup.com';
                className='text - blue - 600 hover:underline';
              >                ziontechgroup.com              <span > 364 E Main St STE 1008, Middletown DE 19709</span>;
            </div>;
            <div className="flex items - center gap-2">;
              <span className="text - blue-600">📱</span>;
              <span>+1 302 464 0950</span>;
            </div>;
            <div className="flex items - center gap-2">;
              <span className="text - blue-600">✉️</span>;
              <span > kleber@ziontechgroup.com</span>;
            </div>;
            <div className="flex items - center gap-2">;
              <span className="text - blue-600">🌐</span>;
              <a href="https://ziontechgroup.com" className="text - blue-600 hover:underline">;
                ziontechgroup.com;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

                type="text"

"
                type="text""
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>"
            <div className="flex gap-2">
{SERVICE_CATEGORIES.map((category) => (
      {/* Search and Filter Section */}
<div className='container mx-auto px-4 py-8'>
        <div className='bg-white rounded-xl shadow-lg p-6 mb-8'>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex-1'>
              <input
                type='text'
                placeholder='Search services...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            </div>
            <div className='flex gap-2'>
              {SERVICE_CATEGORIES.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${;
                    selectedCategory === category.id;
                      ? 'bg-blue-600 text-white';
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200';

                <button;
                  key={category && category.id}
                  onClick={() => setSelectedCategory(category && category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${;
                    selectedCategory === category && category.id;'
                      ? 'bg-blue-600 text-white';'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200';`
                  }`}
                >;
                  {category.icon} {category.name}
                </button>;
              ))}
            </div>;
          </div>;
        </div>;
          ))}

              {SERVICE_CATEGORIES.map((category) => (          ))}

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {selectedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {selectedServices.length === 0 && (
          <div className="text-center py-12">

          <div className="text-center py-12">

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

<div className="text-center py-12">

            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>

"
          <div className="text-center py-12">

"
            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>"
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
      {/* Why Choose Zion Tech Group */}

              Why Choose Zion Tech Group?
            </h2>

          <div className="text-center py-12">

<div className="text-center py-12">            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
<div className='text-center py-12'>
            <h3 className='text-xl text-gray-600 mb-4'>No services found</h3>
            <p className='text-gray-500'>
              Try adjusting your search or filter criteria
            </p>
origin/cursor/automate-test-improve-and-merge-code-2533
          </div>
        )}
      </div>;
      {/* Why Choose Zion Tech Group */}
<div className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
              Why Choose Zion Tech Group?
            </h2>
              Why Choose Zion Tech Group?
            </h2>              Why Choose Zion Tech Group?
            </h2>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">

origin/cursor/expand-services-advertise-and-build-project-c28b

              Why Choose Zion Tech Group?
            </h2>

              Why Choose Zion Tech Group?
            </h2>"
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver innovative, reliable, and cost-effective solutions that drive real business results;
            </p>
          </div>

origin/cursor/expand-services-advertise-and-build-project-c28b


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

              </div>
              <h3 className='text-xl font-semibold mb-2'>Innovation First</h3>

          "
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
            <div className="text-center">"
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl">🚀</span>

              </div>'
              <h3 className='text-xl font-semibold mb-2'>Innovation First</h3>'
              <p className='text-gray-600'>
                Cutting-edge AI and technology solutions;
              </p>
            </div>


            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

              </div>

              </div>'
              <h3 className='text-xl font-semibold mb-2'>
                Enterprise Security;
              </h3>'
              <p className='text-gray-600'>
                SOC 2, HIPAA, GDPR compliant solutions;
              </p>
            </div>

<div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

              </div>
              <h3 className='text-xl font-semibold mb-2'>Fast Deployment</h3>
              <p className='text-gray-600'>Quick setup and implementation</p>
            </div>
            </h2>            </h2>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?

origin/cursor/expand-services-advertise-and-build-project-c28b

            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver innovative, reliable, and cost-effective solutions that drive real business results;
            </p>
          </div>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
            <div className="text-center">"
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl">🚀</span>
              </div>"
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>"
              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>
            </div>"
            <div className="text-center">"
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-600">SOC 2, HIPAA, GDPR compliant solutions</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>"
              <h3 className="text-xl font-semibold mb-2">Fast Deployment</h3>"
              <p className="text-gray-600">Quick setup and implementation</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>

"
            <div className="text-center">"
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl">🎯</span>
              </div>

"
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>"
              <p className="text-gray-600">Trusted by businesses nationwide</p>
            <div className='text-center'>
              <div className='bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🎯</span>
              </div>
              <h3 className='text-xl font-semibold mb-2'>Proven Results</h3>
              <p className='text-gray-600'>Trusted by businesses nationwide</p>
origin/cursor/automate-test-improve-and-merge-code-2533
            </div>
          </div>
        </div>
      </div>
{/* CTA Section */}
            <p className='text-gray-500'>;
              Try adjusting your search or filter criteria;"
            </p>          </div>          <div className="text-center py-12">;"
            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>;"
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>;
          </div>;
        )}
      </div>;
      {/* Why Choose Zion Tech Group */}'
      <div className='bg-white py-16'>;'
        <div className='container mx-auto px-4'>;'
          <div className='text-center mb-12'>;'
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>;

            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get started with Zion Tech Group today and discover how our innovative solutions can drive growth, efficiency, and success for your organization.
          </p>"
          <div className="flex flex-wrap justify-center gap-4">
            <a "
              href="tel: +13024640950""
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              📞 Call +1 302 464 0950;
            </Link>
            <a "
              href="mailto:kleber@ziontechgroup.com""
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
            >
              ✉️ Get Free Consultation;
            </Link>
</Link>
            <a 
            <a
              href="https://ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              🌐 Visit Website;
            </a>
          </div>
        </div>
      </div>
    </div>

origin/cursor/expand-services-advertise-and-build-project-c28b
  )
      <div className="bg-white py-16">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h2 className="text-4xl font-bold text-gray-900 mb-4">;
ursor/fix-website-loading-errors-and-merge-6662
              Why Choose Zion Tech Group?;
            </h2>;'
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>;
              We deliver innovative, reliable, and cost-effective solutions that;
              drive real business results;
            </p>;
          </div>;'
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>;'
            <div className='text-center'>;'
              <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>;'
                <span className='text-2xl'>🚀</span>;
              </div>;'
              <h3 className='text-xl font-semibold mb-2'>Innovation First</h3>;'
              <p className='text-gray-600'>;
                Cutting-edge AI and technology solutions;
              </p>;
            </div>;'
            <div className='text-center'>;'
              <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>;'
                <span className='text-2xl'>🛡️</span>;
              </div>;'
              <h3 className='text-xl font-semibold mb-2'>;
                Enterprise Security;
              </h3>;'
              <p className='text-gray-600'>;
                SOC 2, HIPAA, GDPR compliant solutions;
              </p>;
            </div>;'
            <div className='text-center'>;'
              <div className='bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>;'
                <span className='text-2xl'>⚡</span>;
              </div>;'
              <h3 className='text-xl font-semibold mb-2'>Fast Deployment</h3>;'
              <p className='text-gray-600'>Quick setup and implementation</p>;
            </div>;'
            <div className='text-center'>;'
              <div className='bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>;'
                <span className='text-2xl'>🎯</span>;
              </div>;'
              <h3 className='text-xl font-semibold mb-2'>Proven Results</h3>;'
              <p className='text-gray-600'>Trusted by businesses nationwide</p>            </div>              Why Choose Zion Tech Group?;
            </h2>;"
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              We deliver innovative, reliable, and cost-effective solutions that drive real business results;
            </p>;
          </div>;"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;"
            <div className="text-center">;"
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">🚀</span>;
              </div>;"
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>;"
              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>;
            </div>;"
            <div className="text-center">;"
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">🛡️</span>;
              </div>;"
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>;"
              <p className="text-gray-600">SOC 2, HIPAA, GDPR compliant solutions</p>;
            </div>;"
            <div className="text-center">;"
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">⚡</span>;
              </div>;"
              <h3 className="text-xl font-semibold mb-2">Fast Deployment</h3>;"
              <p className="text-gray-600">Quick setup and implementation</p>;
            </div>;"
            <div className="text-center">;"
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">🎯</span>;
              </div>;"
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>;"
              <p className="text-gray-600">Trusted by businesses nationwide</p>;
      {/* Search and Filter Section */}'
      <div className='container mx - auto px - 4 py - 8'>;'
        <div className='bg - white rounded - xl shadow - lg p - 6 mb - 8'>;'
          <div className='flex flex - col md:flex - row gap - 4'>;'
            <div className='flex - 1'>;
              <input;'
                type='text';'
                placeholder='Search services...';
                value={search_term}
                on_change={e => setSearchTerm (e.target.value)}'
                className='w - full px - 4 py - 3 border border - gray - 300 rounded - lg focus:ring - 2 focus:ring - blue - 500 focus:border - transparent';
              />;
            </div>;'
            <div className='flex gap - 2'>;
              {SERVICE_CATEGORIES.map (category => (                <button              <input;"
                type="text";"
                placeholder="Search services...";
                value={search_term}
on_change={(e) => setSearchTerm (e.target.value)}
                className="w - full px - 4 py - 3 border border - gray - 300 rounded - lg focus:ring - 2 focus:ring - blue - 500 focus:border-transparent";
              />;
            </div>;
            <div className="flex gap-2">;
              {SERVICE_CATEGORIES.map ((category) => (
                <button;
                  key={category.id}
                  on_click={() => setSelectedCategory (category.id)}`
                  className={`px - 4 py - 2 rounded - lg font - medium transition - colors ${}
                    selected_category === category.id;'
                      ? 'bg - blue - 600 text - white';'
                      : 'bg - gray - 100 text - gray - 700 hover:bg - gray - 200';`
                  }`}
                >;
                  {category.icon} {category.name}
                </button>))}
            </div>;
          </div>;
        </div>;
{/* Services Grid */}
        <div className='grid grid - cols - 1 lg:grid - cols - 2 xl:grid - cols - 3 gap - 8'>;
          {selected_services.map (service => (            <ServiceCard key={service.id} service={service} />        <div className="grid grid - cols - 1 lg:grid - cols - 2 xl:grid - cols - 3 gap-8">;
          {selected_services.map ((service) => (
            <ServiceCard key={service.id} service={service} />))}
        </div>;
        {selected_services.length === 0 && ('
          <div className='text - center py - 12'>;'
            <h3 className='text - xl text - gray - 600 mb - 4'>No services found</h3>;'
            <p className='text - gray - 500'>;
Try adjusting your search or filter criteria;
            </p>          </div>          <div className="text - center py-12">;
            <h3 className="text - xl text - gray - 600 mb-4">No services found</h3>;
            <p className="text - gray-500">Try adjusting your search or filter criteria</p>;
          </div>)}
      </div>;
      {/* Why Choose Zion Tech Group */}'
      <div className='bg - white py - 16'>;'
        <div className='container mx - auto px - 4'>;'
          <div className='text - center mb - 12'>;'
            <h2 className='text - 4xl font - bold text - gray - 900 mb - 4'>;
              Why Choose Zion Tech Group?;
            </h2>;'
            <p className='text - xl text - gray - 600 max - w-3xl mx - auto'>;
              We deliver innovative, reliable, and cost - effective solutions that;
              drive real business results;
            </p>;
          </div>;'
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8'>;'
            <div className='text - center'>;'
              <div className='bg - blue - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4'>;'
                <span className='text - 2xl'>🚀</span>;
              </div>;'
              <h3 className='text - xl font - semibold mb - 2'>Innovation First</h3>;'
              <p className='text - gray - 600'>;
                Cutting - edge AI and technology solutions;
              </p>;
            </div>;'
            <div className='text - center'>;'
              <div className='bg - green - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4'>;'
                <span className='text - 2xl'>🛡️</span>;
              </div>;'
              <h3 className='text - xl font - semibold mb - 2'>;
                Enterprise Security;
              </h3>;'
              <p className='text - gray - 600'>;
                SOC 2, HIPAA, GDPR compliant solutions;
              </p>;
            </div>;'
            <div className='text - center'>;'
              <div className='bg - purple - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4'>;'
                <span className='text - 2xl'>⚡</span>;
              </div>;'
              <h3 className='text - xl font - semibold mb - 2'>Fast Deployment</h3>;'
              <p className='text - gray - 600'>Quick setup and implementation</p>;
            </div>;'
            <div className='text - center'>;'
              <div className='bg - orange - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4'>;'
                <span className='text - 2xl'>🎯</span>;
              </div>;'
              <h3 className='text - xl font - semibold mb - 2'>Proven Results</h3>;'
              <p className='text - gray - 600'>Trusted by businesses nationwide</p>            </div>              Why Choose Zion Tech Group?;
</h2>;
            <p className="text - xl text - gray - 600 max - w-3xl mx-auto">;
              We deliver innovative, reliable, and cost - effective solutions that drive real business results;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap-8">;
            <div className="text-center">;
              <div className="bg - blue - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb-4">;
                <span className="text-2xl">🚀</span>;
              </div>;
              <h3 className="text - xl font - semibold mb-2">Innovation First</h3>;
              <p className="text - gray-600">Cutting - edge AI and technology solutions</p>;
            </div>;
            <div className="text-center">;
              <div className="bg - green - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb-4">;
                <span className="text-2xl">🛡️</span>;
              </div>;
              <h3 className="text - xl font - semibold mb-2">Enterprise Security</h3>;
              <p className="text - gray-600">SOC 2, HIPAA, GDPR compliant solutions</p>;
            </div>;
            <div className="text-center">;
              <div className="bg - purple - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb-4">;
                <span className="text-2xl">⚡</span>;
              </div>;
              <h3 className="text - xl font - semibold mb-2">Fast Deployment</h3>;
              <p className="text - gray-600">Quick setup and implementation</p>;
            </div>;
            <div className="text-center">;
              <div className="bg - orange - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb-4">;
                <span className="text-2xl">🎯</span>;
              </div>;
              <h3 className="text - xl font - semibold mb-2">Proven Results</h3>;
              <p className="text - gray-600">Trusted by businesses nationwide</p>;
            </div>;
          </div>;
        </div>;
      </div>;
          </p>;

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
<div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16'>
origin/cursor/automate-test-improve-and-merge-code-2533
        <div className='container mx-auto px-4 text-center'>
<h2 className='text-4xl font-bold mb-6'>            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get started with Zion Tech Group today and discover how our innovative solutions can drive growth, efficiency, and success for your organization.
          </p>"
          <div className="flex flex-wrap justify-center gap-4">
            <a "
              href="tel: +13024640950""
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              📞 Call +1 302 464 0950;
            </Link>
            <a "
              href="mailto:kleber@ziontechgroup.com""
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
            <a
            <a
            </a>
            <a
            </Link>
            <a 

            </a>
            </Link>
            </Link>

            <a 

origin/cursor/expand-services-advertise-and-build-project-c28b
              href="https://ziontechgroup.com"
              ✉️ Get Free Consultation;
            <a;
"
              href="https://ziontechgroup.com""
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors'
origin/cursor/automate-test-improve-and-merge-code-2533
            >
              🌐 Visit Website;
          </div>
        </div>
      </div>
    </div>

  )

}
interface ServiceCardProps {}
  service: ServiceSolution"
              href="tel: +13024640950""
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">;
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
origin/cursor/expand-services-advertise-and-build-project-c28b

              📞 Call +1 302 464 0950;
            </a>;
            <a;
              href="mailto:kleber@ziontechgroup.com";
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors";
            >;
              ✉️ Get Free Consultation;
            </a>;
            <a;
              href="https://ziontechgroup.com";
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors";
            >;

              📞 Call +1 302 464 0950;
            </a>;
            <a"
              href="mailto:kleber@ziontechgroup && ziontechgroup.com""
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors">;
              ✉️ Get Free Consultation;
            </a>;
            <a"
              href="https://ziontechgroup && ziontechgroup.com""
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
;
interface ServiceCardProps {;
  service: ServiceSolution;
}

function ServiceCard({ service }: ServiceCardProps) {
  const [showDetails, setShowDetails] = useState(false),

  const getPopularPlan = () => {
origin/cursor/expand-services-advertise-and-build-project-c28b

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

}
function ServiceCard(): any ({ service }: ServiceCardProps) {;
);

interface ServiceCardProps {
  service: ServiceSolution;

function ServiceCard({ service }: ServiceCardProps) {
origin/cursor/automate-test-improve-and-merge-code-2533
  const [showDetails, setShowDetails] = useState(false);

    if (service.pricing.basic.popular) return service.pricing.basic;
    if (service.pricing.enterprise.popular) return service.pricing.enterprise;
    return service.pricing.professional;
  };

  const getPopularPlan = () => {;
    if (service && service.pricing.professional && professional.popular);
      return service && service.pricing.professional;
    if (service && service.pricing.basic && basic.popular) return service && service.pricing.basic;
    if (service && service.pricing.enterprise && enterprise.popular) return service && service.pricing.enterprise;
    return service && service.pricing.professional
};    if (service && service.pricing.professional && professional.popular) return service && service.pricing.professional;
    if (service && service.pricing.basic && basic.popular) return service && service.pricing.basic;
    if (service && service.pricing.enterprise && enterprise.popular) return service && service.pricing.enterprise;
    return service && service.pricing.professional;
    if (service.pricing.professional.popular) return service.pricing.professional,
    if (service.pricing.basic.popular) return service.pricing.basic,
    if (service.pricing.enterprise.popular) return service.pricing.enterprise,
    return service.pricing.professional
  },

if (service.pricing.professional.popular)
      return service.pricing.professional;
    if (service.pricing.basic.popular) return service.pricing.basic;
    if (service.pricing.enterprise.popular) return service.pricing.enterprise;
    return service.pricing.professional;
  };

  const popularPlan = getPopularPlan();
  return (
<div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
origin/cursor/automate-test-improve-and-merge-code-2533
      {/* Service Image */}
      <div className='h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden'>;
        <img
          src={service && service.images[0]}
          alt={service && service.title}
          className='w-full h-full object-cover'
          className="w-full h-full object-cover"
        />;
        <div className="absolute top-4 right-4">;
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">;
            {service && service.category}
          </span>;
        </div>;
        {service && service.aiScore && (;
          <div className='absolute bottom-4 left-4'>;
            <span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>          <div className="absolute bottom-4 left-4">;
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">;
              AI Score: {service && service.aiScore}
            </span>;
          </div>;
        )}
      {/* Service Content */}
      <div className='p - 6'>;
        <div className='flex items - start justify - between mb - 3'>;
          <h3 className='text - xl font - bold text - gray - 900 mb - 2'>;
            {service.title}
          </h3>;
          <div className='flex items - center gap - 1'>;
            <span className='text - yellow - 500'>⭐</span>;
            <span className='text - sm font - medium'>;
              {service.provider.rating}
      </div>;

      {/* Service Content */}
      <div className='p-6'>;
        <div className='flex items-start justify-between mb-3'>;
          <h3 className='text-xl font-bold text-gray-900 mb-2'>;
            {service && service.title}
          </h3>;
          <div className='flex items-center gap-1'>;
            <span className='text-yellow-500'>⭐</span>;
            <span className='text-sm font-medium'>;
              {service && service.provider.rating}
            </span>;
            <span className='text-gray-500 text-sm'>;
              ({service && service.provider.reviewCount});
            </span>;
          </div>;
        </div>;

        <p className='text-gray-600 mb-4 line-clamp-3'>{service && service.description}</p>;

        {/* Provider Info */}
        <div className='flex items-center gap-3 mb-4'>;
          <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>;
            <span className='text-blue-600 font-semibold text-sm'>              {service && service.provider.name && name.charAt(0)}
            </span>;
            <span className='text - gray - 500 text - sm'>;
              ({service.provider.review_count});
            </span>;
          </div>;
        </div>;
        <p className='text - gray - 600 mb - 4 line - clamp - 3'>{service.description}</p>;
        {/* Provider Info */}
        <div className='flex items - center gap - 3 mb - 4'>;
          <div className='w - 8 h - 8 bg - blue - 100 rounded - full flex items - center justify - center'>;
            <span className='text - blue - 600 font - semibold text - sm'>              {service.provider.name.char_at (0)}
  const popularPlan = getPopularPlan();
  return (

  const popularPlan = getPopularPlan(),

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">

  const popularPlan = getPopularPlan();
  return (

origin/cursor/expand-services-advertise-and-build-project-c28b
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

  const popularPlan = getPopularPlan(),

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Service Image */}

      {/* Service Image */}"
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <img;
          src={service.images[0]} 
alt={service.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute top-4 right-4">
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
        />
        <div className='absolute top-4 right-4'>
          <span className='bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold'>
origin/cursor/automate-test-improve-and-merge-code-2533
            {service.category}
          </span>
        </div>
        {service.aiScore && (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          <div className="absolute bottom-4 left-4">
          <div className='absolute bottom-4 left-4'>
            <span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>          <div className="absolute bottom-4 left-4">
origin/cursor/expand-services-advertise-and-build-project-c28b
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
<div className='absolute bottom-4 left-4'>
            <span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>
origin/cursor/automate-test-improve-and-merge-code-2533
              AI Score: {service.aiScore}
            </span>
          </div>

          <div className="absolute bottom-4 left-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              AI Score: {service.aiScore}
            </span>;
          </div>;

        )}
      </div>;
      {/* Service Content */}


      {/* Service Image */}
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <img 
          src={service.images[0]} 
          alt={service.title}
          alt={service.title}"
          className="w-full h-full object-cover"
        />

"
        <div className="absolute top-4 right-4">"
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            {service.category}
          </span>
        </div>
        {service.aiScore && (

"
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              AI Score: {service.aiScore}
            </span>
          </div>
"
          <div className="absolute bottom-4 left-4">"
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
      </div>
      {/* Service Content */}



        )}
      </div>
      {/* Service Content */}

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span className="text-sm font-medium">{service.provider.rating}</span>
            <span className="text-gray-500 text-sm">({service.provider.reviewCount})</span>
          </div>
        </div>
"
        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>

        {/* Provider Info */}

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">

"
        <div className="flex items-center gap-3 mb-4">"
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">"
            <span className="text-blue-600 font-semibold text-sm">
            <span className='text-blue-600 font-semibold text-sm'>
origin/cursor/automate-test-improve-and-merge-code-2533
              {service.provider.name.charAt(0)}
            </span>
          </div>
          <div>
<p className="font-medium text-gray-900">{service.provider.name}</p>

            <p className="font-medium text-gray-900">{service.provider.name}</p>

            <p className="font-medium text-gray-900">{service.provider.name}</p>
origin/cursor/expand-services-advertise-and-build-project-c28b
            <p className='font-medium text-gray-900'>{service.provider.name}</p>
'
            <p className='font-medium text-gray-900'>{service.provider.name}</p>'
            <p className='text-sm text-gray-500'>{service.provider.location}</p>
          </div>
          {service.provider.verified && ('
            <span className='text-blue-600 text-sm'>✓ Verified</span>          )}
        </div>"
        {/* Pricing */}            <p className="font-medium text-gray-900">{service.provider.name}</p>

            <p className="font-medium text-gray-900">{service.provider.name}</p>
            <p className="text-sm text-gray-500">{service.provider.location}</p>
          </div>
          {service.provider.verified && ("
            <span className="text-blue-600 text-sm">✓ Verified</span>
        </div>
        {/* Pricing */}
        <div className='bg-gray-50 rounded-lg p-4 mb-4'>

          )}

origin/cursor/expand-services-advertise-and-build-project-c28b
        </div>
        {/* Pricing */}
<p className='font-medium text-gray-900'>{service.provider.name}</p>
            <p className='text-sm text-gray-500'>{service.provider.location}</p>
          </div>
          {service.provider.verified && (
            <span className='text-blue-600 text-sm'>✓ Verified</span>
          )}
        </div>
        {/* Pricing */}
<div className='bg-gray-50 rounded-lg p-4 mb-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
          <div className='text-center'>
            <div className='text-2xl font-bold text-gray-900'>
              {popularPlan.currency}
              {popularPlan.price}
              <span className='text-sm font-normal text-gray-500'>
                /{popularPlan.period}
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

origin/cursor/expand-services-advertise-and-build-project-c28b
              <span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">

            {popularPlan.popular && (              <span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            <p className="font-medium text-gray-900">{service.provider.name}</p>
            <p className="text-sm text-gray-500">{service.provider.location}</p>
          </div>
          {service.provider.verified && (
            <span className="text-blue-600 text-sm">✓ Verified</span>
)}
        </div>;
            <p className="text-sm text-gray-500">{service && service.provider.location}</p>;
          </div>;
          {service && service.provider.verified && (;"
            <span className="text-blue-600 text-sm">✓ Verified</span>;
        </div>;
<span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>
origin/cursor/automate-test-improve-and-merge-code-2533
<span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>
origin/cursor/automate-test-improve-and-merge-code-2533
                Most Popular
              </span>
            )}
        {/* Features Preview */}
<div className='mb-4'>
          <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>
          <div className='flex flex-wrap gap-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
            {service.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index}
                className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs'
              >
{feature}
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
            )}
          </div>;
        </div>;
        {/* Features Preview */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
              >
                {feature}
              </span>;
            ))}
{service.features.length > 3 && (
              <span className="text-gray-500 text-xs">
                +{service.features.length - 3} more
              </span>
            ))}
            {service.features.length > 3 && (
<span className='text-gray-500 text-xs'>
                +{service.features.length - 3} more
              </span>
            {service.features.length > 3 && ('"
              <span className='text-gray-500 text-xs'>                +{service.features.length - 3} more              <span className="text-gray-500 text-xs">
                +{service.features.length - 3} more;
              </span>"
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
              >
                {feature}


        {/* Features Preview */}

origin/cursor/expand-services-advertise-and-build-project-c28b
              </span>;
            </div>;
            {popular_plan.popular && ('"
              <span className='bg - blue - 600 text - white px - 2 py - 1 rounded - full text - xs font - medium'>                Most Popular        <div className="bg - gray - 50 rounded - lg p - 4 mb - 4">;"
          <div className="text - center">;"
            <div className="text - 2xl font - bold text - gray - 900">;
              {popular_plan.currency}{popular_plan.price}"
              <span className="text - sm font - normal text - gray - 500">;
              </span>;
            </div>;
            {popular_plan.popular && ('"
              <span className='bg - blue - 600 text - white px - 2 py - 1 rounded - full text - xs font - medium'>              <span className="bg - blue - 600 text - white px - 2 py - 1 rounded - full text - xs font - medium">;
                Most Popular;
              </span>)}
          </div>;
        </div>;
        {/* Features Preview */}'
        <div className='mb - 4'>;'
          <h4 className='font - semibold text - gray - 900 mb - 2'>Key Features:</h4>;'
          <div className='flex flex - wrap gap - 2'>;
            {service.features.slice (0, 3).map ((feature, index) => (
              <span;'
        <div className='mb-4'>;'
          <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>;'
          <div className='flex flex-wrap gap-2'>;
            {service && service.features.slice(0, 3).map((feature, index) => (;
              <span;
                key={index}
                key={index}"
                className="bg - blue - 100 text - blue - 800 px - 2 py - 1 rounded text - xs";
              >;
                {feature}
              </span>))}
            {service.features.length > 3 && (
            )}
        {/* Action Buttons */}
            )}
        {/* Action Buttons */}

            )}
        {/* Action Buttons */}

ursor/fix-website-loading-errors-and-merge-6662
            )}
          </div>;
        </div>;
        {/* Action Buttons */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'          >        <div className="flex gap-2">;
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors";

        {/* Action Buttons */}
        {/* Action Buttons */}

        <div className="flex gap-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
>

<div className='flex gap-2'>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'
          >
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>;
          <a;
            href={`tel:+13024640950`}
            className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
className='bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors'

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
<div className='flex gap-2'>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'
          >
origin/cursor/automate-test-improve-and-merge-code-2533
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>;
          <a
            href={`tel:+13024640950`}

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
className='bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors'
origin/cursor/automate-test-improve-and-merge-code-2533
          >
            Call Now;
          </a>
        </div>

            className='bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors'>            className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors";
              <span className='text - gray - 500 text - xs'>                +{service.features.length - 3} more              <span className="text - gray - 500 text-xs">;
'"
            className='bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors'>            className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors";'"
              <span className='text - gray - 500 text - xs'>                +{service.features.length - 3} more              <span className="text - gray - 500 text - xs">;
                +{service.features.length - 3} more;
              </span>)}
          </div>;
        </div>;
        {/* Action Buttons */}'
        <div className='flex gap - 2'>;
          <button;
on_click={() => setShowDetails (!show_details)}
            className='flex - 1 bg - blue - 600 text - white py - 2 px - 4 rounded - lg font - medium hover:bg - blue - 700 transition - colors'          >        <div className="flex gap-2">;
          <button;
            on_click={() => setShowDetails (!show_details)}
            className="flex - 1 bg - blue - 600 text - white py - 2 px - 4 rounded - lg font - medium hover:bg - blue - 700 transition-colors";
            {show_details ? 'Hide Details' : 'View Details'}
          </button>;
          <a;
            href={`tel:+13024640950`}
            className='bg - green - 600 text - white py - 2 px - 4 rounded - lg font - medium hover:bg - green - 700 transition - colors'          >            className="bg - green - 600 text - white py - 2 px - 4 rounded - lg font - medium hover:bg - green - 700 transition-colors";
          >;
            Call Now;
          </a>;
        </div>;
        {/* Detailed Information */}
        {showDetails && (
<div className="mt-6 pt-6 border-t border-gray-200">
            <div className="space-y-4">
              {/* Benefits */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index}>{benefit}</li>
            <div className="space-y-4">
              {/* Benefits */}
              <div>

                    <li key={index}>{benefit}</li>
))}
              {/* Use Cases */}

origin/cursor/expand-services-advertise-and-build-project-c28b
        {/* Detailed Information */}
        {showDetails && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="space-y-4">
              {/* Benefits */}
              <div>
<div className='mt-6 pt-6 border-t border-gray-200'>
            <div className='space-y-4'>
              {/* Benefits */}
              <div>
                <h4 className='font-semibold text-gray-900 mb-2'>Benefits:</h4>
                <ul className='list-disc list-inside text-sm text-gray-600 space-y-1'>
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
              {/* Use Cases */}
              <div>
<h4 className='font-semibold text-gray-900 mb-2'>Use Cases:</h4>
                <div className='flex flex-wrap gap-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
                  {service.useCases.slice(0, 3).map((useCase, index) => (
                    <span 
                      key={index}
className='bg-green-100 text-green-800 px-2 py-1 rounded text-xs'
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
              {/* Technologies */}
              <div>
<h4 className='font-semibold text-gray-900 mb-2'>
                  Technologies:
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {service.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className='bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs'
origin/cursor/automate-test-improve-and-merge-code-2533
                    >
                      {tech}
                    </span>;
                  ))}
              <div className="grid grid-cols-2 gap-4 text-sm">

                  ))}
                </ul>;
              </div>;
              {/* Use Cases */}
<div>
                <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.slice(0, 3).map((useCase, index) => (
                    <span 
                      key={index}
                      className='bg-green-100 text-green-800 px-2 py-1 rounded text-xs'                    >                  {service.useCases.slice(0, 3).map((useCase, index) => (
                    <span
                      key={index}

                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                    >
ursor/fix-website-loading-errors-and-merge-6662
                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                    >
origin/cursor/integrate-build-improve-and-re-verify-2156

"
                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                    >

                      {useCase}
                    </span>;
                  ))}
                </div>;
              </div>;
              {/* Technologies */}
<div>
                <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 4).map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
                <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>;
              </div>;
              {/* Use Cases */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.slice(0, 3).map((useCase, index) => (
                    <span 
                      key={index}
                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                    >
                      {useCase}
                    </span>;
                  ))}
                </div>;
              </div>;
              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 4).map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
                      className='bg-green-100 text-green-800 px-2 py-1 rounded text-xs'
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
              {/* Technologies */}
              <div>
<h4 className='font-semibold text-gray-900 mb-2'>
                  Technologies:
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {service.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className='bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs'
origin/cursor/automate-test-improve-and-merge-code-2533
                    >
ursor/fix-website-loading-errors-and-merge-6662
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
                    >
origin/cursor/integrate-build-improve-and-re-verify-2156

"
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
                    >

                      {tech}
                    </span>;
                  ))}
</div>;
              </div>;
              {/* Deployment & Support */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>

                </div>;
              </div>;
              {/* Deployment & Support */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
origin/cursor/expand-services-advertise-and-build-project-c28b
                  <span className="font-medium text-gray-900">Deployment:</span>

                <div>'
                  <span className='font-medium text-gray-900'>Deployment:</span>'
                  <p className='text-gray-600'>{service.deploymentTime}</p>
                </div>
                <div>

                <div>

"
                  <span className="font-medium text-gray-900">Deployment:</span>"
                  <p className="text-gray-600">{service.deploymentTime}</p>
                </div>
                <div>

                  <span className="font-medium text-gray-900">Support:</span>
        {/* Detailed Information */}
        {showDetails && (
          <div className="mt-6 pt-6 border-t border-gray-200">                  <span className="font-medium text-gray-900">Support:</span>
                  <p className="text-gray-600">{service.support.slice(0, 2).join(', ')}</p>
                </div>
              </div>

              <div className='grid grid-cols-2 gap-4 text-sm'>;
                <div>;'
                  <span className='font-medium text-gray-900'>Deployment:</span>;'
                  <p className='text-gray-600'>{service && service.deploymentTime}</p>;
                </div>;
                <div>;'
                  <span className='font-medium text-gray-900'>Support:</span>;'
                  <p className='text-gray-600'>;'
                    {service && service.support.slice(0, 2).join(', ')}
                  </p>                </div>                <div>;"
                  <span className="font-medium text-gray-900">Deployment:</span>;"
                  <p className="text-gray-600">{service && service.deploymentTime}</p>;
                </div>;
                <div>;"
                  <span className="font-medium text-gray-900">Support:</span>;'"
                  <p className="text-gray-600">{service && service.support.slice(0, 2).join(', ')}</p>;
                </div>;
              </div>;
                  <span className='font-medium text-gray-900'>Support:</span>
                  <p className='text-gray-600'>
                    {service.support.slice(0, 2).join(', ')}
                  </p>
                </div>
              </div>
              {/* All Pricing Plans */}
              <div>
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
                        {details.price}/{details.period}
                      </span>
                    </div>
origin/cursor/automate-test-improve-and-merge-code-2533
                  ))}
              {/* Contact CTA */}
              {/* All Pricing Plans */}

{/* All Pricing Plans */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Pricing Plans:</h4>
                <div className="space-y-2">
                  {Object.entries(service.pricing).map(([plan, details]) => (
<div key={plan} className="flex justify-between items-center text-sm">
                      <span className="capitalize font-medium">{plan}</span>
                      <span className="text-gray-600">
                        {details.currency}{details.price}/{details.period}
                      </span>;
                    </div>;

                  ))}
                </div>;
              </div>;

              {/* Contact CTA */}
<div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-sm text-blue-800 mb-2">
                  Ready to get started with {service.title}?
                </p>"
                <div className="flex gap-2 justify-center">
                  <a;`
                    href={`tel:+13024640950`}

"
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
<div className='bg-blue-50 rounded-lg p-4 text-center'>
                <p className='text-sm text-blue-800 mb-2'>
                  Ready to get started with {service.title}?
                </p>
                <div className='flex gap-2 justify-center'>
                  <a
                    href={`tel:+13024640950`}
                    className='bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors'
origin/cursor/automate-test-improve-and-merge-code-2533
                  >
                    📞 Call +1 302 464 0950;
                  </a>
                  <a;`
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"

                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
className='bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors'
origin/cursor/automate-test-improve-and-merge-code-2533
                  >
                  ))}
              {/* Contact CTA */}                  ))}

                </div>;
              </div>;

              {/* Contact CTA */}                  >
                    ✉️ Email Inquiry

                  >
                    ✉️ Email Inquiry;
                  </Link>
                </div>
              </div>

}
}
}
}
}
}
}
}
}
}'
              <div className='bg-blue-50 rounded-lg p-4 text-center'>;'
                <p className='text-sm text-blue-800 mb-2'>;
                  Ready to get started with {service && service.title}?;
                </p>;'
                <div className='flex gap-2 justify-center'>;
                  <a;`
                    href={`tel:+13024640950`}'
                    className='bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors'>                  Ready to get started with {service && service.title}?;
                </p>;"
                <div className="flex gap-2 justify-center">;
                  <a;`
                    href={`tel:+13024640950`}"
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors">;
                  </a>;
                  <a;`
                    href={`mailto:kleber@ziontechgroup && ziontechgroup.com?subject=Inquiry about ${service && service.title}`}'"
                    className='bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors'>                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors";
                  >;
                  </a>;
                </div>;
              </div>;
            </div>;
          </div>;
        )}
      </div>;
    </div>;
  );
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
}

origin/cursor/expand-services-advertise-and-build-project-c28b
      </div>;
    </div>;
  );  );
}
  )
}        {/* Detailed Information */}

  )
}

origin/cursor/expand-services-advertise-and-build-project-c28b

        {/* Detailed Information */}
        {show_details && (
          <div className='mt - 6 pt - 6 border - t border - gray - 200'>;
            <div className='space - y-4'>;
              {/* Benefits */}
              <div>;
                <h4 className='font - semibold text - gray - 900 mb - 2'>Benefits:</h4>;
                <ul className='list - disc list - inside text - sm text - gray - 600 space - y-1'>                  {service.benefits.slice (0, 3).map ((benefit, index) => (          <div className="mt - 6 pt - 6 border - t border - gray-200">;
            <div className="space-y-4">;
              {/* Benefits */}
              <div>;
                <h4 className="font - semibold text - gray - 900 mb-2">Benefits:</h4>;
                <ul className="list - disc list - inside text - sm text - gray - 600 space-y-1">;
                    <li key={index}>{benefit}</li>))}
                </ul>;
              </div>;
              {/* Use Cases */}
              <div>;'
                <h4 className='font - semibold text - gray - 900 mb - 2'>Use Cases:</h4>;'
                <div className='flex flex - wrap gap - 2'>;
                  {service.use_cases.slice (0, 3).map ((use_case, index) => (
                    <span;
                      key={index}'
                      className='bg - green - 100 text - green - 800 px - 2 py - 1 rounded text - xs'                    >                  {service.use_cases.slice (0, 3).map ((use_case, index) => (
                    <span;
key={index}
                      className="bg - green - 100 text - green - 800 px - 2 py - 1 rounded text-xs";
                    >;
                      {use_case}
                    </span>))}
                </div>;
              </div>;
              {/* Technologies */}
              <div>;'
                <h4 className='font - semibold text - gray - 900 mb - 2'>;
                  Technologies:;
                </h4>;'
                <div className='flex flex - wrap gap - 2'>;
                  {service.technologies.slice (0, 4).map ((tech, index) => (
                    <span;
                      key={index}'
                      className='bg - purple - 100 text - purple - 800 px - 2 py - 1 rounded text - xs'                    >                  {service.technologies.slice (0, 4).map ((tech, index) => (
                    <span;
key={index}
                      className="bg - purple - 100 text - purple - 800 px - 2 py - 1 rounded text-xs";
                    >;
                      {tech}
                    </span>))}
                </div>;
              </div>;
              {/* Deployment & Support */}'
              <div className='grid grid - cols - 2 gap - 4 text - sm'>;
                <div>;'
                  <span className='font - medium text - gray - 900'>Deployment:</span>;'
                  <p className='text - gray - 600'>{service.deployment_time}</p>;
                </div>;
                <div>;'
                  <span className='font - medium text - gray - 900'>Support:</span>;'
                  <p className='text - gray - 600'>;'
                    {service.support.slice (0, 2).join (', ')}
</p>                </div>                <div>;
                  <span className="font - medium text - gray-900">Deployment:</span>;
                  <p className="text - gray-600">{service.deployment_time}</p>;
                </div>;
                <div>;
                  <span className="font - medium text - gray-900">Support:</span>;
                  <p className="text - gray-600">{service.support.slice (0, 2).join (', ')}</p>;
                </div>;
              </div>;
              {/* All Pricing Plans */}
              <div>;'
                <h4 className='font - semibold text - gray - 900 mb - 2'>;
                  Pricing Plans:;
                </h4>;'
                <div className='space - y-2'>;
                  {Object.entries (service.pricing).map (([plan, details]) => (
                    <div;
                      key={plan}'
                      className='flex justify - between items - center text - sm';
                    >;'
                      <span className='capitalize font - medium'>{plan}</span>;'
                      <span className='text - gray - 600'>;
{details.currency}
                        {details.price}/{details.period}                      </span>                    <div key={plan} className="flex justify - between items - center text-sm">;
                      <span className="capitalize font-medium">{plan}</span>;
                      <span className="text - gray-600">;
                        {details.currency}{details.price}/{details.period}
                    </div>))}
                </div>;
              </div>;
              {/* Contact CTA */}'
              <div className='bg - blue - 50 rounded - lg p - 4 text - center'>;'
                <p className='text - sm text - blue - 800 mb - 2'>;
                  Ready to get started with {service.title}?;
                </p>;'
                <div className='flex gap - 2 justify - center'>;
                  <a;`
                    href={`tel:+13024640950`}'
                    className='bg - blue - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - blue - 700 transition - colors'                  >                  Ready to get started with {service.title}?;
</p>;
                <div className="flex gap - 2 justify-center">;
                  <a;
                    href={`tel:+13024640950`}
                    className="bg - blue - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - blue - 700 transition-colors";
                  >;
                    📞 Call +1 302 464 0950;
                  </a>;
                  <a;
                    href={`mailto:kleber@ziontechgroup.com?subject = Inquiry about ${service.title}`}
                    className='bg - green - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - green - 700 transition - colors'                  >                    className="bg - green - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - green - 700 transition-colors";
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
      </div>
    </div>
);
origin/cursor/automate-test-improve-and-merge-code-20a4

            </div>
          </div>
        )}
      </div>;
    </div>;
  );
}

origin/cursor/automate-test-improve-and-merge-code-20a4

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

      </div>
    </div>
);
origin/cursor/automate-test-improve-and-merge-code-2533
              <h3 className='text - xl font - semibold mb - 2'>Innovation First</h3>;
              <p className='text - gray - 600'>;
              <div className='bg - green - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                <span className='text - 2xl'>🛡️</span>;
              <h3 className='text - xl font - semibold mb - 2'>;
              <div className='bg - purple - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                <span className='text - 2xl'>⚡</span>;
              <h3 className='text - xl font - semibold mb - 2'>Fast Deployment</h3>;
              <p className='text - gray - 600'>Quick setup and implementation</p>;
              <div className='bg - orange - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                <span className='text - 2xl'>🎯</span>;
              <h3 className='text - xl font - semibold mb - 2'>Proven Results</h3>;
              <p className='text - gray - 600'>Trusted by businesses nationwide</p>            </div>              Why Choose Zion Tech Group?;
            <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;"
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;"
            <div className="text - center">;"
              <div className="bg - blue - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;"
                <span className="text - 2xl">🚀</span>;"
              <h3 className="text - xl font - semibold mb - 2">Innovation First</h3>;""
              <p className="text - gray - 600">Cutting - edge AI and technology solutions</p>;"
              <div className="bg - green - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;"
                <span className="text - 2xl">🛡️</span>;"
              <h3 className="text - xl font - semibold mb - 2">Enterprise Security</h3>;""
              <p className="text - gray - 600">SOC 2, HIPAA, GDPR compliant solutions</p>;"
              <div className="bg - purple - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;"
                <span className="text - 2xl">⚡</span>;"
              <h3 className="text - xl font - semibold mb - 2">Fast Deployment</h3>;""
              <p className="text - gray - 600">Quick setup and implementation</p>;"
              <div className="bg - orange - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;"
                <span className="text - 2xl">🎯</span>;"
              <h3 className="text - xl font - semibold mb - 2">Proven Results</h3>;""
              <p className="text - gray - 600">Trusted by businesses nationwide</p>;"
      <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold mb-6'>
              href='https://ziontechgroup.com
              className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors'            >            Ready to Transform Your Business?
              <p className="text-gray-600">Trusted by businesses nationwide</p>;"
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">;"
        <div className="container mx-auto px-4 text-center">;"
          <h2 className="text-4xl font-bold mb-6">;"
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">;"
          <div className="flex flex-wrap justify-center gap-4">;"
              href="tel: +13024640950";""
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors";"
              href="mailto:kleber@ziontechgroup && ziontechgroup.com"""
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors">;"
              href="https://ziontechgroup && ziontechgroup.com"""
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">;"
    <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>;
      <div className='h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden'>;
        <img;
          src={service && service.images[0]}
          alt={service && service.title}
          className='w-full h-full object-cover
          className="w-full h-full object-cover""
        />;
</img>"
        <div className="absolute top-4 right-4">;"
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">;"
</span>
          </span>;
          <div className='absolute bottom-4 left-4'>;
            <span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>          <div className="absolute bottom-4 left-4">;"
</span>"
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">;"
      <div className='p - 6'>;
        <div className='flex items - start justify - between mb - 3'>;
          <h3 className='text - xl font - bold text - gray - 900 mb - 2'>;
          <div className='flex items - center gap - 1'>;
            <span className='text - yellow - 500'>⭐</span>;
            <span className='text - sm font - medium'>;
      <div className='p-6'>;
        <div className='flex items-start justify-between mb-3'>;
          <h3 className='text-xl font-bold text-gray-900 mb-2'>;
          <div className='flex items-center gap-1'>;
            <span className='text-yellow-500'>⭐</span>;
            <span className='text-sm font-medium'>;
            <span className='text-gray-500 text-sm'>;
        <p className='text-gray-600 mb-4 line-clamp-3'>{service && service.description}</p>;
        <div className='flex items-center gap-3 mb-4'>;
          <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>;
            <span className='text-blue-600 font-semibold text-sm'>              {service && service.provider.name && name.charAt(0)}
            <span className='text - gray - 500 text - sm'>;
        <p className='text - gray - 600 mb - 4 line - clamp - 3'>{service.description}</p>;
        <div className='flex items - center gap - 3 mb - 4'>;
          <div className='w - 8 h - 8 bg - blue - 100 rounded - full flex items - center justify - center'>;
            <span className='text - blue - 600 font - semibold text - sm'>              {service.provider.name.char_at (0)}
          <div>          </div>;
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">"
          src={service.images[0]} 
          alt={service.title}"
        />
        <div className="absolute top-4 right-4">"
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">"
          <div className="absolute bottom-4 left-4">"
          <div className='absolute bottom-4 left-4'>
            <span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>          <div className="absolute bottom-4 left-4">"
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">"
</img>
      <div className='p-6'>
        <div className='flex items-start justify-between mb-3'>
          <h3 className='text-xl font-bold text-gray-900 mb-2'>
          <div className='flex items-center gap-1'>
            <span className='text-yellow-500'>⭐</span>
            <span className='text-sm font-medium'>
            <span className='text-gray-500 text-sm'>
        <p className='text-gray-600 mb-4 line-clamp-3'>{service.description}</p>
        <div className='flex items-center gap-3 mb-4'>
          <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
            <span className='text-blue-600 font-semibold text-sm'>              {service.provider.name.charAt(0)}
          <div>          </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>"
      <div className="p-6">"
        <div className="flex items-start justify-between mb-3">"
          <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>""
          <div className="flex items-center gap-1">"
            <span className="text-yellow-500">⭐</span>""
            <span className="text-sm font-medium">{service.provider.rating}</span>""
            <span className="text-gray-500 text-sm">({service.provider.reviewCount})</span>"
        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>""
        <div className="flex items-center gap-3 mb-4">"
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">"
            <span className="text-blue-600 font-semibold text-sm">"
          <div>
            <p className='font-medium text-gray-900'>{service.provider.name}</p>
            <p className='text-sm text-gray-500'>{service.provider.location}</p>
            <span className='text-blue-600 text-sm'>✓ Verified</span>          )}
        {/* Pricing */}            <p className="font-medium text-gray-900">{service.provider.name}</p>""
            <p className="text-sm text-gray-500">{service.provider.location}</p>"
            <span className="text-blue-600 text-sm">✓ Verified</span>"
        <div className='bg-gray-50 rounded-lg p-4 mb-4'>
          <div className='text-center'>
            <div className='text-2xl font-bold text-gray-900'>
              <span className='text-sm font-normal text-gray-500'>                /{popularPlan.period}
              <span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>                Most Popular        <div className="bg-gray-50 rounded-lg p-4 mb-4">"
            <div className="text-2xl font-bold text-gray-900">"
              <span className="text-sm font-normal text-gray-500">"
              <span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">"
            <p className="font-medium text-gray-900">{service.provider.name}</p>""
            <span className="text-blue-600 text-sm">✓ Verified</span>""
        {/* Pricing */}            <p className="font-medium text-gray-900">{service && service.provider.name}</p>;""
            <p className="text-sm text-gray-500">{service && service.provider.location}</p>;"
            <span className="text-blue-600 text-sm">✓ Verified</span>;"
              <span;
                key={index}"
                className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs'              >            {service.features.slice(0, 3).map((feature, index) => (
                key={index}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs""
              <span className='text-gray-500 text-xs'>                +{service.features.length - 3} more              <span className="text-gray-500 text-xs">"
              <span className='bg - blue - 600 text - white px - 2 py - 1 rounded - full text - xs font - medium'>                Most Popular        <div className="bg - gray - 50 rounded - lg p - 4 mb - 4">;"
            <div className="text - 2xl font - bold text - gray - 900">;"
              <span className="text - sm font - normal text - gray - 500">;"
              <span className='bg - blue - 600 text - white px - 2 py - 1 rounded - full text - xs font - medium'>              <span className="bg - blue - 600 text - white px - 2 py - 1 rounded - full text - xs font - medium">;"
</span>)
              </span>)}
        <div className='mb - 4'>;
          <h4 className='font - semibold text - gray - 900 mb - 2'>Key Features:</h4>;
          <div className='flex flex - wrap gap - 2'>;
        <div className='mb-4'>;
          <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>;
          <div className='flex flex-wrap gap-2'>;
                className="bg - blue - 100 text - blue - 800 px - 2 py - 1 rounded text - xs";"
              </span>))}
        <div className='flex gap-2'>
            onClick={() => setShowDetails(!showDetails)}
            className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'          >        <div className="flex gap-2">;"
            href={`tel:+13024640950`}
              <span className='text - gray - 500 text - xs'>                +{service.features.length - 3} more              <span className="text - gray - 500 text - xs">;"
            on_click={() => setShowDetails (!show_details)}
            className='flex - 1 bg - blue - 600 text - white py - 2 px - 4 rounded - lg font - medium hover:bg - blue - 700 transition - colors'          >        <div className="flex gap - 2">;"
          <a;`;
            href={`tel:+13024640950`}"
            className='bg - green - 600 text - white py - 2 px - 4 rounded - lg font - medium hover:bg - green - 700 transition - colors'          >            className="bg - green - 600 text - white py - 2 px - 4 rounded - lg font - medium hover:bg - green - 700 transition - colors";"
          <div className="mt-6 pt-6 border-t border-gray-200">"
                <h4 className='font-semibold text-gray-900 mb-2'>Benefits:</h4>
                <ul className='list-disc list-inside text-sm text-gray-600 space-y-1'>                  {service.benefits.slice(0, 3).map((benefit, index) => (          <div className="mt-6 pt-6 border-t border-gray-200">"
</ul>"
            <div className="space-y-4">"

                    <li key={index}>{benefit}</li>
                      key={index})"
                      className='bg-green-100 text-green-800 px-2 py-1 rounded text-xs'                    >                  {service.useCases.slice(0, 3).map((useCase, index) => (

                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs""
              <div>;
                <h4 className='font-semibold text-gray-900 mb-2'>Use Cases:</h4>;
                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">;"
                      className='bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs'                    >                  {service.technologies.slice(0, 4).map((tech, index) => (

                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs""
                    </span>;"
              <div className="grid grid-cols-2 gap-4 text-sm">"
                </ul>;
                  <span className='font-medium text-gray-900'>Deployment:</span>
                  <p className='text-gray-600'>{service.deploymentTime}</p>

                <h4 className='font-semibold text-gray-900 mb-2'>;
</h4>
                </h4>;
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">;"
                  <span className="font-medium text-gray-900">Deployment:</span>""
                  <p className="text-gray-600">{service.deploymentTime}</p>"
                  <span className="font-medium text-gray-900">Support:</span>")"
                  <p className="text-gray-600">{service.support.slice(0, 2).join(', ')}</p>
              <div className='grid grid-cols-2 gap-4 text-sm'>;
                  <span className='font-medium text-gray-900'>Deployment:</span>;
                  <p className='text-gray-600'>{service && service.deploymentTime}</p>;
                  <span className='font-medium text-gray-900'>Support:</span>;
                  </p>                </div>                <div>;
                  <span className="font-medium text-gray-900">Deployment:</span>;""
                  <p className="text-gray-600">{service && service.deploymentTime}</p>;"
                  <span className="font-medium text-gray-900">Support:</span>;""
                  <p className="text-gray-600">{service && service.support.slice(0, 2).join(', ')}</p>;
                <div className="flex gap-2 justify-center">"

                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors""
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
              <div className='bg-blue-50 rounded-lg p-4 text-center'>;
                <p className='text-sm text-blue-800 mb-2'>;
                <div className='flex gap-2 justify-center'>;
                    className='bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors'>                  Ready to get started with {service && service.title}?;
                <div className="flex gap-2 justify-center">;"
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors">;"
                    href={`mailto:kleber@ziontechgroup && ziontechgroup.com?subject=Inquiry about ${service && service.title}`}"
                    className='bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors'>                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors";"
          <div className='mt - 6 pt - 6 border - t border - gray - 200'>;
            <div className='space - y-4'>;
                <h4 className='font - semibold text - gray - 900 mb - 2'>Benefits:</h4>;
                <ul className='list - disc list - inside text - sm text - gray - 600 space - y-1'>                  {service.benefits.slice (0, 3).map ((benefit, index) => (          <div className="mt - 6 pt - 6 border - t border - gray - 200">;"
            <div className="space - y-4">;"
                <h4 className="font - semibold text - gray - 900 mb - 2">Benefits:</h4>;""
                <ul className="list - disc list - inside text - sm text - gray - 600 space - y-1">;"
</ul>)
                    <li key={index}>{benefit}</li>))}
                <h4 className='font - semibold text - gray - 900 mb - 2'>Use Cases:</h4>;
                      className='bg - green - 100 text - green - 800 px - 2 py - 1 rounded text - xs'                    >                  {service.use_cases.slice (0, 3).map ((use_case, index) => (
                      className="bg - green - 100 text - green - 800 px - 2 py - 1 rounded text - xs";"
                <h4 className='font - semibold text - gray - 900 mb - 2'>;
                      className='bg - purple - 100 text - purple - 800 px - 2 py - 1 rounded text - xs'                    >                  {service.technologies.slice (0, 4).map ((tech, index) => (
                      className="bg - purple - 100 text - purple - 800 px - 2 py - 1 rounded text - xs";"
              <div className='grid grid - cols - 2 gap - 4 text - sm'>;
                  <span className='font - medium text - gray - 900'>Deployment:</span>;
                  <p className='text - gray - 600'>{service.deployment_time}</p>;
                  <span className='font - medium text - gray - 900'>Support:</span>;
                  <span className="font - medium text - gray - 900">Deployment:</span>;""
                  <p className="text - gray - 600">{service.deployment_time}</p>;"
                  <span className="font - medium text - gray - 900">Support:</span>;""
                  <p className="text - gray - 600">{service.support.slice (0, 2).join (', ')}</p>;
                <div className='space - y-2'>;
                    <div;
                      key={plan}
                      className='flex justify - between items - center text - sm';
                      <span className='capitalize font - medium'>{plan}</span>;
                      <span className='text - gray - 600'>;
                        {details.price}/{details.period}                      </span>                    <div key={plan} className="flex justify - between items - center text - sm">;"
                      <span className="capitalize font - medium">{plan}</span>;""
                      <span className="text - gray - 600">;"
                    </div>))}
              <div className='bg - blue - 50 rounded - lg p - 4 text - center'>;
                <p className='text - sm text - blue - 800 mb - 2'>;
                <div className='flex gap - 2 justify - center'>;
                    className='bg - blue - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - blue - 700 transition - colors'                  >                  Ready to get started with {service.title}?;
                <div className="flex gap - 2 justify - center">;"
                    className="bg - blue - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - blue - 700 transition - colors";"
                    href={`mailto:kleber@ziontechgroup.com?subject = Inquiry about ${service.title}`}"
                    className='bg - green - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - green - 700 transition - colors'                  >                    className="bg - green - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - green - 700 transition - colors";"
    </div>));"`;
pr-12325
