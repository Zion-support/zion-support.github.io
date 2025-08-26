import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Zap, Globe, Target, Users, BarChart3, Shield } from 'lucide-react';

const SustainabilityPage = () => {
  const services = [
    {
      icon: Heart,
      title: 'Green IT Solutions',
      description: 'Energy-efficient technology solutions that reduce environmental impact while maintaining performance.'
    },
    {
      icon: Leaf,
      title: 'Carbon Footprint Analysis',
      description: 'Comprehensive assessment and tracking of your organization\'s carbon emissions and environmental impact.'
    },
    {
      icon: Zap,
      title: 'Renewable Energy Integration',
      description: 'Smart grid solutions and renewable energy systems for sustainable power management.'
    },
    {
      icon: Globe,
      title: 'Circular Economy',
      description: 'Waste reduction strategies and resource optimization for sustainable business practices.'
    },
    {
      icon: Target,
      title: 'Sustainability Reporting',
      description: 'ESG reporting and compliance solutions for transparent sustainability performance tracking.'
    },
    {
      icon: Shield,
      title: 'Climate Risk Management',
      description: 'Assessment and mitigation strategies for climate-related risks and opportunities.'
    }
  ];

  const benefits = [
    'Reduce energy costs by 30-50%',
    'Improve brand reputation and customer loyalty',
    'Comply with environmental regulations',
    'Attract and retain top talent',
    'Access green financing and incentives',
    'Future-proof your business operations'
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Sustainability Solutions
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business into a sustainable powerhouse. Our green technology solutions help you 
              reduce environmental impact while improving efficiency and profitability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-3 text-lg">
                Sustainability Assessment
              </button>
              <button className="btn-neon px-8 py-3 text-lg">
                Green IT Solutions
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Sustainable Technology Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From green IT to carbon management, we provide comprehensive sustainability solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Sustainable Solutions?
              </h2>
              <p className="text-lg text-zion-slate-light mb-8 leading-relaxed">
                Sustainability is not just good for the planet—it's good for business. Our solutions help you 
                achieve both environmental and financial goals.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-zion-slate-light"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-3xl p-8 border border-zion-cyan/30">
                <div className="text-center">
                  <Leaf className="w-16 h-16 text-zion-cyan mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Green IT Assessment
                  </h3>
                  <p className="text-zion-slate-light mb-6">
                    Get a comprehensive assessment of your IT infrastructure's environmental impact.
                  </p>
                  <button className="btn-futuristic px-6 py-3">
                    Get Assessment
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Environmental Impact
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              See the real difference our sustainability solutions can make for your organization and the planet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-zion-cyan mb-2">40%</h3>
              <div className="text-zion-slate-light">Energy Reduction</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-zion-purple mb-2">60%</h3>
              <div className="text-zion-slate-light">Carbon Footprint Reduction</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-zion-blue mb-2">25%</h3>
              <div className="text-zion-slate-light">Cost Savings</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Go Green?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join the sustainability revolution and create a better future for your business and the planet.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Sustainability Consultation
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Green IT Solutions
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPage;