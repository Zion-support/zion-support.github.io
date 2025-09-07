import React from 'react';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Wrench, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Globe,
  Lock,
  Monitor,
  Smartphone,
  Laptop,
  Headphones,
  Settings,
  Code,
  Terminal,
  GitBranch,
  Layers,
  Workflow,
  Target,
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  Cpu,
  HardDrive,
  Wifi,
  Bluetooth,
  Battery,
  Power,
  RefreshCw,
  RotateCcw,
  Save,
  Edit,
  Trash2,
  Copy,
  Scissors,
  Paperclip,
  Link,
  ExternalLink,
  Maximize,
  Minimize,
  X,
  Plus,
  Minus,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  MicOff,
  VideoOff,
  Eye,
  EyeOff,
  Unlock,
  Key,
  Fingerprint,
  Shield as ShieldIcon,
  AlertTriangle,
  Info,
  HelpCircle,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Zap as ZapIcon,
  Flash,
  Thunder,
  Sun,
  Moon,
  Cloud as CloudIcon,
  CloudRain,
  CloudSnow,
  Wind,
  Droplets,
  Thermometer,
  Gauge,
  Timer,
  Stopwatch,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  History,
  Archive,
  Folder,
  FolderOpen,
  File,
  FileText,
  Image,
  Video,
  Music,
  Headphones as HeadphonesIcon,
  Mic,
  Camera,
  Smartphone as SmartphoneIcon,
  GraduationCap,
  Package,
  Search,
  Tablet,
  Laptop as LaptopIcon,
  Monitor as MonitorIcon,
  Tv,
  Radio,
  Speaker,
  Volume1,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
  RotateCcw as RotateCcwIcon,
  RotateCw,
  Repeat,
  Shuffle,
  Repeat1,
  Shuffle as ShuffleIcon,
  Repeat as RepeatIcon,
  Repeat1 as Repeat1Icon,
  Shuffle2,
  Repeat2,
  Repeat3,
  Shuffle3,
  Repeat4,
  Shuffle4,
  Repeat5,
  Shuffle5,
  Repeat6,
  Shuffle6,
  Repeat7,
  Shuffle7,
  Repeat8,
  Shuffle8,
  Repeat9,
  Shuffle9,
  Repeat10,
  Shuffle10
} from 'lucide-react';

