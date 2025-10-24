'use client'
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Phone, Mail } from 'lucide-react';
        description=&quot;Transparent pricing for AI and IT services. Choose the perfect plan for your business needs. Starting at$299/month.&quot;
        keywords = {['pricing', 'AI services pricing', 'IT services pricing', 'business plans', 'enterprisepricing']}
        canonicalUrl=&quot;https: //ziontechgroup.com/pricing&quot;
      />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
        <Navigation />
        <main className=&quot;pt-16&quot;>
          {
    /* Hero Section  */
    return (</section>
            <div className=&quot;max-w-4xl mx-auto&quot;></div>
              <h1 className=&quot;text-4xl md: text-6xl font-bold text-white mb-6 neon-text&quot;>Simple, Transparent Pricing
              </h1>
              <p className=&quot;text-xl md: text-2xl text-cyan-400 mb-8&quot;>Choose the perfect plan for your business needs
              </p>
              <p className=&quot;text-lg text-gray-300 mb-12 max-w-3xl mx-auto&quot;>All plans include our core AI and IT services with no hidden fees.
                Scale up or down as your business grows.
              </p>
            </div>
          </section>
          {
    /* Pricing Plans  */
    return (</section>
            <div className=&quot;grid grid-cols-1 md: grid-cols-3 gap-8 max-w-7xl mx-auto&quot;></div>
              {pricingPlans.map((plan, index) => ()
                <div key = {index}>
                  className={`cyber-card p-8 relative ${}
                    plan.popular ? 'ring-2 ring-cyan-400scale-10 5'  : ''
                }`}
                >{plan.popular && ();
                  <divclassName=&quot;absolute -top-4 left-1/2transform-translate-x-1/2&quot;><spanclassName=&quot;bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-bold&quot;></className=&quot;bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-bold&quot;>{plan.cta};

  return (</di>)};

  return (<h3className=&quot;text-2 xl font-boldtext-whitemb-2&quot;>{plan.name};

  return (<pclassName=&quot;text-gray-300mb-4&quot;>{plan.description};

  return (<divclassName=&quot;flexitems-baselinejustify-center&quot;><spanclassName=&quot;text-5 xl font-boldtext-cyan-400&quot;>{plan.price};

  return (<spanclassName=&quot;text-gray-400ml-2&quot;>{plan.period};

  return (</di></di><ulclassName=&quot;space-y-4mb-8&quot;>{plan.features.map((featurefeatureIndex) => ()
                   <likey={featureIndex}className=&quot;flex items-centertext-gray-300&quot;><CheckCircleclassName=&quot;w-5 h-5text-green-400mr-3flex-shrink-0&quot; />{feature};

  return ())};

  return (<ahref ={plan.popular ?&quot;mailto: kleber@ziontechgroup.com&quot; :&quot;te,
      l:+13024640950&quot;}>
                    className = {`w-full text-center block py-3 px-6 rounded-lg font-medium transition-all ${}
                      plan.popular
                        ? 'cyber-button'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
{                    }`}
                  >
                    {plan.popular ? 'Contact Sales' : plan.cta};

  return (
                </div>
{              ))};

  return (
          </section>
          {
    /* Add-ons Section  */
    return (</section>
            <h2 className=&quot;text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text&quot;>Additional Services
            </h2>
            <div className=&quot;grid grid-cols-1 m,
      d:grid-cols-2 l,
      g:grid-cols-4 gap-6 max-w-6xl mx-auto&quot;></div>
              {addOns.map((addon, index) => ()
                <div key={index} className=&quot;cyber-card p-6 text-center&quot;></div>
                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{addon.name};

  return (
                  <div className=&quot;text-2xl font-bold text-cyan-400 mb-2&quot;>{addon.price};

  return (
                  <p className=&quot;text-gray-300 text-sm&quot;>{addon.description};

  return (
                </div>
              ))};

  return (
          </section>
          {
    /* FAQ Section  */
    return (</section>
            <h2 className=&quot;text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text&quot;>Frequently Asked Questions
            </h2>
            <div className=&quot;max-w-4xl mx-auto space-y-6&quot;></div>
              {faqs.map((faq, index) => ()
                <div key={index} className=&quot;cyber-card p-6&quot;></div>
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{faq.question};

  return (
                  <p className=&quot;text-gray-300&quot;>{faq.answer};

  return (
                </div>
              ))};

  return (
          </section>
          {
    /* CTA Section  */
    return (</section>
            <div className=&quot;cyber-card p-12 max-w-4xl mx-auto&quot;></div>
              <h2 className=&quot;text-3xl md: text-4xl font-bold text-white mb-6 neon-text&quot;>Ready to Get Started?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>Contact us today to discuss your needs and find the perfect plan
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
                <a href=&quot;tel:+13024640950&quot;>
                  className=&quot;cyber-button flex items-center justify-center space-x-2&quot;
                >
                  <Phone className=&quot;w-5 h-5&quot; />
                  <span >Call (302) 464-0950</span>
                </a>
                <a href=&quot;mailt,
      o:kleber@ziontechgroup.com&quot;>
                  className=&quot;cyber-button flex items-center justify-center space-x-2&quot;
                  style = {{backgroun,
      d: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >;
                  <Mail className=&quot;w-5 h-5&quot; />
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