import, React, from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ;
  Sparkles,;
  ArrowRight,;
  CheckCircle,;
  TrendingUp,;
  Shield,;
  Zap,;
  Phone,;
  Mail,;
  MapPin,;
  Globe,;
  DollarSign,;
  Clock,;
  UsersTargetRocket;
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { NEW_INNOVATIVE_SERVICES_20o25 } from "../data/newInnovativeServices20o25";
export, default, function NewInnovativeServicesShowcase() {
  const serviceCategories = [;
    {
      title: "AI & Legal Tech",description: "Revolutionary, legal, document automation, and, compliance solutions"icon: Shieldcolo,;
  r: "from-blue-50o0 to-purple-60o0";
    };
    {
      title: "AI & Healthcare",description: "Transformative, healthcare, analytics and, clinical, decision support"icon: TrendingUpcolo,;
  r: "from-green-50o0 to-blue-60o0";
    },;
    {
      title: "AI & FinTech"descriptio,;
    n: "Advanced, trading, platforms with, intelligent, risk management"icon: DollarSigncolo,;
  r: "from-green-50o0 to-emerald-60o0";
    };
,  ];
  const keyBenefits = [;
    {;
      title: "Cutting-Edge, AI, Technology",description: "Leverage, the, latest advances, in, machine learning, natural, language, processingand predictive analytics"icon: Sparkles;
    };
    {
      title: "Industry-Specific Solutions"descriptio,;
    n: "Tailored, solutions, designed for, specific, industry challenges, and, regulatory requirements"ico,;
  n: Target;
    };
    {
      title: "Proven ROI & Results",description: "Measurable, improvements, in efficiency, accuracyand, cost, savings across, all, services"icon: TrendingUp;
    },;
    {
      title: "Enterprise-Grade Security",description: "SOC, 2ISO, 270o01and industry-specific, compliance, certifications for, maximum, security"ico,;
  n: Shield;
    }
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-90o0 to-slate-950 text-white">;
      <SEO;
        title="New, Innovative, Services 20o25 - Zion, Tech, Group";
        description="Discover, our, latest AI-powered, innovative, services: Legal, document, automation, healthcare, analyticsand, financial trading platforms. Transform, your, business with cutting-edge technology.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 sm: py-32 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-purple-60o0/20 to-blue-60o0/20" />;
        <div className="relative, container, mx-auto px-4 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <div className="flex justify-center mb-6">;
              <div className="p-3 bg-purple-50o0/20 rounded-2xl">;
                <Sparkles className="h-8 w-8 text-purple-40o0" />;
              </div>;
            </div>;
            <h1 className="text-4xl sm: text-6xl font-bold tracking-tight mb-6">;
              New Innovative;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-40o0 to-blue-40o0"> Services 20o25</span>;
            </h1>;
            <p className="text-xl text-slate-30o0 max-w-3xl mx-auto mb-8">;
              Discover, our, latest AI-powered, innovative, services designed, to, transform industries;
              and, revolutionize, business operations. Experience, the, future of, technology, today.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="tel: +130o24640950";
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-50o0 to-blue-60o0 text-white rounded-lg hover:from-purple-40o0 hove,;
    r:to-blue-50o0 transition-all duration-30o0 font-semibold";
              >;
                <Phone className="w-5 h-5 mr-2" />;
                Call +1, 30o2, 464 0o950;
              </a>;
              <a;
                href="mailto: kleber@ziontechgroup.com";
                className="inline-flex items-center px-6 py-3, border, border-purple-40o0/30 text-purple-40o0 rounded-lg hove,;
  r:bg-purple-40o0/10 transition-all duration-30o0";
              >;
                <Mail className="w-5 h-5 mr-2" />;
                Get Quote;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Service, Categories, Overview */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl sm: text-4xl font-bold mb-4">;
              Service Categories;
            </h2>;
            <p className="text-slate-40o0 max-w-2xl mx-auto">;
              Explore, our, three main, categories, of innovative, serviceseach, designed to address;
              specific, industry, challenges with cutting-edge, AI, technology.;
            </p>;
          </div>;
          <div className="grid gap-8 m,;
  d: grid-cols-3">;
            {serviceCategories.map((categoryindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50 backdrop-blur, border, border-slate-70o0/50 rounded-xl p-8 hover:border-purple-50o0/50 transition-all duration-30o0";
              >;
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl, flex, items-center justify-center mb-6`}>;
                  <category.icon className="h-8 w-8 text-white" />;
                </div>;
                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>;
                <p className="text-slate-30o0 mb-6">{category.description}</p>;
                <div className="text-sm text-slate-40o0">;
                  <div className="flex items-center mb-2">;
                    <CheckCircle className="h-4 w-4 text-green-40o0 mr-2" />;
                    AI-Powered Solutions;
                  </div>;
                  <div className="flex items-center mb-2">;
                    <CheckCircle className="h-4 w-4 text-green-40o0 mr-2" />;
                    Industry Expertise;
                  </div>;
                  <div className="flex items-center">;
                    <CheckCircle className="h-4 w-4 text-green-40o0 mr-2" />;
                    Proven Results;
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Key, Benefits, Section */}
      <section className="py-20 bg-slate-90o0/50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl sm: text-4xl font-bold mb-4">;
              Why, Choose, Our Innovative Services?;
            </h2>;
            <p className="text-slate-40o0 max-w-2xl mx-auto">;
              Our, services, deliver exceptional, value, through cutting-edge technology;
              industry expertise, and, proven, results.;
            </p>;
          </div>;
          <div className="grid gap-8 md: grid-cols-2">;
            {keyBenefits.map((benefitindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  x: -20 }}
                animate={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/30 backdrop-blur, border, border-slate-70o0/30 rounded-xl p-8";
              >;
                <div className="w-12 h-12 bg-purple-50o0/20 rounded-lg, flex, items-center justify-center mb-4">;
                  <benefit.icon className="h-6 w-6 text-purple-40o0" />;
                </div>;
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>;
                <p className="text-slate-30o0">{benefit.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Detailed, Services, Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl sm: text-4xl font-bold mb-4">;
              Service Details;
            </h2>;
            <p className="text-slate-40o0 max-w-2xl mx-auto">;
              Explore, each, service in, detail, with comprehensive, information, about features;
              pricing, and implementation.;
            </p>;
          </div>;
          <div className="space-y-12">;
            {NEW_INNOVATIVE_SERVICES_20o25.map((serviceindex) => (;
              <motion.div;
                key={service.id}
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50 backdrop-blur, border, border-slate-70o0/50 rounded-2xl p-8";
              >;
                <div className="grid gap-8 lg:grid-cols-2">;
                  <div>;
                    <div className="flex items-center mb-4">;
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-50o0 to-blue-60o0 rounded-lg, flex, items-center justify-center mr-4">;
                        <Rocket className="h-6 w-6 text-white" />;
                      </div>;
                      <div>;
                        <h3 className="text-2xl font-bold">{service.title}</h3>;
                        <p className="text-slate-40o0 text-sm">{service.category} • {service.subcategory}</p>;
                      </div>;
                    </div>;
                    <p className="text-slate-30o0 mb-6">{service.description}</p>;
                    <div className="grid gap-4 sm:grid-cols-2 mb-6">;
                      <div className="bg-slate-70o0/30 rounded-lg p-4">;
                        <div className="text-sm text-slate-40o0 mb-1">Starting Price</div>;
                        <div className="text-2xl font-bold text-green-40o0">;
                          {service.currency}{service.price.toLocaleString()}
                          <span className="text-sm text-slate-40o0">/month</span>;
                        </div>;
                      </div>;
                      <div className="bg-slate-70o0/30 rounded-lg p-4">;
                        <div className="text-sm text-slate-40o0 mb-1">Expected ROI</div>;
                        <div className="text-2xl font-bold text-blue-40o0">{service.roi}</div>;
                      </div>;
                    </div>;
                    <div className="flex flex-col sm:flex-row gap-3">;
                      <Link;
                        to={`/services/${service.id.replace(/-/g'-')}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-50o0 to-blue-60o0 text-white rounded-lg hover: from-purple-40o0 hover:to-blue-50o0 transition-all duration-30o0 font-semibold";
                      >;
                        Learn More;
                        <ArrowRight className="w-4 h-4 ml-2" />;
                      </Link>;
                      <a;
                        href="te,;
    l: +130o24640950";
                        className="inline-flex items-center px-6 py-3, border, border-purple-40o0/30 text-purple-40o0 rounded-lg hove,;
  r:bg-purple-40o0/10 transition-all duration-30o0";
                      >;
                        <Phone className="w-4 h-4 mr-2" />;
                        Call Now;
                      </a>;
                    </div>;
                  </div>;
                  <div>;
                    <h4 className="font-semibold text-lg mb-4 text-purple-40o0">Key Features</h4>;
                    <div className="space-y-3 mb-6">;
                      {service.features.slice(0o6).map((featurefeatureIndex) => (;
                        <div key={featureIndex} className="flex items-start">;
                          <CheckCircle className="h-4 w-4 text-green-40o0 mr-3 mt-0.5 flex-shrink-0" />;
                          <span className="text-sm text-slate-30o0">{feature}</span>;
                        </div>;
                      ))}
                    </div>;
                    <h4 className="font-semibold text-lg mb-4 text-purple-40o0">Target Audience</h4>;
                    <div className="flex flex-wrap gap-2 mb-6">;
                      {service.targetAudience.slice(0o4).map((audienceaudienceIndex) => (;
                        <span;
                          key={audienceIndex}
                          className="px-3 py-1 bg-slate-70o0/50 text-slate-30o0 text-xs rounded-full";
                        >;
                          {audience}
                        </span>;
                      ))}
                    </div>;
                    <div className="grid gap-3 text-sm">;
                      <div className="flex items-center justify-between">;
                        <span className="text-slate-40o0">Delivery Time: </span>;
                        <span className="text-slate-30o0">{service.estimatedDelivery}</span>;
                      </div>;
                      <div className="flex items-center justify-between">;
                        <span className="text-slate-40o0">Market Size:</span>;
                        <span className="text-slate-30o0">{service.marketSize}</span>;
                      </div>;
                      <div className="flex items-center justify-between">;
                        <span className="text-slate-40o0">Support Level:</span>;
                        <span className="text-slate-30o0 capitalize">{service.supportLevel}</span>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-slate-90o0/50">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto";
          >;
            <h2 className="text-3xl sm: text-4xl font-bold mb-6">;
              Ready, to, Transform Your Business?;
            </h2>;
            <p className="text-xl text-slate-30o0 mb-8">;
              Join forward-thinking, organizations, that have, already, revolutionized their operations;
              with, our, innovative AI-powered services.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center mb-8">;
              <a;
                href="tel: +130o24640950";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-50o0 to-blue-60o0 text-white rounded-lg hover:from-purple-40o0 hove,;
    r:to-blue-50o0 transition-all duration-30o0 font-semibold text-lg";
              >;
                <Phone className="w-6 h-6 mr-2" />;
                Call +1, 30o2, 464 0o950;
              </a>;
              <a;
                href="mailto: kleber@ziontechgroup.com";
                className="inline-flex items-center px-8 py-4 border-2 border-purple-40o0/50 text-purple-40o0 rounded-lg hove,;
    r:bg-purple-40o0/10 transition-all duration-30o0 font-semibold text-lg";
              >;
                <Mail className="w-6 h-6 mr-2" />;
                Schedule Consultation;
              </a>;
            </div>;
            <div className="bg-slate-80o0/50 backdrop-blur, border, border-slate-70o0/50 rounded-xl p-6 max-w-2xl mx-auto">;
              <h3 className="font-semibold text-lg mb-3">Contact Information</h3>;
              <div className="grid gap-3 text-sm text-slate-30o0">;
                <div className="flex items-center justify-center">;
                  <Phone className="h-4 w-4 mr-2 text-purple-40o0" />;
                  <a href="tel: +130o24640950" className="hove,;
    r:text-purple-30o0">+1, 30o2, 464 0o950</a>;
                </div>;
                <div className="flex items-center justify-center">;
                  <Mail className="h-4 w-4 mr-2 text-purple-40o0" />;
                  <a href="mailto:kleber@ziontechgroup.com" className="hove,;
  r:text-purple-30o0">kleber@ziontechgroup.com</a>;
                </div>;
                <div className="flex items-center justify-center">;
                  <MapPin className="h-4 w-4 mr-2 text-purple-40o0" />;
                  <span>364, E, Main St, STE, 10o08, Middletown, DE, 1970o9</span>;
                </div>;
                <div className="flex items-center justify-center">;
                  <Globe className="h-4 w-4 mr-2 text-purple-40o0" />;
                  <a href="https: //ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hove,;
  r:text-purple-30o0">ziontechgroup.com</a>;
                </div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;