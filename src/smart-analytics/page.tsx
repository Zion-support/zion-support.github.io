'use client'
import { Brain, BarChart, Target } from 'lucide-react'
import React from 'react'
import { CheckCircle, Star, Phone, BarChart } from 'lucide-react'

constSmartAnalyticsPage: React.FC= () =>{constfeatures= [
    {
      icon: BarChart,
      title: 'Real-time Dashboards',
      description: 'Monitor your business performance with live dashboards that update automatically and provide instant insights.',
      benefit: 'Make decisions10x faster'
   },
    {icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and predictions based on your data patterns and industry benchmarks.',
      benefit: 'Discover hidden opportunities'
   },
    {icon: Target,
      title: 'Custom Metrics',
      description: 'Track exactly what matters to your business with customizable KPIs and automated reporting.',
      benefit: 'Focus on what drives growth'
   },
    {icon: Zap,
      title: 'Automated Alerts',
      description: 'Get instant notifications when important metrics change or when action is needed.',
      benefit: 'Never miss critical changes'
   },
    {icon: Users,
      title: 'Team Collaboration',
      description: 'Share insights and reports with your team with role-based access and collaborative features.',
      benefit: 'Align your entire organization'
   },
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption, access controls, and compliance with industry standards.',
      benefit: '100% data protection'
    }
  ]

  constpricingPlans= [
    {name: 'Starter',
      price: '$19 9',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to5data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '1 user account',
        '3 0-day data retention'
      ],
      popular: false
   },
    {name: 'Professional',
      price: '$39 9',
      period: '/month',
      description: 'Ideal for growing teams',
      features: [
        'Up to 2 0 data sources',
        'Advanced dashboards',
        'AI-powered insights',
        'Priority support',
        'Up to 10users',
        '1-year data retention',
        'Custom metrics',
        'API access'
      ],
      popular: true
   },
    {name: 'Enterprise',
      price: '$79 9',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Custom dashboards',
        'Advanced AI analytics',
        'Dedicated support',
        'Unlimited users',
        'Unlimited data retention',
        'Custom integrations',
        'White-label options'
      ],
      popular: false
    }
  ]

  const integrations = [
    { name: 'Google Analytics', icon: '📊', description: 'Website traffic and behavior' },
    { name: 'Salesforce', icon: '💼', description: 'CRM and sales data' },
    { name: 'HubSpot', icon: '🎯', description: 'Marketing automation' },
    { name: 'Shopify', icon: '🛒', description: 'E-commerce analytics' },
    { name: 'Facebook Ads', icon: '📱', description: 'Social media advertising' },
    { name: 'Stripe', icon: '💳', description: 'Payment processing' },
    { name: 'Mailchimp', icon: '📧', description: 'Email marketing' },
    { name: 'Slack', icon: '💬', description: 'Team communication' }
  ]

  consttestimonials= [
    {name: 'Alex Thompson',
      company: 'GrowthCo',
      role: 'CEO',
      content: 'Smart Analytics helped us identify a 3 0% revenue opportunity we never knew existed. The AI insights are game-changing.',
      rating:5},
    {name: 'Maria Garcia',
      company: 'Digital Marketing Pro',
      role: 'Marketing Director',
      content: 'We can now track ROI across all channels in real-time. Our marketing efficiency improved by 5 0% in just2months.',
      rating:5},
    {name: 'James Wilson',
      company: 'E-commerce Solutions',
      role: 'Operations Manager',
      content: 'The automated alerts saved us from a potential crisis. We caught a 40% drop in conversions within minutes.',
      rating: 5
    }
  ]

