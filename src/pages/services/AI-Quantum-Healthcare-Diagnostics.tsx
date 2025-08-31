import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Heart, 
  Atom, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  CheckCircle, 
  TrendingUp, 
  Award, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink,
  ArrowRight,
  Lightbulb,
  Eye,
  Microscope,
  Activity,
  Pulse,
  Stethoscope,
  Pill,
  Syringe,
  Thermometer,
  X,
  Scan,
  Database,
  Lock,
  Globe,
  Smartphone,
  Tablet,
  Monitor,
  Server,
  Cloud,
  Network,
  Cpu,
  Database as DatabaseIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Atom as AtomIcon,
  Heart as HeartIcon
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIQuantumHealthcareDiagnostics() {
  const features = [
    {
      title: "Quantum-Enhanced AI Diagnostics",
      description: "Leveraging quantum computing to process complex medical data at unprecedented speeds for accurate diagnoses",
      icon: Atom,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-time Health Monitoring",
      description: "Continuous monitoring of vital signs and health metrics with AI-powered anomaly detection",
      icon: Activity,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Predictive Disease Prevention",
      description: "AI algorithms predict potential health issues before they become critical, enabling proactive healthcare",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Modal Data Analysis",
      description: "Integrates data from various sources including medical imaging, lab results, and patient history",
      icon: Database,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Secure Patient Data Management",
      description: "HIPAA-compliant blockchain-based system ensuring patient privacy and data security",
      icon: Shield,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Telemedicine Integration",
      description: "Seamless integration with telemedicine platforms for remote patient consultations",
      icon: Globe,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Healthcare Professional",
      price: "$299",
      period: "/month",
      description: "Perfect for individual healthcare practitioners",
      features: [
        "Up to 100 patient scans/month",
        "Basic AI diagnostic tools",
        "Patient data management",
        "Email support",
        "Mobile app access",
        "HIPAA compliance"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Medical Practice",
      price: "$799",
      period: "/month",
      description: "Ideal for small to medium medical practices",
      features: [
        "Up to 1000 patient scans/month",
        "Advanced AI diagnostics",
        "Multi-user access",
        "Priority support",
        "API integration",
        "Custom workflows",
        "Analytics dashboard"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Hospital Network",
      price: "$2,499",
      period: "/month",
      description: "For large healthcare networks and hospitals",
      features: [
        "Unlimited patient scans",
        "Custom AI models",
        "White-label solution",
        "Dedicated support team",
        "Advanced security",
        "Custom integrations",
        "Training & certification"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      title: "95% Diagnostic Accuracy",
      description: "Quantum AI achieves unprecedented accuracy in medical diagnostics",
      icon: Award,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "60% Faster Diagnosis",
      description: "Reduce diagnosis time from days to hours with AI-powered analysis",
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "40% Cost Reduction",
      description: "Lower healthcare costs through early detection and prevention",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "24/7 Patient Monitoring",
      description: "Continuous health monitoring without human intervention",
      icon: Eye,
      color: "from-orange-500 to-red-500"
    }
  ];

  const useCases = [
    {
      title: "Early Cancer Detection",
      description: "AI algorithms detect early signs of cancer from medical imaging with 95% accuracy",
      icon: Microscope,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Cardiovascular Health",
      description: "Real-time monitoring of heart health with predictive analytics for heart disease prevention",
      icon: Heart,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Neurological Disorders",
      description: "Advanced brain imaging analysis for early detection of neurological conditions",
      icon: Brain,
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Infectious Disease Tracking",
      description: "AI-powered tracking and prediction of infectious disease outbreaks",
      icon: Virus,
      color: "from-green-500 to-teal-500"
    }
  ];

  const technologies = [
    {
      name: "Quantum Computing",
      description: "IBM Q, Google Quantum, and custom quantum algorithms",
      icon: Atom,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Machine Learning",
      description: "Deep learning, neural networks, and predictive analytics",
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Blockchain Security",
      description: "HIPAA-compliant patient data management",
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "IoT Integration",
      description: "Connected medical devices and wearables",
      icon: Network,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO
        title="AI Quantum Healthcare Diagnostics - Zion Tech Group"
        description="Revolutionary AI-powered healthcare diagnostics leveraging quantum computing for unprecedented accuracy and speed in medical diagnosis and patient care."
        keywords="AI healthcare, quantum computing, medical diagnostics, telemedicine, patient monitoring, predictive healthcare"
        canonicalUrl="https://ziontechgroup.com/services/ai-quantum-healthcare-diagnostics"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Quantum AI Healthcare
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Quantum Healthcare
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Diagnostics Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionizing healthcare with quantum-enhanced AI diagnostics. Achieve unprecedented accuracy, 
              faster diagnosis, and proactive patient care through cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <Eye className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Healthcare Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Quantum Healthcare Diagnostics platform combines the power of quantum computing 
              with advanced artificial intelligence to deliver unprecedented medical insights.
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
                className="bg-zion-slate-dark/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Healthcare Practice
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of healthcare with measurable improvements in accuracy, efficiency, and patient outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-lg">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is already transforming healthcare across multiple specialties and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center mb-4`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed for healthcare professionals at every level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zion-slate-dark/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-blue-500/50 bg-gradient-to-b from-blue-500/10 to-transparent' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on the latest advancements in quantum computing, AI, and healthcare technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <tech.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the healthcare revolution with AI Quantum Healthcare Diagnostics. 
                Experience unprecedented accuracy, faster diagnosis, and better patient outcomes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400 mb-2">Contact Information</p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-300">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-blue-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-green-400" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}