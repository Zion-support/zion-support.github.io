          </div>,
        </div>,
        {/* Services Grid */}
        <div className="grid lg: grid-cols-2 xl:grid-cols-3 gap-8 mb-16">,
          {filteredServices.map((serviceindex) => (,
            <div,
              key={service.id}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden hover: shadow-2xl transition-all duration-300 group ${,
                service.popular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}
            >,
              {/* Popular Badge */}
              {service.popular && (,
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">,
                  Most Popular)}
              {/* Header */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>,
                <div className="flex items-center justify-between mb-4">,
                  <service.icon className="w-8 h-8" />,
                  <span className="text-sm font-medium opacity-90">{service.category}</span>,
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>,
                <p className="text-white/90 text-sm leading-relaxed">{service.description}</p>,
              {/* Content */}
              <div className="p-6">,
                {/* Price */}
                <div className="mb-6">,
                  <div className="text-3xl font-bold text-gray-900 mb-1">{service.price}</div>,
                  <div className="text-sm text-gray-500">Starting price • No setup fees</div>,
                {/* Features */}
                <div className="space-y-3 mb-6">,
                  {service.features.map((featureIndex) => (,
                    <div key={featureIndex} className="flex items-center">,
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />,
                      <span className="text-gray-700 text-sm">{feature}</span>))}
                {/* CTA */}
                <a,
                  href={`/services/${service.id}`}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover: from-blue-700 hover:to-purple-700 text-white text-center py-3 rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center",
                >,
                  Get Started Now,
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />,
                </a>,
              </div>,
            </div>,
          ))}
        {/* Stats Section */}
        <div,
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16",
        >,
          <div className="text-center mb-8">,
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Results Across Industries</h3>,
            <p className="text-gray-600">Our solutions deliver measurable impact for businesses worldwide</p>,
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8">,
            <div className="text-center">,
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>,
              <div className="text-sm text-gray-600">Projects Completed</div>,
            <div className="text-center">,
              <div className="text-4xl font-bold text-green-600 mb-2">250%</div>,
              <div className="text-sm text-gray-600">Average ROI</div>,
            <div className="text-center">,
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>,
              <div className="text-sm text-gray-600">Client Satisfaction</div>,
            <div className="text-center">,
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>,
              <div className="text-sm text-gray-600">Countries Served</div>,
            </div>,
          </div>,
        </div>,
        {/* CTA Section */}
        <div,
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white",
        >,
          <h3 className="text-2xl md: text-3xl font-bold mb-4">,
            Ready to Transform Your Business?,
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">,
            Join thousands of businesses already achieving extraordinary results with our AI solutions.,
            Get a free consultation and custom implementation plan.,
          <div className="flex flex-col sm:flex-row gap-4 justify-center">,
            <a,
              href="/contact",
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center",
            >,
              <Zap className="w-5 h-5 mr-2" />,
              Get Free Consultation,
            <a,
              href="/case-studies",
              className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center justify-center",
            >,
              <TrendingUp className="w-5 h-5 mr-2" />,
              View Success Stories,
            </a>,
          </div>,
        </div>,
      </div>,
    </section>,
  ),
export default UltimateServicesShowcase2025,
import React from "react",
const function UltimateServicesShowcase2025() { = () => {,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-5xl font-bold mb-6">function UltimateServicesShowcase2025() {</h1>,
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
  )
},
export default function UltimateServicesShowcase2025() {,
}}}