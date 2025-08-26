import React from 'react';
import Head from 'next/head';
import { 
  Cloud, 
  Server, 
  Database, 
  Shield, 
  Zap, 
  GitBranch,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const CloudDevOps: React.FC = () => {
  const services = [
    {
      title: "Cloud Infrastructure",
      description: "Design and implement scalable cloud architectures across major platforms",
      icon: "☁️",
      features: ["Multi-cloud Strategy", "Auto-scaling", "Load Balancing", "High Availability"]
    },
    {
      title: "DevOps Automation",
      description: "Streamline development and deployment with CI/CD pipelines",
      icon: "🔄",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Automated Testing", "Deployment Automation"]
    },
    {
      title: "Container Orchestration",
      description: "Manage containerized applications with Kubernetes and Docker",
      icon: "📦",
      features: ["Kubernetes Clusters", "Docker Containers", "Service Mesh", "Microservices"]
    },
    {
      title: "Monitoring & Observability",
      description: "Comprehensive monitoring and logging solutions",
      icon: "📊",
      features: ["Real-time Monitoring", "Log Aggregation", "Alerting Systems", "Performance Metrics"]
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

  const benefits = [
    "Faster deployment cycles and reduced time to market",
    "Improved system reliability and uptime",
    "Cost optimization through resource management",
    "Enhanced security and compliance",
    "Scalable infrastructure that grows with your business",
    "Automated processes reduce human error"
  ];

  return (
    <>
      <Head>
        <title>Cloud & DevOps Services - Zion Tech Group</title>
        <meta name="description" content="Expert cloud infrastructure, DevOps automation, and container orchestration services. Optimize your development workflow with Zion Tech Group." />
        <meta name="keywords" content="cloud, devops, kubernetes, docker, aws, azure, gcp, ci/cd, infrastructure" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Cloud className="w-12 h-12 text-blue-400 mr-3" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Cloud & DevOps
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Accelerate your development with modern cloud infrastructure and DevOps practices. 
              From cloud migration to automated deployment, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <a
                href="/solutions"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Solutions
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Cloud & DevOps Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end solutions to modernize your infrastructure and development processes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Platforms Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Cloud Platforms
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with all major cloud providers to deliver optimal solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cloudPlatforms.map((platform, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                  <h3 className="text-xl font-semibold text-white mb-4">{platform.name}</h3>
                  <ul className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center">
                        <ArrowRight className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DevOps Tools Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                DevOps Tools & Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive toolchain for modern DevOps practices
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {devOpsTools.map((toolCategory, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                  <h3 className="text-xl font-semibold text-white mb-4">{toolCategory.category}</h3>
                  <ul className="space-y-2">
                    {toolCategory.tools.map((tool, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center">
                        <ArrowRight className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our Cloud & DevOps Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your development workflow and infrastructure management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how cloud and DevOps can accelerate your development 
              and improve your system reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
              </a>
              <a
                href="/solutions"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Solutions
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudDevOps;