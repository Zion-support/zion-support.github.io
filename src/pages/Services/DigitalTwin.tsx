import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Eye, 
  Database, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  MessageCircle,
  Globe,
  Server,
  BarChart3,
  Settings,
  Code,
  Package,
  Monitor,
  Network,
  Lock,
  Users,
  TrendingUp,
  Activity,
  Layers
} from 'lucide-react';

const DigitalTwin: React.FC = () => {
  const services = [
    {
      icon: Cpu,
      title: '3D Modeling & Visualization',
      description: 'Create detailed 3D digital representations of physical assets and systems.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20'
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring and data collection from physical assets and IoT sensors.',
      color: 'text-green-400',
      bgColor: 'bg-green-600/20'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamless integration of data from multiple sources and systems.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20'
    },
    {
      icon: Zap,
      title: 'Predictive Analytics',
      description: 'AI-powered predictive maintenance and performance optimization.',
      color: 'text-orange-400',
      bgColor: 'bg-orange-600/20'
    }
  ];

  const solutions = [
    {
      title: 'Manufacturing Optimization',
      description: 'Optimize production processes and predict equipment failures.',
      icon: Activity,
      features: ['Production monitoring', 'Quality control', 'Predictive maintenance', 'Efficiency optimization']
    },
    {
      title: 'Smart Cities',
      description: 'Digital twins for urban infrastructure and public services.',
      icon: Globe,
      features: ['Traffic management', 'Energy optimization', 'Public safety', 'Environmental monitoring']
    },
    {
      title: 'Healthcare Systems',
      description: 'Patient monitoring and medical device optimization.',
      icon: Users,
      features: ['Patient monitoring', 'Device tracking', 'Treatment optimization', 'Resource management']
    },
    {
      title: 'Energy Management',
      description: 'Optimize energy consumption and renewable energy systems.',
      icon: TrendingUp,
      features: ['Consumption monitoring', 'Renewable integration', 'Grid optimization', 'Cost reduction']
    }
  ];

  const technologies = [
    'IoT Sensors',
    '3D Modeling',
    'Machine Learning',
    'Cloud Computing',
    'Edge Computing',
    'AR/VR',
    'Big Data Analytics',
    'Real-time Processing'
  ];

  const benefits = [
    {
      title: 'Real-time Insights',
      description: 'Monitor and analyze physical assets in real-time for immediate decision-making.',
      icon: Monitor,
      metric: 'Real-time Data'
    },
    {
      title: 'Predictive Capabilities',
      description: 'Anticipate issues before they occur with AI-powered predictive analytics.',
      icon: Zap,
      metric: 'Predictive AI'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through optimized processes and predictive maintenance.',
      icon: TrendingUp,
      metric: '30% Cost Savings'
    },
    {
      title: 'Risk Mitigation',
      description: 'Identify and address potential risks before they impact operations.',
      icon: Lock,
      metric: 'Risk Reduction'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Operations Director, Manufacturing Corp',
      content: 'Digital twins revolutionized our production monitoring, reducing downtime by 40%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'City Manager, Smart City Initiative',
      content: 'Our smart city digital twin improved traffic flow and reduced energy consumption significantly.',
      rating: 5
    },
    {
      name: 'Dr. Emily Davis',
      role: 'CTO, Healthcare Network',
      content: 'Patient monitoring with digital twins improved outcomes and resource utilization.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-green-600/20 rounded-full">
              <Cpu className="h-16 w-16 text-green-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Digital
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              {" "}Twin
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Create virtual replicas of physical assets and systems for real-time monitoring, 
            predictive analytics, and optimization. Transform your operations with digital twin technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Explore Digital Twin Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#demo"
              className="px-8 py-3 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </a>
          </div>
        </motion.div>

        {/* Key Services */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Digital Twin Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`${service.bgColor} rounded-xl p-6 border border-slate-700`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <service.icon className={`h-8 w-8 ${service.color} mr-3`} />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Solutions */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Industry Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <solution.icon className="h-8 w-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <div className="space-y-2">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technologies */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Core Technologies</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our digital twin platform leverages cutting-edge technologies to create 
                accurate, real-time virtual representations of your physical assets.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  className="bg-slate-700/50 rounded-lg p-4 text-center border border-slate-600"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.05 }}
                >
                  <span className="text-gray-300 text-sm font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Digital Twins?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-green-600/20 rounded-full">
                    <benefit.icon className="h-12 w-12 text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <div className="text-2xl font-bold text-green-400">{benefit.metric}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Digital Twin Process */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Digital Twin Development Process</h2>
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-green-600/20 rounded-full">
                    <Settings className="h-12 w-12 text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Assessment & Planning</h3>
                <p className="text-gray-300 text-sm">
                  Analyze physical assets, define requirements, and plan digital twin architecture
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-600/20 rounded-full">
                    <Code className="h-12 w-12 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Development</h3>
                <p className="text-gray-300 text-sm">
                  Create 3D models, integrate IoT sensors, and develop monitoring systems
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-purple-600/20 rounded-full">
                    <Layers className="h-12 w-12 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Integration</h3>
                <p className="text-gray-300 text-sm">
                  Connect data sources, implement real-time monitoring, and set up analytics
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-orange-600/20 rounded-full">
                    <Server className="h-12 w-12 text-orange-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">4. Deployment</h3>
                <p className="text-gray-300 text-sm">
                  Deploy digital twin, configure monitoring, and provide training and support
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-12 border border-green-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Your Digital Twin?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your physical assets into intelligent, connected digital twins. 
              Partner with Zion Tech Group for cutting-edge digital twin solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Start Digital Twin Project
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Schedule Consultation
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                <MessageCircle className="inline mr-2 h-5 w-5" />
                Talk to Digital Twin Expert
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default DigitalTwin;