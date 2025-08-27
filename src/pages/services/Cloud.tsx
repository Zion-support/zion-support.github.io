import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Server, 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function CloudServices() {
  const cloudServices = [
    {
      icon: <Server className="w-8 h-8 text-zion-cyan" />,
      title: "Cloud Migration",
      description: "Seamless migration of your infrastructure to modern cloud platforms with zero downtime.",
      features: ["AWS Migration", "Azure Migration", "Google Cloud Migration", "Hybrid Cloud Setup"]
    },
    {
      icon: <Database className="w-8 h-8 text-zion-cyan" />,
      title: "Cloud Infrastructure",
      description: "Design and deploy scalable, secure cloud infrastructure tailored to your business needs.",
      features: ["Auto-scaling", "Load Balancing", "High Availability", "Disaster Recovery"]
    },
    {
      icon: <Shield className="w-8 h-8 text-zion-cyan" />,
      title: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud assets and data.",
      features: ["Identity Management", "Encryption", "Compliance", "Threat Detection"]
    },
    {
      icon: <Zap className="w-8 h-8 text-zion-cyan" />,
      title: "DevOps & CI/CD",
      description: "Streamline development and deployment with modern DevOps practices and tools.",
      features: ["Automated Testing", "Continuous Integration", "Container Orchestration", "Monitoring"]
    }
  ];

  const benefits = [
    "Reduced infrastructure costs by up to 40%",
    "Improved scalability and performance",
    "Enhanced security and compliance",
    "24/7 monitoring and support",
    "Faster time to market",
    "Global reach and accessibility"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full mb-8">
              <Cloud className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Cloud Services
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with enterprise-grade cloud solutions. From migration to optimization, 
              we provide comprehensive cloud services that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-blue rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-purple rounded-full"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Cloud Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our cloud services cover every aspect of your digital transformation journey, 
              from initial assessment to ongoing optimization and support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
=======
import Link from 'next/link';
const CloudServices = () => {
    const cloudServices = [
        {
            title: "Cloud Migration & Strategy",
            description: "Comprehensive cloud migration services with multi-cloud strategy and cost optimization.",
            price: "From $8,500/project",
            features: ["Cloud readiness assessment", "Multi-cloud strategy planning", "Migration roadmap development", "Cost optimization analysis"]
        },
        {
            title: "Cloud-Native Development",
            description: "Build scalable applications using cloud-native technologies and microservices architecture.",
            price: "From $12,000/project",
            features: ["Microservices architecture", "Serverless development", "API-first design", "Cloud-native databases"]
        },
        {
            title: "Cloud Security & Compliance",
            description: "Enterprise-grade security solutions with compliance frameworks and threat protection.",
            price: "From $6,500/month",
            features: ["Identity and access management", "Data encryption", "Compliance monitoring", "Security auditing"]
        }
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud & DevOps Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Accelerate your digital transformation with modern cloud infrastructure.</p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cloud Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">End-to-end cloud solutions for modern businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (<div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-blue-600 mb-4">{service.price}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
                      {feature}
                    </li>))}
                </ul>
<<<<<<< HEAD
              </motion.div>
            ))}
=======
              </div>))}
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our Cloud Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the benefits of cloud computing with our expert guidance and proven methodologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-zion-slate-light text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 border border-zion-cyan/30 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let our cloud experts help you navigate the digital transformation journey 
              and unlock the full potential of cloud computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Cloud Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
=======
    </div>);
};
export default CloudServices;
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
