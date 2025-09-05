import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Cloud, 
  Zap, 
  Users, 
  BarChart3, 
  ArrowRight, 
  CheckCircle, 
  Globe, 
  Award,
  Lock,
  Smartphone,
  Database,
  Settings,
  Cpu,
  Shield,
  Target,
  Lightbulb,
  Rocket,
  Code,
  Layers
} from 'lucide-react';

const microSaasServices = [
  {
    title: "Custom Web Applications",
    description: "Tailored web applications designed to solve specific business problems with modern technology stacks",
    icon: Globe,
    features: [
      "Responsive Design",
      "Cross-browser Compatibility",
      "Progressive Web App (PWA)",
      "Real-time Updates",
      "User Authentication",
      "API Integration"
    ],
    color: "from-blue-500 to-cyan-500",
    benefits: [
      "Improved efficiency",
      "Better user experience",
      "Scalable architecture",
      "Cost-effective solution"
    ]
  },
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences",
    icon: Smartphone,
    features: [
      "iOS & Android Development",
      "React Native Solutions",
      "Flutter Applications",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality"
    ],
    color: "from-green-500 to-emerald-500",
    benefits: [
      "Increased accessibility",
      "Better engagement",
      "Mobile-first design",
      "App store presence"
    ]
  },
  {
    title: "API Development & Integration",
    description: "Robust APIs and seamless integrations to connect your systems and data",
    icon: Code,
    features: [
      "RESTful API Design",
      "GraphQL Implementation",
      "Third-party Integrations",
      "API Documentation",
      "Rate Limiting & Security",
      "Webhook Support"
    ],
    color: "from-purple-500 to-pink-500",
    benefits: [
      "System connectivity",
      "Data synchronization",
      "Automated workflows",
      "Reduced manual work"
    ]
  },
  {
    title: "Data Management Solutions",
    description: "Comprehensive data handling, processing, and analytics platforms",
    icon: Database,
    features: [
      "Data Collection & Storage",
      "ETL Processes",
      "Data Visualization",
      "Real-time Analytics",
      "Data Security & Privacy",
      "Automated Reporting"
    ],
    color: "from-orange-500 to-red-500",
    benefits: [
      "Better insights",
      "Data-driven decisions",
      "Automated reporting",
      "Compliance assurance"
    ]
  },
  {
    title: "Workflow Automation",
    description: "Intelligent automation solutions that streamline business processes",
    icon: Zap,
    features: [
      "Process Automation",
      "Task Scheduling",
      "Email Automation",
      "Document Processing",
      "Approval Workflows",
      "Integration Automation"
    ],
    color: "from-yellow-500 to-orange-500",
    benefits: [
      "Reduced manual work",
      "Faster processing",
      "Fewer errors",
      "Improved efficiency"
    ]
  },
  {
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with payment processing and inventory management",
    icon: Layers,
    features: [
      "Online Store Setup",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Processing",
      "Customer Management",
      "Analytics & Reporting"
    ],
    color: "from-indigo-500 to-purple-500",
    benefits: [
      "Online presence",
      "Revenue generation",
      "Customer management",
      "Business growth"
    ]
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Intelligent business intelligence platform with predictive analytics and automated insights",
    icon: BarChart3,
    features: [
      "Real-time Data Visualization",
      "Predictive Analytics",
      "Custom KPI Tracking",
      "Automated Reports",
      "Data Export/Import",
      "Multi-source Integration"
    ],
    color: "from-teal-500 to-blue-500",
    benefits: [
      "Data-driven decisions",
      "Automated insights",
      "Real-time monitoring",
      "Competitive advantage"
    ],
    pricing: "Starting at $299/month"
  },
  {
    title: "Customer Relationship Management (CRM)",
    description: "Comprehensive CRM system with AI-powered lead scoring and automated follow-ups",
    icon: Users,
    features: [
      "Lead Management",
      "Contact Organization",
      "Sales Pipeline Tracking",
      "Email Automation",
      "Task Management",
      "Performance Analytics"
    ],
    color: "from-pink-500 to-rose-500",
    benefits: [
      "Improved sales efficiency",
      "Better customer relationships",
      "Automated workflows",
      "Higher conversion rates"
    ],
    pricing: "Starting at $199/month"
  },
  {
    title: "Project Management Platform",
    description: "Advanced project management tool with team collaboration and resource planning",
    icon: Target,
    features: [
      "Task Management",
      "Team Collaboration",
      "Time Tracking",
      "Resource Planning",
      "Progress Monitoring",
      "Document Sharing"
    ],
    color: "from-amber-500 to-orange-500",
    benefits: [
      "Improved productivity",
      "Better team coordination",
      "Clear project visibility",
      "Deadline management"
    ],
    pricing: "Starting at $149/month"
  },
  {
    title: "Inventory Management System",
    description: "Smart inventory tracking with automated reordering and demand forecasting",
    icon: Database,
    features: [
      "Real-time Inventory Tracking",
      "Automated Reordering",
      "Barcode Scanning",
      "Multi-location Support",
      "Demand Forecasting",
      "Supplier Management"
    ],
    color: "from-emerald-500 to-green-500",
    benefits: [
      "Reduced stockouts",
      "Lower inventory costs",
      "Automated processes",
      "Better supplier relationships"
    ],
    pricing: "Starting at $179/month"
  },
  {
    title: "Email Marketing Automation",
    description: "Advanced email marketing platform with AI-powered personalization and segmentation",
    icon: Zap,
    features: [
      "Email Campaign Builder",
      "AI Personalization",
      "Automated Sequences",
      "A/B Testing",
      "Analytics & Reporting",
      "List Management"
    ],
    color: "from-violet-500 to-purple-500",
    benefits: [
      "Higher open rates",
      "Automated nurturing",
      "Better segmentation",
      "Increased conversions"
    ],
    pricing: "Starting at $99/month"
  },
  {
    title: "Financial Management Suite",
    description: "Comprehensive financial tracking with automated invoicing and expense management",
    icon: BarChart3,
    features: [
      "Automated Invoicing",
      "Expense Tracking",
      "Financial Reporting",
      "Tax Preparation",
      "Budget Planning",
      "Payment Processing"
    ],
    color: "from-cyan-500 to-teal-500",
    benefits: [
      "Streamlined finances",
      "Automated invoicing",
      "Better cash flow",
      "Tax compliance"
    ],
    pricing: "Starting at $129/month"
  },
  {
    title: "HR Management System",
    description: "Complete human resources platform with employee onboarding and performance tracking",
    icon: Users,
    features: [
      "Employee Database",
      "Time & Attendance",
      "Performance Reviews",
      "Payroll Integration",
      "Benefits Management",
      "Recruitment Tools"
    ],
    color: "from-indigo-500 to-blue-500",
    benefits: [
      "Streamlined HR processes",
      "Better employee management",
      "Compliance tracking",
      "Reduced paperwork"
    ],
    pricing: "Starting at $199/month"
  },
  {
    title: "Social Media Management",
    description: "AI-powered social media scheduling and analytics platform for multiple platforms",
    icon: Globe,
    features: [
      "Multi-platform Posting",
      "Content Calendar",
      "AI Content Suggestions",
      "Engagement Analytics",
      "Hashtag Research",
      "Competitor Analysis"
    ],
    color: "from-rose-500 to-pink-500",
    benefits: [
      "Consistent posting",
      "Better engagement",
      "Time savings",
      "Data-driven content"
    ],
    pricing: "Starting at $79/month"
  },
  {
    title: "Document Management System",
    description: "Secure document storage and collaboration platform with version control and search",
    icon: Database,
    features: [
      "Secure File Storage",
      "Version Control",
      "Collaborative Editing",
      "Advanced Search",
      "Access Permissions",
      "Document Templates"
    ],
    color: "from-slate-500 to-gray-500",
    benefits: [
      "Organized documents",
      "Better collaboration",
      "Version control",
      "Enhanced security"
    ],
    pricing: "Starting at $89/month"
  },
  {
    title: "Learning Management System (LMS)",
    description: "Comprehensive e-learning platform with course creation and progress tracking",
    icon: Lightbulb,
    features: [
      "Course Creation Tools",
      "Progress Tracking",
      "Certification System",
      "Interactive Content",
      "Assessment Tools",
      "Mobile Learning"
    ],
    color: "from-yellow-500 to-amber-500",
    benefits: [
      "Employee training",
      "Skill development",
      "Compliance training",
      "Knowledge retention"
    ],
    pricing: "Starting at $159/month"
  },
  {
    title: "Help Desk & Support System",
    description: "Customer support platform with ticket management and knowledge base",
    icon: Shield,
    features: [
      "Ticket Management",
      "Knowledge Base",
      "Live Chat Integration",
      "SLA Tracking",
      "Customer Portal",
      "Performance Analytics"
    ],
    color: "from-red-500 to-orange-500",
    benefits: [
      "Better customer service",
      "Faster resolution times",
      "Self-service options",
      "Improved satisfaction"
    ],
    pricing: "Starting at $119/month"
  }
];

