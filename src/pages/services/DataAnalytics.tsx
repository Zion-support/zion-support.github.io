import React from 'react';
import { Check, BarChart3, TrendingUp, Database, Users, Shield, Zap, Target, PieChart, Activity } from 'lucide-react';

const DataAnalyticsServices = () => {
  const analyticsServices = [
    {
      icon: BarChart3,
      title: 'Business Intelligence & Reporting',
      description: 'Transform raw data into actionable insights with interactive dashboards and automated reporting.',
      price: 'From $3,500/month',
      features: [
        'Interactive dashboards with real-time data',
        'Automated report generation and distribution',
        'Custom KPI tracking and alerts',
        'Multi-source data integration'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics & Forecasting',
      description: 'Leverage machine learning to predict future trends and make data-driven decisions.',
      price: 'From $5,000/month',
      features: [
        'Advanced statistical modeling',
        'Machine learning algorithms',
        'Scenario planning and what-if analysis',
        'Automated forecasting models'
      ]
    },
    {
      icon: Database,
      title: 'Data Engineering & ETL',
      description: 'Build robust data pipelines and warehouses for scalable analytics infrastructure.',
      price: 'From $4,500/month',
      features: [
        'Data pipeline development and maintenance',
        'ETL/ELT process optimization',
        'Data quality monitoring and validation',
        'Real-time data streaming'
      ]
    },
    {
      icon: Users,
      title: 'Customer Analytics & Segmentation',
      description: 'Understand customer behavior and create targeted marketing strategies.',
      price: 'From $3,800/month',
      features: [
        'Customer journey mapping and analysis',
        'Behavioral segmentation and clustering',
        'Churn prediction and prevention',
        'Customer lifetime value analysis'
      ]
    },
    {
      icon: Shield,
      title: 'Data Governance & Compliance',
      description: 'Ensure data security, privacy, and regulatory compliance across your analytics platform.',
      price: 'From $4,200/month',
      features: [
        'GDPR, CCPA, and HIPAA compliance',
        'Data privacy and security controls',
        'Audit trails and data lineage',
        'Data retention and deletion policies'
      ]
    },
    {
      icon: Target,
      title: 'Performance Analytics & Optimization',
      description: 'Monitor and optimize business performance with real-time analytics and insights.',
      price: 'From $3,200/month',
      features: [
        'Real-time performance monitoring',
        'KPI tracking and benchmarking',
        'Performance optimization recommendations',
        'Automated alerting and notifications'
      ]
    }
  ];

  const technologies = [
    {
      name: "Data Visualization",
      description: "Power BI, Tableau, and custom dashboards",
      icon: PieChart,
      features: ["Interactive charts", "Real-time updates", "Mobile responsive", "Custom branding"]
    },
    {
      name: "Machine Learning",
      description: "Python, R, and advanced analytics",
      icon: TrendingUp,
      features: ["Predictive models", "Statistical analysis", "AI algorithms", "Model validation"]
    },
    {
      name: "Big Data",
      description: "Hadoop, Spark, and cloud platforms",
      icon: Database,
      features: ["Data processing", "Scalable storage", "Real-time streaming", "Cloud integration"]
    }
  ];

  const benefits = [
    "Improved decision-making with data-driven insights",
    "Increased operational efficiency and productivity",
    "Better customer understanding and targeting",
    "Reduced costs through process optimization",
    "Enhanced competitive advantage and market positioning",
    "Scalable analytics infrastructure for growth"
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4 mr-2"/>
              Data Analytics
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Data Analytics &
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> BI Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with powerful data analytics, business intelligence, 
              and predictive insights that drive growth and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Services
              </a>
              <a href="/contact" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Services */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Analytics Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive data analytics solutions that help businesses unlock 
              the full potential of their data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-blue-400 mb-4">{service.price}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge tools and platforms to deliver powerful 
              analytics solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Analytics Services?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our data analytics expertise combined with industry best practices 
                enables us to deliver solutions that provide real business value.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl p-8 border border-blue-500/30">
              <div className="text-center">
                <Activity className="w-24 h-24 text-blue-400 mx-auto mb-4"/>
                <h3 className="text-2xl font-bold text-white mb-2">Analytics Excellence</h3>
                <p className="text-gray-300 mb-6">
                  Our team has deep expertise in data science, business intelligence, 
                  and analytics implementation.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• Certified data professionals</p>
                  <p>• Industry best practices</p>
                  <p>• Proven methodologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how data analytics can unlock insights and 
            drive growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </a>
            <a href="/services" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataAnalyticsServices;