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
  MapPin,
  Monitor,
  Gauge,
  Layers,
  RefreshCw,
  AlertTriangle,
  CheckSquare,
  PieChart,
  LineChart,
  BarChart3 as BarChartIcon,
  Activity as ActivityIcon
} from 'lucide-react';

export default function AIDigitalTwinPlatform() {
  const features = [
    {
      title: "Real-time Synchronization",
      description: "Live data synchronization between physical assets and digital representations",
      icon: RefreshCw,
      benefits: ["Real-time updates", "Live monitoring", "Instant alerts"]
    },
    {
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms for predictive insights",
      icon: Brain,
      benefits: ["Predictive maintenance", "Anomaly detection", "Performance optimization"]
    },
    {
      title: "3D Visualization",
      description: "Immersive 3D models with interactive controls and real-time data overlay",
      icon: Monitor,
      benefits: ["Interactive models", "Data visualization", "Virtual walkthroughs"]
    },
    {
      title: "Predictive Maintenance",
      description: "AI-driven maintenance scheduling and failure prediction",
      icon: AlertTriangle,
      benefits: ["Failure prediction", "Maintenance optimization", "Cost reduction"]
    }
  ];

  const useCases = [
    {
      title: "Manufacturing",
      description: "Production line optimization and quality control",
      icon: Cpu,
      examples: ["Production monitoring", "Quality assurance", "Efficiency optimization"]
    },
    {
      title: "Smart Buildings",
      description: "Building management and energy optimization",
      icon: Building2,
      examples: ["Energy management", "HVAC optimization", "Space utilization"]
    },
    {
      title: "Healthcare",
      description: "Patient monitoring and medical device management",
      icon: Heart,
      examples: ["Patient tracking", "Device monitoring", "Treatment optimization"]
    },
    {
      title: "Infrastructure",
      description: "Critical infrastructure monitoring and maintenance",
      icon: Network,
      examples: ["Bridge monitoring", "Road conditions", "Utility management"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$3,500",
      period: "/month",
      description: "Perfect for small-scale digital twin projects",
      features: [
        "Up to 10 digital twins",
        "Basic AI analytics",
        "Standard visualization",
        "Email support",
        "Basic reporting"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$8,500",
      period: "/month",
      description: "Ideal for medium-scale digital twin deployments",
      features: [
        "Up to 100 digital twins",
        "Advanced AI analytics",
        "3D visualization",
        "Priority support",
        "Advanced reporting",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$18,000",
      period: "/month",
      description: "For large-scale digital twin implementations",
      features: [
        "Unlimited digital twins",
        "Custom AI models",
        "Advanced 3D visualization",
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
    "Unity 3D", "Unreal Engine", "Three.js", "WebGL", "OpenGL", "Vulkan",
    "TensorFlow", "PyTorch", "Scikit-learn", "Apache Spark", "Kafka", "Redis",
    "PostgreSQL", "MongoDB", "InfluxDB", "TimescaleDB", "Kubernetes", "Docker",
    "MQTT", "OPC UA", "REST APIs", "GraphQL", "WebSockets", "gRPC"
  ];

  const benefits = [
    {
      title: "Operational Efficiency",
      description: "Optimize operations with real-time insights and predictive analytics",
      icon: TrendingUp,
      metrics: ["15-25% efficiency improvement", "30% reduction in downtime", "20% cost savings"]
    },
    {
      title: "Risk Mitigation",
      description: "Identify and prevent potential issues before they occur",
      icon: Shield,
      metrics: ["90% early warning accuracy", "60% reduction in failures", "Proactive maintenance"]
    },
    {
      title: "Data-Driven Decisions",
      description: "Make informed decisions based on comprehensive data analysis",
      icon: BarChart3,
      metrics: ["Real-time insights", "Historical analysis", "Predictive modeling"]
    },
    {
      title: "Cost Optimization",
      description: "Reduce operational costs through intelligent resource management",
      icon: DollarSign,
      metrics: ["25% maintenance cost reduction", "Energy optimization", "Resource planning"]
    }
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
              <Monitor className="w-4 h-4 mr-2" />
              AI Digital Twin Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital Twins
              <span className="block text-zion-cyan">Powered by AI</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Create intelligent digital replicas of physical assets with real-time data synchronization, 
              AI-powered analytics, and predictive insights. Transform how you monitor, maintain, and optimize your operations.
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
              Advanced Digital Twin Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with immersive visualization to create 
              the most advanced digital twin solution available.
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

      {/* Benefits Section */}
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
              Measurable Business Impact
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Digital twins deliver tangible results that directly impact your bottom line 
              and operational excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light mb-6">{benefit.description}</p>
                <div className="space-y-3">
                  {benefit.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-zion-slate-light">
                      <CheckSquare className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Digital twins are transforming industries across the globe, enabling 
              unprecedented levels of insight and control.
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
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
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
              Choose the plan that fits your digital twin needs and scale as you grow.
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Digital Twin?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join leading organizations that are already leveraging digital twins 
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