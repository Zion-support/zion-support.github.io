import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";

export default function PostBySlug(): React.JSX.Element {
  const { slug } = useParams();

  const article = React.useMemo(() => {
    if (!slug) return undefined;
    
    // Mock article data - replace with actual data fetching logic
    const mockArticle = {
      slug: slug,
      title: "Sample Article Title",
      description: "This is a sample article description that provides an overview of the content.",
      category: "Technology",
      publishedAt: "2024-01-01",
      readTime: "5 min read",
      author: "Zion Tech Group Team",
      content: `
        <h2>Introduction</h2>
        <p>This is a sample article content. In a real implementation, this would be fetched from a CMS or API.</p>
        
        <h2>Main Content</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
        <h2>Conclusion</h2>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      `
    };
    
    return mockArticle;
  }, [slug]);

  if (!article) {
    return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-xl text-gray-600">The article you're looking for doesn't exist.</p>'
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
            <div className="text-sm text-blue-600 font-semibold mb-2">{article.category}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{article.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{article.description}</p>
            
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <span>By {article.author}</span>
              <span className="mx-2">•</span>
              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
              <span className="mx-2">•</span>
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

          {/* Article Footer */}
          <div className="mt-8 text-center">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enjoyed this article?</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with our latest insights and technology solutions.
              </p>
              <a 
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
    </>
  </div>