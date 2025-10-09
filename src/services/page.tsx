'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ServicesPage: React.FC = () => {
            return (
    <>
      <SEOOptimizer
        title="Our Services - AI & IT Solutions | Zion Tech Group"
        description="Comprehensive AI services, IT solutions, and micro SAAS tools. Transform your business with our cutting-edge technology solutions."
        keywords={['AI services', 'IT solutions', 'micro SAAS', 'business automation', 'cloud services', 'cybersecurity']}
        canonicalUrl="https://ziontechgroup.com/services"
      />
      <Navigation />
      
      <div>
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Our <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business. 
              From cutting-edge AI services to robust IT infrastructure, we've got you covered.
            </p>
            <div>
              <Link
                to="/contact"
                className="cyber-button inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />Get Started Today</Link>
              <Link
                to="/case-studies"
                className="cyber-button-secondary inline-flex items-center justify-center"
              >
                <Eye className="w-5 h-5 mr-2" />View Case Studies</Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4">
          <div>
            <div>
              {stats.map((stat, index) => (
                <div>
                  <div>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-16 px-4">
          <div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI <span className="text-purple-400">Services</span>
              </h2>
              <p className="text-gray-300 text-lg">Cutting-edge artificial intelligence solutions for modern businesses</p>
            </div>
            <div>
              {aiServices.map((service, index) => (
                <div>
                  <div>
                    <div>
                      <service.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      {service.popular && (
                        <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded-full">Popular</span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                  <Link
                    to="/contact"
                    className="w-full cyber-button text-center block"
                  >Get Started</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services */}
        <section className="py-16 px-4">
          <div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                IT <span className="text-blue-400">Services</span>
              </h2>
              <p className="text-gray-300 text-lg">Robust IT infrastructure and support services</p>
            </div>
            <div>
              {itServices.map((service, index) => (
                <div>
                  <div>
                    <div>
                      <service.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                  <Link
                    to="/contact"
                    className="w-full cyber-button text-center block"
                  >Get Started</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services */}
        <section className="py-16 px-4">
          <div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Micro <span className="text-green-400">SAAS</span>
              </h2>
              <p className="text-gray-300 text-lg">Ready-to-use AI-powered applications and tools</p>
            </div>
            <div>
              {microSaasServices.map((service, index) => (
                <div>
                  <div>
                    <div>
                      <service.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      {service.popular && (
                        <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">Popular</span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                  <Link
                    to="/contact"
                    className="w-full cyber-button text-center block"
                  >Get Started</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose <span className="text-cyan-400">Us</span>
              </h2>
              <p className="text-gray-300 text-lg">We deliver exceptional results with cutting-edge technology</p>
            </div>
            <div>
              {benefits.map((benefit, index) => (
                <div>
                  <div>
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Let's discuss how our AI and IT solutions can drive your success.
              </p>
              <div>
                <Link
                  to="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />Start Your Project</Link>
                <Link
                  to="/demo"
                  className="cyber-button-secondary inline-flex items-center justify-center"
                >
                  <Eye className="w-5 h-5 mr-2" />Request Demo</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>);
}
export default ServicesPage