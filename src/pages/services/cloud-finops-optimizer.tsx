import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Cloud, 
  Zap, 
  Shield, 
  Brain, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Rocket,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  Calculator,
  PieChart,
  Target,
  AlertTriangle
} from 'lucide-react';

export default function CloudFinOpsOptimizer() {
  
  
  
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-zion-purple/20 text-zion-cyan px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Cloud className="w-4 h-4"  />
              <span>Cloud Financial Operations</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud FinOps Optimizer
            </h1>
            
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Master cloud cost management with intelligent FinOps automation, real-time monitoring, 
              and AI-driven optimization strategies that maximize your cloud investment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="inline ml-2 w-5 h-5"  />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive FinOps Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Everything you need to optimize cloud costs and maximize financial efficiency
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-dark/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Cloud Economics
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Experience significant cost savings and improved financial control
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0"  />
                  <span className="text-zion-slate-light text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0"  />
                  <span className="text-zion-slate-light text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Optimization Strategies Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Intelligent Optimization Strategies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              AI-powered strategies that automatically optimize your cloud infrastructure
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {optimizationStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white"  />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{strategy.title}</h3>
                    <p className="text-zion-slate-light">{strategy.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-blue-dark/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Perfect For Your Organization
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Whether you're a startup or enterprise, our FinOps solution scales with your needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white"  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-zion-slate-light text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Cloud Costs?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join organizations already saving millions with intelligent FinOps automation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-zion-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300"
              >
                Start Optimizing Today
                <Rocket className="inline ml-2 w-5 h-5"  />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-zion-purple transition-all duration-300"
              >
                Contact Sales
                <MessageCircle className="inline ml-2 w-5 h-5"  />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )}