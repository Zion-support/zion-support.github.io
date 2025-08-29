import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Users, 
  BarChart3, 
  Target, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Rocket,
  Play,
  Eye,
  Zap,
  Globe,
  Shield,
  Activity,
  MessageSquare,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AICustomerAnalytics() {
  const features = [
    {
      title: "AI-Powered Customer Segmentation",
      description: "Advanced ML algorithms automatically segment customers by behavior and preferences",
      icon: Users,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast customer behavior, churn risk, and lifetime value with 95% accuracy",
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Insights",
      description: "Instant customer behavior analysis and actionable recommendations",
      icon: Activity,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Personalization Engine",
      description: "AI-driven content and product recommendations for each customer",
      icon: Target,
      color: "from-red-500 to-pink-500"
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 1499,
      features: ['Up to 10K customers', 'Basic analytics', 'Email support', '5 user accounts'],
      popular: false
    },
    {
      name: 'Professional',
      price: 3499,
      features: ['Up to 100K customers', 'Advanced AI analytics', 'Priority support', '25 user accounts', 'API access'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 7999,
      features: ['Unlimited customers', 'Custom AI models', '24/7 support', 'Unlimited users', 'White-label options'],
      popular: false
    }
  ];

  const benefits = [
    { title: "Increase Revenue", metric: "25%", description: "AI-driven personalization boosts sales" },
    { title: "Reduce Churn", metric: "40%", description: "Predictive analytics prevent customer loss" },
    { title: "Improve Engagement", metric: "60%", description: "Better targeting increases customer interaction" },
    { title: "ROI Timeline", metric: "3 months", description: "See measurable results quickly" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Customer Analytics - Zion Tech Group"
        description="AI-powered customer analytics platform for predictive insights, segmentation, and personalization. Transform customer data into actionable business intelligence."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-zion-cyan font-medium">AI Analytics Technology</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI-Powered Customer
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  Analytics
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8">
                Transform customer data into actionable insights with AI technology that predicts behavior, 
                segments customers, and personalizes experiences for maximum engagement and revenue.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-xl border border-slate-600/50 hover:bg-slate-700/50 transition-all duration-200"
                >
                  Watch Demo
                  <Play className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">AI Analytics Dashboard</div>
                      <div className="text-slate-400 text-sm">Processing customer data...</div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-white text-sm mb-2">Key Metrics:</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-slate-300 text-sm">Revenue: +25%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-slate-300 text-sm">Churn: -40%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 text-green-400">●</div>
                        <span className="text-slate-300 text-sm">Engagement: +60%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">95%</div>
                    <div className="text-slate-400 text-sm">Prediction Accuracy</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose AI Customer Analytics?</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our AI-powered platform delivers measurable results that transform customer relationships
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/30"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.metric}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-slate-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Advanced AI technology designed specifically for customer intelligence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Transparent Pricing</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose the plan that fits your business size and analytics needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 bg-slate-800/50 backdrop-blur-sm rounded-3xl border ${
                plan.popular ? 'border-blue-500/50 ring-2 ring-blue-500/20' : 'border-slate-700/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">${plan.price}</div>
                <div className="text-slate-400">per month</div>
              </div>
              
              <div className="mb-6">
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                to="/contact"
                className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 border border-slate-600/50'
                }`}
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl border border-blue-500/20 p-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Customer Insights?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Join thousands of businesses that are already using AI to understand their customers better. 
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200"
            >
              Start Free Trial
              <Rocket className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/demo"
              className="inline-flex items-center px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-xl border border-slate-600/50 hover:bg-slate-700/50 transition-all duration-200"
            >
              Schedule Demo
              <Play className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}