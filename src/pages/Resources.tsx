import React from 'react';
import { Link } from 'react-router-dom';
import {

} from 'lucide-react';
const Resources: React.FC = () => {,
const resourceCategories = [
{
icon: BookOpen,,
title: 'Case Studies',',
description: 'Real-world success stories and implementation results from our clients',',
link: '/case-studies',',
color: 'blue',',
count: '25+'
},
    {
      icon: BookOpen,
      title: 'Case Studies',
      description: 'Real-world success stories and implementation results from our clients',
      link: '/case-studies',
      color: 'blue',
      count: '25+'
    },
    {
icon: Video,,
title: 'Webinars',',
description: 'Expert-led sessions covering the latest in AI and automation',',
link: '/webinars',',
color: 'purple',',
count: '40+'
},
    {
icon: Code,,
title: 'Documentation',',
description: 'Comprehensive guides and technical documentation for developers',',
link: '/docs',',
color: 'orange',',
count: '100+'
},
    {
icon: Users,,
title: 'Training & Certification',',
description: 'Professional training programs and certification courses',',
link: '/training',',
color: 'teal',',
count: '10+'
},
    {
icon: MessageSquare,,
title: 'Community Forum',',
description: 'Connect with peers and get support from our expert community',',
link: '/community',',
color: 'red',',
count: '5000+'
}
  ];

  const featuredResources = [
    {
title: 'AI Implementation Roadmap 2025',',
type: 'White Paper',',
description: 'Comprehensive guide to implementing AI solutions in your organization',',
downloadLink: '/downloads/ai-implementation-roadmap-2025.pdf',',
icon: Download
},
    {
title: 'Enterprise AI Transformation Case Study',',
type: 'Case Study',',
description: 'How a Fortune 500 company achieved 300% ROI with our AI solutions',',
link: '/case-studies/enterprise-ai-transformation',',
icon: FileText
},
    {
title: 'Building Scalable AI Systems',',
type: 'Webinar',',
description: 'Expert insights on architecting AI systems that scale with your business',',
link: '/webinars/building-scalable-ai-systems',',
icon: Video
},
    {
title: 'API Documentation v2.1',',
type: 'Documentation',',
description: 'Complete API reference for integrating with our AI services',',
link: '/docs/api',',
icon: Code
}
  ];

  const latestBlogPosts = [
    {
title: 'The Future of AI in Manufacturing',',
excerpt: 'Exploring how AI is revolutionizing manufacturing processes and predictive maintenance.',',
date: '2025-01-15',',
link: '/blog/ai-manufacturing-future'
},
    {
title: 'Cybersecurity Best Practices for AI Systems',',
excerpt: 'Essential security measures to protect your AI infrastructure and data.',',
date: '2025-01-12',',
link: '/blog/ai-cybersecurity-best-practices'
},
    {
title: 'ROI Calculation for AI Implementations',',
excerpt: 'A comprehensive guide to measuring and maximizing ROI from AI investments.',',
date: '2025-01-10',',
link: '/blog/ai-roi-calculation-guide'
},
    {
title: 'Building Ethical AI Systems',',
excerpt: 'Principles and practices for developing AI systems that are fair and transparent.',',
date: '2025-01-08',',
link: '/blog/ethical-ai-systems'
}
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">",
          <div className="text-center">
            <h1 className="text-4xl md: text-6xl font-bold mb-6">",
              Resources & Knowledge Hub
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Access our comprehensive library of resources, from case studies and white papers 
              to training materials and community forums. Everything you need to succeed with AI.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">",
              <Link
                to="/blog"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-colors",
              >
                Browse Blog
              </Link>
              <Link
                to="/community"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white/10 transition-colors",
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">",
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">",
              Explore Our Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive resources to help you succeed with AI and automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">",
            {resourceCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.title}
                  to={category.link}
                  className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 hover: shadow-xl transition-all duration-300 hover:-translate-y-1",
                >
              <div className={`w-16 h-16 rounded-lg bg-${category.color}-100 flex items-center justify-center mb-6`}>`;
                    <span className={`w-8 h-8 text-${category.color}-600`}>📘</span>`;
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <span className={`bg-${category.color}-100 text-${category.color}-800 px-3 py-1 rounded-full text-sm font-semibold`}>`;
                      {category.count}
                    </span>
                  </div>
                  <p className="text-gray-600">{category.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">",
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">",
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our most popular and valuable resources, handpicked by our experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">",
            {featuredResources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <div key={resource.title} className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-600/>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                          {resource.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                  {resource.downloadLink ? (
                    <a
                      href={resource.downloadLink}
                      className="inline-flex items-center text-blue-600 hover: text-blue-700 font-semibold transition-colors",
                      download
                    >
                      <Download className="w-4 h-4 mr-2/>
                      Download Now
                    </a>
                  ) : (
                    <Link
                      to={resource.link}
                      className="inline-flex items-center text-blue-600 hover: text-blue-700 font-semibold transition-colors",
                    >
                      Read More
                    <span className="w-4 h-4 ml-2">›</span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">",
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">",
                Latest Blog Posts
              </h2>
              <p className="text-xl text-gray-600">
                Stay updated with the latest insights and trends in AI
              </p>
            </div>
            <Link
              to="/blog"
              className="hidden md: inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors",
            >
              View All Posts
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">",
            {latestBlogPosts.map((post) => (
              <Link
                key={post.title}
                to={post.link}
                className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 hover: shadow-xl transition-all duration-300 hover:-translate-y-1",
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    Blog Post
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12 md: hidden">",
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-600 hover: text-blue-700 font-semibold transition-colors",
            >
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">",
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">",
            Need Help Getting Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our experts are here to help you find the right resources and guide you through your AI journey.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">",
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-colors",
            >
              Contact Support
            </Link>
            <Link
              to="/training"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white/10 transition-colors",
            >
              View Training
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;