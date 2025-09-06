import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../components/Layout';
import { BookOpen, Code, Settings, Shield, Users, Zap, ChevronRight, Search, Clock, ExternalLink, FileText, CheckCircle } from 'lucide-react';

const categories = [
  {
    title: 'Getting Started',
    description: 'Quick start guides and setup instructions',
    icon: BookOpen,
    articles: [
      { title: 'Introduction to Zion Tech Group', href: '/docs/getting-started/introduction' },
      { title: 'Setting Up Your Account', href: '/docs/getting-started/account-setup' },
      { title: 'First Steps with AI Services', href: '/docs/getting-started/ai-services' }
    ]
  },
  {
    title: 'AI Services',
    description: 'Comprehensive guides for our AI solutions',
    icon: Zap,
    articles: [
      { title: 'AI Email Responder Setup', href: '/docs/ai-services/email-responder' },
      { title: 'Predictive Analytics Guide', href: '/docs/ai-services/predictive-analytics' },
      { title: 'Chatbot Configuration', href: '/docs/ai-services/chatbot' }
    ]
  },
  {
    title: 'IT Services',
    description: 'Documentation for our IT infrastructure services',
    icon: Settings,
    articles: [
      { title: 'Cloud Infrastructure Setup', href: '/docs/it-services/cloud-infrastructure' },
      { title: 'Cybersecurity Best Practices', href: '/docs/it-services/cybersecurity' },
      { title: 'Network Configuration', href: '/docs/it-services/network' }
    ]
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation and examples',
    icon: Code,
    articles: [
      { title: 'Authentication', href: '/docs/api/authentication' },
      { title: 'Endpoints Reference', href: '/docs/api/endpoints' },
      { title: 'Code Examples', href: '/docs/api/examples' }
    ]
  },
  {
    title: 'Security',
    description: 'Security guidelines and compliance information',
    icon: Shield,
    articles: [
      { title: 'Data Protection', href: '/docs/security/data-protection' },
      { title: 'Compliance Standards', href: '/docs/security/compliance' },
      { title: 'Security Best Practices', href: '/docs/security/best-practices' }
    ]
  },
  {
    title: 'Support',
    description: 'Troubleshooting and support resources',
    icon: Users,
    articles: [
      { title: 'FAQ', href: '/docs/support/faq' },
      { title: 'Troubleshooting Guide', href: '/docs/support/troubleshooting' },
      { title: 'Contact Support', href: '/docs/support/contact' }
    ]
  }
];
}

export default function DocsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <BookOpen className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-6">
                Documentation
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Comprehensive guides and resources to help you get the most out of our services.
              </p>
              <div className="relative max-w-md mx-auto">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Documentation Categories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Browse our documentation by category to find the information you need.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <Link
                          href={article.href}
                          className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <ChevronRight className="w-4 h-4 mr-2" />
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Links</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Popular documentation pages and resources.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/docs/getting-started/introduction"
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
              >
                <BookOpen className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Getting Started</h3>
                <p className="text-sm text-gray-600">Learn the basics and get up and running quickly.</p>
              </Link>
              <Link
                href="/docs/api/endpoints"
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
              >
                <Code className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-semibold mb-2">API Reference</h3>
                <p className="text-sm text-gray-600">Complete API documentation and examples.</p>
              </Link>
              <Link
                href="/docs/support/faq"
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
              >
                <Users className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold mb-2">FAQ</h3>
                <p className="text-sm text-gray-600">Find answers to common questions.</p>
              </Link>
              <Link
                href="/contact"
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
              >
                <ExternalLink className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="font-semibold mb-2">Contact Support</h3>
                <p className="text-sm text-gray-600">Get help from our support team.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need More Help?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Support
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
