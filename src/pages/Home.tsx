import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import EnhancedHero from '../components/EnhancedHero';
import EnhancedServicesShowcase from '../components/EnhancedServicesShowcase';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap,
  Globe,
  Award,
  Clock,
  Star
} from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      title: "Lightning Fast",
      description: "Built with modern technologies for optimal performance and speed"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Enterprise Secure",
      description: "Bank-level security with SOC 2 compliance and encryption"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Team Ready",
      description: "Collaborative features designed for modern remote teams"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-400" />,
      title: "Scalable Growth",
      description: "Grows with your business from startup to enterprise"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime", icon: <Clock className="w-6 h-6" /> },
    { number: "4.8/5", label: "Rating", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Globe className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Zion Tech Group transformed our workflow completely. The productivity gains are incredible!",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateCorp",
      content: "Best-in-class security and performance. Our team loves the intuitive interface.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content: "The analytics and automation features have revolutionized our marketing campaigns.",
      rating: 5,
      avatar: "👩‍🎨"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Transform Your Business with Micro SAAS Solutions</title>
        <meta name="description" content="Discover cutting-edge micro SAAS solutions designed to scale your business operations. AI-powered tools for productivity, finance, marketing, and more." />
        <meta name="keywords" content="micro SAAS, business software, productivity tools, AI solutions, cloud software, business automation" />
        <meta property="og:title" content="Zion Tech Group - Transform Your Business with Micro SAAS Solutions" />
        <meta property="og:description" content="Discover cutting-edge micro SAAS solutions designed to scale your business operations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Transform Your Business with Micro SAAS Solutions" />
        <meta name="twitter:description" content="Discover cutting-edge micro SAAS solutions designed to scale your business operations." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "description": "Leading provider of micro SAAS solutions for modern businesses",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-302-464-0950",
              "contactType": "customer service",
              "email": "kleber@ziontechgroup.com"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown",
              "addressRegion": "DE",
              "postalCode": "19709",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://linkedin.com/company/ziontechgroup",
              "https://twitter.com/ziontechgroup"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <EnhancedHero />

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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven business practices to deliver solutions that actually work.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Trusted by <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Thousands</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions are powering businesses around the world with proven results.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it - hear from the businesses we've helped transform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">{testimonial.avatar}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">"{testimonial.content}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses that have already discovered the power of our micro SAAS solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/micro-saas-services"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  Contact Sales
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Showcase */}
        <EnhancedServicesShowcase />
      </div>
    </>
  );
}

export default Home;