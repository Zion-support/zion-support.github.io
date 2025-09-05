import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Factory, ArrowRight, CheckCircle, Zap, Target, Users, 
  TrendingUp, Globe, Cpu, Database, Star, Shield, Building2, Car
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function IndustrySolutionsPage() {
  const industries = [
    {
      title: &quot;Financial Services&quot;,
      description: &quot;AI-powered solutions for banking, insurance, and fintech companies&quot;,
      features: [
        &quot;Fraud detection&quot;,
        &quot;Risk assessment&quot;,
        &quot;Compliance automation&quot;,
        &quot;Customer insights&quot;
      ],
      icon: Building2,
      color: &quot;from-green-500 to-emerald-500&quot;
    },
    {
      title: &quot;Healthcare&quot;,
      description: &quot;Technology solutions for healthcare providers and pharmaceutical companies&quot;,
      features: [
        &quot;Patient data analytics&quot;,
        &quot;Drug discovery AI&quot;,
        &quot;Telemedicine platforms&quot;,
        &quot;Security compliance&quot;
      ],
      icon: Shield,
      color: &quot;from-blue-500 to-cyan-500&quot;
    },
    {
      title: &quot;Manufacturing&quot;,
      description: &quot;Smart manufacturing solutions with IoT and AI integration&quot;,
      features: [
        &quot;Predictive maintenance&quot;,
        &quot;Quality control&quot;,
        &quot;Supply chain optimization&quot;,
        &quot;Automation systems&quot;
      ],
      icon: Factory,
      color: &quot;from-orange-500 to-red-500&quot;
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: &quot;Industry Expertise&quot;,
      description: &quot;Deep understanding of your industry's unique challenges and requirements&quot;
    },
    {
      icon: Shield,
      title: &quot;Compliance Ready&quot;,
      description: &quot;Solutions designed to meet industry-specific regulations and standards&quot;
    },
    {
      icon: Users,
      title: &quot;Domain Knowledge&quot;,
      description: &quot;Team with extensive experience in your industry vertical&quot;
    },
    {
      icon: Star,
      title: &quot;Best Practices&quot;,
      description: &quot;Proven solutions based on industry best practices and standards&quot;
    }
  ];

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden&quot;>
      <Head>
        <title>Industry Specialized Solutions - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Tailored technology solutions for specific industries including financial services, healthcare, manufacturing, and more.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;industry solutions, financial services, healthcare, manufacturing, specialized solutions, Zion Tech Group&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Industry Specialized Solutions - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Tailored technology solutions for specific industries.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/solutions/industry&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/solutions/industry&quot; />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className=&quot;pt-32 pb-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className=&quot;w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 p-5 mx-auto mb-8&quot;>
              <Factory className=&quot;w-10 h-10 text-white&quot; />
            </div>
            <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent&quot;>
              Industry Specialized Solutions
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8&quot;>
              Tailored technology solutions designed specifically for your industry. 
              From financial services to healthcare, we understand your unique challenges.
            </p>
            <motion.a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl&quot;
            >
              <span>Discuss Industry Needs</span>
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent&quot;>
              Industry Solutions
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Specialized solutions designed for your industry's unique requirements
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-emerald-400/30 transition-all duration-300 transform hover:scale-105&quot;
              >
                <div className={`pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r ${industry.color.replace('from-', 'from-').replace('to-', 'to-')}/0 via-${industry.color.split('-')[1]}-400/10 to-${industry.color.split('-')[3]}-500/0 opacity-0 blur-2xl transition-opacity hover:opacity-100`} />
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} p-4 mb-6`}>
                  <industry.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{industry.title}</h3>
                <p className=&quot;text-white/70 mb-6&quot;>{industry.description}</p>
                
                <ul className=&quot;space-y-3 mb-6&quot;>
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center space-x-3&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-emerald-400 flex-shrink-0&quot; />
                      <span className=&quot;text-white/80&quot;>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.a
                  href=&quot;mailto:kleber@ziontechgroup.com&quot;
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className=&quot;block w-full text-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium rounded-lg transition-all duration-300&quot;
                >
                  Learn More
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className=&quot;py-20 px-6 bg-gradient-to-r from-white/5 to-white/10&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent&quot;>
              Why Industry Specialized?
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Discover the advantages of our industry-focused approach
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10&quot;
              >
                <div className=&quot;w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-4 flex-shrink-0&quot;>
                  <benefit.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <div>
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{benefit.title}</h3>
                  <p className=&quot;text-white/70&quot;>{benefit.description}</p>
                </div>
              </motion.div>
            ))}
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
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent&quot;>
              Ready for Industry-Specific Solutions?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Let's discuss how our industry expertise can solve your unique challenges
            </p>
            <motion.a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl&quot;
            >
              <span>Discuss Industry Needs</span>
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}