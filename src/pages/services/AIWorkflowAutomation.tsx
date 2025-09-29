import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import {
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Clock,
  Users,
  TrendingUp,
  Target,
  Rocket,
  Award,
  Globe,
} from 'lucide-react';

const AIWorkflowAutomation = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Smart Process Recognition',
      description: 'AI automatically identifies repetitive tasks and suggests automation opportunities.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Visual Workflow Designer',
      description: 'Drag-and-drop interface to create complex workflows without coding.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Smart Triggers',
      description: 'Automated triggers based on events, schedules, or conditions.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Performance Monitoring',
      description: 'Real-time analytics and optimization recommendations.',
    },
  ];

  const benefits = [
    'Reduce manual tasks by 80%',
    'Improve efficiency by 60%',
    'Cut operational costs by 40%',
    'Eliminate human errors',
    'Scale processes effortlessly',
    '24/7 automated operations',
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 10 workflows',
        '1,000 automations/month',
        'Basic integrations',
        'Email support',
        'Standard templates',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Most popular for growing businesses',
      features: [
        'Up to 50 workflows',
        '10,000 automations/month',
        'Advanced integrations',
        'Priority support',
        'Custom templates',
        'Analytics dashboard',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited workflows',
        'Unlimited automations',
        'All integrations',
        '24/7 dedicated support',
        'Custom development',
        'Advanced security',
        'SLA guarantee',
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Operations Director',
      company: 'TechFlow Inc.',
      content: 'Zion\'s AI workflow automation saved us 40 hours per week. The ROI was visible within the first month!',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'We automated our entire customer onboarding process. What used to take 3 days now takes 3 hours.',
      rating: 5,
    },
    {
      name: 'Emily Johnson',
      role: 'VP Operations',
      company: 'GlobalCorp',
      content: 'The visual designer made it so easy to create complex workflows. Our team productivity increased by 150%.',
      rating: 5,
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Workflow Automation - Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your business with AI-powered workflow automation. Reduce manual tasks by 80%, improve efficiency by 60%, and cut costs by 40%. Starting at $99/month."
        />
        <meta
          name="keywords"
          content="AI workflow automation, business process automation, workflow software, AI automation platform"
        />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Automation Platform
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                AI Workflow Automation
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business operations with intelligent automation. 
              Reduce manual tasks by 80%, improve efficiency by 60%, and cut costs by 40%.
            </p>

            {/* Special Offer */}
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-xl p-6 mb-8">
              <div className="text-green-400 font-bold text-lg mb-2">
                🎯 LIMITED TIME: 50% OFF First 3 Months
              </div>
              <p className="text-white">
                Start your free trial today • No setup fees • Cancel anytime
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
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
              Powerful Features for Maximum Efficiency
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI-powered platform makes workflow automation simple and effective.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="bg-green-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors border border-green-500/30 shadow-lg">
                  <div className="text-green-400 group-hover:scale-110 transition-transform duration-300">
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

        {/* Benefits Section */}
        <section className="bg-zion-slate-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-50"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Transform Your Business Today
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Join thousands of companies already benefiting from AI automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* ROI Calculator */}
            <div className="mt-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                💰 Calculate Your ROI
              </h3>
              <p className="text-zion-slate-light mb-6">
                On average, our clients save $50,000+ annually and see ROI within 3 months.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400">$50K+</div>
                  <div className="text-zion-slate-light">Annual Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">3 Months</div>
                  <div className="text-zion-slate-light">Average ROI</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">80%</div>
                  <div className="text-zion-slate-light">Task Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`card relative ${plan.popular ? 'border-2 border-green-500/50 bg-green-500/10' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:shadow-xl'
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
              className="text-green-400 hover:text-green-300 font-semibold"
            >
              Contact Sales →
            </Link>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-zion-slate-dark py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Real results from real businesses using our AI workflow automation.
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already saving time and money with AI automation. 
              Start your free trial today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
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

export default AIWorkflowAutomation;