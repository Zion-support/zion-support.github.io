import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Card from '../components/Card';
import ServiceCard from '../components/ServiceCard';
import ParticleBackground from '../components/ParticleBackground';
  Zap,
  Shield,
  Globe,
  Code,
  Database,
  Smartphone,
  Cloud
} from 'lucide-react';
import { BackToTopButton } from '../components/BackToTopButton';
const Home: React.FC = () => {,
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {,
      opacity: 1,
      transition: {,
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {,
      y: 0,
      opacity: 1,
      transition: {,
        duration: 0.6,
        ease: "easeOut""
      }
    }
  };
  return (
<div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leading AI & Technology Solutions for a Smarter Future
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Empowering businesses with cutting-edge artificial intelligence, cybersecurity, and cloud infrastructure solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button variant="primary" size="large">
                Explore Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="large">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
        {/* Floating elements for visual appeal */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/20 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-6 text-center">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-center">AI & Machine Learning</h3>
              <p className="text-gray-600 mb-6 text-center">
                Transform your business with cutting-edge AI solutions including predictive analytics, natural language processing, and intelligent automation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Custom AI Model Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Predictive Analytics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Intelligent Process Automation
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-6 text-center">🔒</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Cybersecurity</h3>
              <p className="text-gray-600 mb-6 text-center">
                Protect your digital assets with advanced security solutions including threat detection, vulnerability assessment, and compliance management.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Security Audits & Assessments
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Threat Detection & Response
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Compliance Management
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-6 text-center">☁️</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Cloud Infrastructure</h3>
              <p className="text-gray-600 mb-6 text-center">
                Scale your operations with robust cloud solutions including migration, optimization, and 24/7 monitoring.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Cloud Migration & Strategy
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Infrastructure Optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Multi-Cloud Management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation First</h3>
              <p className="text-gray-600">Pioneering the next generation of technology with cutting-edge AI, blockchain, and quantum computing solutions.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Expert Team</h3>
              <p className="text-gray-600">Industry-leading professionals with decades of combined experience in AI, cybersecurity, and cloud technologies.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Proven Reliability</h3>
              <p className="text-gray-600">Trusted solutions for critical operations with 99.9% uptime and comprehensive disaster recovery.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Scalable Solutions</h3>
              <p className="text-gray-600">Architecture designed to grow with your business, from startup to enterprise scale.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Enterprise Security</h3>
              <p className="text-gray-600">Military-grade security protocols and compliance with SOC 2, GDPR, and industry standards.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock dedicated customer assistance with guaranteed response times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600">Trusted by businesses worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Join hundreds of companies that trust Zion Tech Group for their digital transformation journey. 
            Let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="large" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="primary" size="large" className="border-2 border-white text-white hover:bg-white hover:text-blue-600">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
      </section>
    </div>
  );
};
const Home: React.FC = () => {,
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">"
      <div className="container mx-auto px-4 py-20">"
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">",
          Welcome to Zion Tech Group
        </h1>
        <p className="text-xl text-gray-300 mb-8 text-center max-w-3xl mx-auto">"
          Leading provider of innovative technology solutions, AI services, and IT solutions
          for businesses worldwide.
        </p>
        <div className="text-center">"
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">",
            Get Started
          </button>
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
export default Home;

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
