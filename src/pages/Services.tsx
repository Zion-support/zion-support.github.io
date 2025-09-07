import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Our Services</h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm max-w-4xl mx-auto">
            <p className="text-lg text-gray-300">
              <strong className="text-white">Contact us today:</strong> Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com<br/>
              <span className="text-sm text-gray-400">Address: 364 E Main St STE 1008, Middletown DE 19709</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="Micro SaaS Development"
            href="/micro-saas"
            description="Build and scale your micro SaaS business with our comprehensive development services."
            bullets={[
              "Product engineering",
              "Growth & marketing",
              "Operations & reliability"
            ]}
            icon="🚀"
            price="Starting at $8k"
          />
          <ServiceCard
            title="AI Services"
            href="/ai-services"
            description="Leverage artificial intelligence to automate processes and gain competitive advantages."
            bullets={[
              "RAG systems",
              "Conversational AI",
              "Predictive analytics"
            ]}
            icon="🤖"
            price="Starting at $5k"
          />
          <ServiceCard
            title="IT Services"
            href="/it-services"
            description="Complete IT infrastructure and support services for modern businesses."
            bullets={[
              "Cloud migration",
              "DevOps & SRE",
              "Cybersecurity"
            ]}
            icon="⚙️"
            price="Starting at $10k"
          />
        </div>

        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">🚀 Micro SaaS Solutions</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AI-powered business automation tools</li>
                <li>• Customer relationship management systems</li>
                <li>• Project management and collaboration platforms</li>
                <li>• E-commerce and marketplace solutions</li>
                <li>• Data analytics and reporting dashboards</li>
              </ul>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">🤖 AI & Machine Learning</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Natural language processing systems</li>
                <li>• Computer vision and image recognition</li>
                <li>• Predictive analytics and forecasting</li>
                <li>• Chatbots and virtual assistants</li>
                <li>• Recommendation engines</li>
              </ul>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">⚙️ IT Infrastructure</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Cloud migration and optimization</li>
                <li>• DevOps and CI/CD implementation</li>
                <li>• Cybersecurity and compliance</li>
                <li>• Network security and monitoring</li>
                <li>• 24/7 managed IT support</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our team today for a free consultation and custom quote tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-10 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

function ServiceCard({ title, href, description, bullets = [], icon, price }: {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon: string;
  price: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-2 mb-6">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <span className="text-green-400 mr-2">✓</span>
            {bullet}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-white mb-4">{price}</div>
      <Link
        to={href}
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Learn More
      </Link>
    </div>
  );
}

export default Services;