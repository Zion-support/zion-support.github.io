import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MessageCircle, Phone, Mail, FileText, Users, ShoppingCart, User, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function HelpCenterPage() {
    const helpCategories = [
        {
            icon: <User className="w-8 h-8 text-zion-cyan"/>,
            title: "Getting Started",
            description: "Learn the basics of using Zion's marketplace platform",
            articles: ["Creating an account", "Setting up your profile", "First steps guide"],
            color: "text-zion-cyan"
        },
        {
            icon: <ShoppingCart className="w-8 h-8 text-zion-purple"/>,
            title: "Marketplace",
            description: "Buying and selling on our platform",
            articles: ["How to buy services", "Selling your services", "Payment methods"],
            color: "text-zion-purple"
        },
        {
            icon: <Users className="w-8 h-8 text-zion-cyan"/>,
            title: "Talent & Hiring",
            description: "Finding talent and getting hired",
            articles: ["Hiring process", "Creating job posts", "Talent profiles"],
            color: "text-zion-cyan"
        },
        {
            icon: <Settings className="w-8 h-8 text-zion-purple"/>,
            title: "Account & Settings",
            description: "Managing your account and preferences",
            articles: ["Account settings", "Privacy controls", "Security features"],
            color: "text-zion-purple"
        }
    ];
    const faqs = [
        {
            question: "How do I create an account on Zion?",
            answer: "Creating an account is simple! Click the 'Sign Up' button in the top right corner, fill in your basic information, verify your email, and you're ready to start using our platform."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our trusted payment partners."
        },
        {
            question: "How do I find the right talent for my project?",
            answer: "Use our AI-powered matching system, browse talent profiles by category, or post a job and let qualified professionals come to you. Our platform makes it easy to find the perfect match."
        },
        {
            question: "Is my data secure on Zion?",
            answer: "Absolutely! We use enterprise-grade security measures including SSL encryption, secure data centers, and strict access controls. Your privacy and data security are our top priorities."
        },
        {
            question: "What if I'm not satisfied with a service?",
            answer: "We have a comprehensive dispute resolution process. If you're not satisfied, contact our support team within 7 days of service completion, and we'll work to resolve the issue."
        },
        {
            question: "How do I contact customer support?",
            answer: "You can reach us through multiple channels: live chat on our website, email at support@ziontechgroup.com, or phone at +1 (555) 123-4567. We typically respond within 2 hours."
        }
    ];
    return (<>
      <SEOHead title="Help Center - Zion Tech Group" description="Get help and support for using Zion's marketplace platform. Find answers to common questions and contact our support team." keywords="help center, support, FAQ, customer service, Zion Tech Group" canonical="https://ziontechgroup.com/help"/>
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <GradientHeading>Help Center</GradientHeading>
            <p className="mt-6 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers to your questions, learn how to use our platform, and get the support you need.
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5"/>
                <Input type="text" placeholder="Search for help articles, FAQs, or topics..." className="pl-10 pr-4 py-3 bg-zion-blue-dark border-zion-blue-light text-white placeholder-zion-slate-light focus:border-zion-cyan"/>
              </div>
            </div>
          </div>












