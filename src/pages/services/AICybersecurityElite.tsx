<<<<<<< HEAD
import { ; Shield,; Lock,; Eye,; Zap,; Users,; Globe, Database,; Cpu,; Network,; Brain,; Target,; Award,; Star,; CheckCircle,; ArrowRight,; Phone,; Mail,; MapPin,; ExternalLink,; AlertTriangle,; Activity,; Key  } from 'lucide-react'; ; const AICybersecurityElite: React.FC = (): JSX.Element => {; return() <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">";" {}";" <section className="relative py-20 px-4 sm:px-6 lg:px-8">";" <div className="max-w-7xl mx-auto text-center">; <motion.div; initial={{ opacity: 0, y: 20 }}; animate={{ opacity: 1, y: 0 }};" transition={{ duration: 0.8   }}";" >";" <div className="flex justify-center mb-6">";" <div className="p-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full">";" <Shield className="h-12 w-12 text-white" /> </div>";" </div>";" <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;" AI Cybersecurity Elite";" </h1>";" <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">; Protect your business with the most advanced AI-powered; cybersecurity platform.Real-time threat detection, automated;" response, and 24/7 protection against evolving cyber threats.";" </p>";" <div className="flex flex-col sm:flex-row gap-4 justify-center">";" <a";" href="https:
=======
import React from "react"
import Link from "next/link"
import Head from "next/head"
const AICybersecurityElite = () => {
  return (
    <>
      <Head>
        <title>Cybersecurity Elite - AI Services</title>
        <meta name="description" content="Professional Cybersecurity Elite services powered by AI"  />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Cybersecurity Elite
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional Cybersecurity Elite services powered by artificial intelligence
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Advanced AI Solutions</li>
                  <li>• Custom Implementation</li>
                  <li>• 24/7 Support</li>
                  <li>• Expert Consultation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Industry Expertise</li>
                  <li>• Proven Results</li>
                  <li>• Scalable Solutions</li>
                  <li>• Competitive Pricing</li>
                </ul>
              </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Pricing
              </Link>
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Contact Us
              </Link>
            </div>
    </>
  );
}
export default AICybersecurityElite
>>>>>>> main
