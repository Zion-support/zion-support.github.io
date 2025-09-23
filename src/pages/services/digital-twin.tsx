import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Brain, 
  Zap, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Database,
  Network,
  Server,
  Smartphone,
  Monitor,
  BarChart3,
  MessageCircle,
  Clock,
  Target,
  Sparkles,
  FileText,
  Lock,
  Shield,
  Building,
  Factory,
  Car,
  Home,
  Cloud,
  Eye,
  Activity,
  Gauge,
  Settings
} from 'lucide-react';

const DigitalTwin: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: "Virtual Replicas",
      description: "Create exact digital copies of physical assets and systems",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Intelligent insights and predictive modeling for optimization",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Live data synchronization between physical and digital worlds",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Predictive Maintenance",
      description: "Anticipate issues before they occur with advanced analytics",
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 30% through predictive maintenance",
    "Improve asset performance and lifespan by 25-40%",
    "Real-time monitoring and instant anomaly detection",
    "Optimize resource allocation and energy consumption",
    "Enhanced safety and risk management capabilities",
    "Data-driven decision making for continuous improvement"
  ];

  const applications = [
    {
      title: "Manufacturing",
      description: "Smart factories with predictive maintenance and quality control",
      icon: Factory,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Cities",
      description: "Urban infrastructure monitoring and traffic optimization",
      icon: Building,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Healthcare",
      description: "Patient monitoring and medical device optimization",
      icon: Activity,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Energy & Utilities",
      description: "Grid optimization and renewable energy management",
      icon: Zap,
      color: "from-orange-500 to-red-500"
    }
  ];

  const digitalTwinServices = [
    {
      title: "Digital Twin Development",
      description: "Custom digital twin solutions for your specific assets and processes",
      icon: Code
    },
    {
      title: "IoT Integration",
      description: "Seamless connectivity between physical devices and digital models",
      icon: Network
    },
    {
      title: "AI Analytics",
      description: "Advanced machine learning for predictive insights and optimization",
      icon: Brain
    },
    {
      title: "Real-time Monitoring",
      description: "24/7 monitoring and alerting systems for critical operations",
      icon: Eye
    }
  ];

  const useCases = [
    {
      title: "Asset Performance",
      description: "Monitor and optimize equipment performance in real-time",
      icon: Gauge
    },
    {
      title: "Predictive Maintenance",
      description: "Schedule maintenance based on actual condition and usage",
      icon: Settings
    },
    {
      title: "Quality Control",
      description: "Ensure product quality through digital simulation and testing",
      icon: CheckCircle
    },
    {
      title: "Energy Optimization",
      description: "Reduce energy consumption through intelligent monitoring",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Digital Twin Platform - Zion Tech Group"
        description="Revolutionary digital twin solutions for manufacturing, smart cities, healthcare, and energy. Create virtual replicas with AI-powered analytics and real-time monitoring."
        keywords="digital twin, virtual replicas, IoT monitoring, predictive maintenance, smart manufacturing, Zion Tech Group"
        ogType="website"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                <Globe className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital Twin Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Create virtual replicas of your physical assets and systems. Monitor, analyze, 
              and optimize operations in real-time with AI-powered digital twin technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                <Eye className="h-5 w-5 mr-2" />
                Twin Assessment
              </button>
              <button className="btn-futuristic-outline">
                <FileText className="h-5 w-5 mr-2" />
                Download Twin Guide
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Digital Twin Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our digital twin platform combines IoT connectivity, AI analytics, and real-time 
              monitoring to create intelligent virtual replicas of your physical world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-opacity-20 hover:bg-opacity-20 transition-all duration-300 h-full`}>
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Digital twin technology is transforming industries by providing unprecedented 
              visibility and control over physical assets and processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={application.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 hover:border-slate-500 transition-all duration-300 h-full">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${application.color} mb-4`}>
                    <application.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {application.title}
                  </h3>
                  <p className="text-gray-300">
                    {application.description}
                  </p>
                </div>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Digital Twins?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of virtual replicas that provide real-time insights, 
              predictive capabilities, and operational optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Digital Twin Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital twin solutions from development to deployment, 
              with ongoing support and optimization services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {digitalTwinServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-600 border border-slate-500 hover:border-slate-400 transition-all duration-300 h-full">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">
                    {service.description}
                  </p>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Digital Twin Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how digital twins can transform your operations with 
              real-world applications and proven results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 hover:border-slate-500 transition-all duration-300 h-full">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
                    <useCase.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Digital Twin?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Transform your physical assets into intelligent digital replicas 
              that provide real-time insights and predictive capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-white text-green-600 hover:bg-gray-100">
                <MessageCircle className="h-5 w-5 mr-2" />
                Digital Twin Consultation
              </button>
              <button className="btn-futuristic-outline border-white text-white hover:bg-white hover:text-green-600">
                <Clock className="h-5 w-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTwin;