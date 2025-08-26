import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Building2, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Cpu, 
  Rocket,
  TrafficCone,
  Lightbulb,
  Lock,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Car,
  Wifi,
  Leaf,
  Database,
  Camera,
  MapPin
} from 'lucide-react';

export default function AISmartCitySolutions() {
  const features = [
    {
      icon: Brain,
      title: "AI Traffic Management",
      description: "Intelligent traffic flow optimization using real-time AI analysis and predictive modeling",
      benefits: ["30% reduction in congestion", "Real-time optimization", "Predictive analytics", "Emergency response"]
    },
    {
      icon: Building2,
      title: "Smart Building Management",
      description: "AI-powered building automation for energy efficiency and occupant comfort",
      benefits: ["40% energy savings", "Automated climate control", "Predictive maintenance", "Occupant analytics"]
    },
    {
      icon: Shield,
      title: "Public Safety AI",
      description: "Advanced surveillance and threat detection using computer vision and AI",
      benefits: ["Real-time monitoring", "Threat detection", "Emergency response", "Crime prevention"]
    },
    {
      icon: Zap,
      title: "Smart Grid Management",
      description: "Intelligent energy distribution and demand response optimization",
      benefits: ["Load balancing", "Renewable integration", "Outage prevention", "Cost optimization"]
    }
  ];

  const solutions = [
    {
      icon: TrafficCone,
      title: "Intelligent Transportation",
      description: "AI-powered traffic management and public transit optimization",
      price: "$15,000/mo",
      features: ["Traffic flow optimization", "Public transit routing", "Parking management", "Emergency response"]
    },
    {
      icon: Lightbulb,
      title: "Smart Energy Systems",
      description: "Intelligent energy management and renewable integration",
      price: "$20,000/mo",
      features: ["Smart grid management", "Renewable energy", "Demand response", "Energy storage"]
    },
    {
      icon: Camera,
      title: "Public Safety & Security",
      description: "AI-powered surveillance and emergency response systems",
      price: "$25,000/mo",
      features: ["Video analytics", "Threat detection", "Emergency response", "Crime prevention"]
    },
    {
      icon: Leaf,
      title: "Environmental Monitoring",
      description: "Real-time environmental data collection and analysis",
      price: "$18,000/mo",
      features: ["Air quality monitoring", "Noise pollution", "Waste management", "Green infrastructure"]
    }
  ];

  const pricing = [
    {
      name: "Municipal",
      price: "$25,000",
      period: "/month",
      description: "For small cities and towns",
      features: [
        "Basic smart city platform",
        "Traffic management",
        "Energy monitoring",
        "Public safety basics",
        "Email support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Metropolitan",
      price: "$75,000",
      period: "/month",
      description: "For medium-sized cities",
      features: [
        "Full smart city suite",
        "Advanced AI analytics",
        "Custom integrations",
        "Priority support",
        "Training & certification",
        "24/7 monitoring"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Megacity",
      price: "$200,000",
      period: "/month",
      description: "For large metropolitan areas",
      features: [
        "Enterprise-grade platform",
        "Custom AI development",
        "Dedicated support team",
        "White-label solutions",
        "Advanced security",
        "API access"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Mayor Sarah Williams",
      role: "City of Innovation Bay",
      content: "ZION's Smart City Solutions have transformed our urban infrastructure. Traffic congestion is down 30% and energy costs have decreased by 25%.",
      rating: 5,
      company: "Innovation Bay"
    },
    {
      name: "Director Michael Chen",
      role: "Urban Development, Metro City",
      content: "The AI-powered traffic management system has revolutionized our transportation network. Citizens are experiencing faster commutes and better public transit.",
      rating: 5,
      company: "Metro City"
    },
    {
      name: "Chief Technology Officer",
      role: "Smart City Initiative, TechTown",
      content: "ZION's platform has made our city truly intelligent. From energy management to public safety, every aspect of urban life has improved.",
      rating: 5,
      company: "TechTown"
    }
  ];

  const stats = [
    { value: "30%", label: "Traffic Reduction", description: "AI-powered optimization" },
    { value: "40%", label: "Energy Savings", description: "Smart building management" },
    { value: "25%", label: "Cost Reduction", description: "Operational efficiency" },
    { value: "100+", label: "Cities Served", description: "Global smart city leader" }
  ];

  const useCases = [
    {
      icon: Car,
      title: "Transportation",
      description: "Traffic optimization, public transit, parking management, and emergency response"
    },
    {
      icon: Building2,
      title: "Infrastructure",
      description: "Smart buildings, utilities management, and predictive maintenance"
    },
    {
      icon: Shield,
      title: "Public Safety",
      description: "Surveillance, threat detection, emergency response, and crime prevention"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Environmental monitoring, waste management, and green infrastructure"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-zion-cyan/30 to-zion-blue/30 rounded-full blur-2xl animate-pulse delay-2000"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 px-4 py-2 rounded-full border border-zion-cyan/30 mb-6">
              <Building2 className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">AI Smart City Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
              AI Smart City Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Transform urban living with AI-powered smart city solutions. Optimize traffic, manage energy, 
              enhance public safety, and create sustainable, intelligent communities for the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-zion-cyan/50 text-zion-cyan px-8 py-4 rounded-xl font-semibold text-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light text-sm">{stat.label}</div>
                  <div className="text-zion-slate-light text-xs mt-1">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Revolutionary Smart City AI
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the future of urban living with our cutting-edge AI capabilities designed for modern cities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate/50 to-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-zion-cyan">
                      <CheckCircle className="w-4 h-4" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Smart City Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive AI solutions for every aspect of modern urban infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate/50 to-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-zion-slate-light text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Specialized Smart City Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored AI solutions for different urban infrastructure domains and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate/50 to-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-zion-slate-light mb-4">{solution.description}</p>
                    
                    <div className="text-2xl font-bold text-zion-cyan mb-4">{solution.price}</div>
                    
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Smart City-Focused Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the plan that fits your city's needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-zion-slate/50 to-zion-slate-dark/50 backdrop-blur-xl border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan scale-105' 
                    : 'border-zion-cyan/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg'
                      : 'border-2 border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Trusted by City Leaders
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              See what urban planners and city officials say about our AI Smart City Solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate/50 to-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-zion-slate-light mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-zion-cyan">{testimonial.role}</div>
                    <div className="text-xs text-zion-slate-light">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join the smart city revolution. Start your free trial today and experience the future of urban technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-zion-cyan/50 text-zion-cyan px-8 py-4 rounded-xl font-semibold text-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>

            <div className="mt-8 text-zion-slate-light">
              <p>Questions? Contact our smart city team at <span className="text-zion-cyan">kleber@ziontechgroup.com</span></p>
              <p>Or call us at <span className="text-zion-cyan">+1 302 464 0950</span></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}