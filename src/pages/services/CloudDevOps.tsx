import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CloudDevOps: React.FC = () => {
  const cloudServices = [
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with minimal downtime",
      features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Performance Optimization"],
      icon: "☁️"
    },
    {
      title: "DevOps Implementation",
      description: "Streamline development and operations with modern DevOps practices",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Automated Testing", "Monitoring & Logging"],
      icon: "🔄"
    },
    {
      title: "Container Orchestration",
      description: "Manage containerized applications at scale with Kubernetes",
      features: ["Cluster Management", "Service Discovery", "Load Balancing", "Auto-scaling"],
      icon: "📦"
    },
    {
      title: "Infrastructure Management",
      description: "Automate and manage cloud infrastructure efficiently",
      features: ["Terraform/CloudFormation", "Cost Optimization", "Security Hardening", "Backup & Recovery"],
      icon: "🏗️"
    }
  ];

  const cloudPlatforms = [
    { name: "AWS", features: ["EC2", "S3", "Lambda", "RDS", "CloudFormation"] },
    { name: "Azure", features: ["Virtual Machines", "Blob Storage", "Functions", "SQL Database", "ARM Templates"] },
    { name: "Google Cloud", features: ["Compute Engine", "Cloud Storage", "Cloud Functions", "Cloud SQL", "Deployment Manager"] }
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

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
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
              Accelerate your digital transformation with cloud migration and modern DevOps practices. 
              Scale efficiently, deploy faster, and maintain reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Start Your Cloud Journey
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Cloud Services Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cloud & DevOps Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive solutions to modernize your infrastructure and development practices
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cloudServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
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
                Cloud Platform Expertise
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Deep expertise across major cloud providers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cloudPlatforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{platform.name}</h3>
                  <div className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <div key={idx} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DevOps Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                DevOps Implementation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Structured approach to implementing modern DevOps practices
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "Assessment", icon: "🔍", description: "Evaluate current processes and identify improvement opportunities" },
                { step: "Planning", icon: "📋", description: "Design DevOps strategy and toolchain architecture" },
                { step: "Implementation", icon: "🚀", description: "Deploy tools and establish CI/CD pipelines" },
                { step: "Optimization", icon: "⚡", description: "Continuous improvement and performance tuning" }
              ].map((phase, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:border-white/40 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{phase.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{phase.step}</h3>
                  <p className="text-sm text-gray-300">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DevOps Tools */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                DevOps Toolchain
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Industry-leading tools for modern DevOps practices
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {devOpsTools.map((category, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">{category.category}</h3>
                  <div className="space-y-2">
                    {category.tools.map((tool, idx) => (
                      <div key={idx} className="text-gray-300 text-sm">
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits of Cloud & DevOps
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your development and operations for better results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Faster Deployment", description: "Reduce time-to-market with automated CI/CD pipelines", icon: "⚡" },
                { title: "Improved Reliability", description: "Enhanced stability and reduced downtime through automation", icon: "🛡️" },
                { title: "Cost Optimization", description: "Optimize cloud costs and resource utilization", icon: "💰" },
                { title: "Better Collaboration", description: "Foster teamwork between development and operations", icon: "🤝" },
                { title: "Scalability", description: "Easily scale applications based on demand", icon: "📈" },
                { title: "Security", description: "Built-in security practices and compliance", icon: "🔒" }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:border-white/40 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Real results from our cloud and DevOps implementations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">E-commerce Platform</h3>
                <p className="text-gray-300 mb-4">
                  Migrated from on-premise to AWS with Kubernetes orchestration, achieving 99.9% uptime and 60% faster deployments through automated CI/CD pipelines.
                </p>
                <div className="text-blue-400 text-sm">
                  <strong>Results:</strong> 99.9% uptime, 60% faster deployments
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Financial Services App</h3>
                <p className="text-gray-300 mb-4">
                  Implemented comprehensive DevOps practices with Azure DevOps, reducing deployment time from days to hours and achieving 95% test automation coverage.
                </p>
                <div className="text-blue-400 text-sm">
                  <strong>Results:</strong> Hours vs days deployment, 95% test coverage
                </div>
              </div>
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
              Let's discuss how cloud migration and DevOps can accelerate your business
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Start Your Cloud Journey
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudDevOps;