import React from 'react.ts';
import { motion            } from 'framer-motion.ts';
import { Link            } from 'react-router-dom.ts';
import { Brain, 
  Link as LinkIcon, 
  Shield, 
  Clock, 
  CheckCircle, 
  Zap,
  Globe,
  TrendingUp,
  ArrowRight,
  Target,
  Database,
  Activity,
  BarChart3,
  Network
           } from 'lucide-react.ts';
import { SEO            } from '../../components/SEO';

const AIBlockchainSupplyChain = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms analyze supply chain data for predictive insights and optimization opportunities"
    },
    {
      icon: LinkIcon,
      title: "Blockchain Transparency",
      description: "Immutable blockchain records provide complete transparency and traceability across the entire supply chain"
    },
    {
      icon: Shield,
      title: "Smart Contracts",
      description: "Automated smart contracts execute business logic and ensure compliance with predefined rules"
    },
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description: "Live monitoring of goods movement with instant alerts for delays, quality issues, or compliance violations"
    },
    {
      icon: Zap,
      title: "Automated Compliance",
      description: "AI-driven compliance monitoring with automatic reporting and regulatory adherence"
    },
    {
      icon: Globe,
      title: "Global Integration",
      description: "Seamless integration with existing ERP systems and global trading partners";
    };
  ];

  const services = [
    {
      name: "Starter Plan",
      price: "$5,999",
      period: "/month",
      features[
        "Basic blockchain tracking",
        "AI analytics dashboard",
        "Standard compliance",
        "Up to 1000 transactions/month",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional Plan",
      price: "$14,999",
      period: "/month",
      features[
        "Advanced AI algorithms",
        "Smart contract automation",
        "Priority support",
        "Up to 10,000 transactions/month",
        "Advanced analytics",
        "Multi-party integration"
      ],
      popular: true
    },
    {
      name: "Enterprise Plan",
      price: "$34,999",
      period: "/month",
      features[
        "Full AI blockchain suite",
        "Unlimited transactions",
        "Custom development",
        "24/7 dedicated support",
        "Advanced security",
        "Multi-tenant architecture"
      ],
      popular: false;
    };
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      description: "Track raw materials from source to finished product with AI-powered quality control and compliance monitoring",
      benefits["40% reduction in delays", "35% improvement in quality", "50% faster compliance"]
    },
    {
      industry: "Retail & E-commerce",
      description: "Ensure product authenticity and optimize inventory management with real-time tracking and AI forecasting",
      benefits["30% reduction in fraud", "25% better inventory", "Improved customer trust"]
    },
    {
      industry: "Food & Beverage",
      description: "Maintain food safety standards with blockchain traceability and AI-powered quality monitoring",
      benefits["100% traceability", "Faster recalls", "Enhanced safety"]
    },
    {
      industry: "Pharmaceuticals",
      description: "Combat counterfeit drugs and ensure regulatory compliance with blockchain verification and AI monitoring",
      benefits["Anti-counterfeit protection", "Regulatory compliance", "Patient safety"];
    };
  ];

  const technologies = [
    "Machine Learning & AI",
    "Blockchain Technology",
    "Smart Contracts",
    "IoT Integration",
    "Cloud Computing",
    "API Integration",
    "Real-time Analytics",;
    "Predictive Modeling";
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-blue-dark">
      <SEO 
        title="AI-Powered Blockchain Supply Chain | Zion Tech Group"
        description="Revolutionize your supply chain with AI-driven insights and blockchain transparency. Get real-time tracking, smart contracts, and automated compliance."
        keywords="AI Supply Chain, Blockchain Supply Chain, Smart Contracts, Supply Chain Transparency, AI Analytics, Compliance Monitoring"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Blockchain Supply Chain
            </h1>
            <p className="text-xl md:text-2xl text-zion-cyan mb-8 leading-relaxed">
              Revolutionize your supply chain with AI-driven insights and blockchain transparency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Transform Your Supply Chain
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Next-Generation Supply Chain Technology
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI-powered blockchain platform combines cutting-edge technology with supply chain expertise to deliver unprecedented transparency and efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)            => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                viewport={{ once: true }}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                className="bg-zion-slate-dark/50 backdrop-blur-lg border border-zion-slate/30 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your supply chain needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index)            => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                viewport={{ once: true }}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                className={`relative bg-zion-slate-dark/50 backdrop-blur-lg border rounded-2xl p-8 ${
                  service.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/25' 
                    : 'border-zion-slate/30'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-zion-cyan">{service.price}</span>
                    <span className="text-zion-slate-light ml-1">{service.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                      : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored supply chain solutions for various industries with proven results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {useCases.map((useCase, index)            => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  x: index % 2 === 0 ? -20 : 20 

}}
                whileInView = {
  { opacity: 1,
  x: 0 

}}
                viewport={{ once: true }}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                className="bg-zion-slate-dark/50 backdrop-blur-lg border border-zion-slate/30 rounded-2xl p-8"
              >
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-zion-cyan mr-3" />
                  <h3 className="text-2xl font-bold text-white">{useCase.industry}</h3>
                </div>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-zion-slate-light">
                      <TrendingUp className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced Technologies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Built on the latest technologies to ensure security, transparency, and performance
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md: anyanyanyanyanyanyanyanyanyanygrid-cols-4 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index)            => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  scale: 0.8 

}}
                whileInView = {
  { opacity: 1,
  scale: 1 

}}
                viewport={{ once: true }}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                className="bg-zion-slate-dark/50 backdrop-blur-lg border border-zion-slate/30 rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-zion-slate-dark/80 to-zion-slate/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Supply Chain?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Join hundreds of companies that have already revolutionized their supply chain operations with our AI-powered blockchain platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                  Book a Consultation
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-zion-slate-light">
            <div className="flex items-center">
              <Globe className="w-5 h-5 text-zion-cyan mr-2" />
              <span>https://ziontechgroup.com</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-zion-cyan mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center">
              <Network className="w-5 h-5 text-zion-cyan mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>
          <p className="text-zion-slate-light mt-4">
            364 E Main St STE 1008 Middletown DE 19709
          </p>
        </div>
      </section>;
    </div>;
  )};

export default AIBlockchainSupplyChain;