import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import ServiceCard from '../components/ServiceCard';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-2xl text-blue-100 mb-8">
            AI, Micro SaaS, and IT Services
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Leading technology solutions provider specializing in AI, cybersecurity, 
            cloud infrastructure, and digital transformation services. Empowering businesses 
            with cutting-edge technology and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="text-center p-8 bg-slate-800/50 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">AI Solutions</h3>
            <p className="text-gray-300">
              Advanced artificial intelligence and machine learning solutions to automate and optimize your business processes.
            </p>
          </Card>
          
          <Card className="text-center p-8 bg-slate-800/50 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">☁️</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Cloud Services</h3>
            <p className="text-gray-300">
              Scalable cloud infrastructure and migration services to modernize your IT environment.
            </p>
          </Card>
          
          <Card className="text-center p-8 bg-slate-800/50 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity</h3>
            <p className="text-gray-300">
              Comprehensive security solutions to protect your digital assets and ensure compliance.
            </p>
          </Card>
        </div>

        {/* Services Preview */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="AI-Powered Analytics"
              description="Transform your data into actionable insights with our advanced AI analytics platform."
              icon="📊"
              features={["Real-time analytics", "Predictive modeling", "Custom dashboards"]}
            />
            <ServiceCard
              title="Cloud Migration"
              description="Seamlessly migrate your infrastructure to the cloud with our expert guidance."
              icon="☁️"
              features={["Zero-downtime migration", "Cost optimization", "Security compliance"]}
            />
            <ServiceCard
              title="Cybersecurity Audit"
              description="Comprehensive security assessment to identify and mitigate potential vulnerabilities."
              icon="🛡️"
              features={["Vulnerability scanning", "Penetration testing", "Compliance review"]}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our solutions can help you achieve your goals.
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
              Start Your Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;