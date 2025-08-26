import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Play,
  BarChart3,
  Cpu,
  Eye,
  MessageSquare,
  Database,
  Network,
  Rocket,
  Target,
  Award,
  Clock,
  Star,
  Code,
  Settings,
  Cloud,
  Lock,
  RefreshCw,
  Brain,
  Sun,
  Wind,
  Battery,
  Recycle,
  TreePine,
  Droplets,
  Lightbulb
} from 'lucide-react';

const GreenIT: React.FC = () => {
  const greenServices = [
    {
      id: 1,
      title: 'Sustainable Data Centers',
      description: 'Energy-efficient data center solutions with renewable energy integration',
      icon: Database,
      features: ['Renewable Energy', 'Cooling Optimization', 'Energy Monitoring', 'Carbon Reduction'],
      useCases: ['Enterprise Companies', 'Cloud Providers', 'Financial Services', 'Healthcare'],
      pricing: 'Starting at $45,000',
      timeline: '4-8 months'
    },
    {
      id: 2,
      title: 'Green Software Development',
      description: 'Eco-friendly software solutions that minimize environmental impact',
      icon: Code,
      features: ['Energy-Efficient Code', 'Sustainable Architecture', 'Green Testing', 'Performance Optimization'],
      useCases: ['Software Companies', 'Startups', 'Government Agencies', 'Educational Institutions'],
      pricing: 'Starting at $25,000',
      timeline: '2-4 months'
    },
    {
      id: 3,
      title: 'IoT Environmental Monitoring',
      description: 'Smart sensors and systems for environmental data collection and analysis',
      icon: Eye,
      features: ['Air Quality Sensors', 'Water Monitoring', 'Waste Management', 'Real-time Analytics'],
      useCases: ['Smart Cities', 'Manufacturing', 'Agriculture', 'Environmental Agencies'],
      pricing: 'Starting at $35,000',
      timeline: '3-6 months'
    },
    {
      id: 4,
      title: 'Renewable Energy Management',
      description: 'Intelligent systems for renewable energy optimization and grid integration',
      icon: Sun,
      features: ['Solar Optimization', 'Wind Integration', 'Battery Management', 'Grid Balancing'],
      useCases: ['Energy Companies', 'Utilities', 'Commercial Buildings', 'Residential Communities'],
      pricing: 'Starting at $40,000',
      timeline: '3-5 months'
    }
  ];

  const sustainabilitySolutions = [
    {
      title: 'Carbon Footprint Tracking',
      description: 'Comprehensive carbon emission monitoring and reduction strategies',
      benefits: ['Real-time Monitoring', 'Automated Reporting', 'Reduction Strategies', 'Compliance Ready']
    },
    {
      title: 'Green Cloud Migration',
      description: 'Sustainable cloud infrastructure with renewable energy sources',
      benefits: ['Energy Efficiency', 'Cost Reduction', 'Environmental Impact', 'Scalable Solutions']
    },
    {
      title: 'Circular Economy Solutions',
      description: 'Technology systems that support circular economy principles',
      benefits: ['Waste Reduction', 'Resource Optimization', 'Sustainable Practices', 'Long-term Value']
    }
  ];

  const environmentalMetrics = [
    { metric: 'Energy Savings', value: '40-60%', icon: Zap },
    { metric: 'Carbon Reduction', value: '50-70%', icon: Leaf },
    { metric: 'Cost Savings', value: '30-45%', icon: TrendingUp },
    { metric: 'ROI Timeline', value: '12-18 months', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-teal-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-10 h-10 text-white" />
            </div>
            <h1 className="futuristic-heading mb-6">
              Green <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Technology</span>
            </h1>
            <p className="futuristic-text text-xl mb-8 max-w-3xl mx-auto">
              Sustainable IT solutions that reduce environmental impact while maintaining performance.
              Join us in building a greener future through innovative technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="futuristic-button inline-flex items-center"
              >
                Start Your Green Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="futuristic-button-outline inline-flex items-center"
              >
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Environmental Impact Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="futuristic-heading text-3xl lg:text-4xl mb-4">
              Environmental Impact
            </h2>
            <p className="futuristic-text text-lg max-w-2xl mx-auto">
              Our green technology solutions deliver measurable environmental benefits
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {environmentalMetrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="stats-card text-center"
              >
                <div className="text-zion-cyan mb-2">
                  <item.icon className="w-8 h-8 mx-auto" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-green-400 mb-2">
                  {item.value}
                </div>
                <div className="text-zion-slate-light">{item.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Green Services */}
      <section className="py-20 bg-gradient-to-r from-green-400/5 to-teal-500/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="futuristic-heading text-3xl lg:text-4xl mb-4">
              Our Green Services
            </h2>
            <p className="futuristic-text text-lg max-w-2xl mx-auto">
              Comprehensive sustainable technology solutions for modern businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {greenServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="futuristic-card group hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-zion-slate-light mb-4">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm font-medium text-green-400 mb-2">Features</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 2).map((feature, idx) => (
                            <li key={idx} className="text-xs text-zion-slate-light flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-green-400 mb-2">Use Cases</h4>
                        <ul className="space-y-1">
                          {service.useCases.slice(0, 2).map((useCase, idx) => (
                            <li key={idx} className="text-xs text-zion-slate-light flex items-center">
                              <Users className="w-3 h-3 text-green-400 mr-2" />
                              {useCase}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-400 font-medium">{service.pricing}</span>
                      <span className="text-zion-slate-light">{service.timeline}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="futuristic-heading text-3xl lg:text-4xl mb-4">
              Sustainability Solutions
            </h2>
            <p className="futuristic-text text-lg max-w-2xl mx-auto">
              Comprehensive approaches to environmental responsibility and sustainable growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sustainabilitySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="futuristic-card text-center group hover:border-green-400/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-zion-slate-light flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Go Green</span>?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's build a sustainable future together with green technology solutions
            </p>
            
            <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-green-400/20 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <Leaf className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Sustainability Assessment</h3>
                  <p className="text-zion-slate-light mb-4">
                    Evaluate your current environmental impact
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300"
                  >
                    Start Assessment
                  </Link>
                </div>
                
                <div className="text-center">
                  <Globe className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Green Consultation</h3>
                  <p className="text-zion-slate-light mb-4">
                    Discuss sustainable technology strategies
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-block px-6 py-3 bg-zion-slate-dark/50 border border-green-400/20 text-green-400 font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GreenIT;
