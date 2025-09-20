      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex justify-center mb-4">
                  <service.icon className="w-16 h-16 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.path}
                  className="inline-block bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Service Categories</h2>
          <div className="space-y-12">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <category.icon className="w-12 h-12 text-zion-cyan mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-zion-slate-light">{category.description}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                      <p className="text-zion-slate-light text-sm mb-3">{service.description}</p>
                      <Link 
                        to={service.path}
                        className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium transition-colors"
                      >
                        Learn More →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Industry Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex justify-center mb-4">
                <Building2 className="w-16 h-16 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">Manufacturing</h3>
              <p className="text-zion-slate-light text-center mb-4">
                Smart factory solutions with IoT and AI-powered predictive maintenance
              </p>
              <Link 
                to="/industry-solutions"
                className="block text-center bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex justify-center mb-4">
                <Globe className="w-16 h-16 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">Healthcare</h3>
              <p className="text-zion-slate-light text-center mb-4">
                AI-powered diagnostic tools and patient care optimization systems
              </p>
              <Link 
                to="/industry-solutions"
                className="block text-center bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex justify-center mb-4">
                <BarChart3 className="w-16 h-16 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">Finance</h3>
              <p className="text-zion-slate-light text-center mb-4">
                Blockchain solutions and AI-driven financial analytics platforms
              </p>
              <Link 
                to="/industry-solutions"
                className="block text-center bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our services can help transform your business and drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-zion-cyan hover:bg-zion-slate-light px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/request-quote" 
              className="border border-white text-white hover:bg-white hover:text-zion-cyan px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
