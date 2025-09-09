import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Shield, Cloud, Brain, Database, Zap, Lock, BarChart3, Users, Code, Rocket, Target } from "lucide-react";
import { SEO } from "@/components/SEO";

const COMPREHENSIVE_SERVICES = {
  "AI & Machine Learning": {
    icon: Brain,
    description: "Cutting-edge artificial intelligence solutions that transform business operations",
    services: [
      {
        name: "AI Content Generator Pro",
        price: "$29/month",
        description: "Generate high-quality content, code, and creative assets with advanced AI models",
        features: ["Text Generation", "Code Generation", "Creative Writing", "Multi-language Support"],
        benefits: ["Save 80% time on content creation", "Improve content quality", "Scale content production"]
      },
      {
        name: "AI Image & Video Editor",
        price: "$19/month",
        description: "Professional-grade AI-powered image and video editing tools",
        features: ["Background Removal", "Quality Enhancement", "Style Transfer", "Batch Processing"],
        benefits: ["Professional results in minutes", "No design skills required", "Consistent brand styling"]
      },
      {
        name: "AI Code Assistant",
        price: "$39/month",
        description: "Intelligent code completion, debugging, and optimization",
        features: ["50+ Language Support", "IDE Integration", "Code Review", "Auto-fix Suggestions"],
        benefits: ["Increase coding speed by 3x", "Reduce bugs by 60%", "Learn best practices"]
      },
      {
        name: "AI Data Analytics Platform",
        price: "$199/month",
        description: "Transform raw data into actionable insights with AI-powered analytics",
        features: ["Predictive Analytics", "Data Visualization", "Automated Reporting", "Real-time Insights"],
        benefits: ["Make data-driven decisions", "Identify trends early", "Automate reporting processes"]
      }
    ]
  },
  "Emerging Technologies": {
    icon: Rocket,
    description: "Next-generation technologies that define the future of business",
    services: [
      {
        name: "Blockchain & Web3 Development",
        price: "$89/month",
        description: "Custom blockchain solutions, smart contracts, and DeFi applications",
        features: ["Smart Contracts", "DeFi Applications", "NFT Development", "Web3 Integration"],
        benefits: ["Future-proof your business", "Reduce transaction costs", "Enable new business models"]
      },
      {
        name: "IoT Platform & Analytics",
        price: "$69/month",
        description: "End-to-end IoT solutions for device management and data collection",
        features: ["Device Management", "Real-time Analytics", "Predictive Maintenance", "Scalable Infrastructure"],
        benefits: ["Monitor assets remotely", "Predict maintenance needs", "Optimize operations"]
      },
      {
        name: "Quantum Computing Solutions",
        price: "$299/month",
        description: "Quantum algorithm development and optimization for research and enterprise",
        features: ["Algorithm Development", "Optimization Problems", "Research Support", "Enterprise Applications"],
        benefits: ["Solve complex problems", "Stay ahead of competition", "Research breakthrough potential"]
      }
    ]
  },
  "Industry Solutions": {
    icon: Target,
    description: "Specialized solutions designed for specific industry needs",
    services: [
      {
        name: "Healthcare AI Platform",
        price: "$199/month",
        description: "HIPAA-compliant AI solutions for medical imaging and patient data analysis",
        features: ["Medical Imaging AI", "Patient Data Analysis", "Drug Discovery", "Clinical Decision Support"],
        benefits: ["Improve diagnostic accuracy", "Reduce healthcare costs", "Enhance patient outcomes"]
      },
      {
        name: "FinTech AI Platform",
        price: "$149/month",
        description: "AI-powered financial services for fraud detection and risk assessment",
        features: ["Fraud Detection", "Risk Assessment", "Algorithmic Trading", "Regulatory Compliance"],
        benefits: ["Reduce fraud losses", "Improve risk management", "Ensure compliance"]
      },
      {
        name: "AI-Powered Education Platform",
        price: "$79/month",
        description: "Personalized learning experiences with adaptive curriculum and analytics",
        features: ["Personalized Learning", "Adaptive Curriculum", "Student Analytics", "Automated Assessment"],
        benefits: ["Improve learning outcomes", "Personalize education", "Track student progress"]
      }
    ]
  },
  "Advanced AI Services": {
    icon: Brain,
    description: "Specialized AI solutions for complex business challenges",
    services: [
      {
        name: "Computer Vision Solutions",
        price: "$129/month",
        description: "Advanced image and video analysis for automation and quality control",
        features: ["Object Detection", "Facial Recognition", "Quality Control", "Process Automation"],
        benefits: ["Automate visual inspections", "Improve quality control", "Reduce manual work"]
      },
      {
        name: "Natural Language Processing Platform",
        price: "$89/month",
        description: "Advanced NLP solutions for sentiment analysis and language processing",
        features: ["Sentiment Analysis", "Language Translation", "Chatbots", "Document Processing"],
        benefits: ["Understand customer sentiment", "Automate customer service", "Process documents faster"]
      }
    ]
  },
  "Digital Transformation": {
    icon: Code,
    description: "Modernize your business with cutting-edge digital solutions",
    services: [
      {
        name: "Legacy System Modernization",
        price: "$399/month",
        description: "Transform outdated systems into modern, cloud-native applications",
        features: ["Microservices Architecture", "Cloud-Native Design", "API-First Approach", "Scalable Infrastructure"],
        benefits: ["Reduce maintenance costs", "Improve system performance", "Enable rapid scaling"]
      },
      {
        name: "API Management & Integration",
        price: "$69/month",
        description: "Comprehensive API development and integration services",
        features: ["API Development", "System Integration", "Data Flow Management", "Security & Monitoring"],
        benefits: ["Connect systems seamlessly", "Improve data flow", "Enhance security"]
      }
    ]
  },
  "Compliance & Security": {
    icon: Shield,
    description: "Ensure your business meets all regulatory and security requirements",
    services: [
      {
        name: "GDPR & Data Privacy Compliance",
        price: "$179/month",
        description: "Complete GDPR compliance solutions with automated monitoring",
        features: ["Data Mapping", "Privacy Impact Assessment", "Compliance Monitoring", "Automated Reporting"],
        benefits: ["Avoid costly fines", "Build customer trust", "Automate compliance"]
      },
      {
        name: "SOC2 Type II Compliance",
        price: "$299/month",
        description: "SOC2 Type II certification with continuous compliance management",
        features: ["Security Controls", "Continuous Monitoring", "Compliance Management", "Audit Support"],
        benefits: ["Meet customer requirements", "Improve security posture", "Streamline audits"]
      }
    ]
  },
  "Performance & Monitoring": {
    icon: Zap,
    description: "Optimize your applications and infrastructure performance",
    services: [
      {
        name: "Application Performance Monitoring",
        price: "$49/month",
        description: "Real-time monitoring and optimization for web and mobile applications",
        features: ["Real-time Monitoring", "Error Tracking", "Performance Optimization", "User Experience Metrics"],
        benefits: ["Improve user experience", "Reduce downtime", "Optimize performance"]
      },
      {
        name: "Full-Stack Observability",
        price: "$79/month",
        description: "Comprehensive observability with distributed tracing and intelligent alerting",
        features: ["Distributed Tracing", "Metrics Collection", "Intelligent Alerting", "Root Cause Analysis"],
        benefits: ["Faster incident resolution", "Better system understanding", "Proactive monitoring"]
      }
    ]
  },
  "Data Services": {
    icon: Database,
    description: "Transform your data into actionable business intelligence",
    services: [
      {
        name: "Data Engineering Platform",
        price: "$159/month",
        description: "End-to-end data engineering solutions for modern data infrastructure",
        features: ["ETL Pipelines", "Data Lakes", "Real-time Streaming", "Data Quality Management"],
        benefits: ["Build scalable data infrastructure", "Enable real-time analytics", "Improve data quality"]
      },
      {
        name: "Real-Time Analytics Platform",
        price: "$119/month",
        description: "Real-time data processing and streaming analytics for instant insights",
        features: ["Real-time Processing", "Streaming Analytics", "Instant Insights", "Time-sensitive Analysis"],
        benefits: ["Make faster decisions", "Respond to changes immediately", "Optimize operations in real-time"]
      }
    ]
  }
};

export default function ComprehensiveServices() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Comprehensive IT & AI Services - Zion Tech Group" 
        description="Explore our complete portfolio of cutting-edge technology services including AI, blockchain, IoT, and industry-specific solutions. Competitive pricing starting from $19/month." 
        keywords="AI services, blockchain development, IoT solutions, healthcare AI, fintech, compliance services, Zion Tech Group" 
        url="https://ziontechgroup.com/comprehensive-services"
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Comprehensive Technology Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover our complete portfolio of cutting-edge solutions across 20+ categories. 
            From AI-powered applications to emerging technologies, we provide enterprise-grade services 
            with competitive pricing and proven results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-zion-blue hover:bg-zinc-100 px-8 py-3 text-lg">
                Get Free Consultation
              </Button>
            </Link>
            <a href="tel:+13024640950" className="inline-flex items-center gap-2 bg-zion-cyan text-white px-8 py-3 rounded-lg hover:bg-zion-cyan-dark transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: +1 302 464 0950
            </a>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="container mx-auto px-4 py-16">
        {Object.entries(COMPREHENSIVE_SERVICES).map(([category, categoryData]) => (
          <div key={category} className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-blue to-zion-purple rounded-full mb-6">
                <categoryData.icon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-zion-blue mb-4">{category}</h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">{categoryData.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryData.services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-zion-blue mb-2">{service.name}</h3>
                    <div className="text-2xl font-bold text-zion-purple mb-2">{service.price}</div>
                    <p className="text-zion-slate-light">{service.description}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-zion-blue mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <span className="w-2 h-2 bg-zion-cyan rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-zion-blue mb-2">Business Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pricing Comparison */}
      <div className="bg-gradient-to-r from-zinc-50 to-zinc-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Competitive Pricing</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our services are priced competitively to provide maximum value for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-zion-blue mb-4">Starter</h3>
              <div className="text-4xl font-bold text-zion-purple mb-2">$19</div>
              <div className="text-zion-slate-light mb-6">per month</div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-zion-cyan rounded-full"></span>
                  Basic AI Services
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-zion-cyan rounded-full"></span>
                  Email Support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-zion-cyan rounded-full"></span>
                  Standard Features
                </li>
              </ul>
              <Link to="/contact">
                <Button className="w-full bg-zion-blue hover:bg-zion-blue-dark text-white">
                  Choose Starter
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 text-center border-2 border-zion-purple relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-zion-blue mb-4">Professional</h3>
              <div className="text-4xl font-bold text-zion-purple mb-2">$89</div>
              <div className="text-zion-slate-light mb-6">per month</div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-zion-purple rounded-full"></span>
                  Advanced AI Services
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-zion-purple rounded-full"></span>
                  Priority Support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-zion-purple rounded-full"></span>
                  Custom Integrations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-zion-purple rounded-full"></span>
                  Advanced Analytics
                </li>
              </ul>
              <Link to="/contact">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  Choose Professional
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-zion-blue mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-zion-purple mb-2">$299</div>
              <div className="text-zion-slate-light mb-6">per month</div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Full Service Suite
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  24/7 Dedicated Support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Custom Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  SLA Guarantees
                </li>
              </ul>
              <Link to="/contact">
                <Button className="w-full bg-zion-blue hover:bg-zion-blue-dark text-white">
                  Choose Enterprise
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-blue-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you choose the right services and implement them successfully. 
            Get in touch today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-zion-blue hover:bg-zinc-100 px-8 py-3 text-lg">
                Schedule Consultation
              </Button>
            </Link>
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center gap-2 bg-zion-cyan text-white px-8 py-3 rounded-lg hover:bg-zion-cyan-dark transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}