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
  Layers,
  Bot,
  FileText,
  TrendingUp,
  PenTool,
  Share2,
  Mail,
  MessageSquare,
  Clock
} from 'lucide-react';

const microSaasServices = [
  {
    title: "AI-Powered Project Management",
    description: "Intelligent project management platform with AI-driven insights, resource optimization, and predictive analytics",
    icon: Target,
    features: [
      "AI Task Prioritization",
      "Resource Allocation Optimization",
      "Risk Prediction & Mitigation",
      "Automated Progress Tracking",
      "Smart Deadline Management",
      "Team Performance Analytics"
    ],
    color: "from-blue-500 to-cyan-500",
    benefits: [
      "30% faster project delivery",
      "Reduced project overruns",
      "Better resource utilization",
      "Improved team productivity"
    ],
    pricing: "Starting at $29/month per user",
    marketRate: "$25-50/user/month"
  },
  {
    title: "AI Customer Support Automation",
    description: "Advanced AI chatbot system with natural language processing, sentiment analysis, and seamless human handoff",
    icon: Bot,
    features: [
      "Multi-language Support",
      "Sentiment Analysis",
      "Intent Recognition",
      "Knowledge Base Integration",
      "Live Chat Handoff",
      "Performance Analytics"
    ],
    color: "from-green-500 to-emerald-500",
    benefits: [
      "80% reduction in support tickets",
      "24/7 customer availability",
      "Consistent service quality",
      "Reduced support costs"
    ],
    pricing: "Starting at $99/month for up to 1,000 conversations",
    marketRate: "$50-200/month"
  },
  {
    title: "AI Financial Analytics Dashboard",
    description: "Comprehensive financial intelligence platform with AI-powered forecasting, expense tracking, and investment insights",
    icon: BarChart3,
    features: [
      "AI Financial Forecasting",
      "Expense Categorization",
      "Investment Analysis",
      "Cash Flow Optimization",
      "Tax Preparation Assistance",
      "Financial Goal Tracking"
    ],
    color: "from-purple-500 to-pink-500",
    benefits: [
      "Better financial visibility",
      "Improved decision making",
      "Automated expense tracking",
      "Tax optimization"
    ],
    pricing: "Starting at $49/month for small businesses",
    marketRate: "$30-100/month"
  },
  {
    title: "AI Marketing Automation Suite",
    description: "Complete marketing automation platform with AI-driven content creation, email campaigns, and customer segmentation",
    icon: Lightbulb,
    features: [
      "AI Content Generation",
      "Email Campaign Automation",
      "Customer Segmentation",
      "A/B Testing Optimization",
      "Social Media Management",
      "ROI Analytics"
    ],
    color: "from-orange-500 to-red-500",
    benefits: [
      "3x higher engagement rates",
      "Automated content creation",
      "Better customer targeting",
      "Improved conversion rates"
    ],
    pricing: "Starting at $79/month for up to 10,000 contacts",
    marketRate: "$50-300/month"
  },
  {
    title: "AI-Powered HR Management",
    description: "Intelligent human resources platform with AI recruitment, performance analytics, and employee engagement tools",
    icon: Users,
    features: [
      "AI Resume Screening",
      "Candidate Matching",
      "Performance Analytics",
      "Employee Engagement Tracking",
      "Skills Gap Analysis",
      "Retention Prediction"
    ],
    color: "from-indigo-500 to-purple-500",
    benefits: [
      "50% faster hiring process",
      "Better candidate matching",
      "Reduced turnover rates",
      "Improved employee satisfaction"
    ],
    pricing: "Starting at $39/month per employee",
    marketRate: "$20-80/employee/month"
  },
  {
    title: "AI Inventory Management System",
    description: "Smart inventory optimization platform with demand forecasting, automated reordering, and waste reduction",
    icon: Database,
    features: [
      "Demand Forecasting",
      "Automated Reordering",
      "Waste Reduction Analytics",
      "Supplier Performance Tracking",
      "Multi-location Management",
      "Cost Optimization"
    ],
    color: "from-teal-500 to-cyan-500",
    benefits: [
      "20% reduction in inventory costs",
      "Eliminated stockouts",
      "Reduced waste",
      "Improved cash flow"
    ],
    pricing: "Starting at $59/month for up to 1,000 SKUs",
    marketRate: "$30-150/month"
  },
  {
    title: "AI Document Processing Platform",
    description: "Intelligent document management system with OCR, data extraction, and automated workflow processing",
    icon: FileText,
    features: [
      "OCR Text Recognition",
      "Data Extraction",
      "Document Classification",
      "Automated Workflows",
      "Version Control",
      "Compliance Tracking"
    ],
    color: "from-amber-500 to-orange-500",
    benefits: [
      "90% faster document processing",
      "Reduced manual errors",
      "Better compliance",
      "Improved efficiency"
    ],
    pricing: "Starting at $89/month for up to 1,000 documents",
    marketRate: "$50-200/month"
  },
  {
    title: "AI Sales Intelligence Platform",
    description: "Advanced sales analytics and lead scoring platform with AI-powered insights and pipeline optimization",
    icon: TrendingUp,
    features: [
      "Lead Scoring AI",
      "Sales Forecasting",
      "Pipeline Analytics",
      "Customer Behavior Analysis",
      "Sales Coaching Insights",
      "Revenue Optimization"
    ],
    color: "from-emerald-500 to-green-500",
    benefits: [
      "25% increase in conversion rates",
      "Better lead qualification",
      "Improved sales forecasting",
      "Higher revenue per rep"
    ],
    pricing: "Starting at $69/month per sales rep",
    marketRate: "$40-120/rep/month"
  },
  {
    title: "AI Content Creation Studio",
    description: "Comprehensive content creation platform with AI writing, image generation, and multi-channel publishing",
    icon: PenTool,
    features: [
      "AI Writing Assistant",
      "Image Generation",
      "Content Optimization",
      "Multi-channel Publishing",
      "SEO Optimization",
      "Brand Voice Consistency"
    ],
    color: "from-rose-500 to-pink-500",
    benefits: [
      "10x faster content creation",
      "Consistent brand voice",
      "SEO-optimized content",
      "Multi-platform publishing"
    ],
    pricing: "Starting at $49/month for unlimited content",
    marketRate: "$30-100/month"
  },
  {
    title: "AI Compliance Monitoring System",
    description: "Automated compliance tracking and reporting platform with real-time monitoring and audit preparation",
    icon: Shield,
    features: [
      "Real-time Compliance Monitoring",
      "Automated Reporting",
      "Risk Assessment",
      "Audit Trail Management",
      "Policy Updates",
      "Training Management"
    ],
    color: "from-red-500 to-rose-500",
    benefits: [
      "Reduced compliance risks",
      "Automated reporting",
      "Better audit preparation",
      "Cost savings on compliance"
    ],
    pricing: "Starting at $199/month for enterprise compliance",
    marketRate: "$100-500/month"
  },
  {
    title: "AI Social Media Management",
    description: "Intelligent social media platform with AI content scheduling, engagement optimization, and performance analytics",
    icon: Share2,
    features: [
      "AI Content Scheduling",
      "Engagement Optimization",
      "Hashtag Research",
      "Competitor Analysis",
      "Performance Analytics",
      "Multi-platform Management"
    ],
    color: "from-violet-500 to-purple-500",
    benefits: [
      "3x higher engagement",
      "Automated posting",
      "Better content strategy",
      "Time savings"
    ],
    pricing: "Starting at $39/month for up to 5 social accounts",
    marketRate: "$25-100/month"
  },
  {
    title: "AI Email Marketing Platform",
    description: "Advanced email marketing automation with AI personalization, send time optimization, and advanced analytics",
    icon: Mail,
    features: [
      "AI Personalization",
      "Send Time Optimization",
      "Subject Line Testing",
      "Segmentation AI",
      "Deliverability Optimization",
      "Advanced Analytics"
    ],
    color: "from-blue-500 to-indigo-500",
    benefits: [
      "40% higher open rates",
      "Better personalization",
      "Improved deliverability",
      "Higher conversion rates"
    ],
    pricing: "Starting at $29/month for up to 2,500 subscribers",
    marketRate: "$15-50/month"
  },
  {
    title: "AI Website Analytics & Optimization",
    description: "Intelligent website analytics platform with AI insights, user behavior analysis, and automated optimization",
    icon: Globe,
    features: [
      "AI User Behavior Analysis",
      "Conversion Optimization",
      "Heatmap Analytics",
      "A/B Testing Automation",
      "Performance Monitoring",
      "SEO Recommendations"
    ],
    color: "from-cyan-500 to-blue-500",
    benefits: [
      "25% increase in conversions",
      "Better user experience",
      "Automated optimization",
      "Data-driven insights"
    ],
    pricing: "Starting at $49/month for up to 100,000 page views",
    marketRate: "$30-150/month"
  },
  {
    title: "AI Customer Feedback Analysis",
    description: "Advanced feedback analysis platform with sentiment analysis, trend identification, and actionable insights",
    icon: MessageSquare,
    features: [
      "Sentiment Analysis",
      "Trend Identification",
      "Feedback Categorization",
      "Actionable Insights",
      "Multi-channel Collection",
      "Real-time Monitoring"
    ],
    color: "from-lime-500 to-green-500",
    benefits: [
      "Better customer understanding",
      "Faster issue resolution",
      "Improved products/services",
      "Higher customer satisfaction"
    ],
    pricing: "Starting at $39/month for up to 1,000 feedback items",
    marketRate: "$25-100/month"
  },
  {
    title: "AI Time Tracking & Productivity",
    description: "Intelligent time management platform with AI productivity insights, distraction blocking, and work optimization",
    icon: Clock,
    features: [
      "AI Productivity Analysis",
      "Distraction Blocking",
      "Work Pattern Recognition",
      "Focus Time Optimization",
      "Team Productivity Insights",
      "Goal Tracking"
    ],
    color: "from-yellow-500 to-amber-500",
    benefits: [
      "30% productivity increase",
      "Better focus management",
      "Work-life balance",
      "Team performance insights"
    ],
    pricing: "Starting at $19/month per user",
    marketRate: "$10-40/user/month"
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
    price: "$2,999",
    description: "Perfect for small businesses and startups",
    features: [
      "Basic web application",
      "Responsive design",
      "User authentication",
      "Basic analytics",
      "3 months support",
      "Source code included"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Professional",
    price: "$7,999",
    description: "Ideal for growing businesses with complex needs",
    features: [
      "Advanced web application",
      "Mobile app (iOS/Android)",
      "API development",
      "Database integration",
      "Advanced analytics",
      "6 months support",
      "Source code included"
    ],
    color: "from-purple-500 to-pink-500",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Custom enterprise solution",
      "Multi-platform deployment",
      "Advanced integrations",
      "Custom analytics dashboard",
      "12 months support",
      "Dedicated project manager",
      "Source code included"
    ],
    color: "from-green-500 to-emerald-500"
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

                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">Our Pricing:</span>
                      <span className="text-lg font-bold text-gray-900">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Market Rate:</span>
                      <span className="text-sm text-gray-500">{service.marketRate}</span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group-hover:scale-105`}
                  >
                    Get Started
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