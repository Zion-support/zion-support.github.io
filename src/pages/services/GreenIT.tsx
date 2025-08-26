import React from 'react';
import Head from 'next/head';
import { Leaf, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function GreenIT() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const services = [
    {
      title: "Energy-Efficient Infrastructure",
      description: "Sustainable IT infrastructure solutions that reduce energy consumption",
      features: ["Green Data Centers", "Energy Monitoring", "Efficient Cooling", "Renewable Energy Integration"]
    },
    {
      title: "Sustainable Software",
      description: "Eco-friendly software development and optimization practices",
      features: ["Green Coding", "Performance Optimization", "Resource Efficiency", "Sustainable Architecture"]
    },
    {
      title: "Green Cloud Solutions",
      description: "Environmentally conscious cloud computing and hosting services",
      features: ["Carbon-Neutral Hosting", "Energy-Efficient Storage", "Green APIs", "Sustainable Scaling"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>Green IT Services — Zion Tech Group</title>
        <meta name="description" content="Sustainable and environmentally conscious IT solutions for a greener future." />
        <link rel="canonical" href="https://ziontechgroup.com/services/green-it" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Green IT Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Sustainable technology solutions for a greener, more efficient future
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300">
              Get Started
            </a>
            <a href="#services" className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-900 font-semibold rounded-lg transition-all duration-300">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Green IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Go Green?</h2>
          <p className="text-gray-300 mb-8">Contact us today to discuss your sustainable IT needs</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-green-400" />
              <span>{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-green-400" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-green-400" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
          <a href="/contact" className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
            Contact Us Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}
