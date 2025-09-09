import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {};
} from 'lucide-react';
;
const AIServices: React.FC = () => {};
},;
    {};
},;
    {};
},;
    {};
}
  ];

  const featuredAIServices = [;
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

  const aiSolutions = [;
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

  const pricingTiers = [;
    {};
},;
    {};
},;
    {};
}
  ];

  return (;
    <>;
      <Helmet>;
        <title>AI Services & Solutions - Zion Tech Group</title>;
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, predictive analytics, and AI-powered automation solutions." />;
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, predictive analytics, AI chatbots, artificial intelligence solutions" />;
      </Helmet>;

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">;
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">;
          <div className="absolute inset-0 bg-black opacity-50"></div>;
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center">;
              <div className="flex justify-center mb-6">;
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">;
                  <Brain className="h-10 w-10 text-white" />;
                </div>;
              </div>;
              <h1 className="text-5xl md:text-6xl font-bold mb-6">;
                AI Services & Solutions;
              </h1>;
              <p className="text-xl md:text-2xl mb-8 text-gray-200">;
                Transform your business with cutting-edge artificial intelligence and machine learning solutions;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <div>Broken JSX</div>
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">;
                  Get AI Consultation;
                  <ArrowRight className="ml-2 h-5 w-5" />;
                </Link>;
                <div>Broken JSX</div>
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors">;
                  View All Services;
                </Link>;
              </div>;
            </div>;
          </div>;
        </section>;

        {/* AI Service Categories */}
        <section className="py-20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-16">;
              <h2 className="text-4xl font-bold text-gray-900 mb-4">;
                AI Service Categories;
              </h2>;
              <p className="text-xl text-gray-600">;
                Comprehensive artificial intelligence solutions across all major domains;
              </p>;
            </div>;

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {};
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">;
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6`}>;
                    <category.icon className="h-8 w-8 text-white" />;
                  </div>;
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">;
                    {category.name}
                  </h3>;
                  <p className="text-gray-600 mb-6">;
                    {category.description}
                  </p>;
                  <div className="mb-6">;
                    <p className="text-sm text-gray-500 mb-3">;
                      {category.count} Solutions Available;
                    </p>;
                    <ul className="space-y-2">;
                      {};
                        <li key={solutionIndex} className="flex items-center text-sm text-gray-600">;
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />;
                          {solution}
                        </li>;
                      ))}
                    </ul>;
                    {};
                        +{category.solutions.length - 3} more solutions;
                      </p>;
                    )}
                  </div>;
                  <div>Broken JSX</div>
                    className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold">;
                    Learn More;
                    <ArrowRight className="ml-1 h-4 w-4" />;
                  </Link>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* Featured AI Services */}
        <section className="py-20 bg-white">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-16">;
              <h2 className="text-4xl font-bold text-gray-900 mb-4">;
                Featured AI Services;
              </h2>;
              <p className="text-xl text-gray-600">;
                Our most popular and impactful AI solutions;
              </p>;
            </div>;

            <div className="grid lg:grid-cols-3 gap-8">;
              {};
                <div key={index} className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 ${service.popular ? 'ring-2 ring-cyan-500' : ''}`}>;
                  {};
                  )}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>;
                    <Brain className="h-8 w-8 text-white" />;
                  </div>;

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">;
                    {service.title}
                  </h3>;

                  <p className="text-gray-600 mb-6">;
                    {service.description}
                  </p>;

                  <div className="mb-6">;
                    <p className="text-3xl font-bold text-gray-900 mb-2">;
                      {service.price}
                    </p>;
                    <ul className="space-y-2">;
                      {};
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">;
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />;
                          {feature}
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                  ;
                  <div>Broken JSX</div>
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center">;
                    Get Started;
                    <ArrowRight className="ml-2 h-4 w-4" />;
                  </Link>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* AI Solutions Grid */}
        <section className="py-20 bg-gray-50">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-16">;
              <h2 className="text-4xl font-bold text-gray-900 mb-4">;
                AI Solutions Portfolio;
              </h2>;
              <p className="text-xl text-gray-600">;
                Comprehensive AI solutions tailored to your business needs;
              </p>;
            </div>;

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {};
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">;
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6`}>;
                    <solution.icon className="h-8 w-8 text-white" />;
                  </div>;

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">;
                    {solution.name}
                  </h3>;

                  <p className="text-gray-600 mb-6">;
                    {solution.description}
                  </p>;

                  <div className="mb-6">;
                    <p className="text-2xl font-bold text-gray-900 mb-4">;
                      {solution.price}
                    </p>;
                    <ul className="space-y-2">;
                      {};
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">;
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />;
                          {feature}
                        </li>;
                      ))}
                    </ul>;
                  </div>;

                  <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">;
                    Learn More;
                  </button>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* Pricing Section */}
        <section className="py-20 bg-white">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-16">;
              <h2 className="text-4xl font-bold text-gray-900 mb-4">;
                AI Services Pricing;
              </h2>;
              <p className="text-xl text-gray-600">;
                Transparent pricing for AI solutions that scale with your business;
              </p>;
            </div>;

            <div className="grid md:grid-cols-3 gap-8">;
              {};
                <div key={index} className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 ${tier.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>;
                  {};
                  )}
                  <div className="text-center mb-8">;
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">;
                      {tier.name}
                    </h3>;
                    <p className="text-gray-600 mb-4">;
                      {tier.description}
                    </p>;
                    <div className="flex items-baseline justify-center">;
                      <span className="text-4xl font-bold text-gray-900">;
                        {tier.price}
                      </span>;
                      <span className="text-gray-600 ml-1">;
                        {tier.period}
                      </span>;
                    </div>;
                  </div>;

                  <ul className="space-y-4 mb-8">;
                    {};
                      <li key={featureIndex} className="flex items-center text-gray-600">;
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />;
                        {feature}
                      </li>;
                    ))}
                  </ul>;
                  ;
                  <div>Broken JSX</div>
}`}>;
                    {tier.cta}
                  </button>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-16">;
              <h2 className="text-4xl font-bold mb-4">;
                Ready to Harness the Power of AI?;
              </h2>;
              <p className="text-xl text-gray-200">;
                Get in touch with our AI experts for a free consultation;
              </p>;
            </div>;

            <div className="grid md:grid-cols-3 gap-8 mb-12">;
              <div className="text-center">;
                <Phone className="h-12 w-12 text-cyan-400 mx-auto mb-4" />;
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>;
                <p className="text-gray-200">+1 302 464 0950</p>;
              </div>;
              <div className="text-center">;
                <Mail className="h-12 w-12 text-cyan-400 mx-auto mb-4" />;
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>;
                <p className="text-gray-200">kleber@ziontechgroup.com</p>;
              </div>;
              <div className="text-center">;
                <MapPin className="h-12 w-12 text-cyan-400 mx-auto mb-4" />;
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>;
                <p className="text-gray-200">364 E Main St STE 1008<br />Middletown DE 19709</p>;
              </div>;
            </div>;

            <div className="text-center">;
              <div>Broken JSX</div>
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center">;
                Schedule AI Consultation;
                <ArrowRight className="ml-2 h-5 w-5" />;
              </Link>;
            </div>;
          </div>;
        </section>;
      </div>;
    </>;
  )}
export default AIServices;