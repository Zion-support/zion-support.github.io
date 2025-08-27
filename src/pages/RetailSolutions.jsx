import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Smartphone, 
  CreditCard, 
  Users, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Target,
  TrendingUp,
  Award,
  Globe,
  Lock,
  Activity,
  FileText,
  Clock,
  Eye,
  Package,
  Truck,
  Store,
  Tag,
  Brain,
  Code
} from 'lucide-react';

const retailSolutions = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Complete online shopping experience with advanced features and seamless user experience.",
    icon: ShoppingCart,
    features: [
      "Multi-channel sales",
      "Inventory management",
      "Payment processing",
      "Order fulfillment"
    ],
    price: "From $30,000",
    timeline: "12-20 weeks",
    category: "E-commerce",
    integrations: ["Shopify", "WooCommerce", "Magento", "Payment Gateways"]
  },
  {
    id: 2,
    title: "Mobile Shopping App",
    description: "Native mobile applications that provide seamless shopping experience on iOS and Android.",
    icon: Smartphone,
    features: [
      "Native app development",
      "Push notifications",
      "Offline functionality",
      "App store optimization"
    ],
    price: "From $25,000",
    timeline: "10-16 weeks",
    category: "Mobile Development",
    integrations: ["iOS", "Android", "Cross-platform", "React Native"]
  },
  {
    id: 3,
    title: "Point of Sale (POS) System",
    description: "Modern POS solutions that streamline in-store operations and customer service.",
    icon: CreditCard,
    features: [
      "Payment processing",
      "Inventory tracking",
      "Customer management",
      "Sales reporting"
    ],
    price: "From $20,000",
    timeline: "8-14 weeks",
    category: "POS Systems",
    integrations: ["Payment Processors", "Accounting Software", "CRM Systems"]
  },
  {
    id: 4,
    title: "Customer Analytics Platform",
    description: "Data-driven insights to understand customer behavior and optimize retail strategies.",
    icon: BarChart3,
    features: [
      "Customer segmentation",
      "Purchase patterns",
      "Predictive analytics",
      "Real-time reporting"
    ],
    price: "From $35,000",
    timeline: "12-18 weeks",
    category: "Analytics",
    integrations: ["Google Analytics", "Facebook Pixel", "CRM Systems", "Marketing Tools"]
  },
  {
    id: 5,
    title: "Inventory Management System",
    description: "Comprehensive inventory tracking and management across all sales channels.",
    icon: Package,
    features: [
      "Real-time tracking",
      "Automated reordering",
      "Multi-location support",
      "Supplier management"
    ],
    price: "From $25,000",
    timeline: "10-16 weeks",
    category: "Inventory",
    integrations: ["ERP Systems", "Accounting Software", "Shipping Providers"]
  },
  {
    id: 6,
    title: "Omnichannel Retail Platform",
    description: "Unified platform that connects online and offline retail experiences seamlessly.",
    icon: Store,
    features: [
      "Channel integration",
      "Unified inventory",
      "Customer experience",
      "Data synchronization"
    ],
    price: "From $50,000",
    timeline: "16-24 weeks",
    category: "Platform Solutions",
    integrations: ["E-commerce", "POS Systems", "Mobile Apps", "CRM"]
  }
];

const retailTrends = [
  {
    title: "AI-Powered Personalization",
    description: "Machine learning algorithms that provide personalized shopping experiences",
    icon: Brain,
    impact: "High"
  },
  {
    title: "Omnichannel Integration",
    description: "Seamless experience across online, mobile, and physical stores",
    icon: Globe,
    impact: "High"
  },
  {
    title: "Mobile-First Shopping",
    description: "Mobile devices driving majority of online retail traffic",
    icon: Smartphone,
    impact: "Critical"
  },
  {
    title: "Data-Driven Decisions",
    description: "Analytics and insights driving retail strategy and optimization",
    icon: BarChart3,
    impact: "High"
  }
];

