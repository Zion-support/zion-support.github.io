import React from 'react';';
import { Link } from 'react-router-dom';';
import { CheckCircle, X, Zap, Brain, Cloud, ArrowRight, Star, Users, Shield, Clock } from 'lucide-react';';
import Navigation from '../components/Navigation';';
import Footer from '../components/Footer';';';
const PricingPage: React.FC = () => {;
const plans = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Starter','
      description: 'Perfect for small businesses getting started with AI','
      price: '$2,500','
      period: '/month','
      icon: Zap,
      color: 'blue','
      features: [
  // TODO: Add items
]
  // TODO: Add items
]
        'AI Strategy Consultation','
        'Basic Machine Learning Models','
        'Monthly Analytics Reports','
        'Email Support','
        'Up to 5 Users','
        'Basic Integration Support''
      ],
      limitations: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Limited Custom Models','
        'Standard Support Hours','
        'Basic Analytics''
      ],
      cta: 'Get Started','
      popular: false
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Professional','
      description: 'Ideal for growing companies with advanced AI needs','
      price: '$7,500','
      period: '/month','
      icon: Brain,
      color: 'cyan','
      features: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Everything in Starter','
        'Custom AI Model Development','
        'Advanced Analytics & Insights','
        'Priority Support (24/7)','
        'Up to 25 Users','
        'API Access','
        'Custom Integrations','
        'Monthly Strategy Reviews','
        'Performance Optimization''
      ],
      limitations: [],
      cta: 'Start Free Trial','
      popular: true
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Enterprise','
      description: 'Complete AI transformation for large organizations','
      price: 'Custom','
      period: '','
      icon: Cloud,
      color: 'purple','
      features: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Everything in Professional','
        'Dedicated AI Team','
        'Custom AI Architecture','
        'White-label Solutions','
        'Unlimited Users','
        'Advanced Security Features','
        'Compliance Support','
        'Quarterly Business Reviews','
        'Custom Training Programs','
        'SLA Guarantees''
      ],
      limitations: [],
      cta: 'Contact Sales','
      popular: false
    }
  ];
const addOns = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Additional AI Models','
      description: 'Extra custom AI models beyond your plan limits','
      price: '$500','
      period: '/model/month''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Priority Support','
      description: '24/7 priority support with dedicated account manager','
      price: '$1,000','
      period: '/month''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Custom Integrations','
      description: 'Bespoke integrations with your existing systems','
      price: '$2,000','
      period: '/integration''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Training & Workshops','
      description: 'On-site or virtual training for your team','
      price: '$5,000','
      period: '/day''
    }
  ];
const faqs = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'Can I change my plan at any time?','
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the beginning of your next billing cycle.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'Is there a free trial available?','
      answer: 'Yes, we offer a 14-day free trial for our Professional plan. No credit card required to start.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'What happens if I exceed my plan limits?','
      answer: 'We\'ll notify you when you\'re approaching your limits and help you upgrade or purchase additional capacity.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'Do you offer custom pricing for large organizations?','
      answer: 'Yes, we offer custom pricing and enterprise solutions for organizations with specific needs. Contact our sales team for more information.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'What support is included?','
      answer: 'All plans include email support. Professional and Enterprise plans include priority support with faster response times.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'Can I cancel anytime?','
      answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.''
    }
  ];
const getColorClasses = (color: string) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    switch (color) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      case 'blue':'
        return {
  // TODO: Add properties
}
  // TODO: Add properties
}
          bg: 'bg-blue-500','
          text: 'text-blue-500','
          border: 'border-blue-500','
          light: 'bg-blue-50','
          textLight: 'text-blue-600''
        }
      case 'cyan':'
        return {
  // TODO: Add properties
}
  // TODO: Add properties
}
          bg: 'bg-cyan-500','
          text: 'text-cyan-500','
          border: 'border-cyan-500','
          light: 'bg-cyan-50','
          textLight: 'text-cyan-600''
        }
      case 'purple':'
        return {
  // TODO: Add properties
}
  // TODO: Add properties
}
          bg: 'bg-purple-500','
          text: 'text-purple-500','
          border: 'border-purple-500','
          light: 'bg-purple-50','
          textLight: 'text-purple-600''
        }
      default:
        return {
  // TODO: Add properties
}
  // TODO: Add properties
}
          bg: 'bg-gray-500','
          text: 'text-gray-500','
          border: 'border-gray-500','
          light: 'bg-gray-50','
          textLight: 'text-gray-600''
        }
  }
  return (
  // TODO: Add parameters
)
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"relative py-20 px-4"
<div className="
<h1 className="text-5 xl md:text-6 xl font-bold text-white mb-6"text-cyan-400"
          <p className="
            Choose the perfect plan for your business. All plans include our core AI and IT solutions with transparent pricing.
      {/* Pricing Plans */}
      <section className="py-20 bg-white"max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"
