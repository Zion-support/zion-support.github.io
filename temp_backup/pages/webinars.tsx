<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Calendar, 
  Clock, 
  Users, 
  ArrowRight, 
  Play, 
  Download 
} from 'lucide-react';

const upcomingWebinars = [
  {
    title: 'AI in Enterprise: Best Practices',
    date: '2024-02-15',
    time: '2:00 PM EST',
    duration: '60 minutes',
    attendees: 150,
    description: 'Learn how to implement AI solutions in your enterprise environment.'
  },
  {
    title: 'Cloud Migration Strategies',
    date: '2024-02-22',
    time: '3:00 PM EST',
    duration: '45 minutes',
    attendees: 200,
    description: 'Discover the best practices for migrating to the cloud.'
  },
  {
    title: 'Cybersecurity Trends 2024',
    date: '2024-03-01',
    time: '1:00 PM EST',
    duration: '90 minutes',
    attendees: 300,
    description: 'Stay ahead of the latest cybersecurity threats and solutions.'
  }
];

export default function WebinarsPage() {
  const [selectedWebinar, setSelectedWebinar] = useState(null);

  return (
    <>
      <Head>
        <title>Webinars - Zion Tech Group</title>
        <meta name="description" content="Join our educational webinars and learn from industry experts." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
                                <h1 className="text-4xl md:text-6xl font-bold mb-6">Webinars</h1>
                  <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                    Join our educational webinars and learn from industry experts.
                  </p>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Webinars</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Register for our upcoming educational sessions.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-center mb-4">
                    <Calendar className="w-6 h-6 text-indigo-600 mr-2" />
                    <span className="text-sm text-gray-500">{webinar.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{webinar.title}</h3>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {webinar.time}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {webinar.attendees} registered
                    </div>
                  </div>
                  <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                    Register Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Webinars */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Past Webinars</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access recordings and materials from our previous webinars.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Play className="w-6 h-6 text-indigo-600 mr-2" />
                  <span className="text-sm text-gray-500">Recording Available</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Introduction to Machine Learning</h3>
                <p className="text-gray-600 mb-4">Learn the basics of machine learning and AI</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    75 minutes
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                    Watch Now
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Download className="w-6 h-6 text-indigo-600 mr-2" />
                  <span className="text-sm text-gray-500">Materials Available</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cloud Security Best Practices</h3>
                <p className="text-gray-600 mb-4">Secure your cloud infrastructure effectively</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    90 minutes
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Learn?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join our upcoming webinars and expand your knowledge
              </p>
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
=======
import React from 'react';
import SEO from '../components/SEO';

export default function WebinarsPage() {
	return (
		<>
			<SEO title="Webinars | Zion Tech Group" description="Upcoming webinars and on-demand sessions." canonical="/webinars" />
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-4">Webinars</h1>
				<p className="text-gray-300">No upcoming webinars at this time. Check back soon.</p>
			</div>
		</>
	);
>>>>>>> origin/auto/autonomy-17186719616
}
