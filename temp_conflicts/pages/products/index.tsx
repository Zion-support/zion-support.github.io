import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ProductsPage: NextPage = () => {
  const products = [
    // AI & Automation Tools
    {
      category: &quot;AI & Automation Tools&quot;,
      products: [
        {
          name: &quot;ZionAI Analytics Platform&quot;,
          description: &quot;Enterprise-grade AI-powered analytics platform for real-time business intelligence and predictive insights.&quot;,
          features: [&quot;Real-time data processing&quot;, &quot;AI-powered forecasting&quot;, &quot;Custom dashboards&quot;, &quot;API integration&quot;, &quot;Multi-tenant support&quot;],
          pricing: &quot;$299/month&quot;,
          link: &quot;https://ziontechgroup.com/products/ai-analytics&quot;,
          icon: &quot;🤖&quot;,
          type: &quot;SAAS Platform&quot;
        },
        {
          name: &quot;SmartBot Builder&quot;,
          description: &quot;No-code chatbot development platform with advanced NLP capabilities and multi-channel deployment.&quot;,
          features: [&quot;Visual bot builder&quot;, &quot;Multi-language support&quot;, &quot;Integration APIs&quot;, &quot;Analytics dashboard&quot;, &quot;Custom training&quot;],
          pricing: &quot;$99/month&quot;,
          link: &quot;https://ziontechgroup.com/products/smartbot-builder&quot;,
          icon: &quot;💬&quot;,
          type: &quot;SAAS Tool&quot;
        },
        {
          name: &quot;AutoML Studio&quot;,
          description: &quot;Automated machine learning platform for building and deploying ML models without coding expertise.&quot;,
          features: [&quot;Drag-and-drop interface&quot;, &quot;Auto-model selection&quot;, &quot;One-click deployment&quot;, &quot;Performance monitoring&quot;, &quot;Model versioning&quot;],
          pricing: &quot;$199/month&quot;,
          link: &quot;https://ziontechgroup.com/products/automl-studio&quot;,
          icon: &quot;🧠&quot;,
          type: &quot;SAAS Platform&quot;
        }
      ]
    },
    // Cloud & Infrastructure Solutions
    {
      category: &quot;Cloud & Infrastructure Solutions&quot;,
      products: [
        {
          name: &quot;CloudCost Optimizer&quot;,
          description: &quot;Intelligent cloud cost management and optimization platform for multi-cloud environments.&quot;,
          features: [&quot;Cost tracking&quot;, &quot;Resource optimization&quot;, &quot;Budget alerts&quot;, &quot;Multi-cloud support&quot;, &quot;ROI analysis&quot;],
          pricing: &quot;$149/month&quot;,
          link: &quot;https://ziontechgroup.com/products/cloudcost-optimizer&quot;,
          icon: &quot;☁️&quot;,
          type: &quot;SAAS Tool&quot;
        },
        {
          name: &quot;DevOps Pipeline Manager&quot;,
          description: &quot;Comprehensive CI/CD pipeline management platform with automated testing and deployment.&quot;,
          features: [&quot;Pipeline automation&quot;, &quot;Git integration&quot;, &quot;Testing automation&quot;, &quot;Deployment tracking&quot;, &quot;Performance metrics&quot;],
          pricing: &quot;$179/month&quot;,
          link: &quot;https://ziontechgroup.com/products/devops-pipeline&quot;,
          icon: &quot;🔄&quot;,
          type: &quot;SAAS Platform&quot;
        },
        {
          name: &quot;InfraGuard Security&quot;,
          description: &quot;Cloud infrastructure security monitoring and threat detection platform.&quot;,
          features: [&quot;Real-time monitoring&quot;, &quot;Threat detection&quot;, &quot;Compliance reporting&quot;, &quot;Security scoring&quot;, &quot;Incident response&quot;],
          pricing: &quot;$249/month&quot;,
          link: &quot;https://ziontechgroup.com/products/infraguard&quot;,
          icon: &quot;🛡️&quot;,
          type: &quot;SAAS Security&quot;
        }
      ]
    },
    // Data & Analytics Products
    {
      category: &quot;Data & Analytics Products&quot;,
      products: [
        {
          name: &quot;DataFlow Pipeline&quot;,
          description: &quot;Enterprise data pipeline orchestration platform for ETL processes and real-time streaming.&quot;,
          features: [&quot;Visual pipeline builder&quot;, &quot;Real-time processing&quot;, &quot;Data quality checks&quot;, &quot;Scalable architecture&quot;, &quot;Monitoring dashboard&quot;],
          pricing: &quot;$399/month&quot;,
          link: &quot;https://ziontechgroup.com/products/dataflow-pipeline&quot;,
          icon: &quot;📊&quot;,
          type: &quot;SAAS Platform&quot;
        },
        {
          name: &quot;InsightHub BI&quot;,
          description: &quot;Business intelligence platform with interactive dashboards and advanced analytics capabilities.&quot;,
          features: [&quot;Interactive dashboards&quot;, &quot;Data visualization&quot;, &quot;Report automation&quot;, &quot;KPI tracking&quot;, &quot;Mobile access&quot;],
          pricing: &quot;$199/month&quot;,
          link: &quot;https://ziontechgroup.com/products/insighthub-bi&quot;,
          icon: &quot;📈&quot;,
          type: &quot;SAAS BI Tool&quot;
        },
        {
          name: &quot;DataVault Manager&quot;,
          description: &quot;Secure data warehouse management platform with advanced security and compliance features.&quot;,
          features: [&quot;Data encryption&quot;, &quot;Access controls&quot;, &quot;Audit logging&quot;, &quot;Compliance reporting&quot;, &quot;Backup automation&quot;],
          pricing: &quot;$299/month&quot;,
          link: &quot;https://ziontechgroup.com/products/datavault-manager&quot;,
          icon: &quot;🗄️&quot;,
          type: &quot;SAAS Platform&quot;
        }
      ]
    },
    // Web & Mobile Development Tools
    {
      category: &quot;Web & Mobile Development Tools&quot;,
      products: [
        {
          name: &quot;AppBuilder Pro&quot;,
          description: &quot;Low-code mobile app development platform for creating native and cross-platform applications.&quot;,
          features: [&quot;Visual app builder&quot;, &quot;Cross-platform support&quot;, &quot;Template library&quot;, &quot;API integration&quot;, &quot;App store deployment&quot;],
          pricing: &quot;$129/month&quot;,
          link: &quot;https://ziontechgroup.com/products/appbuilder-pro&quot;,
          icon: &quot;📱&quot;,
          type: &quot;SAAS Development Tool&quot;
        },
        {
          name: &quot;WebFlow Accelerator&quot;,
          description: &quot;Rapid web application development platform with pre-built components and templates.&quot;,
          features: [&quot;Component library&quot;, &quot;Template marketplace&quot;, &quot;Drag-and-drop builder&quot;, &quot;Responsive design&quot;, &quot;SEO optimization&quot;],
          pricing: &quot;$89/month&quot;,
          link: &quot;https://ziontechgroup.com/products/webflow-accelerator&quot;,
          icon: &quot;🌐&quot;,
          type: &quot;SAAS Development Tool&quot;
        },
        {
          name: &quot;API Gateway Pro&quot;,
          description: &quot;Enterprise API management platform with security, monitoring, and developer portal features.&quot;,
          features: [&quot;API security&quot;, &quot;Rate limiting&quot;, &quot;Analytics dashboard&quot;, &quot;Developer portal&quot;, &quot;Documentation tools&quot;],
          pricing: &quot;$159/month&quot;,
          link: &quot;https://ziontechgroup.com/products/api-gateway&quot;,
          icon: &quot;🔌&quot;,
          type: &quot;SAAS Platform&quot;
        }
      ]
    },
    // Security & Compliance Tools
    {
      category: &quot;Security & Compliance Tools&quot;,
      products: [
        {
          name: &quot;SecureScan Pro&quot;,
          description: &quot;Automated security scanning and vulnerability assessment platform for applications and infrastructure.&quot;,
          features: [&quot;Automated scanning&quot;, &quot;Vulnerability database&quot;, &quot;Compliance reporting&quot;, &quot;Remediation guidance&quot;, &quot;Integration APIs&quot;],
          pricing: &quot;$199/month&quot;,
          link: &quot;https://ziontechgroup.com/products/securescan-pro&quot;,
          icon: &quot;🔍&quot;,
          type: &quot;SAAS Security Tool&quot;
        },
        {
          name: &quot;Compliance Manager&quot;,
          description: &quot;Comprehensive compliance management platform for GDPR, SOC 2, HIPAA, and other standards.&quot;,
          features: [&quot;Compliance tracking&quot;, &quot;Audit preparation&quot;, &quot;Policy management&quot;, &quot;Risk assessment&quot;, &quot;Reporting tools&quot;],
          pricing: &quot;$299/month&quot;,
          link: &quot;https://ziontechgroup.com/products/compliance-manager&quot;,
          icon: &quot;📋&quot;,
          type: &quot;SAAS Compliance Tool&quot;
        },
        {
          name: &quot;IdentityGuard&quot;,
          description: &quot;Advanced identity and access management platform with multi-factor authentication and SSO.&quot;,
          features: [&quot;Multi-factor auth&quot;, &quot;Single sign-on&quot;, &quot;Role-based access&quot;, &quot;Audit logging&quot;, &quot;Integration APIs&quot;],
          pricing: &quot;$179/month&quot;,
          link: &quot;https://ziontechgroup.com/products/identityguard&quot;,
          icon: &quot;🔐&quot;,
          type: &quot;SAAS Security Platform&quot;
        }
      ]
    },
    // Blockchain & Emerging Tech
    {
      category: &quot;Blockchain & Emerging Tech&quot;,
      products: [
        {
          name: &quot;Blockchain Studio&quot;,
          description: &quot;Comprehensive blockchain development platform for creating DApps and smart contracts.&quot;,
          features: [&quot;Smart contract builder&quot;, &quot;DApp templates&quot;, &quot;Blockchain integration&quot;, &quot;Testing tools&quot;, &quot;Deployment automation&quot;],
          pricing: &quot;$399/month&quot;,
          link: &quot;https://ziontechgroup.com/products/blockchain-studio&quot;,
          icon: &quot;⛓️&quot;,
          type: &quot;SAAS Development Platform&quot;
        },
        {
          name: &quot;IoT Platform Pro&quot;,
          description: &quot;Enterprise IoT platform for managing connected devices and collecting sensor data.&quot;,
          features: [&quot;Device management&quot;, &quot;Data collection&quot;, &quot;Real-time monitoring&quot;, &quot;Analytics dashboard&quot;, &quot;Alert system&quot;],
          pricing: &quot;$249/month&quot;,
          link: &quot;https://ziontechgroup.com/products/iot-platform&quot;,
          icon: &quot;🌐&quot;,
          type: &quot;SAAS IoT Platform&quot;
        },
        {
          name: &quot;AR/VR Creator&quot;,
          description: &quot;Platform for building immersive augmented and virtual reality experiences.&quot;,
          features: [&quot;3D model library&quot;, &quot;Interactive builder&quot;, &quot;Multi-platform support&quot;, &quot;Performance optimization&quot;, &quot;Analytics tools&quot;],
          pricing: &quot;$299/month&quot;,
          link: &quot;https://ziontechgroup.com/products/ar-vr-creator&quot;,
          icon: &quot;🥽&quot;,
          type: &quot;SAAS Development Tool&quot;
        }
      ]
    },
    // Business & Productivity Tools
    {
      category: &quot;Business & Productivity Tools&quot;,
      products: [
        {
          name: &quot;ProjectFlow Manager&quot;,
          description: &quot;Advanced project management platform with AI-powered insights and team collaboration features.&quot;,
          features: [&quot;Task management&quot;, &quot;Team collaboration&quot;, &quot;AI insights&quot;, &quot;Resource planning&quot;, &quot;Progress tracking&quot;],
          pricing: &quot;$79/month&quot;,
          link: &quot;https://ziontechgroup.com/products/projectflow-manager&quot;,
          icon: &quot;📋&quot;,
          type: &quot;SAAS Project Management&quot;
        },
        {
          name: &quot;Customer360 CRM&quot;,
          description: &quot;Comprehensive customer relationship management platform with AI-powered analytics.&quot;,
          features: [&quot;Contact management&quot;, &quot;Sales tracking&quot;, &quot;Marketing automation&quot;, &quot;AI insights&quot;, &quot;Integration APIs&quot;],
          pricing: &quot;$149/month&quot;,
          link: &quot;https://ziontechgroup.com/products/customer360-crm&quot;,
          icon: &quot;👥&quot;,
          type: &quot;SAAS CRM Platform&quot;
        },
        {
          name: &quot;Workflow Automation Hub&quot;,
          description: &quot;No-code workflow automation platform for business process optimization.&quot;,
          features: [&quot;Visual workflow builder&quot;, &quot;Integration connectors&quot;, &quot;Automation templates&quot;, &quot;Analytics dashboard&quot;, &quot;Custom triggers&quot;],
          pricing: &quot;$119/month&quot;,
          link: &quot;https://ziontechgroup.com/products/workflow-automation&quot;,
          icon: &quot;⚙️&quot;,
          type: &quot;SAAS Automation Tool&quot;
        }
      ]
    }
  ];

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-gray-50 to-green-50&quot;>
      <Head>
        <title>Our Products - Zion Tech Group | Innovative Micro SAAS Solutions</title>
        <meta name=&quot;description&quot; content=&quot;Discover our comprehensive portfolio of micro SAAS products, IT solutions, and AI tools. From AI analytics to blockchain development, we offer cutting-edge technology products.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;micro SAAS, AI tools, cloud solutions, development platforms, security tools, blockchain, IoT, business software&quot; />
      </Head>
      
      <main className=&quot;container mx-auto px-4 py-16&quot;>
        {/* Header Section */}
        <div className=&quot;text-center mb-16&quot;>
          <h1 className=&quot;text-5xl font-bold text-gray-900 mb-6&quot;>
            Our Product Portfolio
          </h1>
          <p className=&quot;text-xl text-gray-600 max-w-4xl mx-auto&quot;>
            Explore our innovative micro SAAS products, cutting-edge IT solutions, and powerful AI tools. 
            Each product is designed to solve real business challenges and drive digital transformation.
          </p>
        </div>

        {/* Products Grid */}
        <div className=&quot;space-y-16&quot;>
          {products.map((category, categoryIndex) => (
            <div key={categoryIndex} className=&quot;bg-white rounded-2xl shadow-xl p-8&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-8 text-center&quot;>
                {category.category}
              </h2>
              <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
                {category.products.map((product, productIndex) => (
                  <div key={productIndex} className=&quot;bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-green-100&quot;>
                    <div className=&quot;flex items-center justify-between mb-4&quot;>
                      <div className=&quot;text-4xl&quot;>{product.icon}</div>
                      <span className=&quot;bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold&quot;>
                        {product.type}
                      </span>
                    </div>
                    <h3 className=&quot;text-xl font-bold text-gray-900 mb-3&quot;>
                      {product.name}
                    </h3>
                    <p className=&quot;text-gray-600 mb-4 leading-relaxed&quot;>
                      {product.description}
                    </p>
                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;font-semibold text-gray-800 mb-2&quot;>Key Features:</h4>
                      <ul className=&quot;space-y-1&quot;>
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className=&quot;text-sm text-gray-600 flex items-center&quot;>
                            <span className=&quot;text-green-500 mr-2&quot;>✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className=&quot;mb-4&quot;>
                      <span className=&quot;inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold&quot;>
                        {product.pricing}
                      </span>
                    </div>
                    <Link 
                      href={product.link}
                      className=&quot;inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full text-center&quot;
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
        <div className=&quot;bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 mt-16 text-center text-white&quot;>
          <h2 className=&quot;text-3xl font-bold mb-4&quot;>
            Enterprise Solutions
          </h2>
          <p className=&quot;text-xl mb-6 opacity-90&quot;>
            Need custom enterprise solutions? We offer tailored implementations, white-label options, and dedicated support for large organizations.
          </p>
          <div className=&quot;grid md:grid-cols-3 gap-6 mb-8&quot;>
            <div>
              <h3 className=&quot;font-semibold mb-2&quot;>🏢 Custom Implementation</h3>
              <p>Tailored solutions for your specific business needs</p>
            </div>
            <div>
              <h3 className=&quot;font-semibold mb-2&quot;>🏷️ White Label</h3>
              <p>Rebrand our products as your own</p>
            </div>
            <div>
              <h3 className=&quot;font-semibold mb-2&quot;>👥 Dedicated Support</h3>
              <p>24/7 dedicated support and account management</p>
            </div>
          </div>
          <Link 
            href=&quot;/contact&quot;
            className=&quot;bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors&quot;
          >
            Contact Sales Team
          </Link>
        </div>

        {/* Contact Section */}
        <div className=&quot;mt-16 text-center&quot;>
          <h2 className=&quot;text-3xl font-bold text-gray-900 mb-8&quot;>
            Ready to Get Started?
          </h2>
          <p className=&quot;text-xl text-gray-600 mb-8 max-w-3xl mx-auto&quot;>
            Start your free trial today or schedule a demo with our product experts. 
            Transform your business with our innovative technology solutions.
          </p>
          <div className=&quot;flex justify-center gap-4 mb-8&quot;>
            <Link 
              href=&quot;/contact&quot;
              className=&quot;bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors&quot;
            >
              Start Free Trial
            </Link>
            <Link 
              href=&quot;/contact&quot;
              className=&quot;bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors&quot;
            >
              Schedule Demo
            </Link>
          </div>
          <div className=&quot;grid md:grid-cols-3 gap-6 text-sm text-gray-600&quot;>
            <div>
              <h3 className=&quot;font-semibold mb-2&quot;>📱 Mobile</h3>
              <p>+1 302 464 0950</p>
            </div>
            <div>
              <h3 className=&quot;font-semibold mb-2&quot;>✉️ Email</h3>
              <p>kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className=&quot;font-semibold mb-2&quot;>🌐 Website</h3>
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

export default function ProductsIndexPage() {
  return (
    <div className=&quot;container mx-auto px-4 py-10&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>Products</h1>
      <p className=&quot;mt-2 text-gray-600 dark:text-gray-300&quot;>Browse Zion products.</p>
    </div>
  );
}
