import type {_NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ProductsPage: NextPage = () => {_const _products = [
    // AI & Automation Tools
    {
      category: "AI & Automation Tools", _products: [
        {
          name: "ZionAI Analytics Platform", _description: "Enterprise-grade AI-powered analytics platform for real-time business intelligence and predictive insights.", _features: ["Real-time data processing", _"AI-powered forecasting", _"Custom dashboards", _"API integration", _"Multi-tenant support"], _pricing: "$299/month", _link: "https://ziontechgroup.com/products/ai-analytics", _icon: "🤖", _type: "SAAS Platform"},
        {_name: "SmartBot Builder", _description: "No-code chatbot development platform with advanced NLP capabilities and multi-channel deployment.", _features: ["Visual bot builder", _"Multi-language support", _"Integration APIs", _"Analytics dashboard", _"Custom training"], _pricing: "$99/month", _link: "https://ziontechgroup.com/products/smartbot-builder", _icon: "💬", _type: "SAAS Tool"},
        {_name: "AutoML Studio", _description: "Automated machine learning platform for building and deploying ML models without coding expertise.", _features: ["Drag-and-drop interface", _"Auto-model selection", _"One-click deployment", _"Performance monitoring", _"Model versioning"], _pricing: "$199/month", _link: "https://ziontechgroup.com/products/automl-studio", _icon: "🧠", _type: "SAAS Platform"}
      ]
    },
    // Cloud & Infrastructure Solutions
    {_category: "Cloud & Infrastructure Solutions", _products: [
        {
          name: "CloudCost Optimizer", _description: "Intelligent cloud cost management and optimization platform for multi-cloud environments.", _features: ["Cost tracking", _"Resource optimization", _"Budget alerts", _"Multi-cloud support", _"ROI analysis"], _pricing: "$149/month", _link: "https://ziontechgroup.com/products/cloudcost-optimizer", _icon: "☁️", _type: "SAAS Tool"},
        {_name: "DevOps Pipeline Manager", _description: "Comprehensive CI/CD pipeline management platform with automated testing and deployment.", _features: ["Pipeline automation", _"Git integration", _"Testing automation", _"Deployment tracking", _"Performance metrics"], _pricing: "$179/month", _link: "https://ziontechgroup.com/products/devops-pipeline", _icon: "🔄", _type: "SAAS Platform"},
        {_name: "InfraGuard Security", _description: "Cloud infrastructure security monitoring and threat detection platform.", _features: ["Real-time monitoring", _"Threat detection", _"Compliance reporting", _"Security scoring", _"Incident response"], _pricing: "$249/month", _link: "https://ziontechgroup.com/products/infraguard", _icon: "🛡️", _type: "SAAS Security"}
      ]
    },
    // Data & Analytics Products
    {_category: "Data & Analytics Products", _products: [
        {
          name: "DataFlow Pipeline", _description: "Enterprise data pipeline orchestration platform for ETL processes and real-time streaming.", _features: ["Visual pipeline builder", _"Real-time processing", _"Data quality checks", _"Scalable architecture", _"Monitoring dashboard"], _pricing: "$399/month", _link: "https://ziontechgroup.com/products/dataflow-pipeline", _icon: "📊", _type: "SAAS Platform"},
        {_name: "InsightHub BI", _description: "Business intelligence platform with interactive dashboards and advanced analytics capabilities.", _features: ["Interactive dashboards", _"Data visualization", _"Report automation", _"KPI tracking", _"Mobile access"], _pricing: "$199/month", _link: "https://ziontechgroup.com/products/insighthub-bi", _icon: "📈", _type: "SAAS BI Tool"},
        {_name: "DataVault Manager", _description: "Secure data warehouse management platform with advanced security and compliance features.", _features: ["Data encryption", _"Access controls", _"Audit logging", _"Compliance reporting", _"Backup automation"], _pricing: "$299/month", _link: "https://ziontechgroup.com/products/datavault-manager", _icon: "🗄️", _type: "SAAS Platform"}
      ]
    },
    // Web & Mobile Development Tools
    {_category: "Web & Mobile Development Tools", _products: [
        {
          name: "AppBuilder Pro", _description: "Low-code mobile app development platform for creating native and cross-platform applications.", _features: ["Visual app builder", _"Cross-platform support", _"Template library", _"API integration", _"App store deployment"], _pricing: "$129/month", _link: "https://ziontechgroup.com/products/appbuilder-pro", _icon: "📱", _type: "SAAS Development Tool"},
        {_name: "WebFlow Accelerator", _description: "Rapid web application development platform with pre-built components and templates.", _features: ["Component library", _"Template marketplace", _"Drag-and-drop builder", _"Responsive design", _"SEO optimization"], _pricing: "$89/month", _link: "https://ziontechgroup.com/products/webflow-accelerator", _icon: "🌐", _type: "SAAS Development Tool"},
        {_name: "API Gateway Pro", _description: "Enterprise API management platform with security, _monitoring, _and developer portal features.", _features: ["API security", _"Rate limiting", _"Analytics dashboard", _"Developer portal", _"Documentation tools"], _pricing: "$159/month", _link: "https://ziontechgroup.com/products/api-gateway", _icon: "🔌", _type: "SAAS Platform"}
      ]
    },
    // Security & Compliance Tools
    {_category: "Security & Compliance Tools", _products: [
        {
          name: "SecureScan Pro", _description: "Automated security scanning and vulnerability assessment platform for applications and infrastructure.", _features: ["Automated scanning", _"Vulnerability database", _"Compliance reporting", _"Remediation guidance", _"Integration APIs"], _pricing: "$199/month", _link: "https://ziontechgroup.com/products/securescan-pro", _icon: "🔍", _type: "SAAS Security Tool"},
        {_name: "Compliance Manager", _description: "Comprehensive compliance management platform for GDPR, _SOC 2, _HIPAA, _and other standards.", _features: ["Compliance tracking", _"Audit preparation", _"Policy management", _"Risk assessment", _"Reporting tools"], _pricing: "$299/month", _link: "https://ziontechgroup.com/products/compliance-manager", _icon: "📋", _type: "SAAS Compliance Tool"},
        {_name: "IdentityGuard", _description: "Advanced identity and access management platform with multi-factor authentication and SSO.", _features: ["Multi-factor auth", _"Single sign-on", _"Role-based access", _"Audit logging", _"Integration APIs"], _pricing: "$179/month", _link: "https://ziontechgroup.com/products/identityguard", _icon: "🔐", _type: "SAAS Security Platform"}
      ]
    },
    // Blockchain & Emerging Tech
    {_category: "Blockchain & Emerging Tech", _products: [
        {
          name: "Blockchain Studio", _description: "Comprehensive blockchain development platform for creating DApps and smart contracts.", _features: ["Smart contract builder", _"DApp templates", _"Blockchain integration", _"Testing tools", _"Deployment automation"], _pricing: "$399/month", _link: "https://ziontechgroup.com/products/blockchain-studio", _icon: "⛓️", _type: "SAAS Development Platform"},
        {_name: "IoT Platform Pro", _description: "Enterprise IoT platform for managing connected devices and collecting sensor data.", _features: ["Device management", _"Data collection", _"Real-time monitoring", _"Analytics dashboard", _"Alert system"], _pricing: "$249/month", _link: "https://ziontechgroup.com/products/iot-platform", _icon: "🌐", _type: "SAAS IoT Platform"},
        {_name: "AR/VR Creator", _description: "Platform for building immersive augmented and virtual reality experiences.", _features: ["3D model library", _"Interactive builder", _"Multi-platform support", _"Performance optimization", _"Analytics tools"], _pricing: "$299/month", _link: "https://ziontechgroup.com/products/ar-vr-creator", _icon: "🥽", _type: "SAAS Development Tool"}
      ]
    },
    // Business & Productivity Tools
    {_category: "Business & Productivity Tools", _products: [
        {
          name: "ProjectFlow Manager", _description: "Advanced project management platform with AI-powered insights and team collaboration features.", _features: ["Task management", _"Team collaboration", _"AI insights", _"Resource planning", _"Progress tracking"], _pricing: "$79/month", _link: "https://ziontechgroup.com/products/projectflow-manager", _icon: "📋", _type: "SAAS Project Management"},
        {_name: "Customer360 CRM", _description: "Comprehensive customer relationship management platform with AI-powered analytics.", _features: ["Contact management", _"Sales tracking", _"Marketing automation", _"AI insights", _"Integration APIs"], _pricing: "$149/month", _link: "https://ziontechgroup.com/products/customer360-crm", _icon: "👥", _type: "SAAS CRM Platform"},
        {_name: "Workflow Automation Hub", _description: "No-code workflow automation platform for business process optimization.", _features: ["Visual workflow builder", _"Integration connectors", _"Automation templates", _"Analytics dashboard", _"Custom triggers"], _pricing: "$119/month", _link: "https://ziontechgroup.com/products/workflow-automation", _icon: "⚙️", _type: "SAAS Automation Tool"}
      ]
    }
  ];

  return (_<div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <Head>
        <title>Our Products - Zion Tech Group | Innovative Micro SAAS Solutions</title>
        <meta name="description" content="Discover our comprehensive portfolio of micro SAAS products, _IT solutions, _and AI tools. From AI analytics to blockchain development, _we offer cutting-edge technology products." />
        <meta name="keywords" content="micro SAAS, _AI tools, _cloud solutions, _development platforms, _security tools, _blockchain, _IoT, _business software" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {_/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Product Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Explore our innovative micro SAAS products, _cutting-edge IT solutions, _and powerful AI tools. 
            Each product is designed to solve real business challenges and drive digital transformation.
          </p>
        </div>

        {_/* Products Grid */}
        <div className="space-y-16">
          {_products.map((category, _categoryIndex) => (_<div key={categoryIndex} className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {_category.category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {_category.products.map((product, _productIndex) => (_<div key={productIndex} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-green-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{_product.icon}</div>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {_product.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {_product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {_product.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {_product.features.map((feature, _featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {_feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {_product.pricing}
                      </span>
                    </div>
                    <Link 
                      href={_product.link}
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

        {_/* Enterprise Solutions Section */}
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

        {_/* Contact Section */}
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
import React from 'react';

export default function ProductsIndexPage() {_return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold">Products</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Browse Zion products.</p>
    </div>
  );}
