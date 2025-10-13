import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star } from 'lucide-react';
const ProductivityPage: React.FC = () => {
<<<<<<< HEAD
=======
};
return (
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  return (
    <div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Page
  </
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Coming Soon,
  </
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            This page is under development. Please check back soon for updates.
          </p>
        </section>
<<<<<<< HEAD
        {/* Key Benefits */}
=======
);
};
        {/* Key Benefits */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
// Why Choose Our Productivity Tools?
          </h2>"
<div className="text-4xl mb-4">⚡</div>"
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered</h3>"
              <p className="text-gray-300 text-sm">Intelligent automation and insights powered by advanced AI</p>"
              <div className="text-4xl mb-4">🎯</div>"
              <h3 className="text-xl font-bold text-white mb-3">Focused Efficiency</h3>"
              <p className="text-gray-300 text-sm">Tools designed to eliminate distractions and boost focus</p>"
              <div className="text-4xl mb-4">📈</div>"
              <h3 className="text-xl font-bold text-white mb-3">Measurable Results</h3>"
              <p className="text-gray-300 text-sm">Track and measure your productivity improvements</p>"
              <div className="text-4xl mb-4">🔗</div>"
              <h3 className="text-xl font-bold text-white mb-3">Seamless Integration</h3>"
              <p className="text-gray-300 text-sm">Works with your existing tools and workflows</p>
        {/* Tools by Category */})
        {categories.map(category => ()}"
          <section key={category} className="mb-16"></section>"
            <h3 className="text-2xl font-bold text-white mb-8 text-center neon-text">{category} Tools</h3>
<<<<<<< HEAD
            <div>{
    productivityTools
  }
=======
            <div>{productivityTools};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                .filter(tool => tool.category === category)
                .map((tool, index) => ("
<div className="text-4xl mb-4 text-center">{tool.icon}</div>"
                    <h4 className="text-xl font-bold text-white mb-3 text-center">{tool.title}</h4>"
                    <p className="text-gray-300 mb-4 text-sm text-center">{tool.description}</p>"
                        <span className="text-2xl font-bold text-cyan-400">{tool.price}</span>"
                        <span className="text-sm text-gray-400">Marke,
  t: {tool.marketPrice}</span>
                      <div>Save up to 50% vs market rates</div>"
                      <h5 className="font-semibold text-white mb-2 text-sm">Key,
  Features:</h5>"
                      <ul className="space-y-1"></ul>)
                        {tool.features.slice(0, 3).map((feature, featureIndex) => ()}"
          <li key={featureIndex} className="flex items-center text-xs text-gray-300"></li>"
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" /></CheckCircle>
                            {feature};
                          </li>
                        ))};
                        {tool.features.length > 3 && (}"
<li className="text-xs text-gray-400">+{tool.features.length - 3} more features</li>)
                        )};
                      </ul>"
                      <h5 className="font-semibold text-white mb-2 text-sm">Benefit,
  s:</h5>
                        {tool.benefits.map((benefit, benefitIndex) => ()}"
          <li key={benefitIndex} className="flex items-center text-xs text-gray-300"></li>"
                            <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" /></Star>
                            {benefit}"
className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold,
  hover:from-cyan-600,"
  hover:to-blue-700 transition-all text-sm inline-block"
                      >Get This Tool</a>
        {/* CTA Section */}"
        <section className="text-center"></section>"
          <h2 className="text-3xl font-bold text-white mb-6 neon-text"></h2>
            Ready to Boost Your Productivity?"
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Get started with our productivity tools and transform how you work</p>
            >Get Started Today</a>"
              href="te,"
  l: +13024640950"
            >Call (302) 464-0950</a>
      </main>
      <Footer /></Footer>
<<<<<<< HEAD
</div>),
}
export default ProductivityPage;
  </section>
  </p>
  </h1>
  </div>
=======
</div>)};
export default ProductivityPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
