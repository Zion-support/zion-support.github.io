import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Database, 
  Brain, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  DollarSign,
  Cpu,
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
  Shield,
  Cloud,
  Server,
  Zap,
  Rocket,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Bookmark,
  ExternalLink,
  Layers,
  HardDrive,
  GitBranch,
  Code,
  Package,
  Play,
  Pause,
  RotateCcw,
  RefreshCw
} from 'lucide-react';

const DataAnalyticsPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const platformFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms that automatically discover insights and predict trends from your data.",
      benefits: ["Automated insight discovery", "Predictive analytics", "Natural language queries", "Intelligent recommendations"]
    },
    {
      icon: Database,
      title: "Data Integration Hub",
      description: "Connect to 100+ data sources with automated ETL/ELT processes and real-time data synchronization.",
      benefits: ["100+ connectors", "Real-time sync", "Automated ETL/ELT", "Data quality checks"]
    },
    {
      icon: BarChart3,
      title: "Interactive Dashboards",
      description: "Create beautiful, interactive dashboards with drag-and-drop functionality and real-time updates.",
      benefits: ["Drag-and-drop builder", "Real-time updates", "Custom themes", "Mobile responsive"]
    },
    {
      icon: TrendingUp,
      title: "Advanced Reporting",
      description: "Generate comprehensive reports with automated scheduling, distribution, and advanced formatting.",
      benefits: ["Automated scheduling", "Multiple formats", "Advanced formatting", "Distribution lists"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with role-based access control, data encryption, and compliance certifications.",
      benefits: ["Role-based access", "Data encryption", "Compliance ready", "Audit trails"]
    },
    {
      icon: Cloud,
      title: "Scalable Infrastructure",
      description: "Cloud-native architecture that scales automatically with your data growth and user demands.",
      benefits: ["Auto-scaling", "99.9% uptime", "Global deployment", "Performance optimization"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small teams starting their analytics journey",
      features: [
        "Basic analytics dashboard",
        "Up to 5 data sources",
        "Standard reports",
        "Basic ML insights",
        "Email support",
        "Community documentation",
        "5GB data storage",
        "Up to 10 users"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing teams with advanced analytics requirements",
      features: [
        "Advanced analytics dashboard",
        "Up to 25 data sources",
        "Advanced reports",
        "Advanced ML insights",
        "Priority support",
        "Premium documentation",
        "50GB data storage",
        "Up to 50 users",
        "Custom dashboards",
        "API access",
        "Advanced security",
        "Compliance tools"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large enterprises requiring maximum analytics and customization",
      features: [
        "Custom analytics solutions",
        "Unlimited data sources",
        "Custom reports",
        "Custom ML models",
        "24/7 dedicated support",
        "Custom documentation",
        "Unlimited storage",
        "Unlimited users",
        "White-label solution",
        "On-premise deployment",
        "Custom training",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const dataSources = [
    {
      category: "Databases",
      sources: [
        { name: "PostgreSQL", description: "Advanced open-source database" },
        { name: "MySQL", description: "Popular relational database" },
        { name: "MongoDB", description: "Document database" },
        { name: "SQL Server", description: "Microsoft database" },
        { name: "Oracle", description: "Enterprise database" }
      ]
    },
    {
      category: "Cloud Services",
      sources: [
        { name: "AWS S3", description: "Object storage" },
        { name: "Azure Blob", description: "Cloud storage" },
        { name: "Google BigQuery", description: "Data warehouse" },
        { name: "Snowflake", description: "Cloud data platform" }
      ]
    },
    {
      category: "Business Apps",
      sources: [
        { name: "Salesforce", description: "CRM platform" },
        { name: "HubSpot", description: "Marketing platform" },
        { name: "Shopify", description: "E-commerce platform" },
        { name: "QuickBooks", description: "Accounting software" }
      ]
    },
    {
      category: "APIs & Web",
      sources: [
        { name: "REST APIs", description: "Web service APIs" },
        { name: "GraphQL", description: "Query language" },
        { name: "Web scraping", description: "Data extraction" },
        { name: "Social media", description: "Social platforms" }
      ]
    }
  ];

  const analyticsCapabilities = [
    {
      type: "Descriptive Analytics",
      description: "Understand what happened in the past",
      features: ["Historical data analysis", "KPI tracking", "Performance metrics", "Trend analysis"]
    },
    {
      type: "Diagnostic Analytics",
      description: "Understand why something happened",
      features: ["Root cause analysis", "Drill-down capabilities", "Correlation analysis", "Anomaly detection"]
    },
    {
      type: "Predictive Analytics",
      description: "Predict what will happen in the future",
      features: ["Forecasting models", "Trend prediction", "Risk assessment", "Demand planning"]
    },
    {
      type: "Prescriptive Analytics",
      description: "Recommend actions to take",
      features: ["Action recommendations", "Optimization suggestions", "Scenario planning", "Decision support"]
    }
  ];

  const industrySolutions = [
    {
      industry: "E-commerce",
      solutions: [
        "Customer behavior analysis",
        "Inventory optimization",
        "Sales forecasting",
        "Marketing ROI analysis",
        "Customer segmentation"
      ]
    },
    {
      industry: "Healthcare",
      solutions: [
        "Patient outcome analysis",
        "Resource optimization",
        "Predictive diagnostics",
        "Cost analysis",
        "Quality metrics"
      ]
    },
    {
      industry: "Finance",
      solutions: [
        "Risk assessment",
        "Fraud detection",
        "Portfolio optimization",
        "Customer churn prediction",
        "Regulatory compliance"
      ]
    },
    {
      industry: "Manufacturing",
      solutions: [
        "Predictive maintenance",
        "Quality control",
        "Supply chain optimization",
        "Production efficiency",
        "Cost optimization"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Rachel Green",
      position: "Data Scientist, RetailCorp",
      company: "RetailCorp",
      content: "Zion Tech Group's analytics platform transformed our data strategy. We've increased our conversion rates by 35% and reduced customer churn by 40% through data-driven insights.",
      rating: 5
    },
    {
      name: "Tom Anderson",
      position: "BI Director, HealthTech Solutions",
      company: "HealthTech Solutions",
      content: "The AI-powered insights have revolutionized our patient care approach. We can now predict patient outcomes with 90% accuracy and optimize our resources accordingly.",
      rating: 5
    },
    {
      name: "Lisa Park",
      position: "Analytics Manager, FinServ Inc",
      company: "FinServ Inc",
      content: "Implementing this platform streamlined our entire analytics process. Our team can now focus on strategic insights instead of data preparation and report generation.",
      rating: 5
    }
  ];

  const performanceMetrics = [
    { metric: "Data Processing", value: "100x Faster", description: "Compared to traditional methods" },
    { metric: "Insight Discovery", value: "90%", description: "Automated insight generation" },
    { metric: "User Adoption", value: "85%", description: "Team adoption rate" },
    { metric: "ROI Improvement", value: "300%", description: "Average ROI increase" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Data Analytics &
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  {' '}Business Intelligence
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
                Transform your data into actionable insights with the most advanced AI-powered analytics platform. 
                Discover patterns, predict trends, and make data-driven decisions with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pricing"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View Pricing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-slate-400 text-slate-300 font-semibold rounded-xl hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300"
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
                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">{metric.value}</div>
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
              Comprehensive analytics and business intelligence capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-400/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4">
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

      {/* Analytics Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Analytics Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From descriptive to prescriptive analytics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analyticsCapabilities.map((capability, index) => (
              <motion.div
                key={capability.type}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{capability.type}</h3>
                <p className="text-slate-300 mb-4">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Data Source Integration
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Connect to 100+ data sources seamlessly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataSources.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4 text-center">{category.category}</h3>
                <div className="space-y-3">
                  {category.sources.map((source, idx) => (
                    <div key={idx} className="text-center">
                      <div className="font-semibold text-emerald-400 mb-1">{source.name}</div>
                      <div className="text-sm text-slate-400">{source.description}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tailored analytics solutions for your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.industry}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{solution.industry}</h3>
                <ul className="space-y-3">
                  {solution.solutions.map((item, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Platform Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the perfect plan for your analytics needs
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
                    ? 'border-emerald-400 bg-gradient-to-br from-emerald-500/10 to-teal-500/10' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700'
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real results from organizations using our platform
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
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of organizations already using our platform to make data-driven decisions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-slate-400 text-slate-300 font-semibold rounded-xl hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Analytics Experts at Your Service
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Contact our team to discuss your analytics transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-slate-300">+1 302 464 0950</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-slate-300">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
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

export default DataAnalyticsPlatform;