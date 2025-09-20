<<<<<<< HEAD
const ServicesPage: NextPage = () => {
  const services = [
    // AI & Machine Learning Services
    {
      category: "AI & Machine Learning",
      services: [
        {
          name: "Custom AI Model Development",
          description: "Tailored machine learning models for your specific business needs. From predictive analytics to natural language processing.",
          features: ["Custom algorithm development", "Model training & optimization", "API integration", "Performance monitoring"],
          pricing: "$5,000 - $25,000",
          link: "https://ziontechgroup.com/services/ai-development",
          icon: "🤖"
        },
        {
          name: "AI-Powered Business Intelligence",
          description: "Transform your data into actionable insights with AI-driven analytics and reporting systems.",
          features: ["Real-time analytics", "Predictive modeling", "Custom dashboards", "Automated reporting"],
          pricing: "$3,000 - $15,000",
          link: "https://ziontechgroup.com/services/business-intelligence",
          icon: "📊"
        },
        {
          name: "Natural Language Processing Solutions",
          description: "Build intelligent chatbots, sentiment analysis tools, and language understanding systems.",
          features: ["Chatbot development", "Sentiment analysis", "Text classification", "Language translation"],
          pricing: "$2,500 - $12,000",
          link: "https://ziontechgroup.com/services/nlp-solutions",
          icon: "💬"
        }
      ]
    },
    // Cloud & Infrastructure Services
    {
      category: "Cloud & Infrastructure",
      services: [
        {
          name: "Cloud Migration & Architecture",
          description: "Seamless migration to cloud platforms with optimized architecture for scalability and performance.",
          features: ["Multi-cloud strategy", "Cost optimization", "Security implementation", "Performance tuning"],
          pricing: "$8,000 - $40,000",
          link: "https://ziontechgroup.com/services/cloud-migration",
          icon: "☁️"
        },
        {
          name: "DevOps & CI/CD Implementation",
          description: "Automate your development pipeline with modern DevOps practices and continuous integration.",
          features: ["Pipeline automation", "Infrastructure as code", "Monitoring & alerting", "Security scanning"],
          pricing: "$4,000 - $20,000",
          link: "https://ziontechgroup.com/services/devops",
          icon: "🔄"
        },
        {
          name: "Microservices Architecture",
          description: "Design and implement scalable microservices architecture for modern applications.",
          features: ["Service design", "API gateway setup", "Load balancing", "Service mesh implementation"],
          pricing: "$6,000 - $30,000",
          link: "https://ziontechgroup.com/services/microservices",
          icon: "🔧"
        }
      ]
    },
    // Web & Mobile Development
    {
      category: "Web & Mobile Development",
      services: [
        {
          name: "Full-Stack Web Applications",
          description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
          features: ["React/Next.js development", "Backend API development", "Database design", "Performance optimization"],
          pricing: "$10,000 - $50,000",
          link: "https://ziontechgroup.com/services/web-development",
          icon: "🌐"
        },
        {
          name: "Mobile App Development",
          description: "Native and cross-platform mobile applications for iOS and Android platforms.",
          features: ["Cross-platform development", "Native performance", "App store optimization", "Push notifications"],
          pricing: "$15,000 - $75,000",
          link: "https://ziontechgroup.com/services/mobile-development",
          icon: "📱"
        },
        {
          name: "Progressive Web Apps (PWA)",
          description: "Modern web applications that provide native app-like experience across all devices.",
          features: ["Offline functionality", "Push notifications", "App-like interface", "Cross-platform compatibility"],
          pricing: "$8,000 - $35,000",
          link: "https://ziontechgroup.com/services/pwa-development",
          icon: "⚡"
        }
      ]
    },
    // Data & Analytics Services
    {
      category: "Data & Analytics",
      services: [
        {
          name: "Data Pipeline Engineering",
          description: "Build robust data pipelines for collecting, processing, and analyzing large-scale data.",
          features: ["ETL pipeline design", "Real-time streaming", "Data quality monitoring", "Scalable architecture"],
          pricing: "$6,000 - $30,000",
          link: "https://ziontechgroup.com/services/data-pipelines",
          icon: "📈"
        },
        {
          name: "Database Design & Optimization",
          description: "Design and optimize databases for performance, scalability, and reliability.",
          features: ["Schema design", "Performance tuning", "Backup strategies", "Security implementation"],
          pricing: "$3,000 - $18,000",
          link: "https://ziontechgroup.com/services/database-design",
          icon: "🗄️"
        },
        {
          name: "Business Intelligence & Reporting",
          description: "Transform raw data into meaningful insights with interactive dashboards and reports.",
          features: ["Interactive dashboards", "Automated reporting", "Data visualization", "KPI tracking"],
          pricing: "$4,000 - $20,000",
          link: "https://ziontechgroup.com/services/business-intelligence",
          icon: "📊"
        }
      ]
    },
    // Security & Compliance
    {
      category: "Security & Compliance",
      services: [
        {
          name: "Security Auditing & Penetration Testing",
          description: "Comprehensive security assessments to identify and fix vulnerabilities in your systems.",
          features: ["Vulnerability assessment", "Penetration testing", "Security recommendations", "Compliance reporting"],
          pricing: "$5,000 - $25,000",
          link: "https://ziontechgroup.com/services/security-auditing",
          icon: "🔒"
        },
        {
          name: "Network Security Implementation",
          description: "Implement robust network security measures to protect your infrastructure.",
          features: ["Firewall configuration", "Intrusion detection", "VPN setup", "Security monitoring"],
          pricing: "$4,000 - $20,000",
          link: "https://ziontechgroup.com/services/network-security",
          icon: "🛡️"
        },
        {
          name: "Compliance & Governance",
          description: "Ensure your systems meet industry standards and regulatory requirements.",
          features: ["GDPR compliance", "SOC 2 preparation", "HIPAA compliance", "Security policies"],
          pricing: "$6,000 - $30,000",
          link: "https://ziontechgroup.com/services/compliance",
          icon: "📋"
        }
      ]
    },
    // Blockchain & Emerging Tech
    {
      category: "Blockchain & Emerging Tech",
      services: [
        {
          name: "Blockchain Development",
          description: "Build decentralized applications and smart contracts on various blockchain platforms.",
          features: ["Smart contract development", "DApp development", "Blockchain integration", "Token creation"],
          pricing: "$8,000 - $40,000",
          link: "https://ziontechgroup.com/services/blockchain",
          icon: "⛓️"
        },
        {
          name: "IoT Platform Development",
          description: "Create connected IoT solutions for smart devices and industrial applications.",
          features: ["Device connectivity", "Data collection", "Real-time monitoring", "Analytics dashboard"],
          pricing: "$10,000 - $50,000",
          link: "https://ziontechgroup.com/services/iot-platforms",
          icon: "🌐"
        },
        {
          name: "AR/VR Application Development",
          description: "Immersive augmented and virtual reality experiences for training and entertainment.",
          features: ["3D modeling", "Interactive experiences", "Cross-platform support", "Performance optimization"],
          pricing: "$15,000 - $75,000",
          link: "https://ziontechgroup.com/services/ar-vr",
          icon: "🥽"
        }
      ]
    },
    // Business Solutions
    {
      category: "Business Solutions",
      services: [
        {
          name: "Digital Transformation Consulting",
          description: "Strategic guidance for modernizing your business processes and technology stack.",
          features: ["Technology assessment", "Strategy development", "Implementation planning", "Change management"],
          pricing: "$150 - $300/hour",
          link: "https://ziontechgroup.com/services/digital-transformation",
          icon: "🚀"
        },
        {
          name: "Performance Optimization",
          description: "Optimize your applications and systems for maximum performance and user experience.",
          features: ["Performance analysis", "Code optimization", "Infrastructure tuning", "Monitoring setup"],
          pricing: "$3,000 - $20,000",
          link: "https://ziontechgroup.com/services/performance-optimization",
          icon: "⚡"
        },
        {
          name: "Quality Assurance & Testing",
          description: "Comprehensive testing services to ensure your applications meet quality standards.",
          features: ["Automated testing", "Manual testing", "Performance testing", "Security testing"],
          pricing: "$2,500 - $15,000",
          link: "https://ziontechgroup.com/services/quality-assurance",
          icon: "✅"
        }
      ]
    }
  ],

const Services: NextPage = () => {
  const services = [
    {
      title: "AI Development",
      description: "Custom artificial intelligence solutions including machine learning models, natural language processing, computer vision, and predictive analytics.",
      icon: "🤖",
      color: "from-blue-500 to-blue-600",
      link: "/services/ai-development",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Cloud Services",
      description: "Comprehensive cloud solutions including migration, architecture design, DevOps implementation, and cloud-native development.",
      icon: "☁️",
      color: "from-purple-500 to-purple-600",
      link: "/services/cloud-services",
      features: ["Cloud Migration", "Architecture Design", "DevOps Implementation", "Cloud-Native Development"]
    },
    {
      title: "Blockchain Solutions",
      description: "Innovative blockchain technology solutions for secure transactions, smart contracts, and decentralized applications.",
      icon: "⛓️",
      color: "from-green-500 to-green-600",
      link: "/services/blockchain-solutions",
      features: ["Smart Contracts", "DeFi Applications", "NFT Solutions", "Supply Chain Tracking"]
    },
    {
      title: "Data Analytics",
      description: "Advanced data analytics and business intelligence solutions to transform raw data into actionable insights.",
      icon: "📊",
      color: "from-red-500 to-red-600",
      link: "/services/data-analytics",
      features: ["Business Intelligence", "Data Visualization", "Predictive Modeling", "Real-time Analytics"]
    },
    {
      title: "Web Development",
      description: "Modern web applications built with cutting-edge technologies for optimal performance and user experience.",
      icon: "🌐",
      color: "from-indigo-500 to-indigo-600",
      link: "/services/web-development",
      features: ["Frontend Development", "Backend Systems", "E-commerce Solutions", "Progressive Web Apps"]
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      icon: "📱",
      color: "from-pink-500 to-pink-600",
      link: "/services/mobile-development",
      features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App Maintenance"]
    }
  ],

  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive technology services including AI development, cloud solutions, blockchain, data analytics, web and mobile development." />
        <meta name="keywords" content="technology services, AI development, cloud services, blockchain solutions, data analytics, web development, mobile development" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive digital innovation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`bg-gradient-to-r ${service.color} p-6 rounded-t-xl`}>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={service.link} className={`inline-block bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity`}>
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Discovery</h3>
              <p className="text-gray-600">Understanding your requirements and business objectives</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Planning</h3>
              <p className="text-gray-600">Creating detailed project roadmap and architecture</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Development</h3>
              <p className="text-gray-600">Building your solution with agile methodology</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Deployment</h3>
              <p className="text-gray-600">Launching and maintaining your solution</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and how we can help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm: flex-row justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
},

