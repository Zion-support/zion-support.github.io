import {BarChart, TrendingUp, Target, Zap, Brain, CheckCircle, Phone, Mail, Star, Users, Award} from 'lucide-react'
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const AIAnalyticsPage: React.FC  = () => {
  const features = [
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and outcomes with advanced machine learning algorithms',
      benefits: [
        '95% accuracy in predictions',
        'Real-time data processing',
        'Automated trend detection',
        'Custom prediction models'
      ]
    },
      icon: BarChart,
      title: 'Real-time Dashboards',
      description: 'Interactive dashboards that provide instant insights into your business performance',
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const AIAnalyticsPage: React.FC  = () => {
    const features = [],
  return (
    {// TODO: Add content
  }
}
  ico,
  n: Brain,
      titl,
  e: 'Predictive Analytics',
      descriptio,
  n: 'Forecast future trends and outcomes with advanced machine learning algorithms',
      benefit,
  s: [
  // TOD,
  O: Add items],
//         '95% accuracy in predictions',
//         'Real-time data processing',
//         'Automated trend detection',
//         'Custom prediction models'
//       ]
    },
ico,
  n: BarChart,
      titl,
  e: 'Real-time Dashboards',
      descriptio,
  n: 'Interactive dashboards that provide instant insights into your business performance',
        'Live data visualization',
        'Customizable metrics',
        'Mobile-responsive design',
        'Role-based access control'
      icon: Target,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with AI-powered insights',
      ico,
  n: Target,
      titl,
  e: 'Automated Reporting',
      descriptio,
  n: 'Generate comprehensive reports automatically with AI-powered insights',
        'Scheduled report generation',
        'Natural language summaries',
        'Executive briefings',
        'Custom report templates'
      icon: Zap,
      title: 'Anomaly Detection',
      description: 'Identify unusual patterns and potential issues before they impact your business',
      ico,
  n: Zap,
      titl,
  e: 'Anomaly Detection',
      descriptio,
  n: 'Identify unusual patterns and potential issues before they impact your business',
        'Real-time anomaly alerts',
        'Pattern recognition',
        'Risk assessment',
        'Automated responses'
    }
  ]
  const useCases = [
      title: 'Sales Performance Analysis',
      description: 'Track sales metrics, identify top performers, and optimize sales strategies',
      icon: TrendingUp,
      color:       ,
titletitle: 'Customer Behavior Insights',
      description: 'Understand customer preferences and behavior patterns for better targeting',
      icon: Users,
      color:       ,
titletitle: 'Financial Forecasting',
      description: 'Predict revenue, expenses, and cash flow with high accuracy',
      color:       ,
titletitle: 'Operational Efficiency',
      description: 'Optimize business processes and identify areas for improvement',
      color: 'text-yellow-400'
  const pricingTiers = [
      name: 'Starter',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI analytics',
      features: [
        'Up to 10 data sources',
        'Basic dashboards',
        'Monthly reports',
        'Email support',
        'Standard integrations'
      ],
      color: 'text-blue-400',
      bgColor:       ,
namename: 'Professional',
      price: '$3,500',
      description: 'Ideal for growing businesses with complex analytics needs',
        'Up to 50 data sources',
        'Advanced dashboards',
        'Real-time reporting',
        'Priority support',
        'Custom integrations',
        'API access'
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      popular: true,
    name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with extensive requirements',
        'Unlimited data sources',
        'Custom dashboards',
        'Real-time analytics',
        '24/7 dedicated support',
        'Custom development',
        'On-premise deployment',
        'SLA guarantees'
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10'
  const benefits = [
      icon: Star,
      title: '95% Accuracy',
      description:       ,
title$5: 'Real-time Processing',
      description:       ,
title$5: 'Actionable Insights',
      description:       ,
icon$5: Award,
      title: 'Proven Results',
      description: '300% average ROI for our analytics clients'
  const useCases = [
      title: 'Sales Performance Analysis',
      description: 'Track sales metrics, identify top performers, and optimize sales strategies',
      icon: TrendingUp,
      color: 'text-green-400',
  return (
    <React.Fragment></React.Fragment>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4 py-16 pt-24"></div>
                {/* Header */}
                <div className="text-center mb-16"></div>
            <h1 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text"></h1>
              AI Analytics Services,
  
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
              Transform your data into actionable insights with our advanced AI-powered analytics platform. 
              Make data-driven decisions that drive growth and optimize performance.
            <div className="flex flex-wrap justify-center gap-4"></div>
              <div className="flex items-center text-cyan-400"></div>
                <Brain className="w-5 h-5 mr-2" />
                <span className="font-medium">AI-Powered Insights
              <div className="flex items-center text-purple-400"></div>
                <BarChart className="w-5 h-5 mr-2" />
                <span className="font-medium">Real-time Analytics
              <div className="flex items-center text-green-400"></div>
                <Target className="w-5 h-5 mr-2" />
                <span className="font-medium">Predictive Intelligence
          {/* Features */}
                <div className="mb-16"></div>
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Key Features
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
                {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"></div>
                  <div className="flex items-start mb-4"></div>
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4"></div>
                      <feature.icon className="w-6 h-6 text-cyan-400" />
                    <div></div>
                      <h3 className="text-xl font-semibold text-white mb-2"></h3>
                {feature.title}
                <p className="text-gray-300 mb-4"></p>
                {feature.description}
                <ul className="space-y-2"></ul>
                {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300 flex items-start"></li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
// AI Analytics Services
          <p className="text-xl text-cyan-400 mb-8 font-medium">Coming Soon
            <div className="flex flex-wrap justify-center gap-4"></div>
              <div className="flex items-center text-cyan-400"></div>
                <Brain className="w-5 h-5 mr-2" />
                <span className="font-medium">AI-Powered Insights
              </div>"
              <div className="flex items-center text-purple-400"></div>"
                <BarChart className="w-5 h-5 mr-2" /></BarChart>"
                <span className="font-medium">Real-time Analytics</span>"
              <div className="flex items-center text-green-400"></div>"
                <Target className="w-5 h-5 mr-2" /></Target>"
                <span className="font-medium">Predictive Intelligence
          {/* Features */}"
          <div className="mb-16"></div>"
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text"></h2>
// Key Features</$1>"
            < className="grid grid-cols-1,"$2 />
  md:grid-cols-2 gap-8"></div>)
              {features.map((feature, index) => ()}"
          < key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50,"$2 />
  hover:border-cyan-400/50 transition-all duration-300"></div>"
                  <div className="flex items-start mb-4"></div>"
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4"></div>"
                      <feature.icon className="w-6 h-6 text-cyan-400" />
                    <div></div>"
                      <h3 className="text-xl font-semibold text-white mb-2"></h3>
                {feature.title}
                </h3>"
                      <p className="text-gray-300 mb-4"></p>
                {feature.description}
                </p>"
                  <ul className="space-y-2"></ul>
                {feature.benefits.map((benefit, benefitIndex) => ()}"
          <li key={benefitIndex} className="text-sm text-gray-300 flex items-start"></li>"
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                {benefit}
                    ))}
          {/* Use Cases */}
              Use Cases
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
                {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center"></div>
                  <div className={`w-16 h-16 ${useCase.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}></div>
                    <useCase.icon className={`w-8 h-8 ${useCase.color}`} />
                  <h3 className="text-lg font-semibold text-white mb-2"></h3>
                {useCase.title}
                <p className="text-gray-300 text-sm"></p>
                {useCase.description}
          {/* Pricing */}
              Pricing Plans
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
                {pricingTiers.map((tier, index) => (
                <div key={index} className={`${tier.bgColor} rounded-lg p-6 border border-gray-700/50 relative ${tier.popular ? 'ring-2 ring-cyan-400' : ''}`}></div>
                {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">Most Popular
                  )}
                <div className="text-center mb-6"></div>
                    <h3 className="text-xl font-semibold text-white mb-2"></h3>
                {tier.name}
                <div className="flex items-baseline justify-center"></div>
                      <span className={`text-3xl font-bold ${tier.color}`}></span>
                {tier.price}
                <span className="text-gray-400 ml-1"></span>
                {tier.period}
                <p className="text-gray-300 text-sm mt-2"></p>
                {tier.description}
                <ul className="space-y-3 mb-6"></ul>
                {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-300 flex items-start"></li>
                {feature}
                <$2 />
                    href="/contact"
                    className={`w-full block text-center py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                      tier.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started</$1> (
                <div key={index} className="text-center"></div>
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white mb-2"></h3>
                {benefit.title}
                <p className="text-gray-300 text-sm"></p>
                {benefit.description}
          {/* CTA Section */}
                <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center"></div>
            <h2 className="text-2xl font-bold text-white mb-4"></h2>
              Ready to Transform Your Data?
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto"></p>
              Start your journey with AI analytics today. Get a free consultation and discover 
              how our platform can revolutionize your business intelligence.
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center"></div>
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                Get Free Consultation
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Mail className="w-4 h-4 mr-2" />
                Email Us
      <Footer />
    </React.Fragment>
  ),
}
export default AIAnalyticsPage
{/* Use Cases */};
              Use Cases;"
            < className="grid grid-cols-1,$2 />
  md:grid-cols-2,"
  lg:grid-cols-4 gap-6">
                {useCases.map((useCase, index) => ()}"
          < key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50,"$2 />
  hover:border-cyan-400/50 transition-all duration-300 text-center">
                  <div className={`w-16 h-16 ${useCase.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}></div>`
                    <useCase.icon className={`w-8 h-8 ${useCase.color}`} /></useCase>"
                  <h3 className="text-lg font-semibold text-white mb-2"></h3>
                {useCase.title}
                </h3>"
                  <p className="text-gray-300 text-sm"></p>
                {useCase.description}
{/* Pricing */}
              Pricing Plans;"
            < className="grid grid-cols-1,"$2 />
  md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => ()}`
          <div key={index} className={`${tier.bgColor} rounded-lg p-6 border border-gray-700/50 relative ${tier.popular ? 'ring-2 ring-cyan-400' : ''}`}></div>
                {tier.popular && ()}"
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>"
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium"></span>
// Most Popular
                  )}"
                  <div className="text-center mb-6"></div>"
                    <h3 className="text-xl font-semibold text-white mb-2"></h3>
                {tier.name}
                </h3>"
                    <div className="flex items-baseline justify-center"></div>`
                      <span className={`text-3xl font-bold ${tier.color}`}></span>
                {tier.price}
                </span>"
                      <span className="text-gray-400 ml-1"></span>
                {tier.period}
                </span>"
                    <p className="text-gray-300 text-sm mt-2"></p>
                {tier.description}
                </p>"
                  <ul className="space-y-3 mb-6"></ul>
                {tier.features.map((feature, featureIndex) => ()}"
          <li key={featureIndex} className="text-sm text-gray-300 flex items-start"></li>
                {feature}
                <$2 />
                    href="/contact" className={`w-full block text-center py-3 px-4 rounded-lg font-medium transition-all duration-300 ${}
  // TODO: Add content,
}
//                       tier.popular
                        ? 'bg-cyan-400 text-slate-900,
  hover:bg-cyan-300'
                        : 'bg-slate-700 text-white,
  hover:bg-slate-600'`
                    }`}
//                   >
//                     Get Started
{/* Benefits */}
              Why Choose Our AI Analytics?
              {benefits.map((benefit, index) => ()}"
          <div key={index} className="text-center"></div>"
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4"></div>"
                    <benefit.icon className="w-8 h-8 text-cyan-400" /></benefit>"
                  <h3 className="text-lg font-semibold text-white mb-2"></h3>
                {benefit.title}
                </h3>"
                  <p className="text-gray-300 text-sm"></p>
                {benefit.description}
{/* CTA Section */}"
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center"></div>"
            <h2 className="text-2xl font-bold text-white mb-4"></h2>
              Ready to Transform Your Data?"
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto"></p>
              Start your journey with AI analytics today. Get a free consultation and discover
              how our platform can revolutionize your business intelligence.
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center"></div>
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105" Get Free Consultation
                href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
                href="mailto:kleber@ziontechgroup.com" className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Mail className="w-4 h-4 mr-2" />
                Email Us
      <Footer />
    </div>
  ),
}
export default AiAnalyticsPage</div>
                </p>
  </h2>
                </div>
  </div>
                </div>
  </a>
                </li>
  </ul>
                </div>
  </div>
                </div>
  </div>
                </div>
  </div>
                </div>
  </div>
                </div>
  </p>
                </div>
  </div>
                </div>
  </div>
                </div>
  </div>
                </div>
  </div>
                </div>
  </div>
                </div>
  </div>
                </span></span>
                </span></span>
                </span></span>
                </span></span>
                </span></p>
                </p></p>
                </p></p>
                </p></p>
                </p></h1>
                </h2></h2>
                </h2></h3>
                </h3></h3>
                </h3></ul>
                </ul></ul>
                </li></li>