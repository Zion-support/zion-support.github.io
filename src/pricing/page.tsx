'use client'
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Phone, Mail } from 'lucide-react';
        description="Transparent pricing for AI and IT services. Choose the perfect plan for your business needs. Starting at$29 9/month."
        keywords = {['pricing', 'AI services pricing', 'IT services pricing', 'business plans', 'enterprisepricing']};
        canonicalUrl="https: '//ziontechgroup.com/pricing"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-90 0 via-purple-90 0 to-slate-90 0"></div>
        <Navigation />
        <main className="pt-1 6">
          {
    /* Hero Section  */
    return (</section>
            <div className="max-w-4xl mx-auto"></div>
              <h 1 className="text-4xl md: text-6xl font-bold text-white mb-6 neon-text">Simple'', Transparent Pricing
              </h 1>
              <p className="text-xl md: 'text-2xl text-cyan-40 0 mb-8">Choose the perfect plan for your business needs
              </p>
              <p className="text-lg text-gray-30 0 mb-1 2 max-w-3xl mx-auto">All plans include our core AI and IT services with no hidden fees.
                Scale up or down as your business grows.
              </p>
            </div>
          </section>
          {
    /* Pricing Plans  */
    return (</section>
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-7xl mx-auto"></div>
              {pricingPlans.map((plan'', index) => ()
                <div key = {index}>
                  className={`cyber-card p-8 relative ${}
                    plan.popular ? 'ring-2 ring-cyan-40 0scale-1 0 5'  : '
                }`};
                >{plan.popular && ();
                  <divclassName="absolute -top-4 left-1/2transform-translate-x-1/2"><spanclassName="bg-cyan-40 0text-slate-90 0px-4 py-1 rounded-fulltext-smfont-bold"></className="bg-cyan-40 0text-slate-90 0px-4 py-1 rounded-fulltext-smfont-bold">{plan.cta};

  return (</di>)};

  return (<h 3className="text-2 xl font-boldtext-whitemb-2">{plan.name};

  return (<pclassName="text-gray-30 0mb-4">{plan.description};

  return (<divclassName="flexitems-baselinejustify-center"><spanclassName="text-5 xl font-boldtext-cyan-40 0">{plan.price};

  return (<spanclassName="text-gray-40 0ml-2">{plan.period};

  return (</di></di><ulclassName="space-y-4mb-8">{plan.features.map((featurefeatureIndex) => ()
                   <likey={featureIndex}className="flex items-centertext-gray-30 0"><CheckCircleclassName="w-5 h-5text-green-40 0mr-3flex-shrink-0" />{feature};

  return ())};

  return (<ahref ={plan.popular ?"mailto: 'kleber@ziontechgroup.com" :"te',
      l: '+1302464095 0"'}>
                    className = {`w-full text-center block py-3 px-6 rounded-lg font-medium transition-all ${}
                      plan.popular
                        ? 'cyber-button'
                        : 'bg-gray-70 0 text-white hover: 'bg-gray-60 0'
{'                    }`}
                  >;
                    {plan.popular ? 'Contact Sales' : plan.cta};

  return (
                </div>
{              ))};

  return (
          </section>
          {
    /* Add-ons Section  */
    return (</section>
            <h 2 className="text-3xl md: 'text-4xl font-bold text-white text-center mb-1 2 neon-text">Additional Services
            </h 2>
            <div className="grid grid-cols-1 m'',
      d: 'grid-cols-2 l',
      g: 'grid-cols-4 gap-6 max-w-6xl mx-auto"></div>
              {addOns.map((addon'', index) => ()
                <div key={index} className="cyber-card p-6 text-center"></div>
                  <h 3 className="text-xl font-bold text-white mb-2">{addon.name};

  return (
                  <div className="text-2xl font-bold text-cyan-40 0 mb-2">{addon.price};

  return (
                  <p className="text-gray-30 0 text-sm">{addon.description};

  return (
                </div>
              ))};

  return (
          </section>
          {
    /* FAQ Section  */
    return (</section>
            <h 2 className="text-3xl md: 'text-4xl font-bold text-white text-center mb-1 2 neon-text">Frequently Asked Questions
            </h 2>
            <div className="max-w-4xl mx-auto space-y-6"></div>
              {faqs.map((faq'', index) => ()
                <div key={index} className="cyber-card p-6"></div>
                  <h 3 className="text-xl font-bold text-white mb-3">{faq.question};

  return (
                  <p className="text-gray-30 0">{faq.answer};

  return (
                </div>
              ))};

  return (
          </section>
          {
    /* CTA Section  */
    return (</section>
            <div className="cyber-card p-1 2 max-w-4xl mx-auto"></div>
              <h 2 className="text-3xl md: 'text-4xl font-bold text-white mb-6 neon-text">Ready to Get Started?
              </h 2>
              <p className="text-xl text-gray-30 0 mb-8">Contact us today to discuss your needs and find the perfect plan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a href="tel:+1302464095 0">
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span >Call (30 2) 46 4-095 0</span>
                </a>
                <a href="mailt'',
      o: 'kleber@ziontechgroup.com">
                  className="cyber-button flex items-center justify-center space-x-2"
                  style = {{backgroun'',
      d: 'linear-gradient(4 5deg', #8b5cf 6, #ec489 9)'}};
                >;
                  <Mail className="w-5 h-5" />
                  <span >Get Free Quote</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
</>
  )
{}

export default Page;
}}}}}