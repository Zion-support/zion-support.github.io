<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Zap, Database, Server, GitFork, Cpu, Globe, Shield } from 'lucide-react';
import { SEO } from '@/components/SEO';

const CloudDevOps = () => {
  const cloudServices = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with minimal downtime and maximum efficiency.",
      features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Performance Optimization"]
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description: "Automated infrastructure provisioning and management using modern DevOps practices.",
      features: ["Terraform", "AWS CloudFormation", "Azure ARM", "Kubernetes"]
    },
    {
      icon: GitFork,
      title: "CI/CD Pipelines",
      description: "Automated build, test, and deployment pipelines for faster, more reliable releases.",
      features: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps"]
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Scalable database solutions with high availability and disaster recovery.",
      features: ["AWS RDS", "Azure SQL", "MongoDB Atlas", "Redis"]
    }
  ];

  const platforms = [
    {
      name: "AWS",
      description: "Amazon Web Services cloud platform solutions",
      icon: "☁️"
    },
    {
      name: "Azure",
      description: "Microsoft Azure cloud services and solutions",
      icon: "🔷"
    },
    {
      name: "Google Cloud",
      description: "Google Cloud Platform infrastructure and services",
      icon: "🔵"
    },
    {
      name: "Multi-Cloud",
      description: "Hybrid and multi-cloud strategy implementation",
      icon: "🌐"
    }
  ];

  const devOpsTools = [
    { category: "CI/CD", tools: ["Jenkins", "GitLab CI", "GitHub Actions", "CircleCI", "ArgoCD"] },
    { category: "Infrastructure", tools: ["Terraform", "Ansible", "Puppet", "Chef", "CloudFormation"] },
    { category: "Monitoring", tools: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"] },
    { category: "Security", tools: ["Vault", "AWS IAM", "Azure AD", "Google IAM", "Prisma Cloud"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Cloud & DevOps — Zion Tech Group | Cloud Migration & DevOps Services"
        description="Transform your infrastructure with Zion Tech Group's cloud migration and DevOps services. AWS, Azure, GCP expertise with modern DevOps practices."
        keywords="cloud migration, DevOps, AWS, Azure, GCP, infrastructure as code, CI/CD"
        canonical="https://ziontechgroup.com/services/cloud-devops"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Cloud className="w-4 h-4 mr-2"/>
              Cloud & DevOps
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Infrastructure with
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Modern DevOps</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Expert cloud migration and DevOps implementation services for modern, scalable, and secure infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Cloud & DevOps Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white"/>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Cloud Platforms We Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all">
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{platform.name}</h3>
                <p className="text-gray-300 text-sm">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Tools */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">DevOps Tools & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {devOpsTools.map((category, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                <div className="space-y-2">
                  {category.tools.map((tool, idx) => (
                    <div key={idx} className="text-gray-300 text-sm flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Infrastructure?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our cloud migration and DevOps services can help you achieve faster deployments, better scalability, and improved security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
            >
              📞 Call +1 (302) 464-0950
            </a>
            <a 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudDevOps;


export { CloudDevOps };

export { CloudDevOps };

export { CloudDevOps };

export { CloudDevOps };

export { CloudDevOps };
=======
<<<<<<< HEAD
import React from 'react'; import { Link  } from 'react-router-dom'; import { Cloud, Zap, Database, Server, GitBranch, Cpu, Globe, Shield  } from 'lucide-react'; import SEO from '@/components/SEO'; ; const CloudDevOps = () => {; const cloudServices = [; {; icon: Cloud,; title: "Cloud Migration",";"";" description: "Seamless migration to cloud platforms with minimal downtime and maximum efficiency.",";"";" features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Performance Optimization"];";" },;";" {;"";" icon: Server,";"";" title: "Infrastructure as Code",";"";" description: "Automated infrastructure provisioning and management using modern DevOps practices.",";"";" features: ["Terraform", "AWS CloudFormation", "Azure ARM", "Kubernetes"];";" },;";" {;"";" icon: GitFork,";"";" title: "CI/CD Pipelines",";"";" description: "Automated build, test, and deployment pipelines for faster, more reliable releases.",";"";" features: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps"];";" },;";" {;"";" icon: Database,";"";" title: "Database Management",";"";" description: "Scalable database solutions with high availability and disaster recovery.",";"";" features: ["AWS RDS", "Azure SQL", "MongoDB Atlas", "Redis"]; }; ];" ;";" const platforms = [;";" {;";"";" name: "AWS",";"";" description: "Amazon Web Services cloud platform solutions",";"";" icon: "☁️";";" },;";" {;";"";" name: "Azure",";"";" description: "Microsoft Azure cloud services and solutions",";"";" icon: "🔷";";" },;";" {;";"";" name: "Google Cloud",";"";" description: "Google Cloud Platform infrastructure and services",";"";" icon: "🔵";";" },;";" {;";"";" name: "Multi-Cloud",";"";" description: "Hybrid and multi-cloud strategy implementation",";"";" icon: "🌐";" };";" ];";" ;"";" const devOpsTools = [";"";" { category: "CI/CD", tools: ["Jenkins", "GitLab CI", "GitHub Actions", "CircleCI", "ArgoCD"] },";"";" { category: "Infrastructure", tools: ["Terraform", "Ansible", "Puppet", "Chef", "CloudFormation"] },";"";" { category: "Monitoring", tools: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"] },";"";" { category: "Security", tools: ["Vault", "AWS IAM", "Azure AD", "Google IAM", "Prisma Cloud"] };";" ];";" ;"";" return (";"";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;"";" <SEO";"";" title="Cloud & DevOps — Zion Tech Group | Cloud Migration & DevOps Services";"";" description="Transform your infrastructure with Zion Tech Group's cloud migration and DevOps services.AWS, Azure, GCP expertise with modern DevOps practices.";"";" keywords="cloud migration, DevOps, AWS, Azure, GCP, infrastructure as code, CI/CD";"";" canonical="https:
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function Clouddevops() {
  const features = [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
  const benefits = [
    "Benefit 1",
    "Benefit 2",
    "Benefit 3"
  ]
  const useCases = [
    "Use Case 1",
    "Use Case 2",
    "Use Case 3"
  ]
  const pricing = [
      }
];
    {
      name: "Professional",
      price: "$799/mo",
      details: ["Up to 50 users", "Advanced features", "Priority support", "99.9% SLA"]
    }
  ];
    {
      name: "Enterprise",
      price: "$1,999/mo",
    }
  ];

  ]
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Database className="w-4 h-4 mr-2"  />
            AI-Powered Clouddevops Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Clouddevops Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your clouddevops operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Clouddevops Features</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}

            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime SLA.
            </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {pricing.map((tier, index) => (
                <div key={index} className="rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors">
                  <div className="text-lg font-semibold mb-1">{tier.name}</div>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{tier.price}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tier.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}

                  </ul>
                </div>
              ))}

            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/pricing" className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2"  />
              </Link>
              <Link href="/contact" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center">
                Contact Sales <Phone className="w-4 h-4 ml-2"  />
              </Link>
            </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Zap className="w-6 h-6 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
                </div>
                <p className="text-gray-600">{benefit}</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((industry, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
                </div>
                <p className="text-gray-600">Comprehensive clouddevops solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Clouddevops?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered clouddevops platform today.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Get Started <ArrowRight className="w-4 h-4 ml-2"  />
            </Link>
            <Link href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">
              Schedule Demo <Mail className="w-4 h-4 ml-2"  />
            </Link>
          </div>
      </section>
    </div>
  ),
>>>>>>> main
>>>>>>> main
