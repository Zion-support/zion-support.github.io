import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight, Users, Zap, Settings, Sparkles, BarChart3, Smartphone } from "lucide-react";

export default function Index() {
  // Tools and features showcase
  const toolsFeatures = [
    {
      title: "AI Matcher",
      description: "Find the perfect AI solution for your business needs",
      icon: <Sparkles className="h-6 w-6 text-zion-cyan"/>,
      link: "/match"
    },
    {
      title: "Talent Pool",
      description: "Connect with top technology professionals worldwide",
      icon: <Users className="h-6 w-6 text-zion-purple"/>,
      link: "/talent"
    },
    {
      title: "Services",
      description: "Browse our comprehensive range of technology services",
      icon: <Zap className="h-6 w-6 text-zion-cyan"/>,
      link: "/services"
    },
    {
      title: "Equipment",
      description: "Access cutting-edge technology equipment and tools",
      icon: <Settings className="h-6 w-6 text-zion-purple"/>,
      link: "/equipment"
    },
    {
      title: "Analytics",
      description: "Data-driven insights to optimize your business",
      icon: <BarChart3 className="h-6 w-6 text-zion-cyan"/>,
      link: "/analytics"
    },
    {
      title: "Mobile App",
      description: "Take Zion with you on the go with our mobile app for iOS and Android",
      icon: <Smartphone className="h-6 w-6 text-zion-purple"/>,
      link: "/mobile-launch"
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to <span className="text-zion-cyan">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            The future of technology innovation with cutting-edge AI solutions, 
            expert talent, and innovative services.
          </p>
        </div>
      </section>
      
      {/* Quick Access Tools Section */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4">
              Explore Our Tools
            </h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Discover powerful tools designed to transform your business and drive innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {toolsFeatures.map((feature, index) => (
              <Link key={index} to={feature.link} className="bg-zion-slate-light/10 border border-zion-cyan/20 hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300 hover:bg-zion-slate-light/20">
                <div className="bg-zion-cyan/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                <div className="flex items-center text-zion-cyan">
                  <span>Explore</span>
                  <ArrowRight className="ml-2 h-4 w-4"/>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Join thousands of businesses already transforming with Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="px-8 py-4 bg-zion-cyan hover:bg-zion-cyan-light text-white rounded-xl font-semibold text-lg transition-colors"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white rounded-xl font-semibold text-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
