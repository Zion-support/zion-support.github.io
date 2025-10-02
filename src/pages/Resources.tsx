import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  FileText,
  BookOpen,
  Users,
  Code,
  Wrench,
  GraduationCap,
  MessageCircle,
  ArrowRight,
  Download,
  Calendar,
  Award,
  TrendingUp
} from 'lucide-react';

const Resources: React.FC = () => {
  const resourceCategories = [
    {
      icon: FileText,
      title: 'Case Studies',
      description: 'Real-world examples of how we\'ve helped clients achieve their goals.',
      path: '/case-studies',
      items: [
        'Global Retail AI Transformation',
        'Healthcare AI Implementation',
        'Financial Services Automation',
        'Manufacturing Optimization'
      ]
    },
    {
      icon: BookOpen,
      title: 'White Papers',
      description: 'In-depth research and insights on the latest technology trends.',
      path: '/white-papers',
      items: [
        'AI in Enterprise: Best Practices',
        'Quantum Computing Readiness Guide',
        'Cybersecurity in the AI Era',
        'Digital Transformation Strategies'
      ]
    },
    {
      icon: Calendar,
      title: 'Webinars',
      description: 'Live and recorded sessions with industry experts and thought leaders.',
      path: '/webinars',
      items: [
        'AI Implementation Strategies',
        'Cloud Migration Best Practices',
        'Cybersecurity Trends 2025',
        'Future of Quantum Computing'
      ]
    },
    {
      icon: Code,
      title: 'Documentation',
      description: 'Comprehensive technical documentation for developers and IT teams.',
      path: '/docs',
      items: [
        'API Reference Guides',
        'Integration Tutorials',
        'Configuration Examples',
        'Troubleshooting Guides'
      ]
    },
    {
      icon: Wrench,
      title: 'Developer Tools',
      description: 'Tools, SDKs, and utilities to help developers build amazing solutions.',
      path: '/developer-tools',
      items: [
        'SDK Downloads',
        'Code Samples',
        'Testing Tools',
        'Development Templates'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Training & Certification',
      description: 'Professional training programs and certification courses.',
      path: '/training',
      items: [
        'AI Fundamentals Course',
        'Cloud Architecture Certification',
        'Security Best Practices',
        'Advanced Analytics Training'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Community Forum',
      description: 'Connect with other professionals and get support from our community.',
      path: '/community',
      items: [
        'Technical Discussions',
        'Q&A Sessions',
        'Feature Requests',
        'User Success Stories'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Blog',
      description: 'Latest insights, tutorials, and industry news from our experts.',
      path: '/blog',
      items: [
        'AI Industry Insights',
        'Technical Tutorials',
        'Company Updates',
        'Thought Leadership'
      ]
    }
  ];

  const featuredResources = [
    {
      title: 'AI Implementation Guide 2025',
      description: 'Complete guide to implementing AI solutions in your organization.',
      type: 'White Paper',
      downloadUrl: '/downloads/ai-implementation-guide-2025.pdf',
      icon: Download
    },
    {
      title: 'Cybersecurity Best Practices',
      description: 'Essential security practices for modern organizations.',
      type: 'Documentation',
      downloadUrl: '/downloads/cybersecurity-best-practices.pdf',
      icon: Download
    },
    {
      title: 'Cloud Migration Checklist',
      description: 'Step-by-step checklist for successful cloud migration.',
      type: 'Resource',
      downloadUrl: '/downloads/cloud-migration-checklist.pdf',
      icon: Download
    }
  ];

  return (
    <>
      <Helmet>
        <title>Resources - Zion Tech Group | Knowledge Center & Documentation</title>
        <meta
          name="description"
          content="Access comprehensive resources including case studies, white papers, documentation, training materials, and community support from Zion Tech Group."
        />
        <meta
          name="keywords"
          content="AI resources, technical documentation, case studies, white papers, webinars, developer tools, training, certification, community forum"
        />
        <link rel="canonical" href="https://ziontechgroup.com/resources" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Knowledge Center
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Access comprehensive resources, documentation, and learning materials to help you 
                succeed with our AI and IT solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-slate-400">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-400" />
                  <span>Expert-Curated Content</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-400" />
                  <span>Latest Industry Insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  <span>Community Support</span>
                </div>
              </div>
            </div>

            {/* Featured Resources */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredResources.map((resource) => (
                  <div
                    key={resource.title}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <resource.icon className="h-5 w-5 text-blue-400" />
                      </div>
                      <span className="text-sm text-blue-400 font-medium ml-2">{resource.type}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                    <p className="text-slate-300 mb-4">{resource.description}</p>
                    <a
                      href={resource.downloadUrl}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Now
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Resource Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resourceCategories.map((category) => (
                <div
                  key={category.path}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                      <category.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white ml-3">
                      {category.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-300 mb-4">
                    {category.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-slate-400">
                        • {item}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={category.path}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Explore {category.title}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Quick Access
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Get instant access to the most commonly requested resources and tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                to="/docs/api"
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 text-center group"
              >
                <Code className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">API Reference</h3>
                <p className="text-slate-400 text-sm">Complete API documentation</p>
              </Link>

              <Link
                to="/developer-tools"
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 text-center group"
              >
                <Wrench className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Developer Tools</h3>
                <p className="text-slate-400 text-sm">SDKs, samples, and utilities</p>
              </Link>

              <Link
                to="/training"
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 text-center group"
              >
                <GraduationCap className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Training</h3>
                <p className="text-slate-400 text-sm">Courses and certifications</p>
              </Link>

              <Link
                to="/community"
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 text-center group"
              >
                <MessageCircle className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Community</h3>
                <p className="text-slate-400 text-sm">Connect and get support</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Our support team is here to help you find the right resources for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
              >
                Contact Support
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link
                to="/community"
                className="inline-flex items-center px-8 py-4 border border-slate-600 text-white hover:bg-slate-800 font-semibold rounded-lg transition-colors"
              >
                Ask Community
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Resources;