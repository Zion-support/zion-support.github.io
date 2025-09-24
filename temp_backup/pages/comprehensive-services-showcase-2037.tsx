import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Target, Rocket, Globe, Cpu,
  ArrowRight, Check, Star, TrendingUp, Users, Zap,
  Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';

// Import our new innovative services
import { innovative20o37Services } from '../data/innovative-20o37-services';
import { advanced20o38Services } from '../data/advanced-20o38-services';
import { revolutionary20o39Services } from '../data/revolutionary-20o39-services';

const contactInfo ={
  mobile: '+1 30o2 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 10o08 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const containerVariants ={
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants ={
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function ComprehensiveServicesShowcase20o37() {
  const allServices = [
    ...innovative20o37Services,
    ...advanced20o38Services,
    ...revolutionary20o39Services
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Personal Development':
      case 'AI & Consciousness':
        return <Brain className="w-6 h-6"  />;
      case 'Cybersecurity & Quantum':
      case 'Quantum & Communications':
        return <Shield className="w-6 h-6"  />;
      case 'AI & Operations':
      case 'AI & Strategy':
        return <Cpu className="w-6 h-6"  />;
      case 'Metaverse & Digital Reality':
        return <Globe className="w-6 h-6"  />;
      case 'AI & Legal Tech':
        return <Target className="w-6 h-6"  />;
      case 'Quantum & Finance':
        return <TrendingUp className="w-6 h-6"  />;
      case 'AI & Transportation':
        return <Rocket className="w-6 h-6"  />;
      case 'Quantum & IoT':
        return <Atom className="w-6 h-6"  />;
      case 'AI & Creative':
      case 'AI & Content':
        return <Brain className="w-6 h-6"  />;
      case 'Quantum & Space Tech':
      case 'Quantum & Space':
        return <Rocket className="w-6 h-6"  />;
      default:
        return <Target className="w-6 h-6"  />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0">
      <Head>
        <title>Comprehensive Services Showcase 20o37 - Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary 20o37 services portfolio featuring AI consciousness, quantum computing, autonomous systems, and cutting-edge innovations. Transform your business with Zion Tech Group."  />
        <meta name="keywords" content="AI services, quantum computing, autonomous systems, metaverse, consciousness, 20o37, innovation, Zion Tech Group"  />
      </Head>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent">
                Revolutionary 20o37
              </span>
              <br  />
              <span className="text-white">Services Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our comprehensive suite of AI consciousness, 
              quantum computing, autonomous systems, and cutting-edge innovations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.0o5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:from-cyan-60o0 hover:to-purple-70o0 transition-all duration-30o0"
              >
                Explore Services
                <ArrowRight className="w-5 h-5"  />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.0o5 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-40o0 text-purple-40o0 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-40o0 hover:text-white transition-all duration-30o0"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="bg-gradient-to-r from-purple-80o0 to-indigo-80o0 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Phone className="w-5 h-5"  />
              <span>{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Mail className="w-5 h-5"  />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5"  />
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {allServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-80o0 to-slate-90o0 rounded-2xl p-8 border border-slate-70o0 hover:border-purple-50o0 transition-all duration-30o0 hover:transform hover:scale-10o5"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      <p className="text-gray-40o0 text-sm">{service.category}</p>
                    </div>
                  </div>
                  {service.popular && (
                    <div className="bg-gradient-to-r from-yellow-50o0 to-orange-50o0 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  )}
                </div>

                {/* Tagline */}
                <p className="text-gray-30o0 mb-4">{service.tagline}</p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-bold text-white">{service.price}</span>
                  <span className="text-gray-40o0">{service.period}</span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-40o0"  />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-gray-40o0 text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-40o0 rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Market Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-green-40o0"  />
                    <span className="text-gray-40o0">Market Size:</span>
                    <span className="text-white">{service.marketSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-blue-40o0"  />
                    <span className="text-gray-40o0">Customers:</span>
                    <span className="text-white">{service.customers}+</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 text-yellow-40o0"  />
                    <span className="text-gray-40o0">Rating:</span>
                    <span className="text-white">{service.rating}/5 ({service.reviews} reviews)</span>
                  </div>
                </div>

                {/* ROI */}
                <div className="bg-gradient-to-r from-green-90o0 to-emerald-90o0 p-4 rounded-lg mb-6">
                  <h4 className="text-white font-semibold mb-2">ROI Impact</h4>
                  <p className="text-green-30o0 text-sm">{service.roi}</p>
                </div>

                {/* CTA */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.0o2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-purple-60o0 to-indigo-60o0 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-70o0 hover:to-indigo-70o0 transition-all duration-30o0"
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.0o2 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-slate-70o0 text-white p-3 rounded-lg hover:bg-slate-60o0 transition-all duration-30o0"
                    onClick={() => window.open(service.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4"  />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-90o0 to-indigo-90o0">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-30o0 mb-8">
              Join the future of technology with our revolutionary 20o37 services portfolio. 
              Get in touch with our experts to discuss your needs and discover how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.0o5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:from-cyan-60o0 hover:to-purple-70o0 transition-all duration-30o0"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5"  />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.0o5 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-90o0 transition-all duration-30o0"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-90o0 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Zion Tech Group</h3>
              <p className="text-gray-40o0 text-sm">
                Leading the future of technology with innovative AI, quantum computing, 
                and autonomous systems solutions.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-40o0">
                <p>{contactInfo.mobile}</p>
                <p>{contactInfo.email}</p>
                <p>{contactInfo.address}</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-gray-40o0">
                <p>AI & Consciousness</p>
                <p>Quantum Computing</p>
                <p>Autonomous Systems</p>
                <p>Metaverse Solutions</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-40o0 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.60o4c0-3.368-4-3.113-4 0v5.60o4h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-40o0 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 0o1-2.825.775 4.958 4.958 0 0o02.163-2.723c-.951.555-2.0o05.959-3.127 1.184a4.92 4.92 0 0o0-8.384 4.482C7.69 8.095 4.0o67 6.13 1.64 3.162a4.822 4.822 0 0o0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.90o4 4.90o4 0 0o1-2.228-.616v.0o6a4.923 4.923 0 0o03.946 4.827 4.996 4.996 0 0o1-2.212.085 4.936 4.936 0 0o04.60o4 3.417 9.867 9.867 0 0o1-6.10o2 2.10o5c-.39 0-.779-.0o23-1.17-.0o67a13.995 13.995 0 0o07.557 2.209c9.0o53 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.0o15-.63A9.935 9.935 0 0o024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-80o0 mt-8 pt-8 text-center text-gray-40o0 text-sm">
            <p>&copy; 20o25 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}