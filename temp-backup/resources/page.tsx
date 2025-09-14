import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ResourcesPage() {
  const resources = [
    {
      category: 'AI Transformation Guides',
      items: [
        {
          title: 'AI 2025: Enterprise AI Transformation Complete Guide',
          description: 'Comprehensive roadmap for enterprise AI transformation with implementation strategies and success stories.',
          type: 'Complete Guide',
          readTime: '15 min read',
          link: '/blog/ai-2025-enterprise-ai-transformation-complete-guide',
          featured: true
        },
        {
          title: 'AI 2025: Quantum Computing Business Revolution',
          description: 'Explore how quantum computing is revolutionizing business operations with practical applications.',
          type: 'Revolution Guide',
          readTime: '12 min read',
          link: '/blog/ai-2025-quantum-computing-business-revolution',
          featured: true
        },
        {
          title: 'AI 2025: Autonomous Systems Enterprise Implementation',
          description: 'Master autonomous AI systems implementation with strategies and best practices.',
          type: 'Implementation Guide',
          readTime: '14 min read',
          link: '/blog/ai-2025-autonomous-systems-enterprise-implementation',
          featured: true
        }
      ]
    },
    {
      category: 'Case Studies',
      items: [
        {
          title: 'AI Transformation Success: 400% ROI Achievement',
          description: 'Global manufacturing company achieves 400% ROI and $50M annual savings through AI implementation.',
          type: 'Success Story',
          readTime: '8 min read',
          link: '/case-studies/ai-transformation-global-manufacturing-success',
          featured: true
        }
      ]
    },
    {
      category: 'Interactive Tools',
      items: [
        {
          title: 'AI Transformation Readiness Assessment',
          description: 'Assess your organization\'s readiness for AI transformation with personalized recommendations.',
          type: 'Assessment Tool',
          readTime: '5 min',
          link: '/tools/ai-transformation-readiness-assessment',
          featured: true
        },
        {
          title: 'AI Transformation ROI Calculator',
          description: 'Calculate the potential ROI of your AI transformation project.',
          type: 'Calculator',
          readTime: '3 min',
          link: '/tools/ai-transformation-roi-calculator-2025',
          featured: true
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="AI Resources - Comprehensive Guides, Tools & Case Studies"
        description="Access our comprehensive collection of AI resources including guides, tools, case studies, and implementation strategies for 2025."
        keywords="AI resources, AI guides, AI tools, AI case studies, AI transformation, enterprise AI"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Resources Hub
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guides, tools, and case studies to accelerate your AI transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#guides"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Guides
              </Link>
              <Link
                href="#tools"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Try Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and comprehensive resources for AI transformation success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.flatMap(category => 
              category.items.filter(item => item.featured)
            ).map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                  <div className="text-6xl">
                    {resource.type === 'Complete Guide' ? '📚' :
                     resource.type === 'Revolution Guide' ? '⚛️' :
                     resource.type === 'Implementation Guide' ? '🤖' :
                     resource.type === 'Success Story' ? '🏭' :
                     resource.type === 'Assessment Tool' ? '📊' :
                     resource.type === 'Calculator' ? '💰' : '📄'}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
                      {resource.type}
                    </span>
                    <span className="ml-2 text-sm text-gray-500">{resource.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <Link
                    href={resource.link}
                    className="text-purple-600 font-semibold hover:text-purple-800"
                  >
                    Access Resource →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources by Category */}
      <section id="guides" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our complete collection of AI resources organized by category
            </p>
          </div>

          <div className="space-y-16">
            {resources.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((resource, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                            {resource.type}
                          </span>
                          <span className="ml-2 text-sm text-gray-500">{resource.readTime}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {resource.title}
                        </h4>
                        <p className="text-gray-600 mb-4 text-sm">
                          {resource.description}
                        </p>
                        <Link
                          href={resource.link}
                          className="text-blue-600 font-semibold hover:text-blue-800 text-sm"
                        >
                          {resource.type === 'Assessment Tool' || resource.type === 'Calculator' ? 'Try Tool' : 'Read More'} →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Get personalized AI transformation guidance and implementation support from our experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}