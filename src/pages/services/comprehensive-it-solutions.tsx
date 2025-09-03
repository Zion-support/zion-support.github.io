import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Server, 
  Cloud, 
  Shield, 
  Database, 
  Network, 
  Monitor, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Brain,
  Users,
  Zap,
  Globe,
  Lock,
  FileText,
  BarChart3,
  Cpu,
  HardDrive,
  Wifi,
  Router,
  Smartphone,
  Laptop,
  Desktop,
  Building2,
  DollarSign,
  Clock,
  Award,
  Target,
  Activity,
  AlertTriangle,
  Archive,
  Bell,
  BookOpen,
  Briefcase,
  Calendar,
  Camera,
  Code,
  Download,
  Edit,
  Eye,
  Filter,
  Headphones,
  Home,
  Image,
  Info,
  Link,
  Maximize,
  MessageSquare,
  Minimize,
  MousePointer,
  Palette,
  Play,
  Plus,
  RefreshCw,
  Save,
  Search,
  Share2,
  Sliders,
  Tag,
  ThumbsUp,
  Trash2,
  Upload,
  User,
  UserCheck,
  UserPlus,
  Users2,
  Video,
  Volume2,
  X,
  ZoomIn,
  ZoomOut
} from 'lucide-react';

const ComprehensiveITSolutions = () => {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const itServices = [
    {
      icon: Cloud,
      title: "Cloud Migration & Management",
      description: "Seamless migration to AWS, Azure, or Google Cloud with 99.9% uptime guarantee and cost optimization.",
      features: [
        "Multi-cloud strategy",
        "Cost optimization",
        "Security compliance",
        "Disaster recovery",
        "Auto-scaling",
        "24/7 monitoring"
      ],
      pricing: "From $2,999/month",
      marketPrice: "$4,999-15,999/month",
      savings: "Save up to 40%"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Compliance",
      description: "Enterprise-grade security solutions with SOC 2, HIPAA, and GDPR compliance for complete protection.",
      features: [
        "Threat detection",
        "Vulnerability assessment",
        "Compliance management",
        "Incident response",
        "Security training",
        "Penetration testing"
      ],
      pricing: "From $1,999/month",
      marketPrice: "$3,999-12,999/month",
      savings: "Save up to 50%"
    },
    {
      icon: Server,
      title: "Infrastructure Management",
      description: "Complete IT infrastructure management with proactive monitoring, maintenance, and optimization.",
      features: [
        "Server management",
        "Network monitoring",
        "Backup solutions",
        "Performance optimization",
        "Capacity planning",
        "Hardware lifecycle"
      ],
      pricing: "From $1,499/month",
      marketPrice: "$2,999-9,999/month",
      savings: "Save up to 50%"
    },
    {
      icon: Database,
      title: "Database Administration",
      description: "Expert database management with optimization, backup, and high availability solutions.",
      features: [
        "Performance tuning",
        "Backup & recovery",
        "High availability",
        "Security hardening",
        "Migration services",
        "Monitoring & alerts"
      ],
      pricing: "From $1,299/month",
      marketPrice: "$2,499-7,999/month",
      savings: "Save up to 48%"
    },
    {
      icon: Network,
      title: "Network Design & Security",
      description: "Advanced network architecture with SD-WAN, VPN, and enterprise security solutions.",
      features: [
        "Network design",
        "SD-WAN implementation",
        "VPN solutions",
        "Firewall management",
        "Load balancing",
        "Traffic optimization"
      ],
      pricing: "From $1,799/month",
      marketPrice: "$3,499-11,999/month",
      savings: "Save up to 49%"
    },
    {
      icon: Monitor,
      title: "IT Support & Helpdesk",
      description: "24/7 IT support with remote assistance, ticketing system, and proactive problem resolution.",
      features: [
        "24/7 support",
        "Remote assistance",
        "Ticketing system",
        "Knowledge base",
        "Proactive monitoring",
        "SLA guarantees"
      ],
      pricing: "From $999/month",
      marketPrice: "$1,999-6,999/month",
      savings: "Save up to 50%"
    }
  ];

  const solutions = [
    {
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business operations and technology stack.",
      icon: Zap,
      benefits: [
        "Process automation",
        "Legacy system modernization",
        "Cloud-first architecture",
        "Data-driven decisions",
        "Improved efficiency",
        "Cost reduction"
      ],
      results: ["40% efficiency gain", "60% cost reduction", "95% uptime", "3x faster deployment"]
    },
    {
      title: "DevOps & CI/CD",
      description: "Accelerate development with automated pipelines, containerization, and infrastructure as code.",
      icon: Code,
      benefits: [
        "Automated deployments",
        "Container orchestration",
        "Infrastructure as code",
        "Continuous monitoring",
        "Version control",
        "Quality gates"
      ],
      results: ["10x faster deployments", "90% fewer errors", "24/7 availability", "Automated scaling"]
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
      icon: BarChart3,
      benefits: [
        "Real-time analytics",
        "Predictive modeling",
        "Data visualization",
        "Business intelligence",
        "Machine learning",
        "Custom dashboards"
      ],
      results: ["50% better decisions", "Real-time insights", "Predictive analytics", "ROI tracking"]
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      icon: Activity,
      description: "HIPAA-compliant IT solutions for healthcare organizations",
      services: ["EMR integration", "Telemedicine platforms", "Data security", "Compliance management"]
    },
    {
      name: "Financial Services",
      icon: DollarSign,
      description: "Secure IT infrastructure for financial institutions",
      services: ["PCI compliance", "Fraud detection", "Risk management", "Regulatory reporting"]
    },
    {
      name: "Manufacturing",
      icon: Building2,
      description: "IoT and automation solutions for manufacturing",
      services: ["IoT integration", "Predictive maintenance", "Supply chain optimization", "Quality control"]
    },
    {
      name: "Education",
      icon: BookOpen,
      description: "Technology solutions for educational institutions",
      services: ["Learning management", "Student information systems", "Remote learning", "Campus networking"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Helmet>
        <title>Comprehensive IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Complete IT solutions including cloud migration, cybersecurity, infrastructure management, and digital transformation services." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, infrastructure management, DevOps, digital transformation" />
        <link rel="canonical" href={`${contactInfo.website}/services/comprehensive-it-solutions`} />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Comprehensive IT Solutions
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Complete IT services including cloud migration, cybersecurity, infrastructure management, 
              and digital transformation. Save up to 50% compared to market rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* IT Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
          <p className="text-xl text-gray-600">Professional IT solutions with significant cost savings</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Our Price:</span> {service.pricing}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Market Price:</span> {service.marketPrice}
                </p>
                <p className="text-sm text-green-600 font-semibold">
                  {service.savings}
                </p>
              </div>

              <div className="space-y-2">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get Started
                </a>
                <a
                  href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.title}`}
                  className="w-full py-2 px-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Solutions */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Strategic Solutions</h2>
            <p className="text-xl text-gray-600">Transform your business with our strategic IT solutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  {solution.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm text-green-600">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h2>
          <p className="text-xl text-gray-600">Tailored IT solutions for every industry</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <industry.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
              <p className="text-gray-600 mb-4">{industry.description}</p>
              <ul className="space-y-2">
                {industry.services.map((service, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses already saving up to 50% on IT costs while improving performance and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: {contactInfo.phone}
            </a>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center font-semibold"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email: {contactInfo.email}
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-100">
            <p>📍 {contactInfo.address}</p>
            <p>🌐 <a href={contactInfo.website} className="hover:text-white underline">{contactInfo.website}</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveITSolutions;