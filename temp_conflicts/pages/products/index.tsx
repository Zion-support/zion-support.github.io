  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <Head>
        <title>Our Products - Zion Tech Group | Innovative Micro SAAS Solutions</title>
        <meta name="description" content="Discover our comprehensive portfolio of micro SAAS products, IT solutions, and AI tools. From AI analytics to blockchain development, we offer cutting-edge technology products." />
        <meta name="keywords" content="micro SAAS, AI tools, cloud solutions, development platforms, security tools, blockchain, IoT, business software" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Product Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Explore our innovative micro SAAS products, cutting-edge IT solutions, and powerful AI tools. 
            Each product is designed to solve real business challenges and drive digital transformation.
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-16">
          {products.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product, productIndex) => (
                  <div key={productIndex} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-green-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{product.icon}</div>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {product.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {product.pricing}
                      </span>
                    </div>
                    <Link 
                      href={product.link}
                      className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Solutions Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 mt-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Enterprise Solutions
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Need custom enterprise solutions? We offer tailored implementations, white-label options, and dedicated support for large organizations.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="font-semibold mb-2">🏢 Custom Implementation</h3>
              <p>Tailored solutions for your specific business needs</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🏷️ White Label</h3>
              <p>Rebrand our products as your own</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">👥 Dedicated Support</h3>
              <p>24/7 dedicated support and account management</p>
            </div>
          </div>
          <Link 
            href="/contact"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Sales Team
          </Link>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Start your free trial today or schedule a demo with our product experts. 
            Transform your business with our innovative technology solutions.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Link 
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold mb-2">📱 Mobile</h3>
              <p>+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">✉️ Email</h3>
              <p>kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🌐 Website</h3>
              <p>https://ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
=======
import React from 'react';

export default function ProductsIndexPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold">Products</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Browse Zion products.</p>
    </div>
  );
}
