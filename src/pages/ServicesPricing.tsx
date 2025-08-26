import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Users, 
  BarChart3,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Lock,
  Cpu,
  Database,
  Smartphone,
  Globe,
  Code,
  FileImage,
  MessageCircle,
  Video,
  FileText,
  Heart,
  Server,
  FileText as FileTextIcon
} from 'lucide-react';

const SERVICE_CATEGORIES = [
  {
    name: "AI & Machine Learning",
    description: "Cutting-edge artificial intelligence solutions for modern businesses",
    icon: Brain,
    services: [
      {
        name: "AI Content Generator Pro",
        price: 29,
        period: "month",
        description: "Generate high-quality content, code, and creative assets with advanced AI models",
        features: [
          "Unlimited content generation",
          "50+ content templates",
          "Multi-language support",
          "SEO optimization",
          "Brand voice customization",
          "API access included"
        ],
        popular: false,
        link: "https://ziontechgroup.com/ai-content-generator"
      },
      {
        name: "AI Image & Video Editor",
        price: 19,
        period: "month",
        description: "Professional-grade AI-powered image and video editing tools",
        features: [
          "Background removal",
          "AI upscaling",
          "Style transfer",
          "Video enhancement",
          "Batch processing",
          "Cloud storage included"
        ],
        popular: false,
        link: "https://ziontechgroup.com/ai-media-editor"
      },
      {
        name: "AI Code Assistant",
        price: 39,
        period: "month",
        description: "Intelligent code completion and debugging for developers",
        features: [
          "50+ programming languages",
          "IDE integrations",
          "Code review AI",
          "Bug detection",
          "Performance optimization",
          "Team collaboration"
        ],
        popular: true,
        link: "https://ziontechgroup.com/ai-code-assistant"
      },
      {
        name: "AI Data Analytics Platform",
        price: 199,
        period: "month",
        description: "Transform raw data into actionable insights with AI-powered analytics",
        features: [
          "Predictive analytics",
          "Real-time dashboards",
          "Automated reporting",
          "Data visualization",
          "Custom ML models",
          "Enterprise security"
        ],
        popular: false,
        link: "https://ziontechgroup.com/ai-analytics"
      },
      {
        name: "AI Voice Cloning & Synthesis",
        price: 49,
        period: "month",
        description: "Professional voice cloning technology for content creation",
        features: [
          "High-quality voice synthesis",
          "Emotion control",
          "Multiple voice models",
          "Text-to-speech API",
          "Voice customization",
          "Commercial licensing"
        ],
        popular: false,
        link: "https://ziontechgroup.com/ai-voice-cloning"
      },
      {
        name: "AI Emotion Detection System",
        price: 69,
        period: "month",
        description: "Real-time emotion detection for customer service and UX optimization",
        features: [
          "Multi-modal analysis",
          "Real-time processing",
          "Sentiment analysis",
          "Customer insights",
          "API integration",
          "Custom training"
        ],
        popular: false,
        link: "https://ziontechgroup.com/ai-emotion-detection"
      }
    ]
  },
  {
    name: "Cybersecurity & Security",
    description: "Advanced security solutions to protect your digital assets",
    icon: Shield,
    services: [
      {
        name: "AI Threat Detection",
        price: 99,
        period: "month",
        description: "Real-time cybersecurity threat detection using advanced AI algorithms",
        features: [
          "24/7 monitoring",
          "Instant alerts",
          "Automated response",
          "Threat intelligence",
          "Incident reporting",
          "Compliance support"
        ],
        popular: false,
        link: "https://ziontechgroup.com/ai-threat-detection"
      },
      {
        name: "Zero Trust Security Suite",
        price: 499,
        period: "month",
        description: "Comprehensive zero-trust security implementation for enterprises",
        features: [
          "Identity verification",
          "Network segmentation",
          "Continuous monitoring",
          "Access control",
          "Audit logging",
          "Compliance frameworks"
        ],
        popular: false,
        link: "https://ziontechgroup.com/zero-trust-security"
      },
      {
        name: "Penetration Testing as a Service",
        price: 299,
        period: "month",
        description: "Regular security assessments and vulnerability scanning",
        features: [
          "Monthly assessments",
          "Detailed reports",
          "Remediation guidance",
          "Compliance testing",
          "Expert consultants",
          "Follow-up support"
        ],
        popular: false,
        link: "https://ziontechgroup.com/penetration-testing"
      },
      {
        name: "AI Behavioral Analysis Security",
        price: 399,
        period: "month",
        description: "Advanced security using AI to detect anomalous user behavior",
        features: [
          "Behavioral profiling",
          "Insider threat detection",
          "Anomaly detection",
          "Machine learning",
          "Real-time alerts",
          "Risk scoring"
        ],
        popular: false,
        link: "https://ziontechgroup.com/ai-behavioral-security"
      },
      {
        name: "Quantum-Safe Encryption",
        price: 599,
        period: "month",
        description: "Future-proof encryption resistant to quantum computing attacks",
        features: [
          "Post-quantum cryptography",
          "Long-term security",
          "Compliance ready",
          "API integration",
          "Key management",
          "Performance optimized"
        ],
        popular: false,
        link: "https://ziontechgroup.com/quantum-encryption"
      }
    ]
  },
  {
    name: "Cloud & Infrastructure",
    description: "Scalable cloud solutions and infrastructure management",
    icon: Cloud,
    services: [
      {
        name: "Multi-Cloud Management",
        price: 79,
        period: "month",
        description: "Unified management platform for AWS, Azure, Google Cloud, and hybrid environments",
        features: [
          "Multi-cloud support",
          "Cost optimization",
          "Security compliance",
          "Unified monitoring",
          "Automated scaling",
          "Resource management"
        ],
        popular: false,
        link: "https://ziontechgroup.com/multi-cloud-management"
      },
      {
        name: "DevOps Automation Platform",
        price: 49,
        period: "month",
        description: "Streamline CI/CD pipelines and infrastructure automation",
        features: [
          "CI/CD automation",
          "Infrastructure as code",
          "Automated testing",
          "Deployment management",
          "Monitoring & alerting",
          "Team collaboration"
        ],
        popular: false,
        link: "https://ziontechgroup.com/devops-automation"
      },
      {
        name: "Edge Computing Solutions",
        price: 149,
        period: "month",
        description: "Deploy and manage applications at the edge for improved performance",
        features: [
          "Global edge network",
          "Real-time processing",
          "IoT integration",
          "Low latency",
          "Scalable infrastructure",
          "Security built-in"
        ],
        popular: false,
        link: "https://ziontechgroup.com/edge-computing"
      },
      {
        name: "AI-Powered Load Balancing",
        price: 89,
        period: "month",
        description: "Intelligent traffic distribution using machine learning algorithms",
        features: [
          "AI traffic management",
          "Predictive scaling",
          "Auto-failover",
          "Performance optimization",
          "Real-time analytics",
          "Global distribution"
        ],
        popular: false,
        link: "https://ziontechgroup.com/ai-load-balancing"
      },
      {
        name: "Green Cloud Optimization",
        price: 59,
        period: "month",
        description: "AI-powered cloud optimization to reduce carbon footprint",
        features: [
          "Energy optimization",
          "Carbon reduction",
          "Cost savings",
          "Sustainable computing",
          "Resource allocation",
          "Environmental reporting"
        ],
        popular: false,
        link: "https://ziontechgroup.com/green-cloud"
      }
    ]
  },
  {
    name: "Business Intelligence",
    description: "Data-driven insights and business process automation",
    icon: BarChart3,
    services: [
      {
        name: "AI-Powered CRM",
        price: 39,
        period: "month",
        description: "Intelligent customer relationship management with predictive analytics",
        features: [
          "Lead scoring",
          "Sales forecasting",
          "Automated follow-ups",
          "Customer insights",
          "Integration APIs",
          "Mobile access"
        ],
        popular: false,
        link: "https://ziontechgroup.com/ai-crm"
      },
      {
        name: "Business Process Automation",
        price: 29,
        period: "month",
        description: "Automate repetitive tasks and workflows to improve efficiency",
        features: [
          "100+ app integrations",
          "Workflow automation",
          "Custom triggers",
          "Analytics dashboard",
          "Team collaboration",
          "Scalable workflows"
        ],
        popular: false,
        link: "https://ziontechgroup.com/business-automation"
      },
      {
        name: "AI Market Research",
        price: 199,
        period: "month",
        description: "Comprehensive market analysis and competitive intelligence",
        features: [
          "Real-time monitoring",
          "Competitor analysis",
          "Trend prediction",
          "Market reports",
          "Custom research",
          "Data visualization"
        ],
        popular: false,
        link: "https://ziontechgroup.com/ai-market-research"
      },
      {
        name: "AI Predictive Maintenance",
        price: 149,
        period: "month",
        description: "Predictive maintenance system using IoT sensors and AI",
        features: [
          "IoT sensor integration",
          "Failure prediction",
          "Maintenance scheduling",
          "Cost optimization",
          "Industry 4.0 ready",
          "Real-time monitoring"
        ],
        popular: false,
        link: "https://ziontechgroup.com/ai-predictive-maintenance"
      },
      {
        name: "AI Supply Chain Optimization",
        price: 179,
        period: "month",
        description: "Intelligent supply chain management with demand forecasting",
        features: [
          "Demand forecasting",
          "Route optimization",
          "Inventory management",
          "Real-time tracking",
          "Predictive analytics",
          "Supplier management"
        ],
        popular: false,
        link: "https://ziontechgroup.com/ai-supply-chain"
      }
    ]
  },
  {
    name: "Communication & Collaboration",
    description: "Enhanced communication tools and virtual collaboration platforms",
    icon: Users,
    services: [
      {
        name: "AI Meeting Assistant",
        price: 19,
        period: "month",
        description: "Intelligent meeting transcription and action item tracking",
        features: [
          "Real-time transcription",
          "AI summarization",
          "Action tracking",
          "Meeting analytics",
          "Integration APIs",
          "Multi-language support"
        ],
        popular: false,
        link: "https://ziontechgroup.com/ai-meeting-assistant"
      },
      {
        name: "Virtual Event Platform",
        price: 99,
        period: "month",
        description: "Host engaging virtual events with AI-powered features",
        features: [
          "Interactive features",
          "AI engagement tools",
          "Event analytics",
          "Multi-platform support",
          "Custom branding",
          "Attendee management"
        ],
        popular: false,
        link: "https://ziontechgroup.com/virtual-events"
      },
      {
        name: "AI Translation Service",
        price: 29,
        period: "month",
        description: "Real-time translation and localization for global communication",
        features: [
          "100+ languages",
          "Cultural adaptation",
          "Real-time translation",
          "Document translation",
          "API integration",
          "Quality assurance"
        ],
        popular: false,
        link: "https://ziontechgroup.com/ai-translation"
      },
      {
        name: "AI Real-Time Translation",
        price: 39,
        period: "month",
        description: "Live translation service for meetings and presentations",
        features: [
          "150+ languages",
          "Live transcription",
          "Cultural context",
          "Meeting integration",
          "Real-time processing",
          "Professional quality"
        ],
        popular: false,
        link: "https://ziontechgroup.com/ai-real-time-translation"
      },
      {
        name: "AI Video Production Suite",
        price: 79,
        period: "month",
        description: "Automated video creation and editing using AI",
        features: [
          "AI video creation",
          "Automated editing",
          "Animation generation",
          "Template library",
          "Brand customization",
          "Export options"
        ],
        popular: false,
        link: "https://ziontechgroup.com/ai-video-production"
      }
    ]
  },
  {
    name: "Emerging Technology",
    description: "Cutting-edge technology solutions for the future",
    icon: Zap,
    services: [
      {
        name: "Quantum Computing Simulator",
        price: 299,
        period: "month",
        description: "Access to quantum computing resources and simulation tools",
        features: [
          "Qiskit support",
          "Cirq integration",
          "Custom algorithms",
          "Research tools",
          "Optimization solvers",
          "Cryptography tools"
        ],
        popular: false,
        link: "https://ziontechgroup.com/quantum-computing"
      },
      {
        name: "Blockchain Development Platform",
        price: 79,
        period: "month",
        description: "Complete blockchain development suite with smart contract templates",
        features: [
          "Smart contracts",
          "DeFi protocols",
          "NFT marketplace",
          "Multi-chain support",
          "Development tools",
          "Deployment services"
        ],
        popular: false,
        link: "https://ziontechgroup.com/blockchain-platform"
      },
      {
        name: "AI Robotics Control Platform",
        price: 199,
        period: "month",
        description: "Cloud-based robotics control and automation platform",
        features: [
          "AI decision making",
          "Manufacturing automation",
          "Logistics optimization",
          "Autonomous systems",
          "Real-time control",
          "Scalable platform"
        ],
        popular: false,
        link: "https://ziontechgroup.com/ai-robotics"
      }
    ]
  },
  {
    name: "Specialized Tools",
    description: "Industry-specific solutions and specialized applications",
    icon: FileTextIcon,
    services: [
      {
        name: "AI Legal Document Review",
        price: 149,
        period: "month",
        description: "Automated legal document analysis and compliance checking",
        features: [
          "Contract analysis",
          "Risk assessment",
          "Compliance monitoring",
          "Legal research",
          "Document generation",
          "Regulatory updates"
        ],
        popular: false,
        link: "https://ziontechgroup.com/ai-legal-review"
      },
      {
        name: "AI Financial Advisor",
        price: 39,
        period: "month",
        description: "Personalized financial planning and investment recommendations",
        features: [
          "Portfolio optimization",
          "Risk assessment",
          "Financial planning",
          "Investment advice",
          "Goal tracking",
          "Market analysis"
        ],
        popular: false,
        link: "https://ziontechgroup.com/ai-financial-advisor"
      },
      {
        name: "AI Healthcare Assistant",
        price: 29,
        period: "month",
        description: "Intelligent health monitoring and wellness recommendations",
        features: [
          "Health tracking",
          "Symptom analysis",
          "Wellness coaching",
          "HIPAA compliant",
          "Integration APIs",
          "Mobile app"
        ],
        popular: false,
        link: "https://ziontechgroup.com/ai-healthcare"
      },
      {
        name: "AI Legal Contract Generator",
        price: 89,
        period: "month",
        description: "Intelligent contract creation and legal compliance checking",
        features: [
          "Contract generation",
          "Legal compliance",
          "Risk analysis",
          "Regulatory compliance",
          "Template library",
          "Expert review"
        ],
        popular: false,
        link: "https://ziontechgroup.com/ai-legal-contracts"
      },
      {
        name: "AI Personalized Learning Platform",
        price: 49,
        period: "month",
        description: "Adaptive learning system with AI tutors and progress tracking",
        features: [
          "Personalized content",
          "AI tutors",
          "Adaptive education",
          "Progress tracking",
          "Learning analytics",
          "Multi-subject support"
        ],
        popular: false,
        link: "https://ziontechgroup.com/ai-learning-platform"
      }
    ]
  }
];

