
import Head from 'next/head';
import Link from 'next/link';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

const _Blog = () => {_const _featuredPosts = [
    {
      title: "The Future of AI in Enterprise: 2024 Trends and Predictions", _excerpt: "Discover how artificial intelligence is reshaping enterprise operations and what to expect in the coming year.", _category: "Artificial Intelligence", _readTime: "8 min read", _date: "January 15, _2024", _image: "🤖", _href: "/blog/ai-enterprise-trends-2024"},
    {_title: "Cloud Migration Strategies: A Comprehensive Guide for Businesses", _excerpt: "Learn the best practices for migrating your infrastructure to the cloud while minimizing risks and maximizing benefits.", _category: "Cloud Computing", _readTime: "12 min read", _date: "January 10, _2024", _image: "☁️", _href: "/blog/cloud-migration-strategies-guide"},
    {_title: "Blockchain Beyond Cryptocurrency: Real-World Business Applications", _excerpt: "Explore how blockchain technology is revolutionizing industries beyond finance, _from supply chain to healthcare.", _category: "Blockchain", _readTime: "10 min read", _date: "January 5, _2024", _image: "🔗", _href: "/blog/blockchain-business-applications"}
  ];

  const _recentPosts = [
    {_title: "5G Technology and Its Impact on IoT Applications", _excerpt: "How the next generation of wireless technology is enabling new IoT possibilities.", _category: "IoT", _readTime: "6 min read", _date: "January 12, _2024", _href: "/blog/5g-technology-iot-impact"},
    {_title: "Cybersecurity Trends for 2024 and Beyond", _excerpt: "Stay ahead of emerging threats with our analysis of cybersecurity trends.", _category: "Cybersecurity", _readTime: "7 min read", _date: "January 8, _2024", _href: "/blog/cybersecurity-trends-2024"},
    {_title: "Data Analytics in Digital Transformation", _excerpt: "Leverage data analytics to drive successful digital transformation initiatives.", _category: "Data Analytics", _readTime: "9 min read", _date: "January 3, _2024", _href: "/blog/data-analytics-digital-transformation"},
    {_title: "DevOps Automation Strategies for Modern Teams", _excerpt: "Streamline your development workflow with proven DevOps automation techniques.", _category: "DevOps", _readTime: "11 min read", _date: "December 28, _2023", _href: "/blog/devops-automation-strategies"},
    {_title: "Machine Learning Applications in Enterprise Software", _excerpt: "Real-world examples of how ML is transforming enterprise applications.", _category: "Machine Learning", _readTime: "8 min read", _date: "December 25, _2023", _href: "/blog/machine-learning-enterprise-applications"},
    {_title: "Microservices Architecture: Benefits and Challenges", _excerpt: "Understanding the trade-offs of microservices and when to adopt them.", _category: "Architecture", _readTime: "10 min read", _date: "December 20, _2023", _href: "/blog/microservices-architecture-benefits-challenges"}
  ];

  const _categories = [
    {_name: "Artificial Intelligence", _count: 15, _icon: "🤖"},
    {_name: "Cloud Computing", _count: 12, _icon: "☁️"},
    {_name: "Blockchain", _count: 8, _icon: "🔗"},
    {_name: "Cybersecurity", _count: 10, _icon: "🛡️"},
    {_name: "Data Analytics", _count: 9, _icon: "📊"},
    {_name: "DevOps", _count: 7, _icon: "⚙️"},
    {_name: "IoT", _count: 6, _icon: "🌐"},
    {_name: "Machine Learning", _count: 11, _icon: "🧠"}
  ];

  return (_<EnhancedLayout>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest technology trends, _insights, _and best practices from Zion Tech Group. Expert analysis on AI, _cloud computing, _blockchain, _and more." />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {_/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Zion Tech Group Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, _trends, _and expert analysis on the latest technology developments 
            that are shaping the future of business and innovation.
          </p>
        </div>

        {_/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {_featuredPosts.map((post, _index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="text-4xl mb-4">{_post.image}</div>
                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {_post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {_post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{_post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{_post.date}</span>
                    <span>{_post.readTime}</span>
                  </div>
                  <Link href={_post.href} className="text-blue-600 hover:text-blue-700 font-medium">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {_/* Main Content */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            <div className="space-y-6">
              {_recentPosts.map(_(post, _index) => (
                <article key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                          {_post.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600">
                        <Link href={_post.href}>{_post.title}</Link>
                      </h3>
                      <p className="text-gray-600 mb-3">{_post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{_post.date}</span>
                        <span>{_post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {_/* Load More Button */}
            <div className="text-center mt-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Load More Articles
              </button>
            </div>
          </div>

          {_/* Sidebar */}
          <div className="lg:col-span-1">
            {_/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-3">
                {_categories.map(_(category, _index) => (
                  <Link 
                    key={index} 
                    href={_`/blog/category/${category.name.toLowerCase().replace(/\s+/g, _'-')}`}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="mr-2">{_category.icon}</span>
                      <span className="text-gray-700">{_category.name}</span>
                    </div>
                    <span className="text-gray-500 text-sm">{_category.count}</span>
                  </Link>
                ))}
              </div>
            </div>

            {_/* Newsletter Signup */}
            <div className="bg-blue-900 text-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Get the latest tech insights delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded text-gray-900 text-sm"
                />
                <button className="w-full bg-white text-blue-900 py-2 px-4 rounded font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {_/* CTA Section */}
        <div className="bg-gray-900 text-white rounded-lg p-8 text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Have a Story to Share?</h2>
          <p className="text-gray-300 mb-6">
            We're always looking for guest contributors and industry experts to share their insights.
          </p>
          <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Submit a Guest Post
          </Link>
        </div>
      </main>
    </EnhancedLayout>
  );
};

export default Blog;