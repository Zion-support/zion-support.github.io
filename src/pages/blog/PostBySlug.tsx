import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Clock, Calendar, User, ArrowLeft } from "lucide-react";
import Header from "../../components/Header";

// Mock data - in a real app, this would come from an API or CMS
const latestArticles = [
  {
    slug: "ai-2025-enterprise-automation",
    title: "AI-Powered Enterprise Automation in 2025",
    description: "Discover how AI automation is transforming enterprise operations",
    excerpt: "The future of enterprise automation is here...",
    category: "AI & Automation",
    date: "2025-01-15",
    readTime: "8 min read",
    author: "Zion Tech Group Team"
  }
];

const blogPosts = [
  {
    slug: "digital-transformation-guide",
    title: "Complete Guide to Digital Transformation",
    description: "A comprehensive guide to digital transformation strategies",
    category: "Digital Transformation",
    publishedAt: "2025-01-05",
    readTime: "15 min read"
  }
];

const PostBySlug: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the post by slug
  const post = [...latestArticles, ...blogPosts].find(p => p.slug === slug);
  
  if (!post) {
    return (
      <>
        <Helmet>
          <title>Post Not Found - Zion Tech Group</title>
        </Helmet>
        <Header />
        <div className="min-h-screen bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The requested blog post could not be found.</p>
            <a 
              href="/blog" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Back to Blog
            </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Zion Tech Group</title>
        <meta name="description" content={post.description} />
      </Helmet>
      
      <Header />
      
      <div className="min-h-screen bg-gray-50">
        <article className="container mx-auto px-4 py-12">
          {/* Back Button */}
          <div className="mb-8">
            <a 
              href="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </a>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>{post.author || 'Zion Tech Group Team'}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(post.date || post.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {post.excerpt || post.description}
                </p>
                
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                  <p className="text-gray-700 leading-relaxed">
                    This comprehensive guide explores the latest developments in {post.category.toLowerCase()} 
                    and provides actionable insights for enterprise implementation.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-gray-900">Key Benefits</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Improved operational efficiency</li>
                    <li>Enhanced customer experience</li>
                    <li>Reduced operational costs</li>
                    <li>Scalable implementation strategies</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold text-gray-900">Implementation Strategy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our proven methodology ensures successful deployment with minimal disruption to your existing operations.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-gray-900">Conclusion</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Ready to transform your business with cutting-edge technology? Contact our experts for personalized consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <section className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg mb-6 opacity-90">
                Transform your business with our expert guidance and cutting-edge solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Expert Consultation
                </a>
                <a 
                  href="/services" 
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Our Services
                </a>
              </div>
            </div>
          </section>
        </article>
      </div>
    </>
  );
};

export default PostBySlug;