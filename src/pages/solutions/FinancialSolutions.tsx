import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/Button';
import { TrendingUp, Shield, Zap, Brain, Users, Globe, Rocket, CheckCircle, DollarSign, BarChart3, Lock, Target } from 'lucide-react';

export default function FinancialSolutions() {
  const solutions = [
    {
      icon: TrendingUp,
      title: "AI-Powered Trading",
      description: "Advanced algorithmic trading systems with real-time market analysis and predictive modeling."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies for financial institutions."
    },
    {
      icon: Zap,
      title: "Fraud Detection",
      description: "Real-time fraud detection and prevention using advanced AI algorithms."
    },
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "Data-driven insights for investment decisions and market forecasting."
    }
  ];

  const capabilities = [
    "AI-powered algorithmic trading platforms",
    "Real-time risk assessment and monitoring",
    "Advanced fraud detection and prevention",
    "Predictive market analytics and modeling",
    "Compliance automation and reporting",
    "Portfolio optimization and management",
    "Blockchain-based financial solutions",
    "Regulatory compliance frameworks"
  ];

  const benefits = [
    "Increased trading efficiency and profitability",
    "Enhanced risk management and compliance",
    "Reduced fraud losses and operational risks",
    "Improved investment decision-making",
    "Automated regulatory reporting",
    "Real-time market insights and alerts",
    "Scalable financial infrastructure",
    "Competitive advantage through technology"
  ];

  const useCases = [
    {
      title: "Investment Banks",
      description: "High-frequency trading, risk management, and compliance automation for investment banking operations."
    },
    {
      title: "Retail Banking",
      description: "Fraud detection, customer analytics, and automated compliance for retail banking services."
    },
    {
      title: "Insurance Companies",
      description: "Risk assessment, claims processing, and fraud detection for insurance operations."
    },
    {
      title: "Fintech Startups",
      description: "Scalable financial infrastructure and AI-powered services for fintech innovation."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO 
        title="Financial Solutions | Zion Tech Group"
        description="Transform your financial operations with AI-powered solutions for trading, risk management, and compliance."
        keywords="financial solutions, AI trading, risk management, fraud detection, compliance automation"
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
                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Financial Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your financial operations with AI-powered solutions for trading, risk management, fraud detection, and regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Financial Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of finance with our AI-powered platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-green-500 transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="mx-auto p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-white">{solution.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300">
                        {solution.description}
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
                Unlock the full potential of AI-powered financial technology
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
                Experience unprecedented advantages with AI-powered financial solutions
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
                  <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-green-500 transition-all duration-300">
                    <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
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
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover how our solutions transform financial institutions
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
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-green-500 transition-all duration-300">
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
                Ready to Transform Your Financial Operations?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the financial technology revolution and unlock the power of AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
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