<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import {
  FileText,
  Shield,
  Users,
  Globe,
  CheckCircle,
  AlertTriangle,
  Scale,
  Lock,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle as CheckCircle2,
  AlertTriangle as AlertTriangle2,
  Lock as Lock2,
  Eye as Eye2,
  Database,
  Zap,
  Rocket,
  Brain,
  Cpu
} from 'lucide-react';
import { SEO } from '../components/SEO';

const Terms: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Terms of Service - Zion Tech Group"
        description="Read Zion Tech Group's terms of service. Understand your rights and responsibilities when using our technology services and solutions."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <divdiv
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              These terms govern your use of our services. Please read them carefully
              before using our technology solutions.
            </p>
          </divdiv>
        </div>
      </section>

      {/* Key Terms Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <divdiv
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Key Terms Overview
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding these fundamental terms helps ensure a smooth
              relationship between you and Zion Tech Group.
            </p>
          </divdiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {termsSections.map((section, index) => (
              <divdiv
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <section.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{section.title}</h3>
                <p className="text-gray-300">{section.description}</p>
              </divdiv>
            ))}
          </div>
        </div>
      </section>

      {/* User Obligations */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <divdiv
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Your Obligations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              As a user of our services, you have certain responsibilities
              that help ensure a secure and productive environment.
            </p>
          </divdiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userObligations.map((obligation, index) => (
              <divdiv
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{obligation.obligation}</h3>
                <p className="text-gray-300">{obligation.description}</p>
              </divdiv>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <divdiv
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-cyan-400" />
                <span>Last Updated</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                To maintain a secure and professional environment, certain activities
                are strictly prohibited when using our services.
              </p>
              <div className="space-y-4">
                {prohibitedActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertTriangle2 className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{activity}</span>
                  </div>
                ))}
              </div>
            </divdiv>

            <divdiv
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
                <div className="text-center mb-6">
                  <AlertTriangle2 className="w-16 h-16 text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white">Violation Consequences</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">First Offense</span>
                    <span className="text-yellow-400">Warning</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Second Offense</span>
                    <span className="text-orange-400">Suspension</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Third Offense</span>
                    <span className="text-red-400">Termination</span>
                  </div>
                </div>
              </div>
            </divdiv>
          </div>
        </div>
      </section>

      {/* Service Levels */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <divdiv
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Service Levels & Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide different levels of support to meet your business needs
              and ensure optimal service delivery.
            </p>
          </divdiv>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceLevels.map((level, index) => (
                <divdiv
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  className={`bg-slate-800/50 p-6 rounded-xl border ${
                    level.included ? 'border-blue-400/50' : 'border-slate-700/50'
                  } hover:border-blue-400/50 transition-all duration-300 hover:scale-105`}
                >
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{level.level}</h3>
                    {level.included && (
                      <span className="inline-block px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full">
                        Included
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 text-center mb-4">{level.description}</p>
                  <div className="text-center">
                    <span className="text-sm text-gray-400">Response Time:</span>
                    <div className="text-lg font-semibold text-white">{level.response}</div>
                  </div>
                </divdiv>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <divdiv
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Intellectual Property Rights
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Understanding intellectual property rights is crucial for both
                protecting our innovations and respecting your contributions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Service Usage</h3>
                    <p>You must be at least 18 years old to use our services, or have parental consent if under 18.</p>
                  </div>
                </div>
              </div>
            </divdiv>

            <divdiv
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Zap className="w-6 h-6 text-cyan-400" />
                <span>Description of Service</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>Zion Tech Group provides technology consulting, AI solutions, quantum computing services, cybersecurity, and digital transformation services.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <Brain className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">AI Solutions</h3>
                      <p>Machine learning, automation, and intelligent systems</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Cpu className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Technology Consulting</h3>
                      <p>Strategic planning and implementation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Cybersecurity</h3>
                      <p>Security assessments and protection</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Rocket className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Digital Transformation</h3>
                      <p>Modernization and optimization</p>
                    </div>
                  </div>
                </div>
              </div>
            </divdiv>

            <divdiv
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Users className="w-6 h-6 text-cyan-400" />
                <span>User Responsibilities</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Account Security</h3>
                    <p>You are responsible for maintaining the confidentiality of your account credentials.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Acceptable Use</h3>
                    <p>You agree to use our services only for lawful purposes and in accordance with these terms.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Prohibited Activities</h3>
                    <p>You may not use our services to transmit harmful code, violate intellectual property rights, or engage in illegal activities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Compliance</h3>
                    <p>You must comply with all applicable laws and regulations when using our services.</p>
                  </div>
                </div>
              </div>
            </divdiv>

            <divdiv
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Lock2 className="w-6 h-6 text-cyan-400" />
                <span>Intellectual Property</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Our Rights</h3>
                    <p>All content, features, and functionality on our platforms are owned by Zion Tech Group and are protected by copyright, trademark, and other intellectual property laws.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Your Content</h3>
                    <p>You retain ownership of content you submit, but grant us a license to use it for service provision and improvement.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">License</h3>
                    <p>We grant you a limited, non-exclusive, non-transferable license to access and use our services for your business needs.</p>
                  </div>
                </div>
              </div>
            </divdiv>

            <divdiv
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Shield className="w-6 h-6 text-cyan-400" />
                <span>Privacy and Data</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy.</p>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Data Protection</h3>
                    <p>We implement appropriate security measures to protect your personal information.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Data Usage</h3>
                    <p>We use your data only for the purposes outlined in our Privacy Policy and with your consent.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Third Parties</h3>
                    <p>We do not sell your personal information to third parties.</p>
                  </div>
                </div>
              </div>
            </divdiv>

            <divdiv
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <AlertTriangle2 className="w-6 h-6 text-yellow-400" />
                <span>Limitation of Liability</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Service Availability</h3>
                    <p>We strive to provide reliable services but cannot guarantee uninterrupted access or error-free operation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Damages</h3>
                    <p>Zion Tech Group shall not be liable for any indirect, incidental, special, or consequential damages.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Maximum Liability</h3>
                    <p>Our total liability shall not exceed the amount paid by you for the specific service in question.</p>
                  </div>
                </div>
              </div>
            </divdiv>

            <divdiv
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Eye2 className="w-6 h-6 text-cyan-400" />
                <span>Termination</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Your Rights</h3>
                    <p>You may terminate your use of our services at any time by discontinuing use or contacting us.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Our Rights</h3>
                    <p>We may terminate or suspend access to our services for violations of these terms or for any other reason.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Effect of Termination</h3>
                    <p>Upon termination, your right to use the services will cease immediately.</p>
                  </div>
                </div>
              </div>
            </divdiv>

            <divdiv
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Database className="w-6 h-6 text-cyan-400" />
                <span>Changes to Terms</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>We reserve the right to modify these terms at any time. We will notify users of any material changes.</p>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Notification</h3>
                    <p>Material changes will be communicated through our website, email, or other appropriate channels.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Continued Use</h3>
                    <p>Your continued use of our services after changes constitutes acceptance of the new terms.</p>
                  </div>
                </div>
              </div>
            </divdiv>

            <divdiv
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Mail className="w-6 h-6 text-cyan-400" />
                <span>Contact Information</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span>Address: 364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </divdiv>
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <divdiv
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Limitation of Liability
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We strive to provide reliable services, but it's important to understand
              the scope of our liability and your responsibilities.
            </p>
          </divdiv>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">What We Cover</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Direct damages up to the amount paid for services</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Service availability and performance issues</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Data security and privacy protection</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">What We Don't Cover</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <AlertTriangle2 className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Indirect or consequential damages</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <AlertTriangle2 className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Loss of profits or business opportunities</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <AlertTriangle2 className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Third-party service failures</span>
                    </li>
                  </ul>
                </div>
=======
import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Terms() {
  return (
    <>
      <SEO 
        title="Terms of Service - Zion Tech Group" 
        description="Read Zion Tech Group's terms of service and user agreement for our AI and tech marketplace platform." 
        url="https://ziontechgroup.com/terms"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Terms of Service</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Please read these terms carefully before using our platform
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-zion-slate-light mb-4">
                By accessing and using Zion Tech Group's platform, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <p className="text-zion-slate-light">
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p className="text-zion-slate-light mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Zion Tech Group's website for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-zion-slate-light mb-4">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="text-zion-slate-light list-disc list-inside space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on Zion Tech Group's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
              <p className="text-zion-slate-light mb-4">
                The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
              <p className="text-zion-slate-light mb-4">
                In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Accuracy of Materials</h2>
              <p className="text-zion-slate-light mb-4">
                The materials appearing on Zion Tech Group's website could include technical, typographical, or photographic errors. Zion Tech Group does not warrant that any of the materials on its website are accurate, complete or current.
              </p>
              <p className="text-zion-slate-light">
                Zion Tech Group may make changes to the materials contained on its website at any time without notice. However Zion Tech Group does not make any commitment to update the materials.
              </p>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Links</h2>
              <p className="text-zion-slate-light mb-4">
                Zion Tech Group has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Zion Tech Group of the site.
              </p>
              <p className="text-zion-slate-light">
                Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Modifications</h2>
              <p className="text-zion-slate-light mb-4">
                Zion Tech Group may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
              <p className="text-zion-slate-light">
                These terms and conditions are governed by and construed in accordance with the laws of Delaware, United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-zion-slate-light mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="text-zion-slate-light space-y-2">
                <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
>>>>>>> origin/website-improvements-v2
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Termination */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <divdiv
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Termination & Cancellation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the terms for ending our service relationship
              helps ensure a smooth transition for all parties.
            </p>
          </divdiv>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-white mb-4">You May Terminate</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">With 30 days written notice</span>
                    </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">For material breach by us</span>
                    </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">If we become insolvent</span>
                    </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-white mb-4">We May Terminate</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <AlertTriangle2 className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">For violation of terms</span>
                    </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle2 className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Non-payment of fees</span>
                    </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle2 className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Illegal or harmful use</span>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <divdiv
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Questions About Terms?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              If you have questions about these terms or need clarification,
              please contact our legal team.
            </p>
          </divdiv>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">legal@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-6 text-center">
          <divdiv
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              By using our services, you agree to these terms.
              Contact us if you need any clarification or have questions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="/privacy"
                className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Privacy Policy
              </a>
            </div>
          </divdiv>
        </div>
      </section>
    </div>
  );
};

export default Terms;
=======

import React from 'react'; const Terms = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> Terms of Service </h1> <p className="text - xl text - gray - 600"> Terms and conditions for using our services. </p> </div> <div className="max - w-3xl mx - auto prose prose - lg"> <h2 > Acceptance of Terms</h2> <p > By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p> <h2 > Use License</h2> <p > Permission is granted to temporarily download one copy of the materials on our website for personal, non - commercial transitory viewing only.</p> <h2 > Disclaimer</h2> <p > The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.</p> <h2 > Limitations</h2> <p > In no event shall our company or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p> </div> </div> </div> )} export default Terms;
import React from 'react'; const Terms = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4"> Terms of Service </h1> <p className="text-xl text-gray-600"> Terms and conditions for using our services. </p> </div> <div className="max-w-3xl mx-auto prose prose-lg"> <h2>Acceptance of Terms</h2> <p>By accessing and using our services,you accept and agree to be bound by the terms and provision of this agreement.</p> <h2>Use License</h2> <p>Permission is granted to temporarily download one copy of the materials on our website for personal,non-commercial transitory viewing only.</p> <h2>Disclaimer</h2> <p>The materials on our website are provided on an 'as is' basis. We make no warranties,expressed or implied,and hereby disclaim and negate all other warranties.</p> <h2>Limitations</h2> <p>In no event shall our company or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p> </div> </div> </div> )}; export default Terms;
import React from 'react'; const Terms = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> Terms of Service </h1> <p className="text - xl text - gray - 600"> Terms and conditions for using our services. </p> </div> <div className="max - w-3xl mx - auto prose prose - lg"> <h2 > Acceptance of Terms</h2> <p > By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p> <h2 > Use License</h2> <p > Permission is granted to temporarily download one copy of the materials on our website for personal, non - commercial transitory viewing only.</p> <h2 > Disclaimer</h2> <p > The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.</p> <h2 > Limitations</h2> <p > In no event shall our company or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p> </div> </div> </div> )} export default Terms;
import React from 'react'; const Terms = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> Terms of Service </h1> <p className="text - xl text - gray - 600"> Terms and conditions for using our services. </p> </div> <div className="max - w-3xl mx - auto prose prose - lg"> <h2 > Acceptance of Terms</h2> <p > By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p> <h2 > Use License</h2> <p > Permission is granted to temporarily download one copy of the materials on our website for personal, non - commercial transitory viewing only.</p> <h2 > Disclaimer</h2> <p > The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.</p> <h2 > Limitations</h2> <p > In no event shall our company or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p> </div> </div> </div> )} export default Terms;

>>>>>>> origin/merged-prs
=======
      </main>
    </>
  );
}
>>>>>>> origin/website-improvements-v2
