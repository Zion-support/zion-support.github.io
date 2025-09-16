import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const ComprehensiveServices2027: React.FC = () => {
  const services = [
    {
      category: "AI & Machine Learning",
      services: [
        {
          name: "Advanced AI Consulting",
          description: "Strategic AI implementation and optimization for enterprise solutions",
          price: "From $50,000",
          features: ["AI Strategy Development", "Model Optimization", "Implementation Support", "Performance Monitoring"]
        },
        {
          name: "Custom AI Development",
          description: "Bespoke AI solutions tailored to your specific business needs",
          price: "From $100,000",
          features: ["Custom Model Training", "API Development", "Integration Services", "Ongoing Support"]
        },
        {
          name: "AI Automation Services",
          description: "Complete automation of business processes using advanced AI",
          price: "From $75,000",
          features: ["Process Analysis", "Automation Design", "Implementation", "Monitoring & Optimization"]
        }
      ]
    },
    {
      category: "Quantum Computing",
      services: [
        {
          name: "Quantum Algorithm Development",
          description: "Custom quantum algorithms for complex problem solving",
          price: "From $200,000",
          features: ["Algorithm Design", "Quantum Circuit Optimization", "Performance Testing", "Documentation"]
        },
        {
          name: "Quantum Computing Consulting",
          description: "Strategic guidance on quantum computing implementation",
          price: "From $150,000",
          features: ["Quantum Strategy", "Technology Assessment", "Implementation Planning", "Training"]
        },
        {
          name: "Quantum Cloud Services",
          description: "Access to quantum computing resources via cloud platform",
          price: "From $25,000/month",
          features: ["Quantum Processing Units", "API Access", "Monitoring Tools", "Technical Support"]
        }
      ]
    },
    {
      category: "Neural Interfaces",
      services: [
        {
          name: "Brain-Computer Interface Development",
          description: "Direct neural interface systems for enhanced human-computer interaction",
          price: "From $500,000",
          features: ["Neural Signal Processing", "Interface Design", "Safety Testing", "User Training"]
        },
        {
          name: "Neural Enhancement Solutions",
          description: "Cognitive enhancement technologies for improved performance",
          price: "From $300,000",
          features: ["Cognitive Assessment", "Enhancement Design", "Implementation", "Monitoring"]
        },
        {
          name: "Consciousness Transfer Technology",
          description: "Advanced consciousness preservation and transfer systems",
          price: "From $1,000,000",
          features: ["Consciousness Mapping", "Transfer Protocols", "Safety Systems", "Recovery Procedures"]
        }
      ]
    },
    {
      category: "Biotechnology",
      services: [
        {
          name: "Genetic Enhancement Services",
          description: "Advanced genetic modification for human enhancement",
          price: "From $400,000",
          features: ["Genetic Analysis", "Enhancement Design", "Implementation", "Monitoring"]
        },
        {
          name: "Synthetic Biology Solutions",
          description: "Custom biological systems for specific applications",
          price: "From $250,000",
          features: ["System Design", "Biological Engineering", "Testing", "Optimization"]
        },
        {
          name: "Longevity Research & Development",
          description: "Anti-aging and life extension technologies",
          price: "From $600,000",
          features: ["Research & Development", "Clinical Trials", "Implementation", "Monitoring"]
        }
      ]
    },
    {
      category: "Space Technology",
      services: [
        {
          name: "Space Colony Development",
          description: "Complete space habitat design and implementation",
          price: "From $2,000,000",
          features: ["Habitat Design", "Life Support Systems", "Construction", "Maintenance"]
        },
        {
          name: "Interplanetary Travel Solutions",
          description: "Advanced propulsion and life support for space travel",
          price: "From $1,500,000",
          features: ["Propulsion Systems", "Life Support", "Navigation", "Safety Systems"]
        },
        {
          name: "Asteroid Mining Operations",
          description: "Automated mining systems for space resource extraction",
          price: "From $800,000",
          features: ["Mining Technology", "Robotic Systems", "Processing", "Transport"]
        }
      ]
    },
    {
      category: "Holographic Technology",
      services: [
        {
          name: "Holographic Display Systems",
          description: "Advanced holographic projection and display technology",
          price: "From $300,000",
          features: ["Display Technology", "Content Creation", "Integration", "Support"]
        },
        {
          name: "Virtual Reality Integration",
          description: "Seamless integration of VR and holographic technologies",
          price: "From $200,000",
          features: ["VR Development", "Holographic Integration", "User Experience", "Testing"]
        },
        {
          name: "Augmented Reality Solutions",
          description: "Advanced AR systems with holographic overlays",
          price: "From $250,000",
          features: ["AR Development", "Holographic Overlays", "Spatial Computing", "User Interface"]
        }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "NeuroTech Solutions",
      role: "CEO",
      content: "Zion Tech Group's neural interface technology has revolutionized our research capabilities. The results have exceeded all expectations.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      company: "Quantum Dynamics",
      role: "CTO",
      content: "Their quantum computing solutions have given us a competitive edge that was previously impossible. Highly recommended.",
      rating: 5
    },
    {
      name: "Dr. Elena Volkov",
      company: "Space Exploration Corp",
      role: "Director of Research",
      content: "The space technology solutions provided by Zion Tech Group are truly groundbreaking. They've made the impossible possible.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Comprehensive Services 2027 - Zion Tech Group</title>
        <meta name="description" content="Complete range of advanced technology services including AI, quantum computing, neural interfaces, biotechnology, space technology, and holographic solutions." />
        <meta name="keywords" content="Technology Services 2027, AI Consulting, Quantum Computing, Neural Interfaces, Biotechnology, Space Technology" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🚀 COMPREHENSIVE SERVICES • 2027
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Comprehensive Services 2027
              </h1>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                Complete technology solutions for the future. From AI and quantum computing to space technology and neural interfaces.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Services by Category */}
        <div className="container mx-auto px-4 py-20">
          {services.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">{category.category}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                    <p className="text-blue-100 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <span className="text-blue-300 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-4">{service.price}</div>
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                        Get Quote
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                What our clients say about our revolutionary services
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-6">"{testimonial.content}"</p>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-blue-300">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our revolutionary services can transform your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Schedule Consultation →
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComprehensiveServices2027;