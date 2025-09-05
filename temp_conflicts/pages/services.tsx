import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, 
  Users, Target, Star, Zap, Globe, TrendingUp,
  CheckCircle, ArrowRight, ExternalLink, Sparkles
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Brain,
      title: &quot;AI Business Intelligence&quot;,
      description: &quot;Transform your data into actionable insights with our advanced AI-powered analytics platform.&quot;,
      features: [
        &quot;Real-time data processing&quot;,
        &quot;Predictive analytics&quot;,
        &quot;Custom AI models&quot;,
        &quot;Interactive dashboards&quot;,
        &quot;Automated reporting&quot;
      ],
      price: &quot;$499/month&quot;,
      color: &quot;from-purple-500 to-pink-500&quot;,
      href: &quot;/ai-business-intelligence&quot;
    },
    {
      icon: Shield,
      title: &quot;Quantum Cybersecurity&quot;,
      description: &quot;Future-proof your security with quantum-resistant encryption and AI-powered threat detection.&quot;,
      features: [
        &quot;Quantum-resistant encryption&quot;,
        &quot;AI threat detection&quot;,
        &quot;Zero-trust architecture&quot;,
        &quot;24/7 monitoring&quot;,
        &quot;Compliance ready&quot;
      ],
      price: &quot;$799/month&quot;,
      color: &quot;from-red-500 to-orange-500&quot;,
      href: &quot;/quantum-cybersecurity&quot;
    },
    {
      icon: Users,
      title: &quot;AI Customer Experience&quot;,
      description: &quot;Deliver personalized customer experiences at scale with intelligent automation and insights.&quot;,
      features: [
        &quot;Customer journey mapping&quot;,
        &quot;AI personalization&quot;,
        &quot;Sentiment analysis&quot;,
        &quot;Automated support&quot;,
        &quot;Behavioral insights&quot;
      ],
      price: &quot;$399/month&quot;,
      color: &quot;from-green-500 to-teal-500&quot;,
      href: &quot;/ai-customer-experience&quot;
    },
    {
      icon: Database,
      title: &quot;Edge Computing Orchestration&quot;,
      description: &quot;Deploy and manage applications at the edge with intelligent orchestration and optimization.&quot;,
      features: [
        &quot;Edge node management&quot;,
        &quot;IoT device management&quot;,
        &quot;Real-time monitoring&quot;,
        &quot;Load balancing&quot;,
        &quot;Auto-scaling&quot;
      ],
      price: &quot;$349/month&quot;,
      color: &quot;from-yellow-500 to-orange-500&quot;,
      href: &quot;/edge-computing-orchestration&quot;
    },
    {
      icon: Rocket,
      title: &quot;Space Technology Innovation&quot;,
      description: &quot;Accelerate space exploration with cutting-edge AI and quantum technology solutions.&quot;,
      features: [
        &quot;Satellite management&quot;,
        &quot;AI mission planning&quot;,
        &quot;Quantum communication&quot;,
        &quot;Resource optimization&quot;,
        &quot;Risk assessment&quot;
      ],
      price: &quot;$2,499/month&quot;,
      color: &quot;from-violet-500 to-purple-500&quot;,
      href: &quot;/space-technology&quot;
    },
    {
      icon: Atom,
      title: &quot;Neural Interface Development&quot;,
      description: &quot;Build the future of human-computer interaction with advanced neural interfaces.&quot;,
      features: [
        &quot;BCI development tools&quot;,
        &quot;Neural signal processing&quot;,
        &quot;AI pattern recognition&quot;,
        &quot;Real-time analysis&quot;,
        &quot;Custom algorithms&quot;
      ],
      price: &quot;$899/month&quot;,
      color: &quot;from-pink-500 to-rose-500&quot;,
      href: &quot;/neural-interface&quot;
    }
  ];

  const specializedServices = [
    {
      title: &quot;AI Autonomous Systems&quot;,
      description: &quot;Build self-managing, self-optimizing systems that adapt and evolve&quot;,
      icon: Brain,
      color: &quot;from-blue-500 to-cyan-500&quot;
    },
    {
      title: &quot;Quantum Machine Learning&quot;,
      description: &quot;Leverage quantum computing for unprecedented ML performance&quot;,
      icon: Atom,
      color: &quot;from-purple-500 to-pink-500&quot;
    },
    {
      title: &quot;AI-Powered DevOps&quot;,
      description: &quot;Automate and optimize your development and deployment processes&quot;,
      icon: Cpu,
      color: &quot;from-green-500 to-emerald-500&quot;
    },
    {
      title: &quot;Blockchain AI Integration&quot;,
      description: &quot;Combine blockchain security with AI intelligence for next-gen applications&quot;,
      icon: Shield,
      color: &quot;from-orange-500 to-red-500&quot;
    }
  ];

  const industries = [
    &quot;Finance & Banking&quot;,
    &quot;Healthcare & Life Sciences&quot;,
    &quot;Manufacturing & Industry 4.0&quot;,
    &quot;Retail & E-commerce&quot;,
    &quot;Energy & Utilities&quot;,
    &quot;Transportation & Logistics&quot;,
    &quot;Education & Research&quot;,
    &quot;Government & Defense&quot;
  ];

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
      <Head>
        <title>Services — Zion Tech Group | AI, Quantum Computing & Technology Solutions</title>
        <meta name=&quot;description&quot; content=&quot;Discover Zion Tech Group's comprehensive AI, quantum computing, and technology services. Transform your business with cutting-edge solutions.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Zion Tech Group Services&quot; />
        <meta property=&quot;og:description&quot; content=&quot;AI, quantum computing, and technology solutions for modern businesses.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI services, quantum computing, technology solutions, business intelligence, cybersecurity&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/services&quot; />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className=&quot;relative pt-32 pb-20 px-6&quot;>
        <div className=&quot;max-w-6xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6&quot;>
              Our Services
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed&quot;>
              Comprehensive AI, quantum computing, and technology solutions designed to transform 
              your business and drive innovation across every industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-6xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Core Technology Services</h2>
            <p className=&quot;text-xl text-slate-300 max-w-3xl mx-auto&quot;>
              Choose from our comprehensive suite of AI and quantum technology solutions, 
              each designed to address specific business challenges and opportunities.
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 hover:border-slate-600/50 transition-all duration-300 group&quot;
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{service.title}</h3>
                <p className=&quot;text-slate-300 mb-6 leading-relaxed&quot;>{service.description}</p>
                
                <div className=&quot;mb-6&quot;>
                  <h4 className=&quot;text-white font-semibold mb-3&quot;>Key Features:</h4>
                  <ul className=&quot;space-y-2&quot;>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-center space-x-2 text-slate-300 text-sm&quot;>
                        <CheckCircle className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className=&quot;flex items-center justify-between mb-6&quot;>
                  <div className=&quot;text-2xl font-bold text-blue-400&quot;>{service.price}</div>
                  <a
                    href={service.href}
                    className=&quot;flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200&quot;
                  >
                    <span>Learn More</span>
                    <ArrowRight className=&quot;w-4 h-4&quot; />
                  </Link>
                </div>
                
                <Link
                  href=&quot;/contact&quot;
                  className=&quot;w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg text-white font-semibold text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2&quot;
                >
                  <span>Get Started</span>
                  <ExternalLink className=&quot;w-4 h-4&quot; />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className=&quot;py-20 px-6 bg-slate-900/50&quot;>
        <div className=&quot;max-w-6xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Specialized Solutions</h2>
            <p className=&quot;text-xl text-slate-300 max-w-3xl mx-auto&quot;>
              Advanced technology solutions for specific use cases and emerging opportunities.
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {specializedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 hover:border-slate-600/50 transition-all duration-300&quot;
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{service.title}</h3>
                <p className=&quot;text-slate-300 leading-relaxed mb-6&quot;>{service.description}</p>
                <Link
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200&quot;
                >
                  <span>Discuss Requirements</span>
                  <ArrowRight className=&quot;w-4 h-4&quot; />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-6xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Industries We Serve</h2>
            <p className=&quot;text-xl text-slate-300 max-w-3xl mx-auto&quot;>
              Our technology solutions are designed to work across all industries, 
              with specialized expertise in key sectors.
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6&quot;>
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                viewport={{ once: true }}
                className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 text-center hover:border-slate-600/50 transition-all duration-300 group&quot;
              >
                <div className=&quot;w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300&quot;>
                  <Star className=&quot;w-6 h-6 text-white&quot; />
                </div>
                <h3 className=&quot;text-white font-semibold&quot;>{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className=&quot;py-20 px-6 bg-slate-900/50&quot;>
        <div className=&quot;max-w-6xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Why Choose Zion Tech Group?</h2>
            <p className=&quot;text-xl text-slate-300 max-w-3xl mx-auto&quot;>
              We combine cutting-edge technology with deep industry expertise to deliver 
              solutions that drive real business value.
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className=&quot;text-center&quot;
            >
              <div className=&quot;w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6&quot;>
                <Sparkles className=&quot;w-10 h-10 text-white&quot; />
              </div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Cutting-Edge Technology</h3>
              <p className=&quot;text-slate-300 leading-relaxed&quot;>
                Access to the latest AI, quantum computing, and emerging technologies 
                that give you a competitive advantage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className=&quot;text-center&quot;
            >
              <div className=&quot;w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6&quot;>
                <Users className=&quot;w-10 h-10 text-white&quot; />
              </div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Expert Team</h3>
              <p className=&quot;text-slate-300 leading-relaxed&quot;>
                World-class engineers, scientists, and consultants with deep expertise 
                in AI, quantum computing, and industry applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className=&quot;text-center&quot;
            >
              <div className=&quot;w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6&quot;>
                <TrendingUp className=&quot;w-10 h-10 text-white&quot; />
              </div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Proven Results</h3>
              <p className=&quot;text-slate-300 leading-relaxed&quot;>
                Track record of successful implementations across 500+ projects 
                with measurable business impact and ROI.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-slate-300 mb-8 max-w-2xl mx-auto&quot;>
              Let's discuss how our AI and quantum technology solutions can help 
              you achieve your business goals.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105&quot;
              >
                Schedule Consultation
              </Link>
              <Link
                href=&quot;/case-studies&quot;
                className=&quot;px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10&quot;
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}
