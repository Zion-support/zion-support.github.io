
import { motion } from 'framer-motion';
import { 
  Workflow, Zap, 
  Users, Shield, 
  Target, CheckCircle, 
  ArrowRight, TrendingUp, 
  BarChart3, MessageCircle, 
  Phone, Mail, 
  MapPin, Star, 
  Award, Lightbulb, 
  Sparkles, Brain,
  Settings, Clock,
  Database, Link,
  Bot, Cpu,
  Layers, GitBranch,
  Play, Pause,
  RotateCcw;", "
} from 'lucide-react';

const AIWorkflowAutomation: React.FC = () => {
  const features = [

      color: 'from-blue-500 to-cyan-500' }, {
      icon: Bot","
      title: 'AI-Powered Automation', ""
      description: 'Intelligent bots that learn and adapt to your business processes automatically'","
      color: 'from-green-500 to-emerald-500' }, {

      color: 'from-yellow-500 to-orange-500' }, {
      icon: Shield","
      title: 'Enterprise Security', ""
      description: 'Bank-level security with encryption, audit logs, and compliance features'","
      color: 'from-red-500 to-pink-500' }, {

      color: 'from-indigo-500 to-blue-500' }
  ];

  const automationTypes = [

    'Trello'];

  return (""
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO ""
        title="AI Workflow Automation - Zion Tech Group"
        description="Revolutionary AI-powered workflow automation platform. Automate business processes, reduce manual work, and increase productivity with intelligent automation."
        keywords="workflow automation, business process automation, AI automation, workflow builder, process optimization, Zion Tech Group"
        ogType="website"
      /" >"

      {/* Hero Section */}""
      <section className="relative overflow-hidden py-20 lg: py-32">""
        <div className="container-responsive">""
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion .div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}""
              className="space-y-8"" >"
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium">""
                <Bot className="w-4 h-4" /" >"
                AI Workflow Automation
              </div>""
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                AI Workflow""
                <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Automation
                </span>
              </h1>""
              <p className="text-xl text-gray-300 leading-relaxed">
                Transform your business with intelligent automation. Create powerful workflows that work 24/7, reduce manual tasks, and boost productivity across your entire organization.
              </p>""
              <div className="flex flex-col sm: flex-row gap-4">""
                <button className="btn-futuristic bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">""
                  <Play className="w-5 h-5" /" >"
                  Start Automating
                </button>""
                <button className="btn-futuristic-outline">""
                  <Workflow className="w-5 h-5" /" >"
                  View Templates
                </button>
              </div>
            </motion.div>
            <motion .div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}""
              className="relative"" >"
              <div className="relative z-10">""
                <div className="w-full h-96 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-cyan-500/20 rounded-2xl border border-green-500/30 flex items-center justify-center">""
                  <div className="text-center">""
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">""
                      <Bot className="w-12 h-12 text-white" /" >"
                    </div>""
                    <h3 className="text-2xl font-bold text-white mb-2">AI Automation</h3>""
                    <p className="text-gray-300">Intelligent Workflows</p>
                  </div>
                </div>
              </div>""
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}""
      <section className="py-20 bg-slate-800/50">""
        <div className="container-responsive">
          <motion .div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}""
            className="text-center mb-16"" >"
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Powerful Automation Features
            </h2>""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered automation platform combines intelligent workflows with enterprise-grade features to transform your business operations.
            </p>
          </motion.div>""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion .div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}""
                className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:bg-slate-700/50"" >"
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}" >"
                  <feature .icon className="w-8 h-8 text-white" /" >"
                </div>""
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>""
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types Section */}""
      <section className="py-20">""
        <div className="container-responsive">
          <motion .div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}""
            className="text-center mb-16"" >"
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Automation Solutions
            </h2>""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From sales to finance, automate every aspect of your business with our specialized automation solutions.
            </p>
          </motion.div>""
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">
            {automationTypes.map((automation, index) => (
              <motion .div
                key={automation.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}""
                className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300"" >"
                <div className="flex items-start gap-4 mb-6">`
                  <div className={`w-16 h-16 bg-gradient-to-br ${automation.color} rounded-xl flex items-center justify-center flex-shrink-0`}" >"
                    <automation .icon className="w-8 h-8 text-white" /" >"
                  </div>
                  <div>""
                    <h3 className="text-2xl font-semibold text-white mb-2">{automation.title}</h3>""
                    <p className="text-gray-400 leading-relaxed mb-2">{automation.description}</p>""
                    <div className="text-2xl font-bold text-green-400">{automation.pricing}</div>
                  </div>
                </div>""
                <div className="space-y-3">""
                  <h4 className="text-lg font-semibold text-white">Key Features:</h4>""
                  <ul className="space-y-2">
                    {automation.benefits.map((benefit, idx) => (""
                      <li key={idx} className="flex items-center gap-3 text-gray-300">""
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /" >"
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}""
      <section className="py-20 bg-slate-800/50">""
        <div className="container-responsive">
          <motion .div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}""
            className="text-center mb-16"" >"
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Why Choose AI Automation?
            </h2>""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of intelligent automation that works around the clock to optimize your business processes.
            </p>
          </motion.div>""
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion .div
                key={benefit}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}""
                className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 text-center hover:border-green-500/50 transition-all duration-300 hover:bg-slate-600/50"" >"
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">""
                  <TrendingUp className="w-6 h-6 text-white" /" >"
                </div>""
                <p className="text-white font-medium text-sm leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}""
      <section className="py-20">""
        <div className="container-responsive">
          <motion .div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}""
            className="text-center mb-16"" >"
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms to create powerful automated workflows.
            </p>
          </motion.div>""
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion .div
                key={integration}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}""
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 text-center hover:border-green-500/50 transition-all duration-300 hover:bg-slate-700/50 group"" >"
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">""
                  <Link className="w-6 h-6 text-white" /" >"
                </div>""
                <p className="text-white font-medium text-sm leading-relaxed">{integration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}""
      <section className="py-20 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-cyan-500/10">""
        <div className="container-responsive text-center">
          <motion .div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}""
            className="max-w-4xl mx-auto"" >"
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>""
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using AI Workflow Automation to streamline operations and boost productivity.
            </p>""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""
              <button className="btn-futuristic bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">""
                <MessageCircle className="w-5 h-5" /" >"
                Start Free Trial
              </button>""
              <button className="btn-futuristic-outline">""
                <Phone className="w-5 h-5" /" >"
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}""
      <section className="py-20">""
        <div className="container-responsive">""
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion .div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}" >"
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Get Started Today
              </h2>""
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ready to transform your business with AI automation? Our team of automation experts is here to help you implement intelligent workflows that drive results.
              </p>""
              <div className="space-y-6">""
                <div className="flex items-center gap-4">""
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">""
                    <Phone className="w-6 h-6 text-white" /" >"
                  </div>
                  <div>""
                    <p className="text-white font-semibold">Phone</p>""
                    <p className="text-gray-300">+1 302 464 0950</p>
                  </div>
                </div>""
                <div className="flex items-center gap-4">""
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">""
                    <Mail className="w-6 h-6 text-white" /" >"
                  </div>
                  <div>""
                    <p className="text-white font-semibold">Email</p>""
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  </div>
                </div>""
                <div className="flex items-center gap-4">""
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">""
                    <MapPin className="w-6 h-6 text-white" /" >"
                  </div>
                  <div>""
                    <p className="text-white font-semibold">Address</p>""
                    <p className="text-gray-300">364 E Main St STE 1008<br /" >Middletown DE 19709</p>"
                  </div>
                </div>
              </div>
            </motion.div>
            <motion .div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}""
              className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50"" >"
              <h3 className="text-2xl font-semibold text-white mb-6">Request Automation Demo</h3>""
              <form className="space-y-6">""
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input ""
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  /" >"
                  <input ""
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  /" >"
                </div>
                <input ""
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                /" >"
                <input ""
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                /" >"
                <textarea ""
                  placeholder="Tell us about your automation needs..."
                  rows={4}""
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"" ></textarea>"
                <button ""
                  type="submit"
                  className="w-full btn-futuristic bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"" >"
                  <MessageCircle className="w-5 h-5" /" >"
                  Request Demo
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )};

export default AIWorkflowAutomation;"`"