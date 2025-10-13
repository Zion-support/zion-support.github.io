import React from 'react';';';
import { Link , CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Brain, BarChart, MessageSquare, Eye, Phone, Lock, Database, Cloud, Code, Settings, BarChart3, ShoppingCart, Car, Target, Globe, Cpu, Smartphone, FileText, Bot, Music, Video, CreditCard, Train, Home, Heart, GraduationCap  } from 'react-router-dom';';';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Brain, BarChart, MessageSquare, Eye, Phone, Lock, Database, Cloud, Code, Settings, BarChart3, ShoppingCart, Car, Target, Globe, Cpu, Smartphone, FileText, Bot, Music, Video, CreditCard, Train, Home, Heart, GraduationCap  } from 'lucide-react';';';
import Navigation from '../components/Navigation';';';
import Footer from '../components/Footer';';';
import SEOOptimizer from '../components/SEOOptimizer';';';
import { microSaasServices, aiServices, itServices, specializedServices } from '../data/2025-comprehensive-real-services-enhanced';';'
;
const ServicesPage: React.FC = () => {;
const aiServicesData = aiServices.map(service => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
    icon: Brain,
    title: service.name,
    description: service.description,
    features: service.features.slice(0, 4),
    price: `Starting at $${service.pricing.starter.price.toLocaleString()}/month`,
    popular: service.pricing.starter.price < 3000,
    link: service.website.replace('https://ziontechgroup.com', ')''
  }));
;
const itServicesData = itServices.map(service => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
    icon: Database,
    title: service.name,
    description: service.description,
    features: service.features.slice(0, 4),
    price: `Starting at $${service.pricing.starter.price.toLocaleString()}/month`,
    popular: service.pricing.starter.price < 2000,
    link: service.website.replace('https://ziontechgroup.com', ')''
  }));
;
const microSaasServicesData = microSaasServices.map(service => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
    icon: BarChart3,
    title: service.name,
    description: service.description,
    features: service.features.slice(0, 4),
    price: `$${service.pricing.starter.price}/month`,
    popular: service.pricing.starter.price < 200,
    link: service.website.replace('https://ziontechgroup.com', ')''
  }));
;
const benefits = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: TrendingUp,
      title: 'Proven ROI','
      description: 'Average 300% return on investment for our clients''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Users,
      title: 'Expert Team','
      description: '50+ certified professionals with 10+ years experience''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Clock,
      title: '24/7 Support','
      description: 'Round-the-clock support with guaranteed response times''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Shield,
      title: 'Fast Delivery','
      description: 'Quick implementation with minimal downtime''
    }
  ];
;
const stats = [
  // TODO: Add items
]
  // TODO: Add items
]
    { label: 'Projects Completed', value: '500+' },'
    { label: 'Happy Clients', value: '200+' },'
    { label: 'Uptime Guarantee', value: '99.9%' },'
    { label: 'Support Available', value: '24/7' }'
  ];

  return (
  // TODO: Add parameters
)
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
<SEOOptimizer
        title="AI & IT Services - Zion Tech Group""
        description="Comprehensive AI and IT solutions including AI services, automation, cybersecurity, cloud services, and micro SAAS applications. Starting from $39/month.""
        keywords="AI services, IT solutions, micro SAAS, automation, cybersecurity, cloud services, business intelligence""
      />
<Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16">"
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
<div className="text-center">"
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
              Our Services
            </h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
              Comprehensive AI and IT solutions designed to transform your business operations and drive growth
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">"
<$2 />
                href="tel:+13024640950""
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center""
              >
<Phone className="h-5 w-5 mr-2" />"
                Call (302) 464-0950
              </a>
<Link
                to="/contact""
                className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors""
              >
                Get Free Consultation
              </Link></div>
</div></div>
</section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5">"
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">"
            {stats.map((stat, index) => (
  // TODO: Add parameters
)
              <div key={index} className="text-center">"
<div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">"
                  {stat.value}
                <div className="text-gray-300 text-sm md:text-base">"
                  {stat.label}
            ))}
          </div></div>
</section>

      {/* AI Services Section */}
      <section className="py-24">"
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
<div className="text-center mb-16">"
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">"
              AI Services
            </h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">"
              Advanced artificial intelligence solutions to automate, optimize, and transform your business
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
            {aiServicesData.map((service, index) => (
  // TODO: Add parameters
)
              <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${service.popular ? 'ring-2 ring-cyan-400' : '}`}>''
                {service.popular && (
  // TODO: Add parameters
)
                  <div className="flex items-center justify-center mb-4">"
<span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">"
                      Most Popular
                    </span></div>
                )}
                <div className="flex items-center mb-4">"
<service.icon className="h-8 w-8 text-cyan-400 mr-3" />"
<h3 className="text-xl font-semibold text-white">{service.title}"
                <p className="text-gray-300 mb-4">{service.description}"
                <ul className="space-y-2 mb-6">"
                  {service.features.map((feature, featureIndex) => (
  // TODO: Add parameters
)
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">"
<CheckCircle className="h-4 w-4 text-green-500 mr-2" />"
                      {feature}
                  ))}
                <div className="text-center">"
<div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}"
                  <$2 />
                    to={service.link}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block""
                  >
                    Learn More
                  </Link></div>
</div>
            ))}
          </div></div>
</section>

      {/* IT Services Section */}
      <section className="py-24 bg-white/5">"
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
<div className="text-center mb-16">"
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">"
              IT Services
            </h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">"
              Robust IT infrastructure and support services to keep your business running smoothly
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
            {itServicesData.map((service, index) => (
  // TODO: Add parameters
)
              <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${service.popular ? 'ring-2 ring-cyan-400' : '}`}>''
                {service.popular && (
  // TODO: Add parameters
)
                  <div className="flex items-center justify-center mb-4">"
<span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">"
                      Most Popular
                    </span></div>
                )}
                <div className="flex items-center mb-4">"
<service.icon className="h-8 w-8 text-blue-400 mr-3" />"
<h3 className="text-xl font-semibold text-white">{service.title}"
                <p className="text-gray-300 mb-4">{service.description}"
                <ul className="space-y-2 mb-6">"
                  {service.features.map((feature, featureIndex) => (
  // TODO: Add parameters
)
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">"
<CheckCircle className="h-4 w-4 text-green-500 mr-2" />"
                      {feature}
                  ))}
                <div className="text-center">"
<div className="text-2xl font-bold text-blue-400 mb-4">{service.price}"
                  <$2 />
                    to={service.link}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block""
                  >
                    Learn More
                  </Link></div>
</div>
            ))}
          </div></div>
</section>

      {/* Micro SAAS Services Section */}
      <section className="py-24">"
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
<div className="text-center mb-16">"
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">"
              Micro SAAS Solutions
            </h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">"
              Affordable, powerful AI-driven tools for modern businesses. 50+ ready-to-use applications.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
            {microSaasServicesData.map((service, index) => (
  // TODO: Add parameters
)
              <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${service.popular ? 'ring-2 ring-cyan-400' : '}`}>''
                {service.popular && (
  // TODO: Add parameters
)
                  <div className="flex items-center justify-center mb-4">"
<span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">"
                      Most Popular
                    </span></div>
                )}
                <div className="flex items-center mb-4">"
<service.icon className="h-8 w-8 text-purple-400 mr-3" />"
<h3 className="text-xl font-semibold text-white">{service.title}"
                <p className="text-gray-300 mb-4">{service.description}"
                <ul className="space-y-2 mb-6">"
                  {service.features.map((feature, featureIndex) => (
  // TODO: Add parameters
)
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">"
<CheckCircle className="h-4 w-4 text-green-500 mr-2" />"
                      {feature}
                  ))}
                <div className="text-center">"
<div className="text-2xl font-bold text-purple-400 mb-4">{service.price}"
                  <$2 />
                    to={service.link}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block""
                  >
                    Learn More
                  </Link></div>
</div>
            ))}
          </div></div>
</section>

      {/* Benefits Section */}
      <section className="py-24 bg-white/5">"
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
<div className="text-center mb-16">"
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">"
              Why Choose Zion Tech Group?
            </h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">"
              We deliver exceptional results with proven expertise and cutting-edge technology
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
            {benefits.map((benefit, index) => (
  // TODO: Add parameters
)
              <div key={index} className="text-center">"
<div className="bg-cyan-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">"
<benefit.icon className="h-8 w-8 text-cyan-400" />"
<h3 className="text-xl font-semibold text-white mb-2">{benefit.title}"
                <p className="text-gray-300">{benefit.description}"
            ))}
          </div></div>
</section>

      {/* CTA Section */}
      <section className="py-24">"
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
<div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl p-12 text-center">"
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">"
              Ready to Transform Your Business?
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">"
              Contact us today to discuss how our AI and IT solutions can help your organization thrive.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
<$2 />
                href="tel:+13024640950""
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors hover:bg-gray-100 flex items-center justify-center""
              >
<Phone className="h-5 w-5 mr-2" />"
                Call (302) 464-0950
              </a>
<Link
                to="/contact""
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors""
              >
                Get Free Consultation
              </Link></div>
</div></div>
</section>
<Footer /></div>
  );
};
;
export default ServicesPage;

