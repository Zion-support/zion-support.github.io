import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Server, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  Rocket, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  DollarSign,
  TrendingUp,
  Cpu,
  Database,
  Network,
  Lock,
  Target,
  Globe,
  Phone,
  Mail,
  MapPin,
  Settings,
  Monitor,
  CheckSquare,
  FileText,
  Calendar,
  MessageSquare,
  Video,
  Camera,
  Mic,
  Activity,
  Brain,
  Wifi,
  Bluetooth,
  Satellite,
  Telescope,
  Microscope,
  Flask,
  Pill,
  Stethoscope,
  Calculator,
  BookOpen,
  GraduationCap,
  CreditCard,
  ShoppingCart,
  Truck,
  Warehouse,
  Factory,
  Building2,
  Home,
  Store,
  Bank,
  Insurance,
  Law,
  Gavel,
  Timer,
  Stopwatch,
  Thermometer,
  Gauge,
  Compass,
  Map,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Download,
  Upload,
  Share,
  Bookmark,
  PhoneCall,
  VideoCall,
  MailOpen,
  Send,
  Plus,
  Minus,
  GitBranch,
  Code,
  Package,
  Play,
  Pause,
  RotateCcw,
  RefreshCw,
  Layers,
  HardDrive,
  Database as DatabaseIcon,
  Globe as GlobeIcon,
  Shield as ShieldIcon
} from 'lucide-react';

const CloudDevOpsPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const platformFeatures = [
    {
      icon: Cloud,
      title: "Multi-Cloud Management",
      description: "Unified management across AWS, Azure, GCP, and private clouds with automated cost optimization.",
      benefits: ["30% cost reduction", "Single pane of glass", "Automated scaling", "Cross-cloud migration"]
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description: "Terraform, CloudFormation, and ARM templates with automated provisioning and version control.",
      benefits: ["99.9% deployment success", "Version-controlled infrastructure", "Automated rollbacks", "Compliance automation"]
    },
    {
      icon: Zap,
      title: "CI/CD Automation",
      description: "End-to-end pipeline automation with testing, security scanning, and deployment orchestration.",
      benefits: ["10x faster deployments", "Zero-downtime releases", "Automated testing", "Security integration"]
    },
    {
      icon: Shield,
      title: "DevSecOps Integration",
      description: "Security-first approach with automated vulnerability scanning, compliance checks, and threat detection.",
      benefits: ["Automated security scanning", "Compliance monitoring", "Threat prevention", "Audit trails"]
    },
    {
      icon: BarChart3,
      title: "Advanced Monitoring",
      description: "Real-time observability with AI-powered anomaly detection and predictive analytics.",
      benefits: ["Real-time monitoring", "AI anomaly detection", "Predictive alerts", "Performance optimization"]
    },
    {
      icon: Rocket,
      title: "Auto-Scaling",
      description: "Intelligent scaling based on demand with cost optimization and performance guarantees.",
      benefits: ["Auto-scaling", "Cost optimization", "Performance guarantees", "Load balancing"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small teams starting their DevOps journey",
      features: [
        "Basic cloud management",
        "Up to 10 environments",
        "Standard CI/CD pipelines",
        "Basic monitoring",
        "Email support",
        "Community documentation",
        "Basic security scanning",
        "5GB log storage"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,199",
      period: "/month",
      description: "Ideal for growing teams with advanced DevOps requirements",
      features: [
        "Advanced cloud management",
        "Up to 50 environments",
        "Advanced CI/CD pipelines",
        "Advanced monitoring",
        "Priority support",
        "Premium documentation",
        "Advanced security scanning",
        "50GB log storage",
        "Custom integrations",
        "API access",
        "Advanced analytics",
        "Compliance tools"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      description: "For large enterprises requiring maximum automation and customization",
      features: [
        "Custom cloud solutions",
        "Unlimited environments",
        "Custom CI/CD pipelines",
        "Custom monitoring",
        "24/7 dedicated support",
        "Custom documentation",
        "Custom security scanning",
        "Unlimited log storage",
        "Custom integrations",
        "White-label solution",
        "On-premise deployment",
        "Custom training",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const devOpsTools = [
    {
      category: "Version Control",
      tools: [
        { name: "GitHub Enterprise", description: "Advanced repository management" },
        { name: "GitLab Ultimate", description: "Complete DevOps platform" },
        { name: "Bitbucket Server", description: "Enterprise Git solution" }
      ]
    },
    {
      category: "CI/CD",
      tools: [
        { name: "Jenkins", description: "Automation server" },
        { name: "GitLab CI/CD", description: "Integrated pipelines" },
        { name: "GitHub Actions", description: "Workflow automation" },
        { name: "CircleCI", description: "Cloud CI/CD platform" }
      ]
    },
    {
      category: "Infrastructure",
      tools: [
        { name: "Terraform", description: "Infrastructure as code" },
        { name: "Ansible", description: "Configuration management" },
        { name: "Docker", description: "Containerization" },
        { name: "Kubernetes", description: "Container orchestration" }
      ]
    },
    {
      category: "Monitoring",
      tools: [
        { name: "Prometheus", description: "Metrics collection" },
        { name: "Grafana", description: "Visualization platform" },
        { name: "ELK Stack", description: "Log management" },
        { name: "Datadog", description: "Application monitoring" }
      ]
    }
  ];

  const cloudProviders = [
    {
      name: "Amazon Web Services",
      logo: "AWS",
      features: ["EC2, S3, Lambda", "RDS, DynamoDB", "CloudFormation", "CloudWatch"],
      pricing: "Pay-as-you-use"
    },
    {
      name: "Microsoft Azure",
      logo: "Azure",
      features: ["Virtual Machines", "Blob Storage", "Functions", "ARM Templates"],
      pricing: "Pay-as-you-use"
    },
    {
      name: "Google Cloud Platform",
      logo: "GCP",
      features: ["Compute Engine", "Cloud Storage", "Cloud Functions", "Deployment Manager"],
      pricing: "Pay-as-you-use"
    },
    {
      name: "Private Cloud",
      logo: "Private",
      features: ["OpenStack", "VMware", "Kubernetes", "Custom solutions"],
      pricing: "Custom pricing"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Kim",
      position: "DevOps Engineer, TechCorp",
      company: "TechCorp",
      content: "Zion Tech Group's DevOps platform transformed our deployment process. We went from weekly deployments to multiple daily deployments with zero downtime.",
      rating: 5
    },
    {
      name: "Alex Rodriguez",
      position: "Cloud Architect, CloudFirst",
      company: "CloudFirst",
      content: "The multi-cloud management capabilities are incredible. We've reduced our cloud costs by 40% while improving performance across all platforms.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      position: "Platform Engineer, StartupXYZ",
      company: "StartupXYZ",
      content: "Implementing this platform accelerated our development velocity by 300%. Our team can now focus on building features instead of managing infrastructure.",
      rating: 5
    }
  ];

  const performanceMetrics = [
    { metric: "Deployment Speed", value: "10x Faster", description: "Compared to traditional methods" },
    { metric: "Uptime", value: "99.99%", description: "Platform availability" },
    { metric: "Cost Reduction", value: "40%", description: "Average cloud cost savings" },
    { metric: "Security Incidents", value: "0", description: "Zero security breaches" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Cloud Infrastructure &
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {' '}DevOps Platform
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
                Accelerate your development with the most advanced cloud infrastructure and DevOps platform. 
                Deploy faster, scale smarter, and manage everything from a single platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pricing"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View Pricing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-slate-400 text-slate-300 font-semibold rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                >
                  Platform Demo
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-white mb-1">{metric.metric}</div>
                <div className="text-sm text-slate-400">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive DevOps and cloud management capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Tools */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Integrated DevOps Tools
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Seamlessly integrate with your favorite tools and platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devOpsTools.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4 text-center">{category.category}</h3>
                <div className="space-y-3">
                  {category.tools.map((tool, idx) => (
                    <div key={idx} className="text-center">
                      <div className="font-semibold text-cyan-400 mb-1">{tool.name}</div>
                      <div className="text-sm text-slate-400">{tool.description}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Multi-Cloud Support
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Manage all your cloud resources from a single platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudProviders.map((provider, index) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{provider.name}</h3>
                <ul className="space-y-2 mb-4">
                  {provider.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-slate-300">
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-cyan-400 font-semibold">{provider.pricing}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Platform Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the perfect plan for your DevOps needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white/5 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.name === 'Enterprise' ? '/contact' : '#contact'}
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real results from teams using our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.position}</p>
                  <p className="text-slate-400 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of teams already using our platform to accelerate development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-slate-400 text-slate-300 font-semibold rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              DevOps Experts at Your Service
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Contact our team to discuss your DevOps transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-slate-300">+1 302 464 0950</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-slate-300">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudDevOpsPlatform;