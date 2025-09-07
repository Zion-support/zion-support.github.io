<<<<<<< HEAD
<<<<<<< HEAD
  SERVICE_CATEGORIES
=======
=======
<<<<<<< HEAD
  SERVICE_CATEGORIES
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
SERVICE_CATEGORIES;
  ALL_SERVICES
  AI_SERVICES
  IT_SERVICES
import React, { useState } from 'react';
<<<<<<< HEAD
import { 
=======
<<<<<<< HEAD

import { SERVICE_CATEGORIES;
  ALL_SERVICES;
  AI_SERVICES;
  IT_SERVICES;

=======
import { 
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  SERVICE_CATEGORIES
  ALL_SERVICES
  AI_SERVICES
  IT_SERVICES
  MICRO_SAAS_SERVICES
  CYBERSECURITY_SERVICES
  DATA_ANALYTICS_SERVICES
  CLOUD_SOLUTIONS;} from '@/data/servicesData';import {
  SERVICE_CATEGORIES,
  ALL_SERVICES, 
  AI_SERVICES, 
  IT_SERVICES, 
  MICRO_SAAS_SERVICES,
  CYBERSECURITY_SERVICES,
  DATA_ANALYTICS_SERVICES,;
  CLOUD_SOLUTIONS,;} from '@/data/servicesData';import { ;

<<<<<<< HEAD
=======
<<<<<<< HEAD
;
  }
=======
<<<<<<< HEAD
import React, { useState } from 'react';

import {
  SERVICE_CATEGORIES
  ALL_SERVICES
  AI_SERVICES
  IT_SERVICES
  MICRO_SAAS_SERVICES
  CYBERSECURITY_SERVICES
  DATA_ANALYTICS_SERVICES
  CLOUD_SOLUTIONS;} from '@/data/servicesData';import {
  SERVICE_CATEGORIES,
  ALL_SERVICES,
  AI_SERVICES,
  IT_SERVICES,
  MICRO_SAAS_SERVICES,
  CYBERSECURITY_SERVICES,
  DATA_ANALYTICS_SERVICES,;
  CLOUD_SOLUTIONS,;} from '@/data/servicesData';import { ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  SERVICE_CATEGORIES;
  ALL_SERVICES
  AI_SERVICES
  IT_SERVICES
<<<<<<< HEAD

import React, { useState } from 'react;
=======
SERVICE_CATEGORIES;
  ALL_SERVICES
  AI_SERVICES
  IT_SERVICES
import React, { useState } from 'react';

>>>>>>> origin/chore/fix-lint-and-merge
import { SERVICE_CATEGORIES;
  ALL_SERVICES;
  AI_SERVICES;
  IT_SERVICES;

<<<<<<< HEAD
  MICRO_SAAS_SERVICES;
  CYBERSECURITY_SERVICES;
  DATA_ANALYTICS_SERVICES;
=======
<<<<<<< HEAD
  MICRO_SAAS_SERVICES;
  CYBERSECURITY_SERVICES;
  DATA_ANALYTICS_SERVICES;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  MICRO_SAAS_SERVICES;
  CYBERSECURITY_SERVICES;
  DATA_ANALYTICS_SERVICES;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD

  }
  ALL_SERVICES;
  AI_SERVICES;
  IT_SERVICES;MICRO_SAAS_SERVICES;
  ALL_SERVICES,
AI_SERVICES
  IT_SERVICES,
SERVICE_CATEGORIES;
  ALL_SERVICES,
AI_SERVICES
  IT_SERVICES,
import React, { useState } from 'react';'
  }
  ALL_SERVICES;
  AI_SERVICES;
  IT_SERVICES;

  MICRO_SAAS_SERVICES;
  CYBERSECURITY_SERVICES;
  DATA_ANALYTICS_SERVICES;
  DATA_ANALYTICS_SERVICES,
  CLOUD_SOLUTIONS
<<<<<<< HEAD

} from '@/data/servicesData';'
import { ServiceCategory, ServiceSolution } from '@/types/services';'


export function ServicesPage() {
origin/cursor/expand-services-advertise-and-build-project-c28b




}

export function ServicesPage() {;


  }


  const [selectedCategory, setSelectedCategory] = useState<string>('all');'
  const [searchTerm, setSearchTerm] = useState('');'
  const filteredServices = ALL_SERVICES.filter((service) => {


        }


ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
  CLOUD_SOLUTIONS;
} from '@/data/servicesData';'
import { ServiceCategory, ServiceSolution } from '@/types/services';

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
} from '@/data/servicesData';'
import { ServiceCategory, ServiceSolution } from '@/types/services';'


export function ServicesPage() {
origin/cursor/expand-services-advertise-and-build-project-c28b




}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
} from '@/data/servicesData';
import { ServiceCategory, ServiceSolution } from '@/types/services';


export function ServicesPage() {
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export function ServicesPage() {;

<<<<<<< HEAD

  }


  const [selectedCategory, setSelectedCategory] = useState<string>('all');'
  const [searchTerm, setSearchTerm] = useState('');'
  const filteredServices = ALL_SERVICES.filter((service) => {


        }


ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
=======
>>>>>>> merged-prs-20250907-203621
  CLOUD_SOLUTIONS;
} from '@/data/servicesData';'
import { ServiceCategory, ServiceSolution } from '@/types/services';

<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
export function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function ServicesPage() {

  const [selectedCategory, setSelectedCategory] = useState<string>('all);
  const [searchTerm, setSearchTerm] = useState(');
=======
<<<<<<< HEAD
} from '@/data/servicesData';
import { ServiceCategory, ServiceSolution } from '@/types/services';
 } from '@/data/servicesData';
import { ServiceCategory, ServiceSolution  } from '@/types/services';
export function ServicesPage() {
import { ServiceCategory, ServiceSolution } from '@/types/services';
export function ServicesPage() {;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const filteredServices = ALL_SERVICES.filter(service => {
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const filteredServices = ALL_SERVICES.filter(service => {


        return AI_SERVICES;

=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/chore/fix-lint-and-merge
        return CLOUD_SOLUTIONS;
      default:
        return ALL_SERVICES;
<<<<<<< HEAD
  const [selectedCategory, setSelectedCategory] = useState<string>(all'),
>>>>>>> merged-prs-20250907-203621
  const [searchTerm, setSearchTerm] = useState($2);
  const filteredServices = $2;
    const matchesSearch = $2;
    return matchesCategory && matchesSearch
  }),

<<<<<<< HEAD
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const filteredServices = ALL_SERVICES.filter(service => {


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
=======
  const getServicesByCategory = $2;
      case 'it-services: return IT_SERVICES,
      case micro-saas': return MICRO_SAAS_SERVICES,
      case 'cybersecurity: return CYBERSECURITY_SERVICES,
      case data-analytics': return DATA_ANALYTICS_SERVICES,
      case 'cloud-solutions: return CLOUD_SOLUTIONS,
      default: return ALL_SERVICES
>>>>>>> merged-prs-20250907-203621
    }
  },

  const selectedServices = selectedCategory === 'all' ? filteredServices : getServicesByCategory($2);
  return (
<<<<<<< HEAD
                className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors'              >    }
  }
  const selectedServices = selectedCategory === 'all' ? filteredServices : getServicesByCategory(selectedCategory);

                className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors'
origin/cursor/automate-test-improve-and-merge-code-2533
              >
=======
<<<<<<< HEAD
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
=======
                className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors'              >    }
  }
  const selectedServices = selectedCategory === 'all' ? filteredServices : getServicesByCategory(selectedCategory);

                className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors'
origin/cursor/automate-test-improve-and-merge-code-2533
              >
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import React, { useState } from 'react',;

                className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors'              >    }
  }
<<<<<<< HEAD
  const selectedServices = selectedCategory === 'all' ? filteredServices : getServicesByCategory(selectedCategory);'
=======
  const selectedServices = selectedCategory === 'all' ? filteredServices : getServicesByCategory(selectedCategory);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


import {
  SERVICE_CATEGORIES,
  ALL_SERVICES,
  AI_SERVICES,
  IT_SERVICES,
  MICRO_SAAS_SERVICES,
  CYBERSECURITY_SERVICES,


=======
    }
  }
  const selectedServices =
    selectedCategory === 'all'
      ? filteredServices
      : getServicesByCategory(selectedCategory);
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              >
                📞 Call Now: +1 302 464 0950
              </a>
              <a
<<<<<<< HEAD
                href='mailto:kleber@ziontechgroup.com'
                className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors'
origin/cursor/automate-test-improve-and-merge-code-2533
              >

import React, { useState } from 'react',;

>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
                href="mailto:kleber@ziontechgroup.com"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
=======
                href='mailto:kleber@ziontechgroup.com'
                className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> merged-prs-20250907-203621
              >
<<<<<<< HEAD

import React, { useState } from 'react',;

<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
import React, { useState } from 'react',;
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {;
  SERVICE_CATEGORIES,;
  ALL_SERVICES,;
  AI_SERVICES,;
  IT_SERVICES,;
  MICRO_SAAS_SERVICES,;
  CYBERSECURITY_SERVICES,;

import { ServiceCategory, ServiceSolution } from '@/types/services';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
export function ServicesPage() {;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const filteredServices = ALL_SERVICES && ALL_SERVICES.filter(service => {;
    const matchesCategory =;'
      selectedCategory === all || service && service.category === selectedCategory;
    const matchesSearch =;
      service && service.title.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.tags.some(tag =>;
        tag && tag.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
      );
    return matchesCategory && matchesSearch;  });
<<<<<<< HEAD
  const getServicesByCategory = (categoryId: string) => {'
    switch (categoryId) {    const matchesCategory = selectedCategory === 'all || service && service.category === selectedCategory;
=======
  const getServicesByCategory = (categoryId: string) => {;
    switch (categoryId) {    const matchesCategory = selectedCategory === 'all' || service && service.category === selectedCategory;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const matchesSearch = service && service.title.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         service && service.tags.some(tag => tag && tag.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
<<<<<<< HEAD
=======
  const getServicesByCategory = (categoryId: string) => {;
    switch (categoryId) {;
      case 'ai-services':;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        return AI_SERVICES;
      case 'it-services':;
        return IT_SERVICES;
      case micro-saas':;
        return MICRO_SAAS_SERVICES;'
      case cybersecurity:;
        return CYBERSECURITY_SERVICES;'
      case 'data-analytics':;
        return DATA_ANALYTICS_SERVICES;'
      case 'cloud-solutions':;
        return CLOUD_SOLUTIONS;
      default:;
        return ALL_SERVICES;
    }
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const selectedServices = selectedCategory === 'all' ? filteredServices : getServicesByCategory(selectedCategory),

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>;
      {/* Hero Section */}
<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  };
  const selectedServices =;
    selectedCategory === 'all';
      ? filteredServices;
      : getServicesByCategory(selectedCategory);
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>;
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white'>;
        <div className='container mx-auto px-4 py-20'>;
          <div className='text-center max-w-4xl mx-auto'>;
            <h1 className='text-5xl font-bold mb-6'>;
              Zion Tech Group Services;
            </h1>;
            <p className='text-xl mb-8 text-blue-100'>;
              Comprehensive IT, AI, and Micro SAAS solutions to transform your;
              business. From cutting-edge artificial intelligence to robust;
              infrastructure support.;
            </p>;
            <div className='flex flex-wrap justify-center gap-4'>;
              <a
                href='tel:+13024640950'
                className='bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors'>;
                📞 Call Now: +1 302 464 0950;
              </a>;
              <a
<<<<<<< HEAD
                href='mailto:kleber@ziontechgroup && ziontechgroup.com'
                className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors'>    }
  };
=======

                href='mailto:kleber@ziontechgroup && ziontechgroup.com'
                className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors'>    }
  };


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const selectedServices = selectedCategory === 'all' ? filteredServices : getServicesByCategory(selectedCategory);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">;
      {/* Hero Section */}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              Comprehensive IT, AI, and Micro SAAS solutions to transform your business. 
              From cutting-edge artificial intelligence to robust infrastructure support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 

                href="tel:+13024640950"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                📞 Call Now: +1 302 464 0950

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </Link>
              <a 

                href="mailto:kleber@ziontechgroup.com"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >

<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react',;
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

              >

=======

<<<<<<< HEAD
=======
              >

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState } from 'react',;
              >

import {;
  }
  SERVICE_CATEGORIES,;
  ALL_SERVICES,;
  AI_SERVICES,;
  IT_SERVICES,;
  MICRO_SAAS_SERVICES,;
  CYBERSECURITY_SERVICES,;
  DATA_ANALYTICS_SERVICES,;
  CLOUD_SOLUTIONS,;} from '@/data/servicesData';import { ;'
  }
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  SERVICE_CATEGORIES;
  ALL_SERVICES, ;
  AI_SERVICES, ;
  IT_SERVICES, ;
  MICRO_SAAS_SERVICES;
  CYBERSECURITY_SERVICES;
  DATA_ANALYTICS_SERVICES;
  CLOUD_SOLUTIONS;
 } from '@/data/servicesData';'
import { ServiceCategory, ServiceSolution  } from '@/types/services';'
export function ServicesPage() {export function ServicesPage() {const [selectedCategory, setSelectedCategory] = useState<string>('all')const [searchTerm, setSearchTerm] = useState('')const filteredServices = ALL_SERVICES.filter((service) => {export function ServicesPage() {ursor/fix-website-loading-errors-and-merge-6662;'
  }
  const [selectedCategory, setSelectedCategory] = useState<string>('all')const [searchTerm, setSearchTerm] = useState('')const filteredServices = ALL_SERVICES.filter((service) => {const filteredServices = null;'
    }
    const matchesSearch =;
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) |;
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) |;
      service.tags.some(tag =>;
        tag.toLowerCase().includes(searchTerm.toLowerCase()))return matchesCategory && matchesSearch;
  })const getServicesByCategory = ("categoryId": string) => {switch (categoryId) {case 'ai-services':;'
        }
        return AI_SERVICES;
      case 'it-services':;'
        return IT_SERVICES;
      case 'micro-saas':;'
        return MICRO_SAAS_SERVICES;
      case 'cybersecurity':;'
        return CYBERSECURITY_SERVICES;
      case 'data-analytics':;'
        return DATA_ANALYTICS_SERVICES;
      case 'cloud-solutions':;'
        return CLOUD_SOLUTIONS;
      "default":;
        return ALL_SERVICES;
    }

  };
  }
  const selectedServices =;
    selectedCategory === 'all';'
      ? filteredServices;
      : getServicesByCategory(selectedCategory)return (<div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>;'
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white'>;'
        <div className='container mx-auto px-4 py-20'>;'
          <div className='text-center max-w-4xl mx-auto'>;'
            <h1 className='text-5xl font-bold mb-6'>;'
              Zion Tech Group Services;
            </h1>;
            <p className='text-xl mb-8 text-blue-100'>;'
              Comprehensive IT, AI, and Micro SAAS solutions to transform your;
              business. From cutting-edge artificial intelligence to robust;
              infrastructure support.;
            </p>;
            <div className='flex flex-wrap justify-center gap-4'>;'
              <a;
                href='"tel":+13024640950';'
                className='bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold "hover":bg-blue-50 transition-colors';'
              >;
                📞 Call "Now": +1 302 464 0950;
              </a>;
              <a;
                href='"mailto":kleber@ziontechgroup.com';'
                className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold "hover":bg-blue-600 transition-colors'              >    }'
  }
  const selectedServices  = selectedCategory === 'all' ? filteredServices : getServicesByCategory(selectedCategory)return (<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">;"
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">;"
        <div className="container mx-auto px-4 py-20">;"
          <div className="text-center max-w-4xl mx-auto">;"
            <h1 className="text-5xl font-bold mb-6">;"
              Zion Tech Group Services;
            </h1>;
            <p className="text-xl mb-8 text-blue-100">;"
              Comprehensive IT, AI, and Micro SAAS solutions to transform your business.;
              From cutting-edge artificial intelligence to robust infrastructure support.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;"
              <a;
                href=""tel":+13024640950";"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold "hover":bg-blue-50 transition-colors";"
              >;
                📞 Call "Now": +1 302 464 0950;
              </a>;
              <a;
                href=""mailto":kleber@ziontechgroup.com";"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold "hover":bg-blue-600 transition-colors";"
              >;
import React, { useState } from 'react',className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold "hover":bg-blue-600 transition-colors';'
              >;
ursor/fix-website-loading-errors-and-merge-6662;
import {SERVICE_CATEGORIES,ALL_SERVICES,AI_SERVICES,IT_SERVICES,MICRO_SAAS_SERVICES,CYBERSECURITY_SERVICES,DATA_ANALYTICS_SERVICES,CLOUD_SOLUTIONS} from '@/data/servicesData';import {SERVICE_CATEGORIES;'
  }
  ALL_SERVICES,AI_SERVICES,IT_SERVICES,MICRO_SAAS_SERVICES;
  CYBERSECURITY_SERVICES;
  DATA_ANALYTICS_SERVICES;
  CLOUD_SOLUTIONS;
  const filteredServices = ALL_SERVICES && ALL_SERVICES.filter((service) => {const matchesCategory =;
}
import { ServiceCategory, ServiceSolution } from '@/types/services';'
  const filteredServices = ALL_SERVICES && ALL_SERVICES.filter((service) => {;
    }
    const matchesCategory =;
      selectedCategory === 'all' || service && service.category === selectedCategory;'
    const matchesSearch =;
      service && service.title.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.tags.some(tag =>;
        tag && tag.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()))return matchesCategory && matchesSearch;  })const getServicesByCategory = ("categoryId": string) => {switch (categoryId) {    const matchesCategory = selectedCategory === 'all' || service && service.category === selectedCategory;'
    }
    const matchesSearch = service && service.title.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         service && service.tags.some(tag => { return tag && tag.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()))return matchesCategory && matchesSearch; }
        tag && tag.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
      );
    return matchesCategory && matchesSearch;  });
  const getServicesByCategory = ("categoryId": string) => {;
    }
    switch (categoryId) {    const matchesCategory = selectedCategory === 'all' || service && service.category === selectedCategory;'
    }
    const matchesSearch = service && service.title.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         service && service.tags.some(tag => { return tag && tag.toLowerCase().includes(searchTerm && searchTerm.toLowerCase())); }
    return matchesCategory && matchesSearch;
        return AI_SERVICES;
      case 'it-services':;'
        return IT_SERVICES;
      case 'micro-saas':;'
        return MICRO_SAAS_SERVICES;
      case 'cybersecurity':;'
        return CYBERSECURITY_SERVICES;
      case 'data-analytics':;'
        return DATA_ANALYTICS_SERVICES;
      case 'cloud-solutions':;'
        return CLOUD_SOLUTIONS;
      "default":;
        return ALL_SERVICES;
    }const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;'
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => { return tag.toLowerCase().includes(searchTerm.toLowerCase()))return matchesCategory && matchesSearch; }
  })const getServicesByCategory = ("categoryId": string) => {switch (categoryId) {case 'ai-services': return AI_SERVICES;'
      }
      case 'it-services': return IT_SERVICES;'
      case 'micro-saas': return MICRO_SAAS_SERVICES;'
      case 'cybersecurity': return CYBERSECURITY_SERVICES;'
      case 'data-analytics': return DATA_ANALYTICS_SERVICES;'
      case 'cloud-solutions': return CLOUD_SOLUTIONS;'
      "default": return ALL_SERVICES;
    }}const selectedServices =;
    selectedCategory === 'all';'
      ? filteredServices;
      : getServicesByCategory(selectedCategory)return (<div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>;'
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white'>;'
        <div className='container mx-auto px-4 py-20'>;'
          <div className='text-center max-w-4xl mx-auto'>;'
            <h1 className='text-5xl font-bold mb-6'>;'
              Zion Tech Group Services;
            </h1>;
            <p className='text-xl mb-8 text-blue-100'>;'
              Comprehensive IT, AI, and Micro SAAS solutions to transform your;
              business. From cutting-edge artificial intelligence to robust;
              infrastructure support.;
            </p>;
            <div className='flex flex-wrap justify-center gap-4'>;'
              <a;
                href='"tel":+13024640950';'
                className='bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold "hover":bg-blue-50 transition-colors'>;'
                📞 Call "Now": +1 302 464 0950;
              </a>;
              <a;
                href='"mailto":kleber@ziontechgroup && ziontechgroup.com';'
                className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold "hover":bg-blue-600 transition-colors'>    }'
  }const selectedServices = selectedCategory === 'all' ? filteredServices : getServicesByCategory(selectedCategory)return (<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">;"
      {/* Hero Section */}Comprehensive IT, AI, and Micro SAAS solutions to transform your business.;
              From cutting-edge artificial intelligence to robust infrastructure support.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;"
              <a;
                href=""tel":+13024640950";"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold "hover":bg-blue-50 transition-colors";"
              >;
                📞 Call "Now": +1 302 464 0950;
              </Link>;
              <a;
                href=""mailto":kleber@ziontechgroup.com";"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold "hover":bg-blue-600 transition-colors";"
              >;
ursor/fix-website-loading-errors-and-merge-6662;
                ✉️ Email Us;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
  return (<div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray - 100">;"
      {/* Hero Section */}
  return (<div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray - 100">;"
      {/* Hero Section */}<div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">;"
        <div className="container mx-auto px-4 py-20">;"
          <div className="text-center max-w-4xl mx-auto">;"
            <h1 className="text-5xl font-bold mb-6">;"
              Zion Tech Group Services;
            </h1>;
            <p className="text-xl mb-8 text-blue-100">;"
              Comprehensive IT, AI, and Micro SAAS solutions to transform your business. ;
              From cutting-edge artificial intelligence to robust infrastructure support.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;"
              <a;
                href=""tel":+13024640950";"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold "hover":bg-blue-50 transition-colors">;"
                📞 Call "Now": +1 302 464 0950;
              </a>;
              <a;
                href=""mailto":kleber@ziontechgroup && ziontechgroup.com";"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold "hover":bg-blue-600 transition-colors">;"
  SERVICE_CATEGORIES,ALL_SERVICES,AI_SERVICES,IT_SERVICES,MICRO_SAAS_SERVICES,CYBERSECURITY_SERVICES,DATA_ANALYTICS_SERVICES,CLOUD_SOLUTIONS} from '@/data / services_data';import {CLOUD_SOLUTIONS} from '@/data / services_data';import { SERVICE_CATEGORIES;'
  }
  ALL_SERVICES,AI_SERVICES,IT_SERVICES,MICRO_SAAS_SERVICES;
  CYBERSECURITY_SERVICES;
  DATA_ANALYTICS_SERVICES;
  CLOUD_SOLUTIONS;
import { ServiceCategory, ServiceSolution  } from '@/types / services';'
export /**;
 * ServicesPage - Function description;
 */;
function ServicesPage() {const [selected_category, setSelectedCategory] = useState < string>('all')const [search_term, setSearchTerm]  = useState ('')const filtered_services = ALL_SERVICES.filter ((service) => {const matches_category =;'
      }
      selected_category === 'all' || service.category === selected_category;'
    const matches_search =;
      service.title.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.tags.some (tag =>;
        tag.toLowerCase ().includes (search_term.toLowerCase ()))return matches_category && matches_search;  })const getServicesByCategory = ("category_id": string) =>: any {switch (category_id) {    const matches_category = selected_category === 'all' || service.category === selected_category;'
    }
    const matches_search = service.title.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                        service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                        service.tags.some (tag => { return tag.toLowerCase ().includes (search_term.toLowerCase ()))return matches_category && matches_search; }
  const getServicesByCategory = ("category_id": string) =>: any {switch (category_id) {case 'ai - services':;'
        }
        return AI_SERVICES;
      case 'it - services':;'
        return IT_SERVICES;
      case 'micro - saas':;'
        return MICRO_SAAS_SERVICES;
      case 'cybersecurity':;'
        return CYBERSECURITY_SERVICES;
      case 'data - analytics':;'
        return DATA_ANALYTICS_SERVICES;
      case 'cloud - solutions':;'
        return CLOUD_SOLUTIONS;
      "default":;
        return ALL_SERVICES;
    }
  }const selected_services =;
    selected_category === 'all';'
      ? filtered_services;
      : getServicesByCategory (selected_category)return (<div className='min - h-screen bg - gradient - to - br from - gray - 50 to - gray - 100'>;'
      {/* Hero Section */}
      <div className='bg - gradient - to - r from - blue - 600 via - purple - 600 to - indigo - 600 text - white'>;'
        <div className='container mx - auto px - 4 py - 20'>;'
          <div className='text - center max - w-4xl mx - auto'>;'
            <h1 className='text - 5xl font - bold mb - 6'>;'
              Zion Tech Group Services;
            </h1>;
            <p className='text - xl mb - 8 text - blue - 100'>;'
              Comprehensive IT, AI, and Micro SAAS solutions to transform your;
              business. From cutting - edge artificial intelligence to robust;
              infrastructure support.;
            </p>;
            <div className='flex flex - wrap justify - center gap - 4'>;'
              <a;
                href='"tel":+13024640950';'
                className='bg - white text - blue - 600 px - 6 py - 3 rounded - lg font - semibold "hover":bg - blue - 50 transition - colors';'
              >;
                📞 Call "Now": +1 302 464 0950;
              </a>;
              <a;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                href='"mailto":kleber@ziontechgroup.com';'
                className='bg - blue - 500 text - white px - 6 py - 3 rounded - lg font - semibold "hover":bg - blue - 600 transition - colors'              >    }'
  }return (<div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray - 100">;"
      {/* Hero Section */}const selected_services  = selected_category === 'all' ? filtered_services : getServicesByCategory (selected_category)const selectedServices  = selectedCategory === 'all' ? filteredServices : getServicesByCategory(selectedCategory)return (<div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray - 100">;"
    }






origin/cursor/expand-services-advertise-and-build-project-c28b




ursor/fix-website-loading-errors-and-merge-6662















=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                ✉️ Email Us
              </Link>

            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray-100">;
      {/* Hero Section */}  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray-100">;
      {/* Hero Section */}

  return (
    <div className=min - h-screen bg - gradient - to - br from - gray - 50 to - gray - 100">;
      {/* Hero Section */}
  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray - 100>;
      {/* Hero Section */}
<<<<<<< HEAD
      <div className="bg - gradient - to - r from - blue - 600 via - purple - 600 to - indigo - 600 text - white">;
        <div className="container mx - auto px - 4 py - 20">;
          <div className="text - center max - w-4xl mx - auto">;
            <h1 className="text - 5xl font - bold mb - 6">;
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

=======
      <div className=bg - gradient - to - r from - blue - 600 via - purple - 600 to - indigo - 600 text - white">;
        <div className="container mx - auto px - 4 py - 20>;
          <div className=text - center max - w-4xl mx - auto">;
            <h1 className="text - 5xl font - bold mb - 6>;

              Zion Tech Group Services;
            </h1>;
            <p className=text - xl mb - 8 text - blue-100">;
              Comprehensive IT, AI, and Micro SAAS solutions to transform your business.;
              From cutting - edge artificial intelligence to robust infrastructure support.;
            </p>;
            <div className="flex flex - wrap justify - center gap-4>;
              <a;
                href=tel:+13024640950";
                className="bg - white text - blue - 600 px - 6 py - 3 rounded - lg font - semibold hover:bg - blue - 50 transition-colors;

<<<<<<< HEAD

              >;


                ✉️ Email Us;
              </a>;
            </div>;
          </div>;
        </div>;

  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray-100">;
      {/* Hero Section */}  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray-100">;
      {/* Hero Section */}

  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray - 100">;
      {/* Hero Section */}
  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray - 100">;
      {/* Hero Section */}
      <div className="bg - gradient - to - r from - blue - 600 via - purple - 600 to - indigo - 600 text - white">;
        <div className="container mx - auto px - 4 py - 20">;
          <div className="text - center max - w-4xl mx - auto">;
            <h1 className="text - 5xl font - bold mb - 6">;
              Zion Tech Group Services;
            </h1>;
            <p className="text - xl mb - 8 text - blue-100">;
              Comprehensive IT, AI, and Micro SAAS solutions to transform your business.;
              From cutting - edge artificial intelligence to robust infrastructure support.;
            </p>;
            <div className="flex flex - wrap justify - center gap-4">;
              <a;
                href='"https"://ziontechgroup.com';'
                className='text-blue-600 "hover":underline';'
=======

  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray-100">;
      {/* Hero Section */}  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray-100">;
      {/* Hero Section */}

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

>>>>>>> origin/chore/fix-lint-and-merge
              >;
                📞 Call Now: +1 302 464 0950;
              </a>;
              <a;

      {/* Contact Info Banner */}
      {/* Contact Info Banner */}

      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-blue-600">📍</span>
<<<<<<< HEAD
                href="mailto:kleber@ziontechgroup.com";
                className="bg - blue - 500 text - white px - 6 py - 3 rounded - lg font - semibold hover:bg - blue - 600 transition - colors";
=======

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              >;


                ✉️ Email Us;
              </a>;
            </div>;
          </div>;
        </div>;

  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray-100">;
      {/* Hero Section */}  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray-100">;
      {/* Hero Section */}

  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray - 100">;
      {/* Hero Section */}
=======
                href='mailto:kleber@ziontechgroup.com';
                className='bg - blue - 500 text - white px - 6 py - 3 rounded - lg font - semibold hover:bg - blue - 600 transition - colors'              >    }
  }
  const selectedServices = selectedCategory === 'all' ? filteredServices : getServicesByCategory(selectedCategory);

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray - 100">;
      {/* Hero Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <div className="bg - gradient - to - r from - blue - 600 via - purple - 600 to - indigo - 600 text - white">;
        <div className="container mx - auto px - 4 py - 20">;
          <div className="text - center max - w-4xl mx - auto">;
            <h1 className="text - 5xl font - bold mb - 6">;
              Zion Tech Group Services;
            </h1>;
            <p className="text - xl mb - 8 text - blue-100">;
              Comprehensive IT, AI, and Micro SAAS solutions to transform your business.;
              From cutting - edge artificial intelligence to robust infrastructure support.;
            </p>;
            <div className="flex flex - wrap justify - center gap-4">;
              <a;
                href='"https"://ziontechgroup.com';'
                className='text-blue-600 "hover":underline';'
=======

  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray-100">;
      {/* Hero Section */}  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray-100">;
      {/* Hero Section */}

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

>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
              >;
                📞 Call Now: +1 302 464 0950;
              </a>;
              <a;

      {/* Contact Info Banner */}
      {/* Contact Info Banner */}

      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-blue-600">📍</span>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
                href="mailto:kleber@ziontechgroup.com";
                className="bg - blue - 500 text - white px - 6 py - 3 rounded - lg font - semibold hover:bg - blue - 600 transition - colors";
              >;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                ✉️ Email Us;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
      {/* Contact Info Banner */}


      {/* Contact Info Banner */}
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

  const selectedServices = selectedCategory === 'all' ? filteredServices : getServicesByCategory(selectedCategory),

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
                ✉️ Email Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Info Banner */}
      <div className='bg-white border-b'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex flex-wrap justify-center items-center gap-8 text-gray-600'>
            <div className='flex items-center gap-2'>
              <span className='text-blue-600'>📍</span>
=======

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

                href='https://ziontechgroup && ziontechgroup.com';
      </div>;

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

                href='https://ziontechgroup && ziontechgroup.com';
      </div>;
>>>>>>> merged-prs-20250907-203621

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-blue-600">📍</span>
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
<<<<<<< HEAD
            </div>"
            <div className="flex items-center gap-2">"
              <span className="text-blue-600">📱</span>
              <span>+1 302 464 0950</span>
            </div>"
            <div className="flex items-center gap-2">"
              <span className="text-blue-600">✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </div>

=======
            </div>

              <span>kleber@ziontechgroup.com</span>
            </div>

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b


<<<<<<< HEAD

=======
<<<<<<< HEAD
            <div className='flex items-center gap-2'>
              <span className='text-blue-600'>🌐</span>
              <a
                href='https://ziontechgroup.com'
                className='text-blue-600 hover:underline'
              >                ziontechgroup.com              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">📱</span>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </div>
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <div className="flex items-center gap-2">"
              <span className="text-blue-600">🌐</span>"
              <a href=""https"://ziontechgroup.com" className="text-blue-600 "hover":underline">"
                ziontechgroup.com


            <div className="flex items-center gap-2">"
              <span className="text-blue-600">🌐</span>"
              <a href=""https"://ziontechgroup.com" className="text-blue-600 "hover":underline">"


<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <div className="flex items-center gap-2">
              <span className="text-blue-600">🌐</span>
              <a href="https://ziontechgroup.com" className="text-blue-600 hover:underline">
            <div className="flex items-center gap-2">
              <span className="text-blue-600">🌐</span>
              <a href="https://ziontechgroup.com" className="text-blue-600 hover:underline">

<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <div className=flex items-center gap-2">
              <span className="text-blue-600>🌐</span>
              <a href=https://ziontechgroup.com" className="text-blue-600 hover:underline>


      {/* Contact Info Banner */}

              >


ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <div className="flex items-center gap-2">
              <span className="text-blue-600">🌐</span>
              <a href="https://ziontechgroup.com" className="text-blue-600 hover:underline">
                ziontechgroup.com
                ziontechgroup.com

<<<<<<< HEAD
=======
<<<<<<< HEAD
              </Link>


              </a>
              </Link>
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

=======

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
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
origin/cursor/automate-test-improve-and-merge-code-2533
                ziontechgroup.com

              </Link>

<<<<<<< HEAD
                ziontechgroup.com

<<<<<<< HEAD

                ziontechgroup.com

=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
<<<<<<< HEAD
                ziontechgroup.com

<<<<<<< HEAD

                ziontechgroup.com

