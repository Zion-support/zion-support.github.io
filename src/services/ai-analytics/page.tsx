'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAnalyticsPage: React.FC = () => {
          return (
    <>
      <Navigation />
      <div>
        <div>
          {/* Header */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">AI Analytics Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your data into actionable insights with our advanced AI-powered analytics platform. 
              Make data-driven decisions that drive growth and optimize performance.
            </p>
            <div>
              <div>
                <Brain className="w-5 h-5 mr-2" />
                <span className="font-medium">AI-Powered Insights</span>
              </div>
              <div>
                <BarChart className="w-5 h-5 mr-2" />
                <span className="font-medium">Real-time Analytics</span>
              </div>
              <div>
                <Target className="w-5 h-5 mr-2" />
                <span className="font-medium">Predictive Intelligence</span>
              </div>
            </div>
          </div>
          {/* Features */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Key Features</h2>
            <div>
              {features.map((feature, index) => (
                <div>
                  <div>
                    <div>
                      <feature.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300 flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Use Cases */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Use Cases</h2>
            <div>
              {useCases.map((useCase, index) => (
                <div>
                  <div>
                    <useCase.icon className={`w-8 h-8 ${useCase.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Pricing */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Pricing Plans</h2>
            <div>
              {pricingTiers.map((tier, index) => (
                <div>
                  {tier.popular && (
                    <div>
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                    <div>
                      <span className={`text-3xl font-bold ${tier.color}`}>{tier.price}</span>
                      <span className="text-gray-400 ml-1">{tier.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm mt-2">{tier.description}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-300 flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact"
                    className={`w-full block text-center py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                      tier.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >Get Started</a>
                </div>
              ))}
            </div>
          </div>
          {/* Benefits */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Why Choose Our AI Analytics?
            </h2>
            <div>
              {benefits.map((benefit, index) => (
                <div>
                  <div>
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* CTA Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Data?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Start your journey with AI analytics today. Get a free consultation and discover
              how our platform can revolutionize your business intelligence.
            </p>
            <div>
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <BarChart className="w-5 h-5 mr-2" />Get Free Consultation</a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />(302) 464-0950</a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />Email Us</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>);
}
export default AIAnalyticsPage