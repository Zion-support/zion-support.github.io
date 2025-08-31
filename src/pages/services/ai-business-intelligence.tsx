import { Helmet } from 'react-helmet-async';
import { ArrowRight, BarChart3, Brain, CheckCircle, Database, Download, Globe, Mail, PieChart, Play, Shield, Target, TrendingUp, Users, Zap } from 'lucide-react';

export default function AIBusinessIntelligence() {
  return (
    <>
      <Helmet>
        <title>AI Business Intelligence - Zion Tech Group</title>
        <meta name="description" content="Transform your business data into actionable insights with AI-powered business intelligence, predictive analytics, and intelligent reporting." />
        <meta name="keywords" content="AI business intelligence, predictive analytics, data insights, business analytics, AI reporting, data visualization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Business Intelligence
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Business
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Intelligence</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform raw data into strategic insights with AI-powered business intelligence. 
                Make data-driven decisions with predictive analytics, intelligent reporting, and real-time dashboards.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent Data Analytics
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our AI-powered BI platform delivers actionable insights that drive strategic decision-making 
                and business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI-Powered Analytics",
                  description: "Advanced machine learning algorithms analyze patterns and predict future trends."
                },
                {
                  icon: BarChart3,
                  title: "Interactive Dashboards",
                  description: "Real-time dashboards with customizable widgets and intuitive visualizations."
                },
                {
                  icon: TrendingUp,
                  title: "Predictive Insights",
                  description: "Forecast business outcomes and identify opportunities before they arise."
                },
                {
                  icon: Database,
                  title: "Data Integration",
                  description: "Seamlessly connect to multiple data sources and systems for unified insights."
                },
                {
                  icon: Users,
                  title: "Collaborative Reporting",
                  description: "Share insights across teams with role-based access and collaborative features."
                },
                {
                  icon: Shield,
                  title: "Data Security",
                  description: "Enterprise-grade security with encryption, access controls, and compliance features."
})
              ].map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive BI Capabilities
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                From data discovery to advanced analytics, our platform covers every aspect of business intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    "Advanced data mining and pattern recognition",
                    "Real-time streaming analytics and monitoring",
                    "Natural language query processing",
                    "Automated report generation and scheduling",
                    "Mobile-responsive dashboards and alerts",
                    "Integration with popular BI tools and platforms"
                  ].map((capability, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Analytics Types</h3>
                <div className="space-y-4">
                  {[
                    { type: "Descriptive", icon: BarChart3, color: "from-blue-500 to-cyan-500" },
                    { type: "Diagnostic", icon: Target, color: "from-purple-500 to-pink-500" },
                    { type: "Predictive", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
                    { type: "Prescriptive", icon: Zap, color: "from-orange-500 to-red-500" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-300">{item.type} Analytics</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Business Operations
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Discover how AI-powered BI can revolutionize different aspects of your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Sales & Marketing",
                  description: "Track performance, predict customer behavior, and optimize campaigns with data-driven insights.",
                  icon: TrendingUp,
                  benefits: ["Lead scoring", "Customer segmentation", "Campaign optimization"]
                },
                {
                  title: "Operations & Supply Chain",
                  description: "Monitor efficiency, predict demand, and optimize inventory with real-time analytics.",
                  icon: Globe,
                  benefits: ["Demand forecasting", "Inventory optimization", "Performance monitoring"]
                },
                {
                  title: "Financial Analytics",
                  description: "Track KPIs, identify trends, and make informed financial decisions with predictive insights.",
                  icon: PieChart,
                  benefits: ["Budget tracking", "Revenue forecasting", "Risk assessment"]
                },
                {
                  title: "Human Resources",
                  description: "Analyze workforce data, predict turnover, and optimize talent management strategies.",
                  icon: Users,
                  benefits: ["Turnover prediction", "Performance analytics", "Talent optimization"]
                },
                {
                  title: "Customer Experience",
                  description: "Understand customer behavior, predict satisfaction, and improve service delivery.",
                  icon: Shield,
                  benefits: ["Sentiment analysis", "Churn prediction", "Service optimization"]
                },
                {
                  title: "Product Development",
                  description: "Analyze usage patterns, predict feature adoption, and optimize product roadmaps.",
                  icon: Target,
                  benefits: ["Usage analytics", "Feature adoption", "Product optimization"]
})
              ].map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-slate-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-1">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-cyan-400 flex items-center">
                        <CheckCircle className="w-3 h-3 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-600/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Transform your business intelligence with AI-powered analytics and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}