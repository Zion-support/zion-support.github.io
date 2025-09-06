import React from "react";
import { Link } from "react-router-dom";

// Card component
const Card = ({ title, href, description, icon }: { title: string; href: string; description: string; icon: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link 
      to={href}
      className="text-blue-600 hover:text-blue-800 font-medium"
    >
      Learn More →
    </Link>
  </div>
);

// FeatureCard component
const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="text-center">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

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

export default Home;
