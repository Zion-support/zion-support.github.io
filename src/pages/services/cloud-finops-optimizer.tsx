import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  TrendingDown, 
  BarChart3, 
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
  TrendingUp,
  DollarSign,
  Settings,
  Target,
  Activity
} from 'lucide-react';

export default function CloudFinOpsOptimizer() {
  return (
    <>
      <Helmet>
        <title>Cloud FinOps Optimizer - Cloud Cost Management & Optimization | Zion Tech Group</title>
        <meta name="description" content="Optimize your cloud costs with AI-powered FinOps automation. Reduce cloud spending by 30-50%, improve resource utilization, and gain real-time cost visibility." />
        <meta name="keywords" content="cloud FinOps, cloud cost optimization, AWS cost management, Azure cost optimization, cloud spending, resource optimization, cost allocation" />
        <link rel="canonical" href="https://ziontechgroup.com/services/cloud-finops-optimizer" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-darker">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-8">
                <Cloud className="w-4 h-4 mr-2" />
                AI-Powered Cloud Cost Optimization
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cloud FinOps Optimizer
                <span className="block text-zion-cyan">Maximize Cloud ROI, Minimize Waste</span>
              </h1>
              
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Transform your cloud financial operations with AI-powered optimization. Reduce cloud costs by 30-50%, 
                improve resource utilization, and gain real-time visibility into your cloud spending.
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
                Why Choose Cloud FinOps Optimizer?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Take control of your cloud costs with intelligent automation and data-driven insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingDown className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cost Reduction</h3>
                <p className="text-zion-slate-light">
                  Reduce cloud costs by 30-50% through intelligent resource optimization and waste elimination.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Real-time Visibility</h3>
                <p className="text-zion-slate-light">
                  Gain complete visibility into cloud spending with real-time dashboards and detailed cost breakdowns.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Resource Optimization</h3>
                <p className="text-zion-slate-light">
                  Automatically optimize resource allocation and sizing based on actual usage patterns and demand.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Multi-Cloud Support</h3>
                <p className="text-zion-slate-light">
                  Optimize costs across all major cloud providers from a single unified platform.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Performance Optimization</h3>
                <p className="text-zion-slate-light">
                  Improve application performance while reducing costs through intelligent resource management.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Security & Compliance</h3>
                <p className="text-zion-slate-light">
                  Maintain security and compliance while optimizing costs with built-in governance controls.
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
                Powerful FinOps Features
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Everything you need to optimize your cloud financial operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">AI-Powered Cost Optimization</h3>
                      <p className="text-zion-slate-light">
                        Machine learning algorithms analyze usage patterns and automatically recommend cost-saving opportunities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Automated Resource Management</h3>
                      <p className="text-zion-slate-light">
                        Automatically scale resources up and down based on demand, eliminating waste and improving efficiency.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Cost Allocation & Chargeback</h3>
                      <p className="text-zion-slate-light">
                        Accurately allocate costs to teams, projects, and business units with automated tagging and reporting.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Reserved Instance Optimization</h3>
                      <p className="text-zion-slate-light">
                        Maximize savings with intelligent reserved instance recommendations and automated purchasing.
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
                  <h3 className="text-2xl font-bold text-white mb-4">Cost Analytics Dashboard</h3>
                  <p className="text-zion-slate-light mb-6">
                    Comprehensive cost analytics with drill-down capabilities and trend analysis.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-zion-cyan">40%</div>
                      <div className="text-sm text-zion-slate-light">Average Cost Reduction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-zion-cyan">85%</div>
                      <div className="text-sm text-zion-slate-light">Resource Utilization</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Clouds */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Supported Cloud Platforms
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Optimize costs across all major cloud providers from a single unified platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Amazon Web Services</h3>
                <p className="text-sm text-zion-slate-light">EC2, RDS, S3, Lambda, ECS</p>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Microsoft Azure</h3>
                <p className="text-sm text-zion-slate-light">Virtual Machines, SQL Database, Blob Storage</p>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Google Cloud Platform</h3>
                <p className="text-sm text-zion-slate-light">Compute Engine, Cloud SQL, Cloud Storage</p>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Other Clouds</h3>
                <p className="text-sm text-zion-slate-light">IBM Cloud, Oracle Cloud, DigitalOcean</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Choose the plan that fits your cloud infrastructure. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">$149</div>
                  <div className="text-zion-slate-light">per month</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Up to $50K monthly cloud spend
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Basic cost optimization
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Single cloud provider
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Standard reporting
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
                  <div className="text-4xl font-bold text-zion-cyan mb-2">$399</div>
                  <div className="text-zion-slate-light">per month</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Up to $500K monthly cloud spend
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Advanced AI optimization
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Multi-cloud support
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Priority support
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Cost allocation
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
                    Unlimited cloud spend
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
              Ready to Optimize Your Cloud Costs?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of organizations who have already reduced their cloud spending with AI-powered optimization.
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