import React from 'react';
import { Link } from 'react-router-dom';
import {CheckCircle, Star, Phone} from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer;

interface ServicePageProps {
  title: any,
    n: any{ className?: string }>;
  services: any,
    n: any{ className?: string }>;
    features: any,
    e: any;
  }>;
  benefits: any;
}

const ServicePage: ,
    e: any, description: any, services: any, benefits }: any) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md: any{title}>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {description}
          </p>;
          <div className="flex flex-col sm: any,>";
    r: any,>";
    e="w-4 h-4 mr-2" />);
              (302) 464-0950
            </a>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md: any,>
    g: any{services.map((service, index) => (
              <div key={index} className="cyber-card p-8 hover: any,>
    e="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                <Link ">
                  to="/contact">
                  className="cyber-button w-full text-center inline-block">
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our {title}?
          </h2>
          <div className="grid grid-cols-1 md: any,>
    g: any{benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free consultation and discover how our solutions can revolutionize your operations.
            </p>
            <div className="flex flex-col sm: any,>
    r: any,>
    e="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>;
      </main>;
;
      <Footer />;
    </div>;
  );
};
";
export default ServicePage;"'";
"'"'";