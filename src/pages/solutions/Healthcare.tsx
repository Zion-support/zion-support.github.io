import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Stethoscope, 
  Shield, 
  Brain, 
  Database, 
  Users,
  ArrowRight,
  CheckCircle,
  Activity
} from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Patient Care',
    description: 'AI-powered diagnostics and personalized treatment plans'
  },
  {
    icon: Stethoscope,
    title: 'Clinical Decision Support',
    description: 'Evidence-based recommendations and treatment guidance'
  },
  {
    icon: Shield,
    title: 'HIPAA Compliance',
    description: 'Secure, compliant healthcare data management'
  },
  {
    icon: Brain,
    title: 'AI Diagnostics',
    description: 'Advanced machine learning for medical imaging and analysis'
  },
  {
    icon: Database,
    title: 'Interoperability',
    description: 'Seamless integration with existing healthcare systems'
  },
  {
    icon: Users,
    title: 'Care Coordination',
    description: 'Streamlined communication between healthcare providers'
  }
];

const solutions = [
  {
    title: 'AI-Powered Diagnostics',
    description: 'Advanced machine learning algorithms for medical imaging and diagnostic support',
    features: ['Medical Imaging Analysis', 'Symptom Assessment', 'Risk Prediction', 'Treatment Recommendations']
  },
  {
    title: 'Electronic Health Records',
    description: 'Comprehensive EHR solutions with AI-powered insights and automation',
    features: ['Patient Data Management', 'Clinical Workflows', 'Interoperability', 'Security & Compliance']
  },
  {
    title: 'Telemedicine Platform',
    description: 'Secure, HIPAA-compliant virtual care solutions',
    features: ['Video Consultations', 'Remote Monitoring', 'Prescription Management', 'Patient Portal']
  },
  {
    title: 'Healthcare Analytics',
    description: 'Data-driven insights for improved patient outcomes and operational efficiency',
    features: ['Population Health', 'Predictive Analytics', 'Performance Metrics', 'Quality Improvement']
  }
];

export default function HealthcareSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="Healthcare Solutions - Zion Tech Group" 
        description="Clinical AI, patient analytics, secure interoperability, and compliance-ready platforms for healthcare organizations." 
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
            Healthcare Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Accelerate outcomes with AI diagnostics, care management analytics, FHIR-based integrations, 
            and HIPAA-compliant data flows. Transform healthcare delivery with cutting-edge technology.
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
          <h2 className="text-3xl font-bold mb-4">Why Choose Zion Tech Group for Healthcare?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our healthcare solutions are built with deep understanding of clinical workflows, 
            regulatory requirements, and patient care needs.
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
          <h2 className="text-3xl font-bold mb-4">Healthcare Solutions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions designed to improve patient care, streamline operations, 
            and ensure compliance with healthcare regulations.
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
            <h2 className="text-3xl font-bold mb-4">Healthcare Compliance & Security</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our solutions meet the highest standards for healthcare data security and regulatory compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">HIPAA Compliant</h3>
              <p className="text-gray-300">Full compliance with healthcare privacy regulations</p>
            </div>
            <div className="text-center">
              <Activity className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">SOC 2 Type II</h3>
              <p className="text-gray-300">Enterprise-grade security and availability</p>
            </div>
            <div className="text-center">
              <Database className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">FHIR Ready</h3>
              <p className="text-gray-300">Interoperability with modern healthcare standards</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Healthcare?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how our healthcare solutions can improve patient outcomes, 
            streamline operations, and ensure compliance for your organization.
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
