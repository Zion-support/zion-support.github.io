'use client'
import { Brain, BarChart, Target } from 'lucide-react'
import React from 'react'
import { CheckSquare } from 'lucide-react'
import { CheckCircle, Star, Phone } from 'lucide-react'

constTaskManagerProPage: React.FC= () =>{constfeatures= [
    {
      icon: CheckSquare,
      title: 'AI Task Prioritization',
      description: 'Intelligent task prioritization that analyzes deadlines, dependencies, and importance to optimize your workflow.',
      benefit: 'Increase productivity by40%'
   },
    {icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless team collaboration with real-time updates, shared workspaces, and intelligent task assignment.',
      benefit: 'Improve team efficiency by60%'
   },
    {icon: Brain,
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that considers your work patterns, energy levels, and optimal focus times.',
      benefit: 'Complete tasks30% faster'
   },
    {icon: Zap,
      title: 'Automated Workflows',
      description: 'Create custom automation rules that trigger actions based on task completion, deadlines, and team updates.',
      benefit: 'Reduce manual work by70%'
   },
    {icon: Target,
      title: 'Goal Tracking',
      description: 'Set and track SMART goals with AI insights on progress, roadblocks, and optimization opportunities.',
      benefit: 'Achieve85% of your goals'
   },
    {icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics on productivity patterns, team performance, and project success metrics.',
      benefit: 'Data-driven improvements'
    }
  ]

  constpricingPlans= [
    {name: 'Individual',
      price: '$1 9',
      period: '/month',
      description: 'Perfect for personal use',
      features: [
        'Unlimited personal tasks',
        'Basic AI prioritization',
        'Mobile app access',
        'Basic reporting',
        'Email support',
        '1 year data retention'
      ],
      popular: false;
   },
    {name: 'Team',
      price: '$4 9',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        'Up to 10team members',
        'Advanced AI features',
        'Team collaboration',
        'Custom workflows',
        'Priority support',
        'Advanced analytics',
        'API access',
        '2 years data retention'
      ],
      popular: true;
   },
    {name: 'Enterprise',
      price: '$14 9',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Premium AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'Unlimited data retention',
        'Custom compliance'
      ],
      popular: false
    }
  ]

  const integrations = [
    { name: 'Slack', icon: '💬', description: 'Team communication' },
    { name: 'Microsoft Teams', icon: '👥', description: 'Collaboration platform' },
    { name: 'Google Workspace', icon: '📧', description: 'Productivity suite' },
    { name: 'Jira', icon: '🎯', description: 'Project management' },
    { name: 'Asana', icon: '📋', description: 'Task management' },
    { name: 'Trello', icon: '📌', description: 'Visual boards' },
    { name: 'Notion', icon: '📝', description: 'Documentation' },
    { name: 'GitHub', icon: '💻', description: 'Development workflow' }
  ]

  consttestimonials= [
    {name: 'Rachel Green',
      company: 'Marketing Agency',
      role: 'Project Manager',
      content: 'Task Manager Pro transformed our team productivity. We complete projects40% faster with better quality.',
      rating:5},
    {name: 'Tom Anderson',
      company: 'Software Startup',
      role: 'CEO',
      content: 'The AI prioritization is incredible. It knows exactly what to focus on and when. Our team loves it.',
      rating:5},
    {name: 'Lisa Park',
      company: 'Consulting Firm',
      role: 'Operations Director',
      content: 'The automation features saved us 15 hours per week. We can now focus on high-value work.',
      rating: 5;
    }
  ]

const Page = () => {
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      {/* Hero Section */}
      <section className=&quot;container mx-auto px-4 py-16 pt-24&quot;></section>
        <div className=&quot;text-center mb-16&quot;></div>
          <div className=&quot;inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6&quot;></div>
            <CheckSquare className=&quot;w-10 h-10 text-white&quot; />
          </div>
          <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;>
            Task Manager Pro
          </h1>
          <p className=&quot;text-xl md:text-2xl text-cyan-400 mb-8 font-medium&quot;>
            AI-Powered Productivity Platform
          </p>
          <p className=&quot;text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed&quot;>
            Supercharge your productivity with our AI-powered task management platform.
            Get intelligent prioritization, automated workflows, and team collaboration;
            tools that help you achieve more in less time.
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
              Start Free Trial</a>
          </div>
        </div>
        {/* Key Benefits */}
        <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-8 mb-16&quot;></div>
          <div className=&quot;text-center&quot;></div>
            <div className=&quot;text-4xl font-bold text-cyan-400 mb-2&quot;>40%</div>
            <div className=&quot;text-white font-semibold mb-2&quot;>More Productive</div>
            <div className=&quot;text-gray-300 text-sm&quot;>With AI prioritization</div>
          </div>
          <div className=&quot;text-center&quot;></div>
            <div className=&quot;text-4xl font-bold text-purple-400 mb-2&quot;>60%</div>
            <div className=&quot;text-white font-semibold mb-2&quot;>Team Efficiency</div>
            <div className=&quot;text-gray-300 text-sm&quot;>Better collaboration tools</div>
          </div>
          <div className=&quot;text-center&quot;></div>
            <div className=&quot;text-4xl font-bold text-green-400 mb-2&quot;>70%</div>
            <div className=&quot;text-white font-semibold mb-2&quot;>Less Manual Work</div>
            <div className=&quot;text-gray-300 text-sm&quot;>With automation</div>
          </div>
          <div className=&quot;text-center&quot;></div>
            <div className=&quot;text-4xl font-bold text-orange-400 mb-2&quot;>85%</div>
            <div className=&quot;text-white font-semibold mb-2&quot;>Goal Achievement</div>
            <div className=&quot;text-gray-300 text-sm&quot;>With smart tracking</div>
          </div>
        </div>
        {/* Features Section */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-12 text-center&quot;>
            Powerful Task Management Features
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
            Works with Your Tools
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
                plan.popular;
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
                  plan.popular;
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started</button>
              </div>
            ))}
          </div>
        </section>
        {/* Testimonials */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-12 text-center&quot;>
            What Our Users Say
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
            Ready to Supercharge Your Productivity?
          </h2>
          <p className=&quot;text-lg text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
            Join thousands of professionals using Task Manager Pro to achieve more,
            work smarter, and reach their goals faster.
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
              Start Free Trial</a>
          </div>
        </section>
      </section>
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
    </div>
  )
}

export default Page;
