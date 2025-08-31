import React from 'react.ts';
import { motion               } from 'framer-motion.ts';
import { SEO               } from '@/components/SEO';
import { Brain, 
  Users, 
  Calendar, 
  TrendingUp, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Calendar,
  Target,
  Zap,
  Shield,
  Activity,
  Eye,
  Settings,
  Download,
  Share2,
  Filter,
  Search,
  AlertTriangle,
  Lightbulb,
  BarChart,
  Mail,
  MessageSquare,
  Phone,
  FileText,
  PieChart,
  LineChart,
  Megaphone,
  Bot,
  Cpu,
  Network,
  Smartphone,
  Cloud
              } from 'lucide-react.ts';

const AIProjectManagementPlatform: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Task Prioritization",
      description: "Intelligent algorithms automatically prioritize tasks based on deadlines, dependencies, and business impact.",
      icon: Target,
      benefits: ["Optimized workflow efficiency", "Reduced project delays", "Better resource allocation"]
    },
    {
      title: "Smart Workflow Automation",
      description: "Automate repetitive project management tasks and create intelligent workflows that adapt to your team's needs.",
      icon: Workflow,
      benefits: ["Time savings", "Consistent processes", "Reduced human error"]
    },
    {
      title: "Predictive Project Analytics",
      description: "AI-driven insights predict project outcomes, identify risks, and suggest optimizations before issues arise.",
      icon: BarChart3,
      benefits: ["Proactive risk management", "Data-driven decisions", "Improved project success rates"]
    },
    {
      title: "Intelligent Team Management",
      description: "AI-powered team matching, workload balancing, and performance analytics for optimal team productivity.",
      icon: Users,
      benefits: ["Better team collaboration", "Balanced workloads", "Enhanced performance tracking"]
    },
    {
      title: "Real-Time Progress Tracking",
      description: "Live monitoring of project progress with AI-powered insights and automated status updates.",
      icon: Activity,
      benefits: ["Transparent project visibility", "Timely interventions", "Stakeholder confidence"]
    },
    {
      title: "Smart Goal Optimization",
      description: "AI algorithms continuously optimize project goals and milestones based on real-time data and constraints.",
      icon: TrendingUp,
      benefits: ["Adaptive planning", "Resource optimization", "Goal achievement"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 10 team members",
        "AI task prioritization",
        "Basic workflow automation",
        "Project templates",
        "Email support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 50 team members",
        "Advanced AI analytics",
        "Custom workflows",
        "Team performance insights",
        "Priority support",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "Full AI suite",
        "Custom AI model training",
        "Advanced security",
        "Dedicated account manager",
        "24/7 phone support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Software Development",
      description: "Manage complex software projects with AI-powered sprint planning and release management.",
      icon: Code,
      benefits: ["Agile optimization", "Release automation", "Quality assurance"]
    },
    {
      industry: "Marketing Campaigns",
      description: "Coordinate multi-channel marketing campaigns with intelligent scheduling and performance tracking.",
      icon: Megaphone,
      benefits: ["Campaign automation", "Performance optimization", "ROI tracking"]
    },
    {
      industry: "Product Launch",
      description: "Streamline product launches with AI-driven timeline optimization and risk management.",
      icon: Rocket,
      benefits: ["Launch coordination", "Risk mitigation", "Market timing"]
    },
    {
      industry: "Event Planning",
      description: "Plan and execute events with AI-powered logistics optimization and attendee management.",
      icon: Calendar,
      benefits: ["Logistics automation", "Attendee engagement", "Resource optimization"]
    }
  ];

  const platformCapabilities = [
    {
      category: "AI & Machine Learning",
      capabilities: [
        "Natural language task processing",
        "Predictive analytics",
        "Pattern recognition",
        "Automated decision making",
        "Continuous learning algorithms"
      ]
    },
    {
      category: "Project Management",
      capabilities: [
        "Gantt charts and timelines",
        "Resource allocation",
        "Budget tracking",
        "Risk management",
        "Stakeholder communication"
      ]
    },
    {
      category: "Team Collaboration",
      capabilities: [
        "Real-time messaging",
        "File sharing and storage",
        "Video conferencing",
        "Task comments and feedback",
        "Team performance analytics"
      ]
    },
    {
      category: "Integration & API",
      capabilities: [
        "Third-party integrations",
        "RESTful API access",
        "Webhook support",
        "Data import/export",
        "Custom app development"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate-darker">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-purple text-sm font-medium mb-6">
              <Workflow className="w-4 h-4 mr-2" />
              AI-Powered Project Management
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Project Management
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {" "}Platform
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-300 mb-8 leading-relaxed">
              Transform your project management with AI-powered insights, automated workflows, and intelligent resource allocation. 
              Deliver projects faster, smarter, and with unprecedented success rates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="#features"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Choose AI-Powered
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {" "}Project Management?
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Our AI platform delivers measurable results that transform how you manage projects and teams.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">50% Faster Delivery</h3>
              <p className="text-zinc-400">AI-optimized workflows and intelligent resource allocation reduce project timelines significantly.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-2xl mb-6">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">40% Cost Reduction</h3>
              <p className="text-zinc-400">Eliminate inefficiencies and optimize resource usage with AI-driven insights and automation.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple-dark rounded-2xl mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">90% Success Rate</h3>
              <p className="text-zinc-400">Predictive analytics and risk management ensure projects are delivered on time and within budget.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Powerful
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {" "}AI Features
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Discover how our AI technology revolutionizes every aspect of project management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)               => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"

                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of teams already experiencing the benefits of AI-powered project management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index)               => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-slate-light/20 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zinc-400 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-zinc-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {useCases.map((useCase, index)               => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  x: index % 2 === 0 ? -20 : 20 






}}
                whileInView = {
  { opacity: 1,
  x: 0 






}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"

                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 text-lg">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Simple,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {" "}Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Choose the plan that fits your team size and project requirements. All plans include our core AI features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
            {pricingPlans.map((plan, index)               => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative bg-zion-slate-dark/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/25' 
                    : 'border-zion-slate-light/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zinc-400 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zinc-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zinc-300">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.cta === "Contact Sales" ? "/contact" : "/signup"}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-purple hover:to-zion-cyan'
                      : 'border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Industry
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {" "}Use Cases
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Our AI platform adapts to various industries and project types, delivering tailored solutions for your specific needs.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-slate-light/20 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{useCase.industry}</h3>
                </div>
                <p className="text-zinc-400 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-zinc-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Comprehensive
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {" "}Platform Capabilities
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with enterprise-grade project management tools.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {platformCapabilities.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-slate-light/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">{category.category}</h3>
                <ul className="space-y-3">
                  {category.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-center text-zinc-300">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-purple/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {" "}Your Project Management?
              </span>
            </h2>
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
              Join thousands of teams already using AI to deliver projects faster, smarter, and with unprecedented success rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Get in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {" "}Touch
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Ready to discuss how our AI Project Management Platform can transform your business? Contact us today.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Phone</h3>
              <p className="text-zinc-400">+1 302 464 0950</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-2xl mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Email</h3>
              <p className="text-zinc-400">kleber@ziontechgroup.com</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple-dark rounded-2xl mb-6">
                <MapPinIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Address</h3>
              <p className="text-zinc-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIProjectManagementPlatform;
