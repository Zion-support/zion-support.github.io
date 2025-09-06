import React from 'react';
import { Server, Shield, Cloud, Database, Wrench, Users, CheckCircle, ArrowRight, Zap, Globe } from 'lucide-react';
import dynamic from 'next/dynamic';
const "ITServices": React.FC = () => {
  const services = [{
      title: "Infrastructure Management",
      "description": "Comprehensive IT infrastructure setup, maintenance, and optimization for maximum performance.",
      "features": ["Server management", "Network configuration", "Hardware maintenance", "Performance monitoring"],
      "icon": Server,
      "price": "Starting at $2,500/month"
    },
    {
      "title": "Cybersecurity Solutions",
      "description": "Protect your business with advanced security measures and threat detection systems.",
      "features": ["Firewall configuration", "Intrusion detection", "Security audits", "Incident response"],
      "icon": Shield,
      "price": "Starting at $3,000/month"
    },
    {
      "title": "Cloud Migration & Management",
      "description": "Seamlessly migrate to the cloud and manage your cloud infrastructure efficiently.",
      "features": ["Cloud strategy planning", "Data migration", "Cost optimization", "24/7 monitoring"],
      "icon": Cloud,
      "price": "Starting at $5,000"
    },
    {
      "title": "Database Administration",
      "description": "Expert database design, optimization, and maintenance for optimal performance.",
      "features": ["Database design", "Performance tuning", "Backup & recovery", "Security hardening"],
      "icon": Database,
      "price": "Starting at $2,000/month"
    },
    {
      "title": "IT Support & Helpdesk",
      "description": "Round-the-clock technical support to keep your business running smoothly.",
      "features": ["24/7 support", "Remote assistance", "Hardware troubleshooting", "Software installation"],
      "icon": Wrench,
      "price": "Starting at $1,500/month"
    },
    {
      "title": "Network Design & Implementation",
      "description": "Design and implement secure, scalable network solutions for your organization.",
      "features": ["Network architecture", "Wireless solutions", "VPN setup", "Load balancing"],
      "icon": Globe,
      "price": "Starting at $4,000"
    };
  ];
  const stats = [{ "label": "Years of Experience", "value": "15+" },
    { "label": "Projects Completed", "value": "500+" },
    { "label": "Client Satisfaction", "value": "99%" },
    { "label": "Uptime Guarantee", "value": "99.9%" };
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl "md": text-6xl font-bold mb-6">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Comprehensive IT solutions to keep your business secure, efficient, and competitive
            </p>
            <div className="flex flex-col "sm": flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 "md": grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl "md": text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-4">
            Our IT Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From infrastructure management to cybersecurity, we provide comprehensive IT solutions tailored to your business needs.
          </p>
        </div>
        <div className="grid "md": grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 "hover": shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 text-green-600" />
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
                <span className="text-lg font-semibold text-green-600">{service.price}</span>
                <button className="flex items-center text-green-600 "hover": text-green-800 font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver IT solutions that drive real results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rapid Response</h3>
              <p className="text-gray-600">Quick response times and proactive monitoring to prevent issues before they impact your business.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Security First</h3>
              <p className="text-gray-600">Comprehensive security measures to protect your data and systems from evolving threats.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified professionals with years of experience in enterprise IT solutions.</p>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl "md": text-4xl font-bold mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our IT experts assess your current setup and recommend solutions that will improve efficiency and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Schedule Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Download IT Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default dynamic(() => Promise.resolve(ITServices), { "ssr": false });
import React from 'react'; import { Server,Shield,Cloud,Database,Wrench,Users,CheckCircle,ArrowRight,Zap,Globe } from 'lucide-react'; import dynamic from 'next/dynamic'; const ITServices: React.FC = () => { const services = [ { title: "Infrastructure Management",description: "Comprehensive IT infrastructure setup,maintenance,and optimization for maximum performance.",features: ["Server management","Network configuration","Hardware maintenance","Performance monitoring"],icon: Server,price: "Starting at $2,500/month" },{ title: "Cybersecurity Solutions",description: "Protect your business with advanced security measures and threat detection systems.",features: ["Firewall configuration","Intrusion detection","Security audits","Incident response"],icon: Shield,price: "Starting at $3,000/month" },{ title: "Cloud Migration & Management",description: "Seamlessly migrate to the cloud and manage your cloud infrastructure efficiently.",features: ["Cloud strategy planning","Data migration","Cost optimization","24/7 monitoring"],icon: Cloud,price: "Starting at $5,000" },{ title: "Database Administration",description: "Expert database design,optimization,and maintenance for optimal performance.",features: ["Database design","Performance tuning","Backup & recovery","Security hardening"],icon: Database,price: "Starting at $2,000/month" },{ title: "IT Support & Helpdesk",description: "Round-the-clock technical support to keep your business running smoothly.",features: ["24/7 support","Remote assistance","Hardware troubleshooting","Software installation"],icon: Wrench,price: "Starting at $1,500/month" },{ title: "Network Design & Implementation",description: "Design and implement secure,scalable network solutions for your organization.",features: ["Network architecture","Wireless solutions","VPN setup","Load balancing"],icon: Globe,price: "Starting at $4,000" }; ]; const stats = [ { label: "Years of Experience",value: "15+" },{ label: "Projects Completed",value: "500+" },{ label: "Client Satisfaction",value: "99%" },{ label: "Uptime Guarantee",value: "99.9%" }; ]; return ( <div className="min-h-screen bg-gray-50"> {} <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20"> <div className="container mx-auto px-4"> <div className="max-w-4xl mx-auto text-center"> <h1 className="text-4xl md:text-6xl font-bold mb-6"> IT Services </h1> <p className="text-xl md:text-2xl mb-8 text-green-100"> Comprehensive IT solutions to keep your business secure,efficient,and competitive </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"> Get Free Assessment </button> <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"> View Case Studies </button> </div> </div> </div> </div> {} <div className="bg-white py-16"> <div className="container mx-auto px-4"> <div className="grid grid-cols-2 md:grid-cols-4 gap-8"> {stats.map((stat,index) => ( <div key={index} className="text-center"> <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.value}</div> <div className="text-gray-600">{stat.label}</div> </div> ))} </div> </div> </div> {} <div className="container mx-auto px-4 py-20"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our IT Services </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> From infrastructure management to cybersecurity,we provide comprehensive IT solutions tailored to your business needs. </p> </div> <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> {services.map((service,index) => ( <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"> <div className="flex items-center mb-4"> <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4"> <service.icon className="w-6 h-6 text-green-600" /> </div> <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3> </div> <p className="text-gray-600 mb-4">{service.description}</p> <ul className="space-y-2 mb-6"> {service.features.map((feature,featureIndex) => ( <li key={featureIndex} className="flex items-center text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {feature} </li> ))} </ul> <div className="flex items-center justify-between"> <span className="text-lg font-semibold text-green-600">{service.price}</span> <button className="flex items-center text-green-600 hover:text-green-800 font-medium"> Learn More <ArrowRight className="w-4 h-4 ml-1" /> </button> </div> </div> ))} </div> </div> {} <div className="bg-gray-100 py-20"> <div className="container mx-auto px-4"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Why Choose Zion Tech Group? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We combine technical expertise with business acumen to deliver IT solutions that drive real results. </p> </div> <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> <div className="text-center"> <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"> <Zap className="w-8 h-8 text-green-600" /> </div> <h3 className="text-xl font-semibold mb-2">Rapid Response</h3> <p className="text-gray-600">Quick response times and proactive monitoring to prevent issues before they impact your business.</p> </div> <div className="text-center"> <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"> <Shield className="w-8 h-8 text-blue-600" /> </div> <h3 className="text-xl font-semibold mb-2">Security First</h3> <p className="text-gray-600">Comprehensive security measures to protect your data and systems from evolving threats.</p> </div> <div className="text-center"> <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"> <Users className="w-8 h-8 text-purple-600" /> </div> <h3 className="text-xl font-semibold mb-2">Expert Team</h3> <p className="text-gray-600">Certified professionals with years of experience in enterprise IT solutions.</p> </div> </div> </div> </div> {} <div className="bg-gray-900 text-white py-20"> <div className="container mx-auto px-4 text-center"> <h2 className="text-3xl md:text-4xl font-bold mb-6"> Ready to Optimize Your IT Infrastructure? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"> Let our IT experts assess your current setup and recommend solutions that will improve efficiency and security. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"> Schedule Assessment </button> <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"> Download IT Guide </button> </div> </div> </div> </div> )}; export default dynamic(() => Promise.resolve(ITServices),{ ssr: false });