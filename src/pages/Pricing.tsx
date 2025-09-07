import React from 'react';''
import Button from '../components/Button';'
const Pricing: React.FC = () => {
  const pricingTiers = [
    {'
      name: 'Basic',''
      price: '$29',''
      frequency: '/month','
      features: ['
        '5 AI Models',''
        '1000 API Calls',''
        'Basic Analytics',''
        'Email Support',']
      ],'
      buttonText: 'Start Free Trial','
      highlight: false,
    },
    {'
      name: 'Pro',''
      price: '$99',''
      frequency: '/month','
      features: ['
        '20 AI Models',''
        '10000 API Calls',''
        'Advanced Analytics',''
        'Priority Support',''
        'Custom Integrations',']
      ],'
      buttonText: 'Get Started','
      highlight: true,
    },
    {'
      name: 'Enterprise',''
      price: 'Custom',''
      frequency: '','
      features: ['
        'Unlimited AI Models',''
        'Unlimited API Calls',''
        'Dedicated Support',''
        'On-premise Deployment',''
        'SLA Guarantee',']
      ],'
      buttonText: 'Contact Sales','
      highlight: false,
    },
  ];

  return ('
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen pt-20">"
</div>"
      <div className="container mx-auto px-4 py-16">"
</div>"
        <div className="text-center mb-16">"
</div>"
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">"
</h1>
          </h1>"
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">"
</p>
          </p>
        </div>
"
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
</div>
            <div;
              key={index}
              className={`bg-slate-800 rounded-lg shadow-lg p-8 border ${"
                tier.highlight ? 'border-blue-500 transform scale-105' : 'border-slate-700''
              } transition-all duration-300 hover:shadow-2xl`}
            >
</div>'
              <h2 className="text-3xl font-bold mb-4 text-white">{tier.name}</h2>""
              <p className="text-5xl font-extrabold text-blue-500 mb-6">"
</p>"
                {tier.frequency && <span className="text-xl text-gray-400">{tier.frequency}</span>}"
              </p>"
              <ul className="text-gray-300 text-lg mb-8 space-y-3">"
</ul>"
                  <li key={featureIndex} className="flex items-center">"
</li>"
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">"
</svg>
                      <path;"
                        fillRule="evenodd"""
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"""
                        clipRule="evenodd""
                      />
</path>
                    </svg>
                  </li>
              </ul>"
              <Button variant={tier.highlight ? 'primary' : 'outline'} size="large" className="w-full">"
</Button>
              </Button>
            </div>
        </div>
"
        <div className="mt-16 text-center">"
</div>"
          <h2 className="text-4xl font-bold mb-8">Need a Custom Solution?</h2>""
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">"
</p>
          </p>"
          <Button variant="primary" size="large">"
</Button>
          </Button>
        </div>
      </div>
    </div>)"