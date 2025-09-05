
import Head from 'next/head';
import Link from 'next/link';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

const Services = () => {
  const services = [
    {
      title: &quot;AI Development&quot;,
      description: &quot;Custom AI solutions and machine learning models for your business needs.&quot;,
      icon: &quot;🤖&quot;,
      href: &quot;/services/ai-development&quot;,
      features: [&quot;Machine Learning Models&quot;, &quot;Natural Language Processing&quot;, &quot;Computer Vision&quot;, &quot;Predictive Analytics&quot;]
    },
    {
      title: &quot;Cloud Services&quot;,
      description: &quot;Scalable cloud solutions and infrastructure design for modern applications.&quot;,
      icon: &quot;☁️&quot;,
      href: &quot;/services/cloud-services&quot;,
      features: [&quot;Cloud Migration&quot;, &quot;Infrastructure Design&quot;, &quot;DevOps Automation&quot;, &quot;Scalability Solutions&quot;]
    },
    {
      title: &quot;Blockchain Solutions&quot;,
      description: &quot;Innovative blockchain technology for secure and transparent business processes.&quot;,
      icon: &quot;🔗&quot;,
      href: &quot;/services/blockchain&quot;,
      features: [&quot;Smart Contracts&quot;, &quot;DeFi Applications&quot;, &quot;Supply Chain Solutions&quot;, &quot;Digital Identity&quot;]
    },
    {
      title: &quot;Data Analytics&quot;,
      description: &quot;Transform your data into actionable insights with advanced analytics.&quot;,
      icon: &quot;📊&quot;,
      href: &quot;/services/data-analytics&quot;,
      features: [&quot;Business Intelligence&quot;, &quot;Data Visualization&quot;, &quot;Predictive Modeling&quot;, &quot;Real-time Analytics&quot;]
    },
    {
      title: &quot;Web Development&quot;,
      description: &quot;Modern, responsive web applications built with cutting-edge technologies.&quot;,
      icon: &quot;🌐&quot;,
      href: &quot;/services/web-development&quot;,
      features: [&quot;React/Next.js&quot;, &quot;Full-Stack Development&quot;, &quot;E-commerce Solutions&quot;, &quot;Progressive Web Apps&quot;]
    },
    {
      title: &quot;Mobile Development&quot;,
      description: &quot;Native and cross-platform mobile applications for iOS and Android.&quot;,
      icon: &quot;📱&quot;,
      href: &quot;/services/mobile-development&quot;,
      features: [&quot;iOS Development&quot;, &quot;Android Development&quot;, &quot;Cross-Platform Apps&quot;, &quot;App Store Optimization&quot;]
    }
  ];

  return (
    <EnhancedLayout>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Comprehensive technology services including AI development, cloud solutions, blockchain, and more. Transform your business with Zion Tech Group.&quot; />
      </Head>
      
      <main className=&quot;container mx-auto px-4 py-16&quot;>
        {/* Hero Section */}
        <div className=&quot;text-center mb-16&quot;>
          <h1 className=&quot;text-4xl font-bold text-gray-900 mb-6&quot;>
            Our Technology Services
          </h1>
          <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;>
            We provide cutting-edge technology solutions to help businesses innovate, 
            scale, and succeed in the digital age.
          </p>
        </div>
        
        <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16&quot;>
          {services.map((service, index) => (
            <div key={index} className=&quot;bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow&quot;>
              <div className=&quot;text-4xl mb-4&quot;>{service.icon}</div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>{service.title}</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>{service.description}</p>
              <ul className=&quot;text-sm text-gray-500 mb-6 space-y-1&quot;>
                {service.features.map((feature, idx) => (
                  <li key={idx} className=&quot;flex items-center&quot;>
                    <span className=&quot;text-green-500 mr-2&quot;>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={service.href} className=&quot;inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors&quot;>
                Learn More
              </Link>
            </div>
          ))}
        </div>
        
        <div className=&quot;bg-blue-900 text-white rounded-lg p-8 text-center&quot;>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Ready to Get Started?</h2>
          <p className=&quot;text-blue-100 mb-6&quot;>
            Let's discuss how our technology services can transform your business.
          </p>
          <Link href=&quot;/contact&quot; className=&quot;bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors&quot;>
            Contact Us Today
          </Link>
        </div>
      </main>
    </EnhancedLayout>
  );
};

export default Services;