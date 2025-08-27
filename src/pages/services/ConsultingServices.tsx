import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Lightbulb, 
  Target, 
  TrendingUp, 
  Users, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Building2,
  Globe,
  Cpu,
  Database
} from 'lucide-react';

const ConsultingServices: React.FC = () => {
  const consultingTypes = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Technology Planning",
      description: "Develop comprehensive technology roadmaps aligned with business objectives",
      features: ["Technology assessment", "Digital transformation strategy", "Innovation roadmap", "Risk analysis"]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Enterprise Architecture",
      description: "Design scalable and efficient technology infrastructure",
      features: ["System architecture design", "Integration planning", "Scalability assessment", "Performance optimization"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Consulting",
      description: "Protect your digital assets with comprehensive security strategies",
      features: ["Security assessment", "Compliance frameworks", "Incident response planning", "Security training"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Strategy & Analytics",
      description: "Transform data into actionable business intelligence",
      features: ["Data governance", "Analytics implementation", "Business intelligence", "Data quality management"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI & Automation Strategy",
      description: "Leverage artificial intelligence for competitive advantage",
      features: ["AI readiness assessment", "Automation opportunities", "Implementation roadmap", "ROI analysis"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cloud & DevOps Strategy",
      description: "Optimize cloud infrastructure and development processes",
      features: ["Cloud migration planning", "DevOps transformation", "Cost optimization", "Performance tuning"]
    }
  ];

  const benefits = [
    "Reduced technology costs through strategic planning",
    "Faster time-to-market with optimized processes",
    "Improved security posture and compliance",
    "Enhanced customer experience through technology",
    "Increased operational efficiency",
    "Better decision-making with data insights"
  ];

  const industries = [
    "Healthcare & Life Sciences",
    "Financial Services",
    "Manufacturing & Logistics",
    "Retail & E-commerce",
    "Energy & Utilities",
    "Government & Public Sector"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Technology Consulting Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Strategic technology consulting to help you make informed decisions, optimize operations, and achieve sustainable growth in the digital age.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/request-quote"
              className="bg-gradient-to-r from-zion-cyan to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-zion-cyan/90 hover:to-blue-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Consulting Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Consulting Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We offer comprehensive technology consulting across all major domains, helping organizations navigate complex digital transformations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-slate-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-zion-cyan mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our Consulting?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our proven methodology and deep industry expertise deliver measurable results and lasting value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-zion-cyan/10 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-zion-cyan" />
                </div>
                <p className="text-lg text-slate-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We have deep experience across multiple industries, understanding unique challenges and regulatory requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="font-semibold text-slate-800">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Technology?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our consulting services can help you achieve your technology goals and drive business success.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/request-quote"
              className="bg-zion-cyan text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-cyan/90 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Schedule a Call
            </Link>
          </motion.div>
        </div>
      </section>
    </div>);
};
export default ConsultingServices;
