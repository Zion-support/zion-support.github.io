import, React, from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ;
  MessageCircle,;
  Users,;
  Ticket,;
  Clock,;
  CheckCircle,;
  AlertCircle,;
  Search,;
  Filter,;
  ArrowRight,;
  Star,;
  Globe,;
  Cpu,;
  Shield,;
  Cloud,;
  Zap,;
  Target,;
  Activity,;
  BarChart3,;
  Settings,;
  Bell,;
  Download,;
  Upload,;
  RefreshCw,;
  Eye,;
  Lock,;
  Database,;
  Network,;
  Smartphone,;
  Monitor,;
  Headphones,;
  Mail,;
  Phone,;
  Video,;
  FileText,;
  Calendar,;
  Tag,;
  UserCheck,;
  UserX,;
  TrendingUpPieChartLineChart;
} from "lucide-react";
export, default, function HelpdeskPlatform() {
  const features = [;
    {
      icon: Ticket,title: "Ticket Management"descriptio,;
    n: "Comprehensive, ticket, tracking and, resolution, workflow"colo,;
  r: "from-blue-50o0 to-cyan-50o0";
    };
    {
      icon: Users,title: "Team Collaboration"descriptio,;
    n: "Multi-agent, support, with role-based, access, control"colo,;
  r: "from-green-50o0 to-emerald-50o0";
    };
    {
      icon: Clock,title: "Response, Time, Tracking"description: "Monitor, and, optimize support, response, times"colo,;
  r: "from-yellow-50o0 to-orange-50o0";
    };
    {
      icon: BarChart3,title: "Analytics & Reporting"descriptio,;
    n: "Comprehensive, performance, metrics and insights"colo,;
  r: "from-purple-50o0 to-pink-50o0";
    };
    {
      icon: Shield,title: "Security & Compliance"descriptio,;
    n: "Enterprise-grade, security, and data protection"colo,;
  r: "from-red-50o0 to-pink-50o0";
    },;
    {
      icon: Cloudtitle: "Cloud Platform"descriptio,;
    n: "Scalable, cloud, infrastructure for, global, support"colo,;
  r: "from-indigo-50o0 to-blue-50o0";
    };
,  ];
  const services = [;
    {
      title: "Customer Support",description: "Multi-channel, customer, support and, ticket, management",icon: MessageCircle,benefits: ["Email support""Live chat""Phone support""Social, media,, integration"];
    },;
    {
      title: "Internal, IT, Support",description: "Employee, IT, support and, technical, assistance",icon: Cpu,benefits: ["Hardware support""Software assistance""Network issues""Access, management"];
    },;
    {
      title: "Knowledge Base",description: "Self-service, knowledge, base and documentation",icon: FileText,benefits: ["FAQ management""Documentation""Video tutorials""Search, functionality"];
    },;
    {
      title: "Automation & AI",description: "AI-powered, automation, and intelligent routing",icon: Brain,benefits: ["Auto-routing""Chatbots""Predictive analytics""Smart, suggestions"];
    }
  ],;
  const integrations = [;
    "CRM Systems", "Email Platforms", "Chat Tools", "Social Media", ;
    "Project Management", "Analytics Tools", "Cloud Services", "Mobile Apps", "API Access""Webhooks";
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8 overflow-hidden">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Helpdesk Platform;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto mb-8">;
              Streamline, your, support operations, with, our comprehensive, helpdesk, platform.;
              Manage tickets, collaborate, with, teamsand deliver, exceptional, customer service.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">;
              <Link;
                to="/contact";
                className="px-8 py-4 bg-gradient-to-r from-green-50o0 to-emerald-50o0 hover: from-green-60o0 hove,;
    r:to-emerald-60o0 text-white font-bold rounded-xl transition-all duration-30o0, transform, hover: scale-10o5 shadow-lg hove,;
    r:shadow-green-50o0/25, flex, items-center space-x-2";
              >;
                <span>Get Started</span>;
                <ArrowRight className="w-5 h-5" />;
              </Link>;
              <Link;
                to="/services";
                className="px-8 py-4 bg-white/10 backdrop-blur-sm, border, border-green-40o0/30 hover: bg-white/20 text-white font-bold rounded-xl transition-all duration-30o0 hove,;
  r:border-green-40o0/50, flex, items-center space-x-2";
              >;
                <span>Explore Services</span>;
                <ArrowRight className="w-5 h-5" />;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Platform Features;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, helpdesk, platform provides, everything, you need, to, deliver exceptional;
              customer, support, and manage, internal, IT operations efficiently.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {features.map((featureindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm, border, border-green-40o0/20 rounded-2xl p-6 hover: bg-white/10 hove,;
  r:border-green-40o0/40 transition-all duration-30o0";
              >;
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl, flex, items-center justify-center mb-6`}>;
                  <feature.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Services Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Our, Helpdesk, Services;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Comprehensive, helpdesk, solutions designed, to, improve support, efficiency, and customer satisfaction.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 l,;
  g: grid-cols-2 gap-8">;
            {services.map((serviceindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  x: index % 2 === 0 ? -30 : 30 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm, border, border-green-40o0/20 rounded-2xl p-8 hover: bg-white/10 hove,;
  r:border-green-40o0/40 transition-all duration-30o0";
              >;
                <div className="flex items-center mb-6">;
                  <div className="w-12 h-12 bg-gradient-to-r from-green-50o0 to-emerald-50o0 rounded-xl, flex, items-center justify-center mr-4">;
                    <service.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>;
                </div>;
                <p className="text-gray-30o0 mb-6">{service.description}</p>;
                <ul className="space-y-2">;
                  {service.benefits.map((benefitbenefitIndex) => (;
                    <li key={benefitIndex} className="flex items-center text-gray-30o0">;
                      <CheckCircle className="w-5 h-5 text-green-40o0 mr-3 flex-shrink-0" />;
                      {benefit}
                    </li>;
                  ))}
                </ul>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Integrations Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Integrations & Connectivity;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Seamlessly, integrate, with your, existing, tools and, workflows, for maximum efficiency.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-2 m,;
  d: grid-cols-5 gap-6">;
            {integrations.map((integrationindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0scal,;
  e: 0.8 }};
                whileInView={{ opacity: 1scal,;
  e: 1 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm, border, border-green-40o0/20 rounded-xl p-4 text-center hover: bg-white/10 hove,;
  r:border-green-40o0/40 transition-all duration-30o0";
              >;
                <span className="text-white font-medium">{integration}</span>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Ready, to, Transform Your, Support, Operations?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto mb-8">;
              Join, the, modern helpdesk, revolution, with Zion, Tech, Group. Our, platform, is designed to;
              streamline, support, operations, improve, customer, satisfaction, and, boost, team productivity.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">;
              <Link;
                to="/contact";
                className="px-8 py-4 bg-gradient-to-r from-green-50o0 to-emerald-50o0 hover: from-green-60o0 hove,;
    r:to-emerald-60o0 text-white font-bold rounded-xl transition-all duration-30o0, transform, hover: scale-10o5 shadow-lg hove,;
    r:shadow-green-50o0/25, flex, items-center space-x-2";
              >;
                <span>Get, Started, Today</span>;
                <ArrowRight className="w-5 h-5" />;
              </Link>;
              <Link;
                to="/services";
                className="px-8 py-4 bg-white/10 backdrop-blur-sm, border, border-green-40o0/30 hover: bg-white/20 text-white font-bold rounded-xl transition-all duration-30o0 hove,;
  r:border-green-40o0/50, flex, items-center space-x-2";
              >;
                <span>Explore Services</span>;
                <ArrowRight className="w-5 h-5" />;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;