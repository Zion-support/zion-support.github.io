


SERVICE_CATEGORIES;
  ALL_SERVICES
  AI_SERVICES
  IT_SERVICES
import React, { useState } from 'react';


import { SERVICE_CATEGORIES;
  ALL_SERVICES;
  AI_SERVICES;
  IT_SERVICES;






  const getServicesByCategory = $2;
      case 'it-services: return IT_SERVICES,
      case micro-saas': return MICRO_SAAS_SERVICES,
      case 'cybersecurity: return CYBERSECURITY_SERVICES,
      case data-analytics': return DATA_ANALYTICS_SERVICES,
      case 'cloud-solutions: return CLOUD_SOLUTIONS,
      default: return ALL_SERVICES

    }
  },

  const selectedServices = selectedCategory === 'all' ? filteredServices : getServicesByCategory($2);
  return (

                className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors'              >    }
  }
  const selectedServices = selectedCategory === 'all' ? filteredServices : getServicesByCategory(selectedCategory);

                className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors'
origin/cursor/automate-test-improve-and-merge-code-2533
              >


import React, { useState } from 'react',;

                className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors'              >    }
  }
  const selectedServices = selectedCategory === 'all' ? filteredServices : getServicesByCategory(selectedCategory);


import {
  SERVICE_CATEGORIES,
  ALL_SERVICES,
  AI_SERVICES,
  IT_SERVICES,
  MICRO_SAAS_SERVICES,
  CYBERSECURITY_SERVICES,





export function ServicesPage() {;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const getServicesByCategory = (categoryId: string) => {;
    switch (categoryId) {    const matchesCategory = selectedCategory === 'all' || service && service.category === selectedCategory;

  const getServicesByCategory = (categoryId: string) => {;
    switch (categoryId) {;
      case 'ai-services':;


              >



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

              <span>364 E Main St STE 1008, Middletown DE 19709</span>

            </div>

              <span>kleber@ziontechgroup.com</span>
            </div>

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b







                ziontechgroup.com;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;






              {SERVICE_CATEGORIES.map((category) => (

      {/* Search and Filter Section */}






              {SERVICE_CATEGORIES.map(category => (









            <ServiceCard key={service.id} service={service} />

            </div>;
          </div>;
        </div>;

        {/* Services Grid */}



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




            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>





              We deliver innovative, reliable, and cost-effective solutions that drive real business results

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🚀</span>

          




              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>

            </div>




            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>



            </div>










            </h2>








              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>
            </div>"
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>


              <p className="text-gray-600">Trusted by businesses nationwide</p>


















            </div>;
          </div>;
        </div>;
      </div>;




interface ServiceCardProps {;
  service: ServiceSolution;





  service: ServiceSolution;



    return service.pricing.professional;

  };

  const getPopularPlan = () => {;
    if (service && service.pricing.professional && professional.popular);
      return service && service.pricing.professional;





















        )}
      </div>
      {/* Service Content */}










            <span className='text-blue-600 font-semibold text-sm'>

            <span className="text-blue-600 font-semibold text-sm">
            <span className='text-blue-600 font-semibold text-sm'>
origin/cursor/automate-test-improve-and-merge-code-2533








<div className='mb-4'>
          <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>
          <div className='flex flex-wrap gap-2'>
origin/cursor/automate-test-improve-and-merge-code-2533


              >




              </span>;
            </div>;














            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"



ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
<div className='flex gap-2'>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'
          >
origin/cursor/automate-test-improve-and-merge-code-2533










          >
            Call Now
          </Link>
        </div>




            className='bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors'>            className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors";
              <span className='text - gray - 500 text - xs'>                +{service.features.length - 3} more              <span className="text - gray - 500 text - xs">;








<div className='mt-6 pt-6 border-t border-gray-200'>
            <div className='space-y-4'>
              {/* Benefits */}
              <div>
                <h4 className='font-semibold text-gray-900 mb-2'>Benefits:</h4>
                <ul className='list-disc list-inside text-sm text-gray-600 space-y-1'>
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index}>{benefit}</li>

              <div>
<h4 className=font-semibold text-gray-900 mb-2>Use Cases:</h4>
                <div className='flex flex-wrap gap-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
                  {service.useCases.slice(0, 3).map((useCase, index) => (
                    <span 
                      key={index}



                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                    >



<div className=grid grid-cols-2 gap-4 text-sm>
origin/cursor/automate-test-improve-and-merge-code-2533
<div className='grid grid-cols-2 gap-4 text-sm'>'

                <div>


                </div>
                <div>
                <div>

              <div>;



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






                <div>




                  <span className="font-medium text-gray-900">Deployment:</span>

                  <p className="text-gray-600">{service.deploymentTime}</p>
                </div>
                <div>










                  <span className="font-medium text-gray-900">Support:</span>

                  <p className="text-gray-600">{service.support.slice(0, 2).join(', ')}</p>
                  <span className=font-medium text-gray-900>Support:</span>

                  <p className="text-gray-600">{service.support.slice(0, 2).join(, )}</p>
                </div>
              </div>


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




                    ✉️ Email Inquiry



                  >
                    ✉️ Email Inquiry

                  </Link>
                </div>
              </div>














                    >;
                      {use_case}
                    </span>))}
                </div>;
              </div>;
              {/* Technologies */}


                  {service.technologies.slice (0, 4).map ((tech, index) => (
                    <span;
                      key={index}'
                      className='bg - purple - 100 text - purple - 800 px - 2 py - 1 rounded text - xs'                    >                  {service.technologies.slice (0, 4).map ((tech, index) => (
                    <span;



                    >;
                      {tech}
                    </span>))}
                </div>;
              </div>;



                </div>;
              </div>;
              {/* All Pricing Plans */}



                        {details.currency}{details.price}/{details.period}
                    </div>))}
                </div>;
              </div>;



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







ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b






