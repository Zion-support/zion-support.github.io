import React from 'react';
import { Brain, BarChart, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AIAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'Advanced AI models that predict future trends and outcomes with high accuracy',
      benefits: [
        '95% accuracy in predictions',
        'Real-time data processing',
        'Automated trend detection',
        'Custom prediction models'
      ]
    },
    {
      icon: BarChart,
      title: 'Real-time Dashboards',
      description: 'Interactive dashboards that provide instant insights into your business performance',
      benefits: [
        'Live data visualization',
        'Customizable metrics',
        'Mobile-responsive design',
        'Role-based access control'
      ]
    },
    {
      icon: Target,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with AI-powered insights',
      benefits: [
        'Scheduled report generation',
        'Natural language summaries',
        'Executive briefings',
        'Custom report templates'
      ]
    },
    {
      icon: Zap,
      title: 'Anomaly Detection',
      description: 'Identify unusual patterns and potential issues before they impact your business',
      benefits: [
        'Real-time anomaly alerts',
        'Pattern recognition',
        'Risk assessment',
        'Automated responses'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 data sources',
        'Basic analytics dashboard',
        'Monthly reports',
        'Email support',
        'Standard predictions'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50 data sources',
        'Advanced analytics dashboard',
        'Real-time reports',
        'Priority support',
        'Advanced predictions',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Custom analytics platform',
        'Real-time dashboards',
        '24/7 support',
        'AI-powered insights',
        'White-label options',
        'API access'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">AI Analytics</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced AI-powered analytics solutions that transform your data into actionable insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <feature.icon className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`rounded-xl p-6 ${plan.popular ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' : 'bg-gray-50'}`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-white text-cyan-600 px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <p className={`mb-6 ${plan.popular ? 'text-white' : 'text-gray-600'}`}>{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-center block transition-colors ${
                    plan.popular
                      ? 'bg-white text-cyan-600 hover:bg-gray-100'
                      : 'bg-cyan-500 text-white hover:bg-cyan-600'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Data?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI analytics solutions can help you make better business decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-colors"
            >
              Contact Us Today
            </Link>
            <Link
              to="/demo"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AIAnalyticsPage;