

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
    }
  ]

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
    }
  ]

  constfaqs= [
    {question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or do wngrade your plan at any time. Changes take effect on your next billing cycle.'
   },
    {question: 'Do you offer custom pricing?',
      answer: 'Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team for more information.'
   },
    {question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to get started.'
    }
  ]

const Page = () => {
  return (
  <><SEOOptimizertitle="Pricing Plans - ZionTechGroup"
        description="Transparent pricing for AI and IT services. Choose the perfect plan for your business needs. Starting at$299/month."
        keywords={['pricing', 'AI services pricing', 'IT services pricing', 'business plans', 'enterprisepricing']}
        canonicalUrl="https://ziontechgroup.com/pricing"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center"></section>
            <div className="max-w-4xl mx-auto"></div>
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
          <section className="container mx-auto px-4 py-16"></section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"></div>
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
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
          <section className="container mx-auto px-4 py-16"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Additional Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"></div>
              {addOns.map((addon, index) => (
                <div key={index} className="cyber-card p-6 text-center"></div>
                  <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{addon.price}</div>
                  <p className="text-gray-300 text-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </section>
          {/* FAQ Section */}
          <section className="container mx-auto px-4 py-16"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-6"></div>
              {faqs.map((faq, index) => (
                <div key={index} className="cyber-card p-6"></div>
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center"></section>
            <div className="cyber-card p-12 max-w-4xl mx-auto"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to discuss your needs and find the perfect plan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
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

export default Page;