const ITServices: React.FC = () => {
  const itServices = [
    {
      title: "Cloud Infrastructure Management",
      description: "Complete cloud setup, migration, and ongoing management services for AWS, Azure, and GCP.",
      features: [
        "Multi-cloud strategy & architecture",
        "Cost optimization & monitoring",
        "Security hardening & compliance",
        "24/7 monitoring & support",
        "Auto-scaling & load balancing",
        "Disaster recovery planning",
        "Performance optimization",
        "Migration & modernization"
      ],
      icon: Cloud,
      price: "Starting at $3,500/month",
      category: "Infrastructure",
      popular: true,
      timeline: "2-4 weeks",
      complexity: "High"
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Comprehensive security solutions to protect your business from evolving cyber threats.",
      features: [
        "Security audits & assessments",
        "Threat monitoring & detection",
        "Compliance management (SOC2, HIPAA, GDPR)",
        "Incident response & recovery",
        "Penetration testing",
        "Security awareness training",
        "Vulnerability management",
        "Security policy development"
      ],
      icon: Shield,
      price: "Starting at $4,200/month",
      category: "Security",
      popular: true,
      timeline: "1-3 weeks",
      complexity: "High"
    },
    {
      title: "Database Administration & Optimization",
      description: "Expert database design, optimization, and maintenance services for optimal performance.",
      features: [
        "Database design & architecture",
        "Performance tuning & optimization",
        "Backup & recovery strategies",
        "Security hardening & encryption",
        "Scalability planning & implementation",
        "Monitoring & alerting",
        "Data migration & synchronization",
        "24/7 database support"
      ],
      icon: Database,
      price: "Starting at $2,800/month",
      category: "Database",
      popular: false,
      timeline: "1-2 weeks",
      complexity: "Medium"
    },
    {
      title: "Network Design & Implementation",
      description: "Design and implement secure, scalable network solutions for your organization.",
      features: [
        "Network architecture & design",
        "Wireless network solutions",
        "VPN setup & management",
        "Load balancing & traffic management",
        "Network security implementation",
        "Performance monitoring",
        "Disaster recovery planning",
        "Network documentation & training"
      ],
      icon: Globe,
      price: "Starting at $4,000",
      category: "Networking",
      popular: false,
      timeline: "2-3 weeks",
      complexity: "Medium"
    },
    {
      title: "IT Support & Helpdesk",
      description: "Round-the-clock technical support to keep your business running smoothly.",
      features: [
        "24/7 technical support",
        "Remote assistance & troubleshooting",
        "Hardware & software installation",
        "User training & onboarding",
        "Ticket management & tracking",
        "Knowledge base development",
        "Mobile device management",
        "IT asset management"
      ],
      icon: Wrench,
      price: "Starting at $1,500/month",
      category: "Support",
      popular: true,
      timeline: "Immediate",
      complexity: "Low"
    },
    {
      title: "Server Management & Maintenance",
      description: "Comprehensive server setup, configuration, and ongoing maintenance services.",
      features: [
        "Server installation & configuration",
        "Performance monitoring & optimization",
        "Security updates & patching",
        "Backup & recovery management",
        "Capacity planning & scaling",
        "Disaster recovery implementation",
        "Server virtualization",
        "Hardware maintenance & upgrades"
      ],
      icon: Server,
      price: "Starting at $2,500/month",
      category: "Infrastructure",
      popular: false,
      timeline: "1-2 weeks",
      complexity: "Medium"
    },
    {
      title: "DevOps & CI/CD Implementation",
      description: "Implement DevOps practices and continuous integration/deployment pipelines.",
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as Code (IaC)",
        "Container orchestration (Docker, Kubernetes)",
        "Automated testing & deployment",
        "Monitoring & logging solutions",
        "Version control & branching strategies",
        "Security scanning & compliance",
        "Team training & best practices"
      ],
      icon: GitBranch,
      price: "Starting at $5,500",
      category: "DevOps",
      popular: true,
      timeline: "3-6 weeks",
      complexity: "High"
    },
    {
      title: "IT Consulting & Strategy",
      description: "Strategic IT consulting to align technology with business objectives and goals.",
      features: [
        "IT strategy & roadmap development",
        "Technology assessment & recommendations",
        "Digital transformation planning",
        "Cost optimization analysis",
        "Vendor evaluation & selection",
        "IT governance & policies",
        "Change management support",
        "Ongoing strategic guidance"
      ],
      icon: Target,
      price: "Starting at $200/hour",
      category: "Consulting",
      popular: false,
      timeline: "Ongoing",
      complexity: "Variable"
    },
    {
      title: "Mobile Device Management (MDM)",
      description: "Comprehensive mobile device management and security solutions for your workforce.",
      features: [
        "Device enrollment & provisioning",
        "Security policy enforcement",
        "App management & distribution",
        "Remote device control & wiping",
        "Compliance monitoring & reporting",
        "User self-service portal",
        "Integration with existing systems",
        "24/7 support & monitoring"
      ],
      icon: Smartphone,
      price: "Starting at $3.50/device/month",
      category: "Mobile",
      popular: false,
      timeline: "1-2 weeks",
      complexity: "Medium"
    },
    {
      title: "Backup & Disaster Recovery",
      description: "Comprehensive backup solutions and disaster recovery planning to protect your data.",
      features: [
        "Automated backup solutions",
        "Disaster recovery planning",
        "Data replication & synchronization",
        "Recovery testing & validation",
        "Offsite backup storage",
        "RTO/RPO optimization",
        "Compliance & audit support",
        "24/7 monitoring & alerts"
      ],
      icon: Archive,
      price: "Starting at $1,200/month",
      category: "Backup",
      popular: false,
      timeline: "1-2 weeks",
      complexity: "Medium"
    },
    {
      title: "IT Security Training & Awareness",
      description: "Comprehensive security training programs to educate your team on cybersecurity best practices.",
      features: [
        "Security awareness training",
        "Phishing simulation & testing",
        "Compliance training programs",
        "Incident response training",
        "Security policy education",
        "Regular security updates",
        "Custom training materials",
        "Progress tracking & reporting"
      ],
      icon: GraduationCap,
      price: "Starting at $2,000",
      category: "Training",
      popular: false,
      timeline: "1-2 weeks",
      complexity: "Low"
    },
    {
      title: "IT Asset Management",
      description: "Complete IT asset lifecycle management from procurement to disposal.",
      features: [
        "Asset inventory & tracking",
        "Procurement & vendor management",
        "License management & compliance",
        "Asset lifecycle planning",
        "Depreciation & financial tracking",
        "Disposal & recycling services",
        "Reporting & analytics",
        "Integration with existing systems"
      ],
      icon: Package,
      price: "Starting at $1,800/month",
      category: "Asset Management",
      popular: false,
      timeline: "2-3 weeks",
      complexity: "Medium"
    }
  ];

  const technologies = [
    { name: "Cloud Platforms", items: ["AWS", "Azure", "Google Cloud", "IBM Cloud"], icon: Cloud },
    { name: "Operating Systems", items: ["Windows Server", "Linux", "macOS", "Unix"], icon: Monitor },
    { name: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "SQL Server"], icon: Database },
    { name: "Security Tools", items: ["Firewalls", "Antivirus", "SIEM", "VPN", "Encryption"], icon: Shield },
    { name: "Monitoring", items: ["Nagios", "Zabbix", "Prometheus", "Grafana", "Splunk"], icon: Activity },
    { name: "DevOps", items: ["Docker", "Kubernetes", "Jenkins", "GitLab", "Ansible"], icon: GitBranch }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Assessment & Analysis",
      description: "Comprehensive evaluation of your current IT infrastructure, systems, and requirements.",
      icon: Search
    },
    {
      step: "2",
      title: "Strategy & Planning",
      description: "Develop a customized IT strategy and implementation plan aligned with your business goals.",
      icon: Target
    },
    {
      step: "3",
      title: "Implementation & Setup",
      description: "Deploy and configure IT solutions with minimal disruption to your operations.",
      icon: Settings
    },
    {
      step: "4",
      title: "Testing & Optimization",
      description: "Thorough testing and performance optimization to ensure optimal functionality.",
      icon: Zap
    },
    {
      step: "5",
      title: "Support & Maintenance",
      description: "Ongoing support, monitoring, and maintenance to keep your systems running smoothly.",
      icon: Wrench
    }
  ];

  const stats = [
    { label: "Years of Experience", value: "15+" },
    { label: "Projects Completed", value: "500+" },
    { label: "Client Satisfaction", value: "99%" },
    { label: "Uptime Guarantee", value: "99.9%" },
    { label: "Certified Engineers", value: "50+" },
    { label: "Countries Served", value: "25+" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-green-100">
              Comprehensive IT Solutions for Modern Businesses
            </p>
            <p className="text-lg md:text-xl mb-12 text-green-200 max-w-4xl mx-auto">
              From infrastructure management to cybersecurity, we provide comprehensive IT solutions 
              that keep your business secure, efficient, and competitive in today's digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                Get Free Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* IT Services Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive IT solutions designed to address your specific business needs and drive operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${service.popular ? 'ring-2 ring-green-500 relative' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <span className="text-sm text-green-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="text-gray-500">Timeline: {service.timeline}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    service.complexity === 'High' ? 'bg-red-100 text-red-800' :
                    service.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {service.complexity} Complexity
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-green-600 font-medium">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-600">{service.price}</span>
                  <button className="flex items-center text-green-600 hover:text-green-800 font-medium">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We have expertise across a wide range of technologies and platforms to provide the best solutions for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <tech.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{tech.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our IT Service Process
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A systematic approach to delivering IT solutions that meet your specific business requirements and drive operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We combine technical expertise with business acumen to deliver IT solutions that drive real results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rapid Response</h3>
              <p className="text-gray-600">Quick response times and proactive monitoring to prevent issues before they impact your business.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Security First</h3>
              <p className="text-gray-600">Comprehensive security measures to protect your data and systems from evolving threats.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified professionals with years of experience in enterprise IT solutions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Track record of successful implementations and satisfied clients across various industries.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our IT experts assess your current setup and recommend solutions that will improve efficiency, 
            security, and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg">
              Schedule Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-lg">
              Download IT Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServices;