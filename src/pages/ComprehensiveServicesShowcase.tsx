import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Cloud, 
  Shield, 
  Globe, 
  Smartphone, 
  Database, 
  Zap,
  ArrowRight,
  Star,
  DollarSign,
  Clock,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Target,
  MessageSquare,
  FileText,
  PlayCircle,
  BookOpen
} from "lucide-react";

const services = [
  {
    id: 1,
    category: "AI & Machine Learning",
    title: "Autonomous Business Process Automation Suite",
    description: "Transform your operations with AI that automates 80% of repetitive tasks and reduces costs by 40-60%.",
    price: 299,
    marketPrice: 800,
    features: ["Workflow automation", "Task scheduling", "Process monitoring", "Custom automation rules"],
    benefits: ["40-60% cost reduction", "300% productivity increase", "ROI within 3 months"],
    icon: Brain,
    color: "from-purple-500 to-purple-600",
    badge: "Most Popular"
  },
  {
    id: 2,
    category: "AI & Machine Learning",
    title: "AI-Powered Customer Experience Platform",
    description: "Revolutionize customer interactions with 24/7 intelligent support and personalized experiences.",
    price: 199,
    marketPrice: 400,
    features: ["Intelligent chatbots", "Sentiment analysis", "Personalized recommendations", "Multi-channel support"],
    benefits: ["60% cost reduction", "90% response time improvement", "94% customer satisfaction"],
    icon: MessageSquare,
    color: "from-blue-500 to-blue-600",
    badge: "Best Value"
  },
  {
    id: 3,
    category: "AI & Machine Learning",
    title: "Enterprise AI Analytics Dashboard",
    description: "Get real-time business intelligence and predictive analytics with 99% faster insights.",
    price: 499,
    marketPrice: 1000,
    features: ["Real-time BI", "Predictive analytics", "Custom reporting", "Data visualization"],
    benefits: ["99% faster insights", "85% better forecasting", "Data-driven decisions"],
    icon: TrendingUp,
    color: "from-green-500 to-green-600",
    badge: "Enterprise"
  },
  {
    id: 4,
    category: "AI & Machine Learning",
    title: "AI Content Generation Platform",
    description: "Create high-quality content at scale with 80% time savings and 200% SEO improvement.",
    price: 199,
    marketPrice: 500,
    features: ["Multi-language content", "SEO optimization", "Brand consistency", "Content scheduling"],
    benefits: ["80% time savings", "200% SEO improvement", "Consistent messaging"],
    icon: FileText,
    color: "from-cyan-500 to-cyan-600",
    badge: "Content"
  },
  {
    id: 5,
    category: "Cybersecurity",
    title: "AI-Powered Threat Detection System",
    description: "Advanced cybersecurity with 90% faster threat detection and 70% fewer false positives.",
    price: 399,
    marketPrice: 600,
    features: ["Real-time monitoring", "Behavioral analysis", "Automated response", "Compliance reporting"],
    benefits: ["90% faster detection", "70% fewer false positives", "24/7 protection"],
    icon: Shield,
    color: "from-red-500 to-red-600",
    badge: "Security"
  },
  {
    id: 6,
    category: "Cloud & DevOps",
    title: "Cloud Infrastructure Automation",
    description: "Automate your cloud infrastructure with 40% cost reduction and 10x faster deployment.",
    price: 599,
    marketPrice: 800,
    features: ["Auto-scaling", "Cost optimization", "Performance monitoring", "Disaster recovery"],
    benefits: ["40% cost reduction", "10x faster deployment", "99.9% uptime"],
    icon: Cloud,
    color: "from-orange-500 to-orange-600",
    badge: "Infrastructure"
  },
  {
    id: 7,
    category: "Quantum Computing",
    title: "Quantum Financial Risk Assessment",
    description: "Revolutionary quantum computing for financial modeling with 85% accuracy improvement.",
    price: 3500,
    marketPrice: 12000,
    features: ["Quantum risk modeling", "Portfolio optimization", "Real-time analysis", "Advanced algorithms"],
    benefits: ["85% accuracy improvement", "30% volatility reduction", "Future-proof security"],
    icon: Target,
    color: "from-indigo-500 to-indigo-600",
    badge: "Quantum"
  },
  {
    id: 8,
    category: "AI & Machine Learning",
    title: "Zero Trust Identity Management",
    description: "Advanced identity security with multi-factor authentication and behavioral analytics.",
    price: 299,
    marketPrice: 400,
    features: ["Multi-factor auth", "Behavioral analytics", "Access control", "Risk assessment"],
    benefits: ["80% security improvement", "Full compliance", "Zero trust architecture"],
    icon: Users,
    color: "from-teal-500 to-teal-600",
    badge: "Identity"
  }
];

const categories = [
  { name: "All Services", count: services.length },
  { name: "AI & Machine Learning", count: services.filter(s => s.category === "AI & Machine Learning").length },
  { name: "Cybersecurity", count: services.filter(s => s.category === "Cybersecurity").length },
  { name: "Cloud & DevOps", count: services.filter(s => s.category === "Cloud & DevOps").length },
  { name: "Quantum Computing", count: services.filter(s => s.category === "Quantum Computing").length }
];

export default function ComprehensiveServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = React.useState("All Services");

  const filteredServices = selectedCategory === "All Services" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <>
      <SEO 
        title="Comprehensive AI Services Showcase - Zion Tech Group"
        description="Discover our complete portfolio of AI, cybersecurity, cloud, and quantum computing services. Transform your business with proven solutions that deliver 300% ROI."
        keywords="AI services, cybersecurity, cloud computing, quantum computing, business automation, digital transformation"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-zion-purple/20 text-zion-purple border-zion-purple/30 mb-6">
              <Zap className="h-3 w-3 mr-2" />
              Revolutionary Technology Solutions
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive AI Services
              <span className="bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent block">
                Portfolio
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our cutting-edge AI, cybersecurity, cloud, and quantum computing solutions. 
              Join hundreds of companies achieving <span className="text-zion-cyan font-semibold">300% ROI within 6 months</span>.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">$2.3M</div>
                <div className="text-gray-400 text-sm">Average Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-purple mb-2">300%</div>
                <div className="text-gray-400 text-sm">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
                <div className="text-gray-400 text-sm">Faster Operations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Expert Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-4">
                  Get Free Consultation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button size="lg" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white px-8 py-4">
                  View Success Stories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.name)}
                className={selectedCategory === category.name 
                  ? "bg-zion-purple text-white" 
                  : "border-slate-600 text-gray-300 hover:border-zion-purple hover:text-zion-purple"
                }
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px] group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline" className="border-zion-purple text-zion-purple text-xs">
                        {service.badge}
                      </Badge>
                    </div>
                    
                    <div className="mb-2">
                      <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs mb-2">
                        {service.category}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-white text-lg group-hover:text-zion-purple transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-sm">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-zion-cyan" />
                        <span className="font-bold text-zion-cyan text-xl">${service.price}</span>
                        <span className="text-gray-400 text-sm">/month</span>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-400 text-sm line-through">${service.marketPrice}/month</div>
                        <div className="text-green-400 text-xs font-semibold">
                          Save {Math.round((1 - service.price / service.marketPrice) * 100)}%
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-white text-sm font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-400 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-white text-sm font-semibold mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.benefits.map((benefit, index) => (
                          <Badge key={index} variant="outline" className="border-green-400/30 text-green-400 text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-2">
                      <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="flex-1">
                        <Button size="sm" className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
                          Learn More
                        </Button>
                      </Link>
                      <Link to="/contact">
                        <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                          Get Quote
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another technology company. We're your partners in transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">15+ Years Experience</h3>
              <p className="text-gray-400">Proven expertise in enterprise technology and AI implementation.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-400">SOC 2, ISO 27001, GDPR, HIPAA compliant with advanced security.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven ROI</h3>
              <p className="text-gray-400">Average 300% ROI within 6 months with measurable results.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-400">Round-the-clock technical support and monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-purple-light mb-8 max-w-3xl mx-auto">
            Get a free consultation and discover how our AI solutions can deliver extraordinary results for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Get Free Consultation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link to="/resources/complete-ai-implementation-guide-2025">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple px-8 py-4 text-lg">
                Download Free Guide
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 text-zion-purple-light">
            <p className="text-sm">📞 Call us: +1 302 464 0950 | ✉️ Email: kleber@ziontechgroup.com</p>
          </div>
        </div>
      </section>
    </>
  );
}