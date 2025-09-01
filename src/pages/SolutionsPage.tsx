import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Users, 
  TrendingUp, 
  Shield, 
  Globe, 
  Zap, 
  Brain, 
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  BarChart3,
  Cpu,
  Database,
  Network,
  Lock,
  Bot,
  Workflow,
  Target,
  Rocket
} from 'lucide-react';

export default function SolutionsPage() {
  const businessSolutions = [
    {
      icon: Brain,
      title: "AI-Powered Business Intelligence",
      description: "Transform raw data into actionable insights with advanced AI analytics and predictive modeling.",
      features: [
        "Real-time data processing",
        "Predictive analytics",
        "Automated reporting",
        "Custom dashboards",
        "Machine learning insights",
        "Performance optimization"
      ],
      benefits: [
        "Increase decision-making speed by 60%",
        "Reduce operational costs by 30%",
        "Improve forecasting accuracy by 80%",
        "Enable proactive business strategies"
      ],
      link: "/solutions/business-intelligence",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Workflow,
      title: "Process Automation & Optimization",
      description: "Streamline operations and eliminate manual tasks with intelligent automation solutions.",
      features: [
        "Workflow automation",
        "Document processing",
        "Task scheduling",
        "Integration management",
        "Performance monitoring",
        "Continuous improvement"
      ],
      benefits: [
        "Reduce manual work by 70%",
        "Improve process efficiency by 50%",
        "Eliminate human errors",
        "Scale operations seamlessly"
      ],
      link: "/solutions/automation",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security & Compliance",
      description: "Protect your business with comprehensive security solutions and regulatory compliance.",
      features: [
        "Threat detection & response",
        "Identity management",
        "Data protection",
        "Compliance monitoring",
        "Security training",
        "Incident management"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Meet industry compliance standards",
        "Reduce security incidents by 90%",
        "Build customer trust"
      ],
      link: "/solutions/security",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Cloud,
      title: "Cloud Transformation & Migration",
      description: "Modernize your infrastructure with scalable cloud solutions and DevOps practices.",
      features: [
        "Cloud strategy planning",
        "Migration execution",
        "Infrastructure optimization",
        "DevOps implementation",
        "Performance monitoring",
        "Cost optimization"
      ],
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve scalability and reliability",
        "Faster deployment cycles",
        "Enhanced disaster recovery"
      ],
      link: "/solutions/cloud",
      color: "from-orange-500 to-red-500"
    }
  ];

  const industrySolutions = [
    {
      icon: Building,
      title: "Manufacturing & Supply Chain",
      description: "Optimize production processes and supply chain operations with AI and IoT solutions.",
      solutions: ["Predictive maintenance", "Quality control", "Inventory optimization", "Supply chain visibility"]
    },
    {
      icon: Users,
      title: "Healthcare & Life Sciences",
      description: "Improve patient care and operational efficiency with secure, compliant technology solutions.",
      solutions: ["Patient data management", "Clinical workflow automation", "Compliance monitoring", "Telemedicine platforms"]
    },
    {
      icon: Globe,
      title: "Financial Services",
      description: "Enhance security, compliance, and customer experience with innovative fintech solutions.",
      solutions: ["Fraud detection", "Risk management", "Customer analytics", "Regulatory compliance"]
    },
    {
      icon: Rocket,
      title: "Technology & SaaS",
      description: "Accelerate development and scale operations with modern DevOps and cloud solutions.",
      solutions: ["CI/CD pipelines", "Microservices architecture", "Performance optimization", "Scalability solutions"]
    }
  ];

  const successMetrics = [
    { metric: "500+", label: "Projects Completed", icon: CheckCircle },
    { metric: "98%", label: "Client Satisfaction", icon: Star },
    { metric: "40%", label: "Average Cost Reduction", icon: TrendingUp },
    { metric: "60%", label: "Efficiency Improvement", icon: Zap }
  ];

  const caseStudies = [
    {
      title: "Global Manufacturing Optimization",
      company: "TechManufacturing Inc.",
      industry: "Manufacturing",
      challenge: "Complex supply chain with 40% inefficiency and high operational costs",
      solution: "AI-powered supply chain optimization and predictive analytics platform",
      results: [
        "45% reduction in operational costs",
        "60% improvement in supply chain efficiency",
        "30% faster delivery times",
        "Real-time visibility across operations"
      ],
      link: "/case-studies/manufacturing-optimization"
    },
    {
      title: "Healthcare Data Security Transformation",
      company: "HealthCare Systems",
      industry: "Healthcare",
      challenge: "Legacy systems with security vulnerabilities and compliance risks",
      solution: "Modern cloud infrastructure with advanced security and compliance monitoring",
      results: [
        "99.9% threat protection",
        "100% compliance achievement",
        "50% reduction in security incidents",
        "Improved patient data protection"
      ],
      link: "/case-studies/healthcare-security"
    },
    {
      title: "Financial Services Automation",
      company: "FinTech Solutions",
      industry: "Financial Services",
      challenge: "Manual processes causing delays and compliance issues",
      solution: "Intelligent process automation and regulatory compliance platform",
      results: [
        "70% reduction in manual work",
        "90% faster compliance reporting",
        "Enhanced fraud detection",
        "Improved customer experience"
      ],
      link: "/case-studies/fintech-automation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Business Solutions
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto">
            Comprehensive technology solutions designed to solve complex business challenges, 
            drive innovation, and deliver measurable results across all industries.
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

      {/* Success Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-zion-cyan mb-2">{item.metric}</div>
                <div className="text-zinc-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Business Solutions</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our flagship solutions that address critical business challenges and drive 
              transformation across organizations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {businessSolutions.map((solution, index) => (
              <div key={index} className="bg-zinc-800/50 p-8 rounded-lg border border-zinc-700 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                    <p className="text-zinc-300">{solution.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-zion-cyan">Key Features</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
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
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-zinc-300">
                          <TrendingUp className="w-4 h-4 text-zion-purple mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to={solution.link}
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

      {/* Industry Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Tailored solutions designed to address the unique challenges and opportunities 
              within specific industry verticals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySolutions.map((solution, index) => (
              <div key={index} className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-center">{solution.title}</h3>
                <p className="text-zinc-300 text-sm mb-4 text-center">{solution.description}</p>
                <ul className="space-y-2 mb-4">
                  {solution.solutions.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-zinc-300">
                      <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/solutions/${solution.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium w-full justify-center"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Real-world examples of how our solutions have transformed businesses 
              and delivered measurable results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full mb-3">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-zinc-400 text-sm mb-4">{study.company}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-zion-cyan mb-2">Challenge</h4>
                  <p className="text-zinc-300 text-sm mb-4">{study.challenge}</p>
                  
                  <h4 className="font-semibold text-zion-purple mb-2">Solution</h4>
                  <p className="text-zinc-300 text-sm mb-4">{study.solution}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-green-400 mb-2">Results</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-zinc-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={study.link}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium"
                >
                  Read Full Case Study
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Solutions?</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              We combine deep industry expertise with cutting-edge technology to deliver 
              solutions that drive real business value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Business-Focused</h3>
              <p className="text-zinc-300">
                Every solution is designed with your business objectives in mind, 
                ensuring measurable ROI and strategic alignment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Technology Excellence</h3>
              <p className="text-zinc-300">
                We leverage the latest technologies and best practices to deliver 
                robust, scalable, and future-proof solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
              <p className="text-zinc-300">
                Our team provides ongoing support and guidance to ensure your 
                success and maximize the value of your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-zinc-300 mb-8">
            Let's discuss how our solutions can address your specific challenges 
            and drive measurable business results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
