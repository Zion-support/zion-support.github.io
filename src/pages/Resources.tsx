import React from 'react';
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { 
  Download, 
  FileText, 
  Video, 
  BookOpen, 
  ArrowRight,
  ExternalLink,
  Clock,
  Users,
  Star,
  TrendingUp,
  Brain,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  Play,
  Book,
  FileSpreadsheet,
  Presentation
} from "lucide-react";
import { Link } from "react-router-dom";

const resourceCategories = [
  {
    id: 1,
    title: "AI Strategy & Planning",
    description: "Comprehensive guides for AI implementation and strategy development",
    icon: Brain,
    color: "from-purple-500 to-purple-700",
    count: 12
  },
  {
    id: 2,
    title: "Technical Guides",
    description: "In-depth technical documentation and implementation guides",
    icon: FileText,
    color: "from-blue-500 to-blue-700",
    count: 18
  },
  {
    id: 3,
    title: "Case Studies",
    description: "Real-world examples and success stories from our clients",
    icon: TrendingUp,
    color: "from-green-500 to-green-700",
    count: 25
  },
  {
    id: 4,
    title: "Webinars & Videos",
    description: "Educational content and expert insights on AI trends",
    icon: Video,
    color: "from-red-500 to-red-700",
    count: 15
  }
];

const featuredResources = [
  {
    id: 1,
    title: "AI Implementation Roadmap 2024",
    type: "Whitepaper",
    description: "Complete guide to planning and implementing AI solutions in your organization",
    icon: FileText,
    downloadCount: "2,450",
    rating: 4.9,
    pages: 45,
    category: "AI Strategy & Planning",
    image: "/api/placeholder/400/250",
    tags: ["AI Strategy", "Implementation", "Roadmap"],
    featured: true
  },
  {
    id: 2,
    title: "Machine Learning Best Practices",
    type: "Technical Guide",
    description: "Essential practices for building robust and scalable ML models",
    icon: BookOpen,
    downloadCount: "1,890",
    rating: 4.8,
    pages: 32,
    category: "Technical Guides",
    image: "/api/placeholder/400/250",
    tags: ["Machine Learning", "Best Practices", "Development"],
    featured: true
  },
  {
    id: 3,
    title: "AI ROI Calculator & Framework",
    type: "Tool",
    description: "Interactive calculator to measure and predict AI investment returns",
    icon: FileSpreadsheet,
    downloadCount: "3,200",
    rating: 4.9,
    pages: 8,
    category: "AI Strategy & Planning",
    image: "/api/placeholder/400/250",
    tags: ["ROI", "Calculator", "Framework"],
    featured: true
  },
  {
    id: 4,
    title: "Future of AI in Business",
    type: "Webinar",
    description: "Expert panel discussion on emerging AI trends and business opportunities",
    icon: Play,
    downloadCount: "1,650",
    rating: 4.7,
    duration: "45 min",
    category: "Webinars & Videos",
    image: "/api/placeholder/400/250",
    tags: ["Future Trends", "Business AI", "Panel Discussion"],
    featured: true
  }
];

