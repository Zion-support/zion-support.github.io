import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ProductsIndex: NextPage = () => {
  const products = [
    {
      name: "AI-Powered Business Intelligence Suite",
      description: "Comprehensive AI-driven analytics platform that transforms raw data into actionable business insights.",
      features: [
        "Real-time data processing",
        "Predictive analytics",
        "Custom dashboard creation",
        "Automated reporting",
        "Machine learning models"
      ],
      pricing: "Starting at $2,999/month",
      category: "AI & Analytics",
      icon: "🤖",
      popular: true,
      href: "/products/ai-business-intelligence"
    },
    {
      name: "Cloud Infrastructure Management Platform",
      description: "Complete cloud management solution for AWS, Azure, and GCP with automated scaling and monitoring.",
      features: [
        "Multi-cloud support",
        "Auto-scaling capabilities",
        "Cost optimization",
        "Security monitoring",
        "24/7 support"
      ],
      pricing: "Starting at $1,499/month",
      category: "Cloud Services",
      icon: "☁️",
      popular: false,
      href: "/products/cloud-management"
    },
    {
      name: "Blockchain Supply Chain Tracker",
      description: "Transparent and secure supply chain management using blockchain technology for complete traceability.",
      features: [
        "End-to-end tracking",
        "Smart contracts",
        "Fraud prevention",
        "Real-time updates",
        "Compliance reporting"
      ],
      pricing: "Starting at $3,999/month",
      category: "Blockchain",
      icon: "🔗",
      popular: true,
      href: "/products/blockchain-supply-chain"
    },
    {
      name: "Mobile App Development Framework",
      description: "Cross-platform mobile development framework for iOS and Android with native performance.",
      features: [
        "Cross-platform compatibility",
        "Native performance",
        "Offline capabilities",
        "Push notifications",
        "App store optimization"
      ],
      pricing: "Starting at $4,999/project",
      category: "Mobile Development",
      icon: "📱",
      popular: false,
      href: "/products/mobile-framework"
    },
    {
      name: "Cybersecurity Monitoring System",
      description: "Advanced threat detection and response system with AI-powered security analytics.",
      features: [
        "Threat detection",
        "Incident response",
        "Compliance monitoring",
        "Security training",
        "Penetration testing"
      ],
      pricing: "Starting at $2,499/month",
      category: "Cybersecurity",
      icon: "🔒",
      popular: true,
      href: "/products/cybersecurity-monitoring"
    },
    {
      name: "IoT Device Management Platform",
      description: "Comprehensive IoT device management and monitoring platform for connected devices.",
      features: [
        "Device provisioning",
        "Remote monitoring",
        "Firmware updates",
        "Data analytics",
        "Edge computing"
      ],
      pricing: "Starting at $1,999/month",
      category: "IoT Solutions",
      icon: "🌐",
      popular: false,
      href: "/products/iot-management"
    },
    {
      name: "Digital Transformation Consulting",
      description: "End-to-end digital transformation services to modernize your business processes and technology stack.",
      features: [
        "Process optimization",
        "Technology assessment",
        "Change management",
        "Training programs",
        "Ongoing support"
      ],
      pricing: "Custom pricing",
      category: "Consulting",
      icon: "🚀",
      popular: false,
      href: "/products/digital-transformation"
    },
    {
      name: "API Gateway & Management",
      description: "Enterprise-grade API gateway with advanced security, monitoring, and rate limiting capabilities.",
      features: [
        "API security",
        "Rate limiting",
        "Analytics dashboard",
        "Developer portal",
        "Load balancing"
      ],
      pricing: "Starting at $999/month",
      category: "API Management",
      icon: "🔌",
      popular: false,
      href: "/products/api-gateway"
    }
  ];

  const categories = ["All", "AI & Analytics", "Cloud Services", "Blockchain", "Mobile Development", "Cybersecurity", "IoT Solutions", "Consulting", "API Management"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Our Products & Solutions - Zion Tech Solutions</title>
        <meta name="description" content="Discover our comprehensive suite of technology products and solutions. From AI-powered analytics to blockchain solutions, we provide cutting-edge technology products for modern businesses." />
        <meta name="keywords" content="technology products, AI solutions, cloud services, blockchain products, mobile apps, cybersecurity, IoT solutions, digital transformation" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Our Technology Products & Solutions
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Discover our comprehensive suite of cutting-edge technology products designed to transform your business. 
            From AI-powered analytics to blockchain solutions, we provide the tools you need to succeed in the digital age.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Request Demo
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Our Services
            </Link>
          </div>
        </div>

        {/* Popular Products */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Most Popular Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.filter(product => product.popular).map((product, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group border border-white/20 relative">
                {product.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Popular
                  </div>
                )}
                <div className="text-4xl mb-4">{product.icon}</div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-blue-300 font-semibold text-lg">{product.pricing}</span>
                  <Link 
                    href={product.href}
                    className="text-blue-300 hover:text-blue-200 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Products */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">All Products & Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group border border-white/20">
                <div className="text-4xl mb-4">{product.icon}</div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-blue-300 font-semibold text-lg">{product.pricing}</span>
                  <Link 
                    href={product.href}
                    className="text-blue-300 hover:text-blue-200 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Our Products */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Our Products?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Performance</h3>
              <p className="text-gray-300">Our products are battle-tested with 500+ successful implementations across various industries.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Easy Integration</h3>
              <p className="text-gray-300">Seamless integration with your existing systems and workflows with comprehensive documentation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with regular updates and compliance with industry standards.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo and discover how our products can accelerate your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Schedule Demo
            </Link>
            <Link href="/blog" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Read Case Studies
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductsIndex;