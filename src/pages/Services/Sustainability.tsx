import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Globe, 
  Zap, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  MessageCircle,
  TrendingUp,
  Server,
  BarChart3,
  Settings,
  Code,
  Package,
  Monitor,
  Network,
  Lock,
  Users,
  Activity,
  Layers,
  Recycle,
  Sun
} from 'lucide-react';

const Sustainability: React.FC = () => {
  const services = [
    {
      icon: Leaf,
      title: 'Green Technology Solutions',
      description: 'Implement eco-friendly technologies to reduce environmental impact.',
      color: 'text-green-400',
      bgColor: 'bg-green-600/20'
    },
    {
      icon: Globe,
      title: 'Carbon Footprint Analysis',
      description: 'Measure and analyze your organization\'s carbon emissions and environmental impact.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20'
    },
    {
      icon: Zap,
      title: 'Renewable Energy Integration',
      description: 'Transition to clean energy sources and optimize energy consumption.',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-600/20'
    },
    {
      icon: Shield,
      title: 'ESG Compliance',
      description: 'Ensure compliance with environmental, social, and governance standards.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20'
    }
  ];

  const solutions = [
    {
      title: 'Sustainable IT Infrastructure',
      description: 'Build energy-efficient data centers and IT systems.',
      icon: Server,
      features: ['Energy optimization', 'Green data centers', 'Efficient cooling', 'Renewable power']
    },
    {
      title: 'Circular Economy Solutions',
      description: 'Implement waste reduction and resource recycling programs.',
      icon: Recycle,
      features: ['Waste management', 'Resource recovery', 'Product lifecycle', 'Sustainable procurement']
    },
    {
      title: 'Smart Building Technology',
      description: 'Optimize building operations for energy efficiency and sustainability.',
      icon: Monitor,
      features: ['Energy management', 'Smart sensors', 'Automated systems', 'Performance monitoring']
    },
    {
      title: 'Supply Chain Sustainability',
      description: 'Create transparent and sustainable supply chain networks.',
      icon: Network,
      features: ['Supplier assessment', 'Carbon tracking', 'Ethical sourcing', 'Transparency reporting']
    }
  ];

  const technologies = [
    'IoT Sensors',
    'AI Analytics',
    'Blockchain',
    'Cloud Computing',
    'Machine Learning',
    'Big Data',
    'Smart Grid',
    'Renewable Energy'
  ];

  const benefits = [
    {
      title: 'Environmental Impact',
      description: 'Significantly reduce your organization\'s environmental footprint.',
      icon: Leaf,
      metric: '40% Reduction'
    },
    {
      title: 'Cost Savings',
      description: 'Lower operational costs through energy efficiency and waste reduction.',
      icon: TrendingUp,
      metric: '30% Cost Savings'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Meet and exceed environmental regulations and standards.',
      icon: Shield,
      metric: '100% Compliant'
    },
    {
      title: 'Brand Reputation',
      description: 'Enhance your brand image as a sustainability leader.',
      icon: Star,
      metric: 'Enhanced Reputation'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Green',
      role: 'Sustainability Director, EcoCorp',
      content: 'Zion Tech Group helped us achieve carbon neutrality and reduce energy costs by 35%.',
      rating: 5
    },
    {
      name: 'Michael Brown',
      role: 'CTO, GreenTech Solutions',
      content: 'Their sustainable IT infrastructure transformed our operations and improved our ESG score.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'Operations Manager, Sustainable Retail',
      content: 'The circular economy solutions reduced our waste by 60% and improved efficiency.',
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
              <Leaf className="h-16 w-16 text-green-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Sustainable
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              {" "}Technology
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Drive environmental responsibility through innovative technology solutions. 
            Build a sustainable future while achieving business growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Explore Sustainability Solutions
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Sustainability Services</h2>
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Sustainable Solutions</h2>
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
              <h2 className="text-3xl font-bold text-white mb-4">Sustainable Technologies</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We leverage cutting-edge technologies to create sustainable solutions that 
                protect the environment while driving business value.
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Sustainability?</h2>
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

        {/* Sustainability Process */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Sustainability Process</h2>
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-green-600/20 rounded-full">
                    <Settings className="h-12 w-12 text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Assessment</h3>
                <p className="text-gray-300 text-sm">
                  Evaluate current environmental impact and identify improvement opportunities
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-600/20 rounded-full">
                    <Code className="h-12 w-12 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Strategy</h3>
                <p className="text-gray-300 text-sm">
                  Develop comprehensive sustainability strategy and technology roadmap
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-purple-600/20 rounded-full">
                    <Layers className="h-12 w-12 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Implementation</h3>
                <p className="text-gray-300 text-sm">
                  Deploy sustainable technologies and optimize operations for efficiency
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-orange-600/20 rounded-full">
                    <Monitor className="h-12 w-12 text-orange-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">4. Monitoring</h3>
                <p className="text-gray-300 text-sm">
                  Continuous monitoring and optimization of sustainability performance
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
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Go Green?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the sustainability revolution and make a positive impact on the environment 
              while driving business growth. Partner with Zion Tech Group for sustainable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Start Sustainability Journey
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
                Talk to Sustainability Expert
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Sustainability;