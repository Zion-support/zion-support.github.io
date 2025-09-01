import React from 'react.ts';'
import { motion  } from 'framer-motion.ts';'
import { Link  } from 'react-router-dom.ts';'
import { Calendar, Users, Clock, CheckCircle, Shield, Zap, BarChart3, Smartphone, Globe, TrendingUp, Target, Bell, Settings, FileText, Database, Cloud, Server, Award, BookOpen  } from 'lucide-react';'
import { SEO  } from '@/components/SEO';
;
export { function };
export default function EmployeeSchedulingSaaS(...args: []):  {

  const features = [
    {

      icon: Calendar,
      title: "Smart Scheduling","
      description: "AI-powered scheduling that automatically creates optimal shifts based on availability, skills, and business needs."
    },
    {

      icon: Users,"
      title: "Employee Management","
      description: "Complete employee profiles with skills, availability, preferences, and performance tracking."
    },
    {

      icon: Clock,"
      title: "Time Tracking","
      description: "Accurate time tracking with clock-in/out, break management, and overtime calculation."
    },
    {

      icon: BarChart3,"
      title: "Analytics & Reporting","
      description: "Comprehensive insights into labor costs, productivity, and scheduling efficiency."
    },
    {

      icon: Smartphone,"
      title: "Mobile App","
      description: "Full-featured mobile app for employees to view schedules, request time off, and clock in/out.";
    },;
    {;
      icon: Globe,;"
      title: "Multi-location Support",;"
      description: "Manage schedules across multiple locations, departments, and time zones seamlessly.";
    };
  ];

  const schedulingCapabilities = [
    {

      icon: Calendar,"
      title: "Automated Scheduling","
      description: "AI algorithms create optimal schedules considering availability, skills, and business rules"
    },
    {

      icon: Users,"
      title: "Shift Management","
      description: "Easy shift creation, editing, and assignment with drag-and-drop interface"
    },
    {

      icon: Clock,"
      title: "Time Off Management","
      description: "Streamlined PTO requests, approvals, and calendar integration"
    },
    {

      icon: Bell,"
      title: "Notifications","
      description: "Automated reminders for shift changes, time off approvals, and schedule updates"
    },
    {

      icon: Settings,"
      title: "Custom Rules","
      description: "Configurable business rules for scheduling, overtime, and compliance";
    },;
    {;
      icon: FileText,;"
      title: "Compliance Tracking",;"
      description: "Ensure compliance with labor laws, break requirements, and overtime regulations";
    };
  ];

  const pricingPlans = [
    {
"
      name: "Starter","
      price: "$49","
      period: "/month","
      description: "Perfect for small businesses with basic scheduling needs",
      features: ["
        "Up to 25 employees","
        "Basic scheduling tools","
        "Time tracking","
        "Mobile app access","
        "Email support","
        "Standard reporting"
      ],
      popular: false
    },
    {
"
      name: "Professional","
      price: "$129","
      period: "/month","
      description: "Ideal for growing businesses with advanced scheduling requirements",
      features: ["
        "Up to 100 employees","
        "AI-powered scheduling","
        "Advanced analytics","
        "Multi-location support","
        "Priority support","
        "API access","
        "Custom integrations"
      ],
      popular: true
    },
    {
"
      name: "Enterprise","
      price: "$299","
      period: "/month","
      description: "For large organizations with complex scheduling needs",
      features: ["
        "Unlimited employees","
        "Custom scheduling algorithms","
        "Advanced compliance tools","
        "White-label options",;"
        "Dedicated account manager",;"
        "Custom training",;"
        "On-premise options";
      ],;
      popular: false;
    };
  ];

  const benefits = [
    {
"
      title: "Reduce Scheduling Time","
      description: "Cut scheduling time by up to 80% with AI-powered automation and smart tools.",
      icon: Clock
    },
    {
"
      title: "Improve Employee Satisfaction","
      description: "Give employees control over their schedules and improve work-life balance.",
      icon: Users
    },
    {
"
      title: "Optimize Labor Costs","
      description: "Reduce overtime costs and optimize staffing levels with data-driven insights.",
      icon: TrendingUp;
    },;
    {;"
      title: "Ensure Compliance",;"
      description: "Automatically comply with labor laws and avoid costly violations.",;
      icon: Shield;
    };
  ];

  const industries = [
    {

      icon: Users,"
      title: "Retail","
      description: "Manage complex retail schedules with seasonal demands and part-time workers"
    },
    {

      icon: Clock,"
      title: "Healthcare","
      description: "Ensure proper staffing for patient care with 24/7 scheduling requirements"
    },
    {

      icon: Calendar,"
      title: "Manufacturing","
      description: "Optimize production schedules with shift rotations and skill requirements"
    },
    {

      icon: Globe,"
      title: "Hospitality","
      description: "Handle dynamic scheduling needs for hotels, restaurants, and events"
    },
    {

      icon: Settings,"
      title: "Services","
      description: "Manage appointment-based scheduling for professional services";
    },;
    {;
      icon: BarChart3,;"
      title: "Construction",;"
      description: "Coordinate complex project schedules with multiple teams and locations";
    };  ];

  return()
    <>
      <SEO "
        title = "Employee Scheduling SaaS - Zion Tech Group""
        description="Professional employee scheduling platform with AI-powered automation, time tracking, and comprehensive workforce management tools.""
        canonical="/services/employee-scheduling-saas"
      />
"      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}"
        <section className="relative py-20 overflow-hidden">"
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>"
          <div className="relative max-w-7xl mx-auto px-6">"
            <div className="text-center">
              <motion.div
                initial = {

  { opacity: 0,
  y: 20 






}}
                animate = {

  { opacity: 1,
  y: 0 






}}
                transition={{ duration: 0.6 }}
"
                <h1 className="text-5xl md:text-6xl font-bold mb-6">"
                  <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-400 bg-clip-text text-transparent">
                    Employee Scheduling SaaS
                  </span>
                </h1>"
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  Professional employee scheduling platform with AI-powered automation, time tracking, and comprehensive
                  workforce management tools. Streamline your scheduling process and optimize labor costs.
                </p>"
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link"
                    to="/request-quote""
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"

                    Start Free Trial
                  </Link>
                  <Link"
                    to="/contact""
                    className="px-8 py-4 border-2 border-orange-500 text-orange-400 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"

                    Schedule Demo
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}"
        <section className="py-20">;"
          <div className="max-w-7xl mx-auto px-6">"
            <div className="text-center mb-16">"
              <h2 className="text-4xl font-bold mb-6 text-white">
                Powerful Scheduling Features
              </h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage your workforce efficiently and effectively
              </p>
            </div>
            "
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index (
                <motion.div
                  key={index}
                  initial = {

  { opacity: 0,
  y: 20 






}}
                  whileInView = {

  { opacity: 1,
  y: 0 






}}
                  transition = {

  { duration: 0.5,
  delay: index * 0.1 






}}"
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-orange-500 transition-all duration-300"
"
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">"
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>"
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>"
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>;
              ))}
            </div>
          </div>
        </section>

        {/* Scheduling Capabilities Section */}"
        <section className="py-20 bg-slate-800/30">;"
          <div className="max-w-7xl mx-auto px-6">"
            <div className="text-center mb-16">"
              <h2 className="text-4xl font-bold mb-6 text-white">
                Advanced Scheduling Capabilities
              </h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Intelligent tools that make scheduling simple and efficient
              </p>
            </div>
            "
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
              {schedulingCapabilities.map(capability: unknown, index: unknown (
                <motion.div
                  key={index}
                  initial = {

  { opacity: 0,
  y: 20 






}}
                  whileInView = {

  { opacity: 1,
  y: 0 






}}
                  transition = {

  { duration: 0.5,
  delay: index * 0.1 






}}"
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-red-500 transition-all duration-300"
"
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">"
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>"
                  <h3 className="text-xl font-semibold mb-3 text-white">{capability.title}</h3>"
                  <p className="text-gray-300">{capability.description}</p>
                </motion.div>;
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}"
        <section className="py-20">;"
          <div className="max-w-7xl mx-auto px-6">"
            <div className="text-center mb-16">"
              <h2 className="text-4xl font-bold mb-6 text-white">
                Designed for Every Industry
              </h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible scheduling solutions that adapt to your business needs
              </p>
            </div>
            "
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map(industry: unknown, index: unknown (
                <motion.div
                  key={index}
                  initial = {

  { opacity: 0,
  y: 20 






}}
                  whileInView = {

  { opacity: 1,
  y: 0 






}}
                  transition = {

  { duration: 0.5,
  delay: index * 0.1 






}}"
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-orange-500 transition-all duration-300"
"
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">"
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>"
                  <h3 className="text-xl font-semibold mb-3 text-white">{industry.title}</h3>"
                  <p className="text-gray-300">{industry.description}</p>
                </motion.div>;
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}"
        <section className="py-20 bg-slate-800/30">;"
          <div className="max-w-7xl mx-auto px-6">"
            <div className="text-center mb-16">"
              <h2 className="text-4xl font-bold mb-6 text-white">
                Why Choose Our Scheduling Platform?
              </h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional scheduling tools that transform how you manage your workforce
              </p>
            </div>
            "
            <div className="grid md: grid-cols-2 gap-8">
              {benefits.map(benefit: unknown, index: unknown (
                <motion.div
                  key={index}
                  initial = {

  { opacity: 0,
  x: index % 2 === 0 ? -20 : 20 






}}
                  whileInView = {

  { opacity: 1,
  x: 0 






}}
                  transition = {

  { duration: 0.5,
  delay: index * 0.1 






}}"
                  className="flex items-start space-x-4"
"
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">"
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>"
                    <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>"
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>;
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}"
        <section className="py-20">;"
          <div className="max-w-7xl mx-auto px-6">"
            <div className="text-center mb-16">"
              <h2 className="text-4xl font-bold mb-6 text-white">
                Transparent Pricing Plans
              </h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the scheduling plan that fits your business size and needs
              </p>
            </div>
            "
            <div className="grid md: grid-cols-3 gap-8">
              {pricingPlans.map(plan: unknown, index: unknown (
                <motion.div
                  key={index}
                  initial = {

  { opacity: 0,
  y: 20 






}}
                  whileInView = {

  { opacity: 1,
  y: 0 






}}
                  transition = {

  { duration: 0.5,
  delay: index * 0.1 






}}
                  className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${

                    plan.popular'
                      ? 'border-orange-500 ring-2 ring-orange-500/20''
                      : 'border-slate-700'`
                  }`}

                  {plan.popular && (;"
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
                      <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
"
                  <div className="text-center mb-6">"
                    <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>"
                    <div className="mb-4">"
                      <span className="text-4xl font-bold text-white">{plan.price}</span>"
                      <span className="text-gray-400">{plan.period}</span>
                    </div>"
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
"
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => ("
                      <li key={featureIndex} className="flex items-center space-x-3">"
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />"                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link"
                    to="/request-quote"`
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${

                      plan.popular'
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700''
                        : 'bg-slate-700 text-white hover:bg-slate-600'`
                    }`}

                    Get Started
                  </Link>;
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}"
        <section className="py-20 bg-gradient-to-r from-orange-600/20 to-red-600/20">;"
          <div className="max-w-4xl mx-auto text-center px-6">
            <motion.div
              initial = {

  { opacity: 0,
  y: 20 






}}
              whileInView = {

  { opacity: 1,
  y: 0 






}}
              transition={{ duration: 0.6 }}
"
              <h2 className="text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Scheduling?
              </h2>"
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses using our platform to streamline their workforce management.
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link"
                  to="/request-quote""
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"

                  Start Free Trial
                </Link>
                <Link"
                  to="/contact""
                  className="px-8 py-4 border-2 border-orange-500 text-orange-400 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"

                  Contact Sales
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>
  );
}}}}}}}'"`