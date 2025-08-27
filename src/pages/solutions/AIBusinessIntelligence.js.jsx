import React from 'react';
import { Brain, TrendingUp, Users, Globe, Cpu, Lightbulb, BarChart3, PieChart, Activity, Search } from 'lucide-react';
const AIBusinessIntelligence = () => {
    const biFeatures = [
        {
            icon: Brain,
            title: "AI Analytics",
            description: "Intelligent data analysis and pattern recognition",
            features: ["Predictive analytics", "Machine learning insights", "Natural language queries", "Automated reporting"]
        },
        {
            icon: BarChart3,
            title: "Advanced Visualization",
            description: "Interactive charts and dashboards for data insights",
            features: ["Real-time dashboards", "Custom visualizations", "Interactive charts", "Mobile-responsive views"]
        },
        {
            icon: Search,
            title: "Data Discovery",
            description: "Intelligent data exploration and insights discovery",
            features: ["Data mining", "Trend analysis", "Anomaly detection", "Correlation discovery"]
        },
        {
            icon: Activity,
            title: "Real-time Monitoring",
            description: "Live monitoring and alerting for business metrics",
            features: ["Live data feeds", "Instant alerts", "Performance tracking", "KPI monitoring"]
        }
    ];
    const biSolutions = [
        {
            title: "Sales Analytics",
            description: "Comprehensive sales performance and forecasting",
            icon: TrendingUp,
            capabilities: ["Sales forecasting", "Performance tracking", "Pipeline analysis", "Revenue optimization"]
        },
        {
            title: "Customer Analytics",
            description: "Deep insights into customer behavior and preferences",
            icon: Users,
            capabilities: ["Customer segmentation", "Behavior analysis", "Lifetime value", "Churn prediction"]
        },
        {
            title: "Financial Analytics",
            description: "Financial performance and risk analysis",
            icon: PieChart,
            capabilities: ["Financial reporting", "Risk assessment", "Budget analysis", "Cost optimization"]
        },
        {
            title: "Operational Analytics",
            description: "Operational efficiency and process optimization",
            icon: Cpu,
            capabilities: ["Process optimization", "Efficiency metrics", "Resource allocation", "Performance monitoring"]
        },
        {
            title: "Market Analytics",
            description: "Market trends and competitive intelligence",
            icon: Globe,
            capabilities: ["Market research", "Competitive analysis", "Trend forecasting", "Opportunity identification"]
        },
        {
            title: "Predictive Analytics",
            description: "Future-focused insights and forecasting",
            icon: Lightbulb,
            capabilities: ["Trend prediction", "Risk forecasting", "Opportunity identification", "Scenario planning"]
        }
    ];
    const benefits = [
        "Data-driven decision making across all business areas",
        "Real-time insights and instant access to critical information",
        "Automated reporting and reduced manual analysis time",
        "Predictive capabilities for proactive business planning",
        "Improved operational efficiency and cost optimization",
        "Enhanced customer understanding and engagement"
    ];
    const implementation = [
        {
            phase: "Data Assessment",
            description: "Evaluate current data sources and quality",
            duration: "2-3 weeks"
        },
        {
            phase: "BI Strategy",
            description: "Define business intelligence goals and requirements",
            duration: "3-4 weeks"
        },
        {
            phase: "Data Integration",
            description: "Connect and integrate data sources",
            duration: "6-10 weeks"
        },
        {
            phase: "AI Model Development",
            description: "Build and train AI models for analytics",
            duration: "8-12 weeks"
        },
        {
            phase: "Dashboard Development",
            description: "Create interactive dashboards and reports",
            duration: "6-8 weeks"
        },
        {
            phase: "Deployment & Training",
            description: "Deploy system and train users",
            duration: "2-4 weeks"
        }
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-violet-500/10 text-violet-400 rounded-full text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4 mr-2"/>
              AI BI Solution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent"> Business Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with AI-powered analytics and insights 
              that drive intelligent decision making and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#features" className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Features
              </a>
              <a href="/contact" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BI Features */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Business Intelligence Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI-powered BI platform provides comprehensive analytics 
              and insights for informed decision making.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {biFeatures.map((feature, index) => (<div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-violet-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (<li key={idx} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {item}
                    </li>))}
                </ul>
              </div>))}
          </div>
        </div>
      </section>

      {/* BI Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              BI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive business intelligence solutions covering all 
              aspects of your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biSolutions.map((solution, index) => (<div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-violet-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <solution.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.capabilities.map((capability, idx) => (<li key={idx} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {capability}
                    </li>))}
                </ul>
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
                Why Choose AI Business Intelligence?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our AI-powered BI platform transforms raw data into actionable 
                insights that drive business growth and success.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (<li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                    {benefit}
                  </li>))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl p-8 border border-violet-500/30">
              <div className="text-center">
                <Lightbulb className="w-24 h-24 text-violet-400 mx-auto mb-4"/>
                <h3 className="text-2xl font-bold text-white mb-2">Data Intelligence</h3>
                <p className="text-gray-300 mb-6">
                  Transform your data into intelligent insights that drive 
                  better decisions and business outcomes.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• AI-powered analytics</p>
                  <p>• Real-time insights</p>
                  <p>• Predictive capabilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Implementation Process
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            A structured approach to implementing AI-powered business 
            intelligence in your organization.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {implementation.map((phase, index) => (<div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{phase.phase}</h3>
                <p className="text-gray-300 mb-2">{phase.description}</p>
                <p className="text-sm text-violet-400">{phase.duration}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business Intelligence?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start making data-driven decisions with AI-powered business 
            intelligence and analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Your Journey
            </a>
            <a href="/solutions" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              View All Solutions
            </a>
          </div>
        </div>
      </section>
    </div>);
};
export default AIBusinessIntelligence;
