import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Shield, 
  Users, 
  FileText, 
  Lock, 
  Globe,
  ArrowRight,
  CheckCircle,
  Award
} from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Government Infrastructure',
    description: 'Secure, scalable technology infrastructure for public sector'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'FedRAMP, FISMA, and government security standards'
  },
  {
    icon: Users,
    title: 'Citizen Services',
    description: 'Digital transformation for improved citizen experience'
  },
  {
    icon: FileText,
    title: 'Regulatory Compliance',
    description: 'Full compliance with government regulations and standards'
  },
  {
    icon: Lock,
    title: 'Data Protection',
    description: 'Advanced data security and privacy protection'
  },
  {
    icon: Globe,
    title: 'Interoperability',
    description: 'Seamless integration with existing government systems'
  }
];

const solutions = [
  {
    title: 'Digital Government Platform',
    description: 'Comprehensive digital transformation platform for government agencies',
    features: ['Citizen Portals', 'Service Automation', 'Workflow Management', 'Integration APIs']
  },
  {
    title: 'Government Cybersecurity',
    description: 'Advanced security solutions meeting federal requirements',
    features: ['Threat Detection', 'Incident Response', 'Compliance Monitoring', 'Security Training']
  },
  {
    title: 'Data Analytics & Reporting',
    description: 'Intelligent analytics for government decision-making',
    features: ['Performance Metrics', 'Trend Analysis', 'Predictive Analytics', 'Compliance Reporting']
  },
  {
    title: 'Cloud Migration Services',
    description: 'Secure cloud transformation for government operations',
    features: ['FedRAMP Compliance', 'Multi-Cloud Strategy', 'Cost Optimization', 'Security First']
  }
];

export default function GovernmentSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="Government Solutions - Zion Tech Group" 
        description="Secure, compliant technology solutions for government agencies. Digital transformation, cybersecurity, and citizen services with FedRAMP and FISMA compliance." 
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Government Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform government operations with secure, compliant technology solutions. 
            Drive digital transformation, enhance citizen services, and ensure 
            regulatory compliance with FedRAMP and FISMA standards.
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Zion Tech Group for Government?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our government solutions are built with deep understanding of 
            public sector requirements, security standards, and citizen needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Government Solutions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions designed to address the unique challenges of 
            government agencies and public sector organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50"
            >
              <h3 className="text-2xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-gray-300 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Compliance Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Government Compliance & Security</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our solutions meet the highest standards for government security and regulatory compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">FedRAMP Authorized</h3>
              <p className="text-gray-300">Cloud security authorization for federal agencies</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">FISMA Compliant</h3>
              <p className="text-gray-300">Federal Information Security Management Act compliance</p>
            </div>
            <div className="text-center">
              <Lock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">NIST Standards</h3>
              <p className="text-gray-300">National Institute of Standards and Technology compliance</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Government Services?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how our government solutions can drive digital transformation, 
            enhance citizen services, and ensure compliance for your agency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View All Services
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}