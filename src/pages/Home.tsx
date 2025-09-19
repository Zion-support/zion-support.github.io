import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Brain, Rocket, Star } from 'lucide-react';

interface HomeProps {
  onButtonClick: (action: string, location: string) => void;
}

const Home: React.FC<HomeProps> = ({ onButtonClick }) => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Solutions',
      description: 'Revolutionary artificial intelligence that transforms your business operations.',
      link: '/services/ai'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions for complex problem solving.',
      link: '/services/quantum'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets.',
      link: '/services/cybersecurity'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Engineers' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Helmet>
        <title>Zion Tech Group - Revolutionary Technology Solutions</title>
        <meta name="description" content="Leading provider of AI, quantum computing, and cybersecurity solutions. Transform your business with cutting-edge technology." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm" />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            The Future of Technology
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            Leading the future with revolutionary AI, quantum computing, and cybersecurity solutions. 
            Discover the next generation of technology that will transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <Link 
              to="/services" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={() => onButtonClick('explore_services', 'hero_section')}
            >
              Explore Services
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={() => onButtonClick('contact_us', 'hero_section')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Core Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our groundbreaking technologies that are reshaping the future of computing and artificial intelligence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <Link 
                  to={feature.link}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center"
                  onClick={() => onButtonClick(`learn_more_${feature.title.toLowerCase().replace(' ', '_')}`, 'features_section')}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already using our revolutionary technology solutions to stay ahead of the competition.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={() => onButtonClick('get_started_cta', 'cta_section')}
            >
              Get Started Today
            </Link>
            <Link 
              to="/blog" 
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              onClick={() => onButtonClick('read_blog', 'cta_section')}
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;