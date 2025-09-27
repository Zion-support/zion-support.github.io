import React from 'react';

export default function Services() {
  const services = [
    {
      icon: '🤖',
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      features: ['Machine Learning Models', 'AI Chatbots', 'Predictive Analytics', 'Computer Vision']
    },
    {
      icon: '🔗',
      title: 'Blockchain Development',
      description: 'Secure, decentralized solutions powered by blockchain technology for transparent business processes.',
      features: ['Smart Contracts', 'DeFi Applications', 'NFT Platforms', 'Cryptocurrency Wallets']
    },
    {
      icon: '☁️',
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and deployment solutions that grow with your business needs.',
      features: ['Cloud Migration', 'DevOps Automation', 'Microservices', 'Container Orchestration']
    },
    {
      icon: '🛡️',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Threat Monitoring']
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['iOS Apps', 'Android Apps', 'React Native', 'Flutter Development']
    },
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Modern web applications with cutting-edge technologies and responsive design.',
      features: ['React Applications', 'Next.js Development', 'Progressive Web Apps', 'E-commerce Solutions']
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive innovation across all industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300">How we deliver exceptional results</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Discovery</h3>
              <p className="text-gray-300">We analyze your requirements and understand your business goals.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Planning</h3>
              <p className="text-gray-300">We create a detailed roadmap and technical architecture.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Development</h3>
              <p className="text-gray-300">We build your solution using cutting-edge technologies.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Launch</h3>
              <p className="text-gray-300">We deploy and provide ongoing support and maintenance.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Get a Free Consultation
            </a>
            <a
              href="/about"
              className="btn-secondary px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}