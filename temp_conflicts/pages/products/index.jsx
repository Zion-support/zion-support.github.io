
import Head from 'next/head';
import Link from 'next/link';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

const _Products = () => {_const _products = [
    {
      title: "ZionAI Platform", _description: "Enterprise-grade AI platform for building, _deploying, _and managing machine learning models at scale.", _category: "Artificial Intelligence", _features: ["AutoML Capabilities", _"Model Versioning", _"Real-time Inference", _"Advanced Analytics"], _pricing: "Custom Pricing", _image: "🤖", _href: "/products/zion-ai-platform"},
    {_title: "CloudSync Pro", _description: "Comprehensive cloud migration and management platform for enterprise infrastructure.", _category: "Cloud Solutions", _features: ["Multi-cloud Support", _"Cost Optimization", _"Security Compliance", _"Automated Scaling"], _pricing: "Starting at $2, _999/month", _image: "☁️", _href: "/products/cloudsync-pro"},
    {_title: "BlockChain Suite", _description: "Complete blockchain development and deployment platform for enterprise applications.", _category: "Blockchain", _features: ["Smart Contract Templates", _"DeFi Tools", _"Supply Chain Integration", _"Digital Identity"], _pricing: "Starting at $1, _999/month", _image: "🔗", _href: "/products/blockchain-suite"},
    {_title: "DataViz Analytics", _description: "Advanced data visualization and business intelligence platform for data-driven decision making.", _category: "Data Analytics", _features: ["Interactive Dashboards", _"Real-time Data", _"Predictive Modeling", _"Custom Reports"], _pricing: "Starting at $999/month", _image: "📊", _href: "/products/dataviz-analytics"},
    {_title: "DevOps Hub", _description: "Integrated development and operations platform for continuous integration and deployment.", _category: "DevOps", _features: ["CI/CD Pipelines", _"Container Management", _"Monitoring & Alerting", _"Security Scanning"], _pricing: "Starting at $799/month", _image: "⚙️", _href: "/products/devops-hub"},
    {_title: "SecureNet Gateway", _description: "Next-generation cybersecurity platform with advanced threat detection and prevention.", _category: "Cybersecurity", _features: ["Threat Intelligence", _"Zero Trust Architecture", _"Compliance Reporting", _"24/7 Monitoring"], _pricing: "Starting at $1, _499/month", _image: "🛡️", _href: "/products/securenet-gateway"}
  ];

  const _categories = ["All", "Artificial Intelligence", "Cloud Solutions", "Blockchain", "Data Analytics", "DevOps", "Cybersecurity"];

  return (_<EnhancedLayout>
      <Head>
        <title>Our Products - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's innovative technology products including AI platforms, _cloud solutions, _blockchain tools, _and more. Transform your business with our cutting-edge products." />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {_/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Our Technology Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our suite of innovative technology products designed to accelerate 
            your digital transformation and drive business growth.
          </p>
        </div>

        {_/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {_categories.map((category, _index) => (
            <button
              key={index}
              className={_`px-6 py-2 rounded-full font-medium transition-colors ${
                category === "All" 
                  ? "bg-blue-600 text-white" 
                  : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"}`}
            >
              {_category}
            </button>
          ))}
        </div>
        
        {_/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {_products.map(_(product, _index) => (_<div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="text-4xl mb-4">{_product.image}</div>
                <div className="mb-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {_product.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{_product.title}</h3>
                <p className="text-gray-600 mb-4">{_product.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {_product.features.map((feature, _idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {_feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <span className="text-lg font-semibold text-blue-600">{_product.pricing}</span>
                </div>
                
                <Link href={_product.href} className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {_/* Enterprise Solutions */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Solutions</h2>
            <p className="text-xl text-gray-600">
              Custom-built solutions tailored to your specific business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold mb-2">Custom Development</h3>
              <p className="text-gray-600">
                Tailored solutions built specifically for your business requirements
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-lg font-semibold mb-2">Integration Services</h3>
              <p className="text-gray-600">
                Seamless integration with your existing systems and workflows
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-semibold mb-2">Training & Support</h3>
              <p className="text-gray-600">
                Comprehensive training and ongoing support for your team
              </p>
            </div>
          </div>
        </div>

        {_/* CTA Section */}
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-6">
            Schedule a demo or consultation to see how our products can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Demo
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </main>
    </EnhancedLayout>
  );
};

export default Products;