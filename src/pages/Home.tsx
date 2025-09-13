import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NewContentPromotionBanner, FeaturedNewContentSection, SuccessMetricsPromotionBanner } from "@/components/NewContentPromotionBanner";
import { 
  ArrowRight, 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Star,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  BookOpen,
  FileText,
  PlayCircle,
  MessageSquare,
  Award,
  Globe,
  Target,
  DollarSign
} from "lucide-react";

export default function Home() {
  return (
    <>
      <SEO 
        title="Zion Tech Group - Revolutionary AI & Technology Solutions"
        description="Transform your business with cutting-edge AI, quantum computing, and autonomous solutions. Get 300% ROI within 6 months with our comprehensive technology services."
        keywords="AI services, quantum computing, business automation, technology solutions, digital transformation"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full px-4 py-2 mb-8">
              <Zap className="h-4 w-4 text-zion-purple" />
              <span className="text-zion-purple text-sm font-medium">AI Revolution 2025</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with
              <span className="bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent"> Revolutionary AI</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Achieve <span className="text-zion-cyan font-semibold">300% ROI within 6 months</span> with our cutting-edge AI, quantum computing, and autonomous solutions that are reshaping industries worldwide.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">$2.3M</div>
                <div className="text-gray-400 text-sm">Average Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">300%</div>
                <div className="text-gray-400 text-sm">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">90%</div>
                <div className="text-gray-400 text-sm">Faster Operations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">15+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/contact">
                <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-4 text-lg">
                  Get Free AI Assessment
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white px-8 py-4 text-lg">
                  View Our Services
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>SOC 2 & ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>24/7 Expert Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>99.9% Uptime Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Latest Insights & Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how businesses are achieving extraordinary results with our AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Blog Post */}
            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px]">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-4 w-4 text-zion-purple" />
                  <Badge variant="outline" className="border-zion-purple text-zion-purple">Latest Blog</Badge>
                </div>
                <CardTitle className="text-white text-lg">
                  The AI Revolution 2025: Transforming Business Operations
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Discover how AI is reshaping industries and learn about the latest trends in business automation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                  <Link to="/blog/ai-revolution-2025-transforming-business-operations">
                    <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                      Read More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Case Study */}
            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px]">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <Badge variant="outline" className="border-green-400 text-green-400">Success Story</Badge>
                </div>
                <CardTitle className="text-white text-lg">
                  GlobalCorp Achieves 300% ROI in 6 Months
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Learn how a Fortune 500 company saved $2.3M annually with our AI solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <DollarSign className="h-4 w-4" />
                    <span>$2.3M saved</span>
                  </div>
                  <Link to="/case-studies/enterprise-ai-transformation-success-story">
                    <Button size="sm" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white">
                      View Case Study
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Resource Guide */}
            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px]">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-4 w-4 text-zion-cyan" />
                  <Badge variant="outline" className="border-zion-cyan text-zion-cyan">Free Guide</Badge>
                </div>
                <CardTitle className="text-white text-lg">
                  Complete AI Implementation Guide 2025
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Everything you need to know about implementing AI in your business.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Users className="h-4 w-4" />
                    <span>50+ pages</span>
                  </div>
                  <Link to="/resources/complete-ai-implementation-guide-2025">
                    <Button size="sm" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                      Download Guide
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* New Content Promotion Banner */}
      <NewContentPromotionBanner />

      {/* Featured New Content Section */}
      <FeaturedNewContentSection />

      {/* Success Metrics Promotion Banner */}
      <div className="container mx-auto px-4 py-8">
        <SuccessMetricsPromotionBanner />
      </div>

      {/* Services Showcase */}
      <ServicesShowcase />

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
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
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Innovation</h3>
              <p className="text-gray-400">Cutting-edge AI and quantum computing solutions that push the boundaries of what's possible.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-400">SOC 2, ISO 27001, GDPR, HIPAA compliant with advanced security protocols.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-gray-400">Average 300% ROI within 6 months with measurable business impact.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global Support</h3>
              <p className="text-gray-400">24/7 technical support and worldwide deployment capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-purple-light mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have already achieved extraordinary results with our AI solutions. Get your free assessment today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Get Free AI Assessment
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple px-8 py-4 text-lg">
                View All Services
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