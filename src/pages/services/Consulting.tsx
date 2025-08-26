import React from 'react';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Target, TrendingUp, Zap, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const Consulting: React.FC = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Strategic Consulting",
      description: "Expert guidance for technology strategy and business alignment"
    },
    {
      icon: Users,
      title: "Team Training",
      description: "Comprehensive training programs for your technology teams"
    },
    {
      icon: Target,
      title: "Project Management",
      description: "Professional project management and delivery services"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Data-driven insights to improve business performance"
    }
  ];

  const benefits = [
    "Expert guidance from industry professionals",
    "Customized solutions for your business needs",
    "Proven methodologies and best practices",
    "Ongoing support and consultation",
    "Measurable results and ROI"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Technology Consulting - Zion Tech Group"
        description="Get expert technology consulting services to align your business strategy with cutting-edge solutions."
        keywords="technology consulting, strategic consulting, team training, project management, performance optimization"
        canonical="https://ziontechgroup.com/services/consulting"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Technology
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              {" "}Consulting
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get expert guidance to navigate the complex technology landscape and make informed 
            decisions that drive your business forward.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Get Expert Advice
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Consulting Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting solutions to address your technology challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Consulting Services?</h2>
              <p className="text-xl text-gray-600">
                Experience the benefits of expert technology consulting
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Expert Guidance?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our consulting services can help you make better technology decisions.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Consulting;