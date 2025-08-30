<<<<<<< HEAD
import React from 'react.ts';
import { Link  } from 'react-router-dom.ts';
import { TrendingUp, 
=======
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from "../../components/SEO";
import { 
  Users, 
  TrendingUp, 
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  Target, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Brain,
  Clock,
  DollarSign,
  ArrowRight
 } from 'lucide-react';
import { SEO  } from '@/components/SEO';

const AISalesCopilot = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Lead Scoring",
      description: "Advanced machine learning algorithms analyze customer behavior, engagement patterns, and buying signals to automatically score and prioritize leads.",
      benefits["Increase conversion rates by 35%", "Focus on high-value prospects", "Reduce sales cycle time"]
    },
    {
      icon: MessageSquare,
      title: "Automated Follow-up Sequences",
      description: "Intelligent follow-up campaigns that adapt based on customer responses, ensuring no lead falls through the cracks.",
      benefits["Reduce follow-up time by 80%", "Personalized communication", "24/7 lead nurturing"]
    },
    {
      icon: Phone,
      title: "Sales Call Transcription & Analysis",
      description: "Real-time call transcription with AI-powered sentiment analysis, key point extraction, and actionable insights.",
      benefits["Improve call quality", "Identify training opportunities", "Track deal progress"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
<<<<<<< HEAD
      description: "Forecast sales outcomes, identify at-risk deals, and recommend optimal actions based on historical data and current trends.",
      benefits["Better forecasting accuracy", "Proactive risk management", "Data-driven decisions"]
    }
=======
      description: "Forecast sales outcomes and identify high-probability opportunities with AI insights."
    },
    {
      icon: Target,
      title: "Automated Follow-ups",
      description: "Smart email sequences and follow-up scheduling based on prospect behavior patterns."
    },
    {
      icon: BarChart3,
      title: "Performance Insights",
      description: "Real-time sales metrics and performance optimization recommendations."
    },;
    {;
      icon: Zap,;
      title: "Revenue Optimization",;
      description: "Data-driven strategies to maximize deal size and improve win rates.";
    };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  ];

  const integrations = [
    { name: "Salesforce", description: "Full CRM integration with automatic data sync" },
    { name: "HubSpot", description: "Seamless marketing and sales alignment" },
    { name: "Pipedrive", description: "Pipeline management and deal tracking" },
    { name: "Microsoft Dynamics", description: "Enterprise CRM integration" },
    { name: "Zoho CRM", description: "Small business CRM solution" },
    { name: "Slack", description: "Team communication and notifications" };
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: 199,
      period: "month",
      description: "Perfect for small sales teams",
      features[
        "Up to 5 users",
        "AI lead scoring",
        "Basic follow-up automation",
        "Email integration",
        "Basic analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 399,
      period: "month",
      description: "Ideal for growing sales organizations",
      features[
        "Up to 25 users",
        "Advanced AI features",
        "Call transcription & analysis",
        "Predictive analytics",
        "CRM integrations",
        "Priority support",
        "Custom playbooks"
      ],
      popular: true
    },
    {
<<<<<<< HEAD
      name: "Enterprise",
      price: 799,
      period: "month",
      description: "For large sales teams with complex needs",
      features[
        "Unlimited users",
        "Custom AI models",
        "Advanced analytics",
        "API access",
        "White-label options",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantees"
      ],
      popular: false
    }
=======
      icon: Users,
      title: "Enhanced Customer Experience",
      description: "Provide personalized interactions and faster response times to prospects."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description: "Make informed sales decisions based on AI analytics and insights."
    },
    {
      icon: Clock,
      title: "Time Optimization",
      description: "Reduce manual work and focus on building relationships and closing deals."
    },;
    {;
      icon: Award,;
      title: "Competitive Advantage",;
      description: "Stay ahead of competitors with AI-powered sales intelligence and automation.";
    };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Sales Director",
      comp: "TechFlow Solutions",
      content: "AI Sales Copilot has transformed our sales process. We've seen a 40% increase in conversion rates and our team is 50% more productive.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "VP of Sales",
      comp: "InnovateCorp",
      content: "The predictive analytics feature alone has helped us close deals we would have missed. ROI within the first month!",
      rating: 5
    },
    {
<<<<<<< HEAD
      name: "Emily Rodriguez",
      role: "Sales Manager",
      comp: "Growth Dynamics",
      content: "Automated follow-ups ensure we never lose track of prospects. Our follow-up response time went from days to minutes.",
      rating: 5
    }