=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD

                href='https://ziontechgroup && ziontechgroup.com'
                className='text-blue-600 hover:underline'>                ziontechgroup && ziontechgroup.com              <span>364 E Main St STE 1008, Middletown DE 19709</span>;
            </div>;
<<<<<<< HEAD
=======
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
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                href='https://ziontechgroup && ziontechgroup.com'
                className='text-blue-600 hover:underline'>                ziontechgroup && ziontechgroup.com              <span>364 E Main St STE 1008, Middletown DE 19709</span>;
            </div>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
            <div className=flex items-center gap-2">;
              <span className="text-blue-600>📱</span>;
              <span>+1 302 464 0950</span>;
            </div>;
            <div className=flex items-center gap-2">;
              <span className="text-blue-600>✉️</span>;
              <span>kleber@ziontechgroup && ziontechgroup.com</span>;
            </div>;
            <div className=flex items-center gap-2">;
              <span className="text-blue-600>🌐</span>;
              <a href=https://ziontechgroup && ziontechgroup.com" className="text-blue-600 hover:underline>;
                ziontechgroup && ziontechgroup.com;
      {/* Contact Info Banner */}
      <div className=bg - white border - b>;
        <div className='container mx - auto px - 4 py - 4'>;
          <div className=flex flex - wrap justify - center items - center gap - 8 text - gray - 600>;
            <div className='flex items - center gap - 2'>;
              <span className=text - blue - 600>📍</span>;
              <span > 364 E Main St STE 1008, Middletown DE 19709</span>;
            </div>;
            <div className='flex items - center gap - 2'>;
              <span className=text - blue - 600>📱</span>;
              <span>+1 302 464 0950</span>;
            </div>;
            <div className='flex items - center gap - 2'>;
              <span className=text - blue - 600>✉️</span>;
              <span > kleber@ziontechgroup.com</span>;
            </div>;
            <div className='flex items - center gap - 2'>;
              <span className=text - blue - 600>🌐</span>;
              <a;
                href='https://ziontechgroup.com';
                className=text - blue - 600 hover:underline;
              >                ziontechgroup.com              <span > 364 E Main St STE 1008, Middletown DE 19709</span>;
            </div>;
            <div className=flex items - center gap-2">;
              <span className="text - blue-600>📱</span>;
              <span>+1 302 464 0950</span>;
            </div>;
            <div className=flex items - center gap-2">;
              <span className="text - blue-600>✉️</span>;
              <span > kleber@ziontechgroup.com</span>;
            </div>;
            <div className=flex items - center gap-2">;
              <span className="text - blue-600>🌐</span>;
              <a href=https://ziontechgroup.com" className="text - blue-600 hover:underline>;
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                ziontechgroup.com;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
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
              {SERVICE_CATEGORIES.map(category => (                <button              <input
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
      {/* Search and Filter Section */}
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      </div>;


                type=text"

                }


<<<<<<< HEAD
=======
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b


<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc




                type="text"

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
origin/cursor/automate-test-improve-and-merge-code-2533

              {SERVICE_CATEGORIES.map(category => (                <button              <input
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">"
<<<<<<< HEAD
              {SERVICE_CATEGORIES.map((category) => (

              {SERVICE_CATEGORIES.map((category) => (

      {/* Search and Filter Section */}
=======
      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input

=======
              {SERVICE_CATEGORIES.map((category) => (
<<<<<<< HEAD

              {SERVICE_CATEGORIES.map((category) => (

      {/* Search and Filter Section */}
=======
      {/* Search and Filter Section */}
>>>>>>> merged-prs-20250907-203621
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input

<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                type="text"

                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>"
            <div className="flex gap-2">

<<<<<<< HEAD
=======
<<<<<<< HEAD
              {SERVICE_CATEGORIES.map((category) => (

=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
              {SERVICE_CATEGORIES.map(category => (
>>>>>>> origin/chore/fix-lint-and-merge

=======
<<<<<<< HEAD
              {SERVICE_CATEGORIES.map(category => (                <button              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              {SERVICE_CATEGORIES.map((category) => (
=======
              {SERVICE_CATEGORIES.map(category => (
>>>>>>> origin/chore/fix-lint-and-merge

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${;
                    selectedCategory === category.id;
                      ? 'bg-blue-600 text-white';
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200';

                  }`}
                >;
                  {category.icon} {category.name}
                </button>;
              ))}
<<<<<<< HEAD
          {selectedServices.map((service) => (
            </div>
          </div>
        </div>
        {/* Services Grid */}
<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
          {selectedServices.map(service => (
origin/cursor/automate-test-improve-and-merge-code-2533
            <ServiceCard key={service.id} service={service} />
            <ServiceCard key={service.id} service={service} />

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <ServiceCard key={service.id} service={service} />

            </div>;
          </div>;
        </div>;

        {/* Services Grid */}

<<<<<<< HEAD
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">

          {selectedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">


ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
              ))}{selectedServices.map((service) => (</div>;
          </div>;
        </div>;
        {/* Services Grid */}
<div className='grid grid-cols-1 "lg":grid-cols-2 "xl":grid-cols-3 gap-8'>;'
          {selectedServices.map(service => (<ServiceCard key={service.id} service={service} />;
            </div>;
          </div>;
        </div>;{/* Services Grid */}<div className="grid grid-cols-1 "lg":grid-cols-2 "xl":grid-cols-3 gap-8">;"
          {selectedServices.map((service) => (<ServiceCard key={service.id} service={service} />;
ursor/fix-website-loading-errors-and-merge-6662;
          ))}{/* Services Grid */}
        <div className="grid grid-cols-1 "lg":grid-cols-2 "xl":grid-cols-3 gap-8">;"
          {selectedServices.map((service) => (<ServiceCard key={service.id} service={service} />;
          ))}
        </div>;
        {selectedServices.length === 0 && (<div className="text-center py-12">;"
            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>;"
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>;"
          <div className="text-center py-12">;"
          <div className="text-center py-12">;"
          <div className="text-center py-12">;"
          <div className="text-center py-12">;"
          <div className="text-center py-12">;"
}
ursor/fix-website-loading-errors-and-merge-6662;
            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>;"
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>;"
<div className='text-center py-12'>;'
            <h3 className='text-xl text-gray-600 mb-4'>No services found</h3>;'
            <p className='text-gray-500'>;'
              Try adjusting your search or filter criteria;
            </p>;
          </div>;
        )}
      </div>;
      {/* Why Choose Zion Tech Group */}<div className='bg-white py-16'>;'
        <div className='container mx-auto px-4'>;'
          <div className='text-center mb-12'>;'
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>;'
              Why Choose Zion Tech Group?;
            </h2>;
              Why Choose Zion Tech Group?;
            </h2>;
      <div className="bg-white py-16">;"
        <div className="container mx-auto px-4">;"
          <div className="text-center mb-12">;"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">;"
              Why Choose Zion Tech Group?;
            </h2>;
              Why Choose Zion Tech Group?;
            </h2>;
ursor/fix-website-loading-errors-and-merge-6662;
              Why Choose Zion Tech Group?;
            </h2>;
              Why Choose Zion Tech Group?;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;"
              We deliver innovative, reliable, and cost-effective solutions that drive real business results;
            </p>;
          </div>;
          <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-4 gap-8">;"
            <div className="text-center">;"
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">🚀</span>;"
ursor/fix-website-loading-errors-and-merge-6662;
              </div>;
              <h3 className='text-xl font-semibold mb-2'>Innovation First</h3>;'
              <p className='text-gray-600'>;'
                Cutting-edge AI and technology solutions;
              </p>;
            </div>;
            <div className="text-center">;"
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">🛡️</span>;"
ursor/fix-website-loading-errors-and-merge-6662;
              </div>;
              <h3 className='text-xl font-semibold mb-2'>;'
                Enterprise Security;
              </h3>;
              <p className='text-gray-600'>;'
                SOC 2, HIPAA, GDPR compliant solutions;
              </p>;
            </div>;
            <div className="text-center">;"
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">⚡</span>;"
ursor/fix-website-loading-errors-and-merge-6662;
              </div>;
              <h3 className='text-xl font-semibold mb-2'>Fast Deployment</h3>;'
              <p className='text-gray-600'>Quick setup and implementation</p>;'
            </div>;
            </h2>;
            </h2>;
      <div className="bg-white py-16">;"
        <div className="container mx-auto px-4">;"
          <div className="text-center mb-12">;"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">;"
              Why Choose Zion Tech Group?;
            </h2>;
            </h2>;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;"
              We deliver innovative, reliable, and cost-effective solutions that drive real business results;
            </p>;
          </div>;
          <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-4 gap-8">;"
            <div className="text-center">;"
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">🚀</span>;"
              </div>;
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>;"
              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>;"
            </div>;
            <div className="text-center">;"
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">🛡️</span>;"
              </div>;
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>;"
              <p className="text-gray-600">SOC 2, HIPAA, GDPR compliant solutions</p>;"
            </div>;
            <div className="text-center">;"
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">⚡</span>;"
              </div>;
              <h3 className="text-xl font-semibold mb-2">Fast Deployment</h3>;"
              <p className="text-gray-600">Quick setup and implementation</p>;"
            </div>;
ursor/fix-website-loading-errors-and-merge-6662;
            <div className="text-center">;"
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">🎯</span>;"
              </div>;
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>;"
              <p className="text-gray-600">Trusted by businesses nationwide</p>;"
ursor/fix-website-loading-errors-and-merge-6662;
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>;"
              <p className="text-gray-600">Trusted by businesses nationwide</p>;"
            <div className='text-center'>;'
              <div className='bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>;'
                <span className='text-2xl'>🎯</span>;'
              </div>;
              <h3 className='text-xl font-semibold mb-2'>Proven Results</h3>;'
              <p className='text-gray-600'>Trusted by businesses nationwide</p>;'
            </div>;
          </div>;
        </div>;
      </div>;
        {selectedServices && selectedServices.length === 0 && (<div className='text-center py-12'>;'
              ))}
          {selectedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
              ))}
            <ServiceCard key={service.id} service={service} />


            </div>;
          </div>;
        </div>;


        {/* Services Grid */}



        <div className="grid grid-cols-1 "lg":grid-cols-2 "xl":grid-cols-3 gap-8">"


          {selectedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />




        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
          {selectedServices.map(service => (            <ServiceCard key={service.id} service={service} />        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">

<<<<<<< HEAD
          ))}


=======
          ))}

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
=======

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">


ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
              ))}{selectedServices.map((service) => (</div>;
          </div>;
        </div>;
        {/* Services Grid */}
<div className='grid grid-cols-1 "lg":grid-cols-2 "xl":grid-cols-3 gap-8'>;'
          {selectedServices.map(service => (<ServiceCard key={service.id} service={service} />;
            </div>;
          </div>;
        </div>;{/* Services Grid */}<div className="grid grid-cols-1 "lg":grid-cols-2 "xl":grid-cols-3 gap-8">;"
          {selectedServices.map((service) => (<ServiceCard key={service.id} service={service} />;
ursor/fix-website-loading-errors-and-merge-6662;
          ))}{/* Services Grid */}
        <div className="grid grid-cols-1 "lg":grid-cols-2 "xl":grid-cols-3 gap-8">;"
          {selectedServices.map((service) => (<ServiceCard key={service.id} service={service} />;
          ))}
        </div>;
        {selectedServices.length === 0 && (<div className="text-center py-12">;"
            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>;"
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>;"
          <div className="text-center py-12">;"
          <div className="text-center py-12">;"
          <div className="text-center py-12">;"
          <div className="text-center py-12">;"
          <div className="text-center py-12">;"
}
ursor/fix-website-loading-errors-and-merge-6662;
            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>;"
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>;"
<div className='text-center py-12'>;'
            <h3 className='text-xl text-gray-600 mb-4'>No services found</h3>;'
            <p className='text-gray-500'>;'
              Try adjusting your search or filter criteria;
            </p>;
          </div>;
        )}
      </div>;
      {/* Why Choose Zion Tech Group */}<div className='bg-white py-16'>;'
        <div className='container mx-auto px-4'>;'
          <div className='text-center mb-12'>;'
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>;'
              Why Choose Zion Tech Group?;
            </h2>;
              Why Choose Zion Tech Group?;
            </h2>;
      <div className="bg-white py-16">;"
        <div className="container mx-auto px-4">;"
          <div className="text-center mb-12">;"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">;"
              Why Choose Zion Tech Group?;
            </h2>;
              Why Choose Zion Tech Group?;
            </h2>;
ursor/fix-website-loading-errors-and-merge-6662;
              Why Choose Zion Tech Group?;
            </h2>;
              Why Choose Zion Tech Group?;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;"
              We deliver innovative, reliable, and cost-effective solutions that drive real business results;
            </p>;
          </div>;
          <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-4 gap-8">;"
            <div className="text-center">;"
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">🚀</span>;"
ursor/fix-website-loading-errors-and-merge-6662;
              </div>;
              <h3 className='text-xl font-semibold mb-2'>Innovation First</h3>;'
              <p className='text-gray-600'>;'
                Cutting-edge AI and technology solutions;
              </p>;
            </div>;
            <div className="text-center">;"
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">🛡️</span>;"
ursor/fix-website-loading-errors-and-merge-6662;
              </div>;
              <h3 className='text-xl font-semibold mb-2'>;'
                Enterprise Security;
              </h3>;
              <p className='text-gray-600'>;'
                SOC 2, HIPAA, GDPR compliant solutions;
              </p>;
            </div>;
            <div className="text-center">;"
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">⚡</span>;"
ursor/fix-website-loading-errors-and-merge-6662;
              </div>;
              <h3 className='text-xl font-semibold mb-2'>Fast Deployment</h3>;'
              <p className='text-gray-600'>Quick setup and implementation</p>;'
            </div>;
            </h2>;
            </h2>;
      <div className="bg-white py-16">;"
        <div className="container mx-auto px-4">;"
          <div className="text-center mb-12">;"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">;"
              Why Choose Zion Tech Group?;
            </h2>;
            </h2>;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;"
              We deliver innovative, reliable, and cost-effective solutions that drive real business results;
            </p>;
          </div>;
          <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-4 gap-8">;"
            <div className="text-center">;"
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">🚀</span>;"
              </div>;
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>;"
              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>;"
            </div>;
            <div className="text-center">;"
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">🛡️</span>;"
              </div>;
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>;"
              <p className="text-gray-600">SOC 2, HIPAA, GDPR compliant solutions</p>;"
            </div>;
            <div className="text-center">;"
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">⚡</span>;"
              </div>;
              <h3 className="text-xl font-semibold mb-2">Fast Deployment</h3>;"
              <p className="text-gray-600">Quick setup and implementation</p>;"
            </div>;
ursor/fix-website-loading-errors-and-merge-6662;
            <div className="text-center">;"
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">🎯</span>;"
              </div>;
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>;"
              <p className="text-gray-600">Trusted by businesses nationwide</p>;"
ursor/fix-website-loading-errors-and-merge-6662;
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>;"
              <p className="text-gray-600">Trusted by businesses nationwide</p>;"
            <div className='text-center'>;'
              <div className='bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>;'
                <span className='text-2xl'>🎯</span>;'
              </div>;
              <h3 className='text-xl font-semibold mb-2'>Proven Results</h3>;'
              <p className='text-gray-600'>Trusted by businesses nationwide</p>;'
            </div>;
          </div>;
        </div>;
      </div>;
        {selectedServices && selectedServices.length === 0 && (<div className='text-center py-12'>;'
              ))}
          {selectedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
              ))}
            <ServiceCard key={service.id} service={service} />


<<<<<<< HEAD
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">


          {selectedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}


        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {selectedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />

          ))}
        </div>

        {selectedServices.length === 0 && (
          <div className="text-center py-12">

          <div className="text-center py-12">

            </div>;
          </div>;
        </div>;
        {/* Services Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
          {selectedServices.map(service => (            <ServiceCard key={service.id} service={service} />        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
=======
            </div>;
          </div>;
        </div>;


        {/* Services Grid */}



        <div className="grid grid-cols-1 "lg":grid-cols-2 "xl":grid-cols-3 gap-8">"


          {selectedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />




        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
          {selectedServices.map(service => (            <ServiceCard key={service.id} service={service} />        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">

          ))}


>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======

          ))}

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          {selectedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {selectedServices.length === 0 && (

<<<<<<< HEAD
<<<<<<< HEAD
=======
          <div className="text-center py-12">

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc



            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>"
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>"

          <div className="text-center py-12">

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>

          <div className="text-center py-12">

          <div className="text-center py-12">



          <div className="text-center py-12">

          <div className="text-center py-12">


<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>

<div className='text-center py-12'>
            <h3 className='text-xl text-gray-600 mb-4'>No services found</h3>
            <p className='text-gray-500'>
              Try adjusting your search or filter criteria
            </p>
=======
          <div className="text-center py-12">

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> origin/chore/fix-lint-and-merge
            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          <div className="text-center py-12">

<div className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <div className="text-center py-12">

          <div className="text-center py-12">

            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>

<div className='text-center py-12'>
            <h3 className='text-xl text-gray-600 mb-4'>No services found</h3>
          <div className="text-center py-12>

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b


          <div className=text-center py-12">

          <div className="text-center py-12>

            <h3 className=text-xl text-gray-600 mb-4">No services found</h3>
            <p className="text-gray-500>Try adjusting your search or filter criteria</p>

<div className='text-center py-12'>
            <h3 className=text-xl text-gray-600 mb-4>No services found</h3>
            <p className='text-gray-500'>
              Try adjusting your search or filter criteria
            </p>          </div>          <div className="text-center py-12">
            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
      {/* Why Choose Zion Tech Group */}
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
              Why Choose Zion Tech Group?
            </h2>
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
              Why Choose Zion Tech Group?
            </h2>
=======
<<<<<<< HEAD
      <div className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621

              Why Choose Zion Tech Group?
            </h2>              Why Choose Zion Tech Group?
            </h2>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
<<<<<<< HEAD
=======

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              Why Choose Zion Tech Group?
            </h2>
<<<<<<< HEAD

<<<<<<< HEAD
              Why Choose Zion Tech Group?
            </h2>              Why Choose Zion Tech Group?
            </h2>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">

              Why Choose Zion Tech Group?
            </h2>

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
            </h2>
              Why Choose Zion Tech Group?
            </h2>

            </h2>
              Why Choose Zion Tech Group?
            </h2>

              Why Choose Zion Tech Group?
            </h2>

<<<<<<< HEAD
            </h2>
              Why Choose Zion Tech Group?
            </h2>
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======

              Why Choose Zion Tech Group?
            </h2>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver innovative, reliable, and cost-effective solutions that drive real business results;
            </p>
          </div>

<<<<<<< HEAD
=======
          
=======
              Why Choose Zion Tech Group?
            </h2>
=======
>>>>>>> origin/chore/fix-lint-and-merge
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver innovative, reliable, and cost-effective solutions that drive real business results;
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver innovative, reliable, and cost-effective solutions that drive real business results
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </p>
          </div>

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8>
            <div className=text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4>
                <span className=text-2xl">🚀</span>





          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🚀</span>
<<<<<<< HEAD
          
=======
=======
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🚀</span>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
<<<<<<< HEAD


=======
<<<<<<< HEAD

              </div>
              <h3 className='text-xl font-semibold mb-2'>Innovation First</h3>

              <p className='text-gray-600'>
                Cutting-edge AI and technology solutions;
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc







              </div>

>>>>>>> merged-prs-20250907-203621
              </p>
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
            <div className='text-center'>
              <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🛡️</span>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>

              </div>
              <h3 className='text-xl font-semibold mb-2'>Innovation First</h3>

              <p className='text-gray-600'>
                Cutting-edge AI and technology solutions;
              </p>
            </div>

<<<<<<< HEAD

            
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>

              </div>
              <h3 className='text-xl font-semibold mb-2'>Innovation First</h3>

              <p className='text-gray-600'>
                Cutting-edge AI and technology solutions;
              </p>
            </div>

>>>>>>> origin/chore/fix-lint-and-merge
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
<<<<<<< HEAD
=======

<<<<<<< HEAD
              </div>

              <h3 className='text-xl font-semibold mb-2'>
                Enterprise Security;
              </h3>'
              <p className='text-gray-600'>
                SOC 2, HIPAA, GDPR compliant solutions;
              </p>
            </div>
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b





            <div className='text-center'>
              <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🛡️</span>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </div>

              </p>
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-600">SOC 2, HIPAA, GDPR compliant solutions</p>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </div>

<<<<<<< HEAD
            <div className='text-center'>
              <div className='bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>⚡</span>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
<<<<<<< HEAD
=======


<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b





            <div className='text-center'>
              <div className='bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>⚡</span>
=======
              </div>
>>>>>>> merged-prs-20250907-203621

              <h3 className='text-xl font-semibold mb-2'>
                Enterprise Security;
              </h3>'
              <p className='text-gray-600'>
                SOC 2, HIPAA, GDPR compliant solutions;
              </p>
            </div>
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Deployment</h3>
              <p className="text-gray-600">Quick setup and implementation</p>
            </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
<<<<<<< HEAD
            <div className='text-center'>
              <div className='bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🎯</span>
              </div>
              <h3 className='text-xl font-semibold mb-2'>Proven Results</h3>
              <p className='text-gray-600'>Trusted by businesses nationwide</p>            </div>              Why Choose Zion Tech Group?
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </h2>

<<<<<<< HEAD

              </div>
              <h3 className='text-xl font-semibold mb-2'>Fast Deployment</h3>
              <p className='text-gray-600'>Quick setup and implementation</p>
=======
<<<<<<< HEAD

<<<<<<< HEAD
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>


ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b





            <div className='text-center'>
              <div className='bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>⚡</span>
=======
              </div>

              <h3 className='text-xl font-semibold mb-2'>
                Enterprise Security;
              </h3>'
              <p className='text-gray-600'>
                SOC 2, HIPAA, GDPR compliant solutions;
              </p>
            </div>
>>>>>>> origin/chore/fix-lint-and-merge

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?

origin/cursor/expand-services-advertise-and-build-project-c28b

            </h2>

<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </div>

>>>>>>> merged-prs-20250907-203621
            </div>
            </h2>
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

                <span className="text-2xl">⚡</span>
              </div>"
              <h3 className="text-xl font-semibold mb-2">Fast Deployment</h3>"
              <p className="text-gray-600">Quick setup and implementation</p>
            </div>
<<<<<<< HEAD
            </h2>
            </h2>

=======
<<<<<<< HEAD
            </h2>
            </h2>

=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
<<<<<<< HEAD

=======
=======
            
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
<<<<<<< HEAD
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </h2>
            </h2>
            </h2>
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>

              <p className="text-gray-600">Trusted by businesses nationwide</p>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>

              <p className="text-gray-600">Trusted by businesses nationwide</p>

            <div className='text-center'>
              <div className='bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🎯</span>
              </div>
              <h3 className='text-xl font-semibold mb-2'>Proven Results</h3>
              <p className='text-gray-600'>Trusted by businesses nationwide</p>            </div>              Why Choose Zion Tech Group?
            </h2>


            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver innovative, reliable, and cost-effective solutions that drive real business results
=======
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver innovative, reliable, and cost-effective solutions that drive real business results;
>>>>>>> origin/chore/fix-lint-and-merge
            </p>
          </div>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
            <div className="text-center">"
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl">🚀</span>
              </div>"
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>"
<<<<<<< HEAD
              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>"
            </div>
            </h2>
            </h2>



            <div className=text-center>
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className=text-2xl>🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>"
              <p className="text-gray-600">Trusted by businesses nationwide</p>"


<<<<<<< HEAD
=======
              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>
            </div>"
            <div className="text-center">"
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl">🛡️</span>

                <span className="text-2xl">⚡</span>
              </div>"
              <h3 className="text-xl font-semibold mb-2">Fast Deployment</h3>"
              <p className="text-gray-600">Quick setup and implementation</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
>>>>>>> origin/chore/fix-lint-and-merge

              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>

              <p className="text-gray-600">Trusted by businesses nationwide</p>
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533

=======
=======
              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>
            </div>"
            <div className="text-center">"
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl">🛡️</span>

                <span className="text-2xl">⚡</span>
              </div>"
              <h3 className="text-xl font-semibold mb-2">Fast Deployment</h3>"
              <p className="text-gray-600">Quick setup and implementation</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>

              <p className="text-gray-600">Trusted by businesses nationwide</p>
<<<<<<< HEAD
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>

              <p className="text-gray-600">Trusted by businesses nationwide</p>

            <div className='text-center'>
              <div className='bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🎯</span>
              </div>
              <h3 className='text-xl font-semibold mb-2'>Proven Results</h3>
              <p className='text-gray-600'>Trusted by businesses nationwide</p>
origin/cursor/automate-test-improve-and-merge-code-2533

=======
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <div className=text-center'>
              <div className='bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4>
                <span className=text-2xl'>🎯</span>
              </div>
              <h3 className='text-xl font-semibold mb-2>Proven Results</h3>


=======
            <div className='text-center'>
              <div className='bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🎯</span>
              </div>
              <h3 className='text-xl font-semibold mb-2'>Proven Results</h3>
              <p className='text-gray-600'>Trusted by businesses nationwide</p>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        </div>;
        {selectedServices && selectedServices.length === 0 && (;
          <div className='text-center py-12'>;
            <h3 className='text-xl text-gray-600 mb-4'>No services found</h3>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <p className='text-gray-500'>;
              Try adjusting your search or filter criteria;"
            </p>          </div>          <div className="text-center py-12">;"
            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>;"
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>;
          </div>;
        )}
      </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      {/* Why Choose Zion Tech Group */}'
      <div className='bg-white py-16'>;'
        <div className='container mx-auto px-4'>;'
          <div className='text-center mb-12'>;'
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
      {/* Why Choose Zion Tech Group */}
      <div className='bg-white py-16'>;
        <div className='container mx-auto px-4'>;
          <div className='text-center mb-12'>;
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      {/* CTA Section */}


            </Link>
            <a 

            <a 

=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            Ready to Transform Your Business?

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
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD


            </Link>
            <a 

            <a 

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              href="https://ziontechgroup.com"

              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              🌐 Visit Website;
            </a>
          </div>
        </div>
      </div>
    </div>

              Why Choose Zion Tech Group?;
            </h2>;'
            <p className=text-xl text-gray-600 max-w-3xl mx-auto>;
              We deliver innovative, reliable, and cost-effective solutions that;
              drive real business results;
            </p>;
          </div>;'
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8>;
            <div className='text-center'>;
              <div className=bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>;'
                <span className=text-2xl>🚀</span>;
              </div>;'
              <h3 className='text-xl font-semibold mb-2>Innovation First</h3>;
              <p className='text-gray-600'>;
                Cutting-edge AI and technology solutions;
              </p>;
            </div>;
            <div className=text-center'>;'
              <div className=bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4>;'
                <span className='text-2xl>🛡️</span>;
              </div>;
              <h3 className='text-xl font-semibold mb-2'>;
                Enterprise Security;
              </h3>;
              <p className=text-gray-600'>;
                SOC 2, HIPAA, GDPR compliant solutions;
              </p>;
            </div>;'
            <div className=text-center>;'
              <div className='bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4>;
                <span className='text-2xl'>⚡</span>;
              </div>;
              <h3 className=text-xl font-semibold mb-2'>Fast Deployment</h3>;'
              <p className=text-gray-600>Quick setup and implementation</p>;
            </div>;'
            <div className='text-center>;
              <div className='bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>;
                <span className=text-2xl'>🎯</span>;
              </div>;'
              <h3 className=text-xl font-semibold mb-2>Proven Results</h3>;'
              <p className='text-gray-600>Trusted by businesses nationwide</p>            </div>              Why Choose Zion Tech Group?;
            </h2>;"
            <p className=text-xl text-gray-600 max-w-3xl mx-auto>;
              We deliver innovative, reliable, and cost-effective solutions that drive real business results;
            </p>;
          </div>;"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8>;
            <div className="text-center">;
              <div className=bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className=text-2xl>🚀</span>;
              </div>;"
              <h3 className="text-xl font-semibold mb-2>Innovation First</h3>;
              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>;
            </div>;
            <div className=text-center">;"
              <div className=bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4>;"
                <span className="text-2xl>🛡️</span>;
              </div>;
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>;
              <p className=text-gray-600">SOC 2, HIPAA, GDPR compliant solutions</p>;
            </div>;"
            <div className=text-center>;"
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4>;
                <span className="text-2xl">⚡</span>;
              </div>;
              <h3 className=text-xl font-semibold mb-2">Fast Deployment</h3>;"
              <p className=text-gray-600>Quick setup and implementation</p>;
            </div>;"
            <div className="text-center>;
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className=text-2xl">🎯</span>;
              </div>;"
              <h3 className=text-xl font-semibold mb-2>Proven Results</h3>;"
              <p className="text-gray-600>Trusted by businesses nationwide</p>;
      {/* Search and Filter Section */}
      <div className='container mx - auto px - 4 py - 8'>;
        <div className=bg - white rounded - xl shadow - lg p - 6 mb - 8'>;'
          <div className=flex flex - col md:flex - row gap - 4>;'
            <div className='flex - 1>;
              <input;
                type='text';
                placeholder=Search services...';
                value={search_term}
                on_change={e => setSearchTerm (e.target.value)}'
                className=w - full px - 4 py - 3 border border - gray - 300 rounded - lg focus:ring - 2 focus:ring - blue - 500 focus:border - transparent;
              />;
            </div>;'
            <div className='flex gap - 2>;
              {SERVICE_CATEGORIES.map (category => (                <button              <input;
                type="text";
                placeholder=Search services...";
                value={search_term}

              {SERVICE_CATEGORIES.map ((category) => (
                <button;
                  key={category.id}
                  on_click={() => setSelectedCategory (category.id)}`
                  className={`px - 4 py - 2 rounded - lg font - medium transition - colors ${}
                    selected_category === category.id;
                      ? 'bg - blue - 600 text - white';
                      : bg - gray - 100 text - gray - 700 hover:bg - gray - 200';`
                  }`}
                >;
                  {category.icon} {category.name}
                </button>))}
            </div>;
          </div>;
        </div>;

          {selected_services.map ((service) => (
            <ServiceCard key={service.id} service={service} />))}
        </div>;
        {selected_services.length === 0 && ('
          <div className=text - center py - 12>;'
            <h3 className='text - xl text - gray - 600 mb - 4>No services found</h3>;
            <p className='text - gray - 500'>;

          </div>)}
      </div>;
      {/* Why Choose Zion Tech Group */}
      <div className=bg - white py - 16'>;'
        <div className=container mx - auto px - 4>;'
          <div className='text - center mb - 12>;
            <h2 className='text - 4xl font - bold text - gray - 900 mb - 4'>;
              Why Choose Zion Tech Group?;
            </h2>;
            <p className=text - xl text - gray - 600 max - w-3xl mx - auto'>;
              We deliver innovative, reliable, and cost - effective solutions that;
              drive real business results;
            </p>;
          </div>;'
          <div className=grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8>;'
            <div className='text - center>;
              <div className='bg - blue - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                <span className=text - 2xl'>🚀</span>;
              </div>;'
              <h3 className=text - xl font - semibold mb - 2>Innovation First</h3>;'
              <p className='text - gray - 600>;
                Cutting - edge AI and technology solutions;
              </p>;
            </div>;
            <div className='text - center'>;
              <div className=bg - green - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4'>;'
                <span className=text - 2xl>🛡️</span>;
              </div>;'
              <h3 className='text - xl font - semibold mb - 2>;
                Enterprise Security;
              </h3>;
              <p className='text - gray - 600'>;
                SOC 2, HIPAA, GDPR compliant solutions;
              </p>;
            </div>;
            <div className=text - center'>;'
              <div className=bg - purple - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4>;'
                <span className='text - 2xl>⚡</span>;
              </div>;
              <h3 className='text - xl font - semibold mb - 2'>Fast Deployment</h3>;
              <p className=text - gray - 600'>Quick setup and implementation</p>;
            </div>;'
            <div className=text - center>;'
              <div className='bg - orange - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4>;
                <span className='text - 2xl'>🎯</span>;
              </div>;
              <h3 className=text - xl font - semibold mb - 2'>Proven Results</h3>;'
              <p className=text - gray - 600>Trusted by businesses nationwide</p>            </div>              Why Choose Zion Tech Group?;

            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16'>
origin/cursor/automate-test-improve-and-merge-code-2533
        <div className='container mx-auto px-4 text-center'>

          </p>;
          </h2>

      <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold mb-6'>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
<<<<<<< HEAD




            Ready to Transform Your Business?
          </h2>

          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get started with Zion Tech Group today and discover how our innovative solutions can drive growth, efficiency, and success for your organization.
          </p>"
          <div className="flex flex-wrap justify-center gap-4">
            <a 

            </a>
            <a
              href='https://ziontechgroup.com'

            </Link>
            <a 
=======
<<<<<<< HEAD
=======



>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            Ready to Transform Your Business?
          </h2>

<<<<<<< HEAD
=======
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get started with Zion Tech Group today and discover how our innovative solutions can drive growth, efficiency, and success for your organization.
          </p>"
          <div className="flex flex-wrap justify-center gap-4">
<<<<<<< HEAD
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
=======
            <a 
>>>>>>> merged-prs-20250907-203621

            </a>
            <a
              href='https://ziontechgroup.com'

            </Link>
            <a 

<<<<<<< HEAD
=======
            Ready to Transform Your Business?

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </h2>


          <p className=text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get started with Zion Tech Group today and discover how our innovative solutions can drive growth, efficiency, and success for your organization.
          </p>"
          <div className=flex flex-wrap justify-center gap-4>

>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
              href="tel: +13024640950"
              className=bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors
=======
<<<<<<< HEAD
=======
              href="tel: +13024640950"
              className=bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            >
              📞 Call +1 302 464 0950;
            </Link>
<<<<<<< HEAD
            <a "
              href="mailto:kleber@ziontechgroup.com""
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
            >
              ✉️ Get Free Consultation
            <a 
            <a
            <a

            </a>
            <a
            <a 

=======
<<<<<<< HEAD
            <a 

            <a 
      {/* CTA Section */}
            </Link>
            <a 

            <a 
      {/* CTA Section */}
            </Link>





            <a 


              href="https://ziontechgroup.com"

              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors'
origin/cursor/automate-test-improve-and-merge-code-2533
              href="https://ziontechgroup.com"
<<<<<<< HEAD



              href="https://ziontechgroup.com"
=======
>>>>>>> merged-prs-20250907-203621

              href="https://ziontechgroup.com"

<<<<<<< HEAD
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors'
origin/cursor/automate-test-improve-and-merge-code-2533
              href="https://ziontechgroup.com"

              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"

              className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors'

            >
              🌐 Visit Website;
=======

=======
            </Link>

            <a 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              href="https://ziontechgroup.com"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              🌐 Visit Website
=======

<div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16'>
origin/cursor/automate-test-improve-and-merge-code-2533
        <div className='container mx-auto px-4 text-center'>

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

>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </a>
            <a
              href='https://ziontechgroup.com'

            </Link>
            <a 

              href="https://ziontechgroup.com"

              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors'
origin/cursor/automate-test-improve-and-merge-code-2533
            >
              🌐 Visit Website;
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )

<<<<<<< HEAD
<<<<<<< HEAD

=======
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
=======

<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
ursor/fix-website-loading-errors-and-merge-6662



  )
      <div className="bg-white py-16">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h2 className="text-4xl font-bold text-gray-900 mb-4">;
  )

              Why Choose Zion Tech Group?;
            </h2>;
            <p className=text-xl text-gray-600 max-w-3xl mx-auto>;
              We deliver innovative, reliable, and cost-effective solutions that;
              drive real business results;
            </p>;
          </div>;

                Enterprise Security;
              </h3>;
              <p className='text-gray-600'>;'
                SOC 2, HIPAA, GDPR compliant solutions;
              </p>;
            </div>;

              />;
            </div>;
            <div className="flex gap - 2">;"
              {SERVICE_CATEGORIES.map ((category) => (<button;
                  }
                  key={category.id}
                  on_click={() => setSelectedCategory (category.id)}
                  className={`px - 4 py - 2 rounded - lg font - medium transition - colors ${selected_category === category.id;`              {SERVICE_CATEGORIES.map ((category) => (
                <button;
                  }
                  key={category.id}
                  on_click={() => setSelectedCategory (category.id)}
                  className={`px - 4 py - 2 rounded - lg font - medium transition - colors ${`                    }
                    selected_category === category.id;

                  {category.icon} {category.name}
                </button>))}
            </div>;
          </div>;
        </div>;
        {/* Services Grid */}

          {selected_services.map ((service) => (
            <ServiceCard key={service.id} service={service} />))}
        </div>;
        {selected_services.length === 0 && (

              We deliver innovative, reliable, and cost - effective solutions that;
              drive real business results;
            </p>;
          </div>;

                Enterprise Security;
              </h3>;
              <p className='text - gray - 600'>;'
                SOC 2, HIPAA, GDPR compliant solutions;
              </p>;
            </div>;

            </div>;
          </div>;
        </div>;
      </div>;
          </p>;
          </p>;

      </div>;</p>;
          </p>;{/* CTA Section */}

            Ready to Transform Your Business?;
          </h2>;
          <p className='text - xl mb - 8 text - blue - 100 max - w-2xl mx - auto'>;Get started with Zion Tech Group today and discover how our;'
            innovative solutions can drive growth, efficiency, and success for;
            your organization.;

            Get started with Zion Tech Group today and discover how our innovative solutions can drive growth, efficiency, and success for your organization.;
          </p>;
          <div className="flex flex-wrap justify-center gap-4">;"
            <a;

            >;
              📞 Call +1 302 464 0950;
            </Link>;
            <a;

            >;
              ✉️ Get Free Consultation;
            </a>;
            <a;
          </h2>;
            </a>;
            <a;

            Get started with Zion Tech Group today and discover how our innovative solutions can drive growth, efficiency, and success for your organization.;
          </p>;
          <div className="flex flex-wrap justify-center gap-4">;"
            <a;

            >;
              📞 Call +1 302 464 0950;
            </a>;
            <a;

            <a;
            <a;
            <a;
            </a>;
            <a;
            </Link>;
            </Link>;
            <a;

            >;
              🌐 Visit Website;
          </div>;
        </div>;
      </div>;
    </div>;
  )}

            >
              ✉️ Get Free Consultation
            </a>
            <a,
href='"https"://ziontechgroup.com''
              className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg "hover":bg-white "hover":text-blue-600 transition-colors'            >            Ready to Transform Your Business?'
          </h2>


            >
              ✉️ Get Free Consultation
            <a 
            <a
            <a
            <a


            </a>
            <a
            <a,
href=""https"://ziontechgroup.com""
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg "hover":bg-white "hover":text-blue-600 transition-colors""



            >
              🌐 Visit Website
          </div>
        </div>
      </div>
    </div>


<<<<<<< HEAD
}
interface ServiceCardProps {
  }
  "service": ServiceSolution,
href=""tel": +13024640950""
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg "hover":bg-blue-50 transition-colors">;"
  )
      <div className="bg-white py-16">;"
        <div className="container mx-auto px-4">;"
          <div className="text-center mb-12">;"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">;"
              Why Choose Zion Tech Group?;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;"
              We deliver innovative, reliable, and cost-effective solutions that drive real business results;
            </p>;
          </div>;
          <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-4 gap-8">;"
            <div className="text-center">;"
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">🚀</span>;"
              </div>;
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>;"
              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>;"
            </div>;
            <div className="text-center">;"
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">🛡️</span>;"
              </div>;
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>;"
              <p className="text-gray-600">SOC 2, HIPAA, GDPR compliant solutions</p>;"
            </div>;
            <div className="text-center">;"
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">⚡</span>;"
              </div>;
              <h3 className="text-xl font-semibold mb-2">Fast Deployment</h3>;"
              <p className="text-gray-600">Quick setup and implementation</p>;"
            </div>;
            <div className="text-center">;"
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">🎯</span>;"
              </div>;
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>;"
              <p className="text-gray-600">Trusted by businesses nationwide</p>;"
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
      {/* CTA Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* CTA Section */}
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-4xl font-bold mb-6">;
            Ready to Transform Your Business?;
          </h2>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">;
            Get started with Zion Tech Group today and discover how our innovative solutions can drive growth, efficiency, and success for your organization.;
          </p>;
          <div className="flex flex-wrap justify-center gap-4">;
            <a;
              href="tel: +13024640950";
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors";
            >;

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

              🌐 Visit Website;
<<<<<<< HEAD
<<<<<<< HEAD
=======
            </a>;
          </div>;
        </div>;
      </div>;
    </div>;
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  );

interface ServiceCardProps {;
  service: ServiceSolution;  );

}
;
interface ServiceCardProps {;
  service: ServiceSolution;

<<<<<<< HEAD
=======

interface ServiceCardProps {;
  service: ServiceSolution;  );
            </a>
=======
          <p className='text - xl mb - 8 text - blue - 100 max - w-2xl mx - auto'>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            Get started with Zion Tech Group today and discover how our;
            innovative solutions can drive growth, efficiency, and success for;
            your organization.;
          </p>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </h2>
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
            </Link>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
}
;
interface ServiceCardProps {;
  service: ServiceSolution;
origin/cursor/expand-services-advertise-and-build-project-c28b
  )interface ServiceCardProps  {service: ServiceSolution;  )}
interface ServiceCardProps  {service: ServiceSolution;}
function ServiceCard(): any ({ service }: ServiceCardProps) {const [showDetails, setShowDetails]  = useState(false)ursor/fix-website-loading-errors-and-merge-6662;
}
function ServiceCard(): any ({ service }: ServiceCardProps) {)interface ServiceCardProps  {"service": ServiceSolution;function ServiceCard() {const [showDetails, setShowDetails]  = useState(false)const getPopularPlan = () => {if (service.pricing.professional.popular) return service.pricing.professional;if (service.pricing.basic.popular) return service.pricing.basic;
=======
=======

<<<<<<< HEAD
  );
interface ServiceCardProps {
  service: ServiceSolution;  )
=======
  )

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
interface ServiceCardProps {
  service: ServiceSolution
              href="tel: +13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </a>;
          </div>;
        </div>;
      </div>;
    </div>;
>>>>>>> origin/chore/fix-lint-and-merge
  );
interface ServiceCardProps {;
  service: ServiceSolution;  );
<<<<<<< HEAD

}
;
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface ServiceCardProps {;
  service: ServiceSolution;

<<<<<<< HEAD

interface ServiceCardProps {;
  service: ServiceSolution;  );
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
;
interface ServiceCardProps {;
  service: ServiceSolution;
origin/cursor/expand-services-advertise-and-build-project-c28b
  )interface ServiceCardProps  {service: ServiceSolution;  )}
interface ServiceCardProps  {service: ServiceSolution;}
function ServiceCard(): any ({ service }: ServiceCardProps) {const [showDetails, setShowDetails]  = useState(false)ursor/fix-website-loading-errors-and-merge-6662;
}
function ServiceCard(): any ({ service }: ServiceCardProps) {)interface ServiceCardProps  {"service": ServiceSolution;function ServiceCard() {const [showDetails, setShowDetails]  = useState(false)const getPopularPlan = () => {if (service.pricing.professional.popular) return service.pricing.professional;if (service.pricing.basic.popular) return service.pricing.basic;
=======
            </a>;
          </div>;
        </div>;
      </div>;
    </div>;
>>>>>>> origin/chore/fix-lint-and-merge
  );

interface ServiceCardProps {;
  service: ServiceSolution;  );

}
;
interface ServiceCardProps {;
  service: ServiceSolution;

<<<<<<< HEAD

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b











<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
);

interface ServiceCardProps {
<<<<<<< HEAD
  service: ServiceSolution;

<<<<<<< HEAD

  const getPopularPlan = () => {
    if (service.pricing.professional.popular) return service.pricing.professional;
}
function ServiceCard(): any ({ service }: ServiceCardProps) {;
=======
function ServiceCard({ service }: ServiceCardProps) {
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
  service: ServiceSolution}

function ServiceCard({ service }: ServiceCardProps) {
origin/cursor/automate-test-improve-and-merge-code-2533
=======
  service: ServiceSolution;

<<<<<<< HEAD
=======
}
function ServiceCard(): any ({ service }: ServiceCardProps) {;
  const [showDetails, setShowDetails] = useState(false);

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
}
function ServiceCard(): any ({ service }: ServiceCardProps) {;
  const [showDetails, setShowDetails] = useState(false);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const getPopularPlan = () => {
    if (service.pricing.professional.popular) return service.pricing.professional;
}
function ServiceCard(): any ({ service }: ServiceCardProps) {;
=======
function ServiceCard({ service }: ServiceCardProps) {
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const [showDetails, setShowDetails] = useState(false);

    if (service.pricing.basic.popular) return service.pricing.basic;
    if (service.pricing.enterprise.popular) return service.pricing.enterprise;
    return service.pricing.professional;
<<<<<<< HEAD
  };

<<<<<<< HEAD

=======
<<<<<<< HEAD
  };

=======
  };
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    if (service.pricing.basic.popular) return service.pricing.basic;
    if (service.pricing.enterprise.popular) return service.pricing.enterprise;
    return service.pricing.professional;
  };

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const getPopularPlan = () => {;
    if (service && service.pricing.professional && professional.popular);
      return service && service.pricing.professional;
    if (service && service.pricing.basic && basic.popular) return service && service.pricing.basic;
    if (service && service.pricing.enterprise && enterprise.popular) return service && service.pricing.enterprise;
<<<<<<< HEAD
    return service && service.pricing.professional;  };    if (service && service.pricing.professional && professional.popular) return service && service.pricing.professional;
    if (service && service.pricing.basic && basic.popular) return service && service.pricing.basic;
    if (service && service.pricing.enterprise && enterprise.popular) return service && service.pricing.enterprise;
    return service && service.pricing.professional;
    if (service.pricing.professional.popular) return service.pricing.professional,if (service.pricing.basic.popular) return service.pricing.basic,if (service.pricing.enterprise.popular) return service.pricing.enterprise,return service.pricing.professional;
  },<div className='bg-white rounded-xl shadow-lg overflow-hidden "hover":shadow-xl transition-shadow'>;'
if (service.pricing.professional.popular)return service.pricing.professional;
    if (service.pricing.basic.popular) return service.pricing.basic;
    if (service.pricing.enterprise.popular) return service.pricing.enterprise;
    return service.pricing.professional;
  }const popularPlan = getPopularPlan()return (<div className='bg-white rounded-xl shadow-lg overflow-hidden "hover":shadow-xl transition-shadow'>;'
    if (service.pricing.basic.popular) return service.pricing.basic;
    if (service.pricing.enterprise.popular) return service.pricing.enterprise;
    return service.pricing.professional;

  }



  const getPopularPlan = () => {
=======
=======
    return service && service.pricing.professional
};    if (service && service.pricing.professional && professional.popular) return service && service.pricing.professional;
    if (service && service.pricing.basic && basic.popular) return service && service.pricing.basic;
    if (service && service.pricing.enterprise && enterprise.popular) return service && service.pricing.enterprise;
    return service && service.pricing.professional;
<<<<<<< HEAD
=======
<<<<<<< HEAD
    if (service.pricing.professional.popular) return service.pricing.professional,if (service.pricing.basic.popular) return service.pricing.basic,if (service.pricing.enterprise.popular) return service.pricing.enterprise,return service.pricing.professional;
  },<div className='bg-white rounded-xl shadow-lg overflow-hidden "hover":shadow-xl transition-shadow'>;'
if (service.pricing.professional.popular)return service.pricing.professional;
    if (service.pricing.basic.popular) return service.pricing.basic;
    if (service.pricing.enterprise.popular) return service.pricing.enterprise;
    return service.pricing.professional;
  }const popularPlan = getPopularPlan()return (<div className='bg-white rounded-xl shadow-lg overflow-hidden "hover":shadow-xl transition-shadow'>;'
    if (service.pricing.basic.popular) return service.pricing.basic;
    if (service.pricing.enterprise.popular) return service.pricing.enterprise;
    return service.pricing.professional;

  }



  const getPopularPlan = () => {
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const getPopularPlan = () => {;
>>>>>>> origin/chore/fix-lint-and-merge
    if (service && service.pricing.professional && professional.popular);
      return service && service.pricing.professional;
    if (service && service.pricing.basic && basic.popular) return service && service.pricing.basic;
    if (service && service.pricing.enterprise && enterprise.popular) return service && service.pricing.enterprise;
<<<<<<< HEAD
=======
    return service && service.pricing.professional
};    if (service && service.pricing.professional && professional.popular) return service && service.pricing.professional;
    if (service && service.pricing.basic && basic.popular) return service && service.pricing.basic;
    if (service && service.pricing.enterprise && enterprise.popular) return service && service.pricing.enterprise;
    return service && service.pricing.professional;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    if (service.pricing.professional.popular) return service.pricing.professional,
    if (service.pricing.basic.popular) return service.pricing.basic,
    if (service.pricing.enterprise.popular) return service.pricing.enterprise,
    return service.pricing.professional
  },

<<<<<<< HEAD
<<<<<<< HEAD
=======
  const popularPlan = getPopularPlan($2);
  return (
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
if (service.pricing.professional.popular)
      return service.pricing.professional;
    if (service.pricing.basic.popular) return service.pricing.basic;
    if (service.pricing.enterprise.popular) return service.pricing.enterprise;
    return service.pricing.professional;
  };
<<<<<<< HEAD
=======
=======
  const popularPlan = getPopularPlan();
  return (
<<<<<<< HEAD
    <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
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
              🌐 Visit Website;
            </a>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
}
;
interface ServiceCardProps {;
  service: ServiceSolution;
}

function ServiceCard({ service }: ServiceCardProps) {
  const [showDetails, setShowDetails] = useState(false),

  const getPopularPlan = () => {
    if (service.pricing.professional.popular)
      return service.pricing.professional;
    if (service.pricing.basic.popular) return service.pricing.basic;
    if (service.pricing.enterprise.popular) return service.pricing.enterprise;
    return service.pricing.professional;  };    if (service.pricing.professional.popular) return service.pricing.professional;
    if (service.pricing.basic.popular) return service.pricing.basic;
    if (service.pricing.enterprise.popular) return service.pricing.enterprise;
    return service.pricing.professional
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  const popularPlan = getPopularPlan();

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            {service && service.category}
          </span>;
        </div>;
        {service && service.aiScore && (;
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <div className='absolute bottom-4 left-4'>;
            <span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>          <div className="absolute bottom-4 left-4">;
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">;
              AI Score: {service && service.aiScore}
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </span>;
          </div>;
        )}
      {/* Service Content */}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD

=======
=======
    <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
    if (service.pricing.professional.popular) return service.pricing.professional,
    if (service.pricing.basic.popular) return service.pricing.basic,
    if (service.pricing.enterprise.popular) return service.pricing.enterprise,
    return service.pricing.professional
  },

  const popularPlan = getPopularPlan(),

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Service Image */}
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <img 
          src={service.images[0]} 
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className='absolute top-4 right-4'>
          <span className='bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold'>            {service.category}
          </span>
        </div>
        {service.aiScore && (
          <div className='absolute bottom-4 left-4'>
            <span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>              AI Score: {service.aiScore}      {/* Service Image */}
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <img
          src={service.images[0]}
          alt={service.title}
          className="w - full h - full object - cover";
        />;
        <div className="absolute top - 4 right - 4">;
          <span className="bg - white text - blue - 600 px - 3 py - 1 rounded - full text - sm font - semibold">;
            {service.category}
          </span>;
        </div>;
        {service.ai_score && (
          <div className='absolute bottom - 4 left - 4'>;
            <span className='bg - green - 500 text - white px - 3 py - 1 rounded - full text - sm font - semibold'>          <div className="absolute bottom - 4 left - 4">;
            <span className="bg - green - 500 text - white px - 3 py - 1 rounded - full text - sm font - semibold">;
              AI Score: {service.ai_score}
            </span>;
          </div>)}
      </div>;
      {/* Service Content */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <div className='p - 6'>;
        <div className='flex items - start justify - between mb - 3'>;
          <h3 className='text - xl font - bold text - gray - 900 mb - 2'>;
            {service.title}
          </h3>;
          <div className='flex items - center gap - 1'>;
            <span className='text - yellow - 500'>⭐</span>;
            <span className='text - sm font - medium'>;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              {service.provider.rating}
      </div>;

      {/* Service Content */}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD

=======
=======
              {service.provider.rating}
      </div>;
      {/* Service Content */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              ({service && service.provider.reviewCount});
            </span>;
          </div>;
        </div>;
<<<<<<< HEAD

        <p className='text-gray-600 mb-4 line-clamp-3'>{service && service.description}</p>;

        {/* Provider Info */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <div className='flex items-center gap-3 mb-4'>;
          <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>;
            <span className='text-blue-600 font-semibold text-sm'>              {service && service.provider.name && name.charAt(0)}
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

=======
        <div className='flex items-center gap-3 mb-4'>;
          <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>;
            <span className='text-blue-600 font-semibold text-sm'>              {service && service.provider.name && name.charAt(0)}
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
        <p className='text-gray-600 mb-4 line-clamp-3'>{service && service.description}</p>;
        {/* Provider Info */}
        <div className='flex items-center gap-3 mb-4'>;
          <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>;
            <span className='text-blue-600 font-semibold text-sm'>              {service && service.provider.name && name.charAt(0)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </span>;
            <span className='text - gray - 500 text - sm'>;
              ({service.provider.review_count});
            </span>;
          </div>;
        </div>;
        <p className='text - gray - 600 mb - 4 line - clamp - 3'>{service.description}</p>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        {/* Provider Info */}
        <div className='flex items - center gap - 3 mb - 4'>;
          <div className='w - 8 h - 8 bg - blue - 100 rounded - full flex items - center justify - center'>;
            <span className='text - blue - 600 font - semibold text - sm'>              {service.provider.name.char_at (0)}
<<<<<<< HEAD
  const popularPlan = getPopularPlan();
  return (

origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const popularPlan = getPopularPlan();
  return (
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> merged-prs-20250907-203621

  const popularPlan = getPopularPlan();
  return (

  const popularPlan = getPopularPlan(),

<<<<<<< HEAD


=======
<<<<<<< HEAD

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
            </span>;
          </div>;
          <div>          </div>;
        </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

=======
>>>>>>> origin/chore/fix-lint-and-merge
        {/* Provider Info */}
        <div className='flex items - center gap - 3 mb - 4'>;
          <div className='w - 8 h - 8 bg - blue - 100 rounded - full flex items - center justify - center'>;
            <span className='text - blue - 600 font - semibold text - sm'>              {service.provider.name.char_at (0)}

  const popularPlan = getPopularPlan();
  return (

  const popularPlan = getPopularPlan(),

            </span>;
          </div>;
          <div>          </div>;
        </div>;
>>>>>>> merged-prs-20250907-203621

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

<<<<<<< HEAD
  const popularPlan = getPopularPlan(),

  return (
=======
<<<<<<< HEAD
  const popularPlan = getPopularPlan(),

  return (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">

      {/* Service Image */}

      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <img;
          src={service.images[0]} 

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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
          <div className="absolute bottom-4 left-4">
          <div className='absolute bottom-4 left-4'>
            <span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>          <div className="absolute bottom-4 left-4">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">

<div className='absolute bottom-4 left-4'>
            <span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>
origin/cursor/automate-test-improve-and-merge-code-2533
              AI Score: {service.aiScore}
            </span>
          </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
          <div className="absolute bottom-4 left-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              AI Score: {service.aiScore}
            </span>;
          </div>;
<<<<<<< HEAD
=======
        )}
      </div>
      {/* Service Content */}
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621


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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

          <div className="absolute bottom-4 left-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              AI Score: {service.aiScore}
            </span>;
          </div>;

<<<<<<< HEAD
        )}
      </div>;
      {/* Service Content */}
<<<<<<< HEAD


=======

<<<<<<< HEAD
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">"

<div className='absolute bottom-4 left-4'>'
            <span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>'

              }

              AI "Score": {service.aiScore}
            </span>
          </div>





=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        )}
      </div>
      {/* Service Content */}

<<<<<<< HEAD





>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </span>;
          </div>;
          <div>          </div>;
        </div>;

<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
        {/* Provider Info */}
        <div className='flex items - center gap - 3 mb - 4'>;
          <div className='w - 8 h - 8 bg - blue - 100 rounded - full flex items - center justify - center'>;
            <span className='text - blue - 600 font - semibold text - sm'>              {service.provider.name.char_at (0)}

  const popularPlan = getPopularPlan();
  return (

  const popularPlan = getPopularPlan(),

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

      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <img;
          src={service.images[0]} 

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

<<<<<<< HEAD
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">"

<div className='absolute bottom-4 left-4'>'
            <span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>'

              }

              AI "Score": {service.aiScore}
            </span>
          </div>





        )}
      </div>
      {/* Service Content */}






            </span>;
          </div>;
          <div>          </div>;
        </div>;


=======
>>>>>>> origin/chore/fix-lint-and-merge
=======

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      {/* Service Image */}
      <div className=h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden>
        <img 
          src={service.images[0]} 
          alt={service.title}

          className="w-full h-full object-cover"
        />

"
        <div className="absolute top-4 right-4">"
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className="absolute top-4 right-4">
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">

        />
        <div className=absolute top-4 right-4>
          <span className='bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold'>

=======
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
>>>>>>> origin/chore/fix-lint-and-merge
            {service.category}
          </span>
        </div>
        {service.aiScore && (

"
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
<<<<<<< HEAD
            <span className=bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold>

<div className=absolute bottom-4 left-4>
            <span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>

=======
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      {/* Service Image */}
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <img 
          src={service.images[0]} 
          alt={service.title}
<<<<<<< HEAD
          className="w-full h-full object-cover"
        />

        <div className="absolute top-4 right-4">
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
=======

>>>>>>> merged-prs-20250907-203621
            {service.category}
          </span>
        </div>
        {service.aiScore && (
<<<<<<< HEAD

          <div className="absolute bottom-4 left-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              AI Score: {service.aiScore}
=======
          <div className="absolute bottom-4 left-4">"
          <div className='absolute bottom-4 left-4'>'
            <span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>          <div className="absolute bottom-4 left-4">"
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">"
              }
              AI "Score": {service.aiScore}
            </span>
          </div>


>>>>>>> merged-prs-20250907-203621
            </span>;
          </div>;
        )}
      </div>
      {/* Service Content */}
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
<div className='p-6'>
=======
<<<<<<< HEAD
<div className='p-6'>
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
<div className='p-6'>
=======
<<<<<<< HEAD
      <div className='p-6'>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <p className='text-gray-600 mb-4 line-clamp-3'>{service.description}</p>
        {/* Provider Info */}
        <div className='flex items-center gap-3 mb-4'>
          <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
<<<<<<< HEAD
<<<<<<< HEAD


=======

=======
<<<<<<< HEAD


>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <span className='text-blue-600 font-semibold text-sm'>              {service.provider.name.charAt(0)}
            </span>
          </div>
          <div>          </div>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
        {/* Provider Info */}
<<<<<<< HEAD
=======







=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        )}
      </div>
      {/* Service Content */}

<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span className="text-sm font-medium">{service.provider.rating}</span>

<<<<<<< HEAD
            <span className="text-gray-500 text-sm">({service.provider.reviewCount})</span>
          </div>
        </div>
"
        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>

        {/* Provider Info */}

            <span className="text-blue-600 font-semibold text-sm">
            <span className='text-blue-600 font-semibold text-sm'>
origin/cursor/automate-test-improve-and-merge-code-2533
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-sm">

            <span className='text-blue-600 font-semibold text-sm'>
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc




<<<<<<< HEAD

=======
=======
        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
        {/* Provider Info */}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span className="text-sm font-medium">{service.provider.rating}</span>

            <span className="text-gray-500 text-sm">({service.provider.reviewCount})</span>
      <div className=p-6>
        <div className="flex items-start justify-between mb-3">
          <h3 className=text-xl font-bold text-gray-900 mb-2>{service.title}</h3>
          <div className="flex items-center gap-1">
            <span className=text-yellow-500>⭐</span>
            <span className="text-sm font-medium">{service.provider.rating}</span>

            <span className=text-gray-500 text-sm>({service.provider.reviewCount})</span>
          </div>
        </div>
"
        <p className="text-gray-600 mb-4 line-clamp-3>{service.description}</p>

        {/* Provider Info */}

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b


        <div className="flex items-center gap-3 mb-4>
          <div className=w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-sm>

            <span className=text-blue-600 font-semibold text-sm>

            <span className="text-blue-600 font-semibold text-sm">
            <span className='text-blue-600 font-semibold text-sm'>
origin/cursor/automate-test-improve-and-merge-code-2533




        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-sm">

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
"
        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>

        {/* Provider Info */}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <span className="text-blue-600 font-semibold text-sm">
            <span className='text-blue-600 font-semibold text-sm'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              {service.provider.name.charAt(0)}
            </span>
          </div>
          <div>

<<<<<<< HEAD
<<<<<<< HEAD

=======
            <p className='font-medium text-gray-900'>{service.provider.name}</p>

            <p className='text-sm text-gray-500'>{service.provider.location}</p>
          </div>
          {service.provider.verified && ('
            <span className='text-blue-600 text-sm'>✓ Verified</span>          )}
        </div>"
        {/* Pricing */}            <p className="font-medium text-gray-900">{service.provider.name}</p>

            <p className="text-sm text-gray-500">{service.provider.location}</p>
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

=======
>>>>>>> origin/chore/fix-lint-and-merge
            <p className='font-medium text-gray-900'>{service.provider.name}</p>

            <p className='text-sm text-gray-500'>{service.provider.location}</p>
          </div>
          {service.provider.verified && ('
            <span className='text-blue-600 text-sm'>✓ Verified</span>          )}
        </div>"
        {/* Pricing */}            <p className="font-medium text-gray-900">{service.provider.name}</p>

<<<<<<< HEAD





=======
>>>>>>> origin/chore/fix-lint-and-merge
            <p className="text-sm text-gray-500">{service.provider.location}</p>
          </div>
          {service.provider.verified && ("
            <span className="text-blue-600 text-sm">✓ Verified</span>

          )}

origin/cursor/expand-services-advertise-and-build-project-c28b
        </div>
        {/* Pricing */}
<<<<<<< HEAD
        <div className='bg-gray-50 rounded-lg p-4 mb-4'>

          )}

origin/cursor/expand-services-advertise-and-build-project-c28b
        </div>
        {/* Pricing */}

<p className='font-medium text-gray-900'>{service.provider.name}</p>
            <p className='text-sm text-gray-500'>{service.provider.location}</p>
          </div>
          {service.provider.verified && (
            <span className='text-blue-600 text-sm'>✓ Verified</span>          )}'
        </div>
        {/* Pricing */}
<div className='bg-gray-50 rounded-lg p-4 mb-4'>
origin/cursor/automate-test-improve-and-merge-code-2533

            <p className="text-sm text-gray-500">{service.provider.location}</p>"
<<<<<<< HEAD
          </div>
          {service.provider.verified && (
            <span className="text-blue-600 text-sm">✓ Verified</span>"
=======
>>>>>>> merged-prs-20250907-203621
          </div>
          {service.provider.verified && ("
            <span className="text-blue-600 text-sm">✓ Verified</span>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          )}

origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
        </div>
        {/* Pricing */}
        <div className='bg-gray-50 rounded-lg p-4 mb-4'>
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

origin/cursor/expand-services-advertise-and-build-project-c28b
            {popularPlan.popular && (
              <span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">

            <p className="font-medium text-gray-900">{service.provider.name}</p>
            <p className="text-sm text-gray-500">{service.provider.location}</p>
          </div>
          {service.provider.verified && (
            <span className="text-blue-600 text-sm">✓ Verified</span>

            <p className="text-sm text-gray-500">{service && service.provider.location}</p>;
          </div>;
          {service && service.provider.verified && (;"
            <span className="text-blue-600 text-sm">✓ Verified</span>;
        </div>;

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </div>
        {/* Pricing */}
        <div className='bg-gray-50 rounded-lg p-4 mb-4'>
          <div className='text-center'>
            <div className='text-2xl font-bold text-gray-900'>
            <p className=text-sm text-gray-500>{service.provider.location}</p>
          </div>
          {service.provider.verified && ("
            <span className="text-blue-600 text-sm>✓ Verified</span>


        </div>
        {/* Pricing */}
        <div className=bg-gray-50 rounded-lg p-4 mb-4'>
          <div className='text-center>
            <div className=text-2xl font-bold text-gray-900'>
              {popularPlan.currency}
              {popularPlan.price}
              <span className='text-sm font-normal text-gray-500>
                /{popularPlan.period}
              </span>
            </div>
            {popularPlan.popular && (

              </span>
            </div>

origin/cursor/expand-services-advertise-and-build-project-c28b
            {popularPlan.popular && (
              <span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
              <span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">

            <p className=font-medium text-gray-900">{service.provider.name}</p>
            <p className="text-sm text-gray-500>{service.provider.location}</p>
          </div>
          {service.provider.verified && (
            <span className=text-blue-600 text-sm">✓ Verified</span>

            <p className="text-sm text-gray-500>{service && service.provider.location}</p>;
          </div>;
          {service && service.provider.verified && (;
            <span className="text-blue-600 text-sm">✓ Verified</span>;
        </div>;
<span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium>
<span className=bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>
origin/cursor/automate-test-improve-and-merge-code-2533
              </span>;
            ))}

                Most Popular;
              </span>;
            )}
        {/* Features Preview */}

            {service.features.slice(0, 3).map((feature, index) => (<span;
                }
                key={index}

=======
<<<<<<< HEAD

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
>>>>>>> origin/chore/fix-lint-and-merge
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

origin/cursor/expand-services-advertise-and-build-project-c28b
              <span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">

            <p className="font-medium text-gray-900">{service.provider.name}</p>
            <p className="text-sm text-gray-500">{service.provider.location}</p>
          </div>
          {service.provider.verified && (
            <span className="text-blue-600 text-sm">✓ Verified</span>

            <p className="text-sm text-gray-500">{service && service.provider.location}</p>;
          </div>;
          {service && service.provider.verified && (;"
            <span className="text-blue-600 text-sm">✓ Verified</span>;
        </div>;

=======

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
>>>>>>> origin/chore/fix-lint-and-merge
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

origin/cursor/expand-services-advertise-and-build-project-c28b
              <span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">

            <p className="font-medium text-gray-900">{service.provider.name}</p>
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <p className='font-medium text-gray-900'>{service.provider.name}</p>
            <p className='text-sm text-gray-500'>{service.provider.location}</p>
          </div>
          {service.provider.verified && (
            <span className='text-blue-600 text-sm'>✓ Verified</span>          )}
        </div>
        {/* Pricing */}            <p className="font-medium text-gray-900">{service.provider.name}</p>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <p className="text-sm text-gray-500">{service.provider.location}</p>
          </div>
          {service.provider.verified && (
            <span className="text-blue-600 text-sm">✓ Verified</span>
<<<<<<< HEAD
          )}
=======

<<<<<<< HEAD
=======
          )}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>
        </div>;
        {/* Pricing */}            <p className="font-medium text-gray-900">{service && service.provider.name}</p>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <p className="text-sm text-gray-500">{service && service.provider.location}</p>;
          </div>;
          {service && service.provider.verified && (;"
            <span className="text-blue-600 text-sm">✓ Verified</span>;
        </div>;
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD

                }



=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                Most Popular
              </span>
            )}
        {/* Features Preview */}
<div className='mb-4'>
          <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>
          <div className='flex flex-wrap gap-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
<<<<<<< HEAD
=======

<div className='mb-4'>
          <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>
          <div className='flex flex-wrap gap-2'>

=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


            {service.features.slice(0, 3).map((feature, index) => (

=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            {service.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index}
                className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs'
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
              >

        {/* Pricing */}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
              >

=======
        {/* Pricing */}
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {popularPlan.currency}{popularPlan.price}
              <span className="text-sm font-normal text-gray-500">
                /{popularPlan.period}
              </span>
            </div>
            {popularPlan.popular && (
<<<<<<< HEAD
              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">

<<<<<<< HEAD
                {feature}
=======
>>>>>>> origin/chore/fix-lint-and-merge
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

            ))}
            {service.features.length > 3 && (
<<<<<<< HEAD

=======
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            <p className="font-medium text-gray-900">{service.provider.name}</p>
            <p className="text-sm text-gray-500">{service.provider.location}</p>
          </div>
          {service.provider.verified && (
            <span className="text-blue-600 text-sm">✓ Verified</span>
          )}
        </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

                {feature}
              </span>
            )}
          </div>;
        </div>;
        {/* Features Preview */}
        <div className='mb-4'>
          <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>
          <div className='flex flex-wrap gap-2'>
            {service.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index}
                className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs'              >            {service.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
              >
                {feature}
=======
<<<<<<< HEAD
                Most Popular
>>>>>>> merged-prs-20250907-203621
              </span>
            )}
          </div>;
        </div>;
        {/* Features Preview */}

                className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs'>            {service && service.features.slice(0, 3).map((feature, index) => (;
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">;
        <div className='mb-4'>
          <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>
          <div className='flex flex-wrap gap-2'>
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index}
                className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs'              >            {service.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
              >
                {feature}
              </span>;
            ))}
            {service && service.features.length > 3 && (;
              <span className='text-gray-500 text-xs'>                +{service && service.features.length - 3} more              <span className="text-gray-500 text-xs">;
                +{service && service.features.length - 3} more;
              </span>;
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <span 
        <p className="text - gray - 600 mb - 4 line - clamp - 3">{service.description}</p>;
        {/* Provider Info */}
        <div className="flex items - center gap - 3 mb - 4">;
          <div className="w - 8 h - 8 bg - blue - 100 rounded - full flex items - center justify - center">;
            <span className="text - blue - 600 font - semibold text - sm">;
              {service.provider.name.char_at (0)}
            </span>;
          </div>;
          <div>;
            <p className='font - medium text - gray - 900'>{service.provider.name}</p>;
            <p className='text - sm text - gray - 500'>{service.provider.location}</p>;
          </div>;
          {service.provider.verified && (
            <span className='text - blue - 600 text - sm'>✓ Verified</span>          )}
        </div>;
        {/* Pricing */}            <p className="font - medium text - gray - 900">{service.provider.name}</p>;
            <p className="text - sm text - gray - 500">{service.provider.location}</p>;
          </div>;
          {service.provider.verified && (
            <span className="text - blue - 600 text - sm">✓ Verified</span>;
        </div>;
        {/* Pricing */}
        <div className='bg - gray - 50 rounded - lg p - 4 mb - 4'>;
          <div className='text - center'>;
            <div className='text - 2xl font - bold text - gray - 900'>;
              {popular_plan.currency}
              {popular_plan.price}
              <span className='text - sm font - normal text - gray - 500'>                /{popular_plan.period}
=======

<<<<<<< HEAD
                {feature}
=======
>>>>>>> origin/chore/fix-lint-and-merge
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

            ))}
            {service.features.length > 3 && (
<<<<<<< HEAD
              <span className='text-gray-500 text-xs'>                +{service.features.length - 3} more              <span className="text-gray-500 text-xs">
                +{service.features.length - 3} more
              </span>

                className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
              >
                {feature}

=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<span className='text-gray-500 text-xs>
                +{service.features.length - 3} more
              </span>
            )}
          </div>;
        </div>;
        {/* Features Preview */}
        <div className="mb-4">
          <h4 className=font-semibold text-gray-900 mb-2>Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index}
                className=bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs
              >
                {feature}

              </span>
            ))}
            {service.features.length > 3 && (
<span className='text-gray-500 text-xs'>
                +{service.features.length - 3} more
              </span>

                className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
              >
                {feature}

=======
<span className='text-gray-500 text-xs'>
                +{service.features.length - 3} more
              </span>

                className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
              >
                {feature}

>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        {/* Features Preview */}

origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
              </span>;
            </div>;
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
              </span>;
            </div>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </span>;
            </div>;
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                Most Popular;
              </span>)}
          </div>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        {/* Features Preview */}

              <span;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        {/* Features Preview */}'
        <div className='mb - 4'>;'
          <h4 className='font - semibold text - gray - 900 mb - 2'>Key Features:</h4>;'
          <div className='flex flex - wrap gap - 2'>;
            {service.features.slice (0, 3).map ((feature, index) => (
              <span;'
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className='mb-4'>;'
          <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>;'
          <div className='flex flex-wrap gap-2'>;
            {service && service.features.slice(0, 3).map((feature, index) => (;
              <span;
                key={index}
<<<<<<< HEAD
<<<<<<< HEAD

=======
                key={index}"
                className="bg - blue - 100 text - blue - 800 px - 2 py - 1 rounded text - xs";
>>>>>>> origin/chore/fix-lint-and-merge
=======
                key={index}"
                className="bg - blue - 100 text - blue - 800 px - 2 py - 1 rounded text - xs";
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
                key={index}"
=======
                className='bg - blue - 100 text - blue - 800 px - 2 py - 1 rounded text - xs'              >            {service.features.slice (0, 3).map ((feature, index) => (
              <span;
                key={index}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                className="bg - blue - 100 text - blue - 800 px - 2 py - 1 rounded text - xs";
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              >;
                {feature}
              </span>))}
            {service.features.length > 3 && (
<<<<<<< HEAD
<<<<<<< HEAD
            )}
        {/* Action Buttons */}






ursor/fix-website-loading-errors-and-merge-6662



ursor/fix-website-loading-errors-and-merge-6662
=======

ursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
<<<<<<< HEAD
            )}
        {/* Action Buttons */}
=======
        <div className='flex gap-2'>;
              <span className='text-gray-500 text-xs'>                +{service.features.length - 3} more              <span className="text-gray-500 text-xs">
                +{service.features.length - 3} more
              </span>
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
              >
                {feature}
              </span>;
            ))}
            {service.features.length > 3 && (
              <span className="text-gray-500 text-xs">
                +{service.features.length - 3} more
              </span>
            )}
          </div>
        </div>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339






ursor/fix-website-loading-errors-and-merge-6662



ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            )}
        {/* Action Buttons */}

            )}

          </div>;
        </div>;

<<<<<<< HEAD
        {/* Action Buttons */}
        <div className='flex gap-2'>


<<<<<<< HEAD
=======


=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Action Buttons */}
        <div className='flex gap-2'>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
          <button
            onClick={() => setShowDetails(!showDetails)}
            className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'          >        <div className="flex gap-2">;
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors";
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Action Buttons */}
        {/* Action Buttons */}
        <div className='flex gap-2'>


<<<<<<< HEAD


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
=======
        <div className="flex gap-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          >;
ursor/fix-website-loading-errors-and-merge-6662;
<div className='flex gap-2'>;
          <button;
=======

ursor/fix-website-loading-errors-and-merge-6662

          <button
>>>>>>> origin/chore/fix-lint-and-merge
            onClick={() => setShowDetails(!showDetails)}
            className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'          >        <div className="flex gap-2">;
          <button
            onClick={() => setShowDetails(!showDetails)}
<<<<<<< HEAD
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium "hover":bg-blue-700 transition-colors";"
          >;
ursor/fix-website-loading-errors-and-merge-6662;
<div className='flex gap-2'>;'
          <button;
            onClick={() => setShowDetails(!showDetails)}
            className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium "hover":bg-blue-700 transition-colors';'
          >;
            {showDetails ? 'Hide Details' : 'View Details'}'
          </button>;
          <a;
            href={`"tel":+13024640950`}ursor/fix-website-loading-errors-and-merge-6662;`className='bg-green-600 text-white py-2 px-4 rounded-lg font-medium "hover":bg-green-700 transition-colors';'
          >;
            Call Now;
          </a>;
        </div>;
<<<<<<< HEAD
=======
=======
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
<<<<<<< HEAD
        <div className="flex gap-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          >



<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


<div className='flex gap-2'>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'
          >
origin/cursor/automate-test-improve-and-merge-code-2533

            className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'
          >



          <button
            onClick={() => setShowDetails(!showDetails)}
            className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'          >        <div className="flex gap-2">;
          <button
            onClick={() => setShowDetails(!showDetails)}
=======
>>>>>>> origin/chore/fix-lint-and-merge
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors";
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        {/* Action Buttons */}
        {/* Action Buttons */}

        <div className="flex gap-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className=flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'          >        <div className="flex gap-2">;
          <button
            onClick={() => setShowDetails(!showDetails)}
            className=flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors;


<div className='flex gap-2>
          <button
            onClick={() => setShowDetails(!showDetails)}

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

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
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

=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

>>>>>>> origin/chore/fix-lint-and-merge
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
<div className='flex gap-2'>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'
          >
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>;
          <a
            href={`tel:+13024640950`}

<<<<<<< HEAD

=======
<<<<<<< HEAD
            className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
            className='bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors'          >            className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
            className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

className='bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors'
origin/cursor/automate-test-improve-and-merge-code-2533

<<<<<<< HEAD
<<<<<<< HEAD
=======
className='bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors'

=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

className='bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors'

            className='bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors'          >            className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
className='bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors'
          <a
            href={`tel:+13024640950`}


className='bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          >
            Call Now;
          </a>
        </div>

            className='bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors'>            className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors";
              <span className='text - gray - 500 text - xs'>                +{service.features.length - 3} more              <span className="text - gray - 500 text-xs">;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD

            className='bg-green-600 text-white py-2 px-4 rounded-lg font-medium "hover":bg-green-700 transition-colors'>            className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium "hover":bg-green-700 transition-colors";"
              <span className='text - gray - 500 text - xs'>                +{service.features.length - 3} more              <span className="text - gray - 500 text - xs">;"
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          >
            Call Now
          </Link>
        </div>
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            className='bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors'>            className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors";
              <span className='text - gray - 500 text - xs'>                +{service.features.length - 3} more              <span className="text - gray - 500 text - xs">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                +{service.features.length - 3} more;
              </span>)}
          </div>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
        {/* Action Buttons */}'
        <div className='flex gap - 2'>;
          <button;

=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        {/* Action Buttons */}

=======
        {/* Action Buttons */}'
        <div className='flex gap - 2'>;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
          <button;

=======
          <button;
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          >;
            Call Now;
          </a>;
        </div>;
<<<<<<< HEAD
=======

<<<<<<< HEAD
        {/* Detailed Information */}
        {showDetails && (

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Detailed Information */}
        {showDetails && (

        {/* Detailed Information */}
        {showDetails && (
          <div className="mt-6 pt-6 border-t border-gray-200">"
            <div className="space-y-4">"
=======
        {/* Detailed Information */}
        {showDetails && (

            <div className="space-y-4">
>>>>>>> origin/chore/fix-lint-and-merge
              {/* Benefits */}
              <div>

                    <li key={index}>{benefit}</li>

origin/cursor/expand-services-advertise-and-build-project-c28b
        {/* Detailed Information */}
        {showDetails && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="space-y-4">
              {/* Benefits */}
              <div>
                <h4 className='font-semibold text-gray-900 mb-2'>Benefits:</h4>
                <ul className='list-disc list-inside text-sm text-gray-600 space-y-1'>                  {service.benefits.slice(0, 3).map((benefit, index) => (          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="space-y-4">
              {/* Benefits */}
              <div>
<<<<<<< HEAD
                <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>;
              </div>;
              {/* Use Cases */}
              <div>
                <h4 className='font-semibold text-gray-900 mb-2'>Use Cases:</h4>
                <div className='flex flex-wrap gap-2'>
                <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.slice(0, 3).map((useCase, index) => (
                    <span 
                      key={index}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD

                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                    >
=======

<div className='mt-6 pt-6 border-t border-gray-200'>
            <div className='space-y-4'>
              {/* Benefits */}
              <div>
                <h4 className='font-semibold text-gray-900 mb-2'>Benefits:</h4>
                <ul className='list-disc list-inside text-sm text-gray-600 space-y-1'>
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index}>{benefit}</li>
<<<<<<< HEAD

origin/cursor/expand-services-advertise-and-build-project-c28b
        {/* Detailed Information */}
        {showDetails && (

<<<<<<< HEAD
        {/* Detailed Information */}
        {showDetails && (
          <div className="mt-6 pt-6 border-t border-gray-200">"
            <div className="space-y-4">"
=======
        {/* Detailed Information */}
        {showDetails && (

            <div className="space-y-4">
>>>>>>> origin/chore/fix-lint-and-merge
              {/* Benefits */}
              <div>

                    <li key={index}>{benefit}</li>

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
<<<<<<< HEAD

origin/cursor/expand-services-advertise-and-build-project-c28b
        {/* Detailed Information */}
        {showDetails && (

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


        {/* Detailed Information */}
        {showDetails && (
          <div className="mt-6 pt-6 border-t border-gray-200">
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <div className="space-y-4">
            <div className=space-y-4>
              {/* Benefits */}
              <div>

                    <li key={index}>{benefit}</li>

origin/cursor/expand-services-advertise-and-build-project-c28b
        {/* Detailed Information */}
        {showDetails && (
          <div className="mt-6 pt-6 border-t border-gray-200">
<<<<<<< HEAD
            <div className="space-y-4">
              {/* Benefits */}
              <div>
                <h4 className='font-semibold text-gray-900 mb-2'>Benefits:</h4>
                <ul className='list-disc list-inside text-sm text-gray-600 space-y-1'>                  {service.benefits.slice(0, 3).map((benefit, index) => (          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="space-y-4">
              {/* Benefits */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li key={index}>{benefit}</li>
=======
            <div className=space-y-4>
              {/* Benefits */}
              <div>

                    <li key={index}>{benefit}</li>
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  ))}
                </ul>
              </div>
              {/* Use Cases */}
              <div>
<h4 className=font-semibold text-gray-900 mb-2>Use Cases:</h4>
                <div className='flex flex-wrap gap-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
                  {service.useCases.slice(0, 3).map((useCase, index) => (
                    <span 
                      key={index}
<<<<<<< HEAD
<<<<<<< HEAD
=======

                  ))}
              {/* Technologies */}
                  {service.technologies.slice(0, 4).map((tech, index) => (
                    <span 
                      key={index}
                      className='bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs'                    >                  {service.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}

                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  {service.useCases.slice(0, 3).map((useCase, index) => (
                    <span 
                      key={index}
                  {service.useCases.slice(0, 3).map((useCase, index) => (

                    <span
}
key={index}
                      className='bg-green-100 text-green-800 px-2 py-1 rounded text-xs'                    >                  {service.useCases.slice(0, 3).map((useCase, index) => ('
                    <span
}
key={index}


                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs""
                    >
              <div>;

                      key={index}
                    <span
                  {service && service.useCases.slice(0, 3).map((useCase, index) => (;
                    <span

                  ))}
              {/* Technologies */}
                  {service.technologies.slice(0, 4).map((tech, index) => (<span;
                      }
                      key={index}
                      className='bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs'                    >                  {service.technologies.slice(0, 4).map((tech, index) => (<span;'
                      }
                      key={index}className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs";"
                      className='bg-green-100 text-green-800 px-2 py-1 rounded text-xs';'
                    >;
                  {service.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    >
                      {tech}
                    </span>;
                  ))}
              <div className="grid grid-cols-2 gap-4 text-sm">
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-2156

              <div className="grid grid-cols-2 gap-4 text-sm">
                  ))}

=======
=======
<<<<<<< HEAD
                  ))}

=======
origin/cursor/integrate-build-improve-and-re-verify-2156

              <div className="grid grid-cols-2 gap-4 text-sm">
                  ))}

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                  ))}
>>>>>>> origin/chore/fix-lint-and-merge
                </ul>;
              </div>;
              {/* Use Cases */}

<<<<<<< HEAD

                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs""
                    >
origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                </ul>;
              </div>;
              {/* Use Cases */}

                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                    >
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                    >

<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      {useCase}
                    </span>;
                  ))}

                </div>;
              </div>;
                </ul>;
              </div>;





=======
>>>>>>> origin/chore/fix-lint-and-merge
                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                    >

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      {useCase}
                    </span>;
                  ))}
                </div>;
              </div>;
              {/* Technologies */}

                      className=bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs

                    >

                      {tech}
                    </span>;
                  ))}

                </div>;
              </div>;
              {/* Deployment & Support */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              {/* Technologies */}
<<<<<<< HEAD
                      className='bg-green-100 text-green-800 px-2 py-1 rounded text-xs'                    >                  {service.useCases.slice(0, 3).map((useCase, index) => (
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
                <h4 className='font-semibold text-gray-900 mb-2'>
                  Technologies:
                </h4>
                <div className='flex flex-wrap gap-2'>
                <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 4).map((tech, index) => (
                    <span 
                      key={index}


                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
                    >
                      className='bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs'                    >                  {service.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>;
                  ))}
                </div>
              </div>
              {/* Deployment & Support */}
=======

                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
                    >

                      {tech}
                    </span>;
                  ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
              <div className="grid grid-cols-2 gap-4 text-sm">
=======

<<<<<<< HEAD

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
                  <span className="font-medium text-gray-900">Deployment:</span>
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
              <div className="grid grid-cols-2 gap-4 text-sm">
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                  <p className="text-gray-600">{service.deploymentTime}</p>
                </div>
                <div>

<<<<<<< HEAD
                  <span className="font-medium text-gray-900">Support:</span>

=======
                <div>
                  <span className='font-medium text-gray-900'>Deployment:</span>
                  <p className='text-gray-600'>{service.deploymentTime}</p>
                </div>
                <div>
>>>>>>> merged-prs-20250907-203621

<<<<<<< HEAD
              <div className='grid grid-cols-2 gap-4 text-sm'>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <span className="font-medium text-gray-900">Deployment:</span>
                  <p className="text-gray-600">{service.deploymentTime}</p>
                </div>
                <div>
<<<<<<< HEAD


                  <span className='font-medium text-gray-900'>Support:</span>
                  <p className='text-gray-600'>
                    {service.support.slice(0, 2).join(', ')}
                  </p>                </div>                <div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  <span className="font-medium text-gray-900">Deployment:</span>
>>>>>>> origin/chore/fix-lint-and-merge

                  <p className="text-gray-600">{service.deploymentTime}</p>
                </div>
                <div>
<<<<<<< HEAD

=======
=======
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  <span className="font-medium text-gray-900">Support:</span>

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <p className="text-gray-600">{service.support.slice(0, 2).join(', ')}</p>
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              {/* Deployment & Support */}
<<<<<<< HEAD
              <div className='grid grid-cols-2 gap-4 text-sm'>
                <div>
                  <span className='font-medium text-gray-900'>Deployment:</span>
                  <p className='text-gray-600'>{service.deploymentTime}</p>
=======
<div className=grid grid-cols-2 gap-4 text-sm>
origin/cursor/automate-test-improve-and-merge-code-2533

                </div>
              </div>
              {/* Deployment & Support */}
<div className='grid grid-cols-2 gap-4 text-sm'>'

                <div>

>>>>>>> merged-prs-20250907-203621
                </div>
                <div>
                <div>

              <div>;
<<<<<<< HEAD
                <h4 className='font-semibold text-gray-900 mb-2'>;
                  Technologies:;
=======

>>>>>>> merged-prs-20250907-203621
                </h4>;
                <div className='flex flex-wrap gap-2'>;
                  {service && service.technologies.slice(0, 4).map((tech, index) => (;
                    <span
                      key={index}
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">;
                      {tech}
                    </span>;
                  ))}

                <div>



<<<<<<< HEAD
=======


                <div>



<<<<<<< HEAD


                <div>



=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <span className="font-medium text-gray-900">Deployment:</span>

                  <p className="text-gray-600">{service.deploymentTime}</p>
                </div>
                <div>

<<<<<<< HEAD
                  <span className="font-medium text-gray-900">Support:</span>

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
=======








                  <span className="font-medium text-gray-900">Support:</span>

                  <p className="text-gray-600">{service.support.slice(0, 2).join(', ')}</p>
                  <span className=font-medium text-gray-900>Support:</span>

                  <p className="text-gray-600">{service.support.slice(0, 2).join(, )}</p>
                </div>
              </div>

=======
>>>>>>> merged-prs-20250907-203621
                </div>;
              </div>;
              {/* Deployment & Support */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <div className='grid grid-cols-2 gap-4 text-sm'>;
                <div>;
                  <span className=font-medium text-gray-900'>Deployment:</span>;'
                  <p className=text-gray-600>{service && service.deploymentTime}</p>;
                </div>;
                <div>;'
                  <span className='font-medium text-gray-900>Support:</span>;
                  <p className='text-gray-600'>;
                    {service && service.support.slice(0, 2).join(, ')}
                  </p>                </div>                <div>;
                  <span className=font-medium text-gray-900">Deployment:</span>;"
                  <p className=text-gray-600>{service && service.deploymentTime}</p>;
                </div>;
                <div>;"
                  <span className="font-medium text-gray-900>Support:</span>;'
                  <p className="text-gray-600">{service && service.support.slice(0, 2).join(, )}</p>;
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/chore/fix-lint-and-merge
                </div>;
              </div>;
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
              {/* All Pricing Plans */}

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              {/* All Pricing Plans */}
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Pricing Plans:</h4>
                <div className="space-y-2">
                  {Object.entries(service.pricing).map(([plan, details]) => (
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
                    <div
                      key={plan}
                      className='flex justify-between items-center text-sm'
                    >
                      <span className='capitalize font-medium'>{plan}</span>
                      <span className='text-gray-600'>
                        {details.currency}
                        {details.price}/{details.period}                      </span>                    <div key={plan} className="flex justify-between items-center text-sm">
                      <span className="capitalize font-medium">{plan}</span>
                      <span className="text-gray-600">
                        {details.currency}{details.price}/{details.period}
                      </span>
                    </div>
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
                </p>
              <div className='bg-blue-50 rounded-lg p-4 text-center'>
                <p className='text-sm text-blue-800 mb-2'>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-sm text-blue-800 mb-2">
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                  ))}
              {/* Contact CTA */}

              {/* All Pricing Plans */}

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
                  ))}
                </div>;
              </div>;

              {/* Contact CTA */}

<<<<<<< HEAD
                  ))}
              {/* Contact CTA */}
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
                  Ready to get started with {service.title}?
                </p>"
                <div className="flex gap-2 justify-center">
                  <a;`
                    href={`tel:+13024640950`}
>>>>>>> origin/chore/fix-lint-and-merge

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
<<<<<<< HEAD
                  </a>;
                  <a;
                    href={`"mailto":kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium "hover":bg-green-700 transition-colors";"ursor/fix-website-loading-errors-and-merge-6662;
className='bg-green-600 text-white px-4 py-2 rounded text-sm font-medium "hover":bg-green-700 transition-colors';'
                  >;
                    ✉️ Email Inquiry;
                  </Link>;
                </div>;
              </div>;
              </div>;
                  ))}
              {/* Contact CTA */}
              </div>;

>>>>>>> merged-prs-20250907-203621
                  ))}
              {/* Contact CTA */}

              {/* All Pricing Plans */}

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  ))}
                </div>;
              </div>;

              {/* Contact CTA */}

<<<<<<< HEAD
<<<<<<< HEAD
                  ))}
              {/* Contact CTA */}
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  Ready to get started with {service.title}?
                </p>"
                <div className="flex gap-2 justify-center">
                  <a;`
                    href={`tel:+13024640950`}
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge

                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
=======

<<<<<<< HEAD
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<div className='bg-blue-50 rounded-lg p-4 text-center'>
                <p className='text-sm text-blue-800 mb-2'>
                  Ready to get started with {service.title}?
                </p>
<<<<<<< HEAD
                <div className='flex gap-2 justify-center'>
                  <a
                    href={`tel:+13024640950`}
                    className='bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors'
origin/cursor/automate-test-improve-and-merge-code-2533
                  >
                    📞 Call +1 302 464 0950;
<<<<<<< HEAD
                  </a>;
                  <a;
                    href={`"mailto":kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium "hover":bg-green-700 transition-colors";"ursor/fix-website-loading-errors-and-merge-6662;
className='bg-green-600 text-white px-4 py-2 rounded text-sm font-medium "hover":bg-green-700 transition-colors';'
                  >;
                    ✉️ Email Inquiry;
                  </Link>;
                </div>;
              </div>;
              </div>;
                  ))}
              {/* Contact CTA */}
              </div>;

                  ))}
              {/* Contact CTA */}

              {/* All Pricing Plans */}

                  ))}

                </div>;
              </div>;


              {/* Contact CTA */}






=======
=======
<<<<<<< HEAD




=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  Ready to get started with {service.title}?
                </p>"
                <div className="flex gap-2 justify-center">
                  <a;`
                    href={`tel:+13024640950`}

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
                    className='bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors'                  >                  Ready to get started with {service.title}?
                </p>
                <div className="flex gap-2 justify-center">
                  <a
                    href={`tel:+13024640950`}
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"

                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"

                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
                  Ready to get started with {service.title}?
                </p>




                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium "hover":bg-blue-700 transition-colors""


                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"

<div className='bg-blue-50 rounded-lg p-4 text-center'>
                <p className='text-sm text-blue-800 mb-2'>
                  Ready to get started with {service.title}?
                </p>
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <div className='flex gap-2 justify-center'>
                  <a
                    href={`tel:+13024640950`}
                    className='bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors'
<<<<<<< HEAD
=======
<<<<<<< HEAD

                  >
                    📞 Call +1 302 464 0950
                  </a>
                  <a
                    href={`tel:+13024640950`}
                    className='bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors'
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<div className='bg-blue-50 rounded-lg p-4 text-center'>
                <p className=text-sm text-blue-800 mb-2>
                  Ready to get started with {service.title}?
                </p>
                <div className='flex gap-2 justify-center'>

                  <a
                    href={`tel:+13024640950`}
                    className=bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors

                  >
                    📞 Call +1 302 464 0950
                  </Link>
                  <a
                    href={`tel:+13024640950`}
                    className='bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors'
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"


>>>>>>> merged-prs-20250907-203621
origin/cursor/automate-test-improve-and-merge-code-2533
                  >
                    📞 Call +1 302 464 0950;
                  </a>
<<<<<<< HEAD
=======
                  <a;`
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
<<<<<<< HEAD

className='bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors'

=======

<<<<<<< HEAD
                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"


                    className='bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors'                  >                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"
                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"
=======

                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"


<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

className='bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors'
origin/cursor/automate-test-improve-and-merge-code-2533


className='bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors'

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <a
                    href={`tel:+13024640950`}
                    className='bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors'
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"


origin/cursor/automate-test-improve-and-merge-code-2533
                  >
<<<<<<< HEAD
                    📞 Call +1 302 464 0950;
                  </a>
                  <a;`
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}


                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"


ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

className='bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors'
origin/cursor/automate-test-improve-and-merge-code-2533


className='bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors'

                  <a
                    href={`tel:+13024640950`}
                    className='bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors'
                    className=bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"


origin/cursor/automate-test-improve-and-merge-code-2533
                  >
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

className=bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors


<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

className='bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors'

                  >
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
                  </a>
                  <a;`
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}

                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"

>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    ✉️ Email Inquiry

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  >
                    ✉️ Email Inquiry
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </Link>
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </div>
          </div>
        )}


<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge

}
}
}
}
}
}
}
}
}
<<<<<<< HEAD
}
=======
}'
>>>>>>> origin/chore/fix-lint-and-merge
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

<<<<<<< HEAD

origin/cursor/expand-services-advertise-and-build-project-c28b



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
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

}
}
}
}
}
}
}
}
}
<<<<<<< HEAD
}'
=======
<<<<<<< HEAD
}
=======
}'
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
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

<<<<<<< HEAD
=======
<<<<<<< HEAD

origin/cursor/expand-services-advertise-and-build-project-c28b



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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </div>;
    </div>;
  );  );
}
<<<<<<< HEAD
<<<<<<< HEAD
  )
}
=======
>>>>>>> origin/chore/fix-lint-and-merge

  )
}
=======
=======
<<<<<<< HEAD
  )
}
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======

  )
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621

  )
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
  )
}
<<<<<<< HEAD
  )
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
        {/* Detailed Information */}

        {show_details && (
<<<<<<< HEAD
=======
=======
        {/* Detailed Information */}

        {show_details && (
=======
<<<<<<< HEAD
  )
}
  )
}
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Detailed Information */}

        {show_details && (
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                    <li key={index}>{benefit}</li>))}
                </ul>;
              </div>;
              {/* Use Cases */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
              <div>;'
                <h4 className='font - semibold text - gray - 900 mb - 2'>Use Cases:</h4>;'
                <div className='flex flex - wrap gap - 2'>;
                  {service.use_cases.slice (0, 3).map ((use_case, index) => (
                    <span;
                      key={index}'
                      className='bg - green - 100 text - green - 800 px - 2 py - 1 rounded text - xs'                    >                  {service.use_cases.slice (0, 3).map ((use_case, index) => (
                    <span;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <div>;

                  {service.use_cases.slice (0, 3).map ((use_case, index) => (
                    <span;
                      }
                      key={index}

                    <span;
                      }
                      key={index}
=======
              <div>;'
                <h4 className='font - semibold text - gray - 900 mb - 2'>Use Cases:</h4>;'
                <div className='flex flex - wrap gap - 2'>;
                  {service.use_cases.slice (0, 3).map ((use_case, index) => (
                    <span;
                      key={index}'
                      className='bg - green - 100 text - green - 800 px - 2 py - 1 rounded text - xs'                    >                  {service.use_cases.slice (0, 3).map ((use_case, index) => (
                    <span;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                    >;
                      {use_case}
                    </span>))}
                </div>;
              </div>;
              {/* Technologies */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <div>;
                <h4 className='font - semibold text - gray - 900 mb - 2'>;'
                  "Technologies":;
                </h4>;

=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <div>;'
                <h4 className='font - semibold text - gray - 900 mb - 2'>;
                  Technologies:;
                </h4>;'
                <div className='flex flex - wrap gap - 2'>;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  {service.technologies.slice (0, 4).map ((tech, index) => (
                    <span;
                      key={index}'
                      className='bg - purple - 100 text - purple - 800 px - 2 py - 1 rounded text - xs'                    >                  {service.technologies.slice (0, 4).map ((tech, index) => (
                    <span;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      }
                      key={index}
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                    >;
                      {tech}
                    </span>))}
                </div>;
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
              {/* Deployment & Support */}
=======
=======
=======
<<<<<<< HEAD
              {/* Deployment & Support */}
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                </div>;
              </div>;
              {/* All Pricing Plans */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
              <div>;'
                <h4 className='font - semibold text - gray - 900 mb - 2'>;
                  Pricing Plans:;
                </h4>;'
                <div className='space - y-2'>;
                  {Object.entries (service.pricing).map (([plan, details]) => (
                    <div;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <div>;
                <h4 className='font - semibold text - gray - 900 mb - 2'>;'
                  Pricing "Plans":;
                </h4>;

                  {Object.entries (service.pricing).map (([plan, details]) => (
                    <div;
                      }
                      key={plan}
                      className='flex justify - between items - center text - sm';'
                    >;
=======
              <div>;'
                <h4 className='font - semibold text - gray - 900 mb - 2'>;
                  Pricing Plans:;
                </h4>;'
                <div className='space - y-2'>;
                  {Object.entries (service.pricing).map (([plan, details]) => (
                    <div;
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      key={plan}'
                      className='flex justify - between items - center text - sm';
                    >;'
                      <span className='capitalize font - medium'>{plan}</span>;'
                      <span className='text - gray - 600'>;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                        {details.currency}{details.price}/{details.period}
                    </div>))}
                </div>;
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              {/* Contact CTA */}

                  <a;
                    href={`"tel":+13024640950`}`                    className='bg - blue - 600 text - white px - 4 py - 2 rounded text - sm font - medium "hover":bg - blue - 700 transition - colors'                  >                  Ready to get started with {service.title}?;'
                </p>;

                  >;
                    📞 Call +1 302 464 0950;
                  </a>;
                  <a;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              {/* Contact CTA */}'
              <div className='bg - blue - 50 rounded - lg p - 4 text - center'>;'
                <p className='text - sm text - blue - 800 mb - 2'>;
                  Ready to get started with {service.title}?;
                </p>;'
                <div className='flex gap - 2 justify - center'>;
                  <a;`
                    href={`tel:+13024640950`}'
                    className='bg - blue - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - blue - 700 transition - colors'                  >                  Ready to get started with {service.title}?;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-20a4


=======

            </div>
          </div>
        )}
      </div>;
    </div>;
  );
}
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


=======


      </div>
    </div>
);  )
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
      </div>;
    </div>;
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> merged-prs-20250907-203621

            </div>
          </div>
        )}
      </div>;
    </div>;
  );
}

<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
<<<<<<< HEAD








=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc









>>>>>>> merged-prs-20250907-203621
      </div>
    </div>
);
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======



      </div>
    </div>
  )
}
      </div>
    </div>
  )
}
>>>>>>> merged-prs-20250907-203621
      </div>
    </div>
);

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
      </div>
    </div>
);
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
