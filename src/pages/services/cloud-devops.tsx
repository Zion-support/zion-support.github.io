<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  TrendingUp, 
  BarChart3, 
  Settings, 
  Users, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Play, 
  Target, 
  Activity, 
  Database, 
  Calculator, 
  PieChart, 
  Globe, 
  Clock, 
  Zap, 
  Eye, 
  Brain, 
  Cpu, 
  GitBranch, 
  Server 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CloudDevOps() {
  const features = [
    {
      icon: GitBranch,
      title: "CI/CD Pipelines",
      description: "Automated build, test, and deployment pipelines for rapid delivery."
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud infrastructure with infrastructure as code (IaC)."
    },
    {
      icon: Settings,
      title: "Automation",
      description: "Comprehensive automation of development and operations processes."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enhanced collaboration between development and operations teams."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Built-in security and compliance for cloud-native applications."
    },
    {
      icon: TrendingUp,
      title: "Monitoring & Analytics",
      description: "Real-time monitoring and analytics for application performance."
    }
  ];

  const serviceAreas = [
    {
      title: "Continuous Integration",
      description: "Automated code integration and testing workflows.",
      icon: GitBranch,
      benefits: ["Automated builds", "Code quality checks", "Test automation"]
    },
    {
      title: "Continuous Deployment",
      description: "Automated deployment to production environments.",
      icon: Server,
      benefits: ["Blue-green deployments", "Rollback capabilities", "Environment management"]
    },
    {
      title: "Infrastructure as Code",
      description: "Manage infrastructure through code and automation.",
      icon: Cpu,
      benefits: ["Terraform", "CloudFormation", "Ansible automation"]
    },
    {
      title: "Containerization",
      description: "Container-based application deployment and management.",
      icon: Cloud,
      benefits: ["Docker containers", "Kubernetes orchestration", "Microservices"]
    },
    {
      title: "Monitoring & Observability",
      description: "Comprehensive application and infrastructure monitoring.",
      icon: BarChart3,
      benefits: ["Real-time metrics", "Log aggregation", "Alert management"]
    },
    {
      title: "Security & Compliance",
      description: "Built-in security scanning and compliance automation.",
      icon: Shield,
      benefits: ["Vulnerability scanning", "Compliance checks", "Security policies"]
    }
  ];

  const techStack = [
    {
      title: "CI/CD Tools",
      description: "Jenkins, GitLab CI, GitHub Actions, and Azure DevOps.",
      icon: GitBranch,
      features: ["Pipeline automation", "Build automation", "Deployment automation"]
    },
    {
      title: "Container Platforms",
      description: "Docker, Kubernetes, and container orchestration tools.",
      icon: Cloud,
      features: ["Container management", "Orchestration", "Service mesh"]
    },
    {
      title: "Infrastructure Tools",
      description: "Terraform, CloudFormation, and Ansible for IaC.",
      icon: Cpu,
      features: ["Infrastructure automation", "Configuration management", "Provisioning"]
    },
    {
      title: "Cloud Platforms",
      description: "AWS, Azure, Google Cloud, and multi-cloud solutions.",
      icon: Server,
      features: ["Multi-cloud strategy", "Cloud-native services", "Scalability"]
    },
    {
      title: "Monitoring Tools",
      description: "Prometheus, Grafana, and ELK stack for observability.",
      icon: BarChart3,
      features: ["Metrics collection", "Log aggregation", "Visualization"]
    },
    {
      title: "Security Tools",
      description: "Security scanning, compliance, and vulnerability management.",
      icon: Shield,
      features: ["Vulnerability scanning", "Compliance automation", "Security policies"]
    }
  ];

  const benefits = [
    "50-80% faster deployment frequency",
    "60-90% reduction in lead time",
    "40-70% improvement in recovery time",
    "Enhanced team collaboration and communication",
    "Improved code quality and reliability",
    "Better resource utilization and cost optimization"
  ];

  const implementationSteps = [
    {
      step: "01",
      title: "Assessment",
      description: "Evaluate current development and operations processes."
    },
    {
      step: "02",
      title: "Strategy",
      description: "Develop comprehensive DevOps strategy and roadmap."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Implement DevOps tools and establish new workflows."
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuously monitor, optimize, and improve processes."
    }
  ];
=======
<<<<<<< HEAD
import React from 'react.ts';
import { Helmet              } from 'react-helmet-async.ts';
import { Cloud, TrendingUp, BarChart3, Settings, Users, Shield, ArrowRight, CheckCircle, Play, Download, Mail, Target, Activity, Database, Calculator, PieChart, Globe, Clock, Zap, Eye, Brain, Cpu, GitBranch, Server import { Link              } from 'react-router-dom.ts';
=======
import React from 'react.ts';
import { Helmet               } from 'react-helmet-async.ts';
import { Cloud, TrendingUp, BarChart3, Settings, Users, Shield, ArrowRight, CheckCircle, Play, Download, Mail, Target, Activity, Database, Calculator, PieChart, Globe, Clock, Zap, Eye, Brain, Cpu, GitBranch, Server               } from 'lucide-react.ts';
import { Link               } from 'react-router-dom.ts';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

  return (
    <>
      <Helmet>
        <title>Cloud DevOps - Zion Tech Group</title>
        <meta name="description" content="Streamline your development and operations with cloud-native DevOps solutions. Automate deployments, improve collaboration, and accelerate delivery." />
        <meta name="keywords" content="cloud devops, CI/CD, cloud infrastructure, automation, containerization, kubernetes, aws, azure, google cloud" />
        <link rel="canonical" href="https://ziontechgroup.com/services/cloud-devops" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Cloud className="w-4 h-4 mr-2" />
                Cloud-Native DevOps
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cloud
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> DevOps</span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Streamline your development and operations with cloud-native DevOps solutions. Automate deployments,
                improve collaboration, and accelerate delivery with modern cloud infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Cloud DevOps Solutions
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our cloud DevOps platform provides end-to-end solutions for modern software development
                and deployment workflows.
              </p>
            </div>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
=======
            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: GitBranch,
                  title: "CI/CD Pipelines",
                  description: "Automated build, test, and deployment pipelines for rapid delivery."
                },
                {
                  icon: Cloud,
                  title: "Cloud Infrastructure",
                  description: "Scalable cloud infrastructure with infrastructure as code (IaC)."
                },
                {
                  icon: Settings,
                  title: "Automation",
                  description: "Comprehensive automation of development and operations processes."
                },
                {
                  icon: Users,
                  title: "Team Collaboration",
                  description: "Enhanced collaboration between development and operations teams."
                },
                {
                  icon: Shield,
                  title: "Security & Compliance",
                  description: "Built-in security and compliance for cloud-native applications."
                },
                {
                  icon: TrendingUp,
                  title: "Monitoring & Analytics",
                  description: "Real-time monitoring and analytics for application performance."
<<<<<<< HEAD

              ].map((feature, index)              => (
=======
                }
              ].map((feature, index)  => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DevOps Areas Section */}
        <section className="py-20 bg-slate-800/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                DevOps Service Areas
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Comprehensive DevOps services covering all aspects of modern software delivery.
              </p>
            </div>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
=======
            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Continuous Integration",
                  description: "Automated code integration and testing workflows.",
                  icon: GitBranch,
                  benefits: ["Automated builds", "Code quality checks", "Test automation"]
                },
                {
                  title: "Continuous Deployment",
                  description: "Automated deployment to production environments.",
                  icon: Server,
                  benefits: ["Blue-green deployments", "Rollback capabilities", "Environment management"]
                },
                {
                  title: "Infrastructure as Code",
                  description: "Manage infrastructure through code and automation.",
                  icon: Cpu,
                  benefits: ["Terraform", "CloudFormation", "Ansible automation"]
                },
                {
                  title: "Containerization",
                  description: "Container-based application deployment and management.",
                  icon: Cloud,
                  benefits: ["Docker containers", "Kubernetes orchestration", "Microservices"]
                },
                {
                  title: "Monitoring & Observability",
                  description: "Comprehensive application and infrastructure monitoring.",
                  icon: BarChart3,
                  benefits: ["Real-time metrics", "Log aggregation", "Alert management"]
                },
                {
                  title: "Security & Compliance",
                  description: "Built-in security scanning and compliance automation.",
                  icon: Shield,
                  benefits: ["Vulnerability scanning", "Compliance checks", "Security policies"]
<<<<<<< HEAD

              ].map((area, index)              => (
=======
                }
              ].map((area, index)  => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                  <p className="text-slate-400 mb-4">{area.description}</p>
                  <ul className="space-y-2">
                    {area.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-cyan-400 flex items-center">
                        <CheckCircle className="w-3 h-3 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                DevOps Technology Stack
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Leverage industry-leading tools and technologies for your DevOps implementation.
              </p>
            </div>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techStack.map((tech, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
=======
            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "CI/CD Tools",
                  description: "Jenkins, GitLab CI, GitHub Actions, and Azure DevOps.",
                  icon: GitBranch,
                  features: ["Pipeline automation", "Build automation", "Deployment automation"]
                },
                {
                  title: "Container Platforms",
                  description: "Docker, Kubernetes, and container orchestration tools.",
                  icon: Cloud,
                  features: ["Container management", "Orchestration", "Service mesh"]
                },
                {
                  title: "Infrastructure Tools",
                  description: "Terraform, CloudFormation, and Ansible for IaC.",
                  icon: Cpu,
                  features: ["Infrastructure automation", "Configuration management", "Provisioning"]
                },
                {
                  title: "Cloud Platforms",
                  description: "AWS, Azure, Google Cloud, and multi-cloud solutions.",
                  icon: Server,
                  features: ["Multi-cloud strategy", "Cloud-native services", "Scalability"]
                },
                {
                  title: "Monitoring Tools",
                  description: "Prometheus, Grafana, and ELK stack for observability.",
                  icon: BarChart3,
                  features: ["Metrics collection", "Log aggregation", "Visualization"]
                },
                {
                  title: "Security Tools",
                  description: "Security scanning, compliance, and vulnerability management.",
                  icon: Shield,
                  features: ["Vulnerability scanning", "Compliance automation", "Security policies"]
<<<<<<< HEAD

              ].map((tech, index)              => (
=======
                }
              ].map((tech, index)  => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
                  <p className="text-slate-400 mb-4">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-cyan-400 flex items-center">
                        <CheckCircle className="w-3 h-3 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cloud DevOps Benefits
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Transform your software delivery process with measurable improvements and efficiency gains.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">DevOps Metrics</h3>
                <div className="space-y-4">
                  {[
                    { metric: anyanyanyanyanyanyanyanyanyanyanyanyany"50-80%", label: "Deployment Speed", description: "Faster delivery" },
                    { metric: "60-90%", label: "Lead Time", description: "Reduction" },
                    { metric: "40-70%", label: "Recovery Time", description: "Improvement" },
                    { metric: "99.9%+", label: "Uptime", description: "Availability" }
<<<<<<< HEAD
                  ].map((item, index) => (
=======
                  ].map((item, index)               => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                    <div key={index} className="text-center p-4 bg-slate-700/50 rounded-lg">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">{item.metric}</div>
                      <div className="text-sm text-slate-300">{item.label}</div>
                      <div className="text-xs text-slate-400">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                DevOps Implementation Process
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our systematic approach ensures successful DevOps implementation and transformation.
              </p>
            </div>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {implementationSteps.map((step, index) => (
=======
            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Assessment",
                  description: "Evaluate current development and operations processes."
                },
                {
                  step: "02",
                  title: "Strategy",
                  description: "Develop comprehensive DevOps strategy and roadmap."
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Implement DevOps tools and establish new workflows."
                },
                {
                  step: "04",
                  title: "Optimization",
                  description: "Continuously monitor, optimize, and improve processes."
<<<<<<< HEAD

              ].map((step, index)              => (
=======
                }
              ].map((step, index)  => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-600/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Accelerate your software delivery with cloud-native DevOps solutions and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}