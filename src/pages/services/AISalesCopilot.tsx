import React from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { SEO              } from '../../components/SEO';
import { Users, 
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
  Shield,
  FileText
             } from 'lucide-react.ts';

const AISalesCopilot = () => {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  const features = [
    {
      icon: Users,
      title: "Lead Scoring & Qualification",
      description: "AI-powered lead analysis and prioritization to focus on high-value prospects."
    },
    {
      icon: MessageCircle,
      title: "Intelligent Conversation AI",
      description: "Natural language processing for personalized customer interactions and support."
    },
    {
      icon: TrendingUp,
      title: "Sales Forecasting",
      description: "Predictive analytics for accurate revenue forecasting and pipeline management."
    },
    {
      icon: Target,
      title: "Opportunity Management",
      description: "Smart tracking and optimization of sales opportunities throughout the funnel."
    },
    {
      icon: Zap,
      title: "Automated Follow-ups",
      description: "Intelligent scheduling and automated follow-up sequences for better conversion."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive insights into sales performance, trends, and optimization opportunities."
    }
  ];

  const benefits = [
    "Increase sales revenue by 25-40% with AI-powered insights",
    "Reduce sales cycle time by 30-50% through automation",
    "Improve lead conversion rates by 35-60%",
    "Enhance customer engagement and satisfaction by 45%",
    "Reduce manual sales tasks by 70%",
    "Optimize pricing strategies with AI-driven recommendations"
  ];

  const salesProcess = [
    {
      stage: "Lead Generation",
      description: "AI-powered prospecting and lead identification",
      icon: Search
    },
    {
      icon: Target,
      title: "Automated Follow-ups",
      description: "Smart email sequences and follow-up scheduling based on prospect behavior patterns."
    },
    {
      icon: BarChart3,
      title: "Performance Insights",
      description: "Real-time sales metrics and performance optimization recommendations.";
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
    { name: "Zoho CRM", description: "Small business CRM solution" },;
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
      description: "Reduce manual work and focus on building relationships and closing deals.";
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
      icon: CheckCircle;
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
      description: "Property sales automation, lead management, and client relationship optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Sales Copilot - Zion Tech Group"
        description="Transform your sales process with AI-powered automation, lead optimization, and intelligent sales insights. Boost revenue and efficiency."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
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
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full border border-blue-400/30 mb-6">
              <Users className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">AI Sales Copilot</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Supercharge Your Sales with
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                {" "}AI-Powered Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your sales process with intelligent automation, predictive analytics, and 
              AI-driven insights that help your team close more deals and grow revenue faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Intelligent Sales Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Sales Copilot combines cutting-edge artificial intelligence with proven sales 
              methodologies to deliver unprecedented results and efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Measurable Sales Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See real results with our AI Sales Copilot that delivers quantifiable improvements 
              across all aspects of your sales operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>






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
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Global sales methodology support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">24/7 sales support & training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Proven sales transformation track record</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {salesProcess.map((stage, index)              => (
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

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how organizations across industries leverage our AI Sales Copilot 
              to improve sales performance and drive revenue growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index)              => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/20 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{useCase.industry}</h3>
                </div>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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
            className="bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 p-12 rounded-2xl border border-blue-400/20 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Sales?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join organizations already leveraging AI-powered sales automation to improve 
              performance and drive revenue growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
