import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Activity, 
  Shield, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  Heart,
  Lock,
  Target,
  Rocket,
  Cpu,
  ChartLine,
  Network,
  Database,
  Server,
  Monitor,
  Smartphone,
  Cloud,
  Users,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin,
  Stethoscope,
  Pill,
  Eye,
  BarChart3,
  Settings,
  AlertTriangle,
  CheckSquare,
  TrendingUp,
  UserCheck,
  FileText,
  Microscope,
  BrainCircuit,
  ShieldCheck
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIHealthcareAnalyticsPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnostics",
      description: "Advanced machine learning algorithms for accurate disease detection and diagnosis"
    },
    {
      icon: Activity,
      title: "Predictive Analytics",
      description: "Early disease prediction and risk assessment using patient data and AI models"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant Security",
      description: "Enterprise-grade security with full HIPAA compliance and patient privacy protection"
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Continuous patient monitoring with instant alerts and automated responses"
    }
  ];

  const services = [
    {
      title: "Clinical Decision Support",
      description: "AI-powered clinical decision support system for healthcare providers",
      icon: Stethoscope,
      features: ["Evidence-based recommendations", "Drug interaction alerts", "Treatment optimization", "Clinical guidelines"]
    },
    {
      title: "Patient Risk Assessment",
      description: "Predictive risk modeling for early intervention and preventive care",
      icon: Heart,
      features: ["Risk stratification", "Early warning systems", "Preventive care planning", "Population health insights"]
    },
    {
      title: "Medical Imaging Analysis",
      description: "AI-powered analysis of X-rays, MRIs, CT scans, and other medical images",
      icon: Eye,
      features: ["Automated detection", "Image enhancement", "Comparative analysis", "Radiologist assistance"]
    },
    {
      title: "Population Health Management",
      description: "Comprehensive analytics for managing population health and outcomes",
      icon: Users,
      features: ["Health trends analysis", "Outcome tracking", "Resource optimization", "Quality metrics"]
    }
  ];

  const technologies = [
    "Machine Learning & AI",
    "Natural Language Processing",
    "Computer Vision",
    "Big Data Analytics",
    "Cloud Computing",
    "IoT Medical Devices",
    "Blockchain Security",
    "Predictive Modeling"
  ];

  const pricing = [
    {
      plan: "Healthcare Starter",
      price: "$3,500",
      period: "/month",
      features: [
        "Basic AI analytics",
        "Patient data integration",
        "Standard reporting",
        "Email support",
        "HIPAA compliance"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      plan: "Healthcare Professional",
      price: "$12,500",
      period: "/month",
      features: [
        "Advanced AI diagnostics",
        "Predictive analytics",
        "Real-time monitoring",
        "Priority support",
        "Custom integrations",
        "Advanced security"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      plan: "Healthcare Enterprise",
      price: "$35,000",
      period: "/month",
      features: [
        "Complete healthcare platform",
        "Custom AI development",
        "White-label solutions",
        "24/7 dedicated support",
        "Compliance consulting",
        "Full API access"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Improved Patient Outcomes",
      description: "Increase treatment success rates by 25-40% with AI-powered diagnostics and predictive analytics"
    },
    {
      icon: Clock,
      title: "Faster Diagnosis",
      description: "Reduce diagnosis time by 60% with automated AI analysis and clinical decision support"
    },
    {
      icon: ShieldCheck,
      title: "Enhanced Patient Safety",
      description: "Minimize medical errors and improve patient safety with AI-powered risk assessment"
    },
    {
      icon: Users,
      title: "Better Resource Management",
      description: "Optimize healthcare resources and reduce costs by 20-30% through intelligent analytics"
    }
  ];

  const compliance = [
    "HIPAA Compliance",
    "HITECH Act",
    "GDPR Compliance",
    "SOC 2 Type II",
    "ISO 27001",
    "FDA Guidelines",
    "Clinical Validation",
    "Data Encryption"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO 
        title="AI Healthcare Analytics Platform - Zion Tech Group"
        description="Revolutionary AI-powered healthcare analytics platform for improved patient outcomes, predictive diagnostics, and clinical decision support."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-blue-500/20 border border-red-400/30 rounded-full text-red-300 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI Healthcare Innovation
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Healthcare
              <span className="block bg-gradient-to-r from-red-400 via-blue-500 to-green-600 bg-clip-text text-transparent">
                Analytics Platform
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform healthcare delivery with our AI-powered analytics platform. Improve patient outcomes, 
              accelerate diagnosis, and enhance clinical decision-making with cutting-edge artificial intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-blue-600 text-white font-semibold rounded-lg hover:from-red-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-red-500/20"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-red-400/30 text-red-400 font-semibold rounded-lg hover:bg-red-400/10 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Healthcare AI Features
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI-powered platform provides comprehensive healthcare analytics capabilities that transform 
              patient care and clinical decision-making.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-red-400/30 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-red-400/40 group-hover:to-blue-500/40 transition-all duration-200">
                  <feature.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From clinical decision support to population health management, our platform covers every aspect 
              of modern healthcare analytics and AI-powered diagnostics.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-red-400/30 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 text-lg mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Healthcare Transformation Benefits
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Discover how our AI Healthcare Analytics Platform delivers measurable benefits for patients, 
              healthcare providers, and healthcare organizations.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-red-400/30 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-300 text-lg">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Healthcare Platform Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the plan that fits your healthcare organization's needs. All plans include our core 
              AI healthcare analytics and HIPAA compliance features.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-red-400/50 bg-gradient-to-br from-red-500/10 to-blue-500/10' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-blue-600 text-white hover:from-red-400 hover:to-blue-500 hover:scale-105'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Healthcare Compliance & Security
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our platform meets the highest standards of healthcare compliance and data security 
              to protect patient privacy and ensure regulatory adherence.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {compliance.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-red-400/30 transition-all duration-200"
              >
                <ShieldCheck className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                <span className="text-white text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Healthcare Technologies
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our platform leverages cutting-edge technologies to create the most advanced healthcare 
              analytics solution available.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-red-400/30 transition-all duration-200"
              >
                <BrainCircuit className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                <span className="text-white text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-red-500/10 to-blue-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join the future of healthcare with AI-powered analytics and diagnostics. 
                Improve patient outcomes and clinical decision-making today.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Phone className="w-5 h-5 text-red-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Mail className="w-5 h-5 text-red-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-red-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-blue-600 text-white font-semibold rounded-lg hover:from-red-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-red-500/20"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border border-red-400/30 text-red-400 font-semibold rounded-lg hover:bg-red-400/10 transition-all duration-200"
                >
                  Explore All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}