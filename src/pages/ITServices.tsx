import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Server, Shield, Cpu, Cable, LifeBuoy, DollarSign, ExternalLink, Wrench, Database, Building, Brain, Zap, Globe, Network } from 'lucide-react';

const ITServices: React.FC = () => {
  const offerings = [
    { icon: Cloud, title: 'Cloud & DevOps', desc: 'CI/CD, IaC, Kubernetes, cost optimization and SRE with 24/7 runbooks.', price: '$6,000 - $80,000+' },
    { icon: Server, title: 'Migrations & Modernization', desc: 'On-prem to cloud, containerization, monolith-to-microservices, and zero-downtime cutovers.', price: '$10,000 - $120,000+' },
    { icon: Shield, title: 'Security & Compliance', desc: 'SOC2/ISO readiness, zero-trust, vulnerability management, and incident response plans.', price: '$3,000 - $40,000+' },
    { icon: Cpu, title: 'Networking & Edge', desc: 'SD-WAN, VPN, edge compute, IoT, and observability for distributed sites.', price: '$5,000 - $50,000+' },
    { icon: Cable, title: 'IT Onsite & Managed Services', desc: 'Hands-on deployment, device lifecycle, patching, help desk, and inventory.', price: '$1,500 - $15,000/mo' },
    { icon: LifeBuoy, title: 'Business Continuity', desc: 'Backups, DR plans, tabletop exercises, and RTO/RPO aligned architecture.', price: '$2,500 - $30,000+' },
    // New items
    { icon: Wrench, title: 'Platform Engineering', desc: 'Golden paths, internal developer platforms, Backstage portals, and paved-road governance.', price: '$8,000 - $90,000+' },
    { icon: Database, title: 'Data Platforms & MLOps', desc: 'Lakehouse setups, ELT pipelines, feature stores, and ML deployment with observability.', price: '$7,000 - $95,000+' },
    { icon: Building, title: 'Enterprise SaaS Rollouts', desc: 'Okta SSO, RBAC, tenant provisioning, and SOC2-aligned configuration baselines at scale.', price: '$5,000 - $70,000+' },
    { icon: Cpu, title: 'Edge Computing Platform', desc: 'Distributed edge computing with ultra-low latency, real-time analytics, and global edge network.', price: '$4,500 - $25,000+' }
    ,
    { icon: Cloud, title: 'Cloud Landing Zones', desc: 'Secure multi-account landing zones with guardrails, budgets, CI/CD and golden patterns.', price: '$8,000 - $65,000+' },
    { icon: Server, title: 'Database Reliability Engineering', desc: 'HA/DR, performance tuning, migrations and observability for Postgres, MySQL and SQL Server.', price: '$4,000 - $45,000+' },
    { icon: Shield, title: 'Zero Trust Enablement', desc: 'Network segmentation, identity-aware proxies, device posture and continuous verification.', price: '$6,000 - $60,000+' },
    // New innovative IT services
    { icon: Brain, title: 'AI-Powered IT Operations', desc: 'Intelligent IT operations with AI-driven automation, predictive maintenance, and self-healing systems.', price: '$8,000 - $75,000+' },
    { icon: Zap, title: 'Hyperautomation Platform', desc: 'End-to-end business process automation with RPA, AI, and intelligent workflow orchestration.', price: '$12,000 - $100,000+' },
    { icon: Globe, title: 'Global Edge Network', desc: 'Distributed edge computing infrastructure with global presence and ultra-low latency connectivity.', price: '$15,000 - $120,000+' },
    { icon: Shield, title: 'Quantum-Safe Security', desc: 'Post-quantum cryptography implementation and quantum-resistant security protocols.', price: '$10,000 - $80,000+' },
    { icon: Database, title: 'Real-Time Data Platform', desc: 'Streaming data architecture with real-time analytics, event processing, and instant insights.', price: '$8,000 - $70,000+' },
    { icon: Server, title: 'Serverless Architecture', desc: 'Modern serverless infrastructure with auto-scaling, event-driven architecture, and cost optimization.', price: '$5,000 - $50,000+' },
    { icon: Network, title: '5G & IoT Infrastructure', desc: 'Next-generation network infrastructure for 5G, IoT, and edge computing applications.', price: '$20,000 - $150,000+' },
    { icon: Building, title: 'Smart City Solutions', desc: 'Intelligent city infrastructure with IoT sensors, data analytics, and automated management systems.', price: '$25,000 - $200,000+' },
    { icon: Cloud, title: 'Multi-Cloud Orchestration', desc: 'Unified management platform for multi-cloud environments with cost optimization and governance.', price: '$10,000 - $85,000+' },
    { icon: Cpu, title: 'High-Performance Computing', desc: 'HPC infrastructure for scientific computing, AI training, and complex simulations.', price: '$30,000 - $250,000+' },
    { icon: Shield, title: 'Cyber Resilience Platform', desc: 'Comprehensive cyber resilience with threat intelligence, incident response, and business continuity.', price: '$8,000 - $65,000+' },
    { icon: Database, title: 'Data Mesh Architecture', desc: 'Distributed data architecture with domain-driven design and decentralized data ownership.', price: '$15,000 - $100,000+' },
    { icon: Server, title: 'Green Data Centers', desc: 'Sustainable data center design with energy efficiency, renewable energy, and carbon footprint reduction.', price: '$20,000 - $150,000+' },
    { icon: Network, title: 'Software-Defined Everything', desc: 'SDN, SD-WAN, and software-defined infrastructure for flexible and scalable networks.', price: '$8,000 - $70,000+' },
    { icon: Building, title: 'Digital Workplace Platform', desc: 'Modern workplace solutions with collaboration tools, unified communications, and employee experience optimization.', price: '$5,000 - $45,000+' },
    { icon: Cloud, title: 'Hybrid Cloud Bridge', desc: 'Seamless integration between on-premises and cloud environments with unified management.', price: '$12,000 - $90,000+' },
    { icon: Shield, title: 'Identity & Access Management', desc: 'Comprehensive IAM solution with SSO, MFA, role-based access control, and identity governance.', price: '$6,000 - $55,000+' },
    { icon: Database, title: 'Data Privacy & Compliance', desc: 'GDPR, CCPA, and regulatory compliance solutions with data protection and privacy management.', price: '$4,000 - $40,000+' },
    { icon: Server, title: 'Container Orchestration', desc: 'Kubernetes and container management with auto-scaling, service mesh, and GitOps workflows.', price: '$7,000 - $60,000+' },
    { icon: Network, title: 'Network Automation', desc: 'Intelligent network automation with AI-driven optimization, self-healing, and predictive maintenance.', price: '$8,000 - $65,000+' },
    { icon: Building, title: 'Enterprise Architecture', desc: 'Strategic enterprise architecture planning, governance, and technology roadmap development.', price: '$10,000 - $80,000+' },
    { icon: Cloud, title: 'Cloud Cost Optimization', desc: 'Intelligent cloud cost management with automated optimization, budgeting, and cost allocation.', price: '$3,000 - $25,000+' },
    { icon: Shield, title: 'Security Operations Center', desc: '24/7 security monitoring, threat hunting, and incident response with AI-powered analytics.', price: '$15,000 - $120,000+' },
    { icon: Database, title: 'Data Governance Platform', desc: 'Comprehensive data governance with data quality, lineage tracking, and compliance automation.', price: '$6,000 - $50,000+' },
    { icon: Server, title: 'Disaster Recovery as a Service', desc: 'Cloud-based disaster recovery with automated failover, testing, and business continuity planning.', price: '$2,000 - $20,000+' },
    { icon: Network, title: 'Network Performance Monitoring', desc: 'Real-time network performance monitoring with AI-driven insights and automated optimization.', price: '$4,000 - $35,000+' },
    { icon: Building, title: 'IT Service Management', desc: 'Modern ITSM platform with service catalog, change management, and automated workflows.', price: '$5,000 - $40,000+' },
    { icon: Cloud, title: 'Cloud Migration Factory', desc: 'Large-scale cloud migration with automated tools, testing frameworks, and zero-downtime cutovers.', price: '$25,000 - $200,000+' },
    { icon: Shield, title: 'Vulnerability Management', desc: 'Automated vulnerability scanning, assessment, and remediation with risk-based prioritization.', price: '$3,000 - $30,000+' },
    { icon: Database, title: 'Data Analytics Platform', desc: 'Self-service analytics platform with data visualization, reporting, and AI-powered insights.', price: '$8,000 - $70,000+' },
    { icon: Server, title: 'Infrastructure as Code', desc: 'Automated infrastructure provisioning with Terraform, Ansible, and GitOps workflows.', price: '$6,000 - $50,000+' },
    { icon: Network, title: 'API Management Platform', desc: 'Comprehensive API management with gateway, security, analytics, and developer portal.', price: '$5,000 - $45,000+' },
    { icon: Building, title: 'Digital Transformation Hub', desc: 'End-to-end digital transformation consulting with technology implementation and change management.', price: '$20,000 - $150,000+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <h1 className="text-4xl font-bold sm:text-5xl">Enterprise-grade IT services, delivered with startup speed</h1>
        <p className="mt-4 max-w-2xl text-slate-300">From modernization to managed services, we design and operate robust, secure and cost-efficient platforms.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/contact" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold hover:from-cyan-400 hover:to-blue-500">Talk to an architect</Link>
          <Link to="/request-quote" className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-white/5">Request a quote</Link>
        </div>
        <div className="mt-10 text-xs text-slate-400">Typical T&M: $110–$200/hr blended; fixed-scope engagements available.</div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((o) => (
            <div key={o.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-cyan-400/30">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                <o.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{o.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{o.desc}</p>
              <div className="mt-4 text-sm font-semibold text-cyan-300">{o.price}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
          <div className="mb-2 font-semibold text-white">Deliverables</div>
          <ul className="grid gap-2 sm:grid-cols-2">
            <li>Architecture diagrams and IaC repositories</li>
            <li>Security baselines, policies and runbooks</li>
            <li>Monitoring and SLO dashboards</li>
            <li>Knowledge transfer and training sessions</li>
          </ul>
          <div className="mt-4 flex items-center gap-2 text-xs">
            <DollarSign className="h-3 w-3" />
            Avg project budgets: $10k–$120k depending on scope.
          </div>
          <a className="mt-3 inline-flex items-center text-cyan-300 hover:text-cyan-200" href="https://ziontechgroup.com/it-services" target="_blank" rel="noreferrer">
            Explore IT services on our site <ExternalLink className="ml-1 h-3 w-3" />
          </a>
          <div className="mt-6 text-xs text-slate-400">
            Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServices;

