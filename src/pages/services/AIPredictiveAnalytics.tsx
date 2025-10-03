import React from 'react'';
import { Helmet } from 'react-helmet-async'';
import { Zap } from 'lucide-react'';
import Header from '../../components/Header'';
import Footer from '../../components/Footer'';
import React from 'react';'
import { Helmet } from 'react-helmet-async';'
import { Zap } from 'lucide-react';'
import Header from '../../components/Header';'
import Footer from '../../components/Footer';'

const AIPredictiveAnalytics: React.FC: ()  => {,,,
  const features: [,,
    {
      icon: Brain,,,,
      title: "Machine Learning Models",",";,"
      description: "Advanced ML algorithms that predict future trends, customer behavior, and business outcomes with 94% accuracy.",",";,"
      title: "Machine Learning Models",","
      description: "Advanced ML algorithms that predict future trends, customer behavior, and business outcomes with 94% accuracy.",","
      benefit: "94% prediction accuracy rate","
    },
    {
      icon: TrendingUp,,,,
      title: "Real-Time Forecasting",",";,"
      description: "Live predictive analytics that update continuously as new data flows in, providing instant insights.",",";,"
      title: "Real-Time Forecasting",","
      description: "Live predictive analytics that update continuously as new data flows in, providing instant insights.",","
      benefit: "Real-time decision making","
    },
    {
      icon: Target,,,,
      title: "Customer Lifetime Value",",";,"
      description: "Predict customer behavior, churn risk, and lifetime value to optimize marketing spend and retention.",",";,"
      title: "Customer Lifetime Value",","
      description: "Predict customer behavior, churn risk, and lifetime value to optimize marketing spend and retention.",","
      benefit: "35% increase in customer retention","
    },
    {
      icon: BarChart3,,,,
      title: "Revenue Forecasting",",";,"
      description: "Accurate revenue predictions based on historical data, market trends, and external factors.",",";,"
      title: "Revenue Forecasting",","
      description: "Accurate revenue predictions based on historical data, market trends, and external factors.",","
      benefit: "98% forecast accuracy","
    },
    {
      icon: Shield,,,,
      title: "Risk Assessment",",";,"
      description: "Identify potential risks and opportunities before they impact your business operations.",",";,"
      title: "Risk Assessment",","
      description: "Identify potential risks and opportunities before they impact your business operations.",","
      benefit: "60% risk reduction","
    },
    {
      icon: Clock,,,,
      title: "Automated Insights",",";,"
      description: "AI-generated insights and recommendations delivered directly to decision-makers.",",";,"
      title: "Automated Insights",","
      description: "AI-generated insights and recommendations delivered directly to decision-makers.",","
      benefit: "50% faster decision making","
    }
  ];

  const pricing: [,,
    {
      name: "Starter",";,"
      price: "$299",";,"
      period: "/month",";,"
      description: "Perfect for small businesses wanting to leverage predictive analytics",";,"
      features: [,,,
        "Up to 10 predictive models",";"
        "5 data sources",";"
        "Basic dashboard",";"
        "Email support",";"
        "Monthly reports",";"
        "Standard integrations",";"
        "Historical data analysis",";"
        "Basic forecasting"
      ]
      popular: false,,
    },
    {
      name: "Professional",";,"
      price: "$899",";,"
      period: "/month",";,"
      description: "Ideal for growing companies with complex data needs",";,"
      features: [,,,
        "Unlimited predictive models",";"
        "25 data sources",";"
        "Advanced dashboard & visualization",";"
        "Priority support",";"
        "Real-time monitoring",";"
        "Advanced integrations",";"
        "Custom model training",";"
        "API access",";"
        "Automated alerts",";"
        "A/B testing insights"
      ]
      popular: true,,
    },
    {
      name: "Enterprise",";,"
      price: "$2,999",";,"
      period: "/month",";,"
      description: "Complete solution for large organizations with enterprise requirements",";,"
      features: [,,,
        "Unlimited everything",";"
        "Unlimited data sources",";"
        "Enterprise dashboard",";"
        "Dedicated data scientist",";"
        "Custom model development",";"
        "Unlimited integrations",";"
        "Advanced security & compliance",";"
        "White-label options",";"
        "SLA guarantee",";"
        "On-premise deployment",";"
        "Custom reporting",";"
        "Training & consultation"
      ]
      popular: false,,,
      name: "Starter",","
      price: "$299",","
      period: "/month",","
      description: "Perfect for small businesses wanting to leverage predictive analytics",","
      features: [,,,
        "Up to 10 predictive models","
        "5 data sources","
        "Basic dashboard","
        "Email support","
        "Monthly reports","
        "Standard integrations","
        "Historical data analysis","
        "Basic forecasting"
      ]
      popular: false,,
    },
    {
      name: "Professional",","
      price: "$899",","
      period: "/month",","
      description: "Ideal for growing companies with complex data needs",","
      features: [,,,
        "Unlimited predictive models","
        "25 data sources","
        "Advanced dashboard & visualization","
        "Priority support","
        "Real-time monitoring","
        "Advanced integrations","
        "Custom model training","
        "API access","
        "Automated alerts","
        "A/B testing insights"
      ]
      popular: true,,
    },
    {
      name: "Enterprise",","
      price: "$2,999",","
      period: "/month",","
      description: "Complete solution for large organizations with enterprise requirements",","
      features: [,,,
        "Unlimited everything","
        "Unlimited data sources","
        "Enterprise dashboard","
        "Dedicated data scientist","
        "Custom model development","
        "Unlimited integrations","
        "Advanced security & compliance","
        "White-label options","
        "SLA guarantee","
        "On-premise deployment","
        "Custom reporting","
        "Training & consultation"
      ]
      popular: false,,
    }
  ];

  const testimonials: [,,
    {
      name: "Jennifer Martinez",",";,"
      role: "VP Marketing, RetailTech Solutions",",";,"
      content: "The predictive analytics platform helped us increase our customer retention by 40% and optimize our marketing spend by $2M annually. The ROI was evident within the first quarter.",",";,"
      name: "Jennifer Martinez",","
      role: "VP Marketing, RetailTech Solutions",","
      content: "The predictive analytics platform helped us increase our customer retention by 40% and optimize our marketing spend by $2M annually. The ROI was evident within the first quarter.",","
      rating: 5,,,,
      company: "RetailTech Solutions","
    },
    {
      name: "David Kim",",";,"
      role: "CFO, FinTech Innovations",",";,"
      content: "Revenue forecasting accuracy improved from 78% to 98%. This gave us the confidence to make strategic investments and secure additional funding rounds.",",";,"
      name: "David Kim",","
      role: "CFO, FinTech Innovations",","
      content: "Revenue forecasting accuracy improved from 78% to 98%. This gave us the confidence to make strategic investments and secure additional funding rounds.",","
      rating: 5,,,,
      company: "FinTech Innovations","
    },
    {
      name: "Dr. Sarah Thompson",",";,"
      role: "Head of Analytics, Healthcare Network",",";,"
      content: "The risk assessment models identified potential issues 3 months before they occurred, saving us $5M in potential losses and improving patient outcomes.",",";,"
      name: "Dr. Sarah Thompson",","
      role: "Head of Analytics, Healthcare Network",","
      content: "The risk assessment models identified potential issues 3 months before they occurred, saving us $5M in potential losses and improving patient outcomes.",","
      rating: 5,,,,
      company: "Healthcare Network","
    }
  ];

  const useCases: [,,
    {
      title: "E-Commerce Optimization",",";,"
      icon: Globe,,,,
      description: "Predict customer purchase behavior, optimize inventory, and personalize shopping experiences.",",";,"
      benefits: ["25% increase in conversion", "30% reduction in inventory costs", "40% improvement in customer satisfaction"]","
    },
    {
      title: "Financial Services",",";,"
      icon: Database,,,,
      description: "Credit risk assessment, fraud detection, and investment portfolio optimization.",",";,"
      benefits: ["60% reduction in bad debt", "95% fraud detection accuracy", "20% increase in portfolio returns"]","
    },
    {
      title: "Healthcare Analytics",",";,"
      icon: Users,,,,
      description: "Patient outcome prediction, resource allocation, and treatment optimization.",",";,"
      benefits: ["35% improvement in patient outcomes", "25% reduction in readmissions", "40% cost savings"]","
    },
    {
      title: "Supply Chain",",";,"
      icon: Zap,,,,
      description: "Demand forecasting, supplier risk assessment, and logistics optimization.",",";,"
      benefits: ["45% reduction in stockouts", "30% improvement in delivery times", "25% cost reduction"]",";,"
      title: "E-Commerce Optimization",","
      icon: Globe,,,,
      description: "Predict customer purchase behavior, optimize inventory, and personalize shopping experiences.",","
      benefits: ["25% increase in conversion", "30% reduction in inventory costs", "40% improvement in customer satisfaction"]","
    },
    {
      title: "Financial Services",","
      icon: Database,,,,
      description: "Credit risk assessment, fraud detection, and investment portfolio optimization.",","
      benefits: ["60% reduction in bad debt", "95% fraud detection accuracy", "20% increase in portfolio returns"]","
    },
    {
      title: "Healthcare Analytics",","
      icon: Users,,,,
      description: "Patient outcome prediction, resource allocation, and treatment optimization.",","
      benefits: ["35% improvement in patient outcomes", "25% reduction in readmissions", "40% cost savings"]","
    },
    {
      title: "Supply Chain",","
      icon: Zap,,,,
      description: "Demand forecasting, supplier risk assessment, and logistics optimization.",","
      benefits: ["45% reduction in stockouts", "30% improvement in delivery times", "25% cost reduction"]","
    }
  ];

  return (
    <>
      <Helmet >
        <title >AI Predictive Analytics - Zion Tech Group | Advanced Forecasting & Insights</title>
        <meta name: "description",";,"
  content: "Transform your business with AI predictive analytics that deliver 94% accuracy in forecasting, customer behavior prediction, and risk assessment. Real-time insights for better decisions." /><meta name: "keywords" content ="predictive analytics, machine learning, forecasting, business intelligence, data analytics, AI insights, predictive modeling" /><link rel: "canonical" href="https://ziontechgroup.com/services/ai-predictive-analytics/>",";,"
  content: "Transform your business with AI predictive analytics that deliver 94% accuracy in forecasting, customer behavior prediction, and risk assessment. Real-time insights for better decisions.","
        />
        <meta name: "keywords" content ="predictive analytics, machine learning, forecasting, business intelligence, data analytics, AI insights, predictive modeling" />","
        <link rel: "canonical" href ="https: //ziontechgroup.com/services/ai-predictive-analytics" />","
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-white">","
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 text-white py-20"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center"
              <h1 className="text-5xl md: text-7xl font-bold mb-6">",";,"
  AI Predictive <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Analytics</span>";,"
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto mb-8">,";,"
  Transform your business with advanced AI predictive analytics that deliver 94% accuracy in forecasting
                customer behavior prediction, and risk assessment for data-driven decision making.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">","
        <section className="bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 text-white py-20">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center">","
              <h1 className="text-5xl md: text-7xl font-bold mb-6">",";,"
  AI Predictive <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Analytics</span>","
              </h1>
              <p className="text-xl md: text-2xl text-indigo-100 max-w-4xl mx-auto mb-8">",";,"
  Transform your business with advanced AI predictive analytics that deliver 94% accuracy in forecasting
                customer behavior prediction, and risk assessment for data-driven decision making.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">","
                <a href="/contact",";,"
  className="inline-flex items-center px-8 py-4 bg-indigo-600 hover: bg-indigo-700 text-white font-semibold rounded-lg transition-colors","
                >
                  <Phone className="w-5 h-5 mr-2/>";,"
                  <Phone className="w-5 h-5 mr-2" />",";,"
  Schedule Demo
                </a>
                <a href="#pricing",";,"
  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover: bg-white hover:text-indigo-900 font-semibold rounded-lg transition-colors","
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5 ml-2/>";,"
                  <ArrowRight className="w-5 h-5 ml-2" />","
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-gray-50"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-12"
              <h2 className="text-4xl font-bold text-gray-900 mb-4"
        <section className="py-16 bg-gray-50">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-12">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">",";,"
  Why Choose Our AI Predictive Analytics?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">",";,"
  Harness the power of advanced machine learning to predict the future and make smarter business decisions.
              </p>
            </div>

            <div className="grid md: grid-cols-4 gap-8">","
              <div className="text-center"
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4"
                  <TrendingUp className="w-8 h-8 text-indigo-600/>";,"
            <div className="grid md: grid-cols-4 gap-8">","
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">","
                  <TrendingUp className="w-8 h-8 text-indigo-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">94% Accuracy</h3>","
                <p className="text-gray-600">Industry-leading prediction accuracy</p>","
              </div>
              <div className="text-center"
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4"
                  <Clock className="w-8 h-8 text-blue-600/>";,"
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">","
                  <Clock className="w-8 h-8 text-blue-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Insights</h3>","
                <p className="text-gray-600">Instant predictions and recommendations</p>","
              </div>
              <div className="text-center"
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4"
                  <Target className="w-8 h-8 text-green-600/>";,"
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">","
                  <Target className="w-8 h-8 text-green-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">35% Retention Boost</h3>","
                <p className="text-gray-600">Improved customer retention rates</p>","
              </div>
              <div className="text-center"
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4"
                  <Shield className="w-8 h-8 text-purple-600/>";,"
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">","
                  <Shield className="w-8 h-8 text-purple-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">60% Risk Reduction</h3>","
                <p className="text-gray-600">Proactive risk identification</p>","
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16"
              <h2 className="text-4xl font-bold text-gray-900 mb-4"
        <section className="py-20">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">",";,"
  Industry Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">",";,"
  Our AI predictive analytics solutions are transforming businesses across multiple industries.
              </p>
            </div>

            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">","
              {useCases.map((useCase, index) => {
                const Icon: useCase.icon;,,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6"
                      <Icon className="w-8 h-8 text-indigo-600/>";,"
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">","
              {useCases.map((useCase, index) => {
                const Icon: useCase.icon;,,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">","
                      <Icon className="w-8 h-8 text-indigo-600" />","
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>"
                    <p className="text-gray-600 mb-6">{useCase.description}</p>"
                    <ul className="space-y-2">","
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm"
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0/>";,"
                          <span className="text-gray-700">{benefit}</span>";"
                        <li key={benefitIndex} className="flex items-center text-sm">","
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />","
                          <span className="text-gray-700">{benefit}</span>"
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-50"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16"
              <h2 className="text-4xl font-bold text-gray-900 mb-4"
        <section className="py-20 bg-gray-50">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">",";,"
  Advanced AI Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">",";,"
  Powerful machine learning features that deliver accurate predictions and actionable insights.
              </p>
            </div>

            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">","
              {features.map((feature, index) => {
                const Icon: feature.icon;,,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4"
                      <Icon className="w-6 h-6 text-indigo-600/>";,"
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>";"
                    <p className="text-gray-600 mb-4">{feature.description}</p>";"
                    <div className="inline-flex items-center text-green-600 font-semibold text-sm"
                      <CheckCircle className="w-4 h-4 mr-1/>";,"
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">","
              {features.map((feature, index) => {
                const Icon: feature.icon;,,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">","
                      <Icon className="w-6 h-6 text-indigo-600" />","
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>"
                    <p className="text-gray-600 mb-4">{feature.description}</p>"
                    <div className="inline-flex items-center text-green-600 font-semibold text-sm">","
                      <CheckCircle className="w-4 h-4 mr-1" />","
                      {feature.benefit}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16"
              <h2 className="text-4xl font-bold text-gray-900 mb-4"
        <section id="pricing" className ="py-20">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">",";,"
  Transparent Pricing for Every Business Size
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">",";,"
  Choose the plan that fits your data analytics needs and budget.
              </p>
            </div>

            <div className="grid md: grid-cols-3 gap-8">","
            <div className="grid md: grid-cols-3 gap-8">","
              {pricing.map((plan, index) => (
                <div key={index} className: {`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-indigo-500 relative' : ''}`}>`
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">","
                      <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">",";,"
  Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">","
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>"
                    <div className="flex items-center justify-center mb-2">","
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>"
                      <span className="text-gray-600 ml-1">{plan.period}</span>"
                    </div>
                    <p className="text-gray-600">{plan.description}</p>"
                  </div>
                  <ul className="space-y-4 mb-8">","
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center"
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0/>";,"
                        <span className="text-gray-700">{feature}</span>";"
                      <li key={featureIndex} className="flex items-center">","
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />","
                        <span className="text-gray-700">{feature}</span>"
                      </li>
                    ))}
                  </ul>
                  <a href="/contact",";,"
  className: {,,
`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${`
plan.popular
? 'bg-indigo-600 text-white hover: bg-indigo-700',';,
? 'bg-indigo-600 text-white hover: bg-indigo-700',',';,
: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
}`}`
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">","
              <p className="text-gray-600 mb-4">Need a custom solution?</p>","
              <a href="/contact",";,"
  className="inline-flex items-center text-indigo-600 hover: text-indigo-700 font-semibold","
              >
                Contact our Data Science Team
                <ArrowRight className="w-4 h-4 ml-1/>";,"
                <ArrowRight className="w-4 h-4 ml-1" />","
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16"
              <h2 className="text-4xl font-bold text-gray-900 mb-4"
        <section className="py-20 bg-gray-50">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">",";,"
  What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">",";,"
  Join hundreds of companies already using our AI predictive analytics to make smarter decisions.
              </p>
            </div>

            <div className="grid md: grid-cols-3 gap-8">","
            <div className="grid md: grid-cols-3 gap-8">","
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">","
                  <div className="flex items-center mb-4">","
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current/>";,"
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />","
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">","
                    "{testimonial.content}"
                  </blockquote>
                  <div >
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>"
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>"
                    <div className="text-indigo-600 text-sm font-medium">{testimonial.company}</div>"
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 text-white"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">","
            <h2 className="text-4xl font-bold mb-6"
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 text-white">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">","
            <h2 className="text-4xl font-bold mb-6">",";,"
  Ready to Predict the Future of Your Business?
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">",";,"
  Transform your decision-making with AI predictive analytics that deliver accurate forecasts and actionable insights.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">","
            <div className="flex flex-col sm: flex-row gap-4 justify-center">","
              <a href="/contact",";,"
  className="inline-flex items-center px-8 py-4 bg-indigo-600 hover: bg-indigo-700 text-white font-semibold rounded-lg transition-colors","
              >
                <Phone className="w-5 h-5 mr-2/>";,"
                <Phone className="w-5 h-5 mr-2" />",";,"
  Schedule Free Demo
              </a>
              <a href="/case-studies",";,"
  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover: bg-white hover:text-indigo-900 font-semibold rounded-lg transition-colors","
              >
                View Success Stories
                <ArrowRight className="w-5 h-5 ml-2/>";,"
                <ArrowRight className="w-5 h-5 ml-2" />","
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AIPredictiveAnalytics;