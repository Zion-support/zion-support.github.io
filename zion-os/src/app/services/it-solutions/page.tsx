"use client&quot;;

import { useState } from &quot;react&quot;;

interface ITService {
  id: string;
  name: string;
  description: string;
  deliverables: string[];
  timeline: string;
  pricing: string;
  startingPrice: number;
  contactLink: string;
  icon: string;
  features: string[];
  technologies: string[];
  industries: string[];
}

const itServices: ITService[] = [
  {
    id: &quot;cloud-migration-complete&quot;,
    name: &quot;Complete Cloud Migration & DevOps&quot;,
    description: &quot;End-to-end cloud migration services with DevOps implementation, ensuring smooth transitions and optimal performance.&quot;,
    deliverables: [
      &quot;Cloud architecture design&quot;,
      &quot;Migration strategy and planning&quot;,
      &quot;Infrastructure as Code (IaC)&quot;,
      &quot;CI/CD pipeline setup&quot;,
      &quot;Performance optimization&quot;,
      &quot;Security and compliance&quot;,
      &quot;24/7 monitoring and support&quot;
    ],
    timeline: &quot;4-12 weeks depending on complexity&quot;,
    pricing: &quot;Starting at $15,000&quot;,
    startingPrice: 15000,
    contactLink: &quot;mailto:kleber@ziontechgroup.com?subject=Cloud%20Migration%20Inquiry&quot;,
    icon: &quot;☁️&quot;,
    features: [
      &quot;Multi-cloud strategy planning&quot;,
      &quot;Infrastructure as Code (IaC)&quot;,
      &quot;CI/CD pipeline setup&quot;,
      &quot;Performance optimization&quot;,
      &quot;Security and compliance&quot;,
      &quot;24/7 monitoring and support&quot;,
      &quot;Disaster recovery planning&quot;,
      &quot;Cost optimization analysis&quot;
    ],
    technologies: [
      &quot;AWS, Azure, Google Cloud&quot;,
      &quot;Terraform, CloudFormation&quot;,
      &quot;Docker, Kubernetes&quot;,
      &quot;Jenkins, GitLab CI&quot;,
      &quot;Prometheus, Grafana&quot;,
      &quot;Ansible, Chef&quot;
    ],
    industries: [
      &quot;Financial Services&quot;,
      &quot;Healthcare&quot;,
      &quot;E-commerce&quot;,
      &quot;Manufacturing&quot;,
      &quot;Education&quot;,
      &quot;Government&quot;
    ]
  },
  {
    id: &quot;cybersecurity-comprehensive&quot;,
    name: &quot;Comprehensive Cybersecurity & Compliance&quot;,
    description: &quot;Full-spectrum cybersecurity solutions including penetration testing, compliance audits, and security infrastructure setup.&quot;,
    deliverables: [
      &quot;Security assessment report&quot;,
      &quot;Penetration testing results&quot;,
      &quot;Compliance audit findings&quot;,
      &quot;Security policy documentation&quot;,
      &quot;Incident response plan&quot;,
      &quot;Security awareness training&quot;,
      &quot;Ongoing monitoring setup&quot;
    ],
    timeline: &quot;2-8 weeks depending on scope&quot;,
    pricing: &quot;Starting at $8,500&quot;,
    startingPrice: 8500,
    contactLink: &quot;mailto:kleber@ziontechgroup.com?subject=Cybersecurity%20Inquiry&quot;,
    icon: &quot;🔒&quot;,
    features: [
      &quot;Penetration testing&quot;,
      &quot;Security audits and assessments&quot;,
      &quot;Compliance frameworks (SOC2, ISO27001)&quot;,
      &quot;Incident response planning&quot;,
      &quot;Security awareness training&quot;,
      &quot;Ongoing monitoring and support&quot;,
      &quot;Vulnerability management&quot;,
      &quot;Threat intelligence&quot;
    ],
    technologies: [
      &quot;Nessus, OpenVAS&quot;,
      &quot;Metasploit, Burp Suite&quot;,
      &quot;SIEM platforms&quot;,
      &quot;EDR solutions&quot;,
      &quot;Firewall management&quot;,
      &quot;Identity management&quot;
    ],
    industries: [
      &quot;Financial Services&quot;,
      &quot;Healthcare&quot;,
      &quot;Government&quot;,
      &quot;Technology&quot;,
      &quot;Manufacturing&quot;,
      &quot;Retail&quot;
    ]
  },
  {
    id: &quot;network-infrastructure-enterprise&quot;,
    name: &quot;Enterprise Network Infrastructure&quot;,
    description: &quot;Design, implementation, and maintenance of enterprise-grade network infrastructure and connectivity solutions.&quot;,
    deliverables: [
      &quot;Network design documentation&quot;,
      &quot;Hardware procurement and setup&quot;,
      &quot;Configuration and optimization&quot;,
      &quot;Security implementation&quot;,
      &quot;Performance testing&quot;,
      &quot;Documentation and training&quot;,
      &quot;Ongoing maintenance plan&quot;
    ],
    timeline: &quot;3-10 weeks depending on size&quot;,
    pricing: &quot;Starting at $6,500&quot;,
    startingPrice: 6500,
    contactLink: &quot;mailto:kleber@ziontechgroup.com?subject=Network%20Infrastructure%20Inquiry&quot;,
    icon: &quot;🌐&quot;,
    features: [
      &quot;Network design and planning&quot;,
      &quot;Hardware procurement and setup&quot;,
      &quot;Wireless network optimization&quot;,
      &quot;VPN and remote access&quot;,
      &quot;Network security implementation&quot;,
      &quot;Ongoing maintenance and support&quot;,
      &quot;Performance monitoring&quot;,
      &quot;Capacity planning&quot;
    ],
    technologies: [
      &quot;Cisco, Juniper, Aruba&quot;,
      &quot;VMware NSX&quot;,
      &quot;SD-WAN solutions&quot;,
      &quot;Network monitoring tools&quot;,
      &quot;Load balancers&quot;,
      &quot;Firewall appliances&quot;
    ],
    industries: [
      &quot;Manufacturing&quot;,
      &quot;Healthcare&quot;,
      &quot;Education&quot;,
      &quot;Retail&quot;,
      &quot;Financial Services&quot;,
      &quot;Government&quot;
    ]
  },
  {
    id: &quot;it-strategy-consulting&quot;,
    name: &quot;IT Strategy & Digital Transformation&quot;,
    description: &quot;Strategic IT consulting services to help organizations align technology with business objectives and digital transformation goals.&quot;,
    deliverables: [
      &quot;Technology roadmap&quot;,
      &quot;Digital transformation strategy&quot;,
      &quot;Vendor evaluation report&quot;,
      &quot;Cost optimization analysis&quot;,
      &quot;Risk assessment report&quot;,
      &quot;Implementation timeline&quot;,
      &quot;Change management plan&quot;
    ],
    timeline: &quot;2-6 weeks depending on scope&quot;,
    pricing: &quot;Starting at $200/hour&quot;,
    startingPrice: 200,
    contactLink: &quot;mailto:kleber@ziontechgroup.com?subject=IT%20Strategy%20Inquiry&quot;,
    icon: &quot;💡&quot;,
    features: [
      &quot;Technology roadmap planning&quot;,
      &quot;Digital transformation strategy&quot;,
      &quot;Vendor selection and management&quot;,
      &quot;Cost optimization analysis&quot;,
      &quot;Risk assessment and mitigation&quot;,
      &quot;Change management support&quot;,
      &quot;Technology evaluation&quot;,
      &quot;Performance benchmarking&quot;
    ],
    technologies: [
      &quot;Enterprise architecture tools&quot;,
      &quot;Project management platforms&quot;,
      &quot;Business process modeling&quot;,
      &quot;Data analytics tools&quot;,
      &quot;Cloud cost management&quot;,
      &quot;Performance monitoring&quot;
    ],
    industries: [
      &quot;All Industries&quot;,
      &quot;Cross-sector expertise&quot;,
      &quot;Enterprise focus&quot;,
      &quot;SMB optimization&quot;,
      &quot;Startup guidance&quot;,
      &quot;Non-profit support&quot;
    ]
  },
  {
    id: &quot;data-center-solutions&quot;,
    name: &quot;Data Center & Colocation Services&quot;,
    description: &quot;Complete data center solutions including design, build, migration, and ongoing management services.&quot;,
    deliverables: [
      &quot;Data center design&quot;,
      &quot;Infrastructure setup&quot;,
      &quot;Migration services&quot;,
      &quot;Monitoring and management&quot;,
      &quot;Disaster recovery setup&quot;,
      &quot;Documentation and training&quot;,
      &quot;Ongoing support&quot;
    ],
    timeline: &quot;8-20 weeks depending on complexity&quot;,
    pricing: &quot;Starting at $25,000&quot;,
    startingPrice: 25000,
    contactLink: &quot;mailto:kleber@ziontechgroup.com?subject=Data%20Center%20Inquiry&quot;,
    icon: &quot;🏢&quot;,
    features: [
      &quot;Data center design and planning&quot;,
      &quot;Infrastructure procurement&quot;,
      &quot;Power and cooling systems&quot;,
      &quot;Security and access control&quot;,
      &quot;Monitoring and management&quot;,
      &quot;Disaster recovery planning&quot;,
      &quot;Compliance and certification&quot;,
      &quot;Ongoing maintenance&quot;
    ],
    technologies: [
      &quot;Server hardware&quot;,
      &quot;Storage solutions&quot;,
      &quot;Network infrastructure&quot;,
      &quot;Power systems&quot;,
      &quot;Cooling systems&quot;,
      &quot;Security systems&quot;
    ],
    industries: [
      &quot;Financial Services&quot;,
      &quot;Healthcare&quot;,
      &quot;Government&quot;,
      &quot;Technology&quot;,
      &quot;Manufacturing&quot;,
      &quot;Telecommunications&quot;
    ]
  },
  {
    id: &quot;managed-it-services&quot;,
    name: &quot;Managed IT Services&quot;,
    description: &quot;Comprehensive managed IT services including 24/7 monitoring, help desk support, and proactive maintenance.&quot;,
    deliverables: [
      &quot;24/7 monitoring setup&quot;,
      &quot;Help desk implementation&quot;,
      &quot;Proactive maintenance&quot;,
      &quot;Security management&quot;,
      &quot;Backup and recovery&quot;,
      &quot;Performance optimization&quot;,
      &quot;Monthly reporting&quot;
    ],
    timeline: &quot;2-4 weeks for setup&quot;,
    pricing: &quot;Starting at $2,500/month&quot;,
    startingPrice: 2500,
    contactLink: &quot;mailto:kleber@ziontechgroup.com?subject=Managed%20IT%20Services%20Inquiry&quot;,
    icon: &quot;🔄&quot;,
    features: [
      &quot;24/7 monitoring and alerting&quot;,
      &quot;Help desk support&quot;,
      &quot;Proactive maintenance&quot;,
      &quot;Security management&quot;,
      &quot;Backup and recovery&quot;,
      &quot;Performance optimization&quot;,
      &quot;Monthly reporting&quot;,
      &quot;Strategic planning&quot;
    ],
    technologies: [
      &quot;RMM platforms&quot;,
      &quot;PSA tools&quot;,
      &quot;Monitoring solutions&quot;,
      &quot;Backup systems&quot;,
      &quot;Security tools&quot;,
      &quot;Documentation platforms&quot;
    ],
    industries: [
      &quot;All Industries&quot;,
      &quot;SMB focus&quot;,
      &quot;Enterprise support&quot;,
      &quot;Healthcare&quot;,
      &quot;Legal&quot;,
      &quot;Financial Services"
    ]
  }
];

