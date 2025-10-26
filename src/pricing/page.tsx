import { CheckCircle, Link } from 'lucide-react';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4"></section>"
        <div className="max-w-7xl mx-auto text-center"></div>"
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>"
            Simple <span className="text-cyan-400">Pricing</span>"
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>"
            Choose the perfect plan for your business. All plans include our core AI and IT solutions with transparent pricing.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white"></section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>"
            {plans.map((plan, index) => {
              const colors = getColorClasses(plan.color);
              return (
                <div,
key={index}
                  className={`relative bg-white rounded-2xl shadow-lg border-2 ${
                    plan.popular ? colors.border : 'border-gray-200'
                  } overflow-hidden`}
                ></div>
                  {plan.popular && (
                    <div className={`absolute top-0 left-0 right-0 ${colors.bg} text-white text-center py-2 text-sm font-semibold`}></div>
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}></div>
                    <div className="text-center mb-8"></div>"
                      <div className={`w-16 h-16 ${colors.light} rounded-full flex items-center justify-center mx-auto mb-4`}></div>
                        <plan.icon className={`w-8 h-8 ${colors.textLight}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>"
                      <p className="text-gray-600 mb-4">{plan.description}</p>"
                      <div className="flex items-baseline justify-center"></div>"
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>"
                        <span className="text-gray-600 ml-1">{plan.period}</span>"
                      </div>
                    </div>

                    <div className="mb-8"></div>"
                      <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>"
                      <ul className="space-y-3"></ul>"
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start"></li>"
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />"
                            <span className="text-gray-600">{feature}</span>"
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.limitations.length > 0 && (
                      <div className="mb-8"></div>"
                        <h4 className="font-semibold text-gray-900 mb-4">Limitations:</h4>"
                        <ul className="space-y-3"></ul>"
                          {plan.limitations.map((limitation, limitationIndex) => (
                            <li key={limitationIndex} className="flex items-start"></li>"
                              <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />"
                              <span className="text-gray-600">{limitation}</span>"
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Link,
to="/contact""
                      className={`w-full ${
                        plan.popular
                          ? `${colors.bg} hover:opacity-90 text-white`
                          : `${colors.border} ${colors.text} hover:${colors.bg} hover:text-white`
                      } border-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center block`}
                    ></Link>
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-gray-50"></section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>"
          <div className="text-center mb-16"></div>"
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>"
              Add-on Services
            </h2>
            <p className="text-xl text-gray-600"></p>"
              Enhance your plan with additional services and features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>"
            {addOns.map((addOn, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"></div>"
                <h3 className="text-lg font-bold text-gray-900 mb-2">{addOn.name}</h3>"
                <p className="text-gray-600 mb-4 text-sm">{addOn.description}</p>"
                <div className="flex items-baseline justify-between"></div>"
                  <span className="text-2xl font-bold text-cyan-600">{addOn.price}</span>"
                  <span className="text-gray-600 text-sm">{addOn.period}</span>"
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white"></section>"
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"></div>"
          <div className="text-center mb-16"></div>"
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>"
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600"></p>"
              Everything you need to know about our pricing and plans
            </p>
          </div>
          <div className="space-y-8"></div>"
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6"></div>"
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>"
                <p className="text-gray-600">{faq.answer}</p>"
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600"></section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>"
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>"
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"></p>"
            Choose your plan and start transforming your business with AI and IT solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
            <Link,
to="/contact""
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300""
            ></Link>
              Start Free Trial
            </Link>
            <Link,
to="/demo""
              className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-cyan-600 transition-all duration-300""
            ></Link>
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;