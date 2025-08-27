import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Users, 
  Globe, 
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  FileText,
  Calendar,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

<<<<<<< HEAD
export default function Privacy() {
<<<<<<< HEAD
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
=======
const Privacy: React.FC = () => {
  const lastUpdated = 'January 15, 2025';
  const companyInfo = {
    name: 'Zion Tech Group',
    address: '123 Innovation Drive, Tech Valley, CA 94000',
    email: 'privacy@ziontechgroup.com',
    phone: '+1 (555) 123-4567',
    website: 'https://ziontechgroup.com'
>>>>>>> 61e30eca5fbfc0775ada7e1bb633889d4df21738
  };

  const dataCategories = [
    {
      title: 'Personal Information',
      description: 'Name, email address, phone number, company information',
      examples: ['Contact forms', 'Account registration', 'Newsletter signup']
    },
    {
      title: 'Technical Data',
      description: 'IP address, browser type, device information, usage analytics',
      examples: ['Website analytics', 'Performance monitoring', 'Security logs']
    },
    {
      title: 'Business Information',
      description: 'Company details, project requirements, service preferences',
      examples: ['Service inquiries', 'Project consultations', 'Client communications']
    },
    {
      title: 'Communication Data',
      description: 'Email correspondence, chat logs, support tickets',
      examples: ['Customer support', 'Project updates', 'Marketing communications']
    }
  ];

  const dataUses = [
    {
      purpose: 'Service Delivery',
      description: 'To provide and maintain our technology services and solutions'
    },
    {
      purpose: 'Communication',
      description: 'To respond to inquiries and provide customer support'
    },
    {
      purpose: 'Improvement',
      description: 'To enhance our services and develop new features'
    },
    {
      purpose: 'Security',
      description: 'To protect against fraud and ensure system security'
    },
    {
      purpose: 'Compliance',
      description: 'To meet legal obligations and regulatory requirements'
    },
    {
      purpose: 'Marketing',
      description: 'To send relevant updates and promotional materials (with consent)'
    }
  ];

  const dataSharing = [
    {
      category: 'Service Providers',
      description: 'Trusted third-party vendors who assist in service delivery',
      examples: ['Cloud hosting providers', 'Payment processors', 'Analytics services']
    },
    {
      category: 'Legal Requirements',
      description: 'When required by law or to protect our rights',
      examples: ['Court orders', 'Government requests', 'Legal proceedings']
    },
    {
      category: 'Business Transfers',
      description: 'In connection with business mergers or acquisitions',
      examples: ['Company sale', 'Asset transfer', 'Corporate restructuring']
    },
    {
      category: 'Consent',
      description: 'When you explicitly authorize us to share your information',
      examples: ['Partner integrations', 'Case studies', 'Testimonials']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Privacy
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Policy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-lg text-gray-400">
              Last updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Data Collection Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Information We Collect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We collect information to provide and improve our services, communicate with you, and ensure security.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-xl border border-zinc-700"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Usage Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We Use Your Information
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use your information responsibly and only for purposes that benefit you and our services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataUses.map((use, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-xl border border-zinc-700"
              >
                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {use.purpose}
                </h3>
                <p className="text-gray-400">
                  {use.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sharing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Information Sharing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We do not sell your personal information. We only share information in specific, limited circumstances.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataSharing.map((share, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl border border-zinc-700"
              >
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{share.category}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {share.description}
                </p>
                <ul className="space-y-2">
                  {share.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Security Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl border border-zinc-700">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Data Security</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We implement industry-standard security measures to protect your personal information, 
                  including encryption, access controls, and regular security audits.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    End-to-end encryption for sensitive data
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Regular security assessments and penetration testing
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Employee training on data protection
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl border border-zinc-700">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  If you have questions about this privacy policy or want to exercise your data rights, 
                  please contact our privacy team.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 text-purple-400 mr-3" />
                    <span>{companyInfo.email}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 text-purple-400 mr-3" />
                    <span>{companyInfo.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                    <span>{companyInfo.address}</span>
                  </div>
                </div>
                <Link 
                  to="/contact"
                  className="inline-flex items-center mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Contact Privacy Team
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Updates & Changes */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Policy <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Updates</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. 
              We will notify you of any material changes by posting the new policy on our website.
            </p>
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-xl p-6">
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-blue-400 mr-3" />
                <span className="text-blue-400 font-semibold">Important Notice</span>
              </div>
              <p className="text-gray-300 text-center">
                This privacy policy was last updated on <strong>{lastUpdated}</strong>. 
                Please review it periodically to stay informed about how we protect your information.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
=======
	return (
		<>
			<SEO
				title="Privacy Policy"
				description="Learn how Zion Tech Group handles your data and protects your privacy."
				canonical="https://ziontechgroup.com/privacy"
			/>
			<Header />
			<main className="min-h-screen bg-zion-blue pt-24 pb-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<GradientHeading>Privacy Policy</GradientHeading>
						<p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
							Your privacy is important to us. This page explains how we collect, use, and safeguard your information.
						</p>
						<p className="mt-2 text-zion-slate-light text-sm">
							Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
						</p>
					</div>
					
					<div className="max-w-4xl mx-auto space-y-8">
						<section>
							<h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
							<p className="text-zion-slate-light mb-4">
								Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
							</p>
							<p className="text-zion-slate-light">
								By using our services, you agree to the collection and use of information in accordance with this policy.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
							<h3 className="text-xl font-semibold text-zion-cyan mb-3">2.1 Personal Information</h3>
							<p className="text-zion-slate-light mb-4">
								We may collect personal information that you provide directly to us, including:
							</p>
							<ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
								<li>Name and contact information (email, phone number, address)</li>
								<li>Professional information (resume, skills, work history)</li>
								<li>Account credentials and profile information</li>
								<li>Communication preferences and marketing opt-ins</li>
								<li>Payment and billing information</li>
							</ul>

							<h3 className="text-xl font-semibold text-zion-cyan mb-3">2.2 Automatically Collected Information</h3>
							<p className="text-zion-slate-light mb-4">
								We automatically collect certain information when you use our services:
							</p>
							<ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
								<li>Device information (IP address, browser type, operating system)</li>
								<li>Usage data (pages visited, time spent, features used)</li>
								<li>Cookies and similar tracking technologies</li>
								<li>Log files and analytics data</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
							<p className="text-zion-slate-light mb-4">
								We use the information we collect for various purposes, including:
							</p>
							<ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
								<li>Providing and maintaining our services</li>
								<li>Processing transactions and payments</li>
								<li>Connecting talent with opportunities</li>
								<li>Improving our platform and user experience</li>
								<li>Communicating with you about our services</li>
								<li>Ensuring security and preventing fraud</li>
								<li>Complying with legal obligations</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
							<p className="text-zion-slate-light mb-4">
								We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
							</p>
							<ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
								<li>With your explicit consent</li>
								<li>To service providers who assist in operating our platform</li>
								<li>To comply with legal requirements or protect our rights</li>
								<li>In connection with a business transfer or merger</li>
								<li>To prevent fraud or security threats</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
							<p className="text-zion-slate-light mb-4">
								We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-white mb-4">6. Your Rights and Choices</h2>
							<p className="text-zion-slate-light mb-4">
								You have certain rights regarding your personal information:
							</p>
							<ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
								<li>Access and review your personal information</li>
								<li>Update or correct inaccurate information</li>
								<li>Request deletion of your personal information</li>
								<li>Opt-out of marketing communications</li>
								<li>Control cookie preferences</li>
								<li>Data portability</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
							<p className="text-zion-slate-light mb-4">
								If you have questions about our privacy practices or would like to exercise your rights, please contact us at:
							</p>
							<div className="bg-zion-slate-dark p-4 rounded-lg">
								<p className="text-zion-slate-light">
									<strong>Email:</strong>{' '}
									<a href="mailto:privacy@ziontechgroup.com" className="text-zion-cyan hover:underline">
										privacy@ziontechgroup.com
									</a>
								</p>
								<p className="text-zion-slate-light mt-2">
									<strong>Address:</strong> Zion Tech Group, Privacy Team
								</p>
							</div>
						</section>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
}
=======
};

export default Privacy;
>>>>>>> 61e30eca5fbfc0775ada7e1bb633889d4df21738
