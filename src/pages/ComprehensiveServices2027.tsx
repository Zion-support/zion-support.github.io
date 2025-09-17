import React from 'react';
import { Helmet } from 'react-helmet-async';
const ComprehensiveServices2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>ComprehensiveServices2027 | Zion Tech Group</title>
        <meta name="description" content="ComprehensiveServices2027 - Revolutionary technology solutions" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div
              className="text-center"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🚀 COMPREHENSIVE SERVICES • 2027
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Comprehensive Services 2027
              </h1>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                Complete technology solutions for the future. From AI and quantum computing to space technology and neural interfaces.
              </p>
            </div>
          </div>
        </div>
        {/* Services by Category */}
        <div className="container mx-auto px-4 py-20">
          {services.map((category, categoryIndex) => (
            <div
              key={category.category}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">{category.category}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={service.name}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                    <p className="text-blue-100 mb-6">{service.description}</p>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <span className="text-blue-300 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-4">{service.price}</div>
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                        Get Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Testimonials */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                What our clients say about our revolutionary services
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-6">"{testimonial.content}"</p>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-blue-300">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our revolutionary services can transform your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Schedule Consultation →
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};


export default ComprehensiveServices2027;
