import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";

export default function PostBySlug(): React.JSX.Element {
  const { slug } = useParams();

  const article = React.useMemo(() => {
    if (!slug) return undefined;
    
    // Mock data for demonstration
    const mockArticle = {
      slug: slug,
      title: "Sample Article Title",
      description: "This is a sample article description that provides an overview of the content.",
      category: "AI & Technology",
      publishedAt: "2025-01-01",
      readTime: "5 min read",
      author: "Zion Tech Group Team",
      content: `
        <h2>Introduction</h2>
        <p>This is a sample article content. In a real implementation, this would be loaded from a CMS or markdown files.</p>
        
        <h2>Main Content</h2>
        <p>Here you would have the main content of the article, including detailed information about the topic.</p>
        
        <h2>Conclusion</h2>
        <p>This would be the conclusion of the article, summarizing the key points and providing next steps.</p>
      `
    };
    
    return mockArticle;
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <a 
              href="/blog"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Back to Blog
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <div className="text-sm text-blue-600 font-semibold mb-2">
              {article.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {article.description}
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <span className="mr-4">By {article.author}</span>
              <span className="mr-4">{article.publishedAt}</span>
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  AI Revolution in Business
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how artificial intelligence is transforming modern business operations.
                </p>
                <a 
                  href="/blog/ai-revolution"
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Read More →
                </a>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Future of Technology
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore the latest trends and innovations shaping the future of technology.
                </p>
                <a 
                  href="/blog/future-technology"
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <a 
              href="/blog"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Back to Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}