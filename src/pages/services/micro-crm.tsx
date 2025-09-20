import React from "react"
import { Users, Database, Target, CheckCircle, ArrowRight, Phone, Mail, MapPin, Calendar, BarChart3, Shield, Zap, Globe, Cpu, Lock, Eye, Network, Server, Cloud, Smartphone, Building } from "lucide-react"
import { SEO } from "../../components/SEO"
export default function MicroCRM() {;
  const features = [;
    {;
      icon: Users,title: 'Contact Management',description: 'Centralized database for all customer contacts with detailed profiles and interaction history.'
    };
    {;
      icon: Target,title: 'Lead Tracking',description: 'Track leads through the sales funnel with automated scoring and qualification processes.'
    };
    {;
      icon: Calendar,title: 'Task Management',description: 'Schedule follow-ups, meetings, and reminders with integrated calendar functionality.'
    },;
    {;
      icon: BarChart3,title: 'Sales Analytics',description: 'Comprehensive reporting and analytics to track performance and identify opportunities.'
    };
  ];
  const benefits = [;
    'Streamline customer relationship managementImprove sales team productivity',;
    'Enhance customer communicationTrack sales performance metrics',;
    'Automate repetitive tasksCentralize customer data'
  ],;

  const useCases = [;
    {;
      title: 'Small Business CRM',description: 'Perfect for small businesses looking to manage customer relationships efficiently.',icon: Building;
    };
    {;
      title: 'Sales Team Management',description: 'Empower sales teams with tools to track leads and manage customer interactions.',icon: Users;
    };
    {;
      title: 'Customer Support',description: 'Track customer issues and provide timely support with integrated ticketing.',icon: Phone;
    };
    {;
      title: 'Marketing Campaigns',description: 'Manage marketing campaigns and track customer engagement and responses.',icon: Target;
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Micro CRM - Zion Tech Group"
        description="Streamline your customer relationship management with our Micro CRM solution. Perfect for small businesses and growing teams."
      />;
      ;
      {/* Hero Section */};
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></[^>]*>
        <div className="container mx-auto px-4 relative z-10">;
          <div className="text-center max-w-4xl mx-auto">;
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-400/30 mb-6">;
              <[^>]*/>
              <span className="text-cyan-300 text-sm font-medium">Customer Relationship Management</[^>]*>
            </[^>]*>
            ;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Micro CRM;
            </[^>]*>
            ;
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">;
              Streamline your customer relationships with our lightweight;
              powerful CRM solution designed for small businesses and growing teams.;
            </[^>]*>
            ;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25">;
                Start Free Trial;
              </[^>]*>
              <button className="px-8 py-4 border border-cyan-400/30 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200">;
                Watch Demo;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Essential CRM Features;
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Our Micro CRM provides all the essential features you need to manage ;
              customer relationships without the complexity of enterprise solutions.;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {features.map((feature, index) => (;
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">;
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</[^>]*>
                <p className="text-slate-300">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Benefits Section */};
      <section className="py-20 bg-slate-800/30">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Why Choose Micro CRM?;
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Experience the benefits of professional CRM software without the complexity ;
              and cost of enterprise solutions.;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {benefits.map((benefit, index) => (;
              <div key={index} className="flex items-start space-x-3">;
                <[^>]*/>
                <span className="text-slate-300 text-lg">{benefit}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Use Cases Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Perfect For Your Business;
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Whether you're a small business owner or managing a growing sales team;
              our Micro CRM adapts to your needs.;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid md:grid-cols-2 gap-8">;
            {useCases.map((useCase, index) => (;
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-300">;
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</[^>]*>
                <p className="text-slate-300 text-lg leading-relaxed">{useCase.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-4xl font-bold text-white mb-6">;
            Ready to Transform Your Customer Relationships?;
          </[^>]*>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">;
            Join thousands of businesses that have improved their customer management ;
            with our Micro CRM solution.;
          </[^>]*>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">;
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25">;
              Start Free Trial;
            </[^>]*>
              <button className="px-8 py-4 border border-cyan-400/30 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200">;
                Schedule Demo;
              </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};