import React from 'react';
import Head from 'next/head';
import { Users, TrendingUp, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function DigitalTransformation() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const services = [
    {
      icon: Users,
      title: "Change Management",
      description: "Expert guidance through organizational transformation",
      features: ["Stakeholder Engagement", "Training Programs", "Communication Strategy", "Success Metrics"]
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Data-driven insights to improve business performance",
      features: ["Process Mapping", "Automation", "Performance Metrics", "Continuous Improvement"]
    },
    {
      title: "Technology Strategy",
      description: "Develop a comprehensive roadmap for your digital transformation journey",
      features: ["Technology Assessment", "Roadmap Planning", "Vendor Selection", "Implementation Strategy"]
    },
    {
      title: "Business Process Optimization",
      description: "Streamline operations and improve efficiency through digital workflows",
      features: ["Process Mapping", "Automation", "Performance Metrics", "Continuous Improvement"]
    },
    {
      title: "Customer Experience Enhancement",
      description: "Create seamless digital experiences that delight your customers",
      features: ["User Journey Mapping", "Digital Touchpoints", "Personalization", "Feedback Systems"]
    },
    {
      title: "Data & Analytics Strategy",
      description: "Leverage data insights to drive informed business decisions",
      features: ["Data Collection", "Analytics Platforms", "Business Intelligence", "Predictive Modeling"]
    },
    {
      title: "Technology Infrastructure",
      description: "Modernize your technology stack for scalability and performance",
      features: ["Cloud Migration", "API Integration", "Microservices", "DevOps Practices"]
    }
  ];

  const transformationApproach = [
    { step: "Assessment", icon: "🔍", description: "Evaluate current state and identify opportunities" },
    { step: "Strategy", icon: "📋", description: "Develop comprehensive transformation roadmap" },
    { step: "Implementation", icon: "🚀", description: "Execute changes with agile methodology" },
    { step: "Optimization", icon: "📈", description: "Continuous improvement and scaling" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>Digital Transformation — Zion Tech Group | Business Process Optimization</title>
        <meta name="description" content="Transform your business with Zion Tech Group's digital transformation services. Process optimization, customer experience enhancement, and technology modernization." />
        <meta property="og:title" content="Digital Transformation — Zion Tech Group" />
        <meta property="og:description" content="Leading digital transformation services including process optimization, customer experience enhancement, and technology modernization." />
        <meta property="og:url" content="https://ziontechgroup.com/services/digital-transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/services/digital-transformation" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-amber-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Digital Transformation
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transform your business for the digital age with our comprehensive digital transformation services
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-300">
              Get Started
            </a>
            <a href="#services" className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-orange-900 font-semibold rounded-lg transition-all duration-300">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Digital Transformation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Transformation Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformationApproach.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{phase.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{phase.step}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8">Contact us today to start your digital transformation journey</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-orange-400" />
              <span>{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-orange-400" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
          <a href="/contact" className="inline-flex items-center justify-center bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-orange-700 hover:to-amber-700 transition-all duration-300">
            Start Your Transformation
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}