import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Zap, Database, Server, GitBranch, Cpu, Globe, Shield } from 'lucide-react';

const CloudDevOps: React.FC = () => {
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
      icon: GitBranch,
      title: "CI/CD Pipelines",
      description: "Automated build, test, and deployment pipelines for faster, more reliable releases.",
      features: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps"]
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Scalable database solutions with high availability and disaster recovery.",
      features: ["AWS RDS", "Azure SQL", "MongoDB Atlas", "Redis"]
    },
    {
      icon: Zap,
      title: "DevOps Implementation",
      description: "Streamline development and operations with modern DevOps practices",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Automated Testing", "Monitoring & Logging"]
    },
    {
      icon: Cpu,
      title: "Container Orchestration",
      description: "Manage containerized applications at scale with Kubernetes",
      features: ["Cluster Management", "Service Discovery", "Load Balancing", "Auto-scaling"]
    }
  ];

  const cloudPlatforms = [
    { 
      name: "AWS", 
      features: ["EC2", "S3", "Lambda", "RDS", "CloudFormation"],
      description: "Amazon Web Services cloud platform solutions"
    },
    { 
      name: "Azure", 
      features: ["Virtual Machines", "Blob Storage", "Functions", "SQL Database", "ARM Templates"],
      description: "Microsoft Azure cloud services and solutions"
    },
    { 
      name: "Google Cloud", 
      features: ["Compute Engine", "Cloud Storage", "Cloud Functions", "Cloud SQL", "Deployment Manager"],
      description: "Google Cloud Platform infrastructure and services"
    },
    { 
      name: "Multi-Cloud", 
      features: ["Hybrid Solutions", "Cost Optimization", "Vendor Lock-in Prevention", "Best-of-Breed Services"],
      description: "Multi-cloud strategy and management"
    }
  ];

  const devOpsTools = [
    { category: "CI/CD", tools: ["Jenkins", "GitLab CI", "GitHub Actions", "CircleCI", "ArgoCD"] },
    { category: "Infrastructure", tools: ["Terraform", "Ansible", "Puppet", "Chef", "CloudFormation"] },
    { category: "Monitoring", tools: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"] },
    { category: "Security", tools: ["Vault", "AWS IAM", "Azure AD", "Google IAM", "Prisma Cloud"] }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud & DevOps — Zion Tech Group | Cloud Migration & DevOps Services</title>
        <meta name="description" content="Transform your infrastructure with Zion Tech Group's cloud migration and DevOps services. AWS, Azure, GCP expertise with modern DevOps practices." />
        <meta property="og:title" content="Cloud & DevOps — Zion Tech Group" />
        <meta property="og:description" content="Expert cloud migration and DevOps implementation services for modern infrastructure." />
        <meta property="og:url" content="https://ziontechgroup.com/services/cloud-devops" />
        <link rel="canonical" href="https://ziontechgroup.com/services/cloud-devops" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud & DevOps
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your infrastructure with modern cloud solutions and DevOps practices. 
              Accelerate delivery, improve reliability, and scale with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Our Cloud & DevOps Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cloudServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {React.createElement(service.icon, { className: "w-8 h-8 text-cyan-400 mr-3" })}
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Cloud Platform Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cloudPlatforms.map((platform, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 text-center">
                  <h3 className="text-xl font-semibold text-white mb-3">{platform.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{platform.description}</p>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DevOps Tools */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              DevOps Tools & Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {devOpsTools.map((category, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.tools.map((tool, toolIndex) => (
                      <li key={toolIndex} className="text-gray-300 text-center">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our cloud and DevOps experts help you build a modern, scalable, and efficient technology foundation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudDevOps;