import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Network, 
  Brain, 
  Cpu, 
  Zap, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Star,
  Shield,
  Users,
  TrendingUp,
  Database,
  Globe,
  Calendar,
  DollarSign,
  Target,
  Building,
  Eye,
  Code,
  Wifi,
  Smartphone,
  Cloud,
  Activity,
  ShoppingCart
} from 'lucide-react';

const IoTPlatforms: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered IoT Analytics",
      description: "Advanced machine learning algorithms that analyze IoT data streams for predictive insights and automation.",
      benefits: ["Real-time analytics", "Predictive maintenance", "Automated responses"]
    },
    {
      icon: Network,
      title: "Edge Computing Solutions",
      description: "Distributed computing infrastructure that processes data closer to IoT devices for faster response times.",
      benefits: ["Low latency", "Bandwidth optimization", "Offline operation"]
    },
    {
      icon: BarChart3,
      title: "IoT Data Management",
      description: "Comprehensive data collection, storage, and analysis platform for IoT ecosystems.",
      benefits: ["Data aggregation", "Storage optimization", "Real-time processing"]
    },
    {
      icon: Zap,
      title: "Device Management",
      description: "Centralized platform for managing, monitoring, and updating IoT devices at scale.",
      benefits: ["Remote monitoring", "Firmware updates", "Device provisioning"]
    }
  ];

  const services = [
    {
      title: "IoT Platform Development",
      description: "Custom IoT platforms tailored to your specific industry and use case requirements.",
      icon: Code,
      features: ["Platform architecture", "API development", "Device integration", "Scalability"]
    },
    {
      title: "Edge Computing",
      description: "Edge computing solutions that bring processing power closer to IoT devices.",
      icon: Cpu,
      features: ["Edge nodes", "Local processing", "Data filtering", "Offline capabilities"]
    },
    {
      title: "IoT Analytics",
      description: "Advanced analytics and machine learning for IoT data insights and automation.",
      icon: BarChart3,
      features: ["Real-time analytics", "Predictive modeling", "Anomaly detection", "Automation"]
    },
    {
      title: "Device Management",
      description: "Comprehensive IoT device management and monitoring solutions.",
      icon: Network,
      features: ["Device provisioning", "Remote monitoring", "Firmware updates", "Security"]
    }
  ];

  const benefits = [
    {
      title: "Real-time Insights",
      value: "24/7",
      description: "Continuous monitoring and real-time data analysis"
    },
    {
      title: "Cost Reduction",
      value: "35%",
      description: "Lower operational costs through predictive maintenance"
    },
    {
      title: "Efficiency Boost",
      value: "50%",
      description: "Improved operational efficiency and automation"
    },
    {
      title: "Scalability",
      value: "10x",
      description: "Easy scaling from hundreds to millions of devices"
    }
  ];

  const useCases = [
    {
      title: "Smart Manufacturing",
      description: "IoT solutions for industrial automation, predictive maintenance, and quality control.",
      icon: Building,
      features: ["Predictive maintenance", "Quality monitoring", "Production optimization", "Safety systems"]
    },
    {
      title: "Smart Cities",
      description: "Urban IoT solutions for traffic management, utilities, and public services.",
      icon: Globe,
      features: ["Traffic monitoring", "Utility management", "Environmental monitoring", "Public safety"]
    },
    {
      title: "Healthcare IoT",
      description: "Medical device monitoring and patient care automation solutions.",
      icon: Activity,
      features: ["Patient monitoring", "Medical device management", "Remote care", "Data analytics"]
    },
    {
      title: "Retail IoT",
      description: "Customer experience and inventory management solutions for retail environments.",
      icon: ShoppingCart,
      features: ["Customer analytics", "Inventory tracking", "Smart shelves", "Loss prevention"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small IoT projects and proof of concepts",
      features: [
        "Basic IoT platform",
        "Up to 1,000 devices",
        "Standard analytics",
        "Email support",
        "Basic security"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing IoT deployments and businesses",
      features: [
        "Advanced IoT platform",
        "Up to 100,000 devices",
        "AI-powered analytics",
        "Edge computing",
        "Priority support",
        "Advanced security"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "Comprehensive solution for large-scale IoT deployments",
      features: [
        "Custom IoT platform",
        "Unlimited devices",
        "Full AI suite",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <Network className="w-4 h-4 mr-2" />
              IoT & Edge Computing Platforms
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Connect Everything with
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> IoT Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge IoT platforms and edge computing solutions. 
              Connect devices, collect data, and gain real-time insights that drive innovation and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400">Real-time Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">35%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50%</div>
              <div className="text-gray-400">Efficiency Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">10x</div>
              <div className="text-gray-400">Scalability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IoT Features That Drive Innovation
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our IoT platform combines cutting-edge technology with proven scalability to deliver 
              exceptional results for connected device ecosystems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-green-500/20 mr-4">
                    <feature.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive IoT Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From platform development to edge computing, our IoT services cover every aspect of connected device ecosystems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 text-center">
                <div className="p-4 rounded-lg bg-green-500/20 inline-block mb-4">
                  <service.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-1 text-sm">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IoT for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our IoT solutions are designed to transform industries and create new business opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 text-center">
                <div className="p-4 rounded-lg bg-green-500/20 inline-block mb-4">
                  <useCase.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                <ul className="space-y-1 text-sm">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See the real impact of IoT technology on your business operations and bottom line.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">{benefit.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your IoT project's needs and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-green-500/50 scale-105' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                      : 'border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Connect Everything?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join forward-thinking companies that have already transformed their business with IoT technology. 
            Start building tomorrow's connected world today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IoTPlatforms;