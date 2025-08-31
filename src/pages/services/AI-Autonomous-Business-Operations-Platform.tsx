import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/Button';
import { Brain, Zap, Shield, Cpu, Network, Target, TrendingUp, Users, Globe, Rocket, CheckCircle, Bot, Workflow, BarChart3 } from 'lucide-react';

export default function AIAutonomousBusinessOperationsPlatform() {
  const features = [
    {
      icon: Bot,
      title: "Autonomous Operations",
      description: "Self-managing business processes that adapt and optimize without human intervention."
    },
    {
      icon: Workflow,
      title: "Intelligent Workflows",
      description: "AI-powered workflow automation that learns and improves over time."
    },
    {
      icon: Analytics,
      title: "Real-time Analytics",
      description: "Continuous monitoring and analysis of business operations with instant insights."
    },
    {
      icon: Brain,
      title: "Predictive Intelligence",
      description: "Advanced forecasting and decision-making capabilities using machine learning."
    }
  ];

  const capabilities = [
    "End-to-end business process automation",
    "Intelligent resource allocation and optimization",
    "Real-time performance monitoring and alerts",
    "Predictive maintenance and risk assessment",
    "Automated customer service and support",
    "Intelligent supply chain management",
    "Dynamic pricing and demand forecasting",
    "Compliance monitoring and reporting"
  ];

  const benefits = [
    "Significant reduction in operational costs",
    "Improved efficiency and productivity",
    "24/7 autonomous operation capabilities",
    "Enhanced decision-making accuracy",
    "Scalable operations without proportional cost increase",
    "Reduced human error and operational risks",
    "Faster response times to market changes",
    "Competitive advantage through automation"
  ];

  const useCases = [
    {
      title: "Manufacturing",
      description: "Automated production lines, quality control, and predictive maintenance systems."
    },
    {
      title: "Retail",
      description: "Inventory management, demand forecasting, and personalized customer experiences."
    },
    {
      title: "Financial Services",
      description: "Risk assessment, fraud detection, and automated trading operations."
    },
    {
      title: "Healthcare",
      description: "Patient scheduling, resource allocation, and medical record management."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO 
        title="AI Autonomous Business Operations Platform | Zion Tech Group"
        description="Transform your business with autonomous AI operations that run 24/7, optimize processes, and drive efficiency."
        keywords="AI autonomous operations, business automation, intelligent workflows, operational efficiency"
      />
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                  <Automation className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Autonomous Business Operations Platform
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your business with autonomous AI operations that run 24/7, continuously optimize processes, and drive unprecedented efficiency and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                  Learn More
                </Button>
              </div>
            </motion.div>
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
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of business operations with our autonomous AI platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500 transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="mx-auto p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
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

        {/* Capabilities Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Unlock the full potential of autonomous business operations with our comprehensive platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{capability}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Transformative Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience unprecedented advantages with autonomous business operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300">
                    <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover how our platform transforms industries and drives innovation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{useCase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300 text-base">
                        {useCase.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the autonomous revolution and transform your business operations with our AI platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Start Your Journey
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                  Schedule Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}