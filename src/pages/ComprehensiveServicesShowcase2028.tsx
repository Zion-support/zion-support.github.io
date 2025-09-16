import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const ComprehensiveServicesShowcase2028: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "AI-Powered Business Transformation",
      description: "Complete business transformation using advanced AI systems that adapt and evolve with your organization",
      icon: "🤖",
      category: "Artificial Intelligence",
      features: [
        "Autonomous Decision Making",
        "Predictive Analytics",
        "Process Optimization",
        "Customer Experience Enhancement",
        "Revenue Growth Automation"
      ],
      pricing: "Starting at $50,000/month",
      timeline: "3-6 months implementation"
    },
    {
      id: 2,
      title: "Quantum Computing Solutions",
      description: "Leverage quantum computing power for complex problem solving and optimization challenges",
      icon: "⚡",
      category: "Quantum Technology",
      features: [
        "Quantum Algorithm Development",
        "Optimization Problems Solving",
        "Cryptography Enhancement",
        "Drug Discovery Acceleration",
        "Financial Modeling"
      ],
      pricing: "Custom pricing based on complexity",
      timeline: "6-12 months development"
    },
    {
      id: 3,
      title: "Neural Interface Development",
      description: "Direct brain-computer interface solutions for enhanced human-machine interaction",
      icon: "🧠",
      category: "Neural Technology",
      features: [
        "Brain-Computer Interface Design",
        "Neural Signal Processing",
        "Consciousness Transfer Technology",
        "Enhanced Cognitive Abilities",
        "Medical Applications"
      ],
      pricing: "Starting at $100,000/project",
      timeline: "12-18 months development"
    },
    {
      id: 4,
      title: "Holographic Reality Systems",
      description: "Complete holographic environment creation for immersive experiences and virtual collaboration",
      icon: "🌟",
      category: "Holographic Technology",
      features: [
        "3D Holographic Displays",
        "Virtual Meeting Spaces",
        "Immersive Training Environments",
        "Entertainment Applications",
        "Medical Visualization"
      ],
      pricing: "Starting at $75,000/system",
      timeline: "6-9 months implementation"
    },
    {
      id: 5,
      title: "Synthetic Biology Solutions",
      description: "Advanced biotechnology services for creating and managing synthetic life forms",
      icon: "🧬",
      category: "Biotechnology",
      features: [
        "Synthetic Organism Design",
        "DNA Programming",
        "Biological Computing",
        "Medical Applications",
        "Environmental Solutions"
      ],
      pricing: "Starting at $200,000/project",
      timeline: "18-24 months development"
    },
    {
      id: 6,
      title: "Space Technology Integration",
      description: "Space-based technology solutions for communication, exploration, and resource management",
      icon: "🚀",
      category: "Space Technology",
      features: [
        "Satellite Communication Systems",
        "Space Resource Mining",
        "Interplanetary Communication",
        "Space Tourism Technology",
        "Planetary Colonization"
      ],
      pricing: "Custom pricing based on scope",
      timeline: "24-36 months development"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "Revolutionary medical technologies and treatments",
      icon: "🏥",
      technologies: ["AI Diagnostics", "Neural Interfaces", "Synthetic Biology", "Holographic Surgery"]
    },
    {
      name: "Finance",
      description: "Advanced financial systems and quantum computing solutions",
      icon: "💰",
      technologies: ["Quantum Cryptography", "AI Trading", "Blockchain Integration", "Risk Analysis"]
    },
    {
      name: "Education",
      description: "Immersive learning experiences and AI-powered education",
      icon: "🎓",
      technologies: ["Holographic Classrooms", "AI Tutors", "Neural Learning", "Virtual Reality"]
    },
    {
      name: "Manufacturing",
      description: "Automated production and advanced manufacturing systems",
      icon: "🏭",
      technologies: ["AI Automation", "Quantum Optimization", "Neural Robotics", "Predictive Maintenance"]
    },
    {
      name: "Entertainment",
      description: "Next-generation entertainment and immersive experiences",
      icon: "🎮",
      technologies: ["Holographic Gaming", "Virtual Reality", "AI Content Creation", "Neural Interfaces"]
    },
    {
      name: "Space Exploration",
      description: "Space technology and interplanetary solutions",
      icon: "🌌",
      technologies: ["Space Communication", "Resource Mining", "Colonization Tech", "Interplanetary Travel"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      position: "CEO, NeuroTech Solutions",
      company: "NeuroTech Solutions",
      quote: "Zion Tech Group's neural interface technology has revolutionized our medical research capabilities. The results have exceeded all our expectations.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      position: "CTO, Quantum Finance Corp",
      company: "Quantum Finance Corp",
      quote: "Their quantum computing solutions have given us a massive competitive advantage in financial modeling and risk analysis.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      position: "Research Director, BioFuture Labs",
      company: "BioFuture Labs",
      quote: "The synthetic biology solutions have opened up entirely new possibilities for medical research and treatment development.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Comprehensive Services Showcase 2028 - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive range of advanced technology services for 2028 including AI transformation, quantum computing, neural interfaces, and space technology." />
        <meta name="keywords" content="AI Services, Quantum Computing, Neural Interfaces, Holographic Technology, Synthetic Biology, Space Technology" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🚀 COMPREHENSIVE SERVICES • 2028
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Advanced Technology Services
              </h1>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                Transform your business with our comprehensive suite of cutting-edge technology services. 
                From AI transformation to space technology, we provide end-to-end solutions for the future.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4 text-center">{service.icon}</div>
                <div className="text-sm text-blue-300 mb-2">{service.category}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
                <p className="text-blue-100 mb-6 text-center">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-blue-200">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <div className="text-lg font-bold text-cyan-300 mb-1">{service.pricing}</div>
                  <div className="text-sm text-blue-300">{service.timeline}</div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started →
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Our technologies are transforming industries across the globe
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                  <p className="text-blue-200 mb-4">{industry.description}</p>
                  <div className="space-y-2">
                    {industry.technologies.map((tech, idx) => (
                      <div key={idx} className="text-sm text-white/80">
                        • {tech}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Real feedback from companies that have transformed with our technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-white/90 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-blue-300">{testimonial.position}</div>
                  <div className="text-blue-400">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Join thousands of companies that have already transformed their operations with our advanced technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                  Schedule Consultation →
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComprehensiveServicesShowcase2028;