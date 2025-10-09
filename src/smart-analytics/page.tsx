import React from 'react';

const SmartAnalyticsPage: React.FC = () => {
  const _features = [
    {
      icon: BarChart,
      title: 'Real-time Dashboards',
      description: 'Monitor your business performance with live dashboards that update automatically and provide instant insights.',
      benefit: 'Make decisions 10x faster'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and predictions based on your data patterns and industry benchmarks.',
      benefit: 'Discover hidden opportunities'
    },
    {
      icon: Target,
      title: 'Custom Metrics',
      description: 'Track exactly what matters to your business with customizable KPIs and automated reporting.',
      benefit: 'Focus on what drives growth'
    },
    {
      icon: Zap,
      title: 'Automated Alerts',
      description: 'Get instant notifications when important metrics change or when action is needed.',
      benefit: 'Never miss critical changes'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share insights and reports with your team with role-based access and collaborative features.',
      benefit: 'Align your entire organization'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption, access controls, and compliance with industry standards.',
      benefit: '100% data protection'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with analytics',
      features: [
        'Up to 5 data sources',
        'Basic dashboards',
        'Email support',
        'Standard reports',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Advanced analytics for growing businesses',
      features: [
        'Unlimited data sources',
        'Advanced AI insights',
        'Custom dashboards',
        'Priority support',
        'Up to 10 user accounts',
        'API access',
        'Advanced reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Full-scale analytics solution for large organizations',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 phone support',
        'Unlimited users',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Smart Analytics
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Transform your data into actionable insights with AI-powered analytics that drive real business results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
            >
              📞 Call: (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Powerful Analytics Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-cyan-400 font-medium">{feature.benefit}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 border ${
                  plan.popular ? 'border-cyan-500' : 'border-gray-600'
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+13024640950"
                  className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                      : 'bg-gray-600 text-white hover:bg-gray-700'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have revolutionized their decision-making with our smart analytics platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 Call: (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
            >
              Get Free Demo
            </Link>
          </div>
        </section>

        {/* Contact Info */}
        <section className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-300">
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-5 h-5 mr-2 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SmartAnalyticsPage;