<div className="
            {plans.map((plan, index) => {;
const colors = getColorClasses(plan.color)
              return (
  // TODO: Add parameters
)
                <$2 />
                  key={index}
                  className={`relative bg-white rounded-2 xl shadow-lg border-2 ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                    plan.popular ? colors.border : 'border-gray-200''
                  } overflow-hidden`}
                >
                  {plan.popular && (
  // TODO: Add parameters
)
                    <div className={`absolute top-0 left-0 right-0 ${colors.bg} text-white text-center py-2 text-sm font-semibold`}>Most Popular
                  )}
                  <div className={`p-8 ${plan.popular ? 'pt-12' : '}`}>''
<div className="text-center mb-8"text-2 xl font-bold text-gray-900 mb-2"
                      <p className="
                      <div className="flex items-baseline justify-center"text-4 xl font-bold text-gray-900"
                        <span className="
                    <div className="mb-8"font-semibold text-gray-900 mb-4"
                      <ul className="
                        {plan.features.map((feature, featureIndex) => (
  // TODO: Add parameters
)
                          <li key={featureIndex} className="flex items-start"w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
<span className="
                        ))}
                    {plan.limitations.length > 0 && (
  // TODO: Add parameters
)
                      <div className="mb-8"font-semibold text-gray-900 mb-4"
                        <ul className="
                          {plan.limitations.map((limitation, limitationIndex) => (
  // TODO: Add parameters
)
                            <li key={limitationIndex} className="flex items-start"w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0"
<span className="
                          ))}
                    )}
                    <$2 />
                      to="/contact"
                      className={`w-full ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                        plan.popular
                          ? `${colors.bg} hover:opacity-90 text-white`
                          : `${colors.border} ${colors.text} hover:${colors.bg} hover:text-white`
                      } border-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center block`}
                    >
                      {plan.cta}
              )
            })}
      {/* Add-ons */}
      <section className="py-20 bg-gray-50"max-w-7 xl mx-auto px-4 sm: px-6 lg:px-8"
<div className="
<h2 className="text-3 xl md:text-4 xl font-bold text-gray-900 mb-4"text-xl text-gray-600"
              Enhance your plan with additional services and features,

          </div>
<div className="
            {addOns.map((addOn, index) => (
  // TODO: Add parameters
)
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"text-lg font-bold text-gray-900 mb-2"
                <p className="
                <div className="flex items-baseline justify-between"text-2 xl font-bold text-cyan-600"
                  <span className="
            ))}
      {/* FAQ Section */}
      <section className="py-20 bg-white"max-w-4 xl mx-auto px-4 sm: px-6 lg:px-8"
<div className="
<h2 className="text-3 xl md:text-4 xl font-bold text-gray-900 mb-4"text-xl text-gray-600"
              Everything you need to know about our pricing and plans,

          </div>
<div className="
            {faqs.map((faq, index) => (
  // TODO: Add parameters
)
              <div key={index} className="bg-gray-50 rounded-xl p-6"text-lg font-semibold text-gray-900 mb-3"
                <p className="
            ))}
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600"max-w-7 xl mx-auto px-4 sm: px-6 lg:px-8 text-center"
<h2 className="
            Ready to Get Started?
          <p className="text-xl text-cyan-100 mb-8 max-w-3 xl mx-auto"flex flex-col sm:flex-row gap-4 justify-center"
<$2 />
              to=""
              className="
              Start Free Trial

            <$2 />
              to="/demo"
              className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-cyan-600 transition-all duration-300"
              Schedule Demo

          </div></div>
</section>
<Footer /></div>
  ),
}
export default PricingPage</Link></Link>;
</p></h2>
</p></h2>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></span>
</span></span>
</span></span>
</span></span>
</p></p>
</p></p>
</p></p>
</h1></h2>
</h3></h3>
</h3></h4>
</h4></ul>
</ul></li>
</li></section>
</section></section>
</section>