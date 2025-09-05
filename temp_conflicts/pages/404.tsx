import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft, AlertTriangle, Map, Users, Rocket } from 'lucide-react';

export default function Custom404() {
  const quickLinks = [
    { href: '/', label: '🏠 Home', icon: Home },
    { href: '/services', label: '🚀 Services', icon: Rocket },
    { href: '/explore', label: '🔍 Explore', icon: Search },
    { href: '/about', label: '👥 About', icon: Users },
    { href: '/sitemap', label: '🗺️ Sitemap', icon: Map }];

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center px-6&quot;>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;The page you're looking for doesn't exist. Navigate back to Zion Tech Group's main services and solutions.&quot; />
        <meta name=&quot;robots&quot; content=&quot;noindex, nofollow&quot; />
      </Head>

      <div className=&quot;max-w-4xl mx-auto text-center&quot;>
        {/* 404 Icon and Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className=&quot;mb-8&quot;
        >
          <div className=&quot;w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center&quot;>
            <AlertTriangle className=&quot;w-16 h-16 text-red-400&quot; />
          </div>
          <h1 className=&quot;text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4&quot;>
            404
          </h1>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
            Page Not Found
          </h2>
          <p className=&quot;text-xl text-white/70 max-w-2xl mx-auto&quot;>
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, we've got plenty of amazing content for you to explore.
          </p>
        </motion.div>

        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className=&quot;mb-12&quot;
        >
          <h3 className=&quot;text-xl font-semibold text-white mb-6&quot;>
            Quick Navigation
          </h3>
          <div className=&quot;grid grid-cols-2 md:grid-cols-5 gap-4 max-w-2xl mx-auto&quot;>
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className=&quot;block p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105&quot;
                >
                  <link.icon className=&quot;w-6 h-6 mx-auto mb-2 text-cyan-400&quot; />
                  <span className=&quot;text-sm text-white/80&quot;>{link.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Popular Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className=&quot;mb-12&quot;
        >
          <h3 className=&quot;text-xl font-semibold text-white mb-6&quot;>
            Popular Services
          </h3>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto&quot;>
            {[
              { href: '/ai-business-intelligence', label: 'AI Business Intelligence', desc: 'Transform data into actionable insights' },
              { href: '/quantum-cybersecurity', label: 'Quantum Cybersecurity', desc: 'Future-proof security solutions' },
              { href: '/edge-computing-orchestration', label: 'Edge Computing', desc: 'Advanced edge optimization platform' }].map((service, index) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className=&quot;block p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300&quot;
                >
                  <h4 className=&quot;font-semibold text-white mb-2&quot;>{service.label}</h4>
                  <p className=&quot;text-sm text-white/60&quot;>{service.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;
        >
          <Link
            href=&quot;/&quot;
            className=&quot;inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105&quot;
          >
            <ArrowLeft className=&quot;w-5 h-5&quot; />
            Back to Home
          </Link>
          <Link
            href=&quot;/sitemap&quot;
            className=&quot;inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10&quot;
          >
            <Map className=&quot;w-5 h-5&quot; />
            View Sitemap
          </Link>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className=&quot;mt-12 pt-8 border-t border-white/10&quot;
        >
          <p className=&quot;text-white/60 mb-4&quot;>
            Can't find what you're looking for? We're here to help!
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center text-sm&quot;>
            <a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors&quot;
            >
              📧 Contact Support
            </Link>
            <a
              href=&quot;/search&quot;
              className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors&quot;
            >
              🔍 Search Our Site
            </Link>
            <a
              href=&quot;/services&quot;
              className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors&quot;
            >
              🚀 Browse Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
