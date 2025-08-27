import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Zap, Shield, BarChart3, Users, Clock, CheckCircle, ArrowRight, Server, Database, Lock, Globe, Cpu, HardDrive, Network, Monitor } from 'lucide-react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';

export default function CloudDevOps() {
  const features = [
    {
      icon: Server,
      title: "Infrastructure as Code",
      description: "Automate infrastructure deployment using Terraform, CloudFormation, and Ansible"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Managed databases with automated backups, scaling, and monitoring"
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      description: "Enterprise-grade security with SOC2, ISO27001, and GDPR compliance"
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Lightning-fast content delivery across 200+ global locations"
    },
    {
      icon: Cpu,
      title: "Auto-scaling",
      description: "Intelligent scaling based on real-time demand and performance metrics"
    },
    {
      icon: Monitor,
      title: "24/7 Monitoring",
      description: "Proactive monitoring with instant alerting and automated incident response"
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 10 servers",
        "Basic monitoring",
        "Email support",
        "Daily backups",
        "SSL certificates"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 50 servers",
        "Advanced monitoring",
        "Priority support",
        "Hourly backups",
        "Load balancing",
        "Auto-scaling"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large-scale operations",
      features: [
        "Unlimited servers",
        "Custom monitoring",
        "24/7 phone support",
        "Real-time backups",
        "Multi-region deployment",
        "Dedicated support team"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Faster Deployment",
      description: "Deploy applications 10x faster with automated CI/CD pipelines"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Multi-layered security with zero-trust architecture and compliance frameworks"
    },
    {
      icon: BarChart3,
      title: "Cost Optimization",
      description: "Reduce cloud costs by up to 40% with intelligent resource management"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Streamlined workflows with role-based access and approval processes"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock support with guaranteed response times and SLAs"
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Trusted by 500+ companies with 99.9% uptime guarantee"
    }
  ];

  const technologies = [
    { name: "AWS", icon: "☁️", description: "Amazon Web Services" },
    { name: "Azure", icon: "🔷", description: "Microsoft Azure" },
    { name: "GCP", icon: "🔶", description: "Google Cloud Platform" },
    { name: "Kubernetes", icon: "⚓", description: "Container orchestration" },
    { name: "Docker", icon: "🐳", description: "Containerization platform" },
    { name: "Terraform", icon: "🏗️", description: "Infrastructure as Code" },
    { name: "Jenkins", icon: "🤖", description: "CI/CD automation" },
    { name: "Prometheus", icon: "📊", description: "Monitoring & alerting" }
  ];

  return (
    <>
      <SEO 
        title="Cloud DevOps Services | Zion Tech Group"
        description="Transform your infrastructure with our comprehensive Cloud DevOps services. From CI/CD pipelines to infrastructure automation, we help you deploy faster and scale efficiently."
        keywords="cloud devops, infrastructure as code, CI/CD, kubernetes, docker, terraform, aws, azure, gcp"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div className="container-responsive relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
                <Cloud className="w-4 h-4 mr-2" />
                Cloud & DevOps
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Infrastructure
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Streamline your development workflow with automated CI/CD pipelines, 
                infrastructure as code, and intelligent cloud management solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Cloud DevOps Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven methodologies to deliver 
                scalable, secure, and efficient cloud infrastructure solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 group hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-cyan-500/40 group-hover:to-blue-500/40 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 
                our core DevOps features with enterprise-grade support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                      : 'border-slate-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                        : 'bg-slate-700/50 text-white hover:bg-slate-700/70 border border-slate-600/50'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Benefits of Cloud DevOps
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our Cloud DevOps services can transform your business 
                operations and accelerate your digital transformation journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-cyan-500/40 group-hover:to-blue-500/40 transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Technologies We Work With
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our team is certified and experienced with the latest cloud and DevOps technologies 
                to deliver cutting-edge solutions for your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-slate-800/50 border border-slate-700/50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:border-cyan-400/30 transition-all duration-300">
                    <span className="text-3xl">{tech.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-400">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of companies that have already accelerated their development 
                and deployment processes with our Cloud DevOps services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

