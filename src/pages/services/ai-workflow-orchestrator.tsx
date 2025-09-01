import React from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { Helmet              } from 'react-helmet-async.ts';
import { Workflow, 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  BarChart3, 
  Users, 
  Clock,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  BarChart3,
  Shield,
  Cloud,
  Cpu,
  Database,
  Network,
  Cpu,
  Server,
  ShoppingCart
             } from 'lucide-react.ts';

export default function AIWorkflowOrchestrator() {

  const features = [
    {

      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Workflow Intelligence",
      description: "Advanced machine learning algorithms that analyze and optimize your business processes automatically."
    },
    {

      icon: <Workflow className="w-6 h-6" />,
      title: "Visual Workflow Designer",
      description: "Drag-and-drop interface for creating complex workflows with AI suggestions and best practices."
    },
    {

      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Process Optimization",
      description: "Continuous monitoring and automatic optimization of workflows based on performance metrics."
    },
    {

      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive insights into workflow performance, bottlenecks, and optimization opportunities."
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
      price: "$99",
      period: "/month",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 10 workflows",
        "Basic AI optimization",
        "Standard analytics",
        "Email support",
        "5 team members"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {

      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 50 workflows",
        "Advanced AI optimization",
        "Custom analytics",
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
        "Unlimited workflows",
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
      title: "Increase Efficiency",
      description: "Reduce manual tasks by up to 80% with intelligent automation"
    },
    {

      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Save Time",
      description: "Accelerate process execution by 3-5x with AI optimization"
    },
    {

      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: "Improve Accuracy",
      description: "Eliminate human errors with intelligent validation and checks"
    },
    {

      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: "Enhance Collaboration",
      description: "Streamline team communication and task coordination"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Workflow className="w-4 h-4 mr-2" />
                AI-Powered Workflow Orchestration
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Workflow Orchestrator
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business processes with intelligent workflow automation. 
                Our AI-powered platform orchestrates complex workflows, optimizes performance, 
                and drives operational excellence across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </motion.div>
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
              Powerful Features for Modern Workflows
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to create, manage, and optimize intelligent workflows
            </p>
          </motion.div>






}}
              animate = {

  { opacity: 1,
  y: 0 






}}
              transition = {

  { duration: 0.6,
  delay: 0.2 






}}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Powerful Features for Modern Workflows
              </h2>
              
              <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index)              => (
                  <motion.div
                    key={feature.title}
                    initial = {

  { opacity: 0,
  y: 20 






}}
                    animate = {

  { opacity: 1,
  y: 0 






}}
                    transition = {

  { duration: 0.6,
  delay: 0.1 * index 






}}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
              Why Choose AI Workflow Orchestrator?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the transformative power of AI-driven workflow automation
            </p>
          </motion.div>






}}
              animate = {

  { opacity: 1,
  y: 0 






}}
              transition = {

  { duration: 0.6,
  delay: 0.4 






}}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Why Choose AI Workflow Orchestrator?
              </h2>
              
              <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-6">
                {benefits.map((benefit, index)              => (
                  <motion.div
                    key={benefit}
                    initial = {

  { opacity: 0,
  x: -20 






}}
                    animate = {

  { opacity: 1,
  x: 0 






}}
                    transition = {

  { duration: 0.6,
  delay: 0.05 * index 






}}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
              transition = {

  { duration: 0.6,
  delay: 0.6 






}}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Industry Applications
              </h2>
              
              <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-6">
                {useCases.map((useCase, index)              => (
                  <motion.div
                    key={useCase.title}
                    initial = {

  { opacity: 0,
  y: 20 






}}
                    animate = {

  { opacity: 1,
  y: 0 






}}
                    transition = {

  { duration: 0.6,
  delay: 0.1 * index 






}}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <useCase.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{useCase.title}</h3>
                    <p className="text-slate-600 text-sm">{useCase.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
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
              transition = {

  { duration: 0.6,
  delay: 0.8 






}}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Simple, Transparent Pricing
              </h2>
              
              <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
                {pricing.map((plan, index)              => (
                  <motion.div
                    key={plan.name}
                    initial = {

  { opacity: 0,
  y: 20 






}}
                    animate = {

  { opacity: 1,
  y: 0 






}}
                    transition = {

  { duration: 0.6,
  delay: 0.1 * index 






}}
                    className={`relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border ${

                      plan.popular 
                        ? 'border-blue-500 ring-2 ring-blue-500/20' 
                        : 'border-slate-100 hover:border-blue-200'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
                        <span className="text-slate-500">{plan.period}</span>
                      </div>
                      <p className="text-slate-600 mt-2">{plan.description}</p>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-slate-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${

                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}>
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial = {

  { opacity: 0,
  y: 20 






}}
              animate = {

  { opacity: 1,
  y: 0 






}}
              transition = {

  { duration: 0.6,
  delay: 1.0 






}}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Workflows?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join hundreds of companies already using AI Workflow Orchestrator to streamline their operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Start Free Trial
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
              Ready to Transform Your Workflows?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have already revolutionized their operations 
              with AI-powered workflow orchestration.
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