import React from 'react';
import { 
  Brain, 
  TrendingUp, 
  Users, 
  Target, 
  Zap, 
  BarChart3, 
  MessageCircle, 
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Rocket
} from 'lucide-react';

export default function AISalesCopilotPage() {
  return (
    <div className="min-h-screen bg-zion-slate-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Sales Solution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Sales Copilot
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Transform your sales process with intelligent automation, predictive analytics, and personalized customer engagement powered by cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-zion-purple text-zion-purple font-semibold rounded-lg hover:bg-zion-purple hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features That Drive Results
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Our AI Sales Copilot combines advanced machine learning with proven sales methodologies to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/30">
              <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Intelligent Lead Scoring</h3>
              <p className="text-zion-slate-light">
                AI-powered lead scoring that analyzes behavior patterns, engagement metrics, and conversion likelihood to prioritize your best prospects.
              </p>
            </div>

            <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/30">
              <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Automated Outreach</h3>
              <p className="text-zion-slate-light">
                Personalized email sequences, follow-up reminders, and multi-channel communication that adapts to customer preferences and responses.
              </p>
            </div>

            <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/30">
              <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
              <p className="text-zion-slate-light">
                Advanced analytics that forecast sales trends, identify opportunities, and provide actionable insights to optimize your sales strategy.
              </p>
            </div>

            <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/30">
              <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Segmentation</h3>
              <p className="text-zion-slate-light">
                Dynamic customer segmentation based on behavior, demographics, and engagement patterns for highly targeted campaigns.
              </p>
            </div>

            <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/30">
              <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Insights</h3>
              <p className="text-zion-slate-light">
                Live dashboards and notifications that keep your team informed about opportunities, conversions, and performance metrics.
              </p>
            </div>

            <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/30">
              <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">CRM Integration</h3>
              <p className="text-zion-slate-light">
                Seamless integration with popular CRM systems, ensuring data consistency and streamlined workflows across your sales operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose AI Sales Copilot?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Increase Conversion Rates</h3>
                    <p className="text-zion-slate-light">
                      Boost your conversion rates by up to 300% with AI-powered lead scoring and personalized outreach strategies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Reduce Sales Cycle Time</h3>
                    <p className="text-zion-slate-light">
                      Accelerate deal closure with intelligent automation that handles routine tasks and focuses your team on high-value activities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Improve Customer Experience</h3>
                    <p className="text-zion-slate-light">
                      Deliver personalized, timely interactions that build stronger relationships and increase customer satisfaction.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Data-Driven Decisions</h3>
                    <p className="text-zion-slate-light">
                      Make informed decisions with comprehensive analytics and insights that reveal hidden opportunities and optimize performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-purple/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Metrics</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-zion-cyan mb-2">300%</div>
                  <div className="text-zion-slate-light">Increase in Conversion Rates</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-zion-cyan mb-2">50%</div>
                  <div className="text-zion-slate-light">Reduction in Sales Cycle</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-zion-cyan mb-2">85%</div>
                  <div className="text-zion-slate-light">Improvement in Lead Quality</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-zion-cyan mb-2">24/7</div>
                  <div className="text-zion-slate-light">Automated Engagement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Join thousands of companies that have already revolutionized their sales operations with AI Sales Copilot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
            <button className="px-8 py-4 border border-zion-purple text-zion-purple font-semibold rounded-lg hover:bg-zion-purple hover:text-white transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}