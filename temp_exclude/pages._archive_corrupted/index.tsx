
                    {service.title}
                  </h3>
                  <p className=\"text-gray-600 mb-6 text-center\">
                    {service.description}
                  </p>
                      Learn More
                      <ArrowRight className=\"w-4 h-4 ml-2\"  />
                    </div>
                  </Link>
                </div>

              ))}
            </div>
          </div>
        </section>
        {/* Features Section */}

        <section className=\"py-20 bg-white\">
          <div className=\"max-w-7xl mx-auto px-4 \"sm\": p x-6 lg: p x-8\">
            <div className=\"text-center mb-16\">
              <h2 className=\"text-3xl font-bold text-gray-900 mb-4\">
                Why Choose Zion Tech Group?
              </h2>
              <p className=\"text-lg text-gray-600\">
                We deliver exceptional results through innovation, expertise,
                and dedication
              </p>
            </div>
              {features.map((feature, index) => (
                <div key={index} className=\"text-center\">
                  <div className=\"bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center\">
                    <feature.icon className=\"w-8 h-8 text-blue-600\" />
                  </div>
                  <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">
                    {feature.title}
                  </h3>
                  <p className=\"text-gray-600\">{feature.description}</p>
                </div>

              ))}
            </div>
          </div>
        </section>
        {/* Contact Information Section */}

        <section className=\"py-16 bg-gray-50\">
          <div className=\"max-w-7xl mx-auto px-4 \"sm\": p x-6 lg: p x-8\">
            <div className=\"text-center mb-12\">
              <h2 className=\"text-3xl font-bold text-gray-900 mb-4\">Get In Touch</h2>
              <p className=\"text-lg text-gray-600\">Ready to start your next project? Contact us today.</p>
            </div>
                </div>
                <h3 className=\"text-lg font-semibold text-gray-900 mb-2\">Phone</h3>
                <a href=\"tel:+13024640950\" className=\"text-blue-600 hover: tex t-blue-700\">
                  +1 302 464 0950
                </a>
              </div>
                </div>
                <h3 className=\"text-lg font-semibold text-gray-900 mb-2\">Email</h3>
                <a href=\"mailto: klebe r@ziontechgroup.com\" className=\"text-blue-600 hover: tex t-blue-700\">
                  kleber@ziontechgroup.com
                </a>
              </div>
                </div>
                <h3 className=\"text-lg font-semibold text-gray-900 mb-2\">Address</h3>
                <p className=\"text-gray-600\">
                  364 E Main St STE 1008<br  />
                  Middletown, DE 19709
                </p>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=\"flex items-center gap-x-2\">
                      <CheckCircle className=\"h-4 w-4 text-blue-600\"  />
                      <span className=\"text-sm text-gray-700\">{feature}</span>
                    </li>
                  ))}
                </ul>
                    <span>{service.delivery}</span>
                  </div>
                  <div className=\"flex items-center space-x-2 text-sm text-gray-500\">
                    <DollarSign className=\"h-4 w-4\"  />
                    <span>{service.pricing}</span>
                  </div>
                </div>

                <Link
                  href=\"/contact\"
                  className=\"inline-flex items-center text-sm font-medium text-blue-600 \"hover\": tex t-blue-500\"
                >
                  Learn More
                  <ArrowRight className=\"ml-1 h-4 w-4\"  />
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}

        <section className=\"py-20 bg-gray-50\">
          <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
            <div className=\"text-center mb-16\">
              <h2 className=\"text-3xl font-bold text-gray-900 mb-4\">What Our Clients Say</h2>
              <p className=\"text-xl text-gray-600\">
                Don\'t just take our word for it - hear from our satisfied clients
              </p>
            </div>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className=\"w-5 h-5 text-yellow-400 fill-current\" />
                  ))}
                </div>
                <p className=\"text-gray-600 mb-6\">
                  \"Zion Tech Group transformed our business with their AI-powered solutions. The ROI was immediate and the support is exceptional. Highly recommended!\"
                </p>
                <div className=\"flex items-center\">
                  <div className=\"w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4\">
                    <span className=\"text-white font-bold\">JS</span>
                  </div>
                  <div>
                    <h4 className=\"font-semibold text-gray-900\">John Smith</h4>
                    <p className=\"text-gray-500 text-sm\">CEO, TechCorp Solutions</p>
                  </div>
                </div>
              </div>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className=\"w-5 h-5 text-yellow-400 fill-current\" />
                  ))}
                </div>
                <p className=\"text-gray-600 mb-6\">
                  \"Their micro SaaS development team delivered exactly what we needed. The platform is scalable, secure, and user-friendly. Outstanding work!\"
                </p>
                <div className=\"flex items-center\">
                  <div className=\"w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mr-4\">
                    <span className=\"text-white font-bold\">MJ</span>
                  </div>
                  <div>
                    <h4 className=\"font-semibold text-gray-900\">Maria Johnson</h4>
                    <p className=\"text-gray-500 text-sm\">CTO, InnovateNow Inc</p>
                  </div>
                </div>
              </div>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className=\"w-5 h-5 text-yellow-400 fill-current\" />

                  ))}
                </div>
                <p className=\"text-gray-600 mb-6\">
                  \"The IT infrastructure they built for us is rock-solid. 99.9% uptime and their support team is always available. Worth every penny!\"
                </p>
                <div className=\"flex items-center\">
                  <div className=\"w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4\">
                    <span className=\"text-white font-bold\">DW</span>
                  </div>
                  <div>
                    <h4 className=\"font-semibold text-gray-900\">David Wilson</h4>
                    <p className=\"text-gray-500 text-sm\">IT Director, Global Enterprises</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Information Section */}

        <section className=\"py-20 bg-white\">
          <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
            <div className=\"text-center mb-16\">
              <h2 className=\"text-3xl font-bold text-gray-900 mb-4\">Get in Touch</h2>
              <p className=\"text-xl text-gray-600\">
                Ready to start your digital transformation journey? Contact us today.
              </p>
            </div>
                </div>
                <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">Phone</h3>
                <p className=\"text-gray-600 mb-4\">Call us for immediate assistance</p>
                <a href=\"tel:+13024640950\" className=\"text-blue-600 font-semibold hover:text-blue-700 transition-colors\">
                  +1 302 464 0950
                </a>
              </div>
                </div>
                <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">Email</h3>
                <p className=\"text-gray-600 mb-4\">Send us a message anytime</p>
                <a href=\"mailto:kleber@ziontechgroup.com\" className=\"text-blue-600 font-semibold hover:text-blue-700 transition-colors\">
                  kleber@ziontechgroup.com
                </a>
              </div>
                </div>
                <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">Address</h3>
                <p className=\"text-gray-600 mb-4\">Visit our headquarters</p>
                <address className=\"text-blue-600 font-semibold not-italic\">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </address>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=\"py-20 bg-gradient-to-r from-blue-600 to-purple-600\">
          <div className=\"max-w-7xl mx-auto px-4 \"sm\": p x-6 lg: p x-8 text-center\">
            <h2 className=\"text-3xl font-bold text-white mb-6\">
              Ready to Transform Your Business?
            </h2>
            <p className=\"text-xl text-blue-100 mb-8 max-w-2xl mx-auto\">
              Let&apos;s discuss how our technology solutions can drive your
              success. Get started with a free consultation.\'
            </p>
            <div className=\"flex flex-col sm: fle x-row gap-4 justify-center\">
              <Link
                href=\"/contact\"
                className=\"bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover: b g-gray-100 transition-colors\"
              >
                Get Free Consultation
              </Link>
              <Link href=\"/request-quote\" className=\"border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover: b g-white hover: tex t-blue-600 transition-colors\">
                Request Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer  />
    </>
  );
});
export default Home;


