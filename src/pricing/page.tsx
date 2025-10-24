import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, X, Zap, Brain, Cloud, ArrowRight, Star, Users, Shield, Clock } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: '$2,500',
      period: '/month',
      icon: Zap,
      color: 'blue',
      features: [
        'AI Strategy Consultation',
        'Basic Machine Learning Models',
        'Monthly Analytics Reports',
        'Email Support',
        'Up to 5 Users',
        'Basic Integration Support'
      ],
      limitations: [
        'Limited Custom Models',
        'Standard Support Hours',
        'Basic Analytics'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing companies with advanced AI needs',
      price: '$7,500',
      period: '/month',
      icon: Brain,
      color: 'cyan',
      features: [
        'Everything in Starter',
        'Custom AI Model Development',
        'Advanced Analytics & Insights',
        'Priority Support (24/7)',
        'Up to 25 Users',
        'API Access',
        'Custom Integrations',
        'Monthly Strategy Reviews',
        'Performance Optimization'
      ],
      limitations: [],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Complete AI transformation for large organizations',
      price: 'Custom',
      period: '',
      icon: Cloud,
      color: 'purple',
      features: [
        'Everything in Professional',
        'Dedicated AI Team',
        'Custom AI Architecture',
        'White-label Solutions',
        'Unlimited Users',
        'Advanced Security Features',
        'Compliance Support',
        'Quarterly Business Reviews',
        'Custom Training Programs',
        'SLA Guarantees'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false
    }
  ]
  const addOns = [
    {
      name: 'Additional AI Models',
      description: 'Extra custom AI models beyond your plan limits',
      price: '$500',
      period: '/model/month',
    },
    {
      name: 'Priority Support',
      description: '24/7 priority support with dedicated account manager',
      price: '$1,000',
      period: '/month',
    },
    {
      name: 'Custom Integrations',
      description: 'Bespoke integrations with your existing systems',
      price: '$2,000',
      period: '/integration',
    },
    {
      name: 'Training & Workshops',
      description: 'On-site or virtual training for your team',
      price: '$5,000',
      period: '/day',
    }
  ]
  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the beginning of your next billing cycle.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for our Professional plan. No credit card required to start.',
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you when you\'re approaching your limits and help you upgrade or purchase additional capacity.'
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Yes, we offer custom pricing and enterprise solutions for organizations with specific needs. Contact our sales team for more information.',
    },
    {
      question: 'What support is included?',
      answer: 'All plans include email support. Professional and Enterprise plans include priority support with faster response times.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.',
    }
  ]
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-500',
          text: 'text-blue-500',
          border: 'border-blue-500',
          light: 'bg-blue-50',
          textLight: 'text-blue-600',
        }
      case 'cyan':
        return {
          bg: 'bg-cyan-500',
          text: 'text-cyan-500',
          border: 'border-cyan-500',
          light: 'bg-cyan-50',
          textLight: 'text-cyan-600',
        }
      case 'purple':
        return {
          bg: 'bg-purple-500',
          text: 'text-purple-500',
          border: 'border-purple-500',
          light: 'bg-purple-50',
          textLight: 'text-purple-600',
        }
      default:
        return {
          bg: 'bg-gray-500',
          text: 'text-gray-500',
          border: 'border-gray-500',
          light: 'bg-gray-50',
          textLight: 'text-gray-600',
        }
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Simple <span className="text-cyan-400">Pricing
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our core AI and IT solutions with transparent pricing.
      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const colors = getColorClasses(plan.color)
              return (
                <$2 />
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg border-2 ${
                    plan.popular ? colors.border : 'border-gray-200'
                  } overflow-hidden`}
                >
                  {plan.popular && (
                    <div className={`absolute top-0 left-0 right-0 ${colors.bg} text-white text-center py-2 text-sm font-semibold`}>Most Popular
                  )}
                  <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                    <div className="text-center mb-8">
                      <div className={`w-16 h-16 ${colors.light} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <plan.icon className={`w-8 h-8 ${colors.textLight}`} />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}
                      <p className="text-gray-600 mb-4">{plan.description}
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}
                        <span className="text-gray-600 ml-1">{plan.period}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4">What's included:
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}
                        ))}
                    {plan.limitations.length > 0 && (
                      <div className="mb-8">
                        <h4 className="font-semibold text-gray-900 mb-4">Limitations:
                        <ul className="space-y-3">
                          {plan.limitations.map((limitation, limitationIndex) => (
                            <li key={limitationIndex} className="flex items-start">
                              <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{limitation}
                          ))}
                    )}
                    <$2 />
                      to="/contact"
                      className={`w-full ${
                        plan.popular
                          ? `${colors.bg} hover:opacity-90 text-white`
                          : `${colors.border} ${colors.text} hover:${colors.bg} hover:text-white`
                      } border-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center block`}
                    >
                      {plan.cta}
              )
            })}
      {/* Add-ons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Add-on Services
  
            <p className="text-xl text-gray-600">
              Enhance your plan with additional services and features,
  
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addOn, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{addOn.name}
                <p className="text-gray-600 mb-4 text-sm">{addOn.description}
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-bold text-cyan-600">{addOn.price}
                  <span className="text-gray-600 text-sm">{addOn.period}
            ))}
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
  
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and plans,
  
          </div>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}
                <p className="text-gray-600">{faq.answer}
            ))}
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Choose your plan and start transforming your business with AI and IT solutions today.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <$2 />
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Start Free Trial
  
            <$2 />
              to="/demo"
              className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-cyan-600 transition-all duration-300">
              Schedule Demo
  
          </div>
        </div>
      </section>
      <Footer />
    </div>
  ),
}
export default PricingPage</Link>
  </Link>
  </p>
  </h2>
  </p>
  </h2>
  </div>
</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></span></span></span></span></span></p></p></p></p></p></p></h1></h2></h3></h3></h3></h4></h4></ul></ul></li></section></section></section></section>