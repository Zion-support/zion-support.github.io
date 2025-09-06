<<<<<<< HEAD:src/pages/Services.tsx
import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Card from '../components/Card';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/pages/Services.tsx

const Services: React.FC = () => {
<<<<<<< HEAD:backup-problematic-files/src/pages/Services.tsx
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Transform your business with cutting-edge AI solutions including natural language processing, computer vision, and predictive analytics.",
      features: ["Custom AI Models", "Data Analytics", "Automation", "Predictive Insights"],
      icon: "🤖",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable, secure, and reliable cloud solutions that grow with your business needs.",
      features: ["AWS / Azure / GCP", "DevOps", "Microservices", "Auto-scaling"],
      icon: "☁️",
      color: "from-green-500 to-blue-600"
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with the latest technologies and best practices.",
      features: ["React / Next.js", "TypeScript", "Mobile-First", "SEO Optimized"],
      icon: "💻",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: ["iOS / Android", "React Native", "Flutter", "App Store Optimization"],
      icon: "📱",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "24/7 Monitoring"],
      icon: "🔒",
      color: "from-red-500 to-orange-600"
    },
    {
      title: "Data Analytics",
      description: "Turn your data into actionable insights with advanced analytics and visualization tools.",
      features: ["Business Intelligence", "Data Warehousing", "Real-time Analytics", "Custom Dashboards"],
      icon: "📊",
      color: "from-indigo-500 to-purple-600"
    }
  ];
<<<<<<< HEAD:src/pages/Services.tsx

=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:src/pages/Services.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/pages/Services.tsx
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Comprehensive technology solutions designed to transform your business 
            and drive innovation across all sectors.
          </p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD:src/pages/Services.tsx
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Solutions</h3>
            <p className="text-gray-600">Leverage artificial intelligence to automate processes and gain insights.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Development</h3>
            <p className="text-gray-600">Modern, responsive web applications built with cutting-edge technologies.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Services</h3>
            <p className="text-gray-600">Scalable cloud infrastructure and deployment solutions.</p>
=======

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="AI & Machine Learning"
            description="Transform your business with cutting-edge AI solutions including machine learning, natural language processing, and computer vision."
            icon="🤖"
          />
          <ServiceCard
            title="Cybersecurity"
            description="Protect your digital assets with advanced security solutions, threat detection, and compliance management."
            icon="🔒"
          />
          <ServiceCard
            title="Cloud Infrastructure"
            description="Scale your operations with robust cloud solutions, migration services, and infrastructure optimization."
            icon="☁️"
          />
          <ServiceCard
            title="Digital Transformation"
            description="Modernize your business processes with comprehensive digital transformation strategies and implementation."
            icon="🚀"
          />
          <ServiceCard
            title="Data Analytics"
            description="Unlock insights from your data with advanced analytics, business intelligence, and reporting solutions."
            icon="📊"
          />
          <ServiceCard
            title="IoT Solutions"
            description="Connect and manage your devices with Internet of Things solutions for smart operations and monitoring."
            icon="🌐"
          />
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Service Categories</h2>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/pages/Services.tsx
=======
      </div>

      {/* Services Grid */}
<<<<<<< HEAD:src/pages/Services.tsx
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              icon={service.icon}
              color={service.color}
            />
          ))}
=======
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="Consulting Services"
              description="Strategic technology consulting to help you make informed decisions about your digital future."
            />
            <Card
              title="Implementation"
              description="End-to-end implementation of technology solutions tailored to your specific business needs."
            />
            <Card
              title="Support & Maintenance"
              description="Ongoing support and maintenance to ensure your systems run smoothly and efficiently."
            />
            <Card
              title="Training & Education"
              description="Comprehensive training programs to help your team master new technologies and processes."
            />
            <Card
              title="Custom Development"
              description="Bespoke software development solutions designed specifically for your unique requirements."
            />
            <Card
              title="Integration Services"
              description="Seamless integration of new technologies with your existing systems and workflows."
            />
          </div>
        </div>
<<<<<<< HEAD

        {/* Industry Solutions */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">Industry Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
=======
      </div>
      {/* Process Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional results for your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold">Healthcare</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="text-lg font-semibold">Finance</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-lg font-semibold">Manufacturing</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-lg font-semibold">Retail</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold">Government</h3>
            </div>
<<<<<<< HEAD
=======
          </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/pages/Services.tsx
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD:src/pages/Services.tsx
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
=======
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/pages/Services.tsx
            >
              Get a Quote
            </Link>
<<<<<<< HEAD:src/pages/Services.tsx
            <Link
              to="/pricing"
              className="border border-gray-300 hover:border-gray-400 text-gray-300 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View Pricing
            </Link>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
            <Link 
              to="/pricing" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg"
            >
              View Pricing
            </Link>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/pages/Services.tsx
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD:src/pages/Services.tsx
  );
};

=======
const Services: React.FC = () => {;
  return (
    <div className="min-h-screen bg-gray-50">;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">;
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>;
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
          <div className="bg-white p-6 rounded-lg shadow">;
            <h3 className="text-xl font-semibold mb-4">AI Services</h3>;
            <p className="text-gray-600">Cutting-edge AI solutions for your business.</p>;
          </div>;
          <div className="bg-white p-6 rounded-lg shadow">;
            <h3 className="text-xl font-semibold mb-4">IT Services</h3>;
            <p className="text-gray-600">Comprehensive IT solutions and support.</p>;
          </div>;
          <div className="bg-white p-6 rounded-lg shadow">;
            <h3 className="text-xl font-semibold mb-4">Cloud Solutions</h3>;
            <p className="text-gray-600">Scalable cloud infrastructure and services.</p>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
};
<<<<<<< HEAD:backup-problematic-files/src/pages/Services.tsx
;
=======

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:src/pages/Services.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/pages/Services.tsx
export default Services;