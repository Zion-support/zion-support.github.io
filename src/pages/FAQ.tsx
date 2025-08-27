import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  CheckCircle,
  BarChart3,
  Globe,
  Rocket,
  Star,
  Heart
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function FAQ() {
  const features = [
    {
      icon: Users,
      title: "Professional Excellence",
      description: "Connect with top-tier professionals and cutting-edge solutions."
    },
    {
      icon: Shield,
      title: "Trusted Platform",
      description: "Secure, reliable, and transparent marketplace operations."
    },
    {
      icon: Zap,
      title: "Fast & Efficient",
      description: "Streamlined processes that save you time and money."
    },
    {
      icon: Star,
      title: "Quality Assured",
      description: "Vetted professionals and verified service providers."
    }
  ];

  const benefits = [
    "Access to top tech talent worldwide",
    "Secure and transparent transactions",
    "24/7 platform availability",
    "Comprehensive service coverage",
    "Competitive pricing and value"
  ];

  return (
    <>
      <SEO 
        title="FAQ | Zion Tech Group"
        description="Frequently asked questions about our services and platform. Experience the future of technology services and solutions."
        keywords="faq, technology, services, solutions, innovation, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {title}
              </h1>
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                Frequently asked questions about our services and platform. Our platform connects you with the best technology 
                solutions and professionals to drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-zinc-400 text-zinc-300 rounded-lg font-semibold text-lg hover:border-indigo-400 hover:text-indigo-400 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-zinc-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Us
              </h2>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                Our platform delivers exceptional value and results for businesses 
                of all sizes and industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:border-indigo-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Platform Benefits
              </h2>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                Experience the advantages of our comprehensive technology platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                  <p className="text-zinc-300 text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-12 text-center border border-indigo-500/20"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses already using our platform to succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                >
                  Start Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-zinc-400 text-zinc-300 rounded-lg font-semibold text-lg hover:border-indigo-400 hover:text-indigo-400 transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
