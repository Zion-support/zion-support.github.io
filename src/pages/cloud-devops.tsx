import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Server, 
  Database, 
  Shield, 
  Zap, 
  Cpu, 
  Network, 
  Lock,
  BarChart3,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Rocket,
  Users,
  Globe,
  Code,
  Settings,
  Monitor,
  Activity,
  GitBranch,
  Container,
  HardDrive
} from 'lucide-react';

export default function CloudDevOps() {
  const services = [
    {
      title: "Cloud Infrastructure Management",
      description: "Design, deploy, and manage scalable cloud infrastructure across AWS, Azure, and Google Cloud.",
      icon: Cloud,
      features: ["Multi-cloud strategy", "Auto-scaling", "Cost optimization", "High availability"]
    },
    {
      title: "DevOps Automation",
      description: "Streamline development and operations with CI/CD pipelines and automation tools.",
      icon: GitBranch,
      features: ["CI/CD pipelines", "Infrastructure as Code", "Automated testing", "Deployment automation"]
    },
    {
      title: "Container Orchestration",
      description: "Manage containerized applications with Kubernetes and Docker for scalable deployments.",
      icon: Container,
      features: ["Kubernetes management", "Docker optimization", "Service mesh", "Load balancing"]
    },
    {
      title: "Infrastructure as Code",
      description: "Define and manage infrastructure using code for consistency and version control.",
      icon: Code,
      features: ["Terraform", "CloudFormation", "Ansible", "Version control"]
    },
    {
      title: "Monitoring & Observability",
      description: "Comprehensive monitoring and logging solutions for cloud-native applications.",
      icon: Monitor,
      features: ["Real-time monitoring", "Log aggregation", "Performance metrics", "Alerting systems"]
    },
    {
      title: "Security & Compliance",
      description: "Implement security best practices and ensure compliance across cloud environments.",
      icon: Shield,
      features: ["Identity management", "Access control", "Security scanning", "Compliance reporting"]
    }
  ];

  const benefits = [
    {
      title: "Faster Deployment",
      description: "Reduce deployment time from days to minutes with automated CI/CD pipelines.",
      icon: Rocket
    },
    {
      title: "Cost Optimization",
      description: "Optimize cloud spending with intelligent resource management and monitoring.",
      icon: TrendingUp
    },
    {
      title: "Scalability",
      description: "Scale applications automatically based on demand and traffic patterns.",
      icon: BarChart3
    },
    {
      title: "Reliability",
      description: "Ensure high availability and disaster recovery with robust infrastructure.",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      {/* Header */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
              <Cloud className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cloud & DevOps
            <span className="text-zion-cyan"> Solutions</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your infrastructure with modern cloud technologies and DevOps practices. 
            Scale efficiently, deploy faster, and maintain reliability across all environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/request-quote"
              className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Cloud & DevOps Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From infrastructure design to continuous deployment, we provide end-to-end solutions 
              that modernize your technology stack.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-zion-blue-dark border border-zion-purple/30 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Cloud & DevOps Solutions?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Experience the benefits of modern cloud infrastructure and DevOps practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Let's discuss how our Cloud & DevOps solutions can accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/schedule-demo"
              className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}