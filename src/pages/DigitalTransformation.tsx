import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Users, Target, Shield, Cpu, Globe, Rocket, Star, ArrowRight, CheckCircle, Play, BookOpen, Code, Database, Cloud, Lock, BarChart3, Settings, Monitor, Building } from 'lucide-react';

export default function DigitalTransformation() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Transformation',
      description: 'Leverage artificial intelligence to automate processes and gain competitive advantages'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless transition to cloud infrastructure for scalability and cost optimization'
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Comprehensive support for organizational change and digital adoption'
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Data-driven digital strategy aligned with business objectives'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with built-in compliance monitoring'
    },
    {
      icon: Cpu,
      title: 'Legacy Modernization',
      description: 'Transform outdated systems into modern, efficient digital solutions'
    }
  ];

  const transformationAreas = [
    {
      title: 'Process Automation',
      description: 'Streamline workflows and eliminate manual processes with intelligent automation',
      icon: Settings
    },
    {
      title: 'Data & Analytics',
      description: 'Transform data into actionable insights for better decision-making',
      icon: BarChart3
    },
    {
      title: 'Customer Experience',
      description: 'Create seamless, personalized customer journeys across all touchpoints',
      icon: Users
    },
    {
      title: 'Employee Productivity',
      description: 'Empower employees with digital tools and collaborative platforms',
      icon: Rocket
    }
  ];

  const benefits = [
    'Increase operational efficiency by 40-60%',
    'Reduce operational costs by 30-50%',
    'Improve customer satisfaction by 35%',
    'Accelerate time to market by 50%',
    'Enable data-driven decision making',
    'Create competitive advantages in digital markets'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Rocket className="w-8 h-8 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Digital Transformation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Transform Your Business
              <br />
              <span className="text-white">for the Digital Age</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Navigate the digital revolution with our comprehensive transformation services. 
              From strategy to implementation, we help you thrive in the digital economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                <Play className="w-5 h-5 inline mr-2" />
                Watch Transformation Story
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">
                <BookOpen className="w-5 h-5 inline mr-2" />
                Transformation Guide
              </button>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Transformation Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              End-to-end digital transformation solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transformation Areas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Transformation Areas
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Focus on the areas that matter most for your digital success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformationAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                      <p className="text-gray-400">{area.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See real results from your digital transformation journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join leading organizations that have successfully navigated digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 inline-flex items-center"
            >
              Start Your Transformation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              View Transformation Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}