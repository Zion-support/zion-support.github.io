// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Monitor } from 'lucide-react'';
import Header from '../../components/Header'';
import Footer from '../../components/Footer'';
// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Monitor } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CloudDevOps: React.FC = () => {
  const features: [,
    {
      icon: Cloud,,
      title: "Multi-Cloud Strategy",,
      description: "Seamlessly deploy across AWS, Azure, GCP with intelligent workload optimization and cost management.",,
      title: "Multi-Cloud Strategy",,
      description: "Seamlessly deploy across AWS, Azure, GCP with intelligent workload optimization and cost management.",,
      benefit: "40% cost reduction average",
    },
    {
      icon: GitBranch,,
      title: "CI/CD Automation",,
      description: "End-to-end automation from code commit to production deployment with advanced testing and rollback capabilities.",,
      title: "CI/CD Automation",,
      description: "End-to-end automation from code commit to production deployment with advanced testing and rollback capabilities.",,
      benefit: "90% faster deployments",
    },
    {
      icon: Shield,,
      title: "DevSecOps Integration",,
      description: "Security-first approach with automated vulnerability scanning, compliance checks, and threat detection.",,
      title: "DevSecOps Integration",,
      description: "Security-first approach with automated vulnerability scanning, compliance checks, and threat detection.",,
      benefit: "99.9% security compliance",
    },
    {
      icon: Monitor,,
      title: "Infrastructure as Code",,
      description: "Manage entire infrastructure through code with Terraform, Ansible, and custom automation tools.",,
      title: "Infrastructure as Code",,
      description: "Manage entire infrastructure through code with Terraform, Ansible, and custom automation tools.",,
      benefit: "Zero-downtime deployments",
    },
    {
      icon: BarChart3,,
      title: "Advanced Monitoring",,
      description: "Real-time monitoring, alerting, and performance optimization with AI-powered insights.",,
      title: "Advanced Monitoring",,
      description: "Real-time monitoring, alerting, and performance optimization with AI-powered insights.",,
      benefit: "99.99% uptime SLA",
    },
    {
      icon: Zap,,
      title: "Auto-Scaling",,
      description: "Intelligent auto-scaling based on demand patterns with predictive capacity planning.",,
      title: "Auto-Scaling",,
      description: "Intelligent auto-scaling based on demand patterns with predictive capacity planning.",,
      benefit: "60% infrastructure savings",
    }],
;

  const pricing: [,
    {
      name="Startup",
      price: "$3,500",
      period: "/month",
      description: "Perfect for startups and small teams getting started with cloud infrastructure",
      features: [,,
      name="Startup
      price: ", $3,500
      period: "/month
      description: ", Perfect for startups and small teams getting started with cloud infrastructure
      features: [,,",
        "Single cloud provider setup",;
        "Basic CI/CD pipeline",;
        "Standard monitoring",;
        "Email support",;
        "Monthly infrastructure review",;
        "Basic security scanning",;
        "Up to 5 environments",;
        "Standard backup strategy"],

      popular: false,
    },
    {
      name="Growth",
      price: "$8,500",
      period: "/month",
      description: "Ideal for growing companies with complex deployment needs",
      features: [,,
      name="Growth
      price: ", $8,500
      period: "/month
      description: ", Ideal for growing companies with complex deployment needs
      features: [,,",
        "Multi-cloud setup",;
        "Advanced CI/CD with testing",;
        "Comprehensive monitoring & alerting",;
        "Priority support",;
        "Weekly infrastructure reviews",;
        "Advanced security & compliance",;
        "Up to 15 environments",;
        "Automated backup & recovery",;
        "Performance optimization",;
        "Disaster recovery planning"],

      popular: true,
    },
    {
      name="Enterprise",
      price: "$25,000",
      period: "/month",
      description: "Complete solution for large organizations with enterprise requirements",
      features: [,,
      name="Enterprise
      price: ", $25,000
      period: "/month
      description: ", Complete solution for large organizations with enterprise requirements
      features: [,,",
        "Hybrid & multi-cloud architecture",;
        "Enterprise-grade CI/CD",;
        "Advanced monitoring with AI insights",;
        "Dedicated DevOps engineer",;
        "Daily infrastructure management",;
        "Full security & compliance suite",;
        "Unlimited environments",;
        "Enterprise backup & disaster recovery",;
        "24/7 monitoring & support",;
        "Custom automation development",;
        "SLA guarantee",;
        "On-premise integration"],

      popular: false,,
      name="Startup",,
      price: "$3,500",,
      period: "/month",,
      description: "Perfect for startups and small teams getting started with cloud infrastructure",,
      features: [,,
        "Single cloud provider setup",
        "Basic CI/CD pipeline",
        "Standard monitoring",
        "Email support",
        "Monthly infrastructure review",
        "Basic security scanning",
        "Up to 5 environments",
        "Standard backup strategy"],

      popular: false,
    },
    {
      name="Growth",,
      price: "$8,500",,
      period: "/month",,
      description: "Ideal for growing companies with complex deployment needs",,
      features: [,,
        "Multi-cloud setup",
        "Advanced CI/CD with testing",
        "Comprehensive monitoring & alerting",
        "Priority support",
        "Weekly infrastructure reviews",
        "Advanced security & compliance",
        "Up to 15 environments",
        "Automated backup & recovery",
        "Performance optimization",
        "Disaster recovery planning"],

      popular: true,
    },
    {
      name="Enterprise",,
      price: "$25,000",,
      period: "/month",,
      description: "Complete solution for large organizations with enterprise requirements",,
      features: [,,
        "Hybrid & multi-cloud architecture",
        "Enterprise-grade CI/CD",
        "Advanced monitoring with AI insights",
        "Dedicated DevOps engineer",
        "Daily infrastructure management",
        "Full security & compliance suite",
        "Unlimited environments",
        "Enterprise backup & disaster recovery",
        "24/7 monitoring & support",
        "Custom automation development",
        "SLA guarantee",
        "On-premise integration"],

      popular: false,
    }
  ];

  const testimonials: [,
    {
      name="Alex Thompson",,
      role: "CTO, FinTech Startup",,
      content: "Zion's DevOps team transformed our deployment process from weekly releases to multiple daily deployments. Our development velocity increased by 300%.",,
      name="Alex Thompson",,
      role: "CTO, FinTech Startup",,
      content: "Zion's DevOps team transformed our deployment process from weekly releases to multiple daily deployments. Our development velocity increased by 300%.",,
      rating: 5,,
      company: "FinTech Startup",
    },
    {
      name="Maria Rodriguez",,
      role: "VP Engineering, E-Commerce Platform",,
      content: "The multi-cloud strategy reduced our infrastructure costs by 45% while improving performance. The monitoring and alerting prevented 3 major outages.",,
      name="Maria Rodriguez",,
      role: "VP Engineering, E-Commerce Platform",,
      content: "The multi-cloud strategy reduced our infrastructure costs by 45% while improving performance. The monitoring and alerting prevented 3 major outages.",,
      rating: 5,,
      company: "E-Commerce Platform",
    },
    {
      name="Dr. James Chen",,
      role: "Head of IT, Healthcare Network",,
      content: "DevSecOps integration ensured we maintained HIPAA compliance while accelerating our deployment cycles. Security incidents dropped to zero.",,
      name="Dr. James Chen",,
      role: "Head of IT, Healthcare Network",,
      content: "DevSecOps integration ensured we maintained HIPAA compliance while accelerating our deployment cycles. Security incidents dropped to zero.",,
      rating: 5,,
      company: "Healthcare Network",
    }
  ];

  const services: [,
    {
      title: "Cloud Migration",,
      icon: Cloud,,
      description: "Seamless migration to cloud platforms with zero downtime and minimal disruption.",,
      benefits: ["99.9% uptime during migration", "Automated data validation", "Rollback capabilities"]",
    },
    {
      title: "Container Orchestration",,
      icon: Server,,
      description: "Kubernetes and Docker expertise for scalable, resilient containerized applications.",,
      benefits: ["Auto-scaling capabilities", "Service mesh integration", "Advanced networking"]",
    },
    {
      title: "Infrastructure Automation",,
      icon: Zap,,
      description: "Complete infrastructure automation using Terraform, Ansible, and custom tools.",,
      benefits: ["Infrastructure as Code", "Automated provisioning", "Environment consistency"]",
    },
    {
      title: "Security & Compliance",,
      icon: Shield,,
      description: "Comprehensive security implementation with automated compliance monitoring.",,
      benefits: ["Automated security scanning", "Compliance reporting", "Threat detection"]",
      title: "Cloud Migration",,
      icon: Cloud,,
      description: "Seamless migration to cloud platforms with zero downtime and minimal disruption.",,
      benefits: ["99.9% uptime during migration", "Automated data validation", "Rollback capabilities"]",
    },
    {
      title: "Container Orchestration",,
      icon: Server,,
      description: "Kubernetes and Docker expertise for scalable, resilient containerized applications.",,
      benefits: ["Auto-scaling capabilities", "Service mesh integration", "Advanced networking"]",
    },
    {
      title: "Infrastructure Automation",,
      icon: Zap,,
      description: "Complete infrastructure automation using Terraform, Ansible, and custom tools.",,
      benefits: ["Infrastructure as Code", "Automated provisioning", "Environment consistency"]",
    },
    {
      title: "Security & Compliance",,
      icon: Shield,,
      description: "Comprehensive security implementation with automated compliance monitoring.",,
      benefits: ["Automated security scanning", "Compliance reporting", "Threat detection"]",
    }
  ];

  return (
    <>
      <Helmet >
        <title >Cloud & DevOps Services - Zion Tech Group | Enterprise Cloud Solutions</title>
        <meta name="description",
  content: "Expert Cloud & DevOps services including multi-cloud strategy, CI/CD automation, infrastructure as code, and advanced monitoring. 99.99% uptime SLA.", /><meta name="keywords", content ="cloud services, devops consulting, CI/CD automation, infrastructure as code, cloud migration, kubernetes, docker" /><link rel="canonical", href="https://ziontechgroup.com/services/cloud-devops/>",
        <meta name="description
  content: ", Expert Cloud & DevOps services including multi-cloud strategy, CI/CD automation, infrastructure as code, and advanced monitoring. 99.99% uptime SLA." /><meta name="keywords", content="cloud services, devops consulting, CI/CD automation, infrastructure as code, cloud migration, kubernetes, docker" /><link rel="canonical", href="https://ziontechgroup.com/services/cloud-devops/>
  content: "Expert Cloud & DevOps services including multi-cloud strategy, CI/CD automation, infrastructure as code, and advanced monitoring. 99.99% uptime SLA.",
        />
        <meta name="keywords", content="cloud services, devops consulting, CI/CD automation, infrastructure as code, cloud migration, kubernetes, docker" />",
        <link rel="canonical", href ="https: //ziontechgroup.com/services/cloud-devops" />",
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">DevOps</h3>
              </h1>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Expert cloud infrastructure and DevOps services that deliver 99.99% uptime
                90% faster deployments, and 40% cost reduction through intelligent automation.
              </p>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">DevOps</span>",
              </h1>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Phone className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                  <Phone className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Schedule Consultation
                </a>
                <a href="#pricing",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  View Pricing
                  <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Cloud & <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">DevOps</h3>
              </h1>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Expert cloud infrastructure and DevOps services that deliver 99.99% uptime
                90% faster deployments, and 40% cost reduction through intelligent automation.
              </p>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Cloud & <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">DevOps</span>",
              </h1>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Expert cloud infrastructure and DevOps services that deliver 99.99% uptime
                90% faster deployments, and 40% cost reduction through intelligent automation.
              </p>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Phone className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
  Schedule Consultation
                </a>
                <a href="#pricing",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  View Pricing
                  <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Why Choose Our Cloud & DevOps Services?
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Transform your infrastructure with proven methodologies and cutting-edge automation.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <TrendingUp className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <TrendingUp className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">40% Cost Reduction</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Average infrastructure cost savings</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Zap className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Zap className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">90% Faster Deployments</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Automated CI/CD pipelines</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Shield className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Shield className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">99.99% Uptime</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Enterprise-grade reliability</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Globe className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Globe className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Multi-Cloud</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">AWS, Azure, GCP expertise</p>",
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <TrendingUp className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <TrendingUp className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">40% Cost Reduction</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Average infrastructure cost savings</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Zap className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">90% Faster Deployments</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Automated CI/CD pipelines</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Shield className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">99.99% Uptime</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Enterprise-grade reliability</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Globe className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Multi-Cloud</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">AWS, Azure, GCP expertise</p>",
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Comprehensive Cloud & DevOps Services
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  End-to-end solutions for modern cloud infrastructure and deployment automation.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> {
                const Icon: service.icon;,,
  return (
                  <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> {
                const Icon: service.icon;,,
  return (
                  <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                    </div>
                    <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{service.title}</h3>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{service.description}</h3>
                    <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
                        <li key={benefitIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                        <li key: {benefitIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                          <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{benefit}</span>";
                        <li key={benefitIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                          <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{benefit}</h3>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              {services.map((service, index) => {
                const Icon: service.icon;,,
  return (
                  <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                    </div>
                    <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{service.title}</h3>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{service.description}</h3>
                    <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                          <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{benefit}</span>";
                        <li key={benefitIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                          <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{benefit}</h3>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Advanced Capabilities
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Powerful features that make your infrastructure truly scalable and resilient.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> {
                const Icon: feature.icon;,,
  return (
                  <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.title}</h3>";
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.description}</p>";
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.title}</h3>";
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.description}</p>";
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> {
                const Icon: feature.icon;,,
  return (
                  <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                    </div>
                    <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.title}</h3>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.description}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.title}</h3>";
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.description}</p>";
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              {features.map((feature, index) => {
                const Icon: feature.icon;,,
  return (
                  <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                    </div>
                    <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.title}</h3>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.description}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                      {feature.benefit}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section id="pricing" className ="py-20>
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section id="pricing" className ="py-20>
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Transparent Pricing for Every Scale
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Choose the plan that fits your infrastructure needs and growth stage.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-green-500 relative' : ''}`}>`
                  {plan.popular && (
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Most Popular
                      </span>
                    </div>
                  )}
                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.name}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.price}</h3>
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.period}</h3>
                    </div>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.description}</h3>
                  </div>
                  <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
                      <li key={featureIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <li key: {featureIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                        <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature}</span>";
                      <li key={featureIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                        <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature}</h3>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact",
  className={,
                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.name}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.price}</h3>
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.period}</h3>
                    </div>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.description}</h3>
                  </div>
                  <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                        <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature}</span>";
                      <li key={featureIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                        <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature}</h3>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact",
  className= {,
`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${`
plan.popular
? 'bg-green-600 text-white hover: bg-green-700',';,
? 'bg-green-600 text-white hover: bg-green-700',',';,
: 'bg-gray-100 text-gray-900 hover:bg-gray-200
}`}`
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Need a custom solution?</p>",
              <a href="/contact",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Contact our Enterprise Team
                <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Need a custom solution?</p>",
              <a href="/contact",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Contact our Enterprise Team
                <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  What Our Clients Say
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Join hundreds of satisfied customers who have transformed their infrastructure with our DevOps expertise.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
                <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
                      <Star key={i} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                      <Star key: {i} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                    ))}
                  </div>
                  <blockquote className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div >
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{testimonial.name}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{testimonial.role}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{testimonial.company}</h3>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                    ))}
                  </div>
                  <blockquote className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div >
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{testimonial.name}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{testimonial.role}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{testimonial.company}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <Phone className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                <Phone className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Schedule Free Assessment
              </a>
              <a href="/case-studies",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                View Case Studies
                <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Ready to Transform Your Infrastructure?
            </h2>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Join hundreds of companies already using our Cloud & DevOps services to achieve unprecedented scalability and reliability.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <a href="/contact",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <Phone className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
  Schedule Free Assessment
              </a>
              <a href="/case-studies",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                View Case Studies
                <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Component;