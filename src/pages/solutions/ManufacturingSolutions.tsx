import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/Button';
import { TrendingUp, Shield, Zap, Brain, Users, Globe, Rocket, CheckCircle, Factory, Cog, Target, BarChart3 } from 'lucide-react';

export default function ManufacturingSolutions() {
  const solutions = [
    {
      icon: Brain,
      title: "AI-Powered Quality Control",
      description: "Advanced machine learning for defect detection and quality assurance."
    },
    {
      icon: BarChart3,
      title: "Predictive Maintenance",
      description: "Prevent equipment failures with AI-driven predictive analytics."
    },
    {
      icon: Shield,
      title: "Supply Chain Security",
      description: "Secure and transparent supply chain management with blockchain."
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Live monitoring of production processes and equipment performance."
    }
  ];

  const capabilities = [
    "AI-powered quality control and defect detection",
    "Predictive maintenance and equipment monitoring",
    "Supply chain optimization and visibility",
    "Real-time production monitoring and analytics",
    "Process optimization and workflow automation",
    "Smart factory integration and IoT connectivity",
    "Quality management and compliance automation",
    "Resource optimization and cost reduction"
  ];

  const benefits = [
    "Increase production efficiency by 25-40%",
    "Reduce quality defects by 60-80%",
    "Lower maintenance costs by 30-50%",
    "Improve supply chain visibility and transparency",
    "Enhanced worker safety and compliance",
    "Better resource utilization and cost management",
    "Faster time to market and innovation",
    "Competitive advantage through technology"
  ];

  const useCases = [
    {
      title: "Automotive Manufacturing",
      description: "Quality control, predictive maintenance, and supply chain optimization for automotive production."
    },
    {
      title: "Electronics Manufacturing",
      description: "Precision quality control, component tracking, and production line optimization."
    },
    {
      title: "Pharmaceutical Manufacturing",
      description: "Compliance automation, quality assurance, and batch tracking systems."
    },
    {
      title: "Aerospace Manufacturing",
      description: "High-precision quality control, safety compliance, and supply chain security."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO 
        title="Manufacturing Solutions | Zion Tech Group"
        description="Transform your manufacturing operations with AI-powered solutions for quality control, predictive maintenance, and process optimization."
        keywords="manufacturing solutions, AI quality control, predictive maintenance, smart factory, Industry 4.0"
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
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full">
                  <Factory className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Manufacturing Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your manufacturing operations with cutting-edge AI technology. Enhance quality, optimize efficiency, and drive innovation with intelligent manufacturing solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700">
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
                Comprehensive Manufacturing Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of manufacturing with our AI-powered platform
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
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500 transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="mx-auto p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mb-4">
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
                Unlock the full potential of AI-powered manufacturing technology
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
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
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
                Experience unprecedented advantages with AI-powered manufacturing solutions
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
                  <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                    <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
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
                Discover how our solutions transform manufacturing industries
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
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500 transition-all duration-300">
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
                Ready to Transform Your Manufacturing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our manufacturing solutions can drive efficiency and innovation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700">
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