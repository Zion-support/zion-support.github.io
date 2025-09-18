import React from 'react';
import SEO from "@/components/SEO";
import { Brain, Shield, Database, TrendingUp } from 'lucide-react';
const AIServices = () => {
    const features = [
        {
            icon: Brain,
            title: "AI Strategy",
            description: "Comprehensive AI strategy development and implementation"
        },
        {
            icon: Cpu,
            title: "Machine Learning",
            description: "Custom ML models and algorithms for your business"
        },
        {
            icon: Database,
            title: "Data Analytics",
            description: "Advanced analytics powered by artificial intelligence"
        },
        {
            icon: Shield,
            title: "AI Ethics",
            description: "Responsible AI development and governance"
        }
    ];
    const benefits = [
        "Increased operational efficiency by 60%",
        "Enhanced customer insights and personalization",
        "Automated decision-making processes",
        "Competitive advantage through AI innovation",
        "Scalable AI solutions that grow with your business"
    ];
    return (<div className="min-h-screen bg-background">
      <SEO title="AI Services - Zion Tech Group" description="Transform your business with cutting-edge AI services including machine learning, data analytics, and AI strategy." keywords="AI services, machine learning, artificial intelligence, data analytics, AI strategy, AI ethics" canonical="https://ziontechgroup.com/services/ai-services"/>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-900 via-pink-800 to-rose-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 className="text-5xl md:text-6xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            AI Services for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
              {" "}Innovation
            </span>
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Harness the power of artificial intelligence to transform your business operations, 
            enhance customer experiences, and drive innovation across all departments.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <button className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-pink-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105">
              Start Your AI Journey
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI services designed to meet your business challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (<motion.div key={feature.title} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-pink-600"/>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-600">
                Experience the transformative power of AI with our proven approach
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (<motion.div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="w-4 h-4 text-pink-600"/>
                  </div>
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Embrace AI?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI services can revolutionize your business operations and create new opportunities.
          </p>
          <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>);
};
export default AIServices;
