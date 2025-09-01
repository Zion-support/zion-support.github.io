import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  UserCheck, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Clock,
  Globe,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Scale,
  Gavel,
  Handshake,
  Lock,
  Eye,
  Database,
  Users,
  Settings
} from 'lucide-react';

export default function Terms() {
  const lastUpdated = 'January 15, 2025';
  const effectiveDate = 'January 15, 2025';

  const serviceCategories = [
    {
      icon: Database,
      title: 'AI & Machine Learning Services',
      description: 'Custom AI solutions, machine learning models, and intelligent automation services.',
      includes: ['Custom AI development', 'ML model training', 'AI integration', 'Predictive analytics']
    },
    {
      icon: Globe,
      title: 'IT Infrastructure & Cloud',
      description: 'Cloud computing, infrastructure management, and digital transformation services.',
      includes: ['Cloud migration', 'Infrastructure setup', 'DevOps consulting', 'Security implementation']
    },
    {
      icon: Users,
      title: 'Consulting & Advisory',
      description: 'Strategic technology consulting, digital transformation, and business process optimization.',
      includes: ['Technology strategy', 'Digital transformation', 'Process optimization', 'Change management']
    },
    {
      icon: Settings,
      title: 'Custom Software Development',
      description: 'Bespoke software solutions, web applications, and mobile app development.',
      includes: ['Custom applications', 'Web development', 'Mobile apps', 'API development']
    }
  ];

  const userObligations = [
    {
      icon: CheckCircle,
      title: 'Provide Accurate Information',
      description: 'Supply truthful and complete information when using our services or creating accounts.'
    },
    {
      icon: CheckCircle,
      title: 'Comply with Laws',
      description: 'Use our services in accordance with all applicable laws and regulations.'
    },
    {
      icon: CheckCircle,
      title: 'Respect Intellectual Property',
      description: 'Respect our intellectual property rights and those of third parties.'
    },
    {
      icon: CheckCircle,
      title: 'Maintain Security',
      description: 'Keep your account credentials secure and report any security concerns.'
    },
    {
      icon: CheckCircle,
      title: 'Use Services Appropriately',
      description: 'Use our services for their intended purpose and avoid misuse or abuse.'
    },
    {
      icon: CheckCircle,
      title: 'Pay for Services',
      description: 'Pay all fees and charges associated with the services you use.'
    }
  ];

  const prohibitedActivities = [
    {
      icon: XCircle,
      title: 'Illegal Activities',
      description: 'Any activities that violate applicable laws or regulations.'
    },
    {
      icon: XCircle,
      title: 'Malware & Viruses',
      description: 'Distributing harmful software or attempting to compromise our systems.'
    },
    {
      icon: XCircle,
      title: 'Unauthorized Access',
      description: 'Attempting to gain unauthorized access to our systems or other users\' accounts.'
    },
    {
      icon: XCircle,
      title: 'Data Breaches',
      description: 'Attempting to access, modify, or destroy data without authorization.'
    },
    {
      icon: XCircle,
      title: 'Service Interference',
      description: 'Interfering with the operation of our services or other users\' experience.'
    },
    {
      icon: XCircle,
      title: 'Spam & Harassment',
      description: 'Sending unsolicited communications or engaging in harassing behavior.'
    }
  ];

  const intellectualProperty = [
    {
      icon: Shield,
      title: 'Our IP Rights',
      description: 'We retain all rights to our proprietary technology, software, and intellectual property.',
      details: ['Software code and applications', 'Trademarks and branding', 'Patents and inventions', 'Trade secrets and know-how']
    },
    {
      icon: UserCheck,
      title: 'Your IP Rights',
      description: 'You retain ownership of your content and intellectual property that you provide to us.',
      details: ['Your business data', 'Custom requirements', 'Feedback and suggestions', 'Your brand assets']
    },
    {
      icon: Handshake,
      title: 'Licensed Use',
      description: 'We grant you a limited license to use our services for their intended purpose.',
      details: ['Non-exclusive license', 'Non-transferable rights', 'Limited to service use', 'Subject to these terms']
    }
  ];

  const paymentTerms = [
    {
      icon: Clock,
      title: 'Payment Schedule',
      description: 'Fees are typically due upon service delivery or according to agreed payment terms.'
    },
    {
      icon: Scale,
      title: 'Late Payments',
      description: 'Late payments may result in service suspension and additional charges.'
    },
    {
      icon: Gavel,
      title: 'Dispute Resolution',
      description: 'Payment disputes should be reported within 30 days of the invoice date.'
    },
    {
      icon: Lock,
      title: 'Refund Policy',
      description: 'Refunds are provided according to our service-specific refund policies.'
    }
  ];

  const liabilityLimitations = [
    {
      icon: AlertTriangle,
      title: 'Service Availability',
      description: 'We strive for high availability but cannot guarantee uninterrupted service access.'
    },
    {
      icon: AlertTriangle,
      title: 'Data Loss',
      description: 'We implement backup and recovery procedures but cannot guarantee against all data loss scenarios.'
    },
    {
      icon: AlertTriangle,
      title: 'Third-Party Services',
      description: 'We are not responsible for the performance or reliability of third-party services we integrate with.'
    },
    {
      icon: AlertTriangle,
      title: 'Force Majeure',
      description: 'We are not liable for delays or failures due to circumstances beyond our reasonable control.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-8">
                <FileText className="w-4 h-4 mr-2" />
                Legal Terms & Conditions
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Terms of
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {' '}Service
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                These terms govern your use of Zion Tech Group's services. By using our services, you agree to be bound by these terms and conditions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 group"
                >
                  Learn More
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Terms Overview */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Terms Overview
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These Terms of Service establish the legal framework for our relationship and outline the rights and responsibilities of both parties.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300">
                <Clock className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-white mb-3">Last Updated</h3>
                <p className="text-gray-400">{lastUpdated}</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300">
                <FileText className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-white mb-3">Effective Date</h3>
                <p className="text-gray-400">{effectiveDate}</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300">
                <Globe className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-white mb-3">Applicability</h3>
                <p className="text-gray-400">Global Coverage</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Covered */}
      <section id="services" className="py-20 bg-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Services Covered
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These terms apply to all services provided by Zion Tech Group, including but not limited to the following categories.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-300">Includes:</p>
                    <ul className="space-y-1">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Obligations */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Your Obligations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              As a user of our services, you have certain responsibilities and obligations that help ensure a positive experience for all users.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userObligations.map((obligation, index) => (
              <motion.div
                key={obligation.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <obligation.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{obligation.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{obligation.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-20 bg-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Prohibited Activities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The following activities are strictly prohibited and may result in immediate service termination and legal action.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prohibitedActivities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <activity.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{activity.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Intellectual Property
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding intellectual property rights is crucial for both parties in our service relationship.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {intellectualProperty.map((ip, index) => (
              <motion.div
                key={ip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <ip.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{ip.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{ip.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-300">Examples:</p>
                    <ul className="space-y-1">
                      {ip.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-20 bg-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Payment Terms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Clear understanding of payment obligations, schedules, and policies ensures smooth service delivery.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paymentTerms.map((term, index) => (
              <motion.div
                key={term.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <term.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{term.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{term.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Liability Limitations */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Liability Limitations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              While we strive for excellence, it's important to understand the limitations of our liability and service guarantees.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {liabilityLimitations.map((limitation, index) => (
              <motion.div
                key={limitation.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <limitation.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{limitation.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{limitation.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Questions About These Terms?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  If you have any questions about these Terms of Service or need clarification on any provision, please contact our legal team.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <Mail className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Legal Email</h3>
                    <p className="text-blue-100">legal@ziontechgroup.com</p>
                  </div>
                  
                  <div className="text-center">
                    <Phone className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <p className="text-blue-100">+1 (302) 555-0123</p>
                  </div>
                  
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                    <p className="text-blue-100">123 Innovation Drive<br />Middletown, DE 19709</p>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-white/10 rounded-2xl border border-white/20">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-blue-200 mt-1 flex-shrink-0" />
                    <div className="text-left">
                      <h4 className="text-lg font-semibold text-white mb-2">Legal Notice</h4>
                      <p className="text-blue-100">
                        These terms constitute a legally binding agreement. We recommend consulting with legal counsel if you have questions about your rights and obligations under these terms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
