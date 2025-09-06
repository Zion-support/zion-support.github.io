import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Leading provider of AI-powered micro SaaS solutions, intelligent automation, 
          and cutting-edge IT services that transform businesses and drive exponential growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/services" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus-visible:focus"
          >
            Explore Services
          </Link>
          <a 
            href="https://ziontechgroup.com" 
            className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors focus-visible:focus"
          >
            Visit Main Site
          </a>
        </div>
      </section>

      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Micro SaaS"
            href="/services"
            description="End-to-end product engineering with billing, auth, analytics and growth."
            icon="🚀"
          />
          <Card 
            title="AI Services" 
            href="/services" 
            description="LLM apps, RAG, agents, fine-tuning, evals, data pipelines and MLOps." 
            icon="🤖" 
          />
          <Card 
            title="IT Services" 
            href="/services" 
            description="Cloud migration, DevOps, SRE, security hardening and cost optimization." 
            icon="⚙️" 
          />
          <Card
            title="Business Automation"
            href="/services"
            description="Intelligent automation tools that streamline operations and boost productivity by 300%."
            icon="⚡"
          />
          <Card
            title="AI Copilots"
            href="/services"
            description="Intelligent assistants that enhance productivity and automate complex tasks."
            icon="🧠"
          />
          <Card
            title="Data Analytics"
            href="/services"
            description="Advanced analytics and BI solutions that transform data into actionable insights."
            icon="📊"
          />
          <Card
            title="AI-Powered CRM"
            href="/services"
            description="Revolutionary CRM with AI automation that boosts sales by 300% and predicts customer behavior."
            icon="🎯"
          />
          <Card
            title="AI Content Optimizer"
            href="/services"
            description="AI-powered content creation that increases engagement by 400% and automates SEO optimization."
            icon="✍️"
          />
          <Card
            title="Cybersecurity Suite"
            href="/services"
            description="Enterprise-grade security solutions with 24/7 monitoring and threat detection."
            icon="🔒"
          />
=======
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">Zion Tech Group</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Leading AI-powered technology solutions for modern businesses. Transform your digital future with cutting-edge innovation and enterprise-grade reliability.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                to="/services" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-2xl"
              >
                Explore Services
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { number: "500+", label: "Projects Completed", icon: "🚀" },
              { number: "99.9%", label: "Uptime Guarantee", icon: "⚡" },
              { number: "50+", label: "Expert Team Members", icon: "👥" },
              { number: "24/7", label: "Support Available", icon: "🛠️" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that drive real results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            title="Fast Delivery" 
            description="Rapid prototyping and deployment with modern tools and practices." 
          />
          <FeatureCard 
            title="Scalable Architecture" 
            description="Built for growth with cloud-native, microservices architecture." 
          />
          <FeatureCard 
            title="24/7 Support" 
            description="Round-the-clock monitoring and support for your critical systems." 
          />
          <FeatureCard 
            title="Cost Effective" 
            description="Optimized solutions that reduce operational costs and improve efficiency." 
          />
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
function Card({ title, description, href, icon }: { 
  title: string; 
  description: string; 
  href: string; 
  icon: string; 
}) {
  return (
    <Link 
      to={href} 
      className="group border border-gray-200 rounded-xl p-6 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </Link>
  );
}

function FeatureCard({ title, description }: { 
  title: string; 
  description: string; 
}) {
  return (
    <div className="text-center p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default Home;