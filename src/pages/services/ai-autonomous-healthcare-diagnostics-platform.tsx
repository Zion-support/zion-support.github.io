import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Heart, 
  Shield, 
  Users, 
  Clock, 
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  MapPin,
  BarChart3,
  Cpu,
  Database,
  Cloud,
  Lock,
  Activity,
  Phone,
  Mail,
  Stethoscope,
  Microscope,
  Flask,
  TestTube,
  Beaker,
  Dna,
  Pill,
  Eye,
  Brain as BrainIcon,
  Activity as ActivityIcon,
  TrendingUp,
  Target,
  Zap,
  Globe,
  Building2,
  CreditCard,
  PiggyBank,
  ChartLine,
  Coins,
  Wallet,
  Calculator,
  AlertTriangle,
  CheckSquare,
  FileText,
  BookOpen,
  GraduationCap,
  Handshake,
  Rocket,
  Lightbulb,
  Network,
  Server,
  Monitor,
  Smartphone,
  Wifi,
  Satellite,
  Atom,
  Car,
  Plane,
  Ship,
  Train,
  Truck,
  Factory,
  Warehouse,
  Store,
  Bank,
  Building,
  Leaf,
  Gamepad2,
  MessageCircle,
  Settings,
  Cog,
  Palette,
  Menu,
  X,
  Video,
  Calendar,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserHeart,
  UserStar,
  UserCheckCircle
} from 'lucide-react';

const AIAutonomousHealthcareDiagnosticsPlatform = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Medical Imaging",
      description: "Advanced computer vision algorithms analyze X-rays, MRIs, CT scans, and ultrasounds with 95%+ accuracy rates."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Predictive Health Analytics",
      description: "Machine learning models predict disease progression, treatment outcomes, and patient risk factors in real-time."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Clinical Decision Support",
      description: "AI-powered diagnostic suggestions, treatment recommendations, and drug interaction warnings for healthcare providers."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Real-time Patient Monitoring",
      description: "24/7 vital sign monitoring, early warning systems, and automated alerts for critical health changes."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Personalized Medicine",
      description: "AI-driven treatment plans based on genetic profiles, medical history, and individual patient characteristics."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Population Health Analytics",
      description: "Comprehensive reporting on disease trends, outbreak detection, and public health insights."
    }
  ];

  const pricingPlans = [
    {
      name: "Clinic",
      price: "$399",
      period: "/month",
      description: "Perfect for small medical practices",
      features: [
        "Up to 100 patients/month",
        "Basic AI diagnostics",
        "Medical imaging analysis",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Hospital",
      price: "$1,299",
      period: "/month",
      description: "Ideal for medium-sized hospitals",
      features: [
        "Up to 1,000 patients/month",
        "Advanced AI algorithms",
        "Predictive analytics",
        "Clinical decision support",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large healthcare systems",
      features: [
        "Unlimited patients",
        "Full AI suite",
        "Custom AI models",
        "Dedicated support",
        "White-label options",
        "Advanced security"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Improved Accuracy",
      description: "AI diagnostics reduce diagnostic errors by 30-40% and improve detection rates for rare conditions."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Faster Diagnosis",
      description: "Reduce diagnosis time by 50-70% with instant AI analysis and automated reporting."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Better Patient Outcomes",
      description: "Early detection and personalized treatment plans lead to 25-35% better patient outcomes."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Cost Reduction",
      description: "Reduce healthcare costs by 20-30% through improved efficiency and reduced misdiagnosis."
    }
  ];

  const diagnosticCapabilities = [
    {
      title: "Radiology & Imaging",
      description: "AI analysis of X-rays, CT scans, MRIs, and ultrasounds with instant results and detailed reports.",
      icon: <Eye className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Pathology & Lab Tests",
      description: "Automated analysis of blood tests, tissue samples, and cellular structures for accurate diagnosis.",
      icon: <Microscope className="w-8 h-8 text-green-500" />
    },
    {
      title: "Cardiology",
      description: "ECG analysis, heart rhythm monitoring, and cardiovascular disease prediction with AI algorithms.",
      icon: <Heart className="w-8 h-8 text-red-500" />
    },
    {
      title: "Neurology",
      description: "Brain imaging analysis, seizure detection, and neurological disorder diagnosis assistance.",
      icon: <BrainIcon className="w-8 h-8 text-purple-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Healthcare
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous
              <span className="text-zion-cyan"> Healthcare Diagnostics</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Revolutionize healthcare delivery with autonomous AI that analyzes medical images, predicts outcomes, 
              and provides accurate diagnostics in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI Medical Intelligence
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our platform combines cutting-edge artificial intelligence with medical expertise to deliver unprecedented diagnostic accuracy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-zion-cyan/50 transition-colors"
              >
                <div className="text-zion-cyan mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Diagnostic Capabilities
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our AI platform covers all major medical specialties with specialized diagnostic algorithms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {diagnosticCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-zion-cyan/50 transition-colors"
              >
                <div className="flex items-center mb-4">{capability.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-zion-slate-light">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Healthcare Diagnostics?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Experience unprecedented accuracy and efficiency in medical diagnostics with our AI-powered platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Choose the plan that fits your healthcare facility. All plans include our core AI features and 24/7 support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 p-8 rounded-xl border ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-zion-cyan text-white hover:bg-zion-cyan/90'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of healthcare providers already using our AI platform to improve diagnostic accuracy and patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-zion-slate-light mb-4">
            Questions about our AI Autonomous Healthcare Diagnostics Platform?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-zion-cyan">
              <Phone className="w-4 h-4 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center text-zion-cyan">
              <Mail className="w-4 h-4 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center text-zion-cyan">
              <MapPin className="w-4 h-4 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousHealthcareDiagnosticsPlatform;