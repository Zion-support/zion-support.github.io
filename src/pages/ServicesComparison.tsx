import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {};
} from 'lucide-react';
;
interface Service {};
}
;
export default function ServicesComparison() {};
  return null;
}
},;
    {};
},;
    {};
},;
    // IT Services;
    {};
},;
    {};
},;
    // Micro SaaS;
    {};
},;
    {};
}
  ];
;
  const filteredServices = services.filter(service => {};
});
;
  const categories = [...new Set(services.map(service => service.category))];
;
  const toggleService = (serviceId: string) => {};
};
;
  return (;
    <div className="min-h-screen bg-zion-blue pt-20">;
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">;
          <div>Broken JSX</div>
            className="text-center">;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Services Comparison;
            </h1>;
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">;
              Compare our services side by side to find the perfect solution for your business needs;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <div>Broken JSX</div>
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:-translate-y-1">;
                Get Expert Advice;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </Link>;
              <div>Broken JSX</div>
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">;
                View All Services;
              </Link>;
            </div>;
          </motion.div>;
        </div>;

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">;
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/20 rounded-full blur-3xl"></div>;
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/20 rounded-full blur-3xl"></div>;
        </div>;
      </section>;

      {/* Service Selection */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark">;
        <div className="max-w-7xl mx-auto">;
          <div className="mb-8">;
            <h2 className="text-3xl font-bold text-white mb-4">Select Services to Compare</h2>;
            <p className="text-zion-slate-light">Choose up to 4 services to compare side by side</p>;
          </div>;

          {/* Filters */}
          <div className="mb-8">;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
              <div className="relative">;
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />;
                <div>Broken JSX</div>
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-zion-blue-darker border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent";
                />;
              </div>;
              <div>;
                <div>Broken JSX</div>
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-zion-blue-darker border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent">;
                  <option value="all">All Categories</option>;
                  {};
                    <option key={category} value={category}>{category}</option>;
                  ))}
                </select>;
              </div>;
              <div className="text-right">;
                <span className="text-zion-slate-light">;
                  {selectedServices.length}/4 services selected;
                </span>;
              </div>;
            </div>;
          </div>;

          {/* Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {};
                  onClick={() => toggleService(service.id)}
                >;
                  <div>Broken JSX</div>
}`}>;
                    {/* Selection Indicator */}
                    <div className="absolute top-4 right-4">;
                      {};
                      )}
                    </div>;

                    {/* Service Header */}
                    <div className="flex items-center mb-4">;
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mr-4`}>;
                        <Icon className="w-6 h-6 text-white" />;
                      </div>;
                      <div>;
                        <h3 className="text-lg font-semibold text-white">{service.title}</h3>;
                        <p className="text-sm text-zion-slate-light">{service.subcategory}</p>;
                      </div>;
                    </div>;

                    {/* Description */}
                    <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">;
                      {service.description}
                    </p>;

                    {/* Key Info */}
                    <div className="space-y-2 mb-4">;
                      <div className="flex justify-between text-sm">;
                        <span className="text-zion-slate-light">Price:</span>;
                        <span className="text-white font-semibold">${service.price.toLocaleString()}/mo</span>;
                      </div>;
                      <div className="flex justify-between text-sm">;
                        <span className="text-zion-slate-light">Rating:</span>;
                        <div className="flex items-center">;
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />;
                          <span className="text-white ml-1">{service.rating}</span>;
                        </div>;
                      </div>;
                      <div className="flex justify-between text-sm">;
                        <span className="text-zion-slate-light">Complexity:</span>;
                        <div>Broken JSX</div>
}`}>;
                          {service.complexity}
                        </span>;
                      </div>;
                    </div>;

                    {/* Category Badge */}
                    <div className="flex justify-between items-center">;
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">;
                        {service.category}
                      </span>;
                      <div>Broken JSX</div>
                        onClick={(e) => e.stopPropagation()}
                      >;
                        Learn More →;
                      </Link>;
                    </div>;
                  </div>;
                </motion.div>;
              )})}
          </div>;
        </div>;
      </section>;

      {/* Comparison Table */}
      {};
                        <th key={service.id} className="px-6 py-4 text-center">;
                          <div className="flex flex-col items-center">;
                            <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-2`}>;
                              <service.icon className="w-8 h-8 text-white" />;
                            </div>;
                            <h3 className="text-white font-semibold text-sm">{service.title}</h3>;
                            <p className="text-zion-slate-light text-xs">{service.subcategory}</p>;
                          </div>;
                        </th>;
                      ))}
                    </tr>;
                  </thead>;
                  <tbody className="divide-y divide-zion-purple/20">;
                    {/* Price */}
                    <tr>;
                      <td className="px-6 py-4 text-zion-cyan font-semibold">Monthly Price</td>;
                      {};
                        <td key={service.id} className="px-6 py-4 text-center">;
                          <div className="text-2xl font-bold text-white">${service.price.toLocaleString()}</div>;
                          <div className="text-zion-slate-light text-sm">per month</div>;
                        </td>;
                      ))}
                    </tr>;

                    {/* Rating */}
                    <tr>;
                      <td className="px-6 py-4 text-zion-cyan font-semibold">Rating</td>;
                      {};
                        <td key={service.id} className="px-6 py-4 text-center">;
                          <div className="flex items-center justify-center">;
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />;
                            <span className="text-white ml-2 font-semibold">{service.rating}</span>;
                          </div>;
                        </td>;
                      ))}
                    </tr>;

                    {/* Complexity */}
                    <tr>;
                      <td className="px-6 py-4 text-zion-cyan font-semibold">Complexity</td>;
                      {};
                        <td key={service.id} className="px-6 py-4 text-center">;
                          <div>Broken JSX</div>
}`}>;
                            {service.complexity}
                          </span>;
                        </td>;
                      ))}
                    </tr>;

                    {/* Scalability */}
                    <tr>;
                      <td className="px-6 py-4 text-zion-cyan font-semibold">Scalability</td>;
                      {};
                        <td key={service.id} className="px-6 py-4 text-center">;
                          <span className="text-white font-medium">{service.scalability}</span>;
                        </td>;
                      ))}
                    </tr>;

                    {/* Delivery Time */}
                    <tr>;
                      <td className="px-6 py-4 text-zion-cyan font-semibold">Delivery Time</td>;
                      {};
                        <td key={service.id} className="px-6 py-4 text-center">;
                          <div className="flex items-center justify-center">;
                            <Clock className="w-4 h-4 text-zion-slate-light mr-2" />;
                            <span className="text-white">{service.estimatedDelivery}</span>;
                          </div>;
                        </td>;
                      ))}
                    </tr>;

                    {/* ROI */}
                    <tr>;
                      <td className="px-6 py-4 text-zion-cyan font-semibold">Expected ROI</td>;
                      {};
                        <td key={service.id} className="px-6 py-4 text-center">;
                          <div className="text-green-400 font-semibold">{service.roi}</div>;
                        </td>;
                      ))}
                    </tr>;

                    {/* Features */}
                    <tr>;
                      <td className="px-6 py-4 text-zion-cyan font-semibold">Key Features</td>;
                      {};
                        <td key={service.id} className="px-6 py-4">;
                          <ul className="space-y-2">;
                            {};
                              <li key={idx} className="flex items-start">;
                                <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 mr-2 flex-shrink-0" />;
                                <span className="text-white text-sm">{feature}</span>;
                              </li>;
                            ))}
                            {};
                                +{service.features.length - 4} more features;
                              </li>;
                            )}
                          </ul>;
                        </td>;
                      ))}
                    </tr>;

                    {/* Pros */}
                    <tr>;
                      <td className="px-6 py-4 text-zion-cyan font-semibold">Pros</td>;
                      {};
                        <td key={service.id} className="px-6 py-4">;
                          <ul className="space-y-2">;
                            {};
                              <li key={idx} className="flex items-start">;
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />;
                                <span className="text-white text-sm">{pro}</span>;
                              </li>;
                            ))}
                          </ul>;
                        </td>;
                      ))}
                    </tr>;

                    {/* Cons */}
                    <tr>;
                      <td className="px-6 py-4 text-zion-cyan font-semibold">Cons</td>;
                      {};
                        <td key={service.id} className="px-6 py-4">;
                          <ul className="space-y-2">;
                            {};
                              <li key={idx} className="flex items-start">;
                                <X className="w-4 h-4 text-red-400 mt-0.5 mr-2 flex-shrink-0" />;
                                <span className="text-white text-sm">{con}</span>;
                              </li>;
                            ))}
                          </ul>;
                        </td>;
                      ))}
                    </tr>;

                    {/* Best For */}
                    <tr>;
                      <td className="px-6 py-4 text-zion-cyan font-semibold">Best For</td>;
                      {};
                        <td key={service.id} className="px-6 py-4">;
                          <ul className="space-y-1">;
                            {};
                              <li key={idx} className="text-white text-sm">• {target}</li>;
                            ))}
                          </ul>;
                        </td>;
                      ))}
                    </tr>;
                  </tbody>;
                </table>;
              </div>;
            </div>;
          </div>;
        </section>;
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <div>Broken JSX</div>
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
              Need Help Choosing?;
            </h2>;
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">;
              Our experts can help you select the right service based on your specific business needs and requirements;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <div>Broken JSX</div>
                className="inline-flex items-center px-8 py-4 bg-white text-zion-purple font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300 transform hover:-translate-y-1">;
                Schedule Consultation;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </Link>;
              <div>Broken JSX</div>
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-purple transition-all duration-300">;
                Get Expert Advice;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  )}