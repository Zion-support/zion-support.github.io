import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Cpu, 
  Rocket, 
  Lock, 
  Globe, 
  Heart,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap,
  BarChart3
} from 'lucide-react';

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Brain,
      title: "AI & Analytics",
      description: "Machine learning, predictive analytics, and business intelligence solutions",
      href: "/services/ai-analytics",
      color: "from-blue-500 to-cyan-500",
      features: ["Custom ML Models", "Predictive Analytics", "Business Intelligence", "AI Automation"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions and threat protection",
      href: "/services/cybersecurity",
      color: "from-red-500 to-orange-500",
      features: ["Threat Protection", "Data Encryption", "24/7 Monitoring", "Incident Response"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Cloud migration, infrastructure automation, and DevOps practices",
      href: "/services/cloud-devops",
      color: "from-blue-500 to-indigo-500",
      features: ["Multi-Cloud Solutions", "CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration"]
    },
    {
      icon: Cpu,
      title: "IoT & Edge",
      description: "Internet of Things solutions and edge computing infrastructure",
      href: "/services/iot-edge",
      color: "from-green-500 to-emerald-500",
      features: ["IoT Platform", "Edge Computing", "Sensor Networks", "Real-time Analytics"]
    },
    {
      icon: Rocket,
      title: "Quantum Computing",
      description: "Next-generation quantum computing solutions and research",
      href: "/services/quantum-computing",
      color: "from-purple-500 to-pink-500",
      features: ["Quantum Algorithms", "Research & Development", "Quantum Security", "Optimization Solutions"]
    },
    {
      icon: Lock,
      title: "Blockchain",
      description: "Distributed ledger technology and smart contract solutions",
      href: "/services/blockchain",
      color: "from-indigo-500 to-purple-500",
      features: ["Smart Contracts", "DeFi Solutions", "Supply Chain", "Digital Identity"]
    },
    {
      icon: Globe,
      title: "Digital Twin",
      description: "Virtual representations of physical systems and processes",
      href: "/services/digital-twin",
      color: "from-teal-500 to-cyan-500",
      features: ["3D Modeling", "Real-time Simulation", "Predictive Maintenance", "Process Optimization"]
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Green technology solutions and environmental impact reduction",
      href: "/services/sustainability",
      color: "from-green-500 to-teal-500",
      features: ["Green IT", "Energy Efficiency", "Carbon Reduction", "Sustainable Solutions"]
    }
  ];

  const additionalServices = [
    {
      title: "IT Infrastructure",
      description: "Enterprise infrastructure design and management",
      href: "/services/infrastructure"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end business transformation consulting",
      href: "/services/digital-transformation"
    },
    {
      title: "Consulting",
      description: "Strategic technology consulting and advisory",
      href: "/services/consulting"
    },
    {
      title: "Onsite Support",
      description: "24/7 onsite technical support and maintenance",
      href: "/services/onsite-support"
    },
    {
      title: "5G Solutions",
      description: "Next-generation network infrastructure and applications",
      href: "/services/5g-solutions"
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with years of industry experience"
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Cutting-edge solutions using latest technologies"
    },
    {
      icon: BarChart3,
      title: "Proven Results",
      description: "Track record of successful implementations and ROI"
    },
    {
      icon: Star,
      title: "Customer Success",
      description: "Dedicated support and ongoing partnership"
    }
  ];

  return (
    <>
      <SEO 
        title="Our Services - Zion Tech Group"
        description="Comprehensive technology services including AI, cybersecurity, cloud computing, IoT, quantum computing, and more. Transform your business with Zion Tech Group."
        keywords="technology services, AI services, cybersecurity, cloud computing, IoT, quantum computing, blockchain, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
          <div className="container-responsive relative z-10">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Our Services
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Cutting-Edge Technology
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                From artificial intelligence to quantum computing, we provide comprehensive 
                technology solutions that drive innovation and growth for modern businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-neon px-8 py-4 text-lg"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/case-studies"
                  className="btn-outline px-8 py-4 text-lg"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="py-20 bg-zion-slate-dark">
          <div className="container-responsive">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Core Services
                </span>
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Comprehensive technology solutions designed to meet your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={service.href} className="block">
                    <div className="bg-gradient-to-br from-zion-slate to-zion-slate-dark p-8 rounded-2xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25 h-full">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-zion-slate-light mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-zion-slate-light text-sm">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center text-zion-cyan group-hover:text-white transition-colors duration-300">
                        <span className="font-semibold">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-zion-slate">
          <div className="container-responsive">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Additional{' '}
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Supporting services to complete your technology transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={service.href} className="block">
                    <div className="bg-gradient-to-br from-zion-slate-dark to-zion-slate p-6 rounded-xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-zion-slate-light text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-zion-slate-dark">
          <div className="container-responsive">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                We deliver exceptional value through expertise, innovation, and partnership
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
          <div className="container-responsive text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Let's discuss how our technology services can drive innovation and growth 
                for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-neon px-8 py-4 text-lg"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/case-studies"
                  className="btn-outline px-8 py-4 text-lg"
                >
                  View Success Stories
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}