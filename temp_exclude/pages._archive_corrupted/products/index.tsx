  ];
  const benefits = [{
      \"title\": \'Enterprise Ready\',
      \"description\": \'Built for scale with enterprise-grade security and reliability.\',
      \"icon\": Shield
    },
    {
      \"title\": \'Easy Integration\',
      \"description\": \'Seamless integration with your existing systems and workflows.\',
      \"icon\": Code
    },
    {
      \"title\": \'24/7 Support\',
      \"description\": \'Round-the-clock technical support and maintenance services.\',
      \"icon\": Zap
    },
    {
      \"title\": \'Custom Solutions\',
      \"description\": \'Tailored solutions to meet your specific business requirements.\',
      \"icon\": Database
    }
  ];
  return (
    <MainLayout
      title=\"Our Products - Zion Tech Group\"
      description=\"Discover our innovative technology products and platforms designed to transform your business operations and drive digital innovation.\"
    >
      {/* Hero Section */}
      <section className=\"bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20\">
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
          <div className=\"text-center\">
            <h1 className=\"text-5xl font-bold mb-6\">Our Products</h1>
            <p className=\"text-xl max-w-3xl mx-auto\">
              Innovative technology platforms and solutions designed to transform 
              your business operations and drive digital innovation.
            </p>
          </div>
        </div>
      </section>
      {/* Categories Filter */}
      <section className=\"py-12 bg-gray-50\">
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
          <div className=\"flex flex-wrap justify-center gap-4\">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  category === \'All Products\'
                    ? \'bg-blue-600 text-white\'
                    : \'bg-white text-gray-700 \"hover\": bg-blue-50\'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Products Grid */}
                        {feature}
                      </li>
                    ))}
                    <Link
                      href={product.href}
                      className=\"flex-1 bg-blue-600 \"hover\": bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors flex items-center justify-center\"
                    >
                      <Eye className=\"h-4 w-4 mr-2\" />
                      Learn More
                    </Link>
                    <button className=\"bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors flex items-center\">
                      <Download className=\"h-4 w-4\" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Comparison */}
              }
            ].map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-lg shadow-lg p-8 ${
                  plan.popular ? \'ring-2 ring-blue-500 relative\' : \''
                }`}
              >
                {plan.popular && (
                  <div className=\"absolute -top-4 left-1/2 transform -translate-x-1/2\">
                    <span className=\"bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium\">
                      Most Popular
                    </span>
                  </div>
                )}
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? \'bg-blue-600 \"hover\": bg-blue-700 text-white\'
                    : \'bg-gray-100 hover:bg-gray-200 text-gray-900\'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className=\"py-20 bg-blue-600 text-white\">
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8 text-center\">
          <h2 className=\"text-4xl font-bold mb-6\">
            Ready to Transform Your Business?
          </h2>
          <p className=\"text-xl mb-8 max-w-3xl mx-auto\">
            Start your journey with our technology products and see the difference 
            they can make for your organization.
          </p>
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
            <Link
              href=\"/contact\"
              className=\"bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors\"
            >
              Get Free Demo
            </Link>
            <Link
              href=\"/services\"
              className=\"bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors\"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
export default Products;
