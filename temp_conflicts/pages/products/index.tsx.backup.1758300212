<<<<<<< HEAD
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ProductsPage: NextPage = () => {
  const products = [
    // AI & Automation Tools
    {
      category: "AI & Automation Tools",
      products: [
        {
          name: "ZionAI Analytics Platform",
          description: "Enterprise-grade AI-powered analytics platform for real-time business intelligence and predictive insights.",
          features: ["Real-time data processing", "AI-powered forecasting", "Custom dashboards", "API integration", "Multi-tenant support"],
          pricing: "$299/month",
          link: "https://ziontechgroup.com/products/ai-analytics",
          icon: "🤖",
          type: "SAAS Platform"
        },
        {
          name: "SmartBot Builder",
          description: "No-code chatbot development platform with advanced NLP capabilities and multi-channel deployment.",
          features: ["Visual bot builder", "Multi-language support", "Integration APIs", "Analytics dashboard", "Custom training"],
          pricing: "$99/month",
          link: "https://ziontechgroup.com/products/smartbot-builder",
          icon: "💬",
          type: "SAAS Tool"
        },
        {
          name: "AutoML Studio",
          description: "Automated machine learning platform for building and deploying ML models without coding expertise.",
          features: ["Drag-and-drop interface", "Auto-model selection", "One-click deployment", "Performance monitoring", "Model versioning"],
          pricing: "$199/month",
          link: "https://ziontechgroup.com/products/automl-studio",
          icon: "🧠",
          type: "SAAS Platform"
        }
      ]
    },
    // Cloud & Infrastructure Solutions
    {
      category: "Cloud & Infrastructure Solutions",
      products: [
        {
          name: "CloudCost Optimizer",
          description: "Intelligent cloud cost management and optimization platform for multi-cloud environments.",
          features: ["Cost tracking", "Resource optimization", "Budget alerts", "Multi-cloud support", "ROI analysis"],
          pricing: "$149/month",
          link: "https://ziontechgroup.com/products/cloudcost-optimizer",
          icon: "☁️",
          type: "SAAS Tool"
        },
        {
          name: "DevOps Pipeline Manager",
          description: "Comprehensive CI/CD pipeline management platform with automated testing and deployment.",
          features: ["Pipeline automation", "Git integration", "Testing automation", "Deployment tracking", "Performance metrics"],
          pricing: "$179/month",
          link: "https://ziontechgroup.com/products/devops-pipeline",
          icon: "🔄",
          type: "SAAS Platform"
        },
        {
          name: "InfraGuard Security",
          description: "Cloud infrastructure security monitoring and threat detection platform.",
          features: ["Real-time monitoring", "Threat detection", "Compliance reporting", "Security scoring", "Incident response"],
          pricing: "$249/month",
          link: "https://ziontechgroup.com/products/infraguard",
          icon: "🛡️",
          type: "SAAS Security"
        }
      ]
    },
    // Data & Analytics Products
    {
      category: "Data & Analytics Products",
      products: [
        {
          name: "DataFlow Pipeline",
          description: "Enterprise data pipeline orchestration platform for ETL processes and real-time streaming.",
          features: ["Visual pipeline builder", "Real-time processing", "Data quality checks", "Scalable architecture", "Monitoring dashboard"],
          pricing: "$399/month",
          link: "https://ziontechgroup.com/products/dataflow-pipeline",
          icon: "📊",
          type: "SAAS Platform"
        },
        {
          name: "InsightHub BI",
          description: "Business intelligence platform with interactive dashboards and advanced analytics capabilities.",
          features: ["Interactive dashboards", "Data visualization", "Report automation", "KPI tracking", "Mobile access"],
          pricing: "$199/month",
          link: "https://ziontechgroup.com/products/insighthub-bi",
          icon: "📈",
          type: "SAAS BI Tool"
        },
        {
          name: "DataVault Manager",
          description: "Secure data warehouse management platform with advanced security and compliance features.",
          features: ["Data encryption", "Access controls", "Audit logging", "Compliance reporting", "Backup automation"],
          pricing: "$299/month",
          link: "https://ziontechgroup.com/products/datavault-manager",
          icon: "🗄️",
          type: "SAAS Platform"
        }
      ]
    },
    // Web & Mobile Development Tools
    {
      category: "Web & Mobile Development Tools",
      products: [
        {
          name: "AppBuilder Pro",
          description: "Low-code mobile app development platform for creating native and cross-platform applications.",
          features: ["Visual app builder", "Cross-platform support", "Template library", "API integration", "App store deployment"],
          pricing: "$129/month",
          link: "https://ziontechgroup.com/products/appbuilder-pro",
          icon: "📱",
          type: "SAAS Development Tool"
        },
        {
          name: "WebFlow Accelerator",
          description: "Rapid web application development platform with pre-built components and templates.",
          features: ["Component library", "Template marketplace", "Drag-and-drop builder", "Responsive design", "SEO optimization"],
          pricing: "$89/month",
          link: "https://ziontechgroup.com/products/webflow-accelerator",
          icon: "🌐",
          type: "SAAS Development Tool"
        },
        {
          name: "API Gateway Pro",
          description: "Enterprise API management platform with security, monitoring, and developer portal features.",
          features: ["API security", "Rate limiting", "Analytics dashboard", "Developer portal", "Documentation tools"],
          pricing: "$159/month",
          link: "https://ziontechgroup.com/products/api-gateway",
          icon: "🔌",
          type: "SAAS Platform"
        }
      ]
    },
    // Security & Compliance Tools
    {
      category: "Security & Compliance Tools",
      products: [
        {
          name: "SecureScan Pro",
          description: "Automated security scanning and vulnerability assessment platform for applications and infrastructure.",
          features: ["Automated scanning", "Vulnerability database", "Compliance reporting", "Remediation guidance", "Integration APIs"],
          pricing: "$199/month",
          link: "https://ziontechgroup.com/products/securescan-pro",
          icon: "🔍",
          type: "SAAS Security Tool"
        },
        {
          name: "Compliance Manager",
          description: "Comprehensive compliance management platform for GDPR, SOC 2, HIPAA, and other standards.",
          features: ["Compliance tracking", "Audit preparation", "Policy management", "Risk assessment", "Reporting tools"],
          pricing: "$299/month",
          link: "https://ziontechgroup.com/products/compliance-manager",
          icon: "📋",
          type: "SAAS Compliance Tool"
        },
        {
          name: "IdentityGuard",
          description: "Advanced identity and access management platform with multi-factor authentication and SSO.",
          features: ["Multi-factor auth", "Single sign-on", "Role-based access", "Audit logging", "Integration APIs"],
          pricing: "$179/month",
          link: "https://ziontechgroup.com/products/identityguard",
          icon: "🔐",
          type: "SAAS Security Platform"
        }
      ]
    },
    // Blockchain & Emerging Tech
    {
      category: "Blockchain & Emerging Tech",
      products: [
        {
          name: "Blockchain Studio",
          description: "Comprehensive blockchain development platform for creating DApps and smart contracts.",
          features: ["Smart contract builder", "DApp templates", "Blockchain integration", "Testing tools", "Deployment automation"],
          pricing: "$399/month",
          link: "https://ziontechgroup.com/products/blockchain-studio",
          icon: "⛓️",
          type: "SAAS Development Platform"
        },
        {
          name: "IoT Platform Pro",
          description: "Enterprise IoT platform for managing connected devices and collecting sensor data.",
          features: ["Device management", "Data collection", "Real-time monitoring", "Analytics dashboard", "Alert system"],
          pricing: "$249/month",
          link: "https://ziontechgroup.com/products/iot-platform",
          icon: "🌐",
          type: "SAAS IoT Platform"
        },
        {
          name: "AR/VR Creator",
          description: "Platform for building immersive augmented and virtual reality experiences.",
          features: ["3D model library", "Interactive builder", "Multi-platform support", "Performance optimization", "Analytics tools"],
          pricing: "$299/month",
          link: "https://ziontechgroup.com/products/ar-vr-creator",
          icon: "🥽",
          type: "SAAS Development Tool"
        }
      ]
    },
    // Business & Productivity Tools
    {
      category: "Business & Productivity Tools",
      products: [
        {
          name: "ProjectFlow Manager",
          description: "Advanced project management platform with AI-powered insights and team collaboration features.",
          features: ["Task management", "Team collaboration", "AI insights", "Resource planning", "Progress tracking"],
          pricing: "$79/month",
          link: "https://ziontechgroup.com/products/projectflow-manager",
          icon: "📋",
          type: "SAAS Project Management"
        },
        {
          name: "Customer360 CRM",
          description: "Comprehensive customer relationship management platform with AI-powered analytics.",
          features: ["Contact management", "Sales tracking", "Marketing automation", "AI insights", "Integration APIs"],
          pricing: "$149/month",
          link: "https://ziontechgroup.com/products/customer360-crm",
          icon: "👥",
          type: "SAAS CRM Platform"
        },
        {
          name: "Workflow Automation Hub",
          description: "No-code workflow automation platform for business process optimization.",
          features: ["Visual workflow builder", "Integration connectors", "Automation templates", "Analytics dashboard", "Custom triggers"],
          pricing: "$119/month",
          link: "https://ziontechgroup.com/products/workflow-automation",
          icon: "⚙️",
          type: "SAAS Automation Tool"
        }
      ]
    }
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

  return (
    <>
      <Head>
        <title>Our Products - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's innovative technology products including AI platforms, cloud solutions, blockchain tools, and development kits designed for modern businesses." />
        <meta name="keywords" content="technology products, AI platform, cloud solutions, blockchain tools, data analytics, web development, mobile development" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Products</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Innovative technology solutions designed to transform your business operations and drive digital innovation
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`bg-gradient-to-r ${product.color} p-6 rounded-t-xl`}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-3xl font-bold">{product.title.charAt(0)}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                    <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-gray-900">{product.pricing}</div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link href="/contact" className={`flex-1 bg-gradient-to-r ${product.color} text-white px-4 py-3 rounded-lg font-medium text-center hover:opacity-90 transition-opacity`}>
                      Get Started
                    </Link>
                    <Link href="/contact" className="flex-1 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg font-medium text-center hover:bg-gray-50 transition-colors">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare our products to find the perfect solution for your business needs
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">ZionAI Platform</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">CloudSync Pro</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">DataViz Analytics</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Starting Price</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Custom</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">$2,500/month</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">$1,200/month</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">24/7 Support</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">✓</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">✓</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">API Access</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">✓</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">✓</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Customization</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Full</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">High</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Medium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seamless Integration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our products integrate with your existing technology stack and popular platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔌</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">REST APIs</h3>
              <p className="text-gray-600">Standard REST APIs for easy integration</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Cloud Native</h3>
              <p className="text-gray-600">Built for modern cloud environments</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security and compliance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Mobile Ready</h3>
              <p className="text-gray-600">Responsive design for all devices</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your requirements and get a customized solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Request Demo
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
>>>>>>> 3c1dda747d3aa200ea8a4e49d78b84af83a4d328