export default Services,
=======
import React from 'react',
import SEO from '../../components/SEO',
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground',
import UltraFuturisticServiceCard2026 from '../../components/ui/UltraFuturisticServiceCard2026',
import Link from 'next/link',
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services',
import { additionalEnhancedServices } from '../../data/additional-real-services',
import { extraServices } from '../../data/extra-services',
import { newlyAddedServices } from '../../data/newly-added-services',
import { curatedMarketServices } from '../../data/curated-market-services',
import { realMarketServices } from '../../data/real-market-services',
import { new2025Services } from '../../data/new-2025-services',
import { marketValidatedServices } from '../../data/market-validated-services',
import { moreRealServices2025 } from '../../data/more-real-services-2025',
import { realOperationalServices } from '../../data/real-operational-services',
import { verified2025Additions } from '../../data/verified-2025-additions',
import { realServicesQ12025 } from '../../data/real-services-q1-2025'
import { realEnterpriseServices2025 } from '../../data/real-enterprise-services-2025',
import { realMarketAugmentations2025 } from '../../data/real-market-augmentations-2025',
import { verifiedRealServices2025Batch2 } from '../../data/verified-real-services-2025-batch2',
import { additionalLiveServices2025 } from '../../data/additional-live-services-2025',
import { real2025Q2Additions } from '../../data/real-2025-q2-additions',
import { augmentedServicesBatch3 } from '../../data/real-augmented-services-2025-batch3',
import { realServicesQ22025 } from '../../data/real-services-q2-2025',
import { realServicesQ32025 } from '../../data/real-services-q3-2025',
import { realQ4Services2025 } from '../../data/real-2025-q4-additions',
import { real2025Q4Additions } from '../../data/real-2025-q4-additions',
import { realMarketServicesExtended } from '../../data/real-market-services-extended',
import { real2026Q1Additions } from '../../data/real-2026-q1-additions',
import { added2026Q2Services } from '../../data/added-2026-q2-services',
import { real2026Q3Additions } from '../../data/real-2026-q3-additions',
import { real2026Q4Additions } from '../../data/real-2026-q4-additions',
import { real2026Q4NewServices } from '../../data/real-2026-q4-new-services',
import { real2027Q1Additions } from '../../data/real-2027-q1-additions',
import { real2027Q2Additions } from '../../data/real-2027-q2-additions',
import { real2028ServiceExpansions } from '../../data/real-2028-service-expansions',
import { real2029Q1Additions } from '../../data/real-2029-q1-additions',
import { real2029Q2Additions } from '../../data/real-2029-q2-additions',
import { real2029Q3Additions } from '../../data/real-2029-q3-additions',
import { real2029Q4Additions } from '../../data/real-2029-q4-additions',
import { real2030Q1Additions } from '../../data/real-2030-q1-additions',
import { real2031MicroSaasAdditions } from '../../data/real-2031-micro-saas-additions',
import { real2031ITServicesAdditions } from '../../data/real-2031-it-services-additions',
import { real2031AIServicesAdditions } from '../../data/real-2031-ai-services-additions',
import { real2030Q2Additions } from '../../data/real-2030-q2-additions',
import { real2027Q3Additions } from '../../data/real-2027-q3-additions',
import { professionalServices } from '../../data/professional-services',
import { real2032ServiceExpansions } from '../../data/real-2032-service-expansions',
import { real2035Q1Additions } from '../../data/real-2035-q1-additions',
import { real2035Q2AdditionsExtra } from '../../data/real-2035-q2-additions-extra',
import { real2025ExtraServices } from '../../data/real-2025-extra-services',
import { real2026Q4ExpansionsV2 } from '../../data/real-2026-q4-expansions-v2',
import { real2036ServiceExpansions } from '../../data/real-2036-service-expansions',
import { real2026Q4ExpansionsV3 } from '../../data/real-2026-q4-expansions-v3',
import { real2036InnovativeServices } from '../../data/real-2036-innovative-services',
import { real2036ITServices } from '../../data/real-2036-it-services',
import { real2036AIServices } from '../../data/real-2036-ai-services',

function toSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
}

const categories = [
  'AI & DataDeveloper Tools',
  'Cloud & FinOpsObservability',
  'Quality & MonitoringQuantum Computing',
  'Neuromorphic AIEdge Computing',
  'CybersecuritySupply Chain',
  'Financial ServicesHealthcare',
  'ManufacturingRetail',
  'EducationGovernment',
  'EnergyTransportation',
  'Blockchain & Web3IoT & Edge Computing',
  'Enterprise SolutionsInnovation & Research'
],

export default function ServicesIndexPage() {
  const all = (enhancedRealMicroSaasServices as unknown[])
    .concat(
      extraServices as unknown[],
      additionalEnhancedServices as unknown[],
      newlyAddedServices as unknown[],
      curatedMarketServices as unknown[],
      realMarketServices as unknown[],
      realMarketServicesExtended as unknown[],
      new2025Services as unknown[],
      marketValidatedServices as unknown[],
      moreRealServices2025 as unknown[],
      realOperationalServices as unknown[],
      verified2025Additions as unknown[],
      realServicesQ12025 as unknown[],
      realEnterpriseServices2025 as unknown[],
      realMarketAugmentations2025 as unknown[],
      verifiedRealServices2025Batch2 as unknown[],
      additionalLiveServices2025 as unknown[],
      real2025Q2Additions as unknown[],
      augmentedServicesBatch3 as unknown[],
      realServicesQ22025 as unknown[],
      realServicesQ32025 as unknown[],
      realQ4Services2025 as unknown[],
      real2025Q4Additions as unknown[],
      real2025Q4AugmentedBatch as unknown[],
      real2026Q1Additions as unknown[],
      added2026Q2Services as unknown[],
      real2026Q3Additions as unknown[],
      real2026Q4Additions as unknown[],
      real2026Q4NewServices as unknown[],
      real2027Q1Additions as unknown[],
      real2027Q2Additions as unknown[],
      real2027Q3Additions as unknown[],
      real2028ServiceExpansions as unknown[],
      innovativeMicroSaasServices as unknown[],
      innovativeITServices as unknown[],
      innovativeAIServices as unknown[],
      real2029Q1Additions as unknown[],
      real2029Q2Additions as unknown[],
      real2029Q3Additions as unknown[],
      real2029Q4Additions as unknown[],
      real2030Q1Additions as unknown[],
      real2031MicroSaasAdditions as unknown[],
      real2031ITServicesAdditions as unknown[],
      real2031AIServicesAdditions as unknown[],
      real2030Q2Additions as unknown[],
      real2027Q3Additions as unknown[],
      professionalServices as unknown[],
      real2032ServiceExpansions as unknown[],
      real2035Q1Additions as unknown[],
      real2035Q2AdditionsExtra as unknown[],
      real2025ExtraServices as unknown[],
      real2026Q4ExpansionsV2 as unknown[],
      real2026Q4ExpansionsV3 as unknown[],
      real2036InnovativeServices as unknown[],
      real2036ITServices as unknown[],
      real2036AIServices as unknown[]
    )
    .concat(real2036ServiceExpansions as unknown[]),
  const byCategory: Record<string, unknown[]> = {},
  for (const c of categories) byCategory[c] = [],
  // Normalize various category labels into our main buckets
  const categoryAliases: Record<string, string> = {
    'AI & Data': 'AI & DataAI & Machine Learning': 'AI & DataGenAI': 'AI & DataCloud & FinOps': 'Cloud & FinOpsCloud & Data': 'Cloud & FinOpsPlatform Engineering': 'Cloud & FinOpsObservability': 'ObservabilityObservability & Telemetry': 'ObservabilityQuality & Monitoring': 'Quality & MonitoringSecurity & Reliability': 'Quality & MonitoringSecurity & Compliance': 'Quality & MonitoringDeveloper Tools': 'Developer ToolsGrowth & Marketing': 'Developer Tools'
  },

  // Create byCategory mapping
  const byCategory: Record<string, unknown[]> = {},
  for (const c of categories) byCategory[c] = [],
  
  for (const s of all) {
    const service = s as { category?: string | string[] },
    const rawCatValue = service.category,
    const rawCat = Array.isArray(rawCatValue) ? (rawCatValue[0] || '') : (rawCatValue || ''),
    const mapped = categoryAliases[rawCat] || (categories.includes(rawCat) ? rawCat : 'Developer Tools'),
    byCategory[mapped].push(s),
  }

  const anchorMap: Record<string, string> = {
    'AI & Data': 'aiDeveloper Tools': 'developer-toolsCloud & FinOps': 'cloudObservability': 'observabilityQuality & Monitoring': 'quality'
  },

  const [shownCounts, setShownCounts] = React.useState<Record<string, number>>(() => Object.fromEntries(categories.map(c => [c, 12]))),
  const [searchQuery, setSearchQuery] = React.useState(''),





>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
