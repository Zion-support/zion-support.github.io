  const serviceCategories = [
    {
      title: "AI-Powered Micro SAAS Solutions",
      subtitle: "Intelligent software-as-a-service solutions that automate and optimize business processes",
      icon: "🤖",
      services: [
        {
          name: "AI-Powered Content Generator",
          description: "Revolutionary content creation platform that generates high-quality, SEO-optimized content for blogs, social media, and marketing materials.",
          features: [
            "Multi-language content generation",
            "SEO optimization algorithms",
            "Brand voice consistency",
            "Content scheduling automation",
            "Performance analytics"
          ],
          pricing: "$99 - $499/month",
          benefits: [
            "10x faster content creation",
            "SEO-optimized output",
            "24/7 content generation",
            "Cost-effective marketing",
            "Improved engagement rates"
          ],
          marketPosition: "Leading AI content generation platform",
          competitors: ["Jasper", "Copy.ai", "Writesonic"],
          competitiveAdvantage: "Advanced AI algorithms, comprehensive automation, and brand voice consistency"
        },
        {
          name: "Smart Invoice Management",
          description: "Intelligent invoice processing platform that automates approval workflows and payment tracking.",
          features: [
            "OCR invoice processing",
            "Automated approval workflows",
            "Payment integration",
            "Analytics dashboard",
            "Compliance automation"
          ],
          pricing: "$79 - $299/month",
          benefits: [
            "90% reduction in processing time",
            "Real-time tracking",
            "Compliance automation",
            "Cost savings",
            "Improved cash flow"
          ],
          marketPosition: "Next-generation invoice management for modern businesses",
          competitors: ["Bill.com", "FreshBooks", "QuickBooks"],
          competitiveAdvantage: "AI-powered processing, comprehensive automation, and seamless integration"
        },
        {
          name: "AI-Powered Social Media Management",
          description: "Intelligent social media automation with AI-driven content creation and engagement analytics.",
          features: [
            "AI content generation",
            "Automated posting",
            "Engagement analytics",
            "Trend prediction",
            "Multi-platform management"
          ],
          pricing: "$149 - $899/month",
          benefits: [
            "3x engagement increase",
            "Time savings",
            "Better reach",
            "Automated optimization",
            "ROI tracking"
          ],
          marketPosition: "AI-powered social media automation for growth-focused businesses",
          competitors: ["Hootsuite", "Buffer", "Sprout Social"],
          competitiveAdvantage: "AI-driven content, intelligent automation, and predictive analytics"
        },
        {
          name: "Smart Email Marketing Automation",
          description: "Advanced email marketing platform with AI-driven personalization and optimization.",
          features: [
            "AI personalization",
            "Behavioral triggers",
            "A/B testing",
            "Predictive analytics",
            "Advanced segmentation"
          ],
          pricing: "$199 - $1,299/month",
          benefits: [
            "40% higher open rates",
            "Better conversions",
            "Automated optimization",
            "ROI tracking",
            "Personalized experiences"
          ],
          marketPosition: "AI-powered email marketing for modern businesses",
          competitors: ["Mailchimp", "Constant Contact", "ConvertKit"],
          competitiveAdvantage: "AI personalization, predictive analytics, and automated optimization"
        }
      ]
    },
    {
      title: "Advanced AI & Machine Learning",
      subtitle: "Enterprise-grade artificial intelligence solutions that drive innovation and competitive advantage",
      icon: "🧠",
      services: [
        {
          name: "AI-Powered Enterprise Analytics",
          description: "Comprehensive enterprise analytics platform with real-time insights and predictive capabilities.",
          features: [
            "Real-time data processing",
            "Predictive modeling",
            "Custom dashboards",
            "API integrations",
            "Advanced reporting"
          ],
          pricing: "$5,000 - $35,000/month",
          benefits: [
            "50% faster decision making",
            "Predictive insights",
            "Real-time monitoring",
            "Cost optimization",
            "Competitive advantage"
          ],
          marketPosition: "Enterprise-grade analytics for Fortune 500 companies",
          competitors: ["Tableau", "Power BI", "QlikView"],
          competitiveAdvantage: "AI-powered insights, real-time processing, and seamless enterprise integration"
        },
        {
          name: "AI-Driven Business Process Automation",
          description: "End-to-end business process automation using AI and machine learning.",
          features: [
            "Process mining",
            "Workflow automation",
            "Intelligent routing",
            "Performance optimization",
            "Compliance tracking"
          ],
          pricing: "$3,500 - $25,000/month",
          benefits: [
            "70% process efficiency improvement",
            "Automated compliance",
            "Cost reduction",
            "Error elimination",
            "Scalable operations"
          ],
          marketPosition: "Leading BPA solution for large enterprises",
          competitors: ["UiPath", "Automation Anywhere", "Blue Prism"],
          competitiveAdvantage: "AI-native approach, intelligent decision making, and comprehensive automation"
        },
        {
          name: "AI-Powered Customer Experience Platform",
          description: "Omnichannel customer experience optimization using AI and behavioral analytics.",
          features: [
            "Customer journey mapping",
            "Behavioral analytics",
            "Personalization engine",
            "Sentiment analysis",
            "Predictive engagement"
          ],
          pricing: "$4,000 - $30,000/month",
          benefits: [
            "40% increase in customer satisfaction",
            "Higher conversion rates",
            "Reduced churn",
            "Personalized experiences",
            "Data-driven insights"
          ],
          marketPosition: "Next-generation CX platform for customer-centric businesses",
          competitors: ["Adobe Experience Cloud", "Salesforce Service Cloud", "Oracle CX"],
          competitiveAdvantage: "AI-driven personalization, real-time optimization, and comprehensive analytics"
        }
      ]
    },
    {
      title: "Emerging Technology Solutions",
      subtitle: "Cutting-edge technology services that position businesses for the future",
      icon: "🚀",
      services: [
        {
          name: "Quantum Computing Consulting",
          description: "Expert guidance on quantum computing strategy, implementation, and business transformation.",
          features: [
            "Quantum strategy development",
            "Use case identification",
            "Vendor selection",
            "Implementation planning",
            "Performance benchmarking"
          ],
          pricing: "$8,000 - $50,000/month",
          benefits: [
            "Future-ready technology advantage",
            "Competitive differentiation",
            "Innovation leadership",
            "Strategic positioning",
            "Expert guidance"
          ],
          marketPosition: "Premier quantum computing consultancy for Fortune 100 companies",
          competitors: ["IBM Quantum", "Google Quantum AI", "Microsoft Quantum"],
          competitiveAdvantage: "Deep quantum expertise, practical implementation, and strategic business focus"
        },
        {
          name: "Metaverse Development & Strategy",
          description: "Complete metaverse ecosystem development and strategic implementation.",
          features: [
            "VR/AR platform development",
            "3D asset creation",
            "Interactive experiences",
            "Virtual commerce",
            "Community building"
          ],
          pricing: "$10,000 - $75,000/month",
          benefits: [
            "New revenue streams",
            "Enhanced customer engagement",
            "Innovation leadership",
            "Future market positioning",
            "Competitive advantage"
          ],
          marketPosition: "Leading metaverse development for global brands",
          competitors: ["Meta", "Microsoft Mesh", "NVIDIA Omniverse"],
          competitiveAdvantage: "Custom development, strategic implementation, and comprehensive ecosystem building"
        },
        {
          name: "Web3 & Blockchain Infrastructure",
          description: "Enterprise blockchain solutions and decentralized application development.",
          features: [
            "Smart contract development",
            "DApp creation",
            "DeFi solutions",
            "NFT platforms",
            "Blockchain integration"
          ],
          pricing: "$6,000 - $45,000/month",
          benefits: [
            "Decentralized operations",
            "Enhanced security",
            "Transparency",
            "New business models",
            "Innovation leadership"
          ],
          marketPosition: "Enterprise blockchain solutions for innovative organizations",
          competitors: ["Ethereum Enterprise", "Hyperledger", "Corda"],
          competitiveAdvantage: "Custom development, enterprise integration, and regulatory compliance"
        }
      ]
    },
    {
      title: "Advanced IT Infrastructure",
      subtitle: "Modern IT infrastructure solutions for enterprise-scale operations",
      icon: "🖥️",
      services: [
        {
          name: "Zero Trust Security Architecture",
          description: "Comprehensive zero trust security implementation and management.",
          features: [
            "Identity verification",
            "Access control",
            "Network segmentation",
            "Continuous monitoring",
            "Threat detection"
          ],
          pricing: "$4,500 - $35,000/month",
          benefits: [
            "Enhanced security",
            "Compliance assurance",
            "Risk reduction",
            "Operational efficiency",
            "Future-proof security"
          ],
          marketPosition: "Leading zero trust implementation for enterprise organizations",
          competitors: ["Cisco", "Palo Alto Networks", "Fortinet"],
          competitiveAdvantage: "Comprehensive implementation, continuous monitoring, and strategic integration"
        },
        {
          name: "Edge Computing Infrastructure",
          description: "Distributed edge computing solutions for IoT and real-time applications.",
          features: [
            "Edge deployment",
            "Latency optimization",
            "IoT integration",
            "Real-time processing",
            "Scalable infrastructure"
          ],
          pricing: "$3,000 - $25,000/month",
          benefits: [
            "Ultra-low latency",
            "Real-time processing",
            "Cost optimization",
            "Scalable performance",
            "IoT readiness"
          ],
          marketPosition: "Edge computing solutions for performance-critical applications",
          competitors: ["AWS Edge", "Azure Edge", "Google Edge"],
          competitiveAdvantage: "Custom deployment, performance optimization, and comprehensive integration"
        },
        {
          name: "5G Network Optimization",
          description: "5G network design, deployment, and performance optimization.",
          features: [
            "Network planning",
            "Performance optimization",
            "Coverage analysis",
            "Capacity planning",
            "Monitoring"
          ],
          pricing: "$4,000 - $30,000/month",
          benefits: [
            "Maximum performance",
            "Optimal coverage",
            "Future scalability",
            "Cost efficiency",
            "Competitive advantage"
          ],
          marketPosition: "5G optimization for enterprise and carrier networks",
          competitors: ["Ericsson", "Nokia", "Huawei"],
          competitiveAdvantage: "Custom optimization, performance tuning, and strategic planning"
        }
      ]
    }
  ];

  const categories = [
    'all',
    'Advanced AI & ML',
    'Blockchain & Web3',
    'Quantum Computing',
    'Advanced Cybersecurity',
    'Edge Computing & IoT',
    'Advanced Data Analytics',
    'Autonomous Systems',
    'Digital Twin Technology',
    'Metaverse & VR/AR',
    'Green Technology',
    'Healthcare & Life Sciences',
    'Financial Services & Banking',
    'Manufacturing & Industry 4.0',
    'Retail & E-commerce',
    'Transportation & Logistics',
    'Energy & Utilities',
    'Education & EdTech',
    'Real Estate & Property Management',
    'Legal & Compliance'
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { EnhancedServicesShowcase } from '@/components/EnhancedServicesShowcase';

export default function ServicesShowcase() {
  return (
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete Services
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Showcase
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive portfolio of innovative technology solutions designed to transform your business and drive growth
            </p>
          </div>
          
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {category.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  {category.subtitle}
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <h3 className="text-2xl font-semibold text-white mb-4">{service.name}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-300 flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-green-400 mb-3">Pricing</h4>
                      <p className="text-xl text-gray-300 font-semibold">{service.pricing}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-yellow-400 mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-gray-300 flex items-center">
                            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-purple-400 mb-3">Market Position</h4>
                      <p className="text-gray-300">{service.marketPosition}</p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Competitive Advantage</h4>
                      <p className="text-gray-300">{service.competitiveAdvantage}</p>
                    </div>
                    
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      Get Started
                      <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Implement These Solutions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our comprehensive technology services can transform your business
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation First</h3>
              <p className="text-sm text-gray-300">Cutting-edge AI, quantum computing, and emerging technologies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">💼</div>
              <h3 className="text-lg font-semibold text-white mb-2">Industry Expertise</h3>
              <p className="text-sm text-gray-300">Specialized solutions for healthcare, finance, manufacturing, and more</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">📈</div>
              <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-sm text-gray-300">Measurable ROI and performance improvements across industries</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Start Your Transformation
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Call: +1 302 464 0950
            </a>
          </div>
          <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-2 text-blue-400 hover:text-blue-300 border border-blue-400 rounded-lg transition-all duration-300"
            >
              View All Services →
            </Link>
            <Link
              to="/advanced-services-2025"
              className="inline-flex items-center px-6 py-2 text-cyan-400 hover:text-cyan-300 border border-cyan-400 rounded-lg transition-all duration-300"
            >
              Advanced Services 2025 →
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">ziontechgroup.com</a></p>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Mobile: +1 302 464 0950</p>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Service Categories
            </h2>
            <p className="text-xl text-gray-300">
              Explore our wide range of innovative solutions across different technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.filter(cat => cat !== 'all').map((category, index) => {
              const categoryServices = allServices.filter(service => service.category === category);
              const avgPrice = categoryServices.length > 0 
                ? categoryServices.reduce((sum, service) => sum + service.price, 0) / categoryServices.length 
                : 0;
              
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{category}</h3>
                  <p className="text-sm text-gray-400 mb-4">{categoryServices.length} services available</p>
                  <p className="text-sm text-blue-400 mb-2">Starting from ${Math.round(avgPrice).toLocaleString()}/month</p>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className="w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    View Services
                  </button>
                </div>
              );
            })}
          </div>
import { CogIcon } from '@heroicons/react/24/outline';

const $page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <CogIcon className="h-12 w-12 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            $page
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This page is under development. Contact us for more information.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
          >
            Contact Us for More Information
          </Link>
        </div>
      </section>
    </div>
    <>
      <Helmet>
        <title>Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive technology services portfolio including AI solutions, cloud services, cybersecurity, and digital transformation." />
        <meta name="keywords" content="technology services, AI solutions, cloud services, cybersecurity, digital transformation, IT consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/services-showcase" />
      </Helmet>
      
      <EnhancedServicesShowcase />
    </>
  );
};

export default $page;