const platforms = [
  {
    name: "Web Development",
    icon: Globe,
    technologies: ["React", "Next.js", "Vue.js", "Angular", "Node.js", "Python", "PHP"],
    description: "Modern web applications with responsive design and optimal performance"
  },
  {
    name: "Mobile Development",
    icon: Smartphone,
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin"],
    description: "Cross-platform and native mobile applications for iOS and Android"
  },
  {
    name: "Backend Services",
    icon: Server,
    technologies: ["Node.js", "Python", "Java", "C#", "Go", "Ruby", "PHP"],
    description: "Scalable backend services and APIs for robust application architecture"
  },
  {
    name: "Cloud Platforms",
    icon: Cloud,
    technologies: ["AWS", "Azure", "Google Cloud", "Heroku", "Vercel", "Netlify"],
    description: "Cloud-native applications with auto-scaling and global deployment"
  },
  {
    name: "Databases",
    icon: Database,
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase"],
    description: "Reliable data storage and management solutions for all application types"
  },
  {
    name: "DevOps & Deployment",
    icon: Settings,
    technologies: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins", "Terraform"],
    description: "Automated deployment and infrastructure management for seamless operations"
  }
];

const developmentProcess = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements, define project scope, and create a detailed development plan."
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Create wireframes, mockups, and interactive prototypes to visualize the final product."
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Build your application using agile methodology with continuous testing and feedback."
  },
  {
    step: "04",
    title: "Deployment & Launch",
    description: "Deploy your application to production with monitoring and performance optimization."
  },
  {
    step: "05",
    title: "Maintenance & Support",
    description: "Ongoing maintenance, updates, and support to ensure optimal performance and security."
  }
];

const benefits = [
  {
    icon: Target,
    title: "Focused Solutions",
    description: "Specialized applications that address specific business needs without unnecessary complexity"
  },
  {
    icon: Zap,
    title: "Rapid Development",
    description: "Faster time-to-market with agile development methodologies and modern frameworks"
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Intuitive interfaces and seamless user experiences that drive adoption and engagement"
  },
  {
    icon: BarChart3,
    title: "Scalable Architecture",
    description: "Built to grow with your business, handling increased users and data seamlessly"
  }
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$1,999",
    description: "Perfect for small businesses and startups",
    features: [
      "Basic web application",
      "Responsive design",
      "User authentication",
      "Basic analytics",
      "3 months support",
      "Source code included",
      "Up to 5 users",
      "Basic integrations"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Professional",
    price: "$4,999",
    description: "Ideal for growing businesses with complex needs",
    features: [
      "Advanced web application",
      "Mobile app (iOS/Android)",
      "API development",
      "Database integration",
      "Advanced analytics",
      "6 months support",
      "Source code included",
      "Up to 25 users",
      "Advanced integrations",
      "Priority support"
    ],
    color: "from-purple-500 to-pink-500",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$9,999+",
    description: "Tailored solutions for large organizations",
    features: [
      "Custom enterprise solution",
      "Multi-platform deployment",
      "Advanced integrations",
      "Custom analytics dashboard",
      "12 months support",
      "Dedicated project manager",
      "Source code included",
      "Unlimited users",
      "Custom integrations",
      "24/7 support",
      "SLA guarantee"
    ],
    color: "from-green-500 to-emerald-500"
  }
];

const microSaasPricing = [
  {
    category: "Business Management",
    services: [
      { name: "CRM System", price: "$199/month", features: "Lead management, sales pipeline, automation" },
      { name: "Project Management", price: "$149/month", features: "Task tracking, team collaboration, reporting" },
      { name: "HR Management", price: "$199/month", features: "Employee database, payroll, performance tracking" },
      { name: "Financial Management", price: "$129/month", features: "Invoicing, expense tracking, reporting" }
    ]
  },
  {
    category: "Marketing & Sales",
    services: [
      { name: "Email Marketing", price: "$99/month", features: "Campaign builder, automation, analytics" },
      { name: "Social Media Management", price: "$79/month", features: "Multi-platform posting, analytics, scheduling" },
      { name: "Analytics Dashboard", price: "$299/month", features: "Real-time data, predictive analytics, insights" }
    ]
  },
  {
    category: "Operations",
    services: [
      { name: "Inventory Management", price: "$179/month", features: "Real-time tracking, automated reordering" },
      { name: "Document Management", price: "$89/month", features: "Secure storage, collaboration, version control" },
      { name: "Help Desk System", price: "$119/month", features: "Ticket management, knowledge base, analytics" }
    ]
  },
  {
    category: "Learning & Development",
    services: [
      { name: "Learning Management", price: "$159/month", features: "Course creation, progress tracking, certification" }
    ]
  }
];

export default function MicroSaasPage() {
  return (
    <Layout
      title="Micro SaaS Solutions - Zion Tech Group"
      description="Custom micro SaaS applications and software solutions. Web apps, mobile apps, APIs, and automation tools tailored to your business needs."
      keywords="micro SaaS, custom software, web applications, mobile apps, API development, software solutions"
    >

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Custom software solutions designed to solve specific business problems. 
              From web applications to mobile apps, we build scalable solutions that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Start Your Project
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Micro SaaS Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Specialized software solutions that address specific business challenges 
              with modern technology and user-centric design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {microSaasServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group-hover:scale-105`}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              We leverage cutting-edge technologies and modern frameworks to build 
              robust, scalable, and maintainable software solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {platform.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {platform.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum value for your investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {developmentProcess.map((step, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Our micro SaaS solutions deliver focused value and measurable results for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pricing Plans
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Transparent pricing for micro SaaS development. Choose the plan that fits your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  tier.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {tier.popular && (
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className={`h-2 bg-gradient-to-r ${tier.color}`}></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {tier.description}
                  </p>
                  <div className="text-4xl font-bold text-gray-900 mb-6">
                    {tier.price}
                    {tier.price !== "Custom" && <span className="text-lg text-gray-500">/project</span>}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${tier.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Micro SaaS Solution?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Start Your Project
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}