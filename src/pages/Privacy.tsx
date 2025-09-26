import React from "react"
import { motion } from "framer-motion"
import {;
  Shield,;
  Lock,;
  Eye,;
  Database,;
  Users,;
  Globe,;
  CheckCircle,;
  AlertTriangle,;
  FileText,;
  Mail,;
  Phone,;
  MapPin,;
  Calendar,;
  CheckCircle,;
  AlertTriangle;
} from "lucide-react"
import SEO from "../components/SEO"
const Privacy: React.FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO;
        title="Privacy Policy - Zion Tech Group"
        description="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy ensures transparency and data protection."
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
              Privacy Policy;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              Your privacy is important to us. This policy explains how we collect, use,;
              and protect your personal information.;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Privacy Principles */};
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Our Privacy Principles;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              We are committed to protecting your privacy and ensuring transparency;
              in how we handle your personal information.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {privacyPrinciples.map((principle, index) => (;
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
                <h3 className="text-xl font-semibold text-white mb-4">{principle.title}</[^>]*>
                <p className="text-gray-300">{principle.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Information We Collect */};
      <section className="py-20 bg-slate-800/30">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Information We Collect;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              We collect only the information necessary to provide our services;
              and improve your experience.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {dataCategories.map((category, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <h3 className="text-2xl font-semibold text-white mb-4">{category.title}</[^>]*>
                <p className="text-gray-300 mb-6">{category.description}</[^>]*>
                <div className="space-y-2">;
                  {category.examples.map((example, exampleIndex) => (;
                    <div key={exampleIndex} className="flex items-center text-sm text-gray-400">;
                      <[^>]*/>
                      {example};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* How We Use Your Data */};
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              How We Use Your Information;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              We use your information only for legitimate business purposes;
              and with your consent where required.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {dataUses.map((use, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <h3 className="text-xl font-semibold text-white mb-4">{use.purpose}</[^>]*>
                <p className="text-gray-300">{use.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Your Rights */};
      <section className="py-20 bg-slate-800/30">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Your Privacy Rights;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              You have important rights regarding your personal data.;
              We are committed to honoring these rights.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {userRights.map((right, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <h3 className="text-xl font-semibold text-white mb-4">{right.right}</[^>]*>
                <p className="text-gray-300">{right.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Data Security */};
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
                We implement comprehensive security measures to protect your personal information;
                from unauthorized access, alteration, disclosure, or destruction.;
              </[^>]*>
              <div className="space-y-4">;
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="text-white font-semibold">Encryption</[^>]*>
                    <p className="text-gray-300 text-sm">All data is encrypted in transit and at rest</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="text-white font-semibold">Access Controls</[^>]*>
                    <p className="text-gray-300 text-sm">Strict access controls and authentication</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="text-white font-semibold">Regular Audits</[^>]*>
                    <p className="text-gray-300 text-sm">Security assessments and compliance monitoring</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.1 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">;
                <[^>]*/>
                <span>Information We Collect</[^>]*>
              </[^>]*>
              <div className="space-y-4 text-gray-300">;
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Personal Information</[^>]*>
                    <p>Name, email address, phone number, company information, and other contact details you provide.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Usage Data</[^>]*>
                    <p>Information about how you use our services, including access times, pages viewed, and features used.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Technical Data</[^>]*>
                    <p>IP address, browser type, device information, and other technical details.</[^>]*>
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
                <span>How We Use Your Information</[^>]*>
              </[^>]*>
              <div className="space-y-4 text-gray-300">;
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Service Delivery</[^>]*>
                    <p>To provide, maintain, and improve our services and customer support.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Communication</[^>]*>
                    <p>To send you important updates, respond to inquiries, and provide customer service.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Analytics</[^>]*>
                    <p>To analyze usage patterns and improve our services and user experience.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Legal Compliance</[^>]*>
                    <p>To comply with applicable laws, regulations, and legal processes.</[^>]*>
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
                <span>Information Sharing</[^>]*>
              </[^>]*>
              <div className="space-y-4 text-gray-300">;
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">We Do Not Sell Your Data</[^>]*>
                    <p>Zion Tech Group does not sell, trade, or rent your personal information to third parties.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Service Providers</[^>]*>
                    <p>We may share information with trusted third-party service providers who assist us in operating our services.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Legal Requirements</[^>]*>
                    <p>We may disclose information when required by law or to protect our rights and safety.</[^>]*>
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
                <span>Data Security</[^>]*>
              </[^>]*>
              <div className="space-y-4 text-gray-300">;
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Encryption</[^>]*>
                    <p>We use industry-standard encryption to protect your data during transmission and storage.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Access Controls</[^>]*>
                    <p>Strict access controls ensure only authorized personnel can access your information.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Regular Audits</[^>]*>
                    <p>We conduct regular security audits and assessments to maintain data protection standards.</[^>]*>
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
                <span>Your Rights</[^>]*>
              </[^>]*>
              <div className="space-y-4 text-gray-300">;
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Access & Update</[^>]*>
                    <p>You can access, update, or correct your personal information at any time.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Data Portability</[^>]*>
                    <p>You can request a copy of your data in a portable format.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Deletion</[^>]*>
                    <p>You can request deletion of your personal information, subject to legal requirements.</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="font-semibold text-white">Opt-out</[^>]*>
                    <p>You can opt-out of marketing communications and certain data processing activities.</[^>]*>
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
                <span>Contact Us</[^>]*>
              </[^>]*>
              <div className="space-y-4 text-gray-300">;
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</[^>]*>
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
              Contact Us;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              If you have questions about this privacy policy or want to exercise your rights;
              please contact our privacy team.;
            </[^>]*>
          </[^>]*>

          <div className="max-w-4xl mx-auto">;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
              <div className="text-center">;
                <[^>]*/>
                <h3 className="text-xl font-semibold text-white mb-2">Email</[^>]*>
                <p className="text-gray-300">privacy@ziontechgroup.com</[^>]*>
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
              Questions About Privacy?;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              We're here to help. Contact our privacy team for any questions;
              about your data or this privacy policy.;
            </[^>]*>
            <div className="flex flex-wrap justify-center gap-4">;
              <a;
                href="mailto: privacy@ziontechgroup.com"
                className="[^"]*"
              >;
                Contact Privacy Team;
              </[^>]*>
              <a;
                href="/contact"
                className="[^"]*"
              >;
                General Contact;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default Privacy;