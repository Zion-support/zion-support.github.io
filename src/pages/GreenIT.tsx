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
    },
    {
      title: 'Smart Building Management',
      description: 'Intelligent systems for energy-efficient building operations',
      benefits: ['Energy Savings', 'Occupant Comfort', 'Predictive Maintenance', 'Sustainability Goals']
    }
  ];

  const technologies = [
    {
      icon: Leaf,
      title: 'Sustainable Computing',
      description: 'Energy-efficient hardware and software solutions'
    },
    {
      icon: Sun,
      title: 'Renewable Energy',
      description: 'Solar, wind, and other clean energy technologies'
    },
    {
      icon: Battery,
      title: 'Energy Storage',
      description: 'Advanced battery and energy management systems'
    },
    {
      icon: Wind,
      title: 'Wind Power',
      description: 'Wind energy generation and optimization'
    },
    {
      icon: Recycle,
      title: 'Circular Systems',
      description: 'Waste reduction and resource optimization'
    },
    {
      icon: TreePine,
      title: 'Carbon Capture',
      description: 'Technologies for carbon sequestration and reduction'
    },
    {
      icon: Globe,
      title: "Carbon-Neutral Operations",
      description: "Comprehensive carbon offset programs and sustainable business practices across all operations.",
      benefits: ["Carbon neutrality", "ESG compliance", "Brand reputation"]
    }
  ];

  const services = [
    {
      title: "Green IT Consulting",
      description: "Expert guidance on implementing sustainable technology practices and reducing environmental impact.",
      features: ["Energy audits", "Sustainability roadmaps", "ROI analysis"],
      price: "Starting at $5,000"
    },
    {
      title: "Sustainable Infrastructure",
      description: "Design and implementation of eco-friendly IT infrastructure and data centers.",
      features: ["Energy-efficient hardware", "Smart cooling systems", "Renewable energy integration"],
      price: "Custom pricing"
    },
    {
      title: "E-waste Management",
      description: "Comprehensive electronic waste collection, recycling, and disposal services.",
      features: ["Secure data destruction", "Certified recycling", "Compliance reporting"],
      price: "Starting at $2,000"
    },
    {
      title: "Carbon Footprint Analysis",
      description: "Detailed assessment of your IT operations' environmental impact with actionable recommendations.",
      features: ["Comprehensive analysis", "Reduction strategies", "Progress tracking"],
      price: "Starting at $3,500"
    }
  ];

  const caseStudies = [
    {
      company: "TechCorp Global",
      industry: "Technology",
      challenge: "High energy costs and carbon footprint from data centers",
      solution: "Implemented green data center solutions with renewable energy integration",
      results: ["40% reduction in energy costs", "60% decrease in carbon emissions"]
    },
    {
      company: "GreenBank Financial",
      industry: "Financial Services",
      challenge: "Need for sustainable IT practices to meet ESG requirements",
      solution: "Comprehensive green IT transformation with carbon-neutral operations",
      results: ["Achieved carbon neutrality", "Improved ESG ratings", "Enhanced brand reputation"]
    },
    {
      company: "EcoManufacturing Inc",
      industry: "Manufacturing",
      challenge: "High e-waste generation and inefficient IT infrastructure",
      solution: "Circular IT economy implementation with sustainable infrastructure",
      results: ["70% reduction in e-waste", "50% improvement in IT efficiency"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Leaf className="w-20 h-20 text-green-400 mx-auto mb-8" />
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Green <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  IT Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto">
                Sustainable technology solutions that protect our planet while driving innovation. 
                From renewable energy to eco-friendly software, we're building a greener future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300"
                >
                  Go Green
                  <ArrowRight className="ml-2 w-5 h-5 inline" />
                </Link>
                <button className="px-8 py-4 bg-zion-slate-dark/50 border border-green-400/20 text-green-400 font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300">
                  <Play className="w-5 h-5 inline mr-2" />
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Green Services Grid */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Green Solutions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Sustainable technology services that benefit both business and environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {greenServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-green-400/20 rounded-xl p-8 hover:border-green-400/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-zion-slate-light">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Ideal For:</h4>
                    <ul className="space-y-1">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <li key={useCaseIndex} className="flex items-center gap-2 text-zion-slate-light">
                          <Target className="w-4 h-4 text-teal-400" />
                          <span className="text-sm">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-green-400 font-semibold">{service.pricing}</span>
                    <span className="text-zion-slate-light text-sm">Timeline: {service.timeline}</span>
                  </div>
                  <Link 
                    to="/contact"
                    className="text-green-400 hover:text-teal-400 transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4 inline" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Solutions Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sustainability <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive approaches to environmental responsibility and sustainability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sustainabilitySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-green-400/20 rounded-xl p-8 hover:border-green-400/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6">{solution.description}</p>
                
                <div>
                  <h4 className="font-semibold text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Green <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Sustainable technologies that power our environmental solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
                <p className="text-zion-slate-light">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Green IT Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Our Green IT Services</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Environmental responsibility meets technological innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: 'Environmental Impact', description: 'Measurable reduction in carbon footprint' },
              { icon: TrendingUp, title: 'Cost Savings', description: 'Lower energy costs and operational expenses' },
              { icon: Shield, title: 'Compliance Ready', description: 'Meet environmental regulations and standards' },
              { icon: Award, title: 'Industry Recognition', description: 'Certified green technology solutions' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
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