
import Head from 'next/head';
import Link from 'next/link';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

const Blog = () => {
  const featuredPosts = [
    {
      title: &quot;The Future of AI in Enterprise: 2024 Trends and Predictions&quot;,
      excerpt: &quot;Discover how artificial intelligence is reshaping enterprise operations and what to expect in the coming year.&quot;,
      category: &quot;Artificial Intelligence&quot;,
      readTime: &quot;8 min read&quot;,
      date: &quot;January 15, 2024&quot;,
      image: &quot;🤖&quot;,
      href: &quot;/blog/ai-enterprise-trends-2024&quot;
    },
    {
      title: &quot;Cloud Migration Strategies: A Comprehensive Guide for Businesses&quot;,
      excerpt: &quot;Learn the best practices for migrating your infrastructure to the cloud while minimizing risks and maximizing benefits.&quot;,
      category: &quot;Cloud Computing&quot;,
      readTime: &quot;12 min read&quot;,
      date: &quot;January 10, 2024&quot;,
      image: &quot;☁️&quot;,
      href: &quot;/blog/cloud-migration-strategies-guide&quot;
    },
    {
      title: &quot;Blockchain Beyond Cryptocurrency: Real-World Business Applications&quot;,
      excerpt: &quot;Explore how blockchain technology is revolutionizing industries beyond finance, from supply chain to healthcare.&quot;,
      category: &quot;Blockchain&quot;,
      readTime: &quot;10 min read&quot;,
      date: &quot;January 5, 2024&quot;,
      image: &quot;🔗&quot;,
      href: &quot;/blog/blockchain-business-applications&quot;
    }
  ];

  const recentPosts = [
    {
      title: &quot;5G Technology and Its Impact on IoT Applications&quot;,
      excerpt: &quot;How the next generation of wireless technology is enabling new IoT possibilities.&quot;,
      category: &quot;IoT&quot;,
      readTime: &quot;6 min read&quot;,
      date: &quot;January 12, 2024&quot;,
      href: &quot;/blog/5g-technology-iot-impact&quot;
    },
    {
      title: &quot;Cybersecurity Trends for 2024 and Beyond&quot;,
      excerpt: &quot;Stay ahead of emerging threats with our analysis of cybersecurity trends.&quot;,
      category: &quot;Cybersecurity&quot;,
      readTime: &quot;7 min read&quot;,
      date: &quot;January 8, 2024&quot;,
      href: &quot;/blog/cybersecurity-trends-2024&quot;
    },
    {
      title: &quot;Data Analytics in Digital Transformation&quot;,
      excerpt: &quot;Leverage data analytics to drive successful digital transformation initiatives.&quot;,
      category: &quot;Data Analytics&quot;,
      readTime: &quot;9 min read&quot;,
      date: &quot;January 3, 2024&quot;,
      href: &quot;/blog/data-analytics-digital-transformation&quot;
    },
    {
      title: &quot;DevOps Automation Strategies for Modern Teams&quot;,
      excerpt: &quot;Streamline your development workflow with proven DevOps automation techniques.&quot;,
      category: &quot;DevOps&quot;,
      readTime: &quot;11 min read&quot;,
      date: &quot;December 28, 2023&quot;,
      href: &quot;/blog/devops-automation-strategies&quot;
    },
    {
      title: &quot;Machine Learning Applications in Enterprise Software&quot;,
      excerpt: &quot;Real-world examples of how ML is transforming enterprise applications.&quot;,
      category: &quot;Machine Learning&quot;,
      readTime: &quot;8 min read&quot;,
      date: &quot;December 25, 2023&quot;,
      href: &quot;/blog/machine-learning-enterprise-applications&quot;
    },
    {
      title: &quot;Microservices Architecture: Benefits and Challenges&quot;,
      excerpt: &quot;Understanding the trade-offs of microservices and when to adopt them.&quot;,
      category: &quot;Architecture&quot;,
      readTime: &quot;10 min read&quot;,
      date: &quot;December 20, 2023&quot;,
      href: &quot;/blog/microservices-architecture-benefits-challenges&quot;
    }
  ];

  const categories = [
    { name: &quot;Artificial Intelligence&quot;, count: 15, icon: &quot;🤖&quot; },
    { name: &quot;Cloud Computing&quot;, count: 12, icon: &quot;☁️&quot; },
    { name: &quot;Blockchain&quot;, count: 8, icon: &quot;🔗&quot; },
    { name: &quot;Cybersecurity&quot;, count: 10, icon: &quot;🛡️&quot; },
    { name: &quot;Data Analytics&quot;, count: 9, icon: &quot;📊&quot; },
    { name: &quot;DevOps&quot;, count: 7, icon: &quot;⚙️&quot; },
    { name: &quot;IoT&quot;, count: 6, icon: &quot;🌐&quot; },
    { name: &quot;Machine Learning&quot;, count: 11, icon: &quot;🧠&quot; }
  ];

  return (
    <EnhancedLayout>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Stay updated with the latest technology trends, insights, and best practices from Zion Tech Group. Expert analysis on AI, cloud computing, blockchain, and more.&quot; />
      </Head>
      
      <main className=&quot;container mx-auto px-4 py-16&quot;>
        {/* Hero Section */}
        <div className=&quot;text-center mb-16&quot;>
          <h1 className=&quot;text-4xl font-bold text-gray-900 mb-6&quot;>
            Zion Tech Group Blog
          </h1>
          <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;>
            Insights, trends, and expert analysis on the latest technology developments 
            that are shaping the future of business and innovation.
          </p>
        </div>

        {/* Featured Posts */}
        <div className=&quot;mb-16&quot;>
          <h2 className=&quot;text-2xl font-bold text-gray-900 mb-8&quot;>Featured Articles</h2>
          <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
            {featuredPosts.map((post, index) => (
              <article key={index} className=&quot;bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow&quot;>
                <div className=&quot;p-6&quot;>
                  <div className=&quot;text-4xl mb-4&quot;>{post.image}</div>
                  <div className=&quot;mb-3&quot;>
                    <span className=&quot;inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full&quot;>
                      {post.category}
                    </span>
                  </div>
                  <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3 line-clamp-2&quot;>
                    {post.title}
                  </h3>
                  <p className=&quot;text-gray-600 mb-4 line-clamp-3&quot;>{post.excerpt}</p>
                  <div className=&quot;flex items-center justify-between text-sm text-gray-500 mb-4&quot;>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link href={post.href} className=&quot;text-blue-600 hover:text-blue-700 font-medium&quot;>
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className=&quot;grid lg:grid-cols-4 gap-8&quot;>
          {/* Main Content */}
          <div className=&quot;lg:col-span-3&quot;>
            <h2 className=&quot;text-2xl font-bold text-gray-900 mb-8&quot;>Latest Articles</h2>
            <div className=&quot;space-y-6&quot;>
              {recentPosts.map((post, index) => (
                <article key={index} className=&quot;bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow&quot;>
                  <div className=&quot;flex items-start justify-between&quot;>
                    <div className=&quot;flex-1&quot;>
                      <div className=&quot;mb-2&quot;>
                        <span className=&quot;inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full&quot;>
                          {post.category}
                        </span>
                      </div>
                      <h3 className=&quot;text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600&quot;>
                        <Link href={post.href}>{post.title}</Link>
                      </h3>
                      <p className=&quot;text-gray-600 mb-3&quot;>{post.excerpt}</p>
                      <div className=&quot;flex items-center justify-between text-sm text-gray-500&quot;>
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Load More Button */}
            <div className=&quot;text-center mt-8&quot;>
              <button className=&quot;bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors&quot;>
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className=&quot;lg:col-span-1&quot;>
            {/* Categories */}
            <div className=&quot;bg-white rounded-lg shadow-md p-6 mb-6&quot;>
              <h3 className=&quot;text-lg font-semibold text-gray-900 mb-4&quot;>Categories</h3>
              <div className=&quot;space-y-3&quot;>
                {categories.map((category, index) => (
                  <Link 
                    key={index} 
                    href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className=&quot;flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors&quot;
                  >
                    <div className=&quot;flex items-center&quot;>
                      <span className=&quot;mr-2&quot;>{category.icon}</span>
                      <span className=&quot;text-gray-700&quot;>{category.name}</span>
                    </div>
                    <span className=&quot;text-gray-500 text-sm&quot;>{category.count}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className=&quot;bg-blue-900 text-white rounded-lg p-6&quot;>
              <h3 className=&quot;text-lg font-semibold mb-3&quot;>Stay Updated</h3>
              <p className=&quot;text-blue-100 mb-4 text-sm&quot;>
                Get the latest tech insights delivered to your inbox.
              </p>
              <div className=&quot;space-y-3&quot;>
                <input
                  type=&quot;email&quot;
                  placeholder=&quot;Enter your email&quot;
                  className=&quot;w-full px-3 py-2 rounded text-gray-900 text-sm&quot;
                />
                <button className=&quot;w-full bg-white text-blue-900 py-2 px-4 rounded font-medium hover:bg-gray-100 transition-colors&quot;>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className=&quot;bg-gray-900 text-white rounded-lg p-8 text-center mt-16&quot;>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Have a Story to Share?</h2>
          <p className=&quot;text-gray-300 mb-6&quot;>
            We're always looking for guest contributors and industry experts to share their insights.
          </p>
          <Link href=&quot;/contact&quot; className=&quot;bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors&quot;>
            Submit a Guest Post
          </Link>
        </div>
      </main>
    </EnhancedLayout>
  );
};

export default Blog;