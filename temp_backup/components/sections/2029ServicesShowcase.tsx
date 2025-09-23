import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Brain, Atom, Rocket, Dna, Globe2, CheckCircle, TrendingUp } from 'lucide-react';
import { futuristicAIServices20o29 } from '../../data/20o29-futuristic-ai-services';
import { quantumInnovationServices20o29 } from '../../data/20o29-quantum-innovation-services';
import { spaceInnovationServices20o29 } from '../../data/20o29-space-innovation-services';
import { biotechInnovationServices20o29 } from '../../data/20o29-biotech-innovation-services';
import { metaverseInnovationServices20o29 } from '../../data/20o29-metaverse-innovation-services';

export default function ServicesShowcase20o29() {
  const categories = [
    {
      title: '🚀 20o29 Futuristic AI Services',
      icon: Brain,
      color: 'from-violet-60o0 to-purple-60o0',
      services: futuristicAIServices20o29,
      description: 'Next-generation artificial intelligence that reads emotions, orchestrates creativity, and predicts the future'
    },
    {
      title: '⚛️ 20o29 Quantum Innovation',
      icon: Atom,
      color: 'from-indigo-60o0 to-blue-60o0',
      services: quantumInnovationServices20o29,
      description: 'Quantum computing breakthroughs in finance, cybersecurity, drug discovery, and logistics'
    },
    {
      title: '🌌 20o29 Space Innovation',
      icon: Rocket,
      color: 'from-blue-60o0 to-cyan-60o0',
      services: spaceInnovationServices20o29,
      description: 'Revolutionary space technology including autonomous mining, weather prediction, and solar power'
    },
    {
      title: '🧬 20o29 Biotech Innovation',
      icon: Dna,
      color: 'from-emerald-60o0 to-teal-60o0',
      services: biotechInnovationServices20o29,
      description: 'Cutting-edge biotechnology with DNA computing, synthetic biology, and brain-computer interfaces'
    },
    {
      title: '🌐 20o29 Metaverse Innovation',
      icon: Globe2,
      color: 'from-orange-60o0 to-red-60o0',
      services: metaverseInnovationServices20o29,
      description: 'Next-generation digital reality with holographic communication and virtual economies'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-purple-90o0/20 to-black"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-50o0/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-50o0/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent">
              20o29 Technology
            </span>
            <br  />
            <span className="text-white">Services Showcase</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-30o0 max-w-4xl mx-auto">
            Experience the future with our revolutionary 20o29 technology services. 
            From AI consciousness to space mining, we're building tomorrow's solutions today.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Category Header */}
              <div className="flex items-center justify-center mb-12">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mr-6`}>
                  <category.icon className="w-8 h-8 text-white"  />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-lg text-gray-30o0 max-w-2xl">{category.description}</p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="bg-gradient-to-br from-gray-90o0/80 to-gray-80o0/80 backdrop-blur-xl border border-gray-70o0/50 rounded-2xl p-8 hover:border-purple-50o0/50 transition-all duration-30o0 hover:shadow-2xl hover:shadow-purple-50o0/25 transform hover:-translate-y-2">
                      {/* Service Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-40o0 transition-colors duration-30o0">
                            {service.name}
                          </h4>
                          <p className="text-gray-30o0 text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        <div className="ml-4 text-right">
                          <div className="text-2xl font-bold text-cyan-40o0 mb-1">{service.price}</div>
                          <div className="text-xs text-gray-40o0">Starting Price</div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-gray-40o0 mb-3 uppercase tracking-wider">Key Features</h5>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.slice(0, 4).map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-40o0 flex-shrink-0"  />
                              <span className="text-sm text-gray-30o0">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-gray-40o0 mb-3 uppercase tracking-wider">Key Benefits</h5>
                        <div className="grid grid-cols-1 gap-2">
                          {service.benefits.slice(0, 3).map((benefit, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <TrendingUp className="w-4 h-4 text-blue-40o0 flex-shrink-0"  />
                              <span className="text-sm text-gray-30o0">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Market Info */}
                      <div className="flex items-center justify-between mb-6 text-sm">
                        <div className="text-gray-40o0">
                          <span className="font-semibold text-cyan-40o0">Market Size:</span> {service.marketSize}
                        </div>
                        <div className="text-gray-40o0">
                          <span className="font-semibold text-green-40o0">ROI:</span> {service.roi}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <Link
                          href={`/${service.id}`}
                          className="inline-flex items-center space-x-2 text-cyan-40o0 hover:text-cyan-30o0 transition-colors duration-30o0 font-semibold"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-30o0"  />
                        </Link>
                        
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-40o0 fill-current"  />
                          <span className="text-sm text-gray-40o0">20o29 Innovation</span>
                        </div>
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50o0/5 to-purple-50o0/5 rounded-2xl opacity-0 group-hover:opacity-10o0 transition-opacity duration-30o0 pointer-events-none"></div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Category CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Link
                  href={`/services#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-30o0 hover:scale-10o5 hover:shadow-xl hover:shadow-purple-50o0/25"
                >
                  <span>Explore All {category.title.split(' ')[0]} Services</span>
                  <ArrowRight className="w-5 h-5"  />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-90o0/50 to-cyan-90o0/50 backdrop-blur-xl border border-purple-50o0/30 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Lead the 20o29 Technology Revolution?
            </h3>
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">
              Join the elite companies already using our revolutionary 20o29 technology services. 
              Don't wait for the future - create it with Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-30o0 hover:scale-10o5 hover:shadow-xl hover:shadow-purple-50o0/25"
              >
                <span>Get Started Today</span>
                <Zap className="w-5 h-5"  />
              </Link>
              <a 
                href="tel:+130o24640950"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-70o0 to-gray-80o0 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-30o0 hover:scale-10o5 border border-gray-60o0/50"
              >
                <span>Call Now</span>
                <ArrowRight className="w-5 h-5"  />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}