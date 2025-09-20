import React from "react"
import { motion } from "framer-motion"
import {
  MessageCircle
  Bot,
  Brain,
  Zap,
  Shield,
  Globe,
  Users,
  Clock
  CheckCircle
  Star
  ArrowRight
  Play
  Phone
  Mail
  MapPin
  Headphones
  Smartphone
  Monitor
  TrendingUp
  BarChart3
  Target
  Settings
  Database
  Cloud
  AlertCircle
  FileText
  Calendar
  UserCheck
} from "lucide-react"
import { SEO } from "../../components/SEO"
const AICustomerSupportAutomation = () () => {
  const features = [
  {
  ic,
  o: n: Bot,tit,
  l: e: "AI-Powered Chatbots",descripti,
  o: n: "Intelligent chatbots that understand context, handle complex queries, and provide accurate responses 24/7 with 95%+ accuracy"
},
  {
  ic,
  o: n: Brain,tit,
  l: e: "Natural Language Processing",descripti,
  o: n: "Advanced NLP that understands customer intent, sentiment, and provides personalized responses in multiple languages"
},
  {
  ic,
  o: n: Clock,tit,
  l: e: "24/7 Availability",descripti,
  o: n: "Round-the-clock customer support with instant responses, reducing wait times from hours to seconds"
},
  {
  ic,
  o: n: BarChart3,tit,
  l: e: "Smart Ticket Routing",descripti,
  o: n: "AI-powered ticket classification and routing to the right agents based on complexity, urgency, and expertise"
},
  {
  ic,
  o: n: TrendingUp,tit,
  l: e: "Performance Analytics",descripti,
  o: n: "Comprehensive insights into support metrics, customer satisfaction, and agent performance with actionable recommendations"
},
  {
  ic,
  o: n: Shield,tit,
  l: e: "Enterprise Security",descripti,
  o: n: "Bank-grade security with data encryption, GDPR compliance, and role-based access control for sensitive customer information"
},
  ]

  const pricingPlans = [
  {
  na,
  m: e: "Starter",pri,
  c: e: "$199",peri,
  o: d: "/month",descripti,
  o: n: "Perfect for small businesses and startups",featur,
  e: s: [
  "Up to 1,000 conversations/month"
        "Basic AI chatbot"
        "5 agent licenses"
        "Email support"
        "Basic integrations"
        "Standard templates"
        "Basic analytics"
]
      popul,
  a: r: false
},
  {
  na,
  m: e: "Professional",pri,
  c: e: "$599",peri,
  o: d: "/month",descripti,
  o: n: "Ideal for growing businesses and teams",featur,
  e: s: [
  "Up to 10,000 conversations/month"
        "Advanced AI with NLP"
        "25 agent licenses"
        "Priority support"
        "API access"
        "Custom integrations"
        "Advanced analytics"
        "Multi-language support"
        "White-label options"
]
      popul,
  a: r: true
},
  {
  na,
  m: e: "Enterprise",pri,
  c: e: "$1,999"
      peri,
  o: d: "/month",descripti,
  o: n: "For large organizations with high support volumes",featur,
  e: s: [
  "Unlimited conversations"
        "Custom AI models"
        "Unlimited agents"
        "Dedicated support"
        "Custom development"
        "Advanced security"
        "On-premise options"
        "SLA guarantees"
        "Custom training"
]
      popula,
  r: false
},
  ]
  const useCases = [
  {
  tit,
  l: e: "E-commerce Support",descripti,
  o: n: "Handle order inquiries, returns, and product questions automatically while escalating complex issues to human agents"
      ic,
  o: n: ShoppingCart
},
  {
  tit,
  l: e: "SaaS Customer Success",descripti,
  o: n: "Provide instant technical support, onboarding assistance, and feature explanations to improve user adoption"
      ic,
  o: n: Monitor
},
  {
  tit,
  l: e: "Financial Services",descripti,
  o: n: "Handle account inquiries, transaction questions, and basic banking operations with security and compliance"
      ic,
  o: n: DollarSign
},
  {
  tit,
  l: e: "Healthcare Support",descripti,
  o: n: "Manage appointment scheduling, general inquiries, and provide health information while maintaining HIPAA compliance"
      ic,
  o: n: Heart
},
  ]
  const benefits = [
  {
  ic,
  o: n: Clock,tit,
  l: e: "Faster Response",val,
  u: e: "90%",descripti,
  o: n: "Reduce response times from hours to seconds"
},
  {
  ic,
  o: n: DollarSign,tit,
  l: e: "Cost Reduction",val,
  u: e: "60-80%",descripti,
  o: n: "Lower support costs while improving quality"
},
  {
  ic,
  o: n: Users,tit,
  l: e: "Customer Satisfaction",val,
  u: e: "40%",descripti,
  o: n: "Improve CSAT scores with instant support"
},
  {
  ic,
  o: n: TrendingUp,tit,
  l: e: "Efficiency Gain",val,
  u: e: "3x",descripti,
  o: n: "Handle more support requests with fewer agents"
},
  ]
  const testimonials = [
  {
  na,
  m: e: "Jennifer Adams",ro,
  l: e: "Customer Success Director",compa,
  n: y: "TechFlow Solutions",conte,
  n: t: "Our AI support automation has transformed customer experience. Response times dropped from 4 hours to under 2 minutes.",rati,
  n: g: 5
},
  {
  na,
  m: e: "Marcus Chen",ro,
  l: e: "Operations Manager",compa,
  n: y: "E-commerce Plus",conte,
  n: t: "The chatbot handles 70% of our inquiries automatically, freeing our agents to focus on complex customer issues."
      rati,
  n: g: 5
},
  {
  na,
  m: e: "Sarah Williams",ro,
  l: e: "VP of Support",compa,
  n: y: "CloudTech Inc",conte,
  n: t: "Customer satisfaction increased by 35% while reducing support costs by 65%. Game-changing technology.",rati,
  n: g: 5
},
  ]
  const integrations = [
  { na,
  m: e: "Slack", ic,
  o: n: MessageCircle, descripti,
  o: n: "Seamless team communication" },
  },
  { na,
  m: e: "Zendesk", ic,
  o: n: Headphones, descripti,
  o: n: "Ticket management integration" },
  },
  { na,
  m: e: "Salesforce", ic,
  o: n: Users, descripti,
  o: n: "CRM synchronization" },
  },
  { na,
  m: e: "Intercom", ic,
  o: n: Bot, descripti,
  o: n: "Live chat integration" },
  },
  { na,
  m: e: "HubSpot", ic,
  o: n: BarChart3, descripti,
  o: n: "Marketing automation" },
  },
  { na,
  m: e: "Microsoft Teams", ic,
  o: n: Monitor, descripti,
  o: n: "Team collaboration" },
  },
  ]
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI-Powered Customer Support Automation - Zion Tech Group"
        description="Transform customer support with AI automation. 24/7 availability, instant responses, and 60-80% cost reduction. Start from $199/month."
      />
      
      {/* Hero Section */},
  }
      <section className="pt-32 pb-20 px-4,
  s: m: px-6,
  l: g:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center relative z-10";"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <Bot className="w-4 h-4 mr-2 text-cyan-400" />
              AI-Powered Support Automation
            </div>
            
            <h1 className="text-5xl,
  m: d: text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Customer Support
              </span>
              <br />
              <span className="text-white">Automation</span>
            </h1>
            
            <p className="text-xl m,
  d:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your customer support with AI automation that provides 24/7 availability
              instant responses, and reduces support costs by 60-80% while improving customer satisfaction.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center items-center">
              <a
                href="htt,
  p: s://ziontechgroup.com/contact"
                className="className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg,
  hove: r:from-cyan-400,
  hove: r:to-blue-400 transition-all duration-300 flex items-center group";"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hov,
  e: r:translate-x-1 transition-transform" />
              </a>
              <a
                href="#demo"
                className="className="border border-cyan-400/30 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hove,
  r:bg-cyan-400/10 transition-all duration-300 flex items-center group";"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */},
  }
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Benefits Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="className="text-center mb-16";"
            initial={ opacit,
  y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Proven Results
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact AI automation can have on your customer support
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="group text-center";"
              >
                <div className="glass rounded-2xl p-8 border border-white/20,
  hove: r: border-cyan-400/40 transition-all duration-300 group-hov,
  e: r:transform group-hov,
  e: r:scale-105 backdrop-blur-sm h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hove,
  r:scale-110 transition-transform duration-300">
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

      {/* Features Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="className="text-center mb-16";"
            initial={ opacit,
  y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to automate and optimize your customer support
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {features.map((feature, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="group";"
              >
                <div className="glass rounded-2xl p-8 border border-white/20,
  hove: r: border-cyan-400/40 transition-all duration-300 group-hov,
  e: r:transform group-hov,
  e: r:scale-105 backdrop-blur-sm h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hove,
  r:text-cyan-300 transition-colors duration-300">
                    {feature.title},
  }
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description},
  }
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="className="text-center mb-16";"
            initial={ opacit,
  y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Use Cases
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how different industries are transforming customer support with AI automation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 m,
  d:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, x: index % 2 === 0 ? -30 : 30 },
  }
                whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="group";"
              >
                <div className="glass rounded-2xl p-8 border border-white/20,
  hove: r: border-cyan-400/40 transition-all duration-300 group-hov,
  e: r:transform group-hov,
  e: r:scale-105 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hove,
  r:text-cyan-300 transition-colors duration-300">
                    {useCase.title},
  }
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {useCase.description},
  }
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="className="text-center mb-16";"
            initial={ opacit,
  y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Seamless Integrations
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and workflows for maximum efficiency
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="group";"
              >
                <div className="glass rounded-2xl p-8 border border-white/20,
  hove: r: border-cyan-400/40 transition-all duration-300 group-hov,
  e: r:transform group-hov,
  e: r:scale-105 backdrop-blur-sm h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300">
                    <integration.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hove,
  r:text-cyan-300 transition-colors duration-300">
                    {integration.name},
  }
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {integration.description},
  }
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="className="text-center mb-16";"
            initial={ opacit,
  y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your support volume and business needs. All plans include a 14-day free trial.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 l,
  g:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 30 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
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
                    : 'border-white/20,
  hove: r:border-cyan-400/40'
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
                        {feature},
  }
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="htt,
  p: s: //ziontechgroup.com/contact"
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 block ${
  plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white,
  hove: r:from-cyan-400,
  hove: r:to-blue-400'
                        : 'border border-cyan-400/30 text-cyan-400 hove,
  r:bg-cyan-400/10'
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

      {/* Testimonials Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="className="text-center mb-16";"
            initial={ opacit,
  y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 m,
  d:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 30 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="group";"
              >
                <div className="glass rounded-2xl p-8 border border-white/20,
  hove: r: border-cyan-400/40 transition-all duration-300 group-hov,
  e: r:transform group-hove,
  r:scale-105 backdrop-blur-sm h-full">
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

      {/* CTA Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={ opacit,
  y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading companies that are already reducing costs and improving customer satisfaction with AI-powered support automation.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center items-center">
              <a
                href="htt,
  p: s://ziontechgroup.com/contact"
                className="className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg,
  hove: r:from-cyan-400,
  hove: r:to-blue-400 transition-all duration-300 flex items-center group";"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hov,
  e: r:translate-x-1 transition-transform" />
              </a>
              <a
                href="t,
  e: l:+13024640950"
                className="className="border border-cyan-400/30 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hove,
  r:bg-cyan-400/10 transition-all duration-300 flex items-center group";"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */},
  }
      <div className="py-16 px-4,
  s: m: px-6,
  l: g:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-cyan-400 mb-4" />
              <div className="text-white font-semibold">Phone</div>
              <a href="t,
  e: l:+13024640950" className="text-cyan-400,
  hove: r:text-cyan-300 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-cyan-400 mb-4" />
              <div className="text-white font-semibold">Email</div>
              <a href="mail,
  t: o:kleber@ziontechgroup.com" className="text-cyan-400 hove,
  r:text-cyan-300 transition-colors">
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

        {/* CTA Section */},
  }
        <div className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={ opaci,
  t: y: 0, y: 30 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Customer Support?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using AI to provide exceptional customer experiences
              </p>
              <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
                <motion.button
                  whileHover={ scal,
  e: 1.05 },
  }
                  whileTap={ sca,
  l: e: 0.95 },
  }
                  className="className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg,
  hove: r: from-blue-600,
  hove: r:to-purple-700 transition-all duration-300 flex items-center justify-center";"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
                <motion.button
                  whileHover={ scal,
  e: 1.05 },
  }
                  whileTap={ sca,
  l: e: 0.95 },
  }
                  className="className="px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg,
  hove: r: bg-blue-400 hove,
  r:text-white transition-all duration-300";"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      </section>
    )
}
// Add missing icon components
const ShoppingCart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
  </svg>
)

const DollarSign = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
)

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)

export default AICustomerSupportAutomation