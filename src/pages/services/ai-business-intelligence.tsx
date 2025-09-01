import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe, 
  Lock,
  CheckCircle,
  ArrowRight,
  Play,
  Users,
  Clock,
  Star,
  Headphones,
  Database,
  Eye,
  Search,
  Target,
  Activity,
  PieChart,
  LineChart,
  Calendar,
  FileText,
  Settings,
  Cpu,
  Lightbulb,
  Rocket,
  Target as TargetIcon,
  BarChart,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  Activity as ActivityIcon
} from 'lucide-react';

export default function AIBusinessIntelligence() {
  return (
    <>
      <Helmet>
        <title>AI Business Intelligence - Smart Analytics & Insights Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with AI-powered business intelligence. Automated reporting, predictive analytics, and real-time dashboards for data-driven decisions." />
        <meta name="keywords" content="AI business intelligence, data analytics, predictive analytics, business insights, data visualization, automated reporting, BI platform" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-business-intelligence" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-darker">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-8">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Business Intelligence
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Business Intelligence
                <span className="block text-zion-cyan">Transform Data into Actionable Insights</span>
              </h1>
              
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Unlock the power of your data with AI-driven business intelligence. Get automated insights, 
                predictive analytics, and real-time dashboards that drive smarter business decisions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="#demo" 
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI Business Intelligence?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Make data-driven decisions with intelligent automation and advanced analytics
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Insights</h3>
                <p className="text-zion-slate-light">
                  Machine learning algorithms automatically discover patterns and generate actionable business insights.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
                <p className="text-zion-slate-light">
                  Forecast trends, identify opportunities, and predict outcomes with advanced statistical modeling.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Real-time Dashboards</h3>
                <p className="text-zion-slate-light">
                  Live data visualization with customizable dashboards that update automatically.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Automated Reporting</h3>
                <p className="text-zion-slate-light">
                  Generate comprehensive reports automatically with intelligent scheduling and distribution.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Multi-Data Source</h3>
                <p className="text-zion-slate-light">
                  Connect and analyze data from databases, APIs, cloud services, and business applications.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-zion-slate-light">
                  Role-based access control, data encryption, and compliance with industry standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful BI Features
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Everything you need to transform raw data into strategic insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Natural Language Query</h3>
                      <p className="text-zion-slate-light">
                        Ask questions in plain English and get instant answers from your data with AI-powered query processing.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Advanced Data Visualization</h3>
                      <p className="text-zion-slate-light">
                        Create stunning charts, graphs, and interactive visualizations with drag-and-drop simplicity.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Data Storytelling</h3>
                      <p className="text-zion-slate-light">
                        Automatically generate narrative insights and explanations for your data findings.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Collaborative Analytics</h3>
                      <p className="text-zion-slate-light">
                        Share insights, collaborate on reports, and build knowledge across your organization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Analytics Dashboard</h3>
                  <p className="text-zion-slate-light mb-6">
                    Comprehensive analytics with real-time data processing and intelligent insights.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-zion-cyan">10x</div>
                      <div className="text-sm text-zion-slate-light">Faster Insights</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-zion-cyan">95%</div>
                      <div className="text-sm text-zion-slate-light">Accuracy Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Sources */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Connect Any Data Source
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Seamlessly integrate with your existing data infrastructure and applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Databases</h3>
                <p className="text-sm text-zion-slate-light">MySQL, PostgreSQL, MongoDB, SQL Server</p>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Cloud Services</h3>
                <p className="text-sm text-zion-slate-light">AWS, Azure, Google Cloud, Salesforce</p>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">File Formats</h3>
                <p className="text-sm text-zion-slate-light">CSV, Excel, JSON, XML, Parquet</p>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">APIs & Webhooks</h3>
                <p className="text-sm text-zion-slate-light">REST APIs, GraphQL, WebSocket</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Use Cases
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Discover how AI Business Intelligence transforms different industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">E-commerce & Retail</h3>
                <p className="text-zion-slate-light mb-4">
                  Customer behavior analysis, inventory optimization, and sales forecasting.
                </p>
                <ul className="text-sm text-zion-slate-light space-y-1">
                  <li>• Customer segmentation</li>
                  <li>• Demand forecasting</li>
                  <li>• Price optimization</li>
                </ul>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Healthcare</h3>
                <p className="text-zion-slate-light mb-4">
                  Patient outcomes analysis, resource optimization, and predictive diagnostics.
                </p>
                <ul className="text-sm text-zion-slate-light space-y-1">
                  <li>• Patient risk assessment</li>
                  <li>• Resource allocation</li>
                  <li>• Treatment effectiveness</li>
                </ul>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Manufacturing</h3>
                <p className="text-zion-slate-light mb-4">
                  Predictive maintenance, quality control, and supply chain optimization.
                </p>
                <ul className="text-sm text-zion-slate-light space-y-1">
                  <li>• Equipment monitoring</li>
                  <li>• Quality prediction</li>
                  <li>• Supply optimization</li>
                </ul>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Financial Services</h3>
                <p className="text-zion-slate-light mb-4">
                  Risk assessment, fraud detection, and investment portfolio analysis.
                </p>
                <ul className="text-sm text-zion-slate-light space-y-1">
                  <li>• Credit risk modeling</li>
                  <li>• Fraud detection</li>
                  <li>• Portfolio optimization</li>
                </ul>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">SaaS & Technology</h3>
                <p className="text-zion-slate-light mb-4">
                  User behavior analysis, product performance, and growth optimization.
                </p>
                <ul className="text-sm text-zion-slate-light space-y-1">
                  <li>• User engagement</li>
                  <li>• Feature adoption</li>
                  <li>• Churn prediction</li>
                </ul>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Marketing & Sales</h3>
                <p className="text-zion-slate-light mb-4">
                  Campaign performance, lead scoring, and customer lifetime value analysis.
                </p>
                <ul className="text-sm text-zion-slate-light space-y-1">
                  <li>• Campaign ROI</li>
                  <li>• Lead qualification</li>
                  <li>• Customer segmentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Choose the plan that fits your analytics needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">$199</div>
                  <div className="text-zion-slate-light">per month</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Up to 5 users
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Basic AI insights
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    10 data sources
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Standard dashboards
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Email support
                  </li>
                </ul>
                
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
                >
                  Start Free Trial
                </a>
              </div>
              
              {/* Professional Plan */}
              <div className="bg-zion-blue-dark/50 border-2 border-zion-cyan rounded-xl p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">$499</div>
                  <div className="text-zion-slate-light">per month</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Up to 25 users
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Advanced AI analytics
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Unlimited data sources
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Custom dashboards
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Priority support
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Predictive analytics
                  </li>
                </ul>
                
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
                >
                  Start Free Trial
                </a>
              </div>
              
              {/* Enterprise Plan */}
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">Custom</div>
                  <div className="text-zion-slate-light">contact us</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Unlimited users
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Custom AI models
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    White-label solutions
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    24/7 phone support
                  </li>
                </ul>
                
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data into Insights?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of organizations who have already unlocked the power of AI-driven business intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
              >
                <Headphones className="w-5 h-5 mr-2" />
                Call +1 (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}