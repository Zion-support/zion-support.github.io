
import Head from 'next/head';
import Link from 'next/link';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

const _Services = () => {_const _services = [
    {
      title: "AI Development", _description: "Custom AI solutions and machine learning models for your business needs.", _icon: "🤖", _href: "/services/ai-development", _features: ["Machine Learning Models", _"Natural Language Processing", _"Computer Vision", _"Predictive Analytics"]},
    {_title: "Cloud Services", _description: "Scalable cloud solutions and infrastructure design for modern applications.", _icon: "☁️", _href: "/services/cloud-services", _features: ["Cloud Migration", _"Infrastructure Design", _"DevOps Automation", _"Scalability Solutions"]},
    {_title: "Blockchain Solutions", _description: "Innovative blockchain technology for secure and transparent business processes.", _icon: "🔗", _href: "/services/blockchain", _features: ["Smart Contracts", _"DeFi Applications", _"Supply Chain Solutions", _"Digital Identity"]},
    {_title: "Data Analytics", _description: "Transform your data into actionable insights with advanced analytics.", _icon: "📊", _href: "/services/data-analytics", _features: ["Business Intelligence", _"Data Visualization", _"Predictive Modeling", _"Real-time Analytics"]},
    {_title: "Web Development", _description: "Modern, _responsive web applications built with cutting-edge technologies.", _icon: "🌐", _href: "/services/web-development", _features: ["React/Next.js", _"Full-Stack Development", _"E-commerce Solutions", _"Progressive Web Apps"]},
    {_title: "Mobile Development", _description: "Native and cross-platform mobile applications for iOS and Android.", _icon: "📱", _href: "/services/mobile-development", _features: ["iOS Development", _"Android Development", _"Cross-Platform Apps", _"App Store Optimization"]}
  ];

  return (_<EnhancedLayout>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI development, _cloud solutions, _blockchain, _and more. Transform your business with Zion Tech Group." />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {_/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Our Technology Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide cutting-edge technology solutions to help businesses innovate, _scale, _and succeed in the digital age.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {_services.map((service, _index) => (_<div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{_service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{_service.title}</h3>
              <p className="text-gray-600 mb-4">{_service.description}</p>
              <ul className="text-sm text-gray-500 mb-6 space-y-1">
                {_service.features.map((feature, _idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {_feature}
                  </li>
                ))}
              </ul>
              <Link href={_service.href} className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
              </Link>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-6">
            Let's discuss how our technology services can transform your business.
          </p>
          <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us Today
          </Link>
        </div>
      </main>
    </EnhancedLayout>
  );
};

export default Services;