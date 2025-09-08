import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowRight, ExternalLink } from 'lucide-react';

const News: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Healthcare Analytics Platform',
      excerpt: 'Our latest healthcare analytics solution leverages advanced AI to provide real-time insights for improved patient care and operational efficiency.',
      category: 'Product Launch',
      author: 'Zion Tech Team',
      date: '2024-12-15',
      readTime: '3 min read',
      image: '/images/news/healthcare-analytics.jpg',
      href: '/news/ai-healthcare-analytics-launch'
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: Zion Tech Achieves 1000+ Qubit Processing',
      excerpt: 'Our quantum computing research team has achieved a major milestone in quantum processing power, opening new possibilities for complex computations.',
      category: 'Research',
      author: 'Dr. Sarah Chen',
      date: '2024-12-10',
      readTime: '5 min read',
      image: '/images/news/quantum-breakthrough.jpg',
      href: '/news/quantum-computing-breakthrough'
    },
    {
      id: 3,
      title: 'Zion Tech Group Named Top AI Company by Tech Innovation Awards 2024',
      excerpt: 'We are honored to be recognized as a leading AI company for our innovative solutions and contributions to the technology industry.',
      category: 'Awards',
      author: 'Zion Tech Team',
      date: '2024-12-05',
      readTime: '2 min read',
      image: '/images/news/award-recognition.jpg',
      href: '/news/top-ai-company-award'
    },
    {
      id: 4,
      title: 'New Partnership with Global Healthcare Consortium Announced',
      excerpt: 'Zion Tech Group joins forces with leading healthcare organizations to advance AI-powered medical technology solutions worldwide.',
      category: 'Partnerships',
      author: 'Michael Rodriguez',
      date: '2024-11-30',
      readTime: '4 min read',
      image: '/images/news/healthcare-partnership.jpg',
      href: '/news/healthcare-consortium-partnership'
    },
    {
      id: 5,
      title: 'Edge Computing Platform Achieves 99.9% Uptime in Production',
      excerpt: 'Our edge computing solution demonstrates exceptional reliability and performance in real-world enterprise environments.',
      category: 'Technology',
      author: 'Dr. Emily Watson',
      date: '2024-11-25',
      readTime: '3 min read',
      image: '/images/news/edge-computing.jpg',
      href: '/news/edge-computing-uptime-milestone'
    },
    {
      id: 6,
      title: 'Zion Tech Group Expands to European Markets',
      excerpt: 'Strategic expansion into European markets brings our AI solutions to new customers and strengthens our global presence.',
      category: 'Business',
      author: 'Zion Tech Team',
      date: '2024-11-20',
      readTime: '3 min read',
      image: '/images/news/european-expansion.jpg',
      href: '/news/european-market-expansion'
    }
  ];
  const categories = [
    'All News',
    'Product Launch',
    'Research',
    'Awards',
    'Partnerships',
    'Technology',
    'Business'
  ];
  const featuredArticle = newsArticles[0];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mb-6">
                <Newspaper className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed about the latest developments in AI, quantum computing, cloud technology, and comp updates from Zion Tech Group.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {" "}
        <div className="text-center mb-12">
          {" "}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {" "}
            News & Updates{" "}
          </h1>{" "}
          <p className="text-xl text-gray-600">
            {" "}
            Stay informed with the latest news and updates from our team.{" "}
          </p>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {" "}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              New AI Solutions Launch
            </h3>{" "}
            <p className="text-gray-600 mb-4">
              We're excited to announce our latest AI-powered solutions for
              businesses.
            </p>{" "}
            <span className="text-sm text-blue-600">Read More</span>{" "}
          </div>{" "}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Security Update
            </h3>{" "}
            <p className="text-gray-600 mb-4">
              Important security updates and best practices for protecting your
              data.
            </p>{" "}
            <span className="text-sm text-blue-600">Read More</span>{" "}
          </div>{" "}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Company Milestone
            </h3>{" "}
            <p className="text-gray-600 mb-4">
              Celebrating another year of growth and innovation in technology
              solutions.
            </p>{" "}
            <span className="text-sm text-blue-600">Read More</span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default News;
