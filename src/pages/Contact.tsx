import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';return (
    <>
      <SEO title="Contact - Zion Tech Group" />"      <div className="min-h-screen bg-white py-20">"        <div className="max-w-4xl mx-auto px-4">"          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact</h1>"          <p className="text-lg text-gray-600">Content coming soon...</p>"        </div>"      </div>
</>);};
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // // // // // console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      comp: '',
      phone: '',
      service: '',
      message: '',
      budget: '',
      timeline: ''
    })};

  const services = [
    { id: 'ai-analytics', name: 'AI & Analytics Solutions', icon: <Brain className="w-5 h-5" /> },
    { id: 'quantum-computing', name: 'Quantum Computing Services', icon: <Cpu className="w-5 h-5" /> },
    { id: 'blockchain', name: 'Blockchain Solutions', icon: <Database className="w-5 h-5" /> },
    { id: 'iot-smart-cities', name: 'IoT & Smart Cities', icon: <Network className="w-5 h-5" /> },
    { id: 'cybersecurity', name: 'Cybersecurity Services', icon: <Shield className="w-5 h-5" /> },
    { id: 'metaverse', name: 'Metaverse Solutions', icon: <Globe className="w-5 h-5" /> },
    { id: 'custom', name: 'Custom Solution', icon: <Rocket className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-24 text-center text-white">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
          We'd love to hear about your project. Reach us via  of the channels below.
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
                    <p className="text-zion-slate-light text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-zion-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-zion-purple" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <p className="text-zion-slate-light">+1 302 464 0950</p>
                    <p className="text-zion-slate-light text-sm">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-zion-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-zion-green" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Location</h3>
                    <p className="text-zion-slate-light">364 E Main St STE 1008, Middletown DE 19709</p>
                    <p className="text-zion-slate-light text-sm">Serving clients worldwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-zion-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-zion-orange" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Response Time</h3>
                    <p className="text-zion-slate-light">Within 24 hours</p>
                    <p className="text-zion-slate-light text-sm">Emergency support available</p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Proven Excellence</h3>
            <p className="text-slate-400">Award-winning solutions with a track record of success across industries.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">AI-First Approach</h3>
            <p className="text-slate-400">Cutting-edge AI and machine learning solutions that give you a competitive edge.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
            <p className="text-slate-400">Bank-level security and compliance standards for your peace of mind.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Rapid Deployment</h3>
            <p className="text-slate-400">Quick implementation and deployment with minimal disruption to your business.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;