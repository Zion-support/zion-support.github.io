import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Activity, 
  CheckCircle,
  ArrowRight,
  Star,
  Rocket,
  Lock,
  Target,
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
  Settings,
  BarChart3,
  TrendingUp,
  BrainCircuit,
  ShieldCheck,
  Cog,
  Workflow,
  Automation,
  Bot,
  Globe,
  Lightbulb,
  Target,
  CheckSquare,
  AlertTriangle,
  FileText,
  UserCheck,
  Microscope
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIAutonomousBusinessOperationsPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Decision Making",
      description: "Autonomous AI systems that make intelligent business decisions without human intervention"
    },
    {
      icon: Automation,
      title: "End-to-End Automation",
      description: "Complete automation of business processes from data input to decision execution"
    },
    {
      icon: Shield,
      title: "Intelligent Risk Management",
      description: "AI-driven risk assessment and mitigation across all business operations"
    },
    {
      icon: Zap,
      title: "Real-time Optimization",
      description: "Continuous optimization of business processes and resource allocation"
    }
  ];

  const services = [
    {
      title: "Autonomous Supply Chain",
      description: "AI-powered supply chain management with automated procurement, inventory, and logistics",
      icon: Workflow,
      features: ["Automated procurement", "Smart inventory management", "Predictive logistics", "Supplier optimization"]
    },
    {
      title: "Intelligent Finance Operations",
      description: "Autonomous financial management with AI-powered budgeting, forecasting, and risk assessment",
      icon: BarChart3,
      features: ["Automated budgeting", "AI forecasting", "Risk assessment", "Compliance monitoring"]
    },
    {
      title: "Smart HR Operations",
      description: "AI-driven human resources with automated recruitment, performance management, and training",
      icon: Users,
      features: ["Automated recruitment", "Performance analytics", "Training optimization", "Employee engagement"]
    },
    {
      title: "Autonomous Customer Service",
      description: "AI-powered customer service with automated responses, issue resolution, and satisfaction monitoring",
      icon: Bot,
      features: ["Automated responses", "Issue resolution", "Satisfaction monitoring", "Proactive support"]
    }
  ];

  const technologies = [
    "Machine Learning & AI",
    "Robotic Process Automation (RPA)",
    "Natural Language Processing",
    "Predictive Analytics",
    "Cloud Computing",
    "IoT Integration",
    "Blockchain Security",
    "Edge Computing"
  ];

  const pricing = [
    {
      plan: "Business Starter",
      price: "$5,000",
      period: "/month",
      features: [
        "Basic AI automation",
        "Process optimization",
        "Standard reporting",
        "Email support",
        "Basic integrations"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      plan: "Business Professional",
      price: "$18,500",
      period: "/month",
      features: [
        "Advanced AI automation",
        "Full process automation",
        "Real-time optimization",
        "Priority support",
        "Custom integrations",
        "Advanced analytics"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      plan: "Business Enterprise",
      price: "$45,000",
      period: "/month",
      features: [
        "Complete autonomous platform",
        "Custom AI development",
        "White-label solutions",
        "24/7 dedicated support",
        "Strategic consulting",
        "Full API access"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Operational Efficiency",
      description: "Increase operational efficiency by 40-60% through intelligent automation and optimization"
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Enable round-the-clock business operations with autonomous AI systems"
    },
    {
      icon: ShieldCheck,
      title: "Risk Reduction",
      description: "Minimize operational risks and errors with AI-powered monitoring and decision-making"
    },
    {
      icon: Rocket,
      title: "Scalability",
      description: "Scale operations seamlessly without proportional increases in human resources"
    }
  ];

  const useCases = [
    "Manufacturing Operations",
    "Retail & E-commerce",
    "Financial Services",
    "Healthcare Administration",
    "Logistics & Transportation",
    "Energy Management",
    "Real Estate Operations",
    "Education Administration"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO 
        title="AI Autonomous Business Operations Platform - Zion Tech Group"
        description="Transform your business with our AI-powered Autonomous Business Operations Platform. Intelligent automation, decision-making, and optimization for the future of business."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6">
              <Automation className="w-4 h-4 mr-2" />
              Autonomous Business Innovation
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous
              <span className="block bg-gradient-to-r from-purple-400 via-blue-500 to-green-600 bg-clip-text text-transparent">
                Business Operations
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your business with autonomous AI operations. Our platform enables intelligent automation, 
              decision-making, and optimization across all aspects of your business operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-purple-500/20"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-purple-400/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-200"
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
              Autonomous Business Features
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI-powered platform provides comprehensive autonomous business capabilities that transform 
              operations and drive unprecedented efficiency.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-400/30 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-purple-400/40 group-hover:to-blue-500/40 transition-all duration-200">
                  <feature.icon className="w-6 h-6 text-purple-400" />
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
              Comprehensive Autonomous Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From supply chain to customer service, our platform provides autonomous AI solutions for every aspect 
              of modern business operations.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-purple-400/30 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 text-lg mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
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
              Business Transformation Benefits
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Discover how our AI Autonomous Business Operations Platform delivers measurable benefits for 
              businesses across all industries and sizes.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-purple-400/30 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-300 text-lg">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our autonomous business operations platform is designed to transform operations across diverse industries 
              and business models.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-purple-400/30 transition-all duration-200"
              >
                <Rocket className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                <span className="text-white text-sm">{useCase}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Autonomous Platform Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core autonomous AI 
              capabilities and business optimization features.
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
                    ? 'border-purple-400/50 bg-gradient-to-br from-purple-500/10 to-blue-500/10' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-400 hover:to-blue-500 hover:scale-105'
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
              Advanced Technologies
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our platform leverages cutting-edge technologies to create the most advanced autonomous 
              business operations solution available.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-purple-400/30 transition-all duration-200"
              >
                <BrainCircuit className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                <span className="text-white text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join the future of autonomous business operations. Transform your business with AI-powered 
                automation and optimization today.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-purple-500/20"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border border-purple-400/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-200"
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