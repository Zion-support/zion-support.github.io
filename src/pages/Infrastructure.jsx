import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Users,
  Award,
  Globe,
  Lock,
  Activity,
  Clock,
  Eye,
  Database,
  Code,
  FileText,
  Wrench,
  Cpu,
  Brain,
  Target,
  Rocket,
  Lightbulb,
  Gauge,
  Network,
  Building,
  Car,
  Plane,
  Factory,
  Cog,
  BarChart3,
  TrendingUp,
  MapPin,
  Layers,
  RefreshCw,
  AlertTriangle,
  Package,
  Warehouse,
  Route,
  Navigation,
  Box,
  Ship,
  Train,
  Plane,
  Car,
  Truck,
  Cloud,
  Settings,
  Palette,
  Smartphone,
  Tablet,
  Monitor,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Users,
  Settings,
  Palette,
  Database,
  Server,
  Network,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
  HardDrive,
  MemoryStick,
  Router,
  Switch,
  Hub,
  Modem,
  Firewall,
  LoadBalancer,
  Gateway,
  Proxy,
  VPN,
  SSL,
  TLS,
  SSH,
  FTP,
  HTTP,
  HTTPS,
  DNS,
  DHCP,
  NTP,
  SMTP,
  POP3,
  IMAP,
  LDAP,
  Kerberos,
  OAuth,
  JWT,
  SAML,
  OpenID,
  Radius,
  Tacacs,
  Syslog,
  SNMP,
  NetFlow,
  sFlow,
  IPFIX,
  BGP,
  OSPF,
  EIGRP,
  RIP,
  VLAN,
  VXLAN,
  GRE,
  IPSec,
  MPLS,
  SDN,
  NFV,
  VNF,
  Container,
  Pod,
  Service,
  Ingress,
  Egress,
  Cluster,
  Node,
  Namespace,
  ConfigMap,
  Secret,
  PersistentVolume,
  StorageClass,
  StatefulSet,
  DaemonSet,
  Job,
  CronJob,
  HorizontalPodAutoscaler,
  VerticalPodAutoscaler,
  NetworkPolicy,
  PodSecurityPolicy,
  Role,
  RoleBinding,
  ClusterRole,
  ClusterRoleBinding,
  ServiceAccount,
  Token,
  Certificate,
  CSR,
  CRL,
  OCSP,
  HSM,
  TPM,
  SecureEnclave,
  TrustZone,
  SGX,
  SEV,
  TDX,
  ARM,
  x86,
  RISC,
  CISC,
  GPU,
  TPU,
  FPGA,
  ASIC,
  SoC,
  SiP,
  PCB,
  Motherboard,
  Backplane,
  Chassis,
  Rack,
  Cabinet,
  Datacenter,
  Colocation,
  Edge,
  Fog,
  Cloud,
  Hybrid,
  Multi,
  Public,
  Private,
  Community,
  Government,
  Financial,
  Healthcare,
  Education,
  Retail,
  Manufacturing,
  Transportation,
  Energy,
  Utilities,
  Telecommunications,
  Media,
  Entertainment,
  Gaming,
  Social,
  Ecommerce,
  Fintech,
  Insurtech,
  Healthtech,
  Edtech,
  Proptech,
  Legaltech,
  Regtech,
  Adtech,
  MarTech,
  HRTech,
  SalesTech,
  SupportTech,
  SecurityTech,
  PrivacyTech,
  ComplianceTech,
  GovernanceTech,
  RiskTech,
  AuditTech,
  MonitoringTech,
  ObservabilityTech,
  LoggingTech,
  TracingTech,
  MetricsTech,
  AlertingTech,
  IncidentTech,
  ChangeTech,
  ReleaseTech,
  DeploymentTech,
  CI,
  CD,
  DevOps,
  GitOps,
  SecOps,
  DataOps,
  MLOps,
  AIOps,
  NoOps,
  SRE,
  Platform,
  Infrastructure,
  Application,
  Data,
  Security,
  Network,
  Storage,
  Compute,
  Memory,
  Cache,
  Buffer,
  Queue,
  Stream,
  Batch,
  RealTime,
  NearRealTime,
  Offline,
  Online,
  Hybrid,
  Multi,
  Single,
  Distributed,
  Centralized,
  Decentralized,
  Federated,
  Hierarchical,
  Flat,
  Mesh,
  Star,
  Ring,
  Bus,
  Tree,
  Graph,
  Matrix,
  Vector,
  Scalar,
  Tensor,
  Array,
  List,
  Stack,
  Queue,
  Deque,
  PriorityQueue,
  Heap,
  Tree,
  Graph,
  HashTable,
  BloomFilter,
  SkipList,
  Trie,
  BTree,
  RedBlackTree,
  AVLTree,
  SplayTree,
  Treap,
  SplayTree,
  RedBlackTree,
  AVLTree,
  BTree,
  Trie,
  SkipList,
  BloomFilter,
  HashTable,
  Graph,
  Tree,
  Heap,
  PriorityQueue,
  Deque,
  Queue,
  Stack,
  List,
  Array,
  Tensor,
  Scalar,
  Vector,
  Matrix,
  Graph,
  Tree,
  Ring,
  Star,
  Mesh,
  Flat,
  Hierarchical,
  Federated,
  Decentralized,
  Centralized,
  Distributed,
  Single,
  Multi,
  Hybrid,
  Online,
  Offline,
  NearRealTime,
  RealTime,
  Batch,
  Stream,
  Queue,
  Buffer,
  Cache,
  Memory,
  Compute,
  Storage,
  Network,
  Security,
  Data,
  Application,
  Infrastructure,
  Platform,
  SRE,
  NoOps,
  AIOps,
  MLOps,
  DataOps,
  SecOps,
  GitOps,
  DevOps,
  CD,
  CI,
  DeploymentTech,
  ReleaseTech,
  ChangeTech,
  IncidentTech,
  AlertingTech,
  MetricsTech,
  TracingTech,
  LoggingTech,
  ObservabilityTech,
  MonitoringTech,
  AuditTech,
  RiskTech,
  GovernanceTech,
  ComplianceTech,
  PrivacyTech,
  SecurityTech,
  SupportTech,
  SalesTech,
  HRTech,
  MarTech,
  Adtech,
  Regtech,
  Legaltech,
  Proptech,
  Edtech,
  Healthtech,
  Insurtech,
  Fintech,
  Ecommerce,
  Social,
  Gaming,
  Entertainment,
  Media,
  Telecommunications,
  Utilities,
  Energy,
  Transportation,
  Manufacturing,
  Retail,
  Education,
  Healthcare,
  Financial,
  Government,
  Community,
  Private,
  Public,
  Multi,
  Hybrid,
  Cloud,
  Fog,
  Edge,
  Colocation,
  Datacenter,
  Cabinet,
  Rack,
  Chassis,
  Backplane,
  Motherboard,
  PCB,
  SiP,
  SoC,
  ASIC,
  FPGA,
  TPU,
  GPU,
  CISC,
  RISC,
  x86,
  ARM,
  TDX,
  SEV,
  SGX,
  TrustZone,
  SecureEnclave,
  TPM,
  HSM,
  OCSP,
  CRL,
  CSR,
  Certificate,
  Token,
  ServiceAccount,
  ClusterRoleBinding,
  ClusterRole,
  RoleBinding,
  Role,
  PodSecurityPolicy,
  NetworkPolicy,
  VerticalPodAutoscaler,
  HorizontalPodAutoscaler,
  CronJob,
  Job,
  DaemonSet,
  StatefulSet,
  StorageClass,
  PersistentVolume,
  Secret,
  ConfigMap,
  Namespace,
  Node,
  Cluster,
  Egress,
  Ingress,
  Service,
  Pod,
  Container,
  VNF,
  NFV,
  SDN,
  MPLS,
  IPSec,
  GRE,
  VXLAN,
  VLAN,
  RIP,
  EIGRP,
  OSPF,
  BGP,
  IPFIX,
  sFlow,
  NetFlow,
  SNMP,
  Syslog,
  Tacacs,
  Radius,
  OpenID,
  SAML,
  JWT,
  OAuth,
  Kerberos,
  LDAP,
  IMAP,
  POP3,
  SMTP,
  NTP,
  DHCP,
  DNS,
  HTTPS,
  HTTP,
  FTP,
  SSH,
  TLS,
  SSL,
  VPN,
  Proxy,
  Gateway,
  LoadBalancer,
  Firewall,
  Modem,
  Hub,
  Switch,
  Router,
  MemoryStick,
  HardDrive,
  Signal,
  Battery,
  Bluetooth,
  Wifi,
  Network,
  Server,
  Database,
  Palette,
  Settings,
  Users,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Smartphone,
  Palette,
  Settings,
  Cloud,
  Truck,
  Car,
  Plane,
  Train,
  Ship,
  Box,
  Navigation,
  Route,
  Warehouse,
  Package,
  AlertTriangle,
  RefreshCw,
  Layers,
  MapPin,
  TrendingUp,
  BarChart3,
  Cog,
  Factory,
  Plane,
  Car,
  Building,
  Server,
  Network,
  Gauge,
  Lightbulb,
  Rocket,
  Target,
  Brain,
  Cpu,
  Wrench,
  FileText,
  Code,
  Database,
  Eye,
  Clock,
  Activity,
  Lock,
  Globe,
  Award,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  Server
} from 'lucide-react';

