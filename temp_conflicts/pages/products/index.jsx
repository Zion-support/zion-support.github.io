
import Head from 'next/head';
import Link from 'next/link';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

const Products = () => {
  const products = [
    {
      title: &quot;ZionAI Platform&quot;,
      description: &quot;Enterprise-grade AI platform for building, deploying, and managing machine learning models at scale.&quot;,
      category: &quot;Artificial Intelligence&quot;,
      features: [&quot;AutoML Capabilities&quot;, &quot;Model Versioning&quot;, &quot;Real-time Inference&quot;, &quot;Advanced Analytics&quot;],
      pricing: &quot;Custom Pricing&quot;,
      image: &quot;🤖&quot;,
      href: &quot;/products/zion-ai-platform&quot;
    },
    {
      title: &quot;CloudSync Pro&quot;,
      description: &quot;Comprehensive cloud migration and management platform for enterprise infrastructure.&quot;,
      category: &quot;Cloud Solutions&quot;,
      features: [&quot;Multi-cloud Support&quot;, &quot;Cost Optimization&quot;, &quot;Security Compliance&quot;, &quot;Automated Scaling&quot;],
      pricing: &quot;Starting at $2,999/month&quot;,
      image: &quot;☁️&quot;,
      href: &quot;/products/cloudsync-pro&quot;
    },
    {
      title: &quot;BlockChain Suite&quot;,
      description: &quot;Complete blockchain development and deployment platform for enterprise applications.&quot;,
      category: &quot;Blockchain&quot;,
      features: [&quot;Smart Contract Templates&quot;, &quot;DeFi Tools&quot;, &quot;Supply Chain Integration&quot;, &quot;Digital Identity&quot;],
      pricing: &quot;Starting at $1,999/month&quot;,
      image: &quot;🔗&quot;,
      href: &quot;/products/blockchain-suite&quot;
    },
    {
      title: &quot;DataViz Analytics&quot;,
      description: &quot;Advanced data visualization and business intelligence platform for data-driven decision making.&quot;,
      category: &quot;Data Analytics&quot;,
      features: [&quot;Interactive Dashboards&quot;, &quot;Real-time Data&quot;, &quot;Predictive Modeling&quot;, &quot;Custom Reports&quot;],
      pricing: &quot;Starting at $999/month&quot;,
      image: &quot;📊&quot;,
      href: &quot;/products/dataviz-analytics&quot;
    },
    {
      title: &quot;DevOps Hub&quot;,
      description: &quot;Integrated development and operations platform for continuous integration and deployment.&quot;,
      category: &quot;DevOps&quot;,
      features: [&quot;CI/CD Pipelines&quot;, &quot;Container Management&quot;, &quot;Monitoring & Alerting&quot;, &quot;Security Scanning&quot;],
      pricing: &quot;Starting at $799/month&quot;,
      image: &quot;⚙️&quot;,
      href: &quot;/products/devops-hub&quot;
    },
    {
      title: &quot;SecureNet Gateway&quot;,
      description: &quot;Next-generation cybersecurity platform with advanced threat detection and prevention.&quot;,
      category: &quot;Cybersecurity&quot;,
      features: [&quot;Threat Intelligence&quot;, &quot;Zero Trust Architecture&quot;, &quot;Compliance Reporting&quot;, &quot;24/7 Monitoring&quot;],
      pricing: &quot;Starting at $1,499/month&quot;,
      image: &quot;🛡️&quot;,
      href: &quot;/products/securenet-gateway&quot;
    }
  ];

  const categories = [&quot;All&quot;, &quot;Artificial Intelligence&quot;, &quot;Cloud Solutions&quot;, &quot;Blockchain&quot;, &quot;Data Analytics&quot;, &quot;DevOps&quot;, &quot;Cybersecurity&quot;];

  return (
    <EnhancedLayout>
      <Head>
        <title>Our Products - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Explore Zion Tech Group's innovative technology products including AI platforms, cloud solutions, blockchain tools, and more. Transform your business with our cutting-edge products.&quot; />
      </Head>
      
      <main className=&quot;container mx-auto px-4 py-16&quot;>
        {/* Hero Section */}
        <div className=&quot;text-center mb-16&quot;>
          <h1 className=&quot;text-4xl font-bold text-gray-900 mb-6&quot;>
            Our Technology Products
          </h1>
          <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;>
            Discover our suite of innovative technology products designed to accelerate 
            your digital transformation and drive business growth.
          </p>
        </div>

        {/* Category Filter */}
        <div className=&quot;flex flex-wrap justify-center gap-4 mb-12&quot;>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                category === &quot;All&quot; 
                  ? &quot;bg-blue-600 text-white&quot; 
                  : &quot;bg-white text-gray-700 hover:bg-blue-50 border border-gray-200&quot;
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16&quot;>
          {products.map((product, index) => (
            <div key={index} className=&quot;bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow&quot;>
              <div className=&quot;p-6&quot;>
                <div className=&quot;text-4xl mb-4&quot;>{product.image}</div>
                <div className=&quot;mb-2&quot;>
                  <span className=&quot;inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full&quot;>
                    {product.category}
                  </span>
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>{product.title}</h3>
                <p className=&quot;text-gray-600 mb-4&quot;>{product.description}</p>
                
                <div className=&quot;mb-4&quot;>
                  <h4 className=&quot;font-medium text-gray-900 mb-2&quot;>Key Features:</h4>
                  <ul className=&quot;text-sm text-gray-600 space-y-1&quot;>
                    {product.features.map((feature, idx) => (
                      <li key={idx} className=&quot;flex items-center&quot;>
                        <span className=&quot;text-green-500 mr-2&quot;>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className=&quot;mb-4&quot;>
                  <span className=&quot;text-lg font-semibold text-blue-600&quot;>{product.pricing}</span>
                </div>
                
                <Link href={product.href} className=&quot;block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors&quot;>
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Solutions */}
        <div className=&quot;bg-white rounded-lg shadow-lg p-8 mb-16&quot;>
          <div className=&quot;text-center mb-8&quot;>
            <h2 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>Enterprise Solutions</h2>
            <p className=&quot;text-xl text-gray-600&quot;>
              Custom-built solutions tailored to your specific business needs
            </p>
          </div>
          
          <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-4xl mb-4&quot;>🏢</div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Custom Development</h3>
              <p className=&quot;text-gray-600&quot;>
                Tailored solutions built specifically for your business requirements
              </p>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-4xl mb-4&quot;>🔧</div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Integration Services</h3>
              <p className=&quot;text-gray-600&quot;>
                Seamless integration with your existing systems and workflows
              </p>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-4xl mb-4&quot;>📚</div>
              <h3 className=&quot;text-lg font-semibold mb-2&quot;>Training & Support</h3>
              <p className=&quot;text-gray-600&quot;>
                Comprehensive training and ongoing support for your team
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className=&quot;bg-blue-900 text-white rounded-lg p-8 text-center&quot;>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Ready to Get Started?</h2>
          <p className=&quot;text-blue-100 mb-6&quot;>
            Schedule a demo or consultation to see how our products can transform your business.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
            <Link href=&quot;/contact&quot; className=&quot;bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors&quot;>
              Request Demo
            </Link>
            <Link href=&quot;/contact&quot; className=&quot;bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors&quot;>
              Contact Sales
            </Link>
          </div>
        </div>
      </main>
    </EnhancedLayout>
  );
};

export default Products;