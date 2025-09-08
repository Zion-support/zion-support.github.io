<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Server, Code, Smartphone, Monitor, Router, HardDrive, Wifi, Lock, Key, Bug, CheckCircle, AlertTriangle, Info, ArrowRight, Wrench, Tool, Cog, Server as ServerIcon, Database as DatabaseIcon2, Shield as ShieldIcon2, Zap as ZapIcon3, Building as BuildingIcon, Factory as FactoryIcon, Store as StoreIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Home as HomeIcon, Building2 as Building2Icon, GraduationCap as GraduationCapIcon, Calendar as CalendarIcon, FileText as FileTextIcon, BarChart3 as BarChart3Icon, Users as UsersIcon2, CreditCard as CreditCardIcon2, MessageSquare as MessageSquareIcon, Camera as CameraIcon, Video as VideoIcon, Music as MusicIcon, BookOpen as BookOpenIcon, Target as TargetIcon, TrendingUp as TrendingUpIcon, PieChart as PieChartIcon, Activity as ActivityIcon, Zap as ZapIcon4, LucideUserCheck, LucideUser, LucideUserCog, LucideUserCircle } from 'lucide-react';

import React from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { useWhitelabel } from "@/context/WhitelabelContext",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { ArrowRight, Briefcase, PenTool, BarChart3, Users, Shield, Globe } from 'lucide-react'
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
=======

