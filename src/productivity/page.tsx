
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ProductivityPage: React.FC = () => {
      return (
    <div>
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">Productivity Tools</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">AI-powered productivity tools to streamline your workflow, boost efficiency, and achieve more in less time</p>
          <div>
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >Get Productivity Suite</a>
            <a
              href="/micro-saas"
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all"
            >View All Tools</a>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Our Productivity Tools?
          </h2>
          <div>
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered</h3>
              <p className="text-gray-300 text-sm">Intelligent automation and insights powered by advanced AI</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Focused Efficiency</h3>
              <p className="text-gray-300 text-sm">Tools designed to eliminate distractions and boost focus</p>
            </div>
            <div>
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Measurable Results</h3>
              <p className="text-gray-300 text-sm">Track and measure your productivity improvements</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-white mb-3">Seamless Integration</h3>
              <p className="text-gray-300 text-sm">Works with your existing tools and workflows</p>
            </div>
          </div>
        </section>

        {/* Tools by Category */}
        {categories.map(category => (
          <section key={category} className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center neon-text">{category} Tools</h3>
            <div>{productivityTools
                .filter(tool => tool.category === category)
                .map((tool, index) => (
                  <div>
                    <div className="text-4xl mb-4 text-center">{tool.icon}</div>
                    <h4 className="text-xl font-bold text-white mb-3 text-center">{tool.title}</h4>
                    <p className="text-gray-300 mb-4 text-sm text-center">{tool.description}</p>
                    
                    <div>
                      <div>
                        <span className="text-2xl font-bold text-cyan-400">{tool.price}</span>
                        <span className="text-sm text-gray-400">Market: {tool.marketPrice}</span>
                      </div>
                      <div>Save up to 50% vs market rates</div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-2 text-sm">Key Features:</h5>
                      <ul className="space-y-1">
                        {tool.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {tool.features.length > 3 && (
                          <li className="text-xs text-gray-400">+{tool.features.length - 3} more features</li>
                        )}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-2 text-sm">Benefits:</h5>
                      <ul className="space-y-1">
                        {tool.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                            <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <a
                        href="/contact"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all text-sm inline-block"
                      >Get This Tool</a>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Get started with our productivity tools and transform how you work</p>
          <div>
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >Get Started Today</a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all"
            >Call (302) 464-0950</a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>);
}
export default ProductivityPage