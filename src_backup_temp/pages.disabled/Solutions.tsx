import React from 'react';
import { Target, Zap, Shield, Cloud, Users, CheckCircle, ArrowRight, Star, Globe, TrendingUp } from 'lucide-react';
const "Solutions": React.FC = () => {
  const solutions = [{
      title: "Digital Transformation",
      "description": "Complete digital overhaul of your business processes and systems for modern efficiency.",
      "features": ["Process automation", "Legacy system modernization", "Workflow optimization", "Change management"],
      "icon": Target,
      "price": "Custom pricing",
      "category": "Transformation"
    },
    {
      "title": "Cloud Infrastructure",
      "description": "Scalable, secure cloud solutions that grow with your business needs.",
      "features": ["Cloud migration", "Infrastructure as code", "Auto-scaling", "Cost optimization"],
      "icon": Cloud,
      "price": "Starting at $5,000",
      "category": "Infrastructure"
    },
    {
      "title": "Cybersecurity Solutions",
      "description": "Comprehensive security measures to protect your business from evolving threats.",
      "features": ["Security assessment", "Threat detection", "Incident response", "Compliance management"],
      "icon": Shield,
      "price": "Starting at $3,500",
      "category": "Security"
    },
    {
      "title": "AI & Machine Learning",
      "description": "Intelligent solutions that automate processes and provide valuable insights.",
      "features": ["Predictive analytics", "Process automation", "Intelligent chatbots", "Data insights"],
      "icon": Zap,
      "price": "Starting at $8,000",
      "category": "AI/ML"
    },
    {
      "title": "Enterprise Integration",
      "description": "Seamlessly connect all your business systems for unified operations.",
      "features": ["API development", "System integration", "Data synchronization", "Real-time monitoring"],
      "icon": Globe,
      "price": "Starting at $6,000",
      "category": "Integration"
    },
    {
      "title": "Business Intelligence",
      "description": "Transform your data into actionable insights for better decision making.",
      "features": ["Data visualization", "Custom dashboards", "Report automation", "KPI tracking"],
      "icon": TrendingUp,
      "price": "Starting at $4,500",
      "category": "Analytics"
    };
  ];
  const industries = [{ "name": "Healthcare", "description": "HIPAA-compliant solutions for healthcare providers" },
    { "name": "Finance", "description": "Secure financial technology solutions" },
    { "name": "Manufacturing", "description": "IoT and automation for smart manufacturing" },
    { "name": "Retail", "description": "E-commerce and customer experience solutions" },
    { "name": "Education", "description": "Learning management and student information systems" },
    { "name": "Government", "description": "Secure, compliant government technology solutions" };
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl "md": text-6xl font-bold mb-6">
              Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Comprehensive technology solutions tailored to your industry and business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Solution Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Solutions Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-4">
            Our Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From digital transformation to AI implementation, we provide end-to-end solutions that drive business growth.
          </p>
        </div>
        <div className="grid "md": grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 "hover": shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <solution.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                  <span className="text-sm text-indigo-600 font-medium">{solution.category}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-indigo-600">{solution.price}</span>
                <button className="flex items-center text-indigo-600 "hover": text-indigo-800 font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Industries Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have deep experience across multiple industries, understanding the unique challenges and requirements of each sector.
            </p>
          </div>
          <div className="grid "md": grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center "hover": shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
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
              Our Solution Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering technology solutions that meet your specific business requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery & Analysis</h3>
              <p className="text-gray-600">We analyze your current systems, processes, and requirements to identify opportunities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Solution Design</h3>
              <p className="text-gray-600">Create a comprehensive solution architecture tailored to your specific needs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">Deploy the solution with minimal disruption to your ongoing operations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Optimization & Support</h3>
              <p className="text-gray-600">Continuously optimize and provide ongoing support for maximum value.</p>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl "md": text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our experts analyze your needs and recommend the perfect technology solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Download Solutions Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Solutions;
import React from 'react'; import { Target,Zap,Shield,Cloud,Users,CheckCircle,ArrowRight,Star,Globe,TrendingUp } from 'lucide-react'; const Solutions: React.FC = () => { const solutions = [ { title: "Digital Transformation",description: "Complete digital overhaul of your business processes and systems for modern efficiency.",features: ["Process automation","Legacy system modernization","Workflow optimization","Change management"],icon: Target,price: "Custom pricing",category: "Transformation" },{ title: "Cloud Infrastructure",description: "Scalable,secure cloud solutions that grow with your business needs.",features: ["Cloud migration","Infrastructure as code","Auto-scaling","Cost optimization"],icon: Cloud,price: "Starting at $5,000",category: "Infrastructure" },{ title: "Cybersecurity Solutions",description: "Comprehensive security measures to protect your business from evolving threats.",features: ["Security assessment","Threat detection","Incident response","Compliance management"],icon: Shield,price: "Starting at $3,500",category: "Security" },{ title: "AI & Machine Learning",description: "Intelligent solutions that automate processes and provide valuable insights.",features: ["Predictive analytics","Process automation","Intelligent chatbots","Data insights"],icon: Zap,price: "Starting at $8,000",category: "AI/ML" },{ title: "Enterprise Integration",description: "Seamlessly connect all your business systems for unified operations.",features: ["API development","System integration","Data synchronization","Real-time monitoring"],icon: Globe,price: "Starting at $6,000",category: "Integration" },{ title: "Business Intelligence",description: "Transform your data into actionable insights for better decision making.",features: ["Data visualization","Custom dashboards","Report automation","KPI tracking"],icon: TrendingUp,price: "Starting at $4,500",category: "Analytics" }; ]; const industries = [ { name: "Healthcare",description: "HIPAA-compliant solutions for healthcare providers" },{ name: "Finance",description: "Secure financial technology solutions" },{ name: "Manufacturing",description: "IoT and automation for smart manufacturing" },{ name: "Retail",description: "E-commerce and customer experience solutions" },{ name: "Education",description: "Learning management and student information systems" },{ name: "Government",description: "Secure,compliant government technology solutions" }; ]; return ( <div className="min-h-screen bg-gray-50"> {} <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20"> <div className="container mx-auto px-4"> <div className="max-w-4xl mx-auto text-center"> <h1 className="text-4xl md:text-6xl font-bold mb-6"> Technology Solutions </h1> <p className="text-xl md:text-2xl mb-8 text-indigo-100"> Comprehensive technology solutions tailored to your industry and business needs </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"> Get Solution Assessment </button> <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"> View Case Studies </button> </div> </div> </div> </div> {} <div className="container mx-auto px-4 py-20"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Technology Solutions </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> From digital transformation to AI implementation,we provide end-to-end solutions that drive business growth. </p> </div> <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> {solutions.map((solution,index) => ( <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"> <div className="flex items-center mb-4"> <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4"> <solution.icon className="w-6 h-6 text-indigo-600" /> </div> <div> <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3> <span className="text-sm text-indigo-600 font-medium">{solution.category}</span> </div> </div> <p className="text-gray-600 mb-4">{solution.description}</p> <ul className="space-y-2 mb-6"> {solution.features.map((feature,featureIndex) => ( <li key={featureIndex} className="flex items-center text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {feature} </li> ))} </ul> <div className="flex items-center justify-between"> <span className="text-lg font-semibold text-indigo-600">{solution.price}</span> <button className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium"> Learn More <ArrowRight className="w-4 h-4 ml-1" /> </button> </div> </div> ))} </div> </div> {} <div className="bg-gray-100 py-20"> <div className="container mx-auto px-4"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Industry Expertise </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We have deep experience across multiple industries,understanding the unique challenges and requirements of each sector. </p> </div> <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> {industries.map((industry,index) => ( <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"> <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3> <p className="text-gray-600">{industry.description}</p> </div> ))} </div> </div> </div> {} <div className="bg-white py-20"> <div className="container mx-auto px-4"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Solution Process </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> A systematic approach to delivering technology solutions that meet your specific business requirements. </p> </div> <div className="grid md:grid-cols-4 gap-8"> <div className="text-center"> <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"> <span className="text-2xl font-bold text-blue-600">1</span> </div> <h3 className="text-xl font-semibold mb-2">Discovery & Analysis</h3> <p className="text-gray-600">We analyze your current systems,processes,and requirements to identify opportunities.</p> </div> <div className="text-center"> <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"> <span className="text-2xl font-bold text-green-600">2</span> </div> <h3 className="text-xl font-semibold mb-2">Solution Design</h3> <p className="text-gray-600">Create a comprehensive solution architecture tailored to your specific needs.</p> </div> <div className="text-center"> <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"> <span className="text-2xl font-bold text-purple-600">3</span> </div> <h3 className="text-xl font-semibold mb-2">Implementation</h3> <p className="text-gray-600">Deploy the solution with minimal disruption to your ongoing operations.</p> </div> <div className="text-center"> <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"> <span className="text-2xl font-bold text-orange-600">4</span> </div> <h3 className="text-xl font-semibold mb-2">Optimization & Support</h3> <p className="text-gray-600">Continuously optimize and provide ongoing support for maximum value.</p> </div> </div> </div> </div> {} <div className="bg-gray-900 text-white py-20"> <div className="container mx-auto px-4 text-center"> <h2 className="text-3xl md:text-4xl font-bold mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"> Let our experts analyze your needs and recommend the perfect technology solution for your business. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"> Schedule Consultation </button> <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"> Download Solutions Guide </button> </div> </div> </div> </div> )}; export default Solutions;