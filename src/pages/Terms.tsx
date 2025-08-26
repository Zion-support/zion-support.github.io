import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { motion } from 'framer-motion';
>>>>>>> cursor/website-audit-and-enhancement-1eed
import { 
  FileText, 
  Shield, 
  Users, 
<<<<<<< HEAD
  Globe, 
  AlertTriangle, 
  CheckCircle,
  ArrowRight,
  Scale,
  Gavel,
  BookOpen
} from 'lucide-react';

export default function Terms() {
  const keyTerms = [
    {
      icon: Users,
      title: "Service Users",
      description: "Individuals and businesses using our marketplace and services."
    },
    {
      icon: Globe,
      title: "Platform",
      description: "Our website, applications, and related services."
    },
    {
      icon: Shield,
      title: "Content",
      description: "Information, data, and materials shared on our platform."
    },
    {
      icon: Scale,
      title: "Services",
      description: "AI solutions, consulting, and technology services offered."
    }
  ];

  const userObligations = [
    {
      title: "Account Security",
      description: "Maintain secure account credentials and notify us of unauthorized access."
    },
    {
      title: "Accurate Information",
      description: "Provide truthful and up-to-date information in your profile and communications."
    },
    {
      title: "Compliance",
      description: "Follow all applicable laws and regulations when using our services."
    },
    {
      title: "Respectful Conduct",
      description: "Treat other users with respect and avoid harassment or discrimination."
    },
    {
      title: "Intellectual Property",
      description: "Respect copyrights and intellectual property rights of others."
    },
    {
      title: "Service Usage",
      description: "Use our services for their intended purpose and avoid abuse or misuse."
    }
  ];

  const prohibitedActivities = [
    "Illegal activities or violations of applicable laws",
    "Harassment, discrimination, or hate speech",
    "Spam, phishing, or fraudulent activities",
    "Distribution of malware or harmful code",
    "Attempts to gain unauthorized access to systems",
    "Violation of intellectual property rights",
    "Interference with service operation",
    "Sharing of confidential or sensitive information"
  ];

  const serviceTerms = [
    {
      category: "AI Solutions",
      terms: [
        "AI services are provided 'as is' with no warranty of accuracy",
        "Users are responsible for reviewing and validating AI outputs",
        "We reserve the right to improve and update AI models",
        "Usage limits may apply based on service tier"
      ]
    },
    {
      category: "Consulting Services",
      terms: [
        "Services are provided by qualified professionals",
        "Project timelines and deliverables are specified in agreements",
        "Changes to scope may affect pricing and timelines",
        "Intellectual property rights are defined in service contracts"
      ]
    },
    {
      category: "Marketplace",
      terms: [
        "We facilitate connections but don't guarantee outcomes",
        "Users are responsible for their own transactions",
        "Dispute resolution procedures are available",
        "Quality standards and verification processes apply"
      ]
=======
  Lock, 
  Scale, 
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

export default function Terms() {
  const sections = [
    {
      icon: <Shield className="w-6 h-6 text-zion-cyan" />,
      title: "Acceptance of Terms",
      content: "By accessing and using Zion Tech Group's marketplace platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      icon: <Users className="w-6 h-6 text-zion-purple" />,
      title: "Description of Service",
      content: "Zion Tech Group provides a marketplace platform that connects AI and technology professionals with opportunities, services, and equipment. Our platform includes talent marketplace, service listings, equipment marketplace, community forums, and AI matching services."
    },
    {
      icon: <Lock className="w-6 h-6 text-green-400" />,
      title: "User Accounts",
      content: "To access certain features, you must create an account with accurate information. You are responsible for safeguarding your password and all activities under your account."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-yellow-400" />,
      title: "User Conduct",
      content: "You agree not to violate laws, infringe rights, upload malicious content, gain unauthorized access, interfere with service, engage in fraud, or harm other users."
    },
    {
      icon: <Scale className="w-6 h-6 text-red-400" />,
      title: "Content and Intellectual Property",
      content: "You retain ownership of your content but grant us a license to use it. Platform content is owned by Zion Tech Group and protected by intellectual property laws."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-emerald-400" />,
      title: "Marketplace Transactions",
      content: "When engaging with services through our platform, you enter agreements with service providers. Zion Tech Group acts as a facilitator and is not a party to these agreements."
>>>>>>> cursor/website-audit-and-enhancement-1eed
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Terms of <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
              These terms govern your use of Zion Tech Group's services. Please read them carefully 
              to understand your rights and responsibilities.
            </p>
            <div className="flex items-center justify-center gap-2 text-zion-slate-light">
              <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
              <span className="text-sm">Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Terms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Key Terms & Definitions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Understanding these terms helps clarify our agreement and your rights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyTerms.map((term, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20 text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <term.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{term.title}</h3>
                <p className="text-zion-slate-light">{term.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acceptance & Changes */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Acceptance & Changes</h2>
              <div className="space-y-6">
                <div className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    Acceptance
                  </h3>
                  <p className="text-zion-slate-light">
                    By using our services, you agree to these terms. If you don't agree, 
                    please don't use our platform.
                  </p>
                </div>
                
                <div className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
                    Changes
                  </h3>
                  <p className="text-zion-slate-light">
                    We may update these terms periodically. We'll notify you of significant 
                    changes via email or platform notifications.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-zion-blue-light/10 rounded-lg p-8 border border-zion-blue-light/20">
              <h3 className="text-2xl font-bold text-white mb-6">Important Notice</h3>
              <p className="text-zion-slate-light mb-6">
                These terms form a legally binding agreement between you and Zion Tech Group. 
                Please review them carefully and contact us if you have questions.
              </p>
              <div className="flex items-center text-zion-cyan">
                <BookOpen className="w-5 h-5 mr-2" />
                <span className="text-sm">Legal document - seek counsel if needed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Obligations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Your Obligations</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              As a user of our services, you have certain responsibilities to maintain 
              a safe and productive environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userObligations.map((obligation, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
                <h3 className="text-lg font-semibold text-white mb-3">{obligation.title}</h3>
                <p className="text-zion-slate-light text-sm">{obligation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Prohibited Activities</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              To maintain a safe and professional environment, certain activities are not allowed 
              on our platform.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-zion-blue-light/10 rounded-lg p-8 border border-zion-blue-light/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {prohibitedActivities.map((activity, index) => (
                  <div key={index} className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-zion-slate-light">{activity}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400 text-sm text-center">
                  <strong>Violation of these terms may result in account suspension or termination.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service-Specific Terms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Service-Specific Terms</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Different services may have additional terms and conditions that apply.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceTerms.map((service, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
                <h3 className="text-xl font-semibold text-white mb-4">{service.category}</h3>
                <ul className="space-y-3">
                  {service.terms.map((term, termIndex) => (
                    <li key={termIndex} className="flex items-start text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      {term}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Intellectual Property</h2>
              <div className="space-y-6">
                <div className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Our Rights</h3>
                  <p className="text-zion-slate-light">
                    Zion Tech Group retains ownership of our platform, technology, and proprietary content. 
                    Our trademarks and branding are protected intellectual property.
                  </p>
                </div>
                
                <div className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Your Content</h3>
                  <p className="text-zion-slate-light">
                    You retain ownership of content you create and share. By using our services, 
                    you grant us a license to use your content to provide our services.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-zion-blue-light/10 rounded-lg p-8 border border-zion-blue-light/20">
              <h3 className="text-2xl font-bold text-white mb-6">Copyright Protection</h3>
              <p className="text-zion-slate-light mb-6">
                We respect intellectual property rights and expect our users to do the same. 
                Report copyright violations through our support channels.
              </p>
              <div className="flex items-center text-zion-cyan">
                <Gavel className="w-5 h-5 mr-2" />
                <span className="text-sm">DMCA compliant procedures available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Limitation of Liability</h2>
          <div className="bg-zion-blue-light/10 rounded-lg p-8 border border-zion-blue-light/20 mb-8">
            <p className="text-zion-slate-light text-lg leading-relaxed">
              Zion Tech Group provides services "as is" and "as available." We're not liable for 
              indirect, incidental, or consequential damages. Our total liability is limited to 
              the amount you paid for our services in the 12 months preceding the claim.
            </p>
          </div>
          
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">Legal Disclaimer</h3>
            <p className="text-zion-slate-light text-sm">
              This summary doesn't replace the full terms. For complete legal information, 
              please read the full document. These terms don't affect your statutory rights.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Questions */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Questions About These Terms?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            If you have questions about these terms of service or need clarification on any 
            specific provisions, our legal team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium flex items-center justify-center"
            >
              Contact Legal Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="mailto:legal@ziontechgroup.com"
              className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium"
            >
              legal@ziontechgroup.com
            </a>
          </div>
          
          <div className="mt-12 p-6 bg-zion-blue-light/10 rounded-lg border border-zion-blue-light/20">
            <h3 className="text-lg font-semibold text-white mb-3">Legal Updates</h3>
            <p className="text-zion-slate-light text-sm">
              These terms may be updated to reflect changes in our services, legal requirements, 
              or business practices. We'll provide reasonable notice of material changes.
            </p>
          </div>
        </div>
      </section>
=======
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </motion.div>

        {/* Terms Sections */}
        <motion.div 
          className="max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {sections.map((section, index) => (
            <motion.section
              key={index}
              className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300"
              whileHover={{ y: -2, scale: 1.01 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {index + 1}. {section.title}
                  </h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.section>
          ))}
        </motion.div>

        {/* Additional Terms */}
        <motion.div 
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Additional Terms</h2>
            
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Privacy Policy</h3>
                <p className="text-zion-slate-light mb-4">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Modifications to Terms</h3>
                <p className="text-zion-slate-light mb-4">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the Service. Your continued use of the Service after such modifications constitutes acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Termination</h3>
                <p className="text-zion-slate-light mb-4">
                  We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including breach of these Terms of Service.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Governing Law</h3>
                <p className="text-zion-slate-light mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Zion Tech Group operates, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">Contact Information</h3>
                <p className="text-zion-slate-light">
                  If you have any questions about these Terms of Service, please contact us at{' '}
                  <a href="mailto:legal@ziontechgroup.com" className="text-zion-cyan hover:text-white transition-colors">
                    legal@ziontechgroup.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Questions About Our Terms?</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              If you have any questions or concerns about our Terms of Service, 
              our legal team is here to help clarify any points.
            </p>
            <a 
              href="mailto:legal@ziontechgroup.com" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform"
            >
              Contact Legal Team
            </a>
          </div>
        </motion.div>
      </div>
>>>>>>> cursor/website-audit-and-enhancement-1eed
    </div>
  );
}