const Page = () => {
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      {/* Hero Section */}
      <section className=&quot;container mx-auto px-4 py-16 pt-24&quot;></section>
        <div className=&quot;text-center mb-16&quot;></div>
          <div className=&quot;inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6&quot;></div>
            <BarChart className=&quot;w-10 h-10 text-white&quot; />
          </div>
          <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;>
            Smart Analytics
          </h1>
          <p className=&quot;text-xl md:text-2xl text-cyan-400 mb-8 font-medium&quot;>
            AI-Powered Business Intelligence
          </p>
          <p className=&quot;text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed&quot;>
            Transform your data into actionable insights with our AI-powered analytics platform.
            Get real-time dashboards, predictive analytics, and intelligent recommendations that
            drive growth and optimize performance.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;></div>
            <a
              href=&quot;tel:+13024640950&quot;
              className=&quot;bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center&quot;
            >
              <Phone className=&quot;w-5 h-5 mr-2&quot; />
              Call: (302) 464-0950
            </a>
            <a href=&quot;/contact&quot;
              className=&quot;border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300&quot;
            >
              Get Free Demo
            </a>
          </div>
        </div>
        {/* Key Benefits */}
        <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-8 mb-16&quot;></div>
          <div className=&quot;text-center&quot;></div>
            <div className=&quot;text-4xl font-bold text-cyan-400 mb-2&quot;>10x</div>
            <div className=&quot;text-white font-semibold mb-2&quot;>Faster Decisions</div>
            <div className=&quot;text-gray-300 text-sm&quot;>Real-time insights for instant action</div>
          </div>
          <div className=&quot;text-center&quot;></div>
            <div className=&quot;text-4xl font-bold text-purple-400 mb-2&quot;>50%</div>
            <div className=&quot;text-white font-semibold mb-2&quot;>Better Performance</div>
            <div className=&quot;text-gray-300 text-sm&quot;>AI recommendations improve results</div>
          </div>
          <div className=&quot;text-center&quot;></div>
            <div className=&quot;text-4xl font-bold text-green-400 mb-2&quot;>30%</div>
            <div className=&quot;text-white font-semibold mb-2&quot;>Revenue Growth</div>
            <div className=&quot;text-gray-300 text-sm&quot;>Identify hidden opportunities</div>
          </div>
          <div className=&quot;text-center&quot;></div>
            <div className=&quot;text-4xl font-bold text-orange-400 mb-2&quot;>100%</div>
            <div className=&quot;text-white font-semibold mb-2&quot;>Data Security</div>
            <div className=&quot;text-gray-300 text-sm&quot;>Enterprise-grade protection</div>
          </div>
        </div>
        {/* Features Section */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-12 text-center&quot;>
            Powerful Analytics Features
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
            {features.map((feature, index) => (
              <div key={index} className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300&quot;></div>
                <feature.icon className=&quot;w-12 h-12 text-cyan-400 mb-4&quot; />
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{feature.title}</h3>
                <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>{feature.description}</p>
                <div className=&quot;text-cyan-400 font-semibold text-sm&quot;>{feature.benefit}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Integrations Section */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-12 text-center&quot;>
            Connect All Your Data Sources
          </h2>
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6&quot;></div>
            {integrations.map((integration, index) => (
              <div key={index} className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center hover:border-cyan-400/40 transition-all duration-300&quot;></div>
                <div className=&quot;text-4xl mb-3&quot;>{integration.icon}</div>
                <h3 className=&quot;text-lg font-bold text-white mb-2&quot;>{integration.name}</h3>
                <p className=&quot;text-gray-300 text-sm&quot;>{integration.description}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Pricing Section */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-12 text-center&quot;>
            Simple, Transparent Pricing
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto&quot;></div>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-cyan-400 scale-105' 
                  : 'border-slate-700 hover:border-cyan-500/50'
              }`}></div>
                {plan.popular && (
                  <div className=&quot;bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4&quot;></div>
                    Most Popular
                  </div>
                )}
                <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{plan.name}</h3>
                <p className=&quot;text-gray-300 mb-6&quot;>{plan.description}</p>
                <div className=&quot;mb-6&quot;></div>
                  <span className=&quot;text-4xl font-bold text-white&quot;>{plan.price}</span>
                  <span className=&quot;text-gray-300&quot;>{plan.period}</span>
                </div>
                <ul className=&quot;space-y-3 mb-8&quot;>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 flex-shrink-0&quot; />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>
        {/* Testimonials */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-12 text-center&quot;>
            What Our Customers Say
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;></div>
            {testimonials.map((testimonial, index) => (
              <div key={index} className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20&quot;></div>
                <div className=&quot;flex items-center mb-4&quot;></div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className=&quot;w-5 h-5 text-yellow-400 fill-current&quot; />
                  ))}
                </div>
                <p className=&quot;text-gray-300 mb-4 italic&quot;>&quot;{testimonial.content}&quot;</p>
                <div></div>
                  <div className=&quot;font-semibold text-white&quot;>{testimonial.name}</div>
                  <div className=&quot;text-cyan-400 text-sm&quot;>{testimonial.role}</div>
                  <div className=&quot;text-gray-400 text-sm&quot;>{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className=&quot;text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20&quot;></section>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className=&quot;text-lg text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
            Join thousands of businesses using Smart Analytics to make data-driven decisions
            and accelerate growth.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;></div>
            <a
              href=&quot;tel:+13024640950&quot;
              className=&quot;bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center&quot;
            >
              <Phone className=&quot;w-5 h-5 mr-2&quot; />
              Call: (302) 464-0950
            </a>
            <a href=&quot;/contact&quot;
              className=&quot;border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300&quot;
            >
              Start Free Trial
            </a>
          </div>
        </section>
      </section>
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
    </div>
  )
}

export default Page;
