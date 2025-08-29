import React from 'react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import { 
  Users, 
  Heart, 
  MessageCircle, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Zap, 
  Shield,
  CheckCircle,
  Clock,
  Star,
  Award,
  Gift,
  Headphones,
  Phone,
  Mail,
  Globe,
  Cpu,
  Brain,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Link,
  Unlink,
  Copy,
  Move,
  Trash2,
  Archive,
  Settings,
  RefreshCw,
  Play,
  Pause,
  Stop,
  FastForward,
  Rewind,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Signal,
  Activity,
  Pulse,
  Battery,
  Power,
  PowerOff,
  Sun,
  Moon,
  Star as StarIcon,
  Sparkles,
  Flame,
  Lightning,
  Thunder,
  Rain,
  Snow,
  Wind,
  Thermometer,
  Droplets,
  Umbrella,
  MapPin,
  Calendar,
  Clock as ClockIcon,
  DollarSign,
  CreditCard,
  Package,
  Truck,
  Plane,
  Ship,
  Train,
  Car,
  Bike,
  Bus,
  Taxi,
  Rocket,
  Satellite,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega
} from 'lucide-react';

const AICustomerSuccessPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Customer Insights",
      description: "Machine learning algorithms that predict customer behavior and identify churn risks",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageCircle,
      title: "Intelligent Communication",
      description: "Automated, personalized messaging that adapts to customer preferences and needs",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Proactive Success Management",
      description: "Identify and resolve issues before they impact customer satisfaction",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics Dashboard",
      description: "Comprehensive metrics and insights to track customer success and engagement",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Customer Journey Mapping",
      description: "Visualize and optimize every touchpoint in the customer experience",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Automated Support Escalation",
      description: "Smart routing and escalation based on customer priority and issue complexity",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small teams getting started with customer success automation",
      features: [
        "Up to 1,000 customers",
        "Basic AI insights",
        "Standard communication templates",
        "Email support",
        "Basic analytics",
        "5 team members",
        "Community support"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$899",
      period: "/month",
      description: "Advanced customer success platform for growing businesses",
      features: [
        "Up to 10,000 customers",
        "Advanced AI analytics",
        "Custom communication workflows",
        "Priority support",
        "Advanced reporting",
        "Unlimited team members",
        "API access",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "Comprehensive platform for large organizations with complex customer success needs",
      features: [
        "Unlimited customers",
        "Custom AI models",
        "Advanced automation",
        "Dedicated support team",
        "Custom development",
        "Multi-tenant support",
        "SLA guarantees",
        "On-premise option"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "25% Higher Retention",
      description: "Proactive customer success management increases customer lifetime value",
      metric: "25%"
    },
    {
      icon: TrendingUp,
      title: "40% Faster Resolution",
      description: "AI-powered insights help resolve customer issues before they escalate",
      metric: "40%"
    },
    {
      icon: Star,
      title: "4.8/5 Customer Rating",
      description: "Improved customer experience leads to higher satisfaction scores",
      metric: "4.8/5"
    },
    {
      icon: Zap,
      title: "3x Team Efficiency",
      description: "Automation and AI insights multiply your team's effectiveness",
      metric: "3x"
    }
  ];

  const useCases = [
    {
      industry: "SaaS & Technology",
      title: "Product Adoption & Onboarding",
      description: "Guide customers through product features and ensure successful implementation",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500"
    },
    {
      industry: "E-commerce",
      title: "Customer Loyalty & Retention",
      description: "Build lasting relationships and increase repeat purchase rates",
      icon: Package,
      color: "from-green-500 to-emerald-500"
    },
    {
      industry: "Financial Services",
      title: "Account Management & Support",
      description: "Provide personalized financial guidance and proactive account monitoring",
      icon: DollarSign,
      color: "from-purple-500 to-pink-500"
    },
    {
      industry: "Healthcare",
      title: "Patient Engagement & Care",
      description: "Improve patient outcomes through proactive communication and monitoring",
      icon: Heart,
      color: "from-orange-500 to-red-500"
    }
  ];

  const customerSuccessMetrics = [
    {
      metric: "Net Promoter Score (NPS)",
      description: "Measure customer loyalty and likelihood to recommend your product",
      icon: StarIcon,
      color: "from-yellow-500 to-orange-500"
    },
    {
      metric: "Customer Health Score",
      description: "AI-powered scoring system to identify at-risk customers",
      icon: Activity,
      color: "from-green-500 to-emerald-500"
    },
    {
      metric: "Time to Value (TTV)",
      description: "Track how quickly customers achieve their first success milestone",
      icon: ClockIcon,
      color: "from-blue-500 to-cyan-500"
    },
    {
      metric: "Customer Lifetime Value (CLV)",
      description: "Predict and optimize long-term customer value",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500"
    },
    {
      metric: "Churn Rate",
      description: "Monitor and reduce customer attrition through proactive engagement",
      icon: Users,
      color: "from-red-500 to-pink-500"
    },
    {
      metric: "Feature Adoption Rate",
      description: "Track which features drive the most customer success",
      icon: Target,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Customer Success Platform - Zion Tech Group"
        description="Transform customer success with AI-powered insights, automation, and proactive engagement. Increase retention, satisfaction, and customer lifetime value."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-8">
                <Heart className="w-4 h-4 mr-2" />
                AI-Powered Customer Success
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI Customer Success
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Platform</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Transform customer success with intelligent automation and AI-powered insights. 
                Proactively engage customers, prevent churn, and maximize lifetime value.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Customer Success Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to automate and optimize customer success operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`p-6 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-opacity-20 hover:bg-opacity-20 transition-all duration-300 h-full`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-300">
              See how AI Customer Success Platform transforms customer relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success Metrics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Key Customer Success Metrics
            </h2>
            <p className="text-xl text-gray-300">
              Track and optimize the metrics that matter most for customer success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerSuccessMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`p-6 rounded-xl bg-gradient-to-br ${metric.color} bg-opacity-10 border border-opacity-20 hover:bg-opacity-20 transition-all duration-300 h-full`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${metric.color} mb-4`}>
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{metric.metric}</h3>
                  <p className="text-gray-300">{metric.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Tailored customer success strategies for your industry's unique challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`p-6 rounded-xl bg-gradient-to-br ${useCase.color} bg-opacity-10 border border-opacity-20 hover:bg-opacity-20 transition-all duration-300 h-full`}>
                  <div className="flex items-start space-x-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${useCase.color}`}>
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-purple-300 mb-2">{useCase.industry}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                      <p className="text-gray-300">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your customer success needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50' 
                    : 'bg-slate-800/50 border border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Customer Success?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations already using AI Customer Success Platform to build stronger customer relationships
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerSuccessPlatform;