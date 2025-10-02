import React from 'react';
import {
Helmet
} from 'react-helmet-async';
import {
Monitor
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CloudDevOps: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: "Multi-Cloud Strategy",
      description: "Seamlessly deploy across AWS, Azure, GCP with intelligent workload optimization and cost management.",
      benefit: "40% cost reduction average"
    },
    {
      icon: GitBranch,
      title: "CI/CD Automation",
      description: "End-to-end automation from code commit to production deployment with advanced testing and rollback capabilities.",
      benefit: "90% faster deployments"
    },
    {
      icon: Shield,
      title: "DevSecOps Integration",
      description: "Security-first approach with automated vulnerability scanning, compliance checks, and threat detection.",
      benefit: "99.9% security compliance"
    },
    {
      icon: Monitor,
      title: "Infrastructure as Code",
      description: "Manage entire infrastructure through code with Terraform, Ansible, and custom automation tools.",
      benefit: "Zero-downtime deployments"
    },
    {
      icon: BarChart3,
      title: "Advanced Monitoring",
      description: "Real-time monitoring, alerting, and performance optimization with AI-powered insights.",
      benefit: "99.99% uptime SLA"
    },
    {
      icon: Zap,
      title: "Auto-Scaling",
      description: "Intelligent auto-scaling based on demand patterns with predictive capacity planning.",
      benefit: "60% infrastructure savings"
    }
  ];

  const pricing = [
    {
      name: "Startup",
      price: "$3,500",
      period: "/month",
      description: "Perfect for startups and small teams getting started with cloud infrastructure",
      features: [
        "Single cloud provider setup",
        "Basic CI/CD pipeline",
        "Standard monitoring",
        "Email support",
        "Monthly infrastructure review",
        "Basic security scanning",
        "Up to 5 environments",
        "Standard backup strategy"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "$8,500",
      period: "/month",
      description: "Ideal for growing companies with complex deployment needs",
      features: [
        "Multi-cloud setup",
        "Advanced CI/CD with testing",
        "Comprehensive monitoring & alerting",
        "Priority support",
        "Weekly infrastructure reviews",
        "Advanced security & compliance",
        "Up to 15 environments",
        "Automated backup & recovery",
        "Performance optimization",
        "Disaster recovery planning"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$25,000",
      period: "/month",
      description: "Complete solution for large organizations with enterprise requirements",
      features: [
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
        "On-premise integration"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "CTO, FinTech Startup",
      content: "Zion's DevOps team transformed our deployment process from weekly releases to multiple daily deployments. Our development velocity increased by 300%.",
      rating: 5,
      company: "FinTech Startup"
    },
    {
      name: "Maria Rodriguez",
      role: "VP Engineering, E-Commerce Platform",
      content: "The multi-cloud strategy reduced our infrastructure costs by 45% while improving performance. The monitoring and alerting prevented 3 major outages.",
      rating: 5,
      company: "E-Commerce Platform"
    },
    {
      name: "Dr. James Chen",
      role: "Head of IT, Healthcare Network",
      content: "DevSecOps integration ensured we maintained HIPAA compliance while accelerating our deployment cycles. Security incidents dropped to zero.",
      rating: 5,
      company: "Healthcare Network"
    }
  ];

  const services = [
    {
      title: "Cloud Migration",
      icon: Cloud,
      description: "Seamless migration to cloud platforms with zero downtime and minimal disruption.",
      benefits: ["99.9% uptime during migration", "Automated data validation", "Rollback capabilities"]
    },
    {
      title: "Container Orchestration",
      icon: Server,
      description: "Kubernetes and Docker expertise for scalable, resilient containerized applications.",
      benefits: ["Auto-scaling capabilities", "Service mesh integration", "Advanced networking"]
    },
    {
      title: "Infrastructure Automation",
      icon: Zap,
      description: "Complete infrastructure automation using Terraform, Ansible, and custom tools.",
      benefits: ["Infrastructure as Code", "Automated provisioning", "Environment consistency"]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      description: "Comprehensive security implementation with automated compliance monitoring.",
      benefits: ["Automated security scanning", "Compliance reporting", "Threat detection"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud & DevOps Services - Zion Tech Group | Enterprise Cloud Solutions</title>
        <meta
          name="description"
          content="Expert Cloud & DevOps services including multi-cloud strategy, CI/CD automation, infrastructure as code, and advanced monitoring. 99.99% uptime SLA."
        />
        <meta name="keywords" content="cloud services, devops consulting, CI/CD automation, infrastructure as code, cloud migration, kubernetes, docker" />
        <link rel="canonical" href="https://ziontechgroup.com/services/cloud-devops" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Cloud & <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">DevOps</span>
              </h1>
              <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto mb-8">
                Expert cloud infrastructure and DevOps services that deliver 99.99% uptime, 
                90% faster deployments, and 40% cost reduction through intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-900 font-semibold rounded-lg transition-colors"
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Cloud & DevOps Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your infrastructure with proven methodologies and cutting-edge automation.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">40% Cost Reduction</h3>
                <p className="text-gray-600">Average infrastructure cost savings</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">90% Faster Deployments</h3>
                <p className="text-gray-600">Automated CI/CD pipelines</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">99.99% Uptime</h3>
                <p className="text-gray-600">Enterprise-grade reliability</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Cloud</h3>
                <p className="text-gray-600">AWS, Azure, GCP expertise</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Cloud & DevOps Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                End-to-end solutions for modern cloud infrastructure and deployment automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                      <Icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
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
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful features that make your infrastructure truly scalable and resilient.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="inline-flex items-center text-green-600 font-semibold text-sm">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      {feature.benefit}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Transparent Pricing for Every Scale
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your infrastructure needs and growth stage.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-green-500 relative' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={
`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
plan.popular
? 'bg-green-600 text-white hover:bg-green-700',
: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
}`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Need a custom solution?</p>
              <a
                href="/contact"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
              >
                Contact our Enterprise Team
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join hundreds of satisfied customers who have transformed their infrastructure with our DevOps expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    <div className="text-green-600 text-sm font-medium">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Join hundreds of companies already using our Cloud & DevOps services to achieve unprecedented scalability and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Free Assessment
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-900 font-semibold rounded-lg transition-colors"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CloudDevOps;