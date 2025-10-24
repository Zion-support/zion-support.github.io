    "use client",
import { Brain, BarChart, Target } from 'lucide-react';
import React from 'react';
import { CheckSquare } from 'lucide-react';
import { CheckCircle, Star, Phone } from 'lucide-react';
import { BarChart, Brain, Users, Target } from 'lucide-react'
import React from 'react'
import { BarChart, Brain, Users, Target } from 'lucide-react'
import { BarChart, Brain, Users, Target } from 'lucide-react'
constTaskManagerProPage: React.FC = () =>{const features = [
    {
      icon: CheckSquare,
      title: "AI Task Prioritization",
      description: 'Intelligent task prioritization that analyzes deadlines, dependencies, and importance to optimize your workflow.'
      benefit: 'Increase productivity by40%'
  }
    {
      icon: Users,
      title: "Team Collaboration",
      description: 'Seamless team collaboration with real-time updates, shared workspaces, and intelligent task assignment.'
      benefit: 'Improve team efficiency by60%'
  }
    {
      icon: Brain,
      title: "Smart Scheduling",
      description: 'AI-powered scheduling that considers your work patterns, energy levels, and optimal focus times.'
      benefit: 'Complete tasks30% faster'
  }
    {
      icon: Zap,
      title: "Automated Workflows",
      description: 'Create custom automation rules that trigger actions based on task completion, deadlines, and team updates.'
      benefit: 'Reduce manual work by70%'
  }
    {
      icon: Target,
      title: "Goal Tracking",
      description: 'Set and track SMART goals with AI insights on progress, roadblocks, and optimization opportunities.'
      benefit: 'Achieve85% of your goals'
  }
    {
      icon: BarChart,
      title: "Performance Analytics",
      description: 'Comprehensive analytics on productivity patterns, team performance, and project success metrics.'
      benefit: 'Data-driven improvements'
  }
  ]
  constpricingPlans= []
    {
      name: "Individual",
      price: "$1 9",
      period: "/month",
      description: 'Perfect for personal use'
      features: []
    "Unlimited personal tasks",
    "Basic AI prioritization",
    "Mobile app access",
    "Basic reporting",
    "Email support",
    "1 year data retention",
  ]
      popular: false
  }
    {
      name: "Team",
      price: "$4 9",
      period: "/month",
      description: 'Ideal for small teams'
      features: []
    "Up to 10team members",
    "Advanced AI features",
    "Team collaboration",
    "Custom workflows",
    "Priority support",
    "Advanced analytics",
    "API access",
    "2 years data retention",
  ]
      popular: true
  }
    {
      name: "Enterprise",
      price: "$14 9",
      period: "/month",
      description: 'For large organizations'
      features: []
    "Unlimited team members",
    "Premium AI features",
    "Custom integrations",
    "Dedicated support",
    "White-label options",
    "Advanced security",
    "Unlimited data retention",
    "Custom compliance",
  ]
      popular: false
  }
  ]
  const integrations = [
  ]
    { name: 'Slack', icon: '💬', description: 'Team communication' },
    { name: 'Microsoft Teams', icon: '👥', description: 'Collaboration platform' },
    { name: 'Google Workspace', icon: '📧', description: 'Productivity suite' },
    { name: 'Jira', icon: '🎯', description: 'Project management' },
    { name: 'Asana', icon: '📋', description: 'Task management' },
    { name: 'Trello', icon: '📌', description: 'Visual boards' },
    { name: 'Notion', icon: '📝', description: 'Documentation' },
  const integrations = []
    { name: 'Slack', icon: '💬', description: 'Team communication' }
    { name: 'Microsoft Teams', icon: '👥', description: 'Collaboration platform' }
    { name: 'Google Workspace', icon: '📧', description: 'Productivity suite' }
    { name: 'Jira', icon: '🎯', description: 'Project management' }
    { name: 'Asana', icon: '📋', description: 'Task management' }
    { name: 'Trello', icon: '📌', description: 'Visual boards' }
    { name: 'Notion', icon: '📝', description: 'Documentation' }
    { name: 'GitHub', icon: '💻', description: 'Development workflow' }
  ]
  consttestimonials= []
    {name: "Rachel Green",
      company: 'Marketing Agency'
      role: "Project Manager",
      content: 'Task Manager Pro transformed our team productivity. We complete projects40% faster with better quality.'
      rating:5}
    {name: "Tom Anderson",
      company: 'Software Startup'
      role: "CEO",
      content: 'The AI prioritization is incredible. It knows exactly what to focus on and when. Our team loves it.'
      rating:5}
    {name: "Lisa Park",
      company: 'Consulting Firm'
      role: "Operations Director",
      content: 'The automation features saved us 15 hours per week. We can now focus on high-value work.'
      rating: 5
  }
  ]
const Page = () => {
  return (
    <div className="min-h-s creenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="con tainermx-auto px-4 py-16 pt-24">
        <div className="tex t-centermb-16">
          <div className="inl ine-flexitems-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
            <CheckSquare className="w-10h-10te x t-white" />
          </div>
          <h1 className="tex t-4xlmd: text-6xl font-bold text-white mb-6">
        </div>
            Task Manager Pro
          </h1>
          <p className="tex t-xlmd:text-2xl text-cyan-400 mb-8 font-medium">
        </div>
            AI-Powered Productivity Platform
          </p>
          <p className="tex t-lgtext-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
        </div>
            Supercharge your productivity with our AI-powered task management platform.
            Get intelligent prioritization, automated workflows, and team collaboration
            tools that help you achieve more in less time.
          </p>
          <div className="fle xflex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+13024640950">
              className="bg-gr adient-to-rfrom-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
        </div>
              <Phone className="w-5h-5mr-2" />
              Call: (302) 464-0950
            </a>
            <a href="/contact">
              className="bor der-2border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
        </div>
              Start Free Trial
            </a>
          </div>
        </div>
        {/* Key Benefits */}
        <div className="gri dgrid-cols-1 md: grid-cols-4 gap-8 mb-16">
          <div className="tex t-center">
            <div className="tex t-4xlfont-bold text-cyan-400 mb-2">40%</div>
            <div className="tex t-whitefont-semibold mb-2">More Productive</div>
            <div className="tex t-gray-300text-sm">With AI prioritization</div>
          </div>
          <div className="tex t-center">
            <div className="tex t-4xlfont-bold text-purple-400 mb-2">60%</div>
            <div className="tex t-whitefont-semibold mb-2">Team Efficiency</div>
            <div className="tex t-gray-300text-sm">Better collaboration tools</div>
          </div>
          <div className="tex t-center">
            <div className="tex t-4xlfont-bold text-green-400 mb-2">70%</div>
            <div className="tex t-whitefont-semibold mb-2">Less Manual Work</div>
            <div className="tex t-gray-300text-sm">With automation</div>
          </div>
          <div className="tex t-center">
            <div className="tex t-4xlfont-bold text-orange-400 mb-2">85%</div>
            <div className="tex t-whitefont-semibold mb-2">Goal Achievement</div>
            <div className="tex t-gray-300text-sm">With smart tracking</div>
          </div>
        </div>
        {/* Features Section */}
        <section className="mb-16">
          <h2 className="tex t-3xlmd: text-4xl font-bold text-white mb-12 text-center">
        </div>
            Powerful Task Management Features
          </h2>
          <div className="gri dgrid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => ()
              <div key={index} className="bg-sl ate-800/50backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover: border-cyan-400/40 transition-all duration-300">
                <feature.icon className="w-12h-12te x t-cyan-400 mb-4" />
                <h3 className="tex t-xlfont-bold text-white mb-3">{feature.title}</h3>
                <p className="tex t-gray-300mb-4 leading-relaxed">{feature.description}</p>
                <div className="tex t-cyan-400font-semibold text-sm">{feature.benefit}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Integrations Section */}
        <section className="mb-16">
          <h2 className="tex t-3xlmd: text-4xl font-bold text-white mb-12 text-center">
        </div>
            Works with Your Tools
          </h2>
          <div className="gri dgrid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => ()
              <div key={index} className="bg-sl ate-800/50backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center hover: border-cyan-400/40 transition-all duration-300">
                <div className="tex t-4xlmb-3">{integration.icon}</div>
                <h3 className="tex t-lgfont-bold text-white mb-2">{integration.name}</h3>
                <p className="tex t-gray-300text-sm">{integration.description}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="tex t-3xlmd: text-4xl font-bold text-white mb-12 text-center">
        </div>
            Simple, Transparent Pricing
          </h2>
          <div className="gri dgrid-cols-1 md: grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => ()
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300 ${}>
                plan.popular
                  ? 'border-cyan-400 scale-105'
                  : 'border-slate-700 hover: border-cyan-500/50'
              }`}></div>
                {plan.popular && ()
                  <div className="bg-cy an-400text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="tex t-2xlfont-bold text-white mb-2">{plan.name}</h3>
                <p className="tex t-gray-300mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="tex t-4xlfont-bold text-white">{plan.price}</span>
                  <span className="tex t-gray-300">{plan.period}</span>
                </div>
                <ul className="spa ce-y-3mb-8">
        </div>
                  {plan.features.map((feature, featureIndex) => ()
                    <li key={featureIndex} className="fle xitems-center text-gray-300">
        </div>
                      <CheckCircle className="w-5h-5te x t-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${}>
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover: from-cyan-500 hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
{            ))}
          </div>
        </section>
        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="tex t-3xlmd: text-4xl font-bold text-white mb-12 text-center">
        </div>
            What Our Users Say
          </h2>
          <div className="gri dgrid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => ()
              <div key={index} className="bg-sl ate-800/50backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <div className="fle xitems-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => ()
                    <Star key={i} className="w-5h-5te x t-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="tex t-gray-300mb-4 italic">"{testimonial.content}"</p>
                  <div className="fon t-semiboldtext-white">{testimonial.name}</div>
                  <div className="tex t-cyan-400text-sm">{testimonial.role}</div>
                  <div className="tex t-gray-400text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className="tex t-centerbg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20">
          <h2 className="tex t-3xlmd: text-4xl font-bold text-white mb-6">
        </div>
            Ready to Supercharge Your Productivity?
          </h2>
          <p className="tex t-lgtext-gray-300 mb-8 max-w-2xl mx-auto">
        </div>
            Join thousands of professionals using Task Manager Pro to achieve more
            work smarter, and reach their goals faster.
          </p>
          <div className="fle xflex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+13024640950">
              className="bg-gr adient-to-rfrom-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
        </div>
              <Phone className="w-5h-5mr-2" />
              Call: (302) 464-0950
            </a>
            <a href="/contact">
              className="bor der-2border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
        </div>
              Start Free Trial
            </a>
          </div>
        </section>
      </section>
    </div>
  )
{};
;
  }
export default Page;