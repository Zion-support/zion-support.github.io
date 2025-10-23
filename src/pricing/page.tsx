<<<<<<< HEAD
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { CheckCircle, Phone, Mail } from 'lucide-react'
=======
import { CheckCircle, Phone, Mail, Check } from 'lucide-react';
'use client';
import {CheckCircle, Phone, Mail} from 'lucide-react';
import React from 'react';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
=======
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';
import SEOOptimizer from '../$1/SEOOptimizer';
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1

constPricingPage: React.FC= () =>{constpricingPlans= [
    {
      name: 'Starter',
      price: '$29 9',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to5AI services',
        'Basic IT support',
        'Email support',
        'Standard security',
        'Monthly reports',
        'Basic analytics'
      ],
      popular: false,
      cta: 'Get Started'
   },
    {name: 'Professional',
      price: '$59 9',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 15AI services',
        'Priority IT support',
        'Phone & email support',
        'Advanced security',
        'Weekly reports',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: true,
      cta: 'Most Popular'
   },
    {name: 'Enterprise',
      price: '$1,29 9',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited AI services',
        '2 4/7 IT support',
        'Dedicated support team',
        'Enterprise security',
        'Real-time reports',
        'Custom analytics',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Contact Sales'
<<<<<<< HEAD
    }
  ]
=======
   }
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1

  constaddOns= [
    {name: 'AI Model Training',
      price: '$19 9/month',
      description: 'Custom AI model training for your specific needs'
   },
    {name: 'Additional Storage',
      price: '$9 9/month',
      description: 'Extra1TB of cloud storage'
   },
    {name: 'Priority Support',
      price: '$14 9/month',
      description: '2 4/7 priority support with 1-hour response time'
   },
    {name: 'Custom Development',
      price: '$29 9/hour',
      description: 'Custom feature development and integrations'
<<<<<<< HEAD
    }
  ]
=======
   }
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1

  constfaqs= [
    {question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or do wngrade your plan at any time. Changes take effect on your next billing cycle.'
   },
    {question: 'Do you offer custom pricing?',
      answer: 'Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team for more information.'
   },
    {question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.'
<<<<<<< HEAD
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to get started.'
    }
  ]
=======
   },
    {question: 'Is there a free trial available?',
      answer: 'Yes, we offer a14-day free trial for all plans. No credit card required to get started.'
   }
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1

  return (
  <><SEOOptimizertitle="Pricing Plans - ZionTechGroup"
        description="Transparent pricing for AI and IT services. Choose the perfect plan for your business needs. Starting at$299/month."
        keywords={['pricing', 'AI services pricing', 'IT services pricing', 'business plans', 'enterprisepricing']}
        canonicalUrl="https://ziontechgroup.com/pricing"
<<<<<<< HEAD
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Choose the perfect plan for your business needs
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                All plans include our core AI and IT services with no hidden fees.
                Scale up or down as your business grows.
              </p>
            </div>
          </section>
          {/* Pricing Plans */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
=======
      /><divclassName="min-h-screen bg-gradient-to-br from-slate-90 0via-purple-900to-slate-900"><Navigation /><mainclassName="pt-16">{/* HeroSection */}
        <sectionclassName="container mx-auto px-4 py-16text-center"><divclassName="max-w-4xlmx-auto"><spanclassName="text-4 xlmd:text-6 xl font-bold text-whitemb-6neon-text"></className="text-4 xlmd:text-6 xl font-bold text-whitemb-6neon-text">Simple, Transparent Pricing
            </h><spanclassName="text-xlmd:text-2 xl text-cyan-400mb-8"></className="text-xlmd:text-2 xl text-cyan-400mb-8">Choose the perfect plan for your business needs
            </p><spanclassName="text-lg text-gray-300mb-12max-w-3xlmx-auto"></className="text-lg text-gray-300mb-12max-w-3xlmx-auto">All plans include our core AI and IT services with no hidden fees. 
                Scale up or do wn as your business grows.
            </p></di></sectio>{/* PricingPlans */}
        <sectionclassName="container mx-auto px-4py-16"><divclassName="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xlmx-auto">{pricingPlans.map((planindex) => (
             <divkey={index}
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400scale-10 5'  : ''
                }`}
                >{plan.popular && (
                  <divclassName="absolute -top-4 left-1/2transform-translate-x-1/2"><spanclassName="bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-bold"></className="bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-bold">{plan.cta}
                    </spa></di>)}
                <divclassName="text-centermb-8"><h3className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h><pclassName="text-gray-300mb-4">{plan.description}</p><divclassName="flexitems-baselinejustify-center"><spanclassName="text-5 xl font-boldtext-cyan-400">{plan.price}</spa><spanclassName="text-gray-400ml-2">{plan.period}</spa></di></di><ulclassName="space-y-4mb-8">{plan.features.map((featurefeatureIndex) => (
                   <likey={featureIndex}className="flex items-centertext-gray-300"><CheckCircleclassName="w-5 h-5text-green-400mr-3flex-shrink-0" />{feature}
                    </l>))}
                </u><ahref={plan.popular ?"mailto:kleber@ziontechgroup.com" :"tel:+13024640950"}
                    className={`w-full text-center block py-3 px-6 rounded-lg font-medium transition-all ${
                      plan.popular
                        ? 'cyber-button'
<<<<<<< HEAD
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    {plan.popular ? 'Contact Sales' : plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </section>
          {/* Add-ons Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Additional Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {addOns.map((addon, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{addon.price}</div>
                  <p className="text-gray-300 text-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </section>
          {/* FAQ Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to discuss your needs and find the perfect plan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Quote</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
=======
                         : 'bg-gray-700text-whitehover:bg-gray-60 0'
                  }`}
                  >{plan.popular ? 'Contact Sales' :plan.cta}
                </a></di>))}
          </di></sectio>{/* Add-onsSection */}
        <sectionclassName="container mx-auto px-4py-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text"></className="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text">Additional Services
          </h><divclassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xlmx-auto">{addOns.map((addo nindex) => (
             <divkey={index}className="cyber-cardp-6text-center"><h3className="text-xl font-boldtext-whitemb-2">{addon.name}</h><divclassName="text-2 xl font-bold text-cyan-400mb-2">{addon.price}</di><pclassName="text-gray-300text-sm">{addon.description}</p></di>))}
          </di></sectio>{/* FAQSection */}
        <sectionclassName="container mx-auto px-4py-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text"></className="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text">Frequently Asked Questions
          </h><divclassName="max-w-4 xlmx-autospace-y-6">{faqs.map((faqindex) => (
             <divkey={index}className="cyber-cardp-6"><h3className="text-xl font-boldtext-whitemb-3">{faq.question}</h><pclassName="text-gray-300">{faq.answer}</p></di>))}
          </di></sectio>{/* CTASection */}
        <sectionclassName="container mx-auto px-4 py-16text-center"><divclassName="cyber-card p-12max-w-4xlmx-auto"><spanclassName="text-3 xlmd:text-4 xl font-bold text-whitemb-6neon-text"></className="text-3 xlmd:text-4 xl font-bold text-whitemb-6neon-text">Ready to Get Started?
            </h><spanclassName="text-xl text-gray-300mb-8"></className="text-xl text-gray-300mb-8">Contact us today to discuss your needs and find the perfect plan
            </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="tel:+13024640950"
                 className="cyber-button flex items-centerjustify-centerspace-x-2"
                ><PhoneclassName="w-5h-5" /><spa n>Call (302)464-0950</spa></a><ahref="mailto:kleber@ziontechgroup.com"
                 className="cyber-button flex items-centerjustify-centerspace-x-2"
                  style={{background: 'linear-gradient(45 deg, #8 b5cf6, #ec4899)'}}
                ><MailclassName="w-5h-5" /><spa n>GetFreeQuote</spa></a></di></di></sectio></mai><Footer /></di></>
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1

export default PricingPage