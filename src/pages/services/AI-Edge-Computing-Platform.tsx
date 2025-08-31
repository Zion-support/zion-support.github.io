import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Network, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Smartphone, 
  Wifi, 
  Database, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Users,
  Globe,
  Lock,
  Activity,
  TrendingUp,
  Target,
  Rocket,
  Lightbulb,
  Code,
  Server,
  Chip,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  BarChart,
  Users2,
  Settings,
  Palette,
  Handshake,
  Building2,
  FileText,
  HelpCircle,
  Award,
  Heart,
  DollarSign,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function AIEdgeComputingPlatform() {
  const features = [
    {
      title: "Real-time AI Processing",
      description: "Ultra-low latency AI inference at the edge for instant decision making",
      icon: Zap,
      benefits: ["Sub-10ms response times", "Offline AI capabilities", "Real-time analytics"]
    },
    {
      title: "Distributed Intelligence",
      description: "AI models distributed across edge nodes for optimal performance",
      icon: Network,
      benefits: ["Load balancing", "Fault tolerance", "Scalable architecture"]
    },
    {
      title: "Edge Security",
      description: "Advanced security protocols for edge computing environments",
      icon: Shield,
      benefits: ["Zero-trust architecture", "Encrypted communications", "Threat detection"]
    },
    {
      title: "IoT Integration",
      description: "Seamless integration with IoT devices and sensors",
      icon: Smartphone,
      benefits: ["Device management", "Data collection", "Protocol support"]
    }
  ];

  const useCases = [
    {
      title: "Smart Cities",
      description: "Traffic optimization, environmental monitoring, and public safety",
      icon: Building2,
      examples: ["Traffic light optimization", "Air quality monitoring", "Emergency response"]
    },
    {
      title: "Industrial IoT",
      description: "Predictive maintenance and quality control in manufacturing",
      icon: Cpu,
      examples: ["Equipment monitoring", "Quality assurance", "Energy optimization"]
    },
    {
      title: "Autonomous Vehicles",
      description: "Real-time decision making for self-driving cars",
      icon: Car,
      examples: ["Object detection", "Path planning", "Safety systems"]
    },
    {
      title: "Healthcare Monitoring",
      description: "Patient monitoring and early warning systems",
      icon: Heart,
      examples: ["Vital signs tracking", "Fall detection", "Medication reminders"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small IoT deployments",
      features: [
        "Up to 100 edge nodes",
        "Basic AI models",
        "Standard security",
        "Email support",
        "Basic analytics"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$7,500",
      period: "/month",
      description: "Ideal for medium-scale edge computing",
      features: [
        "Up to 500 edge nodes",
        "Advanced AI models",
        "Enhanced security",
        "Priority support",
        "Advanced analytics",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$15,000",
      period: "/month",
      description: "For large-scale edge deployments",
      features: [
        "Unlimited edge nodes",
        "Custom AI models",
        "Enterprise security",
        "24/7 support",
        "Custom analytics",
        "White-label options",
        "Dedicated infrastructure"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const technologies = [
    "TensorFlow Lite", "ONNX Runtime", "Intel OpenVINO", "NVIDIA TensorRT",
    "Apache Kafka", "Redis", "PostgreSQL", "MongoDB", "Kubernetes", "Docker",
    "MQTT", "CoAP", "HTTP/3", "WebRTC", "ZeroMQ", "gRPC"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              AI Edge Computing Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI at the Edge
              <span className="block text-zion-cyan">Intelligence Everywhere</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Deploy AI models directly to edge devices for real-time processing, 
              reduced latency, and enhanced privacy. Transform your IoT infrastructure 
              with intelligent edge computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan-dark transition-colors"
              >
                View Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/20 transition-colors"
              >
                Schedule Demo
              </a>
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
              Edge Computing Redefined
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI Edge Computing Platform brings intelligence to where data is generated, 
              enabling real-time insights and actions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
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
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Discover how AI Edge Computing is transforming industries and creating 
              new possibilities for innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-zion-slate-light mb-6">{useCase.description}</p>
                <div className="space-y-3">
                  {useCase.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center text-zion-slate-light">
                      <ArrowRight className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that fits your edge computing needs and scale as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zion-blue-dark/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                    : 'border-zion-purple/30'
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
                  <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-zion-cyan text-white hover:bg-zion-cyan-dark'
                    : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/20'
                }">
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built with Modern Technologies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our platform leverages cutting-edge technologies to deliver 
              exceptional performance and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg p-4 text-center hover:border-zion-cyan/50 transition-colors"
              >
                <span className="text-sm text-zion-slate-light font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Deploy AI at the Edge?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join leading organizations that are already leveraging AI Edge Computing 
              to gain competitive advantages and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan-dark transition-colors"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/20 transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-zion-cyan mb-2" />
              <span className="text-zion-slate-light text-sm">Phone</span>
              <a href="tel:+13024640950" className="text-white hover:text-zion-cyan transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-zion-cyan mb-2" />
              <span className="text-zion-slate-light text-sm">Email</span>
              <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-zion-cyan transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-zion-cyan mb-2" />
              <span className="text-zion-slate-light text-sm">Address</span>
              <span className="text-white text-center">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}