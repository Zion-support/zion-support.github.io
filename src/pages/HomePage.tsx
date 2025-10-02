import React from 'react';';
import { Helmet } from 'react-helmet-async';';
import ContentShowcase from '../components/ContentShowcase';';
import FeaturedServiceCard from '../components/FeaturedServiceCard';';
import SuccessStoriesShowcase from '../components/SuccessStoriesShowcase';';
import LatestInsights from '../components/LatestInsights';';

const HomePage: React.FC = () => {,
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered IT solutions, digital transformation, and enterprise automation services." />";
        <meta name="keywords" content="AI solutions, IT services, digital transformation, enterprise automation, cloud computing" />";
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">";
        {/* Hero Section */}
        <section className="text-center mb-12">";
          <h1 className="text-4xl md: text-6xl font-bold text-gray-900 mb-6">";,
            Advanced AI & IT Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">";
            Transform your business with cutting-edge AI technologies, cloud solutions, 
            and digital innovation strategies.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">";,
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover: bg-blue-700 transition-colors">";,
              Get Started
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover: bg-blue-50 transition-colors">";,
              Learn More
            </button>
          </div>
        </section>

        {/* Featured Services */}
        <section className="mb-12">";
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>";
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">";,
            <FeaturedServiceCard
              title="AI Solutions"
              description="Advanced artificial intelligence implementations for enterprise needs"
              icon="🤖"
            />
            <FeaturedServiceCard
              title="Cloud Computing"
              description="Scalable cloud infrastructure and migration services"
              icon="☁️"
            />
            <FeaturedServiceCard
              title="Digital Transformation"
              description="Complete digital modernization strategies"
              icon="🚀"
            />
          </div>
        </section>

        {/* Content Showcase */}
        <ContentShowcase />

        {/* Success Stories */}
        <SuccessStoriesShowcase />

        {/* Latest Insights */}
        <LatestInsights />
      </div>
    </>
  );
};

export default HomePage;