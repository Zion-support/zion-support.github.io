import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const Blog: NextPage = () => {
  const blogPosts = [
    {
      title: "The AI Revolution 2024: How Artificial Intelligence is Transforming Business",
      excerpt: "Discover how AI is revolutionizing business operations in 2024. Learn about the latest AI trends, applications, and how companies are leveraging AI for competitive advantage.",
      category: "AI & Machine Learning",
      readTime: "15 min read",
      date: "2024-01-20",
      href: "/blog/ai-revolution-2024-chat"
    },
    {
      title: "Cloud Computing Trends 2024: The Future of Digital Infrastructure",
      excerpt: "Discover the latest cloud computing trends shaping 2024. Learn about multi-cloud strategies, edge computing, serverless architecture, and how businesses are leveraging cloud technology.",
      category: "Cloud Computing",
      readTime: "12 min read",
      date: "2024-01-18",
      href: "/blog/cloud-computing-trends-2024-chat"
    },
    {
      title: "AI-Powered Marketplaces: The Future of Digital Commerce",
      excerpt: "Explore how artificial intelligence is revolutionizing e-commerce platforms and creating more personalized shopping experiences.",
      category: "AI & Machine Learning",
      readTime: "8 min read",
      date: "2024-01-15",
      href: "/blog/ai-powered-marketplaces-the-future-of-digital-commerce-chat"
    },
    {
      title: "Cloud-Native Architecture: Best Practices for 2024",
      excerpt: "Learn the essential strategies for building scalable, resilient cloud-native applications that can grow with your business.",
      category: "Cloud Computing",
      readTime: "12 min read",
      date: "2024-01-12",
      href: "/blog/cloud-native-architecture-best-practices-chat"
    },
    {
      title: "Cybersecurity Trends for 2024 and Beyond",
      excerpt: "Stay ahead of emerging threats with our comprehensive guide to the latest cybersecurity trends and protection strategies.",
      category: "Cybersecurity",
      readTime: "10 min read",
      date: "2024-01-10",
      href: "/blog/cybersecurity-trends-for-2024-and-beyond-chat"
    },
    {
      title: "Blockchain Technology in Modern Business Solutions",
      excerpt: "Discover how blockchain is transforming industries beyond cryptocurrency, from supply chain to digital identity.",
      category: "Blockchain",
      readTime: "9 min read",
      date: "2024-01-08",
      href: "/blog/blockchain-technology-in-modern-business-solutions-chat"
    },
    {
      title: "Data Analytics in Digital Transformation",
      excerpt: "Unlock the power of your data with advanced analytics strategies that drive meaningful business insights.",
      category: "Data Analytics",
      readTime: "11 min read",
      date: "2024-01-05",
      href: "/blog/data-analytics-in-digital-transformation-chat"
    },
    {
      title: "DevOps Automation Strategies for Modern Teams",
      excerpt: "Streamline your development workflow with proven DevOps automation techniques that increase efficiency and reliability.",
      category: "DevOps",
      readTime: "7 min read",
      date: "2024-01-03",
      href: "/blog/devops-automation-strategies-for-modern-teams-chat"
    },
    {
      title: "Machine Learning Applications in Enterprise Software",
      excerpt: "See how leading companies are implementing ML to solve complex business problems and gain competitive advantages.",
      category: "AI & Machine Learning",
      readTime: "13 min read",
      date: "2024-01-01",
      href: "/blog/machine-learning-applications-in-enterprise-software-chat"
    },
    {
      title: "Microservices Architecture: Benefits and Challenges",
      excerpt: "Navigate the complexities of microservices with our comprehensive guide to architecture patterns and implementation strategies.",
      category: "Software Architecture",
      readTime: "15 min read",
      date: "2023-12-28",
      href: "/blog/microservices-architecture-benefits-and-challenges-chat"
    },
    {
      title: "5G Technology and Its Impact on IoT",
      excerpt: "Explore how 5G networks are enabling the next generation of IoT applications and smart city initiatives.",
      category: "IoT & Connectivity",
      readTime: "6 min read",
      date: "2023-12-25",
      href: "/blog/5g-technology-and-its-impact-on-iot-chat"
    },
    {
      title: "Quantum Computing: Implications for Business",
      excerpt: "Understand the potential impact of quantum computing on cryptography, optimization, and business strategy.",
      category: "Emerging Tech",
      readTime: "14 min read",
      date: "2023-12-22",
      href: "/blog/quantum-computing-implications-for-business-chat"
    },
    {
      title: "Digital Twins: Revolutionizing Industry 4.0",
      excerpt: "Learn how digital twin technology is transforming manufacturing, healthcare, and urban planning.",
      category: "Industry 4.0",
      readTime: "9 min read",
      date: "2023-12-20",
      href: "/blog/digital-twins-revolutionizing-industry-4-0-chat"
    },
    {
      title: "Sustainable Technology: Green Computing Solutions",
      excerpt: "Discover eco-friendly technology practices that reduce environmental impact while improving efficiency.",
      category: "Sustainability",
      readTime: "8 min read",
      date: "2023-12-18",
      href: "/blog/sustainable-technology-green-computing-solutions-chat"
    }
  ];

  const categories = ["All", "AI & Machine Learning", "Cloud Computing", "Cybersecurity", "Blockchain", "Data Analytics", "DevOps", "Software Architecture", "IoT & Connectivity", "Emerging Tech", "Industry 4.0", "Sustainability"];

  return (
    <Layout 
      title="Technology Blog - Zion Tech Solutions"
      description="Stay updated with the latest technology trends, insights, and best practices from our expert team at Zion Tech Solutions."
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <main className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Technology Insights & Trends
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay ahead of the curve with our expert insights on the latest technology trends, 
            best practices, and innovative solutions shaping the future of business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                category === "All" 
                  ? "bg-blue-600 text-white" 
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-12">
          <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold mb-4">
            <span>⭐</span>
            <span>FEATURED ARTICLE</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            {blogPosts[0].title}
          </h2>
          <p className="text-gray-200 text-lg mb-6">
            {blogPosts[0].excerpt}
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-300 mb-6">
            <span className="bg-blue-600 px-3 py-1 rounded-full">{blogPosts[0].category}</span>
            <span>{blogPosts[0].readTime}</span>
            <span>{blogPosts[0].date}</span>
          </div>
          <Link 
            href={blogPosts[0].href}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Read Full Article
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post, index) => (
            <article key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold mb-3">
                <span>{post.category}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-200 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-300 mb-4">
                <span>{post.readTime}</span>
                <span>{post.date}</span>
              </div>
              <Link 
                href={post.href}
                className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Get the latest technology insights delivered directly to your inbox. 
            Join our newsletter for exclusive content and early access to new articles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        </main>
      </div>
    </Layout>
  );
};

export default Blog;