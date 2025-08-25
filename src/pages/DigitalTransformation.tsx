import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Rocket, 
  Target, 
  Users, 
  BarChart3, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Brain,
  Award,
  Shield,
  Cpu,
  Network,
  Code,
  Settings,
  TrendingUp,
  Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalTransformation = () => {
  const services = [
    {
      icon: Rocket,
      title: "Digital Strategy & Roadmap Development",
      description: "Comprehensive digital transformation strategy with detailed roadmap and implementation planning.",
      features: ["Digital assessment", "Strategy development", "Roadmap creation", "Change management"],
      price: "From $150,000",
      maturity: "Enterprise",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Customer Experience (CX) Transformation",
      description: "End-to-end customer experience transformation with journey mapping and digital touchpoints.",
      features: ["Customer journey mapping", "Touchpoint optimization", "Digital experience design", "Analytics integration"],
      price: "From $95,000",
      maturity: "Advanced",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Process Digitalization & Automation",
      description: "Comprehensive process digitalization with intelligent automation and workflow optimization.",
      features: ["Process analysis", "Digital workflow design", "Automation implementation", "Performance monitoring"],
      price: "From $75,000",
      maturity: "Mid-Size",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decision Making Platform",
      description: "Comprehensive data analytics platform for informed decision making and business intelligence.",
      features: ["Data integration", "Advanced analytics", "Real-time dashboards", "Predictive modeling"],
      price: "From $110,000",
      maturity: "Advanced",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Lab & Digital Hub",
      description: "Dedicated innovation lab for digital experimentation, prototyping, and innovation management.",
      features: ["Innovation lab setup", "Prototyping facilities", "Innovation management", "Collaboration tools"],
      price: "From $180,000",
      maturity: "Enterprise",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Change Management & Training",
      description: "Comprehensive change management programs with employee training and adoption strategies.",
      features: ["Change strategy", "Training programs", "Communication plans", "Adoption metrics"],
      price: "From $60,000",
      maturity: "Mid-Size",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Increased Efficiency",
      description: "Streamline operations and automate processes for maximum productivity and cost savings."
    },
    {
      icon: Award,
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with cutting-edge digital capabilities and innovation."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Expand your business reach with digital platforms and online presence."
    },
    {
      icon: Shield,
      title: "Future-Proof Business",
      description: "Build a resilient business model that adapts to changing market conditions."
    }
  ];

  const stats = [
    { label: "Digital Transformations", value: "80+", icon: Rocket },
    { label: "Processes Automated", value: "500+", icon: Code },
    { label: "Efficiency Gain", value: "45%", icon: TrendingUp },
    { label: "Client ROI", value: "3.2x", icon: Star }
  ];

  const methodologies = [
    { name: "Design Thinking", icon: "🧠", description: "Human-centered approach to problem solving and innovation" },
    { name: "Agile Methodology", icon: "🔄", description: "Iterative development with rapid feedback and adaptation" },
    { name: "Lean Six Sigma", icon: "⚡", description: "Process improvement and waste elimination strategies" },
    { name: "Change Management", icon: "📈", description: "Structured approach to organizational change and adoption" },
    { name: "Digital Maturity Assessment", icon: "📊", description: "Comprehensive evaluation of current digital capabilities" },
    { name: "Innovation Management", icon: "💡", description: "Systematic approach to fostering and managing innovation" }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Digital Transformation Services - Zion Tech Group"
        description="End-to-end business modernization through strategic digital transformation, process optimization, and innovation management."
        keywords="digital transformation, business modernization, process optimization, innovation management, Zion Tech Group"
        canonical="https://ziontechgroup.com/digital-transformation"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-95" />
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-purple opacity-60 blur-sm"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-3/4 right-1/4 w-6 h-6 rounded-full bg-zion-cyan opacity-40 blur-sm"
            animate={{ y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                Digital
              </span>
              <br />
              <span className="text-white">Transformation</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              End-to-end business modernization through strategic digital transformation, 
              process optimization, and innovation management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Digital Transformation Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive services designed to modernize your business and drive innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      service.maturity === 'Enterprise' ? 'bg-red-500/20 text-red-400' :
                      service.maturity === 'Advanced' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {service.maturity}
                    </span>
                  </div>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-cyan mb-4">{service.price}</div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodologies Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Methodologies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Proven frameworks and approaches for successful digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodologies.map((methodology, index) => (
              <motion.div
                key={methodology.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{methodology.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{methodology.name}</h3>
                <p className="text-zion-slate-light">{methodology.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Digital Transformation Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the benefits of strategic digital transformation and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-zion-slate-light">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Let's discuss how our digital transformation services can modernize your operations and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue-dark font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-zion-blue-dark transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;