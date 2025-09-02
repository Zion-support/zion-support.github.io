<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  UserCheck, 
  Users, 
  Globe, 
  Award, 
  TrendingUp, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Database 
} from 'lucide-react';

const Partners: React.FC = () => {
  const partnerCategories = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Technology Partners",
      description: "Leading technology companies that provide cutting-edge solutions and infrastructure.",
      partners: [
        "Microsoft Azure",
        "Amazon Web Services",
        "Google Cloud Platform",
        "Oracle Cloud",
        "IBM Cloud"
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & ML Partners",
      description: "Innovative AI companies that help us deliver intelligent solutions.",
      partners: [
        "OpenAI",
        "Anthropic",
        "Hugging Face",
        "DataRobot",
        "H2O.ai"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Partners",
      description: "Cybersecurity experts ensuring our solutions meet the highest security standards.",
      partners: [
        "CrowdStrike",
        "Palo Alto Networks",
        "Fortinet",
        "Check Point",
        "Trend Micro"
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Partners",
      description: "Data analytics and business intelligence partners for comprehensive insights.",
      partners: [
        "Tableau",
        "Power BI",
        "Qlik",
        "Looker",
        "Sisense"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consulting Partners",
      description: "Expert consulting firms that help us deliver comprehensive business solutions.",
      partners: [
        "McKinsey & Company",
        "Bain & Company",
        "BCG",
        "Deloitte",
        "PwC"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Partners",
      description: "International partners helping us serve clients worldwide.",
      partners: [
        "European Tech Alliance",
        "Asia-Pacific Innovation Hub",
        "Latin America Digital",
        "Middle East Tech",
        "Africa Innovation Network"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Accelerated Innovation",
      description: "Access to cutting-edge technologies and research from industry leaders."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Enhanced Capabilities",
      description: "Expanded service offerings and specialized expertise across domains."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Best practices and standards from world-class technology companies."
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Strategic Growth",
      description: "Collaborative opportunities for mutual business expansion and success."
    }
  ];

  return (
    <>
      <SEO 
        title="Partners - Zion Tech Group"
        description="Strategic partnerships that drive innovation and deliver exceptional value to our clients."
        keywords="partners, technology partners, AI partners, cybersecurity partners, consulting partners"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Strategic Partners
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Strategic partnerships that drive innovation and deliver exceptional value to our clients. 
                Together, we're building the future of technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partner Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Partnership Categories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We collaborate with industry leaders across multiple domains to provide comprehensive solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnerCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{category.title}</h3>
                  <p className="text-gray-300 mb-6 text-center">{category.description}</p>
                  <div className="space-y-2">
                    {category.partners.map((partner, idx) => (
                      <div key={idx} className="text-sm text-blue-300 text-center">
                        {partner}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the benefits of partnering with Zion Tech Group and how we can grow together.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Partnership Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our streamlined partnership process ensures a smooth collaboration from start to finish.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Initial Discussion",
                  description: "We explore mutual opportunities and alignment of goals."
                },
                {
                  step: "02",
                  title: "Partnership Design",
                  description: "We design a customized partnership framework and terms."
                },
                {
                  step: "03",
                  title: "Agreement & Launch",
                  description: "We formalize the partnership and begin collaboration."
                },
                {
                  step: "04",
                  title: "Growth & Success",
                  description: "We continuously optimize and expand our partnership."
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl p-12 border border-blue-400/30"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join our network of strategic partners and together we can create innovative solutions 
                that transform businesses and drive success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  <UserCheck className="w-5 h-5 mr-2" />
                  Start Partnership Discussion
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Learn More About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Partners;
=======
>>>>>>> origin/main
