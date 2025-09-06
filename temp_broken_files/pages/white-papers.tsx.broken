import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Download, 
  FileText, 
  Calendar, 
  Eye, 
  ArrowRight, 
  CheckCircle, 
  ExternalLink,
  BookOpen,
  Award,
  Globe,
  Zap,
  Target,
  Brain,
  Shield,
  Database,
  Cloud,
  Cpu
} from 'lucide-react';

const whitePapers = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise: A Comprehensive Guide',
    description: 'Explore how artificial intelligence is transforming enterprise operations, from automation to decision-making processes.',
    category: 'Artificial Intelligence',
    date: '2024-01-15',
    downloads: 2500,
    pages: 45,
    icon: Brain,
    topics: ['Machine Learning', 'Automation', 'Enterprise AI', 'ROI Analysis'],
    summary: 'This comprehensive white paper examines the current state of AI in enterprise environments and provides actionable insights for implementation.',
    keyFindings: [
      'AI adoption increases efficiency by 40% on average',
      'ROI typically achieved within 12-18 months',
      'Security and compliance are top concerns',
      'Employee training is critical for success'
    ]
  },
  {
    id: 2,
    title: 'Cloud Security Best Practices: Protecting Your Digital Assets',
    description: 'Essential strategies and best practices for securing cloud infrastructure and protecting sensitive data.',
    category: 'Cybersecurity',
    date: '2024-01-08',
    downloads: 3200,
    pages: 38,
    icon: Shield,
    topics: ['Cloud Security', 'Data Protection', 'Compliance', 'Risk Management'],
    summary: 'A detailed guide to implementing robust security measures in cloud environments.',
    keyFindings: [
      'Multi-factor authentication reduces breaches by 99%',
      'Regular security audits are essential',
      'Employee training prevents 90% of incidents',
      'Compliance frameworks provide clear guidelines'
    ]
  },
  {
    id: 3,
    title: 'Digital Transformation: A Strategic Framework',
    description: 'A complete framework for planning and executing digital transformation initiatives in modern organizations.',
    category: 'Digital Transformation',
    date: '2024-01-01',
    downloads: 4100,
    pages: 52,
    icon: Target,
    topics: ['Strategy', 'Change Management', 'Technology', 'Culture'],
    summary: 'Comprehensive framework for organizations looking to transform their operations through digital technologies.',
    keyFindings: [
      'Culture change is more important than technology',
      'Clear vision and leadership are critical',
      'Phased approach reduces risk',
      'Measuring success requires defined metrics'
    ]
  },
  {
    id: 4,
    title: 'The State of Cloud Computing: Trends and Predictions',
    description: 'Analysis of current cloud computing trends and predictions for the future of cloud technology.',
    category: 'Cloud Computing',
    date: '2023-12-20',
    downloads: 2800,
    pages: 42,
    icon: Cloud,
    topics: ['Cloud Trends', 'Market Analysis', 'Future Predictions', 'Technology'],
    summary: 'In-depth analysis of cloud computing market trends and future predictions.',
    keyFindings: [
      'Hybrid cloud adoption is increasing rapidly',
      'Edge computing is becoming mainstream',
      'Cost optimization is a top priority',
      'AI integration is driving innovation'
    ]
  },
  {
    id: 5,
    title: 'Data Analytics and Business Intelligence: Driving Growth',
    description: 'How organizations can leverage data analytics and business intelligence to drive growth and innovation.',
    category: 'Data Analytics',
    date: '2023-12-10',
    downloads: 1900,
    pages: 35,
    icon: Database,
    topics: ['Data Analytics', 'Business Intelligence', 'Growth Strategy', 'Insights'],
    summary: 'Comprehensive guide to implementing data analytics and BI solutions for business growth.',
    keyFindings: [
      'Data-driven companies outperform by 23%',
      'Real-time analytics provide competitive advantage',
      'Data quality is fundamental to success',
      'User adoption is key to ROI'
    ]
  },
  {
    id: 6,
    title: 'Cybersecurity in the Age of Remote Work',
    description: 'Addressing the unique security challenges and solutions for remote and hybrid work environments.',
    category: 'Cybersecurity',
    date: '2023-11-25',
    downloads: 3600,
    pages: 40,
    icon: Shield,
    topics: ['Remote Work', 'Security', 'VPN', 'Endpoint Protection'],
    summary: 'Essential security strategies for protecting remote and hybrid work environments.',
    keyFindings: [
      'Remote work increases attack surface by 60%',
      'VPN and endpoint protection are essential',
      'Employee training is more important than ever',
      'Zero-trust architecture is recommended'
    ]
  }
];

const categories = [
  { name: 'All', count: 6, icon: FileText },
  { name: 'Artificial Intelligence', count: 1, icon: Brain },
  { name: 'Cybersecurity', count: 2, icon: Shield },
  { name: 'Digital Transformation', count: 1, icon: Target },
  { name: 'Cloud Computing', count: 1, icon: Cloud },
  { name: 'Data Analytics', count: 1, icon: Database }
];

const benefits = [
  {
    icon: BookOpen,
    title: 'Expert Insights',
    description: 'Written by industry experts with years of experience'
  },
  {
    icon: Award,
    title: 'Research-Based',
    description: 'Based on extensive research and real-world case studies'
  },
  {
    icon: Download,
    title: 'Free Access',
    description: 'All white papers are available for free download'
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'Insights from organizations worldwide'
  }
];

export default function WhitePapers() {
  return (
    <Layout 
      title="White Papers - Zion Tech Group"
      description="Download our comprehensive white papers on AI, cloud computing, cybersecurity, and digital transformation. Free research reports from industry experts."
      keywords="white papers, research reports, AI research, cloud computing, cybersecurity, digital transformation, free downloads"
    >
      <Head>
        <title>White Papers - Zion Tech Group</title>
        <meta name="description" content="Download our comprehensive white papers on AI, cloud computing, cybersecurity, and digital transformation. Free research reports from industry experts." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                White Papers
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                In-depth research and insights on the latest trends in technology, 
                AI, cloud computing, and digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Browse All Papers
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  Subscribe for Updates
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Read Our White Papers?
              </h2>
              <p className="text-lg text-gray-600">
                Get valuable insights from our research team
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <button
                  key={category.name}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* White Papers Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest White Papers
              </h2>
              <p className="text-lg text-gray-600">
                Download our comprehensive research reports
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {whitePapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <paper.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {paper.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{paper.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{paper.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {paper.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Download className="w-4 h-4 mr-2" />
                        {paper.downloads.toLocaleString()} downloads
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <FileText className="w-4 h-4 mr-2" />
                        {paper.pages} pages
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">Key Topics:</p>
                      <div className="flex flex-wrap gap-2">
                        {paper.topics.map((topic, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">Key Findings:</p>
                      <ul className="space-y-1">
                        {paper.keyFindings.slice(0, 2).map((finding, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            {finding}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download White Paper
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="text-xl mb-8 text-blue-100">
              Subscribe to our newsletter to get notified about new white papers and research updates.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-white text-blue-900 px-6 py-3 rounded-r-lg font-semibold hover:bg-blue-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}