const successStories = [
  {
    id: 1,
    company: "Fashion Forward",
    industry: "Apparel Retail",
    challenge: "Needed omnichannel platform to connect online and physical stores",
    solution: "Built integrated e-commerce and POS system with unified inventory",
    results: "40% increase in online sales, 25% reduction in inventory costs",
    logo: "FF"
  },
  {
    id: 2,
    company: "Tech Gadgets Pro",
    industry: "Electronics Retail",
    challenge: "Required mobile app for enhanced customer engagement",
    solution: "Developed feature-rich mobile shopping app with AR product preview",
    results: "60% mobile traffic increase, 35% higher conversion rate",
    logo: "TG"
  },
  {
    id: 3,
    company: "Home & Garden Plus",
    industry: "Home Improvement",
    challenge: "Needed inventory management system for 50+ locations",
    solution: "Implemented cloud-based inventory system with real-time tracking",
    results: "30% reduction in stockouts, 20% improvement in order fulfillment",
    logo: "HG"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Retail Assessment",
    description: "Analyze current retail operations and identify improvement opportunities",
    icon: Target,
    duration: "1-2 weeks"
  },
  {
    step: 2,
    title: "Solution Design",
    description: "Design customized retail technology solution based on requirements",
    icon: FileText,
    duration: "2-3 weeks"
  },
  {
    step: 3,
    title: "Development & Testing",
    description: "Build and thoroughly test the retail solution",
    icon: Code,
    duration: "8-24 weeks"
  },
  {
    step: 4,
    title: "Deployment & Training",
    description: "Deploy solution and provide comprehensive staff training",
    icon: Users,
    duration: "1-2 weeks"
  }
];

export default function RetailSolutions() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'E-commerce', 'Mobile Development', 'POS Systems', 'Analytics', 'Inventory', 'Platform Solutions'];
  
  const filteredSolutions = selectedCategory === 'All' 
    ? retailSolutions 
    : retailSolutions.filter(solution => solution.category === selectedCategory);

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8"
            >
              <ShoppingCart className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Retail
              <span className="text-gradient block">Solutions</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Transform your retail business with cutting-edge technology solutions. 
              From e-commerce platforms to omnichannel experiences, we help retailers 
              thrive in the digital age.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <ShoppingCart className="w-4 h-4" />
                <span>E-commerce</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Smartphone className="w-4 h-4" />
                <span>Mobile First</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <BarChart3 className="w-4 h-4" />
                <span>Data Driven</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Retail Trends */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Retail Technology Trends</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Stay ahead of the curve with the latest retail technology innovations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {retailTrends.map((trend, index) => (
              <motion.div
                key={trend.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <trend.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{trend.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{trend.description}</p>
                
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  trend.impact === 'Critical' 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : trend.impact === 'High'
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    : 'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}>
                  {trend.impact} Impact
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Implementation Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful retail technology implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-zion-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{step.description}</p>
                <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Retail Technology Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed to modernize and optimize retail operations
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-dark/30 text-zion-slate-light border border-zion-cyan/20 hover:border-zion-cyan/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedSolution(solution)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{solution.description}</p>
                
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {solution.integrations.slice(0, 2).map((integration, intIndex) => (
                    <span
                      key={intIndex}
                      className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded border border-zion-purple/30"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zion-cyan font-semibold">{solution.price}</span>
                  <span className="text-zion-slate-light text-sm">{solution.timeline}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                    {solution.category}
                  </span>
                  <button className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Retail businesses that have transformed their operations with our technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {story.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.company}</h3>
                    <p className="text-zion-slate-light text-sm">{story.industry}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Challenge</h4>
                    <p className="text-zion-slate-light text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Solution</h4>
                    <p className="text-zion-slate-light text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Results</h4>
                    <p className="text-zion-slate-light text-sm">{story.results}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-zion-slate-light text-sm ml-2">5.0 Rating</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Retail Business?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how our retail technology solutions can modernize your operations, 
              enhance customer experience, and drive growth in the digital marketplace.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}