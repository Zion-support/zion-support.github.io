import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Store, 
  Smartphone, 
  BarChart3, 
  Users, 
  Package,
  ArrowRight,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const features = [
  {
    icon: ShoppingCart,
    title: 'E-commerce Platform',
    description: 'Modern, scalable online retail solutions'
  },
  {
    icon: Store,
    title: 'Omnichannel Retail',
    description: 'Seamless integration across all sales channels'
  },
  {
    icon: Smartphone,
    title: 'Mobile Commerce',
    description: 'Optimized mobile shopping experiences'
  },
  {
    icon: BarChart3,
    title: 'Retail Analytics',
    description: 'Data-driven insights for retail optimization'
  },
  {
    icon: Users,
    title: 'Customer Experience',
    description: 'Personalized shopping and customer service'
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Smart inventory and supply chain optimization'
  }
];

const solutions = [
  {
    title: 'E-commerce Platform',
    description: 'Complete online retail solution with AI-powered features',
    features: ['Product Management', 'Shopping Cart', 'Payment Processing', 'Order Management']
  },
  {
    title: 'Retail Analytics Suite',
    description: 'Comprehensive analytics for retail decision-making',
    features: ['Sales Analytics', 'Customer Insights', 'Inventory Optimization', 'Performance Metrics']
  },
  {
    title: 'Customer Experience Platform',
    description: 'Personalized shopping experiences and customer service',
    features: ['Personalization', 'Recommendations', 'Customer Support', 'Loyalty Programs']
  },
  {
    title: 'Supply Chain Optimization',
    description: 'Intelligent inventory and supply chain management',
    features: ['Demand Forecasting', 'Inventory Management', 'Supplier Analytics', 'Logistics Optimization']
  }
];

export default function RetailSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="Retail Solutions - Zion Tech Group" 
        description="AI-powered retail technology solutions, e-commerce platforms, omnichannel retail, and customer experience optimization for modern retail businesses." 
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Retail Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your retail business with AI-powered e-commerce platforms, 
            omnichannel solutions, and customer experience optimization. 
            Drive sales, improve efficiency, and enhance customer satisfaction.
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Zion Tech Group for Retail?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our retail solutions are built with deep understanding of 
            customer behavior, market trends, and operational efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Retail Solutions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions designed to address the unique challenges of 
            modern retail and e-commerce operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50"
            >
              <h3 className="text-2xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-gray-300 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Omnichannel Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Omnichannel Retail Excellence</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our solutions enable seamless integration across all retail channels 
              for a unified customer experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Store className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Brick & Mortar</h3>
              <p className="text-gray-300">In-store technology and POS integration</p>
            </div>
            <div className="text-center">
              <Smartphone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mobile & Web</h3>
              <p className="text-gray-300">Responsive e-commerce and mobile apps</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Marketplace Integration</h3>
              <p className="text-gray-300">Multi-channel sales and distribution</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Retail Business?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how our retail solutions can drive sales, 
            improve customer experience, and optimize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View All Services
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}