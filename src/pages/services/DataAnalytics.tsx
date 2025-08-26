import React from 'react';
import SEOHead from "@/components/SEOHead";
import Link from 'next/link';
import { Check, BarChart3, TrendingUp, Database, Users, Shield, Zap, Globe, Target, PieChart, LineChart, Activity } from 'lucide-react';

export default function DataAnalyticsServices() {
  const analyticsServices = [
    {
      icon: BarChart3,
      title: 'Business Intelligence & Reporting',
      description: 'Transform raw data into actionable insights with interactive dashboards and automated reporting.',
      price: 'From $3,500/month',
      marketPrice: '$2,500 - $8,000/month',
      features: [
        'Interactive dashboards with real-time data',
        'Automated report generation and distribution',
        'Custom KPI tracking and alerts',
        'Multi-source data integration',
        'Role-based access control',
        'Mobile-responsive design'
      ],
      benefits: [
        'Faster decision-making with real-time insights',
        'Reduced manual reporting time by 80%',
        'Improved data accuracy and consistency',
        'Enhanced stakeholder communication'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics & Forecasting',
      description: 'Leverage machine learning to predict future trends and make data-driven decisions.',
      price: 'From $5,000/month',
      marketPrice: '$4,000 - $12,000/month',
      features: [
        'Advanced statistical modeling',
        'Machine learning algorithms',
        'Scenario planning and what-if analysis',
        'Automated forecasting models',
        'Confidence interval reporting',
        'Model performance monitoring'
      ],
      benefits: [
        'Proactive business planning',
        'Risk mitigation and opportunity identification',
        'Improved resource allocation',
        'Competitive advantage through foresight'
      ]
    },
    {
      icon: Database,
      title: 'Data Engineering & ETL',
      description: 'Build robust data pipelines and warehouses for scalable analytics infrastructure.',
      price: 'From $4,500/month',
      marketPrice: '$3,500 - $10,000/month',
      features: [
        'Data pipeline development and maintenance',
        'ETL/ELT process optimization',
        'Data quality monitoring and validation',
        'Real-time data streaming',
        'Cloud-native data warehousing',
        'Data governance and compliance'
      ],
      benefits: [
        'Centralized data access and management',
        'Improved data quality and reliability',
        'Faster data processing and delivery',
        'Reduced data silos and duplication'
      ]
    },
    {
      icon: Users,
      title: 'Customer Analytics & Segmentation',
      description: 'Understand customer behavior and create targeted marketing strategies.',
      price: 'From $3,800/month',
      marketPrice: '$3,000 - $9,000/month',
      features: [
        'Customer journey mapping and analysis',
        'Behavioral segmentation and clustering',
        'Churn prediction and prevention',
        'Customer lifetime value analysis',
        'A/B testing and optimization',
        'Personalization engine integration'
      ],
      benefits: [
        'Improved customer retention and loyalty',
        'Higher marketing ROI through targeting',
        'Better product-market fit',
        'Enhanced customer experience'
      ]
    },
    {
      icon: Shield,
      title: 'Data Governance & Compliance',
      description: 'Ensure data security, privacy, and regulatory compliance across your analytics platform.',
      price: 'From $4,200/month',
      marketPrice: '$3,500 - $8,500/month',
      features: [
        'GDPR, CCPA, and HIPAA compliance',
        'Data privacy and security controls',
        'Audit trails and data lineage',
        'Access control and encryption',
        'Compliance reporting and monitoring',
        'Data retention and deletion policies'
      ],
      benefits: [
        'Reduced compliance risks and penalties',
        'Enhanced data security and trust',
        'Streamlined audit processes',
        'Protection of sensitive information'
      ]
    },
    {
      icon: Zap,
      title: 'Real-Time Analytics & Monitoring',
      description: 'Monitor business performance in real-time with instant alerts and notifications.',
      price: 'From $4,800/month',
      marketPrice: '$4,000 - $11,000/month',
      features: [
        'Real-time data streaming and processing',
        'Instant alerting and notifications',
        'Performance monitoring dashboards',
        'Anomaly detection and alerting',
        'Mobile push notifications',
        'Integration with incident management'
      ],
      benefits: [
        'Immediate issue identification and response',
        'Improved operational efficiency',
        'Better customer experience',
        'Reduced downtime and losses'
      ]
    }
  ];

  const industries = [
    'Financial Services & Banking',
    'Healthcare & Life Sciences',
    'Retail & E-commerce',
    'Manufacturing & Supply Chain',
    'Energy & Utilities',
    'Telecommunications',
    'Transportation & Logistics',
    'Government & Public Sector'
  ];

  const technologies = [
    'Tableau & Power BI',
    'Python & R for Analytics',
    'Apache Spark & Kafka',
    'Snowflake & BigQuery',
    'AWS Redshift & Azure Synapse',
    'Databricks & Dataiku',
    'Alteryx & KNIME',
    'TensorFlow & PyTorch'
  ];

  const benefits = [
    'Data-driven decision making and strategy',
    'Improved operational efficiency and cost reduction',
    'Enhanced customer understanding and engagement',
    'Competitive advantage through insights',
    'Risk mitigation and compliance',
    'Scalable analytics infrastructure'
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Data Analytics & Business Intelligence Services - Zion Tech Group" 
        description="Comprehensive data analytics, business intelligence, and predictive analytics solutions to transform your business with data-driven insights."
        keywords="data analytics, business intelligence, predictive analytics, data engineering, ETL, data visualization, reporting"
        canonical="https://ziontechgroup.com/services/data-analytics"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Data Analytics & BI Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Transform your business with powerful data analytics, business intelligence, and predictive insights. 
            From raw data to actionable intelligence, we help you make better decisions faster.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Analytics Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive data analytics solutions that help businesses unlock the full potential of their data 
              to drive growth, efficiency, and competitive advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsServices.map((service, index) => (
              <div key={service.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <p className="text-lg font-semibold text-blue-600">{service.price}</p>
                  <p className="text-sm text-gray-500">Market: {service.marketPrice}</p>
                </div>
                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="space-y-2">
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="text-sm text-gray-600">
                      <span className="font-medium">✓</span> {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Analytics Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our data analytics expertise combined with industry best practices enables us to deliver 
                solutions that provide real business value and measurable ROI.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Analytics Assessment</h3>
              <p className="text-gray-600 mb-6">
                Discover how data analytics can transform your business with our comprehensive 
                data maturity assessment and strategy session.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Assessment Value:</span>
                  <span className="font-semibold text-gray-900">$2,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Your Cost:</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block w-full text-center"
              >
                Schedule Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our analytics solutions are tailored to meet the unique challenges and opportunities 
              across diverse industry sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div key={industry} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors border border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Analytics Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge analytics and BI technologies to build robust, scalable, 
              and innovative solutions for our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <div key={tech} className="bg-white rounded-lg p-4 text-center hover:bg-blue-50 transition-colors border border-gray-200">
                <span className="text-gray-700 font-medium text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Analytics Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for delivering successful analytics solutions that drive business value.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-6 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Discovery</h3>
                <p className="text-gray-600 text-sm">
                  Understand business needs and data opportunities
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Assessment</h3>
                <p className="text-gray-600 text-sm">
                  Evaluate current data infrastructure and maturity
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Strategy</h3>
                <p className="text-gray-600 text-sm">
                  Develop analytics roadmap and architecture
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Implementation</h3>
                <p className="text-gray-600 text-sm">
                  Build and deploy analytics solutions
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Training</h3>
                <p className="text-gray-600 text-sm">
                  Enable teams to use analytics effectively
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">6</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Optimization</h3>
                <p className="text-gray-600 text-sm">
                  Continuous improvement and scaling
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let our analytics experts help you transform raw data into actionable insights 
            that drive business growth and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Analytics Journey
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}