import React from 'react.ts';
import SEO from '../../components/SEO';
import { motion              } from 'framer-motion.ts';
import { Wrench, Brain, Target, CheckCircle, Clock, TrendingUp, AlertTriangle, Gauge, Database, Shield, Zap, Users, Settings, BarChart3, Activity const AIPredictiveMaintenance: React.FC = (): JSX.Element => {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Predictive Analytics",
      description: "Advanced machine learning algorithms that predict equipment failures before they occur."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of equipment health with instant alerts and notifications."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Smart Maintenance Scheduling",
      description: "Intelligent scheduling that optimizes maintenance windows and reduces downtime."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive insights into equipment performance, trends, and optimization opportunities."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with role-based access control, audit trails, and compliance features."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud-Native Architecture",
      description: "Scalable, resilient infrastructure that grows with your business needs."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      description: "Perfect for small facilities",
      features: [
        "Up to 50 equipment assets",
        "Basic predictive analytics",
        "Standard monitoring",
        "Email support",
        "5 team members"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing operations",
      features: [
        "Up to 200 equipment assets",
        "Advanced AI predictions",
        "Custom dashboards",
        "Priority support",
        "Unlimited team members",
        "API access",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited equipment assets",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "On-premise option",
        "Custom SLA",
        "Training & consultation"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Reduce Downtime",
      description: "Prevent unexpected failures and reduce unplanned downtime by up to 90%"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Optimize Maintenance",
      description: "Schedule maintenance only when needed, saving 20-40% on maintenance costs"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: "Extend Equipment Life",
      description: "Proactive maintenance extends equipment lifespan by 2-3 years"
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: "Improve Safety",
      description: "Prevent safety incidents with early warning systems and predictive alerts"
    }
  ];

  const useCases = [
    {
      title: "Manufacturing",
      description: "Predictive maintenance for production lines, CNC machines, and industrial equipment",
      icon: <Settings className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Energy & Utilities",
      description: "Monitor turbines, generators, and power distribution systems",
      icon: <Zap className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Transportation",
      description: "Fleet maintenance optimization for vehicles, aircraft, and marine vessels",
      icon: <Rocket className="w-8 h-8 text-green-500" />
    },
    {
      title: "Healthcare",
      description: "Medical equipment monitoring and predictive maintenance",
      icon: <Activity className="w-8 h-8 text-red-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
            className="text-center"

            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-400/30 mb-6">
              <Wrench className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-orange-300 font-medium">AI Predictive Maintenance</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Predictive
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-400">
                Maintenance
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your maintenance operations with AI-powered predictive maintenance. Prevent equipment
              failures, reduce downtime, and optimize performance with intelligent monitoring and analytics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-400 hover:to-red-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-orange-500/20">
                Get Started
              </button>
              <button className="px-8 py-4 border border-orange-400/30 text-orange-300 font-semibold rounded-lg hover:bg-orange-400/10 transition-all duration-200">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">
              Predictive Maintenance Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Intelligent monitoring and predictive analytics for optimal performance
            </p>
          </motion.div>

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index)              => (
              <motion.div
                key={feature.title}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 






}}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-orange-400/30 transition-all duration-200 hover:scale-105"

                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Predictive Maintenance
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to predict, prevent, and optimize equipment maintenance
            </p>
          </motion.div>

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {applications.map((application, index)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Predictive Maintenance?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the transformative power of AI-driven maintenance optimization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven solutions across diverse industries and equipment types
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your maintenance needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Maintenance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have already revolutionized their maintenance 
              operations with AI-powered predictive analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-gray-400">
            <p className="mb-2">
              Need help? Contact our team at{' '}
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                kleber@ziontechgroup.com
              </a>
            </p>
            <p>
              Call us at{' '}
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                +1 302 464 0950
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}