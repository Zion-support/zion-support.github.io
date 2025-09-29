import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import {
  BarChart3,
  CheckCircle,
  Star,
  ArrowRight,
  TrendingUp,
  Target,
  Rocket,
  Award,
  Globe,
  Zap,
  Shield,
  Brain,
  PieChart,
} from 'lucide-react';

const AIDataAnalytics = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Predictive Analytics',
      description: 'Machine learning models that forecast trends and identify opportunities.',
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-time Dashboards',
      description: 'Live insights and visualizations updated in real-time.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Data Integration',
      description: 'Connect all your data sources for unified analysis.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Automated Insights',
      description: 'AI-powered recommendations and anomaly detection.',
    },
  ];

  const benefits = [
    'Improve decisions by 60%',
    'Increase retention by 45%',
    'Reduce risks by 70%',
    'Identify new opportunities',
    'Optimize operations',
    'Predict future trends',
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 data sources',
        'Basic analytics',
        'Standard dashboards',
        'Email support',
        'Monthly reports',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Most popular for growing businesses',
      features: [
        'Up to 20 data sources',
        'Advanced analytics',
        'Custom dashboards',
        'Priority support',
        'Real-time insights',
        'Predictive models',
        'API access',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'AI-powered insights',
        'Custom analytics',
        '24/7 dedicated support',
        'Advanced security',
        'White-label solution',
        'SLA guarantee',
        'Custom integrations',
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: 'Robert Chen',
      role: 'Data Director',
      company: 'AnalyticsCorp',
      content: 'The predictive analytics helped us identify market trends 3 months ahead. Revenue increased by 35%!',
      rating: 5,
    },
    {
      name: 'Maria Rodriguez',
      role: 'VP Operations',
      company: 'RetailMax',
      content: 'Real-time dashboards transformed how we make decisions. We can now respond to changes instantly.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'CEO',
      company: 'TechStart',
      content: 'The AI insights revealed opportunities we never knew existed. Our data is now our competitive advantage.',
      rating: 5,
    },
  ];

  const analyticsTypes = [
    {
      title: 'Customer Analytics',
      description: 'Understand customer behavior, preferences, and lifetime value.',
      icon: <Target className="w-8 h-8 text-blue-400" />,
    },
    {
      title: 'Sales Analytics',
      description: 'Track performance, forecast revenue, and optimize sales processes.',
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
    },
    {
      title: 'Operational Analytics',
      description: 'Monitor efficiency, identify bottlenecks, and optimize workflows.',
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
    },
    {
      title: 'Financial Analytics',
      description: 'Analyze costs, revenue, and profitability with predictive insights.',
      icon: <PieChart className="w-8 h-8 text-orange-400" />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Data Analytics - Zion Tech Group</title>
        <meta
          name="description"
          content="Transform data into actionable insights with AI-powered analytics. Improve decisions by 60%, increase retention by 45%, reduce risks by 70%. Starting at $149/month."
        />
        <meta
          name="keywords"
          content="AI data analytics, predictive analytics, business intelligence, data visualization, machine learning analytics"
        />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4 mr-2" />
              AI-Powered Data Analytics
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Data Analytics
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your data into actionable insights with machine learning. 
              Improve decisions by 60%, increase retention by 45%, and reduce risks by 70%.
            </p>

            {/* Special Offer */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-xl p-6 mb-8">
              <div className="text-purple-400 font-bold text-lg mb-2">
                🎯 LIMITED TIME: 50% OFF First 3 Months
              </div>
              <p className="text-white">
                Start your free trial today • No setup fees • Cancel anytime
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Analytics Powered by AI
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our machine learning algorithms uncover insights that traditional analytics miss.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="bg-purple-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors border border-purple-500/30 shadow-lg">
                  <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-zion-slate-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Analytics Types Section */}
        <section className="bg-zion-slate-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-50"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Analytics for Every Business Need
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                From customer insights to operational optimization, we cover all aspects of your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {analyticsTypes.map((type, index) => (
                <div key={index} className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl text-center">
                  <div className="flex justify-center mb-6">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {type.title}
                  </h3>
                  <p className="text-zion-slate-light">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Real results that transform your decision-making and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Performance Metrics */}
          <div className="mt-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              📊 Performance Metrics
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400">60%</div>
                <div className="text-zion-slate-light">Better Decisions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">45%</div>
                <div className="text-zion-slate-light">Higher Retention</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">70%</div>
                <div className="text-zion-slate-light">Risk Reduction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-zion-slate-dark py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Choose the plan that fits your data needs. All plans include our core AI analytics features.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`card relative ${plan.popular ? 'border-2 border-purple-500/50 bg-purple-500/10' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-zion-slate-light mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-zion-slate-light ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        <span className="text-zion-slate-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-xl'
                        : 'border-2 border-white text-white hover:bg-white hover:text-zion-blue'
                    }`}
                  >
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-zion-slate-light mb-4">
                Need a custom solution? We offer enterprise plans with dedicated support.
              </p>
              <Link
                to="/contact"
                className="text-purple-400 hover:text-purple-300 font-semibold"
              >
                Contact Sales →
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Real results from real businesses using our AI data analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-zion-slate">{testimonial.role}</div>
                  <div className="text-sm text-zion-slate">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-500 to-pink-500 py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data into Insights?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already making better decisions with AI-powered analytics. 
              Start your free trial today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIDataAnalytics;