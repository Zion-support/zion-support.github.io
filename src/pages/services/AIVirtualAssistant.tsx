import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import {
  MessageCircle,
  CheckCircle,
  Star,
  ArrowRight,
  Clock,
  Users,
  TrendingUp,
  Target,
  Rocket,
  Award,
  Globe,
  Zap,
  Shield,
} from 'lucide-react';

const AIVirtualAssistant = () => {
  const features = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Natural Language Processing',
      description: 'Understands and responds to complex queries in natural language.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Multi-Channel Support',
      description: 'Seamlessly handles chat, email, phone, and social media interactions.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Availability',
      description: 'Never sleeps - provides instant responses around the clock.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Personalized Interactions',
      description: 'Learns from each interaction to provide increasingly personalized service.',
    },
  ];

  const benefits = [
    'Reduce response time by 90%',
    'Increase conversions by 40%',
    'Save 30+ hours per week',
    'Improve customer satisfaction',
    'Scale support operations',
    'Available 24/7 worldwide',
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI responses',
        'Email & chat support',
        'Standard integrations',
        'Email support',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Most popular for growing companies',
      features: [
        'Up to 5,000 conversations/month',
        'Advanced AI with learning',
        'All communication channels',
        'Advanced integrations',
        'Priority support',
        'Analytics dashboard',
        'Custom branding',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI training',
        'All channels + phone',
        'All integrations',
        '24/7 dedicated support',
        'Advanced analytics',
        'White-label solution',
        'SLA guarantee',
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Customer Success Manager',
      company: 'E-commerce Plus',
      content: 'Our AI assistant handles 80% of customer inquiries instantly. Customer satisfaction increased by 45%!',
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'Founder',
      company: 'StartupHub',
      content: 'The 24/7 availability transformed our business. We can now serve customers globally without hiring more staff.',
      rating: 5,
    },
    {
      name: 'Lisa Thompson',
      role: 'VP Customer Experience',
      company: 'RetailCorp',
      content: 'Response time went from 4 hours to 2 minutes. Our customers love the instant, helpful responses.',
      rating: 5,
    },
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Handle common inquiries, provide product information, and resolve issues instantly.',
      icon: <Users className="w-8 h-8 text-blue-400" />,
    },
    {
      title: 'Sales Assistant',
      description: 'Qualify leads, answer product questions, and guide prospects through the sales process.',
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
    },
    {
      title: 'Lead Generation',
      description: 'Engage website visitors, capture contact information, and schedule appointments.',
      icon: <Target className="w-8 h-8 text-purple-400" />,
    },
    {
      title: 'Internal Operations',
      description: 'Assist employees with HR questions, IT support, and internal processes.',
      icon: <Shield className="w-8 h-8 text-orange-400" />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Virtual Assistant - Zion Tech Group</title>
        <meta
          name="description"
          content="24/7 AI virtual assistant for customer support and business operations. Reduce response time by 90%, increase conversions by 40%. Starting at $79/month."
        />
        <meta
          name="keywords"
          content="AI virtual assistant, chatbot, customer support AI, business automation, AI assistant platform"
        />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              AI-Powered Virtual Assistant
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Virtual Assistant
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your customer support with intelligent AI that never sleeps. 
              Reduce response time by 90%, increase conversions by 40%, and save 30+ hours per week.
            </p>

            {/* Special Offer */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-xl p-6 mb-8">
              <div className="text-blue-400 font-bold text-lg mb-2">
                🎯 LIMITED TIME: 50% OFF First 3 Months
              </div>
              <p className="text-white">
                Start your free trial today • No setup fees • Cancel anytime
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
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
              Intelligent Features for Superior Service
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI assistant understands context, learns from interactions, and provides human-like responses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="bg-blue-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors border border-blue-500/30 shadow-lg">
                  <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
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

        {/* Use Cases Section */}
        <section className="bg-zion-slate-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-50"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Perfect for Every Business Need
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                From customer support to lead generation, our AI assistant adapts to your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl text-center">
                  <div className="flex justify-center mb-6">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-zion-slate-light">
                    {useCase.description}
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
              Real results that transform your customer experience and bottom line.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Performance Metrics */}
          <div className="mt-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              📊 Performance Metrics
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400">90%</div>
                <div className="text-zion-slate-light">Faster Response</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">40%</div>
                <div className="text-zion-slate-light">More Conversions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">30+ Hours</div>
                <div className="text-zion-slate-light">Saved Weekly</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">24/7</div>
                <div className="text-zion-slate-light">Availability</div>
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
                Choose the plan that fits your business needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`card relative ${plan.popular ? 'border-2 border-blue-500/50 bg-blue-500/10' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        <span className="text-zion-slate-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-xl'
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
                className="text-blue-400 hover:text-blue-300 font-semibold"
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
              Real results from real businesses using our AI virtual assistant.
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
        <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already providing 24/7 AI-powered customer support. 
              Start your free trial today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
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

export default AIVirtualAssistant;