'use client'


constPricingPage: React.FC = () => {constpricingPlan,
      s = [
    {
      name: 'Starter'
      price: '$29 9'
      period: '/month'
      description: 'Perfect for small businesses getting started'
      features: []
        'Up to5AI services'
        'Basic IT support'
        'Email support'
        'Standard security'
        'Monthly reports'
        'Basic analytics'
      ]
      popula,
      r: false
      ct,
      a: 'Get Started'
   }
    {name: 'Professional'
      price: '$59 9'
      period: '/month'
      description: 'Ideal for growing companies'
      features: []
        'Up to 15AI services'
        'Priority IT support'
        'Phone & email support'
        'Advanced security'
        'Weekly reports'
        'Advanced analytics'
        'Custom integrations'
        'Dedicated account manager'
      ]
      popula,
      r: true
      ct,
      a: 'Most Popular'
   }
    {name: 'Enterprise'
      pric,
      e: '$1,29 9'
      period: '/month'
      description: 'For large organizations'
      features: []
        'Unlimited AI services'
        '2 4/7 IT support'
        'Dedicated support team'
        'Enterprise security'
        'Real-time reports'
        'Custom analytics'
        'Custom integrations'
        'On-premise deployment'
        'SLA guarantee'
      ]
      popula,
      r: false
      ct,
      a: 'Contact Sales'
    }
  ]

  const addOns = []
    {name: 'AI Model Training'
      pric,
      e: '$19 9/month'
      descriptio,
      n: 'Custom AI model training for your specific needs'
   }
    {name: 'Additional Storage'
      pric,
      e: '$9 9/month'
      descriptio,
      n: 'Extra1TB of cloud storage'
   }
    {name: 'Priority Support'
      pric,
      e: '$14 9/month'
      descriptio,
      n: '2 4/7 priority support with 1-hour response time'
   }
    {name: 'Custom Development'
      pric,
      e: '$29 9/hour'
      descriptio,
      n: 'Custom feature development and integrations'
    }
  ]

  const faqs = []
    {question: 'Can I change my plan anytime?'
      answe,
      r: 'Yes, you can upgrade or do wngrade your plan at any time. Changes take effect on your next billing cycle.'
   }
    {question: 'Do you offer custom pricing?'
      answe,
      r: 'Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team for more information.'
   }
    {question: 'What payment methods do you accept?'
      answe,
      r: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.'
    }
    {}
      question: 'Is there a free trial available?'
      answe,
      r: 'Yes, we offer a 14-day free trial for all plans. No credit card required to get started.'
    }
  ]


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
    </div>
  );
};

export default Page;
}}}}}
