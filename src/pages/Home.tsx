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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-extrabold mb-4">
            Zion Tech Group
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Leading AI & Technology Solutions for a Smarter Future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="large">
              Explore Our Services
            </Button>
            <Button variant="secondary" size="large">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="AI Services"
              description="Transform your business with cutting-edge AI solutions."
              icon="✨"
            />
            <ServiceCard
              title="Cybersecurity"
              description="Protect your digital assets with advanced security solutions."
              icon="🔒"
            />
            <ServiceCard
              title="Cloud Infrastructure"
              description="Scale your operations with robust cloud solutions."
              icon="☁️"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card title="Innovation" description="Pioneering the next generation of technology." />
            <Card title="Expertise" description="Team of industry-leading professionals." />
            <Card title="Reliability" description="Trusted solutions for critical operations." />
            <Card title="Scalability" description="Solutions designed to grow with you." />
            <Card title="Security" description="Robust protection for all your data." />
            <Card title="Support" description="24/7 dedicated customer assistance." />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Let's discuss how we can help you achieve your goals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="large">
                Contact Us
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="primary" size="large">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
