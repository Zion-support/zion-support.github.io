import React, { useState } from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Users, 
  MessageCircle, 
  FileText, 
  Heart,
  ArrowRight,
  Target,
  Award,
  TrendingUp,
  Lightbulb,
  Globe,
  Database,
  Lock,
  Rocket,
  Crown,
  Sparkles
} from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingTiers = [
    {
      name: "Starter",
      price: billingCycle === 'monthly' ? "$19" : "$190",
      period: billingCycle === 'monthly' ? "/month" : "/year",
      description: "Perfect for individuals and small teams getting started with AI tools",
      features: [
        "AI Content Generation (100 credits/month)",
        "Basic AI Image Editing",
        "AI Meeting Assistant (5 hours/month)",
        "Email Support",
        "Basic Analytics Dashboard",
        "Mobile App Access"
      ],
      popular: false,
      cta: "Start Free Trial",
      savings: billingCycle === 'yearly' ? "Save 17%" : null
    },
    {
      name: "Professional",
      price: billingCycle === 'monthly' ? "$49" : "$490",
      period: billingCycle === 'monthly' ? "/month" : "/year",
      description: "Ideal for growing businesses and professional teams",
      features: [
        "Everything in Starter",
        "AI Content Generation (500 credits/month)",
        "Advanced AI Image & Video Editing",
        "AI Code Assistant (Basic)",
        "AI Meeting Assistant (20 hours/month)",
        "AI Translation (10 languages)",
        "Priority Support",
        "Advanced Analytics",
        "API Access (1000 calls/month)",
        "Team Collaboration Tools"
      ],
      popular: true,
      cta: "Start Free Trial",
      savings: billingCycle === 'yearly' ? "Save 17%" : null
    },
    {
      name: "Enterprise",
      price: billingCycle === 'monthly' ? "$99" : "$990",
      period: billingCycle === 'monthly' ? "/month" : "/year",
      description: "For large organizations requiring advanced features and support",
      features: [
        "Everything in Professional",
        "AI Content Generation (Unlimited)",
        "Advanced AI Code Assistant",
        "AI Meeting Assistant (Unlimited)",
        "AI Translation (50+ languages)",
        "Custom AI Model Training",
        "Dedicated Account Manager",
        "24/7 Phone Support",
        "Advanced Security & Compliance",
        "Custom Integrations",
        "White-label Solutions",
        "SLA Guarantees"
      ],
      popular: false,
      cta: "Contact Sales",
      savings: billingCycle === 'yearly' ? "Save 17%" : null
    }
  ];

  const addOns = [
    {
      name: "AI Model Training",
      description: "Custom AI model training for your specific use case",
      price: "$500",
      period: "/model",
      features: ["Custom training data", "Model optimization", "Performance tuning", "Ongoing support"]
    },
    {
      name: "API Access",
      description: "Programmatic access to our AI services",
      price: "$0.01",
      period: "/API call",
      features: ["RESTful API", "Webhook support", "Rate limiting", "Documentation"]
    },
    {
      name: "White-label Solutions",
      description: "Brand our AI tools as your own",
      price: "$2,000",
      period: "/month",
      features: ["Custom branding", "Domain customization", "User management", "Analytics"]
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
              <Crown className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Simple,{' '}
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Transparent
            </span>{' '}
            Pricing
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
            Choose the perfect plan for your needs. All plans include a 14-day free trial 
            with no credit card required.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-zion-slate-light'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                billingCycle === 'yearly' ? 'bg-zion-cyan' : 'bg-zion-slate-light'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-zion-slate-light'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                Save 17%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-zion-blue-dark/50 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                  tier.popular 
                    ? 'border-zion-cyan shadow-2xl shadow-zion-cyan/25' 
                    : 'border-zion-cyan/20 hover:border-zion-cyan/40'
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-zion-slate-light mb-6">{tier.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-zion-slate-light">{tier.period}</span>
                    </div>
                    
                    {tier.savings && (
                      <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                        {tier.savings}
                      </span>
                    )}
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:scale-105 shadow-lg hover:shadow-zion-cyan/25'
                      : 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}>
                    {tier.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Enhance your AI capabilities with our specialized add-on services 
              designed for enterprise needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                  <p className="text-zion-slate-light text-sm mb-4">{addon.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-zion-cyan">{addon.price}</span>
                    <span className="text-zion-slate-light">{addon.period}</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {addon.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-zion-cyan/20 text-zion-cyan border border-zion-cyan py-2 px-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Get answers to common questions about our pricing and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
              },
              {
                question: "What's included in the free trial?",
                answer: "The 14-day free trial includes access to all features of the plan you choose, with no credit card required. You can cancel anytime during the trial period."
              },
              {
                question: "Do you offer enterprise discounts?",
                answer: "Yes, we offer volume discounts for enterprise customers. Contact our sales team for custom pricing based on your specific needs and usage requirements."
              },
              {
                question: "Is there a setup fee?",
                answer: "No setup fees for any of our plans. You can start using our services immediately after signing up."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-zion-slate-light">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Start your 14-day free trial today and experience the power of AI-driven solutions. 
            No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
=======
import { Link } from 'react-router-dom';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Shield, Brain, Cloud, Users, MessageCircle, FileText } from 'lucide-react';

export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const pricingTiers = [
        {
            name: "Starter",
            price: billingCycle === 'monthly' ? 19 : 190,
            period: billingCycle === 'monthly' ? "/month" : "/year",
            description: "Perfect for individuals and small teams getting started with AI tools",
            features: [
                "AI Content Generation (100 credits/month)",
                "Basic AI Image Editing",
                "AI Meeting Assistant (5 hours/month)",
                "Email Support",
                "Basic Analytics Dashboard",
                "Mobile App Access"
            ],
            popular: false,
            cta: "Start Free Trial",
            link: "/signup?plan=starter"
        },
        {
            name: "Professional",
            price: billingCycle === 'monthly' ? 49 : 490,
            period: billingCycle === 'monthly' ? "/month" : "/year",
            description: "Ideal for growing businesses and professional teams",
            features: [
                "Everything in Starter",
                "AI Content Generation (500 credits/month)",
                "Advanced AI Image & Video Editing",
                "AI Code Assistant (Basic)",
                "AI Meeting Assistant (20 hours/month)",
                "AI Translation (10 languages)",
                "Priority Support",
                "Advanced Analytics",
                "API Access (1000 calls/month)",
                "Team Collaboration Tools"
            ],
            popular: true,
            cta: "Start Free Trial",
            link: "/signup?plan=professional"
        },
        {
            name: "Business",
            price: billingCycle === 'monthly' ? 99 : 990,
            period: billingCycle === 'monthly' ? "/month" : "/year",
            description: "Comprehensive solution for established businesses",
            features: [
                "Everything in Professional",
                "AI Content Generation (2000 credits/month)",
                "AI Code Assistant (Advanced)",
                "AI Data Analytics Platform",
                "AI Threat Detection",
                "Multi-Cloud Management",
                "AI-Powered CRM",
                "Business Process Automation",
                "AI Meeting Assistant (Unlimited)",
                "AI Translation (100+ languages)",
                "24/7 Support",
                "Custom Integrations",
                "API Access (10000 calls/month)",
                "Advanced Security Features"
            ],
            popular: false,
            cta: "Start Free Trial",
            link: "/signup?plan=business"
        }
    ];

    const savings = billingCycle === 'yearly' ? 17 : 0;

    return (
        <>
            <SEO 
                title="Pricing - Zion Tech Group" 
                description="Choose the perfect plan for your business needs. Transparent pricing with no hidden fees." 
                canonical="https://ziontechgroup.com/pricing" 
            />
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <div className="p-3 bg-blue-600/20 rounded-full">
                                <Zap className="h-12 w-12 text-blue-400"/>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Simple, Transparent Pricing
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Choose the plan that best fits your business needs. All plans include our core AI services with no hidden fees.
                        </p>
                        
                        {/* Billing Toggle */}
                        <div className="flex justify-center mb-8">
                            <div className="bg-zion-blue-dark rounded-lg p-1 flex">
                                <button
                                    onClick={() => setBillingCycle('monthly')}
                                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                                        billingCycle === 'monthly'
                                            ? 'bg-white text-zion-blue shadow-sm'
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                >
                                    Monthly Billing
                                </button>
                                <button
                                    onClick={() => setBillingCycle('yearly')}
                                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                                        billingCycle === 'yearly'
                                            ? 'bg-white text-zion-blue shadow-sm'
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                >
                                    Yearly Billing
                                    {billingCycle === 'yearly' && (
                                        <Badge className="ml-2 bg-green-100 text-green-700 text-xs">
                                            Save {savings}%
                                        </Badge>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Pricing Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {pricingTiers.map((plan, index) => (
                                <Card 
                                    key={index}
                                    className={`relative hover:shadow-xl transition-all duration-300 ${
                                        plan.popular ? 'ring-2 ring-zion-blue scale-105' : ''
                                    }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <Badge className="bg-zion-blue text-white px-4 py-2">
                                                <Star className="h-4 w-4 mr-1" />
                                                Most Popular
                                            </Badge>
                                        </div>
                                    )}
                                    <CardHeader className="text-center pb-8">
                                        <div className={`w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4`}>
                                            <Zap className="h-8 w-8 text-white" />
                                        </div>
                                        <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                                        <p className="text-gray-600">{plan.description}</p>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <div className="mb-8">
                                            <div className="flex items-baseline justify-center">
                                                <span className="text-4xl font-bold text-gray-900">
                                                    ${billingCycle === 'yearly' ? plan.price / 12 : plan.price}
                                                </span>
                                                <span className="text-gray-600 ml-2">/month</span>
                                            </div>
                                            {billingCycle === 'yearly' && (
                                                <p className="text-sm text-gray-500 mt-1">
                                                    Billed annually (${plan.price})
                                                </p>
                                            )}
                                        </div>
                                        <ul className="space-y-3 mb-8 text-left">
                                            {plan.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center space-x-3">
                                                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button 
                                            className={`w-full ${
                                                plan.popular
                                                    ? 'bg-zion-blue hover:bg-zion-blue/90'
                                                    : 'bg-gray-900 hover:bg-gray-800'
                                            }`}
                                            onClick={() => window.location.href = plan.link}
                                        >
                                            {plan.cta}
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <section className="py-20 bg-zion-blue text-white">
                            <div className="container mx-auto px-4 text-center">
                                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                                <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                                    Choose the plan that best fits your business needs and start transforming your technology infrastructure today.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-white px-8 py-4 text-lg">
                                        Start Free Trial
                                    </Button>
                                    <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                                        Contact Sales
                                    </Button>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
