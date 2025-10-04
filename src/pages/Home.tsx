import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, Users, Zap } from "lucide-react";
import SEOHead from "../components/SEOHead";

const Home: React.FC = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Proven Expertise",
      description: "500+ successful projects with industry-leading expertise and cutting-edge technology"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with 99.9% uptime guarantee and SOC 2 compliance"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "24/7 expert support from our experienced team of technology professionals"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Agile development with rapid deployment capabilities and continuous integration"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Leading AI & Technology Solutions</title>
        <meta name="description" content="Transform your business with cutting-edge AI solutions, cloud services, and technology consulting. Expert team delivering innovative results." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <SEOHead 
          title="Zion Tech Group - Leading AI & Technology Solutions"
          description="Transform your business with cutting-edge AI solutions, cloud services, and technology consulting. Expert team delivering innovative results."
        />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-20"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Transform Your Business with
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  AI-Powered Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                We deliver cutting-edge AI, cloud migration, and enterprise solutions that drive real results. 
                Join 500+ companies already transforming with our technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-flex items-center justify-center text-lg hover:scale-105 hover:shadow-lg"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/about" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-flex items-center justify-center text-lg hover:scale-105"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We deliver exceptional results through innovative technology solutions, cutting-edge AI, and dedicated 24/7 support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={feature.title} className="text-center group p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-blue-100 rounded-full group-hover:bg-purple-100 transition-colors">
                        <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors" />
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Let's discuss how we can help transform your business with cutting-edge technology solutions, 
              innovative AI services, and comprehensive IT solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-flex items-center justify-center text-lg hover:scale-105 hover:shadow-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/about" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-flex items-center justify-center text-lg hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
