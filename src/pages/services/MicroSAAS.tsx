import React from 'react';
import { Package, Zap, Users, Globe, Cpu, Database, Shield, Target, TrendingUp, Rocket, Settings } from 'lucide-react';

const MicroSAAS = () => {
  const microsaasServices = [
    {
      icon: Package,
      title: "SAAS Development",
      description: "End-to-end development of scalable software-as-a-service applications",
      price: "From $25,000/project",
      features: ["Custom SAAS platforms", "Multi-tenant architecture", "Subscription management", "API development"]
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Quick development of MVPs and prototypes to validate business ideas",
      price: "From $15,000/project",
      features: ["MVP development", "Proof of concept", "User testing", "Iterative design"]
    },
    {
      icon: Users,
      title: "User Management",
      description: "Comprehensive user authentication, authorization, and management systems",
      price: "From $8,500/month",
      features: ["User registration", "Role-based access", "Single sign-on", "User analytics"]
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Scalable database design and data processing solutions",
      price: "From $12,000/month",
      features: ["Database architecture", "Data migration", "Backup strategies", "Performance optimization"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security and compliance for SAAS applications",
      price: "From $18,000/month",
      features: ["Data encryption", "GDPR compliance", "SOC 2 certification", "Security auditing"]
    },
    {
      icon: Globe,
      title: "Cloud Deployment",
      description: "Scalable cloud infrastructure and deployment solutions",
      price: "From $15,000/month",
      features: ["AWS/Azure deployment", "Container orchestration", "Auto-scaling", "Monitoring"]
    }
  ];

  const benefits = [
    "Lower development costs and faster time to market",
    "Scalable architecture that grows with your business",
    "Reduced infrastructure management overhead",
    "Access to enterprise-grade security and compliance",
    "Flexible subscription models and pricing strategies",
    "Continuous updates and feature improvements"
  ];

  const technologies = [
    {
      name: "Frontend",
      description: "React, Vue.js, Angular with modern UI frameworks",
      icon: Cpu,
      features: ["Modern frameworks", "Responsive design", "Component architecture", "State management"]
    },
    {
      name: "Backend",
      description: "Node.js, Python, Java with microservices architecture",
      icon: Database,
      features: ["Microservices", "API development", "Scalable architecture", "Performance optimization"]
    },
    {
      name: "Cloud",
      description: "AWS, Azure, GCP with containerization and orchestration",
      icon: Globe,
      features: ["Cloud platforms", "Containerization", "Auto-scaling", "Load balancing"]
    }
  ];

  const industries = [
    {
      title: "Healthcare",
      description: "HIPAA-compliant patient management and telemedicine platforms",
      icon: Shield
    },
    {
      title: "Finance",
      description: "Secure financial planning and investment management tools",
      icon: TrendingUp
    },
    {
      title: "Education",
      description: "Learning management systems and educational technology platforms",
      icon: Users
    },
    {
      title: "E-commerce",
      description: "Online marketplace and retail management solutions",
      icon: Package
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-full text-sm font-medium mb-6">
              <Package className="w-4 h-4 mr-2"/>
              MicroSAAS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Build Your
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> SAAS Empire</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We help entrepreneurs and businesses build scalable, profitable software-as-a-service 
              applications that generate recurring revenue and scale globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Services
              </a>
              <a href="/contact" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MicroSAAS Services Grid */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our MicroSAAS Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive SAAS development services that help you build, launch, 
              and scale profitable software businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microsaasServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-indigo-400 mb-4">{service.price}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Modern, scalable technologies to build robust and efficient 
              SAAS applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Specialized SAAS solutions for various industries with 
              domain-specific expertise and compliance requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-6 h-6 text-white"/>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{industry.title}</h3>
                <p className="text-gray-400 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose MicroSAAS?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                MicroSAAS solutions offer entrepreneurs and businesses a proven path 
                to building profitable, scalable software businesses with recurring revenue.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl p-8 border border-indigo-500/30">
              <div className="text-center">
                <Rocket className="w-24 h-24 text-indigo-400 mx-auto mb-4"/>
                <h3 className="text-2xl font-bold text-white mb-2">SAAS Success</h3>
                <p className="text-gray-300 mb-6">
                  We've helped numerous entrepreneurs build successful SAAS businesses 
                  that generate millions in recurring revenue.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• Proven business models</p>
                  <p>• Scalable architecture</p>
                  <p>• Revenue optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your SAAS Empire?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help you build a profitable, 
            scalable software-as-a-service business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </a>
            <a href="/services" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAAS;