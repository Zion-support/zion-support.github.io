
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
      return (
    <div>
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core AI services with no hidden fees.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="container mx-auto px-4 py-16">
          <div>
            {plans.map((plan, index) => (
              <div>
                {plan.popular && (
                  <div>
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                
                <div>
                  <plan.icon className={`w-16 h-16 ${plan.color} mx-auto mb-4`} />
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div>
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border-2 border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'
                  }`}
                >Get Started</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Additional Services</h2>
          <div>
            {addOns.map((addon, index) => (
              <div>
                <addon.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 mb-4">{addon.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{addon.price}</div>
                <Link
                  to="/contact"
                  className="text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Frequently Asked Questions</h2>
          <div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Can I change my plan anytime?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Is there a free trial?</h3>
              <p className="text-gray-300">We offer a 14-day free trial for all plans. No credit card required to start.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">What support do you provide?</h3>
              <p className="text-gray-300">All plans include email support. Professional and Enterprise plans include priority support and dedicated account management.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Do you offer custom solutions?</h3>
              <p className="text-gray-300">Yes, we provide custom AI development and integration services. Contact us to discuss your specific needs.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover which plan is right for your business.
            </p>
            <div>
              <Link
                to="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <Phone className="w-5 h-5 mr-2" />Get Free Consultation</Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />(302) 464-0950</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>);
}
export default PricingPage