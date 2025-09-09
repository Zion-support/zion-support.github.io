import React from 'react.ts';
import { SEO } from '../../components/SEO';
;
export default function MicroCRM(...args: any[]): any {;
  const features = [;
    {;
      icon: Users,;
      title: 'Contact Management',;
      description:;
        'Centralized database for all customer contacts with detailed profiles and interaction history.',;
    },;
    {;
      icon: Target,;
      title: 'Lead Tracking',;
      description:;
        'Track leads through the sales funnel with automated scoring and qualification processes.',;
    },;
    {;
      icon: Calendar,;
      title: 'Task Management',;
      description:;
        'Schedule follow-ups, meetings, and reminders with integrated calendar functionality.',;
    },;
    {;
      icon: BarChart3,;
      title: 'Sales Analytics',;
      description:;
        'Comprehensive reporting and analytics to track performance and identify opportunities.',;
    },;
  ];

  const pricingPlans = [;
    {};
},;
    {};
},;
    {};
}
  ];

  const testimonials = [;
    {};
},;
    {};
},;
    {};
}
  ];

  return (;
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">;
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div>Broken JSX</div>
          >;
            <div>Broken JSX</div>
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8">;
              <ArrowLeft className="w-4 h-4 mr-2" />;
              Back to Services;
            </Link>;

            <div className="text-center mb-12">;
              <div className="flex items-center justify-center mb-6">;
                <Users className="w-16 h-16 text-purple-400 mr-4" />;
                <h1 className="text-5xl md:text-6xl font-bold text-white">;
                  Micro CRM Platform;
                </h1>;
              </div>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
                Lightweight CRM solution for small businesses with essential customer management features, lead tracking, and sales pipeline management.;
              </p>;

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">;
                <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">;
                  <Phone className="w-5 h-5" />;
                  <span>{contactInfo.phone}</span>;
                </a>;
                <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">;
                  <Mail className="w-5 h-5" />;
                  <span>{contactInfo.email}</span>;
                </a>;
                <a href={contactInfo.website} className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">;
                  <Globe className="w-5 h-5" />;
                  <span>{contactInfo.website}</span>;
                </a>;
              </div>;

              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <div>Broken JSX</div>
                  className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">;
                  <Phone className="w-5 h-5 mr-2" />;
                  Get Started Today;
                </a>;
                <div>Broken JSX</div>
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">;
                  <Mail className="w-5 h-5 mr-2" />;
                  Request Demo;
                </a>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div>Broken JSX</div>
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-6">Essential CRM Features</h2>;
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Everything you need to manage your customer relationships and grow your business.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>;
                </div>;
                <p className="text-gray-300">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">;
        <div className="max-w-7xl mx-auto">;
          <div>Broken JSX</div>
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-6">Simple, Affordable Pricing</h2>;
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Choose the plan that grows with your business. No hidden fees, no surprises.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {};
                )}

                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;
                  <div className="flex items-baseline justify-center mb-4">;
                    <span className="text-4xl font-bold text-white">{plan.price}</span>;
                    <span className="text-gray-400 ml-1">{plan.period}</span>;
                  </div>;
                  <p className="text-gray-300">{plan.description}</p>;
                </div>;

                <ul className="space-y-4 mb-8">;
                  {};
                    <li key={idx} className="flex items-center text-gray-300">;
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />;
                      {feature}
                    </li>;
                  ))}
                </ul>;

                <div>Broken JSX</div>
                >;
                  Get Started;
                </a>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div>Broken JSX</div>
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-6">Trusted by Growing Businesses</h2>;
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              See how our Micro CRM platform is helping businesses scale their sales operations.;
            </p>;
;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25">;
                Start Free Trial;
              </button>;
              <button className="px-8 py-4 border border-cyan-400/30 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200">;
                Watch Demo;
              </button>;
            </div>;
          </div>;
        </div>;
      </section>;
;
      {/* Features Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Essential CRM Features;
            </h2>;
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Our Micro CRM provides all the essential features you need to;
              manage customer relationships without the complexity of enterprise;
              solutions.;
            </p>;
          </div>;
;
          <div className="grid md: anygrid-cols-2 lg:grid-cols-4 gap-8">;
            {features.map((((((((feature, index, index, index, index, index, index, index) => ({ ...((((((feature, index, index, index, index, index, index, key: index })) => ({ ...(((((feature, index, index, index, index, index, key: index })) => ({ ...((((feature, index, index, index, index, key: index })) => ({ ...(((feature, index, index, index, key: index })) => ({ ...((feature, index, index, key: index })) => ({ ...(feature, index, key: index })) => (;
              <div;
                key={index};
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105";
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">;
                  <feature.icon className="w-6 h-6 text-cyan-400"       />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">;
                  {feature.title};
                </h3>;
                <p className="text-slate-300">{feature.description}</p>;
              </div>;
            ))};
          </div>;
        </div>;
      </section>;
;
      {/* Benefits Section */};
      <section className="py-20 bg-slate-800/30">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Why Choose Micro CRM?;
            </h2>;
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Experience the benefits of professional CRM software without the;
              complexity and cost of enterprise solutions.;
            </p>;
          </div>;
;
          <div className="grid md: anygrid-cols-2 lg:grid-cols-3 gap-6">;
            {benefits.map((((((((benefit, index, index, index, index, index, index, index) => ({ ...((((((benefit, index, index, index, index, index, index, key: index })) => ({ ...(((((benefit, index, index, index, index, index, key: index })) => ({ ...((((benefit, index, index, index, index, key: index })) => ({ ...(((benefit, index, index, index, key: index })) => ({ ...((benefit, index, index, key: index })) => ({ ...(benefit, index, key: index })) => (;
              <div key={index} className="flex items-start space-x-3">;
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1"       />;
                <span className="text-slate-300 text-lg">{benefit}</span>;
              </div>;
            ))};
          </div>;
        </div>;
      </section>;
;
      {/* Use Cases Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Perfect For Your Business;
            </h2>;
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Whether you're a small business owner or managing a growing sales;
              team, our Micro CRM adapts to your needs.;
            </p>;
          </div>;
;
          <div className="grid md: anygrid-cols-2 gap-8">;
            {useCases.map((((((((useCase, index, index, index, index, index, index, index) => ({ ...((((((useCase, index, index, index, index, index, index, key: index })) => ({ ...(((((useCase, index, index, index, index, index, key: index })) => ({ ...((((useCase, index, index, index, index, key: index })) => ({ ...(((useCase, index, index, index, key: index })) => ({ ...((useCase, index, index, key: index })) => ({ ...(useCase, index, key: index })) => (;
              <div;
                key={index};
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-300";
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">;
                  <useCase.icon className="w-8 h-8 text-cyan-400"       />;
                </div>;
                <h3 className="text-2xl font-semibold text-white mb-4">;
                  {useCase.title};
                </h3>;
                <p className="text-slate-300 text-lg leading-relaxed">;
                  {useCase.description};
                </p>;
              </div>;
            ))};
          </div>;
        </div>;
      </section>;
;
      {/* CTA Section */};
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-4xl font-bold text-white mb-6">;
            Ready to Transform Your Customer Relationships?;
          </h2>;
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">;
            Join thousands of businesses that have improved their customer;
            management with our Micro CRM solution.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25">;
              Start Free Trial;
            </button>;
            <button className="px-8 py-4 border border-cyan-400/30 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200">;
              Schedule Demo;
            </button>;
          </div>;
        </div>;
      </section>;
    </div>;
  )}
export default MicroCRM;
