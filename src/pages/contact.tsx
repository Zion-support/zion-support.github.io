import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  AlertCircle,
  User,
  MessageSquare,
  Building
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: 'general'
  });

  const serviceOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'ai-autonomous-research', label: 'AI Autonomous Research Assistant' },
    { value: 'ai-supply-chain', label: 'AI Supply Chain Optimization' },
    { value: 'ai-content-marketing', label: 'AI Content Marketing Suite' },
    { value: 'ai-workflow-orchestrator', label: 'AI Workflow Orchestrator' },
    { value: 'ai-customer-experience', label: 'AI Customer Experience Analytics' },
    { value: 'ai-financial-risk', label: 'AI Financial Risk Management' },
    { value: 'ai-cybersecurity', label: 'AI Cybersecurity Solutions' },
    { value: 'cloud-devops', label: 'Cloud & DevOps Services' },
    { value: 'digital-transformation', label: 'Digital Transformation' },
    { value: 'micro-saas', label: 'Micro SaaS Solutions' },
    { value: 'it-consulting', label: 'IT Consulting' },
    { value: 'quantum-computing', label: 'Quantum Computing' },
    { value: 'iot-edge', label: 'IoT & Edge Computing' },
    { value: 'custom-development', label: 'Custom Development' }
  ];
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        service: 'general'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Ready to transform your business? Let's discuss how our cutting-edge AI and technology solutions can drive your success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Building className="w-6 h-6 mr-3 text-cyan-400" />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">Phone</p>
                    <a 
                      href="tel:+13024640950" 
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg"
                    >
                      +1 (302) 464-0950
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">Email</p>
                    <a 
                      href="mailto:kleber@ziontechgroup.com" 
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg"
                    >
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">Address</p>
                    <p className="text-gray-300 text-lg">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">Business Hours</p>
                    <div className="text-gray-300 text-lg space-y-1">
                      <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM EST</p>
                      <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM EST</p>
                      <p><strong>Sunday:</strong> Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <a 
                  href="tel:+13024640950" 
                  className="flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Call Now
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="flex items-center justify-center w-full bg-white/10 hover:bg-white/20 border-2 border-cyan-400/30 hover:border-cyan-400/50 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              📞 Call Now
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              ✉️ Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;