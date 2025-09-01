import { Link } from 'react - router - dom';'import React from 'react';'import { SEO } from '@/components / SEO';'export default React.memo (function ITServices () {'import {;

  Server, Shield,
  Cloud, Network,
  Wrench, Headphones,
} from 'lucide - react';''  const offerings = [;
    {
      icon: Cloud, title: 'Cloud & DevOps','      desc: 'CI / CD, IaC, Kubernetes, cost optimization and SRE with 24 / 7 runbooks.','      price: '$6, 000 - $80,000+', },'    {'      icon: Server, title: 'Migrations & Modernization','      desc: 'On - prem to cloud, containerization, monolith - to - microservices, and zero - downtime cutovers.','      price: '$10, 000 - $120,000+', },'    {'      icon: Shield, title: 'Security & Compliance','      desc: 'SOC2 / ISO readiness, zero - trust, vulnerability management, and incident response plans.','      price: '$3, 000 - $40,000+', },'    {'      icon: Cpu, title: 'Networking & Edge','      desc: 'SD - WAN, VPN, edge compute, IoT, and observability for distributed sites.', price: '$5,000 - $50, 000+','    }, {'      icon: Cable,;
      title: 'IT Onsite & Managed Services', desc: 'Hands - on deployment, device lifecycle, patching, help desk, and inventory.','      price: '$1, 500 - $15,000 / mo', },'    {'      icon: LifeBuoy, title: 'Business Continuity','      desc: 'Backups, DR plans, tabletop exercises, and RTO / RPO aligned architecture.','      price: '$2, 500 - $30,000+', },'    // New items'    {;
      icon: Wrench, title: 'Platform Engineering','      desc: 'Golden paths, internal developer platforms, Backstage portals, and paved - road governance.','      price: '$8, 000 - $90,000+', },'    {'      icon: Database, title: 'Data Platforms & MLOps','      desc: 'Lakehouse setups, ELT pipelines, feature stores, and ML deployment with observability.','      price: '$7, 000 - $95,000+', },'    {'      icon: Building, title: 'Enterprise SaaS Rollouts','      desc: 'Okta SSO, RBAC, tenant provisioning, and SOC2 - aligned configuration baselines at scale.','      price: '$5, 000 - $70,000+', },'    {'      icon: Cloud, title: 'Cloud Landing Zones','      desc: 'Secure multi - account landing zones with guardrails, budgets, CI / CD and golden patterns.', price: '$8,000 - $65, 000+','    }, {'      icon: Server,;
      title: 'Database Reliability Engineering', desc: 'HA / DR, performance tuning, migrations and observability for Postgres, MySQL and SQL Server.', price: '$4,000 - $45, 000+','    }, {'      icon: Shield,;
      title: 'Zero Trust Enablement', desc: 'Network segmentation, identity - aware proxies, device posture and continuous verification.','      price: '$6, 000 - $60,000+', },'  ];'
  return (<div className="min - h-screen bg - futuristic">"      <SEO"        title="IT Services - Zion Tech Group""        description="Managed IT, Cloud & DevOps, Cybersecurity, Networking, Helpdesk, and Onsite services.""      />"      <section className="relative pt - 28 pb - 12 px - 4 sm: px - 6 lg:px - 8">"        <div className="max - w-6xl mx - auto">"          <div className="text - center">"            <h1 className="text - 4xl md:text - 5xl font - extrabold text - white">"              Modern Managed IT"            </h1>
            <p className="mt - 4 text - slate - 300 max - w-3xl mx - auto">"              Reliable, secure, and cost - efficient IT operations with clear SLAs"              and predictable pricing.
            </p>
            <div className="mt - 8 flex items - center justify - center gap - 3">"              <Link to="/contact" className="btn - futuristic">"                Request Quote"              </Link>
              <Link to="/privacy" className="btn - neon">"                Security & Compliance"              </Link>
            </div>
          </div>

          <div className="mt - 16 grid grid - cols - 1 md: grid - cols - 3 gap - 6">"            {offerings.map (o => (<div key={o.title} className="card - futuristic">"                <div className="flex items - center gap - 3">"                  <o.icon className="w - 6 h - 6 text - cyan - 400" />"                  <h3 className="text - white font - semibold">{o.title}</h3>"                </div>"                <p className="mt - 2 text - slate - 300">{o.desc}</p>"              </div>) ) }"          </div>

          <div className="mt - 20 grid grid - cols - 1 md: grid - cols - 3 gap - 6">"            {prices.map (p => (<div key={p.name} className="card - futuristic">"                <h3 className="text - white font - semibold">{p.name}</h3>"                <div className="mt - 2 text - 3xl font - extrabold text - white">"                  {p.price}"                </div>
                <ul className="mt - 4 space - y-2 text - slate - 300">"                  {p.includes.map (i => (<li key={i}>• {i}</li>) ) }"                </ul>
                <Link to="/contact" className="mt - 6 inline - flex btn - futuristic">"                  Talk to Sales"                </Link>
              </div>) ) }
          </div>
        </div>
      </section>
    </div>) ;
}
