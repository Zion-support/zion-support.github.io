'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PartnersPage: React.FC = () => {
        return (
    <>
      <Navigation />
      <div>
        <div>
          {/* Header */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">Our Partners</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">We work with industry-leading technology partners to deliver comprehensive solutions
              that drive innovation and business success.
            </p>
          </div>
          {/* Partner Types */}
          <div>
            {partnerTypes.map((type, index) => (
              <div>
                <div>
                  <div>
                    <type.icon className={`w-6 h-6 ${type.color}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white neon-text">{type.title}</h2>
                    <p className="text-gray-300">{type.description}</p>
                  </div>
                </div>
                <div>
                  {type.partners.map((partner, partnerIndex) => (
                    <div>
                      <div className="text-3xl mb-3">{partner.logo}</div>
                      <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>
                      <p className="text-gray-300 text-sm">{partner.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Partnership Benefits */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Why Partner With Us?
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
          {/* Partnership Tiers */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Partnership Tiers</h2>
            <div>
              {partnershipTiers.map((tier, index) => (
                <div>
                  <div>
                    <div className={`text-2xl font-bold ${tier.color} mb-2`}>{tier.level}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 text-sm">{tier.description}</p>
                  </div>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Become a Partner CTA */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Become Our Partner</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth, innovation, and success. 
              Let's build the future together.
            </p>
            <div>
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Handshake className="w-5 h-5 mr-2" />Become a Partner</a>
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
export default PartnersPage