import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Zap, 
  Globe, 
  Recycle, 
  Sun, 
  Wind, 
  CheckCircle,
  ArrowRight,
  BarChart3,
  Settings,
  Shield,
  RefreshCw,
  TrendingUp,
  Database
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const greenServices = [
  {
    icon: Leaf,
    title: 'Sustainable IT Solutions',
    description: 'Eco-friendly technology solutions that reduce environmental impact while maintaining performance.',
    features: ['Energy-Efficient Hardware', 'Green Data Centers', 'Sustainable Software', 'Carbon Footprint Reduction']
  },
  {
    icon: Zap,
    title: 'Energy Optimization',
    description: 'Intelligent energy management systems to minimize power consumption and costs.',
    features: ['Power Management', 'Smart Grid Integration', 'Renewable Energy', 'Energy Monitoring']
  },
  {
    icon: Recycle,
    title: 'Circular Economy',
    description: 'Sustainable practices for IT asset lifecycle management and recycling.',
    features: ['Asset Lifecycle Management', 'E-Waste Recycling', 'Refurbishment Programs', 'Sustainable Procurement']
  },
  {
    icon: Sun,
    title: 'Renewable Energy',
    description: 'Integration of solar, wind, and other renewable energy sources into IT infrastructure.',
    features: ['Solar Integration', 'Wind Power', 'Energy Storage', 'Grid Independence']
  },
  {
    icon: Database,
    title: 'Green Data Centers',
    description: 'Environmentally conscious data center design and operations.',
    features: ['Efficient Cooling', 'Waste Heat Recovery', 'Natural Ventilation', 'Energy-Efficient Equipment']
  },
  {
    icon: Globe,
    title: 'Carbon Neutral Solutions',
    description: 'Complete carbon footprint assessment and offset strategies for IT operations.',
    features: ['Carbon Auditing', 'Offset Programs', 'Sustainability Reporting', 'Green Certifications']
  }
];

const sustainabilityAreas = [
  {
    area: 'Energy Efficiency',
    solutions: ['Smart Power Management', 'Efficient Cooling Systems', 'LED Lighting', 'Energy Monitoring']
  },
  {
    area: 'Waste Reduction',
    solutions: ['Paperless Operations', 'Digital Workflows', 'E-Waste Management', 'Sustainable Packaging']
  },
  {
    area: 'Green Procurement',
    solutions: ['Eco-Friendly Suppliers', 'Sustainable Materials', 'Local Sourcing', 'Green Certifications']
  },
  {
    area: 'Employee Engagement',
    solutions: ['Sustainability Training', 'Green Initiatives', 'Remote Work Options', 'Eco-Friendly Policies']
  }
];

const benefits = [
  'Reduce energy costs by 20-40%',
  'Lower carbon footprint and environmental impact',
  'Improve corporate social responsibility',
  'Meet regulatory compliance requirements',
  'Enhance brand reputation and customer loyalty',
  'Future-proof your technology infrastructure'
];

const certifications = [
  { name: 'ISO 14001', description: 'Environmental Management Systems' },
  { name: 'LEED', description: 'Leadership in Energy and Environmental Design' },
  { name: 'Energy Star', description: 'Energy efficiency certification' },
  { name: 'EPEAT', description: 'Electronic Product Environmental Assessment Tool' },
  { name: 'Carbon Trust', description: 'Carbon footprint and energy efficiency' },
  { name: 'BREEAM', description: 'Building Research Establishment Environmental Assessment Method' }
];

export default function GreenIT() {
  return (
    <>
      <SEO 
        title="Green IT & Sustainability Services | Zion Tech Group"
        description="Transform your IT operations with sustainable technology solutions. Energy optimization, green data centers, and carbon-neutral IT infrastructure for a greener future."
        canonical="https://ziontechgroup.com/services/green-it"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Green <span className="bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">IT</span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Transform your IT operations with sustainable technology solutions. 
                Reduce environmental impact while improving efficiency and cutting costs.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="btn-primary px-8 py-3 text-lg font-semibold"
                >
                  Get Started
                </a>
                <a 
                  href="#services" 
                  className="btn-outline-white px-8 py-3 text-lg font-semibold"
                >
                  View Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Green IT Services
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Comprehensive sustainability solutions that help organizations reduce their 
                environmental impact while improving operational efficiency.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {greenServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability Areas Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Sustainability Focus Areas
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Multi-dimensional approach to sustainability that covers all aspects 
                of IT operations and business processes.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sustainabilityAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{area.area}</h3>
                  <ul className="space-y-2">
                    {area.solutions.map((solution, idx) => (
                      <li key={idx} className="text-zion-slate-light flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Business Benefits
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Green IT solutions deliver measurable business value through cost savings, 
                improved efficiency, and enhanced corporate reputation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-zion-slate-light">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Sustainability Certifications
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                We help organizations achieve and maintain recognized sustainability 
                certifications and standards.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                  <p className="text-zion-slate-light text-sm">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Implementation Process
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Our systematic approach ensures successful green IT implementation 
                with measurable environmental and business benefits.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Assess</h3>
                <p className="text-zion-slate-light text-sm">
                  Evaluate current environmental impact and identify improvement opportunities
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Plan</h3>
                <p className="text-zion-slate-light text-sm">
                  Develop comprehensive sustainability strategy and roadmap
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Implement</h3>
                <p className="text-zion-slate-light text-sm">
                  Deploy green IT solutions and sustainable practices
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Monitor</h3>
                <p className="text-zion-slate-light text-sm">
                  Track progress and continuously improve sustainability metrics
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-green-500 to-green-700 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Go Green?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Start your sustainability journey with our green IT solutions. 
                Reduce costs, improve efficiency, and make a positive environmental impact.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="btn-white px-8 py-3 text-lg font-semibold"
                >
                  Start Your Journey
                </a>
                <a 
                  href="/services" 
                  className="btn-outline-white px-8 py-3 text-lg font-semibold"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
