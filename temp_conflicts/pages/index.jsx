
import Head from 'next/head';
import Link from 'next/link';
import EnhancedLayout from '../components/layout/EnhancedLayout';

const Home = () => {
  const features = [
    {
      title: &quot;AI Development&quot;,
      description: &quot;Custom AI solutions and machine learning models for your business needs.&quot;,
      icon: &quot;🤖&quot;,
      href: &quot;/services/ai-development&quot;
    },
    {
      title: &quot;Cloud Architecture&quot;,
      description: &quot;Scalable cloud solutions and infrastructure design for modern applications.&quot;,
      icon: &quot;☁️&quot;,
      href: &quot;/services/cloud-services&quot;
    },
    {
      title: &quot;Digital Transformation&quot;,
      description: &quot;End-to-end digital transformation services to modernize your business.&quot;,
      icon: &quot;🚀&quot;,
      href: &quot;/services&quot;
    }
  ];

  const stats = [
    { number: &quot;100+&quot;, label: &quot;Happy Clients&quot; },
    { number: &quot;500+&quot;, label: &quot;Projects Completed&quot; },
    { number: &quot;50+&quot;, label: &quot;Team Members&quot; },
    { number: &quot;5+&quot;, label: &quot;Years of Excellence&quot; }
  ];

  return (
    <EnhancedLayout>
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta name=&quot;description&quot; content=&quot;Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.&quot; />
      </Head>
      
      {/* Hero Section */}
      <section className=&quot;bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6&quot;>
            Welcome to Zion Tech Group
          </h1>
          <p className=&quot;text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100&quot;>
            Leading technology solutions provider helping businesses transform their digital presence 
            with cutting-edge AI, cloud architecture, and innovative development services.
          </p>
          
          <div className=&quot;flex flex-col sm:flex-row justify-center gap-6 mb-16&quot;>
            <Link href=&quot;/services&quot; className=&quot;bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors&quot;>
              Explore Our Services
            </Link>
            <Link href=&quot;/contact&quot; className=&quot;bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors&quot;>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className=&quot;py-20 bg-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl font-bold text-gray-900 mb-6&quot;>
              Why Choose Zion Tech Group?
            </h2>
            <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;>
              We combine cutting-edge technology with deep industry expertise to deliver 
              solutions that drive real business value.
            </p>
          </div>
          
          <div className=&quot;grid md:grid-cols-3 gap-8 mb-16&quot;>
            {features.map((feature, index) => (
              <div key={index} className=&quot;bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow&quot;>
                <div className=&quot;text-6xl mb-6&quot;>{feature.icon}</div>
                <h3 className=&quot;text-2xl font-semibold text-gray-900 mb-4&quot;>{feature.title}</h3>
                <p className=&quot;text-gray-600 mb-6&quot;>{feature.description}</p>
                <Link href={feature.href} className=&quot;text-blue-600 hover:text-blue-700 font-medium&quot;>
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className=&quot;py-20 bg-gray-50&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;grid md:grid-cols-4 gap-8 text-center&quot;>
            {stats.map((stat, index) => (
              <div key={index}>
                <div className=&quot;text-4xl font-bold text-blue-600 mb-2&quot;>{stat.number}</div>
                <div className=&quot;text-gray-600&quot;>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 bg-blue-900 text-white&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <h2 className=&quot;text-4xl font-bold mb-6&quot;>
            Ready to Transform Your Business?
          </h2>
          <p className=&quot;text-xl mb-8 max-w-3xl mx-auto text-blue-100&quot;>
            Let's discuss how our technology solutions can help you achieve your goals 
            and stay ahead of the competition.
          </p>
          <div className=&quot;flex flex-col sm:flex-row justify-center gap-6&quot;>
            <Link href=&quot;/contact&quot; className=&quot;bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors&quot;>
              Start Your Project
            </Link>
            <Link href=&quot;/services&quot; className=&quot;bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors&quot;>
              View Services
            </Link>
          </div>
        </div>
      </section>
    </EnhancedLayout>
  );
};

export default Home;