=======
      stage: "Engagement",
      description: "Intelligent conversation AI and personalized communication",
      icon: MessageCircle
    },
    {
      stage: "Opportunity Management",
      description: "Track and manage sales opportunities with predictive analytics",
      icon: TrendingUp
    },
    {
      stage: "Closing",
      description: "AI-assisted deal closing with optimized pricing and negotiation",
      icon: CheckCircle
    },;
    {;
      stage: "Retention",;
      description: "Customer success monitoring and expansion opportunity identification",;
      icon: Users;
    };
  ];

  const useCases = [
    {
      industry: "B2B Sales",
      description: "Enterprise sales teams and complex deal management",
      icon: Users
    },
    {
      industry: "E-commerce",
      description: "Online retail sales and customer relationship management",
      icon: ShoppingCart
    },
    {
      industry: "SaaS",
      description: "Software subscription sales and customer lifecycle management",
      icon: Cpu
    },
    {
      industry: "Real Estate",
      description: "Property sales and client relationship management",
      icon: Home
    },
    {
      industry: "Financial Services",
      description: "Investment and insurance sales with compliance support",
      icon: DollarSign
    },;
    {;
      industry: "Healthcare",;
      description: "Medical device and service sales with regulatory compliance",;
      icon: Heart;
    };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Sales Copilot Pro — Zion Tech Group | Intelligent Sales Automation"
        description="Transform your sales process with AI-powered lead scoring, automated follow-ups, call analysis, and predictive analytics. Increase conversions by 35%."
        keywords="AI sales, sales automation, lead scoring, sales copilot, CRM integration, predictive analytics"
        canonical="https://ziontechgroup.com/services/ai-sales-copilot"
      />

      {/* Hero Section */}
<<<<<<< HEAD
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2"/>
=======
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-indigo-900/20"></div>
        
        <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            animate = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
              AI-Powered Sales
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Sales Copilot Pro
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your sales process with intelligent automation. AI-powered lead scoring, automated follow-ups, 
              call analysis, and predictive analytics to boost conversions by 35%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              >
                📞 Call +1 (302) 464-0950
              </a>
              <a 
                href="/request-quote" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                Get Free Demo
              </a>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose AI Sales Copilot Pro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">35% Increase in Conversions</h3>
              <p className="text-gray-300">AI-powered insights drive better sales outcomes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">80% Faster Follow-ups</h3>
              <p className="text-gray-300">Automated sequences never miss opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">50% Team Productivity</h3>
              <p className="text-gray-300">Focus on high-value activities, not admin</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 Lead Nurturing</h3>
              <p className="text-gray-300">Never lose a prospect to timing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful AI Features</h2>
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-12">
            {features.map((feature, index)  => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-8 hover:border-blue-500/50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white"/>
=======
      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Sales Copilot provides comprehensive tools to automate and optimize 
              your sales process for maximum efficiency and results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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
  { duration: 0.5,
  delay: index * 0.1 





}}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Integrations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Seamless Integrations</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index)  => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all">
                <h3 className="text-xl font-bold text-white mb-3">{integration.name}</h3>
                <p className="text-gray-300 text-sm">{integration.description}</p>
              </div>
=======
      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Platform Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of AI-powered sales automation that drives 
              efficiency and improves your sales performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial = {
  { opacity: 0,
  y: 20 





}}
                whileInView = {
  { opacity: 1,
  y: 0 





}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 





}}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Transparent Pricing</h2>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
            {pricingTiers.map((tier, index)  => (
              <div key={index} className={`bg-slate-800/50 border rounded-xl p-8 relative ${
                tier.popular 
                  ? 'border-blue-500/50 bg-slate-800/70' 
                  : 'border-white/10'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${tier.price}</span>
                    <span className="text-gray-400 ml-2">/{tier.period}</span>
=======
      {/* Sales Process Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Sales Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive sales process ensures systematic optimization 
              and continuous improvement of your sales performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {salesProcess.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial = {
  { opacity: 0,
  y: 20 





}}
                whileInView = {
  { opacity: 1,
  y: 0 





}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 





}}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stage.icon className="w-8 h-8 text-white" />
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="tel:+13024640950" 
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:scale-105'
                      : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
            {testimonials.map((testimonial, index)  => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current"/>
                  ))}
=======
      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how organizations across industries leverage our AI Sales Copilot 
              to improve sales performance and drive revenue growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial = {
  { opacity: 0,
  y: 20 





}}
                whileInView = {
  { opacity: 1,
  y: 0 





}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 





}}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.comp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Sales Process?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of sales teams already using AI Sales Copilot Pro to increase conversions, 
            improve productivity, and close more deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
            >
              📞 Call +1 (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              ✉️ Email Us
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
            <p>🌐 <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>;
  )};

export default AISalesCopilot;
=======
      <section className = "py-20 bg-gradient-to-r from-blue-900/20 to-indigo-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Sales?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join organizations already leveraging AI-powered sales automation to improve 
              performance and drive revenue growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-lg flex items-center justify-center">
                <Star className="w-5 h-5 mr-2" />
                Get Started Today
              </button>
              <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 text-lg">
                <Share2 className="w-5 h-5 mr-2 inline" />
                Schedule Demo
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