const allResources = [
  {
    id: 5,
    title: "Data Governance for AI",
    type: "Whitepaper",
    description: "Best practices for managing data quality and governance in AI projects",
    icon: FileText,
    downloadCount: "1,200",
    rating: 4.6,
    pages: 28,
    category: "Technical Guides",
    tags: ["Data Governance", "AI", "Quality"]
  },
  {
    id: 6,
    title: "AI Ethics Framework",
    type: "Guide",
    description: "Comprehensive framework for ethical AI development and deployment",
    icon: Book,
    downloadCount: "980",
    rating: 4.8,
    pages: 36,
    category: "AI Strategy & Planning",
    tags: ["AI Ethics", "Framework", "Responsible AI"]
  },
  {
    id: 7,
    title: "Chatbot Implementation Guide",
    type: "Technical Guide",
    description: "Step-by-step guide to building and deploying intelligent chatbots",
    icon: BookOpen,
    downloadCount: "2,100",
    rating: 4.7,
    pages: 42,
    category: "Technical Guides",
    tags: ["Chatbots", "NLP", "Implementation"]
  },
  {
    id: 8,
    title: "AI Security Best Practices",
    type: "Whitepaper",
    description: "Essential security considerations for AI systems and data protection",
    icon: Shield,
    downloadCount: "1,450",
    rating: 4.9,
    pages: 38,
    category: "Technical Guides",
    tags: ["Security", "AI", "Data Protection"]
  },
  {
    id: 9,
    title: "E-commerce AI Success Stories",
    type: "Case Study",
    description: "Real examples of AI transformation in e-commerce businesses",
    icon: TrendingUp,
    downloadCount: "1,800",
    rating: 4.8,
    pages: 24,
    category: "Case Studies",
    tags: ["E-commerce", "Success Stories", "AI"]
  },
  {
    id: 10,
    title: "Building AI Teams",
    type: "Guide",
    description: "How to build and manage high-performing AI development teams",
    icon: Users,
    downloadCount: "1,300",
    rating: 4.7,
    pages: 30,
    category: "AI Strategy & Planning",
    tags: ["Team Building", "AI Teams", "Management"]
  },
  {
    id: 11,
    title: "AI Automation Workshop",
    type: "Video",
    description: "Hands-on workshop on implementing AI automation in business processes",
    icon: Video,
    downloadCount: "2,300",
    rating: 4.9,
    duration: "2 hours",
    category: "Webinars & Videos",
    tags: ["Automation", "Workshop", "Business Processes"]
  },
  {
    id: 12,
    title: "AI Market Trends 2024",
    type: "Presentation",
    description: "Comprehensive analysis of AI market trends and future predictions",
    icon: Presentation,
    downloadCount: "1,650",
    rating: 4.8,
    pages: 52,
    category: "AI Strategy & Planning",
    tags: ["Market Trends", "Analysis", "2024"]
  }
];

const newsletterStats = [
  { label: "Subscribers", value: "25,000+", icon: Users },
  { label: "Monthly Issues", value: "4", icon: FileText },
  { label: "Open Rate", value: "68%", icon: TrendingUp },
  { label: "Expert Contributors", value: "50+", icon: Star }
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="AI Resources & Downloads - Expert Guides, Whitepapers & Tools | Zion Tech Group" 
        description="Access our comprehensive library of AI resources including whitepapers, technical guides, case studies, webinars, and tools. Expert insights for your AI journey."
        keywords="AI resources, whitepapers, AI guides, machine learning documentation, AI tools, AI webinars, technical guides"
        canonical="https://ziontechgroup.com/resources"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
        
        <div className="container relative z-10 px-4 mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2">
                <BookOpen className="w-4 h-4 mr-2" />
                Expert Resources
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                AI Knowledge Hub
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
                Access our comprehensive library of AI resources, expert guides, 
                and tools to accelerate your AI transformation journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6 px-8"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get Expert Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg py-6 px-8"
              >
                Join AI Newsletter
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {newsletterStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Resource Categories
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Explore our curated collection of AI resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                  {category.description}
                </p>
                <div className="text-2xl font-bold text-blue-600">
                  {category.count}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Resources
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Featured Resources
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Our most popular and highly-rated resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white dark:bg-slate-900">
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg flex items-center justify-center">
                      <resource.icon className="w-16 h-16 text-white" />
                    </div>
                    <Badge className="absolute top-4 left-4 bg-yellow-500 text-white">
                      Featured
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {resource.type}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{resource.rating}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-2xl mb-3 text-slate-900 dark:text-white">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-slate-600 dark:text-slate-300">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {resource.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          <span>{resource.downloadCount}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{resource.pages ? `${resource.pages} pages` : resource.duration}</span>
                        </div>
                      </div>
                      <div className="text-blue-600 font-semibold">
                        {resource.category}
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Download className="w-4 h-4 mr-2" />
                      Download Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              All Resources
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Complete library of AI resources and tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-slate-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center`}>
                        <resource.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{resource.rating}</span>
                      </div>
                    </div>
                    
                    <Badge variant="secondary" className="mb-3 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 w-fit">
                      {resource.type}
                    </Badge>
                    
                    <CardTitle className="text-lg mb-2 text-slate-900 dark:text-white">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-300 text-sm">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {resource.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        <span>{resource.downloadCount}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{resource.pages ? `${resource.pages} pages` : resource.duration}</span>
                      </div>
                    </div>

                    <Button 
                      variant="outline"
                      className="w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Stay Updated with AI Insights
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Get the latest AI trends, expert insights, and exclusive resources delivered to your inbox weekly.
            </p>
            
            <div className="max-w-md mx-auto mb-8">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                />
                <Button className="bg-white text-blue-600 hover:bg-blue-50">
                  Subscribe
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg py-6 px-8"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get Expert Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg py-6 px-8"
              >
                Browse All Resources
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}