import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Brain, Target, BarChart3, Zap, Shield, ArrowRight, CheckCircle, Factory, Cog } from 'lucide-react';
export default function ManufacturingSolutions() {
    const features = [
        {
            icon: Brain,
            title: "AI-Powered Predictive Maintenance",
            description: "Machine learning models to predict equipment failures and optimize maintenance schedules"
        },
        {
            icon: BarChart3,
            title: "Real-time Production Analytics",
            description: "Live monitoring and analysis of production metrics and KPIs"
        },
        {
            icon: Target,
            title: "Quality Control Automation",
            description: "AI-driven quality inspection and defect detection systems"
        },
        {
            icon: Zap,
            title: "Smart Supply Chain Management",
            description: "Intelligent inventory optimization and supply chain automation"
        },
        {
            icon: Shield,
            title: "Industrial Cybersecurity",
            description: "Advanced security for connected manufacturing systems and IoT devices"
        },
        {
            icon: Settings,
            title: "Process Optimization",
            description: "AI-powered process improvement and efficiency optimization"
        }
    ];
    const benefits = [
        "Reduce downtime by 40-60%",
        "Improve product quality by 25-35%",
        "Lower production costs by 20-30%",
        "Increase production efficiency",
        "Better resource utilization",
        "Enhanced safety and compliance"
    ];
    const solutions = [
        {
            title: "Smart Manufacturing",
            description: "IoT-enabled connected manufacturing with real-time monitoring"
        },
        {
            title: "Predictive Analytics",
            description: "AI-powered forecasting and predictive maintenance solutions"
        },
        {
            title: "Quality Management",
            description: "Automated quality control and defect prevention systems"
        },
        {
            title: "Supply Chain Optimization",
            description: "Intelligent inventory and supply chain management"
        }
    ];
    const industries = [
        "Automotive",
        "Electronics",
        "Pharmaceuticals",
        "Food & Beverage",
        "Aerospace",
        "Textiles",
        "Chemicals",
        "Heavy Machinery"
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Factory className="w-10 h-10 text-white"/>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Manufacturing Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your manufacturing operations with Industry 4.0 technology. Enhance efficiency, 
              quality, and productivity with AI-powered manufacturing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Industry 4.0 Manufacturing Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive manufacturing solutions combine advanced AI with industrial expertise 
              to revolutionize how manufacturers operate and compete in the global market.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (<motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white"/>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Manufacturing Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency and quality in your manufacturing operations.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-semibold mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (<div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0"/>
                    <span className="text-gray-300">{benefit}</span>
                  </div>))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-semibold mb-6">Solutions</h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (<div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-cyan-400 mb-2">{solution.title}</h4>
                    <p className="text-gray-300 text-sm">{solution.description}</p>
                  </div>))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Manufacturing Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our manufacturing solutions are designed to meet the unique challenges and requirements 
              of various manufacturing sectors.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (<motion.div key={industry} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-cyan-500 transition-all duration-300">
                <Cog className="w-8 h-8 text-cyan-500 mx-auto mb-3"/>
                <h3 className="font-semibold">{industry}</h3>
              </motion.div>))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Manufacturing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the Industry 4.0 revolution and start seeing results today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5"/>
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>);
}