export default function ITSolutionsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">IT Solutions & Services</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Enterprise-grade IT solutions designed to modernize your infrastructure, 
          enhance security, and drive operational efficiency across your organization.
        </p>
      </div>

      {/* IT Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {itServices.map(service => (
          <div
            key={service.id}
            className="rounded-lg border border-white/10 bg-white/5 p-6 space-y-6"
          >
            {/* Service Header */}
            <div className="text-center space-y-3">
              <div className="text-4xl">{service.icon}</div>
              <h2 className="text-2xl font-bold">{service.name}</h2>
              <p className="opacity-80">{service.description}</p>
              <div className="text-2xl font-bold text-blue-400">{service.pricing}</div>
              <div className="text-sm opacity-60">Timeline: {service.timeline}</div>
            </div>

            {/* Deliverables */}
            <div>
              <h3 className="font-semibold mb-3 text-blue-400">Deliverables</h3>
              <div className="grid grid-cols-1 gap-2">
                {service.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-green-400">✓</span>
                    <span>{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3 text-purple-400">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-blue-400">⚙️</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-semibold mb-3 text-green-400">Technologies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-400">🔧</span>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div>
              <h3 className="font-semibold mb-3 text-orange-400">Industries Served</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.industries.map((industry, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-purple-400">🏢</span>
                    <span>{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href={service.contactLink}
                className="w-full block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold"
              >
                Get Started
              </Link>
              <a
                href={`https://ziontechgroup.com/services/${service.id}`}
                className="w-full block text-center text-blue-400 hover:text-blue-300 text-sm underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* IT Capabilities Overview */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">IT Capabilities Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
            <div className="text-3xl mb-3">☁️</div>
            <h3 className="font-semibold mb-2">Cloud Solutions</h3>
            <p className="text-sm opacity-80">Multi-cloud strategy, migration, and optimization</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold mb-2">Cybersecurity</h3>
            <p className="text-sm opacity-80">Comprehensive security and compliance solutions</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="font-semibold mb-2">Infrastructure</h3>
            <p className="text-sm opacity-80">Network design, implementation, and management</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
            <div className="text-3xl mb-3">💡</div>
            <h3 className="font-semibold mb-2">Strategy</h3>
            <p className="text-sm opacity-80">IT strategy and digital transformation consulting</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6 py-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg border border-white/10">
        <h2 className="text-3xl font-bold">Ready to Modernize Your IT Infrastructure?</h2>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">
          Let's discuss how our IT solutions can transform your technology landscape, 
          enhance security, and drive operational efficiency. Get in touch for a comprehensive IT assessment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=IT%20Solutions%20Consultation"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold text-lg"
          >
            Schedule IT Consultation
          </Link>
          <a
            href="tel:+13024640950"
            className="border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all font-semibold text-lg"
          >
            Call: +1 302 464 0950
          </Link>
        </div>
      </div>

      {/* Back to Services */}
      <div className="text-center">
        <a
          href="/services"
          className="inline-block px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all font-semibold"
        >
          ← Back to All Services
        </Link>
      </div>
    </div>
  );
}