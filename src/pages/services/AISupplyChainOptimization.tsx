import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Network, 
  Brain, 
  Shield, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  Target,
  BarChart3,
  Settings,
  Users,
  MessageCircle,
  DollarSign,
  FileText,
  Heart,
  Cloud,
  Cpu,
  Lock,
  Atom,
  Leaf,
  Satellite,
  ShoppingCart,
  BookOpen,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  Globe,
  Truck,
  Package,
  Route,
  MapPin,
  Clock,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  Database,
  Server,
  Smartphone,
  Monitor,
  Laptop,
  Tablet,
  Smartphone as PhoneIcon,
  Mail,
  Phone
} from 'lucide-react';

export default function AISupplyChainOptimization() {
  const features = [
    {
      title: 'AI-Powered Demand Forecasting',
      description: 'Predict customer demand with 95% accuracy using advanced machine learning algorithms.',
      icon: Brain,
      benefits: ['Reduce stockouts by 60%', 'Optimize inventory levels', 'Improve cash flow', 'Enhance customer satisfaction']
    },
    {
      title: 'Real-Time Supply Chain Visibility',
      description: 'Track every component from supplier to customer with end-to-end transparency.',
      icon: Network,
      benefits: ['Real-time tracking', 'Proactive issue detection', 'Improved collaboration', 'Risk mitigation']
    },
    {
      title: 'Intelligent Route Optimization',
      description: 'Optimize delivery routes using AI to reduce costs and improve delivery times.',
      icon: Route,
      benefits: ['Reduce fuel costs by 25%', 'Faster delivery times', 'Lower carbon footprint', 'Better resource utilization']
    },
    {
      title: 'Predictive Maintenance',
      description: 'Prevent equipment failures before they happen with AI-driven predictive analytics.',
      icon: Activity,
      benefits: ['Reduce downtime by 40%', 'Lower maintenance costs', 'Extend equipment life', 'Improve safety']
    },
    {
      title: 'Supplier Performance Analytics',
      description: 'Monitor and optimize supplier relationships with comprehensive performance metrics.',
      icon: BarChart3,
      benefits: ['Better supplier selection', 'Improved quality control', 'Cost optimization', 'Risk reduction']
    },
    {
      title: 'Automated Inventory Management',
      description: 'Automatically adjust inventory levels based on demand patterns and lead times.',
      icon: Package,
      benefits: ['Optimal stock levels', 'Reduced carrying costs', 'Improved turnover', 'Better space utilization']
    }
  ];

  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs by up to 30% through intelligent optimization.',
      icon: DollarSign,
      metric: '30%',
      metricLabel: 'Cost Savings'
    },
    {
      title: 'Efficiency Improvement',
      description: 'Increase operational efficiency by 40% with AI-powered automation.',
      icon: TrendingUp,
      metric: '40%',
      metricLabel: 'Efficiency Gain'
    },
    {
      title: 'Customer Satisfaction',
      description: 'Improve customer satisfaction scores by 50% with better delivery performance.',
      icon: Star,
      metric: '50%',
      metricLabel: 'Satisfaction Boost'
    },
    {
      title: 'Risk Mitigation',
      description: 'Reduce supply chain risks by 70% with predictive analytics.',
      icon: Shield,
      metric: '70%',
      metricLabel: 'Risk Reduction'
    }
  ];

  const industries = [
    'Manufacturing',
    'Retail',
    'Healthcare',
    'Automotive',
    'Food & Beverage',
    'Pharmaceuticals',
    'Electronics',
    'Logistics'
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Analyze current supply chain operations and identify optimization opportunities.',
      icon: Target
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop comprehensive AI implementation roadmap tailored to your business needs.',
      icon: Brain
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy AI solutions with expert guidance and continuous monitoring.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously improve and scale AI capabilities for maximum impact.',
      icon: TrendingUp
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709"
  };

  return (
    <>
      <SEO
        title="AI Supply Chain Optimization | Zion Tech Group"
        description="Transform your supply chain with AI-powered optimization solutions. Reduce costs, improve efficiency, and enhance customer satisfaction."
        keywords="AI supply chain, supply chain optimization, AI logistics, predictive analytics, inventory management, Zion Tech Group"
        canonical="https://ziontechgroup.com/services/ai-supply-chain-optimization"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI Supply Chain Optimization
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Transform your supply chain operations with cutting-edge AI solutions that deliver unprecedented 
                efficiency, cost savings, and customer satisfaction. Our intelligent optimization platform 
                revolutionizes how you manage inventory, forecast demand, and coordinate logistics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  Start Optimization
                </a>
                <a 
                  href="/solutions" 
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 font-semibold"
                >
                  View Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI-Powered Features
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our comprehensive AI supply chain optimization platform includes advanced features designed 
                to transform every aspect of your operations.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-cyan-400 font-semibold mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-slate-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
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

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Measurable Results
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI supply chain optimization delivers quantifiable improvements that directly impact 
                your bottom line and operational excellence.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">{benefit.description}</p>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">{benefit.metric}</div>
                  <div className="text-slate-400 text-sm">{benefit.metricLabel}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI supply chain optimization solutions are tailored for diverse industries, 
                each with unique challenges and requirements.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div 
                  key={index}
                  className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6 text-center hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-cyan-400 font-semibold">{industry}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Implementation Process
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our proven methodology ensures successful AI implementation and maximum ROI from your 
                supply chain optimization investment.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Let our AI experts transform your supply chain operations with intelligent optimization 
                solutions that deliver measurable results. Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  Schedule Consultation
                </a>
                <a 
                  href="/solutions" 
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 font-semibold"
                >
                  Explore Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}