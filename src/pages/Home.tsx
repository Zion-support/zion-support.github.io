import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import ServiceCard from '../components/ServiceCard';
const Home: React.FC = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for your business needs.',
      icon: '🤖',']
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision']
    },
      title: 'IT Services',
      description: 'Comprehensive IT services and infrastructure management.',
      icon: '💻',
      features: ['Cloud Migration', 'System Administration', 'Network Security']
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      icon: '☁️',
      features: ['AWS', 'Azure', 'Google Cloud']
    }
  ];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading provider of AI-powered business solutions, automation tools, 
            and digital transformation services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="Micro SaaS"
            href="/micro-saas"
            description="Build and scale your micro SaaS business with our comprehensive development services."
            bullets={[
              "Product engineering",
              "Growth & marketing",
              "Operations & reliability"
            ]}
            icon="🚀"
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
          />
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

function ServiceCard({ title, href, description, bullets = [], icon }: {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon: string;
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
      <Link
        to={href}
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Learn More
      </Link>
    </div>
  );
}

export default Home;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">"
</div>"
      <section className="pt-20 pb-16 px-4">"
</section>"
        <div className="container mx-auto text-center">"
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in">"
</h1>
          </h1>"
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">"
</p>
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">"
            <Button variant="primary" size="large">"

            "
            <Button variant="outline" size="large">"

            
          </div>
      <section className="py-16 px-4">"
        <div className="container mx-auto">"
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>""
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
              <ServiceCard;
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />

      <section className="py-16 px-4 bg-slate-800">"
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>""
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">"
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <Link to="/contact">"

              
            <Link to="/services">"

              
            
      </section>
    </div>)"
pr-12325
