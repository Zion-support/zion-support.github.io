import Link from &quot;next/link&quot;;

export const metadata = {
  title: &quot;AI Business Intelligence - Zion Tech Group&quot;,
  description: &quot;Transform your business with AI-powered analytics, predictive insights, and intelligent decision-making solutions.&quot;,
  keywords: &quot;AI business intelligence, predictive analytics, data insights, business analytics, Zion Tech Group&quot;};

export default function AIBusinessIntelligencePage() {
  return (
    <div className=&quot;min-h-screen py-20 px-4 sm:px-6 lg:px-8&quot;>
      <div className=&quot;max-w-7xl mx-auto&quot;>
        {/* Hero Section */}
        <div className=&quot;text-center mb-16&quot;>
          <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6&quot;>
            <span className=&quot;gradient-text&quot;>AI Business Intelligence</span>
          </h1>
          <p className=&quot;text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed&quot;>
            Unlock the power of your data with AI-driven business intelligence that transforms raw information 
            into actionable insights and predictive intelligence.
          </p>
        </div>

        {/* Overview Section */}
        <section className=&quot;mb-20&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12 items-center&quot;>
            <div>
              <h2 className=&quot;text-3xl font-bold mb-6&quot;>Intelligent Data Analytics</h2>
              <p className=&quot;text-lg text-gray-300 mb-6&quot;>
                Our AI Business Intelligence platform goes beyond traditional analytics to provide real-time insights, 
                predictive modeling, and automated decision-making capabilities that drive business growth.
              </p>
              <p className=&quot;text-lg text-gray-300 mb-8&quot;>
                From customer behavior analysis to market trend prediction, our AI solutions help organizations 
                make data-driven decisions with confidence and speed.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4&quot;>
                <Link href=&quot;/contact&quot; className=&quot;btn-primary&quot;>
                  Get AI Demo
                </Link>
                <Link href=&quot;/case-studies&quot; className=&quot;btn-secondary&quot;>
                  View Success Stories
                </Link>
              </div>
            </div>
            <div className=&quot;card bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30 p-8&quot;>
              <h3 className=&quot;text-2xl font-bold mb-4&quot;>AI Capabilities</h3>
              <ul className=&quot;space-y-3 text-gray-300&quot;>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-purple-400 mr-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z&quot; />
                  </svg>
                  Predictive analytics
                </li>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-purple-400 mr-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z&quot; />
                  </svg>
                  Natural language processing
                </li>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-purple-400 mr-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z&quot; />
                  </svg>
                  Automated reporting
                </li>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-purple-400 mr-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z&quot; />
                  </svg>
                  Real-time insights
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className=&quot;mb-20&quot;>
          <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>AI Business Intelligence Solutions</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {/* Predictive Analytics */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-blue-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 7h8m0 0v8m0-8l-8 8-4-4-6 6&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Predictive Analytics</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Forecast future trends and outcomes using advanced machine learning algorithms and historical data analysis.
              </p>
              <ul className=&quot;text-sm text-gray-300 space-y-1 mb-4&quot;>
                <li>• Market trend prediction</li>
                <li>• Customer behavior forecasting</li>
                <li>• Risk assessment models</li>
                <li>• Demand forecasting</li>
              </ul>
            </div>

            {/* Natural Language Analytics */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-green-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Natural Language Analytics</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Analyze unstructured text data from customer feedback, social media, and documents using NLP.
              </p>
              <ul className=&quot;text-sm text-gray-300 space-y-1 mb-4&quot;>
                <li>• Sentiment analysis</li>
                <li>• Text classification</li>
                <li>• Entity extraction</li>
                <li>• Topic modeling</li>
              </ul>
            </div>

            {/* Automated Reporting */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-purple-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Automated Reporting</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Generate comprehensive reports automatically with AI-powered insights and customizable dashboards.
              </p>
              <ul className=&quot;text-sm text-gray-300 space-y-1 mb-4&quot;>
                <li>• Real-time dashboards</li>
                <li>• Custom report builder</li>
                <li>• Automated insights</li>
                <li>• Interactive visualizations</li>
              </ul>
            </div>

            {/* Customer Intelligence */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-yellow-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Customer Intelligence</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Deep insights into customer behavior, preferences, and lifetime value using AI analytics.
              </p>
              <ul className=&quot;text-sm text-gray-300 space-y-1 mb-4&quot;>
                <li>• Customer segmentation</li>
                <li>• Churn prediction</li>
                <li>• Lifetime value analysis</li>
                <li>• Behavioral patterns</li>
              </ul>
            </div>

            {/* Market Intelligence */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-red-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Market Intelligence</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Comprehensive market analysis and competitive intelligence powered by AI and big data.
              </p>
              <ul className=&quot;text-sm text-gray-300 space-y-1 mb-4&quot;>
                <li>• Competitive analysis</li>
                <li>• Market trend monitoring</li>
                <li>• Opportunity identification</li>
                <li>• Risk assessment</li>
              </ul>
            </div>

            {/* Operational Intelligence */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-indigo-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z&quot; />
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M15 12a3 3 0 11-6 0 3 3 0 016 0z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Operational Intelligence</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Real-time monitoring and optimization of business operations using AI-powered analytics.
              </p>
              <ul className=&quot;text-sm text-gray-300 space-y-1 mb-4&quot;>
                <li>• Performance monitoring</li>
                <li>• Process optimization</li>
                <li>• Anomaly detection</li>
                <li>• Resource allocation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className=&quot;mb-20&quot;>
          <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>AI Technology Stack</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
            <div className=&quot;card text-center p-6&quot;>
              <h4 className=&quot;font-semibold mb-2&quot;>Machine Learning</h4>
              <p className=&quot;text-sm text-gray-400&quot;>TensorFlow, PyTorch, scikit-learn</p>
            </div>
            <div className=&quot;card text-center p-6&quot;>
              <h4 className=&quot;font-semibold mb-2&quot;>Data Processing</h4>
              <p className=&quot;text-sm text-gray-400&quot;>Apache Spark, Hadoop, Pandas</p>
            </div>
            <div className=&quot;card text-center p-6&quot;>
              <h4 className=&quot;font-semibold mb-2&quot;>NLP & Text Analytics</h4>
              <p className=&quot;text-sm text-gray-400&quot;>BERT, GPT, spaCy, NLTK</p>
            </div>
            <div className=&quot;card text-center p-6&quot;>
              <h4 className=&quot;font-semibold mb-2&quot;>Visualization</h4>
              <p className=&quot;text-sm text-gray-400&quot;>Tableau, Power BI, D3.js</p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className=&quot;mb-20&quot;>
          <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>Industry Applications</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <div className=&quot;card bg-gradient-to-r from-blue-600/20 to-green-600/20 border-blue-500/30&quot;>
              <h3 className=&quot;text-xl font-bold mb-3&quot;>Retail & E-commerce</h3>
              <p className=&quot;text-gray-300 text-sm&quot;>
                Customer segmentation, demand forecasting, inventory optimization, and personalized marketing.
              </p>
            </div>
            <div className=&quot;card bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30&quot;>
              <h3 className=&quot;text-xl font-bold mb-3&quot;>Financial Services</h3>
              <p className=&quot;text-gray-300 text-sm&quot;>
                Risk assessment, fraud detection, market analysis, and customer credit scoring.
              </p>
            </div>
            <div className=&quot;card bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30&quot;>
              <h3 className=&quot;text-xl font-bold mb-3&quot;>Healthcare</h3>
              <p className=&quot;text-gray-300 text-sm&quot;>
                Patient outcome prediction, drug discovery, medical imaging analysis, and operational efficiency.
              </p>
            </div>
            <div className=&quot;card bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-yellow-500/30&quot;>
              <h3 className=&quot;text-xl font-bold mb-3&quot;>Manufacturing</h3>
              <p className=&quot;text-gray-300 text-sm&quot;>
                Predictive maintenance, quality control, supply chain optimization, and production planning.
              </p>
            </div>
            <div className=&quot;card bg-gradient-to-r from-red-600/20 to-pink-600/20 border-red-500/30&quot;>
              <h3 className=&quot;text-xl font-bold mb-3&quot;>Marketing & Advertising</h3>
              <p className=&quot;text-gray-300 text-sm&quot;>
                Campaign optimization, audience targeting, ROI analysis, and creative performance insights.
              </p>
            </div>
            <div className=&quot;card bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-indigo-500/30&quot;>
              <h3 className=&quot;text-xl font-bold mb-3&quot;>Logistics & Transportation</h3>
              <p className=&quot;text-gray-300 text-sm&quot;>
                Route optimization, demand forecasting, fleet management, and supply chain analytics.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className=&quot;mb-20&quot;>
          <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>Why Choose AI Business Intelligence?</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-bold mb-4&quot;>Data-Driven Decisions</h3>
              <p className=&quot;text-gray-300&quot;>
                Transform raw data into actionable insights that drive strategic business decisions and improve outcomes.
              </p>
            </div>
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-bold mb-4&quot;>Predictive Capabilities</h3>
              <p className=&quot;text-gray-300&quot;>
                Anticipate future trends and customer needs with advanced predictive analytics and machine learning.
              </p>
            </div>
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-bold mb-4&quot;>Real-Time Insights</h3>
              <p className=&quot;text-gray-300&quot;>
                Access up-to-the-minute business intelligence with real-time data processing and automated reporting.
              </p>
            </div>
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-bold mb-4&quot;>Cost Reduction</h3>
              <p className=&quot;text-gray-300&quot;>
                Optimize operations and reduce costs through intelligent automation and data-driven process improvements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;text-center&quot;>
          <div className=&quot;card bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30 max-w-4xl mx-auto&quot;>
            <h2 className=&quot;text-3xl font-bold mb-4&quot;>Ready to Transform Your Business Intelligence?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Discover how AI-powered business intelligence can unlock new insights and drive growth for your organization.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link href=&quot;/contact&quot; className=&quot;btn-primary&quot;>
                Get AI Demo
              </Link>
              <Link href=&quot;/case-studies&quot; className=&quot;btn-secondary&quot;>
                View Success Stories
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}