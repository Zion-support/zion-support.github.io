

const SmartAnalyticsPage: React.FC = () => {
      return (
    <div>
      <div>
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Smart Analytics</h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto">Transform your data into actionable insights with AI-powered analytics that drive real business results</p>
          <div>
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
            >📞 Call: (302) 464-0950</a>
            <Link
              to="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >Get Free Consultation</Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Powerful Analytics Features</h2>
          <div>
            {features.map((feature, index) => (
              <div>
                <div>
                  <feature.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-cyan-400 font-medium">{feature.benefit}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Simple, Transparent Pricing</h2>
          <div>
            {pricingPlans.map((plan, index) => (
              <div>
                {plan.popular && (
                  <div>
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div>
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="tel:+13024640950"
                  className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                      : 'bg-gray-600 text-white hover:bg-gray-700'
                  }`}
                >Get Started</a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have revolutionized their decision-making with our smart analytics platform.
          </p>
          <div>
            <a
              href="tel:+13024640950"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >📞 Call: (302) 464-0950</a>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
            >Get Free Demo</Link>
          </div>
        </section>

        {/* Contact Info */}
        <section className="mt-16 text-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div>
              <div>
                <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">+1 (302) 464-0950</a>
              </div>
              <div>
                <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">kleber@ziontechgroup.com</a>
              </div>
              <div>
                <MapPin className="w-5 h-5 mr-2 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>);
}
export default SmartAnalyticsPage