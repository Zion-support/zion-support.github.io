import React from 'react';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';

=======
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cloud, Users, TrendingUp, Phone, Mail, Globe, ArrowRight, Zap, Clock, Star, Shield, Smartphone, Settings, PieChart, FileText } from 'lucide-react';
import Target from 'lucide-react/dist/esm/icons/target';
import { Link } from 'react-router-dom';
const microSAASServices = COMPREHENSIVE_SERVICES.filter(service => service.category === 'Micro SAAS');
export default function MicroSAASShowcase() {
    return (<div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-cyan to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <Cloud className="w-20 h-20 text-white mx-auto mb-4"/>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Powerful, affordable software solutions designed for modern businesses. 
            Streamline operations, boost productivity, and scale efficiently with our cloud-based platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-zion-blue font-bold">
                <Zap className="w-4 h-4 mr-2"/>
                Start Free Trial
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Target className="w-4 h-4 mr-2"/>
                Get Demo
        </div>
      </section>
      {/* SAAS Stats Banner */}
      <section className="bg-zion-blue-dark py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-sm text-zion-slate-light">Uptime</div>
            </div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-sm text-zion-slate-light">Support</div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">5min</div>
              <div className="text-sm text-zion-slate-light">Setup Time</div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">$0</div>
              <div className="text-sm text-zion-slate-light">Setup Fees</div>
      {/* SAAS Solutions Overview */}
      <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">
              SAAS Solutions Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our micro SAAS platforms are built with modern technology, designed for ease of use, 
              and priced for accessibility. Start small, scale as you grow.
            </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSAASServices.map((service) => (<Card key={service.id} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-zion-blue-light">
                <div className="relative">
                  <img src={service.images[0]} alt={service.title} className="w-full h-48 object-cover rounded-t-lg"/>
                  <Badge className="absolute top-4 right-4 bg-zion-cyan text-zion-blue font-bold">
                    {service.subcategory}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-zion-blue">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Pricing */}
                  <div className="text-center p-4 bg-zion-cyan-light rounded-lg">
                    <div className="text-3xl font-bold text-zion-blue mb-1">
                      ${service.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">
                      per month
                    <div className="text-xs text-zion-cyan mt-1">
                      No setup fees • Cancel anytime
                  </div>
                  {/* Tags */}
                  <div>
                    <h4 className="font-semibold text-zion-blue mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4"/>
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 4).map((tag, index) => (<Badge key={index} variant="secondary" className="text-xs bg-zion-cyan-light text-zion-blue">
                          {tag}
                        </Badge>))}
                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current"/>
                      <span>{service.rating}</span>
                      <span>({service.reviewCount})</span>
                      <Clock className="w-4 h-4"/>
                      <span>{service.availability || '2-4 weeks'}</span>
                  {/* Category */}
                      <Users className="w-4 h-4"/>
                      Category
                      <Badge variant="secondary" className="text-xs bg-zion-cyan-light text-zion-blue">
                        {service.category}
                      </Badge>
                  {/* Contact CTA */}
                  <div className="text-center space-y-4">
                      Ready to get started?
                    <div className="flex flex-col gap-2">
                      <a href="tel:+13024640950" className="flex items-center justify-center gap-2 text-zion-cyan hover:text-zion-cyan-dark transition-colors font-medium">
                        <Phone className="w-4 h-4"/>
                        +1 302 464 0950
                      </a>
                      <a href="mailto:kleber@ziontechgroup.com" className="flex items-center justify-center gap-2 text-zion-cyan hover:text-zion-cyan-dark transition-colors font-medium">
                        <Mail className="w-4 h-4"/>
                        kleber@ziontechgroup.com
                    <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-zion-purple hover:text-zion-purple-dark transition-colors font-medium">
                      Get Demo <ArrowRight className="w-4 h-4"/>
                    </Link>
                </CardContent>
              </Card>))}
      {/* SAAS Benefits */}
      <section className="bg-zion-blue-light py-16">
              Why Choose Micro SAAS?
              Micro SAAS solutions offer the perfect balance of functionality, affordability, and scalability for growing businesses.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Cloud-Based</h3>
              <p className="text-gray-600">Access from anywhere, anytime with automatic updates and backups</p>
                <Zap className="w-8 h-8 text-white"/>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Quick Setup</h3>
              <p className="text-gray-600">Get started in minutes, not weeks or months</p>
                <TrendingUp className="w-8 h-8 text-white"/>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Scalable</h3>
              <p className="text-gray-600">Grow with your business needs without infrastructure concerns</p>
                <Shield className="w-8 h-8 text-white"/>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Secure</h3>
              <p className="text-gray-600">Enterprise-grade security with regular updates and monitoring</p>
      {/* SAAS Features Comparison */}
              Platform Features
              All our SAAS platforms include these essential features to ensure your success.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-zion-blue-light rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-8 h-8 text-zion-cyan"/>
                <h3 className="text-xl font-semibold text-zion-blue">Mobile Responsive</h3>
              <p className="text-gray-600">Access your data and manage operations from any device, anywhere in the world.</p>
                <Globe className="w-8 h-8 text-zion-cyan"/>
                <h3 className="text-xl font-semibold text-zion-blue">Multi-Platform</h3>
              <p className="text-gray-600">Works seamlessly across web browsers, mobile apps, and desktop applications.</p>
                <Settings className="w-8 h-8 text-zion-cyan"/>
                <h3 className="text-xl font-semibold text-zion-blue">Easy Configuration</h3>
              <p className="text-gray-600">Simple setup and customization without technical expertise required.</p>
                <PieChart className="w-8 h-8 text-zion-cyan"/>
                <h3 className="text-xl font-semibold text-zion-blue">Analytics Dashboard</h3>
              <p className="text-gray-600">Comprehensive reporting and insights to track performance and growth.</p>
                <Users className="w-8 h-8 text-zion-cyan"/>
                <h3 className="text-xl font-semibold text-zion-blue">Team Collaboration</h3>
              <p className="text-gray-600">Built-in tools for team communication, file sharing, and project management.</p>
                <FileText className="w-8 h-8 text-zion-cyan"/>
                <h3 className="text-xl font-semibold text-zion-blue">Documentation</h3>
              <p className="text-gray-600">Comprehensive guides, tutorials, and support resources for your team.</p>
      {/* Implementation Timeline */}
              Get Started in Minutes
              Our streamlined onboarding process gets you up and running quickly with minimal setup time.
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Sign Up</h3>
              <p className="text-gray-600">Create your account in under 2 minutes</p>
                <span className="text-white font-bold text-xl">2</span>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Configure</h3>
              <p className="text-gray-600">Set up your preferences and import data</p>
                <span className="text-white font-bold text-xl">3</span>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Train Team</h3>
              <p className="text-gray-600">Quick training session with our experts</p>
                <span className="text-white font-bold text-xl">4</span>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Go Live</h3>
              <p className="text-gray-600">Start using and see immediate benefits</p>
      {/* Call to Action */}
      <section className="bg-gradient-to-r from-zion-blue to-zion-cyan py-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business Operations?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have streamlined their operations with our micro SAAS solutions. 
            Start your free trial today and experience the difference.
                <Cloud className="w-4 h-4 mr-2"/>
                Schedule Demo
      {/* Contact Information */}
      <section className="bg-zion-blue-dark py-12">
        <div className="container mx-auto px-4 text-center text-white">
          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-zion-cyan"/>
              <span>+1 302 464 0950</span>
              <Mail className="w-5 h-5 text-zion-cyan"/>
              <span>kleber@ziontechgroup.com</span>
              <Globe className="w-5 h-5 text-zion-cyan"/>
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan transition-colors">
                ziontechgroup.com
              </a>
          <div className="mt-6 text-zion-slate-light">
            <p>364 E Main St STE 1008, Middletown DE 19709</p>
    </div>);
}
