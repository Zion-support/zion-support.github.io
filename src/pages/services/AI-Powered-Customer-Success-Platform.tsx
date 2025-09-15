import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  BarChart3, 
  MessageCircle, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Target,
  Brain
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';

const AIPoweredCustomerSuccessPlatform = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Churn Prediction",
      description: "Predict customer churn with 95% accuracy using advanced machine learning algorithms",
      benefits: ["Early warning system", "Automated intervention triggers", "Risk scoring"]
    },
    {
      icon: MessageCircle,
      title: "Intelligent Customer Communication",
      description: "Automated personalized outreach and engagement campaigns",
      benefits: ["Personalized messaging", "Multi-channel communication", "Response optimization"]
    },
    {
      icon: BarChart3,
      title: "Real-time Success Metrics",
      description: "Comprehensive dashboards with actionable insights and recommendations",
      benefits: ["Live performance tracking", "Custom KPI monitoring", "Predictive analytics"]
    },
    {
      icon: Target,
      title: "Automated Onboarding",
      description: "Streamlined customer onboarding with AI-guided success paths",
      benefits: ["Personalized onboarding flows", "Progress tracking", "Intervention alerts"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP Customer Success, TechCorp",
      content: "Reduced churn by 40% and increased customer satisfaction by 60% in just 3 months.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Customer Experience, InnovateLabs",
      content: "The AI insights have transformed how we approach customer success. Highly recommend!",
      rating: 5
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$199",
      period: "month",
      description: "Perfect for small teams",
      features: [
        "Up to 1,000 customers",
        "Basic churn prediction",
        "Email automation",
        "Standard support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 customers",
        "Advanced AI analytics",
        "Multi-channel automation",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited customers",
        "Custom AI models",
        "White-label solution",
        "Dedicated success manager",
        "Advanced security"
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEO 
        title="AI-Powered Customer Success Platform - Zion Tech Group"
        description="Transform customer success with AI-driven insights, automated onboarding, and predictive churn prevention. Increase retention and satisfaction."
        keywords="AI customer success, churn prediction, customer analytics, automated onboarding, customer retention"
      />
      
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <motion.section 
          className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-zion-cyan to-zion-blue mb-8"
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Customer Success Platform
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your customer success operations with AI-driven insights, automated onboarding, 
              and predictive churn prevention. Increase retention rates and customer satisfaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="btn-futuristic inline-flex items-center"
              >
                Get Started <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="btn-futuristic-outline inline-flex items-center"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to revolutionize your customer success strategy
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-zion-cyan to-zion-blue mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { value: "95%", label: "Churn Prediction Accuracy", icon: TrendingUp },
                { value: "40%", label: "Average Churn Reduction", icon: Shield },
                { value: "60%", label: "Customer Satisfaction Increase", icon: Star },
                { value: "24/7", label: "Automated Monitoring", icon: Clock }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-zion-cyan to-zion-blue mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-lg font-semibold text-zion-cyan">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Customer Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how leading companies are transforming their customer success with our AI platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-zion-cyan">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your customer success needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  className={`relative bg-slate-800/50 rounded-xl p-8 border transition-all duration-300 ${
                    plan.popular 
                      ? 'border-zion-cyan/50 ring-2 ring-zion-cyan/20' 
                      : 'border-slate-700/50'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      {plan.period && (
                        <span className="text-gray-300 ml-2">/{plan.period}</span>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/request-quote"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                        : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Customer Success?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already using our AI-powered platform to increase customer retention and satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="btn-futuristic inline-flex items-center"
              >
                Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="btn-futuristic-outline inline-flex items-center"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default AIPoweredCustomerSuccessPlatform;