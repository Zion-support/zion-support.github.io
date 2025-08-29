import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Server, Shield, Cpu, Cable, LifeBuoy, DollarSign, ExternalLink, Wrench, Database, Building, Network, Globe } from 'lucide-react';

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
    { icon: Shield, title: 'Zero Trust Enablement', desc: 'Network segmentation, identity-aware proxies, device posture and continuous verification.', price: '$6,000 - $60,000+' }
    ,
    // New IT Services
    { icon: Cpu, title: '5G Enterprise Solutions', desc: 'Private 5G networks, edge computing, and IoT integration for enterprise environments.', price: '$25,000 - $200,000+' },
    { icon: Database, title: 'Data Mesh Architecture', desc: 'Distributed data architecture with domain-driven design and self-service data platforms.', price: '$15,000 - $120,000+' },
    { icon: Cloud, title: 'Hybrid Cloud Management', desc: 'Seamless integration between on-premises and cloud environments with unified management.', price: '$12,000 - $100,000+' },
    { icon: Server, title: 'Container Orchestration', desc: 'Advanced Kubernetes management with multi-cluster operations and GitOps workflows.', price: '$8,000 - $80,000+' },
    { icon: Shield, title: 'Cloud Security Posture Management', desc: 'Continuous cloud security monitoring, compliance checking, and risk assessment.', price: '$5,000 - $45,000+' },
    { icon: Network, title: 'Software-Defined Networking', desc: 'SDN implementation with network automation, virtualization, and centralized control.', price: '$18,000 - $150,000+' },
    { icon: Database, title: 'Graph Database Solutions', desc: 'Knowledge graph implementation, relationship mapping, and complex query optimization.', price: '$10,000 - $85,000+' },
    { icon: Cpu, title: 'High-Performance Computing', desc: 'HPC cluster design, parallel processing optimization, and scientific computing solutions.', price: '$50,000 - $500,000+' },
    { icon: Globe, title: 'Global CDN & Edge Network', desc: 'Content delivery optimization, edge computing, and global performance acceleration.', price: '$8,000 - $75,000+' },
    { icon: Shield, title: 'Quantum-Safe Cryptography', desc: 'Post-quantum cryptography implementation and quantum-resistant security protocols.', price: '$20,000 - $180,000+' },
    { icon: Database, title: 'Real-Time Data Streaming', desc: 'Apache Kafka, event streaming, and real-time analytics infrastructure.', price: '$6,000 - $60,000+' },
    { icon: Cloud, title: 'Serverless Architecture', desc: 'Event-driven serverless applications with auto-scaling and pay-per-use pricing.', price: '$4,000 - $40,000+' },
    { icon: Server, title: 'Microservices Migration', desc: 'Legacy system modernization, microservices architecture, and API-first design.', price: '$25,000 - $250,000+' },
    { icon: Shield, title: 'DevSecOps Implementation', desc: 'Security integration in CI/CD pipelines, automated security testing, and compliance automation.', price: '$8,000 - $80,000+' },
    { icon: Database, title: 'Data Lakehouse Architecture', desc: 'Unified data architecture combining data lake flexibility with data warehouse performance.', price: '$20,000 - $180,000+' },
    { icon: Network, title: 'Network Function Virtualization', desc: 'NFV implementation, virtual network functions, and network automation.', price: '$30,000 - $300,000+' },
    { icon: Cpu, title: 'AI Infrastructure Platform', desc: 'GPU clusters, ML pipeline infrastructure, and AI model deployment platform.', price: '$40,000 - $400,000+' },
    { icon: Globe, title: 'Multi-Region Disaster Recovery', desc: 'Global disaster recovery, multi-region failover, and business continuity planning.', price: '$35,000 - $350,000+' },
    { icon: Shield, title: 'Compliance Automation Platform', desc: 'Automated compliance checking, audit preparation, and regulatory reporting.', price: '$12,000 - $120,000+' },
    { icon: Database, title: 'Data Governance Framework', desc: 'Data quality management, metadata management, and data lineage tracking.', price: '$15,000 - $150,000+' }
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

