import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check  } from "lucide-react";
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check, Send, BarChart3, DollarSign, Activity, Lock, FileText, CreditCard, Building2, Sparkles, PieChart } from 'lucide-react'

<<<<<<< HEAD:app/zion-ai-task-scheduler/page.tsx
const ZionAiTaskSchedulerPage: React.FC = () => {
=======
<<<<<<< HEAD:temp-pages/ai-email-marketing-automation/page.tsx
const Aiemailmarketingautomation = () => {
  const features = [
    {
      icon: "🚀",
      title: "Professional",
      description: "Professional email marketing automation solutions"
const PagePage: React.FC = () => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3e67:temp-pages/ai-email-marketing-automation/page.tsx
  const features = [
    {
      icon: Brai,
      title: 'AI-Powered Intelligence,',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
<<<<<<< HEAD:app/zion-ai-task-scheduler/page.tsx
}
=======
>>>>>>> main:app/zion-smart-expense-tracker/page.tsx
    },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3e67:temp-pages/ai-email-marketing-automation/page.tsx
    {
      icon: BarChar,
      title: 'Advanced Analytics,',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Targe,
      title: 'Precision Targeting,',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
<<<<<<< HEAD:app/zion-ai-task-scheduler/page.tsx
      icon: TrendingU,
      title: 'Growth Optimization,',
=======
<<<<<<< HEAD:temp-pages/ai-email-marketing-automation/page.tsx
      icon: "🔧",
      title: "Customizable",
      description: "Tailored solutions for your business needs"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Email Marketing Automation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional email marketing automation solutions tailored to your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-300">
              Everything you need for success
            </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
            ))}
          </div>
        </div>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let us help you implement this solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Your Project
            </a>
            <a
              href="/about"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </a>
        </div></div></div></div></div></div>
      </section>
  );
};

export default Aiemailmarketingautomation;
      icon: TrendingUp,
      title: 'Growth Optimization',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3e67:temp-pages/ai-email-marketing-automation/page.tsx
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  const benefits = ['Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <><Navigation /></Navigation>
      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900'></div>
        {/* Hero Section */}
        <section className='relative py-20 px-4 overflow-hidden'></section>
          <div className='absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20'></div>
          <div className='relative max-w-7xl mx-auto text-center'></div>
            <h1 className='text-5xl md: text-7xl font-bold text-white mb-6 leading-tight'></h1>
              Page
            </h1>
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'></p>
              Advanced Page solution for modern businesses.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'></div>
              <button className='bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center'></button>
                Get Started
                <ArrowRight className="w-8 h-8" />
              </button>
              <button className='border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200'></button>
                Learn More
              </button>
            </div>
          </div>
        </section>
    </>

        {/* Features Section *,/}
        <section className='py-20 px-4'></section>
          <div className='max-w-7xl mx-auto'></div>
            <div className='text-center mb-16'></div>
              <h2 className='text-4xl font-bold text-white mb-4'>Key Features</h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'></p>
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className='grid md: grid-cols-2 lg:grid-cols-4 gap-8'></div>
              {features.map((featur, e, index) => (
                <div key={ ind, e, x }className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20'></div>
                  <feature.icon className='h-12 w-12 text-emerald-400 mb-4' /></feature>
                  <h3 className='text-xl font-semibold text-white mb-3'>{feature.title}</h3>
                  <p className='text-gray-300 mb-4'>{feature.description}</p>
                  <ul className='space-y-2'></ul>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-8 h-8" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='py-20 px-4 bg-white/5'></section>
          <div className='max-w-7xl mx-auto'></div>
            <div className='text-center mb-16'></div>
              <h2 className='text-4xl font-bold text-white mb-4'>Why Choose Our Solution</h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'></p>
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-8 h-8" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 px-4'></section>
          <div className='max-w-4xl mx-auto text-center'></div>
            <h2 className='text-4xl font-bold text-white mb-6'>Ready to Transform Your Business?</h2>
            <p className='text-xl text-gray-300 mb-8'></p>
              Join thousands of businesses already using our AI solutions
            </p>
            <div className='flex flex-col sm: flex-row gap-4 justify-center'></div>
              <button className='bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200'></button>
                Start Free Trial
              </button>
              <button className='border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200'></button>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer /></Footer>
    </>
  );,
};

<<<<<<< HEAD:app/zion-ai-task-scheduler/page.tsx
export default ZionAiTaskSchedulerPage;
=======
export default PagePage;
>>>>>>> main:app/zion-smart-expense-tracker/page.tsx
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3e67:temp-pages/ai-email-marketing-automation/page.tsx
