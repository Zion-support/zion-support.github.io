import React from 'react';
import SEOHead from "../../components/SEOHead.jsx";
import { Shield, Database, Monitor } from 'lucide-react';
const ITSolutions = () => {
    const features = [
        {
            icon: Settings,
            title: "System Integration",
            description: "Seamless integration of existing and new IT systems"
        },
        {
            icon: Monitor,
            title: "IT Support",
            description: "24/7 IT support and maintenance services"
        },
        {
            icon: Database,
            title: "Data Management",
            description: "Comprehensive data management and backup solutions"
        },
        {
            icon: Shield,
            title: "IT Security",
            description: "Multi-layered security for your IT infrastructure"
        }
    ];
    const benefits = [
        "Improved system reliability and performance",
        "Reduced IT operational costs",
        "Enhanced data security and compliance",
        "Streamlined business processes",
        "Expert technical support and maintenance"
    ];
    return (<div className="min-h-screen bg-background">
      <SEOHead title="IT Solutions - Zion Tech Group" description="Comprehensive IT solutions to optimize your business operations and technology infrastructure." keywords="IT solutions, system integration, IT support, data management, IT security" canonical="https://ziontechgroup.com/services/it-solutions"/>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 className="text-5xl md:text-6xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            IT Solutions for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              {" "}Modern Business
            </span>
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-teal-100 max-w-4xl mx-auto leading-relaxed mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Optimize your IT infrastructure with our comprehensive solutions designed to improve 
            efficiency, security, and performance across your organization.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
              Optimize Your IT
            </button>
          </motion.div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end IT solutions to modernize your business operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (<motion.div key={feature.title} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-teal-600"/>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our IT Solutions?</h2>
              <p className="text-xl text-gray-600">
                Experience the benefits of optimized IT infrastructure
              </p>
            </div>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (<motion.div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="w-4 h-4 text-teal-600"/>
                  </div>
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your IT?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our IT solutions can improve your business operations and performance.
          </p>
          <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>);
};
export default ITSolutions;
