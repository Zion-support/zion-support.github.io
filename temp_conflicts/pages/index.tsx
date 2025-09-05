import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  ExternalLink
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import EnhancedServicesShowcase from '../components/EnhancedServicesShowcase';
import EnhancedTestimonialsSection from '../components/EnhancedTestimonialsSection';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: &quot;AI Business Intelligence&quot;,
      description: &quot;Transform data into actionable insights with AI-powered analytics&quot;,
      icon: &quot;🧠&quot;,
      color: &quot;from-purple-500 to-pink-500&quot;,
      link: &quot;https://ziontechgroup.com/ai-business-intelligence&quot;,
      price: &quot;$499/month&quot;,
      features: [&quot;AI-powered dashboards&quot;, &quot;Predictive analytics&quot;, &quot;Real-time insights&quot;]
    },
    {
      title: &quot;Quantum Cybersecurity&quot;,
      description: &quot;Future-proof security with quantum-resistant encryption and AI threat detection&quot;,
      icon: &quot;🔒&quot;,
      color: &quot;from-red-500 to-orange-500&quot;,
      link: &quot;https://ziontechgroup.com/quantum-cybersecurity&quot;,
      price: &quot;$799/month&quot;,
      features: [&quot;Quantum-resistant encryption&quot;, &quot;AI threat detection&quot;, &quot;Zero-trust architecture&quot;]
    },
    {
    <UltraFuturisticBackground2029>
      <Head>
        <title>Zion Tech Group - 2029 Revolutionary Technology Services | AI, Quantum Computing, Space Tech</title>
        <meta name=&quot;description&quot; content=&quot;Leading provider of revolutionary 2029 technology services including AI consciousness, quantum computing, space mining, and advanced biotechnology. Transform your business with cutting-edge solutions.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI consciousness, quantum computing, space mining, biotechnology, 2029 technology, revolutionary services, Zion Tech Group&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
        <link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot; />
        
        {/* Open Graph */}
        <meta property=&quot;og:title&quot; content=&quot;Zion Tech Group - 2029 Revolutionary Technology Services&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Leading provider of revolutionary 2029 technology services including AI consciousness, quantum computing, space mining, and advanced biotechnology.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com&quot; />
        <meta property=&quot;og:image&quot; content=&quot;https://ziontechgroup.com/og-image.jpg&quot; />
        
        {/* Twitter */}
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
        <meta name=&quot;twitter:title&quot; content=&quot;Zion Tech Group - 2029 Revolutionary Technology Services&quot; />
        <meta name=&quot;twitter:description&quot; content=&quot;Leading provider of revolutionary 2029 technology services including AI consciousness, quantum computing, space mining, and advanced biotechnology.&quot; />
        <meta name=&quot;twitter:image&quot; content=&quot;https://ziontechgroup.com/twitter-image.jpg&quot; />
        
        {/* Additional Meta Tags */}
        <meta name=&quot;theme-color&quot; content=&quot;#8b5cf6&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com&quot; />
        
        {/* Structured Data */}
        <script type=&quot;application/ld+json&quot;>
          {JSON.stringify({
            &quot;@context&quot;: &quot;https://schema.org&quot;,
            &quot;@type&quot;: &quot;Organization&quot;,
            &quot;name&quot;: &quot;Zion Tech Group&quot;,
            &quot;description&quot;: &quot;Leading provider of revolutionary 2029 technology services&quot;,
            &quot;url&quot;: &quot;https://ziontechgroup.com&quot;,
            &quot;logo&quot;: &quot;https://ziontechgroup.com/logo.png&quot;,
            &quot;contactPoint&quot;: {
              &quot;@type&quot;: &quot;ContactPoint&quot;,
              &quot;telephone&quot;: &quot;+1-302-464-0950&quot;,
              &quot;contactType&quot;: &quot;customer service&quot;,
              &quot;email&quot;: &quot;kleber@ziontechgroup.com&quot;
            },
            &quot;address&quot;: {
              &quot;@type&quot;: &quot;PostalAddress&quot;,
              &quot;streetAddress&quot;: &quot;364 E Main St STE 1008&quot;,
              &quot;addressLocality&quot;: &quot;Middletown&quot;,
              &quot;addressRegion&quot;: &quot;DE&quot;,
              &quot;postalCode&quot;: &quot;19709&quot;,
              &quot;addressCountry&quot;: &quot;US&quot;
            }
          })}
        </script>
      title: &quot;AI Customer Experience&quot;,
      description: &quot;Deliver personalized customer experiences with intelligent automation&quot;,
      icon: &quot;🤖&quot;,
      color: &quot;from-blue-500 to-cyan-500&quot;,
      link: &quot;https://ziontechgroup.com/ai-customer-experience&quot;,
      price: &quot;$599/month&quot;,
      features: [&quot;Chatbot automation&quot;, &quot;Personalized recommendations&quot;, &quot;Customer journey optimization&quot;]
    }
  ];

  const stats = [
    { number: &quot;500+&quot;, label: &quot;Projects Delivered&quot;, icon: &quot;✅&quot; },
    { number: &quot;50+&quot;, label: &quot;Enterprise Clients&quot;, icon: &quot;👥&quot; },
    { number: &quot;99.9%&quot;, label: &quot;Uptime Guarantee&quot;, icon: &quot;🔒&quot; },
    { number: &quot;24/7&quot;, label: &quot;Support Available&quot;, icon: &quot;⏰&quot; }
  ];

  const features = [
    {
      title: &quot;Cutting-Edge Technology&quot;,
      description: &quot;Leverage the latest advancements in AI, quantum computing, and cybersecurity&quot;,
      icon: &quot;🚀&quot;
    },
    {
      title: &quot;Enterprise-Grade Security&quot;,
      description: &quot;Bank-level security with SOC 2 compliance and regular penetration testing&quot;,
      icon: &quot;🛡️&quot;
    },
    {
      title: &quot;Scalable Solutions&quot;,
      description: &quot;Built to grow with your business, from startup to enterprise&quot;,
      icon: &quot;📈&quot;
    },
    {
      title: &quot;Expert Support&quot;,
      description: &quot;24/7 technical support with dedicated account managers&quot;,
      icon: &quot;💬&quot;
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading-Edge Technology Solutions</title>
        <meta name=&quot;description&quot; content=&quot;Transform your business with Zion Tech Group's cutting-edge AI, quantum computing, and cybersecurity solutions. Enterprise-grade technology for the modern world.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI, quantum computing, cybersecurity, business intelligence, technology solutions&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
        <link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot; />
      </Head>

      <UltraFuturisticBackground2029>
        {/* Navigation */}
        <UltraFuturisticNavigation2029 />

      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden&quot;>
        {/* Background */}
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900&quot; />
        <div className=&quot;absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]&quot; />
        
        {/* Content */}
        <div className=&quot;relative z-10 max-w-7xl mx-auto px-6 text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className=&quot;mb-8&quot;
          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent&quot;>
              The Future of
              <span className=&quot;block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
                Technology
              </span>
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed&quot;>
              Transform your business with cutting-edge AI, quantum computing, and cybersecurity solutions. 
              Built for the modern enterprise, powered by innovation.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <a
                href=&quot;#services&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl&quot;
              >
                Explore Services
              </Link>
              <a
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 border-2 border-white/20 hover:border-white/40 rounded-xl text-white font-semibold text-lg transition-all duration-300 backdrop-blur-sm&quot;
              >
                Get Started
              </Link>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=&quot;flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm&quot;
          >
            <span>Trusted by Fortune 500 companies</span>
            <span>•</span>
            <span>SOC 2 Type II Certified</span>
            <span>•</span>
            <span>24/7 Enterprise Support</span>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className=&quot;absolute inset-0 pointer-events-none&quot;>
          <div className=&quot;absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse&quot; />
          <div className=&quot;absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-1000&quot; />
          <div className=&quot;absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-2000&quot; />
        </div>
      </section>

      {/* Features Section */}
      <section className=&quot;py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
              Why Choose Zion Tech Group?
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results.
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300&quot;
              >
                <div className=&quot;text-4xl mb-4&quot;>{feature.icon}</div>
                <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                <p className=&quot;text-white/70&quot;>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className=&quot;py-20 px-6 bg-slate-800&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
              Our Core Services
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Comprehensive technology solutions designed to accelerate your digital transformation journey.
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105&quot;
              >
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
                
                <div className=&quot;relative z-10&quot;>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 flex items-center justify-center`}>
                    <span className=&quot;text-3xl&quot;>{service.icon}</span>
                  </div>
                  
                  <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{service.title}</h3>
                  <p className=&quot;text-white/70 mb-6 leading-relaxed&quot;>{service.description}</p>
                  
                  <div className=&quot;mb-6&quot;>
                    <div className=&quot;text-2xl font-bold text-cyan-400 mb-2&quot;>{service.price}</div>
                    <div className=&quot;text-sm text-white/50&quot;>Starting price</div>
                  </div>
                  
                  <div className=&quot;space-y-1&quot;>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className=&quot;flex items-center gap-2 text-xs text-white/70&quot;>
                        <span className=&quot;text-cyan-400&quot;>✅</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Service Showcase Components */}
            <Enhanced2026ServicesShowcase />
            <Revolutionary2026ServiceShowcase />
            <Revolutionary2027ServicesShowcase />
            <Enhanced2029ServicesShowcase />
          </div>
        </section>

        {/* Service Categories Section */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                  Comprehensive Service Categories
                </span>
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Explore our extensive range of revolutionary technology services across all major categories
              </p>
            </motion.div>

            {/* Service Categories Grid */}
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {Object.entries(servicesByCategory).slice(0, 9).map(([category, services], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;group cursor-pointer&quot;
                >
                  <div className=&quot;p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm hover:transform hover:scale-105&quot;>
                    <div className=&quot;w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300&quot;>
                      <Brain className=&quot;w-8 h-8 text-white&quot; />
                    </div>
                    <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>{category}</h3>
                    <p className=&quot;text-gray-300 mb-4&quot;>{services.length} revolutionary services</p>
                    <div className=&quot;flex items-center justify-between&quot;>
                      <span className=&quot;text-cyan-400 font-semibold&quot;>Explore</span>
                      <ArrowRight className=&quot;w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform&quot; />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Zion Tech Group Section */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-purple-900/10&quot;></div>
          <div className=&quot;max-w-7xl mx-auto relative z-10&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                  Why Choose Zion Tech Group?
                </span>
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                We're not just another technology company. We're the architects of tomorrow, building solutions that will define the next decade of innovation.
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {[
                {
                  icon: Rocket,
                  title: &quot;Cutting-Edge Innovation&quot;,
                  description: &quot;We stay ahead of the curve, constantly researching and implementing the latest technological breakthroughs.&quot;,
                  color: &quot;from-purple-500 to-pink-500&quot;
                },
                {
                  icon: Brain,
                  title: &quot;AI-First Approach&quot;,
                  description: &quot;Every solution we create is built with artificial intelligence at its core, ensuring maximum efficiency and intelligence.&quot;,
                  color: &quot;from-blue-500 to-cyan-500&quot;
                },
                {
                  icon: Atom,
                  title: &quot;Quantum-Ready Solutions&quot;,
                  description: &quot;Our services are designed to leverage quantum computing capabilities as they become commercially available.&quot;,
                  color: &quot;from-green-500 to-emerald-500&quot;
                },
                {
                  icon: Shield,
                  title: &quot;Unbreakable Security&quot;,
                  description: &quot;Quantum internet protocol suite with unbreakable encryption and quantum network security.&quot;,
                  color: &quot;from-indigo-500 to-blue-500&quot;
                },
                {
                  icon: Zap,
                  title: &quot;Future-Ready Solutions&quot;,
                  description: &quot;Cutting-edge technology services designed for the challenges and opportunities of 2029 and beyond.&quot;,
                  color: &quot;from-yellow-500 to-orange-500&quot;
                },
                {
                  icon: Star,
                  title: &quot;Proven Results&quot;,
                  description: &quot;Our services deliver measurable ROI and transformative business outcomes for clients worldwide.&quot;,
                  color: &quot;from-pink-500 to-rose-500&quot;
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;group cursor-pointer&quot;
                >
                  <div className=&quot;p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm hover:transform hover:scale-105&quot;>
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className=&quot;w-8 h-8 text-white&quot; />
                    </div>
                    <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>{feature.title}</h3>
                    <p className=&quot;text-gray-300 leading-relaxed&quot;>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className=&quot;text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6&quot;>
                Ready to Experience the
                <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;> Future of Technology?</span>
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Contact our team of technology experts to discuss how our revolutionary 2029 services can transform your business and propel you into the future.
              </p>
              
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center mb-8&quot;>
                <Link href=&quot;/contact&quot;>
                  <button className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105&quot;>
                    <Phone className=&quot;inline-block w-5 h-5 mr-2&quot; />
                    Schedule Consultation
                  </button>
                </Link>
                <Link href=&quot;/pricing&quot;>
                  <button className=&quot;px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-200 transform hover:scale-105&quot;>
                    <DollarSign className=&quot;inline-block w-5 h-5 mr-2&quot; />
                    View Pricing
                  </button>
                </Link>
              </div>
            </motion.div>

              {/* Contact Information */}
              <div className=&quot;grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-300&quot;>
                <div className=&quot;flex items-center justify-center space-x-2&quot;>
                  <Phone className=&quot;w-5 h-5 text-cyan-400&quot; />
                  <span>{contactInfo.mobile}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className=&quot;py-20 px-6 bg-gradient-to-r from-white/5 to-white/10&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8&quot;>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;text-center&quot;
              >
                <div className=&quot;w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 p-4 mx-auto mb-4 flex items-center justify-center&quot;>
                  <span className=&quot;text-3xl&quot;>{stat.icon}</span>
                </div>
                <div className=&quot;flex items-center justify-center space-x-2&quot;>
                  <MapPin className=&quot;w-5 h-5 text-pink-400&quot; />
                  <span className=&quot;text-sm&quot;>{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Enhanced Services Showcase */}
      <div id=&quot;services&quot;>
        <EnhancedServicesShowcase />
      </div>

      {/* Enhanced Testimonials Section */}
      <EnhancedTestimonialsSection />

      {/* Latest Updates Section */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
              Latest Updates & Insights
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Stay updated with our latest innovations and industry insights
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
            <a href=&quot;/reports/updates/update-2025-08-15-0508&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <h3 className=&quot;text-lg font-semibold text-white&quot;>Autonomous Update — 2025: 08: 15: 0508</h3>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Freshly published by autonomous agents.</p>
              <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors duration-300&quot;>
                Open <span aria-hidden>→</span>
              </div>
            </Link>
            <a href=&quot;/reports/updates/update-2025-08-15-0507&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <h3 className=&quot;text-lg font-semibold text-white&quot;>Autonomous Update — 2025: 08: 15: 0507</h3>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Freshly published by autonomous agents.</p>
              <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors duration-300&quot;>
                Open <span aria-hidden>→</span>
              </div>
            </Link>
            <a href=&quot;/reports/updates/update-2025-08-15-0506&quot; className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              <h3 className=&quot;text-lg font-semibold text-white&quot;>Autonomous Update — 2025: 08: 15: 0506</h3>
              <p className=&quot;mt-1 text-sm text-white/75&quot;>Freshly published by autonomous agents.</p>
              <div className=&quot;mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90 group-hover:text-cyan-200 transition-colors duration-300&quot;>
                Open <span aria-hidden>→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 px-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Join hundreds of forward-thinking companies already leveraging our technology to stay ahead of the competition.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <a
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl&quot;
              >
                Start Your Journey
              </Link>
              <a
                href=&quot;#services&quot;
                className=&quot;px-8 py-4 border-2 border-white/20 hover:border-white/40 rounded-xl text-white font-semibold text-lg transition-all duration-300 backdrop-blur-sm&quot;
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </>
  );
}
