import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Users, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Rocket, 
  Globe, 
  Cpu, 
  Database, 
  Lock, 
  Workflow, 
  MessageCircle, 
  BarChart3, 
  Heart, 
  DollarSign, 
  Atom, 
  Satellite, 
  Truck, 
  Home, 
  BookOpen, 
  Briefcase, 
  Calendar, 
  Factory, 
  ShoppingCart, 
  Network, 
  Wifi, 
  Server, 
  Code, 
  Monitor, 
  Smartphone, 
  Activity, 
  Eye, 
  Search, 
  Settings, 
  Palette, 
  Video, 
  GraduationCap, 
  Handshake, 
  ShoppingBag, 
  Leaf, 
  Gamepad2, 
  Coins, 
  Star as StarIcon,
  Users2, 
  Cog,
  ChevronRight,
  Play,
  ExternalLink
} from 'lucide-react';

export function HomePage() {
  const heroStats = [
    { label: 'AI Services', value: '50+', icon: Brain },
    { label: 'Micro SAAS', value: '25+', icon: Zap },
    { label: 'IT Solutions', value: '30+', icon: Shield },
    { label: 'Happy Clients', value: '500+', icon: Users }
  ];

  const featuredServices = [
    {
      category: 'Micro SAAS Solutions',
      icon: Zap,
      services: [
        {
          name: 'AI Sales Copilot',
          description: 'Intelligent sales automation with AI-powered lead scoring and customer insights',
          href: '/services/ai-sales-copilot',
          price: '$299/month',
          features: ['AI Lead Scoring', 'Customer Insights', 'Sales Analytics', 'CRM Integration']
        },
        {
          name: 'Cloud FinOps Optimizer',
          description: 'Automated cloud cost optimization and financial operations management',
          href: '/services/cloud-finops-optimizer',
          price: '$199/month',
          features: ['Cost Optimization', 'Resource Management', 'Budget Tracking', 'Automated Scaling']
        },
        {
          name: 'AI Compliance Assistant',
          description: 'Automated compliance monitoring and regulatory reporting for businesses',
          href: '/services/ai-compliance-assistant',
          price: '$399/month',
          features: ['Regulatory Monitoring', 'Automated Reporting', 'Risk Assessment', 'Audit Trails']
        }
      ]
    },
    {
      category: 'AI & Automation',
      icon: Brain,
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Advanced analytics and business intelligence powered by artificial intelligence',
          href: '/services/ai-business-intelligence',
          price: '$499/month',
          features: ['Predictive Analytics', 'Data Visualization', 'Real-time Insights', 'Custom Dashboards']
        },
        {
          name: 'AI Customer Support',
          description: 'Intelligent customer support automation with natural language processing',
          href: '/services/ai-customer-support-automation',
          price: '$199/month',
          features: ['24/7 Support', 'Natural Language Processing', 'Ticket Automation', 'Customer Analytics']
        },
        {
          name: 'AI Project Management',
          description: 'AI-powered project management with intelligent resource allocation',
          href: '/services/ai-project-management-platform',
          price: '$299/month',
          features: ['Smart Scheduling', 'Resource Optimization', 'Risk Prediction', 'Progress Tracking']
        }
      ]
    },
    {
      category: 'IT Infrastructure',
      icon: Shield,
      services: [
        {
          name: 'Cloud & DevOps',
          description: 'Comprehensive cloud infrastructure and DevOps automation services',
          href: '/services/cloud-devops',
          price: 'Custom Pricing',
          features: ['Cloud Migration', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting']
        },
        {
          name: 'Cybersecurity Solutions',
          description: 'Advanced cybersecurity protection and threat intelligence services',
          href: '/services/cybersecurity',
          price: 'Custom Pricing',
          features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response']
        },
        {
          name: 'Digital Transformation',
          description: 'End-to-end digital transformation consulting and implementation',
          href: '/services/digital-transformation',
          price: 'Custom Pricing',
          features: ['Strategy Development', 'Technology Selection', 'Change Management', 'Implementation Support']
        }
      ]
    }
  ];

  const industrySolutions = [
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'AI-powered healthcare solutions for improved patient care and operational efficiency',
      href: '/solutions/healthcare',
      features: ['Patient Analytics', 'Clinical Decision Support', 'Operational Optimization', 'Compliance Management']
    },
    {
      name: 'Financial Services',
      icon: DollarSign,
      description: 'Advanced financial technology solutions for banking and investment firms',
      href: '/solutions/financial',
      features: ['Risk Management', 'Fraud Detection', 'Portfolio Optimization', 'Regulatory Compliance']
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Smart manufacturing solutions with IoT and AI for Industry 4.0',
      href: '/solutions/manufacturing',
      features: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Energy Management']
    },
    {
      name: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'Omnichannel retail solutions with AI-powered customer insights',
      href: '/solutions/retail',
      features: ['Customer Analytics', 'Inventory Management', 'Personalization', 'Supply Chain Optimization']
    }
  ];

  const technologySolutions = [
    {
      name: 'Quantum Computing',
      icon: Atom,
      description: 'Next-generation quantum computing solutions for complex problem solving',
      href: '/solutions/quantum-computing',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Scientific Computing']
    },
    {
      name: 'Blockchain & Web3',
      icon: Network,
      description: 'Decentralized solutions and blockchain technology implementation',
      href: '/solutions/blockchain-web3',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Supply Chain Transparency']
    },
    {
      name: 'IoT & Edge Computing',
      icon: Wifi,
      description: 'Internet of Things and edge computing solutions for real-time data processing',
      href: '/solutions/iot-edge-computing',
      features: ['Sensor Networks', 'Edge Analytics', 'Real-time Processing', 'Device Management']
    },
    {
      name: 'Space Technology',
      icon: Satellite,
      description: 'Innovative space technology solutions for satellite and space exploration',
      href: '/solutions/space-tech',
      features: ['Satellite Operations', 'Space Analytics', 'Mission Planning', 'Ground Station Management']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      company: 'TechCorp Industries',
      content: 'Zion Tech Group transformed our business operations with their AI-powered solutions. The results exceeded our expectations.',
      rating: 5,
      avatar: '/avatars/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'VP Engineering',
      company: 'InnovateTech',
      content: 'Their micro SAAS solutions are game-changing. We\'ve seen a 40% improvement in operational efficiency.',
      rating: 5,
      avatar: '/avatars/michael.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'Global Solutions Inc',
      content: 'The team at Zion Tech Group is exceptional. They delivered our quantum computing solution on time and within budget.',
      rating: 5,
      avatar: '/avatars/emily.jpg'
    }
  ];

  const stats = [
    { label: 'Years of Experience', value: '10+' },
    { label: 'Projects Delivered', value: '1000+' },
    { label: 'Team Members', value: '150+' },
    { label: 'Countries Served', value: '25+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Innovation Awards', value: '15+' }
  ];

  return (
    <div className="min-h-screen bg-zion-slate-dark">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zion-slate-darker via-zion-slate-dark to-zion-blue-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transforming Business Through
              <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                {' '}Innovation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Zion Tech Group delivers cutting-edge AI solutions, micro SAAS services, and innovative IT solutions 
              that drive business growth and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Explore Services
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            
            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {heroStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-zion-slate-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From micro SAAS solutions to enterprise AI platforms, we provide the tools and expertise 
              your business needs to thrive in the digital age.
            </p>
          </div>

          <div className="space-y-16">
            {featuredServices.map((category) => (
              <div key={category.category}>
                <div className="flex items-center mb-8">
                  <category.icon className="w-8 h-8 text-zion-cyan mr-3" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service) => (
                    <div key={service.name} className="bg-zion-slate-darker border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-semibold text-white">{service.name}</h4>
                        <span className="text-zion-cyan font-semibold">{service.price}</span>
                      </div>
                      <p className="text-zion-slate-light mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-zion-slate-light">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={service.href}
                        className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-zion-slate-darker">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored solutions designed to address the unique challenges and opportunities 
              of your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {industrySolutions.map((solution) => (
              <div key={solution.name} className="bg-zion-slate-dark border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <solution.icon className="w-10 h-10 text-zion-cyan mr-4" />
                  <h3 className="text-2xl font-bold text-white">{solution.name}</h3>
                </div>
                <p className="text-zion-slate-light mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={solution.href}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                >
                  Explore {solution.name} Solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/solutions"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              View All Industry Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Cutting-Edge Technology
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Stay ahead of the curve with our innovative technology solutions that leverage 
              the latest advancements in AI, quantum computing, and emerging technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologySolutions.map((solution) => (
              <div key={solution.name} className="bg-zion-slate-darker border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <solution.icon className="w-10 h-10 text-zion-cyan mr-4" />
                  <h3 className="text-2xl font-bold text-white">{solution.name}</h3>
                </div>
                <p className="text-zion-slate-light mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={solution.href}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                >
                  Explore {solution.name}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zion-slate-darker">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about 
              working with Zion Tech Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-zion-slate-dark border border-zion-purple/20 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-zion-cyan">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-zion-slate-light mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-zion-slate-light">{testimonial.role}</div>
                    <div className="text-sm text-zion-cyan">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                <div className="text-sm text-zion-slate-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have already transformed their operations 
            with Zion Tech Group's innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-all duration-300"
            >
              View Pricing
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}