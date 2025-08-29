import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Search, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Phone,
  Mail,
  MapPin,
  Eye,
  Lock,
  Globe,
  Target,
  Rocket,
  File,
  FolderOpen,
  Database,
  Cpu,
  Network,
  Smartphone,
  Monitor,
  Tablet,
  Cloud,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  Settings,
  Workflow,
  Automation
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AIDocumentIntelligence = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: "Advanced OCR Technology",
      description: "99.9% accuracy OCR for 200+ document types including handwritten text, tables, and complex layouts."
    },
    {
      icon: <Search className="w-8 h-8 text-green-500" />,
      title: "Intelligent Data Extraction",
      description: "AI-powered extraction of structured data from unstructured documents with validation and verification."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Enterprise Security",
      description: "End-to-end encryption, GDPR compliance, and secure data handling for sensitive documents."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Real-Time Processing",
      description: "Instant document processing with parallel processing capabilities for high-volume operations."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-500" />,
      title: "Advanced Analytics",
      description: "Comprehensive insights into document processing efficiency, accuracy rates, and workflow optimization."
    },
    {
      icon: <Workflow className="w-8 h-8 text-red-500" />,
      title: "Workflow Automation",
      description: "Custom workflow automation with approval processes, routing, and integration capabilities."
    }
  ];

  const documentTypes = [
    {
      category: "Legal Documents",
      types: ["Contracts", "Legal Agreements", "Court Documents", "Patents", "Trademarks"],
      icon: <File className="w-6 h-6" />
    },
    {
      category: "Financial Documents",
      types: ["Invoices", "Receipts", "Bank Statements", "Tax Forms", "Financial Reports"],
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      category: "Healthcare Records",
      types: ["Medical Forms", "Patient Records", "Insurance Claims", "Prescriptions", "Lab Reports"],
      icon: <Users className="w-6 h-6" />
    },
    {
      category: "Government Forms",
      types: ["ID Documents", "Application Forms", "Compliance Reports", "Permits", "Licenses"],
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const useCases = [
    {
      title: "Legal Document Processing",
      description: "Automate contract analysis, legal research, and document review processes.",
      icon: <FileText className="w-6 h-6" />,
      benefits: ["Reduce review time by 80%", "Improve accuracy", "Lower legal costs"]
    },
    {
      title: "Financial Automation",
      description: "Streamline invoice processing, expense management, and financial reporting.",
      icon: <DollarSign className="w-6 h-6" />,
      benefits: ["Process 10x faster", "Reduce errors", "Improve compliance"]
    },
    {
      title: "Healthcare Records",
      description: "Digitize and organize patient records, insurance claims, and medical forms.",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Better patient care", "Faster processing", "HIPAA compliance"]
    },
    {
      title: "Government Compliance",
      description: "Automate regulatory reporting, compliance monitoring, and audit preparation.",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Ensure compliance", "Reduce risk", "Save time"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 149,
      period: "month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 documents/month",
        "Basic OCR capabilities",
        "Standard document types",
        "Email support",
        "Basic analytics dashboard"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: 399,
      period: "month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Up to 10,000 documents/month",
        "Advanced OCR & AI extraction",
        "200+ document types",
        "Priority support",
        "Advanced analytics & reporting",
        "Custom workflows",
        "API access"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: 999,
      period: "month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited documents",
        "Custom AI models",
        "All document types",
        "24/7 dedicated support",
        "White-label options",
        "Advanced security features",
        "SLA guarantees",
        "Dedicated account manager"
      ],
      popular: false,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      role: "General Counsel",
      company: "LegalTech Solutions",
      content: "The AI Document Intelligence Suite has revolutionized our contract review process. We're processing 10x more documents with 99% accuracy.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Lisa Chen",
      role: "CFO",
      company: "Global Finance Corp",
      content: "Our invoice processing time went from 3 days to 3 hours. The ROI has been incredible - we've saved over $200K annually.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Dr. Robert Martinez",
      role: "Medical Director",
      company: "HealthFirst Network",
      content: "Patient record digitization has improved our care quality significantly. The AI accuracy is remarkable and HIPAA compliance is seamless.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&h=100"
    }
  ];

  const stats = [
    { value: "99.9%", label: "OCR Accuracy" },
    { value: "200+", label: "Document Types" },
    { value: "80%", label: "Time Reduction" },
    { value: "10x", label: "Processing Speed" },
    { value: "95%", label: "Compliance Rate" },
    { value: "$200K+", label: "Annual Savings" }
  ];

  const integrations = [
    { name: "Salesforce", icon: <Cloud className="w-6 h-6" />, description: "CRM integration for document management" },
    { name: "Microsoft 365", icon: <Monitor className="w-6 h-6" />, description: "Seamless Office document processing" },
    { name: "Google Workspace", icon: <Globe className="w-6 h-6" />, description: "Cloud-based document collaboration" },
    { name: "Box", icon: <FolderOpen className="w-6 h-6" />, description: "Enterprise file sharing and storage" },
    { name: "Dropbox", icon: <Database className="w-6 h-6" />, description: "Cloud storage integration" },
    { name: "Slack", icon: <MessageCircle className="w-6 h-6" />, description: "Team communication and notifications" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Document Intelligence Suite - Zion Tech Group"
        description="Intelligent document processing platform that extracts, analyzes, and processes information from any document format. Transform your document workflows."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-green-500/20 text-green-300 border-green-500/30">
              <FileText className="w-4 h-4 mr-2" />
              AI Document Processing
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI Document
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Intelligence Suite
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform document workflows with our intelligent processing platform. 
              Advanced OCR, AI-powered extraction, and automated workflows for any document type.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
                <Play className="w-5 h-5 mr-2" />
                Try Demo
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Powerful Document Intelligence Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Document Intelligence Suite combines cutting-edge OCR technology with advanced AI 
              to deliver unprecedented document processing capabilities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-colors">
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Types Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Support for 200+ Document Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From simple forms to complex legal documents, our platform handles every document type 
              with industry-leading accuracy and processing speed.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {documentTypes.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-green-500/20 rounded-lg">
                        {category.icon}
                      </div>
                    </div>
                    <CardTitle className="text-white text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.types.map((type, typeIndex) => (
                        <div key={typeIndex} className="text-sm text-gray-300">
                          {type}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Transform Your Document Workflows
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how leading organizations are leveraging AI Document Intelligence to revolutionize 
              their document processing and workflow automation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-green-500/20 rounded-lg mr-3">
                        {useCase.icon}
                      </div>
                      <CardTitle className="text-white">{useCase.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-300">
                      {useCase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and workflows. Our platform integrates with all major 
              business applications and platforms.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-colors">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-blue-500/20 rounded-lg mr-3">
                        {integration.icon}
                      </div>
                      <CardTitle className="text-white">{integration.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {integration.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your document processing needs. All plans include our core features 
              with scalable options for growth.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <Card className={`bg-slate-800/50 border-slate-700 ${plan.popular ? 'border-green-500' : ''}`}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-300">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400">/{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90`}
                      size="lg"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about the transformative impact of AI Document Intelligence technology.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-3"
                      />
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                        <div className="text-sm text-green-400">{testimonial.company}</div>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Document Processing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses already using AI Document Intelligence to revolutionize 
              their workflows and eliminate manual document processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDocumentIntelligence;