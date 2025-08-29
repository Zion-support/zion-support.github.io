import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { 
  Cloud, 
  Server, 
  Shield, 
  Cpu, 
  Cable, 
  LifeBuoy, 
  DollarSign, 
  ExternalLink, 
  Wrench, 
  Database, 
  Building,
  Network,
  Lock,
  Globe,
  Zap,
  Users,
  Smartphone,
  Camera,
  Mic,
  Palette,
  Target,
  Truck,
  CreditCard,
  FileSearch,
  BarChart3,
  Workflow,
  FileText,
  ImageIcon,
  Video,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Award,
  Lightbulb
} from 'lucide-react';

const ITServices: React.FC = () => {
  const offerings = [
    { 
      icon: Cloud, 
      title: 'Cloud & DevOps', 
      desc: 'CI/CD, IaC, Kubernetes, cost optimization and SRE with 24/7 runbooks.', 
      price: '$6,000 - $80,000+',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Kubernetes Management', 'Cost Optimization'],
      benefits: ['Faster deployments', 'Reduced costs', 'Better reliability']
    },
    { 
      icon: Server, 
      title: 'Migrations & Modernization', 
      desc: 'On-prem to cloud, containerization, monolith-to-microservices, and zero-downtime cutovers.', 
      price: '$10,000 - $120,000+',
      features: ['Cloud Migration', 'Containerization', 'Microservices', 'Zero-downtime Cutovers'],
      benefits: ['Modern infrastructure', 'Better performance', 'Reduced maintenance']
    },
    { 
      icon: Shield, 
      title: 'Security & Compliance', 
      desc: 'SOC2/ISO readiness, zero-trust, vulnerability management, and incident response plans.', 
      price: '$3,000 - $40,000+',
      features: ['SOC2/ISO Compliance', 'Zero Trust Architecture', 'Vulnerability Management', 'Incident Response'],
      benefits: ['Enhanced security', 'Compliance ready', 'Risk reduction']
    },
    { 
      icon: Cpu, 
      title: 'Networking & Edge', 
      desc: 'SD-WAN, VPN, edge compute, IoT, and observability for distributed sites.', 
      price: '$5,000 - $50,000+',
      features: ['SD-WAN Implementation', 'VPN Solutions', 'Edge Computing', 'IoT Integration'],
      benefits: ['Better connectivity', 'Reduced latency', 'Global reach']
    },
    { 
      icon: Cable, 
      title: 'IT Onsite & Managed Services', 
      desc: 'Hands-on deployment, device lifecycle, patching, help desk, and inventory.', 
      price: '$1,500 - $15,000/mo',
      features: ['Onsite Support', 'Device Management', 'Help Desk', 'Inventory Management'],
      benefits: ['24/7 support', 'Proactive maintenance', 'Reduced downtime']
    },
    { 
      icon: LifeBuoy, 
      title: 'Business Continuity', 
      desc: 'Backups, DR plans, tabletop exercises, and RTO/RPO aligned architecture.', 
      price: '$2,500 - $30,000+',
      features: ['Backup Solutions', 'Disaster Recovery', 'Business Continuity', 'RTO/RPO Alignment'],
      benefits: ['Business protection', 'Minimal downtime', 'Data safety']
    },
    { 
      icon: Wrench, 
      title: 'Platform Engineering', 
      desc: 'Golden paths, internal developer platforms, Backstage portals, and paved-road governance.', 
      price: '$8,000 - $90,000+',
      features: ['Developer Platforms', 'Golden Paths', 'Backstage Portals', 'Governance'],
      benefits: ['Faster development', 'Better collaboration', 'Standardized processes']
    },
    { 
      icon: Database, 
      title: 'Data Platforms & MLOps', 
      desc: 'Lakehouse setups, ELT pipelines, feature stores, and ML deployment with observability.', 
      price: '$7,000 - $95,000+',
      features: ['Data Lakehouse', 'ELT Pipelines', 'Feature Stores', 'ML Deployment'],
      benefits: ['Better data management', 'ML operationalization', 'Scalable analytics']
    },
    { 
      icon: Building, 
      title: 'Enterprise SaaS Rollouts', 
      desc: 'Okta SSO, RBAC, tenant provisioning, and SOC2-aligned configuration baselines at scale.', 
      price: '$5,000 - $70,000+',
      features: ['SSO Implementation', 'RBAC Setup', 'Tenant Provisioning', 'SOC2 Compliance'],
      benefits: ['Secure access', 'Better governance', 'Compliance ready']
    },
    { 
      icon: Cpu, 
      title: 'Edge Computing Platform', 
      desc: 'Distributed edge computing with ultra-low latency, real-time analytics, and global edge network.', 
      price: '$4,500 - $25,000+',
      features: ['Edge Computing', 'Low Latency', 'Real-time Analytics', 'Global Network'],
      benefits: ['Reduced latency', 'Better performance', 'Global reach']
    },
    { 
      icon: Cloud, 
      title: 'Cloud Landing Zones', 
      desc: 'Secure multi-account landing zones with guardrails, budgets, CI/CD and golden patterns.', 
      price: '$8,000 - $65,000+',
      features: ['Multi-account Setup', 'Security Guardrails', 'Budget Controls', 'CI/CD Integration'],
      benefits: ['Enhanced security', 'Cost optimization', 'Better governance']
    },
    { 
      icon: Server, 
      title: 'Database Reliability Engineering', 
      desc: 'HA/DR, performance tuning, migrations and observability for Postgres, MySQL and SQL Server.', 
      price: '$4,000 - $45,000+',
      features: ['High Availability', 'Disaster Recovery', 'Performance Tuning', 'Database Migration'],
      benefits: ['Better reliability', 'Improved performance', 'Data safety']
    },
    { 
      icon: Shield, 
      title: 'Zero Trust Enablement', 
      desc: 'Network segmentation, identity-aware proxies, device posture and continuous verification.', 
      price: '$6,000 - $60,000+',
      features: ['Network Segmentation', 'Identity Management', 'Device Posture', 'Continuous Verification'],
      benefits: ['Enhanced security', 'Better access control', 'Compliance ready']
    },
    // New IT Services
    { 
      icon: Cpu, 
      title: '5G Enterprise Solutions', 
      desc: 'Private 5G networks, edge computing, and IoT integration for enterprise environments.', 
      price: '$25,000 - $200,000+',
      features: ['Private 5G Networks', 'Edge Computing', 'IoT Integration', 'Enterprise Security'],
      benefits: ['Ultra-fast connectivity', 'Low latency', 'Massive IoT support']
    },
    { 
      icon: Database, 
      title: 'Data Mesh Architecture', 
      desc: 'Distributed data architecture with domain-driven design and self-service data platforms.', 
      price: '$15,000 - $120,000+',
      features: ['Distributed Architecture', 'Domain-driven Design', 'Self-service Platforms', 'Data Governance'],
      benefits: ['Scalable data', 'Better ownership', 'Faster access']
    },
    { 
      icon: Cloud, 
      title: 'Hybrid Cloud Management', 
      desc: 'Seamless integration between on-premises and cloud environments with unified management.', 
      price: '$12,000 - $95,000+',
      features: ['Hybrid Integration', 'Unified Management', 'Multi-cloud Support', 'Cost Optimization'],
      benefits: ['Flexible deployment', 'Cost optimization', 'Better control']
    },
    { 
      icon: Network, 
      title: 'Software-Defined Networking', 
      desc: 'SDN implementation with centralized control, automation, and network virtualization.', 
      price: '$18,000 - $150,000+',
      features: ['Centralized Control', 'Network Automation', 'Virtualization', 'Traffic Management'],
      benefits: ['Better control', 'Automated management', 'Flexible configuration']
    },
    { 
      icon: Lock, 
      title: 'Advanced Threat Protection', 
      desc: 'Next-generation security with AI-powered threat detection and automated response.', 
      price: '$8,500 - $75,000+',
      features: ['AI Threat Detection', 'Automated Response', 'Behavioral Analysis', 'Threat Intelligence'],
      benefits: ['Proactive protection', 'Faster response', 'Better detection']
    },
    { 
      icon: Globe, 
      title: 'Global Infrastructure', 
      desc: 'Multi-region deployment with CDN, load balancing, and geo-redundancy for global reach.', 
      price: '$20,000 - $180,000+',
      features: ['Multi-region Deployment', 'CDN Integration', 'Load Balancing', 'Geo-redundancy'],
      benefits: ['Global reach', 'Better performance', 'High availability']
    },
    { 
      icon: Zap, 
      title: 'High-Performance Computing', 
      desc: 'HPC clusters, GPU computing, and parallel processing for compute-intensive workloads.', 
      price: '$30,000 - $250,000+',
      features: ['HPC Clusters', 'GPU Computing', 'Parallel Processing', 'Workload Optimization'],
      benefits: ['Faster processing', 'Scalable compute', 'Better performance']
    },
    { 
      icon: Users, 
      title: 'Digital Workplace Solutions', 
      desc: 'Modern workplace technology with collaboration tools, mobility, and unified communications.', 
      price: '$5,500 - $45,000+',
      features: ['Collaboration Tools', 'Mobility Solutions', 'Unified Communications', 'Workplace Analytics'],
      benefits: ['Better collaboration', 'Increased productivity', 'Modern workplace']
    },
    { 
      icon: Smartphone, 
      title: 'Mobile Device Management', 
      desc: 'Enterprise mobile device management with security, compliance, and application control.', 
      price: '$3,500 - $28,000+',
      features: ['Device Management', 'Security Controls', 'Compliance Monitoring', 'Application Control'],
      benefits: ['Better security', 'Compliance ready', 'Centralized control']
    },
    { 
      icon: Camera, 
      title: 'IoT & Smart Building', 
      desc: 'Internet of Things implementation with sensors, automation, and smart building management.', 
      price: '$15,000 - $120,000+',
      features: ['IoT Sensors', 'Building Automation', 'Smart Management', 'Data Analytics'],
      benefits: ['Building optimization', 'Energy savings', 'Better monitoring']
    },
    { 
      icon: Mic, 
      title: 'Unified Communications', 
      desc: 'Integrated communication platform with voice, video, messaging, and collaboration tools.', 
      price: '$8,000 - $65,000+',
      features: ['Voice & Video', 'Messaging Platform', 'Collaboration Tools', 'Integration'],
      benefits: ['Better communication', 'Increased collaboration', 'Cost reduction']
    },
    { 
      icon: Palette, 
      title: 'Digital Experience Platform', 
      desc: 'Omnichannel digital experience with personalization, analytics, and customer journey mapping.', 
      price: '$25,000 - $180,000+',
      features: ['Omnichannel Support', 'Personalization', 'Customer Analytics', 'Journey Mapping'],
      benefits: ['Better customer experience', 'Increased engagement', 'Data-driven insights']
    },
    { 
      icon: Target, 
      title: 'IT Strategy & Consulting', 
      desc: 'Strategic IT planning, technology roadmaps, and digital transformation consulting.', 
      price: '$150 - $300/hr',
      features: ['Strategic Planning', 'Technology Roadmaps', 'Digital Transformation', 'Vendor Selection'],
      benefits: ['Strategic alignment', 'Better planning', 'Cost optimization']
    },
    { 
      icon: Truck, 
      title: 'IT Asset Management', 
      desc: 'Comprehensive IT asset lifecycle management with tracking, optimization, and cost control.', 
      price: '$4,500 - $35,000+',
      features: ['Asset Tracking', 'Lifecycle Management', 'Cost Optimization', 'Compliance Monitoring'],
      benefits: ['Better asset utilization', 'Cost reduction', 'Compliance ready']
    },
    { 
      icon: CreditCard, 
      title: 'IT Financial Management', 
      desc: 'IT cost optimization, budgeting, and financial planning with ROI analysis and reporting.', 
      price: '$6,000 - $45,000+',
      features: ['Cost Optimization', 'Budget Planning', 'ROI Analysis', 'Financial Reporting'],
      benefits: ['Cost reduction', 'Better planning', 'ROI optimization']
    },
    { 
      icon: FileSearch, 
      title: 'IT Service Management', 
      desc: 'ITSM implementation with service desk, change management, and incident response workflows.', 
      price: '$8,500 - $65,000+',
      features: ['Service Desk', 'Change Management', 'Incident Response', 'Workflow Automation'],
      benefits: ['Better service delivery', 'Process improvement', 'Customer satisfaction']
    },
    { 
      icon: BarChart3, 
      title: 'IT Performance Monitoring', 
      desc: 'Comprehensive IT monitoring with performance metrics, alerting, and capacity planning.', 
      price: '$5,500 - $42,000+',
      features: ['Performance Monitoring', 'Alerting Systems', 'Capacity Planning', 'Reporting'],
      benefits: ['Proactive monitoring', 'Better performance', 'Capacity optimization']
    },
    { 
      icon: Workflow, 
      title: 'IT Process Automation', 
      desc: 'IT process automation with RPA, workflow management, and intelligent automation platforms.', 
      price: '$12,000 - $85,000+',
      features: ['RPA Implementation', 'Workflow Management', 'Intelligent Automation', 'Process Optimization'],
      benefits: ['Process efficiency', 'Cost reduction', 'Better accuracy']
    },
    { 
      icon: FileText, 
      title: 'IT Documentation & Knowledge', 
      desc: 'Comprehensive IT documentation with knowledge management, runbooks, and training materials.', 
      price: '$3,500 - $28,000+',
      features: ['Documentation Systems', 'Knowledge Management', 'Runbooks', 'Training Materials'],
      benefits: ['Better knowledge sharing', 'Reduced training time', 'Improved support']
    },
    { 
      icon: ImageIcon, 
      title: 'IT Visualization & Analytics', 
      desc: 'IT data visualization with dashboards, reporting, and business intelligence for IT operations.', 
      price: '$6,500 - $48,000+',
      features: ['Data Visualization', 'Dashboard Creation', 'Business Intelligence', 'Reporting'],
      benefits: ['Better insights', 'Data-driven decisions', 'Improved visibility']
    },
    { 
      icon: Video, 
      title: 'IT Training & Change Management', 
      desc: 'Comprehensive IT training programs with change management and user adoption strategies.', 
      price: '$4,500 - $35,000+',
      features: ['Training Programs', 'Change Management', 'User Adoption', 'Performance Support'],
      benefits: ['Better adoption', 'Reduced resistance', 'Improved performance']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO title="IT Services - Zion Tech Group" description="Enterprise-grade IT services delivered with startup speed. From cloud migration to managed services with proven ROI." />
      
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-purple-600/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-6">
            Enterprise-grade IT services, <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">startup speed</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300 mb-8">
            From modernization to managed services, we design and operate robust, secure and cost-efficient platforms that scale with your business needs.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link to="/contact" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105">
              Talk to an architect
            </Link>
            <Link to="/request-quote" className="rounded-lg border border-cyan-400/40 px-6 py-3 text-sm font-semibold text-cyan-300 hover:bg-white/5 transition-all duration-200">
              Request a quote
            </Link>
          </div>
          <div className="text-sm text-slate-400 mb-8">
            <span className="inline-flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              Free IT assessment & strategy consultation
            </span>
            <span className="mx-3">•</span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              Rapid deployment (2-12 weeks)
            </span>
            <span className="mx-3">•</span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              ROI guarantee
            </span>
          </div>
          <div className="text-xs text-slate-400">
            Typical T&M: $110–$200/hr blended; fixed-scope engagements available.
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {offerings.map((o, index) => (
              <div key={o.title} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-200 hover:translate-y-[-2px] hover:border-cyan-400/30 hover:bg-white/10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300 group-hover:bg-blue-500/25 transition-colors">
                  <o.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-300 transition-colors">{o.title}</h3>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">{o.desc}</p>
                
                {o.features && (
                  <div className="mb-4">
                    <h5 className="text-xs font-semibold text-cyan-300 mb-2">Key Features:</h5>
                    <ul className="space-y-1">
                      {o.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {o.benefits && (
                  <div className="mb-4">
                    <h5 className="text-xs font-semibold text-green-300 mb-2">Benefits:</h5>
                    <ul className="space-y-1">
                      {o.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                          <TrendingUp className="h-3 w-3 text-green-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-cyan-300">{o.price}</div>
                  <div className="inline-flex items-center gap-2 text-sm text-cyan-300 group-hover:text-cyan-200 transition-colors">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-xl border border-white/10 bg-white/5 p-8 text-sm text-slate-300">
            <div className="mb-4 font-semibold text-white text-lg">What you get with every IT service</div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <h6 className="font-semibold text-cyan-300 mb-2">Architecture & Design</h6>
                <ul className="space-y-1 text-xs">
                  <li>Architecture diagrams and IaC repositories</li>
                  <li>Security baselines and policies</li>
                  <li>Performance and scalability planning</li>
                </ul>
              </div>
              <div>
                <h6 className="font-semibold text-cyan-300 mb-2">Implementation & Testing</h6>
                <ul className="space-y-1 text-xs">
                  <li>Secure implementation and testing</li>
                  <li>Performance validation and optimization</li>
                  <li>Security testing and validation</li>
                </ul>
              </div>
              <div>
                <h6 className="font-semibold text-cyan-300 mb-2">Operations & Support</h6>
                <ul className="space-y-1 text-xs">
                  <li>Monitoring and SLO dashboards</li>
                  <li>Runbooks and operational procedures</li>
                  <li>24/7 support and maintenance</li>
                </ul>
              </div>
              <div>
                <h6 className="font-semibold text-cyan-300 mb-2">Knowledge Transfer</h6>
                <ul className="space-y-1 text-xs">
                  <li>Training and knowledge transfer</li>
                  <li>Documentation and best practices</li>
                  <li>Ongoing consulting and support</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 flex items-center gap-2 text-xs">
              <DollarSign className="h-4 w-4" />
              Avg project budgets: $10k–$250k depending on scope and complexity.
            </div>
            
            <div className="mt-6 flex items-center gap-4">
              <a className="inline-flex items-center text-cyan-300 hover:text-cyan-200 transition-colors" href="https://ziontechgroup.com/it-services" target="_blank" rel="noreferrer">
                Explore IT services on our site <ExternalLink className="ml-1 h-3 w-3" />
              </a>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400">
                Contact: +1 302 464 0950 · kleber@ziontechgroup.com
              </span>
            </div>
            
            <div className="mt-4 text-xs text-slate-400">
              Address: 364 E Main St STE 1008, Middletown DE 19709
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServices;

