<<<<<<< HEAD
    "use client",
import { Brain, BarChart, Target } from 'lucide-react';
import React from 'react';
import { CheckCircle, Star, Phone, BarChart } from 'lucide-react';
import { Users, Mail, Target, BarChart, Brain } from 'lucide-react'
import React from 'react'
import { Users, Mail, Target, BarChart, Brain } from 'lucide-react'
constSmartAnalyticsPage: React.FC = () =>{const features = [
    {
      icon: BarChart,
      title: "Real-time Dashboards",
      description: 'Monitor your business performance with live dashboards that update automatically and provide instant insights.'
      benefit: 'Make decisions10x faster'
  }
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: 'Get intelligent recommendations and predictions based on your data patterns and industry benchmarks.'
      benefit: 'Discover hidden opportunities'
  }
    {
      icon: Target,
      title: "Custom Metrics",
      description: 'Track exactly what matters to your business with customizable KPIs and automated reporting.'
      benefit: 'Focus on what drives growth'
  }
    {
      icon: Zap,
      title: "Automated Alerts",
      description: 'Get instant notifications when important metrics change or when action is needed.'
      benefit: 'Never miss critical changes'
  }
    {
      icon: Users,
      title: "Team Collaboration",
      description: 'Share insights and reports with your team with role-based access and collaborative features.'
      benefit: 'Align your entire organization'
  }
    {
      icon: Shield,
      title: "Enterprise Security",
      description: 'Bank-level security with data encryption, access controls, and compliance with industry standards.'
      benefit: '100% data protection'
  }
  ]
  constpricingPlans= []
    {
      name: "Starter",
      price: "$19 9",
      period: "/month",
      description: 'Perfect for small businesses'
      features: []
    "Up to5data sources",
    "Basic dashboards",
    "Standard reports",
    "Email support",
    "1 user account",
    "3 0-day data retention",
  ]
      popular: false
  }
    {
      name: "Professional",
      price: "$39 9",
      period: "/month",
      description: 'Ideal for growing teams'
      features: []
    "Up to 2 0 data sources",
    "Advanced dashboards",
    "AI-powered insights",
    "Priority support",
    "Up to 10users",
    "1-year data retention",
    "Custom metrics",
    "API access",
  ]
      popular: true
  }
    {
      name: "Enterprise",
      price: "$79 9",
      period: "/month",
      description: 'For large organizations'
      features: []
    "Unlimited data sources",
    "Custom dashboards",
    "Advanced AI analytics",
    "Dedicated support",
    "Unlimited users",
    "Unlimited data retention",
    "Custom integrations",
    "White-label options",
  ]
      popular: false
  }
  ]
  const integrations = [
  ]
    { name: 'Google Analytics', icon: '📊', description: 'Website traffic and behavior' },
    { name: 'Salesforce', icon: '💼', description: 'CRM and sales data' },
    { name: 'HubSpot', icon: '🎯', description: 'Marketing automation' },
    { name: 'Shopify', icon: '🛒', description: 'E-commerce analytics' },
    { name: 'Facebook Ads', icon: '📱', description: 'Social media advertising' },
    { name: 'Stripe', icon: '💳', description: 'Payment processing' },
    { name: 'Mailchimp', icon: '📧', description: 'Email marketing' },
  const integrations = []
    { name: 'Google Analytics', icon: '📊', description: 'Website traffic and behavior' }
    { name: 'Salesforce', icon: '💼', description: 'CRM and sales data' }
    { name: 'HubSpot', icon: '🎯', description: 'Marketing automation' }
    { name: 'Shopify', icon: '🛒', description: 'E-commerce analytics' }
    { name: 'Facebook Ads', icon: '📱', description: 'Social media advertising' }
    { name: 'Stripe', icon: '💳', description: 'Payment processing' }
    { name: 'Mailchimp', icon: '📧', description: 'Email marketing' }
    { name: 'Slack', icon: '💬', description: 'Team communication' }
  ]
  consttestimonials= []
    {name: "Alex Thompson",
      company: 'GrowthCo'
      role: "CEO",
      content: 'Smart Analytics helped us identify a 3 0% revenue opportunity we never knew existed. The AI insights are game-changing.'
      rating:5}
    {name: "Maria Garcia",
      company: 'Digital Marketing Pro'
      role: "Marketing Director",
      content: 'We can now track ROI across all channels in real-time. Our marketing efficiency improved by 5 0% in just2months.'
      rating:5}
    {name: "James Wilson",
      company: 'E-commerce Solutions'
      role: "Operations Manager",
      content: 'The automated alerts saved us from a potential crisis. We caught a 40% drop in conversions within minutes.'
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
            <BarChart className="w-10h-10te x t-white" />
          </div>
          <h1 className="tex t-4xlmd: text-6xl font-bold text-white mb-6">
        </div>
            Smart Analytics
          </h1>
          <p className="tex t-xlmd:text-2xl text-cyan-400 mb-8 font-medium">
        </div>
            AI-Powered Business Intelligence
          </p>
          <p className="tex t-lgtext-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
        </div>
            Transform your data into actionable insights with our AI-powered analytics platform.
            Get real-time dashboards, predictive analytics, and intelligent recommendations that
            drive growth and optimize performance.
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
              Get Free Demo
            </a>
          </div>
        </div>
        {/* Key Benefits */}
        <div className="gri dgrid-cols-1 md: grid-cols-4 gap-8 mb-16">
          <div className="tex t-center">
            <div className="tex t-4xlfont-bold text-cyan-400 mb-2">10x</div>
            <div className="tex t-whitefont-semibold mb-2">Faster Decisions</div>
            <div className="tex t-gray-300text-sm">Real-time insights for instant action</div>
          </div>
          <div className="tex t-center">
            <div className="tex t-4xlfont-bold text-purple-400 mb-2">50%</div>
            <div className="tex t-whitefont-semibold mb-2">Better Performance</div>
            <div className="tex t-gray-300text-sm">AI recommendations improve results</div>
          </div>
          <div className="tex t-center">
            <div className="tex t-4xlfont-bold text-green-400 mb-2">30%</div>
            <div className="tex t-whitefont-semibold mb-2">Revenue Growth</div>
            <div className="tex t-gray-300text-sm">Identify hidden opportunities</div>
          </div>
          <div className="tex t-center">
            <div className="tex t-4xlfont-bold text-orange-400 mb-2">100%</div>
            <div className="tex t-whitefont-semibold mb-2">Data Security</div>
            <div className="tex t-gray-300text-sm">Enterprise-grade protection</div>
          </div>
        </div>
        {/* Features Section */}
        <section className="mb-16">
          <h2 className="tex t-3xlmd: text-4xl font-bold text-white mb-12 text-center">
        </div>
            Powerful Analytics Features
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
            Connect All Your Data Sources
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
            What Our Customers Say
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
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="tex t-lgtext-gray-300 mb-8 max-w-2xl mx-auto">
        </div>
            Join thousands of businesses using Smart Analytics to make data-driven decisions
            and accelerate growth.
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
=======
import React from "react";

interface PagePageProps {
  // Add props here
}

const PagePage: React.FC<PagePageProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            This is a placeholder for the  page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PagePage;
>>>>>>> origin/main
