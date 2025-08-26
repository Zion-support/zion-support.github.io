import React from 'react';
import { Helmet } from 'react-helmet-async';

const Partners: React.FC = () => {
  const strategicPartners = [
    {
      name: "Microsoft",
      logo: "🔷",
      description: "Global technology leader providing cloud infrastructure and AI solutions",
      partnership: "Strategic cloud and AI partnership for enterprise solutions",
      benefits: ["Azure cloud infrastructure", "AI/ML integration", "Enterprise security"]
    },
    {
      name: "Amazon Web Services",
      logo: "☁️",
      description: "Leading cloud computing platform and services provider",
      partnership: "Cloud infrastructure and machine learning collaboration",
      benefits: ["AWS cloud services", "ML/AI tools", "Global infrastructure"]
    },
    {
      name: "Google Cloud",
      logo: "🌐",
      description: "Innovative cloud platform with advanced AI capabilities",
      partnership: "AI and machine learning platform partnership",
      benefits: ["Google Cloud AI", "TensorFlow integration", "Advanced analytics"]
    },
    {
      name: "IBM",
      logo: "🔵",
      description: "Enterprise technology and consulting services leader",
      partnership: "Enterprise AI and quantum computing collaboration",
      benefits: ["Watson AI platform", "Quantum computing", "Enterprise consulting"]
    }
  ];

  const technologyPartners = [
    {
      name: "NVIDIA",
      logo: "🟢",
      description: "Leading GPU manufacturer and AI computing pioneer",
      partnership: "AI computing infrastructure and GPU optimization",
      benefits: ["GPU acceleration", "AI computing", "Performance optimization"]
    },
    {
      name: "Intel",
      logo: "🔵",
      description: "Semiconductor technology and computing innovation leader",
      partnership: "High-performance computing and AI optimization",
      benefits: ["CPU optimization", "AI acceleration", "Performance tuning"]
    },
    {
      name: "Cisco",
      logo: "🔷",
      description: "Networking and cybersecurity technology leader",
      partnership: "Network infrastructure and security solutions",
      benefits: ["Network security", "Infrastructure", "Cybersecurity"]
    },
    {
      name: "Oracle",
      logo: "🔴",
      description: "Enterprise software and cloud technology provider",
      partnership: "Database and enterprise application solutions",
      benefits: ["Database solutions", "Enterprise apps", "Cloud services"]
    }
  ];

  const startupPartners = [
    {
      name: "OpenAI",
      logo: "🤖",
      description: "Leading AI research and development organization",
      partnership: "AI model integration and research collaboration",
      benefits: ["GPT models", "AI research", "Innovation"]
    },
    {
      name: "Anthropic",
      logo: "🧠",
      description: "AI safety and research company",
      partnership: "AI safety and responsible AI development",
      benefits: ["Claude models", "AI safety", "Ethical AI"]
    },
    {
      name: "Stability AI",
      logo: "🎨",
      description: "Generative AI and creative technology company",
      partnership: "Creative AI and image generation solutions",
      benefits: ["Image generation", "Creative AI", "Visual content"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's strategic partnerships with leading technology companies, cloud providers, and AI innovators." />
        <meta name="keywords" content="partners, partnerships, Microsoft, AWS, Google Cloud, IBM, technology alliances" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Zion Tech Group collaborates with industry leaders and innovative startups to deliver cutting-edge 
              technology solutions and drive digital transformation across industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
                <span className="text-white font-semibold">20+ Strategic Partners</span>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
                <span className="text-white font-semibold">Global Network</span>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
                <span className="text-white font-semibold">Innovation Focus</span>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Partners */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Strategic Technology Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {strategicPartners.map((partner) => (
                <div key={partner.name} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{partner.logo}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{partner.name}</h3>
                      <p className="text-gray-400 text-sm">{partner.description}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Partnership Focus</h4>
                    <p className="text-gray-400">{partner.partnership}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.benefits.map((benefit, index) => (
                        <span key={index} className="text-xs bg-blue-400/20 text-blue-300 px-2 py-1 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Partners */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Technology Infrastructure Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologyPartners.map((partner) => (
                <div key={partner.name} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{partner.logo}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{partner.name}</h3>
                      <p className="text-gray-400 text-sm">{partner.description}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Partnership Focus</h4>
                    <p className="text-gray-400">{partner.partnership}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.benefits.map((benefit, index) => (
                        <span key={index} className="text-xs bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Startup Partners */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Innovation & Startup Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {startupPartners.map((partner) => (
                <div key={partner.name} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{partner.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{partner.name}</h3>
                      <p className="text-gray-400 text-sm">{partner.description}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Partnership Focus</h4>
                    <p className="text-gray-400">{partner.partnership}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.benefits.map((benefit, index) => (
                        <span key={index} className="text-xs bg-green-400/20 text-green-300 px-2 py-1 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Partner with Zion Tech Group?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Innovation Leadership</h3>
                <p className="text-gray-400">Access to cutting-edge AI, quantum computing, and emerging technologies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Global Network</h3>
                <p className="text-gray-400">Connect with industry leaders and expand your market reach</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Mutual Success</h3>
                <p className="text-gray-400">Collaborative approach ensuring both partners achieve their goals</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl border border-white/10 p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Become a Partner
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our network of technology innovators and industry leaders. Let's explore how we can 
                create value together through strategic partnerships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Discuss Partnership
                </a>
                <a
                  href="/about"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Partners;