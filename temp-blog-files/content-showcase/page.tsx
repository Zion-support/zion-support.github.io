import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://ziontechgroup.com'),
  title: 'Content Library - Zion Tech Group | AI & Automation Resources',
  description: 'Explore our comprehensive library of AI and automation content, case studies, guides, and resources to accelerate your business transformation.',
  keywords: ['content library', 'AI resources', 'automation guides', 'case studies', 'business transformation', 'AI education'],
  openGraph: {
    title: 'Content Library - Zion Tech Group',
    description: 'Comprehensive AI and automation resources for business transformation.',
    type: 'website',
    url: 'https://ziontechgroup.com/content-showcase'
  }
}

export default function ContentShowcasePage() {
  const contentCategories = [
    {
      id: 1,
      title: "AI Solutions",
      description: "Comprehensive guides and resources for AI implementation",
      icon: "🧠",
      color: "purple",
      content: [
        {
          title: "AI 2025 Ultimate Business Transformation Guide",
          description: "Complete guide to AI transformation in 2025",
          type: "Guide",
          readTime: "15 min read",
          link: "/ai-2025-ultimate-business-transformation"
        },
        {
          title: "AI 2025 Ultimate Breakthrough",
          description: "Revolutionary AI technologies for 2025",
          type: "Article",
          readTime: "10 min read",
          link: "/ai-2025-ultimate-breakthrough"
        },
        {
          title: "AI 2026 Breakthrough Revolution",
          description: "The future of artificial intelligence",
          type: "Article",
          readTime: "12 min read",
          link: "/ai-2026-breakthrough-revolution"
        }
      ]
    },
    {
      id: 2,
      title: "Automation",
      description: "Everything you need to know about business automation",
      icon: "⚙️",
      color: "blue",
      content: [
        {
          title: "AI 2025 Enterprise Automation Revolution",
          description: "Ultimate guide to enterprise automation",
          type: "Guide",
          readTime: "20 min read",
          link: "/ai-2025-enterprise-automation-revolution-ultimate-guide"
        },
        {
          title: "AI 2025 Enterprise Automation Breakthrough",
          description: "Revolutionary automation technologies",
          type: "Article",
          readTime: "15 min read",
          link: "/ai-2025-enterprise-automation-revolution-ultimate-breakthrough"
        },
        {
          title: "AI 2025 Autonomous Business Operations",
          description: "Self-managing business systems",
          type: "Article",
          readTime: "18 min read",
          link: "/ai-2025-autonomous-business-operations"
        }
      ]
    },
    {
      id: 3,
      title: "Autonomous Systems",
      description: "Next-generation self-managing systems",
      icon: "🤖",
      color: "green",
      content: [
        {
          title: "Autonomous Systems 2026",
          description: "Revolutionary self-managing business operations",
          type: "Guide",
          readTime: "25 min read",
          link: "/autonomous-systems-2026"
        }
      ]
    },
    {
      id: 4,
      title: "Success Stories",
      description: "Real results from real clients",
      icon: "📈",
      color: "orange",
      content: [
        {
          title: "AI Automation Success Story: 500% ROI",
          description: "How a Fortune 500 company achieved massive returns",
          type: "Case Study",
          readTime: "12 min read",
          link: "/blog/ai-automation-success-story-2025"
        }
      ]
    },
    {
      id: 5,
      title: "Trends & Predictions",
      description: "Future insights and market predictions",
      icon: "🔮",
      color: "indigo",
      content: [
        {
          title: "AI Trends 2025-2030: Comprehensive Future Predictions",
          description: "Complete analysis of AI trends and predictions",
          type: "Report",
          readTime: "30 min read",
          link: "/blog/ai-trends-2025-2030-comprehensive-future-predictions"
        }
      ]
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "from-purple-500 to-purple-700 bg-purple-50 text-purple-600",
      blue: "from-blue-500 to-blue-700 bg-blue-50 text-blue-600",
      green: "from-green-500 to-green-700 bg-green-50 text-green-600",
      orange: "from-orange-500 to-orange-700 bg-orange-50 text-orange-600",
      indigo: "from-indigo-500 to-indigo-700 bg-indigo-50 text-indigo-600"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Content Library
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI and automation resources, guides, case studies, and insights to accelerate your business transformation.
          </p>
        </div>

        {/* Content Categories */}
        <div className="space-y-16">
          {contentCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className={`bg-gradient-to-r ${getColorClasses(category.color).split(' ')[0]} ${getColorClasses(category.color).split(' ')[1]} p-8`}>
                <div className="flex items-center">
                  <div className="text-5xl mr-6">{category.icon}</div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{category.title}</h2>
                    <p className="text-white opacity-90 text-lg">{category.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.content.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(category.color).split(' ')[2]} ${getColorClasses(category.color).split(' ')[3]}`}>
                          {item.type}
                        </span>
                        <span className="text-sm text-gray-500">{item.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      
                      <Link
                        href={item.link}
                        className={`inline-flex items-center text-sm font-semibold ${getColorClasses(category.color).split(' ')[3]} hover:underline`}
                      >
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Content */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Content</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3">Most Popular</h3>
              <p className="text-blue-200">
                AI 2025 Ultimate Business Transformation Guide
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-3">Highest Rated</h3>
              <p className="text-blue-200">
                AI Automation Success Story: 500% ROI
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🆕</div>
              <h3 className="text-xl font-bold mb-3">Latest Update</h3>
              <p className="text-blue-200">
                AI Trends 2025-2030 Predictions
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore our content, then let our experts help you implement the solutions that will drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors transform hover:scale-105"
            >
              Get Expert Consultation
            </Link>
            <Link
              href="/tools"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Use Our Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}