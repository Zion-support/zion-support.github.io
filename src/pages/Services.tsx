import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Card from '../components/Card';

const Services: React.FC = () => {
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
        
        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="AI & Machine Learning"
            description="Transform your business with cutting-edge AI solutions including machine learning models, natural language processing, and computer vision."
            icon="🤖"
            features={[
              "Custom AI model development",
              "Natural language processing",
              "Computer vision solutions",
              "Predictive analytics",
              "AI strategy consulting"
            ]}
          />
          <ServiceCard
            title="Cybersecurity"
            description="Protect your digital assets with comprehensive security solutions including threat detection, vulnerability assessment, and incident response."
            icon="🔒"
            features={[
              "Security audits & assessments",
              "Threat detection & prevention",
              "Incident response planning",
              "Compliance management",
              "Security training"
            ]}
          />
          <ServiceCard
            title="Cloud Infrastructure"
            description="Scale your operations with robust cloud solutions including migration, optimization, and management services."
            icon="☁️"
            features={[
              "Cloud migration services",
              "Infrastructure optimization",
              "Multi-cloud strategies",
              "DevOps implementation",
              "24/7 cloud monitoring"
            ]}
          />
          <ServiceCard
            title="Software Development"
            description="Build custom software solutions tailored to your business needs with modern technologies and best practices."
            icon="💻"
            features={[
              "Custom web applications",
              "Mobile app development",
              "API development",
              "Database design",
              "Quality assurance"
            ]}
          />
          <ServiceCard
            title="Data Analytics"
            description="Unlock insights from your data with advanced analytics, visualization, and business intelligence solutions."
            icon="📊"
            features={[
              "Data visualization",
              "Business intelligence",
              "Real-time analytics",
              "Data warehousing",
              "Performance metrics"
            ]}
          />
          <ServiceCard
            title="IT Consulting"
            description="Strategic technology consulting to help you make informed decisions and optimize your IT infrastructure."
            icon="🎯"
            features={[
              "Technology strategy",
              "Digital transformation",
              "Process optimization",
              "Vendor management",
              "Change management"
            ]}
          />
        </div>

        {/* Additional Services */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              title="Blockchain Solutions"
              description="Implement blockchain technology for secure, transparent, and decentralized applications."
            />
            <Card
              title="IoT Development"
              description="Connect and manage devices with Internet of Things solutions for smart environments."
            />
            <Card
              title="AR/VR Applications"
              description="Create immersive experiences with augmented and virtual reality applications."
            />
            <Card
              title="API Integration"
              description="Seamlessly integrate third-party services and APIs into your existing systems."
            />
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-gray-300">We analyze your requirements and understand your business goals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-gray-300">We create a detailed project plan with timelines and milestones.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-300">We build your solution using cutting-edge technologies and best practices.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Deployment</h3>
              <p className="text-gray-300">We deploy your solution and provide ongoing support and maintenance.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6">
              Let's discuss how our services can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Our Portfolio
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;