>>>>>>> origin/cursor/build-and-fix-errors-c9ef

  return (
    <>
      <SEO 
        title="Zion Hire AI - AI-Powered Hiring Solutions | Zion Tech Group"
        description="Revolutionary AI-powered hiring platform that transforms recruitment, screening, onboarding, and retention with cutting-edge machine learning technology."
        canonical="https://ziontechgroup.com/zion-hire-ai"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Hire AI
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Revolutionary AI-powered hiring platform that transforms recruitment, screening, onboarding, and retention
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://ziontechgroup.com"
                className="px-8 py-4 bg-zion-cyan hover:bg-zion-cyan-light text-white font-semibold rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Trial
              </a>
              <a 
                href="#demo"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold rounded-lg transition-colors"
              >
                Watch Demo
              </a>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">
                  {item.metric}
                </div>
                <div className="text-zion-slate-light">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              AI-Powered Hiring Solutions
            </h2>
            
            {/* Feature Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {aiHiringFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setSelectedFeature(feature.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedFeature === feature.id
                      ? 'bg-zion-cyan text-white'
                      : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <feature.icon className="w-5 h-5" />
                    {feature.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Feature Content */}
            {aiHiringFeatures.map((feature) => (
              selectedFeature === feature.id && (
                <div key={feature.id} className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-6 h-6 text-zion-cyan" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                      </div>
                      <p className="text-zion-slate-light mb-6">{feature.description}</p>
                      
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2 mb-6">
                        {feature.features.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                            <CheckCircle className="w-4 h-4 text-zion-cyan" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {feature.benefits.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                            <Star className="w-4 h-4 text-zion-cyan" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Pricing Plans
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 ${
                    plan.popular 
                      ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                      : 'border-zion-cyan/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="px-3 py-1 bg-zion-cyan text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-zion-slate-light">/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="https://ziontechgroup.com"
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular
                        ? 'bg-zion-cyan hover:bg-zion-cyan-light text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-zion-cyan/30'
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Powered by Advanced AI Technology
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Machine Learning</h3>
                <p className="text-zion-slate-light text-sm">Advanced ML algorithms for pattern recognition and prediction</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Big Data Analytics</h3>
                <p className="text-zion-slate-light text-sm">Process and analyze vast amounts of hiring data</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Ethics & Bias Detection</h3>
                <p className="text-zion-slate-light text-sm">Ensure fair and unbiased hiring decisions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Cloud-Native Architecture</h3>
                <p className="text-zion-slate-light text-sm">Scalable, secure, and always-available platform</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-zion-slate-light text-center mb-6">
              Join hundreds of companies already using Zion Hire AI to revolutionize their recruitment
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div>
                <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan hover:bg-zion-cyan-light text-white font-semibold rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Free Trial Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionHireAI;
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function ZionHireAI() {
  const { isWhitelabel, brandName, primaryColor } = useWhitelabel();
  const { isAuthenticated } = useAuth();
  return (
    <>
<<<<<<< HEAD
      <SEO 
        title;
              reduce time-to-hire, and improve candidate experience.
=======
      <SEO
        title='Zion Hire AI - White-labeled AI Recruiting Assistant'
        description='Empower your company with AI-powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience.'
      />
      <Header />
      <main className='flex-1'>
        {/* Hero Section */}
        <section
          className='relative bg-gradient-to-br from-zion-blue to-zion-blue-dark py-16 md:py-24'
          style={
            primaryColor
              ? {
                  backgroundImage: `linear-gradient(to bottom right, ${primaryColor}, rgba(25, 33, 52, 1))`
                }
              : {}
          }
        >
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid gap-6 md:grid-cols-2 items-center'>
              <div className='space-y-4'>
                <h1 className='text-3xl md:text-5xl font-bold tracking-tighter text-white'>
                  {isWhitelabel
                    ? `${brandName} Recruiting Assistant`
                    : 'Zion Hire AI'}
                </h1>
                <p className='text-lg text-zion-slate-light max-w-[600px]'>
                  Empower your team with AI-driven talent acquisition.
                  Streamline your hiring process, improve candidate matches, and
                  enhance the applicant experience.
                </p>
                <div className='flex flex-col sm:flex-row gap-3 pt-4'>
                  <Button
                    size='lg'
                    className='bg-zion-purple hover:bg-zion-purple-light text-white'
                    asChild
                  >
                    <Link
                      href={isAuthenticated ? '/enterprise/admin' : '/login'}
                    >
                      Get Started <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    className='bg-transparent border-white text-white hover:bg-white/10'
                    asChild
                  >
                    <Link href='/enterprise/demo'>Request Demo</Link>
                  </Button>
                </div>
              </div>
              <div className='relative hidden md:block'>
                <div className='absolute -top-8 -left-8 w-72 h-72 bg-zion-purple/20 rounded-full filter blur-3xl'></div>
                <img
                  src='https://placehold.co/600x400/192134/9b87f5?text=Zion+Hire+AI'
                  alt='Zion Hire AI Dashboard'
                  className='relative z-10 rounded-lg shadow-xl'
                  loading='lazy'                />                  src="https://placehold.co/600x400/192134/9b87f5?text=Zion+Hire+AI"
                  alt="Zion Hire AI Dashboard"
                  className="relative z-10 rounded-lg shadow-xl"
                  loading="lazy"
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className='py-16 bg-background'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold tracking-tight'>
                Powerful AI Hiring Tools
              </h2>
              <p className='text-muted-foreground mt-4 max-w-3xl mx-auto'>
                Our comprehensive suite of AI-powered hiring tools help you
                streamline your recruiting process, find better candidates, and
                make data-driven decisions.
            </div>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              <Card className='bg-card border border-border'>
                <CardHeader>
                  <Briefcase className='h-10 w-10 text-zion-purple mb-2' />
                  <CardTitle>Job Description Generator</CardTitle>
                  <CardDescription>
                    Create compelling job descriptions with AI assistance to
                    attract top talent.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 text-sm'>
                    <li className='flex items-center'>
                      <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        AI
                      </span>
                      <span>Automated skill requirements</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        AI
                      </span>
                      <span>Optimized for inclusivity</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Template
                      </span>                      <span>Industry-specific templates</span>                    <li className="flex items-center">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Template</span>
                      <span>Industry-specific templates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className='bg-card border border-border'>
                <CardHeader>
                  <PenTool className='h-10 w-10 text-zion-purple mb-2' />
                  <CardTitle>Resume Screener</CardTitle>
                  <CardDescription>
                    Automatically evaluate and score candidate resumes against
                    job requirements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 text-sm'>
                    <li className='flex items-center'>
                      <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        AI
                      </span>
                      <span>Identify skill matches</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        AI
                      </span>
                      <span>Experience verification</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Custom
                      </span>                      <span>Customizable scoring criteria</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className='bg-card border border-border'>
                <CardHeader>
                  <Users className='h-10 w-10 text-zion-purple mb-2' />
                  <CardTitle>Candidate Matchmaker</CardTitle>
                  <CardDescription>
                    Find the best candidates for each position with AI-powered
                    matching.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 text-sm'>
                    <li className='flex items-center'>
                      <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        AI
                      </span>
                      <span>Relevancy scoring</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        AI
                      </span>
                      <span>Culture fit prediction</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Data
                      </span>                      <span>Performance tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className='bg-card border border-border'>
                <CardHeader>
                  <Globe className='h-10 w-10 text-zion-purple mb-2' />
                  <CardTitle>Embeddable Widget</CardTitle>
                  <CardDescription>
                    Add an AI assistant to your careers page to answer applicant
                    questions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 text-sm'>
                    <li className='flex items-center'>
                      <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        AI
                      </span>
                      <span>Instant FAQ responses</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Custom
                      </span>
                      <span>Customizable branding</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Code
                      </span>                      <span>Simple JavaScript snippet</span>                <CardHeader>
                  <PenTool className="h-10 w-10 text-zion-purple mb-2" />
                  <CardTitle>Resume Screener</CardTitle>
                  <CardDescription>
                    Automatically evaluate and score candidate resumes against job requirements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Identify skill matches</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Experience verification</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Custom</span>
                      <span>Customizable scoring criteria</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className='bg-card border border-border'>                <CardHeader>
                  <Users className="h-10 w-10 text-zion-purple mb-2" />
                  <CardTitle>Candidate Matchmaker</CardTitle>
                  <CardDescription>
                    Find the best candidates for each position with AI-powered matching.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Relevancy scoring</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Culture fit prediction</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Data
                      </span>                    <li className="flex items-center">
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Data</span>
                      <span>Performance tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className='bg-card border border-border'>                <CardHeader>
                  <Globe className="h-10 w-10 text-zion-purple mb-2" />
                  <CardTitle>Embeddable Widget</CardTitle>
                  <CardDescription>
                    Add an AI assistant to your careers page to answer applicant questions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">AI</span>
                      <span>Instant FAQ responses</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Custom</span>
                      <span>Customizable branding</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Code
                      </span>                    <li className="flex items-center">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Code</span>
                      <span>Simple JavaScript snippet</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className='bg-card border border-border'>
                <CardHeader>
                  <BarChart3 className='h-10 w-10 text-zion-purple mb-2' />
                  <CardTitle>Advanced Analytics</CardTitle>
                  <CardDescription>
                    Track recruiting metrics and optimize your hiring process
                    with data.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 text-sm'>
                    <li className='flex items-center'>
                      <span className='bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Data
                      </span>                      <span>Time-to-hire tracking</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Data
                      </span>
                      <span>Candidate funnel metrics</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Data
                      </span>                      <span>Cost per hire analysis</span>                    <li className="flex items-center">
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Data</span>
                      <span>Cost per hire analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className='bg-card border border-border'>
                <CardHeader>
                  <Shield className='h-10 w-10 text-zion-purple mb-2' />
                  <CardTitle>White-Labeled Platform</CardTitle>
                  <CardDescription>
                    Customize the platform with your company's branding and
                    identity.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 text-sm'>
                    <li className='flex items-center'>
                      <span className='bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Custom
                      </span>
                      <span>Custom logo and colors</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Custom
                      </span>
                      <span>Co-branded or white-labeled</span>
                    </li>
                    <li className='flex items-center'>
                      <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded'>
                        Access
                      </span>                      <span>Team roles & permissions</span>                <CardHeader>
                  <Shield className="h-10 w-10 text-zion-purple mb-2" />
                  <CardTitle>White-Labeled Platform</CardTitle>
                  <CardDescription>
                    Customize the platform with your company's branding and identity.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Custom</span>
                      <span>Custom logo and colors</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Custom</span>
                      <span>Co-branded or white-labeled</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded">Access</span>
                      <span>Team roles & permissions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className='bg-zion-blue-dark py-16'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl font-bold text-white mb-4'>
              Ready to transform your hiring process?
            </h2>
            <p className='text-zion-slate-light max-w-2xl mx-auto mb-8'>
              Join leading companies using Zion Hire AI to find better talent
              faster, reduce time-to-hire, and improve candidate experience.
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
            </p>
            <Button
              size='lg'
              className='bg-zion-purple hover:bg-zion-purple-light text-white'
              asChild
            >
              <Link href='/enterprise/demo'>Schedule a Demo</Link>            </Button>            </p>
            <Button
              size="lg"
              className="bg-zion-purple hover: bg-zion-purple-light text-white"
              asChild><Link href="/enterprise/demo">
                Schedule a Demo
              </Link>
              <Link href="/enterprise/demo">
                Schedule a Demo
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
