
  SERVICE_CATEGORIES;
  ALL_SERVICES
  AI_SERVICES
  IT_SERVICES

  MICRO_SAAS_SERVICES;
  CYBERSECURITY_SERVICES;
  DATA_ANALYTICS_SERVICES;
  CLOUD_SOLUTIONS

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = ALL_SERVICES.filter(service => {
    const matchesCategory =
      selectedCategory === 'all' |service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.tags.some(tag =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;  });
  const getServicesByCategory = (categoryId: string) => {
    switch (categoryId) {    const matchesCategory = selectedCategory === 'all' |service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) |
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch
  const getServicesByCategory = (categoryId: string) => {
    switch (categoryId) {
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

                href="tel:+13024640950"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                📞 Call Now: +1 302 464 0950

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
                ziontechgroup.com

            </div>
          </div>
        </div>
      </div>
      {/* Search and Filter Section */}

                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              {SERVICE_CATEGORIES.map((category) => (
                <button
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

          {selectedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        {selectedServices.length === 0 && (

            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
      {/* Why Choose Zion Tech Group */}

              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver innovative, reliable, and cost-effective solutions that drive real business results
            </p>
          </div>

              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>
            </div>

              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-600">SOC 2, HIPAA, GDPR compliant solutions</p>
            </div>

              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Deployment</h3>
              <p className="text-gray-600">Quick setup and implementation</p>
            </div>

              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Trusted by businesses nationwide</p>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}

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

        <div className="absolute top-4 right-4">
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            {service.category}
          </span>
        </div>
        {service.aiScore && (

        )}
      </div>
      {/* Service Content */}

        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-sm">
              {service.provider.name.charAt(0)}
            </span>
          </div>
          <div>

                Most Popular
              </span>
            )}
          </div>
        </div>
        {/* Features Preview */}

            {service.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index}

            )}
          </div>
        </div>
        {/* Action Buttons */}

            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
          <a
            href={`tel:+13024640950`}

          >
            Call Now
          </Link>
        </div>
        {/* Detailed Information */}
        {showDetails && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="space-y-4">
              {/* Benefits */}
              <div>

                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
              {/* Use Cases */}
              <div>

                  {service.useCases.slice(0, 3).map((useCase, index) => (
                    <span 
                      key={index}

                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
              {/* Technologies */}
              <div>

                  {service.technologies.slice(0, 4).map((tech, index) => (
                    <span 
                      key={index}

                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* Deployment & Support */}

                <div>
                  <span className="font-medium text-gray-900">Deployment:</span>
                  <p className="text-gray-600">{service.deploymentTime}</p>
                </div>
                <div>

                  <span className="font-medium text-gray-900">Support:</span>
                  <p className="text-gray-600">{service.support.slice(0, 2).join(', ')}</p>
                </div>
              </div>
              {/* All Pricing Plans */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Pricing Plans:</h4>
                <div className="space-y-2">
                  {Object.entries(service.pricing).map(([plan, details]) => (

                  ))}
                </div>
              </div>
              {/* Contact CTA */}

                  Ready to get started with {service.title}?
                </p>
                <div className="flex gap-2 justify-center">
                  <a
                    href={`tel:+13024640950`}

                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    📞 Call +1 302 464 0950
                  </Link>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}

                  >
                    ✉️ Email Inquiry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>;
    </div>;
  );
}

