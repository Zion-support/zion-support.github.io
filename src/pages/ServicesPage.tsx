import React from 'react';';
import { Helmet } from 'react-helmet-async';';
import FeaturedServiceCard from '../components/FeaturedServiceCard';';

const ServicesPage: React.FC = () => {,
  const services = [
    {
      title: "AI & Machine Learning",";,
      description: "Advanced AI solutions including machine learning, deep learning, and neural networks for enterprise applications.",";,
      icon: "🤖",";,
      features: ["Machine Learning Models", "Deep Learning Networks", "AI Automation", "Predictive Analytics"]";,
    },
    {
      title: "Cloud Computing",";,
      description: "Comprehensive cloud solutions including migration, infrastructure, and optimization services.",";,
      icon: "☁️",";,
      features: ["Cloud Migration", "Infrastructure Setup", "Cost Optimization", "Security Implementation"]";,
    },
    {
      title: "Digital Transformation",";,
      description: "Complete digital modernization strategies to transform your business operations.",";,
      icon: "🚀",";,
      features: ["Process Automation", "System Integration", "Workflow Optimization", "Change Management"]";,
    },
    {
      title: "Cybersecurity",";,
      description: "Advanced security solutions to protect your digital assets and ensure compliance.",";,
      icon: "🛡️",";,
      features: ["Security Audits", "Threat Detection", "Compliance Management", "Incident Response"]";,
    },
    {
      title: "Data Analytics",";,
      description: "Transform your data into actionable insights with advanced analytics and visualization.",";,
      icon: "📊",";,
      features: ["Data Visualization", "Business Intelligence", "Real-time Analytics", "Reporting Systems"]";,
    },
    {
      title: "DevOps & Automation",";,
      description: "Streamline your development and deployment processes with modern DevOps practices.",";,
      icon: "⚙️",";,
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging", "Performance Optimization"]";,
    }
  }
} as const;

const Card: React.FC<{ title: string; emoji: string; children: React.ReactNode }> = ({ title, emoji, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg border">
    <div className="text-4xl mb-4">{emoji}</div>
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

const ServicesGrid: React.FC = () => (,
  <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">",
    <Card title="AI Services" emoji="🧠">
      <p className="text-gray-600 mb-4">Leverage AI to automate, gain insights, and innovate.</p>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>• Machine Learning, NLP, Vision</li>
        <li>• RAG Chatbots for documents</li>
        <li>• Predictive Analytics</li>
      </ul>
      <div className="mt-4">
        <Link className="text-blue-600 hover: underline" to="/services/ai-services">Explore AI Services →</Link>",
      </div>
    </Card>
    <Card title="Micro SaaS" emoji="🚀">
      <p className="text-gray-600 mb-4">Targeted apps that solve specific business workflows.</p>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>• Custom web apps and APIs</li>
        <li>• Payment & auth integrations</li>
        <li>• Analytics & billing</li>
      </ul>
      <div className="mt-4">
        <Link className="text-blue-600 hover: underline" to="/services/micro-saas">Explore Micro SaaS →</Link>",
      </div>
    </Card>
    <Card title="IT Services" emoji="💻">
      <p className="text-gray-600 mb-4">Modernize infrastructure, improve security, and ship faster.</p>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>• Cloud migration & DevOps</li>
        <li>• Cybersecurity assessments</li>
        <li>• SRE & reliability</li>
      </ul>
      <div className="mt-4">
        <Link className="text-blue-600 hover: underline" to="/services/it-services">Explore IT Services →</Link>",
      </div>
    </Card>
  </div>
);

const CategorySection: React.FC<{ slug: keyof typeof offerings.categories }> = ({ slug }) => {
  const category = offerings.categories[slug];
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">{category.title}</h2>
      <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">",
        {category.items.map((item) => (
          <div key={item.name} className="bg-white rounded-lg border shadow-sm p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{item.priceHint}</p>
            <ul className="text-gray-600 text-sm space-y-1 mb-4">
              {item.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <div className="mt-auto flex gap-3">
              <Link to={item.path} className="px-4 py-2 rounded-md bg-blue-600 text-white hover: bg-blue-700">Learn more</Link>",
              <a href="/contact" className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover: bg-blue-50">Get a quote</a>",
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ServicesPage: React.FC<ServicesPageProps> = ({ category }) => {
  const location = useLocation();
  const selectedCategory = (category as keyof typeof offerings.categories) || ((): keyof typeof offerings.categories | undefined => {
    const path = location.pathname;
    if (path.includes('/services/ai')) return 'ai-solutions';
    if (path.includes('/services/cloud')) return 'cloud';
    if (path.includes('/services/analytics')) return 'analytics';
    if (path.includes('/services/security')) return 'security';
    if (path.includes('/services/automation')) return 'automation';
    return undefined;
  })();

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including AI solutions, cloud computing, digital transformation, and cybersecurity." />";
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">";
        <div className="text-center mb-12">";
          <h1 className="text-4xl md: text-5xl font-bold text-gray-900 mb-6">";,
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
            Comprehensive IT solutions designed to accelerate your digital transformation 
            and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">";,
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover: shadow-xl transition-shadow">";,
              <div className="text-4xl mb-4">{service.icon}</div>";
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>";
              <p className="text-gray-600 mb-6">{service.description}</p>";
              
              <ul className="space-y-2">";
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">";
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>";
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover: bg-blue-700 transition-colors">";,
                Learn More
              </button>
            </div>
            {!selectedCategory && <ServicesGrid />}
            {selectedCategory && <CategorySection slug={selectedCategory} />}
            <div className="mt-12">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 flex flex-col sm: flex-row sm:items-center sm:justify-between gap-4">",
                <div>
                  <p className="text-lg font-semibold text-blue-900">Ready to accelerate your roadmap?</p>
                  <p className="text-blue-800">Contact us at +1 302 464 0950 • kleber@ziontechgroup.com • 364 E Main St STE 1008 Middletown DE 19709</p>
                </div>
                <div className="flex gap-3">
                  <a href="/contact" className="px-5 py-2 rounded-md bg-blue-600 text-white hover: bg-blue-700">Contact Sales</a>",
                  <a href="/demo" className="px-5 py-2 rounded-md border border-blue-600 text-blue-600 hover: bg-blue-50">Book a Demo</a>",
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="text-center mt-16 bg-gray-50 rounded-lg p-8">";
          <h2 className="text-3xl font-bold text-gray-900 mb-4">";
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 mb-6">";
            Contact our experts to discuss your specific needs and get a customized solution.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover: bg-blue-700 transition-colors">";,
            Get Started Today
          </button>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;