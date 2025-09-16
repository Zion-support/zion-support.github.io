import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NeuralInterfaceTechnology2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('mind-control');
  const [isConnected, setIsConnected] = useState(false);

  const neuralTechnologies = [
    {
      id: 'non-invasive-bci',
      title: 'Non-Invasive Brain-Computer Interface',
      description: 'Direct neural communication without surgical implants',
      features: [
        'EEG-based neural signal processing',
        'Real-time thought translation',
        'Wireless connectivity',
        'Zero surgical risk'
      ],
      applications: ['Gaming', 'Accessibility', 'Medical Rehabilitation', 'Communication'],
      accuracy: '95%',
      status: 'Available Now'
    },
    {
      id: 'invasive-bci',
      title: 'Invasive Neural Implants',
      description: 'High-precision neural interfaces with surgical implants',
      features: [
        'Single-neuron resolution',
        'Bidirectional communication',
        'Long-term stability',
        'Advanced signal processing'
      ],
      applications: ['Medical Treatment', 'Research', 'Military', 'Advanced Control'],
      accuracy: '99.9%',
      status: 'Clinical Trials'
    },
    {
      id: 'neural-prosthetics',
      title: 'Neural Prosthetic Limbs',
      description: 'Thought-controlled artificial limbs with natural sensation',
      features: [
        'Thought-based movement control',
        'Sensory feedback',
        'Natural movement patterns',
        'Durability and comfort'
      ],
      applications: ['Amputee Rehabilitation', 'Enhanced Abilities', 'Medical Recovery', 'Research'],
      accuracy: '98%',
      status: 'Pilot Phase'
    },
    {
      id: 'neural-augmentation',
      title: 'Cognitive Neural Augmentation',
      description: 'Enhance human cognitive abilities through neural interfaces',
      features: [
        'Memory enhancement',
        'Processing speed boost',
        'Learning acceleration',
        'Cognitive monitoring'
      ],
      applications: ['Education', 'Professional Development', 'Medical Treatment', 'Research'],
      accuracy: '97%',
      status: 'Research Phase'
    }
  ];

  const useCases = [
    {
      category: 'Healthcare',
      title: 'Paralyzed Patient Recovery',
      description: 'Restoring movement and communication for paralyzed patients',
      results: [
        '85% of patients regained some movement',
        '90% improved communication abilities',
        '60% reduced depression symptoms',
        '40% increased independence'
      ],
      image: '🏥',
      testimonial: 'I can move my arm again after 5 years of paralysis. This technology changed my life.'
    },
    {
      category: 'Gaming',
      title: 'Mind-Controlled Gaming',
      description: 'Revolutionary gaming experience controlled by thoughts',
      results: [
        '1000% more immersive experience',
        'Faster reaction times',
        'New gaming possibilities',
        'Accessibility for disabled gamers'
      ],
      image: '🎮',
      testimonial: 'Gaming will never be the same. Controlling characters with my mind is incredible.'
    },
    {
      category: 'Education',
      title: 'Accelerated Learning',
      description: 'Enhance learning speed and retention through neural interfaces',
      results: [
        '300% faster learning',
        '95% information retention',
        'Reduced study time',
        'Enhanced focus and concentration'
      ],
      image: '🎓',
      testimonial: 'I learned a new language in 2 weeks instead of 6 months. This is the future of education.'
    },
    {
      category: 'Military',
      title: 'Enhanced Soldier Capabilities',
      description: 'Improve soldier performance and communication in the field',
      results: [
        '50% faster decision making',
        'Silent communication',
        'Enhanced situational awareness',
        'Reduced cognitive load'
      ],
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧬 NEURAL INTERFACE 2026 • MIND-MACHINE CONNECTION
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Neural Interface Technology
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Bridge the gap between mind and machine with revolutionary neural interface technology that enables direct brain-computer communication.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                onClick={() => setIsConnected(!isConnected)}
              >
                {isConnected ? 'Disconnect Neural Interface' : 'Connect Neural Interface'}
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 font-semibold">
                Try Neural Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Connection Status */}
      {isConnected && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-4 text-center"
        >
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <span className="font-semibold">Neural Interface Connected - Ready for Mind Control</span>
          </div>
        </motion.div>
      )}

      {/* Technology Showcase */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🧠 Neural Interface Technologies</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Explore our comprehensive suite of neural interface solutions designed for every application and use case.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {neuralTechnologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-emerald-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{tech.title}</h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                    {tech.status}
                  </span>
                </div>
                
                <p className="text-emerald-100 mb-6">{tech.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.applications.map((app, idx) => (
                      <span key={idx} className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm opacity-80">Accuracy:</div>
                    <div className="text-emerald-200 font-semibold text-xl">{tech.accuracy}</div>
                  </div>
                  <button className="bg-white text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demos */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-900/50 to-emerald-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🎮 Interactive Neural Demos</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Experience the power of neural interface technology through interactive demonstrations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  activeDemo === demo.id
                    ? 'border-emerald-400 bg-emerald-600/30'
                    : 'border-white/20 bg-white/10 hover:bg-white/20'
                }`}
              >
                <h3 className="text-lg font-bold mb-2">{demo.title}</h3>
                <p className="text-sm opacity-80">{demo.description}</p>
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <h3 className="text-2xl font-bold mb-4">
              {demos.find(d => d.id === activeDemo)?.title}
            </h3>
            <p className="text-emerald-100 mb-6">
              {demos.find(d => d.id === activeDemo)?.description}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">Features:</h4>
                <ul className="space-y-2">
                  {demos.find(d => d.id === activeDemo)?.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">Try It Now:</h4>
                <p className="text-sm opacity-80 mb-4">
                  {isConnected 
                    ? 'Focus your thoughts on the action you want to perform...'
                    : 'Connect your neural interface to try this demo'
                  }
                </p>
                <button 
                  className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
                  disabled={!isConnected}
                >
                  {isConnected ? 'Start Neural Control' : 'Connect First'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">💡 Real-World Applications</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              See how neural interface technology is transforming industries and improving lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-teal-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{useCase.image}</div>
                  <div>
                    <div className="text-sm text-teal-300 mb-1">{useCase.category}</div>
                    <h3 className="text-xl font-bold">{useCase.title}</h3>
                  </div>
                </div>
                
                <p className="text-teal-100 mb-6">{useCase.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {useCase.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm italic text-teal-200">"{useCase.testimonial}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/50 to-teal-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">⚙️ Technical Specifications</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Advanced technical specifications that ensure optimal performance and safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-bold mb-4 text-cyan-300">{spec.category}</h3>
                <ul className="space-y-3">
                  {spec.specs.map((item, idx) => (
                    <li key={idx} className="text-sm flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">💰 Neural Interface Pricing</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Choose the perfect neural interface solution for your needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-gradient-to-br from-emerald-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 relative ${
                  tier.popular ? 'ring-2 ring-emerald-400 scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm opacity-80 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-emerald-300">
                    {tier.price}
                    <span className="text-lg text-gray-400">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white hover:shadow-lg'
                    : 'bg-white text-emerald-600 hover:bg-emerald-50'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl p-12 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Connect Your Mind?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join the neural revolution and experience the future of human-computer interaction.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-all duration-300 font-semibold">
                Start Neural Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold">
                Contact Neural Experts
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


export default NeuralInterfaceTechnology2026;
