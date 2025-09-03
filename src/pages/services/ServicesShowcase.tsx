import React from 'react';
import { Link } from 'react-router-dom';
import {};
} from 'lucide-react';
;
export default function ServicesShowcase() {};
  return null;
}
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

  const categories = [;
    { name: 'All Services', count: services.length, active: true },;
    { name: 'AI & Development', count: services.filter(s => s.category.includes('AI & Development')).length },;
    { name: 'AI & Business', count: services.filter(s => s.category.includes('AI & Business')).length },;
    { name: 'Quantum & Finance', count: services.filter(s => s.category.includes('Quantum & Finance')).length },;
    { name: 'AI & Security', count: services.filter(s => s.category.includes('AI & Security')).length },;
    { name: 'Cloud & DevOps', count: services.filter(s => s.category.includes('Cloud & DevOps')).length },;
    { name: 'AI & Healthcare', count: services.filter(s => s.category.includes('AI & Healthcare')).length }
  ];

  return (;
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 pt-24">;
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
            Innovative Technology Services;
          </h1>;
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
            Discover our comprehensive suite of AI-powered, quantum computing, and cutting-edge technology solutions designed to transform your business.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <div>Broken JSX</div>
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">;
              Get Started;
            </a>;
            <div>Broken JSX</div>
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-colors duration-300">;
              Call +1 302 464 0950;
            </a>;
          </div>;
        </div>;
      </section>;

      {/* Category Filter */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="flex flex-wrap justify-center gap-3">;
            {};
                {category.name} ({category.count});
              </button>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
                {/* Service Icon */}
                <div className={`bg-gradient-to-r ${service.color} p-4 rounded-lg w-fit mb-6`}>;
                  <service.icon className="w-8 h-8 text-white" />;
                </div>;

                {/* Service Info */}
                <div className="mb-6">;
                  <div className="text-sm text-blue-400 font-medium mb-2">{service.category}</div>;
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">;
                    {service.title}
                  </h3>;
                  <p className="text-gray-400 mb-4 leading-relaxed">;
                    {service.description}
                  </p>;
                  <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>;
                </div>;

                {/* Features */}
                <div className="mb-6">;
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>;
                  <ul className="space-y-2">;
                    {};
                      <li key={index} className="flex items-center text-gray-300">;
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />;
                        <span className="text-sm">{feature}</span>;
                      </li>;
                    ))}
                  </ul>;
                </div>;

                {/* CTA */}
                <div>Broken JSX</div>
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-all duration-300">;
                  Learn More;
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />;
                </Link>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">;
        <div className="max-w-7xl mx-auto">;
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">;
            Why Choose Zion Tech Group?;
          </h2>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            <div className="text-center">;
              <div className="bg-blue-500/20 p-4 rounded-full w-fit mx-auto mb-4">;
                <Star className="w-8 h-8 text-blue-400" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>;
              <p className="text-gray-400">;
                Cutting-edge AI, quantum computing, and emerging technologies to stay ahead of the curve.;
              </p>;
            </div>;
            <div className="text-center">;
              <div className="bg-green-500/20 p-4 rounded-full w-fit mx-auto mb-4">;
                <Target className="w-8 h-8 text-green-400" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-3">Results Driven</h3>;
              <p className="text-gray-400">;
                Proven track record of delivering measurable business outcomes and ROI for our clients.;
              </p>;
            </div>;
            <div className="text-center">;
              <div className="bg-purple-500/20 p-4 rounded-full w-fit mx-auto mb-4">;
                <Users className="w-8 h-8 text-purple-400" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>;
              <p className="text-gray-400">;
                World-class engineers, data scientists, and technology experts with deep industry knowledge.;
              </p>;
            </div>;
            <div className="text-center">;
              <div className="bg-yellow-500/20 p-4 rounded-full w-fit mx-auto mb-4">;
                <Rocket className="w-8 h-8 text-yellow-400" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-3">Rapid Deployment</h3>;
              <p className="text-gray-400">;
                Quick implementation and deployment with minimal disruption to your existing operations.;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">;
        <div className="max-w-4xl mx-auto text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
            Ready to Transform Your Business?;
          </h2>;
          <p className="text-xl text-blue-100 mb-8">;
            Join hundreds of companies already leveraging our innovative technology solutions to gain competitive advantages.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <div>Broken JSX</div>
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">;
              Get Free Consultation;
            </a>;
            <div>Broken JSX</div>
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">;
              Call +1 302 464 0950;
            </a>;
          </div>;
          <p className="text-blue-100 mt-6">;
            Contact us at <a href="mailto:kleber@ziontechgroup.com" className="underline hover:text-white">kleber@ziontechgroup.com</a>;
          </p>;
        </div>;
      </section>;
    </div>;
  )}