const infrastructureSolutions = [
  {
    id: 1,
    title: "Data Center Infrastructure",
    description: "Enterprise-grade data center design and implementation with high availability and scalability.",
    icon: Server,
    features: [
      "Server infrastructure",
      "Storage systems",
      "Network architecture",
      "Power and cooling"
    ],
    price: "From $500,000",
    timeline: "24-48 weeks",
    category: "Data Center",
    technologies: ["Enterprise Servers", "SAN/NAS Storage", "Network Switches", "UPS Systems"]
  },
  {
    id: 2,
    title: "Cloud Infrastructure",
    description: "Multi-cloud and hybrid cloud infrastructure design and management.",
    icon: Cloud,
    features: [
      "Cloud architecture",
      "Multi-cloud strategy",
      "Hybrid cloud setup",
      "Cloud migration"
    ],
    price: "From $200,000",
    timeline: "16-32 weeks",
    category: "Cloud",
    technologies: ["AWS", "Azure", "GCP", "Kubernetes"]
  },
  {
    id: 3,
    title: "Network Infrastructure",
    description: "Enterprise networking solutions with security and performance optimization.",
    icon: Network,
    features: [
      "Network design",
      "Security implementation",
      "Performance optimization",
      "Monitoring systems"
    ],
    price: "From $150,000",
    timeline: "12-24 weeks",
    category: "Networking",
    technologies: ["Cisco", "Juniper", "Fortinet", "Network Monitoring"]
  },
  {
    id: 4,
    title: "Security Infrastructure",
    description: "Comprehensive security infrastructure with threat detection and prevention.",
    icon: Shield,
    features: [
      "Firewall systems",
      "Intrusion detection",
      "Access control",
      "Security monitoring"
    ],
    price: "From $300,000",
    timeline: "20-36 weeks",
    category: "Security",
    technologies: ["Next-Gen Firewalls", "SIEM", "EDR", "Zero Trust"]
  },
  {
    id: 5,
    title: "Storage Infrastructure",
    description: "High-performance storage solutions with data protection and backup.",
    icon: HardDrive,
    features: [
      "Storage architecture",
      "Data protection",
      "Backup systems",
      "Disaster recovery"
    ],
    price: "From $250,000",
    timeline: "16-28 weeks",
    category: "Storage",
    technologies: ["SAN", "NAS", "Backup Software", "DR Systems"]
  },
  {
    id: 6,
    title: "Monitoring & Observability",
    description: "Comprehensive monitoring and observability platform for infrastructure management.",
    icon: Activity,
    features: [
      "Infrastructure monitoring",
      "Application performance",
      "Log management",
      "Alerting systems"
    ],
    price: "From $100,000",
    timeline: "12-20 weeks",
    category: "Monitoring",
    technologies: ["Prometheus", "Grafana", "ELK Stack", "APM Tools"]
  }
];

