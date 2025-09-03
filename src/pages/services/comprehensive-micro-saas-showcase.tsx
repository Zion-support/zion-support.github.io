import React from 'react';
import Link from 'next/link';
import {};
} from 'lucide-react';
import { REAL_MICRO_SAAS_SERVICES_2025 } from '../../data/realMicroSaasServices2025';
;
const ComprehensiveMicroSaasShowcase: React.FC = () => {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
}
  ];

  const featuredServices = REAL_MICRO_SAAS_SERVICES_2025.filter(service => service.featured).slice(0, 6);

  return (;
    <div className="min-h-screen bg-white">;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20 text-white">;
        <div className="max-w-7xl mx-auto px-6">;
          <div className="text-center">;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">;
              <Brain className="w-5 h-5 mr-2" />;
              Revolutionary AI-Powered Micro SAAS Solutions;
            </div>;
            <h1 className="text-5xl md:text-7xl font-bold mb-6">;
              Transform Your Business with;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">;
                AI Innovation;
              </span>;
            </h1>;
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-4xl mx-auto">;
              Discover our comprehensive suite of 20+ cutting-edge AI micro SAAS services designed to revolutionize your industry. ;
              From customer analytics to quantum computing, we provide real solutions with proven ROI.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <div>Broken JSX</div>
                className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">;
                Explore Services <ArrowRight className="w-5 h-5 ml-2" />;
              </Link>;
              <div>Broken JSX</div>
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center">;
                <Phone className="w-5 h-5 mr-2" />;
                +1 302 464 0950;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Contact Information Banner */}
      <section className="bg-gray-900 text-white py-6">;
        <div className="max-w-7xl mx-auto px-6">;
          <div className="flex flex-col md:flex-row items-center justify-between">;
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">;
              <div className="flex items-center">;
                <Mail className="w-5 h-5 mr-2 text-indigo-400" />;
                <span>kleber@ziontechgroup.com</span>;
              </div>;
              <div className="flex items-center">;
                <Phone className="w-5 h-5 mr-2 text-indigo-400" />;
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center">;
                <MapPin className="w-5 h-5 mr-2 text-indigo-400" />;
                <span>364 E Main St STE 1008, Middletown DE 19709</span>;
              </div>;
            </div>;
            <div className="mt-4 md:mt-0">;
              <div>Broken JSX</div>
                className="text-indigo-400 hover:text-indigo-300 font-semibold">;
                Visit Our Website →;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Featured Services */}
      <section id="services" className="py-20 bg-gray-50">;
        <div className="max-w-7xl mx-auto px-6">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">;
              Featured AI Solutions;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Our most popular and impactful AI-powered micro SAAS services, trusted by businesses worldwide;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">;
                <div className="flex items-center justify-between mb-4">;
                  <div className="flex items-center">;
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">;
                      <Brain className="w-6 h-6 text-indigo-600" />;
                    </div>;
                    <div className="ml-3">;
                      <div className="flex items-center">;
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />;
                        <span className="ml-1 text-sm text-gray-600">{service.rating}</span>;
                        <span className="ml-1 text-sm text-gray-500">({service.reviewCount})</span>;
                      </div>;
                    </div>;
                  </div>;
                  <div className="text-right">;
                    <div className="text-2xl font-bold text-indigo-600">{service.currency}{service.price}</div>;
                    <div className="text-sm text-gray-500">/{service.pricingModel}</div>;
                  </div>;
                </div>;

                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>;
                <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>;

                <div className="mb-4">;
                  <div className="text-sm text-gray-500 mb-2">Key Benefits:</div>;
                  <ul className="space-y-1">;
                    {};
                      <li key={index} className="flex items-start text-sm text-gray-600">;
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />;
                        {benefit}
                      </li>;
                    ))}
                  </ul>;
                </div>;

                <div className="mb-4">;
                  <div className="text-sm text-gray-500 mb-2">ROI:</div>;
                  <div className="text-sm font-semibold text-green-600">{service.roi}</div>;
                </div>;

                <div className="flex flex-col sm:flex-row gap-2">;
                  <div>Broken JSX</div>
                    className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-center text-sm font-medium">;
                    Learn More;
                  </Link>;
                  <div>Broken JSX</div>
                    className="flex-1 px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors text-center text-sm font-medium">;
                    Contact Us;
                  </Link>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Service Categories */}
      <section className="py-20 bg-white">;
        <div className="max-w-7xl mx-auto px-6">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">;
              Complete Service Categories;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Explore our comprehensive range of AI-powered solutions across 12 specialized categories;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">;
            {};
                <div key={category.name} className={`${category.bgColor} rounded-xl p-6 hover:shadow-lg transition-shadow`}>;
                  <div className="flex items-center mb-4">;
                    <IconComponent className={`w-8 h-8 ${category.color} mr-3`} />;
                    <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>;
                  </div>;
                  <p className="text-sm text-gray-600 mb-4">;
                    {category.services.length} specialized solutions;
                  </p>;
                  <div className="space-y-2">;
                    {};
                      <div key={service.id} className="text-sm">;
                        <div>Broken JSX</div>
                          className="text-gray-700 hover:text-indigo-600 transition-colors">;
                          {service.title}
                        </Link>;
                        <div className="text-xs text-gray-500">{service.currency}{service.price}/{service.pricingModel}</div>;
                      </div>;
                    ))}
                  </div>;
                  {};
                      +{category.services.length - 3} more services;
                    </div>;
                  )}
                </div>;
              )})}
          </div>;
        </div>;
      </section>;

      {/* Market Pricing Comparison */}
      <section className="py-20 bg-gray-50">;
        <div className="max-w-7xl mx-auto px-6">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">;
              Competitive Market Pricing;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Our AI solutions offer exceptional value with transparent, competitive pricing;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
              <div key={service.id} className="bg-white rounded-xl shadow-lg p-6">;
                <div className="flex items-center justify-between mb-4">;
                  <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>;
                  <div className="text-right">;
                    <div className="text-2xl font-bold text-indigo-600">{service.currency}{service.price}</div>;
                    <div className="text-sm text-gray-500">/{service.pricingModel}</div>;
                  </div>;
                </div>;

                <div className="mb-4">;
                  <div className="text-sm text-gray-500 mb-2">Market Price Range:</div>;
                  <div className="text-sm font-semibold text-gray-700">{service.marketPrice}</div>;
                </div>;

                <div className="mb-4">;
                  <div className="text-sm text-gray-500 mb-2">Implementation Time:</div>;
                  <div className="text-sm font-semibold text-gray-700">{service.implementationTime}</div>;
                </div>;

                <div className="mb-4">;
                  <div className="text-sm text-gray-500 mb-2">Expected ROI:</div>;
                  <div className="text-sm font-semibold text-green-600">{service.roi}</div>;
                </div>;

                <div className="flex items-center justify-between">;
                  <div className="flex items-center">;
                    <Award className="w-4 h-4 text-yellow-500 mr-1" />;
                    <span className="text-sm text-gray-600">AI Score: {service.aiScore}/100</span>;
                  </div>;
                  <div>Broken JSX</div>
                    className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">;
                    View Details →;
                  </Link>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-white">;
        <div className="max-w-7xl mx-auto px-6">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">;
              Why Choose Zion Tech Group?;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              We deliver cutting-edge AI solutions with proven results and exceptional support;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            <div className="text-center">;
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                <Zap className="w-8 h-8 text-indigo-600" />;
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>;
              <p className="text-gray-600">Average 300-500% ROI within 6 months across all our AI solutions</p>;
            </div>;

            <div className="text-center">;
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                <Clock className="w-8 h-8 text-green-600" />;
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Implementation</h3>;
              <p className="text-gray-600">Most solutions deployed within 2-8 weeks with minimal disruption</p>;
            </div>;

            <div className="text-center">;
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                <Shield className="w-8 h-8 text-purple-600" />;
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>;
              <p className="text-gray-600">SOC 2 compliant with enterprise-grade security and data protection</p>;
            </div>;

            <div className="text-center">;
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                <Users className="w-8 h-8 text-orange-600" />;
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>;
              <p className="text-gray-600">24/7 support from our team of AI and industry experts</p>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">;
        <div className="max-w-4xl mx-auto px-6 text-center">;
          <h2 className="text-4xl md:text-5xl font-bold mb-6">;
            Ready to Transform Your Business?;
          </h2>;
          <p className="text-xl text-indigo-100 mb-8">;
            Join hundreds of companies already using our AI solutions to drive growth and innovation;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <div>Broken JSX</div>
              className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">;
              <Phone className="w-5 h-5 mr-2" />;
              Call +1 302 464 0950;
            </Link>;
            <div>Broken JSX</div>
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center">;
              <Mail className="w-5 h-5 mr-2" />;
              Email Us;
            </Link>;
          </div>;
          <div className="mt-8 text-indigo-200">;
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>;
            <p>🌐 <Link href="https://ziontechgroup.com" className="hover:text-white">ziontechgroup.com</Link></p>;
          </div>;
        </div>;
      </section>;
    </div>;
  )}
export default ComprehensiveMicroSaasShowcase;