import React from "react"
import { motion } from "framer-motion"
import {;
  FileText,;
  Shield,;
  Users,;
  Globe,;
  CheckCircle,;
  AlertTriangle,;
  Scale,;
  Lock,;
  Mail,;
  Phone,;
  MapPin,;
  Calendar,;
  CheckCircle,;
  AlertTriangle,;
  Lock,;
  Eye,;
  Database,;
  Zap,;
  Rocket,;
  Brain,;
  Cpu;
} from "lucide-react"
import { SEO } from "../components/SEO"
const Terms: React.FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO;
        title="Terms of Service - Zion Tech Group"
        description="Read Zion Tech Group's terms of service. Understand your rights and responsibilities when using our technology services and solutions."
      />;

      {/* Hero Section */};
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></[^>]*>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
          >;
            <div className="flex items-center justify-center space-x-3 mb-6">;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">;
                <[^>]*/>
              </[^>]*>
            </[^>]*>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">;
              Terms of Service;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              These terms govern your use of our services. Please read them carefully;
              before using our technology solutions.;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Key Terms Overview */};
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Key Terms Overview;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Understanding these fundamental terms helps ensure a smooth;
              relationship between you and Zion Tech Group.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {termsSections.map((section, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-4">{section.title}</[^>]*>
                <p className="text-gray-300">{section.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* User Obligations */};
      <section className="py-20 bg-slate-800/30">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Your Obligations;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              As a user of our services, you have certain responsibilities;
              that help ensure a secure and productive environment.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {userObligations.map((obligation, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <h3 className="text-xl font-semibold text-white mb-4">{obligation.obligation}</[^>]*>
                <p className="text-gray-300">{obligation.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Prohibited Activities */};
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">;
                <[^>]*/>
                <span>Last Updated</[^>]*>
              </[^>]*>
              <p className="text-lg text-gray-300 mb-6">;
                To maintain a secure and professional environment, certain activities;
                are strictly prohibited when using our services.;
              </[^>]*>
              <div className="space-y-4">;
                {prohibitedActivities.map((activity, index) => (;
                  <div key={index} className="flex items-start space-x-3">;
                    <[^>]*/>
                    <span className="text-gray-300 text-sm">{activity}</[^>]*>
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.1 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">;
                <div className="text-center mb-6">;
                  <[^>]*/>
                  <h3 className="text-xl font-semibold text-white">Violation Consequences</[^>]*>
                </[^>]*>
                <div className="space-y-4">;
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">;
                    <span className="text-gray-300">First Offense</[^>]*>
                    <span className="text-yellow-400">Warning</[^>]*>
                  </[^>]*>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">;
                    <span className="text-gray-300">Second Offense</[^>]*>
                    <span className="text-orange-400">Suspension</[^>]*>
                  </[^>]*>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">;
                    <span className="text-gray-300">Third Offense</[^>]*>
                    <span className="text-red-400">Termination</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Service Levels */};
      <section className="py-20 bg-slate-800/30">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Service Levels & Support;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              We provide different levels of support to meet your business needs;
              and ensure optimal service delivery.;
            </[^>]*>
          </[^>]*>

          <div className="max-w-4xl mx-auto">;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
              {serviceLevels.map((level, index) => (;
                <motion.div
                  key={index};
                  initial={{ opacity: 0, y: 20 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.6, delay: index * 0.1 }};
                  className={`bg-slate-800/50 p-6 rounded-xl border ${;
                    level.included ? 'border-blue-400/50' : 'border-slate-700/50'
                  } hover:border-blue-400/50 transition-all duration-300 hover:scale-105`};
                >;
                  <div className="text-center mb-4">;
                    <h3 className="text-xl font-semibold text-white mb-2">{level.level}</[^>]*>
                    {level.included && (;&& (; (
                      <span className="inline-block px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full">;
                        Included;
                      </[^>]*>
                    )};
                  </[^>]*>
                  <p className="text-gray-300 text-center mb-4">{level.description}</[^>]*>
                  <div className="text-center">;
                    <span className="text-sm text-gray-400">Response Time:</[^>]*>
                    <div className="text-lg font-semibold text-white">{level.response}</[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Intellectual Property */};
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
            <motion.div
              initial={{ opacity: 0, x: -20 }};
              whileInView={{ opacity: 1, x: 0 }};
              transition={{ duration: 0.6 }};
            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Intellectual Property Rights;
              </[^>]*>
              <p className="text-lg text-gray-300 mb-6">;
                Understanding intellectual property rights is crucial for both;
                protecting our innovations and respecting your contributions.;
              </[^>]*>
              <div className="space-y-4">;
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Service Usage</[^>]*>
                    <p>You must be at least 18 years old to use our services, or have parental consent if under 18.</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.2 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">;
                <[^>]*/>
                <span>Description of Service</[^>]*>
              </[^>]*>
              <div className="space-y-4 text-gray-300">;
                <p>Zion Tech Group provides technology consulting, AI solutions, quantum computing services, cybersecurity, and digital transformation services.</[^>]*>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
                  <div className="flex items-start space-x-3">;
                    <[^>]*/>
                    <div>;
                      <h3 className="font-semibold text-white">AI Solutions</[^>]*>
                      <p>Machine learning, automation, and intelligent systems</[^>]*>
                    </[^>]*>
                  </[^>]*>
                  <div className="flex items-start space-x-3">;
                    <[^>]*/>
                    <div>;
                      <h3 className="font-semibold text-white">Technology Consulting</[^>]*>
                      <p>Strategic planning and implementation</[^>]*>
                    </[^>]*>
                  </[^>]*>
                  <div className="flex items-start space-x-3">;
                    <[^>]*/>
                    <div>;
                      <h3 className="font-semibold text-white">Cybersecurity</[^>]*>
                      <p>Security assessments and protection</[^>]*>
                    </[^>]*>
                  </[^>]*>
                  <div className="flex items-start space-x-3">;
                    <[^>]*/>
                    <div>;
                      <h3 className="font-semibold text-white">Digital Transformation</[^>]*>
                      <p>Modernization and optimization</[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.3 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">;
                <[^>]*/>
                <span>User Responsibilities</[^>]*>
              </[^>]*>
              <div className="space-y-4 text-gray-300">;
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Account Security</[^>]*>
                    <p>You are responsible for maintaining the confidentiality of your account credentials.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Acceptable Use</[^>]*>
                    <p>You agree to use our services only for lawful purposes and in accordance with these terms.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Prohibited Activities</[^>]*>
                    <p>You may not use our services to transmit harmful code, violate intellectual property rights, or engage in illegal activities.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Compliance</[^>]*>
                    <p>You must comply with all applicable laws and regulations when using our services.</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.4 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">;
                <[^>]*/>
                <span>Intellectual Property</[^>]*>
              </[^>]*>
              <div className="space-y-4 text-gray-300">;
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Our Rights</[^>]*>
                    <p>All content, features, and functionality on our platforms are owned by Zion Tech Group and are protected by copyright, trademark, and other intellectual property laws.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Your Content</[^>]*>
                    <p>You retain ownership of content you submit, but grant us a license to use it for service provision and improvement.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">License</[^>]*>
                    <p>We grant you a limited, non-exclusive, non-transferable license to access and use our services for your business needs.</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.5 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">;
                <[^>]*/>
                <span>Privacy and Data</[^>]*>
              </[^>]*>
              <div className="space-y-4 text-gray-300">;
                <p>Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy.</[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Data Protection</[^>]*>
                    <p>We implement appropriate security measures to protect your personal information.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Data Usage</[^>]*>
                    <p>We use your data only for the purposes outlined in our Privacy Policy and with your consent.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Third Parties</[^>]*>
                    <p>We do not sell your personal information to third parties.</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.6 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">;
                <[^>]*/>
                <span>Limitation of Liability</[^>]*>
              </[^>]*>
              <div className="space-y-4 text-gray-300">;
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Service Availability</[^>]*>
                    <p>We strive to provide reliable services but cannot guarantee uninterrupted access or error-free operation.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Damages</[^>]*>
                    <p>Zion Tech Group shall not be liable for any indirect, incidental, special, or consequential damages.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Maximum Liability</[^>]*>
                    <p>Our total liability shall not exceed the amount paid by you for the specific service in question.</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.7 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">;
                <[^>]*/>
                <span>Termination</[^>]*>
              </[^>]*>
              <div className="space-y-4 text-gray-300">;
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Your Rights</[^>]*>
                    <p>You may terminate your use of our services at any time by discontinuing use or contacting us.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Our Rights</[^>]*>
                    <p>We may terminate or suspend access to our services for violations of these terms or for any other reason.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Effect of Termination</[^>]*>
                    <p>Upon termination, your right to use the services will cease immediately.</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.8 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">;
                <[^>]*/>
                <span>Changes to Terms</[^>]*>
              </[^>]*>
              <div className="space-y-4 text-gray-300">;
                <p>We reserve the right to modify these terms at any time. We will notify users of any material changes.</[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Notification</[^>]*>
                    <p>Material changes will be communicated through our website, email, or other appropriate channels.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Continued Use</[^>]*>
                    <p>Your continued use of our services after changes constitutes acceptance of the new terms.</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.9 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">;
                <[^>]*/>
                <span>Contact Information</[^>]*>
              </[^>]*>
              <div className="space-y-4 text-gray-300">;
                <p>If you have any questions about these Terms of Service, please contact us:</[^>]*>
                <div className="space-y-2">;
                  <div className="flex items-center space-x-3">;
                    <[^>]*/>
                    <span>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></[^>]*>
                  </[^>]*>
                  <div className="flex items-center space-x-3">;
                    <[^>]*/>
                    <span>Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></[^>]*>
                  </[^>]*>
                  <div className="flex items-center space-x-3">;
                    <[^>]*/>
                    <span>Address: 364 E Main St STE 1008, Middletown DE 19709</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Limitation of Liability */};
      <section className="py-20 bg-slate-800/30">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Limitation of Liability;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              We strive to provide reliable services, but it's important to understand;
              the scope of our liability and your responsibilities.;
            </[^>]*>
          </[^>]*>

          <div className="max-w-4xl mx-auto">;
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">;
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
                <div>;
                  <h3 className="text-2xl font-semibold text-white mb-4">What We Cover</[^>]*>
                  <ul className="space-y-3">;
                    <li className="flex items-start space-x-3">;
                      <[^>]*/>
                      <span className="text-gray-300">Direct damages up to the amount paid for services</[^>]*>
                    </[^>]*>
                    <li className="flex items-start space-x-3">;
                      <[^>]*/>
                      <span className="text-gray-300">Service availability and performance issues</[^>]*>
                    </[^>]*>
                    <li className="flex items-start space-x-3">;
                      <[^>]*/>
                      <span className="text-gray-300">Data security and privacy protection</[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
                <div>;
                  <h3 className="text-2xl font-semibold text-white mb-4">What We Don't Cover</[^>]*>
                  <ul className="space-y-3">;
                    <li className="flex items-start space-x-3">;
                      <[^>]*/>
                      <span className="text-gray-300">Indirect or consequential damages</[^>]*>
                    </[^>]*>
                    <li className="flex items-start space-x-3">;
                      <[^>]*/>
                      <span className="text-gray-300">Loss of profits or business opportunities</[^>]*>
                    </[^>]*>
                    <li className="flex items-start space-x-3">;
                      <[^>]*/>
                      <span className="text-gray-300">Third-party service failures</[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Termination */};
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Termination & Cancellation;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Understanding the terms for ending our service relationship;
              helps ensure a smooth transition for all parties.;
            </[^>]*>
          </[^>]*>

          <div className="max-w-4xl mx-auto">;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">;
                <h3 className="text-2xl font-semibold text-white mb-4">You May Terminate</[^>]*>
                <ul className="space-y-3">;
                  <li className="flex items-start space-x-3">;
                    <[^>]*/>
                    <span className="text-gray-300">With 30 days written notice</[^>]*>
                    </[^>]*>
                  <li className="flex items-start space-x-3">;
                    <[^>]*/>
                    <span className="text-gray-300">For material breach by us</[^>]*>
                    </[^>]*>
                  <li className="flex items-start space-x-3">;
                    <[^>]*/>
                    <span className="text-gray-300">If we become insolvent</[^>]*>
                    </[^>]*>
                </[^>]*>
              </[^>]*>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">;
                <h3 className="text-2xl font-semibold text-white mb-4">We May Terminate</[^>]*>
                <ul className="space-y-3">;
                  <li className="flex items-start space-x-3">;
                    <[^>]*/>
                    <span className="text-gray-300">For violation of terms</[^>]*>
                    </[^>]*>
                  <li className="flex items-start space-x-3">;
                    <[^>]*/>
                    <span className="text-gray-300">Non-payment of fees</[^>]*>
                    </[^>]*>
                  <li className="flex items-start space-x-3">;
                    <[^>]*/>
                    <span className="text-gray-300">Illegal or harmful use</[^>]*>
                    </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Information */};
      <section className="py-20 bg-slate-800/30">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Questions About Terms?;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              If you have questions about these terms or need clarification;
              please contact our legal team.;
            </[^>]*>
          </[^>]*>

          <div className="max-w-4xl mx-auto">;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
              <div className="text-center">;
                <[^>]*/>
                <h3 className="text-xl font-semibold text-white mb-2">Email</[^>]*>
                <p className="text-gray-300">legal@ziontechgroup.com</[^>]*>
              </[^>]*>
              <div className="text-center">;
                <[^>]*/>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</[^>]*>
                <p className="text-gray-300">+1 302 464 0950</[^>]*>
              </[^>]*>
              <div className="text-center">;
                <[^>]*/>
                <h3 className="text-xl font-semibold text-white mb-2">Address</[^>]*>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">;
        <div className="container mx-auto px-6 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready to Get Started?;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              By using our services, you agree to these terms.;
              Contact us if you need any clarification or have questions.;
            </[^>]*>
            <div className="flex flex-wrap justify-center gap-4">;
              <a;
                href="/contact"
                className="[^"]*"
              >;
                Contact Us;
              </[^>]*>
              <a;
                href="/privacy"
                className="[^"]*"
              >;
                Privacy Policy;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default Terms;