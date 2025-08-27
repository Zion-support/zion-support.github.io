import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, TrendingUp, Brain, Database, CheckCircle, Zap, Sparkles, ArrowRight, PieChart, LineChart, Target, Users } from 'lucide-react';

export default function AIBusinessIntelligenceAnalytics() {
  const features = [
    'AI-powered predictive analytics with 95% accuracy forecasting',
    'Natural language query interface for business users',
    'Real-time data visualization and interactive dashboards',
    'Automated anomaly detection and business insights generation',
    'Multi-source data integration (CRM, ERP, databases, APIs)',
    'Advanced machine learning models for trend analysis',
    'Custom KPI tracking and automated reporting',
    'Mobile-responsive dashboards with role-based access control',
  ];

  const benefits = [
    'Increase revenue by 15-25% through data-driven insights',
    'Reduce decision-making time by 80% with instant analytics',
    'Identify new business opportunities with predictive modeling',
    'Optimize operations and reduce costs by 20-30%',
    'Improve customer satisfaction with behavioral analytics',
    'Achieve 99.9% data accuracy and consistency',
  ];

  const analyticsCapabilities = [
    'Predictive Analytics & Forecasting',
    'Customer Behavior Analysis',
    'Sales Performance Optimization',
    'Operational Efficiency Metrics',
    'Financial Performance Tracking',
    'Market Trend Analysis',
    'Risk Assessment & Management',
    'Competitive Intelligence',
    'Supply Chain Optimization',
    'Real-time Business Monitoring',
  ];

  const dataSources = [
    'Salesforce CRM',
    'HubSpot Marketing',
    'QuickBooks Financial',
    'Shopify E-commerce',
    'Google Analytics',
    'Social Media APIs',
    'Database Systems',
    'Cloud Applications',
    'IoT Devices',
    'Third-party APIs',
  ];

  const stack = [
    { name: 'Tableau', url: 'https://www.tableau.com/' },
    { name: 'Power BI', url: 'https://powerbi.microsoft.com/' },
    { name: 'Python ML', url: 'https://www.python.org/' },
    { name: 'TensorFlow', url: 'https://www.tensorflow.org/' },
    { name: 'Apache Spark', url: 'https://spark.apache.org/' },
    { name: 'Snowflake', url: 'https://www.snowflake.com/' },
    { name: 'AWS Redshift', url: 'https://aws.amazon.com/redshift/' },
    { name: 'Google BigQuery', url: 'https://cloud.google.com/bigquery' },
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Business Intelligence & Analytics</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your business data into actionable intelligence with AI-driven analytics, predictive insights, 
              and interactive visualizations. Make smarter decisions faster with our comprehensive BI platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                Get Analytics Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">
                Visit Site
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">AI Features</h3>
            </div>
            <ul className="space-y-3">
              {features.slice(0, 4).map((item) => (
                <li key={item} className="flex items-center text-slate-300">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Analytics Capabilities</h3>
            </div>
            <ul className="space-y-3">
              {analyticsCapabilities.slice(0, 5).map((item) => (
                <li key={item} className="flex items-center text-slate-300">
                  <CheckCircle className="h-5 w-5 text-purple-400 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Pricing</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li>Starter: $399/month (up to 5 users)</li>
              <li>Professional: $999/month (up to 25 users)</li>
              <li>Enterprise: $2,499/month (unlimited users)</li>
              <li>Custom: Tailored enterprise solutions</li>
            </ul>
            <div className="mt-6 text-sm text-slate-400">
              Avg. market reference: see <a className="text-cyan-400 hover:underline" href="https://www.gartner.com/en/documents/3991477" target="_blank" rel="noreferrer">Gartner BI Platforms</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-6">Platform Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-6 text-center">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Data Integration</h4>
              <p className="text-slate-300 text-sm">
                Connect to 100+ data sources with automated ETL processes
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-6 text-center">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">AI Analytics</h4>
              <p className="text-slate-300 text-sm">
                Machine learning models for prediction and pattern recognition
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-6 text-center">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Visualization</h4>
              <p className="text-slate-300 text-sm">
                Interactive dashboards and customizable charts
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-6 text-center">
              <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Insights</h4>
              <p className="text-slate-300 text-sm">
                Automated business insights and recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-4">Data Source Integrations</h3>
          <div className="flex flex-wrap gap-3">
            {dataSources.map((source) => (
              <span key={source} className="px-4 py-2 bg-slate-900/60 border border-slate-700/60 rounded-lg text-slate-300">
                {source}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-4">Tech Stack & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {stack.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="px-4 py-2 bg-slate-900/60 border border-slate-700/60 rounded-lg text-slate-300 hover:text-white hover:border-cyan-500">
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Unlock Your Business Intelligence</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
              Start Analytics Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="tel:+13024640950" className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">
              Call +1 302 464 0950
            </a>
          </div>
          <p className="text-slate-400 mt-6">
            Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a> for enterprise solutions
          </p>
        </div>
      </section>
    </div>
  );
}