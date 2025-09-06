import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import ServiceCard from '../components/ServiceCard';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold mb-4 animate-fade-in">
            Zion Tech Group
          </h1>
          <p className="text-2xl text-gray-300 mb-8 animate-slide-up">
            Leading AI & Technology Solutions for a Smarter Future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="large" onClick={() => window.location.href = '/services'}>
              Explore Our Services
            </Button>
            <Button variant="outline" size="large" onClick={() => window.location.href = '/contact'}>
              Get Started
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="AI Services"
            description="Transform your business with cutting-edge AI solutions including machine learning, natural language processing, and computer vision."
            icon="🤖"
          />
          <ServiceCard
            title="Cybersecurity"
            description="Protect your digital assets with comprehensive security solutions including threat detection, vulnerability assessment, and compliance."
            icon="🔒"
          />
          <ServiceCard
            title="Cloud Infrastructure"
            description="Scale your operations with robust cloud solutions including migration, optimization, and managed services."
            icon="☁️"
          />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card title="Innovation" description="Pioneering the next generation of technology solutions." />
            <Card title="Expertise" description="Team of industry-leading professionals with proven track records." />
            <Card title="Reliability" description="Trusted solutions for critical business operations." />
            <Card title="Scalability" description="Solutions designed to grow with your business." />
            <Card title="Security" description="Robust protection for all your digital assets." />
            <Card title="Support" description="24/7 dedicated customer assistance and support." />
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join hundreds of companies that trust Zion Tech Group for their technology needs. 
            Let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="large" onClick={() => window.location.href = '/contact'}>
              Start Your Project
            </Button>
            <Button variant="outline" size="large" onClick={() => window.location.href = '/about'}>
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}