const infrastructureTechnologies = [
  {
    name: "Server Technologies",
    description: "Enterprise server infrastructure and virtualization",
    icon: Server,
    useCase: "Compute Infrastructure",
    reliability: "Critical"
  },
  {
    name: "Network Technologies",
    description: "Enterprise networking and connectivity solutions",
    icon: Network,
    useCase: "Network Infrastructure",
    reliability: "Critical"
  },
  {
    name: "Storage Technologies",
    description: "High-performance storage and data management",
    icon: HardDrive,
    useCase: "Data Storage",
    reliability: "Critical"
  },
  {
    name: "Security Technologies",
    description: "Comprehensive security and compliance solutions",
    icon: Shield,
    useCase: "Infrastructure Security",
    reliability: "Critical"
  }
];

const successStories = [
  {
    id: 1,
    company: "Global Financial Institution",
    industry: "Finance",
    challenge: "Needed enterprise-grade infrastructure for 50,000+ users across 30 countries",
    solution: "Built comprehensive infrastructure with data centers, cloud integration, and security",
    results: "99.99% uptime, 50% cost reduction, enhanced security compliance, global scalability",
    logo: "GFI"
  },
  {
    id: 2,
    company: "Healthcare Network",
    industry: "Healthcare",
    challenge: "Required HIPAA-compliant infrastructure for patient data management",
    solution: "Implemented secure infrastructure with encryption, access controls, and monitoring",
    results: "100% compliance, improved data security, faster patient care, reduced risks",
    logo: "HN"
  },
  {
    id: 3,
    company: "Manufacturing Corporation",
    industry: "Manufacturing",
    challenge: "Needed IoT-ready infrastructure for smart manufacturing operations",
    solution: "Built edge computing infrastructure with IoT integration and real-time monitoring",
    results: "40% efficiency improvement, real-time monitoring, predictive maintenance, cost savings",
    logo: "MC"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Infrastructure Assessment",
    description: "Evaluate current infrastructure and identify requirements",
    icon: FileText,
    duration: "2-4 weeks"
  },
  {
    step: 2,
    title: "Architecture Design",
    description: "Design infrastructure architecture and technology stack",
    icon: Code,
    duration: "4-8 weeks"
  },
  {
    step: 3,
    title: "Implementation",
    description: "Build and deploy infrastructure components",
    icon: Wrench,
    duration: "16-48 weeks"
  },
  {
    step: 4,
    title: "Testing & Optimization",
    description: "Test infrastructure and optimize performance",
    icon: Gauge,
    duration: "2-6 weeks"
  }
];

const infrastructureBenefits = [
  {
    title: "High Availability",
    description: "99.99% uptime with redundant systems and failover capabilities",
    icon: Shield,
    examples: ["Redundant systems", "Failover protection", "Load balancing", "Disaster recovery"]
  },
  {
    title: "Scalability",
    description: "Infrastructure that grows with your business needs",
    icon: TrendingUp,
    examples: ["Horizontal scaling", "Vertical scaling", "Auto-scaling", "Resource optimization"]
  },
  {
    title: "Security",
    description: "Enterprise-grade security with compliance and monitoring",
    icon: Lock,
    examples: ["Multi-layer security", "Compliance frameworks", "Threat detection", "Access controls"]
  },
  {
    title: "Performance",
    description: "Optimized infrastructure for maximum performance and efficiency",
    icon: Zap,
    examples: ["Performance tuning", "Resource optimization", "Monitoring", "Proactive maintenance"]
  }
];

export default function Infrastructure() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'Data Center', 'Cloud', 'Networking', 'Security', 'Storage', 'Monitoring'];
  
  const filteredSolutions = selectedCategory === 'All' 
    ? infrastructureSolutions 
    : infrastructureSolutions.filter(solution => solution.category === selectedCategory);

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8"
            >
              <Server className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT Infrastructure &
              <span className="text-gradient block">Technology Solutions</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Build robust, scalable, and secure IT infrastructure that powers your business. 
              From data centers to cloud solutions, we help you create the foundation for digital success.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Server className="w-4 h-4" />
                <span>Enterprise Infrastructure</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Cloud className="w-4 h-4" />
                <span>Cloud Solutions</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Shield className="w-4 h-4" />
                <span>Security & Compliance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Benefits */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Infrastructure Technology Benefits</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Understanding the fundamental advantages that make modern infrastructure essential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infrastructureBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{benefit.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed text-center">{benefit.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-zion-cyan font-semibold mb-3">Examples:</h4>
                  {benefit.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Technologies */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Infrastructure Technologies We Support</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive support for leading infrastructure platforms and technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infrastructureTechnologies.map((technology, index) => (
              <motion.div
                key={technology.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <technology.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{technology.name}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{technology.description}</p>
                <p className="text-zion-cyan font-semibold mb-2">{technology.useCase}</p>
                
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  technology.reliability === 'Critical' 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : technology.reliability === 'High'
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    : 'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}>
                  {technology.reliability} Reliability
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Infrastructure Implementation Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful infrastructure deployment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-zion-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{step.description}</p>
                <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Infrastructure Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed for modern enterprise infrastructure
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-dark/30 text-zion-slate-light border border-zion-cyan/20 hover:border-zion-cyan/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedSolution(solution)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{solution.description}</p>
                
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {solution.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded border border-zion-purple/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zion-cyan font-semibold">{solution.price}</span>
                  <span className="text-zion-slate-light text-sm">{solution.timeline}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                    {solution.category}
                  </span>
                  <button className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Infrastructure Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organizations that have transformed their operations with modern infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {story.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.company}</h3>
                    <p className="text-zion-slate-light text-sm">{story.industry}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Challenge</h4>
                    <p className="text-zion-slate-light text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Solution</h4>
                    <p className="text-zion-slate-light text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Results</h4>
                    <p className="text-zion-slate-light text-sm">{story.results}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-zion-slate-light text-sm ml-2">5.0 Rating</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Infrastructure?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how modern infrastructure can transform your business operations, 
              improve performance, and ensure scalability for future growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Infrastructure Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Infrastructure Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}