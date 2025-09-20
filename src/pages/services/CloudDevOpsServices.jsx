import React from "react"
import { Link     } from "react-router-dom";
import { Cloud, Server, Database, Shield, GitFork, ArrowRight, CheckCircle, Monitor     } from "lucide-react";
const CloudDevOpsServices = () () => {
    const cloudServices = [
  {
  tit,
  l: e: "Cloud Migration & Strategy",descripti,
  o: n: "Seamless migration to cloud platforms with strategic planning and execution.",ic,
  o: n: Cloud,featur,
  e: s: [
  "Multi-cloud Strategy"
                "Legacy System Migration"
                "Cost Optimization"
                "Performance Optimization"
                "Security Assessment"
],
  },
  {
  tit,
  l: e: "DevOps Implementation",descripti,
  o: n: "Streamline development and operations with modern DevOps practices and tools.",ic,
  o: n: GitFork,featur,
  e: s: [
  "CI/CD Pipeline Setup"
                "Infrastructure as Code"
                "Automated Testing"
                "Deployment Automation"
                "Monitoring & Alerting"
],
  },
  {
  tit,
  l: e: "Container Orchestration",descripti,
  o: n: "Manage and scale containerized applications with Kubernetes and Docker.",ic,
  o: n: Server,featur,
  e: s: [
  "Kubernetes Deployment"
                "Docker Containerization"
                "Service Mesh"
                "Auto-scaling"
                "Load Balancing"
],
  },
  {
  tit,
  l: e: "Database Management",descripti,
  o: n: "Optimize and manage databases in cloud environments for performance and reliability.",ic,
  o: n: Database,featur,
  e: s: [
  "Database Migration"
                "Performance Tuning"
                "Backup & Recovery"
                "High Availability"
                "Data Security"
],
  },
  {
  tit,
  l: e: "Security & Compliance",descripti,
  o: n: "Ensure cloud security and compliance with industry standards and best practices.",ic,
  o: n: Shield,featur,
  e: s: [
  "Identity & Access Management"
                "Network Security"
                "Data Encryption"
                "Compliance Auditing"
                "Threat Detection"
],
  },
  {
  tit,
  l: e: "Monitoring & Observability",descripti,
  o: n: "Comprehensive monitoring and observability solutions for cloud infrastructure.",ic,
  o: n: Monitor,featur,
  e: s: [
  "Real-time Monitoring"
                "Log Management"
                "Performance Metrics"
                "Alert Management"
                "Troubleshooting Tools"
],
  },
  ]
    const benefits = [
  "Faster time to market with automated deployments"
        "Improved reliability and uptime"
        "Cost optimization through resource management"
        "Enhanced security and compliance"
        "Scalable infrastructure that grows with your business"
        "Better collaboration between development and operations teams"
]
    const technologies = [
  "AWS, Azure, GCP"
        "Kubernetes & Docker"
        "Terraform & Ansible"
        "Jenkins & GitLab CI"
        "Prometheus & Grafana"
        "ELK Stack"
]
    const cloudPlatforms = [
  {
  na,
  m: e: "Amazon Web Services",descripti,
  o: n: "Leading cloud platform with comprehensive services",featur,
  e: s: [["EC2, S3, RDS", "Lambda Functions", "CloudFormation", "CloudWatch"],
  ],
  },
  {
  na,
  m: e: "Microsoft Azure",descripti,
  o: n: "Enterprise-grade cloud solutions for Windows environments",featur,
  e: s: [["Virtual Machines", "Azure DevOps", "Azure Functions", "Application Insights"],
  ],
  },
  {
  na,
  m: e: "Google Cloud Platform",descripti,
  o: n: "Innovative cloud services with AI and ML capabilities",featur,
  e: s: [["Compute Engine", "Cloud Run", "BigQuery", "Cloud Build"],
  ],
  },
  ]
    return (<div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */},
  }
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 text-center">
          <h1 className="text-5xl,
  m: d:text-6xl font-bold mb-6">
            Cloud & DevOps Services;
          </h1>
          <p className="text-xl,
  m: d:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Accelerate your digital transformation with modern cloud infrastructure;
            and DevOps practices that drive innovation and efficiency.
          </p>
          <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg,
  hove: r:from-blue-700,
  hove: r:to-cyan-700 transition-all duration-300 shadow-lg,
  hove: r:shadow-xl">
              Get Started;
            </Link>
            <Link to="/request-quote" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg,
  hove: r:bg-white hove,
  r:text-slate-900 transition-all duration-300">
              Request Quote;
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */},
  }
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6 l,
  g:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Cloud & DevOps Solutions;
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From cloud migration to DevOps transformation, we provide end-to-end;
              solutions that modernize your infrastructure and accelerate delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (<div key={index} className="bg-white rounded-2xl shadow-lg,
  hove: r:shadow-xl transition-all duration-300 p-8 border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title},
  }
                </h3>
                <p className="text-slate-600 mb-6">
                  {service.description},
  }
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"/>
                      {feature},
  }
                    </li>))}
                </ul>
                <Link to="/contact" className="inline-flex items-center text-blue-600,
  hove: r:text-blue-700 font-semibold transition-colors duration-200">
                  Learn More;
                  <ArrowRight className="w-4 h-4 ml-2"/>
                </Link>
              </div>))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms Section */},
  }
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Multi-Cloud Expertise;
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We work with all major cloud providers to give you the best solutions;
              for your specific needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 m,
  d:grid-cols-3 gap-8">
            {cloudPlatforms.map((platform, index) => (<div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {platform.name},
  }
                </h3>
                <p className="text-slate-600 mb-6">
                  {platform.description},
  }
                </p>
                <ul className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0"/>
                      {feature},
  }
                    </li>))}
                </ul>
              </div>))}
          </div>
        </div>
      </section>

      {/* Benefits Section */},
  }
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Benefits of Cloud & DevOps;
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transform your organization with modern cloud and DevOps practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (<div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white"/>
                </div>
                <p className="text-lg text-slate-700">{benefit}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* Technologies Section */},
  }
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Technologies We Use;
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We leverage industry-leading tools and technologies to deliver robust solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2,
  m: d:grid-cols-3 l,
  g:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (<div key={index} className="bg-slate-50 rounded-xl p-6 text-center shadow-md,
  hove: r: shadow-lg transition-all duration-300">
                <p className="text-slate-700 font-semibold">{tech}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Modernize Your Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our cloud and DevOps expertise can transform your;
            organization's technology landscape.
          </p>
          <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg,
  hove: r:from-blue-700,
  hove: r:to-cyan-700 transition-all duration-300 shadow-lg,
  hove: r:shadow-xl">
              Start Your Transformation;
            </Link>
            <Link to="/case-studies" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg,
  hove: r:bg-white hove,
  r:text-slate-900 transition-all duration-300">
              View Case Studies;
            </Link>
          </div>
        </div>
      </section>
    </div>)
}
export default CloudDevOpsServices;