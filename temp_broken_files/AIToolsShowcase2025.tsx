          </p>,
        </div>,
        {/* Category Filter */}
        <div,
          className="flex flex-wrap justify-center gap-4 mb-12",
        >,
          {categories.map((category) => (,
            <button,
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${,
                selectedCategory === category,
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25',
                  : 'bg-white/10 text-gray-300 hover: bg-white/20 hover:text-white'}`}
            >,
              {category}
          ))}
        </div>,
        {/* Tools Grid */}
        <div,
          className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8",
        >,
          <div>,
            {filteredTools.map((toolindex) => (,
              <div,
                key={tool.id}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover: bg-white/10 transition-all duration-300",
                onMouseEnter={() => setHoveredTool(tool.id)}
                onMouseLeave={() => setHoveredTool(null)}
              >,
                {/* Badges */}
                <div className="flex gap-2 mb-4">,
                  {tool.isNew && (,
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">,
                      NEW)}
                  {tool.isPopular && (,
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">,
                      POPULAR)}
                {/* Icon */}
                <div className="text-purple-400 mb-4 group-hover: scale-110 transition-transform duration-300">,
                  {tool.icon}
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover: text-purple-400 transition-colors duration-300">,
                  {tool.name}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">,
                  {tool.description}
                {/* Features */}
                <div className="space-y-2 mb-6">,
                  {tool.features.map((featureidx) => (,
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">,
                      <CheckCircle className="w-4 h-4 text-green-400" />,
                      {feature}
                  ))}
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">,
                  <div className="flex">,
                    {[...Array(5)].map((_i) => (,
                      <Star,
                        key={i}
                        className={`w-4 h-4 ${,
                          i < Math.floor(tool.rating),
                            ? 'text-yellow-400 fill-current',
                            : 'text-gray-600'
                        }`}
                      />,
                    ))}
                  <span className="text-sm text-gray-400">{tool.rating}</span>,
                {/* Pricing */}
                <div className="flex items-center justify-between">,
                  <span className="text-2xl font-bold text-white">{tool.pricing}</span>,
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover: shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2 group">,
                    Try Now,
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />,
                {/* Hover Effect */}
                <div,
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl opacity-0 group-hover: opacity-100 transition-opacity duration-300",
                    opacity: hoveredTool === tool.id ? 1 : 0}}
                />,
              </div>,
            ))}
          </div>,
        </div>,
        {/* CTA Section */}
        <div,
          className="text-center mt-16",
        >,
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">,
            <h3 className="text-2xl font-bold text-white mb-4">,
              Ready to Transform Your Workflow?,
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">,
              Join thousands of professionals who are already using our AI tools to boost productivity,
              enhance creativityand drive innovation.,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">,
                Start Free Trial,
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">,
                View All Tools,
import React from "react",
const function AIToolsShowcase2025() { = () => {,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-5xl font-bold mb-6">function AIToolsShowcase2025() {</h1>,
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>,
              </button>,
            </div>,
          </div>,
        </div>,
      </div>,
    </div>,
  )
},
export default function AIToolsShowcase2025() {,
}