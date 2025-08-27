import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Users, 
  Globe, 
  Calendar,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Lock,
  Building2,
  Phone,
  Mail
} from 'lucide-react';

const Terms: React.FC = () => {
  const lastUpdated = 'January 15, 2025';

  const serviceCategories = [
    {
      title: 'Technology Consulting',
      description: 'Strategic technology advisory and digital transformation consulting',
      includes: ['Technology assessment', 'Digital strategy', 'Implementation planning']
    },
    {
      title: 'AI & Machine Learning',
      description: 'Artificial intelligence solutions and machine learning implementation',
      includes: ['AI strategy', 'ML model development', 'Data analytics']
    },
    {
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure and platform services',
      includes: ['Cloud migration', 'Infrastructure management', 'Scalability solutions']
    },
    {
      title: 'Cybersecurity',
      description: 'Security assessment and protection services',
      includes: ['Security audits', 'Threat detection', 'Incident response']
    }
  ];

  const termsSections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      description: "By using our services, you agree to be bound by these terms and conditions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Service Description",
      description: "We provide technology consulting, AI solutions, and digital transformation services",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Lock,
      title: "Intellectual Property",
      description: "All content and technology remain the property of Zion Tech Group",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Limitation of Liability",
      description: "We provide services as-is with reasonable limitations on liability",
      color: "from-orange-500 to-red-500"
    }
  ];

  const keyTerms = [
    {
      term: "Services",
      definition: "Technology consulting, AI solutions, cloud services, cybersecurity, and digital transformation services provided by Zion Tech Group"
    },
    {
      term: "Client",
      definition: "Any individual or organization that uses our services or enters into a service agreement with us"
    },
    {
      term: "Confidential Information",
      definition: "Any non-public information shared between parties during the course of business, including trade secrets and proprietary data"
    },
    {
      term: "Intellectual Property",
      definition: "All patents, copyrights, trademarks, trade secrets, and other intellectual property rights owned by Zion Tech Group"
    }
  ];

  const userObligations = [
    {
      obligation: 'Accurate Information',
      description: 'Provide accurate and complete information when using our services',
      icon: CheckCircle
    },
    {
      obligation: 'Compliance',
      description: 'Comply with all applicable laws and regulations',
      icon: Shield
    },
    {
      obligation: 'Security',
      description: 'Maintain the security of your account and credentials',
      icon: Lock
    },
    {
      obligation: 'Acceptable Use',
      description: 'Use our services only for lawful and authorized purposes',
      icon: Users
    }
  ];

  const prohibitedActivities = [
    'Attempting to gain unauthorized access to our systems or networks',
    'Interfering with or disrupting our services or servers',
    'Using our services for illegal, harmful, or fraudulent activities',
    'Attempting to reverse engineer or copy our proprietary technology',
    'Violating intellectual property rights or third-party rights',
    'Harassing, abusing, or harming other users or our employees'
  ];

  const intellectualProperty = [
    {
      category: 'Our Intellectual Property',
      description: 'All content, software, and technology we develop remain our exclusive property',
      examples: ['Proprietary algorithms', 'Software platforms', 'Brand assets']
    },
    {
      category: 'Your Intellectual Property',
      description: 'You retain ownership of your content and intellectual property',
      examples: ['Business data', 'Custom requirements', 'Proprietary information']
    },
    {
      category: 'Third-Party IP',
      description: 'We respect third-party intellectual property rights',
      examples: ['Open source licenses', 'Third-party integrations', 'Licensed content']
    }
  ];

  const paymentTerms = [
    {
      term: 'Service Fees',
      description: 'Fees are based on the scope and complexity of services provided',
      details: ['Hourly rates for consulting', 'Project-based pricing', 'Recurring service fees']
    },
    {
      term: 'Payment Schedule',
      description: 'Payment terms vary by service type and project scope',
      details: ['Net 30 for consulting', '50% upfront for projects', 'Monthly for ongoing services']
    },
    {
      term: 'Late Payments',
      description: 'Late payments may result in additional fees and service suspension',
      details: ['1.5% monthly interest', 'Service suspension after 60 days', 'Collection costs for overdue accounts']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-zion-cyan/20 rounded-2xl mb-6"
          >
            <FileText className="w-10 h-10 text-zion-cyan" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Terms of Service
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-zion-cyan/80 max-w-4xl mx-auto leading-relaxed"
          >
            These terms govern your use of Zion Tech Group's services. By using our services, 
            you agree to be bound by these terms and conditions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-zion-cyan/60"
          >
            <span className="flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Last updated: {lastUpdated}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Agreement Overview</h2>
            <div className="space-y-4 text-zion-cyan/80 leading-relaxed">
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between you 
                ("Client," "you," or "your") and Zion Tech Group ("Company," "we," "us," or "our") 
                regarding your use of our technology consulting, development, and related services.
              </p>
              <p>
                By accessing or using our services, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms. If you do not agree to these Terms, you must 
                not use our services.
              </p>
              <p>
                These Terms apply to all services provided by Zion Tech Group, including but not 
                limited to technology consulting, software development, cloud solutions, and 
                cybersecurity services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Description */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Zion Tech Group provides comprehensive technology solutions and consulting services 
              to help businesses transform and grow in the digital age.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20"
              >
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zion-cyan/80 mb-4">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-zion-cyan">Includes:</h4>
                  <ul className="space-y-1">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="text-sm text-zion-cyan/60 flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-zion-cyan" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Obligations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Your Obligations</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              As a user of our services, you have certain responsibilities and obligations 
              that help ensure a successful partnership.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {userObligations.map((obligation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <obligation.icon className="w-8 h-8 text-zion-cyan" />
                  <h3 className="text-xl font-bold text-white">{obligation.obligation}</h3>
                </div>
                <p className="text-zion-cyan/80">{obligation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              <h2 className="text-3xl font-bold text-white">Prohibited Activities</h2>
            </div>
            <p className="text-zion-cyan/80 mb-6">
              The following activities are strictly prohibited when using our services:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {prohibitedActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-zion-cyan/80 text-sm">{activity}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
              <p className="text-red-400 text-sm">
                <strong>Violation Consequences:</strong> Violation of these prohibitions may result in 
                immediate service termination, legal action, and reporting to appropriate authorities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Intellectual Property Rights</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              We respect intellectual property rights and clearly define ownership 
              of various types of content and technology.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {intellectualProperty.map((ip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20"
              >
                <h3 className="text-xl font-bold text-white mb-3">{ip.category}</h3>
                <p className="text-zion-cyan/80 mb-4">{ip.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-zion-cyan">Examples:</h4>
                  <ul className="space-y-1">
                    {ip.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-zion-cyan/60 flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-zion-cyan" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Payment Terms</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Clear payment terms ensure a smooth business relationship and help 
              us deliver high-quality services consistently.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {paymentTerms.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20"
              >
                <h3 className="text-xl font-bold text-white mb-3">{term.term}</h3>
                <p className="text-zion-cyan/80 mb-4">{term.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-zion-cyan">Details:</h4>
                  <ul className="space-y-1">
                    {term.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-zion-cyan/60 flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-zion-cyan" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Limitation of Liability</h2>
            <div className="space-y-4 text-zion-cyan/80 leading-relaxed">
              <p>
                To the maximum extent permitted by applicable law, Zion Tech Group shall not be liable 
                for any indirect, incidental, special, consequential, or punitive damages, including 
                but not limited to loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              <p>
                Our total liability to you for any claims arising from or related to these Terms or 
                our services shall not exceed the amount you paid to us for the specific service 
                giving rise to the claim in the twelve (12) months preceding the claim.
              </p>
              <p>
                This limitation of liability applies to all causes of action, whether based in contract, 
                tort (including negligence), strict liability, or any other legal theory.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Termination */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Termination</h2>
            <div className="space-y-4 text-zion-cyan/80 leading-relaxed">
              <p>
                Either party may terminate these Terms and the service relationship at any time 
                with written notice to the other party.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Termination by You</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      <span>Provide 30 days written notice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      <span>Pay for services rendered up to termination date</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      <span>Return any company property or materials</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Termination by Us</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      <span>Provide 30 days written notice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      <span>Complete work in progress when possible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      <span>Provide transition assistance if requested</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Governing Law and Dispute Resolution</h2>
            <div className="space-y-4 text-zion-cyan/80 leading-relaxed">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the 
                State of California, United States, without regard to its conflict of law principles.
              </p>
              <p>
                Any disputes arising from or related to these Terms or our services shall be resolved 
                through binding arbitration in accordance with the rules of the American Arbitration 
                Association, with the arbitration to be held in San Francisco, California.
              </p>
              <p>
                Both parties agree to waive any right to a jury trial and to participate in class 
                action lawsuits related to these Terms or our services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-zion-cyan/80 mb-6">
                  If you have any questions about these Terms of Service or need clarification 
                  on any provision, please contact us:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zion-cyan/80">
                    <Building2 className="w-5 h-5 text-zion-cyan" />
                    <span>Zion Tech Group</span>
                  </div>
                  <div className="flex items-center gap-3 text-zion-cyan/80">
                    <Mail className="w-5 h-5 text-zion-cyan" />
                    <span>legal@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-zion-cyan/80">
                    <Phone className="w-5 h-5 text-zion-cyan" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-zion-cyan/80">
                    <Globe className="w-5 h-5 text-zion-cyan" />
                    <span>https://ziontechgroup.com</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Legal Department</h3>
                <p className="text-zion-cyan/80 mb-4">
                  For legal matters, contract negotiations, or compliance questions, 
                  our legal team is available to assist you.
                </p>
                <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  Contact Legal Team
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Updates to These Terms</h2>
            <div className="space-y-4 text-zion-cyan/80 leading-relaxed">
              <p>
                We may update these Terms of Service from time to time to reflect changes in our 
                services, business practices, legal requirements, or other factors. When we make 
                changes, we will:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span>Update the "Last Updated" date at the top of these terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span>Notify you of significant changes through email or website announcements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span>Provide you with an opportunity to review and accept the updated terms</span>
                </li>
              </ul>
              <p>
                Continued use of our services after changes constitutes acceptance of the updated terms. 
                We encourage you to review these Terms periodically to stay informed about your rights 
                and obligations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            If you have any questions about these terms or need clarification, 
            please don't hesitate to contact our legal team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link 
              to="/privacy"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
