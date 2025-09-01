import React from 'react';'
import { motion } from 'framer-motion';'
import { SEO } from '../../components/SEO';
import {

  Leaf,
  Zap,
  Globe,
  Shield,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Database,
  Server,
  Cloud,
  Cpu,
  Monitor,
  HardDrive,
  Network,'
  Battery} from 'lucide-react';

export default function GreenIT() {
  const services = [
    {

      icon: Leaf,'
      title: 'Green Data Centers','
      description: 'Energy-efficient data center design and optimization',
      features: ['
        'Renewable energy integration','
        'Cooling system optimization','
        'Energy monitoring','
        'Carbon footprint reduction',
      ]},
    {

      icon: Zap,'
      title: 'Energy Management','
      description: 'Smart energy monitoring and optimization systems',
      features: ['
        'Real-time energy tracking','
        'Automated optimization','
        'Peak demand management','
        'Energy cost reduction',
      ]},
    {

      icon: Cloud,'
      title: 'Cloud Optimization','
      description: 'Eco-friendly cloud infrastructure and services',
      features: ['
        'Green cloud providers','
        'Resource optimization','
        'Carbon-aware computing','
        'Sustainable scaling',
      ]},
    {

      icon: Server,'
      title: 'Hardware Efficiency','
      description: 'Energy-efficient hardware selection and management',
      features: ['
        'Low-power processors','
        'Efficient storage','
        'Smart power management','
        'Hardware lifecycle optimization',
      ]},
    {

      icon: Network,'
      title: 'Network Optimization','
      description: 'Efficient network infrastructure and protocols',
      features: ['
        'Traffic optimization','
        'Bandwidth management','
        'Network virtualization','
        'Green networking protocols',
      ]},
    {

      icon: Monitor,'
      title: 'Software Efficiency','
      description: 'Energy-efficient software development and deployment',
      features: ['
        'Code optimization','
        'Resource management','
        'Efficient algorithms','
        'Green software practices',
      ]},
  ];

  const benefits = [
    {

      icon: TrendingUp,'
      title: 'Cost Reduction','
      description: 'Lower energy costs and operational expenses'},
    {

      icon: Shield,'
      title: 'Compliance','
      description: 'Meet environmental regulations and standards'},
    {

      icon: Users,'
      title: 'Brand Value','
      description: 'Enhanced reputation and customer trust'},
    {

      icon: Award,'
      title: 'Innovation','
      description: 'Leading-edge sustainable technology solutions'},
  ];

  const technologies = [
    {

      icon: Battery,'
      title: 'Renewable Energy','
      description: 'Solar, wind, and hydroelectric power integration'},
    {

      icon: Cpu,'
      title: 'AI Optimization','
      description: 'Machine learning for energy efficiency'},
    {

      icon: Database,'
      title: 'Smart Monitoring','
      description: 'IoT sensors and real-time analytics'},
    {

      icon: Globe,'
      title: 'Carbon Tracking','
      description: 'Comprehensive carbon footprint measurement'},
  ];

  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO"
        title="Green IT Services - Zion Tech Group""
        description="Sustainable and energy-efficient IT solutions. Green data centers, energy management, cloud optimization, and eco-friendly technology services."
      />

      {/* Hero Section */}"
      <section className="relative py-20 px-4">"
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >"
            <div className="flex justify-center mb-6">"
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">"
                <Leaf className="w-10 h-10 text-white" />
              </div>
            </div>"
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Green IT Solutions
            </h1>"
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Sustainable technology solutions that reduce environmental impact
              while improving efficiency and reducing costs. Building a greener
              digital future.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a"
                href="/contact""
                className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Green Transformation
              </a>
              <a"
                href="/services-overview""
                className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}"
      <section className="py-20 px-4">"
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}"
            className="text-center mb-16"
          >"
            <h2 className="text-4xl font-bold text-white mb-4">
              Green IT Services
            </h2>"
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive sustainable technology solutions designed to
              minimize environmental impact while maximizing efficiency and
              performance.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}"
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-green-400/50 transition-all duration-300"
              >"
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4">"
                  <service.icon className="w-8 h-8 text-white" />
                </div>"
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>"
                <p className="text-slate-300 mb-4">{service.description}</p>"
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}"
                      className="flex items-center text-sm text-slate-400"
                    >"
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}"
      <section className="py-20 px-4 bg-slate-800/30">"
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}"
            className="text-center mb-16"
          >"
            <h2 className="text-4xl font-bold text-white mb-4">
              Benefits of Green IT
            </h2>"
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Adopting sustainable technology solutions delivers multiple
              benefits for your business and the environment.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}"
                className="text-center"
              >"
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>"
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>"
                <p className="text-slate-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}"
      <section className="py-20 px-4">"
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}"
            className="text-center mb-16"
          >"
            <h2 className="text-4xl font-bold text-white mb-4">
              Green Technologies
            </h2>"
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to create sustainable and
              energy-efficient IT infrastructure.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}"
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center"
              >"
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">"
                  <tech.icon className="w-8 h-8 text-white" />
                </div>"
                <h3 className="text-lg font-semibold text-white mb-2">
                  {tech.title}
                </h3>"
                <p className="text-slate-300 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}"
      <section className="py-20 px-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20">"
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >"
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Go Green?
            </h2>"
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Transform your IT infrastructure with sustainable solutions that
              benefit both your business and the planet.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a"
                href="/contact""
                className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Green IT Journey
              </a>
              <a"
                href="/services-overview""
                className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300"
              >
                Explore More Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
'"