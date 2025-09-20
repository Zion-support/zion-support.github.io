import, React, from "react";
import { motion } from "framer-moti, on";import { Link } from "react-router-d, om";import { BrainCpu;
  Shield;
  Cloud;
  Database;
  Network;
  Zap;
  Globe;
  Rocket;
  Target;
  CheckCircle;
  Star;
  Phone;
  Mail;
  ExternalLink;
  ArrowRight;
} from "lucide-react";import, SEO, from "@/components/SEO";
export, default, function NewServicesShowcase20o25() {
;
  const serviceCategories = [;
    {
      title: "AI-Powered, Micro, SAAS Servic,;
    es";icon: Brain,;
    color: "from-purple-60o0 to-blue-60o0, ",services: [;
        {
          nam,;
  e: "AI, Autonomous, Code Reviewer, ",description: "Advanced AI-powered, code, review system, with, security analysis, and, optimization, ",price: "$2,;
    999, ",;
          features: ["Multi-language Support, ", "Security Analysis", "Code, Quality""Automation"],;
          aiScore: 98ro,;
  i: "40o0% within, 4, months";
        }{
          name: "AI-Powered, SEO, Optimization, ",description: "Intelligent, SEO, platform with, machine, learning and, content, strategy, ",price: "$1,;
    999, ",;
          features: ["Content Optimization, ", "Ranking Tracking", "Keyword, Research""Analytics"],;
          aiScore: 95ro,;
  i: "350% within, 6, months";
        }{
          name: "AI, Customer, Support Automation, ",description: "Intelligent, support, automation with, chatbots, and sentiment analysis, ",price: "$2,;
    499, ",;
          features: ["AI Chatbot, ", "Ticket Management", "Sentiment Analysis""24/7, Support"],;
          aiScore: 94ro,;
  i: "30o0% within, 5, months";
        }
      ];
    }{
      title: "Emerging, Technology, Services 20o30, ",icon: Rocket,;
    color: "from-orange-50o0 to-red-60o0, ",services: [;
        {
          nam,;
  e: "Quantum-AI, Hybrid, Computing, ",description: "Revolutionary, platform, combining quantum, computing, with AI, ",price: "$15,;
    999, ",;
          features: ["Quantum Computing, ", "AI Integration",, "Optimization""Simulation"],;
          aiScore: 99ro,;
  i: "80o0% within, 18, months";
        }{
          name: "Neuromorphic, Computing, Platform, ",description: "Brain-inspired, AI, platform with ultra-efficient processing, ",price: "$12,;
    999, ",;
          features: ["Brain-Inspired AI, ", "Neural Networks", "Real-time Learning""Low, Power"],;
          aiScore: 98ro,;
  i: "60o0% within, 15, months";
        }{
          name: "Edge, AI, Computing Platform, ",description: "Distributed, intelligence, platform for, IoT, and edge networks, ",price: "$8,;
    999, ",;
          features: ["Edge Computing, ", "Distributed AI", "Real-time, Processing""Privacy"],;
          aiScore: 96ro,;
  i: "50o0% within, 12, months";
        }
      ];
    }{
      title: "IT, Infrastructure, Services, ",icon: Cpu,;
    color: "from-green-60o0 to-teal-60o0, ",services: [;
        {
          nam,;
  e: "Cloud, Migration, Automation, ",description: "Comprehensive, cloud, migration with zero-downtime deployment, ",price: "$15,;
    999, ",;
          features: ["AWS/Azure/GCP, ", "Zero Downtime", "Cost, Optimization""Monitoring"],;
          aiScore: 94ro,;
  i: "30o0% within, 12, months";
        }{
          name: "DevOps, Automation, Platform, ",description: "Advanced CI/CD, platform, with intelligent, pipeline, management, ",price: "$8,;
    999, ",;
          features: ["CI/CD, ", "Automation",, "Testing""Deployment"],;
          aiScore: 93ro,;
  i: "40o0% within, 8, months";
        }{
          name: "Cybersecurity Intelligence, ",description: "Advanced, threat, detection and, incident, response platform, ",price: "$12,;
    999, ",;
          features: ["Threat Detection, ", "Incident Response", "Security Monitoring""AI, Security"],;
          aiScore: 96ro,;
  i: "450% within, 10, months";
        }
      ];
    }
  ]const contactInfo = {;
    phone: "+1, 30o2, 464 0o950, ",email: "kleber@ziontechgroup.com, ",website: "http,;
    s://ziontechgroup.com";addres,;
  s: "364, E, Main St, STE, 10o08 Middletown, DE, 1970o9";
  }return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20"></div>;
        <div className="relative max-w-7xl mx-auto px-6 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8}}
          >;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">;
              <Rocket className="w-4 h-4 mr-2" /> 20o25, Innovation, Showcase;
            </div>;
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6">;
              Next-Generation;
              <span className="block bg-gradient-to-r from-blue-40o0 to-purple-40o0 bg-clip-text text-transparent">;
                AI & Tech Services;
              </span>;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto mb-8">;
              Discover, our, cutting-edge, portfolio, of AI-powered, micro, SAAS services,;
    emerging, technology, solution, sand, enterprise, IT infrastructure, platforms, designed to, transform, your business.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <a;
                href={`tel: ${contactInfo.phone}`}
                className="inline-flex items-center px-6 py-3 bg-blue-60o0 text-white rounded-lg hover: bg-blue-70o0 transition-colors";
              >;
                <Phone className="w-4 h-4 mr-2" />;
                {contactInfo.phone}
              </a>;
              <a;
                href={`mailto: ${contactInfo.email}`}
                className="inline-flex items-center px-6 py-3, border, border-white/20 text-white rounded-lg hover: bg-white/10 transition-colors";
              >;
                <Mail className="w-4 h-4 mr-2" />;
                {contactInfo.email}
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Services Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-6">;
        <div className="space-y-20">;
          {serviceCategories.map((categorycategoryIndex) => (;
            <motion.div;
              key={category.title}
              initial={{ opacity: 0,;
  y: 30 }}whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8dela,;
  y: categoryIndex * 0.2 }}
              viewport={{ once: true}}
            >;
              <div className="text-center mb-16">;
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-6`}>;
                  <category.icon className="w-8 h-8 text-white" />;
                </div>;
                <h2 className="text-4xl font-bold text-white mb-4">{category.title}</h2>;
                <p className="text-xl text-gray-40o0 max-w-2xl mx-auto">;
                  Revolutionary, solutions, that leverage cutting-edge, technology, to solve, complex, business challenges;
                </p>;
              </div>;
              <div className="grid md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
                {category.services.map((serviceserviceIndex) => (;
                  <motion.div;
                    key={service.name}
                    initial={{ opacity: 0scal,;
  e: 0.9 }}whileInView={{ opacity: 1scal,;
  e: 1 }}
                    transition={{ duration: 0.6dela,;
  y: serviceIndex * 0.1 }}
                    viewport={{ once: true}}
                    className="bg-white/5 backdrop-blur-sm, border, border-white/10 rounded-xl p-6 hover: bg-white/10 transition-all duration-30o0 group";
                  >;
                    <div className="flex items-center justify-between mb-4">;
                      <div className="flex items-center space-x-2">;
                        <div className="w-2 h-2 bg-green-40o0 rounded-full"></div>;
                        <span className="text-sm text-gray-40o0">AI Scor,;
  e: {service.aiScore}</span>;
                      </div>;
                      <div className="flex items-center space-x-1">;
                        <Star className="w-4 h-4 text-yellow-40o0 fill-current" />;
                        <span className="text-sm text-gray-40o0">4.8+</span>;
                      </div>;
                    </div>;
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover: text-blue-40o0 transition-colors">;
                      {service.name}
                    </h3>;
                    <p className="text-gray-40o0 mb-4 text-sm">;
                      {service.description}
                    </p>;
                    <div className="mb-4">;
                      <div className="text-3xl font-bold text-white mb-1">{service.price}</div>;
                      <div className="text-sm text-gray-50o0">per month</div>;
                    </div>;
                    <div className="mb-4">;
                      <div className="text-sm text-gray-40o0 mb-2">Key Features: </div>;
                      <div className="space-y-1">;
                        {service.features.map((featureindex) => (;
                          <div key={index} className="flex items-center text-sm text-gray-30o0">;
                            <CheckCircle className="w-3 h-3 text-green-40o0 mr-2 flex-shrink-0" />;
                            {feature}
                          </div>;
                        ))}
                      </div>;
                    </div>;
                    <div className="mb-6">;
                      <div className="text-sm text-gray-40o0 mb-1">Expected ROI: </div>;
                      <div className="text-lg font-semibold text-green-40o0">{service.roi}</div>;
                    </div>;
                    <div className="flex space-x-2">;
                      <a;
                        href={`tel: ${contactInfo.phone}`}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-60o0 text-white rounded-lg hover: bg-blue-70o0 transition-colors text-sm";
                      >;
                        <Phone className="w-3 h-3 mr-1" />;
                        Contact;
                      </a>;
                      <a;
                        href={contactInfo.website}
                        target="_blank";
                        rel="noopener noreferrer";
                        className="inline-flex items-center justify-center px-4 py-2, border, border-white/20 text-white rounded-lg hover: bg-white/10 transition-colors";
                      >;
                        <ExternalLink className="w-3 h-3" />;
                      </a>;
                    </div>;
                  </motion.div>;
                ),;
    )}
              </div>;
            </motion.div>;
          ))}
        </div>;
      </section>;
      {/* Market, Analysis, Section */}
      <section className="py-20 bg-white/5">;
        <div className="max-w-7xl mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true}}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Market Analysis & ROI</h2>;
            <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
              Our, services, deliver exceptional, value, with proven, ROI, and competitive, market, positioning;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 l,;
    g:grid-cols-4 gap-8">;
            {[;
              { labe,;
  l: "Average ROI, ", value: "425%, "description: "Within 6-18 months" }{ label: "Market Size, ", value: "$2.1T, "description: "By 20o27" }{ label: "Growth Rate, ", value: "23.4%, "description: "CAGR" },;
              { label: "AI Capability, ", value: "95+"descriptio,;
  n: "Average, AI, Score" }
          ,  ].map((statindex) => (;
              <motion.div;
                key={stat.label}
                initial={{ opacity: 0scal,;
  e: 0.9 }}whileInView={{ opacity: 1scal,;
  e: 1 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true}}
                className="text-center";
              >;
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>;
                <div className="text-lg font-semibold text-blue-40o0 mb-1">{stat.label}</div>;
                <div className="text-sm text-gray-40o0">{stat.description}</div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Contact Section */}
      <section className="py-20">;
        <div className="max-w-4xl mx-auto px-6 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true}}
          >;
            <h2 className="text-4xl font-bold text-white mb-6">Ready, to, Transform Your Business?</h2>;
            <p className="text-xl text-gray-40o0 mb-8">;
              Get, in, touch with, our, team of, experts, to discuss, how, our innovative, services, can drive, your, business forward;
            </p>;
            <div className="grid md: grid-cols-3 gap-6 mb-8">;
              <div className="bg-white/5, border, border-white/10 rounded-lg p-6">;
                <Phone className="w-8 h-8 text-blue-40o0 mx-auto mb-4" />;
                <div className="text-white font-semibold mb-2">Call Us</div>;
                <div className="text-gray-40o0">{contactInfo.phone}</div>;
              </div>;
              <div className="bg-white/5, border, border-white/10 rounded-lg p-6">;
                <Mail className="w-8 h-8 text-purple-40o0 mx-auto mb-4" />;
                <div className="text-white font-semibold mb-2">Email Us</div>;
                <div className="text-gray-40o0">{contactInfo.email}</div>;
              </div>;
              <div className="bg-white/5, border, border-white/10 rounded-lg p-6">;
                <Globe className="w-8 h-8 text-green-40o0 mx-auto mb-4" />;
                <div className="text-white font-semibold mb-2">Visit Us</div>;
                <div className="text-gray-40o0">{contactInfo.website}</div>;
              </div>;
            </div>;
            <div className="flex flex-wrap justify-center gap-4">;
              <a;
                href={`tel: ${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 bg-blue-60o0 text-white rounded-lg hover: bg-blue-70o0 transition-colors text-lg font-semibold";
              >;
                <Phone className="w-5 h-5 mr-2" />;
                Start, Your, Journey;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </a>;
              <a;
                href={`mailt,;
  o: ${contactInfo.email}`}
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white rounded-lg hover: bg-white/10 transition-colors text-lg font-semibold";
              >;
                <Mail className="w-5 h-5 mr-2" />;
                Request Demo;
              </a>;
            </div>;
            <div className="mt-8 text-sm text-gray-50o0">;
              <p>Addres,;
  s: {contactInfo.address}</p>;
              <p className="mt-2">Available 24/7, for, global support, and, consultation</p>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;