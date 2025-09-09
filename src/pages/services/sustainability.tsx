import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Leaf, 
  Zap, 
  Shield, 
  Database, 
  BarChart3, 
  Globe, 
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Users,
  Building
} from 'lucide-react';

const SustainabilityPage = () => {
  const services = [
    {
      title: 'Green IT Solutions',
      description: 'Sustainable technology solutions that reduce environmental impact while improving efficiency.',
      features: ['Energy Optimization', 'Carbon Footprint Reduction', 'Sustainable Infrastructure', 'Green Computing'],
      price: '$4,500/month',
      icon: Leaf,
      category: 'Green IT'
    },
    {
      title: 'Carbon Management',
      description: 'Comprehensive carbon footprint tracking and reduction strategies for organizations.',
      features: ['Carbon Accounting', 'Emissions Tracking', 'Reduction Strategies', 'Compliance Reporting'],
      price: '$3,800/month',
      icon: Heart,
      category: 'Carbon Management'
    },
    {
      title: 'Energy Efficiency',
      description: 'Optimize energy consumption and implement renewable energy solutions.',
      features: ['Energy Audits', 'Smart Grid Integration', 'Renewable Energy', 'Efficiency Monitoring'],
      price: '$5,200/month',
      icon: Zap,
      category: 'Energy'
    },
    {
      title: 'Sustainable Supply Chain',
      description: 'Transform supply chains with sustainable practices and transparency.',
      features: ['Supply Chain Mapping', 'Sustainability Audits', 'Supplier Engagement', 'Circular Economy'],
      price: '$6,500/month',
      icon: Globe,
      category: 'Supply Chain'
    },
    {
      title: 'ESG Reporting',
      description: 'Environmental, Social, and Governance reporting and compliance solutions.',
      features: ['ESG Metrics', 'Compliance Management', 'Stakeholder Reporting', 'Performance Tracking'],
      price: '$4,200/month',
      icon: BarChart3,
      category: 'ESG'
    },
    {
      title: 'Sustainability Consulting',
      description: 'Strategic guidance for sustainability transformation and best practices.',
      features: ['Strategy Development', 'Best Practices', 'Implementation Support', 'Team Training'],
      price: '$3,500/month',
      icon: Building,
      category: 'Consulting'
    }
  ];

  const benefits = [
    'Reduce carbon footprint by 40%',
    'Lower operational costs by 25%',
    'Improve brand reputation and trust',
    'Ensure regulatory compliance'
  ];

  const industries = [
    'Manufacturing',
    'Technology',
    'Healthcare',
    'Retail',
    'Transportation',
    'Energy'
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-16 h-16 text-zion-cyan mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">
                Sustainability Solutions
              </h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Build a sustainable future with our comprehensive environmental and social responsibility solutions. 
              Transform your operations while protecting our planet for future generations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-neon px-8 py-4 text-lg font-semibold"
              >
                Start Sustainability Journey
              </Link>
              <Link
                to="/request-quote"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Get Sustainability Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Complete Sustainability Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From green IT to ESG reporting, we provide end-to-end sustainability solutions 
              that align with your environmental and social responsibility goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-zion-cyan bg-zion-cyan/10 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-zion-cyan">
                    {service.price}
                  </div>
                  <Link
                    to="/contact"
                    className="flex items-center text-zion-cyan hover:text-white transition-colors duration-300 group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Sustainability?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the benefits of sustainable practices and contribute to a better future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg text-zion-slate-light leading-relaxed">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industries We Transform
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our sustainability solutions are designed to revolutionize operations across diverse industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300">
                  {industry}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build a Sustainable Future?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join the sustainability revolution and transform your business while protecting our planet. 
              Our expert team is ready to guide your sustainability transformation journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-neon px-8 py-4 text-lg font-semibold"
              >
                Start Sustainability Project
              </Link>
              <Link
                to="/request-quote"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Get Sustainability Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPage;