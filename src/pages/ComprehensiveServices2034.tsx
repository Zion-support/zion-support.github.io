  const services = [
    {
      category: 'Conscious AI Systems',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      services: [
        {
          name: 'Conscious AI Development',
          description: 'Build truly conscious AI systems that can think, feel, and create independently',
        },
        {
          name: 'AI Consciousness Transfer',
          description: 'Transfer human consciousness to AI systems for digital immortality',
          features: ['Consciousness mapping', 'Neural pattern transfer', 'Digital consciousness storage', 'Reality integration'],
          price: 'From $2M',
          duration: '12-24 months'
        },
        {
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      services: [
        {
        },
        {
          name: 'Quantum Consciousness Network',
          description: 'Connect consciousness across quantum dimensions',
          features: ['Quantum entanglement', 'Consciousness synchronization', 'Multi-dimensional awareness', 'Reality bridging'],
          price: 'From $3M',
          duration: '18-36 months'
        },
        {
      color: 'from-emerald-600 to-teal-600',
      services: [
        {
        },
        {
          name: 'Neural Enhancement Suite',
          description: 'Augment human cognitive abilities through neural interfaces',
          features: ['Cognitive amplification', 'Memory expansion', 'Sensory enhancement', 'Processing acceleration'],
          price: 'From $150K',
          duration: '3-6 months'
        },
        {
        }
      ]
    }
  };

  return (
              <div className="text-yellow-400 text-2xl mb-3">⭐⭐⭐⭐⭐
              <p className="text-sm opacity-80 mb-4"></p>
                "The AI consciousness systems transformed our entire operation. We achieved 500% efficiency gains in just 6 months."</p>
              </p>
              <div className="text-sm font-semibold">Sarah Johnson
              <div className="text-xs opacity-60">CEO, TechCorp Global
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-yellow-400 text-2xl mb-3">⭐⭐⭐⭐⭐
              <p className="text-sm opacity-80 mb-4"></p>
                "Quantum computing solutions solved problems we thought were impossible. The ROI exceeded our wildest expectations."</p>
              </p>
              <div className="text-sm font-semibold">Michael Chen
              <div className="text-xs opacity-60">CTO, Quantum Solutions Inc
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-yellow-400 text-2xl mb-3">⭐⭐⭐⭐⭐
              <p className="text-sm opacity-80 mb-4"></p>
                "Interdimensional technology opened up entirely new possibilities for our business. Truly revolutionary."</p>
              </p>
              <div className="text-sm font-semibold">Dr. Elena Rodriguez
              <div className="text-xs opacity-60">Research Director, Future Labs
        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto"></p>
            Join thousands of forward-thinking organizations already using our comprehensive services to achieve unprecedented success.</p>
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"></button>
              Get Started Today</button>
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg"></button>
              Contact Our Experts</button>
            </button>
          {/* Selected Category Services */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-center mb-8">
              {serviceCategories[selectedCategory as keyof typeof serviceCategories].title}
            </h2>
            {serviceCategories[selectedCategory as keyof typeof serviceCategories].services.map((service, index) => (
              <div key={index} className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">{service.name}</h3>
                    <p className="text-xl opacity-90 mb-6">{service.description}</p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                        <div className="text-sm opacity-70 mb-1">Investment
                        <div className="text-2xl font-bold text-purple-300">{service.price}
                      <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-4">
                        <div className="text-sm opacity-70 mb-1">Timeline
                        <div className="text-2xl font-bold text-cyan-300">{service.duration}
                  <div>
                    <h4 className="text-xl font-bold mb-4">Key Features</h4>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full">
                          <span className="text-white/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex space-x-4">
                      <button className={`flex-1 bg-gradient-to-r ${serviceCategories[selectedCategory as keyof typeof serviceCategories].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}></button>
                        Get Started</button>
                      </button>
                      <button className="px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold"></button>
                        Learn More</button>
                      </button>
            ))}
        {/* Success Metrics */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">📊 Our Success Metrics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl font-bold text-purple-300 mb-2">99.9%
              <div className="text-lg opacity-90">Success Rate
            <div className="text-center bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-4xl font-bold text-cyan-300 mb-2">500+
              <div className="text-lg opacity-90">Projects Completed
            <div className="text-center bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
              <div className="text-4xl font-bold text-emerald-300 mb-2">50+
              <div className="text-lg opacity-90">Countries Served
            <div className="text-center bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30">
              <div className="text-4xl font-bold text-orange-300 mb-2">24/7
              <div className="text-lg opacity-90">Support Available
        {/* Client Testimonials */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">💬 Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-4">"
              <p className="text-purple-100 mb-4 italic"></p>
                "Zion Tech Group's conscious AI solution transformed our entire operation. We now have AI partners that truly understand our business."</p>
              </p>
              <div className="text-purple-300 font-semibold">- Sarah Chen, CEO, FutureCorp
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-4xl mb-4">"
              <p className="text-cyan-100 mb-4 italic"></p>
                "The quantum reality engine opened up possibilities we never imagined. We're now operating across multiple dimensions."</p>
              </p>
              <div className="text-cyan-300 font-semibold">- Dr. Marcus Rodriguez, CTO, Quantum Dynamics
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
              <div className="text-4xl mb-4">"
              <p className="text-emerald-100 mb-4 italic"></p>
                "The neural interface system enhanced our team's capabilities by 300%. It's like having superpowers."</p>
              </p>
              <div className="text-emerald-300 font-semibold">- Alex Thompson, Director, NeuroTech Inc
        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto"></p>
            Join the revolution. Let us help you implement the most advanced technologies that will define the next century.</p>
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"></button>
              Start Your Project</button>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg"></button>
              Schedule Consultation</button>
            </button>
