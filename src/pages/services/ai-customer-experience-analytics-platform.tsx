import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Bot,
  Workflow,
  BarChart3,
  Cpu,
  Database,
  Network,
  Globe,
  Target,
  Rocket,
  Lightbulb,
  Settings,
  Activity,
  Eye,
  Lock,
  Server,
  Cloud,
  Smartphone,
  Monitor,
  Code,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Palette,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Target2,
  Building2,
  Handshake,
  FileText,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Heart,
  Star,
  ThumbsUp,
  MessageSquare,
  UserCheck,
  PieChart,
  LineChart,
  Activity as ActivityIcon,
  MousePointer,
  Smartphone as SmartphoneIcon,
  Globe as GlobeIcon
} from 'lucide-react';

export default function AICustomerExperienceAnalyticsPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Sentiment Analysis",
      description: "Advanced natural language processing that understands customer emotions, intent, and satisfaction levels across all touchpoints."
    },
    {
      icon: BarChart3,
      title: "Real-Time Customer Journey Mapping",
      description: "Track customer interactions in real-time across all channels to identify friction points and optimization opportunities."
    },
    {
      icon: Users,
      title: "Predictive Customer Behavior Modeling",
      description: "Forecast customer actions, churn risk, and lifetime value using machine learning algorithms with 90%+ accuracy."
    },
    {
      icon: Eye,
      title: "Omnichannel Experience Monitoring",
      description: "Unified view of customer interactions across web, mobile, social media, call centers, and physical locations."
    },
    {
      icon: Heart,
      title: "Emotional Intelligence Analytics",
      description: "Measure and analyze customer emotional responses to improve brand perception and loyalty."
    },
    {
      icon: Target,
      title: "Personalization Engine",
      description: "AI-driven personalization that adapts content, offers, and experiences based on individual customer preferences."
    }
  ];

  const benefits = [
    "Increase customer satisfaction scores by 35-50%",
    "Reduce customer churn by 25-40% through predictive insights",
    "Improve customer lifetime value by 30-60%",
    "Optimize conversion rates by 20-45%",
    "Reduce customer service costs by 30-50%",
    "Achieve 90%+ accuracy in customer behavior prediction"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$1,999",
      period: "/month",
      description: "Perfect for small businesses starting their CX analytics journey",
      features: [
        "Basic sentiment analysis",
        "Up to 10,000 customer interactions/month",
        "Standard analytics dashboard",
        "Email support",
        "Basic integrations",
        "Real-time monitoring"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$4,999",
      period: "/month",
      description: "Ideal for growing businesses with complex customer journeys",
      features: [
        "Advanced AI analytics",
        "Up to 100,000 interactions/month",
        "Predictive modeling",
        "Priority support",
        "Custom integrations",
        "Multi-channel tracking",
        "Customer journey mapping",
        "A/B testing tools"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$12,999",
      period: "/month",
      description: "For large enterprises requiring comprehensive CX insights",
      features: [
        "Full AI-powered analytics",
        "Unlimited interactions",
        "Custom AI model training",
        "Dedicated support team",
        "White-label solutions",
        "Advanced security features",
        "Global customer insights",
        "Custom development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Personalized shopping experiences, cart abandonment analysis, and product recommendation optimization",
      roi: "40% revenue increase"
    },
    {
      industry: "Banking & Finance",
      description: "Customer journey optimization, fraud detection, and personalized financial advice",
      roi: "55% customer retention"
    },
    {
      industry: "Healthcare",
      description: "Patient experience monitoring, appointment scheduling optimization, and care quality improvement",
      roi: "65% patient satisfaction"
    },
    {
      industry: "Telecommunications",
      description: "Service quality monitoring, customer support optimization, and churn prediction",
      roi: "50% service improvement"
    }
  ];

  const analyticsCapabilities = [
    {
      category: "Customer Sentiment",
      metrics: ["Emotion detection", "Satisfaction scoring", "Brand perception", "Voice of customer"],
      icon: Heart
    },
    {
      category: "Behavioral Analytics",
      metrics: ["Click patterns", "Navigation flows", "Engagement metrics", "Conversion tracking"],
      icon: MousePointer
    },
    {
      category: "Predictive Insights",
      metrics: ["Churn prediction", "Lifetime value", "Next best action", "Demand forecasting"],
      icon: TrendingUp
    },
    {
      category: "Journey Mapping",
      metrics: ["Touchpoint analysis", "Friction identification", "Optimization opportunities", "Cross-channel insights"],
      icon: Workflow
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-purple/20 border border-zion-purple/30 text-zion-purple text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Customer Experience
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Customer Experience
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {" "}Analytics Platform
              </span>
            </h1>
            
            <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto">
              Transform customer relationships with AI-powered analytics that understand, predict, and optimize every customer interaction 
              across all touchpoints in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white font-semibold rounded-lg hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-zion-purple/25"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary CX Analytics Capabilities
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technologies to deliver unprecedented insights into customer behavior and preferences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-zion-purple/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Analytics Suite
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Advanced analytics capabilities that provide deep insights into every aspect of customer experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analyticsCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4">
                    <capability.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{capability.category}</h3>
                </div>
                <ul className="space-y-2">
                  {capability.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span className="text-zinc-300">{metric}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Customer Experience
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Experience unprecedented customer insights and loyalty with AI-powered analytics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Our Platform?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                  <span className="text-zinc-300">Real-time processing of customer data</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                  <span className="text-zinc-300">99.9% accuracy in sentiment analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                  <span className="text-zinc-300">GDPR and SOC 2 compliant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                  <span className="text-zinc-300">24/7 customer insights monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                  <span className="text-zinc-300">Custom AI model training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Choose the plan that best fits your customer analytics needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zinc-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-purple shadow-lg shadow-zion-purple/25' 
                    : 'border-zinc-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zinc-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zinc-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.cta === "Contact Sales" ? "/contact" : "/signup"}
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple'
                      : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our platform delivers measurable results across diverse industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 text-center hover:border-zion-purple/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-zinc-300 mb-4">{useCase.description}</p>
                <div className="inline-flex items-center px-3 py-1 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full">
                  <span className="text-zion-cyan text-sm font-medium">{useCase.roi}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl text-zinc-300 mb-8">
              Join the future of customer experience analytics with our AI-powered platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white font-semibold rounded-lg hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-zion-purple/25"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-zinc-300">
                  <Phone className="w-5 h-5 text-zion-cyan" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-zinc-300">
                  <Mail className="w-5 h-5 text-zion-cyan" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-zinc-300">
                  <MapPin className="w-5 h-5 text-zion-cyan" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Learn More</h3>
              <div className="space-y-3">
                <Link to="/services" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  View All Services →
                </Link>
                <Link to="/case-studies" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  Case Studies →
                </Link>
                <Link to="/blog" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  Latest Insights →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}