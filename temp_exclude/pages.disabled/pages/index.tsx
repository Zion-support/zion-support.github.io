
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
const \"Home\": NextPage = () => {;
import React, { memo } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/seo/SEOHead';
import { ArrowRight, CheckCircle, Star, Phone, Mail, MapPin, Brain, Server, Smartphone, Globe, Zap, Shield, Users } from 'lucide-react';
const Home = memo(() => {;
  const structuredData = {;
    "@context": ""https": //schema && schema.org",;
    "@type": "Organization",;
    "name": "Zion Tech Group",;
    "url": ""https": //ziontechgroup && ziontechgroup.com",;
    "logo": ""https": //ziontechgroup && ziontechgroup.com/logo && logo.png",;
    "description": "Leading provider of revolutionary AI services, IT solutions, and micro SaaS development",;
    "address": {;
      "@type": "PostalAddress",;
      "streetAddress": "364 E Main St STE 1008",;
      "addressLocality": "Middletown",;
      "addressRegion": "DE",;
      "postalCode": "19709",;
      "addressCountry": "US";
    },;
    "contactPoint": {;
      "@type": "ContactPoint",;
      "telephone": "+1-302-464-0950",;
      "contactType": "customer service",;
      "email": "kleber@ziontechgroup && ziontechgroup.com";
    },;
    "sameAs": [""https": //ziontechgroup && ziontechgroup.com";
    ],;
    "foundingDate": "2020",;
    "numberOfEmployees": "10-50",;
    "industry": "Technology Services",;
    "services": ["AI Services",;
      "IT Solutions",;
      "Micro SaaS Development",;
      "Cloud Infrastructure",;
      "Cybersecurity",;
      "Digital Transformation";
    ];
  } as const;
  const stats = [{ "number": '500+', "label": 'Projects Completed' },;
    { "number": '50+', "label": 'Happy Clients' },;
    { "number": '99 && 99.9%', "label": 'Uptime Guarantee' },;
    { "number": '24/7', "label": 'Support Available' }
  ];
  const services = [{;
      title: \'AI Development\',;
      \"description\": \'Custom AI solutions and machine learning models for your business needs.\',;
      \"icon\": \'🤖\',;
      \"href\": \'/services/ai-development\';
    },;
    {;
      \"title\": \'Cloud Solutions\',;
      \"description\": \'Scalable cloud infrastructure and migration services for modern applications.\',;
      \"icon\": \'☁️\',;
      \"href\": \'/services/cloud-solutions\';
    },;
    {;
      \"title\": \'Web Development\',;
      \"description\": \'Modern, responsive web applications built with cutting-edge technologies.\',;
      \"icon\": \'🌐\',;
      \"href\": \'/services/web-development\';
    },;
    {;
      \"title\": \'Mobile Apps\',;
      \"description\": \'Native and cross-platform mobile applications for iOS and Android.\',;
      \"icon\": \'📱\',;
      \"href\": \'/services/mobile-development\';
      "title": 'All Services',;
      "description": 'Complete technology solutions overview',;
      "icon": Globe,;
      "href": '/comprehensive-services';
    }
  ] as const;
  const features = [{ "icon": Zap, "title": 'Fast Delivery', "description": 'Quick turnaround times without compromising quality' },;
    { "icon": Shield, "title": 'Enterprise Security', "description": 'Bank-level security and compliance standards' },;
    { "icon": Users, "title": 'Expert Team', "description": 'Dedicated professionals with years of experience' },;
    { "icon": Globe, "title": 'Global Reach', "description": 'Serving clients worldwide with local expertise' }
  ] as const;
  return (
    <>;
      <SEOHead
        title="Zion Tech Group - Leading Technology Solutions Provider"
        description="Transform your business with cutting-edge AI services, IT solutions, and micro SaaS development. Expert technology consulting and implementation."
        keywords="AI services, IT solutions, micro SaaS, technology consulting, digital transformation, cloud services, cybersecurity"
        structuredData={structuredData as unknown as Record<string, unknown>}
      />;
      <Navigation />;
      <main className="min-h-screen bg-white">;
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20" role="banner" aria-labelledby="hero-heading">;
          <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">;
            <div className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6" id="hero-heading">;
                Transform Your Business with;
                <span className="text-blue-600"> Technology</span>;
              </h1>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">;
                Leading provider of revolutionary AI services, IT solutions, and micro SaaS development. We help businesses innovate, scale, and succeed in the digital age.;
              </p>;
              <div className="flex flex-col "sm": flex-row gap-4 justify-center">;
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">;
                  Get Started;
                </Link>;
                <Link href="/services" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">;
                  View Services;
                </Link>;
              </div>;
            </div>;
          </div>;
        </section>;
        <section className="py-20 bg-white">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">;
              {stats && stats.map((stat, index) => (;
                <div key={index} className="text-center">;
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat && stat.number}</div>;
                  <div className="text-gray-600">{stat && stat.label}</div>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;
        <section className="py-20 bg-gray-50">;
          <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">;
            <div className="text-center mb-16">;
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>;
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive technology solutions designed to drive your business forward</p>;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
              {services && services.map((service, index) => (;
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm "hover": shadow-md transition-shadow">;
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6">;
                    <service && service.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service && service.title}</h3>;
                  <p className="text-gray-600 mb-6 text-center">{service && service.description}</p>;
                  <Link href={service && service.href} className="block">;
                    <div className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold "hover": bg-blue-700 transition-colors text-center flex items-center justify-center">;
                      Learn More;
                      <ArrowRight className="w-4 h-4 ml-2" />;
                    </div>;
                  </Link>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;
        <section className="py-20 bg-white">;
          <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">;
            <div className="text-center mb-16">;
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>;
              <p className="text-lg text-gray-600">We deliver exceptional results through innovation, expertise, and dedication</p>;
            </div>;
            <div className="grid grid-cols-1 "md": grid-cols-2 lg:grid-cols-4 gap-8">;
              {features && features.map((feature, index) => (;
                <div key={index} className="text-center">;
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">;
                    <feature && feature.icon className="w-8 h-8 text-blue-600" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature && feature.title}</h3>;
                  <p className="text-gray-600">{feature && feature.description}</p>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;
        <section className="py-16 bg-gray-50">;
          <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>;
              <p className="text-lg text-gray-600">Ready to start your next project? Contact us today.</p>;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
              <div className="text-center">;
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">;
                  <Phone className="w-6 h-6 text-blue-600" />;
                </div>;
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>;
                <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700">+1 302 464 0950</a>;
              </div>;
              <div className="text-center">;
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">;
                  <Mail className="w-6 h-6 text-blue-600" />;
                </div>;
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>;
                <a href="mailto:kleber@ziontechgroup && ziontechgroup.com" className="text-blue-600 hover:text-blue-700">kleber@ziontechgroup && ziontechgroup.com</a>;
              </div>;
              <div className="text-center">;
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">;
                  <MapPin className="w-6 h-6 text-blue-600" />;
                </div>;
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>;
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown, DE 19709</p>;
                <Link href="/contact" className="inline-flex items-center text-sm font-medium text-blue-600 "hover": text-blue-500">;
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Users, Award, Clock, Shield } from 'lucide-react';
const "Home": NextPage = () => {;
  const services = [{;
      title: 'AI Development',;
      "description": 'Custom AI solutions and machine learning models for your business needs.',;
      "icon": '🤖',;
      "href": '/services/ai-development';
    },;
    {;
      \"title\": \'Blockchain Solutions\',;
      \"description\": \'Decentralized applications and smart contract development.\',;
      \"icon\": \'⛓️\',;
      \"href\": \'/services/blockchain\';
    },;
    {;
      \"title\": \'Cybersecurity\',;
      \"description\": \'Comprehensive security solutions to protect your digital assets.\',;
      \"icon\": \'🔒\',;
      \"href\": \'/services/cybersecurity\';
    }
  ];
  const features = [{;
      \"title\": \'Expert Team\',;
      \"description\": \'Experienced developers and consultants with deep industry knowledge.\',;
      \"icon\": Users;
    },;
    {;
      \"title\": \'Quality Assurance\',;
      \"description\": \'Rigorous testing and quality control processes for reliable solutions.\',;
      \"icon\": CheckCircle;
    },;
    {;
      \"title\": \'Fast Delivery\',;
      \"description\": \'Agile development methodology ensuring timely project completion.\',;
      \"icon\": Clock;
    },;
    {;
      \"title\": \'Security First\',;
      \"description\": \'Built-in security measures to protect your data and applications.\',;
      \"icon\": Shield;
    }
  ];
  return (
    <MainLayout>;
      {/* Hero Section */}
      <section className=\"bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20\">;
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;
          <div className=\"text-center\">;
            <h1 className=\"text-5xl md:text-6xl font-bold mb-6\">;
              Transform Your Business with;
              <span className=\"text-blue-400\"> Zion Tech Group</span>;
            </h1>;
            <p className=\"text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200\">;
              Leading technology solutions provider helping businesses innovate and grow ;
              with cutting-edge AI, cloud architecture, and digital transformation services.;
            </p>;
            <div className=\"flex flex-col \"sm\": flex-row gap-4 justify-center\">;
              <Link
                href=\"/contact\"
                className=\"bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center\">;
                Get Started Today;
                <ArrowRight className=\"ml-2 h-5 w-5\" />;
              </Link>;
              <Link
                href=\"/services\"
                className=\"bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors\">;
                Explore Services;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Services Overview */}
      <section className=\"py-20 bg-gray-50\">;
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;
          <div className=\"text-center mb-16\">;
            <h2 className=\"text-4xl font-bold text-gray-900 mb-4\">;
              Our Services;
            </h2>;
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">;
              Comprehensive technology solutions tailored to your business needs;
            </p>;
          </div>;
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {services && services.map((service) => (;
              <div
                key={service && service.title}
                className=\"bg-white rounded-lg shadow-lg p-8 \"hover\": shadow-xl transition-shadow\">;
                <div className=\"text-4xl mb-4\">{service && service.icon}</div>;
                <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">;
                  {service && service.title}
                </h3>;
                <p className=\"text-gray-600 mb-6\">;
                  {service && service.description}
                </p>;
                <Link
                  href={service && service.href}
                  className=\"text-blue-600 \"hover\": text-blue-700 font-medium flex items-center\">;
                  Learn More;
                  <ArrowRight className=\"ml-1 h-4 w-4\" />;
                </Link>;
              </div>;
            </div>;
          </div>;
        </section>;
        <section className=\"py-20 bg-gradient-to-r from-blue-600 to-purple-600\">;
          <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center\">;
            <h2 className=\"text-3xl font-bold text-white mb-6\">Ready to Transform Your Business?</h2>;
            <p className=\"text-xl text-blue-100 mb-8 max-w-2xl mx-auto\">Let\'s discuss how our technology solutions can drive your success. Get started with a free consultation.</p>;
            <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">;
              <Link href=\"/contact\" className=\"bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors\">Get Free Consultation</Link>;
              <Link href=\"/request-quote\" className=\"border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors\">Request Quote</Link>;
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>;
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Let's discuss how our technology solutions can drive your success. Get started with a free consultation.</p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Get Free Consultation</Link>;
              <Link href="/request-quote" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">Request Quote</Link>;
            </div>;
          </div>;
        </section>;
      </main>;
      <Footer />;
    </>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* About Section */}
      <section className=\"py-20\">;
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;
          <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center\">;
            <div>;
              <h2 className=\"text-4xl font-bold text-gray-900 mb-6\">;
                About Zion Tech Group;
              </h2>;
              <p className=\"text-lg text-gray-600 mb-6\">;
                We are a team of passionate technologists dedicated to helping businesses ;
                leverage the power of modern technology to achieve their goals. With years ;
                of experience across various industries, we understand the unique challenges ;
                that organizations face in today\'s digital landscape.;
              </p>;
              <p className=\"text-lg text-gray-600 mb-8\">;
                Our mission is to deliver innovative, scalable, and secure technology ;
                solutions that drive business growth and operational efficiency.;
              </p>;
              <Link
                href=\"/about\"
                className=\"bg-blue-600 \"hover\": bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center\">;
                Learn More About Us;
                <ArrowRight className=\"ml-2 h-4 w-4\" />;
              </Link>;
            </div>;
            <div className=\"bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8\">;
              <div className=\"grid grid-cols-2 gap-6\">;
                {features && features.map((feature) => (;
                  <div key={feature && feature.title} className=\"text-center\">;
                    <div className=\"bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3\">;
                      <feature && feature.icon className=\"h-6 w-6\" />;
                    </div>;
                    <h3 className=\"font-semibold text-gray-900 mb-2\">;
                      {feature && feature.title}
                    </h3>;
                    <p className=\"text-sm text-gray-600\">;
                      {feature && feature.description}
                    </p>;
                  </div>;
                ))}
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className=\"py-20 bg-blue-600 text-white\">;
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8 text-center\">;
          <h2 className=\"text-4xl font-bold mb-6\">;
            Ready to Transform Your Business?;
          </h2>;
          <p className=\"text-xl mb-8 max-w-3xl mx-auto\">;
            Let\'s discuss how our technology solutions can help you achieve your goals ;
            and stay ahead of the competition.;
          </p>;
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">;
            <Link
              href=\"/contact\"
              className=\"bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors\">;
              Get Free Consultation;
            </Link>;
            <Link
              href=\"/services\"
              className=\"bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors\">;
              View All Services;
            </Link>;
          </div>;
        </div>;
      </section>;
      </main>;
      <Footer />;
    </>;
  );
});
export default Home;
   import React,{ memo } from 'react';  import type { NextPage } from 'next'; import EnhancedLayout from '../components/layout/EnhancedLayout';
