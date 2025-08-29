import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Zap, 
  Heart, 
  Shield, 
  TrendingUp, 
  MessageCircle, 
  Clock, 
  CheckCircle,
  ArrowRight,
  BarChart3,
  Settings,
  Bell,
  Target,
  Award,
  Star,
  Phone,
  Mail,
  Calendar,
  FileText,
  PieChart
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AICustomerSuccessPlatform() {
  const features = [
    {
      icon: Users,
      title: "AI-Powered Customer Insights",
      description: "Predict customer behavior and identify at-risk accounts before they churn"
    },
    {
      icon: Zap,
      title: "Automated Success Journeys",
      description: "Create personalized onboarding and success paths that adapt to customer needs"
    },
    {
      icon: Heart,
      title: "Proactive Engagement",
      description: "Automatically reach out to customers at the right time with the right message"
    },
    {
      icon: Shield,
      title: "Churn Prevention",
      description: "AI algorithms detect early warning signs and trigger intervention strategies"
    },
    {
      icon: TrendingUp,
      title: "Success Metrics",
      description: "Track NPS, CSAT, and other key success indicators in real-time"
    },
    {
      icon: MessageCircle,
      title: "Multi-channel Communication",
      description: "Engage customers across email, chat, phone, and in-app messaging"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Reduced Churn",
      description: "Decrease customer churn by up to 40% with proactive engagement",
      metric: "40%"
    },
    {
      icon: TrendingUp,
      title: "Increased Retention",
      description: "Boost customer lifetime value by improving retention rates",
      metric: "3.2x"
    },
    {
      icon: Users,
      title: "Better Engagement",
      description: "Improve customer satisfaction scores with personalized experiences",
      metric: "85%"
    },
    {
      icon: Zap,
      title: "Operational Efficiency",
      description: "Automate routine tasks and focus on high-value customer interactions",
      metric: "60%"
    }
  ];

  const useCases = [
    {
      title: "SaaS Companies",
      description: "Automate onboarding, feature adoption tracking, and renewal management",
      icon: Users
    },
    {
      title: "E-commerce",
      description: "Personalized recommendations, order tracking, and post-purchase support",
      icon: ShoppingCart
    },
    {
      title: "Financial Services",
      description: "Account monitoring, financial health tracking, and proactive support",
      icon: Shield
    },
    {
      title: "Healthcare",
      description: "Patient engagement, appointment reminders, and health outcome tracking",
      icon: Heart
    }
  ];

  const pricing = [
    {
      name: "Growth",
      price: "$799",
      period: "/month",
      description: "Perfect for growing companies with up to 1,000 customers",
      features: [
        "Up to 1,000 customers",
        "Basic AI insights",
        "Email automation",
        "Standard support",
        "Basic analytics",
        "Success metrics tracking"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Scale",
      price: "$1,999",
      period: "/month",
      description: "Ideal for established companies with growing customer bases",
      features: [
        "Up to 10,000 customers",
        "Advanced AI capabilities",
        "Multi-channel automation",
        "Priority support",
        "Advanced analytics",
        "Custom success journeys",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations requiring custom solutions and dedicated support",
      features: [
        "Unlimited customers",
        "Custom AI models",
        "White-label solution",
        "Dedicated support team",
        "Custom integrations",
        "SLA guarantees",
        "On-premise option"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <>
      <SEO 
        title="AI Customer Success Platform - Zion Tech Group"
        description="Transform customer success with AI-powered automation. Reduce churn, increase retention, and deliver exceptional customer experiences."
        canonical="/services/ai-customer-success-platform"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-pink-900/20 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-6"
            >
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Customer Success
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              AI Customer Success
              <span className="block bg-gradient-to-r from-pink-400 via-rose-400 to-pink-600 bg-clip-text text-transparent">
                Platform
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
            >
              Transform customer success with AI-powered automation. Predict churn, automate engagement, and deliver exceptional customer experiences that drive retention and growth.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg font-semibold hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-pink-500 text-pink-400 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose AI Customer Success?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transform your customer success operations with intelligent automation and predictive insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Metrics */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Proven Results</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See the measurable impact of AI Customer Success on your business metrics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-pink-400" />
                </div>
                <div className="text-4xl font-bold text-pink-400 mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industry Solutions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tailored customer success solutions for your industry's unique challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50"
              >
                <div className="w-16 h-16 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-slate-300 text-lg">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Journey */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Customer Success Journey</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From onboarding to renewal, AI guides every step of the customer journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Onboarding</h3>
              <p className="text-slate-300">Personalized welcome and setup guidance</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Adoption</h3>
              <p className="text-slate-300">Feature discovery and value realization</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Engagement</h3>
              <p className="text-slate-300">Proactive support and relationship building</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Renewal</h3>
              <p className="text-slate-300">Expansion opportunities and contract renewal</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your customer success needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 p-8 rounded-xl border ${
                  plan.popular 
                    ? 'border-pink-500/50 bg-pink-500/5' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                  <p className="text-slate-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.name === "Enterprise" ? "/contact" : "/request-quote"}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-pink-500 hover:bg-pink-600 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Customer Success?</h2>
          <p className="text-xl mb-8 text-pink-100">
            Join leading companies already using AI to deliver exceptional customer experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="px-8 py-4 bg-white text-pink-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}