import React from 'react'
import {BarChart, Target, Zap, Brain, Shield, CheckCircle, Star, Phone, Mail, MapPin, Users} from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react'
const SmartAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-time Dashboards',
      description: 'Monitor your business performance with live dashboards that update automatically and provide instant insights.',
      benefit:     ,
$4},
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and predictions based on your data patterns and industry benchmarks.',
      benefit:       ,
iconicon: Target,
      title: 'Custom Metrics',
      description: 'Track exactly what matters to your business with customizable KPIs and automated reporting.',
      benefit:       ,
iconicon: Zap,
      title: 'Automated Alerts',
      description: 'Get instant notifications when important metrics change or when action is needed.',
      benefit:       ,
iconicon: Users,
      title: 'Team Collaboration',
      description: 'Share insights and reports with your team with role-based access and collaborative features.',
      benefit:       ,
iconicon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption, access controls, and compliance with industry standards.',
      benefit:     ,
$4}
  ]
  const pricingPlans = [
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
      popular: false,
    name: 'Professional',
      price: '$799',
      description: 'Advanced analytics for growing businesses',
        'Unlimited data sources',
        'Advanced AI insights',
        'Custom dashboards',
        'Priority support',
        'Up to 10 user accounts',
        'API access',
        'Advanced reporting'
      popular: true,
    name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Full-scale analytics solution for large organizations',
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 phone support',
        'Unlimited users',
        'White-label options',
        'SLA guarantee'
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">
            Smart Analytics
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Transform your data into actionable insights with AI-powered analytics that drive real business results
  
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <$2 />
              href="tel:+13024640950"
              className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
              📞 Call: (302) 464-0950
  
            <$2 />
              to="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              Get Free Consultation,
  
          </div>
        </section>
        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center">
            Powerful Analytics Features,
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}
                <p className="text-gray-300 mb-4">{feature.description}
                <div className="text-cyan-400 font-medium">{feature.benefit}
            ))}
        {/* Pricing Section */}
            Simple, Transparent Pricing
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <$2 />
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 border ${
                  plan.popular ? 'border-cyan-500' : 'border-gray-600'
                } relative`}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}
                <p className="text-gray-300 mb-4">{plan.description}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}
                  <span className="text-gray-400">{plan.period}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                  className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                      : 'bg-gray-600 text-white hover:bg-gray-700'
                  }`}
                  Get Started
        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
import { Link } from 'react-router-dom'
const SmartAnalyticsPage: React.FC = () => {
    const features = [],
  return (
    {// TODO: Add content
  }
}
  ico,
  n: BarChart,
      titl,
  e: 'Real-time Dashboards',
      descriptio,
  n: 'Monitor your business performance with live dashboards that update automatically and provide instant insights.',
      benefi,
  t: 'Make decisions 10x faster',
    },
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and predictions based on your data patterns and industry benchmarks.',
      benefit: 'Discover hidden opportunities',
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const PagePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Page
  
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Coming Soon,
  
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            This page is under development. Please check back soon for updates.
      <Footer />
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption, access controls, and compliance with industry standards.',
      benefit: '100% data protection',
    }
  ]
  const pricingPlans = [
      nam,
  e: 'Professional',
      pric,
  e: '$799',
      descriptio,
  n: 'Advanced analytics for growing businesses',
                {plan.popular && ()}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>"
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
// Most Popular
                )}"
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>"
                <p className="text-gray-300 mb-4">{plan.description}</p>"
                <div className="mb-6"></div>"
                  <span className="text-4xl font-bold text-white">{plan.price}</span>"
                  <span className="text-gray-400">{plan.period}</span>"
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => ()}"
          <li key={featureIndex} className="flex items-center text-gray-300"></li>"
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                  className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${}
  // TOD,
  O: Add content,
}
//                     plan.popular
                      ? 'bg-cyan-600 text-white,
  hover:bg-cyan-700'
                      : 'bg-gray-600 text-white,
  hover:bg-gray-700'`
                  }`}
                  Get Started
        {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data?
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have revolutionized their decision-making with our smart analytics platform.
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              Get Free Demo
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors" Get Free Demo,
        {/* Contact Info */}
        <section className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="grid md: grid-cols-3 gap-6 text-gray-300">
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  +1 (302) 464-0950
                <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                <MapPin className="w-5 h-5 mr-2 text-cyan-400" />
+1 (302) 464-0950
                <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com,
                <MapPin className="w-5 h-5 mr-2 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
  )
}
export default SmartAnalyticsPage</a>
  </a>
  </a>
  </div>
  </div>
        </div>
      </section>
  </p>
  </h2>
  </section>
  </p>
  </h1>
  </section>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </h2>
  </section>
  </Link>
  </a>
  </p>
  </h1>
  </div>
  </div>
</div></span></span></span></span></p></p></p></h3></h3></ul></ul></li></main></section>