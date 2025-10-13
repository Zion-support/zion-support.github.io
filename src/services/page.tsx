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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"AI & IT Services - Zion Tech Group""Comprehensive AI and IT solutions including AI services, automation, cybersecurity, cloud services, and micro SAAS applications. Starting from $39/month.""AI services, IT solutions, micro SAAS, automation, cybersecurity, cloud services, business intelligence""pt-24 pb-16"
<div className="
<div className="text-center"text-4 xl md:text-6 xl font-bold text-white mb-6"
              Our Services
            </h1>
<p className="
              Comprehensive AI and IT solutions designed to transform your business operations and drive growth
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"tel:+13024640950""bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
<Phone className="
                Call (302) 464-0950
              </a>
<Link
                to="/contact"
                className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"py-16 bg-white/5"
<div className="
<div className="grid grid-cols-2 md:grid-cols-4 gap-8"text-center"
<div className="
                  {stat.value}
                <div className="text-gray-300 text-sm md:text-base"py-24"
<div className="
<div className="text-center mb-16"text-3 xl md:text-4 xl font-bold text-white mb-4"
              AI Services
            </h2>
<p className="
              Advanced artificial intelligence solutions to automate, optimize, and transform your business
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"flex items-center justify-center mb-4"
<span className="
                      Most Popular
                    </span></div>
                )}
                <div className="flex items-center mb-4"h-8 w-8 text-cyan-400 mr-3"
<h3 className="
                <p className="text-gray-300 mb-4"space-y-2 mb-6"
                  {service.features.map((feature, featureIndex) => (
  // TODO: Add parameters
)
                    <li key={featureIndex} className="
<CheckCircle className="h-4 w-4 text-green-500 mr-2"text-center"
<div className="
                  <$2 />
                    to={service.link}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block"py-24 bg-white/5"
<div className="
<div className="text-center mb-16"text-3 xl md:text-4 xl font-bold text-white mb-4"
              IT Services
            </h2>
<p className="
              Robust IT infrastructure and support services to keep your business running smoothly
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"flex items-center justify-center mb-4"
<span className="
                      Most Popular
                    </span></div>
                )}
                <div className="flex items-center mb-4"h-8 w-8 text-blue-400 mr-3"
<h3 className="
                <p className="text-gray-300 mb-4"space-y-2 mb-6"
                  {service.features.map((feature, featureIndex) => (
  // TODO: Add parameters
)
                    <li key={featureIndex} className="
<CheckCircle className="h-4 w-4 text-green-500 mr-2"text-center"
<div className="
                  <$2 />
                    to={service.link}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block"py-24"
<div className="
<div className="text-center mb-16"text-3 xl md:text-4 xl font-bold text-white mb-4"
              Micro SAAS Solutions
            </h2>
<p className="
              Affordable, powerful AI-driven tools for modern businesses. 50+ ready-to-use applications.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"flex items-center justify-center mb-4"
<span className="
                      Most Popular
                    </span></div>
                )}
                <div className="flex items-center mb-4"h-8 w-8 text-purple-400 mr-3"
<h3 className="
                <p className="text-gray-300 mb-4"space-y-2 mb-6"
                  {service.features.map((feature, featureIndex) => (
  // TODO: Add parameters
)
                    <li key={featureIndex} className="
<CheckCircle className="h-4 w-4 text-green-500 mr-2"text-center"
<div className="
                  <$2 />
                    to={service.link}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block"py-24 bg-white/5"
<div className="
<div className="text-center mb-16"text-3 xl md:text-4 xl font-bold text-white mb-4"
              Why Choose Zion Tech Group?
            </h2>
<p className="
              We deliver exceptional results with proven expertise and cutting-edge technology
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"text-center"
<div className="
<benefit.icon className="h-8 w-8 text-cyan-400"text-xl font-semibold text-white mb-2"
                <p className="
            ))}
          </div></div>
</section>

      {/* CTA Section */}
      <section className="py-24"max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"
<div className="
<h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4"text-xl text-white/90 mb-8 max-w-3 xl mx-auto"
              Contact us today to discuss how our AI and IT solutions can help your organization thrive.
            <div className="
<$2 />
                href="tel:+13024640950"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors hover:bg-gray-100 flex items-center justify-center"h-5 w-5 mr-2"
                Call (302) 464-0950
              </a>
<Link
                to=""
                className="
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

