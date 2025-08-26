import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    // Core AI & Technology Services
    {
      title: "AI Business Intelligence Suite",
      description: "Advanced AI-powered business intelligence platform that transforms raw data into actionable insights, predictive analytics, and automated reporting for data-driven decision making.",
      icon: "🧠",
      features: ["AI-powered data analysis", "Predictive analytics", "Real-time dashboards", "Natural language queries", "Multi-source integration"],
      path: "/services/ai-business-intelligence",
      pricing: "$599 - $2,500/month",
      benefits: ["70% faster decision-making", "85% improved forecasting accuracy", "Data-driven culture", "Hidden opportunity identification"]
    },
    {
      title: "AI Customer Experience Platform",
      description: "Comprehensive AI-powered customer experience platform that personalizes customer interactions, predicts customer needs, and optimizes customer journeys across all touchpoints.",
      icon: "🎯",
      features: ["Customer journey mapping", "Real-time personalization", "Predictive behavior analysis", "Omnichannel orchestration", "Sentiment analysis"],
      path: "/services/ai-customer-experience",
      pricing: "$449 - $1,800/month",
      benefits: ["45% customer satisfaction increase", "60% customer retention improvement", "35% service cost reduction", "50% lifetime value boost"]
    },
    {
      title: "AI Supply Chain Optimizer Pro",
      description: "Advanced AI-powered supply chain optimization platform that predicts demand, optimizes inventory, reduces costs, and improves delivery efficiency through machine learning algorithms.",
      icon: "🚚",
      features: ["AI demand forecasting", "Dynamic inventory optimization", "Route optimization", "Supplier performance tracking", "Real-time monitoring"],
      path: "/services/ai-supply-chain",
      pricing: "$799 - $3,000/month",
      benefits: ["30% inventory cost reduction", "40% delivery time improvement", "50% supply chain efficiency", "25% logistics cost reduction"]
    },

    // Emerging Technology Solutions
    {
      title: "Blockchain & Web3 Enterprise Platform",
      description: "Comprehensive blockchain and Web3 platform that enables enterprises to build decentralized applications, implement smart contracts, and leverage blockchain technology for business transformation.",
      icon: "⛓️",
      features: ["Multi-blockchain support", "Smart contract development", "dApp framework", "Enterprise security", "Interoperability"],
      path: "/services/blockchain-web3",
      pricing: "$1,299 - $5,000/month",
      benefits: ["60% transaction cost reduction", "90% transparency improvement", "New business models", "80% fraud reduction"]
    },
    {
      title: "Quantum Computing Solutions Platform",
      description: "Advanced quantum computing platform that provides quantum algorithms, quantum machine learning, and quantum optimization solutions for complex computational problems.",
      icon: "⚛️",
      features: ["Quantum algorithm development", "Quantum ML models", "Optimization algorithms", "Quantum simulation", "Hybrid computing"],
      path: "/services/quantum-computing",
      pricing: "$2,499 - $10,000/month",
      benefits: ["1000x faster problem solving", "Drug discovery breakthroughs", "Logistics optimization", "Financial modeling revolution"]
    },
    {
      title: "Edge Computing & IoT Platform",
      description: "Comprehensive edge computing and IoT platform that processes data at the edge, reduces latency, improves performance, and enables real-time decision making.",
      icon: "🌐",
      features: ["Edge computing infrastructure", "IoT device management", "Real-time processing", "Edge AI/ML", "Low-latency communication"],
      path: "/services/edge-computing-iot",
      pricing: "$799 - $3,000/month",
      benefits: ["90% latency reduction", "80% response time improvement", "70% bandwidth cost reduction", "Real-time decision making"]
    },

    // IT Infrastructure & Cloud Services
    {
      title: "Cloud Infrastructure & Migration Services",
      description: "Comprehensive cloud infrastructure and migration services that help businesses transition to the cloud, optimize cloud performance, and manage multi-cloud environments.",
      icon: "☁️",
      features: ["Cloud strategy planning", "Multi-cloud migration", "Cost optimization", "Performance monitoring", "24/7 management"],
      path: "/services/cloud-infrastructure",
      pricing: "$2,499 - $10,000/month",
      benefits: ["40% infrastructure cost reduction", "300% scalability improvement", "Enhanced disaster recovery", "50% operational efficiency"]
    },
    {
      title: "Cybersecurity & Information Security Services",
      description: "Advanced cybersecurity and information security services that provide comprehensive protection against cyber threats and ensure compliance with industry regulations.",
      icon: "🔒",
      features: ["Security assessment", "Threat detection", "Vulnerability management", "Compliance monitoring", "24/7 security"],
      path: "/services/cybersecurity",
      pricing: "$1,899 - $7,500/month",
      benefits: ["90% security incident reduction", "95% threat detection improvement", "Regulatory compliance", "Enhanced customer trust"]
    },
    {
      title: "DevOps & CI/CD Pipeline Services",
      description: "Comprehensive DevOps and CI/CD pipeline services that automate software development processes and enable continuous delivery for faster time-to-market.",
      icon: "⚡",
      features: ["DevOps strategy", "CI/CD pipeline design", "Infrastructure as Code", "Automated testing", "Performance optimization"],
      path: "/services/devops-cicd",
      pricing: "$1,599 - $6,000/month",
      benefits: ["80% deployment time reduction", "60% code quality improvement", "100% development velocity increase", "40% operational cost reduction"]
    },

    // Data & Analytics Services
    {
      title: "Data Management & Analytics Services",
      description: "Comprehensive data management and analytics services that help businesses collect, process, analyze, and visualize data for informed decision making.",
      icon: "📊",
      features: ["Data strategy", "Data integration", "Quality governance", "Advanced analytics", "Business intelligence"],
      path: "/services/data-analytics",
      pricing: "$1,299 - $5,000/month",
      benefits: ["70% decision-making improvement", "45% operational efficiency", "New business opportunities", "30% operational cost reduction"]
    },
    {
      title: "AI Marketing & Advertising Platform",
      description: "Advanced AI-powered marketing platform that optimizes campaigns, personalizes content, predicts customer behavior, and automates marketing workflows.",
      icon: "📈",
      features: ["Campaign optimization", "Content personalization", "Behavior prediction", "Marketing automation", "ROI tracking"],
      path: "/services/ai-marketing",
      pricing: "$549 - $2,000/month",
      benefits: ["60% marketing ROI increase", "45% customer engagement improvement", "30% marketing cost reduction", "80% task automation"]
    },

    // Industry-Specific Solutions
    {
      title: "AI Healthcare Solutions Suite",
      description: "Comprehensive AI-powered healthcare platform that provides diagnostic assistance, patient monitoring, medical image analysis, and healthcare workflow optimization.",
      icon: "🏥",
      features: ["AI diagnostic assistance", "Medical image analysis", "Patient monitoring", "Workflow optimization", "Compliance features"],
      path: "/services/ai-healthcare",
      pricing: "$899 - $4,000/month",
      benefits: ["30% diagnostic accuracy improvement", "50% medical error reduction", "40% workflow optimization", "35% patient outcome enhancement"]
    },
    {
      title: "AI Education & Learning Platform",
      description: "Advanced AI-powered education platform that personalizes learning experiences, provides intelligent tutoring, and automates assessment for better learning outcomes.",
      icon: "🎓",
      features: ["Personalized learning", "Intelligent tutoring", "Automated assessment", "Content recommendation", "Progress tracking"],
      path: "/services/ai-education",
      pricing: "$399 - $1,500/month",
      benefits: ["40% learning outcome improvement", "30% learning time reduction", "Personalized education", "70% administrative task automation"]
    },
    {
      title: "AI Manufacturing & Industrial IoT",
      description: "Advanced AI-powered manufacturing platform that optimizes production processes, predicts equipment failures, and enables smart manufacturing through IoT integration.",
      icon: "🏭",
      features: ["Production optimization", "Predictive maintenance", "Quality control", "Supply chain optimization", "Energy efficiency"],
      path: "/services/ai-manufacturing",
      pricing: "$899 - $3,500/month",
      benefits: ["35% production efficiency increase", "50% equipment downtime reduction", "40% product quality improvement", "25% energy cost reduction"]
    },

    // Specialized Technology Services
    {
      title: "5G & Advanced Connectivity Platform",
      description: "Advanced 5G and connectivity platform that provides ultra-fast wireless communication, low-latency networking, and advanced connectivity solutions.",
      icon: "📡",
      features: ["5G infrastructure", "Ultra-low latency", "Massive IoT connectivity", "Network slicing", "Edge integration"],
      path: "/services/5g-connectivity",
      pricing: "$999 - $4,000/month",
      benefits: ["100x network speed increase", "90% latency reduction", "Millions of IoT devices", "New use case enablement"]
    },
    {
      title: "AR/VR Enterprise Platform",
      description: "Comprehensive AR/VR platform that provides immersive experiences, training simulations, virtual collaboration, and AR/VR solutions for enterprise applications.",
      icon: "🥽",
      features: ["Content creation tools", "Training simulations", "Virtual collaboration", "3D visualization", "Spatial computing"],
      path: "/services/ar-vr-platform",
      pricing: "$899 - $3,500/month",
      benefits: ["70% training effectiveness improvement", "60% training cost reduction", "Remote collaboration", "80% customer engagement enhancement"]
    },
    {
      title: "Robotics & Automation Platform",
      description: "Advanced robotics and automation platform that provides intelligent automation, robotic process automation (RPA), and autonomous systems for various industries.",
      icon: "🤖",
      features: ["RPA implementation", "Intelligent automation", "Autonomous systems", "Computer vision", "Predictive maintenance"],
      path: "/services/robotics-automation",
      pricing: "$1,199 - $5,000/month",
      benefits: ["50% productivity increase", "40% operational cost reduction", "90% accuracy improvement", "24/7 operation enablement"]
    },

    // Business Process & Management Services
    {
      title: "AI HR & Talent Management Suite",
      description: "Comprehensive AI-powered HR platform that streamlines recruitment, optimizes employee performance, predicts turnover, and automates HR processes.",
      icon: "👥",
      features: ["AI candidate screening", "Predictive turnover analysis", "Performance optimization", "Employee engagement", "HR automation"],
      path: "/services/ai-hr-talent",
      pricing: "$499 - $1,800/month",
      benefits: ["65% hiring time reduction", "50% candidate quality improvement", "40% employee retention increase", "45% HR cost reduction"]
    },
    {
      title: "AI Legal Technology & Compliance",
      description: "Advanced AI-powered legal technology platform that automates contract analysis, provides legal research assistance, and monitors compliance.",
      icon: "⚖️",
      features: ["Contract analysis", "Legal research automation", "Compliance monitoring", "Document generation", "Risk assessment"],
      path: "/services/ai-legal-technology",
      pricing: "$749 - $3,000/month",
      benefits: ["70% legal research time reduction", "80% contract review accuracy", "60% legal task automation", "90% compliance enhancement"]
    },
    {
      title: "AI Real Estate & Property Management",
      description: "Comprehensive AI-powered real estate platform that optimizes property management, predicts market trends, and automates tenant screening.",
      icon: "🏢",
      features: ["Market analysis", "Property valuation", "Tenant screening", "Maintenance prediction", "Investment analysis"],
      path: "/services/ai-real-estate",
      pricing: "$399 - $1,500/month",
      benefits: ["25% property valuation improvement", "30% vacancy rate reduction", "20% rental pricing optimization", "70% task automation"]
    },

    // Sustainability & Green Technology
    {
      title: "Green Technology & Sustainability Platform",
      description: "Comprehensive green technology and sustainability platform that provides renewable energy solutions, carbon footprint tracking, and environmental monitoring.",
      icon: "🌱",
      features: ["Carbon footprint tracking", "Renewable energy optimization", "Environmental monitoring", "Sustainability reporting", "Green supply chain"],
      path: "/services/green-technology",
      pricing: "$699 - $2,500/month",
      benefits: ["40% carbon footprint reduction", "30% energy cost reduction", "Sustainability rating improvement", "Enhanced brand reputation"]
    },

    // Network & Infrastructure Services
    {
      title: "Network Infrastructure & Management Services",
      description: "Comprehensive network infrastructure and management services that design, implement, and maintain reliable, secure, and high-performance network solutions.",
      icon: "🌐",
      features: ["Network design", "Infrastructure implementation", "Security monitoring", "Performance optimization", "24/7 monitoring"],
      path: "/services/network-infrastructure",
      pricing: "$999 - $4,000/month",
      benefits: ["95% network reliability improvement", "80% downtime reduction", "Enhanced security", "35% operational cost reduction"]
    },
    {
      title: "IT Support & Help Desk Services",
      description: "Comprehensive IT support and help desk services that provide reliable technical assistance, problem resolution, and ongoing support for businesses.",
      icon: "🛠️",
      features: ["24/7 technical support", "Help desk ticketing", "Remote support", "Proactive monitoring", "User training"],
      path: "/services/it-support",
      pricing: "$799 - $3,000/month",
      benefits: ["60% productivity improvement", "45% support cost reduction", "Enhanced user satisfaction", "Minimized system downtime"]
    },

    // Consulting & Strategic Services
    {
      title: "IT Consulting & Strategic Planning Services",
      description: "Strategic IT consulting and planning services that help businesses align technology with business objectives and create roadmaps for digital transformation.",
      icon: "💡",
      features: ["Technology strategy", "Digital transformation", "IT investment optimization", "Vendor management", "Risk assessment"],
      path: "/services/it-consulting",
      pricing: "$299 - $500/hour",
      benefits: ["Technology-business alignment", "40% IT investment optimization", "Risk reduction", "Strategic competitive advantages"]
    },
    {
      title: "Software Development & Custom Solutions",
      description: "Comprehensive software development and custom solution services that create tailored applications and integrate existing systems for specific business needs.",
      icon: "💻",
      features: ["Custom development", "System integration", "API development", "Database design", "UI/UX design"],
      path: "/services/software-development",
      pricing: "$1,999 - $8,000/month",
      benefits: ["Tailored business solutions", "50% operational efficiency", "New business capabilities", "70% process automation"]
    },
    {
      title: "IT Project Management & Implementation Services",
      description: "Professional IT project management and implementation services that ensure successful delivery of technology projects on time and within budget.",
      icon: "📋",
      features: ["Project planning", "Resource management", "Risk assessment", "Timeline management", "Quality assurance"],
      path: "/services/it-project-management",
      pricing: "$1,499 - $6,000/month",
      benefits: ["90% project success rate", "70% risk reduction", "On-time delivery", "Stakeholder satisfaction"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Comprehensive Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Cutting-edge technology solutions designed to transform your business and drive innovation across all industries. 
              From AI-powered platforms to emerging technologies, we deliver real value with measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Pricing:</h4>
                  <p className="text-sm text-gray-300">{service.pricing}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-yellow-400 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.path}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  Learn More
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with Cutting-Edge Technology?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our innovative services can help drive your success and give you a competitive advantage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Us Today
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Call: +1 302 464 0950
            </a>
          </div>
          <div className="mb-6">
            <Link
              to="/services-showcase"
              className="inline-flex items-center px-6 py-2 text-blue-400 hover:text-blue-300 border border-blue-400 rounded-lg transition-all duration-300"
            >
              View Complete Services Portfolio →
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="mt-2 text-blue-300">Visit our website: <a href="https://ziontechgroup.com" className="underline hover:text-blue-200">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
