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
  ];

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
  ];

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
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
  );
};

export default Services;