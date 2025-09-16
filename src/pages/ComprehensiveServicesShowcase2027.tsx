import React from 'react';
import { Helmet } from 'react-helmet-async';

const ComprehensiveServicesShowcase2027: React.FC = () => {
  const services = [
    {
      category: "AI & Machine Learning",
      icon: "🧠",
      services: [
        {
          name: "Autonomous AI Agents",
          description: "Self-managing AI systems that operate independently and make decisions in real-time",
          features: ["Real-time decision making", "Self-learning algorithms", "Autonomous task execution"],
          price: "Starting at $50,000/month"
        },
        {
          name: "Generative AI 3.0",
          description: "Next-generation AI that creates content, code, and solutions with human-like creativity",
          features: ["Content generation", "Code creation", "Creative problem solving"],
          price: "Starting at $25,000/month"
        },
        {
          name: "Edge AI Computing",
          description: "AI processing at the edge for ultra-low latency and real-time insights",
          features: ["Ultra-low latency", "Real-time processing", "Offline capabilities"],
          price: "Starting at $30,000/month"
        }
      ]
    },
    {
      category: "Quantum Computing",
      icon: "⚡",
      services: [
        {
          name: "Quantum Machine Learning",
          description: "Leverage quantum computing for exponentially faster machine learning algorithms",
          features: ["Exponential speedup", "Quantum algorithms", "Advanced optimization"],
          price: "Starting at $100,000/month"
        },
        {
          name: "Quantum Cryptography",
          description: "Unbreakable encryption using quantum principles for ultimate security",
          features: ["Unbreakable encryption", "Quantum key distribution", "Future-proof security"],
          price: "Starting at $75,000/month"
        },
        {
          name: "Molecular Simulation",
          description: "Simulate complex molecular interactions for drug discovery and materials science",
          features: ["Drug discovery", "Materials science", "Complex simulations"],
          price: "Starting at $150,000/month"
        }
      ]
    },
    {
      category: "Neural Interfaces",
      icon: "🧬",
      services: [
        {
          name: "Brain-Computer Interfaces",
          description: "Direct neural interfaces for thought-controlled computing and communication",
          features: ["Thought control", "Neural communication", "Mind-machine integration"],
          price: "Starting at $200,000/month"
        },
        {
          name: "Neural Feedback Systems",
          description: "Real-time neural feedback for enhanced cognitive performance and learning",
          features: ["Cognitive enhancement", "Learning acceleration", "Performance optimization"],
          price: "Starting at $80,000/month"
        },
        {
          name: "Non-Invasive BCI",
          description: "Advanced non-invasive brain-computer interfaces for everyday use",
          features: ["Non-invasive technology", "Everyday applications", "User-friendly interface"],
          price: "Starting at $40,000/month"
        }
      ]
    },
    {
      category: "Blockchain & Web3",
      icon: "🔗",
      services: [
        {
          name: "Quantum-Safe Blockchain",
          description: "Future-proof blockchain technology resistant to quantum attacks",
          features: ["Quantum resistance", "Enhanced security", "Future-proof technology"],
          price: "Starting at $60,000/month"
        },
        {
          name: "Cross-Chain Interoperability",
          description: "Seamless integration between different blockchain networks",
          features: ["Multi-chain support", "Seamless transfers", "Unified ecosystem"],
          price: "Starting at $45,000/month"
        },
        {
          name: "NFT 3.0 Technology",
          description: "Next-generation NFTs with advanced functionality and utility",
          features: ["Advanced utility", "Dynamic NFTs", "Enhanced ownership"],
          price: "Starting at $35,000/month"
        }
      ]
    },
    {
      category: "Cloud & Infrastructure",
      icon: "☁️",
      services: [
        {
          name: "Edge Computing Solutions",
          description: "Distributed computing infrastructure for ultra-low latency applications",
          features: ["Ultra-low latency", "Distributed processing", "Real-time applications"],
          price: "Starting at $40,000/month"
        },
        {
          name: "Serverless Architecture",
          description: "Fully managed serverless solutions for scalable applications",
          features: ["Auto-scaling", "Cost optimization", "Zero maintenance"],
          price: "Starting at $20,000/month"
        },
        {
          name: "Zero-Trust Security",
          description: "Comprehensive security framework with zero-trust principles",
          features: ["Zero-trust architecture", "Continuous verification", "Advanced threat protection"],
          price: "Starting at $55,000/month"
        }
      ]
    },
    {
      category: "Cybersecurity",
      icon: "🛡️",
      services: [
        {
          name: "AI-Powered Security",
          description: "Advanced security solutions powered by artificial intelligence",
          features: ["AI threat detection", "Automated response", "Predictive security"],
          price: "Starting at $70,000/month"
        },
        {
          name: "Behavioral Analytics",
          description: "Advanced behavioral analysis for detecting anomalies and threats",
          features: ["Anomaly detection", "Behavioral patterns", "Threat prediction"],
          price: "Starting at $50,000/month"
        },
        {
          name: "Real-Time Threat Detection",
          description: "Instant threat detection and response systems",
          features: ["Real-time monitoring", "Instant response", "Continuous protection"],
          price: "Starting at $65,000/month"
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Comprehensive Services Showcase 2027 | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive suite of revolutionary technology services for 2027, including AI, quantum computing, neural interfaces, and more." />
        <meta name="keywords" content="technology services 2027, AI services, quantum computing, neural interfaces, blockchain, cloud computing, cybersecurity" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse">
              🚀 COMPREHENSIVE SERVICES • 2027
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Technology Services
            </h1>
            <p className="text-2xl md:text-3xl opacity-90 max-w-4xl mx-auto mb-12">
              Transform your business with our comprehensive suite of cutting-edge technology solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                View All Services
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto px-4 py-20">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <div className="text-6xl mb-4">{category.icon}</div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{category.category}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                    <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-purple-600">{service.price}</div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                        Learn More
                      </button>
                      <button className="flex-1 border-2 border-purple-600 text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold">
                        Contact Sales
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join thousands of forward-thinking companies already using our revolutionary technology solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-12 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600">Successful Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">$2M+</div>
                <div className="text-gray-600">Cost Savings Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComprehensiveServicesShowcase2027;