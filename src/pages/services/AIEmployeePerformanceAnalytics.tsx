<<<<<<< HEAD
import React from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { SEO  } from '../../components/SEO';
import { Users, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  Globe, 
  Lock, 
  Eye,
  Star,
  Cpu,
  Database,
  Search,
  Filter,
  Download,
  Share2,
  Play,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  FileText,
  Clock,
  Award,
  Brain,
  Target,
  PieChart,
  Activity,
  UserCheck,
  Shield,
  Settings,
  DollarSign,
  AlertCircle,
  Calendar,
  MapPin,
  GraduationCap,
  Heart,
  TrendingDown,
  Lightbulb'
 } from 'lucide-react.ts';

export default function AIEmployeePerformanceAnalytics(...args: any[]): any {

  const features = [
    {

      icon: Brain,
      title: "AI Performance Scoring","
      description: "Advanced algorithms analyze multiple performance indicators to provide comprehensive employee scoring and insights."
    },
    {

      icon: BarChart3,"
      title: "Real-time Analytics Dashboard","
      description: "Live performance metrics, productivity trends, and engagement scores with customizable KPIs and reporting."
    },
    {

      icon: Users,"
      title: "360-Degree Feedback Analysis","
      description: "Comprehensive feedback collection and analysis from peers, managers, and self-assessments."
    },
    {

      icon: Target,"
      title: "Goal Tracking & Alignment","
      description: "Monitor individual and team goal progress, identify alignment issues, and suggest performance improvements."
    },
    {

      icon: PieChart,"
      title: "Predictive Performance Insights","
      description: "AI-powered predictions for employee potential, retention risk, and career development opportunities.";
    },;
    {;
      icon: Activity,;"
      title: "Engagement & Wellness Monitoring",;"
      description: "Track employee engagement, burnout indicators, and wellness metrics to support employee well-being.";
    };
  ];

  const benefits = [
    {

      icon: Zap,"
      title: "Improved Performance","
      description: "Identify performance gaps and provide targeted coaching to enhance individual and team productivity."
    },
    {

      icon: DollarSign,"
      title: "Increased Retention","
      description: "Predict and prevent employee turnover by identifying at-risk employees and implementing retention strategies."
    },
    {

      icon: Globe,"
      title: "Data-Driven Decisions","
      description: "Make informed HR decisions based on comprehensive performance analytics and predictive insights."
    },
    {

      icon: Lock,"
      title: "Privacy & Compliance","
      description: "Enterprise-grade security with GDPR compliance and role-based access control for sensitive performance data."
    },
    {

      icon: TrendingUp,"
      title: "Enhanced Productivity","
      description: "Optimize team performance through data-driven insights and targeted development programs.";
    },;
    {;
      icon: Clock,;"
      title: "Time Savings",;"
      description: "Automate performance reviews and analytics, saving HR teams hours of manual work each month.";
    };
  ];

  const pricingPlans = [
    {
"
      name: "Starter","
      price: "$399","
      period: "/month","
      description: "Perfect for small teams and startups beginning their performance analytics journey",
      features: ["
        "Up to 50 employees","
        "Basic performance scoring","
        "Email support","
        "Standard integrations","
        "Basic reporting","
        "Goal tracking","
        "Mobile app access"
      ],"
      cta: "Start Free Trial",
      popular: false
    },
    {
"
      name: "Professional","
      price: "$999","
      period: "/month","
      description: "Ideal for growing companies with advanced performance management needs",
      features: ["
        "Up to 500 employees","
        "Advanced AI analytics","
        "Priority support","
        "Custom integrations","
        "Advanced reporting & dashboards","
        "Predictive insights","
        "API access","
        "360-degree feedback","
        "Engagement monitoring"
      ],"
      cta: "Start Free Trial",
      popular: true
    },
    {
"
      name: "Enterprise","
      price: "$2,999","
      period: "/month","
      description: "For large organizations requiring enterprise-grade performance analytics",
      features: ["
        "Unlimited employees","
        "Custom AI models","
        "Dedicated account manager","
        "White-label solutions","
        "Advanced security features","
        "Custom reporting","
        "On-premise deployment",;"
        "SLA guarantees",;"
        "24/7 support";
=======
import React from 'react.ts';'
import { motion  } from 'framer-motion.ts';'
import { SEO  } from '../../components/SEO';        "24/7 support";
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
      ],;"
      cta: "Contact Sales",;
      popular: false;
    };
  ];

  const useCases = [
    {
"
      industry: "Technology","
      description: "Track developer productivity, code quality metrics, and project completion rates for engineering teams",
      icon: Cpu
    },
    {
"
      industry: "Sales","
      description: "Monitor sales performance, conversion rates, and pipeline metrics to optimize revenue generation",
      icon: TrendingUp
    },
    {
"
      industry: "Healthcare","
      description: "Track patient outcomes, clinical performance, and healthcare provider efficiency metrics",
      icon: Heart
    },
    {
"
      industry: "Education","
      description: "Analyze teaching effectiveness, student outcomes, and educational program performance",
      icon: GraduationCap
    },
    {
"
      industry: "Manufacturing","
      description: "Monitor production efficiency, quality metrics, and operational performance across manufacturing teams",
      icon: Settings;
    },;
    {;"
      industry: "Finance",;"      description: "Track financial advisor performance, client satisfaction, and investment portfolio management",;
      icon: DollarSign};
  ];

  const integrations = [
    {
"
      name: "HRIS Systems","
      platforms: ["Workday", "BambooHR", "ADP", "Paychex"]
    },
    {
"
      name: "Project Management","
      platforms: ["Jira", "Asana", "Trello", "Monday.com"]
    },
    {
"
      name: "Communication Tools","
      platforms: ["Slack", "Microsoft Teams", "Zoom", "Google Meet"]
    },
    {
"
      name: "CRM Systems","
      platforms: ["Salesforce", "HubSpot", "Pipedrive", "Zoho"]
    },
    {
"
      name: "Learning Platforms",;"
      platforms: ["LinkedIn Learning", "Coursera", "Udemy", "Skillshare"];
    },;
    {;"
      name: "Time Tracking",;"
      platforms: ["Toggl", "Harvest", "Time Doctor", "RescueTime"];
    };
  ];

  const keyMetrics = [
    {
"
      metric: "85%","
      label: "Performance Improvement","
      description: "Average improvement in employee performance scores"
    },
    {
"
      metric: "40%","
      label: "Retention Increase","
      description: "Reduction in employee turnover rates"
    },
    {
"
      metric: "60%","
      label: "Time Savings","
      description: "Reduction in manual performance review time";
    },;
    {;"
      metric: "3.2x",;"
      label: "ROI",;"
      description: "Return on investment for performance analytics";
    };
  ];

  const performanceIndicators = [
    {
"
      category: "Productivity Metrics","
      indicators: ["Tasks Completed", "Project Delivery", "Code Quality", "Sales Targets"]
    },
    {
"
      category: "Quality Metrics","
      indicators: ["Error Rates", "Customer Satisfaction", "Code Reviews", "Quality Scores"]
    },
    {
"
      category: "Collaboration Metrics",;"
      indicators: ["Team Participation", "Knowledge Sharing", "Cross-functional Projects", "Mentoring"];
    },;
    {;"
      category: "Growth Metrics",;"
      indicators: ["Skill Development", "Learning Progress", "Career Advancement", "Certifications"];
    };  ];

  return ("
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO"
<<<<<<< HEAD
        title="AI Employee Performance Analytics - Zion Tech Group"
        description="Transform employee performance management with AI-powered analytics. Track productivity, predict retention, and optimize team performance."
      />
=======
        title="AI Employee Performance Analytics - Zion Tech Group""        description="Transform employee performance management with AI-powered analytics. Track productivity, predict retention, and optimize team performance."
       />
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
      
      {/* Hero Section */}"
      <section className="relative overflow-hidden py-20 lg:py-32">"
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
        "
        <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 






}}
            animate = {

  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
          >"
            <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium mb-6">"
              <Users className="w-4 h-4 mr-2" />              AI-Powered Analytics
            </div>"
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
              AI Employee Performance"
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}Analytics
              </span>
            </h1>"
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform employee performance management with AI-powered analytics. 
              Track productivity, predict retention, and optimize team performance with data-driven insights.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg flex items-center justify-center">"
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>"
              <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 text-lg">"
                <Download className="w-5 h-5 mr-2 inline" />                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Section */}"
      <section className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="grid grid-cols-2 md: anygrid-cols-4 gap-8">
            {keyMetrics.map((metric, index (
              <motion.div
                key={metric.metric}
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
                viewport={{ once: true }}"
                className="text-center"
              >"
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                  {metric.metric}
                </div>"
                <div className="text-lg font-semibold text-white mb-2">
                  {metric.label}
                </div>"
                <div className="text-sm text-gray-400">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}"
      <section className="py-20 bg-slate-800/50">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 






}}
            whileInView = {

  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI capabilities designed to revolutionize employee performance management and HR analytics.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(feature: unknown, index: unknown (
              <motion.div
                key={feature.title}
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
                viewport={{ once: true }}"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50"
              >
                {/* Icon */}"
                <div className="mb-6">"
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {feature.title}
                  </h3>"
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}"
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Indicators Section */}"
      <section className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 






}}
            whileInView = {

  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Performance Indicators
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive metrics and KPIs to measure and improve employee performance across all dimensions.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-8">
            {performanceIndicators.map(category: unknown, index: unknown 
              <motion.div
                key={category.category}
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
                viewport={{ once: true }}"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50"
              >"
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {category.category}
                </h3>"
                <ul className="space-y-2">
                  {category.indicators.map((indicator, indicatorIndex) => ("
                    <li key={indicatorIndex} className="flex items-center text-gray-300 text-sm">"
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />                      {indicator}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}"
      <section className="py-20 bg-slate-800/50">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 






}}
            whileInView = {

  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Business Benefits
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI-powered performance analytics can transform your HR operations and drive business growth.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map(benefit: unknown, index: unknown (
              <motion.div
                key={benefit.title}
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
                viewport={{ once: true }}"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50"
              >
                {/* Icon */}"
                <div className="mb-6">"
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>"
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect */}"
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}"
      <section className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 






}}
            whileInView = {

  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your organization's needs. All plans include a 14-day free trial.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md: anygrid-cols-3 gap-8">
            {pricingPlans.map(plan: unknown, index: unknown (
              <motion.div
                key={plan.name}
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
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 ${

                  plan.popular '
                    ? 'border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-pink-500/10' '
                    : 'border-white/10 hover:border-purple-500/50'`
                }`}
              >
                {plan.popular && ("
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
"
                <div className="text-center mb-8">"
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>"
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>"
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}"
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                </div>
"
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => ("
                    <li key={featureIndex} className="flex items-center text-gray-300">"
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />"                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
`
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${

                  plan.popular'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700''
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'`
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}"
      <section className="py-20 bg-slate-800/50">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 






}}
            whileInView = {

  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Industry Use Cases
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations across industries leverage our AI performance analytics to optimize team performance.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map(useCase: unknown, index: unknown (
              <motion.div
                key={useCase.industry}
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
                viewport={{ once: true }}"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50"
              >
                {/* Icon */}"
                <div className="mb-6">"
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {useCase.industry}
                  </h3>"
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>

                {/* Hover Effect */}"
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}"
      <section className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 






}}
            whileInView = {

  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing HR and productivity tools for a unified performance management experience.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map(integration: unknown, index: unknown 
              <motion.div
                key={integration.name}
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
                viewport={{ once: true }}"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50"
              >"
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {integration.name}
                </h3>"
                <div className="flex flex-wrap gap-2">
                  {integration.platforms.map((platform, platformIndex (
                    <span
                      key={platformIndex}"
                      className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}"
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">"
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 






}}
            whileInView = {

  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Employee Performance?
            </h2>"
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations already using AI-powered performance analytics 
              to optimize team performance and drive business success.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg flex items-center justify-center">"
                <Star className="w-5 h-5 mr-2" />                Start Free Trial
              </button>"
              <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 text-lg">"
                <Share2 className="w-5 h-5 mr-2 inline" />
                Schedule Demo;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
}'"`