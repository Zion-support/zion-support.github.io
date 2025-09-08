import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Building, Brain, Zap, Shield, Database, Network, ArrowRight, Star, Rocket, Target, Users, BarChart3, Clock, Cpu } from 'lucide-react';
    <>
      <SEOHead
        title="Autonomous Business Operations Platform | Zion Tech Group"
        description="Revolutionary AI-powered platform that autonomously manages and optimizes business operations, processes, and workflows for maximum efficiency."
        keywords="autonomous business operations, AI business automation, business process automation, autonomous systems, AI operations management"
        canonical="https://ziontechgroup.com/autonomous-business-operations-platform"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                  <Building className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Autonomous Business Operations Platform
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our revolutionary AI-powered platform that autonomously 
                manages, optimizes, and scales your operations. Experience unprecedented efficiency 
                and growth through intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Autonomous Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our platform leverages advanced AI to create truly autonomous business operations 
                that learn, adapt, and optimize continuously.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-8 rounded-xl border border-blue-500/20">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg w-fit mb-6">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Intelligent Decision Making</h3>
                <p className="text-gray-300">
                  AI-powered decision engines that analyze data, predict outcomes, and make optimal 
                  business decisions autonomously.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-8 rounded-xl border border-green-500/20">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg w-fit mb-6">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Process Automation</h3>
                <p className="text-gray-300">
                  End-to-end automation of complex business processes with intelligent workflow 
                  optimization and error handling.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-xl border border-purple-500/20">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-fit mb-6">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Autonomous Security</h3>
                <p className="text-gray-300">
                  Self-monitoring security systems that detect threats, respond to incidents, and 
                  maintain compliance automatically.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-8 rounded-xl border border-indigo-500/20">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg w-fit mb-6">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Data Intelligence</h3>
                <p className="text-gray-300">
                  Advanced analytics and insights that drive autonomous decision-making and 
                  continuous business optimization.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 p-8 rounded-xl border border-yellow-500/20">
                <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg w-fit mb-6">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Scalable Infrastructure</h3>
                <p className="text-gray-300">
                  Cloud-native architecture that automatically scales resources based on demand 
                  and business requirements.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-900/50 to-pink-900/50 p-8 rounded-xl border border-red-500/20">
                <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg w-fit mb-6">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">24/7 Operations</h3>
                <p className="text-gray-300">
                  Continuous autonomous operation with self-healing capabilities and proactive 
                  maintenance scheduling.
                </p>
              </div>
            </div>
      {/* Features Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive tools for autonomous business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
        {/* Business Functions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Autonomous Business Functions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Every aspect of your business operations can be managed autonomously with 
                intelligent AI systems.
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-8 rounded-xl border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Continuous Optimization</h3>
              <p className="text-gray-300">
                AI algorithms constantly learn and improve, automatically adjusting 
                strategies for maximum efficiency and profitability.
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-8 rounded-xl border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-teal-500/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Cost Reduction</h3>
              <p className="text-gray-300">
                Eliminate manual processes and reduce operational costs by up to 70% 
                while improving accuracy and consistency.
              </p>
            </div>
            {businessAreas.map((area, index) => (
            {modules.map((module, index) => (
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-xl p-8 border border-blue-500/20"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{module.title}</h3>
                <p className="text-gray-300 text-lg mb-6">{module.description}</p>
                <ul className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transformative Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience unprecedented growth and efficiency with autonomous business operations.
              </p>
            </div>
          </div>
        </div>
      </div>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the autonomous business revolution and unlock unprecedented efficiency, 
              growth, and competitive advantage.
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Autonomous Journey
                <Rocket className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Schedule a Demo
              </Link>
