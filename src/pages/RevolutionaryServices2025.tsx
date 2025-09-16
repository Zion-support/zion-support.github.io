import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const RevolutionaryServices2025: React.FC = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      title: "AI-Powered Business Automation",
      icon: "🤖",
      color: "from-purple-600 to-pink-600",
      description: "Transform your business operations with intelligent automation that learns and adapts.",
      features: [
        "Intelligent Process Automation",
        "Predictive Analytics",
        "Natural Language Processing",
        "Autonomous Decision Making"
      ],
      benefits: [
        "95% Reduction in Manual Tasks",
        "300% Increase in Efficiency",
        "24/7 Autonomous Operations",
        "Real-time Business Insights"
      ],
      price: "Starting at $10,000/month"
    },
    {
      title: "Quantum Computing Solutions",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      description: "Leverage quantum computing power to solve complex problems at unprecedented speeds.",
      features: [
        "Quantum Algorithm Development",
        "Cryptographic Security",
        "Molecular Simulation",
        "Optimization Problems"
      ],
      benefits: [
        "1000x Faster Processing",
        "Unbreakable Security",
        "Complex Problem Solving",
        "Future-Proof Technology"
      ],
      price: "Starting at $25,000/month"
    },
    {
      title: "Neural Interface Development",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      description: "Develop direct brain-computer interfaces for enhanced human-machine interaction.",
      features: [
        "Brain-Computer Interface Design",
        "Neural Signal Processing",
        "Cognitive Enhancement",
        "Thought-Controlled Systems"
      ],
      benefits: [
        "Direct Mind-Machine Control",
        "Enhanced Cognitive Abilities",
        "Accessibility Solutions",
        "Revolutionary User Experience"
      ],
      price: "Starting at $50,000/month"
    },
    {
      title: "Metaverse Integration Platform",
      icon: "🌌",
      color: "from-orange-600 to-red-600",
      description: "Create immersive virtual experiences that seamlessly blend with physical reality.",
      features: [
        "Virtual World Creation",
        "Avatar Development",
        "Digital Economy Setup",
        "Cross-Reality Integration"
      ],
      benefits: [
        "Immersive User Experience",
        "Virtual Business Operations",
        "Global Remote Collaboration",
        "New Revenue Streams"
      ],
      price: "Starting at $15,000/month"
    },
    {
      title: "Biotech Innovation Hub",
      icon: "🔬",
      color: "from-indigo-600 to-purple-600",
      description: "Revolutionary biotechnology solutions for healthcare, agriculture, and sustainability.",
      features: [
        "Gene Editing Technology",
        "Synthetic Biology",
        "Precision Medicine",
        "Sustainable Agriculture"
      ],
      benefits: [
        "Personalized Healthcare",
        "Disease Prevention",
        "Sustainable Food Production",
        "Extended Human Lifespan"
      ],
      price: "Starting at $30,000/month"
    },
    {
      title: "Space Technology Solutions",
      icon: "🚀",
      color: "from-yellow-600 to-orange-600",
      description: "Advanced space technology for exploration, colonization, and resource utilization.",
      features: [
        "Spacecraft Design",
        "Mars Colonization Planning",
        "Asteroid Mining",
        "Satellite Networks"
      ],
      benefits: [
        "Space Exploration",
        "Resource Expansion",
        "Global Communication",
        "Future Colonization"
      ],
      price: "Starting at $100,000/month"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <Helmet>
        <title>Revolutionary Services 2025 - Next-Gen Solutions</title>
        <meta name="description" content="Discover our revolutionary technology services that are transforming industries and creating new possibilities in 2025." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY SERVICES • 2025
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            🌟 Revolutionary Services 2025
          </h1>
          <p className="text-2xl text-purple-200 max-w-4xl mx-auto mb-8">
            Experience the future of technology with our groundbreaking services that are reshaping industries and creating unprecedented value
          </p>
        </div>

        {/* Services Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedService === index
                    ? `bg-gradient-to-r ${service.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-gray-600'
                }`}
              >
                <span className="mr-2">{service.icon}</span>
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Service Display */}
        <div className={`bg-gradient-to-br ${services[selectedService].color}/30 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-16`}>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">{services[selectedService].icon}</span>
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">{services[selectedService].title}</h2>
                  <div className="text-xl text-white/80 font-semibold">{services[selectedService].price}</div>
                </div>
              </div>
              
              <p className="text-xl text-white/90 mb-8">
                {services[selectedService].description}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">✨ Key Features</h3>
                  <ul className="space-y-3">
                    {services[selectedService].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-white/90">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">📈 Benefits</h3>
                  <ul className="space-y-3">
                    {services[selectedService].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-white/90">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                  Get Started →
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                  Schedule Demo
                </button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Service Overview</h3>
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">{services[selectedService].icon}</div>
                  <div className="text-white font-semibold text-lg">Interactive Demo</div>
                  <div className="text-white/70 text-sm">Click to explore</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Launch Interactive Demo
              </button>
            </div>
          </div>
        </div>

        {/* Service Comparison */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🔍 Service Comparison</h2>
            <p className="text-xl text-purple-200">Compare our revolutionary services to find the perfect solution</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-6 text-white font-semibold">Service</th>
                  <th className="text-center p-6 text-white font-semibold">Starting Price</th>
                  <th className="text-center p-6 text-white font-semibold">Setup Time</th>
                  <th className="text-center p-6 text-white font-semibold">ROI Timeline</th>
                  <th className="text-center p-6 text-white font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="p-6">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{service.icon}</span>
                        <div>
                          <div className="text-white font-semibold">{service.title}</div>
                          <div className="text-white/70 text-sm">{service.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center p-6 text-white font-semibold">{service.price}</td>
                    <td className="text-center p-6 text-white">2-4 weeks</td>
                    <td className="text-center p-6 text-white">3-6 months</td>
                    <td className="text-center p-6">
                      <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                        Select
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🏆 Success Stories</h2>
            <p className="text-xl text-purple-200">See how our revolutionary services have transformed organizations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fortune 500 Company</h3>
              <p className="text-purple-200 mb-6">
                "AI-Powered Business Automation reduced our operational costs by 60% and increased productivity by 400%."
              </p>
              <div className="text-white font-semibold">- CEO, Global Corporation</div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-white mb-4">Research Institute</h3>
              <p className="text-cyan-200 mb-6">
                "Quantum Computing Solutions helped us solve molecular structures 1000x faster than traditional methods."
              </p>
              <div className="text-white font-semibold">- Director, Research Lab</div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-white mb-4">Medical Center</h3>
              <p className="text-emerald-200 mb-6">
                "Neural Interface Development revolutionized our patient care and accessibility solutions."
              </p>
              <div className="text-white font-semibold">- Chief Medical Officer</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Join the revolution and leverage cutting-edge technology to achieve unprecedented success and competitive advantage.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation →
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryServices2025;