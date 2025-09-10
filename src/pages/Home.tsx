import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Zap, Settings, Sparkles, BarChart3, Smartphone, Brain, Cloud, Shield, Rocket } from 'lucide-react';
import SEO from '../components/SEO';

const Home = () => {
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Revolutionary AI technology that transforms your business operations",
      icon: <Brain className="h-6 w-6 text-blue-400" />,
      link: "/services"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern businesses",
      icon: <Cloud className="h-6 w-6 text-purple-400" />,
      link: "/services/cloud-devops"
    },
    {
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      icon: <Shield className="h-6 w-6 text-green-400" />,
      link: "/services/ai-cybersecurity"
    },
    {
      title: "Digital Transformation",
      description: "Complete digital transformation services for your organization",
      icon: <Rocket className="h-6 w-6 text-orange-400" />,
      link: "/solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Zion Tech Group - Revolutionary AI & Technology Solutions"
        description="Leading provider of cutting-edge AI, cloud computing, and digital transformation services. Transform your business with Zion Tech Group's innovative solutions."
        keywords={["AI services", "cloud computing", "digital transformation", "technology solutions", "Zion Tech Group"]}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Revolutionary
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}AI & Technology
            </span>
            <br />
            Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge AI, cloud computing, and digital transformation services. 
            We deliver innovative solutions that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border border-gray-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="bg-slate-800/50 border border-slate-700 hover:border-blue-400/50 rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="bg-slate-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="flex items-center text-blue-400">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI and technology solutions can drive your success.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
