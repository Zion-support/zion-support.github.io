import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain, 
  BarChart3, 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  Award,
  Target,
  PieChart,
  Activity,
  UserCheck,
  Heart,
  DollarSign,
  Calendar,
  Lock,
  Database,
  Smartphone,
  Globe2,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Shield as ShieldIcon,
  Users as UsersIcon,
  TrendingUp as TrendingUpIcon,
  BarChart3 as BarChart3Icon,
  MessageSquare as MessageSquareIcon,
  Clock as ClockIcon,
  CheckCircle as CheckCircleIcon,
  Star as StarIcon,
  ArrowRight as ArrowRightIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Globe as GlobeIcon,
  Award as AwardIcon,
  Target as TargetIcon,
  PieChart as PieChartIcon,
  Activity as ActivityIcon,
  UserCheck as UserCheckIcon,
  Heart as HeartIcon,
  DollarSign as DollarSignIcon,
  Calendar as CalendarIcon,
  Lock as LockIcon,
  Database as DatabaseIcon,
  Smartphone as SmartphoneIcon,
  Globe2 as Globe2Icon
} from 'lucide-react';

export default function AICustomerSuccessPlatform() {
  const features = [
    {
      icon: Brain,
      title: "Predictive Churn Analysis",
      description: "AI algorithms predict customer churn risk with 95% accuracy, enabling proactive retention strategies."
    },
    {
      icon: Users,
      title: "Automated Onboarding Workflows",
      description: "Streamlined customer onboarding with personalized touchpoints and automated progress tracking."
    },
    {
      icon: MessageSquare,
      title: "Personalized Customer Journeys",
      description: "Create unique customer experiences based on behavior patterns and preferences."
    },
    {
      icon: Activity,
      title: "Real-time Health Scoring",
      description: "Continuous monitoring of customer health with instant alerts and recommendations."
    },
    {
      icon: Clock,
      title: "Automated Check-ins",
      description: "Intelligent scheduling and automated follow-ups to maintain customer engagement."
    },
    {
      icon: BarChart3,
      title: "Success Metric Tracking",
      description: "Comprehensive dashboard tracking key success metrics and ROI indicators."
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Reduce Churn by 40%",
      description: "Proactive identification and resolution of at-risk customers."
    },
    {
      icon: Heart,
      title: "Increase Customer Lifetime Value by 60%",
      description: "Optimized engagement strategies drive long-term customer value."
    },
    {
      icon: Zap,
      title: "Automate 80% of Customer Touchpoints",
      description: "Eliminate manual tasks and focus on high-value customer interactions."
    },
    {
      icon: Star,
      title: "Improve Customer Satisfaction Scores",
      description: "Data-driven insights lead to better customer experiences."
    },
    {
      icon: Users,
      title: "Scale Customer Success Operations",
      description: "Handle more customers without proportional increase in team size."
    }
  ];

  const useCases = [
    {
      title: "SaaS Customer Onboarding",
      description: "Streamline the onboarding process for new SaaS customers with automated workflows and personalized guidance."
    },
    {
      title: "Enterprise Customer Management",
      description: "Manage complex enterprise relationships with intelligent insights and automated follow-ups."
    },
    {
      title: "Subscription Business Optimization",
      description: "Optimize subscription renewals and expansion opportunities through predictive analytics."
    },
    {
      title: "Customer Health Monitoring",
      description: "Continuous monitoring of customer health with proactive intervention strategies."
    },
    {
      title: "Success Metric Tracking",
      description: "Track and optimize key success metrics to improve overall customer success performance."
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$1,999",
      period: "/month",
      description: "Perfect for growing businesses",
      features: [
        "Up to 1,000 customers",
        "Basic churn prediction",
        "Standard onboarding workflows",
        "Email support",
        "Core analytics dashboard"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$3,999",
      period: "/month",
      description: "Ideal for established companies",
      features: [
        "Up to 10,000 customers",
        "Advanced AI algorithms",
        "Custom onboarding workflows",
        "Priority support",
        "Advanced analytics & reporting",
        "API access",
        "Multi-language support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$5,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited customers",
        "Custom AI models",
        "White-label solutions",
        "Dedicated success manager",
        "Custom integrations",
        "Advanced security features",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const technicalSpecs = {
    technology: ["Python", "Scikit-learn", "React", "FastAPI", "MongoDB"],
    integrations: ["Salesforce", "HubSpot", "Intercom", "Zendesk", "Slack"],
    apiEndpoints: 200,
    uptime: "99.95%",
    security: ["SOC 2", "GDPR", "Data encryption", "Role-based access"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="AI Customer Success Platform - Zion Tech Group"
        description="Intelligent customer success platform that predicts churn, automates onboarding, and personalizes customer experiences using advanced AI algorithms."
        canonical="/services/ai-customer-success-platform"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Customer Success
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Customer Success Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Intelligent customer success platform that predicts churn, automates onboarding, and personalizes customer experiences using advanced AI algorithms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#pricing" 
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Get Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-300">Churn Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-gray-300">LTV Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">80%</div>
              <div className="text-gray-300">Automation Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Prediction Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300">Everything you need to transform your customer success operations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Transform Your Customer Success</h2>
            <p className="text-xl text-gray-300">See measurable results with our AI-powered platform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perfect For</h2>
            <p className="text-xl text-gray-300">Ideal solutions for various business scenarios</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-400">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300">Choose the plan that fits your business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur border rounded-xl p-8 ${
                  tier.popular 
                    ? 'border-purple-500/50 bg-gradient-to-b from-purple-500/10 to-transparent' 
                    : 'border-slate-700/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    {tier.price}<span className="text-lg text-gray-400">{tier.period}</span>
                  </div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white'
                    : 'border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                }`}>
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-300">Built with enterprise-grade technology</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur border border-cyan-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Technology Stack</h3>
              <div className="space-y-2">
                {technicalSpecs.technology.map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-green-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Integrations</h3>
              <div className="space-y-2">
                {technicalSpecs.integrations.map((integration, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{integration}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Performance & Security</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">{technicalSpecs.apiEndpoints} API Endpoints</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">{technicalSpecs.uptime} Uptime</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">SOC 2 Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Customer Success?</h2>
            <p className="text-xl text-gray-300">Get in touch with our team to learn more</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-purple-400 mr-3" />
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-purple-400 mr-3" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-purple-400 mr-3" />
                  <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Market Price:</span>
                  <span className="text-white font-semibold">$1,999 - $5,999/month</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">ROI:</span>
                  <span className="text-white font-semibold">300-500%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Delivery:</span>
                  <span className="text-white font-semibold">8-10 weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Support:</span>
                  <span className="text-white font-semibold">Enterprise</span>
                </div>
              </div>
              <div className="mt-8">
                <a 
                  href="/request-quote" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  Request Custom Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}