import React from 'react.ts';
import { SEO  } from "../../components/SEO";
import { motion  } from 'framer-motion.ts';
import { Globe, Leaf, Zap, Shield, Database, BarChart3, Settings, Users, Network, Smartphone, Tablet, Laptop, Cloud, RefreshCw, TrendingUp, AlertTriangle, Activity, FileText, CheckCircle, Sun, Wind, Battery, Recycle  } from 'lucide-react';
;
export { function };
export default function Sustainability(...args: []):  {
  const features = [
    {
      icon: Heart,
      title: 'Eco-Friendly Solutions',
      description: 'Reduce environmental impact with green technology'
    },
    {
      icon: Leaf,
      title: 'Energy Efficiency',
      description: 'Optimize power consumption and reduce carbon footprint'
    },
    {
      icon: Zap,
      title: 'Renewable Energy',
      description: 'Integrate solar, wind, and sustainable power sources'
    },
    {
      icon: Globe,
      title: 'Carbon Neutral',
      description: 'Achieve net-zero emissions through smart technology';
    };
  ];

  const services = [
    {
      title: 'Green IT Infrastructure',
      description: 'Energy-efficient data centers and computing systems',
      icon: Cpu
    },
    {
      title: 'Sustainable Software',
      description: 'Eco-friendly application development and optimization',
      icon: Database
    },
    {
      title: 'Energy Monitoring',
      description: 'Real-time tracking and optimization of power usage',
      icon: BarChart3
    },
    {
      title: 'Carbon Footprint Analysis',
      description: 'Comprehensive environmental impact assessment',
      icon: Globe;
    };
  ];

  return 
    <div className = "min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-slate-900"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
              <Heart className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Green IT & Sustainability</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology for a
              <span className="text-gradient"> Sustainable Future</span>
            </h1>

            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Build a greener tomorrow with sustainable technology solutions.
              Reduce environmental impact while maintaining performance and efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Go Green with Tech
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-outline px-8 py-4 text-lg">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Sustainable Technology?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Environmental responsibility meets technological innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index (
              <motion.div
                key={feature.title}
                initial = {
  { opacity: 0,
  y: 20 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white/5">
        <div className="container-responsive">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Sustainability Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive green technology solutions for eco-conscious businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(service: unknown, index: unknown 
              <motion.div
                key={service.title}
                initial = {
  { opacity: 0,
  x: index % 2 === 0 ? -20 : 20 

}}
                whileInView = {
  { opacity: 1,
  x: 0 

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-emerald-400 mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-300">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
                >
                  Get Quote
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Sustainability Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how sustainable technology can transform various aspects of your business 
              and create positive environmental impact
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-6 gap-8">
            {solutions.map(solution: unknown, index: unknown (
              <motion.div
                key={solution.name}
                initial = {
  { opacity: 0,
  scale: 0.8 

}}
                whileInView = {
  { opacity: 1,
  scale: 1 

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-700 transition-all duration-300">
                  <solution.icon className="w-8 h-8 text-emerald-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Go Green?
              </h2>
              <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                Make a positive impact on the environment while advancing your technology capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Go Green with Tech
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-300">
                  Contact Green Team
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>;
    </div>;
  );
}