const PricingCard = ({ service, category }: { service: any; category: string }) => (
  <div className={`bg-white dark:bg-zion-slate-dark rounded-xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
    service.popular ? 'border-zion-purple shadow-zion-purple/20' : 'border-zion-slate-light'
  }`}>
    {service.popular && (
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white text-center py-2 rounded-t-xl font-semibold">
        ⭐ Most Popular
      </div>
    )}
    
    <div className="p-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-zion-slate-dark dark:text-white mb-2">
          {service.name}
        </h3>
        <p className="text-zion-slate/70 dark:text-zion-cyan/70 text-sm mb-4">
          {service.description}
        </p>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold text-zion-purple">${service.price}</span>
          <span className="text-zion-slate/70 dark:text-zion-cyan/70 ml-1">/{service.period}</span>
        </div>
      </div>
      
      <ul className="space-y-3 mb-6">
        {service.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-zion-slate dark:text-zion-cyan text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="space-y-3">
        <a 
          href={service.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-200 hover:shadow-lg"
        >
          Learn More
          <ArrowRight className="h-4 w-4 ml-2" />
        </a>
        <Link 
          to="/request-quote"
          className="w-full border-2 border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-200"
        >
          Get Quote
        </Link>
      </div>
    </div>
  </div>
);

export default function ServicesPricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-purple-dark">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan bg-clip-text text-transparent">
            Complete Service Pricing
          </h1>
          <p className="text-xl text-zion-cyan/80 max-w-4xl mx-auto mb-8">
            Transparent pricing for all our AI-powered micro SAAS solutions. 
            Choose the perfect plan for your business needs with flexible pricing and no hidden fees.
          </p>
          
          <div className="bg-zion-purple/10 backdrop-blur-sm rounded-lg p-6 border border-zion-purple/20 max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-zion-cyan font-semibold mb-2">✓ No Setup Fees</h3>
                <p className="text-zion-cyan/70 text-sm">Start immediately with zero upfront costs</p>
              </div>
              <div>
                <h3 className="text-zion-cyan font-semibold mb-2">✓ 14-Day Free Trial</h3>
                <p className="text-zion-cyan/70 text-sm">Test any service before committing</p>
              </div>
              <div>
                <h3 className="text-zion-cyan font-semibold mb-2">✓ Cancel Anytime</h3>
                <p className="text-zion-cyan/70 text-sm">No long-term contracts required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Categories */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          {SERVICE_CATEGORIES.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-4">
                  <category.icon className="h-8 w-8 text-zion-cyan" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {category.name}
                </h2>
                <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <PricingCard 
                    key={serviceIndex} 
                    service={service} 
                    category={category.name}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-16 px-4 md:px-8 bg-zion-purple/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Enterprise Solutions
          </h2>
          <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto mb-8">
            Need custom solutions or enterprise-grade features? Our team will create a tailored package 
            that perfectly fits your organization's requirements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-6 border border-zion-purple/30">
              <Server className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Custom Development</h3>
              <p className="text-zion-cyan/70">Tailored AI solutions built specifically for your business</p>
            </div>
            
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-6 border border-zion-purple/30">
              <Shield className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Enterprise Security</h3>
              <p className="text-zion-cyan/70">Advanced security features and compliance certifications</p>
            </div>
            
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-6 border border-zion-purple/30">
              <Users className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Dedicated Support</h3>
              <p className="text-zion-cyan/70">24/7 dedicated technical account management</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-quote">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white shadow-lg shadow-zion-purple/25 px-8 py-3 text-lg">
                Get Enterprise Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 backdrop-blur-sm px-8 py-3 text-lg">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto mb-8">
            Our AI experts are ready to help you choose the perfect services and get you up and running quickly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-6 border border-zion-purple/30">
              <Phone className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan-light font-semibold">
                +1 (302) 464-0950
              </a>
            </div>
            
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-6 border border-zion-purple/30">
              <Mail className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light font-semibold">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-6 border border-zion-purple/30">
              <MapPin className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-zion-cyan font-semibold text-sm">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10 backdrop-blur-sm px-8 py-3 text-lg">
                <ExternalLink className="h-5 w-5 mr-2" />
                Visit Website
              </Button>
            </a>
            <Link to="/services">
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 backdrop-blur-sm px-8 py-3 text-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}