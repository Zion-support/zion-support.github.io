import React from 'react';
import { Users, Lightbulb, Target, TrendingUp, Shield, Globe, Zap, Cpu, Database, Award, Briefcase } from 'lucide-react';
const Consulting = () => {
    const consultingServices = [
        {
            icon: Lightbulb,
            title: "Technology Strategy",
            description: "Strategic technology planning and digital transformation roadmaps",
            features: ["Technology assessment", "Digital transformation", "Innovation strategy", "Technology roadmaps"]
        },
        {
            icon: Target,
            title: "AI & ML Consulting",
            description: "Expert guidance on AI implementation and machine learning strategies",
            features: ["AI readiness assessment", "ML model development", "Data strategy", "Implementation planning"]
        },
        {
            icon: Shield,
            title: "Cybersecurity Consulting",
            description: "Comprehensive security assessments and risk management strategies",
            features: ["Security audits", "Risk assessment", "Compliance consulting", "Incident response planning"]
        },
        {
            icon: Globe,
            title: "Cloud Strategy",
            description: "Cloud migration planning and multi-cloud optimization strategies",
            features: ["Cloud assessment", "Migration planning", "Cost optimization", "Security architecture"]
        },
        {
            icon: Database,
            title: "Data Strategy",
            description: "Data governance, analytics, and business intelligence consulting",
            features: ["Data governance", "Analytics strategy", "BI implementation", "Data quality management"]
        },
        {
            icon: Zap,
            title: "Digital Innovation",
            description: "Emerging technology consulting and innovation acceleration",
            features: ["Technology scouting", "Innovation labs", "Proof of concepts", "Technology adoption"]
        }
    ];
    const industries = [
        {
            title: "Financial Services",
            description: "Banking, insurance, and fintech consulting",
            icon: TrendingUp
        },
        {
            title: "Healthcare",
            description: "Digital health and medical technology consulting",
            icon: Shield
        },
        {
            title: "Manufacturing",
            description: "Industry 4.0 and smart manufacturing consulting",
            icon: Cpu
        },
        {
            title: "Retail & E-commerce",
            description: "Digital commerce and customer experience consulting",
            icon: Users
        },
        {
            title: "Energy & Utilities",
            description: "Smart grid and sustainability consulting",
            icon: Globe
        },
        {
            title: "Government",
            description: "Public sector digital transformation consulting",
            icon: Briefcase
        }
    ];
    const benefits = [
        "Expert guidance from industry professionals",
        "Proven methodologies and best practices",
        "Customized solutions for your specific needs",
        "Long-term strategic partnerships",
        "Measurable results and ROI",
        "Access to cutting-edge technology insights"
    ];
    const process = [
        {
            phase: "Discovery",
            description: "Understanding your business needs and objectives",
            duration: "1-2 weeks"
        },
        {
            phase: "Assessment",
            description: "Comprehensive analysis of current state and opportunities",
            duration: "2-4 weeks"
        },
        {
            phase: "Strategy",
            description: "Developing customized solutions and implementation plans",
            duration: "3-6 weeks"
        },
        {
            phase: "Implementation",
            description: "Executing the strategy with ongoing support and guidance",
            duration: "8-24 weeks"
        }
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2"/>
              Consulting Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert Technology
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> Consulting</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Strategic technology consulting to help your organization navigate 
              digital transformation and achieve competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Services
              </a>
              <a href="/contact" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Consulting Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive consulting services designed to address your unique 
              technology challenges and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (<div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (<li key={idx} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>))}
                </ul>
              </div>))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Deep industry knowledge and experience across multiple sectors 
              to deliver relevant and effective solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (<div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-orange-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.title}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Consulting?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our consulting services provide strategic guidance and practical 
                solutions that drive real business value and competitive advantage.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (<li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    {benefit}
                  </li>))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-8 border border-orange-500/30">
              <div className="text-center">
                <Award className="w-24 h-24 text-orange-400 mx-auto mb-4"/>
                <h3 className="text-2xl font-bold text-white mb-2">Proven Expertise</h3>
                <p className="text-gray-300 mb-6">
                  Our consultants bring decades of combined experience 
                  and proven track records of success.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• Industry veterans</p>
                  <p>• Certified professionals</p>
                  <p>• Global experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Consulting Process
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            A systematic approach to delivering consulting services that ensures 
            success and maximizes value for our clients.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (<div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{phase.phase}</h3>
                <p className="text-gray-300 mb-2">{phase.description}</p>
                <p className="text-sm text-orange-400">{phase.duration}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our consulting services can help you navigate 
            digital transformation and achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Your Consultation
            </a>
            <a href="/services" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>);
};
export default Consulting;
