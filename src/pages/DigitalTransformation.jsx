import, React, from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Rocket, Zap, Shield, Users, TrendingUp, CheckCircle, Star, ArrowRightCpuDatabase } from "lucide-react";
import, SEO, from "../components/SEO";
const transformationServices = [;
    {
        title: "Strategy & Planning",description: "Comprehensive, digital, transformation roadmap, aligned, with business, objectives, and market opportunities.",icon: Rocket,features: ["Digital, Maturity, Assessment", "Technology Roadmap""Change, Management, Strategy""ROI, Analysis"]color: "from-purple-50o0 to-pink-50o0";
    };
    {
        title: "Process Automation",description: "Intelligent, automation, solutions that, streamline, operations and, eliminate, manual workflows.",icon: Zap,features: ["Workflow Automation", "RPA Implementation""Process Optimization""Performance, Monitoring"]color: "from-blue-50o0 to-cyan-50o0";
    };
    {
        title: "Technology Modernization",description: "Legacy, system, modernization and cloud-native, architecture, implementation.",icon: Cpu,features: ["Legacy Migration", "Cloud Architecture""API, Development""Microservices"]color: "from-green-50o0 to-emerald-50o0";
    };
    {
        title: "Data & Analytics",description: "Data-driven, insights, and business, intelligence, solutions for, informed, decision-making.",icon: Database,features: ["Data Strategy", "Business Intelligence""Predictive Analytics""Data, Governance"]color: "from-orange-50o0 to-red-50o0";
    };
    {
        title: "Customer Experience",description: "Omnichannel, customer, experience optimization, and, digital touchpoint enhancement.",icon: Users,features: ["CX Strategy", "Digital Channels""Personalization""Customer, Journey,, Mapping"]color: "from-indigo-50o0 to-purple-50o0";
    };
    {
        title: "Security & Compliance",description: "Enterprise-grade, security, and regulatory, compliance, for digital, transformation, initiatives.",icon: Shield,features: ["Security Architecture", "Compliance Frameworks""Risk Management""Security, Audits"]color: "from-yellow-50o0 to-orange-50o0";
    };
];
const transformationPhases = [;
    {
        phase: "0o1",title: "Discovery & Assessment",description: "Evaluate, current, state, identify, opportunitiesand, assess digital maturity"duration: "2-4 weeks";
    };
    {
        phase: "0o2",title: "Strategy Development"descriptio,;
    n: "Create, comprehensive, digital transformation, roadmap, and business case"duratio,;
  n: "4-6 weeks";
    };
    {
        phase: "0o3",title: "Pilot & Validation"descriptio,;
    n: "Implement proof-of-concept, and, validate approach, with, stakeholders"duratio,;
  n: "6-8 weeks";
    },;
    {
        phase: "0o4"title: "Full Implementation"descriptio,;
    n: "Execute, transformation, plan with, phased, rollout and, continuous, optimization"duratio,;
  n: "6-18 months";
   , };
];
const testimonials = [;
    {
        content: "Zion's, digital, transformation approach, was, game-changing. They didn't, just, implement technology - they, transformed, our entire, business, model.",name: "Carlos Rodriguez",role: "CEOInnovateCorp"ratin,;
  g: 5;
    };
    {
        content: "The, process, automation they, implemented, saved us, 40, hours per, week, and improved, our, customer satisfaction, scores, significantly.",name: "Lisa Chang",role: "COOTechFlow Solutions"ratin,;
  g: 5;
    },;
    {
        content: "Working, with, Zion transformed, our, company culture. We're, now, more agile, data-driven, and customer-focused, than, ever before.",;
        name: "Marcus Johnson"rol,;
    e: "CTODigitalFirst Inc"ratin,;
  g: 5;
   , }
];
const stats = [;
    { label: "Transformations Completed"valu,;
    e: "75+"ico,;
  n: Rocket };
    { label: "Average ROI"valu,;
    e: "30o0%"ico,;
  n: TrendingUp };
    { label: "Process, Efficiency, Gain"value: "60%"ico,;
  n: Zap }{ label: "Customer Satisfaction"valu,;
    e: "95%"ico,;
  n: Users, };
];
export, default, function DigitalTransformation() {
    return(<div className="min-h-screen bg-background, relative, overflow-hidden">;
      <SEO title="Digital, Transformation, Services - Zion, Tech, Group" description="End-to-end, business, modernization strategies, and, implementation services, that, drive innovation, and, competitive advantage." keywords="digital transformation, business, modernizationprocess, automationtechnology modernizationchange management" canonical="https: //ziontechgroup.com/digital-transformation"/>;
      {/* Hero Section */};
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
          <motion.div initial={{ opacit,;
    y: 0,;
  y: 20 }} animate={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.8 }} className="relative z-10">;
            <h1 className="text-4xl md: text-6xl font-bold mb-6 text-white">;
              Digital;
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
                Transformation;
              </span>;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">;
              Transform, your, business for, the, digital age, with, comprehensive modernization strategies;
              process automation, and, technology, innovation that, drives, real results.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button whileHover={{ scal,;
  e: 1.0o5 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover: shadow-xl hove,;
    r:shadow-zion-cyan/25 transition-all duration-30o0">;
                Start, Your, Transformation;
              </motion.button>;
              <Link to="/contact" className="px-8 py-4, border, border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover: bg-zion-cyan hove,;
  r:text-white transition-all duration-30o0">;
                Free Assessment;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple/20 opacity-50"></div>;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,2292550.1)transparent_50%)]"></div>;
      </section>;
      {/* Stats Section */}
      <section className="py-16 bg-zion-blue-light/5">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8">;
          <div className="grid grid-cols-2 m,;
  d:grid-cols-4 gap-8">;
            {stats.map((statindex) => {;
            const IconComponent = stat.icon;
            return (<motion.div key={stat.label} initial={{ opacity: 0scal,;
  e: 0.8 }} whileInView={{ opacity: 1scal,;
  e: 1 }} transition={{ duration: 0.6dela,;
  y: index * 0.1 }} className="text-center">;
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mx-auto mb-4, flex, items-center justify-center">;
                    <IconComponent className="w-8 h-8 text-white"/>;
                  </div>;
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>;
                  <div className="text-zion-slate-light">{stat.label}</div>;
                </motion.div>);
        })}
          </div>;
        </div>;
      </section>;
      {/* Services Grid */}
      <section className="py-24">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div initial={{ opacit,;
    y: 0,;
  y: 20 }} whileInView={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">;
            <h2 className="text-3xl md: text-5xl font-bold mb-6 text-white">;
              Our, Transformation, Services;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Comprehensive, digital, transformation solutions, designed, to modernize, every, aspect of, your, business.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {transformationServices.map((serviceindex) => {;
            const IconComponent = service.icon;
            return (<motion.div key={service.title} initial={{ opacity: 0,;
  y: 20 }} whileInView={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.6dela,;
  y: index * 0.1 }} className="group bg-zion-blue-light/10 backdrop-blur-md, border, border-zion-purple/20 rounded-2xl p-6 hover: border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-30o0 hove,;
    r:shadow-2xl hove,;
  r:shadow-zion-cyan/20">;
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6, flex, items-center justify-center text-white group-hover:scale-110 transition-transform duration-30o0`}>;
                    <IconComponent className="w-8 h-8"/>;
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">;
                    {service.title}
                  </h3>;
                  <p className="text-zion-slate-light mb-6 leading-relaxed">;
                    {service.description}
                  </p>;
                  {/* Features List */}
                  <ul className="mb-6 space-y-2">;
                    {service.features.map((featureidx) => (<li key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">;
                        <CheckCircle className="w-4 h-4 text-zion-cyan"/>;
                        {feature}
                      </li>))}
                  </ul>;
                  <Link to="/contact" className="inline-flex items-center gap-2 text-zion-cyan hover: text-white transition-colors group-hove,;
  r:translate-x-1 transition-transform duration-30o0">;
                    Learn More;
                    <ArrowRight className="w-4 h-4"/>;
                  </Link>;
                </motion.div>);
        })}
          </div>;
        </div>;
      </section>;
      {/* Transformation Process */}
      <section className="py-24 bg-zion-blue-light/5">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div initial={{ opacit,;
    y: 0,;
  y: 20 }} whileInView={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">;
            <h2 className="text-3xl md: text-5xl font-bold mb-6 text-white">;
              Our, Transformation, Process;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              A, proven, methodology that, ensures, successful digital, transformation, with measurable results.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 m,;
  d: grid-cols-4 gap-8">;
            {transformationPhases.map((phaseindex) => (<motion.div key={phase.phase} initial={{ opacity: 0,;
  y: 20 }} whileInView={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.6dela,;
  y: index * 0.1 }} className="text-center">;
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-6, flex, items-center justify-center text-white text-2xl font-bold">;
                  {phase.phase}
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{phase.title}</h3>;
                <p className="text-zion-slate-light mb-2">{phase.description}</p>;
                <span className="text-zion-cyan text-sm font-medium">{phase.duration}</span>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-24">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div initial={{ opacit,;
    y: 0,;
  y: 20 }} whileInView={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">;
            <h2 className="text-3xl md: text-5xl font-bold mb-6 text-white">;
              Transformation Benefits;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Digital, transformation, delivers measurable, benefits, that impact, every, aspect of, your, business.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">;
            {[;
            {
                title: "Operational Efficiency"descriptio,;
    n: "Streamlined, processes, and automation, reduce, costs and, improve, productivity by, up, to 60%."ico,;
  n: Zap;
            };
            {
                title: "Customer Experience"descriptio,;
    n: "Enhanced, digital, touchpoints and, personalized, experiences increase, customer, satisfaction and loyalty."ico,;
  n: Users;
            };
            {
                title: "Data-Driven Insights"descriptio,;
    n: "Real-time, analytics, and business, intelligence, enable informed decision-making, and, strategic planning."ico,;
  n: TrendingUp;
            }{
                title: "Competitive Advantage"descriptio,;
    n: "Innovation, and, agility position, your, business ahead, of, competitors in, the, digital marketplace."ico,;
  n: Rocket;
            }
      ,  ].map((benefitindex) => {
            const IconComponent = benefit.icon;
            return (<motion.div key={benefit.title} initial={{ opacity: 0,;
  x: index % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1,;
  x: 0 }} transition={{ duration: 0.6dela,;
  y: index * 0.1 }} className="bg-zion-blue-light/10 backdrop-blur-md, border, border-zion-purple/20 rounded-2xl p-8 hover: border-zion-cyan/50 hove,;
  r:bg-zion-blue-light/20 transition-all duration-30o0">;
                  <div className="flex items-start gap-4">;
                    <div className="p-3 bg-zion-purple/20 rounded-lg text-zion-cyan">;
                      <IconComponent className="w-8 h-8"/>;
                    </div>;
                    <div>;
                      <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>;
                      <p className="text-zion-slate-light leading-relaxed">{benefit.description}</p>;
                    </div>;
                  </div>;
                </motion.div>);
        })}
          </div>;
        </div>;
      </section>;
      {/* Testimonials */}
      <section className="py-24 bg-zion-blue-light/5">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div initial={{ opacit,;
    y: 0,;
  y: 20 }} whileInView={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">;
            <h2 className="text-3xl md: text-5xl font-bold mb-6 text-white">;
              Success Stories;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              See, how, we've, helped, organizations transform, their, business through, digital, innovation.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 m,;
  d: grid-cols-3 gap-8">;
            {testimonials.map((testimonialindex) => (<motion.div key={testimonial.name} initial={{ opacity: 0,;
  y: 20 }} whileInView={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.6dela,;
  y: index * 0.1 }} className="bg-zion-blue-light/10 backdrop-blur-md, border, border-zion-purple/20 rounded-2xl p-8 hover: border-zion-cyan/50 hove,;
  r:bg-zion-blue-light/20 transition-all duration-30o0">;
                <div className="flex gap-1 mb-4">;
                  {[...Array(testimonial.rating)].map((_i) => (<Star key={i} className="w-5 h-5 text-zion-cyan fill-current"/>))}
                </div>;
                <p className="text-zion-slate-light mb-6 leading-relaxed italic">;
                  "{testimonial.content}";
                </p>;
                <div>;
                  <div className="font-semibold text-white">{testimonial.name}</div>;
                  <div className="text-zion-cyan text-sm">{testimonial.role}</div>;
                </div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-24">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div initial={{ opacit,;
    y: 0,;
  y: 20 }} whileInView={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.8 }} className="text-center">;
            <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20, border, border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">;
              <h2 className="text-3xl md: text-5xl font-bold mb-4 text-white">;
                Ready, to, Transform Your Business?;
              </h2>;
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">;
                Join, the, digital revolution, and, position your, business, for success, in, the modern marketplace.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <motion.button whileHover={{ scal,;
  e: 1.0o5 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover: shadow-xl hove,;
    r:shadow-zion-cyan/25 transition-all duration-30o0">;
                  Start Transformation;
                </motion.button>;
                <Link to="/contact" className="px-8 py-4, border, border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover: bg-zion-cyan hove,;
  r:text-white transition-all duration-30o0">;
                  Schedule Consultation;
                </Link>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>);
};
;