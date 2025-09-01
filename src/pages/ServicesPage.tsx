import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Database, 
  Network, 
  Lock,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Cpu,
  Bot,
  Workflow,
  BarChart3,
  Code,
  Server,
  Smartphone
} from 'lucide-react';

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Brain,
      title: "AI Solutions & Automation",
      description: "Transform your business with intelligent automation, machine learning, and AI-powered decision making.",
      features: [
        "Business Process Automation",
        "Machine Learning Models",
        "Natural Language Processing",
        "Predictive Analytics",
        "AI-Powered Chatbots",
        "Intelligent Document Processing"
      ],
      benefits: [
        "Reduce operational costs by 40-60%",
        "Improve accuracy and efficiency",
        "24/7 automated operations",
        "Scalable AI infrastructure"
      ],
      link: "/services/ai",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure & DevOps",
      description: "Build, deploy, and manage scalable cloud solutions with modern DevOps practices.",
      features: [
        "Cloud Migration & Strategy",
        "Infrastructure as Code",
        "Continuous Integration/Deployment",
        "Container Orchestration",
        "Multi-Cloud Management",
        "Performance Optimization"
      ],
      benefits: [
        "Reduce infrastructure costs by 30-50%",
        "Faster deployment cycles",
        "Improved scalability and reliability",
        "Enhanced security and compliance"
      ],
      link: "/services/cloud",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Protect your business with comprehensive security solutions and threat intelligence.",
      features: [
        "Security Assessment & Auditing",
        "Threat Detection & Response",
        "Compliance Management",
        "Identity & Access Management",
        "Security Training & Awareness",
        "Incident Response Planning"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Meet industry compliance standards",
        "Reduce security incident response time",
        "Build customer trust and confidence"
      ],
      link: "/services/cybersecurity",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Modernize your business processes and technology stack for the digital age.",
      features: [
        "Process Reengineering",
        "Legacy System Modernization",
        "Digital Strategy Consulting",
        "Change Management",
        "Technology Roadmapping",
        "Performance Optimization"
      ],
      benefits: [
        "Increase operational efficiency by 50%",
        "Improve customer experience",
        "Enable rapid innovation",
        "Future-proof your business"
      ],
      link: "/services/transformation",
      color: "from-orange-500 to-red-500"
    }
  ];

  const specializedServices = [
    {
      icon: Database,
      title: "Data Analytics & BI",
      description: "Turn your data into actionable insights with advanced analytics and business intelligence.",
      link: "/services/data-analytics"
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Build tailored software solutions that perfectly fit your business needs.",
      link: "/services/software-development"
    },
    {
      icon: Network,
      title: "IT Infrastructure",
      description: "Design and implement robust, scalable IT infrastructure solutions.",
      link: "/services/infrastructure"
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Strategic technology consulting to align IT with business objectives.",
      link: "/services/consulting"
    }
  ];

  const industries = [
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Retail",
    "Education",
    "Government",
    "Technology",
    "Energy"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Inc.",
      content: "Zion Tech Group transformed our operations with their AI automation platform. We've seen a 45% increase in efficiency.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "VP of Engineering",
      company: "InnovateTech",
      content: "Their cloud migration expertise helped us reduce costs by 40% while improving performance significantly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Security Director",
      company: "SecureBank",
      content: "The cybersecurity assessment revealed critical vulnerabilities we weren't aware of. Their team is exceptional.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto">
            Comprehensive technology solutions designed to transform your business, 
            enhance efficiency, and drive innovation across all industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Services</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our flagship services that deliver measurable business impact and drive 
              digital transformation across organizations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-zinc-800/50 p-8 rounded-lg border border-zinc-700 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-zinc-300">{service.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-zion-cyan">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zinc-300">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-zion-purple">Business Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-zinc-300">
                          <TrendingUp className="w-4 h-4 text-zion-purple mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to={service.link}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Specialized Solutions</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Additional services tailored to specific business needs and industry requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700 hover:border-zion-cyan/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-zinc-300 text-sm mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our solutions are designed to address the unique challenges and opportunities 
              across diverse industry verticals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700 hover:border-zion-cyan/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver 
              solutions that drive real business value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-First Approach</h3>
              <p className="text-zinc-300">
                We leverage the latest AI technologies to create intelligent, adaptive 
                solutions that learn and improve over time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p className="text-zinc-300">
                Our team consists of industry veterans with deep expertise in AI, 
                cloud computing, cybersecurity, and digital transformation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
              <p className="text-zinc-300">
                We've helped hundreds of businesses achieve measurable improvements 
                in efficiency, cost reduction, and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say 
              about working with Zion Tech Group.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-zinc-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-zinc-300 mb-8">
            Let's discuss how our services can help you achieve your business goals 
            and drive innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
