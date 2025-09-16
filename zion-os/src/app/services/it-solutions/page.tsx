<<<<<<< HEAD
export default function Page() {
=======

;
"use client",import { useState } from "react",interface ITService  {id: string,name: string,description: string,deliverables: string[],timeline: string,pricing: string,startingPrice: number,contactLink: string,icon: string,features: string[],technologies: string[],industries: string[];
}const itServices: ITService[] = [;
  {id: "cloud-migration-complete",name: "Complete Cloud Migration & DevOps",description: "End-to-end cloud migration services with DevOps implementation, ensuring smooth transitions and optimal window.window.window.performance.",deliverables: [;
      "Cloud architecture design","Migration strategy and planning","Infrastructure as Code (IaC)","CI/CD pipeline setup","Performance optimization","Security and compliance","24/7 monitoring and support";
    ],timeline: "4-12 weeks depending on complexity",pricing: "Starting at $15,000",startingPrice: 15000,contactLink: "mailto:kleber@ziontechgroup.com?subject=Cloud%20Migration%20Inquiry",icon: "☁️",features: [;
      "Multi-cloud strategy planning","Infrastructure as Code (IaC)","CI/CD pipeline setup","Performance optimization","Security and compliance","24/7 monitoring and support","Disaster recovery planning","Cost optimization analysis";
    ],technologies: [;
      "AWS, Azure, Google Cloud","Terraform, CloudFormation","Docker, Kubernetes","Jenkins, GitLab CI","Prometheus, Grafana","Ansible, Chef";
    ],industries: [;
      "Financial Services","Healthcare","E-commerce","Manufacturing","Education","Government";
"use client",
import { useState  } from './react';,
interface ITService {
  id: string,
  name: string,
  description: string,
  deliverables: string[],
  timeline: string,
  pricing: string,
  starting_price: number,
  contact_link: string,
  icon: string,
  features: string[],
  technologies: string[],
"use client";
import { useState } from "react";
interface ITService {id: string;
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
const it_services: ITService[] = [;
  {
    id: "cloud - migration - complete",
    name: "Complete Cloud Migration & DevOps",
    description: "End - to - end cloud migration services with DevOps implementation, ensuring smooth transitions and optimal window.window.window.performance.",
    deliverables: [;
      "Cloud architecture design",
      "Migration strategy and planning",
      "Infrastructure as Code (IaC)",
      "CI / CD pipeline setup",
      "Performance optimization",
      "Security and compliance",
      "24 / 7 monitoring and support";
    ],
    timeline: "4 - 12 weeks depending on complexity",
    pricing: "Starting at $15, 000",
    starting_price: 15000,
    contact_link: "mailto:kleber@ziontechgroup.com?subject = Cloud%20Migration%20Inquiry",
    features: [;
      "Multi - cloud strategy planning",
      "Infrastructure as Code (IaC)",
      "CI / CD pipeline setup",
      "Performance optimization",
      "Security and compliance",
      "24 / 7 monitoring and support",
      "Disaster recovery planning",
      "Cost optimization analysis";
    ],
    technologies: [;
      "AWS, Azure, Google Cloud",
      "Terraform, CloudFormation",
      "Docker, Kubernetes",
      "Jenkins, GitLab CI",
      "Prometheus, Grafana",
      "Ansible, Chef";
    ],
    industries: [;
      "Financial Services",
      "Healthcare",
      "E - commerce",
      "Manufacturing",
      "Education",
      "Government";
    ];
  },{id: "cybersecurity-comprehensive",name: "Comprehensive Cybersecurity & Compliance",description: "Full-spectrum cybersecurity solutions including penetration testing, compliance audits, and security infrastructure setup.",deliverables: [;
      "Security assessment report","Penetration testing results","Compliance audit findings","Security policy documentation","Incident response plan","Security awareness training","Ongoing monitoring setup";
    ],timeline: "2-8 weeks depending on scope",pricing: "Starting at $8,500",startingPrice: 8500,contactLink: "mailto:kleber@ziontechgroup.com?subject=Cybersecurity%20Inquiry",icon: "🔒",features: [;
      "Penetration testing","Security audits and assessments","Compliance frameworks (SOC2, ISO27001)","Incident response planning","Security awareness training","Ongoing monitoring and support","Vulnerability management","Threat intelligence";
    ],technologies: [;
      "Nessus, OpenVAS","Metasploit, Burp Suite","SIEM platforms","EDR solutions","Firewall management","Identity management";
    ],industries: [;
      "Financial Services","Healthcare","Government","Technology","Manufacturing","Retail";
    ];
  },{id: "network-infrastructure-enterprise",name: "Enterprise Network Infrastructure",description: "Design, implementation, and maintenance of enterprise-grade network infrastructure and connectivity solutions.",deliverables: [;
      "Network design documentation","Hardware procurement and setup","Configuration and optimization","Security implementation","Performance testing","Documentation and training","Ongoing maintenance plan";
    ],timeline: "3-10 weeks depending on size",pricing: "Starting at $6,500",startingPrice: 6500,contactLink: "mailto:kleber@ziontechgroup.com?subject=Network%20Infrastructure%20Inquiry",icon: "🌐",features: [;
      "Network design and planning","Hardware procurement and setup","Wireless network optimization","VPN and remote access","Network security implementation","Ongoing maintenance and support","Performance monitoring","Capacity planning";
    ],technologies: [;
      "Cisco, Juniper, Aruba","VMware NSX","SD-WAN solutions","Network monitoring tools","Load balancers","Firewall appliances";
    ],industries: [;
      "Manufacturing","Healthcare","Education","Retail","Financial Services","Government";
    ];
  },{id: "it-strategy-consulting",name: "IT Strategy & Digital Transformation",description: "Strategic IT consulting services to help organizations align technology with business objectives and digital transformation goals.",deliverables: [;
      "Technology roadmap","Digital transformation strategy","Vendor evaluation report","Cost optimization analysis","Risk assessment report","Implementation timeline","Change management plan";
    ],timeline: "2-6 weeks depending on scope",pricing: "Starting at $200/hour",startingPrice: 200,contactLink: "mailto:kleber@ziontechgroup.com?subject=IT%20Strategy%20Inquiry",icon: "💡",features: [;
      "Technology roadmap planning","Digital transformation strategy","Vendor selection and management","Cost optimization analysis","Risk assessment and mitigation","Change management support","Technology evaluation","Performance benchmarking";
    ],technologies: [;
      "Enterprise architecture tools","Project management platforms","Business process modeling","Data analytics tools","Cloud cost management","Performance monitoring";
    ],industries: [;
      "All Industries","Cross-sector expertise","Enterprise focus","SMB optimization","Startup guidance","Non-profit support";
    ];
  },{id: "data-center-solutions",name: "Data Center & Colocation Services",description: "Complete data center solutions including design, build, migration, and ongoing management services.",deliverables: [;
      "Data center design","Infrastructure setup","Migration services","Monitoring and management","Disaster recovery setup","Documentation and training","Ongoing support";
    ],timeline: "8-20 weeks depending on complexity",pricing: "Starting at $25,000",startingPrice: 25000,contactLink: "mailto:kleber@ziontechgroup.com?subject=Data%20Center%20Inquiry",icon: "🏢",features: [;
      "Data center design and planning","Infrastructure procurement","Power and cooling systems","Security and access control","Monitoring and management","Disaster recovery planning","Compliance and certification","Ongoing maintenance";
    ],technologies: [;
      "Server hardware","Storage solutions","Network infrastructure","Power systems","Cooling systems","Security systems";
    ],industries: [;
      "Financial Services","Healthcare","Government","Technology","Manufacturing","Telecommunications";
    ];
  },{id: "managed-it-services",name: "Managed IT Services",description: "Comprehensive managed IT services including 24/7 monitoring, help desk support, and proactive maintenance.",deliverables: [;
      "24/7 monitoring setup","Help desk implementation","Proactive maintenance","Security management","Backup and recovery","Performance optimization","Monthly reporting";
    ],timeline: "2-4 weeks for setup",pricing: "Starting at $2,500/month",startingPrice: 2500,contactLink: "mailto:kleber@ziontechgroup.com?subject=Managed%20IT%20Services%20Inquiry",icon: "🔄",features: [;
      "24/7 monitoring and alerting","Help desk support","Proactive maintenance","Security management","Backup and recovery","Performance optimization","Monthly reporting","Strategic planning";
    ],technologies: [;
      "RMM platforms","PSA tools","Monitoring solutions","Backup systems","Security tools","Documentation platforms";
    ],industries: [;
      "All Industries","SMB focus","Enterprise support","Healthcare","Legal","Financial Services";
    ];
  }
],export default function ITSolutionsPage() {return (<div className="space-y-8">;{/* Header */}
      <div className="text - center space - y-4">;
        <h1 className="text - 4xl font - bold">IT Solutions & Services</h1>;
        <p className="text - xl opacity - 80 max - w-3xl mx - auto">;
"use client",import { useState  } from './react';,interface ITService  {id: string,name: string,description: string,deliverables: string[],timeline: string,pricing: string,starting_price: number,contact_link: string,icon: string,features: string[],technologies: string[],industries: string[];
}
const it_services: ITService[] = [;
  {id: "cloud - migration - complete",name: "Complete Cloud Migration & DevOps",description: "End - to - end cloud migration services with DevOps implementation, ensuring smooth transitions and optimal window.window.window.performance.",deliverables: [;
      "Cloud architecture design","Migration strategy and planning","Infrastructure as Code (IaC)","CI / CD pipeline setup","Performance optimization","Security and compliance","24 / 7 monitoring and support";
    ],timeline: "4 - 12 weeks depending on complexity",pricing: "Starting at $15, 000",starting_price: 15000,contact_link: "mailto:kleber@ziontechgroup.com?subject = Cloud%20Migration%20Inquiry",features: [;
      "Multi - cloud strategy planning","Infrastructure as Code (IaC)","CI / CD pipeline setup","Performance optimization","Security and compliance","24 / 7 monitoring and support","Disaster recovery planning","Cost optimization analysis";
    ],technologies: [;
      "AWS, Azure, Google Cloud","Terraform, CloudFormation","Docker, Kubernetes","Jenkins, GitLab CI","Prometheus, Grafana","Ansible, Chef";
    ],industries: [;
      "Financial Services","Healthcare","E - commerce","Manufacturing","Education","Government";
    ];
  },{id: "cybersecurity - comprehensive",name: "Comprehensive Cybersecurity & Compliance",description: "Full - spectrum cybersecurity solutions including penetration testing, compliance audits, and security infrastructure setup.",deliverables: [;
      "Security assessment report","Penetration testing results","Compliance audit findings","Security policy documentation","Incident response plan","Security awareness training","Ongoing monitoring setup";
    ],timeline: "2 - 8 weeks depending on scope",pricing: "Starting at $8, 500",starting_price: 8500,contact_link: "mailto:kleber@ziontechgroup.com?subject = Cybersecurity%20Inquiry",features: [;
      "Penetration testing","Security audits and assessments","Compliance frameworks (SOC2, ISO27001)","Incident response planning","Security awareness training","Ongoing monitoring and support","Vulnerability management","Threat intelligence";
    ],technologies: [;
      "Nessus, OpenVAS","Metasploit, Burp Suite","SIEM platforms","EDR solutions","Firewall management","Identity management";
    ],industries: [;
      "Financial Services","Healthcare","Government","Technology","Manufacturing","Retail";
    ];
  },{id: "network - infrastructure - enterprise",name: "Enterprise Network Infrastructure",description: "Design, implementation, and maintenance of enterprise - grade network infrastructure and connectivity solutions.",deliverables: [;
      "Network design documentation","Hardware procurement and setup","Configuration and optimization","Security implementation","Performance testing","Documentation and training","Ongoing maintenance plan";
    ],timeline: "3 - 10 weeks depending on size",pricing: "Starting at $6, 500",starting_price: 6500,contact_link: "mailto:kleber@ziontechgroup.com?subject = Network%20Infrastructure%20Inquiry",features: [;
      "Network design and planning","Hardware procurement and setup","Wireless network optimization","VPN and remote access","Network security implementation","Ongoing maintenance and support","Performance monitoring","Capacity planning";
    ],technologies: [;
      "Cisco, Juniper, Aruba","VMware NSX","SD - WAN solutions","Network monitoring tools","Load balancers","Firewall appliances";
    ],industries: [;
      "Manufacturing","Healthcare","Education","Retail","Financial Services","Government";
    ];
  },{id: "it - strategy - consulting",name: "IT Strategy & Digital Transformation",description: "Strategic IT consulting services to help organizations align technology with business objectives and digital transformation goals.",deliverables: [;
      "Technology roadmap","Digital transformation strategy","Vendor evaluation report","Cost optimization analysis","Risk assessment report","Implementation timeline","Change management plan";
    ],timeline: "2 - 6 weeks depending on scope",pricing: "Starting at $200 / hour",starting_price: 200,contact_link: "mailto:kleber@ziontechgroup.com?subject = IT%20Strategy%20Inquiry",features: [;
      "Technology roadmap planning","Digital transformation strategy","Vendor selection and management","Cost optimization analysis","Risk assessment and mitigation","Change management support","Technology evaluation","Performance benchmarking";
    ],technologies: [;
      "Enterprise architecture tools","Project management platforms","Business process modeling","Data analytics tools","Cloud cost management","Performance monitoring";
    ],industries: [;
      "All Industries","Cross - sector expertise","Enterprise focus","SMB optimization","Startup guidance","Non - profit support";
    ];
  },{id: "data - center - solutions",name: "Data Center & Colocation Services",description: "Complete data center solutions including design, build, migration, and ongoing management services.",deliverables: [;
      "Data center design","Infrastructure setup","Migration services","Monitoring and management","Disaster recovery setup","Documentation and training","Ongoing support";
    ],timeline: "8 - 20 weeks depending on complexity",pricing: "Starting at $25, 000",starting_price: 25000,contact_link: "mailto:kleber@ziontechgroup.com?subject = Data%20Center%20Inquiry",features: [;
      "Data center design and planning","Infrastructure procurement","Power and cooling systems","Security and access control","Monitoring and management","Disaster recovery planning","Compliance and certification","Ongoing maintenance";
    ],technologies: [;
      "Server hardware","Storage solutions","Network infrastructure","Power systems","Cooling systems","Security systems";
    ],industries: [;
      "Financial Services","Healthcare","Government","Technology","Manufacturing","Telecommunications";
    ];
  },{id: "managed - it - services",name: "Managed IT Services",description: "Comprehensive managed IT services including 24 / 7 monitoring, help desk support, and proactive maintenance.",deliverables: [;
      "24 / 7 monitoring setup","Help desk implementation","Proactive maintenance","Security management","Backup and recovery","Performance optimization","Monthly reporting";
    ],timeline: "2 - 4 weeks for setup",pricing: "Starting at $2, 500 / month",starting_price: 2500,contact_link: "mailto:kleber@ziontechgroup.com?subject = Managed%20IT%20Services%20Inquiry",features: [;
      "24 / 7 monitoring and alerting","Help desk support","Proactive maintenance","Security management","Backup and recovery","Performance optimization","Monthly reporting","Strategic planning";
    ],technologies: [;
      "RMM platforms","PSA tools","Monitoring solutions","Backup systems","Security tools","Documentation platforms";
    ],industries: [;
      "All Industries","SMB focus","Enterprise support","Healthcare","Legal","Financial Services";
    ];
  }
],export default /**;
 * ITSolutionsPage - Function description;
 */;
function ITSolutionsPage() {return (<div className="space-y-8">;    <div className="space-y-8">;
],
export default /**
 * ITSolutionsPage - Function description
 */
function ITSolutionsPage() {
>>>>>>> origin/merge-pr-12271
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Services It Solutions Page</h1>
        <p className="text-white/70">Content coming soon.</p>
      </div>
    </div>
  );
}
