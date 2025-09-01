import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin,
  Globe,
  ExternalLink
} from 'lucide-react';

const SimplePage: React.FC = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Simple & Clean',
      description: 'Clean, minimalist design that focuses on your content and message.'
    },
    {
      icon: Star,
      title: 'Professional',
      description: 'Professional appearance that builds trust and credibility with your audience.'
    },
    {
      icon: Users,
      title: 'User-Friendly',
      description: 'Easy to navigate and understand, providing a great user experience.'
    },
    {
      icon: Award,
      title: 'High Quality',
      description: 'Built with modern technologies and best practices for optimal performance.'
    }
  ];

  const benefits = [
    'Fast loading times',
    'Mobile responsive design',
    'SEO optimized',
    'Easy to maintain',
    'Scalable architecture',
    'Modern development practices'
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime' },
    { number: '< 2s', label: 'Load Time' },
    { number: '100%', label: 'Mobile Ready' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple &
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Effective
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Sometimes the best solution is the simplest one. Our simple page template 
              provides a clean, professional foundation for your content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Simple?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our simple approach focuses on what matters most: delivering your message 
              clearly and effectively to your audience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Benefits of Simple Design
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Simple doesn't mean basic. It means focused, efficient, and effective. 
                Our simple approach delivers better results through clarity and purpose.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-700 rounded-2xl p-8 border border-slate-600"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Performance Metrics
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Clean Content Presentation
            </h2>
            <p className="text-xl text-gray-300">
              Your content deserves to be presented beautifully and clearly. 
              Our simple design ensures your message shines through.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-2xl p-8 border border-slate-600"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Key Principles
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                  Clarity First
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Every element serves a purpose. We eliminate distractions and focus on 
                  what matters most to your users.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                  Performance Optimized
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Fast loading times and smooth interactions ensure your users have a 
                  great experience every time.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                  Mobile First
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Designed for all devices, ensuring your content looks great and works 
                  perfectly on any screen size.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Simplify?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's create something simple, beautiful, and effective together. 
              Our team is ready to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300">
              Have questions or ready to get started? We're here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                value: '+1 (302) 464-0950',
                link: 'tel:+13024640950',
                description: 'Speak with our team directly'
              },
              {
                icon: Mail,
                title: 'Email Us',
                value: 'kleber@ziontechgroup.com',
                link: 'mailto:kleber@ziontechgroup.com',
                description: 'Send us a detailed message'
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                value: '364 E Main St STE 1008, Middletown DE 19709',
                link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
                description: 'Our office location'
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{contact.title}</h3>
                <a
                  href={contact.link}
                  target={contact.title === 'Visit Us' ? '_blank' : '_self'}
                  rel={contact.title === 'Visit Us' ? 'noopener noreferrer' : ''}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors block mb-2"
                >
                  {contact.value}
                </a>
                <p className="text-gray-400 text-sm">{contact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimplePage;