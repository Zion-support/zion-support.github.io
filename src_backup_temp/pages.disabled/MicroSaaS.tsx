import React from 'react';
import { Zap, Rocket, DollarSign, Users, CheckCircle, ArrowRight, Star, Shield, Globe, TrendingUp } from 'lucide-react';
import dynamic from 'next/dynamic';
const "MicroSaaS": React.FC = () => {
  const services = [{
      title: "Custom Micro SaaS Development",
      "description": "Build specialized, focused software solutions that solve specific business problems efficiently.",
      "features": ["Custom development", "Scalable architecture", "API integration", "Performance optimization"],
      "icon": Zap,
      "price": "Starting at $15,000"
    },
    {
      "title": "SaaS MVP Development",
      "description": "Rapidly develop and launch your SaaS minimum viable product to test market fit.",
      "features": ["Rapid prototyping", "Core features only", "User feedback integration", "Quick deployment"],
      "icon": Rocket,
      "price": "Starting at $8,000"
    },
    {
      "title": "SaaS Monetization Strategy",
      "description": "Develop effective pricing models and revenue strategies for your SaaS product.",
      "features": ["Pricing analysis", "Revenue modeling", "Subscription management", "Payment integration"],
      "icon": DollarSign,
      "price": "Starting at $5,000"
    },
    {
      "title": "SaaS Analytics & Insights",
      "description": "Implement comprehensive analytics to track user behavior and optimize your SaaS performance.",
      "features": ["User analytics", "Revenue tracking", "Performance metrics", "Custom dashboards"],
      "icon": TrendingUp,
      "price": "Starting at $3,500"
    },
    {
      "title": "Multi-tenant Architecture",
      "description": "Design and implement secure, scalable multi-tenant systems for your SaaS platform.",
      "features": ["Tenant isolation", "Data security", "Scalable design", "Resource optimization"],
      "icon": Shield,
      "price": "Starting at $12,000"
    },
    {
      "title": "SaaS Maintenance & Support",
      "description": "Ongoing maintenance, updates, and support to keep your SaaS running smoothly.",
      "features": ["24/7 monitoring", "Regular updates", "Bug fixes", "Performance optimization"],
      "icon": Users,
      "price": "Starting at $2,000/month"
    };
  ];
  const benefits = [{
      "title": "Faster Time to Market",
      "description": "Launch your SaaS product quickly with our streamlined development process.",
      "icon": Rocket
    },
    {
      "title": "Cost-Effective Solutions",
      "description": "Get maximum value with our efficient development approach and competitive pricing.",
      "icon": DollarSign
    },
    {
      "title": "Scalable Architecture",
      "description": "Build for growth with our scalable, cloud-native architecture designs.",
      "icon": TrendingUp
    },
    {
      "title": "Expert Support",
      "description": "Get ongoing support from our experienced SaaS development team.",
      "icon": Users
    };
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl "md": text-6xl font-bold mb-6">
              Micro SaaS Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Build, launch, and scale specialized software solutions that solve real business problems
            </p>
            <div className="flex flex-col "sm": flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-4">
            Our Micro SaaS Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to launch, we help you build focused, profitable SaaS solutions that address specific market needs.
          </p>
        </div>
        <div className="grid "md": grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 "hover": shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-purple-600">{service.price}</span>
                <button className="flex items-center text-purple-600 "hover": text-purple-800 font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Benefits Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Micro SaaS Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of building and scaling SaaS products in today's competitive market.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Process Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures your SaaS product is built right, on time, and within budget.
            </p>
          </div>
          <div className="grid "md": grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery & Planning</h3>
              <p className="text-gray-600">We analyze your requirements and create a detailed project roadmap.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Design & Prototyping</h3>
              <p className="text-gray-600">Create user-friendly interfaces and validate concepts through prototyping.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Development & Testing</h3>
              <p className="text-gray-600">Build your SaaS with clean code and rigorous testing at every step.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Launch & Support</h3>
              <p className="text-gray-600">Deploy your SaaS and provide ongoing support for continued success.</p>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl "md": text-4xl font-bold mb-6">
            Ready to Build Your Micro SaaS?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your SaaS idea and create a plan to bring it to market successfully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Download SaaS Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default dynamic(() => Promise.resolve(MicroSaaS), { "ssr": false });
import React from 'react'; import { Zap,Rocket,DollarSign,Users,CheckCircle,ArrowRight,Star,Shield,Globe,TrendingUp } from 'lucide-react'; import dynamic from 'next/dynamic'; const MicroSaaS: React.FC = () => { const services = [ { title: "Custom Micro SaaS Development",description: "Build specialized,focused software solutions that solve specific business problems efficiently.",features: ["Custom development","Scalable architecture","API integration","Performance optimization"],icon: Zap,price: "Starting at $15,000" },{ title: "SaaS MVP Development",description: "Rapidly develop and launch your SaaS minimum viable product to test market fit.",features: ["Rapid prototyping","Core features only","User feedback integration","Quick deployment"],icon: Rocket,price: "Starting at $8,000" },{ title: "SaaS Monetization Strategy",description: "Develop effective pricing models and revenue strategies for your SaaS product.",features: ["Pricing analysis","Revenue modeling","Subscription management","Payment integration"],icon: DollarSign,price: "Starting at $5,000" },{ title: "SaaS Analytics & Insights",description: "Implement comprehensive analytics to track user behavior and optimize your SaaS performance.",features: ["User analytics","Revenue tracking","Performance metrics","Custom dashboards"],icon: TrendingUp,price: "Starting at $3,500" },{ title: "Multi-tenant Architecture",description: "Design and implement secure,scalable multi-tenant systems for your SaaS platform.",features: ["Tenant isolation","Data security","Scalable design","Resource optimization"],icon: Shield,price: "Starting at $12,000" },{ title: "SaaS Maintenance & Support",description: "Ongoing maintenance,updates,and support to keep your SaaS running smoothly.",features: ["24/7 monitoring","Regular updates","Bug fixes","Performance optimization"],icon: Users,price: "Starting at $2,000/month" }; ]; const benefits = [ { title: "Faster Time to Market",description: "Launch your SaaS product quickly with our streamlined development process.",icon: Rocket },{ title: "Cost-Effective Solutions",description: "Get maximum value with our efficient development approach and competitive pricing.",icon: DollarSign },{ title: "Scalable Architecture",description: "Build for growth with our scalable,cloud-native architecture designs.",icon: TrendingUp },{ title: "Expert Support",description: "Get ongoing support from our experienced SaaS development team.",icon: Users }; ]; return ( <div className="min-h-screen bg-gray-50"> {} <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20"> <div className="container mx-auto px-4"> <div className="max-w-4xl mx-auto text-center"> <h1 className="text-4xl md:text-6xl font-bold mb-6"> Micro SaaS Services </h1> <p className="text-xl md:text-2xl mb-8 text-purple-100"> Build,launch,and scale specialized software solutions that solve real business problems </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"> Start Your Project </button> <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"> View Portfolio </button> </div> </div> </div> </div> {} <div className="container mx-auto px-4 py-20"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Micro SaaS Services </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> From concept to launch,we help you build focused,profitable SaaS solutions that address specific market needs. </p> </div> <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> {services.map((service,index) => ( <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"> <div className="flex items-center mb-4"> <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4"> <service.icon className="w-6 h-6 text-purple-600" /> </div> <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3> </div> <p className="text-gray-600 mb-4">{service.description}</p> <ul className="space-y-2 mb-6"> {service.features.map((feature,featureIndex) => ( <li key={featureIndex} className="flex items-center text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {feature} </li> ))} </ul> <div className="flex items-center justify-between"> <span className="text-lg font-semibold text-purple-600">{service.price}</span> <button className="flex items-center text-purple-600 hover:text-purple-800 font-medium"> Learn More <ArrowRight className="w-4 h-4 ml-1" /> </button> </div> </div> ))} </div> </div> {} <div className="bg-gray-100 py-20"> <div className="container mx-auto px-4"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Why Choose Our Micro SaaS Services? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We understand the unique challenges of building and scaling SaaS products in today's competitive market. </p> </div> <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> {benefits.map((benefit,index) => ( <div key={index} className="text-center"> <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"> <benefit.icon className="w-8 h-8 text-purple-600" /> </div> <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3> <p className="text-gray-600">{benefit.description}</p> </div> ))} </div> </div> </div> {} <div className="bg-white py-20"> <div className="container mx-auto px-4"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Development Process </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> A proven methodology that ensures your SaaS product is built right,on time,and within budget. </p> </div> <div className="grid md:grid-cols-4 gap-8"> <div className="text-center"> <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"> <span className="text-2xl font-bold text-blue-600">1</span> </div> <h3 className="text-xl font-semibold mb-2">Discovery & Planning</h3> <p className="text-gray-600">We analyze your requirements and create a detailed project roadmap.</p> </div> <div className="text-center"> <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"> <span className="text-2xl font-bold text-green-600">2</span> </div> <h3 className="text-xl font-semibold mb-2">Design & Prototyping</h3> <p className="text-gray-600">Create user-friendly interfaces and validate concepts through prototyping.</p> </div> <div className="text-center"> <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"> <span className="text-2xl font-bold text-purple-600">3</span> </div> <h3 className="text-xl font-semibold mb-2">Development & Testing</h3> <p className="text-gray-600">Build your SaaS with clean code and rigorous testing at every step.</p> </div> <div className="text-center"> <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"> <span className="text-2xl font-bold text-orange-600">4</span> </div> <h3 className="text-xl font-semibold mb-2">Launch & Support</h3> <p className="text-gray-600">Deploy your SaaS and provide ongoing support for continued success.</p> </div> </div> </div> </div> {} <div className="bg-gray-900 text-white py-20"> <div className="container mx-auto px-4 text-center"> <h2 className="text-3xl md:text-4xl font-bold mb-6"> Ready to Build Your Micro SaaS? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"> Let's discuss your SaaS idea and create a plan to bring it to market successfully. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"> Schedule Consultation </button> <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"> Download SaaS Guide </button> </div> </div> </div> </div> )}; export default dynamic(() => Promise.resolve(MicroSaaS),{ ssr: false });