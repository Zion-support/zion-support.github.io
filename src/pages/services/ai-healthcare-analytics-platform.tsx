import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  TrendingUp, 
  BarChart3, 
  Users, 
  DollarSign, 
  Target, 
  Clock, 
  Zap, 
  ArrowRight,
  Star,
  CheckCircle,
  Shield,
  Brain,
  Search,
  Filter,
  FileCheck,
  Clipboard,
  PenTool,
  Rocket,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckSquare,
  AlertTriangle,
  BookOpen,
  Code,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  Cpu,
  Network,
  ShieldCheck,
  Eye,
  Globe,
  Award,
  Heart,
  Stethoscope,
  Pill,
  Microscope,
  TestTube,
  UserCheck,
  Lock
} from 'lucide-react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function AIHealthcareAnalyticsPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Patient Analytics",
      description: "Advanced machine learning algorithms analyze patient data for early disease detection and personalized treatment plans",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Continuous patient monitoring with AI-driven alerts for critical health indicators and predictive health outcomes",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast patient outcomes, readmission risks, and resource utilization using historical data and AI predictions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "HIPAA-compliant platform with end-to-end encryption and secure data handling for patient privacy",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Care Team Collaboration",
      description: "Seamless communication between doctors, nurses, and specialists with AI-powered insights and recommendations",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Target,
      title: "Outcome Optimization",
      description: "Data-driven treatment optimization, resource allocation, and quality improvement initiatives",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Time Savings",
      description: "Reduce diagnosis time by 60%",
      metric: "60%"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Lower healthcare costs by 30%",
      metric: "30%"
    },
    {
      icon: Target,
      title: "Accuracy",
      description: "95.7% accuracy in predictions",
      metric: "95.7%"
    },
    {
      icon: TrendingUp,
      title: "Patient Outcomes",
      description: "Improve outcomes by 40%",
      metric: "40%"
    }
  ];

  const pricing = [
    {
      name: "Clinic",
      price: 4999,
      period: "one-time setup",
      features: [
        "Up to 50 patients/month",
        "Basic analytics dashboard",
        "Patient monitoring",
        "Email support",
        "Standard reports",
        "Mobile app access"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Hospital",
      price: 14999,
      period: "one-time setup",
      features: [
        "Everything in Clinic",
        "Up to 500 patients/month",
        "Advanced AI analytics",
        "Predictive modeling",
        "Priority support",
        "API access",
        "Custom integrations"
      ],
      popular: true,
      cta: "Most Popular"
    },
    {
      name: "Enterprise",
      price: 29999,
      period: "one-time setup",
      features: [
        "Everything in Hospital",
        "Unlimited patients",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Advanced integrations",
        "Training & onboarding"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const integrations = [
    { name: "Epic", icon: Database, category: "EHR System" },
    { name: "Cerner", icon: Server, category: "Health IT" },
    { name: "Allscripts", icon: Monitor, category: "Practice Management" },
    { name: "Meditech", icon: Cloud, category: "Hospital Systems" },
    { name: "Athenahealth", icon: Network, category: "Cloud EHR" },
    { name: "Practice Fusion", icon: Globe, category: "EHR Platform" }
  ];

  const useCases = [
    {
      title: "Early Disease Detection",
      description: "AI algorithms identify patterns in patient data to detect diseases at early stages for better treatment outcomes",
      icon: Microscope,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast patient readmissions, complications, and resource needs to improve care planning and efficiency",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Personalized Medicine",
      description: "Tailor treatment plans based on individual patient data, genetics, and response patterns",
      icon: UserCheck,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Population Health",
      description: "Analyze population health trends, identify risk factors, and develop preventive care strategies",
      icon: Users,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Healthcare Analytics Platform - Zion Tech Group"
        description="Advanced AI-powered healthcare analytics platform that provides intelligent patient monitoring, predictive analytics, and personalized treatment recommendations. Transform healthcare delivery with data-driven insights."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-8"
            >
              <Activity className="w-4 h-4 mr-2" />
              AI-Powered Healthcare Technology
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              AI Healthcare
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Analytics Platform
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Advanced AI-powered healthcare analytics platform that provides intelligent patient monitoring, 
              predictive analytics, and personalized treatment recommendations. Transform healthcare delivery with data-driven insights.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-300 hover:bg-blue-500/20 font-semibold rounded-lg transition-all duration-200"
              >
                Request Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Healthcare Delivery
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leverage the power of AI to improve patient outcomes and operational efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to revolutionize healthcare analytics and patient care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-200"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how AI can transform different aspects of healthcare delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-slate-800/50 rounded-xl border border-slate-700/50"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-lg flex items-center justify-center mb-6`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-400 text-lg">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that best fits your healthcare organization's needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-xl border ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-blue-500/50 shadow-2xl shadow-blue-500/25' 
                    : 'bg-slate-800/50 border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="inline-flex items-center px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full mb-4">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">${plan.price.toLocaleString()}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.name === "Enterprise" ? "/contact" : "/request-quote"}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transform hover:scale-105'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Works with your existing healthcare systems and EHR platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <integration.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-sm font-medium text-white mb-1">{integration.name}</h4>
                <p className="text-xs text-gray-400">{integration.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Healthcare Delivery?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            Join leading healthcare organizations that are already using AI to improve patient outcomes and operational efficiency.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 border border-white/30 text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-200"
            >
              Request Custom Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to revolutionize healthcare delivery with AI? Our team is here to help you get started.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <a href="tel:+13024640950" className="text-white font-medium hover:text-blue-400 transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-white font-medium hover:text-green-400 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Address</p>
                    <p className="text-white font-medium">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Accuracy Rate</span>
                  <span className="text-white font-semibold">95.7%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Setup Time</span>
                  <span className="text-white font-semibold">4-6 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">ROI Timeline</span>
                  <span className="text-white font-semibold">6 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Support</span>
                  <span className="text-white font-semibold">24/7 Available</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Market Price</span>
                  <span className="text-white font-semibold">$5,000-30,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}