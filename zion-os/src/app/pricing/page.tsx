
  const filteredServices = selectedCategory === "All";
    ? servicePricing;
    : servicePricing.filter(service => service.category === selectedCategory);
  return (;
    <div className="space-y-8">;
      <div className="text-center space-y-4">;
        <h1 className="text-4xl font-bold">Pricing & Plans</h1>;
        <p className="text-xl opacity-80 max-w-3xl mx-auto">;
          Choose the perfect plan for your business needs. All plans include our core features with transparent pricing and no hidden fees.;
        </p>;
      </div>;
      {/* Category Filter */}
      <div className="flex justify-center">;
        <div className="flex flex-wrap gap-2 bg-zinc-800 rounded-lg p-1">;
          {categories.map(category => (;
            <button;
              key={category}
              onClick={() => setSelectedCategory(category)}

                  ? 'bg-blue-600 text-white';
                  : 'text-gray-300 hover:text-white hover:bg-zinc-700';
              }`}
            >;
              {category}
            </button>;
          ))}
        </div>;
      </div>;
      {/* Services Pricing */}
      <div className="space-y-12">;
        {filteredServices.map((service, serviceIndex) => (;
          <div key={serviceIndex} className="space-y-6">;
            <div className="text-center space-y-2">;
              <h2 className="text-2xl font-bold">{service.serviceName}</h2>;
              <p className="text-lg opacity-80">{service.description}</p>;
            </div>;
            {/* Features & Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
              <div>;
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>;
                <ul className="space-y-2">;
                  {service.features.map((feature, index) => (;
                    <li key={index} className="flex items-center gap-2">;
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>;
                      {feature}
                    </li>;
                  ))}
                </ul>;
              </div>;
              <div>;
                <h3 className="text-lg font-semibold mb-3">Benefits</h3>;
                <ul className="space-y-2">;
                  {service.benefits.map((benefit, index) => (;
                    <li key={index} className="flex items-center gap-2">;
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>;
                      {benefit}
                    </li>;
                  ))}
                </ul>;
              </div>;
            </div>;
            {/* Pricing Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
              {service.tiers.map((tier, tierIndex) => (;
                <div;
                  key={tierIndex}

                      ? 'border-blue-500 bg-blue-500/10';
                      : 'border-white/10';
                  }`}
                >;
                  {tier.popular && (;
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">;
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">;
                        Most Popular;
                      </span>;
                    </div>;
                  )}

                  <div className="text-center space-y-4">;
                    <h3 className="text-xl font-semibold">{tier.name}</h3>;
                    <div>;
                      <span className="text-3xl font-bold">{tier.price}</span>;
                      <span className="text-lg opacity-80">{tier.period}</span>;
                    </div>;
                    <p className="text-sm opacity-80">{tier.description}</p>;
                  </div>;
                  <ul className="space-y-3 mt-6">;
                    {tier.features.map((feature, index) => (;
                      <li key={index} className="flex items-center gap-2 text-sm">;
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>;
                        {feature}
                      </li>;
                    ))}
                  </ul>;
                  <div className="mt-6">;
                    <a;
                      href={tier.ctaLink}

                          ? 'bg-blue-600 hover:bg-blue-700 text-white';
                          : 'bg-zinc-700 hover:bg-zinc-600 text-white';
                      }`}
                    >;
                      {tier.cta}
                    </a>;
                  </div>;
                </div>;
              ))}
            </div>;
          </div>;
        ))}
      </div>;
      {/* Additional Services */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white">;
        <div className="text-center space-y-4">;
          <h2 className="text-2xl font-bold">Need Custom Solutions?</h2>;
          <p className="opacity-90">;
            We offer custom development, enterprise solutions, and specialized services tailored to your specific needs.;
          </p>;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">;
            <div>;
              <h3 className="font-semibold">Custom Development</h3>;
              <p className="text-sm opacity-90">Tailored solutions from $5,000+</p>;
            </div>;
            <div>;
              <h3 className="font-semibold">Enterprise Solutions</h3>;
              <p className="text-sm opacity-90">Custom pricing for large organizations</p>;
            </div>;
            <div>;
              <h3 className="font-semibold">Consulting Services</h3>;
              <p className="text-sm opacity-90">Strategic guidance from $150/hour</p>;
            </div>;
          </div>;
          <a;
            href="mailto:kleber@ziontechgroup.com";
            className="inline-block px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors";
          >;
            Get Custom Quote;
          </a>;
        </div>;
      </div>;
      {/* Contact Information */}
      <div className="text-center space-y-4">;
        <h2 className="text-2xl font-bold">Questions About Pricing?</h2>;
        <p className="opacity-80">;
          Our team is here to help you choose the right plan for your business.;
        </p>;
        <div className="grid grid-cols-1 md: grid-cols-3 gap-4">;
          <div>;
            <h3 className="font-semibold">Phone</h3>;
            <p className="opacity-80">+1 302 464 0950</p>;
          </div>;
          <div>;
            <h3 className="font-semibold">Email</h3>;
            <p className="opacity-80">kleber@ziontechgroup.com</p>;
          </div>;
          <div>;
            <h3 className="font-semibold">Address</h3>;
            <p className="opacity-80">364 E Main St STE 1008<br />Middletown DE 19709</p>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
}