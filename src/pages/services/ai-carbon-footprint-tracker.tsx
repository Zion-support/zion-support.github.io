import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  TrendingDown, 
  BarChart3, 
  Target, 
  CheckCircle, 
  Zap, 
  Globe, 
  Building2,
  Calculator,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Star,
  Users,
  Shield,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  Lock,
  Code,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  BarChart,
  Users2,
  Settings,
  Palette,
  Cpu,
  Network,
  Smartphone as Phone,
  HardDrive,
  Brain,
  Rocket,
  Target as TargetIcon,
  Handshake,
  FileText,
  HelpCircle,
  GraduationCap,
  Briefcase,
  Heart,
  Lock as LockIcon,
  Cloud as CloudIcon
} from 'lucide-react';

export default function AICarbonFootprintTracker() {
  const features = [
    {
      title: "Real-time Carbon Monitoring",
      description: "Track carbon emissions across all business operations in real-time with AI-powered sensors and data analysis",
      icon: Activity,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Predictive Analytics",
      description: "AI algorithms predict future emissions and suggest optimization strategies before they become problems",
      icon: Brain,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Automated Reporting",
      description: "Generate compliance reports automatically for regulatory bodies and stakeholders",
      icon: FileText,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Smart Recommendations",
      description: "AI-powered suggestions for reducing carbon footprint based on industry best practices",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const benefits = [
    "Reduce carbon emissions by up to 40%",
    "Achieve sustainability certifications faster",
    "Lower operational costs through efficiency",
    "Enhance brand reputation and customer trust",
    "Comply with environmental regulations",
    "Access to carbon credit markets"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses starting their sustainability journey",
      features: [
        "Up to 5 locations",
        "Basic carbon tracking",
        "Monthly reports",
        "Email support",
        "Mobile app access"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing companies with multiple facilities",
      features: [
        "Up to 25 locations",
        "Advanced AI analytics",
        "Real-time monitoring",
        "Custom dashboards",
        "Priority support",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations with complex sustainability needs",
      features: [
        "Unlimited locations",
        "Custom AI models",
        "White-label solutions",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              Sustainability Innovation
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Carbon Footprint
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Tracker
              </span>
            </h1>
            
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Transform your business sustainability with AI-powered carbon tracking, 
              predictive analytics, and automated compliance reporting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Sustainability Features
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Leverage cutting-edge AI technology to monitor, analyze, and optimize your carbon footprint
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Carbon Tracker?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Join hundreds of businesses already reducing their environmental impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-zion-slate-light">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Choose the plan that fits your sustainability goals and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-zion-blue-dark border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-dark hover:to-zion-purple-dark'
                    : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Sustainability?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Join the sustainability revolution and start tracking your carbon footprint with AI-powered insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}