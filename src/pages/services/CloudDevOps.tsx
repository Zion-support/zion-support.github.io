import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Brain, Zap, Users, Target, ArrowRight, CheckCircle, Star, Lightbulb, Database, Cpu, Globe, Rocket, GitBranch, Server, Activity, Code } from 'lucide-react';

export default function CloudDevOps() {
  const features = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions with automated provisioning and management"
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipelines",
      description: "Automated build, test, and deployment workflows"
    },
    {
      icon: Brain,
      title: "AI-Powered Operations",
      description: "Intelligent monitoring, alerting, and incident response"
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description: "Version-controlled infrastructure management and deployment"
    },
    {
      icon: Zap,
      title: "Automated Scaling",
      description: "Dynamic resource allocation based on demand and performance"
    },
    {
      icon: Target,
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization of cloud resources"
    }
  ];

  const benefits = [
    "Deploy applications 10x faster with automation",
    "Reduce infrastructure costs by 40%",
    "Improve system reliability by 99.9%",
    "Enable rapid scaling and recovery",
    "Reduce manual operations by 80%",
    "Accelerate time-to-market significantly"
  ];

  const useCases = [
    {
      industry: "E-commerce",
      applications: ["Auto-scaling", "Load Balancing", "CDN Management", "Database Optimization"]
    },
    {
      industry: "SaaS Platforms",
      applications: ["Multi-tenancy", "API Management", "User Provisioning", "Performance Monitoring"]
    },
    {
      industry: "Financial Services",
      applications: ["Compliance Automation", "Security Scanning", "Audit Logging", "Disaster Recovery"]
    },
    {
      industry: "Healthcare",
      applications: ["HIPAA Compliance", "Data Backup", "Access Control", "Monitoring Systems"]
    }
  ];

  return 
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Cloud className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Cloud DevOps</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Cloud DevOps
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Accelerate your development and operations with our comprehensive Cloud DevOps platform. 
              Automate deployments, optimize infrastructure, and scale with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border border-blue-500/30 text-blue-300 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced DevOps Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines cutting-edge cloud technologies with DevOps best practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/80">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Transform Your Development Operations
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our Cloud DevOps Platform delivers measurable improvements across all aspects of software development 
                and operations, from code deployment to infrastructure management.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl p-8 border border-blue-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">10x</div>
                    <div className="text-sm text-gray-300">Faster Deployment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-400 mb-2">40%</div>
                    <div className="text-sm text-gray-300">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                    <div className="text-sm text-gray-300">Reliability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">80%</div>
                    <div className="text-sm text-gray-300">Automation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how Cloud DevOps transforms operations across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/80">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg w-fit mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      {app}
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Cloud Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge technologies for maximum performance and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Cloud, name: "Multi-Cloud", description: "AWS, Azure, GCP support" },
              { icon: GitBranch, name: "GitOps", description: "Git-based deployments" },
              { icon: Server, name: "Kubernetes", description: "Container orchestration" },
              { icon: Globe, name: "Global CDN", description: "Worldwide content delivery" },
              { icon: Shield, name: "Security", description: "DevSecOps integration" },
              { icon: Zap, name: "Performance", description: "High-speed operations" },
              { icon: Users, name: "Collaboration", description: "Team-based workflows" },
              { icon: Rocket, name: "Innovation", description: "Continuous advancement" }
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="p-4 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl border border-blue-500/30 mb-4 group-hover:border-blue-500/50 transition-all duration-300">
                  <tech.icon className="w-8 h-8 text-blue-400 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 via-indigo-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your DevOps?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the DevOps revolution and accelerate your development with our intelligent cloud platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Get Your Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-blue-500/30 text-blue-300 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-300"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
;
export { CloudDevOps };
export default CloudDevOps;
