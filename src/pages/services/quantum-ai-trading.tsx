import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  TrendingUp, 
  Zap, 
  Shield, 
  BarChart3, 
  Globe, 
  Rocket, 
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  DollarSign,
  Target,
  Cpu,
  Database,
  Network,
  Lock,
  Eye,
  Gauge,
  PieChart,
  LineChart,
  Activity,
  TrendingDown,
  AlertTriangle,
  Info,
  Play,
  Download,
  BookOpen,
  Code,
  Settings,
  Bell,
  Calendar,
  FileText,
  Award,
  Trophy,
  Lightbulb,
  Sparkles,
  Atom,
  Quantum,
  Circuit,
  Microchip,
  Building
} from 'lucide-react';

export default function QuantumAITrading() {
  const features = [
    {
      icon: Brain,
      title: 'Quantum AI Algorithms',
      description: 'Advanced quantum computing algorithms combined with AI for superior trading performance',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Market Analysis',
      description: 'Instant market data processing with quantum speed for optimal trading decisions',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Advanced Risk Management',
      description: 'AI-powered risk assessment with quantum precision for portfolio protection',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Quantum-enhanced forecasting models for market trend prediction',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Global Market Coverage',
      description: 'Comprehensive coverage of all major financial markets worldwide',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Ultra-Fast Execution',
      description: 'Quantum-speed trade execution with minimal latency',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const benefits = [
    'Quantum computing power for complex calculations',
    'AI-driven market analysis and predictions',
    'Real-time risk assessment and management',
    'Ultra-fast trade execution',
    'Advanced portfolio optimization',
    'Comprehensive market coverage',
    'Professional-grade security protocols',
    '24/7 automated trading capabilities'
  ];

  const useCases = [
    {
      title: 'Institutional Trading',
      description: 'High-frequency trading for hedge funds and investment banks',
      icon: Building
    },
    {
      title: 'Portfolio Management',
      description: 'AI-optimized portfolio allocation and rebalancing',
      icon: PieChart
    },
    {
      title: 'Risk Management',
      description: 'Advanced risk assessment and mitigation strategies',
      icon: Shield
    },
    {
      title: 'Market Analysis',
      description: 'Deep market insights and trend predictions',
      icon: BarChart3
    }
  ];

  const stats = [
    { label: 'Trading Speed', value: '99.9%', description: 'Faster than traditional systems' },
    { label: 'Accuracy', value: '95%+', description: 'Prediction accuracy rate' },
    { label: 'Markets', value: '150+', description: 'Global markets covered' },
    { label: 'Uptime', value: '99.99%', description: 'System reliability' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container-responsive relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6">
              <Atom className="w-4 h-4" />
              Quantum AI Technology
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Quantum AI
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Trading Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionize your trading with the world's most advanced quantum AI platform. 
              Experience lightning-fast execution, AI-powered predictions, and quantum computing precision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Trading Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our quantum AI platform combines cutting-edge quantum computing with advanced artificial intelligence 
              to deliver unprecedented trading performance and accuracy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-700/50"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} w-fit mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Quantum AI Trading?
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Our platform delivers unmatched performance through the combination of quantum computing power 
                and artificial intelligence, providing you with the competitive edge you need in today's markets.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                      <div className="text-xs text-gray-500">{stat.description}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Perfect For Every Trading Need
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From individual traders to institutional investors, our platform adapts to your specific requirements 
              and trading strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 w-fit mx-auto mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Future of Trading?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the elite group of traders who have already revolutionized their trading with quantum AI technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Start Trading Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}