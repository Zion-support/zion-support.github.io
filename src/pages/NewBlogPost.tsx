import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark, Heart, MessageCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

const NewBlogPost: React.FC = () => {
  const post = {
    title: "The Future of AI in Business: Revolutionary Trends for 2025",
    excerpt: "Discover how artificial intelligence is transforming business operations and creating new opportunities for growth and innovation.",
    content: `
      <p>The landscape of business technology is evolving at an unprecedented pace, and artificial intelligence stands at the forefront of this transformation. As we move into 2025, AI technologies are no longer just experimental tools—they're becoming essential components of successful business strategies.</p>
      
      <h2>The Current State of AI in Business</h2>
      <p>Today's businesses are leveraging AI in ways that were unimaginable just a few years ago. From predictive analytics to automated customer service, AI is reshaping how companies operate, compete, and grow.</p>
      
      <h3>Key Areas of Impact</h3>
      <ul>
        <li><strong>Customer Experience:</strong> AI-powered chatbots and personalization engines are creating more engaging customer interactions.</li>
        <li><strong>Operational Efficiency:</strong> Machine learning algorithms are optimizing supply chains, reducing costs, and improving productivity.</li>
        <li><strong>Decision Making:</strong> Advanced analytics are providing deeper insights and enabling data-driven strategies.</li>
        <li><strong>Innovation:</strong> AI is accelerating research and development across industries.</li>
      </ul>
      
      <h2>Emerging Trends for 2025</h2>
      <p>Several key trends are shaping the future of AI in business:</p>
      
      <h3>1. Conversational AI Evolution</h3>
      <p>Natural language processing is becoming more sophisticated, enabling more human-like interactions with AI systems. This is particularly evident in customer service, where AI can now handle complex queries with greater accuracy.</p>
      
      <h3>2. AI-Powered Automation</h3>
      <p>Businesses are increasingly adopting AI to automate repetitive tasks, allowing human employees to focus on more strategic and creative work. This includes everything from document processing to inventory management.</p>
      
      <h3>3. Predictive Analytics</h3>
      <p>AI systems are becoming better at predicting future trends, customer behavior, and market conditions. This enables businesses to make more informed decisions and stay ahead of the competition.</p>
      
      <h2>Implementation Strategies</h2>
      <p>For businesses looking to adopt AI technologies, here are some key strategies to consider:</p>
      
      <h3>Start Small, Scale Gradually</h3>
      <p>Begin with pilot projects in specific departments or use cases. This allows you to learn and adapt before making larger investments.</p>
      
      <h3>Invest in Data Quality</h3>
      <p>AI systems are only as good as the data they're trained on. Ensure you have clean, organized, and comprehensive data sets.</p>
      
      <h3>Focus on Employee Training</h3>
      <p>Your team needs to understand how to work with AI tools effectively. Invest in training and change management programs.</p>
      
      <h2>Challenges and Considerations</h2>
      <p>While AI offers tremendous opportunities, businesses must also consider potential challenges:</p>
      
      <ul>
        <li><strong>Data Privacy:</strong> Ensuring compliance with regulations like GDPR and CCPA</li>
        <li><strong>Ethical AI:</strong> Implementing AI systems that are fair, transparent, and unbiased</li>
        <li><strong>Integration:</strong> Seamlessly incorporating AI into existing workflows</li>
        <li><strong>Cost:</strong> Managing the investment required for AI implementation</li>
      </ul>
      
      <h2>Looking Ahead</h2>
      <p>The future of AI in business is bright, with new technologies and applications emerging regularly. Companies that embrace AI now will be better positioned to compete and thrive in the digital economy.</p>
      
      <p>At Zion Tech Group, we're committed to helping businesses navigate this AI revolution. Our team of experts can help you identify opportunities, implement solutions, and maximize the value of AI in your organization.</p>
    `,
    author: {
      name: "Dr. Sarah Chen",
      title: "Chief AI Officer",
      avatar: "/api/placeholder/80/80",
      bio: "Dr. Chen leads our AI research initiatives and has over 15 years of experience in machine learning and artificial intelligence."
    },
    publishDate: "2025-01-15",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    tags: ["AI", "Business", "Innovation", "Technology", "Future"],
    likes: 142,
    shares: 28,
    comments: 15
  };

  const relatedPosts = [
    {
      title: "Cybersecurity Trends for 2025",
      excerpt: "Essential security measures for the modern digital landscape",
      image: "/api/placeholder/300/200",
      link: "/blog/cybersecurity-trends-2025",
      readTime: "6 min read"
    },
    {
      title: "Blockchain in Supply Chain Management",
      excerpt: "How blockchain is revolutionizing supply chain transparency",
      image: "/api/placeholder/300/200",
      link: "/blog/blockchain-supply-chain",
      readTime: "10 min read"
    },
    {
      title: "Cloud Migration Best Practices",
      excerpt: "A comprehensive guide to successful cloud migration",
      image: "/api/placeholder/300/200",
      link: "/blog/cloud-migration-guide",
      readTime: "12 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        ogType="article"
      />
      
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              {/* Header */}
              <div className="p-8 border-b">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.publishDate}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h1>
                
                <p className="text-lg text-gray-600 mb-6">
                  {post.excerpt}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                {/* Social Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span>{post.shares}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span>{post.comments}</span>
                    </button>
                  </div>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                    <Bookmark className="w-5 h-5" />
                    <span>Save</span>
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
              
              {/* Author */}
              <div className="p-8 border-t bg-gray-50">
                <div className="flex items-start space-x-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {post.author.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {post.author.title}
                    </p>
                    <p className="text-gray-600">
                      {post.author.bio}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Share */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Share This Post
                </h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <Bookmark className="w-4 h-4" />
                    <span>Bookmark</span>
                  </button>
                </div>
              </div>
              
              {/* Related Posts */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Related Posts
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost, index) => (
                    <Link
                      key={index}
                      to={relatedPost.link}
                      className="block group"
                    >
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {relatedPost.excerpt}
                      </p>
                      <p className="text-xs text-gray-500">
                        {relatedPost.readTime}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBlogPost;