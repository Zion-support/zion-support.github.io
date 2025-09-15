import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  DollarSign,
  PieChart,
  LineChart,
  Activity,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  Eye,
  Lock,
  Cloud,
  Smartphone,
  Monitor,
  Play,
  Phone,
  Mail,
  MapPin,
  Calculator,
  AlertTriangle,
  FileText,
  Calendar,
  UserCheck,
  TrendingDown,
  Percent,
  Clock
} from 'lucide-react';
import { SEO } from '../../components/SEO';

const AIFinancialAnalytics = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Forecasting",
      description: "Advanced machine learning algorithms that predict market trends, revenue patterns, and financial outcomes with 95%+ accuracy"
    },
    {
      icon: BarChart3,
      title: "Real-time Financial Dashboards",
      description: "Live financial metrics, KPIs, and performance indicators with instant updates from multiple data sources"
    },
    {
      icon: TrendingUp,
      title: "Risk Assessment & Management",
      description: "Intelligent risk scoring, portfolio analysis, and automated alerts for potential financial threats and opportunities"
    },
    {
      icon: Zap,
      title: "Automated Financial Reporting",
      description: "AI-generated financial reports, compliance documentation, and regulatory filings that adapt to your business needs"
    },
    {
      icon: Shield,
      title: "Enterprise Security & Compliance",
      description: "Bank-grade security with SOC 2, GDPR, and financial industry compliance for sensitive financial data"
    },
    {
      icon: Globe,
      title: "Multi-currency & Global Support",
      description: "Handle international transactions, multi-currency accounting, and global financial regulations seamlessly"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 10 financial accounts",
        "Basic AI forecasting",
        "5 user licenses",
        "Standard reports",
        "Email support",
        "Basic integrations",
        "Monthly analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Ideal for growing businesses and financial teams",
      features: [
        "Up to 50 financial accounts",
        "Advanced AI analytics",
        "25 user licenses",
        "Custom dashboards",
        "Priority support",
        "API access",
        "Advanced integrations",
        "Real-time analytics",
        "Risk management"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large organizations with complex financial needs",
      features: [
        "Unlimited accounts",
        "Custom AI models",
        "Unlimited users",
        "Advanced security",
        "Dedicated support",
        "Custom development",
        "On-premise options",
        "SLA guarantees",
        "Regulatory compliance"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Investment Portfolio Management",
      description: "AI-powered portfolio optimization, risk assessment, and performance tracking for investment professionals",
      icon: TrendingUp
    },
    {
      title: "Business Financial Planning",
      description: "Budget forecasting, cash flow analysis, and financial planning with predictive AI insights",
      icon: Calculator
    },
    {
      title: "Risk Management & Compliance",
      description: "Automated risk assessment, regulatory compliance monitoring, and audit trail management",
      icon: Shield
    },
    {
      title: "Trading & Market Analysis",
      description: "Real-time market data analysis, trading signals, and algorithmic trading recommendations",
      icon: Activity
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Better Returns",
      value: "15-25%",
      description: "Improve investment returns with AI insights"
    },
    {
      icon: Clock,
      title: "Faster Analysis",
      value: "90%",
      description: "Reduce analysis time from hours to minutes"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      value: "30-50%",
      description: "Lower operational costs and improve efficiency"
    },
    {
      icon: Target,
      title: "Risk Reduction",
      value: "40-60%",
      description: "Better risk management and compliance"
    }
  ];

  const testimonials = [
    {
      name: "Robert Chen",
      role: "CFO",
      company: "TechGrowth Capital",
      content: "The AI financial analytics have transformed our decision-making process. We've improved returns by 22% while reducing risk exposure.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "Portfolio Manager",
      company: "Global Investments Ltd",
      content: "Real-time AI insights help us make better trading decisions. The risk assessment tools are incredibly accurate.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Financial Controller",
      company: "InnovateCorp",
      content: "Automated reporting saves us 20+ hours per week. The compliance features ensure we never miss regulatory deadlines.",
      rating: 5
    }
  ];

  const integrations = [
    { name: "QuickBooks", icon: Calculator, description: "Accounting software integration" },
    { name: "Salesforce", icon: Users, description: "CRM and sales data sync" },
    { name: "Bloomberg", icon: TrendingUp, description: "Market data feeds" },
    { name: "Excel", icon: FileText, description: "Spreadsheet automation" },
    { name: "Tableau", icon: BarChart3, description: "Data visualization" },
    { name: "Power BI", icon: Monitor, description: "Business intelligence" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="AI-Powered Financial Analytics - Zion Tech Group"
        description="Transform financial decision-making with AI analytics. Real-time insights, predictive forecasting, and risk management. Start from $399/month."
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <Brain className="w-4 h-4 mr-2 text-cyan-400" />
              AI-Powered Financial Analytics
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Financial Analytics
              </span>
              <br />
              <span className="text-white">Powered by AI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your financial decision-making with AI-powered analytics that provide real-time insights, 
              predictive forecasting, and intelligent risk management for better returns and compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 flex items-center group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#demo"
                className="border border-cyan-400/30 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 flex items-center group"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Proven Results
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact AI analytics can have on your financial performance
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.value}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to transform your financial analysis with AI
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Use Cases
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how different industries are transforming financial analysis with AI
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Seamless Integrations
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing financial tools and workflows
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <integration.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {integration.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {integration.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your financial analysis needs. All plans include a 14-day free trial.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${plan.popular ? 'lg:-mt-8' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`glass rounded-2xl p-8 border transition-all duration-300 backdrop-blur-sm h-full ${
                  plan.popular 
                    ? 'border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                    : 'border-white/20 hover:border-cyan-400/40'
                }`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="https://ziontechgroup.com/contact"
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400'
                        : 'border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
                    }`}
                  >
                    Start Free Trial
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Financial Analysis?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading companies that are already improving returns and reducing risk with AI-powered financial analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 flex items-center group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400/30 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 flex items-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-cyan-400 mb-4" />
              <div className="text-white font-semibold">Phone</div>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-cyan-400 mb-4" />
              <div className="text-white font-semibold">Email</div>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
              <div className="text-white font-semibold">Address</div>
              <div className="text-gray-300 text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIFinancialAnalytics;