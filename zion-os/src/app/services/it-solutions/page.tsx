"use client";


interface ITService {_id: string;
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
  industries: string[];}

const itServices: ITService[] = [
  {_id: "cloud-migration-complete", _name: "Complete Cloud Migration & DevOps", _description: "End-to-end cloud migration services with DevOps implementation, _ensuring smooth transitions and optimal performance.", _deliverables: [
      "Cloud architecture design", _"Migration strategy and planning", _"Infrastructure as Code (IaC)", _"CI/CD pipeline setup", _"Performance optimization", _"Security and compliance", _"24/7 monitoring and support"
    ], _timeline: "4-12 weeks depending on complexity", _pricing: "Starting at $15, _000", _startingPrice: 15000, _contactLink: "mailto:kleber@ziontechgroup.com?subject=Cloud%20Migration%20Inquiry", _icon: "☁️", _features: [
      "Multi-cloud strategy planning", _"Infrastructure as Code (IaC)", _"CI/CD pipeline setup", _"Performance optimization", _"Security and compliance", _"24/7 monitoring and support", _"Disaster recovery planning", _"Cost optimization analysis"
    ], _technologies: [
      "AWS, _Azure, _Google Cloud", _"Terraform, _CloudFormation", _"Docker, _Kubernetes", _"Jenkins, _GitLab CI", _"Prometheus, _Grafana", _"Ansible, _Chef"
    ], _industries: [
      "Financial Services", _"Healthcare", _"E-commerce", _"Manufacturing", _"Education", _"Government"
    ]},
  {_id: "cybersecurity-comprehensive", _name: "Comprehensive Cybersecurity & Compliance", _description: "Full-spectrum cybersecurity solutions including penetration testing, _compliance audits, _and security infrastructure setup.", _deliverables: [
      "Security assessment report", _"Penetration testing results", _"Compliance audit findings", _"Security policy documentation", _"Incident response plan", _"Security awareness training", _"Ongoing monitoring setup"
    ], _timeline: "2-8 weeks depending on scope", _pricing: "Starting at $8, _500", _startingPrice: 8500, _contactLink: "mailto:kleber@ziontechgroup.com?subject=Cybersecurity%20Inquiry", _icon: "🔒", _features: [
      "Penetration testing", _"Security audits and assessments", _"Compliance frameworks (SOC2, _ISO27001)", _"Incident response planning", _"Security awareness training", _"Ongoing monitoring and support", _"Vulnerability management", _"Threat intelligence"
    ], _technologies: [
      "Nessus, _OpenVAS", _"Metasploit, _Burp Suite", _"SIEM platforms", _"EDR solutions", _"Firewall management", _"Identity management"
    ], _industries: [
      "Financial Services", _"Healthcare", _"Government", _"Technology", _"Manufacturing", _"Retail"
    ]},
  {_id: "network-infrastructure-enterprise", _name: "Enterprise Network Infrastructure", _description: "Design, _implementation, _and maintenance of enterprise-grade network infrastructure and connectivity solutions.", _deliverables: [
      "Network design documentation", _"Hardware procurement and setup", _"Configuration and optimization", _"Security implementation", _"Performance testing", _"Documentation and training", _"Ongoing maintenance plan"
    ], _timeline: "3-10 weeks depending on size", _pricing: "Starting at $6, _500", _startingPrice: 6500, _contactLink: "mailto:kleber@ziontechgroup.com?subject=Network%20Infrastructure%20Inquiry", _icon: "🌐", _features: [
      "Network design and planning", _"Hardware procurement and setup", _"Wireless network optimization", _"VPN and remote access", _"Network security implementation", _"Ongoing maintenance and support", _"Performance monitoring", _"Capacity planning"
    ], _technologies: [
      "Cisco, _Juniper, _Aruba", _"VMware NSX", _"SD-WAN solutions", _"Network monitoring tools", _"Load balancers", _"Firewall appliances"
    ], _industries: [
      "Manufacturing", _"Healthcare", _"Education", _"Retail", _"Financial Services", _"Government"
    ]},
  {_id: "it-strategy-consulting", _name: "IT Strategy & Digital Transformation", _description: "Strategic IT consulting services to help organizations align technology with business objectives and digital transformation goals.", _deliverables: [
      "Technology roadmap", _"Digital transformation strategy", _"Vendor evaluation report", _"Cost optimization analysis", _"Risk assessment report", _"Implementation timeline", _"Change management plan"
    ], _timeline: "2-6 weeks depending on scope", _pricing: "Starting at $200/hour", _startingPrice: 200, _contactLink: "mailto:kleber@ziontechgroup.com?subject=IT%20Strategy%20Inquiry", _icon: "💡", _features: [
      "Technology roadmap planning", _"Digital transformation strategy", _"Vendor selection and management", _"Cost optimization analysis", _"Risk assessment and mitigation", _"Change management support", _"Technology evaluation", _"Performance benchmarking"
    ], _technologies: [
      "Enterprise architecture tools", _"Project management platforms", _"Business process modeling", _"Data analytics tools", _"Cloud cost management", _"Performance monitoring"
    ], _industries: [
      "All Industries", _"Cross-sector expertise", _"Enterprise focus", _"SMB optimization", _"Startup guidance", _"Non-profit support"
    ]},
  {_id: "data-center-solutions", _name: "Data Center & Colocation Services", _description: "Complete data center solutions including design, _build, _migration, _and ongoing management services.", _deliverables: [
      "Data center design", _"Infrastructure setup", _"Migration services", _"Monitoring and management", _"Disaster recovery setup", _"Documentation and training", _"Ongoing support"
    ], _timeline: "8-20 weeks depending on complexity", _pricing: "Starting at $25, _000", _startingPrice: 25000, _contactLink: "mailto:kleber@ziontechgroup.com?subject=Data%20Center%20Inquiry", _icon: "🏢", _features: [
      "Data center design and planning", _"Infrastructure procurement", _"Power and cooling systems", _"Security and access control", _"Monitoring and management", _"Disaster recovery planning", _"Compliance and certification", _"Ongoing maintenance"
    ], _technologies: [
      "Server hardware", _"Storage solutions", _"Network infrastructure", _"Power systems", _"Cooling systems", _"Security systems"
    ], _industries: [
      "Financial Services", _"Healthcare", _"Government", _"Technology", _"Manufacturing", _"Telecommunications"
    ]},
  {_id: "managed-it-services", _name: "Managed IT Services", _description: "Comprehensive managed IT services including 24/7 monitoring, _help desk support, _and proactive maintenance.", _deliverables: [
      "24/7 monitoring setup", _"Help desk implementation", _"Proactive maintenance", _"Security management", _"Backup and recovery", _"Performance optimization", _"Monthly reporting"
    ], _timeline: "2-4 weeks for setup", _pricing: "Starting at $2, _500/month", _startingPrice: 2500, _contactLink: "mailto:kleber@ziontechgroup.com?subject=Managed%20IT%20Services%20Inquiry", _icon: "🔄", _features: [
      "24/7 monitoring and alerting", _"Help desk support", _"Proactive maintenance", _"Security management", _"Backup and recovery", _"Performance optimization", _"Monthly reporting", _"Strategic planning"
    ], _technologies: [
      "RMM platforms", _"PSA tools", _"Monitoring solutions", _"Backup systems", _"Security tools", _"Documentation platforms"
    ], _industries: [
      "All Industries", _"SMB focus", _"Enterprise support", _"Healthcare", _"Legal", _"Financial Services"
    ]}
];

export default function ITSolutionsPage() {_return (_<div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">IT Solutions & Services</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Enterprise-grade IT solutions designed to modernize your infrastructure, _enhance security, _and drive operational efficiency across your organization.
        </p>
      </div>

      {_/* IT Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {_itServices.map(service => (
          <div
            key={service.id}
            className="rounded-lg border border-white/10 bg-white/5 p-6 space-y-6"
          >
            {_/* Service Header */}
            <div className="text-center space-y-3">
              <div className="text-4xl">{_service.icon}</div>
              <h2 className="text-2xl font-bold">{_service.name}</h2>
              <p className="opacity-80">{_service.description}</p>
              <div className="text-2xl font-bold text-blue-400">{_service.pricing}</div>
              <div className="text-sm opacity-60">Timeline: {_service.timeline}</div>
            </div>

            {_/* Deliverables */}
            <div>
              <h3 className="font-semibold mb-3 text-blue-400">Deliverables</h3>
              <div className="grid grid-cols-1 gap-2">
                {_service.deliverables.map((deliverable, _index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-green-400">✓</span>
                    <span>{_deliverable}</span>
                  </div>
                ))}
              </div>
            </div>

            {_/* Features */}
            <div>
              <h3 className="font-semibold mb-3 text-purple-400">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {_service.features.map(_(feature, _index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-blue-400">⚙️</span>
                    <span>{_feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {_/* Technologies */}
            <div>
              <h3 className="font-semibold mb-3 text-green-400">Technologies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {_service.technologies.map(_(tech, _index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-400">🔧</span>
                    <span>{_tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {_/* Industries */}
            <div>
              <h3 className="font-semibold mb-3 text-orange-400">Industries Served</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {_service.industries.map(_(industry, _index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-purple-400">🏢</span>
                    <span>{_industry}</span>
                  </div>
                ))}
              </div>
            </div>

            {_/* CTA */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href={_service.contactLink}
                className="w-full block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold"
              >
                Get Started
              </a>
              <a
                href={_`https://ziontechgroup.com/services/${service.id}`}
                className="w-full block text-center text-blue-400 hover:text-blue-300 text-sm underline"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {_/* IT Capabilities Overview */}
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

      {_/* CTA Section */}
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
          </a>
          <a
            href="tel:+13024640950"
            className="border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all font-semibold text-lg"
          >
            Call: +1 302 464 0950
          </a>
        </div>
      </div>

      {_/* Back to Services */}
      <div className="text-center">
        <a
          href="/services"
          className="inline-block px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all font-semibold"
        >
          ← Back to All Services
        </a>
      </div>
    </div>
  );
}