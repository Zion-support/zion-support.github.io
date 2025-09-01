import React from 'react.ts';'
import { motion  } from 'framer-motion.ts';'
import { Link  } from 'react-router-dom.ts';'
import { Activity, AlertTriangle, Clock, CheckCircle, Shield, Zap, BarChart3, Globe, Smartphone, Monitor, Server, Wifi, Database, Cloud, Bell, TrendingUp, Users, Target  } from 'lucide-react';'
import { SEO  } from '@/components/SEO';
;
export { function };
export default function UptimeSLAMonitor(...args: []):  {

  const features = [
    {

      icon: Activity,
      title: "Real-time Monitoring","
      description: "24/7 monitoring of websites, APIs, databases, and infrastructure with sub-second response times."
    },
    {

      icon: AlertTriangle,"
      title: "Instant Alerts","
      description: "Smart notifications via email, SMS, Slack, Discord, and webhooks when issues are detected."
    },
    {

      icon: Clock,"
      title: "SLA Tracking","
      description: "Automated SLA compliance monitoring with detailed uptime reports and performance metrics."
    },
    {

      icon: BarChart3,"
      title: "Advanced Analytics","
      description: "Comprehensive dashboards showing response times, error rates, and performance trends."
    },
    {

      icon: Globe,"
      title: "Global Monitoring","
      description: "Monitor from multiple locations worldwide to ensure consistent user experience.";
    },;
    {;
      icon: Shield,;"
      title: "Security Monitoring",;"
      description: "SSL certificate monitoring, security headers, and vulnerability scanning included.";
    };
  ];

  const monitoringTypes = [
    {

      icon: Monitor,"
      title: "Website Monitoring","
      description: "HTTP/HTTPS monitoring, content validation, and performance tracking"
    },
    {

      icon: Server,"
      title: "Server Monitoring","
      description: "CPU, memory, disk usage, and process monitoring"
    },
    {

      icon: Database,"
      title: "Database Monitoring","
      description: "Query performance, connection pools, and replication status"
    },
    {

      icon: Wifi,"
      title: "Network Monitoring","
      description: "Bandwidth usage, latency, packet loss, and connectivity"
    },
    {

      icon: Cloud,"
      title: "Cloud Services","
      description: "AWS, Azure, GCP service monitoring and cost tracking";
    },;
    {;
      icon: Smartphone,;"
      title: "Mobile App Monitoring",;"
      description: "API endpoints, push notifications, and mobile performance";
    };
  ];

  const pricingPlans = [
    {
"
      name: "Starter","
      price: "$29","
      period: "/month","
      description: "Perfect for small websites and applications",
      features: ["
        "Up to 10 monitors","
        "1-minute check intervals","
        "Email & SMS alerts","
        "Basic reporting","
        "5 global locations","
        "SSL monitoring"
      ],
      popular: false
    },
    {
"
      name: "Professional","
      price: "$79","
      period: "/month","
      description: "Ideal for growing businesses and teams",
      features: ["
        "Up to 50 monitors","
        "30-second check intervals","
        "Advanced alerting","
        "SLA tracking","
        "15 global locations","
        "API access","
        "Custom dashboards"
      ],
      popular: true
    },
    {
"
      name: "Enterprise","
      price: "$199","
      period: "/month","
      description: "For large-scale operations and compliance",
      features: ["
        "Unlimited monitors","
        "10-second check intervals","
        "Priority support","
        "Advanced SLA reporting",;"
        "All global locations",;"
        "White-label options",;"
        "Custom integrations";
      ],;
      popular: false;
    };
  ];

  const benefits = [
    {
"
      title: "Prevent Downtime","
      description: "Detect issues before they affect users with proactive monitoring and instant alerts.",
      icon: Shield
    },
    {
"
      title: "Meet SLA Requirements","
      description: "Automatically track and report on SLA compliance for client contracts and internal metrics.",
      icon: Target
    },
    {
"
      title: "Improve Performance","
      description: "Identify performance bottlenecks and optimize your infrastructure based on real data.",
      icon: TrendingUp;
    },;
    {;"
      title: "Reduce MTTR",;"      description: "Faster incident response with detailed error information and automated escalation.",;
      icon: Zap};
  ];

  return()
    <>
      <SEO "
        title = "Uptime SLA Monitor - Zion Tech Group""
        description="Professional uptime monitoring and SLA tracking platform. Monitor websites, APIs, servers, and infrastructure with real-time alerts and comprehensive reporting.""
        canonical="/services/uptime-sla-monitor"
      />
"      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}"
        <section className="relative py-20 overflow-hidden">"
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>"
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
                  <span className="bg-gradient-to-r from-green-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Uptime SLA Monitor
                  </span>
                </h1>"
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  Professional uptime monitoring and SLA tracking platform. Monitor websites, APIs, servers, and infrastructure
                  with real-time alerts and comprehensive reporting.
                </p>"
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link"
                    to="/request-quote""
                    className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"

                    Start Monitoring
                  </Link>
                  <Link"
                    to="/contact""
                    className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"

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
                Comprehensive Monitoring Features
              </h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to ensure your services are always available and performing optimally
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
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300"
"
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">"
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>"
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>"
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>;
              ))}
            </div>
          </div>
        </section>

        {/* Monitoring Types Section */}"
        <section className="py-20 bg-slate-800/30">;"
          <div className="max-w-7xl mx-auto px-6">"
            <div className="text-center mb-16">"
              <h2 className="text-4xl font-bold mb-6 text-white">
                Monitor Everything That Matters
              </h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From simple website checks to complex infrastructure monitoring
              </p>
            </div>
            "
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
              {monitoringTypes.map(type: unknown, index: unknown (
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
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300"
"
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">"
                    <type.icon className="w-6 h-6 text-white" />
                  </div>"
                  <h3 className="text-xl font-semibold mb-3 text-white">{type.title}</h3>"
                  <p className="text-gray-300">{type.description}</p>
                </motion.div>;
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}"
        <section className="py-20">;"
          <div className="max-w-7xl mx-auto px-6">"
            <div className="text-center mb-16">"
              <h2 className="text-4xl font-bold mb-6 text-white">
                Why Choose Our Uptime Monitor?
              </h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional monitoring that helps you maintain high availability and meet your SLA commitments
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
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">"
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
        <section className="py-20 bg-slate-800/30">;"
          <div className="max-w-7xl mx-auto px-6">"
            <div className="text-center mb-16">"
              <h2 className="text-4xl font-bold mb-6 text-white">
                Transparent Pricing Plans
              </h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the monitoring plan that fits your needs and scale as you grow
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
                      ? 'border-green-500 ring-2 ring-green-500/20''
                      : 'border-slate-700'`
                  }`}

                  {plan.popular && (;"
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
                      <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700''
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
        <section className="py-20 bg-gradient-to-r from-green-600/20 to-blue-600/20">;"
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
                Ready to Monitor Your Infrastructure?
              </h2>"
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses using our platform to ensure their services are always available.
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link"
                  to="/request-quote""
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"

                  Start Free Trial
                </Link>
                <Link"
                  to="/contact""
                  className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"

                  Contact Sales
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>
  );
}}}}}}'"`