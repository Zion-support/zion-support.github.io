import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Building, 
  Factory, 
  Car, 
  Heart, 
  GraduationCap, 
  ShoppingCart, 
  Plane, 
  Home,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap,
  BarChart3,
  Shield,
  Cloud,
  Brain
} from 'lucide-react';

export default function SolutionsPage() {
  const industrySolutions = [
    {
      icon: Building,
      title: "Enterprise Solutions",
      description: "Comprehensive technology solutions for large enterprises",
      color: "from-blue-500 to-cyan-500",
      solutions: ["Digital Transformation", "Enterprise AI", "Cloud Migration", "Cybersecurity"]
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Industry 4.0 solutions for smart manufacturing",
      color: "from-green-500 to-emerald-500",
      solutions: ["IoT Integration", "Predictive Maintenance", "Quality Control", "Supply Chain Optimization"]
    },
    {
      icon: Car,
      title: "Automotive",
      description: "Connected vehicle and mobility solutions",
      color: "from-red-500 to-orange-500",
      solutions: ["Connected Cars", "Autonomous Driving", "Fleet Management", "EV Infrastructure"]
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Digital health and medical technology solutions",
      color: "from-pink-500 to-purple-500",
      solutions: ["Telemedicine", "AI Diagnostics", "Patient Management", "Medical IoT"]
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "EdTech solutions for modern learning",
      color: "from-indigo-500 to-purple-500",
      solutions: ["Learning Management", "Virtual Classrooms", "Student Analytics", "AI Tutoring"]
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Digital commerce and retail technology",
      color: "from-yellow-500 to-orange-500",
      solutions: ["E-commerce Platforms", "Inventory Management", "Customer Analytics", "Omnichannel Solutions"]
    }
  ];

  const technologySolutions = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions for business automation and insights",
      features: ["Custom AI Models", "Predictive Analytics", "Natural Language Processing", "Computer Vision"]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description: "Scalable cloud solutions and infrastructure management",
      features: ["Multi-Cloud Strategy", "DevOps Automation", "Container Orchestration", "Serverless Architecture"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions for digital protection",
      features: ["Threat Detection", "Data Protection", "Compliance Management", "Incident Response"]
    },
    {
      icon: Zap,
      title: "IoT & Edge Computing",
      description: "Connected devices and edge computing solutions",
      features: ["Sensor Networks", "Real-time Analytics", "Edge AI", "Device Management"]
    }
  ];

  const useCaseSolutions = [
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting and implementation",
      benefits: ["Process Automation", "Customer Experience", "Operational Efficiency", "Innovation Culture"]
    },
    {
      title: "Data Analytics",
      description: "Advanced analytics and business intelligence solutions",
      benefits: ["Real-time Insights", "Predictive Modeling", "Performance Tracking", "Decision Support"]
    },
    {
      title: "Automation",
      description: "Intelligent automation for business processes",
      benefits: ["Cost Reduction", "Error Elimination", "Scalability", "24/7 Operations"]
    }
  ];

  return (
    <>
      <SEO 
        title="Technology Solutions - Zion Tech Group"
        description="Industry-specific technology solutions for manufacturing, healthcare, automotive, education, and more. Transform your business with Zion Tech Group."
        keywords="technology solutions, industry solutions, digital transformation, AI solutions, cloud solutions, Zion Tech Group"
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
                <Star className="w-4 h-4 mr-2" />
                Technology Solutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Industry-Specific{' '}
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Technology Solutions
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Tailored technology solutions designed for your industry and business needs. 
                From AI to IoT, we help you stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-neon px-8 py-4 text-lg"
                >
                  Get Custom Solution
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

        {/* Industry Solutions */}
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
                Industry{' '}
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Solutions
                </span>
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Specialized technology solutions designed for your specific industry challenges
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-zion-slate to-zion-slate-dark p-8 rounded-2xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {solution.solutions.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-zion-slate-light text-sm">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="inline-flex items-center text-zion-cyan hover:text-white transition-colors duration-300"
                    >
                      <span className="font-semibold">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Solutions */}
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
                Technology{' '}
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Solutions
                </span>
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Cutting-edge technology solutions to power your digital transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologySolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-zion-slate-dark to-zion-slate p-8 rounded-2xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                          {solution.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-zion-slate-light text-sm">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Case Solutions */}
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
                Use Case{' '}
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Solutions
                </span>
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Proven solutions for common business challenges and opportunities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {useCaseSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-zion-slate to-zion-slate-dark p-8 rounded-2xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <ul className="space-y-3 mb-6">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-zion-slate-light">
                          <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group-hover:scale-105"
                    >
                      Get Solution
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
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
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Our team of experts can design and implement custom technology solutions 
                tailored to your specific business requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-neon px-8 py-4 text-lg"
                >
                  Start Custom Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="btn-outline px-8 py-4 text-lg"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}