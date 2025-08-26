import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Cloud, Zap, Database, Server, GitBranch, Cpu, Globe, Shield } from 'lucide-react';

const CloudDevOps = () => {
  const features = [
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with minimal downtime",
      features: ["AWS Migration", "Azure Migration", "Google Cloud Migration", "Multi-cloud Strategy"],
      icon: "☁️"
    },
    {
      title: "DevOps Automation",
      description: "Streamline development and operations with automated pipelines",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Automated Testing", "Deployment Automation"],
      icon: "⚡"
    },
    {
      title: "Container Orchestration",
      description: "Manage and scale containerized applications efficiently",
      features: ["Kubernetes", "Docker", "Service Mesh", "Microservices Architecture"],
      icon: "📦"
    },
    {
      title: "Infrastructure as Code",
      description: "Version-controlled infrastructure management and deployment",
      features: ["Terraform", "CloudFormation", "Ansible", "Infrastructure Automation"],
      icon: "🏗️"
    }
  ];

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
    <>
      <Helmet>
        <title>Cloud & DevOps — Zion Tech Group | Cloud Migration & DevOps Services</title>
        <meta name="description" content="Transform your infrastructure with Zion Tech Group's cloud migration and DevOps services. AWS, Azure, GCP expertise with modern DevOps practices."/>
        <meta property="og:title" content="Cloud & DevOps — Zion Tech Group"/>
        <meta property="og:description" content="Expert cloud migration and DevOps implementation services for modern infrastructure."/>
        <meta property="og:url" content="https://ziontechgroup.com/services/cloud-devops"/>
        <link rel="canonical" href="https://ziontechgroup.com/services/cloud-devops"/>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cloud & 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}DevOps
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your infrastructure with modern cloud solutions and DevOps practices. 
              Accelerate development, improve reliability, and scale efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Get Cloud Consultation
              </Link>
              <Link to="/services" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cloud & DevOps Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive cloud migration and DevOps implementation services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cloud Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                End-to-end cloud solutions for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cloudServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cloud Platforms
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Expertise across all major cloud providers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{platform.name}</h3>
                  <p className="text-gray-300">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DevOps Tools */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                DevOps Tools & Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Modern tools and practices for efficient DevOps implementation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {devOpsTools.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.tools.map((tool, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
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
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our cloud and DevOps services can accelerate your business
            </p>
            <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
              Get Cloud & DevOps Consultation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudDevOps;
