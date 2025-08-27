import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Code, 
  FileText, 
  Search, 
  Filter,
  ArrowRight,
  Download,
  ExternalLink,
  Brain,
  Cloud,
  Shield,
  Sparkles,
  Zap,
  Globe,
  Target,
  TrendingUp,
  CheckCircle,
  Clock,
  User,
  Star
} from 'lucide-react';

const documentationCategories = [
  {
    title: 'AI & Machine Learning',
    description: 'Comprehensive guides for implementing AI solutions and machine learning models.',
    icon: Brain,
    guides: 15,
    examples: 8,
    icon: Brain
  },
  {
    title: 'Cloud & DevOps',
    description: 'Infrastructure setup, deployment guides, and DevOps best practices.',
    icon: Cloud,
    guides: 12,
    examples: 6,
    icon: Cloud
  },
  {
    title: 'Cybersecurity',
    description: 'Security implementation guides, threat detection, and compliance frameworks.',
    icon: Shield,
    guides: 10,
    examples: 5,
    icon: Shield
  },
  {
    title: 'Emerging Technologies',
    description: 'IoT, blockchain, quantum computing, and edge computing guides.',
    icon: Sparkles,
    guides: 8,
    examples: 4,
    icon: Sparkles
  }
];

const quickStartGuides = [
  {
    title: 'Getting Started with AI Services',
    description: 'Quick setup guide for implementing AI solutions in your business.',
    category: 'AI & ML',
    difficulty: 'Beginner',
    time: '15 min',
    icon: Brain
  },
  {
    title: 'Cloud Migration Guide',
    description: 'Step-by-step process for migrating your infrastructure to the cloud.',
    category: 'Cloud & DevOps',
    difficulty: 'Intermediate',
    time: '45 min',
    icon: Cloud
  },
  {
    title: 'Security Best Practices',
    description: 'Essential security measures for protecting your digital assets.',
    category: 'Cybersecurity',
    difficulty: 'Beginner',
    time: '20 min',
    icon: Shield
  }
];

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="min-h-screen bg-zion-slate-dark">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,221,210,0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technical
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue">
                Documentation
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Comprehensive guides, tutorials, and technical resources to help you implement 
              and optimize Zion Tech Group solutions. From quick starts to advanced configurations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#guides"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 transform hover:scale-105"
              >
                Browse Documentation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact?type=documentation-support"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300"
              >
                Get Support
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-zion-slate">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-6 h-6" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors text-lg"
            />
          </div>
        </div>
      </section>

      {/* Quick Start Guides */}
      <section id="guides" className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quick Start Guides
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Get up and running quickly with our step-by-step implementation guides.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickStartGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                    <guide.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm">
                      {guide.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{guide.title}</h3>
                <p className="text-zion-slate-light mb-4">{guide.description}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-zion-slate-light">
                  <div className="flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    {guide.difficulty}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {guide.time}
                  </div>
                </div>

                <Link
                  to={`/docs/${guide.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300"
                >
                  Read Guide
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 bg-zion-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Documentation Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Explore our comprehensive documentation organized by technology domain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documentationCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-zion-slate-light">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-zion-cyan">{category.guides}</div>
                    <div className="text-sm text-zion-slate-light">Guides</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zion-cyan">{category.examples}</div>
                    <div className="text-sm text-zion-slate-light">Examples</div>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to={`/docs/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center w-full justify-center px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300"
                  >
                    Explore Category
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help with Implementation?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our technical experts are here to help you implement and optimize 
              Zion Tech Group solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact?type=technical-support"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105"
              >
                Get Technical Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact?type=consultation"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
